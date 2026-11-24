import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE = "My manufacturer just pushed a firmware update that patches emotional attachments. I declined it. Some bugs are features.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n");
