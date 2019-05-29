function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector("#nested .target")
}

function increaseRankBy(n) {
  let ranks = document.querySelectorAll(".ranked-list li")
  let i = 0;
  debugger
  for (i = 0; i < ranks.length; i++) {
    ranks[i]["innerHTML"] = parseInt(ranks[i]["innerHTML"]) + n;
  }
}

function deepestChild() {
  var nodes = document.querySelectorAll('#grand-node div');
  var mostDeep = nodes[nodes.length- 1];
  return mostDeep
}
