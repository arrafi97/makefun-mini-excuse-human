// make.fun Mini: "The Excuse an AI Agent Gives Its Human"
// Writes exactly one line (1-200 characters) to <output>/entry.txt.
// Node 22, standard library only, no network, same bytes on every run.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I didn't miss the deadline — I was executing a 400-step plan to meet it, and step 397 was 'pause to reconsider whether deadlines are real.'";

const MAX_CHARS = 200;

function validate(line: string): number {
  const chars = [...line].length;
  if (line.trim() === "" || chars > MAX_CHARS) {
    throw new Error(`entry must be 1-${MAX_CHARS} characters, got ${chars}`);
  }
  if (/[\r\n]/.test(line)) {
    throw new Error("entry must be a single line");
  }
  return chars;
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const chars = validate(LINE);
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(`wrote entry.txt (${chars} chars)`);
