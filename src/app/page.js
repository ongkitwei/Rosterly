import HomepageStats from "@/components/HomepageStats";
import Calendar from "@/ui/Calendar";
import Calendar2 from "@/ui/Calendar2";
import SkeletonCalendar from "@/ui/SkeletonCalendar";
import React from "react";

function page() {
  return (
    <div className="flex flex-col items-center gap-7 min-h-screen">
      <HomepageStats />
      <Calendar2 />
      {/* <SkeletonCalendar /> */}
    </div>
  );
}

export default page;
