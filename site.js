(function (root, factory) {
  const api = factory();
  if (typeof module === "object" && module.exports) module.exports = api;
  else root.DSA = api;
})(typeof globalThis !== "undefined" ? globalThis : this, function () {
  function parseSessions(markdown) {
    const sessions = [];
    const re = /^- \[([ xX])\] (S\d+) · (.+)$/gm;
    let match;
    while ((match = re.exec(markdown))) {
      sessions.push({
        id: match[2],
        title: match[3].trim(),
        checked: match[1].toLowerCase() === "x",
      });
    }
    return sessions;
  }

  function sectionBody(plan, id) {
    const lines = String(plan).split("\n");
    const start = lines.findIndex(function (line) {
      return line.startsWith("### " + id + " ");
    });
    if (start < 0) return "";
    let end = lines.length;
    for (let i = start + 1; i < lines.length; i++) {
      if (
        lines[i].startsWith("### S") ||
        lines[i].startsWith("## ") ||
        lines[i] === "---"
      ) {
        end = i;
        break;
      }
    }
    return lines.slice(start + 1, end).join("\n").trim();
  }

  function localDate(date) {
    const value = date instanceof Date ? date : new Date();
    const month = String(value.getMonth() + 1).padStart(2, "0");
    const day = String(value.getDate()).padStart(2, "0");
    return value.getFullYear() + "-" + month + "-" + day;
  }

  function weekStart(dateStr) {
    const parts = dateStr.split("-").map(Number);
    const date = new Date(parts[0], parts[1] - 1, parts[2]);
    const weekday = date.getDay();
    const back = weekday === 0 ? 6 : weekday - 1;
    date.setDate(date.getDate() - back);
    return localDate(date);
  }

  function isDone(session, done) {
    return session.checked || Object.prototype.hasOwnProperty.call(done, session.id);
  }

  function nextSession(sessions, done) {
    for (let i = 0; i < sessions.length; i++) {
      if (!isDone(sessions[i], done)) return sessions[i];
    }
    return null;
  }

  function weekCount(sessions, done, today) {
    const start = weekStart(today);
    let count = 0;
    sessions.forEach(function (session) {
      const date = done[session.id];
      if (date && weekStart(date) === start) count += 1;
    });
    return count;
  }

  function finishedCount(sessions, done) {
    return sessions.filter(function (session) {
      return isDone(session, done);
    }).length;
  }

  function markDone(done, id, today) {
    const next = Object.assign({}, done);
    next[id] = today;
    return next;
  }

  function undoLast(sessions, done) {
    let last = null;
    sessions.forEach(function (session) {
      if (!session.checked && done[session.id]) last = session.id;
    });
    if (!last) return done;
    const next = Object.assign({}, done);
    delete next[last];
    return next;
  }

  const CHAPTERS = [
    {
      id: "arrays",
      name: "Arrays and hashing",
      blurb: "Most easy screens live here. One tool at a time, then a harder use of the same tool.",
      steps: [
        ["S01", "See the cost", "warmup", "You are feeling why a second loop is expensive. There is no trick to memorize yet."],
        ["S02", "Hash set", "easy", "Easy, and still easy to skip: an empty list and a single element."],
        ["S03", "Frequency map", "easy", "Easy. Different lengths can finish the question immediately."],
        ["S04", "Complement map", "easy", "Easy once you need indexes, not just yes or no. Pairing a value with itself is the bug."],
        ["S05", "Hash set", "review", "A blank-file redo of the two easy map problems. A miss here pauses the next new problem."],
        ["S06", "Frequency map", "medium", "Medium. Counting is easy. Choosing the grouping key is the actual problem."],
        ["S07", "Frequency map", "medium", "Medium. The counts are the first half. Pulling the top k without a messy sort is the step up."],
        ["S08", "Prefix products", "medium", "Medium because division looks like the answer, and a zero breaks that answer."],
        ["S09", "Complement map", "review", "Rebuild Two Sum with the notes closed."],
        ["S10", "Two pointers", "easy", "Easy. The miss is skipping punctuation and still comparing the two ends."],
        ["S11", "Running best", "easy", "Easy one pass. A list that only falls is a profit of 0."],
        ["S12", "Running best", "medium", "Medium. At each index you either extend the previous run or start over. Starting over in the wrong place is the bug."],
        ["S13", "Prefix products", "review", "People can describe this and then fail to rebuild it. That is why it is repeated."],
        ["S14", "Sliding window", "medium", "Medium. Both ends move forward only. A fresh scan for every start is the slow version."],
        ["S15", "Sliding window", "medium", "Medium, and less obvious than 'no repeated letters'. The hard part is the rule that says the window is still valid."],
        ["S16", "Two pointers", "medium", "Medium. Moving the taller side is the usual wrong turn."],
        ["S17", "Two pointers", "medium", "Medium, and longer than it looks. Sorting is the easy part. Duplicate triplets are the bug farm."],
        ["S18", "Sliding window", "review", "Windows are the pattern that fades first. This redo is on purpose."],
        ["S19", "Sliding window", "stretch", "Hard. Several counts move at once. You are allowed to leave it for later."],
        ["S20", "Checkpoint", "checkpoint", "Timed. Two patterns, out loud. A miss means that pattern is not finished."],
      ],
    },
    {
      id: "stacks",
      name: "Stacks and lists",
      blurb: "Matching, order, and pointer rewiring. Draw the arrows before you loop.",
      steps: [
        ["S21", "Stack", "easy", "Easy. The empty stack at the end matters as much as each match."],
        ["S22", "Stack", "medium", "Medium. getMin has to stay one step. Scanning the whole stack misses the point."],
        ["S23", "Monotonic stack", "medium", "Medium. The stack holds indexes in temperature order. The distance is the answer, which is easy to forget."],
        ["S24", "Stack", "review", "Say what the stack holds before you type."],
        ["S25", "Linked list", "easy", "Easy if you draw it. The classic bug is overwriting the next pointer one line too early."],
        ["S26", "Linked list", "easy", "Easy. The first node is the annoying case, which a dummy head removes."],
        ["S27", "Fast and slow", "easy", "Easy idea, careful loop. Meeting means a cycle. Running out of nodes means there is none."],
        ["S28", "Fast and slow", "medium", "Medium. The gap between the two pointers is the whole trick, and removing the head is the case that breaks a sloppy version."],
        ["S29", "Linked list", "review", "Draw a fresh picture, then code. The old drawing does not count."],
        ["S30", "LRU", "medium", "The hardest design so far. Two structures have to move together, and the edge cases are the links at the ends."],
        ["S31", "LRU", "review", "Explaining the cache and recoding it are different skills. The recode is the test."],
        ["S32", "Checkpoint", "checkpoint", "Timed. Parentheses and reversing a list."],
      ],
    },
    {
      id: "trees",
      name: "Trees",
      blurb: "A function that trusts a smaller version of the same question. Base case first.",
      steps: [
        ["S33", "Tree walks", "warmup", "Four orders with your finger. Code only the first one. This is where people start feeling lost."],
        ["S34", "Tree recursion", "easy", "Easy. Swap the children, then trust the recursive calls."],
        ["S35", "Tree recursion", "easy", "Easy. A missing node has depth 0. That base case is the whole problem."],
        ["S36", "Tree recursion", "easy", "Easy. Both children missing means equal. One missing means not equal."],
        ["S37", "Tree recursion", "review", "Invert and depth, from memory."],
        ["S38", "Level order", "medium", "Medium. Forgetting to snapshot the queue size makes the levels bleed together."],
        ["S39", "BST range", "medium", "Medium, and a famous trap: a node can be fine next to its parent and still illegal for the root."],
        ["S40", "Tree paths", "medium", "Medium. The ancestor is not always a parent. One side returning a node is not always the answer."],
        ["S41", "Tree paths", "easy", "Looks easy. The longest path may not pass through the root, which is the miss."],
        ["S42", "Level order", "review", "Say why a queue fits, and what a stack would do to the order, before you code."],
        ["S43", "Tree recursion", "easy", "Easy to start, fiddly to finish. One helper has to report both a height and a failure."],
        ["S44", "Checkpoint", "checkpoint", "Timed. Level order, and a valid BST. The BST is the one to protect."],
      ],
    },
    {
      id: "graphs",
      name: "Graphs",
      blurb: "A grid is a graph. A course list is a graph. Visited marks and cycles are the new pieces.",
      steps: [
        ["S45", "Grid search", "medium", "Medium. Counting the same island twice means the visited mark failed."],
        ["S46", "Grid search", "medium", "Same walk as islands. The new part is returning a size, then keeping the best start."],
        ["S47", "Graph copy", "medium", "Medium because of cycles. The copy has to be stored before you walk the neighbors."],
        ["S48", "Grid search", "review", "Islands again, blank file."],
        ["S49", "Multi-source BFS", "medium", "Medium. Starting from one rotten orange answers a different problem. Every rotten orange starts together."],
        ["S50", "Topological order", "medium", "Medium. Three states per course. An edge back into the current path is the cycle."],
        ["S51", "Topological order", "medium", "Same search, plus you must return an order. A cycle means there is no order."],
        ["S52", "Checkpoint", "checkpoint", "Timed. Islands and whether a course plan is possible."],
      ],
    },
    {
      id: "search",
      name: "Search and intervals",
      blurb: "Cut a range in half, then use the same loop on a different question: what is the smallest limit that still works.",
      steps: [
        ["S53", "Binary search", "easy", "The problem is easy. The bugs are all at the edges of the range."],
        ["S54", "Binary search", "medium", "Medium. Two separate searches are how a row gets dropped. Treat it as one sorted list."],
        ["S55", "Rotated search", "medium", "Medium. You compare with the right end. The minimum sits on the unsorted side."],
        ["S56", "Rotated search", "medium", "Medium. One half is always sorted. Searching the other half is the whole bug."],
        ["S57", "Binary search", "review", "Plain search and rotated search. Talk through the shrinking range."],
        ["S58", "Search on the answer", "medium", "A new idea, and the hard part is noticing it. You search a speed, not an index."],
        ["S59", "Intervals", "medium", "Medium. Sort, then one pass. Deciding that two ranges touch is the judgment call."],
        ["S60", "Intervals", "medium", "Medium. Three stretches: before the new range, the messy overlap, and after it."],
        ["S61", "Intervals", "medium", "Medium. Sorting by the end, not the start, is the part that is not obvious."],
        ["S62", "Checkpoint", "checkpoint", "Timed. Rotated search and merging intervals. This is the first real interview baseline."],
      ],
    },
    {
      id: "heaps",
      name: "Heaps",
      blurb: "The tool for 'give me the current best, over and over'. JavaScript makes you build the tool once.",
      steps: [
        ["S63", "Heap", "warmup", "You may read one explanation. Then close it and write the heap. The indexing is the annoying part."],
        ["S64", "Heap", "medium", "Medium. A heap of size k feels backwards: the small end of the heap is the answer."],
        ["S65", "Heap", "medium", "The same top-k problem as the buckets. Medium because you must know why both versions are fair."],
        ["S66", "Heap", "medium", "Medium. The gap rule is the hard part. A simulation is a fine way to start."],
        ["S67", "Heap", "hard", "Hard. The heap is the calm part. Wiring the list nodes is where it breaks."],
        ["S68", "Checkpoint", "checkpoint", "Kth largest, using your heap file. The old solution stays closed."],
      ],
    },
    {
      id: "backtracking",
      name: "Backtracking",
      blurb: "Choose, recurse, undo. The undo is the part that gets forgotten.",
      steps: [
        ["S69", "Backtracking", "medium", "Medium. The shape is the lesson. Forgetting to copy the path erases what you already found."],
        ["S70", "Backtracking", "medium", "Medium. Any earlier number can still be used, so a start index is the wrong tool."],
        ["S71", "Backtracking", "medium", "Medium. Reuse is allowed, and the combinations still have to be unique."],
        ["S72", "Backtracking", "medium", "A shorter one, so the template can feel familiar. An empty digit string is the edge."],
        ["S73", "Backtracking", "medium", "Medium. You are counting opens and closes, not looping over a list of choices in the same way."],
        ["S74", "Backtracking", "review", "Subsets and parentheses. The written shape stays closed."],
        ["S75", "Backtracking", "medium", "Medium on a list, harder on a grid. Forgetting to unmark the cell is the bug."],
        ["S76", "Checkpoint", "checkpoint", "Timed. Permutations, then the grid."],
      ],
    },
    {
      id: "dp",
      name: "Dynamic programming",
      blurb: "Say the recursive sentence first. The table is the same sentence, written as a loop.",
      steps: [
        ["S77", "One-dimensional DP", "easy", "Easy, on purpose. Write the slow version first so the repeated work is obvious."],
        ["S78", "One-dimensional DP", "medium", "Medium. Two choices at each house, and neighbors cannot both be taken."],
        ["S79", "One-dimensional DP", "medium", "Medium. The circle is the extra constraint. The linear solution has to run twice."],
        ["S80", "One-dimensional DP", "review", "Memo versions only, from a blank file."],
        ["S81", "One-dimensional DP", "medium", "Medium. Some amounts are impossible, and -1 is the real answer, not a crash."],
        ["S82", "One-dimensional DP", "medium", "Medium. The state is a start index. The empty ending is a success."],
        ["S83", "One-dimensional DP", "medium", "Medium, fussy. A zero cannot stand alone, and not every two-digit pair is legal."],
        ["S84", "One-dimensional DP", "review", "Say the state in one sentence, then code coin change again."],
        ["S85", "Two-dimensional DP", "medium", "The first 2D state. Off the board is zero ways. The start cell is one way."],
        ["S86", "Two-dimensional DP", "medium", "Medium. The slower n² version is the one to be able to rebuild. The faster one can wait."],
        ["S87", "Two-dimensional DP", "medium", "Medium. The state is a pair of indexes: match the ends, or skip one side."],
        ["S88", "Two-dimensional DP", "review", "Unique paths again. Name the two cells that feed the current one."],
        ["S89", "String centers", "medium", "Medium. The interview version is not a table. Odd centers and even centers are both required."],
        ["S90", "Checkpoint", "checkpoint", "Timed. House robber and coin change. The state sentence comes before the code."],
      ],
    },
    {
      id: "design",
      name: "Designs you will reuse",
      blurb: "Small classes that show up in interviews and in real features: prefixes, groups, and O(1) edits.",
      steps: [
        ["S91", "Trie", "medium", "Medium. Three methods. A prefix existing is weaker than a whole word existing."],
        ["S92", "Trie", "stretch", "Harder than insert. A dot means try every child. This one may wait."],
        ["S93", "Components", "medium", "Islands again, drawn as a matrix of cities. Medium only because the input shape is new."],
        ["S94", "Union-find", "medium", "A new structure. The hard part is noticing that a repeated root means this edge is the extra one."],
        ["S95", "O(1) design", "medium", "Medium. Insert is easy. Delete stays one step only if you swap with the last item."],
        ["S96", "Binary search", "medium", "Medium design. Each key grows a sorted history, and get is a search on that history."],
        ["S97", "Trie", "review", "Recode insert and search. Then explain union-find in five sentences, no code."],
        ["S98", "Checkpoint", "checkpoint", "Timed. The trie, and insert/delete/random."],
      ],
    },
    {
      id: "clock",
      name: "The interview clock",
      blurb: "Problems you have already solved. The new skill is saying the idea out loud inside 35 minutes.",
      steps: [
        ["S99", "Frequency map", "medium", "Timed redo. The pattern is familiar. The clock and the explanation are the difficulty."],
        ["S100", "Two pointers", "medium", "35 minutes. Which pointer moves is still the miss under pressure."],
        ["S101", "LRU", "medium", "Explain the two structures before any code. Design first is the hard part."],
        ["S102", "Grid search", "medium", "35 minutes. Visited marks, from a blank file."],
        ["S103", "Rotated search", "medium", "35 minutes. Talk through which half is sorted."],
        ["S104", "Backtracking", "medium", "35 minutes. Copy the path, or the answers disappear."],
        ["S105", "One-dimensional DP", "medium", "State the choice in one sentence, then code."],
        ["S106", "Intervals", "medium", "35 minutes. Sort, then one pass."],
        ["S107", "Stretch", "stretch", "The problem you left behind. If nothing is waiting, take word search or the minimum window."],
        ["S108", "Checkpoint", "checkpoint", "A mock. Two problems back to back, with the four sentences before each one."],
      ],
    },
    {
      id: "sorting",
      name: "Sorting from scratch",
      blurb: "How a sort works, what it costs, and which sort fits the data. Part 2 starts here. S108 was the interview finish line.",
      steps: [
        ["S109", "Merge sort", "medium", "Medium. The equal-element test is the hard part: merge sort must keep their original order."],
        ["S110", "Quicksort", "medium", "Medium. A bad pivot turns it into a slow nested loop. It also does not keep equal elements in order."],
        ["S111", "Counting sort", "medium", "Medium. Fast only when the numbers live in a small range. A huge range makes the count array the problem."],
        ["S112", "Merge sort", "review", "Blank file. Say the cost, and why the equal-element test passes."],
      ],
    },
    {
      id: "bits",
      name: "Bits",
      blurb: "The operators under the integers. Small problems, new vocabulary.",
      steps: [
        ["S113", "Bits", "easy", "Easy once XOR is a tool. A number XOR itself disappears."],
        ["S114", "Bits", "easy", "Easy. Clearing the lowest set bit is the move. Non-positive numbers break a sloppy power-of-two check."],
        ["S115", "Bits", "easy", "Easy. Two correct answers exist. Know the XOR one and the sum one."],
        ["S116", "Bits", "medium", "Medium in JavaScript. Carries are the idea. The sign bit spreading is the bug."],
        ["S117", "Bits", "medium", "Medium. Same subsets as backtracking, listed by number. Only comfortable while n is small."],
      ],
    },
    {
      id: "numbers",
      name: "Numbers",
      blurb: "The math algorithms actually use: divisors, primes, and fast powers.",
      steps: [
        ["S118", "GCD", "easy", "Easy. The remainder shrinks, so the calls end. Multiply after you divide, or the product gets bigger than it needs to."],
        ["S119", "Sieve", "medium", "Medium. Marking multiples from p times p, not from 2p, is the detail. Trial division is the slow version."],
        ["S120", "Fast power", "medium", "Medium. Halving the exponent is the idea. A negative exponent, and one ugly 32-bit edge, are the bugs."],
        ["S121", "GCD", "review", "gcd and the sieve, from memory. Say the sieve's cost first."],
      ],
    },
    {
      id: "greedy",
      name: "Greedy",
      blurb: "A local choice you can prove does not ruin the future. A sample that passes is not the proof.",
      steps: [
        ["S122", "Greedy", "medium", "Medium. The farthest reachable index is the whole problem. Stepping past it means you are stuck."],
        ["S123", "Greedy", "medium", "Medium. Each jump covers a window. The next window is the farthest reach inside the current one."],
        ["S124", "Greedy", "medium", "Medium. The circular route is the trap. A failed prefix cannot hide the real start."],
        ["S125", "Greedy", "medium", "Medium. Last-seen indexes. You cut a part only when every letter inside it is finished."],
        ["S126", "Greedy", "review", "Say the sentence that proves the farthest-index choice is safe, then code."],
        ["S127", "Greedy", "checkpoint", "Paper only. If you cannot explain Gas Station, the next session is Gas Station again."],
      ],
    },
    {
      id: "weighted",
      name: "Weighted graphs",
      blurb: "Part 1 paths cost one step each. Here an edge has a weight, and BFS is no longer the shortest path.",
      steps: [
        ["S128", "Dijkstra", "medium", "Medium. Non-negative weights. The first time you pop a node, its distance is final."],
        ["S129", "Bellman-Ford", "medium", "Medium, and the place Dijkstra lies. A worse price with fewer stops can still be the winner."],
        ["S130", "Minimum spanning tree", "medium", "Medium. Sort edges, add one only when it joins two different groups. Union-find is the tool you already built."],
        ["S131", "Minimum spanning tree", "medium", "The same tree, grown from one node. Skipping an edge whose far end is already in the tree is the bug."],
        ["S132", "Bipartite", "medium", "Medium. Two colors. A neighbor with your own color means an odd cycle."],
        ["S133", "Floyd-Warshall", "medium", "Medium. Three nested loops, and the middle-node loop has to be the outer one."],
        ["S134", "Dijkstra", "review", "Say why the first pop is final, and why that sentence dies if a weight can be negative."],
        ["S135", "Max flow", "stretch", "Hard. Residual edges, including the reverse ones that undo a bad path. This one may wait."],
        ["S136", "Weighted graphs", "checkpoint", "Dijkstra and a spanning tree, timed. Name which algorithm is which before you code."],
      ],
    },
    {
      id: "ranges",
      name: "Range queries",
      blurb: "A prefix answers a range sum until the array starts changing. Then you need a tree.",
      steps: [
        ["S137", "Prefix sums", "easy", "Easy on purpose. One subtraction replaces a scan. This is the setup for the trees."],
        ["S138", "Fenwick tree", "medium", "Medium. The lowest set bit decides the jump. Off-by-one on a 1-based index is the usual bug."],
        ["S139", "Fenwick tree", "medium", "Medium. Setting a value is not the same as adding. You add the difference from the old value."],
        ["S140", "Segment tree", "medium", "Medium, more code than a Fenwick tree. Parent and children indexes, and a query that misses the node, are where it breaks."],
        ["S141", "Fenwick tree", "review", "Rebuild add and prefixSum. The old file stays closed."],
        ["S142", "Segment tree", "stretch", "Hard. A lazy tag says 'I still owe my children this add.' Push it before you read. Allowed to wait."],
      ],
    },
    {
      id: "strings",
      name: "Strings under the hood",
      blurb: "Search a fixed word in a long text without starting over at every character.",
      steps: [
        ["S143", "Rolling hash", "medium", "Medium. The next window updates in one step. Two different strings can share a hash, so you still compare characters."],
        ["S144", "Rolling hash", "easy", "The LeetCode version of the same search. Empty needle and a needle that is too long are the edges."],
        ["S145", "KMP", "hard", "Hard. The failure function is the whole algorithm. On a mismatch you jump, you do not restart the needle at zero."],
        ["S146", "KMP", "review", "Paper first. If the failure row is wrong, do not start the code."],
        ["S147", "Strings", "checkpoint", "Say when you want a hash, when you want KMP, and when you want a trie. Then code one search."],
      ],
    },
    {
      id: "dp-rest",
      name: "Dynamic programming, the rest",
      blurb: "The families behind the sentences in Part 1: a knapsack, an edit, and a table that binary search can shrink.",
      steps: [
        ["S148", "Knapsack", "medium", "Medium. Walk the sums downward. Upward reuses a number, and the partition becomes a lie."],
        ["S149", "Knapsack", "medium", "Medium. Coin loop outside counts combinations. Amount loop outside counts permutations. The problem wants combinations."],
        ["S150", "Edit distance", "hard", "Hard. Three moves when the characters differ, and the cost of falling off one string."],
        ["S151", "Patience sorting", "medium", "Medium. The tails array is not the subsequence. It is only the best ending for each length."],
        ["S152", "Two-dimensional DP", "medium", "Medium. One sentence: the square ending here is limited by the three neighbors."],
        ["S153", "Knapsack", "review", "Say 'downward, so each number is used once' before the loop."],
        ["S154", "Interval DP", "stretch", "Hard. The last balloon you burst in a span, not the first. Allowed to wait."],
        ["S155", "Dynamic programming", "checkpoint", "Knapsack and edit distance. The state sentence comes before the code."],
      ],
    },
    {
      id: "judgment",
      name: "Trees that stay correct",
      blurb: "Build a BST, delete from it, see why balance matters, then practice picking the structure.",
      steps: [
        ["S156", "BST update", "medium", "Medium. The new node replaces a missing child. Return the subtree so the parent link stays valid."],
        ["S157", "BST update", "medium", "Medium, and the harder twin. Two children means copy the successor, then delete that successor."],
        ["S158", "Rotations", "medium", "Medium. One rotation is a small pointer move. A sorted insert with no rotation becomes a linked list."],
        ["S159", "BST update", "review", "Draw the two-child case, then code the delete."],
        ["S160", "Pick the structure", "medium", "The engineering test. Ten situations, one structure each. The name has to be exact."],
        ["S161", "Final", "checkpoint", "Five algorithms out loud, then one problem from a blank file. This is the end of the full plan."],
      ],
    },
  ];

  function difficultyLabel(difficulty) {
    if (difficulty === "warmup") return "Warmup";
    if (difficulty === "easy") return "Easy";
    if (difficulty === "medium") return "Medium";
    if (difficulty === "hard") return "Hard";
    if (difficulty === "review") return "Review";
    if (difficulty === "checkpoint") return "Checkpoint";
    if (difficulty === "stretch") return "Stretch";
    return difficulty;
  }

  function flattenSteps() {
    const steps = [];
    CHAPTERS.forEach(function (chapter, chapterIndex) {
      chapter.steps.forEach(function (step, stepIndex) {
        steps.push({
          id: step[0],
          pattern: step[1],
          difficulty: step[2],
          bite: step[3],
          chapter: chapter,
          chapterIndex: chapterIndex,
          stepIndex: stepIndex,
        });
      });
    });
    return steps;
  }

  function stepFor(id) {
    const steps = flattenSteps();
    for (let i = 0; i < steps.length; i++) {
      if (steps[i].id === id) return steps[i];
    }
    return null;
  }

  function chapterStats(chapter, sessions, done) {
    const byId = {};
    sessions.forEach(function (session) {
      byId[session.id] = session;
    });
    let finished = 0;
    chapter.steps.forEach(function (step) {
      const session = byId[step[0]];
      if (session && isDone(session, done)) finished += 1;
    });
    return { finished: finished, total: chapter.steps.length };
  }

  return {
    parseSessions: parseSessions,
    sectionBody: sectionBody,
    localDate: localDate,
    weekStart: weekStart,
    isDone: isDone,
    nextSession: nextSession,
    weekCount: weekCount,
    finishedCount: finishedCount,
    markDone: markDone,
    undoLast: undoLast,
    chapters: CHAPTERS,
    difficultyLabel: difficultyLabel,
    flattenSteps: flattenSteps,
    stepFor: stepFor,
    chapterStats: chapterStats,
  };
});
