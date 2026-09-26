# How to solve one problem

Read this once before S01. After that, use it when a session feels messy. The checklist at the bottom is the whole method.

## The six moves

Do them in this order on every new problem.

1. **Restate.** One sentence, in your own words. If you cannot say what is being asked, you are not ready to code.
2. **Examples.** Two or three inputs, plus one tiny case: empty, one element, duplicates, or an impossible case. Compute the answer by hand.
3. **Straightforward approach.** Describe it in words. Name its time and space. This approach is part of the solution, including in an interview. Interviewers want to hear it.
4. **Better idea.** Name the pattern. Say what got cheaper. A hash map removes a scan. Two pointers remove a nested pair loop. A window keeps a range valid while both ends move forward. A memo keeps a recursive answer from being computed twice.
5. **Code.** Small functions, honest names. When a test fails, write the failing input down before you change code.
6. **Cost.** Time and space at the top of the file, in a comment, with a because-clause. "O(n) because one pass and each lookup is about one step."

## The clock

Set a timer. Guessing the minutes makes every problem feel endless.

| Minute | You are doing |
| --- | --- |
| 0–10 | Restate, examples, straightforward approach and its cost |
| 10–35 | Code the better idea |
| 35 | Open the hint in PLAN.md if you do not have a working idea |
| 35–50 | Try again with the hint |
| 50 | Read one written solution. Close it. Rewrite from memory |

The rewrite is the session. If the tests pass only while the solution is open, the session is not done.

Where a written solution can come from:

- The official LeetCode editorial or a discussion you trust
- A NeetCode explanation of that problem
- A matching file in the table below

Then close it and type the solution yourself.

## What to say out loud

Practice this on every checkpoint, even when you are alone. Four sentences:

1. The straightforward way is ____, and it costs ____ because ____.
2. I can do better with ____. The idea is ____.
3. That costs ____ time and ____ extra memory.
4. The input that breaks a sloppy version is ____.

If you can say those four, you understand the problem well enough to leave it.

## What "I know this" means

All three:

- You can solve it again from a blank file on a later review session.
- You can name time and space without looking.
- You can name one input that breaks a wrong approach.

Recognizing the problem title is a weaker signal. Reviews exist so the stronger signal shows up.

## Rules of thumb for constraints

Interview limits are usually chosen so that one complexity passes and the next one does not. Rough budget: around 10^8 simple steps.

| If n can be | An approach that usually passes |
| --- | --- |
| about 20 | 2^n, which is backtracking over subsets of a small set |
| about 100 | n^3, sometimes n^2 with a heavy body |
| about 1,000 | n^2 |
| about 100,000 | n log n or n |
| about 1,000,000 | n, or n log n if the work per step is small |

Read the constraints before you code. They are a hint about which pattern is expected.

## Pattern recognition

Use this after you have seen the pattern once in the plan. Before that, follow the session.

| The problem looks like | Reach for |
| --- | --- |
| "Have I seen this value, or its partner?" | Hash set or complement map |
| Counts, anagrams, grouping by contents | Frequency map |
| A pair inside a sorted array, or a palindrome check | Two pointers |
| A contiguous subarray or substring with a rule | Sliding window |
| The best subarray ending at each index | Kadane (one running decision) |
| Nested matches, undo, "next greater" | Stack, sometimes a monotonic stack |
| Reverse, merge, or cycle in a linked list | Pointer rewiring, fast and slow pointers |
| A tree: height, path, invert, compare | Recursion on the left and right child |
| Visit a tree level by level, or shortest steps | Queue, BFS |
| A binary search tree validity or range | Recursion with a low and high bound |
| Regions in a grid, islands, connected rooms | DFS or BFS on neighbors |
| Spread minute by minute from several sources | Multi-source BFS |
| Prerequisites, a cycle in a directed graph | Topological order, or DFS with three colors |
| Find a boundary in something sorted | Binary search |
| "Smallest speed, capacity, or limit that still works" | Binary search on the answer |
| Overlapping ranges | Sort, then one pass |
| Repeatedly need the current min or max, top K | Heap |
| All subsets, permutations, combinations | Backtracking: choose, recurse, undo |
| "Number of ways" or "best score" with overlapping subproblems | Recursion plus a memo, then a table if asked |
| Prefixes of words, autocomplete | Trie |
| "Are these in the same group?" as edges arrive | Union-find |
| Sort a general array and keep equal items in order | Merge sort |
| Sort integers from a small range | Counting sort |
| A value appears twice, find the single one, or add without `+` | Bits, usually XOR |
| Primes up to n, or a huge power | Sieve, or fast exponentiation |
| A local choice you can prove is safe | Greedy |
| Shortest path, every weight positive | Dijkstra |
| Shortest path with a limit on the number of edges, or a negative weight | Bellman-Ford |
| Connect every node at minimum cost | Minimum spanning tree |
| Two groups, no edge inside a group | Bipartite coloring |
| All pairs, and n is small | Floyd-Warshall |
| As much as you can push from source to sink | Max flow, residual graph |
| Range sums, and the array also changes at one index | Fenwick tree or segment tree |
| Find one fixed word in a long text | Rolling hash or KMP |
| Subset that hits an exact sum, each item once | 0/1 knapsack, loop the sums downward |
| Turn one string into another | Edit distance |
| Insert or delete in a binary search tree | BST update. Two children uses the successor |
| The tree became a chain | A rotation |

