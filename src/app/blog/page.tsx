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
  // console.log(feed.items)

  const posts: FeedItem[] = feed.items.map((item) => ({
    title: item.title || "Untitled",
    link: item.link || "",
    pubDate: item.pubDate || "",
    contentSnippet: item.contentSnippet || "",
  }));

  return (
    <div className="p-8, bg-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-6">My Substack Posts</h1>
      <ul className="space-y-4">
        {posts.map((post, index) => (
          <li key={index} className="border-b border-gray-700 pb-2">
            <a
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-indigo-400 transition-colors">
              {post.title}
            </a>
            <p>{}</p>
            <p className="text-sm text-gray-400">{post.pubDate}</p>
            {post.contentSnippet && (
              <p className="mt-1 text-gray-300">{post.contentSnippet}</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blog;