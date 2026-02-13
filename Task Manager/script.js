'use strict';

// Global Scope
const firstName = 'Matilda'; // تغییر نام برای جلوگیری از اشتباه

const jonas = {
  firstName: 'Jonas', // Property of the object
  year: 1991,

  calcAge: function () {
    console.log(2026 - this.year);

    // Solution 1: Arrow function inside a method
    const isMillennial = () => {
      // این تابع this را از کجا می‌آورد؟
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillennial();
  },

  greet: () => {
    // Arrow function و چالش This
    console.log(`Hey ${this.firstName}`);
  },
};

const peter = {
  year: 2010,
  firstName: 'Peter',
};

// --- Execution Cases ---
// Case 1: jonas.greet();
// Case 2: jonas.calcAge();
// Case 3: peter.calcAge = jonas.calcAge;
//         peter.calcAge();
