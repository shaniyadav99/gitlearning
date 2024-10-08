// Q.1 second largest element in an array
/* Understanding the Problem- We have given an array and we have to find Second largest element
psuedo code-
1. we have to check if array is null then there is no element so we retirn 0 because there is no element
2. Now we take a variable max and assign the minimum value integer
3. we iterate over the array with the help of loop
4. we check at every index if that index element is greater than max then we assign that element into max variable
5. Now we take a variable S_max and assign the null value. 
6. we iterate over the array again with the help of loop.
7. now check if any value equal to max then we ignore that element with the help of continue keyword
8. again check for S_max element 
9. now if we found S_max we will return it or if we not found we will return null */
function secondlargest(a)
{
  if(a.length===1)
  {
    return 0;
  }
  let max=Number.MIN_VALUE;
  for(let i=0;i<a.length;i++)
  {
    if(a[i]>max)
    {
      max=a[i];
    }
  }
  let S_max=null;
  for(let i=0;i<a.length;i++)
  {
    if(a[i]===max)
    {
      continue;
    }
    else if(a[i]>S_max) {
      S_max=a[i];
    }
  }
  return S_max;
}
let arr=[1,2,8,10,4,5,6,7,9];
console.log("Second Largest Value:",secondlargest(arr));
//Q.2 Reverse string
/* Understanding the problem- we have given a string and we have to reverse it
psuedo code - 
1. we will create a empty string
2. now we will iterate over the string from last to first
3. add that index word into my empty string
4. return the new string that i created */
function reverseString(a)
{
  let str="";
  for(let i=a.length-1;i>=0;i--)
  {
    str+=a[i];
  }
  return str;
}
let string="a";
console.log("Reversed String is:",reverseString(string));
// Q.3 Intersection of two arrays
/* we have given to array and we have to find element that appear in both arrays
1. we create a empty array for storing array that appear in both array
2. we will iterate both array with the help of loop .
3. we will check if arr1[i]==arr2[j];
4. now we will simply add that element in my array. */

function intersectionOfArrays(a1,a2)
{
  let ans=[];
  for(let i=0;i<a1.length;i++)
  {
    for(let j=0;j<a2.length;j++)
    {
      if(a1[i]===a2[j] && (ans.length<1 || ans[j]!==a2[j]))
      {
        ans.push(a1[i]);
      }
    }
  }
  return ans;
}
let iArr1=[1,4,2],iAarr2=[1,5,2];
console.log("Intersection of Two Arrays:",intersectionOfArrays(iArr1,iAarr2));
// Q.4 Bubble sort
/* Understanding the problem-
we have given an array and we have to sort this into 
ascending order
psuedo code - 
1. we will create a variable swapped 
2. now we will iterate over the array using two lopps
3. check simply a[j]>a[j] if true
4. swapped vlaue with then help of tem variable
5  change the value of swapped in boolean for true
6. for outer loop first pass we check swapped value is change or not 
7. if not change then no need to check it is already sorted
8. return the array after loop ends */
function bubbleSort(a)
{
  let swapped;
  for(let i=0;i<a.length-1;i++)
  {
    swapped=false;
    for(let j=0;j<a.length-i-1;j++)
    {
      if(a[j]>a[j+1]) {
      let temp=a[j];
      a[j]=a[j+1];
      a[j+1]=temp;
      swapped=true;
      }
    }
    if(!swapped)
    {
      break;
      // if array is sorted it means the value of swapped will not change so we no need to 
      // to iterate over entire loop 
    }
  }
  return a;
}
let bubblearr=[5,3,8,4,2];
console.log("Sorted Array is:",bubbleSort(bubblearr));




// Q.5 majority element
/* Understanding the Problem-
we have given an array and we have to find element that appear half of length of array
psuedo code-
1.we check if length is <1 then return 0 
2. create two variable n and ans
3. iterate over the array with the help of 2 loop 
4. if their is any duplicate element then we increase frequency of
that elemnt 
5. now we will check if frequency is equal to half of arrays length.
6. now we will store that element */
function majorityElement(a)
{
  if(a.length<1)
  {
    return null;
  }
  let n=Math.floor(a.length/2),ans=null;
  for(let i=0;i<a.length;i++)
  {
    let count=1;
    for(let j=i+1;j<a.length;j++)
    {
      if(a[i]==a[j])
      {
        count++;
      }
    }
    if(count>n)
    {
      ans=a[i];
    }
  }
  return ans;
}
let arr3=[1,1,2,2,1];
console.log("Majority Element:",majorityElement(arr3));