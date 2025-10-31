# Top 20 Graph Interview Questions in Python
# Description: This file contains 20 essential graph problems frequently asked in coding interviews.
# Each problem includes a short description and a Python implementation.

# 🧠 Graph Basics
from collections import defaultdict, deque
import heapq


# 1️⃣ Create a Graph using Adjacency List
class Graph:
    def __init__(self):
        self.graph = defaultdict(list)

    def add_edge(self, u, v):
        self.graph[u].append(v)

    def display(self):
        for node in self.graph:
            print(f"{node} -> {self.graph[node]}")


# 2️⃣ Breadth-First Search (BFS)
def bfs(graph, start):
    visited, queue = set([start]), deque([start])
    result = []
    while queue:
        node = queue.popleft()
        result.append(node)
        for neighbor in graph[node]:
            if neighbor not in visited:
                visited.add(neighbor)
                queue.append(neighbor)
    return result


# 3️⃣ Depth-First Search (DFS)
def dfs(graph, start, visited=None):
    if visited is None:
        visited = set()
    visited.add(start)
    for neighbor in graph[start]:
        if neighbor not in visited:
            dfs(graph, neighbor, visited)
    return visited


# 4️⃣ Detect Cycle in Undirected Graph (DFS)
def has_cycle_undirected(graph):
    visited = set()

    def dfs(node, parent):
        visited.add(node)
        for neighbor in graph[node]:
            if neighbor not in visited:
                if dfs(neighbor, node):
                    return True
            elif neighbor != parent:
                return True
        return False

    for node in graph:
        if node not in visited:
            if dfs(node, -1):
                return True
    return False


# 5️⃣ Detect Cycle in Directed Graph (DFS + recursion stack)
def has_cycle_directed(graph):
    visited, rec_stack = set(), set()

    def dfs(node):
        visited.add(node)
        rec_stack.add(node)
        for neighbor in graph[node]:
            if neighbor not in visited:
                if dfs(neighbor):
                    return True
            elif neighbor in rec_stack:
                return True
        rec_stack.remove(node)
        return False

    for node in graph:
        if node not in visited:
            if dfs(node):
                return True
    return False


# 6️⃣ Topological Sort (DFS)
def topological_sort(graph):
    visited, stack = set(), []

    def dfs(node):
        visited.add(node)
        for neighbor in graph[node]:
            if neighbor not in visited:
                dfs(neighbor)
        stack.append(node)

    for node in graph:
        if node not in visited:
            dfs(node)
    return stack[::-1]


# 7️⃣ Topological Sort (Kahn’s Algorithm)
def topological_sort_kahn(graph, n):
    indegree = [0] * n
    for u in graph:
        for v in graph[u]:
            indegree[v] += 1
    queue = deque([i for i in range(n) if indegree[i] == 0])
    topo = []
    while queue:
        node = queue.popleft()
        topo.append(node)
        for neighbor in graph[node]:
            indegree[neighbor] -= 1
            if indegree[neighbor] == 0:
                queue.append(neighbor)
    return topo


# 8️⃣ Count Connected Components
def count_connected_components(graph, n):
    visited = set()
    count = 0

    def dfs(node):
        visited.add(node)
        for neighbor in graph[node]:
            if neighbor not in visited:
                dfs(neighbor)

    for i in range(n):
        if i not in visited:
            dfs(i)
            count += 1
    return count


# 9️⃣ Check if Graph is Bipartite (BFS)
def is_bipartite(graph, n):
    color = [-1] * n
    for start in range(n):
        if color[start] == -1:
            queue = deque([start])
            color[start] = 0
            while queue:
                node = queue.popleft()
                for neighbor in graph[node]:
                    if color[neighbor] == -1:
                        color[neighbor] = 1 - color[node]
                        queue.append(neighbor)
                    elif color[neighbor] == color[node]:
                        return False
    return True


# 🔟 Clone a Graph (DFS)
class Node:
    def __init__(self, val):
        self.val = val
        self.neighbors = []


def clone_graph(node, visited=None):
    if not node:
        return None
    if visited is None:
        visited = {}
    if node in visited:
        return visited[node]
    clone = Node(node.val)
    visited[node] = clone
    for neighbor in node.neighbors:
        clone.neighbors.append(clone_graph(neighbor, visited))
    return clone


# 1️⃣1️⃣ Shortest Path in Unweighted Graph (BFS)
def shortest_path_unweighted(graph, start, target):
    queue = deque([(start, [start])])
    while queue:
        node, path = queue.popleft()
        if node == target:
            return path
        for neighbor in graph[node]:
            if neighbor not in path:
                queue.append((neighbor, path + [neighbor]))
    return []


