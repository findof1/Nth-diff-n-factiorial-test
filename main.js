function factorial(n){
  let res = 1;
  for(let i = 2; i <= n; i++){
    res *= i;
  }
  return res;
}

function nthDiff(n){
  let values = []
  for(let i = 1; i<=n+1; i++){
    values.push(Math.pow(i, n))
  }
  for(let i = 0; i<n; i++){
    const diff = []
    for(let j = 0; j<values.length-1; j++){
      diff.push(values[j+1] - values[j])
    }

    values = diff
  }
  return values[0]
}

for(let i = 1; i< 100; i++){
console.log(`n:${i}, \n Nth diff: ${nthDiff(i)}, factorial: ${factorial(i)}, \n Comparison: ${nthDiff(i) == factorial(i)} \n \n `)
}
