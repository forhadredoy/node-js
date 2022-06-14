// var myInt = setInterval(function () {
//     console.log("Hello");
// }, 500);
// console.log(myInt)

// var myInt = setImmediate(function () {
//     console.log("Hello");
// }, 5000);
// var myInt = setTimeout(function () {
//     console.log("Hello");
// }, 1000);
// console.log("Before the setImmediate call")
// let timerID = setImmediate(() => {console.log("Hello, World")});
// console.log("After the setImmediate call")
// clearImmediate(timerID);
var myInt = setInterval(function () {
    console.log("Hello");
}, 500);
clearInterval(myInt);