# 1️⃣2️⃣ Dijkstra’s Algorithm (Shortest Path)
def dijkstra(graph, start):
    pq = [(0, start)]
    distances = {node: float("inf") for node in graph}
    distances[start] = 0
    while pq:
        dist, node = heapq.heappop(pq)
        for neighbor, weight in graph[node]:
            new_dist = dist + weight
            if new_dist < distances[neighbor]:
                distances[neighbor] = new_dist
                heapq.heappush(pq, (new_dist, neighbor))
    return distances


# 1️⃣3️⃣ Bellman-Ford Algorithm
def bellman_ford(edges, n, start):
    dist = [float("inf")] * n
    dist[start] = 0
    for _ in range(n - 1):
        for u, v, w in edges:
            if dist[u] + w < dist[v]:
                dist[v] = dist[u] + w
    return dist


# 1️⃣4️⃣ Detect Negative Weight Cycle
def detect_negative_cycle(edges, n):
    dist = [0] * n
    for _ in range(n - 1):
        for u, v, w in edges:
            if dist[u] + w < dist[v]:
                dist[v] = dist[u] + w
    for u, v, w in edges:
        if dist[u] + w < dist[v]:
            return True
    return False


# 1️⃣5️⃣ Floyd–Warshall Algorithm (All Pairs Shortest Path)
def floyd_warshall(matrix):
    n = len(matrix)
    dist = [row[:] for row in matrix]
    for k in range(n):
        for i in range(n):
            for j in range(n):
                dist[i][j] = min(dist[i][j], dist[i][k] + dist[k][j])
    return dist


# 1️⃣6️⃣ Kruskal’s Algorithm (Minimum Spanning Tree)
def kruskal(n, edges):
    parent = list(range(n))

    def find(x):
        while x != parent[x]:
            x = parent[x]
        return x

    def union(x, y):
        parent[find(x)] = find(y)

    mst, total = [], 0
    for u, v, w in sorted(edges, key=lambda x: x[2]):
        if find(u) != find(v):
            union(u, v)
            mst.append((u, v, w))
            total += w
    return mst, total


# 1️⃣7️⃣ Prim’s Algorithm (MST)
def prim(graph, start):
    visited, pq, total = set(), [(0, start)], 0
    while pq:
        weight, node = heapq.heappop(pq)
        if node not in visited:
            visited.add(node)
            total += weight
            for neighbor, w in graph[node]:
                if neighbor not in visited:
                    heapq.heappush(pq, (w, neighbor))
    return total


# 1️⃣8️⃣ Find Bridges in a Graph (Tarjan’s Algorithm)
def find_bridges(graph, n):
    time, bridges = 0, []
    visited, tin, low = [False]*n, [-1]*n, [-1]*n

    def dfs(v, p=-1):
        nonlocal time
        visited[v] = True
        tin[v] = low[v] = time
        time += 1
        for to in graph[v]:
            if to == p:
                continue
            if visited[to]:
                low[v] = min(low[v], tin[to])
            else:
                dfs(to, v)
                low[v] = min(low[v], low[to])
                if low[to] > tin[v]:
                    bridges.append((v, to))

    for i in range(n):
        if not visited[i]:
            dfs(i)
    return bridges


# 1️⃣9️⃣ Find Articulation Points
def articulation_points(graph, n):
    visited = [False]*n
    tin, low = [-1]*n, [-1]*n
    timer, result = 0, set()

    def dfs(v, p=-1):
        nonlocal timer
        visited[v] = True
        tin[v] = low[v] = timer
        timer += 1
        children = 0
        for to in graph[v]:
            if to == p:
                continue
            if visited[to]:
                low[v] = min(low[v], tin[to])
            else:
                dfs(to, v)
                low[v] = min(low[v], low[to])
                if low[to] >= tin[v] and p != -1:
                    result.add(v)
                children += 1
        if p == -1 and children > 1:
            result.add(v)

    for i in range(n):
        if not visited[i]:
            dfs(i)
    return list(result)


# 2️⃣0️⃣ Detect Strongly Connected Components (Kosaraju’s Algorithm)
def kosaraju(graph, n):
    stack, visited = [], set()

    def dfs1(node):
        visited.add(node)
        for nei in graph[node]:
            if nei not in visited:
                dfs1(nei)
        stack.append(node)

    def dfs2(node, comp):
        comp.append(node)
        visited.add(node)
        for nei in rev_graph[node]:
            if nei not in visited:
                dfs2(nei, comp)

    # Step 1: Fill stack
    for i in range(n):
        if i not in visited:
            dfs1(i)

    # Step 2: Reverse graph
    rev_graph = defaultdict(list)
    for u in graph:
        for v in graph[u]:
            rev_graph[v].append(u)

    # Step 3: DFS in reverse order
    visited.clear()
    scc = []
    while stack:
        node = stack.pop()
        if node not in visited:
            comp = []
            dfs2(node, comp)
            scc.append(comp)
    return scc
