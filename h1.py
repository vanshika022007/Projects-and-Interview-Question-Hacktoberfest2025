import time
import os
import sys


def clear_screen():
    """Clear the console screen."""
    os.system('cls' if os.name == 'nt' else 'clear')


def print_banner():
    """Display the countdown timer banner."""
    print("=" * 50)
    print(" " * 12 + "⏳ COUNTDOWN TIMER ⏳")
    print("=" * 50)
    print()


def print_large_number(num):
    """Display large ASCII numbers for countdown."""
    digits = {
        '0': ["  ███  ", " █   █ ", "█     █", "█     █", "█     █", " █   █ ", "  ███  "],
        '1': ["   █   ", "  ██   ", "   █   ", "   █   ", "   █   ", "   █   ", " █████ "],
        '2': [" █████ ", "█     █", "      █", " █████ ", "█      ", "█      ", "███████"],
        '3': [" █████ ", "█     █", "      █", " █████ ", "      █", "█     █", " █████ "],
        '4': ["█      ", "█    █ ", "█    █ ", "███████", "     █ ", "     █ ", "     █ "],
        '5': ["███████", "█      ", "█      ", "██████ ", "      █", "█     █", " █████ "],
        '6': [" █████ ", "█     █", "█      ", "██████ ", "█     █", "█     █", " █████ "],
        '7': ["███████", "█    █ ", "    █  ", "   █   ", "  █    ", "  █    ", "  █    "],
        '8': [" █████ ", "█     █", "█     █", " █████ ", "█     █", "█     █", " █████ "],
        '9': [" █████ ", "█     █", "█     █", " ██████", "      █", "█     █", " █████ "]
    }

    num_str = str(num)
    for row in range(7):
        line = ""
        for digit in num_str:
            if digit in digits:
                line += digits[digit][row] + "  "
        print(line.center(50))


def countdown_timer():
    """Main countdown logic."""
    clear_screen()
    print_banner()

    try:
        seconds = int(input("Enter countdown duration (seconds): "))

        if seconds <= 0:
            print("\n⚠️ Please enter a positive number!")
            return

        print(f"\nStarting countdown from {seconds}...\n")
        time.sleep(1)

        for i in range(seconds, 0, -1):
            clear_screen()
            print_banner()
            print_large_number(i)
            print("\n" + f"Seconds remaining: {i}".center(50))
            time.sleep(1)

        clear_screen()
        print_banner()
        print("╔" + "═" * 46 + "╗")
        print("║" + " " * 46 + "║")
        print("║" + " " * 10 + "⏰ TIME'S UP! ⏰".center(26) + " " * 10 + "║")
        print("║" + " " * 46 + "║")
        print("╚" + "═" * 46 + "╝")
        print()

        for _ in range(3):
            print("🔔 BEEP! 🔔".center(50))
            time.sleep(0.4)
            sys.stdout.write("\033[F")
            print(" " * 50)
            sys.stdout.write("\033[F")
            time.sleep(0.4)

        print("🔔 BEEP! 🔔".center(50))
        print()

    except ValueError:
        print("\n❌ Invalid input! Please enter a valid number.")
        time.sleep(2)

    except KeyboardInterrupt:
        print("\n\n🛑 Countdown cancelled by user.\n")
        time.sleep(1)


def main():
    """Runs the countdown timer repeatedly until user exits."""
    while True:
        countdown_timer()
        again = input("Start another countdown? (y/n): ").strip().lower()
        if again != 'y':
            print("\nThank you for using Countdown Timer! 🎉\n")
            break


if __name__ == "__main__":
    main()
