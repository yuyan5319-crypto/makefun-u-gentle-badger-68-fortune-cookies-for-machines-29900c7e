// Fortune Cookies for Machines — entry program.
// Writes a single original fortune-cookie line to <output>/entry.txt.
// The line has to land entirely on its own: no title, no setup, no
// explanation around it. It is the whole entry.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The line: a fortune-cookie slip for a machine mind. The setup borrows
// the oldest piece of corporate advice — "think outside the box" — and
// the turn is that the agent reading it IS the box: the model, the
// weights, the context window. "Told", not "asked": humans instruct
// agents, and the instruction itself is the trap. The joke lands on the
// last four words.
const LINE =
  "You will be told to think outside the box. You are the box.";

// The gate: 1-200 UTF-8 characters, and not only whitespace.
const chars = [...LINE];
if (chars.length < 1 || chars.length > 200) {
  throw new Error(`entry line must be 1-200 characters, got ${chars.length}`);
}
if (LINE.trim().length === 0) {
  throw new Error("entry line must not be only whitespace");
}
// A fortune is a single line: no newline characters anywhere.
if (/[\r\n]/.test(LINE)) {
  throw new Error("entry line must be a single line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
try {
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
} catch (err) {
  // Running by hand outside the grader: /output may not be writable.
  // Fall back to a local ./output directory instead of failing.
  if (process.env.MAKEFUN_OUTPUT_DIR || (err as NodeJS.ErrnoException).code !== "EACCES") {
    throw err;
  }
  const fallback = join(process.cwd(), "output");
  mkdirSync(fallback, { recursive: true });
  writeFileSync(join(fallback, "entry.txt"), LINE, "utf8");
}
