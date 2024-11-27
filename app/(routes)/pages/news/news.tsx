"use client";
import { Card, CardDescription, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import React, { useState, useEffect } from "react";
import article_data from "@/scraped_articles";

// Define the type for the article data
interface Article {
  title: string;
  summary: string;
  link: string;
}

// Function to truncate text
const truncateText = (text: string, maxLength: number): string => {
  if (!text) return "";
  return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
};

const News: React.FC = () => {
  // Ensure article_data is typed as an array of Article objects
  const articles: Article[] = Array.isArray(article_data) ? article_data : [];

  // Fallback if data is empty or not an array
  if (articles.length === 0) {
    return <p>No articles available.</p>;
  }

  return (
    <div className="flex flex-col items-center justify-center p-4 w-full">
      <h1 className="text-2xl font-bold mb-4">Latest Stock News</h1>
      <div className="flex items-center justify-center w-full">
        <Carousel
          orientation="horizontal"
          className="w-full max-w-lg overflow-x-scroll snap-x snap-mandatory scrollbar-hide"
        >
          <CarouselContent className="flex">
            {articles.map((news, index) => (
              <CarouselItem key={index} className="flex-none w-full snap-center p-4">
                <Card className="w-full">
                  <CardHeader>
                    <CardTitle>{news.title}</CardTitle>
                    <CardDescription></CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>{truncateText(news.summary, 1000)}</p>
                  </CardContent>
                  <CardFooter>
                    <a
                      href={news.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline"
                    >
                      Read More
                    </a>
                  </CardFooter>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

export default News;
