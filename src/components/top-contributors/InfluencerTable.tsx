"use client";
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "../ui/table";
import Image from "next/image";
import { BsCheckCircleFill } from "react-icons/bs";
import { useState } from "react";

type Influencer = {
  rank: number;
  name: string;
  category: string[];
  followers: string;
  country: string;
  engagementRate: string;
  image: string;
};

const InfluencerTable = () => {
  const influencers: Influencer[] = [
    {
      rank: 1,
      name: "Cristiano Ronaldo",
      category: ["Sports"],
      followers: "100 M",
      country: "Portugal",
      engagementRate: "7%",
      image: "/path/to/image.jpg", // Replace with actual image path
    },
    {
      rank: 2,
      name: "Cristiano Ronaldo",
      category: ["Sports"],
      followers: "100 M",
      country: "Portugal",
      engagementRate: "7%",
      image: "/path/to/image.jpg", // Replace with actual image path
    },
    {
      rank: 3,
      name: "Cristiano Ronaldo",
      category: ["Sports"],
      followers: "100 M",
      country: "Portugal",
      engagementRate: "7%",
      image: "/path/to/image.jpg", // Replace with actual image path
    },
    {
      rank: 4,
      name: "Cristiano Ronaldo",
      category: ["Sports"],
      followers: "100 M",
      country: "Portugal",
      engagementRate: "7%",
      image: "/path/to/image.jpg", // Replace with actual image path
    },
    {
      rank: 5,
      name: "Cristiano Ronaldo",
      category: ["Sports"],
      followers: "100 M",
      country: "Portugal",
      engagementRate: "7%",
      image: "/path/to/image.jpg", // Replace with actual image path
    },
    {
      rank: 6,
      name: "Cristiano Ronaldo",
      category: ["Sports"],
      followers: "100 M",
      country: "Portugal",
      engagementRate: "7%",
      image: "/path/to/image.jpg", // Replace with actual image path
    },
    // Add more influencer data as needed
  ];

  const [filters, setFilters] = useState({
    country: "",
    city: "",
    category: "",
    influencerType: "",
  });

  const handleFilterChange = (
    filterName: keyof typeof filters,
    value: string
  ) => {
    setFilters((prevState) => ({
      ...prevState,
      [filterName]: value,
    }));
  };

  return (
    <div className="bg-white rounded-[15px] p-4 md:mx-20 my-8">
      {/* Filter Dropdowns */}
      <div className="flex items-center gap-4 mb-4">
        {/* Country Select */}
        <div className="relative">
          <select
            value={filters.country}
            onChange={(e) => handleFilterChange("country", e.target.value)}
            className="px-4 py-2  bg-[#F3F1F1] rounded-[15px]"
          >
            <option value="">Country</option>
            <option value="Portugal">Portugal</option>
            <option value="Brazil">Brazil</option>
            <option value="USA">USA</option>
            <option value="India">India</option>
          </select>
        </div>

        {/* City Select */}
        <div className="relative">
          <select
            value={filters.city}
            onChange={(e) => handleFilterChange("city", e.target.value)}
            className="px-4 py-2 bg-[#F3F1F1] rounded-[15px]"
          >
            <option value="">City</option>
            <option value="Lisbon">Lisbon</option>
            <option value="New York">New York</option>
            <option value="Paris">Paris</option>
            <option value="Tokyo">Tokyo</option>
          </select>
        </div>
        {/* Category Select */}
        <div className="relative">
          <select
            value={filters.category}
            onChange={(e) => handleFilterChange("category", e.target.value)}
            className="px-4 py-2 bg-[#F3F1F1] rounded-[15px]"
          >
            <option value="">Category</option>
            <option value="Sports">Sports</option>
            <option value="Music">Music</option>
            <option value="Fashion">Fashion</option>
            <option value="Tech">Tech</option>
          </select>
        </div>

        {/* Influencer Type Select */}
        <div className="relative">
          <select
            value={filters.influencerType}
            onChange={(e) =>
              handleFilterChange("influencerType", e.target.value)
            }
            className="px-4 py-2 bg-[#F3F1F1] rounded-[15px]"
          >
            <option value="">Influencer Type</option>
            <option value="Celebrity">Celebrity</option>
            <option value="Micro-Influencer">Micro-Influencer</option>
            <option value="Brand Ambassador">Brand Ambassador</option>
            <option value="Content Creator">Content Creator</option>
          </select>
        </div>

        {/* Filter Image Button */}
        <div className="ml-auto">
          <button onClick={() => alert("Filter action triggered")}>
            <img
              src="/images/filter-square.png"
              alt="filter"
              className="cursor-pointer"
            />
          </button>
        </div>
      </div>

      {/* Table */}
      <Table className="w-full text-center rounded-lg shadow">
        <TableHeader className="bg-[#E2E2E2]">
          <TableRow>
            <TableHead className="font-bold text-[#4F4F4F] p-4 text-center">
              Rank
            </TableHead>
            <TableHead className="font-bold text-[#4F4F4F] p-4 text-center">
              Influencer Name
            </TableHead>
            <TableHead className="font-bold text-[#4F4F4F] p-4 text-center">
              Category
            </TableHead>
            <TableHead className="font-bold text-[#4F4F4F] p-4 text-center">
              Followers
            </TableHead>
            <TableHead className="font-bold text-[#4F4F4F] p-4 text-center">
              Country
            </TableHead>
            <TableHead className="font-bold text-[#4F4F4F] p-4 text-center">
              Engagement Rate
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {influencers.map((influencer, index) => (
            <TableRow key={index} className="border-b">
              <TableCell className="font-bold text-[30px] leading-[36px] text-black p-4 text-center">
                {influencer.rank}
              </TableCell>
              <TableCell className="flex items-center justify-center gap-2 p-4 relative">
                <Image
                  src="/images/profile.jpeg"
                  width={50}
                  height={50}
                  alt="Profile"
                  className="rounded-full"
                />
                <div className="absolute top-4 left-[132px]">
                  <BsCheckCircleFill className="text-blue-500 w-4 h-4" />
                </div>
                <span className="text-[20px] text-black">
                  {influencer.name}
                </span>
              </TableCell>
              <TableCell className="p-4 text-center">
                <div className="flex gap-2 justify-center">
                  {influencer.category.map((cat, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 rounded-full font-medium text-[20px]"
                    >
                      {cat}
                    </span>
                  ))}
                </div>
              </TableCell>
              <TableCell className="font-semibold text-black p-4 text-center">
                {influencer.followers}
              </TableCell>
              <TableCell className="p-4 text-center text-black font-medium text-[20px]">
                {influencer.country}
              </TableCell>
              <TableCell className="p-4 text-center font-medium text-[20px]">
                {influencer.engagementRate}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default InfluencerTable;
