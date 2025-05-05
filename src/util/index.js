export function getDayAndMonthFromDateInput(dateInput) {
  const date = new Date(dateInput);

  // Set timezone to sg
  const now = date.toLocaleString("en-US", {
    timeZone: "Asia/Singapore",
  });
  const sgDate = new Date(now);

  const month = sgDate.getMonth() + 1; // add 1 because getMonth() is 0-based
  const day = sgDate.getDate(); // getDate() is 1-based
  return { month, day };
}

export function getDayName(selectedDate) {
  const dateObj = new Date(selectedDate);
  const dayName = dateObj.toLocaleDateString("en-US", {
    weekday: "long",
    timeZone: "Asia/Singapore", // Add this to get day in SG timezone
  }); // "Thursday"
  return dayName;
}

export function isDatePassed(dateString) {
  const inputDate = new Date(dateString);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return inputDate < today;
}
