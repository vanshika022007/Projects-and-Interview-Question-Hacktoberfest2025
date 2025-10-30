def solve():
    t = int(input())
    for _ in range(t):
        n, k = map(int, input().split())
        a = list(map(int, input().split()))

        # Turn the array into a set for fast lookup
        s = set(a)

        # Case 1: If k is not in the array, we just need to ensure
        # all numbers 0..k-1 are present
        if k not in s:
            missing = sum(1 for x in range(k) if x not in s)
            print(missing)
        else:
            # If k is in array, we must remove all >= k to make MEX = k
            count = sum(1 for x in a if x > k)
            print(count)
