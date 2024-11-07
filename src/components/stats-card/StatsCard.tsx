import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import {
  AiOutlineLineChart,
  AiOutlineUsergroupAdd,
  AiOutlineHeart,
  AiOutlineRise,
  AiOutlineFileText,
  AiOutlineMessage,
} from "react-icons/ai";

const statsData = [
  {
    title: "Engagement rate",
    value: "561",
    growth: "+1 (0.2%)",
    icon: AiOutlineLineChart,
  },
  {
    title: "Followers Growth",
    value: "561",
    growth: "+1 (0.2%)",
    icon: AiOutlineUsergroupAdd,
  },
  {
    title: "Average Likes",
    value: "561",
    growth: "+1 (0.2%)",
    icon: AiOutlineHeart,
  },
  {
    title: "Projected Followers",
    value: "561",
    growth: "+1 (0.2%)",
    icon: AiOutlineRise,
  },
  {
    title: "Avg Post",
    value: "561",
    growth: "+1 (0.2%)",
    icon: AiOutlineFileText,
  },
  {
    title: "Comment ratio",
    value: "561",
    growth: "+1 (0.2%)",
    icon: AiOutlineMessage,
  },
  {
    title: "Average Likes",
    value: "561",
    growth: "+1 (0.2%)",
    icon: AiOutlineHeart,
  },
  {
    title: "Projected Followers",
    value: "561",
    growth: "+1 (0.2%)",
    icon: AiOutlineRise,
  },
];

export default function StatsCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-4 md:mx-20 mt-8">
      {statsData.map((stat, index) => {
        const IconComponent = stat.icon;
        return (
          <Card
            key={index}
            className="border border-gray-200 shadow-sm rounded-lg p-4"
          >
            <CardHeader className="flex items-start justify-between mb-2">
              <div className="flex items-start space-x-2">
                <CardTitle className="text-[32px] font-bold">
                  {stat.value}
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-start gap-2">
                <IconComponent className="text-gray-400 text-xl" />
                <p className="text-[20px] leading-[24px] font-semibold  text-gray-800 dark:text-white mb-1">
                  {stat.title}
                </p>
              </div>
              <div className=" mt-1">
                <div className="ml-2 text-[#22902F] text-sm text-center mb-2">{stat.growth}</div>
                <div className="w-full bg-gray-200 h-4 rounded-full">
                  <div
                    className="bg-[#BBBABA] h-4 rounded-full"
                    style={{ width: "50%" }}
                  ></div>{" "}
                  {/* Growth bar */}
                </div>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
