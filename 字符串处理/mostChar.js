/**
 * Created by fm_babybear on 2017/6/8.
 * 写一个函数，统计字符串里出现出现频率最多的字符
 */
function mostChar(str){
    var dict = {};
    for(var i=0;i<str.length;i++) {
        if(dict[str[i]]) {
            ++dict[str[i]];
        }else{
            dict[str[i]]=1;
        }
    }
    console.log(dict)
    var count = 0;
    var maxValue;
    for(var key in dict) {
        if(dict[key] > count) {
            count = key;
            maxValue= dict[key];
        }
    }

    console.log(count,maxValue);
}
var str="abcaadfe"
mostChar(str)
/*
var ch=mostChar(str)
console.log(ch)
*/
