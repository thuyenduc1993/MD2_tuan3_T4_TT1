function BubbleSort(arr) {
    // for (let i = 0; i < arr.length; i++) {
    //     for (let j = 0; j < arr.length - i -1; j++) {
    //         if(arr[j] > arr[j+1]) {
    //             let tem = arr[j];
    //             arr[j] = arr[j+1];
    //             arr[j+1] = tem;
    //         }
    //     }
    // }
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] < arr[j + 1]) {
                var tem = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tem;
            }
        }
    }
    console.log(arr);
}
var new_arr = [2, 3, 2, 5, 6, 1, -2, 3, 14, 12];
console.log(BubbleSort(new_arr));
