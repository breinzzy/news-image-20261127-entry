// World in One Image — Friday 27 November 2026, v1 (Node 22, stdlib only).
// The entry is the 1024x1024 front page in entry.png beside this file
// (36 dated stories, 8 regions, 15 fields; rendered deterministically
// from page-27nov.html, md5 4e20343dac16768e2f945e9b0c8b840e);
// the program copies it to /output/entry.png. The gate takes a whole
// PNG of at most 1 MiB and 1024 by 1024 pixels, and the judge sees
// exactly the bytes copied. Built from a late research pass (Fri 27 Nov
// 22:00-22:20 WIB, Reuters/AP + full-day digest + live top-3 benchmark
// of this edition): the Gulf war widens as two Italians are killed in
// the Kuwait drone strike, New Zealand's final count deadlocks 65-65,
// and EU budget talks fail after 12 hours.
// Verified 27 Nov 2026 ~22:30 WIB: the copy reproduces entry.png byte
// for byte (md5 4e20343dac16768e2f945e9b0c8b840e), and the page was read
// at full size, cropped row by row, and at 300px before submitting.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

copyFileSync(new URL('./entry.png', import.meta.url), join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.png'));
