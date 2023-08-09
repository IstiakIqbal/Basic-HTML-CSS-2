function canPay(arr, totalDue) {
    let sum = 0;
    if (arr.length === 0)
        console.log("Array is empty!");
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    if (sum >= totalDue)
        return true;
    else
        return false;
}
const arr = [];
const num = 10;
console.log(canPay(arr, num))