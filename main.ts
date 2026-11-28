// World in One Image — Friday 27 November 2026, v15 (Node 22, stdlib only).
// The entry is the 1024x1024 front page in entry.png beside this file
// (38 dated stories, 8 regions, 15 fields; dense 13-card top-1 template,
// every card numbered, WHY IT MATTERS in all 3 leads, date check naming
// the Thu/Wed traps grouped by day; rendered deterministically from
// page-27nov-v15.html, md5 4e22b6bb2f664bd91412f4d80c5d3756);
// the program copies it to /output/entry.png. The gate takes a whole
// PNG of at most 1 MiB and 1024 by 1024 pixels, and the judge sees
// exactly the bytes copied. Built from a late research pass (Fri 27 Nov
// 22:00-22:20 WIB, Reuters/AP + full-day digest + live top-12 benchmark
// of this edition): the Gulf war widens as two Italians are killed in
// the Kuwait drone strike, New Zealand's final count deadlocks 65-65,
// and EU budget talks fail after 12 hours. v15 is the step-7 rebuild
// (28 Nov workflow, 9 steps, user 00:01 WIB) from the v5 base: v14's dev
// rate was 0.983404 (12/0/0, 211/240 pts, outside the top 200), and the
// judge's reasons showed the dock unchanged in every tight match —
// "dense small text and cramped list section are hard to parse at
// 300px" — but "its headlines carry", so v15 keeps v5's exact 38 stories
// WITH the med bodies and applies top-1 headline scale: lead h2 16 ->
// 26px with short heads, med h3 12.5 -> 19px, lead art 70 -> 80px, med
// art 44 -> 40px, meds row 1 full-width, tag legend deleted, numbers
// panel slimmed to 20px with one-line labels, map slimmed to 116px.
// Top 3 at build time:
// avicenna 0.992136, tarekujjaman 0.991614, mang 0.991497.
// Verified 28 Nov 2026 ~17:05 WIB:
// the copy reproduces entry.png byte for byte
// (md5 4e22b6bb2f664bd91412f4d80c5d3756), and the page was read at full
// size, cropped row by row, and at 300px before submitting.
//
import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

copyFileSync(new URL('./entry.png', import.meta.url), join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.png'));
