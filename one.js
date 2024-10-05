// Q.1 check no. is even or odd
/* first understand the problem - In this problem their is a given input n we have to find the
 number is even or odd.
2. checking if their is any constraint or edge case that create problem.
Now psuedo code-: 
1. we will create a function checkEvenOdd 
2. Now the given input we have, we check if it is even or odd using if else condition and % operator
3. if it is modulo by 2 then reminder=0 then it is even we print Even else if it odd we will print odd */
// here is the code
function checkEvenOdd(n)
{
  if(n%2===0)
  {
    return "Even";
  }
  else {
    return "Odd";
  }
}
let number=0;
console.log("Number is:",checkEvenOdd(number));
// Q.2 Sum of all number given in an array
/* first understand the problem - In this problem their is a given input array  we have to find the
 sum of the total number given in array.
2. checking if their is any constraint or edge case that create problem.
Psuedo Code
1. we will create a function sumOfNumInArray
2. now we check if array is empty then we simply return 0
3. then we will create a varialble called sum which intial start with value of arr[0]
4.Now we will iterate over the array with the help of for loop and add every index element in sum 
and store it into sum
5. If the loop will end we simply return the sum */
function sumOfNumInArray(a)
{
  if(a.length<1)
  {
    return 0;
  }
  let sum=a[0];
  for(let i=1;i<a.length;i++)
  {
    sum=sum+a[i];
  }
  return sum;
}
let arr1=[-1,-2,-3];
console.log("Sum of number in an array:",sumOfNumInArray(arr1));
// Q.3find maximum in an array
/* understand the problem  - we have given a array we have to find the maximum number in array
psuedo code 
1. create a function checkMaxElement and check if array is empty return null because we have no element
2. itialize a variable max with assigning value of a[0]
3. iterate over the array with the help of loop
4.check if a[i]>max then assign the value of a[i] into max
max==a[i]
5. check again and again again until the loops end
6 now return the max element */
function checkMaxElement(a)
{
  if(a.length<1)
  {
    return null;
  }
  let max=a[0];
  for(let i=1;i<a.length;i++)
  {
    if(a[i]>max)
    {
      max=a[i];
    }
  }
  return max;
}
let arr2=[];
console.log("Max element in an array:", checkMaxElement(arr2));
//Q.4 check positive neagtive and zero
/* understand the problem - given a number n we have to find whether number is positive negative or zero
pseudo code 
1. we will create a function checkPositiveNegative 
2. we will check if number>0 then it is positive with the help of if condition
3. now we will check number<0 then it is negative 
4. now if it is not positve or negative then it must be 0 */
function checkPositiveNegative(n)
{
  if(n>0)
  {
    return "Positive";
  }
  else if(n<0)
  {
    return "Negative";
  }
  else {
    return"Zero";
  }
}
let num=4;
console.log("Number is:",checkPositiveNegative(num));
// count odd number in given array
/* understanding the problem - given an array we have to find count of odd number in array
psuedo code
1. create a function CountOddNumber and check if array is empty return 0 because we have no element.
2. Now we will create a variable called count and assign the value of count initially 0
3.we will iterate over the array with the help of loops
4. now we will check if it reminder is 1 then it is odd number
5. we will increament count=count+1;
6. when the loop will end we simply return the no. of count */
function countOddNumber(a)
{
  if(a.length<1)
  {
    return 0;
  }
  let count=0;
  for(let i=0;i<a.length;i++)
  {
    if(a[i]%2===1)
    {
      count++;
    }
  }
  return count;
}
let arr3=[1,2,3,4,5];
console.log("Count of odd number in array:",countOddNumber(arr3));


