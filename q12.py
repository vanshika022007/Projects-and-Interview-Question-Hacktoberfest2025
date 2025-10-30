def can_alice_win(n, a, b):
    # Ensure a < b for consistent logic
    if a > b:
        a, b = b, a

    distance = b - a

    if distance % 2 == 1:
        return "Alice"
    else:
        return "Bob"


# Example usage
n = int(input("Enter total lilypads: "))
a = int(input("Enter Alice's starting position: "))
b = int(input("Enter Bob's starting position: "))

print(can_alice_win(n, a, b))
