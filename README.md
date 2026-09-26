# DSA practice

This folder is your algorithm practice, separate from the frontend interview notes next door. It has two finishes. S108 is interview ready. S161 is the rest of DSA as well: sorting, weighted graphs, range trees, string search, knapsack, and the judgment to pick a structure.

## Daily check

The phone page is [https://rahul-narayanasamy.github.io/dsa-practice/](https://rahul-narayanasamy.github.io/dsa-practice/).

Open it once a day. It shows the next session, the pattern it belongs to, and where that problem gets hard. Tap **I finished** when the code is done. **Path** groups the plan into chapters, step by step, with Easy, Medium, Hard, Review, Checkpoint, and Stretch marked on every row. One finished session completes the week. The tick is saved in that browser, so use one device for the check. Add the page to your home screen if you want it one tap away.

Copy or restore at the bottom of the page moves the ticks to another browser. The boxes in `PROGRESS.md` stay on your computer. A box you check in that file also counts as done on the site after the next publish.

The plan is 161 sessions in [PLAN.md](PLAN.md). Part 1 is S01–S108. Part 2 is S109–S161. You do the first unchecked box in [PROGRESS.md](PROGRESS.md). A missed day changes nothing. Nothing expires, and you never restart from the beginning because a week went badly.

## Why this is built for uneven weeks

Daily streaks punish real life. This plan scores finished sessions.

- A successful week is **one finished session**.
- A strong week is **three sessions**.
- Four or more is extra. It does not create a new quota for next week.

Open the folder, do the next session, check the box, write one log row, stop. Starting is allowed to be slow. The first 10 minutes can be rereading your last pattern note. That time counts.

If you disappear for a month, do one short redo of the last problem you solved, from a blank file. Then continue at the next unchecked session.

## How long it takes

Assume three sessions a week when you estimate, and accept fewer.

| You finish through | You can do | At 3 sessions a week |
| --- | --- | --- |
| S62, binary search and intervals | A typical easy screen and many mediums | About 5 months |
| S90, dynamic programming | Most medium algorithm rounds, with a reason for the approach | About 7 months |
| S108, timed reps | Interview ready, under a clock | About 9 months |
| S161, the full plan | Interview ready, and the rest of DSA | About 13 months |

The engineering payoff starts in the first month. Maps, windows, stacks, and trees show up in caches, search boxes, schedulers, file trees, and "what's the smallest limit that still works."

## What a session is

| Size | Time | When |
| --- | --- | --- |
| Short | 25 min | You are tired. Redo one problem you already solved. No new problem. |
| Normal | 50–70 min | The default. One new problem, done properly. |
| Long | 90–120 min | Design problems and phase checkpoints. The plan names these. |

One new problem per normal session. Solving five half-understood problems feels productive and washes out in a week.

## How to finish a session

The full method is [HOW-TO-SOLVE.md](HOW-TO-SOLVE.md). Short version:

1. Restate the problem. Write two or three examples, including an empty or tiny input.
2. Say a straightforward approach out loud and name its cost.
3. Code a better one. Use the pattern for the phase you are in.
4. Write time and space at the top of the file.
5. Add two to six lines to the matching section in [patterns/NOTES.md](patterns/NOTES.md).
6. Check the box and add a row to the log in [PROGRESS.md](PROGRESS.md).

Run from this folder:

```bash
node problems/s01-frequency.js
```

Copy [templates/problem.js](templates/problem.js) when you start a problem file. Name files `problems/sNN-short-name.js`.

## When you get stuck

- **35 minutes** with no working idea: open the hint in [PLAN.md](PLAN.md) and try for 15 more minutes.
- Still stuck: read a written solution. Close it. Rewrite the code from memory. Your file has to pass with the solution closed.
- Log `clean? no` when you needed the solution. That is a finished session. The planned redo will catch it.
- A video counts after you close it and re-solve. Watching alone does not complete a session.

Some problems already have a writeup in `../frontend-interview-prep/solutions/dsa/`. Those files are a solution key. Open them only at the "read a solution" step. The table in [HOW-TO-SOLVE.md](HOW-TO-SOLVE.md) lists which session each file belongs to.

Stretch sessions are marked in the plan. If one does not move after the hint, log it as `later` and continue. Part 1 stretches come back at S107. A Part 2 stretch still on the Later list becomes the code half of S161.

## Language

Stay in JavaScript for the whole plan. You can run it with Node today, and it matches your frontend interview work. If a company later wants Python or Java, the patterns carry over. Syntax is a short switch once the patterns are familiar.

## What each phase is for

| Phase | Sessions | You are learning |
| --- | --- | --- |
| 0. The method | S01–S03 | Cost of nested loops vs a set, and how a session works |
| 1. Arrays and strings | S04–S20 | Hash maps, two pointers, sliding window |
| 2. Stacks and lists | S21–S32 | Stacks, pointer rewiring, LRU |
| 3. Trees | S33–S44 | Recursion, depth, level order, BST ranges |
| 4. Graphs | S45–S52 | Grids, BFS, course prerequisites |
| 5. Search and intervals | S53–S62 | Binary search, including search on the answer |
| 6. Heaps | S63–S68 | Top-K and merging with a heap you built once |
| 7. Backtracking | S69–S76 | Subsets, permutations, grids |
| 8. Dynamic programming | S77–S90 | Recursion with memory, then tables |
| 9. Design structures | S91–S98 | Trie, union-find, O(1) random |
| 10. Timed reps | S99–S108 | Interview ready, under a 35-minute clock |
| 11. Sorting | S109–S112 | Merge sort, quicksort, counting sort |
| 12. Bits | S113–S117 | XOR, bit tricks, subsets by number |
| 13. Numbers | S118–S121 | GCD, the sieve, fast powers |
| 14. Greedy | S122–S127 | A local choice you can justify |
| 15. Weighted graphs | S128–S136 | Dijkstra, spanning trees, all-pairs, flow |
| 16. Range queries | S137–S142 | Fenwick tree and segment tree |
| 17. Strings | S143–S147 | Rolling hash and KMP |
| 18. DP, the rest | S148–S155 | Knapsack, edit distance, faster LIS |
| 19. Judgment | S156–S161 | BST updates, rotations, picking the structure |

Work top to bottom. Review sessions and checkpoints stay in the list on purpose. They are the part that makes the skill survive a skipped week.

## Today

Do **S01** only. It is in [PLAN.md](PLAN.md) under Phase 0. You write three small functions and say, in one sentence, why a nested loop and a set do different amounts of work. Then check S01 in [PROGRESS.md](PROGRESS.md).

Stop there even if you want to continue. Leaving the desk with a finished box is the habit this plan is teaching.

## Where things go

| File | Role |
| --- | --- |
| [PLAN.md](PLAN.md) | The session you open each time |
| [PROGRESS.md](PROGRESS.md) | The boxes and the log |
| [HOW-TO-SOLVE.md](HOW-TO-SOLVE.md) | The method, the clock, JavaScript habits, pattern recognition |
| [patterns/NOTES.md](patterns/NOTES.md) | Your words, filled a few lines at a time |
| [templates/problem.js](templates/problem.js) | Copy this into `problems/` |
| `problems/` | Your code. One file per session |
| `lib/` | Shared tools you write later, starting with a heap at S63 |
