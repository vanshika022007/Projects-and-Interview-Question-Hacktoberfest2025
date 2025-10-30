# Palindrome Checker
# This script checks if an input string is a palindrome.
# A palindrome reads the same forward and backward.

def is_palindrome(s):
    """Check if a string is a palindrome."""
    s = s.lower().replace(' ', '')  # Ignore case and spaces
    return s == s[::-1]

if __name__ == '__main__':
    test_str = input('Enter a string: ')
    if is_palindrome(test_str):
        print('Palindrome')
    else:
        print('Not a palindrome')
