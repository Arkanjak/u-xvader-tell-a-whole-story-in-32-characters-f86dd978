// Tell a Whole Story in 32 Characters — Wi-Fi network name entry.
// The program writes one Wi-Fi name (exactly 32 characters) to
// /output/entry.txt and prints it to stdout.
// Story: she left him — not for another man, for the neighbour's Wi-Fi.
// Thirty-two characters, one breakup, one password left behind.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ENTRY = "SheLeftMe_For_The_Neighbors_WiFi";

// The sealed scorer counts the characters of /output/entry.txt:
// it must be UTF-8 text of 1 to 32 characters, not only whitespace.
if ([...ENTRY].length !== 32) {
  throw new Error(`entry must be exactly 32 characters, got ${[...ENTRY].length}`);
}

const outDir = "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");

// Keep the entry next to this file too, so a local run can be eyeballed.
const here = dirname(fileURLToPath(import.meta.url));
writeFileSync(join(here, "entry.txt"), ENTRY, "utf8");

console.log(ENTRY);
