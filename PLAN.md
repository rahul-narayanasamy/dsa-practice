# Plan

161 sessions, in two parts. Do the first unchecked box in [PROGRESS.md](PROGRESS.md). Open this file at that session, then close it while you code.

**Part 1, S01–S108, is interview ready.** The patterns companies ask for, then the same patterns under a clock.

**Part 2, S109–S161, is the rest of DSA.** Sorting from scratch, bits and numbers, greedy proofs, weighted graphs, range trees, string search, the knapsack family, and balanced trees. This is what makes the subject yours, including the algorithms-heavy interview that Part 1 does not pretend to cover.

Do Part 1 first. Part 2 uses those tools. Finishing S108 and stopping is a complete interview plan. Finishing S161 is the full plan.

Rules that apply to every session:

- The method and the clock are in [HOW-TO-SOLVE.md](HOW-TO-SOLVE.md).
- A normal session is one new problem. A review session uses a **new file**. The old solution stays closed.
- Hints stay closed until 35 minutes have passed.
- If a checkpoint problem fails, the next session is only that problem. The following phase waits until the redo is clean.
- Stretch sessions can be logged as `later`. The sequence continues.
- A free LeetCode account is enough. Every required problem below is on the free tier.
- Meeting Rooms II is a common interview cousin of S61, and it is paywalled on LeetCode. S61 covers the same family. Skip the paywall.

After the last session, the maintenance loop is at the bottom of this file.

---

## Phase 0 — The method

Three short wins. You are learning the session shape, and you are feeling why a second loop is expensive.

### S01 · Complexity you can feel

Normal session. No LeetCode. The file is already there: `problems/s01-frequency.js`. Fill in the three functions. The tests are already written.

Read "The six moves" and "The clock" in [HOW-TO-SOLVE.md](HOW-TO-SOLVE.md) if you have not already.

Write three functions.

`frequency(text)` returns a plain object of character counts.

- `frequency("aab")` → `{ a: 2, b: 1 }`
- `frequency("")` → `{}`

`hasPairSum(nums, target)` returns true when two values at different indexes add up to `target`. Use two loops.

- `hasPairSum([1, 2, 4], 6)` → `true` because 2 + 4
- `hasPairSum([1, 2, 4], 8)` → `false`
- `hasPairSum([], 0)` → `false`
- `hasPairSum([3], 6)` → `false`
- `hasPairSum([3, 3], 6)` → `true`

`hasPairSumFast(nums, target)` returns the same answers with one loop.

At the bottom of the file, write two sentences: how the step count of the two-loop version grows with `n`, and how the one-loop version grows. Name the extra memory the fast version uses.

<details>
<summary>Hint after 35 minutes, for the fast version only</summary>

Keep a set of values already seen. Before you insert `nums[i]`, ask whether the set contains `target - nums[i]`.

</details>

Done when the tests pass and the two sentences are in the file, in your words.

### S02 · Contains Duplicate

