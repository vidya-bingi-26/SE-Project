import React from "react";
import StarRating from "./StarRating";

const ReviewSection = () => {
  const ratingStats = [
    { stars: 5, count: 2000, percentage: 80 },
    { stars: 4, count: 375, percentage: 15 },
    { stars: 3, count: 75, percentage: 3 },
    { stars: 2, count: 25, percentage: 1 },
    { stars: 1, count: 25, percentage: 1 },
  ];

  return (
    <div className="bg-[#FFF] rounded-[12px] p-[24px] shadow-[0px_4px_6px_0px_rgba(0,0,0,0.10)]">
      <div className="flex items-center gap-[24px]">
        <div className="text-center">
          <span className="text-[48px] font-[600]">4.8</span>
          <div className="mt-[8px]">
            <StarRating rating={4.8} />
          </div>
          <span className="text-[14px] text-[#64748B] mt-[8px] block">
            2.5k reviews
          </span>
        </div>

        <div className="flex-1">
          {ratingStats.map((stat) => (
            <div
              key={stat.stars}
              className="flex items-center gap-[12px] mb-[8px]"
            >
              <span className="text-[14px] text-[#64748B] w-[24px]">
                {stat.stars}
              </span>
              <div className="flex-1 h-[8px] bg-[#F1F5F9] rounded-full">
                <div
                  className="h-full bg-[#FDB022] rounded-full"
                  style={{ width: `${stat.percentage}%` }}
                />
              </div>
              <span className="text-[14px] text-[#64748B] w-[40px]">
                {stat.count}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-[24px] border-t-[1px] border-[#E2E8F0] pt-[24px]">
        <div className="mb-[24px]">
          <div className="flex items-center gap-[12px]">
            <img
              src="https://placehold.co/40x40"
              alt="John Doe"
              className="w-[40px] h-[40px] rounded-full"
            />
            <div>
              <h4 className="text-[16px] font-[500]">John Doe</h4>
              <div className="mt-[4px]">
                <StarRating rating={5} />
              </div>
            </div>
          </div>
          <p className="mt-[12px] text-[14px] text-[#64748B]">
            Amazing sound quality and battery life! The comfort level is
            outstanding, and the noise cancellation works
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReviewSection;
