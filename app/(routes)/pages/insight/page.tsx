'use client'

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { ArrowUpIcon, ArrowDownIcon } from 'lucide-react'
import stock_data from '@/top_100_stocks'

const Insights = () => {
  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">Top 100 Stocks Insights</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[600px] pr-4">
          <ul className="space-y-2">
            {stock_data.map((item, index) => (
              <li key={index} className="p-3 rounded-lg transition-colors hover:bg-accent">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-lg">{item.Name}</span>
                  <div className="flex items-center space-x-2">
                    <span className="font-mono">${item.currentPrice.toFixed(2)}</span>
                    <ChangeIndicator change={item.changePercent} />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </ScrollArea>
      </CardContent>
    </Card>
  )
}

const ChangeIndicator = ({ change }: { change: number }) => {
  const isPositive = change >= 0
  const colorClass = isPositive ? 'text-green-600' : 'text-red-600'
  const Icon = isPositive ? ArrowUpIcon : ArrowDownIcon

  return (
    <div className={`flex items-center ${colorClass}`}>
      <Icon className="w-4 h-4 mr-1" />
      <span className="font-semibold">{Math.abs(change).toFixed(2)}%</span>
    </div>
  )
}

export default Insights

