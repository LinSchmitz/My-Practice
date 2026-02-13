# 🏦 Project: Smart Banking System (JS Internals)

You need to build a system that manages users' bank accounts.
The system should be able to record transactions, calculate balances at exchange rates,
and allow users to create a sub-account (e.g., a savings account) from their main account.

## 🚀 Tasks & Requirements

### 1. Scoping and TDZ

- Define a global `exchangeRate`.
- Experiment with defining it after calling a function to observe the **Temporal Dead Zone (TDZ)**.

### 2. Method Implementation & `this`

- Create a `mainAccount` object with:
  - `owner`: Name of the account holder.
  - `movements`: Array of transactions (e.g., `[100, -50, 200]`).
  - `details`: A nested object `{ branch: 'Central', type: 'Premium' }`.
- **The `this` Challenge:** Write a method `showSummary()` that contains an inner function. Use an **Arrow Function** for the inner function to ensure it inherits the correct `this` context from the parent method.

### 3. Arrow vs Regular Functions

- Create a `greet` property as an arrow function and a `greetFixed` as a regular function.
- Observe why `greet` cannot access `this.owner`.

### 4. Memory Management (The Clone Challenge)

- Create a `savingsAccount` by copying `mainAccount`.
- **Task A:** Perform a Shallow Copy (`Object.assign`). Add a movement to `savingsAccount` and observe how it affects `mainAccount`.
- **Task B:** Perform a Deep Copy (`structuredClone`). Modify the `details.type` and the `movements` array. Ensure the `mainAccount` remains unchanged.

### 5. Dynamic Binding (Method Borrowing)

- Create a simple object `guestUser` that only has a `movements` array.
- Borrow the `showSummary` method from `mainAccount` and apply it to `guestUser` using `.call()` or `.apply()`.

---

## 🛠 Expected Output in Console

1. Correct balance calculation using the global exchange rate.
2. Demonstration of how `this` changes when a method is borrowed.
3. Proof that Deep Copying prevents data leakage between objects in the **Heap**.
