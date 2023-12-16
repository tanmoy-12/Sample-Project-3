/* sumArray that takes the array as an argument and 
returns the sum of all the elements in the array.*/
function sumArray(arr){
    let add=0;
    for(let i=0;i<arr.length;i++)
    {
        add+=arr[i];
    }
    return add;
}
const Array1=[1,2,3,4,5];
console.log('\n The input array is \t');
console.log(Array1);
const sum=sumArray(Array1);
console.log(`The sum of the numbers is : ${sum}`);



/*a function findMaxNumber that takes an array of numbers as an 
argument and returns the maximum number in the array.*/
function findMaxNumber(arr)
{
    
    let swap=0;
	for(let i=0;i<arr.length;i++)
	{
		for(let j=0;j<arr.length;j++)
		{
			if(arr[j]<arr[j+1])
			{
			swap=arr[j+1];
			arr[j+1]=arr[j];
			arr[j]=swap;
			}
		}
	}
    let  max=arr[0];
    return max;
}
const Array2=[10,5,8,20,3];
console.log('\n The input array is \t');
console.log(Array2);
const MaxNumber=findMaxNumber(Array2);
console.log(`The maximum number is : ${MaxNumber}`);


/*a function filterOddNumbers that takes an array of numbers as an argument and 
returns a new array containing only the odd numbers.*/
function filterOddNumbers(arr){
    const odd=[];
    let j=0;
    for(let i=0;i<arr.length;i++){
        let temp=0;
        if(arr[i]%2!=0)
        {
            temp=arr[i];
        }
        while(j<arr.length)
        {
            if(temp==0)
            break;
            odd[j]=temp;
            j++;
            break;
        }
    }
    return odd;
}
const Array3=[1,2,3,4,5];
console.log('\n The input array is \t');
console.log(Array3);
const oddNumbers=filterOddNumbers(Array3);
console.log("The odd numbers present in the array are :");
console.log(oddNumbers)


/*a function isPalindrome that takes a string as an argument and returns 
true if the string is a palindrome (reads the same backward as forward), and false otherwise.*/
function isPalindrome(string){
    let check=0;
    for(let i=0;i<string.length;i++)
    {
        for(let j=string.length-1;j>0;j--)
        {
            if(string[i]==string[j])
            return true;
            else
            return false;
        }
    }
}
const isPalindromeResult=isPalindrome('tenet');
const isNotPalindromeResult=isPalindrome('Hello');

console.log(`\n ${isPalindromeResult}`);
console.log(`${isNotPalindromeResult}`);



/*a function findMissingNumber that takes an array of numbers from 1 to N 
(where N is the length of the array + 1) with one 
number missing and returns the missing number.*/
function findMissingNumber(arr){
    let missing=0;
    for(let i=0;i<arr.length;i++)
    {
        if(i+1!=arr[i])
        {
            missing=i;
        }
    }
    return missing;
}
const Array4=[1,2,3,5,6];
console.log('\n The input array is \t');
console.log(Array4);
const missingNumber=findMissingNumber(Array4);
console.log(`The missing number is ${missingNumber}`);



/*A function findDuplicates that takes an array as an argument and 
returns an array containing only the duplicate elements. */
function findDuplicates(arr){
    const Missing=[];
    let k=0;
    for(let i=0;i<arr.length;i++)
    {
        for(let j=i+1;j<arr.length;j++)
        {
            let temp=0;
            if(arr[i]==arr[j])
            {
                temp=arr[i];
            }
            while(k<arr.length)
            {
                if(temp==0)
                break;
                Missing[k]=temp;
                k++;
                break;
            }
        }    
    }
    return Missing;
}
const Array5=[1,2,3,2,4,5,3];
console.log('\n The input array is \t');
console.log(Array5);
const duplicateNumbers=findDuplicates(Array5);
console.log("The duplicate numbers present in the array are :");
console.log(duplicateNumbers)
