/**
 * Created by fm_babybear on 2017/6/9.
 * 写一个camelize函数，把my-short-string形式的字符串转化成myShortString形式的字符串
 */
function camelize(str){
    str=str.split("")
    for(var i=str.length-1;i>=0;i--){
        if(str[i]=='-'){
            str.splice(i,1);
            str[i]=str[i].toUpperCase()
        }
    }
    return str.join("")
}
var str="list-style-image-hah-jij-Hkk"
var result =camelize(str)
console.log(result)
