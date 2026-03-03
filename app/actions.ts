
const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hourCycle: "h24",
  };

export const eventDateTimeFormat = new Intl.DateTimeFormat("nb-NO", options);
export const currentDateTime = new Intl.DateTimeFormat("nb-NO", options);



export function getDateTimeParts(datetime: string){
  const eventDate = new Date(datetime);
  const parts = eventDateTimeFormat.formatToParts(eventDate);
  let dictionary: Partial<Record<string, string>> = {};
  for (const p of parts) {
    if (p.type === "literal") continue;
    dictionary[p.type] = p.value;
  }
  return dictionary;
} 

export function formatMonthString(month: string | undefined){
  if (month === undefined) return;

  const firstLetterCapitalized = month[0].toUpperCase();
  const restOfWord = month.slice(1);
  const wordCapitalized = firstLetterCapitalized + restOfWord;
  const monthTruncated = wordCapitalized.slice(0, 3);
  return monthTruncated;

}


