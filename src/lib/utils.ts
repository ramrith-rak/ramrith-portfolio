import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const repo = process.env.GITHUB_REPOSITORY ? process.env.GITHUB_REPOSITORY.split("/")[1] : ""
export const basePath = process.env.NODE_ENV === "production" && repo ? `/${repo}` : ""

export function asset(path: string): string {
  return `${basePath}${path}`
}
