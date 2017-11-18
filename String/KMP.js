let A = 'hello';
let B = 'll';
// let B = 'a';



// getNext P[i]: 满足B[0 ... P[i] - 1] = B[i - P[i] + 1 ... i]的最大值（即匹配值），P[i] = 0时，表示匹配值为 0，不能再倒退
let j = 0, P = [];
P[0] = 0;
for (let i = 1; i < B.length; i ++) {
  while (j && B[j] !== B[i]) j = P[j - 1];
  if (B[i] === B[j]) j ++;
  P[i] = j;
}

console.log(P);

// j表示已经匹配的长度，即A[i - j + 1 ... i] = B[0 ... j - 1]，如果匹配失败，倒退到P[j - 1]
j = 0;
for (let i = 0; i < A.length; i ++) {
  while (j && A[i] !== B[j]) j = P[j - 1];
  if (A[i] === B[j]) j ++;
  if (j === B.length) {
    console.log('Pattern occurs with shift ', i - B.length + 1);
    j = P[j - 1];
  }
}
