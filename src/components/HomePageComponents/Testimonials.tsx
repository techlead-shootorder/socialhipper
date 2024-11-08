"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";

const TestimonialSection = () => {
  // Sample data to mimic testimonials
  const testimonials = [
    {
      id: 1,
      name: "TheGrefg",
      username: "@thegrefg",
      platform: "Twitch",
      platformIcon: "/images/two.jpeg",
      subscribers: "574K",
      shScore: "2.4%",
      avgViews: "34K",
    },
    {
      id: 2,
      name: "summit1g",
      username: "@summit1g",
      platform: "YouTube",
      platformIcon: "/images/two.jpeg",
      subscribers: "574K",
      shScore: "2.4%",
      avgViews: "34K",
    },
    {
      id: 3,
      name: "Pokimane",
      username: "@pokimane",
      platform: "Twitch",
      platformIcon: "/images/two.jpeg",
      subscribers: "3.5M",
      shScore: "5.0%",
      avgViews: "200K",
    },
    {
      id: 4,
      name: "Pokimane",
      username: "@pokimane",
      platform: "Twitch",
      platformIcon: "/images/two.jpeg",
      subscribers: "3.5M",
      shScore: "5.0%",
      avgViews: "200K",
    },
    {
      id: 5,
      name: "Pokimane",
      username: "@pokimane",
      platform: "Twitch",
      platformIcon: "/images/two.jpeg",
      subscribers: "3.5M",
      shScore: "5.0%",
      avgViews: "200K",
    },
    {
      id: 6,
      name: "Pokimane",
      username: "@pokimane",
      platform: "Twitch",
      platformIcon: "/images/two.jpeg",
      subscribers: "3.5M",
      shScore: "5.0%",
      avgViews: "200K",
    },
    {
      id: 7,
      name: "Pokimane",
      username: "@pokimane",
      platform: "Twitch",
      platformIcon: "/images/two.jpeg",
      subscribers: "3.5M",
      shScore: "5.0%",
      avgViews: "200K",
    },
    {
      id: 8,
      name: "Pokimane",
      username: "@pokimane",
      platform: "Twitch",
      platformIcon: "/images/two.jpeg",
      subscribers: "3.5M",
      shScore: "5.0%",
      avgViews: "200K",
    },

    // Add more testimonials as needed with unique ids
  ];

  return (
    <div className=" py-10">
      <h2 className="text-[50px] font-medium text-center mb-12">
        Over <span className="text-black font-bold dark:text-white">173.3M</span> influencers in the
        database
      </h2>

      {/* Top Carousel - Left to Right */}
      <Swiper
        spaceBetween={32}
        slidesPerView="auto"
        loop={true}
        speed={4000} // Adjust the speed for a smooth continuous effect
        autoplay={{
          delay: 0, // No delay between slides
          disableOnInteraction: false,
        }}
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id} className="flex-shrink-0 max-w-sm">
            <div className="rounded-xl shadow-md flex flex-col items-center ">
              <div className="flex w-full items-center space-x-5 bg-[#FFDCDC] p-3 rounded-tl-xl rounded-tr-xl">
                <Image
                  src={testimonial.platformIcon}
                  alt={testimonial.platform}
                  width={46}
                  height={46}
                  className="rounded-full"
                />
                <div className="rounded-xl">
                  <div className="font-bold text-black text-[24px]">
                    {testimonial.name}
                  </div>
                  <div className="text-gray-500">{testimonial.username}</div>
                </div>
              </div>
              <div className="py-10 text-center bg-white w-full flex items-center justify-between px-4 rounded-b-xl  ">
                <p className="text-sm font-semibold text-black">
                  {testimonial.subscribers} <br />
                  Subscribers
                </p>
                <p className="text-sm font-semibold text-black">
                  {testimonial.shScore}
                  <br /> SH Score
                </p>
                <p className="text-sm font-semibold text-black">
                  {testimonial.avgViews}
                  <br /> Avg. Views
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Bottom Carousel - Right to Left */}
      <Swiper
        spaceBetween={32}
        slidesPerView="auto"
        loop={true}
        speed={4000} // Adjust the speed for a smooth continuous effect
        autoplay={{
          delay: 0, // No delay between slides
          disableOnInteraction: false,
          reverseDirection: true,
        }}
        className="mt-6"
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id} className="flex-shrink-0 max-w-sm " >
            <div className="rounded-xl shadow-md flex flex-col items-center ">
              <div className="flex w-full items-center space-x-5 bg-[#FFDCDC] p-3 rounded-tl-xl rounded-tr-xl">
                <Image
                  src={testimonial.platformIcon}
                  alt={testimonial.platform}
                  width={46}
                  height={46}
                  className="rounded-full"
                />
                <div className="">
                  <div className="font-bold text-black text-[24px]">
                    {testimonial.name}
                  </div>
                  <div className="text-gray-500">{testimonial.username}</div>
                </div>
              </div>
              <div className="py-10 text-center bg-white w-full flex items-center justify-between px-4 rounded-b-xl ">
                <p className="text-sm font-semibold text-black">
                  {testimonial.subscribers} <br />
                  Subscribers
                </p>
                <p className="text-sm font-semibold text-black">
                  {testimonial.shScore}
                  <br /> SH Score
                </p>
                <p className="text-sm font-semibold text-black">
                  {testimonial.avgViews}
                  <br /> Avg. Views
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialSection;
