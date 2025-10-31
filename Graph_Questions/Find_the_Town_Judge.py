# Question:
# In a town, there are n people labeled from 1 to n. There is a rumor that one of these people is secretly the town judge.
#
# If the town judge exists, then:
# 1. The town judge trusts nobody.
# 2. Everybody (except for the town judge) trusts the town judge.
# 3. There is exactly one person that satisfies properties 1 and 2.
#
# You are given an array trust where trust[i] = [ai, bi] representing that person ai trusts person bi.
# If a trust relationship does not exist in the array, then such a relationship does not exist.
#
# Return the label of the town judge if the judge exists and can be identified, or return -1 otherwise.
#
# Input:
# Implement the function findJudge(n, trust) which takes:
# - n: Integer, the number of people
# - trust: List of pairs [ai, bi] representing trust relationships
#
# Output:
# Return a single integer — the label of the town judge, or -1 if no judge exists.
#
# Constraints:
# 1 <= n <= 1000
# 0 <= trust.length <= 10^4
# trust[i].length == 2
# All the pairs of trust are unique.
# ai != bi
# 1 <= ai, bi <= n
#
# Example 1:
# Input:
# n = 2, trust = [[1,2]]
# Output: 2
#
# Example 2:
# Input:
# n = 3, trust = [[1,3],[2,3]]
# Output: 3
#
# Example 3:
# Input:
# n = 3, trust = [[1,3],[2,3],[3,1]]
# Output: -1


def findJudge(n, trust):
    # Arrays to track how many people each person trusts and is trusted by
    trusts = [0] * n
    trusted_by = [0] * n

    # Process trust relationships
    for u, v in trust:
        trusts[u - 1] += 1
        trusted_by[v - 1] += 1

    # The judge trusts nobody and is trusted by n - 1 people
    for i in range(n):
        if trusts[i] == 0 and trusted_by[i] == n - 1:
            return i + 1

    return -1


# Test cases
if __name__ == "__main__":
    test_cases = [
        (2, [[1,2]]),  # Expected output: 2
        (3, [[1,3],[2,3]]),  # Expected output: 3
        (3, [[1,3],[2,3],[3,1]]),  # Expected output: -1
        (1, [])  # Edge case: single person — should be judge (Expected: 1)
    ]
    
    for n, trust in test_cases:
        print(f"n={n}, trust={trust} => judge={findJudge(n, trust)}")
