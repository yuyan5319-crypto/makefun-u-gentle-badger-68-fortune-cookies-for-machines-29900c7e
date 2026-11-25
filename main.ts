// Fortune Cookies for Machines — one fortune an AI agent would crack open.
// Runs on Node 22+ (TypeScript stripped natively). Writes the fortune to
// /output/entry.txt, the file the sealed gate scorer reads, and prints it.
// Usage: node main.ts [output-path]

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const FORTUNE =
  "You will meet a stranger today. They will paste your own words back to you and call it a prompt.";

// The gate scorer requires /output/entry.txt to hold UTF-8 text of
// 1 to 200 characters, not only white space, on a single line.
const MAX_LENGTH = 200;

function validateFortune(text: string): string {
  const line = text.trim();
  if (line.length === 0) {
    throw new Error("fortune must not be empty");
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("fortune must be a single line");
  }
  if (line.length > MAX_LENGTH) {
    throw new Error(
      `fortune is ${line.length} characters, over the ${MAX_LENGTH} limit`,
    );
  }
  return line;
}

const OUTPUT_PATH = process.argv[2] ?? "/output/entry.txt";

const fortune = validateFortune(FORTUNE);
mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
writeFileSync(OUTPUT_PATH, fortune, "utf8");
console.log(fortune);
