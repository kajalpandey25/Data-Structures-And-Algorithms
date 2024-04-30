
// Quick sort is another efficient sorting algorithm that follows the divide-and-conquer approach. It works by selecting a "pivot" element from the array and partitioning the other elements into two subarrays according to whether they are less than or greater than the pivot. The subarrays are then recursively sorted.

// Here's a basic outline of how quick sort works:

// 1. Choose a pivot element from the array. This pivot element can be selected in various ways, such as picking the first element, the last element, or a random element.

// 2. Partition the array into two subarrays: one containing elements less than the pivot and the other containing elements greater than the pivot. Elements equal to the pivot can go on either side.

// 3. Recursively apply quick sort to the subarrays created in step 2 until the entire array is sorted.

// 4. Combine the sorted subarrays to get the final sorted array.
// 5. In-place

// Quick sort is known for its efficiency and is often faster in practice compared to other sorting algorithms like merge sort for smaller datasets, especially due to its in-place partitioning and fewer recursive calls.
// The average-case time complexity of quick sort is O(n log n), where n is the number of elements in the array. However, in the worst case, quick sort can have a time complexity of O(n^2)