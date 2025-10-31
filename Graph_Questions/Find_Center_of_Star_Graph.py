# Question:
# You are given an undirected star graph consisting of n nodes labeled from 1 to n.
# A star graph has one center node connected to every other node (n - 1 edges total).
#
# You are given a 2D integer array `edges` where each edges[i] = [ui, vi] indicates 
# that there is an edge between the nodes ui and vi.
# Return the center of the given star graph.
#
# Input:
# Implement the function findCenter(edges, n) which takes:
# - edges: List of lists of integers (each a pair [ui, vi])
# - n: Number of nodes in the graph
#
# Output:
# Return a single integer — the label of the center node.
#
# Constraints:
# 3 <= n <= 10^5
# edges.length == n - 1
# edges[i].length == 2
# 1 <= ui, vi <= n
# ui != vi
# The given edges represent a valid star graph.
#
# Example:
# Input:
# edges = [[1,2],[2,3],[4,2]], n = 4
# Output: 2
# Explanation:
# Node 2 is connected to all other nodes (1, 3, 4), so it is the center.


def findCenter(edges, n):
    # The center of a star graph must appear in both of the first two edges
    if edges[0][0] in edges[1]:
        return edges[0][0]
    else:
        return edges[0][1]


# Test cases
if __name__ == "__main__":
    test_cases = [
        ([[1,2],[2,3],[4,2]], 4),  # Expected output: 2
        ([[1,2],[5,1],[1,3],[1,4]], 5)  # Expected output: 1
    ]
    
    for edges, n in test_cases:
        print(f"edges={edges}, n={n} => center={findCenter(edges, n)}")
