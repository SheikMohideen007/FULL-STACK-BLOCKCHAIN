//SPDX-License-Identifier:MIT
pragma solidity ^0.8.7;

contract array{
    uint[] public nums=[1, 2, 3, 4, 5, 6];

    //to read an array
    function getArray()public view returns(uint[] memory){
        return nums;
    }
   
    //to get the length of an array
    function getLength()public view returns(uint){
        return nums.length;
    }
   
    //to remove the last value in an array
    function pop()public{
        nums.pop();
    }
    
    //to remove the value by its index and shifting towards from right to left
    function removeByIndex(uint index)public{
       delete nums[index];
       
       //if we remove the array from the particular index the value will replace with 0
       //so if we want to remove the value permanently, need to shift the values.

       for(uint i=index;i<nums.length-1;i++){
           nums[i]=nums[i+1];
       }

       //then pop the last value
       nums.pop();
    }
}
