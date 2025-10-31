def solve_loyalty(test_cases):
    results = []
    for (n, X, A) in test_cases:
        # Sort items in non-decreasing order
        A.sort()
        S = 0
        bonus = 0
        order = []
        for price in reversed(A):
            S += price
            prev_level = (S - price) // X
            curr_level = S // X
            if curr_level > prev_level:
                bonus += price
            order.append(price)
        results.append((bonus, order[::-1]))
    return results

# Example input usage
test_cases = [
    (10, 2, [1, 2, 1, 2, 1, 2, 1, 2, 1, 2]),
    (5, 10, [2, 2, 2, 2, 5]),
]

results = solve_loyalty(test_cases)
for bonus, order in results:
    print(bonus)
    print(' '.join(map(str, order)))
