export default function countHours(year: number, holidays: string[]): number {
  const weekendDays = new Set([0, 6]);

  return holidays.reduce((accum, holiday) => {
    const [month, day] = holiday.split("/").map(Number);
    const date = new Date(Date.UTC(year, month - 1, day));
    const numDay = date.getUTCDay();

    if (!weekendDays.has(numDay)) {
      accum += 2;
    }
    return accum;
  }, 0)
}


const year = 2022
const holidays = ['01/06', '04/01', '12/25'] // format MM/DD

// 01/06 is January 6, Thursday. Count.
// 04/01 is April 1, Friday. Count.
// 12/25 is December 25, Sunday. Do not count.

countHours(year, holidays) // 2 days -> 4 extra hours in the year