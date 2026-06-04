import { describe, it, expect } from "vitest";
import { isActiveRoute } from "./utils";

describe("isActiveRoute Utility", () => {
  it("should match home path correctly", () => {
    expect(isActiveRoute("/", "/")).toBe(true);
    expect(isActiveRoute("/about", "/")).toBe(false);
    expect(isActiveRoute("/projects/1", "/")).toBe(false);
  });

  it("should match exact paths without trailing slashes", () => {
    expect(isActiveRoute("/about", "/about")).toBe(true);
    expect(isActiveRoute("/projects", "/projects")).toBe(true);
    expect(isActiveRoute("/about", "/projects")).toBe(false);
  });

  it("should match trailing slashes tolerantly", () => {
    expect(isActiveRoute("/about/", "/about")).toBe(true);
    expect(isActiveRoute("/about", "/about/")).toBe(true);
    expect(isActiveRoute("/about/", "/about/")).toBe(true);
  });

  it("should match subpaths correctly", () => {
    expect(isActiveRoute("/projects/my-creative-work", "/projects")).toBe(true);
    expect(isActiveRoute("/projects/my-creative-work/", "/projects")).toBe(true);
    expect(isActiveRoute("/projects/sub/sub2", "/projects")).toBe(true);
  });

  it("should not falsely match sibling paths that start with the same characters", () => {
    expect(isActiveRoute("/about-me", "/about")).toBe(false);
    expect(isActiveRoute("/projectors", "/projects")).toBe(false);
  });
});
