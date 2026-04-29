# Mini Banking App – JavaScript Practice

## شرح مسئله

هدف این پروژه تمرین مفاهیم پیشرفته جاوااسکریپت است:

- Scope و Hoisting
- this و تفاوت Arrow vs Regular Functions
- Call Stack و Execution Context
- Object References و Shallow/Deep Copy
- Memory Management و Garbage Collection

در این پروژه شما یک **سیستم بانکی ساده** پیاده‌سازی می‌کنید که
کاربران می‌توانند موجودی خود را مدیریت کنند و تراکنش‌ها را ثبت کنند.

---

## تسک‌ها

### 1. ایجاد حساب کاربری

- هر کاربر باید یک آبجکت با ویژگی‌های زیر داشته باشد:
  - `name` (نام کاربر)
  - `balance` (موجودی اولیه)
  - `transactions` (آرایه‌ای برای ذخیره تراکنش‌ها)

### 2. توابع مدیریت حساب

- ایجاد توابع برای عملیات بانکی:
  - `deposit(amount)` – اضافه کردن مبلغ به موجودی
  - `withdraw(amount)` – کم کردن مبلغ از موجودی
  - `transfer(amount, recipient)` – انتقال وجه به حساب دیگر

- هر تراکنش باید در آرایه `transactions` ذخیره شود.

### 3. تمرین Scope و this

- تعریف توابع داخل آبجکت با هر دو نوع:
  - Regular Function
  - Arrow Function

- مشاهده رفتار `this` در هر نوع تابع

### 4. تمرین Hoisting و TDZ

- ایجاد چند متغیر با `var`, `let`, `const`
- استفاده از آن‌ها در توابع و بررسی رفتار Hoisting و TDZ

### 5. تمرین Shallow vs Deep Copy

- کپی کردن یک حساب کاربری
- بررسی اثر تغییرات روی کپی و نسخه اصلی

### 6. نمایش تراکنش‌ها

- تابعی بساز که تراکنش‌های یک کاربر را در کنسول نمایش دهد

### 7. Bonus: Garbage Collection

- ایجاد یک حساب و سپس مقداردهی `null`
- بررسی آزاد شدن حافظه
