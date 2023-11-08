let randomArray =[]
for(let i=0;i<20;i++){
    randomArray.push(Math.floor(Math.random()*25));
}
//bubble sort
let bubbleArr =[10,9,8,7,6,255,4,3,2,10];
function bubbleSort(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]<arr[j]){
                [arr[i],arr[j]]= [arr[j],arr[i]]
            }
        }
    }
    return arr;
}
//console.log(bubbleSort(bubbleArr));

//insertion sort
function insertionSort(arr){
    for(let i=1;i<arr.length;i++){
        let numberToInsert = arr[i];
        let j=i-1;
        while(j>=0 &&arr[j]>numberToInsert){
            arr[j+1] = arr[j]
            j=j-1
        }
        arr[j+1] = numberToInsert;
    }
    return arr;
}

//console.log(insertionSort(bubbleArr))

//quick sort
function quickSort(arr){
    if(arr.length<2)return arr
    let pivot=arr[arr.length-1];
    let left=[]
    let right=[]
    for(let i=0;i<arr.length-1;i++){
        if(arr[i]<pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return[...quickSort(left),pivot,...quickSort(right)]
}
console.log(quickSort(randomArray))
