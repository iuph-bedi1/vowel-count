const getCount = str =>{
  let vowelsCount =0;
  for(let char of str){
    if("aeiou".includes(char))vowelsCount++;
  }
  return vowelsCount;
};
console.log(getCount("aeiou));
                     
