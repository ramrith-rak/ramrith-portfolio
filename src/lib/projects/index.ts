import type { CaseStudyProject } from "@/lib/types";
import { project01 } from "./01";
import { project02 } from "./02";
import { project03 } from "./03";
import { project04 } from "./04";
import { project05 } from "./05";

export { project01, project02, project03, project04, project05 };

export const PROJECT_CONTENT: Record<string, CaseStudyProject> = {
  "01": project01,
  "02": project02,
  "03": project03,
  "04": project04,
  "05": project05,
};
