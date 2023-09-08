/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */

// const addTwoPromises = async function(promise1, promise2) {
//     const responseArray = await Promise.allSettled([promise1, promise2]);
//     console.log(responseArray)
//     const result = responseArray.reduce((result, element) => {
//         if (Number.isFinite(Number(element.value))){
//             result += element.value
//         }
//         else {
//             throw new Error('Error! NaN')
//         }; 
//     }, 0)

//     return console.log(result);
// };

const addTwoPromises = async function(promise1, promise2) {
    const a = await promise1;
    const b = await promise2;
    return new Promise((resolve) => {
        resolve(a+b);
    });
};

// Input: 
const promise1 = new Promise(resolve => setTimeout(() => resolve(2), 20));
const promise2 = new Promise(resolve => setTimeout(() => resolve(5), 60));
// Output: 7

console.log(addTwoPromises(promise1, promise2))
