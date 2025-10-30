
/**
 * Bubble Sort Algorithm Implementation in Java
 * 
 * Time Complexity:
 * - Best Case: O(n) when array is already sorted
 * - Average Case: O(n^2)
 * - Worst Case: O(n^2) when array is reverse sorted
 * 
 * Space Complexity: O(1) as it uses constant extra space
 * 
 * Bubble Sort is the simplest sorting algorithm that works by repeatedly
 * swapping adjacent elements if they are in the wrong order.
 */
public class BubbleSortExample {

    /**
     * Sorts an array using Bubble Sort algorithm
     * @param arr The array to be sorted in ascending order
    public static void bubbleSort(int[] arr) {
        int n = arr.length;
        boolean swapped;

        // Traverse through all array elements
        for (int i = 0; i < n - 1; i++) {
            swapped = false;

            // Last i elements are already in place
            for (int j = 0; j < n - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    // Swap arr[j] and arr[j+1]
                    int temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                    swapped = true;
                }
            }

            // If no two elements were swapped in inner loop, array is sorted
            if (!swapped) break;
        }
    }

    // Utility function to print the array
    public static void printArray(int[] arr) {
        for (int num : arr) System.out.print(num + " ");
        System.out.println();
    }

    // Test the Bubble Sort
    public static void main(String[] args) {
        int[] arr = {64, 34, 25, 12, 22, 11, 90};

        System.out.println("Original array:");
        printArray(arr);

        bubbleSort(arr);

        System.out.println("Sorted array:");
        printArray(arr);
    }
}
