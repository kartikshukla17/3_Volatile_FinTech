"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ArrowUpIcon, ArrowDownIcon } from "lucide-react";
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

const StockItem = ({ item }: { item }) => {
  return (
    <li
      key={item.id}
      className="p-3 rounded-lg transition-colors hover:bg-accent"
    >
      <div className="flex justify-between items-center">
        <Dialog>
          <DialogTrigger>
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
                  <b>Exchange Code (BSE):</b> {item.company_profile?.exchange_code_bse || "N/A"}<br />
                  <b>Current Price:</b> 
                  {item.current_price !== null ? `₹${Number(item.current_price).toFixed(2)}` : "N/A"}
                  <br />
                </div>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>

        <div className="flex items-center space-x-2">
          <span className="font-mono">
            {item.current_price !== null 
              ? `₹${Number(item.current_price).toFixed(2)}`
              : "N/A"}
          </span>
          {/* Removed changePercent as it's not in the JSON structure you showed */}
          <span className="text-gray-500">No Change Data</span>
        </div>
      </div>
    </li>
  );
};

const Insights = () => {
  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">
          Top Stocks Insights
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[600px] pr-4">
          <ul className="space-y-2">
            {stock_data.map((item) => (
              <StockItem key={item.id} item={item} />
            ))}
          </ul>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default Insights;