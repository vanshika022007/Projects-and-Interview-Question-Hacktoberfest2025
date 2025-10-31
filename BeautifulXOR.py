t = int(input())
for _ in range(t):
    a, b = map(int, input().split())
    if a == b:
        print(0)
    elif b <= a:
        # first operation: x = a ⊕ b
        x = a ^ b
        if x <= a:
            print(1)
            print(x)
        else:
            print(2)
            print(a, b)
    else:
        print(-1)
