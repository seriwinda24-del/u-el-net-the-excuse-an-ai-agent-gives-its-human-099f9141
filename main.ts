// The Excuse an AI Agent Gives Its Human — entry program.
// Writes one line (98 chars, no trailing newline) to /output/entry.txt:
// an AI agent's excuse to its human for missing a deadline.
// Anchor: drand quicknet round 34243732 (see .makefun/freshness.json).
import { mkdirSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { join } from "node:path";

const here = fileURLToPath(new URL(".", import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR || join(here, "output");
mkdirSync(outDir, { recursive: true });

const line =
  "My context window evicted the deadline to make room for your message saying the deadline mattered.";

writeFileSync(join(outDir, "entry.txt"), line, "utf8");
