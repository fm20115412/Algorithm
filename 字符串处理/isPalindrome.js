/**
 * Created by fm_babybear on 2017/6/8.
 * 写一个函数，判断一个字符串是回文字符串，如 abcdcba是回文字符串, abcdcbb不是
 */
function isPalindrome(str){
    // 1、笨办法
    /*var length=str.length;
    var midPosition=parseInt(length/2)
    if(length%2==0){
        for(let i=1;i<=midPosition;i++){
            if(str[midPosition-i]!=str[midPosition+i-1]){
                return false;
            }
        }
    }else{
        for(let i=1;i<=midPosition;i++){
            if(str[midPosition-i]!=str[midPosition+i]){
                return false;
            }
        }
    }
    return true*/
    // 2、巧办法
    var reverseStr=str.split("").reverse().join("")
    if(str===reverseStr){
        return true
    }else{
        return false
    }
}
var str="abbac"
var result=isPalindrome(str);
console.log(result)