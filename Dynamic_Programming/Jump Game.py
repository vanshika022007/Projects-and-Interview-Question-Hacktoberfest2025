"""
Jump Game Problem
Time Complexity: O(n)
Space Complexity: O(1)

Problem Statement:
You are given an integer array nums. You are initially positioned at the array's 
first index, and each element in the array represents your maximum jump length 
at that position.

Return True if you can reach the last index, or False otherwise.

Example 1:
Input: nums = [2,3,1,1,4]
Output: True
Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.

Example 2:
Input: nums = [3,2,1,0,4]
Output: False
Explanation: You will always arrive at index 3 no matter what. 
Its maximum jump length is 0, which makes it impossible to reach the last index.
"""

def can_jump(nums):
    """
    Determines if you can reach the last index in the given array.
    
    Args:
        nums (List[int]): Array where each element represents the maximum jump length.
    
    Returns:
        bool: True if it's possible to reach the last index, False otherwise.
    """
    max_reach = 0  # The farthest index we can reach so far
    
    for i in range(len(nums)):
        # If we are at a position we cannot reach, return False
        if i > max_reach:
            return False
        
        # Update the farthest position we can reach
        max_reach = max(max_reach, i + nums[i])
    
    return True


# Test cases
if __name__ == "__main__":
    tests = [
        [2, 3, 1, 1, 4],
        [3, 2, 1, 0, 4],
        [0],
        [2, 0],
        [1, 2, 3],
        [2, 5, 0, 0]
    ]
    
    for i, nums in enumerate(tests, 1):
        print(f"Test Case {i}:")
        print(f"nums = {nums}")
        print(f"Can Reach Last Index: {can_jump(nums)}\n")
