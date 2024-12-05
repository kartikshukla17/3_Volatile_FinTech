import os
import requests

def fetchandSave(url, path):
    # Ensure the directory exists
    os.makedirs(os.path.dirname(path), exist_ok=True)
    
    # Fetch the content from the URL
    r = requests.get(url)
    if r.status_code == 200:
        with open(path, 'w', encoding="utf-8") as f:
            f.write(r.text)
        print(f"Fetched and saved: {path}")
    else:
        print(f"Failed to fetch {url}. Status code: {r.status_code}")

# URLs to fetch
moneycontrol_url = "https://www.moneycontrol.com/stocksmarketsindia/"
livemint_url = "https://www.livemint.com/market"
economictimes_url = "https://economictimes.indiatimes.com/markets"
reuters_url = "https://www.reuters.com/markets/"
cnbc_url = "https://www.cnbc.com/markets/"

# Fetch and save each page
fetchandSave(moneycontrol_url, "data/moneycontrol.html")
fetchandSave(livemint_url, "data/livemint.html")
fetchandSave(economictimes_url, "data/economictimes.html")
fetchandSave(reuters_url, "data/reuters.html")
fetchandSave(cnbc_url, "data/cnbc.html")

print("Data fetched successfully.")
