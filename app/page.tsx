"use client"
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, BarChart2, PieChart } from 'lucide-react';
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <main className="flex-grow flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold text-white mb-4">
            fInsight
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Simplify Your Financial Journey
          </p>
          <Button asChild className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg">
            <Link href="/pages/news">
              Get Started
            </Link>
          </Button>
        </motion.div>

        <motion.div 
          className="w-full max-w-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* <div className="flex flex-wrap justify-center gap-12">
            {[
              { icon: TrendingUp, title: "Market Insights", color: "from-blue-600 to-blue-400" },
              { icon: BarChart2, title: "Portfolio Tracking", color: "from-green-600 to-green-400" },
              { icon: PieChart, title: "Risk Assessment", color: "from-purple-600 to-purple-400" },
            ].map((feature, index) => (
              <div key={index} className="text-center group">
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${feature.color} p-5 mb-4 mx-auto transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-lg`}>
                  <feature.icon className="w-full h-full text-white" />
                </div>
                <h2 className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300">{feature.title}</h2>
              </div>
            ))}
          </div> */}
        </motion.div>
      </main>
    </div>
  );
}

