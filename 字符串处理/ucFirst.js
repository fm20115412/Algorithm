/**
 * Created by fm_babybear on 2017/6/9.
 * 写一个 ucFirst函数，返回第一个字母为大写的字符 （***）
 */
function ucFirst(str){
    var newStr=str[0].toUpperCase()+str.slice(1)
    return newStr
}
var str="hello"
var result=ucFirst(str)
console.log(result)
