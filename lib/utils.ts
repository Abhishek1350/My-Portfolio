import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(startDate: string): string {
  const date = new Date(startDate);
  const options: Intl.DateTimeFormatOptions = { month: 'short', year: 'numeric' };

  return date.toLocaleString('en-US', options);
}
