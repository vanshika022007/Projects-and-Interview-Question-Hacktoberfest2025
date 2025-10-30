# Question:
# Mystic Math
# In a magical kingdom, Aria possesses a unique array of numbers called "vals."
# Her quest is to form an expression that equals a given target value.
# She can concatenate the numbers in any order, inserting either a "+" or "-" before each number to build the expression.
# Determine how many distinct expressions she can create that evaluate to the target value.
#
# Input:
# Implement the function mysticMath(vals, n, target) which takes:
# - vals: List of integers
# - n: Number of elements in the list
# - target: The target integer value
#
# Output:
# Return a single integer — the number of distinct expressions that evaluate to the target.
#
# Constraints:
# 1 ≤ n ≤ 20
# 0 ≤ vals[i] ≤ 1000
# 0 ≤ sum(vals[i]) ≤ 1000
# -1000 ≤ target ≤ 1000
#
# Example:
# Input:
# vals = [1, 1, 1, 1, 1]
# n = 5
# target = 3
#
# Output: 5
# Explanation:
# There are 5 ways to assign symbols to make the sum of nums be target 3.
# -1 + 1 + 1 + 1 + 1 = 3
# +1 - 1 + 1 + 1 + 1 = 3
# +1 + 1 - 1 + 1 + 1 = 3
# +1 + 1 + 1 - 1 + 1 = 3
# +1 + 1 + 1 + 1 - 1 = 3

# Solution:

def mysticMath(vals, n, target):
    dp = {0: 1}
    for num in vals:
        new_dp = {}
        for s, count in dp.items():
            new_dp[s + num] = new_dp.get(s + num, 0) + count
            new_dp[s - num] = new_dp.get(s - num, 0) + count
        dp = new_dp
    return dp.get(target, 0)

# Test cases
if __name__ == "__main__":
    test_cases = [
        ([1, 1, 1, 1, 1], 5, 3),  # Expected output: 5
        ([1, 2, 3], 3, 0),        # Expected output: 2
        ([2, 2, 2], 3, 2),        # Expected output: 0
        ([0, 0, 0, 0], 4, 0)      # Expected output: 16
    ]

    for vals, n, target in test_cases:
        print(f"vals={vals}, n={n}, target={target} => ways={mysticMath(vals, n, target)}")
