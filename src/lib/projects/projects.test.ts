import { describe, it, expect } from "vitest";
import { PROJECTS } from "./index";
import { asset, basePath } from "../utils";

describe("Projects Registry", () => {
  it("should contain exactly 3 projects", () => {
    expect(PROJECTS).toHaveLength(3);
  });

  it("should have correct and sequential IDs", () => {
    expect(PROJECTS[0].id).toBe("01");
    expect(PROJECTS[1].id).toBe("02");
    expect(PROJECTS[2].id).toBe("03");
  });

  it("should have resolved the metadata description drift on project 02", () => {
    const project2 = PROJECTS.find((p) => p.id === "02");
    expect(project2).toBeDefined();
    expect(project2?.description).toContain("(Vibe Coding)");
  });

  it("should define a distinct thumbnail for project 01", () => {
    const project1 = PROJECTS.find((p) => p.id === "01");
    expect(project1).toBeDefined();
    expect(project1?.thumbnail).toBe("/projects/01/979shots_so.png");
    expect(project1?.image).toBe("/projects/01/hero.png");
  });
});

describe("Asset & Base Path Utility", () => {
  it("should correctly join the base path and target asset path", () => {
    expect(asset("/resume.pdf")).toBe(basePath + "/resume.pdf");
    expect(asset("/projects/01/hero.png")).toBe(basePath + "/projects/01/hero.png");
  });
});
