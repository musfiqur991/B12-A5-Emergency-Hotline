

### 6. Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
ans: getElementById এর মাধ্যমে নিদিষ্ট id সিলেক্ট করে একসেস করা যায়, getElementsByClassName একাধিক এলিমেন্ট একটি নিদিষ্ট ক্লাসনেমের আন্ডারে থাকলে তা একসাথে সব একসেস করা যায় এবং array like object show করে , querySelector সিলেক্ট অনুযায়ী প্রথম মিলে যাওয়া এলিমেন্ট রিটার্ন করে / querySelectorAll সিলেক্ট অনুযায়ী সব মিলে যাওয়া এলিমেন্ট রিটার্ন করে
2. How do you **create and insert a new element into the DOM**?
ans: at first create a element : document.createElement(এখানে যা made করতে চাই তার  নাম দিবো)
তারপর innerHtml e প্রয়োজনীয় টেক্সট ডিজাইন করে appendChild() করবো

3. What is **Event Bubbling** and how does it work?
Event Bubbling মানে হচ্ছে যখন একটি child element-এ event ঘটে, সেই event ধীরে ধীরে উপরের parent elements subsequently জাইতে থেকাকে বুঝায়।এটা একটি গাছের মতো কাজ করে। যেমন কান্ড থেকে একাধিক শাখা সেখান থেকে আবার প্রশাখা। এখন প্রশাখাকে ধরলে তার পারেন্ট শাখাতে যাবো আবার শাখার পারেন্ট কে ধরলে কান্ডতে যাবো। এটিও এইভাবে কোর্ডে কাজ করে
4. What is **Event Delegation** in JavaScript? Why is it useful?
parent element-এ ইভেন্ট লিসেনার বসানোকে বুঝায়। 
 useful ফাক্ট হলো কোর্ড কম লাগে, কোর্ড ভুল কম হয়,কম জাইগা লাগে
5. What is the difference between **preventDefault() and stopPropagation()** methods?
stopPropagation() ইভেন্ট বুবলিং থামিয়ে দেয়
preventDefault() ব্রাউজারে ডিফ্লট রিলোর্ড থামিয়ে দেয়। example ইনপুট ফিল্ড এ সাবমিড বাটন থাকলে যেমন পেইজ রিলোর্ড হয় । তা বন্ধ করে
---

