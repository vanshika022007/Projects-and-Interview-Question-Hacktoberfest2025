import sys
import threading

def main():
    import bisect
    import math

    input = sys.stdin.readline

    t = int(input())
    for _ in range(t):
        n = int(input())
        edges = []
        for _ in range(n-1):
            u, v, w = map(int, input().split())
            edges.append(w)

        edges.sort(reverse=True)
        prefix = [0]
        for w in edges:
            prefix.append(prefix[-1] + w)  # prefix[k]: sum of k largest edge weights

        q = int(input())
        queries = list(map(int, input().split()))
        results = []
        for l in queries:
            # Binary search for smallest k such that prefix[k] >= l
            # k can be [0, n-1]
            k = bisect.bisect_left(prefix, l)
            if k <= n-1:
                results.append(k)
            else:
                results.append(-1)

        print('\n'.join(map(str, results)))

threading.Thread(target=main,).start()
