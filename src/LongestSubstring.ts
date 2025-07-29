function lengthOfLongestSubstring(s: string): number {
  let max = 0;
  let subString = "";
  for (let i = 0; i < s.length; i++) {
    let index = subString.indexOf(s[i]);
    if (index === -1) {
      subString += s[i];
    } else {
      max = subString.length > max ? subString.length : max;
      subString = subString.slice(index + 1) + s[i];
    }
  }
  return subString.length > max ? subString.length : max;
}

console.log(lengthOfLongestSubstring("pwwkew"));
