exports.generateEnum = ary => ary[Math.floor(Math.random() * ary.length)];
exports.generateNum = num => Math.round(Math.random() * num);
exports.generateAvg = (...n) =>
  Math.round(n.reduce((a, i) => a + i, 0) / n.length);
