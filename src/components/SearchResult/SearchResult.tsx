import React, { useState, useEffect } from "react";
import { Youtube, Instagram, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

// Define types for YouTube API response items
interface YouTubeItem {
  id: { videoId: string };
  snippet: {
    title: string;
    channelTitle: string;
  };
}

// Define types for Instagram API response items
interface InstagramItem {
  id: string;
  name: string;
  media_count: number;
}

// Define types for YouTube and Instagram results
interface YouTubeResult {
  id: string;
  type: "youtube";
  title: string;
  channel: string;
}

interface InstagramResult {
  id: string;
  type: "instagram";
  hashtag: string;
  posts: number;
}

type SearchResult = YouTubeResult | InstagramResult;

const SearchResults: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const searchYouTube = async (searchQuery: string): Promise<YouTubeResult[]> => {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchQuery}&maxResults=10&type=video&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
    );
    const data = await response.json();
    return data.items.map((item: YouTubeItem) => ({
      id: item.id.videoId,
      type: "youtube",
      title: item.snippet.title,
      channel: item.snippet.channelTitle,
    }));
  };

  const searchInstagram = async (searchQuery: string): Promise<InstagramResult[]> => {
    const response = await fetch(
      `https://graph.instagram.com/v12.0/ig_hashtag_search?q=${searchQuery}&access_token=${process.env.REACT_APP_INSTAGRAM_TOKEN}`
    );
    const data = await response.json();
    return data.data.map((item: InstagramItem) => ({
      id: item.id,
      type: "instagram",
      hashtag: item.name,
      posts: item.media_count,
    }));
  };

  useEffect(() => {
    const fetchResults = async () => {
      if (query.length < 2) {
        setResults([]);
        return;
      }

      setLoading(true);
      try {
        const [youtubeData, instagramData] = await Promise.all([
          searchYouTube(query),
          searchInstagram(query),
        ]);

        const combined: SearchResult[] = [...youtubeData, ...instagramData].sort((a, b) => {
          const titleA = a.type === "youtube" ? a.title : a.hashtag;
          const titleB = b.type === "youtube" ? b.title : b.hashtag;
          return titleA.localeCompare(titleB);
        });

        setResults(combined);
      } catch (error) {
        console.error("Search error:", error);
        setResults([]);
      } finally {
        setLoading(false);
      }
    };

    const debounceTimer = setTimeout(fetchResults, 500);
    return () => clearTimeout(debounceTimer);
  }, [query]);

  return (
    <div className="w-full max-w-2xl mx-auto p-4">
      <div className="relative mb-6">
        <Input
          type="text"
          placeholder="Search YouTube and Instagram..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full pl-10"
        />
        <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
      </div>

      <Card>
        <CardContent className="p-4">
          {loading ? (
            <div className="text-center py-4">Loading...</div>
          ) : (
            <ul className="space-y-4">
              {results.map((item) => (
                <li key={item.id} className="flex items-center gap-3">
                  {item.type === "youtube" ? (
                    <>
                      <Youtube className="h-5 w-5 text-red-600" />
                      <div>
                        <p className="font-medium">{item.title}</p>
                        <p className="text-sm text-gray-500">{item.channel}</p>
                      </div>
                    </>
                  ) : (
                    <>
                      <Instagram className="h-5 w-5 text-pink-600" />
                      <div>
                        <p className="font-medium">#{item.hashtag}</p>
                        <p className="text-sm text-gray-500">
                          {item.posts} posts
                        </p>
                      </div>
                    </>
                  )}
                </li>
              ))}
            </ul>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default SearchResults;
