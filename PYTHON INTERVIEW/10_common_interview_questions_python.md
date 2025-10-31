# 10 Common Python Interview Questions and Answers

This file contains 10 commonly asked Python interview questions with concise answers.

---

1) What is the difference between list and tuple in Python?

Answer:
- List is mutable (can be changed), tuple is immutable (cannot be changed after creation).
- Lists use square brackets [] while tuples use parentheses () or just commas.
- Tuples can be used as keys in dictionaries if they contain only hashable elements; lists cannot.

---

2) Explain Python's GIL (Global Interpreter Lock).

Answer:
- GIL is a mutex that protects access to Python objects, preventing multiple native threads from executing Python bytecodes at once in CPython.
- It simplifies memory management but limits CPU-bound multithreading; use multiprocessing for CPU-bound tasks.

---

3) What are list comprehensions and generator expressions?

Answer:
- List comprehension: concise way to create lists: [x*x for x in range(5)].
- Generator expression: similar but uses parentheses and yields items lazily: (x*x for x in range(5)).
- Generators use less memory for large sequences.

---

4) How does Python handle memory management?

Answer:
- Python uses automatic memory management with reference counting and a cyclic garbage collector to reclaim cycles.
- The interpreter tracks object references and frees memory when reference count reaches zero.

---

5) What is the difference between `deepcopy` and `copy`?

Answer:
- `copy.copy()` creates a shallow copy: it copies the outer object but references inner mutable objects.
- `copy.deepcopy()` creates a deep copy: it recursively copies all nested objects so modifications won't affect the original.

---

6) How do you manage packages and virtual environments in Python?

Answer:
- Use `venv` or `virtualenv` to create isolated environments.
- Use `pip` to install packages inside the virtual environment.
- Tools like `pipenv`, `poetry`, and `conda` provide higher-level dependency and environment management.

---

7) Explain the difference between `==` and `is`.

Answer:
- `==` checks value equality (calls `__eq__`).
- `is` checks identity — whether two references point to the same object in memory.

---

8) What are decorators in Python?

Answer:
- Decorators are functions that modify the behavior of other functions or classes.
- Syntax uses `@decorator` above a function definition.
- Commonly used for logging, access control, caching, and retry logic.

Example:
```
def my_decorator(fn):
    def wrapper(*args, **kwargs):
        print("Before")
        result = fn(*args, **kwargs)
        print("After")
        return result
    return wrapper

@my_decorator
def greet(name):
    print(f"Hello {name}")
```

---

9) How do you handle exceptions in Python?

Answer:
- Use `try` / `except` blocks to catch exceptions, optionally `else` and `finally` for cleanup.
- Catch specific exception types instead of a bare `except:` to avoid masking errors.

Example:
```
try:
    x = 1 / 0
except ZeroDivisionError:
    print("Cannot divide by zero")
finally:
    print("Cleanup")
```

---

10) What are Python's built-in data structures and when to use them?

Answer:
- Lists: ordered, mutable sequences — use for general-purpose collections.
- Tuples: ordered, immutable sequences — use for fixed collections and keys.
- Sets: unordered collections of unique elements — use for membership tests and deduplication.
- Dicts: key-value mappings — use for fast lookups by key.
- Choose based on required operations (indexing, uniqueness, ordering) and performance characteristics.

---

If you'd like, I can also add a `C++ INTERVIEW/10_common_interview_questions_cpp.md` variant, or add more detailed answers and example code for each question.