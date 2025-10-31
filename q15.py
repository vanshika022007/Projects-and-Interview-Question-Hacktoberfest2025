t = int(input())

for _ in range(t):
    n = int(input())
    a = list(map(int, input().split()))

    neg = a.count(-1)
    zero = a.count(0)

    # If number of negative numbers is even, product is already positive.
    # We only need to convert zeros to 1 (each costs 1 operation).
    if neg % 2 == 0:
        print(zero)
    else:
        # If negatives are odd, we must make product positive.
        # If there's at least one zero, we can turn that zero into 1 (1 op) to fix parity.
        if zero > 0:
            print(zero + 1)
        else:
            # No zeros, so we must flip one -1 -> 1 (which costs 2 operations).
            print(2)
