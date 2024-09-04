//! 1

// const click = () => {
//     alert('Hello World!');
// }

// const button = document.getElementById('clickButton');
// button.addEventListener('click', click); 

//! 2


// const randomNumber = Math.floor(Math.random() * 100) + 1;

// const checkGuess = () => {
//     const field = parseInt(document.getElementById('guessField').value);
//     const result = document.getElementById('guessResult');

//     if (field === randomNumber) {
//         result.textContent = 'Вітаємо!Ви вгадали число.';
//     } else if (field < randomNumber) {
//         result.textContent = 'Загадане число більше. Спробуйте ще раз.';
//     } else {
//         result.textContent = 'Загадане число менше. Спробуйте ще раз.';
//     }
// };

//! 3

// let userClick = 0;
// let button = document.getElementById('clickButton');

// button.addEventListener('click', () => {
//     userClick++;
//     document.getElementById('clickCount').textContent = userClick;
// });

//! 4

// const applyCallbackToEachElement = (arr, callback) => {
// const resultArray = [];
// for (let i = 0; i < arr.length; i++) {
//     resultArray.push(callback(arr[i]));
// }
// return resultArray;
// }

// const arr = [1, 2, 3, 4, 5];
// const squareCallback = (num) => num * num ;

// const result = applyCallbackToEachElement(arr, squareCallback);
// console.log(result);

//! 5

const calculateDiscountedPrice = (price, discount, callback) => {
    discountedPrice = price - (price * discount / 100);
    callback(discountedPrice);
}

const showDiscountedPrice = (price) => console.log(discountedPrice);
calculateDiscountedPrice(100, 10, showDiscountedPrice)