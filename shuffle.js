function solution(A) {
    let str = A.toString();
    let arr = [];
      for(let i=0; i < str.length/2; i++) {
        arr.push(str[i]);
        if(i == (Math.ceil(str.length/2)-1) && str.length%2==1) continue;
        arr.push(str[str.length-i-1]);
      }
      return arr.join("");
}
  
  console.log(solution(123456));  // 162534
  console.log(solution(1234567)); // 1726354
  console.log(solution(104));     // 140