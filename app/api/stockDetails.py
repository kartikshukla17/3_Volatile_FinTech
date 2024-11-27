import requests
from bs4 import BeautifulSoup as bs
import pandas as pd
import time

my_info = {
    'Name': 'Brandon Harding',
    'Email': 'bharding80@gmail.com'
}

start_time = time.time()

# Create a list of URLs for each page.
pages = [
    f'https://www.centralcharts.com/en/price-list-ranking/ALL/asc/ts_19-us-nasdaq-stocks--qc_1-alphabetical-order?p={page_number}'
    for page_number in range(1, 155)
]

headers = []
stock_df = pd.DataFrame()

# Function to fetch page data with exception handling.
def fetch_page(url, timeout=10):
    try:
        response = requests.get(url, timeout=timeout)
        response.raise_for_status()  # Raise HTTPError for bad responses
        return response
    except requests.exceptions.RequestException as e:
        print(f"Error fetching {url}: {e}")
        return None

# Process the first page to get headers.
webpage = fetch_page(pages[0])
if webpage:
    soup = bs(webpage.text, 'html.parser')
    stock_table = soup.find('table', class_='tabMini tabQuotes')
    if stock_table:
        th_tag_list = stock_table.find_all('th')
        headers = [th.text.strip() for th in th_tag_list if th.text.strip() not in ('Cap.', 'Issued Cap.', '')]
        headers[0] = 'Name'
        stock_df = pd.DataFrame(columns=headers)

# Cycle through each page and scrape data.
for page in pages:
    webpage = fetch_page(page)
    if not webpage:
        continue  # Skip to the next page if the current one fails.

    soup = bs(webpage.text, 'html.parser')
    stock_table = soup.find('table', class_='tabMini tabQuotes')
    if not stock_table:
        continue

    tr_tag_list = stock_table.find_all('tr')
    for each_tr_tag in tr_tag_list[1:]:
        td_tag_list = each_tr_tag.find_all('td')
        row_values = [td.text.strip() for td in td_tag_list[:7]]
        stock_df.loc[len(stock_df)] = row_values

# Clean and process the dataframe.
if not stock_df.empty:
    stock_df.replace({'Current price': {',': '', '-': '1'},
                      'Change(%)': {',': '', '-': '1', '%': ''},
                      'Open': {',': '', '-': '1'},
                      'High': {',': '', '-': '1'},
                      'Low': {',': '', '-': '1'},
                      'Volume': {',': '', '-': '1'}}, regex=True, inplace=True)

    stock_df[['Current price', 'Change(%)', 'Open', 'High', 'Low', 'Volume']] = \
        stock_df[['Current price', 'Change(%)', 'Open', 'High', 'Low', 'Volume']].apply(pd.to_numeric)

    # Sort and filter top 100 stocks by volume.
    stock_df = stock_df.sort_values(by=['Volume'], ascending=False).head(100)

    # Rename columns.
    stock_df.rename(columns={
        'Current price': 'currentPrice',
        'Change(%)': 'changePercent'
    }, inplace=True)

    # Save to JSON.
    stock_df.to_json('top_100_stocks.json', orient='records', indent=4)
    print("Top 100 stocks data saved to top_100_stocks.json")
else:
    print("No data found.")
