def solve():
    import sys
    input = sys.stdin.readline
    t = int(input())
    for _ in range(t):
        n, k, x = map(int, input().split())
        a = set(map(int, input().split()))
        res = []
        for i in range(x + 1):
            if i not in a:
                res.append(i)
                if len(res) == k:
                    break
        # If not enough positions (all positions are occupied by friends)
        # Just use any k distinct positions in range
        while len(res) < k:
            for i in range(x + 1):
                if i not in res:
                    res.append(i)
                if len(res) == k:
                    break
        print(" ".join(map(str, res)))

# For local testing, use:
# solve()

