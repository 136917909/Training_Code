function bubbleSort(arr){
    let len = arr.length;
    for(let i = 0;i < len; i++){
        for(let j = 0;j < len -1 -i;j++){
            if(arr[j] > arr[j+1])
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]];//ES6解构赋值完成元素交换
        }
    }
    return arr;
}