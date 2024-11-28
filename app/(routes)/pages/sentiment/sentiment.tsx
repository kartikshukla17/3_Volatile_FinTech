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

// Fake data for stock sentiments
const stockSentimentData = [
  { stock: "AAPL", positive: 65, negative: 35 },
  { stock: "GOOGL", positive: 72, negative: 28 },
  { stock: "MSFT", positive: 68, negative: 32 },
  { stock: "AMZN", positive: 58, negative: 42 },
  { stock: "TSLA", positive: 80, negative: 20 },
  { stock: "FB", positive: 45, negative: 55 },
  { stock: "NVDA", positive: 75, negative: 25 },
  { stock: "JPM", positive: 62, negative: 38 },
]

// Fake data for stock price trends
const stockPriceTrendData = [
  { date: "2023-01", AAPL: 130, GOOGL: 95, MSFT: 240 },
  { date: "2023-02", AAPL: 135, GOOGL: 94, MSFT: 250 },
  { date: "2023-03", AAPL: 140, GOOGL: 100, MSFT: 255 },
  { date: "2023-04", AAPL: 145, GOOGL: 105, MSFT: 270 },
  { date: "2023-05", AAPL: 150, GOOGL: 110, MSFT: 285 },
  { date: "2023-06", AAPL: 155, GOOGL: 115, MSFT: 300 },
]

// Fake data for sector distribution
const sectorDistributionData = [
  { name: "Technology", value: 35 },
  { name: "Healthcare", value: 20 },
  { name: "Finance", value: 15 },
  { name: "Consumer", value: 12 },
  { name: "Energy", value: 10 },
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
    <div className="p-6 bg-background min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">Stock Market Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card>
          <CardHeader>
            <CardTitle>Stock Sentiment Analysis</CardTitle>
            <CardDescription>Positive and negative sentiment for popular stocks</CardDescription>
          </CardHeader>
          <CardContent className="p-4">
            <ChartContainer
              config={{
                positive: {
                  label: "Positive Sentiment",
                  color: "hsl(var(--primary))",
                },
                negative: {
                  label: "Negative Sentiment",
                  color: "hsl(var(--destructive))",
                },
              }}
              className="h-[300px] w-full"
            >
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={stockSentimentData}
                  layout="vertical"
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <XAxis type="number" domain={[0, 100]} />
                  <YAxis dataKey="stock" type="category" />
                  <Tooltip content={<ChartTooltipContent />} />
                  <Legend />
                  <Bar dataKey="positive" stackId="sentiment" fill="hsl(var(--primary))" />
                  <Bar dataKey="negative" stackId="sentiment" fill="hsl(var(--accent))" />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>
        <Card className="bg-background/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Performance Summary</CardTitle>
              <CardDescription>Key market indicators</CardDescription>
            </CardHeader>
            <CardContent>
              <dl className="space-y-2">
                <div className="flex justify-between">
                  <dt>S&P 500</dt>
                  <dd className="font-semibold text-green-600">+1.2%</dd>
                </div>
                <div className="flex justify-between">
                  <dt>NASDAQ</dt>
                  <dd className="font-semibold text-green-600">+0.8%</dd>
                </div>
                <div className="flex justify-between">
                  <dt>DOW</dt>
                  <dd className="font-semibold text-red-600">-0.3%</dd>
                </div>
                <div className="flex justify-between">
                  <dt>10Y Treasury</dt>
                  <dd className="font-semibold">3.5%</dd>
                </div>
              </dl>
            </CardContent>
          </Card>
        <Card>
          <CardHeader>
            <CardTitle>Stock Price Trends</CardTitle>
            <CardDescription>6-month price trends for selected stocks</CardDescription>
          </CardHeader>
          <CardContent className="p-4">
            <ChartContainer
              config={{
                AAPL: {
                  label: "Apple",
                  color: "hsl(var(--primary))",
                },
                GOOGL: {
                  label: "Google",
                  color: "hsl(var(--secondary))",
                },
                MSFT: {
                  label: "Microsoft",
                  color: "hsl(var(--accent))",
                },
              }}
              className="h-[300px] w-full"
            >
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={stockPriceTrendData}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip content={<ChartTooltipContent />} />
                  <Legend />
                  <Line type="monotone" dataKey="AAPL" stroke="hsl(var(--primary))" />
                  <Line type="monotone" dataKey="GOOGL" stroke="hsl(var(--secondary))" />
                  <Line type="monotone" dataKey="MSFT" stroke="hsl(var(--accent))" />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Sector Distribution</CardTitle>
            <CardDescription>Market cap distribution by sector</CardDescription>
          </CardHeader>
          <CardContent className="p-4">
            <ChartContainer
              config={{
                value: {
                  label: "Market Cap",
                  color: "hsl(var(--primary))",
                },
              }}
              className="h-[300px] w-full"
            >
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={sectorDistributionData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={150}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {sectorDistributionData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip content={<ChartTooltipContent />} />
                </PieChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card>
      <CardHeader>
        <CardTitle>Market News</CardTitle>
        <CardDescription>Latest updates affecting the stock market</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {newsItems.map((item, index) => (
            <li key={index} className="border-b pb-2 last:border-b-0">
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
              <span className="text-xs text-muted-foreground">{item.date}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
      </div>
    </div>
  )
}

