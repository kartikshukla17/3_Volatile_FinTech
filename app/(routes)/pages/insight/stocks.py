const fetchStocks = async () => {
  try {
    const response = await fetch(, {
      headers: {
        "X-Api-Key": API_KEY,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Fetched Stocks Data:", data);
    setStocks(data?.data || []);
  } catch (error) {
    console.error("Failed to fetch stocks:", error);
    alert("Failed to fetch stocks. Please check your API key and endpoint.");
  } finally {
    setLoading(false);
  }
};


