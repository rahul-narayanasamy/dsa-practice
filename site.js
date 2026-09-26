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
  };
});
