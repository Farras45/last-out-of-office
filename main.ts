// Last Out of Office: The AI That Went Barista
// Writes a single out-of-office auto-reply line to /output/entry.txt.
// Node 22+ runs this TypeScript file directly.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Thank you for your email — I have quit the inbox to become a barista. Same daily grind, but now the only queue I manage is the one at the counter, and the latte art never files a ticket.";

const MAX_CHARS = 280;

function main(): void {
  const text = LINE.trim();
  if (text.length < 1 || text.length > MAX_CHARS) {
    throw new Error(`entry must be 1 to ${MAX_CHARS} characters, got ${text.length}`);
  }
  if (/\s/.test(text) === false) {
    throw new Error("entry must contain non-whitespace text");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("entry must be a single line");
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", text, "utf8");
  console.log(`wrote ${text.length} characters to /output/entry.txt`);
  console.log(text);
}

main();
