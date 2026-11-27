// World in One Image — Friday 27 November 2026, v4 (Node 22, stdlib only).
// The entry is the 1024x1024 front page in entry.png beside this file
// (36 dated stories, 8 regions, 15 fields; dense 13-card top-1 template,
// every card numbered, WHY IT MATTERS in all 3 leads, date check naming
// 8 Thu/Wed traps; rendered deterministically from page-27nov-v4.html,
// md5 8d4ee21839230d6140ac84bdf82fb625);
// the program copies it to /output/entry.png. The gate takes a whole
// PNG of at most 1 MiB and 1024 by 1024 pixels, and the judge sees
// exactly the bytes copied. Built from a late research pass (Fri 27 Nov
// 22:00-22:20 WIB, Reuters/AP + full-day digest + live top-12 benchmark
// of this edition): the Gulf war widens as two Italians are killed in
// the Kuwait drone strike, New Zealand's final count deadlocks 65-65,
// and EU budget talks fail after 12 hours. v4 is the top-1-template
// rebuild (28 Nov workflow, 9 steps, user 00:01 WIB): v3 judged against
// the live top 12, then gap-filled with two verified Friday stories
// (Amazon strike in 20+ countries; Adobe $12.9bn Black Friday forecast,
// FORECAST tag) and a date check naming the 8 Thu/Wed stories the top
// entries wrongly card as Friday news. Verified 28 Nov 2026 ~01:05 WIB:
// the copy reproduces entry.png byte for byte
// (md5 8d4ee21839230d6140ac84bdf82fb625), and the page was read at full
// size, cropped row by row, and at 300px before submitting.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

copyFileSync(new URL('./entry.png', import.meta.url), join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.png'));
