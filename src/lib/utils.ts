import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const REPO = "ramrith-portfolio"
const isProd = process.env.NODE_ENV === "production"
export const basePath = isProd ? `/${REPO}` : ""

export function asset(path: string): string {
  return `${basePath}${path}`
}