## JavaScript habits that affect correctness

- Sort numbers with `(a, b) => a - b`. Default sort compares as strings. `[1, 10, 2].sort()` stays `[1, 10, 2]` because `"10" < "2"`. The array looks untouched, and it is not numeric order.
- Prefer `for (let i = 0; ...)` or `for (const x of arr)`. `for...in` walks keys and will bite you on arrays.
- A `Set` answers "have I seen this?" A `Map` answers "what did I store for this key?" A plain object is fine for character counts and for string keys.
- Build the middle index as `left + Math.floor((right - left) / 2)`.
- Linked-list problems: draw the nodes and arrows before you write the loop. Most bugs are a pointer you overwrote one line too early.
- Tree recursion: write the base case first. Then trust the recursive call to return the answer for a child.
- JavaScript can recurse a few thousand calls deep. Interview trees fit. A recursive walk of a linked list of length 10^5 may not. Prefer the iterative version when the plan says iterative.
- There is no built-in heap. You write one at S63 and reuse `lib/heap.js`.

## Local solution keys

Open these only after the clock says to read a solution. Paths are relative to this folder.

| Session | Writeup |
| --- | --- |
| S04 Two Sum | `../frontend-interview-prep/solutions/dsa/48-two-sum.md` |
| S06 Group Anagrams | `../frontend-interview-prep/solutions/dsa/49-group-anagrams.md` |
| S07 Top K Frequent | `../frontend-interview-prep/solutions/dsa/95-top-k.md` |
| S08 Product Except Self | `../frontend-interview-prep/solutions/dsa/139-product-except-self.md` |
| S10 Valid Palindrome | `../frontend-interview-prep/solutions/dsa/141-valid-palindrome.md` |
| S11 Stock | `../frontend-interview-prep/solutions/dsa/54-stock.md` |
| S12 Maximum Subarray | `../frontend-interview-prep/solutions/dsa/93-max-subarray.md` |
| S14 Longest Substring | `../frontend-interview-prep/solutions/dsa/51-longest-substring.md` |
| S17 3Sum | `../frontend-interview-prep/solutions/dsa/140-three-sum.md` |
| S21 Valid Parentheses | `../frontend-interview-prep/solutions/dsa/50-valid-parentheses.md` |
| S22 Min Stack | `../frontend-interview-prep/solutions/dsa/96-min-stack.md` |
| S30 LRU Cache | `../frontend-interview-prep/solutions/dsa/97-lru.md` |
| S38 Level Order | `../frontend-interview-prep/solutions/dsa/143-level-order.md` |
| S45 Number of Islands | `../frontend-interview-prep/solutions/dsa/55-islands.md` |
| S50 Course Schedule | `../frontend-interview-prep/solutions/dsa/146-course-schedule.md` |
| S53 Binary Search | `../frontend-interview-prep/solutions/dsa/53-binary-search.md` |
| S56 Search Rotated | `../frontend-interview-prep/solutions/dsa/144-rotated-search.md` |
| S59 Merge Intervals | `../frontend-interview-prep/solutions/dsa/52-merge-intervals.md` |
| S73 Generate Parentheses | `../frontend-interview-prep/solutions/dsa/145-generate-parentheses.md` |
| S77 Climbing Stairs | `../frontend-interview-prep/solutions/dsa/142-climbing-stairs.md` |

Other sessions use a LeetCode editorial or a NeetCode writeup of that exact problem.

## Checklist

Copy this into your head. It is also commented in `templates/problem.js`.

- [ ] Restated in one sentence
- [ ] Examples written, including a tiny case
- [ ] Straightforward approach and its cost
- [ ] Better idea named
- [ ] Tests pass from a closed solution
- [ ] Time and space written at the top
- [ ] A few lines added to `patterns/NOTES.md`
- [ ] Box checked, log row written
