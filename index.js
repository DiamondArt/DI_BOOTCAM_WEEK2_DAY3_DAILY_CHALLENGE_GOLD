/*************************************************
 *     Daily Challenge GOLD: Bubble Sort
 * ------------------------------------
 * @author MELISSA KOUADIO <angemelisk@gmail.com>
 * @link <https://github.com/DiamondArt>
 * 
 * ***********************************************/
/* 

/* 
|Daily Challenge GOLD: Bubble Sort
|-------------------------------
|Using the .toString() method convert the array to a string.
|Using the .join()method convert the array to a string. Try passing different values into the join.
|Eg .join(“+”), .join(” “), .join(“”)
|Bonus : To do this Bonus look up how to work with nested for loops
|Sort the numbers array in descending order, do so using for loops (Not using built-in sort methods).
|The output should be: [9,8,7,6,5,4,3,2,1,0]
|Hint: The algorithm is called “Bubble Sort”
|Use a temporary variable to swap values in the array.
|Use 2 “nested” for loops (Nested means one inside the other).
|Add comments and console.log the result for each step, this will help you understand.
*/
const numbers = [5,0,9,1,7,4,2,6,3,8];

(function bubbleSort(arr){

      for(var i = 0; i < arr.length; i++) {
        for(var j = 0; j < ( arr.length - i -1 ); j++) {
            if(arr[j] < arr[j+1]) {
                var tempVal = arr[j]
                arr[j] = arr[j + 1]
                arr[j+1] = tempVal
            }
      }
    }
    
    console.log("Descending order ", arr);

})(numbers)

console.log(numbers.toString())
console.log(numbers.join("-"))

