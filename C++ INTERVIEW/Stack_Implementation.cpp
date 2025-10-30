// Stack Implementation in C++
// Demonstrates push, pop, and display operations.
#include <iostream>
#define MAX 100

class Stack {
    int arr[MAX];
    int top;
public:
    Stack() { top = -1; }
    bool push(int x) {
        if (top >= MAX - 1) return false;
        arr[++top] = x;
        return true;
    }
    int pop() {
        if (top < 0) return -1;
        return arr[top--];
    }
    void display() {
        for (int i = top; i >= 0; --i)
            std::cout << arr[i] << " ";
        std::cout << std::endl;
    }
};

int main() {
    Stack s;
    s.push(10);
    s.push(20);
    s.push(30);
    s.display(); // 30 20 10
    std::cout << "Popped: " << s.pop() << std::endl;
    s.display(); // 20 10
    return 0;
}
