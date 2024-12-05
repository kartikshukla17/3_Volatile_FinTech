import os
import requests
from bs4 import BeautifulSoup
import google.generativeai as genai
import json
from datetime import datetime
from urllib.parse import urlparse

# Configure Gemini API
genai.configure(api_key="AIzaSyD5D8dC7adsbUO7eN32N5czeZTJizCeSQU")
model = genai.GenerativeModel("gemini-1.5-flash")

def extract_data_from_html(file_path):
    """
    Extracts article data (title, link, summary) from an HTML file for different websites.
    """
    with open(file_path, "r", encoding="utf-8") as f:
        html_doc = f.read()

    soup = BeautifulSoup(html_doc, "html.parser")
    extracted_data = []

    try:
        # MoneyControl
        for item in soup.find_all("h3", class_="related_des"):
            link = item.find("a")["href"]
            title = item.find("a")["title"]
            summary = item.get_text(strip=True)
            timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
            extracted_data.append({"title": title, "link": link, "summary": summary, "timestamp": timestamp})
    except Exception as e:
        print(f"Error parsing MoneyControl: {e}")

    try:
        # LiveMint
        for item in soup.find_all("h2"):
            a_tag = item.find("a")
            if a_tag and a_tag.get("href"):
                link = a_tag["href"]
                title = a_tag.get_text(strip=True)
                summary = title  # Reuse title as summary
                timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
                extracted_data.append({"title": title, "link": link, "summary": summary, "timestamp": timestamp})
    except Exception as e:
        print(f"Error parsing LiveMint: {e}")

    try:
        # Economic Times
        for item in soup.find_all("a", class_="font_faus wrapLines l1"):
            link = item["href"]
            title = item.get("title", "")
            summary = item.get_text(strip=True)
            timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
            extracted_data.append({"title": title, "link": link, "summary": summary, "timestamp": timestamp})
    except Exception as e:
        print(f"Error parsing Economic Times: {e}")

    return extracted_data

def save_data_to_json(data, output_file):
    """
    Saves the extracted data to a JSON file.
    """
    if os.path.exists(output_file) and os.path.getsize(output_file) > 0:
        # Load existing data
        try:
            with open(output_file, "r", encoding="utf-8") as json_file:
                existing_data = json.load(json_file)
        except json.JSONDecodeError:
            print(f"Warning: {output_file} contains invalid JSON. Overwriting with new data.")
            existing_data = []
    else:
        existing_data = []

    # Combine existing data with new data
    existing_data.extend(data)

    # Save combined data back to the file
    with open(output_file, "w", encoding="utf-8") as json_file:
        json.dump(existing_data, json_file, ensure_ascii=False, indent=4)
    print(f"Data saved to {output_file}")

def summarize_with_gemini(content, max_words=100):
    """
    Summarizes content using Google's Gemini model and limits the summary to a specific number of words.
    """
    try:
        # Define a well-structured prompt
        prompt = (
            "Summarize the following article in a clear and concise manner. Focus on:\n\n"
            "1. The main topic.\n"
            "2. Key facts and details.\n"
            "3. Expert opinions or conclusions.\n"
            "4. Important updates or recommendations.\n\n"
            "Here is the article:\n\n"
            f"{content}\n\n"
            "Provide the summary below:"
        )

        # Generate the summary using the Gemini model
        response = model.generate_content(prompt)
        summary = response.text.strip()

        # Ensure summary is non-empty
        if summary:
            # Limit the summary to the specified word count
            summary_words = summary.split()
            if len(summary_words) > max_words:
                summary = " ".join(summary_words[:max_words]) + "..."
            return summary
        else:
            return "Summary could not be generated."

    except Exception as e:
        print(f"Error generating summary with Gemini: {e}")
        return "Error generating summary."

def scrape_content(url):
    """
    Scrapes the content of a webpage.
    """
    parsed_url = urlparse(url)
    
    if not parsed_url.scheme or not parsed_url.netloc:
        print(f"Skipping incomplete URL: {url}")
        return None
    
    print(f"Requesting URL: {url}")
    try:
        response = requests.get(url)
        response.raise_for_status()
        last_modified = response.headers.get('Last-Modified')
        if last_modified:
            print(f"Last Modified for {url}: {last_modified}")
        return response.text
    except requests.RequestException as e:
        print(f"Failed to fetch URL: {url} ({e})")
        return None

def update_json_with_summaries(json_file):
    """
    Updates the JSON with detailed AI-generated summaries.
    """
    try:
        with open(json_file, 'r') as f:
            data = json.load(f)
    except FileNotFoundError:
        print(f"{json_file} not found.")
        return

    for index, article in enumerate(data):
        link = article.get("link")
        if not link:
            print("Article missing 'link' field; skipping.")
            continue
        
        content = scrape_content(link)
        if content is None:
            continue
        
        print(f"Summarizing content for: {link}")
        summary = summarize_with_gemini(content)
        
        # Only update summary if Gemini generated a non-empty summary
        if summary:
            article["summary"] = summary

        # Save the updated article back to the file in real-time
        try:
            with open(json_file, 'w') as f:
                json.dump(data, f, indent=4)
            print(f"Updated article {index + 1} saved to JSON!")
        except Exception as e:
            print(f"Error saving JSON file: {e}")

def main():
    # Files to process
    files = ["data/moneycontrol.html", "data/livemint.html", "data/economictimes.html", "data/cnbc.html"]  # Add other HTML files as needed
    output_file = "scraped_articles.json"  # JSON file to save data

    all_extracted_data = []

    # Extract data from HTML files
    for file in files:
        if os.path.exists(file):  # Check if the file exists
            data = extract_data_from_html(file)
            print(f"Extracted {len(data)} articles from {file}")
            all_extracted_data.extend(data)
        else:
            print(f"File not found: {file}")

    # Save all extracted data to JSON
    save_data_to_json(all_extracted_data, output_file)

    # Update JSON with AI-generated summaries
    update_json_with_summaries(output_file)

if __name__ == "__main__":
    main()
