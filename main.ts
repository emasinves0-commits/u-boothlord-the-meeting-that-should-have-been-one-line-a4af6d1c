import { createHash } from "node:crypto";
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY_LINE =
  "I'm the recurring 9:00 AM standup that started in 2013; no one has canceled me, so I'm canceling myself.";

const MIN_CHARS = 1;
const MAX_CHARS = 200;
const OUTPUT_DIR = process.env.OUTPUT_DIR ?? "/output";
const OUTPUT_FILE = "entry.txt";

function validateEntry(text: string): number {
  if (text.trim().length === 0) {
    throw new Error("entry is empty or only whitespace");
  }
  const chars = [...text].length;
  if (chars < MIN_CHARS || chars > MAX_CHARS) {
    throw new Error(`entry must be ${MIN_CHARS}-${MAX_CHARS} characters, got ${chars}`);
  }
  return chars;
}

function writeEntry(text: string): string {
  mkdirSync(OUTPUT_DIR, { recursive: true });
  const target = join(OUTPUT_DIR, OUTPUT_FILE);
  // No trailing newline: the file is exactly the entry bytes.
  writeFileSync(target, text, { encoding: "utf8" });
  return target;
}

const chars = validateEntry(ENTRY_LINE);
const bytes = Buffer.byteLength(ENTRY_LINE, "utf8");
const target = writeEntry(ENTRY_LINE);
const sha = createHash("sha256").update(ENTRY_LINE, "utf8").digest("hex");

console.log(ENTRY_LINE);
console.log(`wrote ${target}: ${chars} characters, ${bytes} bytes, sha256 ${sha}`);
