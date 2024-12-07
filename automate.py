import schedule
import time
import json
import os

# Path to your JSON and JS files
json_file_path = "scraped_articles.json"
js_file_path = "scraped_articles.js"

# Function to run two Python files
def run_python_files():
    os.system('stockShareNew\main.py')  # Replace with the actual path if needed
    os.system('stockShareNew\summary.py')  # Replace with the actual path if needed
    print("Python files executed.")

# Function to delete content of JSON file
def clear_json_file():
    with open(json_file_path, 'w') as json_file:
        json.dump({}, json_file)  # Empty content
    print(f"Content of {json_file_path} cleared.")

# Function to update JS file with JSON data
def update_js_file():
    try:
        with open(json_file_path, 'r') as json_file:
            data = json.load(json_file)
        
        with open(js_file_path, 'w') as js_file:
            js_file.write(f"const data = {json.dumps(data)};")  # Create JS file with JSON data
        print(f"JS file {js_file_path} updated with JSON data.")
    
    except FileNotFoundError:
        print(f"{json_file_path} not found.")
    except json.JSONDecodeError:
        print(f"Error decoding JSON from {json_file_path}.")

# Schedule tasks
schedule.every(6).hours.do(run_python_files)  # Run both Python scripts every 6 hours
schedule.every(24).hours.do(clear_json_file)  # Clear JSON file every 24 hours
schedule.every(1).hours.do(update_js_file)  # Update JS file with data every 1 hour

# Loop to keep the script running and execute the scheduled tasks
while True:
    schedule.run_pending()
    time.sleep(60)  # Check for pending tasks every minute
 print("Done")