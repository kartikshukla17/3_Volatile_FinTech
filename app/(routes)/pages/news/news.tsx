// src/app/pages/news.tsx

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  
  const News = () => {
    // Fake stock news data
    const stockNews = [
      {
        title: "Tech Stocks Rally as Market Rebounds",
        description: "Major tech companies see significant gains as investors regain confidence in the market.",
        link: "https://example.com/news/tech-stocks-rally",
      },
      {
        title: "Oil Prices Surge Amid Supply Concerns",
        description: "Crude oil prices jump as OPEC announces production cuts, raising concerns about supply shortages.",
        link: "https://example.com/news/oil-prices-surge",
      },
      {
        title: "Banking Sector Faces Turbulence",
        description: "Several banks report lower earnings, leading to a sell-off in financial stocks.",
        link: "https://example.com/news/banking-sector-turbulence",
      },
      {
        title: "Green Energy Stocks Gain Momentum",
        description: "Investors are flocking to renewable energy stocks as governments push for sustainable initiatives.",
        link: "https://example.com/news/green-energy-gain",
      },
    ];
  
    return (
      <div className="flex flex-col items-center justify-center p-4">
        <h1 className="text-2xl font-bold mb-4">Latest Stock News</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {stockNews.map((news, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{news.title}</CardTitle>
                <CardDescription>{news.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Stay updated with the latest trends in the stock market.</p>
              </CardContent>
              <CardFooter>
                <a href={news.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                  Read More
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    );
  };
  
  export default News;