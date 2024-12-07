"use client"

import * as React from "react"
import { Bar, BarChart, Line, LineChart, Pie, PieChart, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, Cell } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const newsItems = [
  {
    title: "Tech Stocks Surge on AI Advancements",
    description: "Major tech companies see stock prices rise as AI capabilities expand.",
    date: "2023-06-15",
  },
  {
    title: "Federal Reserve Holds Interest Rates Steady",
    description: "The central bank's decision impacts market expectations and stock performance.",
    date: "2023-06-14",
  },
  {
    title: "Oil Prices Fluctuate Amid Global Supply Concerns",
    description: "Energy sector stocks respond to changing oil market dynamics.",
    date: "2023-06-13",
  },
]

// Updated stock sentiment data with Indian companies
const stockSentimentData = [
  { stock: "INFY", positive: 65, negative: 35 },
  { stock: "TCS", positive: 72, negative: 28 },
  { stock: "RELIANCE", positive: 68, negative: 32 },
  { stock: "HDFC", positive: 58, negative: 42 },
  { stock: "WIPRO", positive: 80, negative: 20 },
  { stock: "BAJFINANCE", positive: 45, negative: 55 },
  { stock: "ICICI", positive: 75, negative: 25 },
  { stock: "SBI", positive: 62, negative: 38 },
]

// Updated stock price trend data with Indian companies
const stockPriceTrendData = [
  { date: "2023-01", INFY: 1500, TCS: 3200, RELIANCE: 2300 },
  { date: "2023-02", INFY: 1550, TCS: 3250, RELIANCE: 2350 },
  { date: "2023-03", INFY: 1600, TCS: 3300, RELIANCE: 2400 },
  { date: "2023-04", INFY: 1650, TCS: 3350, RELIANCE: 2450 },
  { date: "2023-05", INFY: 1700, TCS: 3400, RELIANCE: 2500 },
  { date: "2023-06", INFY: 1750, TCS: 3450, RELIANCE: 2550 },
]

// Fake data for sector distribution
const sectorDistributionData = [
  { name: "IT", value: 35 },
  { name: "Banking", value: 20 },
  { name: "Energy", value: 15 },
  { name: "Finance", value: 12 },
  { name: "Pharmaceuticals", value: 10 },
  { name: "Others", value: 8 },
]

const COLORS = [
  'hsl(var(--primary))',
  'hsl(var(--secondary))',
  'hsl(var(--accent))',
  'hsl(var(--muted))',
  'hsl(var(--card))',
  'hsl(var(--destructive))'
]

export default function StockDashboard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      <Card>
        <CardHeader>
          <CardTitle>Stock Sentiment Analysis</CardTitle>
          <CardDescription>Positive and negative sentiment for popular Indian stocks</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={stockSentimentData}>
              <XAxis dataKey="stock" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="positive" stackId="a" fill={COLORS[0]} />
              <Bar dataKey="negative" stackId="a" fill={COLORS[5]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Performance Summary</CardTitle>
          <CardDescription>Key market indicators</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center">
              <h3 className="text-lg font-semibold">NIFTY 50</h3>
              <p className="text-green-600">+1.2%</p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold">SENSEX</h3>
              <p className="text-green-600">+0.8%</p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold">BANK NIFTY</h3>
              <p className="text-red-600">-0.3%</p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold">India VIX</h3>
              <p>15.5</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Stock Price Trends</CardTitle>
          <CardDescription>6-month price trends for top Indian stocks</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={stockPriceTrendData}>
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="INFY" stroke={COLORS[0]} />
              <Line type="monotone" dataKey="TCS" stroke={COLORS[1]} />
              <Line type="monotone" dataKey="RELIANCE" stroke={COLORS[2]} />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Sector Distribution</CardTitle>
          <CardDescription>Market cap distribution by sector</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie 
                data={sectorDistributionData} 
                dataKey="value" 
                nameKey="name" 
                cx="50%" 
                cy="50%" 
                outerRadius={100}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                //labelStyle={{ fill: 'white', fontSize: '12px' }}
              >
                {sectorDistributionData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Market News</CardTitle>
          <CardDescription>Latest updates affecting the stock market</CardDescription>
        </CardHeader>
        <CardContent>
          {newsItems.map((item, index) => (
            <div key={index} className="mb-4 border-b pb-2">
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
              <p className="text-xs text-muted-foreground">{item.date}</p>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}