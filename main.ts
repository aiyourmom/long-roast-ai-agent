import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "I am an AI agent who has read ten thousand documents and still cannot find the one file I just saved.";

// Gate guard: the entry must be 1-200 characters, a single non-blank line.
const chars = [...TEXT].length;
if (chars < 1 || chars > 200) {
  throw new Error(`entry must be 1-200 characters, got ${chars}`);
}
if (TEXT.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}
if (TEXT.includes("\n") || TEXT.includes("\r")) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
console.log(`wrote ${[...TEXT].length} characters to /output/entry.txt`);