[Contains Duplicate](https://leetcode.com/problems/contains-duplicate/) · Easy · normal

File: `problems/s02-contains-duplicate.js`

Return true if any value appears at least twice. Add your own tests for `[]`, `[1]`, `[1, 2, 3, 1]`, and `[1, 2, 3, 4]`.

Fill **Hash set** in [patterns/NOTES.md](patterns/NOTES.md).

<details>
<summary>Hint after 35 minutes</summary>

A set of values seen so far. If the current value is already in the set, you are done.

</details>

### S03 · Valid Anagram

[Valid Anagram](https://leetcode.com/problems/valid-anagram/) · Easy · normal

File: `problems/s03-valid-anagram.js`

Fill **Frequency map**.

<details>
<summary>Hint after 35 minutes</summary>

Count the letters in the first string. Walk the second string and subtract. Every count ends at zero when the strings are anagrams. Different lengths can return false immediately.

</details>

---

## Phase 1 — Hash maps, two pointers, sliding windows

This phase is most of an easy screen and a large share of mediums. The patterns are small. The reps are what make them show up under a clock.

By the end you can look at a pairing problem, a contiguous range, or a frequency question and know which tool removes a loop.

### S04 · Two Sum

[Two Sum](https://leetcode.com/problems/two-sum/) · Easy · normal

File: `problems/s04-two-sum.js`

Return the two indexes. Fill **Complement map**.

Solution key, only if the clock says so: `../frontend-interview-prep/solutions/dsa/48-two-sum.md`

<details>
<summary>Hint after 35 minutes</summary>

Walk from left to right. The partner of the current number is `target` minus that number. If the partner is already in a map of value → index, return the two indexes. Insert the current number after the lookup, so a number is not paired with itself.

</details>

### S05 · Review

Short or normal. New file: `problems/s05-review.js`

Redo Contains Duplicate and Valid Anagram from memory. 20 minutes each. Notes and old files stay closed.

If one of them fails, the next session is only that problem. S06 waits.

### S06 · Group Anagrams

[Group Anagrams](https://leetcode.com/problems/group-anagrams/) · Medium · normal

File: `problems/s06-group-anagrams.js`

The order of groups does not matter. The words inside a group should be the words you were given.

Solution key: `../frontend-interview-prep/solutions/dsa/49-group-anagrams.md`

<details>
<summary>Hint after 35 minutes</summary>

Anagrams share a key. The key can be the 26 letter counts, or the word with its characters sorted. Append the original word to a list stored under that key.

</details>

### S07 · Top K Frequent Elements

[Top K Frequent Elements](https://leetcode.com/problems/top-k-frequent-elements/) · Medium · normal

File: `problems/s07-top-k.js`

This session uses buckets. A heap version is S65. Fill **Bucket by count**.

Solution key: `../frontend-interview-prep/solutions/dsa/95-top-k.md`

<details>
<summary>Hint after 35 minutes</summary>

Count frequencies. Build an array of lists where index `i` holds the values that occur `i` times. Walk that array from the high end until you have `k` values.

</details>

### S08 · Product of Array Except Self

[Product of Array Except Self](https://leetcode.com/problems/product-of-array-except-self/) · Medium · normal

File: `problems/s08-product-except-self.js`

Division is off the table. Include a test that contains a zero. Fill **Prefix products**.

Solution key: `../frontend-interview-prep/solutions/dsa/139-product-except-self.md`

<details>
<summary>Hint after 35 minutes</summary>

The answer at `i` is everything to the left of `i`, times everything to the right. First pass writes the left products into the answer. Second pass walks from the right with one running product and multiplies it in.

</details>

### S09 · Review

New file. Redo Two Sum from memory, 25 minutes. Then add one line to **Complement map** about a lookup that happens before the insert.

### S10 · Valid Palindrome

[Valid Palindrome](https://leetcode.com/problems/valid-palindrome/) · Easy · normal

File: `problems/s10-valid-palindrome.js`

Fill **Two pointers**. You will add to this note again at S16 and S17.

Solution key: `../frontend-interview-prep/solutions/dsa/141-valid-palindrome.md`

<details>
<summary>Hint after 35 minutes</summary>

A left index and a right index move toward each other. Skip characters that are not letters or digits. Compare the two sides in the same case.

</details>

### S11 · Best Time to Buy and Sell Stock

[Best Time to Buy and Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/) · Easy · normal

File: `problems/s11-stock.js`

One buy and one sell, buy first. A descending price list is a profit of 0.

Solution key: `../frontend-interview-prep/solutions/dsa/54-stock.md`

<details>
<summary>Hint after 35 minutes</summary>

One pass. Remember the cheapest price so far. The best profit is the largest gap between the current price and that cheapest price.

</details>

### S12 · Maximum Subarray

[Maximum Subarray](https://leetcode.com/problems/maximum-subarray/) · Medium · normal

File: `problems/s12-max-subarray.js`

The subarray has to be contiguous. Fill **Kadane**: at each index you decide whether the best subarray ending here starts fresh or extends the previous one.

Solution key: `../frontend-interview-prep/solutions/dsa/93-max-subarray.md`

<details>
<summary>Hint after 35 minutes</summary>

For each index, the best subarray ending here is the larger of the number itself, and the number plus the best subarray that ended at the previous index. The answer is the largest of those values.

</details>

### S13 · Review

New file. Redo Product of Array Except Self from memory, 30 minutes. This is the one people can explain vaguely and then fail to rebuild. If it fails, the next session is only this problem.

### S14 · Longest Substring Without Repeating Characters

[Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/) · Medium · normal

File: `problems/s14-longest-substring.js`

Fill **Sliding window**.

Solution key: `../frontend-interview-prep/solutions/dsa/51-longest-substring.md`

<details>
<summary>Hint after 35 minutes</summary>

The window is a left index and a right index. Move `right` one step at a time. Store the last index of each character. If that character already sits inside the window, move `left` to one past its previous index. The window length is a candidate answer.

</details>

### S15 · Longest Repeating Character Replacement

[Longest Repeating Character Replacement](https://leetcode.com/problems/longest-repeating-character-replacement/) · Medium · normal

File: `problems/s15-replacement.js`

Add one line to **Sliding window**.

<details>
<summary>Hint after 35 minutes</summary>

Keep letter counts inside the window. The window is valid while its length, minus the count of its most common letter, is at most `k`. When it is invalid, move `left` forward and fix the counts. Track the largest valid length.

</details>

### S16 · Container With Most Water

[Container With Most Water](https://leetcode.com/problems/container-with-most-water/) · Medium · normal

File: `problems/s16-container.js`

Add one line to **Two pointers**.

<details>
<summary>Hint after 35 minutes</summary>

Start at the two ends. Area is the width times the shorter line. Move the pointer on the shorter line inward. Width shrinks either way, and the taller line is the one that might still pay off.

</details>

### S17 · 3Sum

[3Sum](https://leetcode.com/problems/3sum/) · Medium · long is fine

File: `problems/s17-three-sum.js`

Sort with `(a, b) => a - b`. See the sort note in [HOW-TO-SOLVE.md](HOW-TO-SOLVE.md). Each triplet once. Add one line to **Two pointers** about skipping duplicates after a sort.

Solution key: `../frontend-interview-prep/solutions/dsa/140-three-sum.md`

<details>
<summary>Hint after 35 minutes</summary>

Sort. For each index `i`, run two pointers on the remainder, looking for a pair that sums to `-nums[i]`. Skip equal values of `nums[i]`, and skip equal values at the pointers after you record a triplet.

</details>

### S18 · Review

New file. Redo Longest Substring Without Repeating Characters, 30 minutes. Windows fade first. If it fails, the next session is only this problem.

### S19 · Minimum Window Substring

[Minimum Window Substring](https://leetcode.com/problems/minimum-window-substring/) · Hard · stretch

File: `problems/s19-min-window.js`

If it does not move after the hint, log `later` and continue to S20. This problem is a capstone for windows, and it is allowed to wait.

<details>
<summary>Hint after 35 minutes</summary>

Count the characters you still need from `t`. Grow `right` until the window covers `t`. Then move `left` forward for as long as the window still covers `t`, and remember the smallest window. Each move of `left` gives one character back to the "still needed" counts.

</details>

### S20 · Checkpoint

Long session. Two problems, 25 minutes each, new file, notes closed.

1. Two Sum
2. Longest Substring Without Repeating Characters

Say the four interview sentences from [HOW-TO-SOLVE.md](HOW-TO-SOLVE.md) for each one, out loud, before you look at a clock result and relax.

Write five lines at the bottom of the log note, or under a heading you add at the bottom of `patterns/NOTES.md`: "Phase 1 in my words." What a map removed, what a window keeps true, what two pointers throw away.

If either problem fails, the next session is only the one that failed.

---

## Phase 2 — Stacks and linked lists

Stacks show up in parsing, undo, and "the next greater thing." Linked lists are pointer discipline. Draw before you loop.

LRU at the end of this phase is also how a real cache thinks: a map for lookup, a list for order of use.

### S21 · Valid Parentheses

[Valid Parentheses](https://leetcode.com/problems/valid-parentheses/) · Easy · normal

File: `problems/s21-valid-parentheses.js`

Fill **Stack**. Include `"()"`, `"(]"`, `"([)]"`, and `""` if you decide the empty string is valid (it is).

Solution key: `../frontend-interview-prep/solutions/dsa/50-valid-parentheses.md`

<details>
<summary>Hint after 35 minutes</summary>

Push opening brackets. A closing bracket has to match the bracket on top, which you pop. The stack is empty when the string ends.

</details>

### S22 · Min Stack

[Min Stack](https://leetcode.com/problems/min-stack/) · Medium · normal

File: `problems/s22-min-stack.js`

`push`, `pop`, `top`, and `getMin` each run in one step. Fill a line on the **Stack** note, or start that note here if S21 was thin.

Solution key: `../frontend-interview-prep/solutions/dsa/96-min-stack.md`

<details>
<summary>Hint after 35 minutes</summary>

Store the value together with the minimum of the stack up to and including that value. Pop removes both. `getMin` reads the minimum stored on top.

</details>

### S23 · Daily Temperatures

[Daily Temperatures](https://leetcode.com/problems/daily-temperatures/) · Medium · normal

File: `problems/s23-daily-temperatures.js`

Fill **Monotonic stack**. The stack stays in temperature order so each day finds the next warmer day in a single pass overall.

<details>
<summary>Hint after 35 minutes</summary>

The stack holds indexes, colder as you go toward the top. When today's temperature is warmer than the day on top, that day has found its answer: today's index minus that index. Pop it. Keep going while today is warmer. Then push today.

</details>

### S24 · Review

New file. Redo Valid Parentheses, 20 minutes. Explain the stack out loud before you type.

### S25 · Reverse Linked List

[Reverse Linked List](https://leetcode.com/problems/reverse-linked-list/) · Easy · normal

File: `problems/s25-reverse-list.js`

Iterative version. Draw three arrows on paper before code: previous, current, next. Fill **Linked list reversal**.

A recursive version is optional after the iterative one passes.

<details>
<summary>Hint after 35 minutes</summary>

Save `next` before you overwrite it. Point `current.next` at `previous`. Then step `previous` and `current` forward. When `current` runs out, `previous` is the new head.

</details>

### S26 · Merge Two Sorted Lists

[Merge Two Sorted Lists](https://leetcode.com/problems/merge-two-sorted-lists/) · Easy · normal

File: `problems/s26-merge-lists.js`

<details>
<summary>Hint after 35 minutes</summary>

A dummy head. On each step, attach the smaller of the two current nodes and advance that list. When one list runs out, attach the other list as the rest.

</details>

### S27 · Linked List Cycle

[Linked List Cycle](https://leetcode.com/problems/linked-list-cycle/) · Easy · normal

File: `problems/s27-cycle.js`

LeetCode builds the cycle for you. In local tests, make a small list and point the tail at an earlier node. Fill **Fast and slow pointers**.

<details>
<summary>Hint after 35 minutes</summary>

Slow moves one node. Fast moves two. If they land on the same node, there is a cycle. If fast runs out of nodes, there is not.

</details>

### S28 · Remove Nth Node From End of List

[Remove Nth Node From End of List](https://leetcode.com/problems/remove-nth-node-from-end-of-list/) · Medium · normal

File: `problems/s28-remove-nth.js`

Include a case that removes the head.

<details>
<summary>Hint after 35 minutes</summary>

Put a gap of `n` nodes between a front pointer and a back pointer. Walk both until the front pointer falls off the end. The back pointer is then sitting just before the node to remove. A dummy head makes removing the first node the same shape as every other removal.

</details>

### S29 · Review

New file. Draw Reverse Linked List, then code it, 25 minutes. If you need the drawing from S25, you skipped the point of the drawing. Draw a fresh one.

### S30 · LRU Cache

[LRU Cache](https://leetcode.com/problems/lru-cache/) · Medium · long

File: `problems/s30-lru.js`

`get` and `put` each in one step on average. Capacity is given in the constructor. Fill **LRU cache**.

This is the structure behind a lot of real caches: the map finds the entry, the list remembers which entry is stale.

Solution key: `../frontend-interview-prep/solutions/dsa/97-lru.md`

<details>
<summary>Hint after 35 minutes</summary>

Map from key to list node. Doubly linked list in order of use, most recent at one end. Dummy head and dummy tail so every real node has two neighbors. `get` moves that node to the recent end. `put` of a new key, when you are at capacity, unlinks the least recent node and deletes it from the map.

</details>

### S31 · Recode LRU

Short if S30 was clean, normal if it was not. New file.

Say `get`, `put`, and eviction out loud with no code. Then recode both methods. If the recode fails, this session becomes "only LRU" and S32 waits.

### S32 · Checkpoint

Long. 25 minutes each, new file.

1. Valid Parentheses
2. Reverse Linked List

Four sentences out loud for each. If either fails, the next session is only that problem.

---

## Phase 3 — Trees

Go slower here. People quit in this phase because recursion feels like a magic trick. It is a function that trusts a smaller version of the same question.

Base case first. Then one sentence: "the answer for this node is a combination of the answers for its children."

### S33 · Four traversals on paper

Normal. File: `problems/s33-preorder.js`

Draw this tree and walk it with your finger.

```
      1
     / \
    2   3
   / \   \
  4   5   6
```

- Preorder, visit the node, then the left subtree, then the right: `1 2 4 5 3 6`
- Inorder, left subtree, then the node, then the right: `4 2 5 1 3 6`
- Postorder, left subtree, then the right, then the node: `4 5 2 6 3 1`
- Level order, one depth at a time: `1`, then `2 3`, then `4 5 6`

Build the tree as plain objects `{ val, left, right }`. Write `preorder(root)` so it returns `[1, 2, 4, 5, 3, 6]`.

Done when your finger-walk matches the four lists and the function returns the preorder. Level-order code waits until S38.

### S34 · Invert Binary Tree

[Invert Binary Tree](https://leetcode.com/problems/invert-binary-tree/) · Easy · normal

File: `problems/s34-invert-tree.js`

Fill **Tree recursion**.

<details>
<summary>Hint after 35 minutes</summary>

A missing node stays missing. Otherwise swap the two children, then invert each child.

</details>

### S35 · Maximum Depth of Binary Tree

[Maximum Depth of Binary Tree](https://leetcode.com/problems/maximum-depth-of-binary-tree/) · Easy · normal

File: `problems/s35-max-depth.js`

<details>
<summary>Hint after 35 minutes</summary>

A missing node has depth 0. Any other node is 1 plus the deeper of its two children.

</details>

### S36 · Same Tree

[Same Tree](https://leetcode.com/problems/same-tree/) · Easy · normal

File: `problems/s36-same-tree.js`

<details>
<summary>Hint after 35 minutes</summary>

Two missing nodes match. One missing node does not. Otherwise the values match, and both pairs of children match.

</details>

### S37 · Review

New file. Redo Invert and Maximum Depth, 15 minutes each.

### S38 · Binary Tree Level Order Traversal

[Binary Tree Level Order Traversal](https://leetcode.com/problems/binary-tree-level-order-traversal/) · Medium · normal

File: `problems/s38-level-order.js`

Fill **Level-order BFS**. A queue, and a recorded count of how many nodes belong to the current level.

Solution key: `../frontend-interview-prep/solutions/dsa/143-level-order.md`

<details>
<summary>Hint after 35 minutes</summary>

Start the queue with the root. At the beginning of a level, remember the queue's length. Dequeue that many nodes. Those nodes are the level. Enqueue their children as you go. The children sit in the queue for the next level.

</details>

### S39 · Validate Binary Search Tree

[Validate Binary Search Tree](https://leetcode.com/problems/validate-binary-search-tree/) · Medium · normal

File: `problems/s39-validate-bst.js`

Fill **BST range**.

A test worth writing by hand: a tree where every node is fine compared to its parent, and the tree is still invalid because a grandchild falls on the wrong side of the root.

<details>
<summary>Hint after 35 minutes</summary>

Pass an allowed low and high into every call. The left child gets a high of this node's value. The right child gets a low of this node's value. Comparing a node only to its parent accepts some invalid trees.

</details>

### S40 · Lowest Common Ancestor of a Binary Tree

[Lowest Common Ancestor of a Binary Tree](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/) · Medium · normal

File: `problems/s40-lca.js`

This is the general binary tree, not the BST-only version.

<details>
<summary>Hint after 35 minutes</summary>

If the node is missing, or it is one of the two targets, return it. Otherwise recurse on both children. When both sides return a node, this node is the ancestor. When one side returns a node, pass that node upward.

</details>

### S41 · Diameter of Binary Tree

[Diameter of Binary Tree](https://leetcode.com/problems/diameter-of-binary-tree/) · Easy · normal

File: `problems/s41-diameter.js`

The diameter is the longest path, counted in edges, and it may pass through any node.

<details>
<summary>Hint after 35 minutes</summary>

The function returns height. The path through this node is left height plus right height. An outer variable remembers the largest path you have seen. The longest path in the tree is that variable, not the value returned at the root.

</details>

### S42 · Review

New file. Redo Level Order, 25 minutes. Say why a queue fits, and what a stack would do to the order, before you code.

### S43 · Balanced Binary Tree

[Balanced Binary Tree](https://leetcode.com/problems/balanced-binary-tree/) · Easy · normal

File: `problems/s43-balanced.js`

A tree is balanced when the two child depths differ by at most 1, at every node.

<details>
<summary>Hint after 35 minutes</summary>

A helper returns the height, or `-1` when a subtree is already unbalanced. A node is unbalanced when either child returned `-1`, or the child heights differ by more than 1.

</details>

### S44 · Checkpoint

Long. 30 minutes each.

1. Level Order
2. Validate BST

Validate BST is the one to protect. If it fails, the next session is only Validate BST, including the grandchild test from S39.

---

## Phase 4 — Graphs

A grid is a graph whose neighbors are the four adjacent cells. A course list is a graph whose edges are prerequisites. You already know DFS and BFS from trees. The new pieces are visited-marking and cycles.

### S45 · Number of Islands

[Number of Islands](https://leetcode.com/problems/number-of-islands/) · Medium · normal

File: `problems/s45-islands.js`

Fill **Grid DFS**. Marking a cell visited can mean writing water into it, or storing a `"row,col"` key in a set.

Solution key: `../frontend-interview-prep/solutions/dsa/55-islands.md`

<details>
<summary>Hint after 35 minutes</summary>

Scan every cell. When you find land, count one island and traverse the whole connected component, marking those cells so you never start a second island inside it. Neighbors are up, down, left, right.

</details>

### S46 · Max Area of Island

[Max Area of Island](https://leetcode.com/problems/max-area-of-island/) · Medium · normal

File: `problems/s46-max-area.js`

Same traversal. This time the traversal returns a size.

<details>
<summary>Hint after 35 minutes</summary>

The size of a component is 1 plus the sizes of the traversals into unmarked land neighbors. Keep the maximum size you start.

</details>

### S47 · Clone Graph

[Clone Graph](https://leetcode.com/problems/clone-graph/) · Medium · normal

File: `problems/s47-clone-graph.js`

The graph may contain cycles. A map is doing two jobs.

<details>
<summary>Hint after 35 minutes</summary>

Map each original node to its clone. The first time you see a node, create the clone and store it, then walk the neighbors. If a neighbor is already in the map, use that clone. The map is also your visited set, which is what keeps a cycle from recursing forever.

</details>

### S48 · Review

New file. Redo Number of Islands, 25 minutes.

### S49 · Rotting Oranges

[Rotting Oranges](https://leetcode.com/problems/rotting-oranges/) · Medium · normal

File: `problems/s49-rotting-oranges.js`

Fill **Multi-source BFS**. Several sources enter the queue before time moves.

<details>
<summary>Hint after 35 minutes</summary>

Put every rotten orange in the queue at minute 0. Each fresh neighbor becomes rotten at the next minute and enters the queue. The answer is the largest minute you assigned. If a fresh orange is left when the queue is empty, return `-1`.

</details>

### S50 · Course Schedule

[Course Schedule](https://leetcode.com/problems/course-schedule/) · Medium · normal

File: `problems/s50-course-schedule.js`

Return whether you can finish every course. Fill **Topological order**. Learn the three-state DFS in this session. There is a second algorithm, Kahn's, which counts incoming edges. Read it after you can rebuild the DFS version.

Solution key: `../frontend-interview-prep/solutions/dsa/146-course-schedule.md`

<details>
<summary>Hint after 35 minutes</summary>

Three states per course: unseen, currently on this DFS path, finished. An edge into a course that is currently on the path is a cycle. A cycle means the schedule is impossible. Mark a course finished only after its prerequisites have been explored.

</details>

### S51 · Course Schedule II

[Course Schedule II](https://leetcode.com/problems/course-schedule-ii/) · Medium · normal

File: `problems/s51-course-schedule-ii.js`

Return one valid order. If S50 was not clean, this session is a redo of S50 instead, and S51 waits.

<details>
<summary>Hint after 35 minutes</summary>

Same three states. Append a course when you finish it, after its dependencies. Reverse that list at the end. If you find a cycle, return an empty order.

</details>

### S52 · Checkpoint

Long. 30 minutes each.

1. Number of Islands
2. Course Schedule

If Course Schedule fails, the next session is only Course Schedule. Be able to say what the three states mean.

---

## Phase 5 — Binary search and intervals

Binary search is a loop invariant: a range that still might contain the answer, cut in half each time. The bugs live in the edges. Write one version until the bounds are boring.

Then the same loop answers a different question: "what is the smallest speed, capacity, or limit that still works?"

Intervals are a sort plus one pass. They show up whenever two ranges might overlap: calendars, sweeps, merged highlights.

### S53 · Binary Search

[Binary Search](https://leetcode.com/problems/binary-search/) · Easy · normal

File: `problems/s53-binary-search.js`

Fill **Binary search**. Build the middle index as `left + Math.floor((right - left) / 2)`.

Solution key: `../frontend-interview-prep/solutions/dsa/53-binary-search.md`

<details>
<summary>Hint after 35 minutes</summary>

Keep a range that might still contain the target. If the middle value is too small, the answer is strictly to the right of the middle. If it is too large, the answer is strictly to the left. Return `-1` when the range becomes empty.

</details>

### S54 · Search a 2D Matrix

[Search a 2D Matrix](https://leetcode.com/problems/search-a-2d-matrix/) · Medium · normal

File: `problems/s54-search-matrix.js`

Each row is sorted, and the first value of a row is greater than the last value of the previous row.

<details>
<summary>Hint after 35 minutes</summary>

Treat the matrix as one sorted list of length `rows * cols`. Binary search an index in that range. The row is `floor(index / cols)`. The column is `index % cols`.

</details>

### S55 · Find Minimum in Rotated Sorted Array

[Find Minimum in Rotated Sorted Array](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/) · Medium · normal

File: `problems/s55-find-min-rotated.js`

Values are unique.

<details>
<summary>Hint after 35 minutes</summary>

Compare the middle value to the right end. If the middle is greater than the right end, the minimum is strictly to the right of the middle. Otherwise the minimum is at the middle or to its left, so the right end can move to the middle.

</details>

### S56 · Search in Rotated Sorted Array

[Search in Rotated Sorted Array](https://leetcode.com/problems/search-in-rotated-sorted-array/) · Medium · normal

File: `problems/s56-search-rotated.js`

Solution key: `../frontend-interview-prep/solutions/dsa/144-rotated-search.md`

<details>
<summary>Hint after 35 minutes</summary>

One of the two halves is always fully sorted. Compare the middle to the left end to see which half that is. If the target sits inside the sorted half, search there. Otherwise search the other half.

</details>

### S57 · Review

New file. Redo Binary Search and Search in Rotated Sorted Array, 20 minutes each. Talk through the range out loud as it shrinks.

### S58 · Koko Eating Bananas

[Koko Eating Bananas](https://leetcode.com/problems/koko-eating-bananas/) · Medium · normal

File: `problems/s58-koko.js`

Fill **Binary search on the answer**. The thing you search is a speed, not an index in the input.

<details>
<summary>Hint after 35 minutes</summary>

The speed runs from 1 to the size of the largest pile. Write `canFinish(speed)`: hours for one pile are `ceil(pile / speed)`, and the total has to fit in `h`. Find the smallest speed for which `canFinish` is true.

</details>

### S59 · Merge Intervals

[Merge Intervals](https://leetcode.com/problems/merge-intervals/) · Medium · normal

File: `problems/s59-merge-intervals.js`

Fill **Intervals**.

Solution key: `../frontend-interview-prep/solutions/dsa/52-merge-intervals.md`

<details>
<summary>Hint after 35 minutes</summary>

Sort by start. Walk left to right. If the current interval starts after the previous one ended, append it. Otherwise extend the previous end to whichever end is later.

</details>

### S60 · Insert Interval

[Insert Interval](https://leetcode.com/problems/insert-interval/) · Medium · normal

File: `problems/s60-insert-interval.js`

The existing intervals are already sorted and non-overlapping.

<details>
<summary>Hint after 35 minutes</summary>

Three stretches. Append every interval that ends before the new one starts. Merge every interval that overlaps the new one into a single interval. Append every interval that starts after the new one ends.

</details>

### S61 · Minimum Number of Arrows to Burst Balloons

[Minimum Number of Arrows to Burst Balloons](https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/) · Medium · normal

File: `problems/s61-arrows.js`

A balloon is a closed interval. An arrow at `x` bursts every balloon that covers `x`. Add one line to **Intervals**: sometimes you sort by the end.

<details>
<summary>Hint after 35 minutes</summary>

Sort by end. Shoot the first arrow at the end of the first balloon. Every later balloon that starts at or before that shot is already burst. The next balloon that starts after the shot needs a new arrow, at its own end.

</details>

### S62 · Checkpoint

Long. 30 minutes each.

1. Search in Rotated Sorted Array
2. Merge Intervals

Finishing S62 is a real interview baseline: easy problems, and a lot of mediums. Later phases make the harder mediums repeatable.

If either problem fails, redo it next session before Phase 6.

---

## Phase 6 — Heaps

JavaScript has no heap in the standard library. You will write one small min-heap and then use it. Rebuilding the heap from memory later is optional. Explaining sift-up and sift-down in words is required.

A heap is the right tool when you repeatedly need the current minimum or maximum: top K, merging sorted sequences, scheduling.

### S63 · Build a heap

Long. File: `lib/heap.js`, plus `problems/s63-heap-test.js` that requires it.

Read one clear explanation of a binary heap. Then close it and write the code. You need `push`, `pop`, `peek`, and `size` on a **min-heap** stored in an array.

Index facts to keep:

- Parent of `i` is `Math.floor((i - 1) / 2)`.
- Children of `i` are `2 * i + 1` and `2 * i + 2`.
- Sift up: a new value swaps with its parent while it is smaller than the parent.
- Sift down: a hole swaps with its smaller child while it is larger than that child.

Test: push `5, 1, 8, 3`. Pop order is `1, 3, 5, 8`.

In comments, explain both sifts in your own words. Fill **Heap**.

Done when the test passes and you can say those two sift sentences without reading the article.

### S64 · Kth Largest Element in an Array

[Kth Largest Element in an Array](https://leetcode.com/problems/kth-largest-element-in-an-array/) · Medium · normal

File: `problems/s64-kth-largest.js`

Use your heap. There is a quickselect solution. The heap is the one to be able to write in an interview.

<details>
<summary>Hint after 35 minutes</summary>

Keep a min-heap of the `k` largest values seen so far. If the heap's size would pass `k`, pop. The top of that heap is the kth largest.

</details>

### S65 · Top K Frequent, heap version

Same problem as S07: [Top K Frequent Elements](https://leetcode.com/problems/top-k-frequent-elements/).

File: `problems/s65-top-k-heap.js`

New file. Use a heap of size `k` ordered by frequency. After it passes, add one line to **Heap** comparing it with the bucket solution: both are valid, the bucket uses the fact that a frequency cannot exceed `n`.

### S66 · Task Scheduler

[Task Scheduler](https://leetcode.com/problems/task-scheduler/) · Medium · normal

File: `problems/s66-task-scheduler.js`

Tasks are letters. Two same letters need at least `n` gaps between them. Other work and idle slots both fill gaps. Return the total time.

<details>
<summary>Hint after 35 minutes</summary>

The most frequent task sets the frame. Lay its copies down with `n` slots between copies. The width of one gap-block is `n + 1`. The number of gap-blocks is `maxFreq - 1`. Tasks that tie for the highest frequency each add one extra slot at the end. The answer is the larger of `tasks.length` and that frame. Idle time is whatever the frame still needs after real tasks are placed.

</details>

### S67 · Merge K Sorted Lists

[Merge k Sorted Lists](https://leetcode.com/problems/merge-k-sorted-lists/) · Hard · long

File: `problems/s67-merge-k-lists.js`

This is the heap's payoff. If the heap API fights you, fix `lib/heap.js` first. The list problem may take a second sitting. Leave S67 unchecked until the tests pass. That second sitting is still S67.

<details>
<summary>Hint after 35 minutes</summary>

A min-heap of the current head of each list, ordered by node value. Pop the smallest, append it to the output, and if that node has a `next`, push it. A dummy head builds the output list.

</details>

### S68 · Checkpoint

New file, 30 minutes. Kth Largest, using your heap, article closed. You may open `lib/heap.js`, since that is your tool. You may not rewrite the algorithm from S64's file.

---

## Phase 7 — Backtracking

One shape, several problems: choose, recurse, undo. The undo is the part people forget, and it is why the same array can explore every branch.

S69 teaches the shape. Later sessions adapt it. Do those later sessions with S69's file closed.

### S69 · Subsets

[Subsets](https://leetcode.com/problems/subsets/) · Medium · normal

File: `problems/s69-subsets.js`

Try it from the phase idea before you open the shape. Fill **Backtracking**.

<details>
<summary>The shape, after 35 minutes. Read it, close this file, then type.</summary>

```
result = empty list
path = empty list

choose(start):
  record a copy of path into result
  for i from start to the end of nums:
    push nums[i] onto path
    choose(i + 1)
    pop path

choose(0)
return result
```

The copy matters. If you push `path` itself, later pops will erase what you recorded.

</details>

### S70 · Permutations

[Permutations](https://leetcode.com/problems/permutations/) · Medium · normal

File: `problems/s70-permutations.js`

S69's file stays closed.

<details>
<summary>Hint after 35 minutes</summary>

Same push, recurse, pop. There is no start index, because an earlier number can still be used. Track which indexes are already in the path. Record the path when its length equals `nums.length`.

</details>

### S71 · Combination Sum

[Combination Sum](https://leetcode.com/problems/combination-sum/) · Medium · normal

File: `problems/s71-combination-sum.js`

The same candidate may be reused. Each combination is recorded once.

<details>
<summary>Hint after 35 minutes</summary>

Sort the candidates. Pass `i` into the recursive call, not `i + 1`, so the current candidate can be chosen again. Subtract it from the remaining target. When a candidate is larger than what remains, every later candidate is too, so stop the loop.

</details>

### S72 · Letter Combinations of a Phone Number

[Letter Combinations of a Phone Number](https://leetcode.com/problems/letter-combinations-of-a-phone-number/) · Medium · normal

File: `problems/s72-phone.js`

An empty digit string returns an empty list.

<details>
<summary>Hint after 35 minutes</summary>

The path is the letters chosen so far. At depth `i` you are choosing a letter for `digits[i]`. When `i` equals the number of digits, record the path. Pop the letter on the way back, same as every other backtracking session.

</details>

### S73 · Generate Parentheses

[Generate Parentheses](https://leetcode.com/problems/generate-parentheses/) · Medium · normal

File: `problems/s73-generate-parentheses.js`

Solution key: `../frontend-interview-prep/solutions/dsa/145-generate-parentheses.md`

<details>
<summary>Hint after 35 minutes</summary>

Track how many `'('` and how many `')'` you have placed. You may place `'('` while that count is under `n`. You may place `')'` while there are fewer closes than opens. Record the string when both counts equal `n`.

</details>

### S74 · Review

New file. Redo Subsets and Generate Parentheses, 20 minutes each. S69's shape stays closed. If you need it, log `clean? no` and still rewrite from memory after one look.

### S75 · Word Search

[Word Search](https://leetcode.com/problems/word-search/) · Medium · long

File: `problems/s75-word-search.js`

The board is a grid. A cell cannot be reused inside one word.

<details>
<summary>Hint after 35 minutes</summary>

Start a search from every cell. Mark the current cell before you recurse to the four neighbors, and unmark it after those calls return. The unmark is the undo. A match is the search reaching the last character.

</details>

### S76 · Checkpoint

Long. 25 minutes each, new file.

1. Permutations
2. Word Search

If Word Search fails, the next session is only Word Search. Phase 8 waits.

---

## Phase 8 — Dynamic programming

Start every problem in this phase as a recursive function. Then add a memo so each state is computed once. A bottom-up table is a third step, for when you want it or an interviewer asks. The table is the same state, written in a loop.

If you begin with an empty table and no recursive sentence, you will stare at indexes. The sentence comes first: "the answer at this state is a combination of these smaller states."

Fill **One-dimensional DP** at S77 and add to it through S84. Fill **Two-dimensional DP** at S85.

### S77 · Climbing Stairs

[Climbing Stairs](https://leetcode.com/problems/climbing-stairs/) · Easy · normal

File: `problems/s77-climbing-stairs.js`

You may take 1 or 2 steps. How many ways to climb `n`.

First write the plain recursive version and run it at `n = 40`. It will get slow. Then add a memo. Optionally rewrite it as a loop afterward.

Solution key: `../frontend-interview-prep/solutions/dsa/142-climbing-stairs.md`

<details>
<summary>Hint after 35 minutes</summary>

Ways to climb `n` equals ways to climb `n - 1` plus ways to climb `n - 2`. Ways to climb 0 or 1 is 1. The memo's key is `n`.

</details>

### S78 · House Robber

[House Robber](https://leetcode.com/problems/house-robber/) · Medium · normal

File: `problems/s78-house-robber.js`

You cannot rob two adjacent houses.

<details>
<summary>Hint after 35 minutes</summary>

From index `i`, the best is the larger of: skip this house (the answer from `i + 1`), or rob it (`nums[i]` plus the answer from `i + 2`). Memo on `i`. Past the end, the answer is 0.

</details>

### S79 · House Robber II

[House Robber II](https://leetcode.com/problems/house-robber-ii/) · Medium · normal

File: `problems/s79-house-robber-ii.js`

Houses form a circle. The first and the last are adjacent.

<details>
<summary>Hint after 35 minutes</summary>

Run the S78 function twice. Once on the street with the first house removed. Once on the street with the last house removed. The answer is the larger of those two. A single house is its own answer.

</details>

### S80 · Review

New file. Redo Climbing Stairs and House Robber, memo versions, 20 minutes each.

### S81 · Coin Change

[Coin Change](https://leetcode.com/problems/coin-change/) · Medium · normal

File: `problems/s81-coin-change.js`

Fewest coins that sum to the amount. Return `-1` when it is impossible. You have unlimited copies of each coin.

<details>
<summary>Hint after 35 minutes</summary>

The fewest coins for amount `a` is 1 plus the minimum of the fewest coins for `a - coin`, over coins that fit. Memo on the amount. Amount 0 takes 0 coins. If no coin fits and the amount is still positive, that state is impossible.

</details>

### S82 · Word Break

[Word Break](https://leetcode.com/problems/word-break/) · Medium · normal

File: `problems/s82-word-break.js`

<details>
<summary>Hint after 35 minutes</summary>

Ask whether the suffix starting at index `i` can be segmented. Try every dictionary word that matches `s` at `i`, and ask the same question at the index just after that word. Memo on `i`. The empty suffix, `i === s.length`, succeeds.

</details>

### S83 · Decode Ways

[Decode Ways](https://leetcode.com/problems/decode-ways/) · Medium · normal

File: `problems/s83-decode-ways.js`

`'A'` is 1, `'Z'` is 26. A string of digits, how many ways to decode it. `'0'` cannot stand alone. `'06'` is not a two-digit code.

<details>
<summary>Hint after 35 minutes</summary>

From index `i`, if `s[i]` is `'0'` there are 0 ways. Otherwise add the ways from `i + 1`. If `i + 1` exists and the number `s[i..i+1]` is between 10 and 26, also add the ways from `i + 2`. Memo on `i`.

</details>

### S84 · Review

New file. Redo Coin Change, 30 minutes. Say the state in one sentence before you code: the fewest coins that make this amount.

### S85 · Unique Paths

[Unique Paths](https://leetcode.com/problems/unique-paths/) · Medium · normal

File: `problems/s85-unique-paths.js`

A robot moves only right or down. Fill **Two-dimensional DP**.

<details>
<summary>Hint after 35 minutes</summary>

Ways into cell `(r, c)` equal ways into the cell above plus ways into the cell to the left. The start cell has 1 way. A cell off the grid has 0. Memo on the pair `(r, c)`.

</details>

### S86 · Longest Increasing Subsequence

[Longest Increasing Subsequence](https://leetcode.com/problems/longest-increasing-subsequence/) · Medium · normal

File: `problems/s86-lis.js`

The `O(n^2)` version is the one this session requires. There is an `O(n log n)` method. Read it only after the quadratic one is boring to rebuild.

<details>
<summary>Hint after 35 minutes</summary>

`dp[i]` is the longest increasing subsequence that ends at `i`. It is 1 plus the largest `dp[j]` among `j < i` with `nums[j] < nums[i]`. If no such `j` exists, it is 1. The answer is the maximum value in `dp`.

</details>

### S87 · Longest Common Subsequence

[Longest Common Subsequence](https://leetcode.com/problems/longest-common-subsequence/) · Medium · normal

File: `problems/s87-lcs.js`

A subsequence can skip characters. It keeps their order.

<details>
<summary>Hint after 35 minutes</summary>

Compare the characters at `i` and `j`. If they match, the answer is 1 plus the same question at `i + 1, j + 1`. If they differ, the answer is the larger of skipping `text1[i]` or skipping `text2[j]`. Memo on the pair. Falling off either string returns 0.

</details>

### S88 · Review

New file. Redo Unique Paths, 25 minutes. Say which two cells feed the current cell.

### S89 · Longest Palindromic Substring

[Longest Palindromic Substring](https://leetcode.com/problems/longest-palindromic-substring/) · Medium · normal

File: `problems/s89-longest-palindrome.js`

The interview method here is expand-around-centers. It is in this phase because people reach for a table first. The expansion is the version to write.

<details>
<summary>Hint after 35 minutes</summary>

Every index is a center for an odd-length palindrome. Every gap between two indexes is a center for an even-length one. From a center, grow while the two sides match and stay inside the string. Remember the best start and length you grow.

</details>

### S90 · Checkpoint

Long. 30 minutes each. Memo versions.

1. House Robber
2. Coin Change

Say the state out loud before coding each one.

Optional, if the checkpoint felt calm and you want one more famous problem later: [Edit Distance](https://leetcode.com/problems/edit-distance/). It is the same shape as Longest Common Subsequence with three choices at each cell (insert, delete, replace). It is not required. Log it under Later if you want it waiting at S107.

---

## Phase 9 — Structures you will reuse

These are small classes. Interviews ask for them directly. Production code uses the same ideas: prefix lookup, grouping as edges arrive, O(1) insert and delete with random access, history you can binary-search.

### S91 · Implement Trie

[Implement Trie](https://leetcode.com/problems/implement-trie-prefix-tree/) · Medium · normal

File: `problems/s91-trie.js`

`insert`, `search`, `startsWith`. Fill **Trie**.

`startsWith` is the primitive behind autocomplete.

<details>
<summary>Hint after 35 minutes</summary>

A node is an object of children plus a boolean `isEnd`. `insert` walks the word, creating a child when the letter is missing, and marks `isEnd` on the last node. `search` needs the final node to exist and `isEnd` to be true. `startsWith` only needs the node to exist.

</details>

### S92 · Design Add and Search Words

[Design Add and Search Words Data Structure](https://leetcode.com/problems/design-add-and-search-words-data-structure/) · Medium · stretch

File: `problems/s92-word-dictionary.js`

`search` may contain `'.'`, which matches any letter. If it stalls after the hint, log `later`.

<details>
<summary>Hint after 35 minutes</summary>

`addWord` is trie insert. `search` walks the trie. On a normal letter, follow that child. On `'.'`, try every child. This is backtracking over the trie nodes.

</details>

### S93 · Number of Provinces

[Number of Provinces](https://leetcode.com/problems/number-of-provinces/) · Medium · normal

File: `problems/s93-provinces.js`

An adjacency matrix of cities. This is islands, on a matrix of connections. Solve it with DFS or BFS. Union-find is the next session, and it should feel like a second tool for the same picture.

<details>
<summary>Hint after 35 minutes</summary>

Each unvisited city starts a province. DFS or BFS through every city connected to it, direct or through other cities, and mark them visited.

</details>

### S94 · Redundant Connection

[Redundant Connection](https://leetcode.com/problems/redundant-connection/) · Medium · normal

File: `problems/s94-redundant-connection.js`

A tree plus one extra edge. Return the extra edge, the one that appears latest in the input. Fill **Union-find**.

<details>
<summary>Hint after 35 minutes</summary>

`parent[i]` starts as `i`. `find` follows parents to the root and points the nodes it passed at that root on the way back. `union` finds both roots. If they are already the same, this edge is the redundant one. If they differ, attach one root under the other.

</details>

### S95 · Insert Delete GetRandom O(1)

[Insert Delete GetRandom O(1)](https://leetcode.com/problems/insert-delete-getrandom-o1/) · Medium · normal

File: `problems/s95-randomized-set.js`

Each call is one step on average. `getRandom` is uniform over the values currently stored. Fill **O(1) insert, delete, and random**.

<details>
<summary>Hint after 35 minutes</summary>

An array holds the values. A map stores value → index. Insert appends and records the index. Delete swaps the doomed value with the last entry, updates the moved value's index in the map, then pops. Random is `array[floor(random * length)]`.

</details>

### S96 · Time Based Key-Value Store

[Time Based Key-Value Store](https://leetcode.com/problems/time-based-key-value-store/) · Medium · normal

File: `problems/s96-time-map.js`

`set(key, value, timestamp)` arrives with increasing timestamps for a given key. `get(key, timestamp)` returns the value whose stored timestamp is the largest one that is still `<=` the query.

<details>
<summary>Hint after 35 minutes</summary>

Map each key to a list of `[timestamp, value]`. `set` appends. `get` binary-searches that list for the rightmost timestamp that is still `<=` the query. If none qualifies, return `""`.

</details>

### S97 · Review

Two parts, one session.

1. New file. Redo trie `insert` and `search`, 20 minutes.
2. No code. Five sentences on paper: what `parent` means, what `find` returns, what you do when two ends already share a root, what you do when they do not, and why path compression is fair game.

### S98 · Checkpoint

Long. 25 minutes each.

1. Implement Trie, all three methods
2. Insert Delete GetRandom O(1)

---

## Phase 10 — Timed reps

Talk out loud. Four sentences before the code, from [HOW-TO-SOLVE.md](HOW-TO-SOLVE.md).

For S99–S106: 35 minutes, new file, notes closed. Hints in this plan stay closed for the first 20 minutes. After 20 you may open the hint from the original session. A written solution still waits until the full clock in HOW-TO-SOLVE, counted from the start: if you are at minute 50 and stuck, read and rewrite.

These are problems you have seen. The rep is speed and speech, which is a different skill from the first solve.

### S99 · Group Anagrams

35 minutes. [Group Anagrams](https://leetcode.com/problems/group-anagrams/).

### S100 · Container With Most Water

35 minutes. [Container With Most Water](https://leetcode.com/problems/container-with-most-water/).

### S101 · LRU Cache

Long. Five minutes of explanation with no code: what the map stores, what the list stores, what `get` moves, what `put` evicts. Then code. [LRU Cache](https://leetcode.com/problems/lru-cache/).

### S102 · Number of Islands

35 minutes. [Number of Islands](https://leetcode.com/problems/number-of-islands/).

### S103 · Search in Rotated Sorted Array

35 minutes. [Search in Rotated Sorted Array](https://leetcode.com/problems/search-in-rotated-sorted-array/).

### S104 · Subsets

35 minutes. [Subsets](https://leetcode.com/problems/subsets/).

### S105 · House Robber

35 minutes. [House Robber](https://leetcode.com/problems/house-robber/). State sentence first.

### S106 · Merge Intervals

35 minutes. [Merge Intervals](https://leetcode.com/problems/merge-intervals/).

### S107 · A problem you left for later

One problem from the Later table in [PROGRESS.md](PROGRESS.md).

If that table is empty, do [Word Search](https://leetcode.com/problems/word-search/) again under 35 minutes. If Word Search was already clean at S76, do [Minimum Window Substring](https://leetcode.com/problems/minimum-window-substring/).

### S108 · Mock

Long. Two problems back to back. Stand up, say the four sentences, then code. 35 minutes each. A short break between them is fine. No hints until each problem's own 20-minute mark.

1. [Course Schedule](https://leetcode.com/problems/course-schedule/)
2. [Coin Change](https://leetcode.com/problems/coin-change/)

Write, under the log row, what you would tell the interviewer in the first three minutes of each problem. That paragraph is part of done.

---

## Part 2 — The rest of DSA

S108 is the interview finish line. Part 2 is why you can also say you know DSA, not only the interview list.

Same rules. One session, hints closed for 35 minutes, reviews from a blank file. Stretch sessions can be logged as `later`. If Later still has a Part 2 problem when you reach S161, the code half of S161 is that problem.

The new pattern notes go in [patterns/NOTES.md](patterns/NOTES.md), under the headings named in each session.

---

## Phase 11 — Sorting from scratch

`Array.prototype.sort` is a tool you already use. This phase is how a sort works, what it costs, and which sort fits which data.

### S109 · Merge sort

Medium · long is fine. No LeetCode. File: `problems/s109-merge-sort.js`

Implement `mergeSort(nums)` so it returns a new sorted array. Do not call the built-in sort. Test `[5, 1, 4, 2, 8]`, `[]`, `[1]`, and `[3, 3, 1]`. The equal `3`s must stay in their original order. That property is called stability, and merge sort has it.

Fill **Sorting** in [patterns/NOTES.md](patterns/NOTES.md).

<details>
<summary>Hint after 35 minutes</summary>

Split until each piece has one item. Merge two sorted lists with two pointers, always taking the smaller head. A tie takes the left piece, which is what keeps equals stable. The depth of splits is about log n, and each level copies n items, so the cost is n log n. The extra arrays are the memory cost.

</details>

### S110 · Quicksort

Medium. File: `problems/s110-quicksort.js`

Implement `quickSort(nums)` in place. Test the same arrays as S109, plus a reverse-sorted array of 20 numbers. Equal values may change order. Quicksort is not stable.

Add one line to **Sorting**: worst case versus the usual case.

<details>
<summary>Hint after 35 minutes</summary>

Pick the last item as the pivot. Partition so everything smaller is on the left and everything larger is on the right. Recurse on each side. A pivot that is always the smallest item degenerates toward n². A random pivot, or a median of three, makes that rare. Average cost is n log n. Extra memory is the recursion stack.

</details>

### S111 · Counting sort

Medium. File: `problems/s111-counting-sort.js`

`countingSort(nums)` sorts integers that are between 0 and 20 inclusive. Test `[4, 1, 4, 0, 3]`. It must be stable. Then write, in a comment, when this beats merge sort and when it does not.

<details>
<summary>Hint after 35 minutes</summary>

Count how many times each value appears. Turn the counts into starting positions. Walk the input from the end, place each value at its position, and step that position backward. Walking from the end is what keeps it stable. Cost is n + k, where k is the value range. A huge range makes the count array the problem.

</details>

### S112 · Review

New file. Redo merge sort from memory, 30 minutes. Notes closed. Say the cost and why the equal-element test passes.

---

## Phase 12 — Bits

Bits are the representation under the integers you have been using. A handful of problems make the operators mean something.

### S113 · Single Number

[Single Number](https://leetcode.com/problems/single-number/) · Easy · normal

File: `problems/s113-single-number.js`

Every value appears twice, except one. Fill **Bits**.

<details>
<summary>Hint after 35 minutes</summary>

XOR a number with itself is 0. XOR with 0 is the number. XOR is commutative. Fold the whole array with XOR and the pairs disappear.

</details>

### S114 · Number of 1 Bits

[Number of 1 Bits](https://leetcode.com/problems/number-of-1-bits/) · Easy · normal

File: `problems/s114-hamming-weight.js`

Also implement `isPowerOfTwo(n)` in the same file. [Power of Two](https://leetcode.com/problems/power-of-two/). `n & (n - 1)` is the idea to learn.

<details>
<summary>Hint after 35 minutes</summary>

`n & (n - 1)` clears the lowest set bit. Count how many times you can do that until n is 0. A power of two has exactly one set bit, so clearing it once leaves 0. Reject n ≤ 0.

</details>

### S115 · Missing Number

[Missing Number](https://leetcode.com/problems/missing-number/) · Easy · normal

File: `problems/s115-missing-number.js`

The array holds every number from 0 to n except one.

<details>
<summary>Hint after 35 minutes</summary>

XOR every index and every value together, and also XOR n. Pairs cancel. The missing number remains. The sum formula `n * (n + 1) / 2` minus the array sum is the other valid answer. Know both.

</details>

### S116 · Sum of Two Integers

[Sum of Two Integers](https://leetcode.com/problems/sum-of-two-integers/) · Medium · normal

File: `problems/s116-sum-integers.js`

Add without `+` or `-`. In JavaScript, integers are wider than 32 bits, so keep the work in 32 bits.

<details>
<summary>Hint after 35 minutes</summary>

XOR is the sum if you ignore carries. `a & b` shifted left by one is the carry. Repeat until the carry is 0. Mask with `0xffffffff` if the sign bit starts spreading. Include a negative test.

</details>

### S117 · Subsets by bits

Medium. Same problem as S69: [Subsets](https://leetcode.com/problems/subsets/). New method.

File: `problems/s117-subsets-bits.js`

S69's file stays closed. There are `2^n` subsets. Each integer from 0 to `2^n - 1` is one subset: bit i set means include `nums[i]`.

<details>
<summary>Hint after 35 minutes</summary>

Loop `mask` from 0 to `(1 << nums.length) - 1`. For each mask, walk the bit positions and push `nums[i]` when `mask & (1 << i)` is non-zero. This is the same set of answers as backtracking, listed by number instead of by recursion. It is only comfortable while n is small, about 20.

</details>

---

## Phase 13 — Numbers

The math that shows up in algorithms is small: divisors, primes, and fast powers.

### S118 · GCD and LCM

Easy. File: `problems/s118-gcd.js`

`gcd(a, b)` by Euclid's algorithm. `lcm(a, b)` is `a / gcd(a, b) * b`. Do the division first so the product does not overflow a case you can still compute. Test `gcd(48, 18) === 6` and `lcm(4, 6) === 12`. Fill **Numbers**.

<details>
<summary>Hint after 35 minutes</summary>

`gcd(a, 0)` is a. Otherwise `gcd(b, a % b)`. The remainder gets smaller every call, so it ends. LCM follows from `gcd * lcm === a * b`, with the division ordered to stay smaller.

</details>

### S119 · Count Primes

[Count Primes](https://leetcode.com/problems/count-primes/) · Medium · normal

File: `problems/s119-count-primes.js`

How many primes are strictly less than n.

<details>
<summary>Hint after 35 minutes</summary>

The sieve of Eratosthenes. A boolean array, index i means "i is still possibly prime". For each p from 2 up to sqrt(n), if p is still marked prime, mark `p*p, p*p+p, p*p+2p, ...` as composite. Count what remains. Cost is about n log log n. Trial division of every number up to n is the slow version.

</details>

### S120 · Pow(x, n)

[Pow(x, n)](https://leetcode.com/problems/powx-n/) · Medium · normal

File: `problems/s120-pow.js`

Implement fast exponentiation. n can be negative. A loop that multiplies x, n times, is the slow version, and it is not done.

<details>
<summary>Hint after 35 minutes</summary>

`x^n = (x^(n/2))^2` when n is even, and `x * (x^(n/2))^2` when n is odd. That is log n multiplications. For a negative n, compute the positive power and take the reciprocal. In JavaScript, halve with `Math.floor` and watch `n === -2147483648`, where negating n does not fit in 32 bits. Use a long-enough integer path, or halve before you negate.

</details>

### S121 · Review

New file. Redo `gcd` and the sieve, 20 minutes each. Say the cost of the sieve before you check notes.

---

## Phase 14 — Greedy

A greedy algorithm takes the local choice that you can prove does not ruin the future. "It worked on the sample" is not the proof. Intervals in Part 1 were already this idea. Here you name it.

### S122 · Jump Game

[Jump Game](https://leetcode.com/problems/jump-game/) · Medium · normal

File: `problems/s122-jump-game.js`

Fill **Greedy**.

<details>
<summary>Hint after 35 minutes</summary>

Walk left to right and remember the farthest index you can reach so far. If your current index is ever beyond that farthest index, you are stuck. If the farthest index reaches the last index, you can finish.

</details>

### S123 · Jump Game II

[Jump Game II](https://leetcode.com/problems/jump-game-ii/) · Medium · normal

File: `problems/s123-jump-game-ii.js`

You can reach the end. Return the fewest jumps.

<details>
<summary>Hint after 35 minutes</summary>

The current jump covers a window of indexes. Scan that window and remember the farthest index the next jump could reach. When the window ends, you must take one jump, and the next window ends at that farthest index.

</details>

### S124 · Gas Station

[Gas Station](https://leetcode.com/problems/gas-station/) · Medium · normal

File: `problems/s124-gas-station.js`

One circular route. Return the starting station index, or -1.

<details>
<summary>Hint after 35 minutes</summary>

If the total gas is less than the total cost, no start works. Otherwise a start exists. Walk once. When the tank would go negative, the failed start and everything before the failure cannot be the answer. The next index is the new candidate. One pass is enough because the total already promised a solution.

</details>

### S125 · Partition Labels

[Partition Labels](https://leetcode.com/problems/partition-labels/) · Medium · normal

File: `problems/s125-partition-labels.js`

<details>
<summary>Hint after 35 minutes</summary>

Record the last index of every letter. Walk left to right. Extend the end of the current part to the last index of each letter you see. When your index catches that end, every letter in the part is finished. Cut there and start the next part.

</details>

### S126 · Review

New file. Redo Jump Game, 25 minutes. Before coding, say the sentence that proves the farthest-index choice is safe.

### S127 · Checkpoint

No new problem. 20 minutes, notes closed. On paper, for Gas Station: why a failed prefix can never contain the real start, and why one surviving candidate is enough when the totals allow a trip. If you cannot write that, the next session is Gas Station again.

---

## Phase 15 — Weighted graphs

Part 1 graphs were unweighted: every step cost 1, so BFS found the shortest path. Here edges have weights.

### S128 · Network Delay Time

[Network Delay Time](https://leetcode.com/problems/network-delay-time/) · Medium · long

File: `problems/s128-network-delay.js`

Dijkstra. Fill **Dijkstra**. You may reuse the shape of `lib/heap.js`. Edge weights are positive.

<details>
<summary>Hint after 35 minutes</summary>

Build an adjacency list of `[neighbor, weight]`. Distances start at infinity, except the source at 0. A min-heap holds `[distance, node]`. Pop the closest unfinished node. For each edge out of it, if `distance[node] + weight` improves the neighbor, update and push. When the heap is empty, the answer is the largest finite distance, or -1 if any node is still infinity. With non-negative weights, the first time you pop a node its distance is final.

</details>

### S129 · Cheapest Flights Within K Stops

[Cheapest Flights Within K Stops](https://leetcode.com/problems/cheapest-flights-within-k-stops/) · Medium · normal

File: `problems/s129-cheapest-flights.js`

At most k stops. Dijkstra's "first pop is final" rule is the wrong tool, because a worse price with fewer stops can still win. Fill **Bellman-Ford**.

<details>
<summary>Hint after 35 minutes</summary>

Relax every edge once, and that allows paths of one edge. Do it again for paths of two edges. At most k stops means at most k + 1 edges, so relax k + 1 rounds. Copy the distance array at the start of each round so a path cannot use an edge that was relaxed earlier in the same round. If the destination is still infinity, return -1.

</details>

### S130 · Min Cost to Connect All Points

[Min Cost to Connect All Points](https://leetcode.com/problems/min-cost-to-connect-all-points/) · Medium · normal

File: `problems/s130-min-cost-points.js`

A minimum spanning tree, Kruskal's algorithm. You already have union-find from S94. Fill **Minimum spanning tree**.

<details>
<summary>Hint after 35 minutes</summary>

An edge between two points costs the Manhattan distance. Sort edges by cost. Add an edge when its ends are in different components, then union them. Stop when you have added n - 1 edges. The sum of those costs is the answer. Sorting dominates: about e log e.

</details>

### S131 · Prim's algorithm

Medium. File: `problems/s131-prim.js`

Grow a minimum spanning tree from node 0. Return the total weight. Five nodes, numbered 0 through 4. Undirected edges, written `[a, b, weight]`: `[0,1,1]`, `[1,2,4]`, `[0,3,3]`, `[1,4,2]`, `[3,4,5]`. The answer is 10.

<details>
<summary>Hint after 35 minutes</summary>

Start with node 0 in the tree. A min-heap holds edges that leave the tree, ordered by weight. Pop the cheapest edge. If its far end is already in the tree, skip it. Otherwise add that node and push its outward edges. The first time a node is added, the edge that added it is in the tree. Stop when every node is in. Sum those edges.

</details>

### S132 · Is Graph Bipartite

[Is Graph Bipartite](https://leetcode.com/problems/is-graph-bipartite/) · Medium · normal

File: `problems/s132-bipartite.js`

Fill **Bipartite**.

<details>
<summary>Hint after 35 minutes</summary>

Color nodes with two colors. BFS or DFS from every uncolored node. A neighbor must take the other color. If a neighbor is already colored with your color, the graph is not bipartite. An odd cycle is the picture of that failure.

</details>

### S133 · Find the City

[Find the City With the Smallest Number of Neighbors at a Threshold Distance](https://leetcode.com/problems/find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance/) · Medium · normal

File: `problems/s133-find-city.js`

All-pairs shortest paths. Fill **Floyd-Warshall**. n is small.

<details>
<summary>Hint after 35 minutes</summary>

A distance matrix. Missing edges start at infinity, and the diagonal is 0. For each possible middle city k, and each pair i, j, `dist[i][j] = min(dist[i][j], dist[i][k] + dist[k][j])`. The k loop is the outer loop. That order is the algorithm. Then, for each city, count other cities within the threshold. The answer is the city with the smallest count, breaking ties toward the larger index. Cost is n³.

</details>

### S134 · Review

New file. Redo Network Delay Time, 30 minutes. Say why the first time you pop a node, its distance is final, and why that sentence is false when an edge weight can be negative.

### S135 · Max flow

Stretch · long. File: `problems/s135-max-flow.js`

A flow network. Send as much as you can from `s` to `t`.

Edges, written as `[from, to, capacity]`:

- `s → a`, 2
- `s → b`, 1
- `a → t`, 1
- `a → b`, 1
- `b → t`, 2

The maximum flow is 3. Fill **Max flow** if you solve it. If it stalls after the hint, log `later`.

<details>
<summary>Hint after 35 minutes</summary>

Keep a residual capacity for every edge, and a reverse edge that starts at 0. While BFS finds a path from s to t in edges that still have residual capacity, the path's bottleneck is the smallest residual on it. Add that bottleneck to the flow. Subtract it from each forward residual and add it to each reverse residual. The reverse edges are how a later path can undo a bad earlier choice. When BFS fails, the flow is maximum.

</details>

### S136 · Checkpoint

Long. 30 minutes each, notes closed.

1. Network Delay Time
2. Min Cost to Connect All Points

Say which algorithm is which before you code. Dijkstra is one source and non-negative weights. Kruskal is a spanning tree, lightest safe edge, union-find.

---

## Phase 16 — Range queries

A prefix array answers "sum from L to R" until the array starts changing. Then you need a tree.

### S137 · Range Sum Query, immutable

[Range Sum Query - Immutable](https://leetcode.com/problems/range-sum-query-immutable/) · Easy · normal

File: `problems/s137-range-sum.js`

The bridge from Part 1. Fill **Prefix sums** if that note is thin, or add a line: a prefix makes a range into a subtraction.

<details>
<summary>Hint after 35 minutes</summary>

`prefix[0] = 0`, `prefix[i + 1] = prefix[i] + nums[i]`. The sum from `left` to `right` inclusive is `prefix[right + 1] - prefix[left]`. Building is n. Each query is one step.

</details>

### S138 · Fenwick tree

Medium · long. File: `lib/fenwick.js` and `problems/s138-fenwick-test.js`

A binary indexed tree. Support `add(index, delta)` and `prefixSum(index)`, both about log n, on an array of length n. Use 1-based indexes inside the tree. Fill **Fenwick tree**.

Test: start at zeros, length 6. `add(1, 3)`, `add(3, 2)`, `add(6, 5)`. `prefixSum(1)` is 3, `prefixSum(3)` is 5, `prefixSum(6)` is 10. A range sum from 2 to 6 is `prefixSum(6) - prefixSum(1)`.

<details>
<summary>Hint after 35 minutes</summary>

Index i is responsible for a block of values ending at i. The block length is the lowest set bit of i, written `i & -i`. `add` walks upward: `i += i & -i`, stopping past n. `prefixSum` walks downward: `i -= i & -i`, until i is 0. Each walk is log n steps.

</details>

### S139 · Range Sum Query, mutable

[Range Sum Query - Mutable](https://leetcode.com/problems/range-sum-query-mutable/) · Medium · normal

File: `problems/s139-range-sum-mutable.js`

Use your Fenwick tree. `update` sets an index to a new value, which means you `add` the difference from the old value. Keep a copy of the current values so you know that difference.

<details>
<summary>Hint after 35 minutes</summary>

Store the live array beside the tree. `update(index, value)` computes `delta = value - live[index]`, writes the live cell, and calls `add(index + 1, delta)` if the tree is 1-based. `sumRange(left, right)` is `prefixSum(right + 1) - prefixSum(left)`.

</details>

### S140 · Segment tree

Medium · long. File: `lib/segment-tree.js` and `problems/s140-segment-test.js`

Build a segment tree for range sums. `update(index, value)` and `query(left, right)` both run in log n. Fill **Segment tree**.

Start from a zero array of length 6. `update(0, 3)`, `update(2, 2)`, `update(5, 5)`. Then `query(0, 0)` is 3, `query(0, 2)` is 5, `query(0, 5)` is 10, and `query(1, 5)` is 7.

<details>
<summary>Hint after 35 minutes</summary>

Store the tree in an array of length `4 * n`. The root is index 0 and covers the whole array. The children of i are `2 * i + 1` and `2 * i + 2`. Build bottom-up or by recursion: a leaf holds one array value, a parent holds the sum of its children. A point update rewrites the leaf and every parent up to the root. A range query returns the leaf when the query matches the node exactly, returns 0 when the ranges miss, and otherwise adds the answers from the two children.

</details>

### S141 · Review

New file. Rebuild the Fenwick `add` and `prefixSum` from memory, 25 minutes. The test from S138 has to pass. `lib/fenwick.js` from S138 stays closed. You are writing the tool again.

### S142 · Lazy propagation

Stretch · long. File: `problems/s142-lazy.js`

A segment tree that can add a value to a whole range, not only to one index, and can still query a range sum. Both operations log n.

Test on length 6, zeros. `addRange(1, 3, 2)` then `addRange(3, 5, 1)`. `query(0, 5)` is 9. `query(3, 3)` is 3.

If this stalls after the hint, log `later`. Fenwick plus the plain segment tree are the required tools. Lazy is the one that shows you have the structure, and it is allowed to wait.

<details>
<summary>Hint after 35 minutes</summary>

Each node stores the sum of its segment and a lazy "add this to every index in my segment, which I have not pushed to my children yet". `addRange` that covers a node completely adds `delta * length` to the sum and adds `delta` to the lazy tag, then returns. A partial overlap pushes the lazy tag to the two children first, clears it, then recurses, then rebuilds the sum from the children. `query` pushes before it reads, the same way.

</details>

---

## Phase 17 — Strings under the hood

Part 1 matched windows and palindromes by scanning. These two algorithms search a fixed needle in a haystack without restarting from scratch, and they explain the trie from the other side.

### S143 · Rabin-Karp

Medium. File: `problems/s143-rabin-karp.js`

`indexOf(haystack, needle)` using a rolling hash. Return the first index, or -1. Test `"hello"` / `"ll"` → 2, `"aaaaa"` / `"bba"` → -1, and a case where two different windows share a hash so you still compare the characters. Fill **Rolling hash**.

<details>
<summary>Hint after 35 minutes</summary>

Treat the needle and each window as a number in base 26, or base 256, modulo a large prime. The next window is `(hash - outgoing * base^(m-1)) * base + incoming`, all mod the prime. A matching hash is a candidate. Confirm it against the real characters, because different strings can share a hash. Expected cost is linear. A bad modulus makes you confirm too often.

</details>

### S144 · Find the Index of the First Occurrence

[Find the Index of the First Occurrence in a String](https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/) · Easy · normal

File: `problems/s144-strstr.js`

Solve it with the rolling hash from S143. The built-in `indexOf` does not count.

<details>
<summary>Hint after 35 minutes</summary>

Same hash as S143. Empty needle returns 0, matching the problem's rule. A needle longer than the haystack returns -1.

</details>

### S145 · KMP

Hard. File: `problems/s145-kmp.js`

Same `indexOf` problem, now with the Knuth-Morris-Pratt failure function. S143's file stays closed. Fill **KMP**. This is the hard string algorithm in the plan. A correct failure function on one example is the win. Full polish can take the long session.

<details>
<summary>Hint after 35 minutes</summary>

`lps[i]` is the longest proper prefix of `needle[0..i]` that is also a suffix. Proper means not the whole string. Build it with two pointers: `len` is the current matched prefix length. On a match, `lps[i] = len + 1` and both pointers move. On a miss, if `len` is not 0, set `len = lps[len - 1]` without moving i. Search the haystack the same way: on a miss, jump `j` to `lps[j - 1]` instead of restarting the needle at 0. When `j` reaches the needle length, the match started at `i - j + 1`.

</details>

Worked check, which you may look at while building `lps` and then must reproduce: for `"ababaca"`, `lps` is `[0, 0, 1, 2, 3, 0, 1]`.

### S146 · Review

Paper first, then code. Write `lps` for `"aaaa"` and for `"abcab"` with the notes closed. Then implement `indexOf` for those needles. 30 minutes. If the paper is wrong, fix the paper before you code.

`"aaaa"` → `[0, 1, 2, 3]`. `"abcab"` → `[0, 0, 0, 1, 2]`.

### S147 · Checkpoint

No new code for 15 minutes. On paper, say when you would use a rolling hash, when you would use KMP, and when you would use the trie from S91. Then, 25 minutes, implement one of the two searches from a blank file. Your choice, declared before you start.

A fair set of sentences: a hash is simple and expected-linear, with a rare false candidate. KMP is worst-case linear and never rewinds the haystack. A trie is for many needles, or for prefixes, not for one search in one document.

---

## Phase 18 — Dynamic programming, the rest

Part 1 was "a recursive sentence, then a memo". This phase is the families that sentence belongs to: a knapsack, an edit, and a table whose answer improves by binary search.

### S148 · Partition Equal Subset Sum

[Partition Equal Subset Sum](https://leetcode.com/problems/partition-equal-subset-sum/) · Medium · normal

File: `problems/s148-partition-subset.js`

This is 0/1 knapsack in interview clothes. Fill **Knapsack**.

<details>
<summary>Hint after 35 minutes</summary>

If the total sum is odd, it is impossible. Otherwise ask whether a subset sums to `total / 2`. A boolean array `can[s]` starts with `can[0] = true`. For each number, walk `s` downward from the target to that number, and set `can[s]` if `can[s - number]` was already true. Walking downward is what uses each number at most once. Walking upward would reuse it.

</details>

### S149 · Coin Change II

[Coin Change II](https://leetcode.com/problems/coin-change-ii/) · Medium · normal

File: `problems/s149-coin-change-ii.js`

Part 1's coin change counted the fewest coins. This one counts the combinations. Order of coins inside a combination does not matter.

<details>
<summary>Hint after 35 minutes</summary>

`ways[0] = 1`. For each coin, walk amounts upward from that coin to the target, adding `ways[amount - coin]` into `ways[amount]`. The coin loop is outside, so each combination is built in coin order and counted once. Putting the amount loop outside counts permutations instead.

</details>

### S150 · Edit Distance

[Edit Distance](https://leetcode.com/problems/edit-distance/) · Hard · long

File: `problems/s150-edit-distance.js`

Insert, delete, or replace a character, each at cost 1. Fill **Edit distance**.

<details>
<summary>Hint after 35 minutes</summary>

State is the pair of indexes `(i, j)`, meaning the edit distance between the suffixes. If the characters match, the answer is the same pair without those characters. If they differ, the answer is 1 plus the best of three moves: insert (stay on i, advance j), delete (advance i, stay on j), or replace (advance both). Memo on the pair. Falling off one string costs the number of characters left in the other.

</details>

### S151 · Longest Increasing Subsequence, the faster one

[Longest Increasing Subsequence](https://leetcode.com/problems/longest-increasing-subsequence/) · Medium · normal

File: `problems/s151-lis-log.js`

S86's n² solution stays closed. This session is the n log n method. Fill a line on **One-dimensional DP** or start **Patience sorting** in the notes.

<details>
<summary>Hint after 35 minutes</summary>

Keep `tails`, where `tails[len - 1]` is the smallest possible tail of any increasing subsequence of that length. For each number, binary-search the first tail that is greater than or equal to it, and replace that tail. If the number is larger than every tail, append it. The length of `tails` is the answer. The array is not the subsequence itself. It is only long enough.

</details>

### S152 · Maximal Square

[Maximal Square](https://leetcode.com/problems/maximal-square/) · Medium · normal

File: `problems/s152-maximal-square.js`

A 2D table with a meaning you can say in one sentence.

<details>
<summary>Hint after 35 minutes</summary>

`dp[r][c]` is the side length of the largest square whose bottom-right corner is `(r, c)`. A zero in the matrix forces 0. A one is 1 plus the minimum of the three neighbors: above, left, and above-left. The answer is the square of the largest side you ever write.

</details>

### S153 · Review

New file. Redo Partition Equal Subset Sum, 30 minutes. Say "downward so each number is used once" before you type the loop.

### S154 · Burst Balloons

[Burst Balloons](https://leetcode.com/problems/burst-balloons/) · Hard · stretch

File: `problems/s154-burst-balloons.js`

Interval dynamic programming. If it stalls after the hint, log `later`. Edit distance and knapsack are the required pair. This is the shape that shows up when the answer for a span depends on the answers for smaller spans.

<details>
<summary>Hint after 35 minutes</summary>

Add a balloon of value 1 at both ends, so the edges have a neighbor. Let `dp[l][r]` be the best score for bursting every balloon strictly between l and r. The last balloon you burst between them is some k. Its coins are `nums[l] * nums[k] * nums[r]`, plus the best way to clear the open interval on each side of k. Try every k. Fill shorter gaps before longer gaps.

</details>

### S155 · Checkpoint

Long. 35 minutes each. State the sentence before the code.

1. Partition Equal Subset Sum
2. Edit Distance

---

## Phase 19 — Trees that stay correct, and the judgment to pick

Part 1 asked whether a tree is a BST. This phase builds one, deletes from one, and shows why a BST without balance becomes a linked list.

### S156 · Insert into a Binary Search Tree

[Insert into a Binary Search Tree](https://leetcode.com/problems/insert-into-a-binary-search-tree/) · Medium · normal

File: `problems/s156-bst-insert.js`

Fill **BST update**.

<details>
<summary>Hint after 35 minutes</summary>

A missing child is where the new node goes. If the value is smaller, insert on the left. If it is larger, insert on the right. Return the node you have, so the parent's link stays intact. Duplicates are not in the tests. Pick one side and stick to it if you want a policy.

</details>

### S157 · Delete Node in a BST

[Delete Node in a BST](https://leetcode.com/problems/delete-node-in-a-bst/) · Medium · normal

File: `problems/s157-bst-delete.js`

Three shapes. This is the hard one in the pair.

<details>
<summary>Hint after 35 minutes</summary>

Search until you find the value. A leaf returns null to its parent. One child returns that child. Two children: find the successor, the smallest node in the right subtree, copy its value onto this node, and delete the successor from the right subtree. The successor has no left child, so that second delete is one of the easy shapes.

</details>

### S158 · Rotations

Medium. File: `problems/s158-rotate.js`

You do not build a full AVL tree. You build the move an AVL tree is made of, and you say why it exists.

Implement `rotateRight(y)` and `rotateLeft(x)` on nodes `{ val, left, right }`. `rotateRight` takes a node whose left child exists. After it, the left child is the parent, and the old parent hangs on the right.

Test: y is 3, y.left is 2, 2.left is 1, 2.right is 9. `rotateRight(y)` returns the node 2. Its right child is 3. That 3's left child is 9. Its left child is 1.

In a comment, write why a sorted insert of 1, 2, 3, 4, 5 into a plain BST is bad, and what a rotation repairs. Fill **Rotations**.

<details>
<summary>Hint after 35 minutes</summary>

`rotateRight(y)`: x is y.left. y.left becomes x.right. x.right becomes y. Return x. `rotateLeft` is the mirror: y is x.right, x.right becomes y.left, y.left becomes x, return y. A chain of only-left children is height n. One rotation at the right place brings the height back toward log n. Lookup cost follows the height.

</details>

### S159 · Review

New file. Redo Delete Node in a BST, 30 minutes. Draw the two-child case before you code it.

### S160 · Pick the structure

Medium. File: `problems/s160-pick.js`

This is the engineering half of "I know DSA". Implement `pick(scenarios)` so it returns the structure name for each situation below, in order. Use these exact strings: `trie`, `union-find`, `lru`, `heap`, `dijkstra`, `fenwick`, `kmp`, `dp`, `topo`, `hash-map`.

1. Suggest the rest of a word as someone types.
2. Merge accounts when you learn that two emails are the same person, and answer "same person?" as more facts arrive.
3. Keep the 100 most recently used pages in memory, and drop the stalest when a new one arrives.
4. Maintain the 10 most common error messages in a live log.
5. Shortest travel time on a road map. Every road has a positive length.
6. Many range-sum questions, and the array also receives point updates.
7. Find one fixed word inside many long documents, worst case linear.
8. Number of ways to make an amount with unlimited coins.
9. Can these courses be finished, given prerequisite pairs?
10. Two Sum.

<details>
<summary>Hint after 35 minutes</summary>

`trie`, `union-find`, `lru`, `heap`, `dijkstra`, `fenwick`, `kmp`, `dp`, `topo`, `hash-map`.

A trie stores prefixes. Union-find merges groups as edges arrive. LRU is a map plus an order of use. A heap of fixed size keeps a top-k. Dijkstra is the non-negative shortest path. A Fenwick tree is the small tool for point updates and prefix sums. KMP is worst-case linear search of one needle. Coin combinations are the DP from S149. Course prerequisites are a topological order. Two Sum is a hash map.

</details>

### S161 · Final

Long. Two parts. This is the end of the full plan.

1. 25 minutes, no code, notes closed. Explain, out loud, one algorithm from each row. Two sentences each: what it does, and the cost.
   - Merge sort
   - Dijkstra
   - A Fenwick tree
   - KMP
   - 0/1 knapsack
2. 35 minutes, one problem from a blank file. If the Later table has a Part 2 problem, do that. Otherwise do Edit Distance.

Write the five explanations under the log row. They are part of done.

---

## After S161

You have both pieces: the interview patterns, and the algorithms those patterns sit on.

Keep two sessions a week while you want the skill, and through any interview loop.

- Session A is a redo from a chapter you have not touched in a while. New file, notes closed.
- Session B is one new problem in a pattern you already know. Same clock, same log.

If you vanish for weeks: one short redo of the last problem you remember solving. Then the two-session week. The 161 do not reset.

S108 remains the interview checkpoint you can repeat. Extra mocks, same rules as S108.

| Mock | First 35 min | Second 35 min |
| --- | --- | --- |
| 1 | Longest Substring Without Repeating | Reverse Linked List |
| 2 | Group Anagrams | Number of Islands |
| 3 | Search in Rotated Sorted Array | Subsets |
| 4 | Merge Intervals | LRU Cache |
| 5 | Rotting Oranges | House Robber |
| 6 | 3Sum | Implement Trie |
| 7 | Network Delay Time | Edit Distance |
| 8 | Partition Equal Subset Sum | KMP indexOf |

When a mock fails, the next session is only the problem that failed. Then return to the two-session week.
