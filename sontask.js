let arr = [1,2,3,4,5]

let min = arr[0]
let max = arr[0]

for (let i = 0; i < arr.length; i++) {
    if (arr[i]<min) {
        min=arr[i]
    }  
    else if (arr[i]>max) {
        max=arr[i]
    }

}
console.log((min + max)/2);