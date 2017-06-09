/**
 * Created by fm_babybear on 2017/6/9.
 * 写一个函数truncate(str, maxlength), 如果str的长度大于maxlength，会把str截断到maxlength长，并加上...，如
 */
function truncate(str,maxlength) {
    var strArr=str.split("")
    strArr.splice(maxlength,strArr.length-maxlength)
    strArr.push("...")
    return strArr
}
var result=truncate("hello, this is hunger valley,", 10)
console.log(result)