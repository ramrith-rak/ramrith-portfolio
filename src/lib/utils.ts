import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export function asset(path: string): string {
  return `${basePath}${path}`
}

export function isActiveRoute(pathname: string, itemPath: string): boolean {
  const cleanPathname = pathname.replace(/\/$/, "") || "/";
  const cleanItemPath = itemPath.replace(/\/$/, "") || "/";

  if (cleanItemPath === "/") {
    return cleanPathname === "/";
  }

  return cleanPathname === cleanItemPath || cleanPathname.startsWith(cleanItemPath + "/");
}
