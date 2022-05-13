// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

// function positiveSum(arr) {
// }

// 2.Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

// function squareSum(numbers){
//     let squareSum = (([1,2])^2)
//     return numbers ^ [1,2,2]
//     }

    //P: JUst take nums? or strings? Special char?
    //R: Sum of squared nums
    //E: 
    //P: 
    //Make a function that takes in any array
    // function squareSum(arr){
    //     arr.map(num=>num**2).reduce((acc,c)=>acc+c,0)
    // }
    //MAP thru array and square each little element


// 3.// counting sheep

//Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).//
function daSheep(arr){
    //filter non tue
    let newArr= arr.filter(e=>e===true)
    //sum true
    return newArr.length
    //return da sheep
}

console.log(daSheep([true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true])17)
  
console.log(daSheep([true, true, true, false,
]),3)
//   The correct answer would be 17

console.log(daSheep([true, true, undefined,null,false,]))