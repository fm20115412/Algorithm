/**
 * Created by fm on 2017/4/25.
 * 冒泡排序：冒泡排序是最易懂的排序算法，但是效率较低，生产环境中很少使用
 * 基本原理：
 * 1、依次比较相邻的两个数，如果不符合排序规则，则调换两个数的位置。这样一边比较下来，能够保证最大（或最小）的数排在最后一位。
 * 2、再对最后一位以外的数组，重复前面的过程，直至全部排序完成。
 */
let arrayBefore=[2,9,5,4,2,7,3,8,1]
console.log(arrayBefore);
let arrayAfter = bubble(arrayBefore);
console.log(arrayAfter);
function bubble(array) {
    let len=array.length;
    for(let i=0;i<len-1;i++)
        for(let j=0;j<len-i-1;j++){
            if(array[j]>array[j+1]){
                let temp=array[j];
                array[j]=array[j+1];
                array[j+1]=temp;
            }
        }
    return array;
}