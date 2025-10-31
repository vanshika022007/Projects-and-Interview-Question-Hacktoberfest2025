🧠 Top 10 Dynamic Programming Problems (with Full Code)
1. Climbing Stairs With Variable Jumps

Description:
You are climbing a staircase with n steps. Each stair i allows up to arr[i] jumps.
Find how many distinct ways you can reach the top.

Input:

5
3 3 0 2 2


Output:

5


Code:

def climbing_stairs_with_jumps(n, arr):
    dp = [0] * (n + 1)
    dp[n] = 1
    for i in range(n - 1, -1, -1):
        for jump in range(1, arr[i] + 1):
            if i + jump <= n:
                dp[i] += dp[i + jump]
    return dp[0]

# Example
n = 5
arr = [3, 3, 0, 2, 2]
print(climbing_stairs_with_jumps(n, arr))

2. Minimum Cost Path

Description:
Find the minimum cost to reach the bottom-right corner from the top-left in a 2D grid.
You can move only right or down.

Input:

3 3
1 2 3
4 8 2
1 5 3


Output:

8


Code:

def min_cost_path(grid):
    n, m = len(grid), len(grid[0])
    dp = [[0]*m for _ in range(n)]
    dp[0][0] = grid[0][0]
    for i in range(1, n):
        dp[i][0] = dp[i-1][0] + grid[i][0]
    for j in range(1, m):
        dp[0][j] = dp[0][j-1] + grid[0][j]
    for i in range(1, n):
        for j in range(1, m):
            dp[i][j] = grid[i][j] + min(dp[i-1][j], dp[i][j-1])
    return dp[-1][-1]

# Example
grid = [[1,2,3],[4,8,2],[1,5,3]]
print(min_cost_path(grid))

3. Longest Common Subsequence

Input:

abcde
ace


Output:

3


Code:

def lcs(s1, s2):
    n, m = len(s1), len(s2)
    dp = [[0]*(m+1) for _ in range(n+1)]
    for i in range(1, n+1):
        for j in range(1, m+1):
            if s1[i-1] == s2[j-1]:
                dp[i][j] = 1 + dp[i-1][j-1]
            else:
                dp[i][j] = max(dp[i-1][j], dp[i][j-1])
    return dp[n][m]

print(lcs("abcde", "ace"))

4. 0/1 Knapsack Problem

Input:

3 4
4 5 1
1 2 3


Output:

3


Code:

def knapsack(weights, values, W):
    n = len(weights)
    dp = [[0]*(W+1) for _ in range(n+1)]
    for i in range(1, n+1):
        for w in range(W+1):
            if weights[i-1] <= w:
                dp[i][w] = max(values[i-1] + dp[i-1][w-weights[i-1]], dp[i-1][w])
            else:
                dp[i][w] = dp[i-1][w]
    return dp[n][W]

weights = [4,5,1]
values = [1,2,3]
W = 4
print(knapsack(weights, values, W))

5. Target Sum Subset

Input:

5
4 2 7 1 3
10


Output:

True


Code:

def target_sum_subset(arr, target):
    n = len(arr)
    dp = [[False]*(target+1) for _ in range(n+1)]
    for i in range(n+1):
        dp[i][0] = True
    for i in range(1, n+1):
        for t in range(1, target+1):
            dp[i][t] = dp[i-1][t]
            if t >= arr[i-1]:
                dp[i][t] = dp[i][t] or dp[i-1][t-arr[i-1]]
    return dp[n][target]

print(target_sum_subset([4,2,7,1,3], 10))

6. Coin Change (Number of Ways)

Input:

3
1 2 5
5


Output:

4


Code:

def coin_change(coins, amount):
    dp = [0]*(amount+1)
    dp[0] = 1
    for coin in coins:
        for i in range(coin, amount+1):
            dp[i] += dp[i-coin]
    return dp[amount]

print(coin_change([1,2,5], 5))

7. Edit Distance

Input:

horse
ros


Output:

3


Code:

def edit_distance(s1, s2):
    n, m = len(s1), len(s2)
    dp = [[0]*(m+1) for _ in range(n+1)]
    for i in range(n+1):
        dp[i][0] = i
    for j in range(m+1):
        dp[0][j] = j
    for i in range(1, n+1):
        for j in range(1, m+1):
            if s1[i-1] == s2[j-1]:
                dp[i][j] = dp[i-1][j-1]
            else:
                dp[i][j] = 1 + min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1])
    return dp[n][m]

print(edit_distance("horse", "ros"))

8. Partition Equal Subset Sum

Input:

4
1 5 11 5


Output:

True


Code:

def can_partition(nums):
    total = sum(nums)
    if total % 2 != 0:
        return False
    target = total // 2
    dp = [False]*(target+1)
    dp[0] = True
    for num in nums:
        for j in range(target, num-1, -1):
            dp[j] = dp[j] or dp[j-num]
    return dp[target]

print(can_partition([1,5,11,5]))

9. Longest Increasing Subsequence

Input:

8
10 9 2 5 3 7 101 18


Output:

4


Code:

def LIS(nums):
    n = len(nums)
    dp = [1]*n
    for i in range(n):
        for j in range(i):
            if nums[i] > nums[j]:
                dp[i] = max(dp[i], dp[j]+1)
    return max(dp)

print(LIS([10,9,2,5,3,7,101,18]))

10. Matrix Chain Multiplication

Input:

5
40 20 30 10 30


Output:

26000


Code:

import math
def matrix_chain_multiplication(arr):
    n = len(arr)
    dp = [[0]*n for _ in range(n)]
    for l in range(2, n):
        for i in range(1, n-l+1):
            j = i+l-1
            dp[i][j] = math.inf
            for k in range(i, j):
                cost = dp[i][k] + dp[k+1][j] + arr[i-1]*arr[k]*arr[j]
                dp[i][j] = min(dp[i][j], cost)
    return dp[1][n-1]

print(matrix_chain_multiplication([40,20,30,10,30]))
