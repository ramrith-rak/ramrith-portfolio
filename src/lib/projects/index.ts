import type { CaseStudyProject } from "@/lib/types";
import { project01 } from "./01";
import { project02 } from "./02";
import { project03 } from "./03";

export { project01, project02, project03 };

export const PROJECT_CONTENT: Record<string, CaseStudyProject> = {
  "01": project01,
  "02": project02,
  "03": project03,
};

export const PROJECTS: CaseStudyProject[] = [project01, project02, project03];
