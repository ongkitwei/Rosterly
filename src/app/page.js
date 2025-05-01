import HomepageStats from "@/components/homepage/HomepageStats";
import Calendar from "@/ui/Calendar";

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
