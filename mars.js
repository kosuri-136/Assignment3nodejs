function marsExploration(s) {
    // Write your code here
  let count=0;
  for(let i=0;i<s.length;i+=3){
    if(s[i]!=="S")
    {
        count++;
    }
    if(s[i+1]!=="O")
    {
        count++;
    }
    if(s[i+2]!=="S")
    {
        count++;
    }
  }
    return count;
}
console.log(marsExploration('SORSORSORSOR'))