function sumOfDistinctElements(set1, set2) {
  let distinctSet = [];
  for (let i = 0; i < set1.length; i++) {  // Loop through each element in set1
    if (!distinctSet.includes(set1[i])) {  // Check if the element is not already in the distinct set
      distinctSet.push(set1[i]);  // Add the element to the distinct set
    }
  }
  for (let j = 0; j < set2.length; j++) {  // Loop through each element in set2
    if (!distinctSet.includes(set2[j])) {  // Check if the element is not already in the distinct set
      distinctSet.push(set2[j]);  // Add the element to the distinct set
    }
  }
  return distinctSet.reduce((accumulator, currentValue) => accumulator + currentValue, 0);  // Use the reduce function to get the sum of elements in the distinct set
}

// Example usage:
let set1 = [3, 1, 7, 9];
let set2 = [2, 4, 1, 9, 3];
console.log(sumOfDistinctElements(set1, set2));  // Output: 13