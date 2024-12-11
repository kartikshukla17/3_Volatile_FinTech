import requests

# Function to analyze sentiment using Gemini AI
def analyze_sentiment_with_gemini(text, gemini_api_url, api_key):
    """
    Sends text to the Gemini AI API for sentiment analysis.
    
    Args:
        text (str): The text to analyze.
        gemini_api_url (str): The endpoint of the Gemini AI sentiment analysis API.
        api_key (str): The API key for authenticating with Gemini AI.
    
    Returns:
        str: Sentiment result ('Positive', 'Negative', 'Neutral', etc.).
    """
    headers = {
        "Authorization": f"Bearer {api_key}",
        "Content-Type": "application/json"
    }
    payload = {
        "text": text
    }
    try:
        response = requests.post(gemini_api_url, headers=headers, json=payload)
        response.raise_for_status()
        # Assuming the API returns JSON with a 'sentiment' key
        return response.json().get("sentiment", "Unknown")
    except requests.exceptions.RequestException as e:
        print(f"Error analyzing sentiment: {e}")
        return "Error"

# Function to fetch news data from the API
def fetch_news(api_url):
    """
    Fetches news articles from the provided API URL.
    
    Args:
        api_url (str): The URL of the news API.
    
    Returns:
        list: A list of news articles as dictionaries.
    """
    try:
        response = requests.get(api_url)
        response.raise_for_status()
        return response.json()  # Assuming the API returns JSON data
    except requests.exceptions.RequestException as e:
        print(f"Error fetching news: {e}")
        return []

# Function to analyze news sentiments
def analyze_news_sentiments(news_api_url, gemini_api_url, api_key):
    """
    Fetches news and performs sentiment analysis on each article.
    
    Args:
        news_api_url (str): URL of the news API.
        gemini_api_url (str): URL of the Gemini AI sentiment analysis API.
        api_key (str): API key for Gemini AI.
    """
    news_data = fetch_news(news_api_url)
    if not news_data:
        print("No news data to analyze.")
        return

    # Analyze each news article
    analyzed_data = []
    for article in news_data:
        title = article.get("title", "No title")
        content = article.get("content", "No content")
        
        # Combine title and content for sentiment analysis
        full_text = f"{title} {content}"
        sentiment = analyze_sentiment_with_gemini(full_text, gemini_api_url, api_key)

        # Add sentiment to the article data
        analyzed_article = {
            "title": title,
            "content": content,
            "sentiment": sentiment
        }
        analyzed_data.append(analyzed_article)
    
    # Display analyzed data
    for item in analyzed_data:
        print(f"Title: {item['title']}")
        print(f"Content: {item['content'][:100]}...")  # Display a snippet of content
        print(f"Sentiment: {item['sentiment']}")
        print("-" * 50)

# Main program
if __name__ == "__main__":
    # API URLs and API Key
    news_api_url = "https://stock.indianapi.in/news"
    gemini_api_url = "https://api.gemini-ai.com/sentiment"  # Replace with the actual Gemini endpoint
    api_key = "AIzaSyA3uQMczg8FXYZj0ESPYVfnyzT_0dnMQq0"  # Replace with your Gemini API key

    # Analyze news sentiments
    analyze_news_sentiments(news_api_url, gemini_api_url, api_key)
