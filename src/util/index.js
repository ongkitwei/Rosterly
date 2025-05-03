export function getDayAndMonthFromDateInput(dateInput) {
  const date = new Date(dateInput);
  const month = date.getMonth() + 1; // add 1 because getMonth() is 0-based
  const day = date.getDate(); // getDate() is 1-based
  return { month, day };
}

export function getDayName(selectedDate) {
  const dateObj = new Date(selectedDate);
  const dayName = dateObj.toLocaleDateString("en-US", { weekday: "long" }); // "Thursday"
  return dayName;
}
