import React from "react";
import Parser from "rss-parser";

type FeedItem = {
  title: string
  link: string;
  pubDate: string;
  contentSnippet?: string;
};

// type BlogPageProps = {
//   posts: FeedItem[];
// };

const Blog: React.FC = async () => {
  const parser = new Parser();
  const feed = await parser.parseURL("https://strikingbalance.substack.com/feed");
  console.log({feed});
  return (
    <h1>Substack here.</h1>
  );
};

export default Blog;