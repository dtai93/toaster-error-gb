import { mkdirSync, writeFileSync } from "node:fs";

const text = "E9: receipt in slot B. Browning.";
if ([...text].length < 1 || [...text].length > 120 || text.trim() === "") {
  throw new Error("bad entry");
}
const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(`${dir}/entry.txt`, text, { encoding: "utf8" });
