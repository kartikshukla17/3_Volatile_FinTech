"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { ArrowUpIcon, ArrowDownIcon, SearchIcon } from "lucide-react";
import stock_data from "./stockslist.json";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const ChangeIndicator = ({ change }: { change: number }) => {
  const isPositive = change >= 0;
  const colorClass = isPositive ? "text-green-600" : "text-red-600";
  const Icon = isPositive ? ArrowUpIcon : ArrowDownIcon;

  return (
    <div className={`flex items-center ${colorClass}`}>
      <Icon className="w-4 h-4 mr-1" />
      <span className="font-semibold">{Math.abs(change).toFixed(2)}%</span>
    </div>
  );
};

// Function to generate random sentiment
const generateRandomSentiment = () => {
  const sentiments = ["Positive", "Negative", "Neutral"];
  const randomIndex = Math.floor(Math.random() * sentiments.length);
  return sentiments[randomIndex];
};

const StockItem = ({ item }: { item }) => {
  const [apiData, setApiData] = useState<any | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>("");
  
  // Generate a random sentiment for the stock
  const sentiment = generateRandomSentiment();

  const fetchStockData = async (exchange_code_bse: string) => {
    if (!exchange_code_bse) {
      setError("BSE code not found.");
      return;
    }
    
    setLoading(true);
    setError("");
    try {
      const response = await fetch('https://stock.indianapi.in/stock?name', {
        headers: {
          'X-Api-Key': 'sk-live-LZEtIC1wPrfhIoJsH474wDa0sXtVlCXbK5BIFCAp'
        }
      })
      if (!exchange_code_bse) {
        throw new Error("Failed to fetch stock data.");
      }
      const data = await response.json();
      setApiData(data);
    } catch (err: any) {
      setError(err.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  const bseCode = item.company_profile?.exchange_code_bse;

  return (
    <li
      key={item.id}
      className="p-3 rounded-lg transition-colors hover:bg-accent"
    >
      <div className="flex justify-between items-center">
        <Dialog>
          <DialogTrigger onClick={() => fetchStockData(bseCode)}>
            <span className="font-semibold text-lg">{item.name}</span>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{item.name}</DialogTitle>
              <DialogDescription>
                <div>
                  <b>Company Name:</b> {item.company_profile?.company_name || "N/A"}<br />
                  <b>Industry:</b> {item.company_profile?.industry || "N/A"}<br />
                  <b>Exchange Code (NSE):</b> {item.company_profile?.exchange_code_nse || "N/A"}<br />
                  <b>Exchange Code (BSE):</b> {bseCode || "N/A"}<br />
                  {/* <b>Current Price:</b> 
                  {item.current_price !== null ? `₹${Number(item.current_price).toFixed(2)}` : "N/A"} */}
                  <br />
                </div>
                <div className="mt-4">
                  {loading ? (
                    <p>Loading stock data...</p>
                  ) : error ? (
                    <p className="text-red-600">{error}</p>
                  ) : apiData ? (
                    <div>
                      <b>API Data:</b><br />
                      <pre className="bg-gray-100 p-2 rounded">
                        {JSON.stringify(apiData, null, 2)}
                      </pre>
                    </div>
                  ) : (
                    <p>Click to fetch additional stock data.</p>
                  )}
                </div>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>

        {/* <div className="flex items-center space-x-2">
          <span className="font-mono">
            {item.current_price !== null 
              ? `₹${Number(item.current_price).toFixed(2)}`
              : "N/A"}
          </span>
          <span className="text-gray-500">No Change Data</span>
        </div> */}
        
        {/* Sentiment Label */}
        <div className="mt-2">
          <span className={`text-sm font-semibold ${sentiment === "Positive" ? "text-green-600" : sentiment === "Negative" ? "text-red-600" : "text-gray-600"}`}>
            Sentiment: {sentiment}
          </span>
        </div>
      </div>
    </li>
  );
};

const Insights = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter stocks based on search term
  const filteredStocks = stock_data.filter((item) => 
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.company_profile?.company_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.company_profile?.industry?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">
          Top Stocks Insights
        </CardTitle>
        <div className="relative mt-4">
          <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          <Input 
            type="text" 
            placeholder="Search stocks by name, company, or industry"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 w-full"
          />
        </div>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[500px] pr-4">
          {filteredStocks.length > 0 ? (
            <ul className="space-y-2">
              {filteredStocks.map((item) => (
                <StockItem key={item.id} item={item} />
              ))}
            </ul>
          ) : (
            <div className="text-center text-gray-500 py-4">
              No stocks found matching your search.
            </div>
          )}
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default Insights;