let arr = [2,5,3,2,7,2,4,3,2,6]

let max = 0
let cem = 0
let maxindex = 0

for (let i = 0; i < arr.length; i++) {
   if (arr[i]>max) {
    max = arr[i]
    maxindex = i
   }
}

for (let i = 1; i < maxindex; i++) {

        cem+=arr[i]
        
}

console.log(cem);
