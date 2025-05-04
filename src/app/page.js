import HomepageStats from "@/components/HomepageStats";
import Calendar from "@/ui/Calendar";
import Form from "@/ui/Form";
import React from "react";

function page() {
  return (
    <div className="flex flex-col items-center gap-7">
      <HomepageStats />
      <Calendar />
    </div>
  );
}

export default page;
