import os 
n = 13
ls = [1,2,3,4,5,6,7,8,9]   

def pattern():
    os.system("cls")
    count = 0
    for i in range(n):
        for j in range(n):
            if (i == 2 or i == 6 or i == 10) and (j == 2 or j == 6 or j == 10):
                print(ls[count], end="  ")
                count += 1
            elif (i == 4 or i == 8) or (j == 4 or j == 8):
                print("*", end="  ")
            else:
                print(" ", end="  ")
        print()

def verifyUserInput(x):
    l = ["1","2","3","4","5","6","7","8","9"]
    if x not in l:
        return False
    
    x = int(x) - 1  # Convert to index
    if ls[x] == "O" or ls[x] == "X":
        return False
    return True

def update(x, i):
    x -= 1  # Convert to index
    if i % 2 == 0:
        ls[x] = "O"
    else:
        ls[x] = "X"

def check_winner():
    winning_combinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],  # Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8],  # Columns
        [0, 4, 8], [2, 4, 6]  # Diagonals
    ]
    
    for combo in winning_combinations:
        a, b, c = combo
        if ls[a] == ls[b] == ls[c]:
            return ls[a]  # Return the winner ("O" or "X")
    return None

i = 0
pattern()
while i < 9:
    print("Enter your choice (1-9):", end=" ")
    x = input()
    
    if not verifyUserInput(x):
        pattern()
        print("You entered an invalid number!!🥲")
        continue
    
    update(int(x), i)
    pattern()
    
    winner = check_winner()
    if winner:
        print(f"Player {winner} wins!🎉🥳✨")
        break
    
    i += 1

if i == 9 and not check_winner():
    print("It's a tie!🫱🏻‍🫲🏼🌸")

# ----------------------------------------------
# 🛠️ Tic-Tac-Toe Game | Created by Vanshika ⚡
# 📅 February 2025
# ----------------------------------------------







