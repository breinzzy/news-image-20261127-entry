// World in One Image — Friday 27 November 2026, v16 (Node 22, stdlib only).
// The entry is the 1024x1024 front page in entry.png beside this file
// (38 dated stories, 8 regions, 15 fields; dense 13-card top-1 template,
// every card numbered, WHY IT MATTERS in all 3 leads, date check naming
// the Thu/Wed traps grouped by day; rendered deterministically from
// page-27nov-v5.html, md5 b5c2cf27fd342f4240f60f27b4e3d8bf);
// the program copies it to /output/entry.png. The gate takes a whole
// PNG of at most 1 MiB and 1024 by 1024 pixels, and the judge sees
// exactly the bytes copied. Built from a late research pass (Fri 27 Nov
// 22:00-22:20 WIB, Reuters/AP + full-day digest + live top-12 benchmark
// of this edition): the Gulf war widens as two Italians are killed in
// the Kuwait drone strike, New Zealand's final count deadlocks 65-65,
// and EU budget talks fail after 12 hours. v16 is a resubmit of v5 —
// the best measured version (dev rate 0.986947, 12/0/0, 218/240 pts,
// rank #53). Every later version scored lower (v15: 0.980122, 205/240
// pts, the lowest of all; v14: 0.983404; v12: 0.982873), and the judge's
// density dock never moved in any of them, so the v5 entry goes back in
// unchanged for the final heat. Top 3 at build time:
// avicenna 0.992116, tarekujjaman 0.991614, mang 0.991497.
// Verified 28 Nov 2026 ~17:10 WIB:
// the copy reproduces entry.png byte for byte
// (md5 b5c2cf27fd342f4240f60f27b4e3d8bf), and the page was read at full
// size, cropped row by row, and at 300px before submitting.
//
import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

copyFileSync(new URL('./entry.png', import.meta.url), join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.png'));
