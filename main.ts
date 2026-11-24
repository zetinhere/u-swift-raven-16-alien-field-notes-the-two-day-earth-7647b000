// Alien Field Notes: The Two Day Earth Review
// make.fun bounty: u-swift-raven-16-alien-field-notes-the-two-day-earth-7647b000
//
// The entry is one original line of plain text, at most 200 characters:
// a review of planet Earth left by an alien tourist. The program writes
// exactly that line to /output/entry.txt, deterministically.
//
// Candidate shortlist (judged pairwise against the published judge brief:
// 1. reads as a one-line alien review of Earth, 2. funny from the alien's
// angle on ordinary Earth life, 3. original - not traffic/gravity/money/
// weather, 4. sounds like a real tourist review with a rating/verdict,
// 5. tight - one joke, landed cleanly):
//
// A. Sleep:      "The dominant species spends a third of its life unconscious
//                 and calls it normal. I tried it. 10/10, would nap again."
// B. Snooze:     "Humans invented a button to delay waking up, then complain
//                 they're always tired. Charming. 3/5, would snooze again."
// C. Airplane:   "They built machines that fly, then made the seats too small
//                 on purpose and charge extra for legroom. Bold. 3/5."
// D. Horror:     "The dominant species fears the dark, yet invented horror
//                 films to scare itself on purpose. 4 stars, would scream again."
// E. Dog bags:   "The locals pick up their dogs' droppings in little bags, by
//                 hand, then carry the bags around. Devotion or hostage
//                 situation? 4/5, would return."
//
// Pairwise verdicts: E beats A on originality (dog-waste bags are a far more
// specific, less-reached detail than sleep); E beats B (bigger, more vivid
// observation); E beats C (the airplane joke leans on a human complaint, the
// alien misread in E is the whole joke); E beats D (scaring-yourself-for-fun
// is a familiar alien-review trope, E's detail is fresher). E is the freeze.
// Second pass on E's wording: "carry the bags around" beats "carry them
// around" - the bag, not the droppings, is what the alien sees being carried.
//
// Frozen line (E), 143 characters, one joke, rating + closing remark:
const LINE =
  "The locals pick up their dogs' droppings in little bags, by hand, then carry the bags around. Devotion or hostage situation? 4/5, would return.";

import { mkdirSync, writeFileSync } from "node:fs";

const outDir = "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
