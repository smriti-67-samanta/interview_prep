function isPalindrome(s) {
    let left = 0;
    let right = s.length - 1;
    
    while (left < right) {
       
        let leftChar = s[left];
        let rightChar = s[right];
        
        
        if (!isAlphanumeric(leftChar)) {
            left++;
            continue;
        }
        
       
        if (!isAlphanumeric(rightChar)) {
            right--;
            continue;
        }
        
        
        if (leftChar.toLowerCase() !== rightChar.toLowerCase()) {
            return false;
        }
        
       
        left++;
        right--;
    }
    
    return true; 
}


function isAlphanumeric(char) {
  
    return (char >= 'a' && char <= 'z') || 
           (char >= 'A' && char <= 'Z') || 
           (char >= '0' && char <= '9');
}


console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("race a car")); // false