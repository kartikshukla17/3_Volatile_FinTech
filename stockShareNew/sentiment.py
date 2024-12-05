import json
from bs4 import BeautifulSoup
from textblob import TextBlob

# Load the HTML file
with open("data/moneycontrol.html", "r", encoding='utf-8') as f: 
    html_doc = f.read()

# Parse the HTML document
soup = BeautifulSoup(html_doc, 'html.parser')

# Extracting title
title = soup.title.string if soup.title else 'No title found'

# Extracting meta description
meta_description = soup.find('meta', attrs={'name': 'description'})
meta_description_content = meta_description['content'] if meta_description else 'No description found'

# Extracting Open Graph image URL
og_image = soup.find('meta', property='og:image')
og_image_url = og_image['content'] if og_image else 'No image found'

# Extracting navigation links
nav_links = soup.find_all('a', href=True)
navigation_links = [(link.text.strip(), link['href']) for link in nav_links if link.text.strip()]

# Perform sentiment analysis on the title and description
text_to_analyze = f"{title} {meta_description_content}"
analysis = TextBlob(text_to_analyze)
sentiment_score = analysis.sentiment.polarity  # Ranges from -1 (negative) to 1 (positive)

# Structuring the data for JSON
data_to_store = {
    "title": title,
    "description": meta_description_content,
    "og_image": og_image_url,
    "navigation_links": navigation_links,
    "sentiment_score": sentiment_score
}

# Write the structured data to a JSON file
with open("data/scraped_data.json", "w", encoding='utf-8') as json_file:
    json.dump(data_to_store, json_file, ensure_ascii=False, indent=4)

print("Data has been successfully written to scraped_data.json")
print(sentiment_score)