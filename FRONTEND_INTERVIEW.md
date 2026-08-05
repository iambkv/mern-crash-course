# Frontend Developer Interview Preparation Guide
## Advanced Concepts, Scenario-Based Questions & Real-Time Examples

---

## 1. Event Loop & Call Stack

### Concept Explanation

```javascript
// JavaScript is SINGLE-THREADED but NON-BLOCKING
// It achieves concurrency through the Event Loop

// Components:
// 1. Call Stack - Where functions execute (LIFO)
// 2. Web APIs - Browser-provided (setTimeout, fetch, DOM events)
// 3. Callback Queue (Task Queue) - setTimeout, setInterval callbacks
// 4. Microtask Queue - Promises, MutationObserver, queueMicrotask
// 5. Event Loop - Moves tasks from queues to call stack when stack is empty

console.log('1');                          // Call Stack (sync)

setTimeout(() => console.log('2'), 0);     // Web API → Task Queue

Promise.resolve().then(() => console.log('3')); // Microtask Queue

queueMicrotask(() => console.log('4'));    // Microtask Queue

console.log('5');                          // Call Stack (sync)

// Output: 1, 5, 3, 4, 2
// WHY? 
// - Sync code runs first (1, 5)
// - Microtasks run before macrotasks (3, 4)
// - setTimeout is macrotask, runs last (2)
```

### Interview Questions:

**Q: What is the output of this code?**
```javascript
async function foo() {
  console.log('A');
  await Promise.resolve();
  console.log('B');
}

console.log('C');
foo();
console.log('D');

// Output: C, A, D, B
// Explanation:
// - 'C' prints (sync)
// - foo() called: 'A' prints (sync part of async function)
// - await pauses foo(), everything after await goes to microtask queue
// - 'D' prints (sync, call stack continues)
// - Event loop picks up microtask: 'B' prints
```

**Q: Why does setTimeout(fn, 0) not execute immediately?**
```javascript
// Even with 0ms delay, setTimeout callback goes to Task Queue
// It can only execute AFTER:
// 1. Call stack is empty
// 2. All microtasks are completed

console.log('start');

setTimeout(() => console.log('timeout'), 0);

Promise.resolve().then(() => {
  console.log('promise 1');
  Promise.resolve().then(() => console.log('promise 2'));
});

console.log('end');

// Output: start, end, promise 1, promise 2, timeout
// Microtasks can spawn more microtasks — ALL run before any macrotask
```

**Q: How can you prevent the event loop from being blocked?**
```javascript
// BAD: Long synchronous loop blocks everything
function processLargeArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    heavyComputation(arr[i]); // Blocks UI for seconds!
  }
}

// GOOD: Break into chunks using requestIdleCallback or setTimeout
function processInChunks(arr, chunkSize = 100) {
  let index = 0;
  
  function processChunk() {
    const end = Math.min(index + chunkSize, arr.length);
    
    for (; index < end; index++) {
      heavyComputation(arr[index]);
    }
    
    if (index < arr.length) {
      // Yield to event loop - allows UI updates and other events
      requestAnimationFrame(processChunk);
    }
  }
  
  processChunk();
}

// BEST: Use requestIdleCallback for non-urgent work
function processWhenIdle(tasks) {
  function workLoop(deadline) {
    while (deadline.timeRemaining() > 0 && tasks.length > 0) {
      const task = tasks.shift();
      task();
    }
    
    if (tasks.length > 0) {
      requestIdleCallback(workLoop);
    }
  }
  
  requestIdleCallback(workLoop);
}
```

---

## 2. Closures & Lexical Scope

### Concept Explanation

```javascript
// Closure = A function that remembers variables from its outer scope
// even after the outer function has returned

// Lexical Scope = Variables are resolved based on WHERE they are defined,
// not where they are called

function createCounter() {
  let count = 0; // This variable is "enclosed" in the closure
  
  return {
    increment: () => ++count,
    decrement: () => --count,
    getCount: () => count
  };
}

const counter = createCounter();
counter.increment(); // 1
counter.increment(); // 2
counter.getCount();  // 2
// 'count' is not accessible from outside, but the returned functions
// still have access to it — that's a closure!
```

### Interview Questions:

**Q: Classic closure problem with var in loops**
```javascript
// BAD: All callbacks share the same 'i' variable
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}
// Output: 3, 3, 3 (not 0, 1, 2!)
// Why? 'var' is function-scoped. By the time setTimeout fires, loop is done, i = 3

// FIX 1: Use let (block-scoped)
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}
// Output: 0, 1, 2

// FIX 2: Use IIFE (creates new scope per iteration)
for (var i = 0; i < 3; i++) {
  ((j) => {
    setTimeout(() => console.log(j), 1000);
  })(i);
}

// FIX 3: Use closure explicitly
for (var i = 0; i < 3; i++) {
  setTimeout(console.log.bind(null, i), 1000);
}
```

**Q: Real-world use of closures**
```javascript
// 1. Data Privacy / Encapsulation
function createBankAccount(initialBalance) {
  let balance = initialBalance; // Private variable
  
  return {
    deposit(amount) {
      if (amount <= 0) throw new Error('Invalid amount');
      balance += amount;
      return balance;
    },
    withdraw(amount) {
      if (amount > balance) throw new Error('Insufficient funds');
      balance -= amount;
      return balance;
    },
    getBalance() {
      return balance;
    }
  };
}

const account = createBankAccount(1000);
account.deposit(500);   // 1500
account.withdraw(200);  // 1300
// account.balance → undefined (can't access directly!)

// 2. Function Factory
function createMultiplier(factor) {
  return (number) => number * factor;
}

const double = createMultiplier(2);
const triple = createMultiplier(3);
double(5);  // 10
triple(5);  // 15

// 3. Memoization (caching)
function memoize(fn) {
  const cache = new Map(); // Closure keeps cache alive
  
  return function(...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) return cache.get(key);
    
    const result = fn.apply(this, args);
    cache.set(key, result);
    return result;
  };
}

const expensiveCalc = memoize((n) => {
  console.log('Computing...');
  return n * n;
});

expensiveCalc(5); // "Computing..." → 25
expensiveCalc(5); // → 25 (from cache, no "Computing...")

// 4. React Hooks ARE closures!
function useState(initialValue) {
  let value = initialValue;
  
  const state = () => value;
  const setState = (newValue) => {
    value = newValue;
    // trigger re-render
  };
  
  return [state, setState];
}
```

---

## 3. Prototypal Inheritance

### Concept Explanation

```javascript
// JavaScript doesn't have classical inheritance (like Java/C++)
// It uses PROTOTYPAL inheritance — objects inherit from other objects

// Every object has a hidden [[Prototype]] link to another object
// When you access a property, JS looks up the prototype chain

const animal = {
  isAlive: true,
  eat() { console.log(`${this.name} is eating`); }
};

const dog = Object.create(animal); // dog's prototype is animal
dog.name = 'Rex';
dog.bark = function() { console.log('Woof!'); };

dog.eat();    // "Rex is eating" — found on prototype (animal)
dog.bark();   // "Woof!" — found on dog itself
dog.isAlive;  // true — found on prototype

// Prototype chain: dog → animal → Object.prototype → null
```

### Interview Questions:

**Q: Difference between __proto__, prototype, and Object.create()?**
```javascript
// prototype → property on CONSTRUCTOR FUNCTIONS
// __proto__ → link on INSTANCES pointing to constructor's prototype
// Object.create() → creates object with specified prototype

function Person(name) {
  this.name = name;
}
Person.prototype.greet = function() {
  return `Hi, I'm ${this.name}`;
};

const john = new Person('John');
john.__proto__ === Person.prototype; // true
john.greet(); // "Hi, I'm John"

// Object.create (preferred modern approach)
const personProto = {
  greet() { return `Hi, I'm ${this.name}`; }
};

const jane = Object.create(personProto);
jane.name = 'Jane';
jane.greet(); // "Hi, I'm Jane"

// ES6 Class (syntactic sugar over prototypes)
class Animal {
  constructor(name) { this.name = name; }
  speak() { return `${this.name} makes a sound`; }
}

class Dog extends Animal {
  speak() { return `${this.name} barks`; }
}

const rex = new Dog('Rex');
rex.speak(); // "Rex barks"
rex instanceof Dog;    // true
rex instanceof Animal; // true
```

**Q: How does `new` keyword work internally?**
```javascript
// When you call `new Person('John')`, this happens:
function myNew(Constructor, ...args) {
  // 1. Create empty object with Constructor's prototype
  const obj = Object.create(Constructor.prototype);
  
  // 2. Execute constructor with 'this' bound to new object
  const result = Constructor.apply(obj, args);
  
  // 3. Return the object (unless constructor returns an object)
  return result instanceof Object ? result : obj;
}

const john = myNew(Person, 'John');
// Same as: const john = new Person('John');
```

---

## 4. Promises, Async/Await, Microtasks

### Concept Explanation

```javascript
// Promise = Object representing eventual completion/failure of async operation
// States: pending → fulfilled OR rejected (settled)

// Creating a Promise
function fetchUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id > 0) resolve({ id, name: 'John' });
      else reject(new Error('Invalid ID'));
    }, 1000);
  });
}

// Consuming with .then/.catch
fetchUser(1)
  .then(user => console.log(user))
  .catch(err => console.error(err));

// Consuming with async/await (cleaner)
async function getUser() {
  try {
    const user = await fetchUser(1);
    console.log(user);
  } catch (err) {
    console.error(err);
  }
}
```

### Interview Questions:

**Q: Implement Promise.all, Promise.race, Promise.allSettled from scratch**
```javascript
// Promise.all - resolves when ALL resolve, rejects on first rejection
function promiseAll(promises) {
  return new Promise((resolve, reject) => {
    const results = [];
    let completed = 0;
    
    if (promises.length === 0) return resolve([]);
    
    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then(value => {
          results[index] = value;
          completed++;
          if (completed === promises.length) resolve(results);
        })
        .catch(reject); // First rejection rejects the whole thing
    });
  });
}

// Promise.race - resolves/rejects with first settled promise
function promiseRace(promises) {
  return new Promise((resolve, reject) => {
    promises.forEach(promise => {
      Promise.resolve(promise).then(resolve).catch(reject);
    });
  });
}

// Promise.allSettled - waits for ALL to settle (never rejects)
function promiseAllSettled(promises) {
  return new Promise((resolve) => {
    const results = [];
    let completed = 0;
    
    if (promises.length === 0) return resolve([]);
    
    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then(value => {
          results[index] = { status: 'fulfilled', value };
        })
        .catch(reason => {
          results[index] = { status: 'rejected', reason };
        })
        .finally(() => {
          completed++;
          if (completed === promises.length) resolve(results);
        });
    });
  });
}
```

**Q: What's the difference between microtasks and macrotasks?**
```javascript
// Microtasks (higher priority):
// - Promise.then/catch/finally
// - queueMicrotask()
// - MutationObserver
// - async/await (after await)

// Macrotasks (lower priority):
// - setTimeout, setInterval
// - setImmediate (Node.js)
// - requestAnimationFrame
// - I/O operations
// - UI rendering

// Event Loop Order:
// 1. Execute all sync code in call stack
// 2. Execute ALL microtasks (until queue is empty)
// 3. Execute ONE macrotask
// 4. Execute ALL microtasks again
// 5. Render (if needed)
// 6. Repeat from step 3

console.log('1');
setTimeout(() => console.log('2'), 0);        // Macrotask
Promise.resolve().then(() => console.log('3')); // Microtask
requestAnimationFrame(() => console.log('4')); // Before next paint
console.log('5');

// Output: 1, 5, 3, 4, 2 (or 1, 5, 3, 2, 4 depending on browser)
```

**Q: Error handling patterns with async/await**
```javascript
// Pattern 1: try/catch (basic)
async function fetchData() {
  try {
    const res = await fetch('/api/data');
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.json();
  } catch (error) {
    console.error('Failed:', error.message);
    return null; // Graceful fallback
  }
}

// Pattern 2: Wrapper function (eliminates try/catch everywhere)
function to(promise) {
  return promise
    .then(data => [null, data])
    .catch(err => [err, null]);
}

async function fetchData() {
  const [err, user] = await to(fetch('/api/user').then(r => r.json()));
  if (err) return handleError(err);
  
  const [err2, orders] = await to(fetch(`/api/orders/${user.id}`).then(r => r.json()));
  if (err2) return handleError(err2);
  
  return { user, orders };
}

// Pattern 3: Retry mechanism
async function fetchWithRetry(url, retries = 3, delay = 1000) {
  for (let i = 0; i < retries; i++) {
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return await res.json();
    } catch (error) {
      if (i === retries - 1) throw error;
      await new Promise(r => setTimeout(r, delay * Math.pow(2, i)));
    }
  }
}
```

---

## 5. React Diffing Algorithm (Reconciliation)

### Concept Explanation

```javascript
// React doesn't re-render the entire DOM on state change
// It uses a DIFFING algorithm to find minimal changes

// Rules of React's Diffing:
// 1. Different element types → tear down old tree, build new
// 2. Same element type → update only changed attributes
// 3. Keys help identify which items changed in lists

// Rule 1: Different types = full rebuild
// Old: <div><Counter /></div>
// New: <span><Counter /></span>
// Result: Destroy <div> and <Counter>, create new <span> and <Counter>

// Rule 2: Same type = update props
// Old: <div className="old" title="x" />
// New: <div className="new" title="x" />
// Result: Only update className, keep the DOM node

// Rule 3: Keys in lists
// Without keys (BAD):
<ul>
  <li>Apple</li>    // Index 0
  <li>Banana</li>   // Index 1
</ul>
// Add "Cherry" at beginning → React thinks ALL items changed!

// With keys (GOOD):
<ul>
  <li key="apple">Apple</li>
  <li key="banana">Banana</li>
</ul>
// Add "Cherry" at beginning → React knows only 1 new item
```

### Interview Questions:

**Q: Why should you NOT use array index as key?**
```javascript
// BAD: Index as key causes bugs with stateful components
function TodoList({ todos }) {
  return todos.map((todo, index) => (
    <TodoItem key={index} todo={todo} />
    // If you delete item at index 1:
    // Old: [A(key=0), B(key=1), C(key=2)]
    // New: [A(key=0), C(key=1)]  ← React thinks B was updated to C!
    // This causes wrong state to be displayed
  ));
}

// GOOD: Use unique stable ID
function TodoList({ todos }) {
  return todos.map(todo => (
    <TodoItem key={todo.id} todo={todo} />
    // Old: [A(key=1), B(key=2), C(key=3)]
    // New: [A(key=1), C(key=3)]  ← React correctly removes B
  ));
}

// When index is SAFE to use as key:
// 1. List is static (never changes)
// 2. Items are never reordered
// 3. Items have no state
```

**Q: How does React optimize rendering with O(n) instead of O(n³)?**
```javascript
// Traditional tree diff algorithm: O(n³) — too slow for UI
// React's assumptions that make it O(n):

// 1. Two elements of different types produce different trees
//    → Skip comparing children, rebuild entirely

// 2. Developer hints with "key" prop
//    → React can identify which children moved vs added/removed

// 3. Same-level comparison only
//    → React never compares nodes at different depth levels
//    → If a component moved to different parent, it's unmounted and remounted

// Practical implication:
// If you wrap a component in a different parent, it REMOUNTS:
// Before: <div><MyComponent /></div>
// After:  <section><MyComponent /></section>
// MyComponent will unmount and remount (state lost!)

// Keep structure stable for better performance:
function Layout({ showSidebar }) {
  return (
    <div>
      {showSidebar && <Sidebar />}
      <Main />  {/* Same position = same instance */}
    </div>
  );
}
```

---

## 6. Web Vitals (LCP, CLS, INP)

### Concept Explanation

```javascript
// Core Web Vitals = Google's metrics for user experience
// They affect SEO ranking!

// LCP (Largest Contentful Paint) - Loading performance
// Target: < 2.5 seconds
// Measures: When the largest visible content finishes rendering
// Common culprits: Large images, web fonts, slow server response

// CLS (Cumulative Layout Shift) - Visual stability
// Target: < 0.1
// Measures: How much the page layout shifts unexpectedly
// Common culprits: Images without dimensions, dynamic content, web fonts

// INP (Interaction to Next Paint) - Responsiveness
// Target: < 200ms
// Measures: Time from user interaction to next visual update
// Common culprits: Heavy JavaScript, long tasks, main thread blocking
```

### Interview Questions:

**Q: How would you improve LCP?**
```html
<!-- 1. Preload critical resources -->
<link rel="preload" as="image" href="/hero-image.webp" />
<link rel="preload" as="font" href="/font.woff2" crossorigin />

<!-- 2. Use responsive images with proper formats -->
<img 
  src="hero.webp"
  srcset="hero-400.webp 400w, hero-800.webp 800w, hero-1200.webp 1200w"
  sizes="(max-width: 768px) 100vw, 50vw"
  width="1200" 
  height="600"
  loading="eager"  
  fetchpriority="high"
  alt="Hero image"
/>
<!-- LCP image should NOT be lazy loaded! Use fetchpriority="high" -->
```

```javascript
// 3. Server-side rendering for above-the-fold content
// 4. Reduce server response time (TTFB)
// 5. Remove render-blocking CSS/JS

// Measure LCP in code:
new PerformanceObserver((list) => {
  const entries = list.getEntries();
  const lastEntry = entries[entries.length - 1];
  console.log('LCP:', lastEntry.startTime, 'ms');
  console.log('LCP Element:', lastEntry.element);
}).observe({ type: 'largest-contentful-paint', buffered: true });
```

**Q: How would you fix CLS issues?**
```html
<!-- 1. Always set width/height or aspect-ratio on images/videos -->
<img src="photo.jpg" width="800" height="600" alt="..." />

<style>
/* Modern approach with aspect-ratio */
.video-container {
  aspect-ratio: 16 / 9;
  width: 100%;
}

/* 2. Reserve space for dynamic content */
.ad-slot {
  min-height: 250px; /* Reserve space for ad */
}

/* 3. Use transform for animations (doesn't cause layout shift) */
.notification {
  transform: translateY(-100%);
  transition: transform 0.3s;
}
.notification.visible {
  transform: translateY(0);
}
/* BAD: Using top/margin causes layout shift */
</style>
```

```javascript
// 4. Preload fonts to avoid FOIT/FOUT
// <link rel="preload" as="font" href="font.woff2" crossorigin>
// font-display: swap; in @font-face

// 5. Avoid inserting content above existing content
// BAD: Inserting a banner at top pushes everything down
// GOOD: Use fixed/sticky positioning or reserved space

// Measure CLS:
new PerformanceObserver((list) => {
  let clsScore = 0;
  for (const entry of list.getEntries()) {
    if (!entry.hadRecentInput) {
      clsScore += entry.value;
    }
  }
  console.log('CLS:', clsScore);
}).observe({ type: 'layout-shift', buffered: true });
```

**Q: How would you improve INP?**
```javascript
// INP = Interaction to Next Paint
// User clicks → how long until screen updates?

// 1. Break long tasks into smaller ones
// BAD: One task that takes 300ms
function handleClick() {
  processData();      // 100ms
  updateDOM();        // 100ms
  sendAnalytics();    // 100ms
  // Total: 300ms → BAD INP!
}

// GOOD: Prioritize visual update, defer rest
function handleClick() {
  updateDOM();        // 100ms → visual feedback immediate
  
  // Defer non-visual work
  requestIdleCallback(() => {
    processData();
    sendAnalytics();
  });
}

// 2. Use startTransition for non-urgent updates (React 18+)
import { startTransition } from 'react';

function SearchPage() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  
  function handleInput(e) {
    setQuery(e.target.value); // Urgent: update input immediately
    
    startTransition(() => {
      setResults(filterProducts(e.target.value)); // Non-urgent: can be interrupted
    });
  }
}

// 3. Use web workers for heavy computation
const worker = new Worker('compute.js');
function handleClick(data) {
  worker.postMessage(data); // Off main thread!
  showLoadingSpinner(); // Instant visual feedback
}
worker.onmessage = (e) => {
  hideLoadingSpinner();
  displayResults(e.data);
};
```

---

## 7. Critical Rendering Path

### Concept Explanation

```
Browser receives HTML → Displays pixels on screen:

1. HTML Parsing → DOM (Document Object Model)
2. CSS Parsing → CSSOM (CSS Object Model)
3. DOM + CSSOM → Render Tree (only visible elements)
4. Layout (Reflow) → Calculate position and size of each element
5. Paint → Fill pixels (colors, borders, shadows, text)
6. Composite → Layer composition (GPU-accelerated)

BLOCKING RESOURCES:
- CSS is render-blocking (browser waits for CSSOM before painting)
- JS is parser-blocking (browser pauses HTML parsing for scripts)
```

### Interview Questions:

**Q: How do you optimize the Critical Rendering Path?**
```html
<!-- 1. Inline critical CSS (above-the-fold styles) -->
<head>
  <style>
    /* Critical CSS - only what's needed for first paint */
    body { margin: 0; font-family: sans-serif; }
    .header { background: #333; color: white; padding: 1rem; }
    .hero { height: 60vh; display: flex; align-items: center; }
  </style>
  
  <!-- 2. Defer non-critical CSS -->
  <link rel="preload" href="full-styles.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
  
  <!-- 3. Defer JavaScript (doesn't block parsing) -->
  <script src="app.js" defer></script>
  
  <!-- 4. Async for independent scripts (analytics, ads) -->
  <script src="analytics.js" async></script>
  
  <!-- 5. Preconnect to required origins -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="dns-prefetch" href="https://cdn.example.com" />
</head>
```

**Q: What's the difference between async and defer for scripts?**
```html
<!-- No attribute: Blocks HTML parsing, executes immediately -->
<script src="app.js"></script>
<!-- Parse HTML → Stop → Download JS → Execute JS → Resume parsing -->

<!-- async: Downloads in parallel, executes as soon as ready -->
<script src="analytics.js" async></script>
<!-- Parse HTML + Download JS simultaneously → Pause parsing → Execute → Resume -->
<!-- Order NOT guaranteed! Use for independent scripts -->

<!-- defer: Downloads in parallel, executes after HTML is fully parsed -->
<script src="app.js" defer></script>
<!-- Parse HTML + Download JS simultaneously → Finish parsing → Execute in order -->
<!-- Order IS guaranteed! Use for scripts that depend on DOM -->

<!-- Best practice: -->
<!-- Main app → defer (needs DOM, order matters) -->
<!-- Analytics/Ads → async (independent, order doesn't matter) -->
<!-- Critical inline → <script> in <head> (rare, only for critical bootstrapping) -->
```

---

## 8. Code Splitting & Lazy Loading

### Concept Explanation

```javascript
// Problem: Shipping 2MB bundle to user who only needs the homepage
// Solution: Split code into chunks, load on demand

// React.lazy + Suspense (Route-level splitting)
import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// These are loaded ONLY when user navigates to that route
const Home = lazy(() => import('./pages/Home'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Settings = lazy(() => import('./pages/Settings'));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div className="spinner">Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
```

### Interview Questions:

**Q: How do you implement component-level code splitting?**
```javascript
// Lazy load heavy components (charts, editors, modals)
import { lazy, Suspense, useState } from 'react';

const HeavyChart = lazy(() => import('./components/HeavyChart'));
const RichTextEditor = lazy(() => import('./components/RichTextEditor'));

function Dashboard() {
  const [showChart, setShowChart] = useState(false);
  
  return (
    <div>
      <button onClick={() => setShowChart(true)}>Show Analytics</button>
      
      {showChart && (
        <Suspense fallback={<div>Loading chart...</div>}>
          <HeavyChart data={analyticsData} />
        </Suspense>
      )}
    </div>
  );
}

// Preload on hover (anticipate user action)
function NavLink({ to, children }) {
  const preload = () => {
    // Start loading the chunk before user clicks
    if (to === '/dashboard') import('./pages/Dashboard');
    if (to === '/settings') import('./pages/Settings');
  };
  
  return (
    <Link to={to} onMouseEnter={preload} onFocus={preload}>
      {children}
    </Link>
  );
}

// Named exports with lazy loading
const Dashboard = lazy(() => 
  import('./pages/Dashboard').then(module => ({ default: module.Dashboard }))
);
```

**Q: What is the difference between lazy loading and code splitting?**
```javascript
// Code Splitting = Breaking bundle into smaller chunks (build-time concern)
// Lazy Loading = Loading those chunks on demand (runtime concern)

// Code splitting without lazy loading:
// Webpack creates separate chunks, but they might all load on initial page
// → Still downloads everything upfront

// Lazy loading = only download chunk when needed
// import() is the trigger for both:
// - Webpack sees import() → creates separate chunk (code splitting)
// - Browser executes import() → downloads chunk (lazy loading)

// Vite/Webpack magic comments for chunk naming:
const AdminPanel = lazy(() => 
  import(/* webpackChunkName: "admin" */ './AdminPanel')
);
// Creates: admin.abc123.js chunk
```

---

## 9. Image Optimization

### Concept Explanation

```html
<!-- Modern image optimization stack -->

<!-- 1. Modern formats (40-50% smaller than JPEG) -->
<picture>
  <source srcset="photo.avif" type="image/avif" />  <!-- Best compression -->
  <source srcset="photo.webp" type="image/webp" />  <!-- Wide support -->
  <img src="photo.jpg" alt="Fallback for old browsers" />
</picture>

<!-- 2. Responsive images (serve right size for device) -->
<img
  srcset="
    photo-400.webp 400w,
    photo-800.webp 800w,
    photo-1200.webp 1200w
  "
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  src="photo-800.webp"
  alt="Responsive photo"
  loading="lazy"
  decoding="async"
/>

<!-- 3. Lazy loading (native browser support) -->
<img src="below-fold.webp" loading="lazy" alt="..." />
<!-- Only loads when image is near viewport -->

<!-- 4. Priority hints for above-fold images -->
<img src="hero.webp" fetchpriority="high" alt="Hero" />
<!-- Don't lazy load LCP image! -->
```

### Interview Questions:

**Q: How do you implement a custom lazy loading image component in React?**
```javascript
import { useState, useRef, useEffect } from 'react';

function LazyImage({ src, alt, placeholder, className, ...props }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef();
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect(); // Only need to observe once
        }
      },
      { rootMargin: '200px' } // Start loading 200px before viewport
    );
    
    if (imgRef.current) observer.observe(imgRef.current);
    
    return () => observer.disconnect();
  }, []);
  
  return (
    <div ref={imgRef} className={`lazy-image-wrapper ${className}`}>
      {/* Low-quality placeholder */}
      {!isLoaded && (
        <img 
          src={placeholder || 'data:image/svg+xml,...'} 
          alt="" 
          className="placeholder blur" 
        />
      )}
      
      {/* Actual image (only loads when in view) */}
      {isInView && (
        <img
          src={src}
          alt={alt}
          onLoad={() => setIsLoaded(true)}
          className={`actual-image ${isLoaded ? 'loaded' : 'loading'}`}
          {...props}
        />
      )}
    </div>
  );
}

// CSS for blur-up effect:
// .placeholder.blur { filter: blur(20px); transform: scale(1.1); }
// .actual-image { opacity: 0; transition: opacity 0.3s; }
// .actual-image.loaded { opacity: 1; }
```

---

## 10. Intersection Observer

### Concept Explanation

```javascript
// IntersectionObserver watches when elements enter/exit the viewport
// Much better than scroll event listeners (no main thread blocking)

// Use cases:
// 1. Lazy loading images/components
// 2. Infinite scroll
// 3. Triggering animations on scroll
// 4. Tracking ad/section visibility (analytics)
// 5. Sticky headers

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Element is visible
        entry.target.classList.add('visible');
      } else {
        // Element is hidden
        entry.target.classList.remove('visible');
      }
    });
  },
  {
    root: null,           // viewport (null = browser viewport)
    rootMargin: '0px',    // margin around root (e.g., '100px' = trigger 100px before visible)
    threshold: [0, 0.5, 1] // trigger at 0%, 50%, 100% visibility
  }
);

// Observe elements
document.querySelectorAll('.animate-on-scroll').forEach(el => {
  observer.observe(el);
});
```

### Interview Questions:

**Q: Implement infinite scroll with Intersection Observer in React**
```javascript
import { useState, useEffect, useRef, useCallback } from 'react';

function InfiniteScrollList() {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const observerRef = useRef();
  
  // The last element in the list
  const lastElementRef = useCallback((node) => {
    if (loading) return;
    
    // Disconnect previous observer
    if (observerRef.current) observerRef.current.disconnect();
    
    observerRef.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasMore) {
        setPage(prev => prev + 1); // Trigger next page load
      }
    }, { rootMargin: '200px' });
    
    if (node) observerRef.current.observe(node);
  }, [loading, hasMore]);
  
  // Fetch data when page changes
  useEffect(() => {
    const fetchItems = async () => {
      setLoading(true);
      const res = await fetch(`/api/items?page=${page}&limit=20`);
      const data = await res.json();
      
      setItems(prev => [...prev, ...data.items]);
      setHasMore(data.hasMore);
      setLoading(false);
    };
    
    fetchItems();
  }, [page]);
  
  return (
    <div className="list">
      {items.map((item, index) => (
        <div
          key={item.id}
          ref={index === items.length - 1 ? lastElementRef : null}
          className="list-item"
        >
          {item.name}
        </div>
      ))}
      
      {loading && <div className="spinner">Loading more...</div>}
      {!hasMore && <div>No more items</div>}
    </div>
  );
}
```

---

## 11. WebSockets & SSE (Server-Sent Events)

### Concept Explanation

```javascript
// WebSocket: Full duplex (both client and server send anytime)
// SSE: Server → Client only (one-way stream)

// ========= WebSocket =========
// Use for: Chat, gaming, collaborative editing, real-time trading

// Client:
const ws = new WebSocket('wss://api.example.com/chat');

ws.onopen = () => {
  console.log('Connected');
  ws.send(JSON.stringify({ type: 'join', room: 'general' }));
};

ws.onmessage = (event) => {
  const data = JSON.parse(event.data);
  console.log('Received:', data);
};

ws.onclose = (event) => {
  console.log('Disconnected:', event.code, event.reason);
  // Implement reconnection logic
};

ws.onerror = (error) => {
  console.error('WebSocket error:', error);
};

// ========= SSE (Server-Sent Events) =========
// Use for: Live feeds, notifications, stock prices, progress updates
// Simpler than WebSocket, auto-reconnects, works with HTTP/2

const eventSource = new EventSource('/api/notifications');

eventSource.onmessage = (event) => {
  const notification = JSON.parse(event.data);
  showNotification(notification);
};

eventSource.addEventListener('price-update', (event) => {
  const price = JSON.parse(event.data);
  updateStockPrice(price);
});

eventSource.onerror = () => {
  console.log('SSE connection lost, auto-reconnecting...');
};
```

### Interview Questions:

**Q: When would you choose WebSocket vs SSE vs HTTP Polling?**
```javascript
// HTTP Polling: Simple, works everywhere
// Use when: Data changes infrequently, simplicity is priority
setInterval(async () => {
  const data = await fetch('/api/notifications').then(r => r.json());
  updateUI(data);
}, 5000); // Check every 5 seconds
// Cons: Wasted requests when no data, delay up to poll interval

// SSE: Server push, auto-reconnect, works through proxies
// Use when: Server → client updates only (notifications, feeds)
// Pros: Simple API, auto-reconnect, works with HTTP/2, event types
// Cons: One-direction only, max ~6 connections per domain in HTTP/1.1

// WebSocket: Full duplex
// Use when: Bidirectional real-time (chat, gaming, collaboration)
// Pros: Low latency both ways, binary data support
// Cons: More complex, doesn't auto-reconnect, proxy issues

// Decision table:
// Chat app → WebSocket (both sides send messages)
// Live sports scores → SSE (server pushes updates)
// Email inbox → Long polling or SSE (server notifies new emails)
// Online game → WebSocket (low latency bidirectional)
// File upload progress → SSE or WebSocket
```

**Q: How do you implement WebSocket with reconnection in React?**
```javascript
import { useEffect, useRef, useState, useCallback } from 'react';

function useWebSocket(url) {
  const [messages, setMessages] = useState([]);
  const [status, setStatus] = useState('connecting');
  const wsRef = useRef(null);
  const reconnectTimeoutRef = useRef(null);
  const retriesRef = useRef(0);
  
  const connect = useCallback(() => {
    const ws = new WebSocket(url);
    wsRef.current = ws;
    
    ws.onopen = () => {
      setStatus('connected');
      retriesRef.current = 0; // Reset retry count
    };
    
    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setMessages(prev => [...prev, data]);
    };
    
    ws.onclose = () => {
      setStatus('disconnected');
      // Exponential backoff reconnection
      const delay = Math.min(1000 * Math.pow(2, retriesRef.current), 30000);
      retriesRef.current++;
      
      reconnectTimeoutRef.current = setTimeout(connect, delay);
    };
    
    ws.onerror = () => ws.close();
  }, [url]);
  
  useEffect(() => {
    connect();
    return () => {
      clearTimeout(reconnectTimeoutRef.current);
      wsRef.current?.close();
    };
  }, [connect]);
  
  const sendMessage = useCallback((data) => {
    if (wsRef.current?.readyState === WebSocket.OPEN) {
      wsRef.current.send(JSON.stringify(data));
    }
  }, []);
  
  return { messages, status, sendMessage };
}

// Usage:
function ChatRoom() {
  const { messages, status, sendMessage } = useWebSocket('wss://api.example.com/chat');
  
  return (
    <div>
      <span>Status: {status}</span>
      {messages.map(msg => <Message key={msg.id} {...msg} />)}
      <input onKeyDown={(e) => {
        if (e.key === 'Enter') sendMessage({ text: e.target.value });
      }} />
    </div>
  );
}
```

---

## 12. Service Workers & PWA

### Concept Explanation

```javascript
// Service Worker = JavaScript that runs in background, separate from web page
// Enables: Offline support, push notifications, background sync, caching

// Lifecycle: Install → Activate → Fetch (intercept requests)

// Register Service Worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
    .then(reg => console.log('SW registered:', reg.scope))
    .catch(err => console.error('SW failed:', err));
}

// sw.js (Service Worker file)
const CACHE_NAME = 'app-v1';
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/styles.css',
  '/app.js',
  '/offline.html'
];

// Install: Cache static assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(STATIC_ASSETS))
      .then(() => self.skipWaiting()) // Activate immediately
  );
});

// Activate: Clean old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then(keys => 
      Promise.all(
        keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
      )
    )
  );
});

// Fetch: Intercept network requests
self.addEventListener('fetch', (event) => {
  event.respondWith(
    // Strategy: Cache First, Network Fallback
    caches.match(event.request)
      .then(cached => {
        if (cached) return cached;
        
        return fetch(event.request)
          .then(response => {
            // Cache new resources dynamically
            const clone = response.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
            return response;
          })
          .catch(() => caches.match('/offline.html')); // Offline fallback
      })
  );
});
```

### Interview Questions:

**Q: What caching strategies can Service Workers use?**
```javascript
// 1. Cache First (Offline-first) — Static assets
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then(cached => cached || fetch(event.request))
  );
});

// 2. Network First (Fresh data) — API calls
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request)
      .then(response => {
        const clone = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        return response;
      })
      .catch(() => caches.match(event.request)) // Offline fallback
  );
});

// 3. Stale While Revalidate — Best of both worlds
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.open(CACHE_NAME).then(cache => {
      return cache.match(event.request).then(cached => {
        const networkFetch = fetch(event.request).then(response => {
          cache.put(event.request, response.clone()); // Update cache in background
          return response;
        });
        
        return cached || networkFetch; // Return cached immediately, update in bg
      });
    })
  );
});

// 4. Network Only — Real-time data (chat, analytics)
// 5. Cache Only — Immutable assets (versioned files)
```

---

## 13. Debounce & Throttle

### Concept Explanation

```javascript
// Debounce = Wait until user STOPS doing something, then execute
// Example: Search input - don't search on every keystroke

// Throttle = Execute at most once per interval
// Example: Scroll handler - update at most every 100ms

// ========= DEBOUNCE =========
function debounce(fn, delay) {
  let timeoutId;
  
  return function(...args) {
    clearTimeout(timeoutId); // Cancel previous timer
    timeoutId = setTimeout(() => fn.apply(this, args), delay);
  };
}

// Usage: Search input
const searchInput = document.getElementById('search');
const debouncedSearch = debounce(async (query) => {
  const results = await fetch(`/api/search?q=${query}`).then(r => r.json());
  displayResults(results);
}, 300); // Wait 300ms after user stops typing

searchInput.addEventListener('input', (e) => debouncedSearch(e.target.value));

// ========= THROTTLE =========
function throttle(fn, interval) {
  let lastTime = 0;
  
  return function(...args) {
    const now = Date.now();
    if (now - lastTime >= interval) {
      lastTime = now;
      fn.apply(this, args);
    }
  };
}

// Usage: Scroll handler
const throttledScroll = throttle(() => {
  console.log('Scroll position:', window.scrollY);
  updateProgressBar();
}, 100); // Execute at most every 100ms

window.addEventListener('scroll', throttledScroll);
```

### Interview Questions:

**Q: Implement debounce with leading and trailing options**
```javascript
function debounce(fn, delay, { leading = false, trailing = true } = {}) {
  let timeoutId;
  let lastArgs;
  
  return function(...args) {
    lastArgs = args;
    const shouldCallNow = leading && !timeoutId;
    
    clearTimeout(timeoutId);
    
    timeoutId = setTimeout(() => {
      timeoutId = null;
      if (trailing && lastArgs) {
        fn.apply(this, lastArgs);
        lastArgs = null;
      }
    }, delay);
    
    if (shouldCallNow) {
      fn.apply(this, args);
      lastArgs = null;
    }
  };
}

// Leading: Execute immediately on first call, then wait
const debouncedClick = debounce(submitForm, 1000, { leading: true, trailing: false });
// Prevents double-click submissions!

// Trailing (default): Wait until user stops, then execute
const debouncedSearch = debounce(search, 300, { trailing: true });
```

**Q: How do you use debounce in React correctly?**
```javascript
import { useState, useCallback, useRef, useEffect } from 'react';

// Custom hook for debounced value
function useDebouncedValue(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);
  
  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);
  
  return debouncedValue;
}

// Custom hook for debounced callback
function useDebouncedCallback(callback, delay) {
  const callbackRef = useRef(callback);
  const timeoutRef = useRef();
  
  // Update ref when callback changes
  useEffect(() => { callbackRef.current = callback; }, [callback]);
  
  // Cleanup on unmount
  useEffect(() => () => clearTimeout(timeoutRef.current), []);
  
  return useCallback((...args) => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => callbackRef.current(...args), delay);
  }, [delay]);
}

// Usage in component:
function SearchInput() {
  const [query, setQuery] = useState('');
  const debouncedQuery = useDebouncedValue(query, 300);
  
  useEffect(() => {
    if (debouncedQuery) {
      fetchSearchResults(debouncedQuery);
    }
  }, [debouncedQuery]);
  
  return <input value={query} onChange={e => setQuery(e.target.value)} />;
}
```

---

## 14. React Fiber Architecture

### Concept Explanation

```javascript
// React Fiber = React's reconciliation engine (rewritten in React 16)
// Before Fiber: Reconciliation was SYNCHRONOUS (blocked main thread)
// After Fiber: Work can be PAUSED, RESUMED, or ABANDONED

// Key concepts:
// 1. Each component/element is a "Fiber node" (unit of work)
// 2. Fiber creates a linked list tree (child, sibling, parent pointers)
// 3. Work is done in two phases:
//    Phase 1: Render (can be interrupted) - builds work-in-progress tree
//    Phase 2: Commit (cannot be interrupted) - applies changes to DOM

// Fiber node structure (simplified):
const fiberNode = {
  type: 'div',           // Component type
  props: { className: 'container' },
  stateNode: domElement, // Reference to actual DOM node
  child: childFiber,     // First child
  sibling: siblingFiber, // Next sibling
  return: parentFiber,   // Parent
  alternate: oldFiber,   // Previous version (for diffing)
  effectTag: 'UPDATE',   // What to do: PLACEMENT, UPDATE, DELETION
  pendingProps: {},       // New props
  memoizedState: {},     // Current state
  lanes: 0b0001          // Priority (lanes system)
};
```

### Interview Questions:

**Q: How does Fiber enable time-slicing?**
```javascript
// Fiber breaks rendering into small units of work
// Between each unit, it checks: "Is there higher priority work?"

// Simplified work loop:
function workLoop(deadline) {
  let shouldYield = false;
  
  while (nextUnitOfWork && !shouldYield) {
    nextUnitOfWork = performUnitOfWork(nextUnitOfWork);
    shouldYield = deadline.timeRemaining() < 1; // Less than 1ms left? Yield!
  }
  
  if (nextUnitOfWork) {
    // More work to do - schedule next chunk
    requestIdleCallback(workLoop);
  } else {
    // All rendering done - commit to DOM
    commitRoot();
  }
}

requestIdleCallback(workLoop);

// Priority levels (lanes):
// Immediate (Sync) - User typing, clicking
// User-blocking - Hover effects
// Normal - Data fetching results
// Low - Analytics
// Idle - Prerendering offscreen content

// This is why React 18 can interrupt rendering:
// User clicks during expensive re-render → React pauses render,
// handles click (high priority), then resumes render
```

**Q: What problem did Fiber solve compared to Stack Reconciler?**
```javascript
// Stack Reconciler (React 15 and before):
// - Recursive, synchronous traversal
// - Once started, can't stop until entire tree is processed
// - If component tree is deep (1000+ components), blocks main thread
// - UI becomes unresponsive during updates

// Fiber Reconciler (React 16+):
// - Iterative, asynchronous (can pause/resume)
// - Uses linked list instead of recursive calls
// - Can prioritize urgent updates over non-urgent ones
// - Enables: Suspense, Concurrent Mode, Transitions

// Visual difference:
// Stack: [============================] (one long block, blocks UI)
// Fiber: [==] [==] [==] [==] [==] [==] (small chunks, UI stays responsive)
//              ↑ browser can paint, handle events here
```

---

## 15. Concurrent Mode (React 18+)

### Concept Explanation

```javascript
// Concurrent rendering = React can prepare multiple versions of UI simultaneously
// It can interrupt, pause, and resume rendering

// Key features enabled by concurrent mode:
// 1. startTransition - Mark non-urgent updates
// 2. useDeferredValue - Defer expensive re-renders
// 3. Suspense for data fetching - Show fallbacks while loading
// 4. Automatic batching - Group multiple state updates

// 1. startTransition
import { useState, startTransition } from 'react';

function SearchPage() {
  const [input, setInput] = useState('');
  const [results, setResults] = useState([]);
  
  function handleChange(e) {
    // URGENT: Update input field immediately (user sees their typing)
    setInput(e.target.value);
    
    // NON-URGENT: Filter 10,000 items (can be interrupted)
    startTransition(() => {
      setResults(filterItems(e.target.value)); // Won't block typing!
    });
  }
  
  return (
    <>
      <input value={input} onChange={handleChange} />
      {/* Results might be slightly behind, but input is responsive */}
      <ResultsList results={results} />
    </>
  );
}

// 2. useDeferredValue
import { useDeferredValue } from 'react';

function ProductList({ searchQuery }) {
  // deferredQuery updates "lazily" — won't block urgent renders
  const deferredQuery = useDeferredValue(searchQuery);
  const isStale = searchQuery !== deferredQuery;
  
  return (
    <div style={{ opacity: isStale ? 0.7 : 1 }}>
      <ExpensiveList query={deferredQuery} />
    </div>
  );
}

// 3. useTransition (with pending state)
import { useTransition } from 'react';

function TabContainer() {
  const [tab, setTab] = useState('home');
  const [isPending, startTransition] = useTransition();
  
  function handleTabChange(newTab) {
    startTransition(() => {
      setTab(newTab); // Low priority - won't freeze current tab
    });
  }
  
  return (
    <div>
      <TabButtons onChange={handleTabChange} />
      {isPending && <Spinner />}
      <TabContent tab={tab} />
    </div>
  );
}
```

### Interview Questions:

**Q: What is automatic batching in React 18?**
```javascript
// React 17: Only batched inside event handlers
function handleClick() {
  setCount(c => c + 1); // Doesn't re-render yet
  setFlag(f => !f);     // Doesn't re-render yet
  // React batches → ONE re-render (good!)
}

// But in React 17, async code was NOT batched:
setTimeout(() => {
  setCount(c => c + 1); // Re-render! (bad)
  setFlag(f => !f);     // Re-render again! (bad)
  // TWO separate re-renders
}, 1000);

// React 18: EVERYTHING is batched automatically
setTimeout(() => {
  setCount(c => c + 1); // Doesn't re-render yet
  setFlag(f => !f);     // Doesn't re-render yet
  // ONE re-render (React 18 batches this too!)
}, 1000);

// Even in Promises, fetch callbacks, native event listeners
fetch('/api').then(() => {
  setCount(c => c + 1);
  setFlag(f => !f);
  // One re-render in React 18!
});

// To opt OUT of batching (rare):
import { flushSync } from 'react-dom';
flushSync(() => setCount(c => c + 1)); // Forces immediate re-render
flushSync(() => setFlag(f => !f));     // Forces another re-render
```

---

## 16. Hydration (Progressive / Partial / Selective)

### Concept Explanation

```javascript
// Hydration = Attaching event listeners to server-rendered HTML
// Server sends HTML → Browser displays it (fast!) → JS loads → Hydration makes it interactive

// Problem with traditional hydration:
// - ALL JavaScript must load before ANY component becomes interactive
// - Entire page hydrates at once (slow for large apps)

// ========= Selective Hydration (React 18) =========
// Only hydrate components that user is interacting with FIRST

import { Suspense } from 'react';

function App() {
  return (
    <div>
      <Header />  {/* Hydrates quickly (small) */}
      
      <Suspense fallback={<Spinner />}>
        <HeavySidebar />  {/* Can hydrate independently */}
      </Suspense>
      
      <Suspense fallback={<Spinner />}>
        <Comments />  {/* If user clicks here, hydrates FIRST! */}
      </Suspense>
      
      <Footer />
    </div>
  );
}

// React 18 prioritizes hydrating components the user interacts with
// User clicks on Comments → React hydrates Comments before Sidebar
```

### Interview Questions:

**Q: What is the Island Architecture and how does it relate to hydration?**
```javascript
// Island Architecture = Only hydrate interactive "islands" on the page
// Static content stays as plain HTML (zero JavaScript!)

// Frameworks: Astro, Fresh (Deno)

// Example (Astro-style):
// page.astro
// ---
// Most of the page is static HTML (no JS shipped!)
// ---
// <html>
//   <body>
//     <Header />           <!-- Static: Zero JS -->
//     <HeroSection />      <!-- Static: Zero JS -->
//     <InteractiveCarousel client:visible />  <!-- Island: JS only for this -->
//     <StaticContent />    <!-- Static: Zero JS -->
//     <Newsletter client:idle />  <!-- Island: Hydrates when browser is idle -->
//   </body>
// </html>

// Benefits:
// - 90% of page has ZERO JavaScript
// - Only interactive parts ship JS
// - Much faster load times
// - Better for content-heavy sites

// Hydration directives (Astro):
// client:load → Hydrate immediately on page load
// client:idle → Hydrate when browser is idle
// client:visible → Hydrate when component scrolls into view
// client:media="(max-width: 768px)" → Hydrate only on mobile
```

**Q: What is Progressive Hydration?**
```javascript
// Progressive Hydration = Hydrate components lazily as they become visible/needed
// Instead of hydrating entire page at once

// Implementation concept:
function ProgressiveHydration({ children, whenVisible = false, whenIdle = false }) {
  const [shouldHydrate, setShouldHydrate] = useState(false);
  const ref = useRef();
  
  useEffect(() => {
    if (whenVisible) {
      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          setShouldHydrate(true);
          observer.disconnect();
        }
      });
      observer.observe(ref.current);
      return () => observer.disconnect();
    }
    
    if (whenIdle) {
      const id = requestIdleCallback(() => setShouldHydrate(true));
      return () => cancelIdleCallback(id);
    }
    
    setShouldHydrate(true); // Default: hydrate immediately
  }, [whenVisible, whenIdle]);
  
  if (!shouldHydrate) {
    // Render static HTML placeholder (from SSR)
    return <div ref={ref} dangerouslySetInnerHTML={{ __html: '' }} />;
  }
  
  return <div ref={ref}>{children}</div>;
}

// Usage:
<ProgressiveHydration whenVisible>
  <ExpensiveInteractiveWidget />
</ProgressiveHydration>
```

---

## 17. Virtual List / Windowing

### Concept Explanation

```javascript
// Problem: Rendering 10,000 items in a list = 10,000 DOM nodes = SLOW
// Solution: Only render items visible in viewport (typically 10-20 items)

// Libraries: react-window, react-virtuoso, @tanstack/virtual

// How it works:
// - Container has fixed height (viewport)
// - Total scroll height = itemCount × itemHeight (virtual space)
// - Only items in visible range are rendered
// - As user scrolls, items are recycled (old removed, new added)
```

### Interview Questions:

**Q: Implement a basic virtual list from scratch**
```javascript
import { useState, useRef, useCallback } from 'react';

function VirtualList({ items, itemHeight, containerHeight, renderItem }) {
  const [scrollTop, setScrollTop] = useState(0);
  const containerRef = useRef();
  
  // Calculate which items are visible
  const totalHeight = items.length * itemHeight;
  const startIndex = Math.floor(scrollTop / itemHeight);
  const endIndex = Math.min(
    startIndex + Math.ceil(containerHeight / itemHeight) + 1, // +1 for partial visibility
    items.length
  );
  
  // Overscan: render a few extra items above/below for smooth scrolling
  const overscan = 3;
  const visibleStart = Math.max(0, startIndex - overscan);
  const visibleEnd = Math.min(items.length, endIndex + overscan);
  
  const visibleItems = items.slice(visibleStart, visibleEnd);
  const offsetY = visibleStart * itemHeight; // Top padding
  
  const handleScroll = useCallback((e) => {
    setScrollTop(e.target.scrollTop);
  }, []);
  
  return (
    <div
      ref={containerRef}
      onScroll={handleScroll}
      style={{ height: containerHeight, overflow: 'auto' }}
    >
      {/* Spacer to maintain scroll height */}
      <div style={{ height: totalHeight, position: 'relative' }}>
        {/* Only render visible items */}
        <div style={{ position: 'absolute', top: offsetY, width: '100%' }}>
          {visibleItems.map((item, index) => (
            <div key={visibleStart + index} style={{ height: itemHeight }}>
              {renderItem(item, visibleStart + index)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Usage:
function App() {
  const items = Array.from({ length: 100000 }, (_, i) => ({ id: i, name: `Item ${i}` }));
  
  return (
    <VirtualList
      items={items}
      itemHeight={50}
      containerHeight={600}
      renderItem={(item) => <div className="list-item">{item.name}</div>}
    />
  );
}
// Renders ~15 DOM nodes instead of 100,000!
```

**Q: How do you handle variable height items in virtual lists?**
```javascript
// react-virtuoso handles this automatically:
import { Virtuoso } from 'react-virtuoso';

function VariableHeightList({ messages }) {
  return (
    <Virtuoso
      data={messages}
      itemContent={(index, message) => (
        <div className="message">
          <p>{message.text}</p>
          {message.image && <img src={message.image} />}
          {/* Height varies based on content */}
        </div>
      )}
      // Virtuoso measures each item's height dynamically
      // Uses ResizeObserver internally
    />
  );
}

// Manual approach: Measure and cache heights
function useVariableVirtualList(items, containerHeight, estimatedHeight = 50) {
  const [scrollTop, setScrollTop] = useState(0);
  const measuredHeights = useRef(new Map()); // Cache measured heights
  
  // Calculate positions based on actual heights
  function getItemOffset(index) {
    let offset = 0;
    for (let i = 0; i < index; i++) {
      offset += measuredHeights.current.get(i) || estimatedHeight;
    }
    return offset;
  }
  
  // Find visible range using binary search
  function getVisibleRange() {
    // Binary search for start index based on scrollTop
    // Return [startIndex, endIndex]
  }
  
  return { getItemOffset, getVisibleRange, setScrollTop };
}
```

---

## 18. Tree Shaking

### Concept Explanation

```javascript
// Tree Shaking = Eliminating dead (unused) code from the final bundle
// Only works with ES Modules (import/export), NOT CommonJS (require)

// WHY ES Modules?
// ES Modules are statically analyzable — bundler knows at BUILD time what's used
// CommonJS is dynamic — require() can be conditional, not analyzable

// ========= HOW IT WORKS =========

// math.js (library)
export function add(a, b) { return a + b; }
export function subtract(a, b) { return a - b; }
export function multiply(a, b) { return a * b; }
export function divide(a, b) { return a / b; }

// app.js (your code)
import { add } from './math.js';
console.log(add(2, 3));
// Bundler removes: subtract, multiply, divide (unused!)
// Final bundle only contains: add

// ========= TREE SHAKING KILLERS =========

// 1. BAD: Importing entire library
import _ from 'lodash'; // Imports ALL of lodash (70KB!)
_.get(obj, 'path');

// GOOD: Import only what you need
import get from 'lodash/get'; // Only ~1KB
// OR use lodash-es (ES module version):
import { get } from 'lodash-es'; // Tree-shakeable

// 2. BAD: Side effects prevent tree shaking
// module.js
export function unused() { /* dead code */ }
console.log('Side effect!'); // This runs on import! Can't be removed

// 3. Mark package as side-effect-free in package.json
{
  "sideEffects": false // Tells bundler: safe to tree shake everything
}
// Or specify which files have side effects:
{
  "sideEffects": ["*.css", "./src/polyfills.js"]
}
```

### Interview Questions:

**Q: How do you verify tree shaking is working?**
```javascript
// 1. Bundle Analyzer (visual inspection)
// Webpack:
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
// plugins: [new BundleAnalyzerPlugin()]

// Vite:
// npm install rollup-plugin-visualizer
import { visualizer } from 'rollup-plugin-visualizer';
// plugins: [visualizer({ open: true })]

// 2. Check bundle size
// Build and inspect output file sizes
// Look for unused library code

// 3. Import cost extension (VS Code)
// Shows size of each import in real-time

// 4. Write tree-shakeable code:
// Export named functions (not default objects)

// BAD (not tree-shakeable):
const utils = {
  formatDate() {},
  formatCurrency() {},
  formatPhoneNumber() {}
};
export default utils; // Consumer gets ALL functions

// GOOD (tree-shakeable):
export function formatDate() {}
export function formatCurrency() {}
export function formatPhoneNumber() {}
// Consumer can import only what they use
```

---

## 19. Browser Caching Strategies

### Concept Explanation

```
Browser caching layers (in order of check):

1. Memory Cache (fastest) — Current tab session
2. Service Worker Cache — Programmatic control
3. HTTP Cache (Disk) — Based on response headers
4. CDN/Network — Remote server
```

### Interview Questions:

**Q: Explain HTTP caching headers and strategies**
```javascript
// ========= Cache-Control Header =========

// 1. Immutable assets (hashed filenames: app.abc123.js)
// Cache-Control: public, max-age=31536000, immutable
// Browser caches for 1 year, never revalidates
// Safe because filename changes when content changes

// 2. Frequently changing resources (index.html)
// Cache-Control: no-cache
// Browser ALWAYS revalidates with server (using ETag/Last-Modified)
// Still uses cache if server says "304 Not Modified"

// 3. Never cache (sensitive data)
// Cache-Control: no-store
// Never stored in cache at all

// 4. Stale-while-revalidate
// Cache-Control: max-age=60, stale-while-revalidate=3600
// Serve from cache for 60s, then serve stale + revalidate in background for 1hr

// ========= ETag (Entity Tag) =========
// Server generates hash of content: ETag: "abc123"
// Browser sends: If-None-Match: "abc123"
// If unchanged → 304 Not Modified (no body transferred)
// If changed → 200 with new content

// ========= Optimal Caching Strategy =========
// index.html       → Cache-Control: no-cache (always check for new version)
// app.a1b2c3.js    → Cache-Control: public, max-age=31536000, immutable
// styles.x4y5z6.css → Cache-Control: public, max-age=31536000, immutable
// /api/products    → Cache-Control: private, max-age=60
// /api/user/me     → Cache-Control: private, no-cache

// Vite/Webpack add content hash to filenames automatically
// So static assets can be cached forever (filename changes = new URL = fresh fetch)
```

**Q: How do you implement caching in a React application?**
```javascript
// 1. HTTP caching (Nginx config)
// location /assets/ {
//   add_header Cache-Control "public, max-age=31536000, immutable";
// }
// location /index.html {
//   add_header Cache-Control "no-cache";
// }

// 2. In-memory caching with React Query / SWR
import { useQuery } from '@tanstack/react-query';

function Products() {
  const { data, isLoading, isStale } = useQuery({
    queryKey: ['products'],
    queryFn: () => fetch('/api/products').then(r => r.json()),
    staleTime: 5 * 60 * 1000, // Consider fresh for 5 minutes
    cacheTime: 30 * 60 * 1000, // Keep in cache for 30 minutes
    refetchOnWindowFocus: true,  // Refetch when user returns to tab
  });
}

// 3. Browser storage caching
function useLocalStorageCache(key, fetchFn, ttl = 60000) {
  const [data, setData] = useState(() => {
    const cached = localStorage.getItem(key);
    if (cached) {
      const { value, timestamp } = JSON.parse(cached);
      if (Date.now() - timestamp < ttl) return value;
    }
    return null;
  });
  
  useEffect(() => {
    if (!data) {
      fetchFn().then(result => {
        setData(result);
        localStorage.setItem(key, JSON.stringify({
          value: result,
          timestamp: Date.now()
        }));
      });
    }
  }, [key]);
  
  return data;
}
```

---

## 20. Bundle Analysis & Optimization

### Concept Explanation

```javascript
// Goal: Ship smallest possible JavaScript to users

// Tools for analysis:
// - webpack-bundle-analyzer (Webpack)
// - rollup-plugin-visualizer (Vite/Rollup)
// - source-map-explorer
// - bundlephobia.com (check package sizes before installing)
```

### Interview Questions:

**Q: Your React app bundle is 2MB. How do you reduce it?**
```javascript
// Step 1: Analyze what's in the bundle
// npx vite-bundle-visualizer
// Look for: large libraries, duplicate code, unused exports

// Step 2: Common optimizations

// 1. Code splitting (routes)
const Dashboard = lazy(() => import('./pages/Dashboard'));

// 2. Replace heavy libraries with lighter alternatives
// moment.js (300KB) → date-fns (tree-shakeable, ~3KB per function)
// lodash (70KB) → lodash-es (tree-shakeable) or native methods
// axios (13KB) → fetch API (built-in, 0KB)

// 3. Dynamic imports for heavy features
// Instead of importing chart library at top:
// import Chart from 'chart.js'; // 200KB in main bundle!

// Load only when needed:
async function showChart() {
  const { Chart } = await import('chart.js/auto');
  new Chart(canvas, config);
}

// 4. Compression (gzip/brotli)
// Nginx: gzip on; gzip_types application/javascript;
// 2MB → ~400KB after gzip

// 5. Externalize large libraries (CDN)
// vite.config.js
export default {
  build: {
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    }
  }
};

// 6. Use production builds
// NODE_ENV=production removes React devtools, warnings, etc.
// React production build is ~30% smaller

// 7. Optimize images (move to WebP/AVIF, use CDN)
// 8. Remove unused CSS (PurgeCSS / Tailwind's built-in purging)
```

---

## 21. CSS Containment

### Concept Explanation

```css
/* CSS Containment = Tell browser what WON'T affect rest of page */
/* Enables rendering optimizations (skip work for offscreen/unchanged elements) */

/* contain: layout */
/* Element's layout is independent — changes inside won't affect outside */
.card {
  contain: layout;
  /* Browser can skip recalculating parent layout when card content changes */
}

/* contain: paint */
/* Nothing inside can be visible outside the element's bounds */
.widget {
  contain: paint;
  /* Browser can skip painting this if offscreen */
  /* Also creates new stacking context and containing block */
}

/* contain: size */
/* Element's size is independent of its children */
.fixed-size-container {
  contain: size;
  width: 300px;
  height: 200px;
  /* Browser doesn't need to check children to know size */
}

/* contain: style */
/* Counters and quotes scoped to this subtree */

/* Shorthand: contain: strict = size layout paint */
/* Shorthand: contain: content = layout paint (most useful) */

.card-grid .card {
  contain: content; /* Layout + Paint containment */
  /* Browser can optimize rendering of hundreds of cards */
}

/* content-visibility: auto — THE MOST POWERFUL */
.offscreen-section {
  content-visibility: auto;
  contain-intrinsic-size: 0 500px; /* Estimated size when hidden */
  /* Browser completely skips rendering until element is near viewport */
  /* Like built-in virtual scrolling for free! */
}
```

### Interview Questions:

**Q: How does content-visibility improve performance?**
```css
/* content-visibility: auto skips rendering of offscreen content */
/* Think of it as "lazy rendering" built into CSS */

.article-section {
  content-visibility: auto;
  contain-intrinsic-size: auto 800px; /* Placeholder height */
}

/* Benefits:
   - Reduces initial render time by 50-90% on long pages
   - Browser skips layout, paint, and compositing for hidden sections
   - Automatically starts rendering when section approaches viewport
   
   Caveats:
   - Can cause CLS if contain-intrinsic-size is wrong
   - Affects find-in-page behavior
   - Accessibility: screen readers still read hidden content
*/

/* Real example: Long blog post */
article > section {
  content-visibility: auto;
  contain-intrinsic-size: auto 600px;
}
/* If page has 20 sections, only 2-3 are initially rendered */
/* The rest render on-demand as user scrolls */
```

---

## 22. Container Queries

### Concept Explanation

```css
/* Media Queries: Respond to VIEWPORT size */
/* Container Queries: Respond to PARENT CONTAINER size */

/* Problem: Component looks good at full-width but breaks in sidebar */
/* Media queries can't help because viewport didn't change! */

/* Solution: Container Queries */
.card-container {
  container-type: inline-size; /* Enable container queries */
  container-name: card; /* Optional: name for targeting */
}

/* Now child can respond to PARENT's width */
@container card (min-width: 400px) {
  .card {
    display: grid;
    grid-template-columns: 200px 1fr;
    /* Horizontal layout when container is wide */
  }
}

@container card (max-width: 399px) {
  .card {
    display: flex;
    flex-direction: column;
    /* Vertical layout when container is narrow */
  }
}

/* Same component adapts whether it's in main content or sidebar! */
```

### Interview Questions:

**Q: When would you use Container Queries vs Media Queries?**
```css
/* USE MEDIA QUERIES for:
   - Page-level layout changes (sidebar collapses on mobile)
   - Navigation changes (hamburger menu on small screens)
   - Global typography scaling
*/
@media (max-width: 768px) {
  .page-layout { flex-direction: column; }
  .sidebar { display: none; }
}

/* USE CONTAINER QUERIES for:
   - Reusable components that live in different contexts
   - Cards, widgets, product tiles that need to adapt
   - Design system components
*/

/* Example: Product card used in 3 different contexts */
/* Main grid (wide), Sidebar (narrow), Modal (medium) */
.product-card-wrapper {
  container-type: inline-size;
}

@container (width > 600px) {
  .product-card { /* Horizontal layout with large image */ }
}

@container (width > 300px) and (width <= 600px) {
  .product-card { /* Medium layout */ }
}

@container (width <= 300px) {
  .product-card { /* Compact vertical layout */ }
}

/* Container query units */
.product-card h2 {
  font-size: clamp(1rem, 5cqi, 2rem); /* cqi = container query inline size */
}
```

---

## 23. Atomic Design

### Concept Explanation

```
Atomic Design = Methodology for creating design systems in 5 levels:

1. ATOMS → Smallest building blocks (Button, Input, Label, Icon)
2. MOLECULES → Groups of atoms (SearchBar = Input + Button)
3. ORGANISMS → Groups of molecules (Header = Logo + Nav + SearchBar)
4. TEMPLATES → Page-level layout (wireframes without real content)
5. PAGES → Templates with real content

src/
├── components/
│   ├── atoms/
│   │   ├── Button/
│   │   ├── Input/
│   │   ├── Text/
│   │   ├── Icon/
│   │   └── Avatar/
│   ├── molecules/
│   │   ├── SearchBar/
│   │   ├── FormField/
│   │   ├── ProductPrice/
│   │   └── UserCard/
│   ├── organisms/
│   │   ├── Header/
│   │   ├── ProductGrid/
│   │   ├── LoginForm/
│   │   └── Sidebar/
│   └── templates/
│       ├── DashboardLayout/
│       └── AuthLayout/
└── pages/
    ├── Home/
    ├── Products/
    └── Login/
```

### Interview Questions:

**Q: Show a real implementation of Atomic Design**
```javascript
// === ATOM: Button ===
function Button({ variant = 'primary', size = 'md', children, ...props }) {
  return (
    <button className={`btn btn-${variant} btn-${size}`} {...props}>
      {children}
    </button>
  );
}

// === ATOM: Input ===
function Input({ label, error, ...props }) {
  return (
    <div className="input-wrapper">
      {label && <label>{label}</label>}
      <input className={error ? 'input-error' : ''} {...props} />
      {error && <span className="error-text">{error}</span>}
    </div>
  );
}

// === MOLECULE: SearchBar (Input + Button) ===
function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');
  return (
    <div className="search-bar">
      <Input 
        placeholder="Search products..." 
        value={query} 
        onChange={e => setQuery(e.target.value)} 
      />
      <Button onClick={() => onSearch(query)}>Search</Button>
    </div>
  );
}

// === ORGANISM: Header (Logo + Nav + SearchBar + Avatar) ===
function Header({ user }) {
  return (
    <header className="header">
      <Logo />
      <Navigation />
      <SearchBar onSearch={handleSearch} />
      <Avatar user={user} />
    </header>
  );
}

// === TEMPLATE: DashboardLayout ===
function DashboardLayout({ children }) {
  return (
    <div className="dashboard-layout">
      <Header user={currentUser} />
      <Sidebar />
      <main className="content">{children}</main>
      <Footer />
    </div>
  );
}

// === PAGE: Dashboard ===
function DashboardPage() {
  return (
    <DashboardLayout>
      <StatsOverview />
      <RecentOrders />
      <ProductGrid />
    </DashboardLayout>
  );
}
```

---

## 24. Design Patterns (Observer, Singleton, Factory)

### Interview Questions:

**Q: Implement Observer pattern for a custom event system**
```javascript
// Observer/PubSub pattern — decouple components that need to communicate

class EventBus {
  constructor() {
    this.events = new Map();
  }
  
  on(event, callback) {
    if (!this.events.has(event)) this.events.set(event, []);
    this.events.get(event).push(callback);
    
    // Return unsubscribe function
    return () => {
      const callbacks = this.events.get(event);
      const index = callbacks.indexOf(callback);
      if (index > -1) callbacks.splice(index, 1);
    };
  }
  
  emit(event, data) {
    const callbacks = this.events.get(event) || [];
    callbacks.forEach(cb => cb(data));
  }
  
  once(event, callback) {
    const unsubscribe = this.on(event, (data) => {
      callback(data);
      unsubscribe();
    });
  }
}

// Usage in React app:
const bus = new EventBus();

// Component A (Publisher)
function Cart() {
  const addToCart = (product) => {
    bus.emit('cart:updated', { product, action: 'add' });
  };
}

// Component B (Subscriber) - Completely decoupled!
function CartBadge() {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    const unsub = bus.on('cart:updated', ({ action }) => {
      setCount(prev => action === 'add' ? prev + 1 : prev - 1);
    });
    return unsub; // Cleanup on unmount
  }, []);
  
  return <span className="badge">{count}</span>;
}
```

**Q: Singleton pattern for managing global state/connections**
```javascript
// Ensures only ONE instance exists across the entire application

class APIClient {
  static instance = null;
  
  constructor() {
    if (APIClient.instance) return APIClient.instance;
    
    this.baseURL = process.env.REACT_APP_API_URL;
    this.token = null;
    APIClient.instance = this;
  }
  
  static getInstance() {
    if (!APIClient.instance) {
      APIClient.instance = new APIClient();
    }
    return APIClient.instance;
  }
  
  setToken(token) { this.token = token; }
  
  async request(endpoint, options = {}) {
    const response = await fetch(`${this.baseURL}${endpoint}`, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...(this.token && { Authorization: `Bearer ${this.token}` }),
        ...options.headers
      }
    });
    
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return response.json();
  }
  
  get(endpoint) { return this.request(endpoint); }
  post(endpoint, data) { return this.request(endpoint, { method: 'POST', body: JSON.stringify(data) }); }
}

// Same instance everywhere:
const api = APIClient.getInstance();
api.setToken(userToken);
api.get('/products'); // Uses the token set above
```

**Q: Factory pattern for creating UI components dynamically**
```javascript
// Factory creates objects without specifying exact class

// Form field factory — create different inputs based on type
function FormFieldFactory({ type, ...props }) {
  switch (type) {
    case 'text':
    case 'email':
    case 'password':
      return <TextInput type={type} {...props} />;
    case 'textarea':
      return <TextArea {...props} />;
    case 'select':
      return <SelectInput {...props} />;
    case 'checkbox':
      return <CheckboxInput {...props} />;
    case 'date':
      return <DatePicker {...props} />;
    case 'file':
      return <FileUpload {...props} />;
    default:
      return <TextInput {...props} />;
  }
}

// Dynamic form renderer (form config from API/JSON)
const formConfig = [
  { type: 'text', name: 'firstName', label: 'First Name', required: true },
  { type: 'email', name: 'email', label: 'Email', required: true },
  { type: 'select', name: 'country', label: 'Country', options: countries },
  { type: 'date', name: 'dob', label: 'Date of Birth' },
];

function DynamicForm({ config, onSubmit }) {
  const [formData, setFormData] = useState({});
  
  return (
    <form onSubmit={() => onSubmit(formData)}>
      {config.map(field => (
        <FormFieldFactory
          key={field.name}
          {...field}
          value={formData[field.name]}
          onChange={(value) => setFormData(prev => ({ ...prev, [field.name]: value }))}
        />
      ))}
      <button type="submit">Submit</button>
    </form>
  );
}
```

---

## 25. State Management Patterns (Flux, Zustand, Jotai)

### Interview Questions:

**Q: Explain Flux architecture and compare with modern alternatives**
```javascript
// ========= FLUX (Redux) =========
// Unidirectional data flow: Action → Dispatcher → Store → View
// Predictable but verbose

// Action
const addTodo = (text) => ({ type: 'ADD_TODO', payload: text });

// Reducer
function todosReducer(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO': return [...state, { text: action.payload, done: false }];
    case 'TOGGLE_TODO': return state.map((todo, i) => 
      i === action.payload ? { ...todo, done: !todo.done } : todo
    );
    default: return state;
  }
}

// ========= ZUSTAND (Simple, minimal boilerplate) =========
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

const useTodoStore = create(
  devtools(
    persist(
      (set, get) => ({
        todos: [],
        filter: 'all',
        
        addTodo: (text) => set((state) => ({
          todos: [...state.todos, { id: Date.now(), text, done: false }]
        })),
        
        toggleTodo: (id) => set((state) => ({
          todos: state.todos.map(todo =>
            todo.id === id ? { ...todo, done: !todo.done } : todo
          )
        })),
        
        // Computed (derived state)
        getFilteredTodos: () => {
          const { todos, filter } = get();
          if (filter === 'done') return todos.filter(t => t.done);
          if (filter === 'active') return todos.filter(t => !t.done);
          return todos;
        },
        
        // Async actions (no middleware needed!)
        fetchTodos: async () => {
          const res = await fetch('/api/todos');
          const todos = await res.json();
          set({ todos });
        }
      }),
      { name: 'todo-storage' } // Persist to localStorage
    )
  )
);

// Usage (no Provider needed!):
function TodoList() {
  const todos = useTodoStore(state => state.getFilteredTodos());
  const addTodo = useTodoStore(state => state.addTodo);
  // Component only re-renders when selected state changes
}

// ========= JOTAI (Atomic state) =========
import { atom, useAtom } from 'jotai';

// Atoms = tiny independent state pieces
const todosAtom = atom([]);
const filterAtom = atom('all');

// Derived atom (computed)
const filteredTodosAtom = atom((get) => {
  const todos = get(todosAtom);
  const filter = get(filterAtom);
  if (filter === 'done') return todos.filter(t => t.done);
  if (filter === 'active') return todos.filter(t => !t.done);
  return todos;
});

// Writable derived atom
const addTodoAtom = atom(
  null,
  (get, set, text) => {
    const todos = get(todosAtom);
    set(todosAtom, [...todos, { id: Date.now(), text, done: false }]);
  }
);

function TodoList() {
  const [todos] = useAtom(filteredTodosAtom);
  const [, addTodo] = useAtom(addTodoAtom);
  // Only re-renders when this specific atom changes
}
```

**Q: When to use which state management?**
```
| Requirement                    | Solution                        |
|-------------------------------|---------------------------------|
| Component-local state         | useState                         |
| Shared between siblings       | Lift state up / Context          |
| Theme, Auth, Locale           | Context API                      |
| Medium app, simple state      | Zustand                          |
| Complex app, many developers  | Redux Toolkit                    |
| Fine-grained reactivity       | Jotai / Signals                  |
| Server state (API data)       | React Query / SWR                |
| Form state                    | React Hook Form / Formik         |
| URL state                     | React Router searchParams        |
```

---

## 26. MutationObserver

### Concept Explanation

```javascript
// MutationObserver watches for changes in the DOM
// Use cases: Detect third-party DOM changes, auto-resize, accessibility monitoring

const observer = new MutationObserver((mutations) => {
  mutations.forEach(mutation => {
    if (mutation.type === 'childList') {
      console.log('Children changed:', mutation.addedNodes, mutation.removedNodes);
    }
    if (mutation.type === 'attributes') {
      console.log('Attribute changed:', mutation.attributeName, mutation.target);
    }
    if (mutation.type === 'characterData') {
      console.log('Text changed:', mutation.target.textContent);
    }
  });
});

observer.observe(document.getElementById('app'), {
  childList: true,    // Watch for added/removed children
  attributes: true,   // Watch for attribute changes
  characterData: true, // Watch for text content changes
  subtree: true       // Watch entire subtree, not just direct children
});

// Don't forget to disconnect!
observer.disconnect();
```

### Interview Questions:

**Q: Build a custom React hook that detects DOM changes**
```javascript
function useMutationObserver(ref, callback, options = {}) {
  useEffect(() => {
    if (!ref.current) return;
    
    const observer = new MutationObserver((mutations) => {
      callback(mutations);
    });
    
    observer.observe(ref.current, {
      childList: true,
      attributes: true,
      characterData: true,
      subtree: true,
      ...options
    });
    
    return () => observer.disconnect();
  }, [ref, callback, options]);
}

// Usage: Auto-detect when third-party widget injects content
function AdContainer() {
  const containerRef = useRef();
  const [adLoaded, setAdLoaded] = useState(false);
  
  useMutationObserver(containerRef, (mutations) => {
    const hasNewContent = mutations.some(m => m.addedNodes.length > 0);
    if (hasNewContent) setAdLoaded(true);
  });
  
  return (
    <div ref={containerRef} className="ad-container">
      {!adLoaded && <Placeholder />}
      {/* Third-party ad script injects content here */}
    </div>
  );
}
```

---

## 27. IndexedDB & Storage APIs

### Concept Explanation

```javascript
// Browser Storage comparison:
// localStorage: 5-10MB, sync, string only, no expiry
// sessionStorage: 5-10MB, sync, string only, cleared on tab close
// IndexedDB: Unlimited*, async, any data type, structured queries
// Cookies: 4KB, sent with every request, has expiry

// IndexedDB = Full database in the browser!
// Use for: Offline data, large datasets, complex queries
```

### Interview Questions:

**Q: How do you use IndexedDB for offline-first applications?**
```javascript
// Modern wrapper using idb library (simplifies IndexedDB)
// npm install idb

import { openDB } from 'idb';

class OfflineStore {
  constructor(dbName, version = 1) {
    this.dbPromise = openDB(dbName, version, {
      upgrade(db) {
        // Create object stores (tables)
        if (!db.objectStoreNames.contains('products')) {
          const store = db.createObjectStore('products', { keyPath: 'id' });
          store.createIndex('category', 'category');
          store.createIndex('updatedAt', 'updatedAt');
        }
        if (!db.objectStoreNames.contains('syncQueue')) {
          db.createObjectStore('syncQueue', { keyPath: 'id', autoIncrement: true });
        }
      }
    });
  }
  
  async getAll(storeName) {
    const db = await this.dbPromise;
    return db.getAll(storeName);
  }
  
  async get(storeName, id) {
    const db = await this.dbPromise;
    return db.get(storeName, id);
  }
  
  async put(storeName, data) {
    const db = await this.dbPromise;
    return db.put(storeName, data);
  }
  
  async delete(storeName, id) {
    const db = await this.dbPromise;
    return db.delete(storeName, id);
  }
  
  // Query by index
  async getByCategory(category) {
    const db = await this.dbPromise;
    return db.getAllFromIndex('products', 'category', category);
  }
  
  // Queue changes for sync when online
  async queueSync(operation) {
    const db = await this.dbPromise;
    await db.put('syncQueue', {
      ...operation,
      timestamp: Date.now()
    });
  }
  
  // Sync queued changes when back online
  async syncWithServer() {
    const db = await this.dbPromise;
    const pendingOps = await db.getAll('syncQueue');
    
    for (const op of pendingOps) {
      try {
        await fetch(op.url, { method: op.method, body: JSON.stringify(op.data) });
        await db.delete('syncQueue', op.id);
      } catch (error) {
        console.error('Sync failed, will retry later:', error);
        break;
      }
    }
  }
}

// Usage in React:
const store = new OfflineStore('myApp', 1);

function useOfflineProducts() {
  const [products, setProducts] = useState([]);
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  
  useEffect(() => {
    const handleOnline = () => { setIsOnline(true); store.syncWithServer(); };
    const handleOffline = () => setIsOnline(false);
    
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    
    // Load from IndexedDB first (instant)
    store.getAll('products').then(setProducts);
    
    // Then fetch fresh data if online
    if (navigator.onLine) {
      fetch('/api/products').then(r => r.json()).then(async (data) => {
        setProducts(data);
        for (const product of data) await store.put('products', product);
      });
    }
    
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);
  
  return { products, isOnline };
}
```

---

## 28. Memory Management & Garbage Collection

### Interview Questions:

**Q: What causes memory leaks in React applications?**
```javascript
// 1. BAD: Subscribing without cleaning up
function UserStatus({ userId }) {
  const [status, setStatus] = useState('offline');
  
  useEffect(() => {
    // Memory leak if component unmounts before this resolves!
    const ws = new WebSocket(`/ws/status/${userId}`);
    ws.onmessage = (e) => setStatus(e.data); // Updates unmounted component!
    
    // FIX: Return cleanup function
    return () => ws.close();
  }, [userId]);
}

// 2. BAD: setInterval without cleanup
function Timer() {
  const [time, setTime] = useState(0);
  
  useEffect(() => {
    const id = setInterval(() => setTime(t => t + 1), 1000);
    // If no cleanup, interval runs forever even after unmount!
    return () => clearInterval(id); // FIX
  }, []);
}

// 3. BAD: Event listeners not removed
function ScrollTracker() {
  useEffect(() => {
    const handleScroll = () => console.log(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    
    return () => window.removeEventListener('scroll', handleScroll); // FIX
  }, []);
}

// 4. BAD: Closures holding stale references
function DataFetcher() {
  const [data, setData] = useState(null);
  
  useEffect(() => {
    let cancelled = false; // Abort flag
    
    fetch('/api/data').then(r => r.json()).then(result => {
      if (!cancelled) setData(result); // Only set if not cancelled
    });
    
    return () => { cancelled = true; }; // FIX: Prevent stale updates
  }, []);
}

// 5. BAD: Storing DOM references indefinitely
const elementCache = new Map(); // Grows forever!

// FIX: Use WeakMap (allows GC when element is removed from DOM)
const elementCache = new WeakMap(); // Elements can be GC'd

// 6. Detecting memory leaks:
// Chrome DevTools → Memory tab → Take heap snapshots
// Compare snapshots before/after actions → find "Detached DOM nodes"
```

---

## 29. Web Workers

### Concept Explanation

```javascript
// Web Worker = JavaScript running in BACKGROUND THREAD
// Cannot access DOM, window, or document
// Communicates via postMessage/onmessage

// Main thread (UI) stays responsive while worker does heavy computation
```

### Interview Questions:

**Q: How do you use Web Workers in a React application?**
```javascript
// worker.js
self.onmessage = function(event) {
  const { type, data } = event.data;
  
  switch (type) {
    case 'SORT_LARGE_ARRAY':
      const sorted = data.sort((a, b) => a.price - b.price);
      self.postMessage({ type: 'SORT_COMPLETE', data: sorted });
      break;
      
    case 'FILTER_PRODUCTS':
      const filtered = data.products.filter(p => 
        p.name.toLowerCase().includes(data.query.toLowerCase())
      );
      self.postMessage({ type: 'FILTER_COMPLETE', data: filtered });
      break;
      
    case 'PROCESS_CSV':
      const rows = data.split('\n').map(row => row.split(','));
      const processed = rows.map(transformRow);
      self.postMessage({ type: 'CSV_COMPLETE', data: processed });
      break;
  }
};

// React hook for Web Worker
function useWorker(workerPath) {
  const workerRef = useRef(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    workerRef.current = new Worker(workerPath);
    
    workerRef.current.onmessage = (event) => {
      setResult(event.data);
      setLoading(false);
    };
    
    workerRef.current.onerror = (error) => {
      console.error('Worker error:', error);
      setLoading(false);
    };
    
    return () => workerRef.current.terminate();
  }, [workerPath]);
  
  const postMessage = useCallback((message) => {
    setLoading(true);
    workerRef.current.postMessage(message);
  }, []);
  
  return { result, loading, postMessage };
}

// Usage:
function ProductSearch() {
  const { result, loading, postMessage } = useWorker('/workers/search.js');
  const [products] = useState(largeProductArray); // 100,000 items
  
  const handleSearch = (query) => {
    postMessage({ type: 'FILTER_PRODUCTS', data: { products, query } });
    // Main thread stays responsive! UI doesn't freeze
  };
  
  return (
    <div>
      <input onChange={(e) => handleSearch(e.target.value)} />
      {loading ? <Spinner /> : <ProductList items={result?.data || []} />}
    </div>
  );
}

// Vite/Webpack: Import worker directly
const worker = new Worker(new URL('./worker.js', import.meta.url), { type: 'module' });
```

---

## 30. Incremental Static Regeneration (ISR)

### Concept Explanation

```javascript
// ISR = Best of both Static (fast) and Dynamic (fresh data)
// Pre-renders pages at build time, but REVALIDATES in background

// Static Generation (SSG): Built once at deploy time → stale until next deploy
// Server-Side Rendering (SSR): Generated on every request → always fresh but slow
// ISR: Serves static page, regenerates in background after stale time

// Next.js implementation:
export async function getStaticProps() {
  const products = await fetchProducts();
  
  return {
    props: { products },
    revalidate: 60 // Regenerate page every 60 seconds (in background)
    // User gets instant static page
    // After 60s, next visitor triggers background regeneration
    // NEW static page replaces old one atomically
  };
}

// On-demand revalidation (Next.js 12.1+):
// Trigger revalidation when data changes (webhook from CMS)
// pages/api/revalidate.js
export default async function handler(req, res) {
  const { secret, path } = req.body;
  if (secret !== process.env.REVALIDATION_SECRET) return res.status(401).json({ message: 'Invalid' });
  
  await res.revalidate(path); // e.g., '/products/123'
  return res.json({ revalidated: true });
}

// CMS webhook calls: POST /api/revalidate { path: '/products/123' }
// That specific page is regenerated immediately
```

### Interview Questions:

**Q: When to use SSG vs SSR vs ISR vs CSR?**
```
| Rendering Strategy | When to Use | Example |
|-------------------|-------------|---------|
| SSG (Static) | Content rarely changes | Blog, docs, marketing pages |
| ISR | Content changes periodically | Product pages, news articles |
| SSR | Personalized/real-time content | Dashboard, user profile, search results |
| CSR (Client) | Highly interactive, auth-required | Admin panel, SPA behind login |

Decision tree:
1. Is the page the same for all users? → SSG or ISR
2. Does it need fresh data within seconds? → SSR
3. Does it change every few minutes/hours? → ISR (revalidate: 60-3600)
4. Is it behind authentication? → SSR or CSR
5. Is it highly interactive (forms, filters)? → CSR with SSR shell
```

---

## 31. Island Architecture

### Interview Questions:

**Q: How does Island Architecture differ from traditional SPA and SSR?**
```javascript
// Traditional SPA: Ship ALL JavaScript, hydrate ENTIRE page
// └─ Bundle: 500KB+ JS, TTI: 3-5 seconds

// SSR + Full Hydration: Server renders HTML, then hydrate everything
// └─ HTML visible fast, but interactive only after full JS loads

// Island Architecture: Only ship JS for interactive parts
// └─ 90% of page = static HTML (zero JS)
// └─ 10% = interactive "islands" with their own JS bundles

// Astro example:
// ---
// import Header from '../components/Header.astro'; // Static (no JS)
// import ProductGrid from '../components/ProductGrid.astro'; // Static
// import AddToCart from '../components/AddToCart.jsx'; // Interactive island
// import SearchBar from '../components/SearchBar.svelte'; // Interactive island
// ---

// <html>
//   <Header />           <!-- 0 KB JS -->
//   <ProductGrid />      <!-- 0 KB JS (just HTML/CSS) -->
//   <AddToCart client:visible />  <!-- ~5KB JS, loads when scrolled to -->
//   <SearchBar client:idle />     <!-- ~3KB JS, loads when browser idle -->
// </html>

// Total JS shipped: ~8KB instead of 500KB!
// Each island hydrates independently

// client:load → Hydrate on page load (high priority)
// client:idle → Hydrate when browser is idle
// client:visible → Hydrate when scrolled into viewport
// client:media="(max-width: 768px)" → Hydrate only on mobile
// client:only="react" → Client-only rendering (no SSR)
```

---

## 32. Time Slicing

### Concept Explanation

```javascript
// Time Slicing = Breaking work into small chunks to keep UI responsive
// Each chunk runs within a "frame" (~16ms for 60fps)
// Between chunks, browser can paint and handle events

// React's Concurrent Mode uses this internally (via Fiber)
// But you can implement it yourself for non-React scenarios:

function timeSlice(tasks, onProgress, onComplete) {
  let index = 0;
  
  function processChunk(deadline) {
    // Process tasks while there's time remaining in this frame
    while (index < tasks.length && deadline.timeRemaining() > 1) {
      tasks[index]();
      index++;
      onProgress(index / tasks.length); // Update progress
    }
    
    if (index < tasks.length) {
      // More work to do — schedule next chunk
      requestIdleCallback(processChunk);
    } else {
      onComplete();
    }
  }
  
  requestIdleCallback(processChunk);
}

// Usage: Render 10,000 items without freezing UI
function renderLargeList(items) {
  const tasks = items.map(item => () => {
    const element = document.createElement('div');
    element.textContent = item.name;
    container.appendChild(element);
  });
  
  timeSlice(
    tasks,
    (progress) => updateProgressBar(progress * 100),
    () => console.log('All items rendered!')
  );
}
```

### Interview Questions:

**Q: How does React use time slicing with startTransition?**
```javascript
// startTransition tells React: "This update is not urgent"
// React can interrupt it to handle urgent updates (typing, clicking)

import { useState, startTransition, useTransition } from 'react';

function SearchWithFilters() {
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState('all');
  const [results, setResults] = useState([]);
  const [isPending, startTransition] = useTransition();
  
  function handleSearch(newQuery) {
    // URGENT: Update input immediately (user sees their typing)
    setQuery(newQuery);
    
    // NON-URGENT: Expensive filtering (can be sliced/interrupted)
    startTransition(() => {
      // React breaks this into time slices
      // If user types again, React abandons this work and starts fresh
      const filtered = products.filter(p => 
        p.name.includes(newQuery) && (filter === 'all' || p.category === filter)
      );
      setResults(filtered);
    });
  }
  
  return (
    <div>
      <input value={query} onChange={e => handleSearch(e.target.value)} />
      <select value={filter} onChange={e => setFilter(e.target.value)}>...</select>
      
      {isPending && <div className="stale-indicator">Updating...</div>}
      
      <div style={{ opacity: isPending ? 0.7 : 1 }}>
        {results.map(product => <ProductCard key={product.id} {...product} />)}
      </div>
    </div>
  );
}
```

---

## 33. CSS Layers (@layer)

### Concept Explanation

```css
/* @layer = Control specificity order of CSS rules */
/* Without layers: Last rule wins (or higher specificity wins) */
/* With layers: You define the ORDER of importance */

/* Declare layer order (earlier = lower priority) */
@layer reset, base, components, utilities;

/* Reset layer (lowest priority) */
@layer reset {
  * { margin: 0; padding: 0; box-sizing: border-box; }
  h1, h2, h3 { font-size: inherit; }
}

/* Base layer */
@layer base {
  body { font-family: system-ui; line-height: 1.5; color: #333; }
  a { color: blue; text-decoration: none; }
}

/* Components layer */
@layer components {
  .btn {
    padding: 0.5rem 1rem;
    border-radius: 4px;
    background: #007bff;
    color: white;
  }
  .card {
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 1rem;
  }
}

/* Utilities layer (highest priority) */
@layer utilities {
  .text-center { text-align: center; }
  .mt-4 { margin-top: 1rem; }
  .hidden { display: none; }
}

/* Now utilities ALWAYS override components, regardless of specificity! */
/* <div class="btn hidden"> → hidden wins because utilities layer has higher priority */
```

### Interview Questions:

**Q: How do CSS Layers solve the "Tailwind vs custom CSS" specificity war?**
```css
/* Problem without layers: */
/* tailwind.css */
.text-red-500 { color: red; }  /* specificity: 0-1-0 */

/* custom.css (loaded after) */
.error-message { color: red; }  /* specificity: 0-1-0 */

/* If both applied, order determines winner (fragile!) */

/* Solution with layers: */
@layer tailwind, components, overrides;

@layer tailwind {
  /* All Tailwind classes go here */
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
}

@layer components {
  /* Your component styles - can override Tailwind */
  .error-message { color: darkred; font-weight: bold; }
}

@layer overrides {
  /* Critical overrides - always win */
  .force-hidden { display: none !important; }
}

/* Now your component styles ALWAYS beat Tailwind, no !important needed */
/* And overrides always beat everything */
```

---

## 34. Subgrid

### Concept Explanation

```css
/* Problem: Nested grids can't align with parent grid */
/* Child grid creates its OWN grid, independent of parent */

/* Solution: subgrid — child inherits parent's grid tracks */

.card-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

.card {
  display: grid;
  /* Use parent's column tracks for this card's internal layout */
  grid-template-rows: subgrid;
  grid-row: span 3; /* Card spans 3 rows of parent's implicit grid */
}

/* Real example: Cards with aligned headers, content, and footers */
.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-template-rows: auto; /* Rows are implicit */
  gap: 1.5rem;
}

.product-card {
  display: grid;
  grid-row: span 3; /* Header + Content + Footer */
  grid-template-rows: subgrid; /* Inherit parent row sizing */
  /* Now ALL cards have aligned headers, content areas, and footers! */
}

.product-card .title { /* Row 1 - all titles align */ }
.product-card .description { /* Row 2 - all descriptions align */ }
.product-card .price { /* Row 3 - all prices align */ }
```

---

## 35. CSS Houdini

### Concept Explanation

```javascript
// CSS Houdini = Low-level APIs to extend CSS with JavaScript
// Create custom CSS properties, paint effects, layout algorithms

// ========= Paint API (Custom backgrounds/decorations) =========
// Register a paint worklet
CSS.paintWorklet.addModule('/paint-worklet.js');

// paint-worklet.js
class CheckerboardPainter {
  static get inputProperties() {
    return ['--checker-size', '--checker-color1', '--checker-color2'];
  }
  
  paint(ctx, size, properties) {
    const cellSize = parseInt(properties.get('--checker-size')) || 20;
    const color1 = properties.get('--checker-color1').toString() || '#fff';
    const color2 = properties.get('--checker-color2').toString() || '#000';
    
    for (let y = 0; y < size.height; y += cellSize) {
      for (let x = 0; x < size.width; x += cellSize) {
        ctx.fillStyle = (x + y) % (cellSize * 2) === 0 ? color1 : color2;
        ctx.fillRect(x, y, cellSize, cellSize);
      }
    }
  }
}

registerPaint('checkerboard', CheckerboardPainter);
```

```css
/* Use custom paint in CSS */
.hero-section {
  background: paint(checkerboard);
  --checker-size: 30;
  --checker-color1: #f0f0f0;
  --checker-color2: #e0e0e0;
}

/* ========= Typed Custom Properties (CSS Properties API) ========= */
@property --progress {
  syntax: '<number>';
  initial-value: 0;
  inherits: false;
}

.progress-bar {
  --progress: 0;
  background: linear-gradient(to right, green var(--progress), transparent 0);
  transition: --progress 1s ease; /* Can animate custom properties! */
}

.progress-bar.complete {
  --progress: 100%;
}
```

---

## 36. Micro Frontend Architecture

### Concept Explanation

```javascript
// Micro Frontends = Split a monolithic frontend into independent, deployable apps
// Each team owns a vertical slice (feature) end-to-end

// Architecture:
// ┌─────────────────────────────────────────────────────────┐
// │                    Shell / Container App                  │
// │  ┌────────────┐  ┌────────────┐  ┌────────────────────┐│
// │  │  Product   │  │   Cart     │  │   Checkout         ││
// │  │  (Team A)  │  │  (Team B)  │  │   (Team C)         ││
// │  │  React     │  │  Vue       │  │   Angular          ││
// │  │  Deploy:   │  │  Deploy:   │  │   Deploy:          ││
// │  │  Independent│  │  Independent│  │   Independent     ││
// │  └────────────┘  └────────────┘  └────────────────────┘│
// └─────────────────────────────────────────────────────────┘

// Benefits:
// - Teams can deploy independently
// - Different tech stacks per micro-frontend
// - Smaller, faster builds
// - Team autonomy

// Approaches:
// 1. Module Federation (Webpack 5) - Runtime composition
// 2. Import Maps - Browser-native module loading
// 3. iframe - Complete isolation (old approach)
// 4. Web Components - Framework-agnostic
// 5. Build-time integration (npm packages)
```

### Interview Questions:

**Q: How do micro frontends communicate?**
```javascript
// 1. Custom Events (loosely coupled)
// Product micro-frontend:
function addToCart(product) {
  window.dispatchEvent(new CustomEvent('cart:add', { 
    detail: { product } 
  }));
}

// Cart micro-frontend:
window.addEventListener('cart:add', (event) => {
  const { product } = event.detail;
  updateCart(product);
});

// 2. Shared State (EventBus or shared store)
// Shared library:
const sharedState = {
  user: null,
  cart: [],
  listeners: new Map(),
  
  set(key, value) {
    this[key] = value;
    this.listeners.get(key)?.forEach(cb => cb(value));
  },
  
  subscribe(key, callback) {
    if (!this.listeners.has(key)) this.listeners.set(key, []);
    this.listeners.get(key).push(callback);
    return () => {
      const cbs = this.listeners.get(key);
      cbs.splice(cbs.indexOf(callback), 1);
    };
  }
};

// 3. URL/Route-based communication
// Each micro-frontend owns its routes
// Shell handles routing between micro-frontends

// 4. Props down (container passes data to micro-frontends)
// Container:
function Shell() {
  const user = useAuth();
  return (
    <div>
      <ProductApp user={user} />
      <CartApp user={user} onCheckout={handleCheckout} />
    </div>
  );
}
```

---

## 37. Module Federation

### Concept Explanation

```javascript
// Module Federation (Webpack 5) = Share code between separate builds at RUNTIME
// No need to publish to npm or rebuild consumer apps

// Host app consumes modules from Remote apps at runtime
// Remote apps can also consume from other remotes

// ========= Remote App (exposes components) =========
// webpack.config.js of remote app (products-app)
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  plugins: [
    new ModuleFederationPlugin({
      name: 'productsApp',
      filename: 'remoteEntry.js',
      exposes: {
        './ProductList': './src/components/ProductList',
        './ProductDetail': './src/components/ProductDetail',
      },
      shared: {
        react: { singleton: true, requiredVersion: '^18.0.0' },
        'react-dom': { singleton: true, requiredVersion: '^18.0.0' },
      }
    })
  ]
};

// ========= Host App (consumes remote modules) =========
// webpack.config.js of host app (shell)
module.exports = {
  plugins: [
    new ModuleFederationPlugin({
      name: 'shell',
      remotes: {
        productsApp: 'productsApp@https://products.myapp.com/remoteEntry.js',
        cartApp: 'cartApp@https://cart.myapp.com/remoteEntry.js',
      },
      shared: {
        react: { singleton: true },
        'react-dom': { singleton: true },
      }
    })
  ]
};

// Using remote component in host:
const ProductList = React.lazy(() => import('productsApp/ProductList'));

function ShellApp() {
  return (
    <Suspense fallback={<Loading />}>
      <ProductList /> {/* Loaded at runtime from products-app! */}
    </Suspense>
  );
}

// Benefits over npm packages:
// - No rebuild of host when remote updates
// - Deploy remote independently → host gets latest automatically
// - Shared dependencies loaded once (singleton)
```

---

## Scenario-Based Interview Questions

---

### Scenario 1: Performance Optimization

**Q: Users report your e-commerce page takes 8 seconds to load. How do you investigate and fix?**

```javascript
// Step 1: Measure (Lighthouse, WebPageTest, Chrome DevTools Performance tab)
// Check Core Web Vitals: LCP, CLS, INP

// Step 2: Identify bottlenecks (common findings):

// Finding 1: Bundle is 3MB (too large!)
// Fix: Code splitting + tree shaking
const ProductPage = lazy(() => import('./pages/ProductPage'));
// Also: Remove unused packages (bundle analyzer)
// Replace moment.js with date-fns, lodash with lodash-es

// Finding 2: LCP image loads late
// Fix: Preload hero image, use proper format
// <link rel="preload" as="image" href="hero.webp" />
// <img fetchpriority="high" src="hero.webp" ... />

// Finding 3: Render-blocking CSS/JS
// Fix: Inline critical CSS, defer non-critical
// <style> /* only above-fold CSS */ </style>
// <link rel="preload" as="style" href="full.css" onload="this.rel='stylesheet'" />

// Finding 4: Too many API calls on page load
// Fix: Combine APIs, parallel fetch, cache with React Query
const { data } = useQuery({
  queryKey: ['homepage'],
  queryFn: () => fetch('/api/homepage-data').then(r => r.json()), // Single API
  staleTime: 5 * 60 * 1000
});

// Finding 5: Unoptimized images (3MB total)
// Fix: WebP/AVIF, responsive srcset, lazy loading
// <img loading="lazy" srcset="..." sizes="..." />

// Finding 6: No caching
// Fix: Cache-Control headers + Service Worker
// Static assets: max-age=31536000, immutable
// HTML: no-cache (revalidate)

// Result: 8s → 1.5s load time
```

---

### Scenario 2: React Performance

**Q: A React component re-renders 50 times when user types in search input. How to fix?**

```javascript
// Problem: Parent re-renders on every keystroke → all children re-render

// BEFORE (problematic):
function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [products, setProducts] = useState(allProducts);
  
  // This runs on every keystroke → filters 10,000 products → slow!
  const filtered = products.filter(p => p.name.includes(searchQuery));
  
  return (
    <div>
      <input value={searchQuery} onChange={e => setSearchQuery(e.target.value)} />
      <ProductStats products={filtered} />     {/* Re-renders every keystroke */}
      <ProductList products={filtered} />       {/* Re-renders 10,000 items! */}
      <Sidebar />                               {/* Re-renders unnecessarily */}
    </div>
  );
}

// AFTER (optimized):
function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [products] = useState(allProducts);
  
  // 1. useMemo: Only re-filter when query or products change
  const filtered = useMemo(() => 
    products.filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase())),
    [products, searchQuery]
  );
  
  // 2. Debounce the search (don't filter on every keystroke)
  const debouncedQuery = useDebouncedValue(searchQuery, 300);
  
  // 3. Use transition for non-urgent update
  const [isPending, startTransition] = useTransition();
  const handleSearch = (value) => {
    setSearchQuery(value); // Urgent: update input
    startTransition(() => {
      setFilteredResults(filterProducts(value)); // Non-urgent: can be interrupted
    });
  };
  
  return (
    <div>
      <input value={searchQuery} onChange={e => handleSearch(e.target.value)} />
      <ProductStats products={filtered} />
      {/* 4. Virtualize the list (render only visible items) */}
      <VirtualizedProductList products={filtered} />
      {/* 5. Memo: Sidebar doesn't depend on search, shouldn't re-render */}
      <MemoizedSidebar />
    </div>
  );
}

const MemoizedSidebar = React.memo(Sidebar);

// 6. If still slow: Move filtering to Web Worker
const worker = new Worker('/search-worker.js');
worker.postMessage({ products, query: searchQuery });
worker.onmessage = (e) => setFilteredResults(e.data);
```

---

### Scenario 3: State Management

**Q: You have a complex form with 20+ fields, validation, and conditional logic. How do you manage state?**

```javascript
// Use React Hook Form + Zod for complex forms
import { useForm, Controller, useWatch } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

// 1. Define schema with conditional validation
const formSchema = z.object({
  firstName: z.string().min(2, 'Min 2 characters'),
  lastName: z.string().min(2),
  email: z.string().email('Invalid email'),
  phone: z.string().optional(),
  
  employmentType: z.enum(['employed', 'self-employed', 'student', 'unemployed']),
  
  // Conditional: Only required if employed
  companyName: z.string().optional(),
  salary: z.number().optional(),
  
  // Conditional: Only required if self-employed
  businessName: z.string().optional(),
  gstNumber: z.string().optional(),
}).refine((data) => {
  if (data.employmentType === 'employed' && !data.companyName) {
    return false;
  }
  return true;
}, { message: 'Company name required for employed', path: ['companyName'] });

function ComplexForm() {
  const { register, handleSubmit, control, formState: { errors, isSubmitting } } = useForm({
    resolver: zodResolver(formSchema),
    mode: 'onBlur', // Validate on blur (not every keystroke!)
    defaultValues: { employmentType: 'employed' }
  });
  
  // Watch a field to show/hide conditional sections
  const employmentType = useWatch({ control, name: 'employmentType' });
  
  const onSubmit = async (data) => {
    await api.post('/api/applications', data);
  };
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('firstName')} />
      {errors.firstName && <span>{errors.firstName.message}</span>}
      
      <input {...register('email')} />
      {errors.email && <span>{errors.email.message}</span>}
      
      <select {...register('employmentType')}>
        <option value="employed">Employed</option>
        <option value="self-employed">Self-employed</option>
        <option value="student">Student</option>
      </select>
      
      {/* Conditional fields - only render when relevant */}
      {employmentType === 'employed' && (
        <>
          <input {...register('companyName')} placeholder="Company Name" />
          <input {...register('salary', { valueAsNumber: true })} placeholder="Salary" />
        </>
      )}
      
      {employmentType === 'self-employed' && (
        <>
          <input {...register('businessName')} placeholder="Business Name" />
          <input {...register('gstNumber')} placeholder="GST Number" />
        </>
      )}
      
      <button disabled={isSubmitting}>
        {isSubmitting ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
}

// WHY React Hook Form?
// - Minimal re-renders (uncontrolled inputs by default)
// - 20 fields with useState = 20 re-renders per change
// - React Hook Form = ~0 re-renders per change (only on submit/blur)
// - Built-in validation, error handling, form state
// - 8KB bundle size (vs Formik 44KB)
```

---

### Scenario 4: Accessibility

**Q: How do you make a custom dropdown accessible?**

```javascript
// Custom accessible dropdown (WAI-ARIA compliant)
function AccessibleDropdown({ options, value, onChange, label }) {
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const containerRef = useRef();
  const listRef = useRef();
  
  const handleKeyDown = (e) => {
    switch (e.key) {
      case 'Enter':
      case ' ':
        e.preventDefault();
        if (isOpen && highlightedIndex >= 0) {
          onChange(options[highlightedIndex]);
          setIsOpen(false);
        } else {
          setIsOpen(true);
        }
        break;
      case 'ArrowDown':
        e.preventDefault();
        if (!isOpen) setIsOpen(true);
        setHighlightedIndex(i => Math.min(i + 1, options.length - 1));
        break;
      case 'ArrowUp':
        e.preventDefault();
        setHighlightedIndex(i => Math.max(i - 1, 0));
        break;
      case 'Escape':
        setIsOpen(false);
        containerRef.current.focus();
        break;
      case 'Tab':
        setIsOpen(false);
        break;
    }
  };
  
  // Close on outside click
  useEffect(() => {
    const handleClick = (e) => {
      if (!containerRef.current?.contains(e.target)) setIsOpen(false);
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);
  
  return (
    <div ref={containerRef} className="dropdown">
      <label id="dropdown-label">{label}</label>
      
      <button
        role="combobox"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-labelledby="dropdown-label"
        aria-activedescendant={highlightedIndex >= 0 ? `option-${highlightedIndex}` : undefined}
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={handleKeyDown}
      >
        {value || 'Select an option'}
        <span aria-hidden="true">▼</span>
      </button>
      
      {isOpen && (
        <ul
          ref={listRef}
          role="listbox"
          aria-labelledby="dropdown-label"
        >
          {options.map((option, index) => (
            <li
              key={option.value}
              id={`option-${index}`}
              role="option"
              aria-selected={value === option.value}
              className={index === highlightedIndex ? 'highlighted' : ''}
              onClick={() => { onChange(option); setIsOpen(false); }}
              onMouseEnter={() => setHighlightedIndex(index)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
```

---

### Scenario 5: Error Handling

**Q: How do you implement a robust error handling strategy in a React application?**

```javascript
// 1. Error Boundary (catches render errors)
class ErrorBoundary extends React.Component {
  state = { hasError: false, error: null };
  
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  
  componentDidCatch(error, errorInfo) {
    // Send to error tracking service
    Sentry.captureException(error, { extra: errorInfo });
  }
  
  render() {
    if (this.state.hasError) {
      return (
        <div className="error-fallback">
          <h2>Something went wrong</h2>
          <p>{this.state.error?.message}</p>
          <button onClick={() => this.setState({ hasError: false })}>
            Try again
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

// 2. Granular error boundaries (don't crash entire app)
function App() {
  return (
    <div>
      <ErrorBoundary>
        <Header /> {/* If header crashes, rest of app still works */}
      </ErrorBoundary>
      
      <ErrorBoundary>
        <MainContent />
      </ErrorBoundary>
      
      <ErrorBoundary>
        <Sidebar />
      </ErrorBoundary>
    </div>
  );
}

// 3. API error handling with React Query
function useProducts() {
  return useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const res = await fetch('/api/products');
      if (!res.ok) {
        throw new ApiError(res.status, await res.json());
      }
      return res.json();
    },
    retry: 3, // Retry 3 times on failure
    retryDelay: (attempt) => Math.pow(2, attempt) * 1000, // Exponential backoff
  });
}

function ProductList() {
  const { data, error, isLoading, isError, refetch } = useProducts();
  
  if (isLoading) return <Skeleton count={5} />;
  if (isError) {
    if (error.status === 401) return <RedirectToLogin />;
    if (error.status === 404) return <NotFound />;
    return (
      <ErrorMessage 
        message="Failed to load products" 
        onRetry={refetch}
      />
    );
  }
  
  return data.map(p => <ProductCard key={p.id} {...p} />);
}

// 4. Global unhandled error catching
window.addEventListener('unhandledrejection', (event) => {
  console.error('Unhandled promise rejection:', event.reason);
  Sentry.captureException(event.reason);
});

window.addEventListener('error', (event) => {
  console.error('Unhandled error:', event.error);
  Sentry.captureException(event.error);
});
```

---

### Scenario 6: SEO & SSR

**Q: Your React SPA has poor SEO. How do you fix it?**

```javascript
// Problem: SPA renders content on client → search engines see empty HTML
// Google can execute JS, but other engines and social media crawlers can't

// Solution 1: Next.js (SSR/SSG framework)
// pages/products/[id].jsx
export async function getServerSideProps({ params }) {
  const product = await fetchProduct(params.id);
  
  return {
    props: { product },
    // or use ISR:
    // revalidate: 60
  };
}

function ProductPage({ product }) {
  return (
    <>
      {/* SEO Meta tags */}
      <Head>
        <title>{product.name} | MyStore</title>
        <meta name="description" content={product.description.slice(0, 155)} />
        <meta property="og:title" content={product.name} />
        <meta property="og:description" content={product.description} />
        <meta property="og:image" content={product.image} />
        <meta property="og:type" content="product" />
        <link rel="canonical" href={`https://mystore.com/products/${product.id}`} />
        
        {/* Structured data (JSON-LD) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": product.name,
            "image": product.image,
            "description": product.description,
            "offers": {
              "@type": "Offer",
              "price": product.price,
              "priceCurrency": "INR"
            }
          })}
        </script>
      </Head>
      
      <ProductDetails product={product} />
    </>
  );
}

// Solution 2: React Helmet (for SPAs that can't migrate to Next.js)
import { Helmet } from 'react-helmet-async';

function ProductPage({ product }) {
  return (
    <>
      <Helmet>
        <title>{product.name}</title>
        <meta name="description" content={product.description} />
      </Helmet>
      <ProductDetails product={product} />
    </>
  );
}

// Solution 3: Pre-rendering (for small sites)
// Use react-snap or prerender.io
// Generates static HTML for each route at build time
```

---

### Scenario 7: Real-time Features

**Q: Build a real-time collaborative text indicator ("User is typing...")**

```javascript
// Using WebSocket + Debounce
function CollaborativeChat({ roomId }) {
  const [messages, setMessages] = useState([]);
  const [typingUsers, setTypingUsers] = useState(new Set());
  const ws = useRef(null);
  
  useEffect(() => {
    ws.current = new WebSocket(`wss://api.example.com/chat/${roomId}`);
    
    ws.current.onmessage = (event) => {
      const data = JSON.parse(event.data);
      
      switch (data.type) {
        case 'message':
          setMessages(prev => [...prev, data]);
          setTypingUsers(prev => {
            const next = new Set(prev);
            next.delete(data.userId); // Stop showing "typing" after message sent
            return next;
          });
          break;
          
        case 'typing_start':
          setTypingUsers(prev => new Set([...prev, data.userName]));
          break;
          
        case 'typing_stop':
          setTypingUsers(prev => {
            const next = new Set(prev);
            next.delete(data.userName);
            return next;
          });
          break;
      }
    };
    
    return () => ws.current?.close();
  }, [roomId]);
  
  // Debounced typing indicator
  const typingTimeoutRef = useRef(null);
  
  const handleInputChange = (e) => {
    // Send "typing" event (throttled)
    if (!typingTimeoutRef.current) {
      ws.current.send(JSON.stringify({ type: 'typing_start' }));
    }
    
    clearTimeout(typingTimeoutRef.current);
    typingTimeoutRef.current = setTimeout(() => {
      ws.current.send(JSON.stringify({ type: 'typing_stop' }));
      typingTimeoutRef.current = null;
    }, 2000); // Stop "typing" after 2s of no input
  };
  
  return (
    <div>
      <MessageList messages={messages} />
      
      {typingUsers.size > 0 && (
        <div className="typing-indicator">
          {[...typingUsers].join(', ')} {typingUsers.size === 1 ? 'is' : 'are'} typing...
        </div>
      )}
      
      <input onChange={handleInputChange} onKeyDown={handleSendMessage} />
    </div>
  );
}
```

---

### Scenario 8: Testing

**Q: How do you test a complex React component that fetches data and handles user interactions?**

```javascript
// Using React Testing Library + MSW (Mock Service Worker)
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

// Mock API
const server = setupServer(
  rest.get('/api/products', (req, res, ctx) => {
    const category = req.url.searchParams.get('category');
    return res(ctx.json([
      { id: 1, name: 'iPhone', category: 'electronics', price: 999 },
      { id: 2, name: 'T-Shirt', category: 'clothing', price: 29 },
    ].filter(p => !category || p.category === category)));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('ProductSearch', () => {
  it('renders products after loading', async () => {
    render(<ProductSearch />);
    
    // Initially shows loading state
    expect(screen.getByText('Loading...')).toBeInTheDocument();
    
    // After fetch completes, shows products
    await waitFor(() => {
      expect(screen.getByText('iPhone')).toBeInTheDocument();
      expect(screen.getByText('T-Shirt')).toBeInTheDocument();
    });
  });
  
  it('filters products by category', async () => {
    const user = userEvent.setup();
    render(<ProductSearch />);
    
    // Wait for initial load
    await screen.findByText('iPhone');
    
    // Select category filter
    await user.selectOptions(screen.getByLabelText('Category'), 'electronics');
    
    // Should show only electronics
    await waitFor(() => {
      expect(screen.getByText('iPhone')).toBeInTheDocument();
      expect(screen.queryByText('T-Shirt')).not.toBeInTheDocument();
    });
  });
  
  it('handles API error gracefully', async () => {
    // Override handler for this test
    server.use(
      rest.get('/api/products', (req, res, ctx) => {
        return res(ctx.status(500), ctx.json({ message: 'Server error' }));
      })
    );
    
    render(<ProductSearch />);
    
    await waitFor(() => {
      expect(screen.getByText('Failed to load products')).toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'Retry' })).toBeInTheDocument();
    });
  });
  
  it('debounces search input', async () => {
    jest.useFakeTimers();
    const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });
    
    render(<ProductSearch />);
    await screen.findByText('iPhone');
    
    const searchInput = screen.getByPlaceholderText('Search...');
    await user.type(searchInput, 'phone');
    
    // API should NOT be called yet (within debounce period)
    // Fast-forward debounce timer
    jest.advanceTimersByTime(300);
    
    // Now API should be called with search query
    await waitFor(() => {
      expect(screen.getByText('iPhone')).toBeInTheDocument();
    });
  });
});
```

---

## Bonus: Commonly Asked Frontend Interview Questions

---

### Q: What are React hooks rules and why?

```javascript
// Rule 1: Only call hooks at the TOP LEVEL
// Never inside loops, conditions, or nested functions

// BAD:
function Component({ isLoggedIn }) {
  if (isLoggedIn) {
    const [user, setUser] = useState(null); // Conditional hook!
  }
  // React tracks hooks by ORDER of calls
  // If condition changes, hook order changes → BROKEN STATE
}

// GOOD:
function Component({ isLoggedIn }) {
  const [user, setUser] = useState(null); // Always called
  // Use the value conditionally:
  useEffect(() => {
    if (isLoggedIn) fetchUser().then(setUser);
  }, [isLoggedIn]);
}

// Rule 2: Only call hooks from React functions
// (Function components or custom hooks, not regular functions)

// WHY these rules exist:
// React uses a linked list to track hooks per component
// It relies on hooks being called in SAME ORDER every render
// Hook 1 → useState → Hook 2 → useEffect → Hook 3 → useMemo
// If order changes, React assigns wrong state to wrong hook!
```

---

### Q: Explain useRef vs useState vs useCallback vs useMemo

```javascript
// useState: State that triggers re-render when changed
const [count, setCount] = useState(0);
setCount(1); // Component re-renders!

// useRef: Mutable value that does NOT trigger re-render
const renderCount = useRef(0);
renderCount.current++; // No re-render!
// Use for: DOM refs, previous values, instance variables

// useMemo: Cache expensive COMPUTED VALUES
const expensiveResult = useMemo(() => {
  return heavyCalculation(data); // Only recalculates when 'data' changes
}, [data]);

// useCallback: Cache FUNCTION REFERENCES
const handleClick = useCallback(() => {
  doSomething(id);
}, [id]); // Same function reference unless 'id' changes
// Use when: Passing callbacks to memoized children

// When to use what:
// "I need to store a value and re-render on change" → useState
// "I need to store a value WITHOUT re-rendering" → useRef
// "I need to cache a computed result" → useMemo
// "I need to cache a function" → useCallback
// "I need to access a DOM element" → useRef
```

---

### Q: How does React Context work and when NOT to use it?

```javascript
// Context = Pass data through component tree without prop drilling
// Good for: Theme, Auth, Language (infrequent changes)
// Bad for: Frequently changing data (every subscriber re-renders!)

const ThemeContext = createContext('light');

function App() {
  const [theme, setTheme] = useState('light');
  
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Page /> {/* All children can access theme */}
    </ThemeContext.Provider>
  );
}

function Button() {
  const { theme } = useContext(ThemeContext);
  return <button className={`btn-${theme}`}>Click</button>;
}

// PROBLEM: Context causes ALL consumers to re-render
// Even if they only use part of the context value!

// BAD:
<UserContext.Provider value={{ user, cart, notifications, settings }}>
  {/* Every time cart updates, ALL consumers re-render! */}
  {/* Even <Settings /> which only uses settings! */}
</UserContext.Provider>

// FIX: Split contexts
<UserContext.Provider value={user}>
  <CartContext.Provider value={cart}>
    <NotificationContext.Provider value={notifications}>
      {children}
    </NotificationContext.Provider>
  </CartContext.Provider>
</UserContext.Provider>

// BETTER FIX: Use Zustand/Jotai for frequently changing state
// They allow subscribing to SPECIFIC slices of state
const useCartStore = create(set => ({ cart: [], addItem: (item) => {...} }));
// Components only re-render when their selected slice changes
```

---

### Q: Explain the difference between controlled and uncontrolled components

```javascript
// CONTROLLED: React state is the "single source of truth"
function ControlledInput() {
  const [value, setValue] = useState('');
  
  return (
    <input 
      value={value}  // React controls the value
      onChange={(e) => setValue(e.target.value)} // Must update state to change input
    />
  );
}
// Pros: Full control, validation on every change, format while typing
// Cons: Re-render on every keystroke

// UNCONTROLLED: DOM is the source of truth
function UncontrolledInput() {
  const inputRef = useRef();
  
  const handleSubmit = () => {
    console.log(inputRef.current.value); // Read value only when needed
  };
  
  return (
    <input 
      ref={inputRef}
      defaultValue="initial" // Set initial value (DOM manages after)
    />
  );
}
// Pros: Less re-renders, simpler for forms
// Cons: Less control, harder to validate in real-time

// React Hook Form uses uncontrolled inputs by default (better performance)
// But gives you controlled-like API through its register() system
```

---

### Q: What is React Server Components (RSC)?

```javascript
// RSC (Next.js 13+ App Router) = Components that run ONLY on server
// They NEVER ship JavaScript to client!

// Server Component (default in App Router):
// app/products/page.jsx
async function ProductsPage() {
  // Can directly access database, file system, env variables!
  const products = await db.query('SELECT * FROM products');
  
  return (
    <div>
      <h1>Products</h1>
      {products.map(p => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}
// This component: Zero JS shipped to browser!
// HTML is rendered on server and sent as static HTML

// Client Component (interactive):
'use client'; // This directive makes it a client component

function AddToCartButton({ productId }) {
  const [loading, setLoading] = useState(false);
  
  return (
    <button onClick={async () => {
      setLoading(true);
      await addToCart(productId);
      setLoading(false);
    }}>
      {loading ? 'Adding...' : 'Add to Cart'}
    </button>
  );
}

// Rules:
// - Server Components can import Client Components ✓
// - Client Components CANNOT import Server Components ✗
// - Server Components can't use: useState, useEffect, onClick, browser APIs
// - Client Components can't use: direct DB access, fs, server-only code

// Benefits:
// - Smaller bundle (server components = 0 JS)
// - Direct database access (no API layer for reads!)
// - Better security (secrets stay on server)
// - Faster data fetching (server → DB is faster than client → API → DB)
```

---

### Q: How do you handle authentication in a React app?

```javascript
// Complete auth flow:

// 1. Auth Context
const AuthContext = createContext(null);

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  
  // Check if user is already logged in (on app load)
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = localStorage.getItem('accessToken');
        if (!token) { setLoading(false); return; }
        
        const res = await fetch('/api/auth/me', {
          headers: { Authorization: `Bearer ${token}` }
        });
        
        if (res.ok) setUser(await res.json());
        else localStorage.removeItem('accessToken');
      } catch (error) {
        console.error('Auth check failed');
      } finally {
        setLoading(false);
      }
    };
    
    checkAuth();
  }, []);
  
  const login = async (email, password) => {
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
      credentials: 'include' // For HTTP-only cookies
    });
    
    if (!res.ok) throw new Error('Login failed');
    const { accessToken, user } = await res.json();
    localStorage.setItem('accessToken', accessToken);
    setUser(user);
  };
  
  const logout = async () => {
    await fetch('/api/auth/logout', { method: 'POST', credentials: 'include' });
    localStorage.removeItem('accessToken');
    setUser(null);
  };
  
  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

// 2. Protected Route
function ProtectedRoute({ children, requiredRole }) {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  
  if (loading) return <FullPageSpinner />;
  if (!user) return <Navigate to="/login" state={{ from: location }} replace />;
  if (requiredRole && user.role !== requiredRole) return <Navigate to="/unauthorized" />;
  
  return children;
}

// 3. Usage in Router
function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        
        <Route path="/dashboard" element={
          <ProtectedRoute>
            <DashboardPage />
          </ProtectedRoute>
        } />
        
        <Route path="/admin" element={
          <ProtectedRoute requiredRole="admin">
            <AdminPage />
          </ProtectedRoute>
        } />
      </Routes>
    </AuthProvider>
  );
}

// 4. Axios interceptor for auto-refresh
axios.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401 && !error.config._retry) {
      error.config._retry = true;
      const { data } = await axios.post('/api/auth/refresh', {}, { withCredentials: true });
      localStorage.setItem('accessToken', data.accessToken);
      error.config.headers.Authorization = `Bearer ${data.accessToken}`;
      return axios(error.config);
    }
    return Promise.reject(error);
  }
);
```

---

### Q: What is the difference between CSR, SSR, SSG, and ISR?

```
| Strategy | When HTML Generated | Fresh Data? | SEO | Performance |
|----------|-------------------|-------------|-----|-------------|
| CSR (Client-Side) | In browser (JS) | Always fresh | Poor* | Slow initial |
| SSR (Server-Side) | On each request | Always fresh | Good | Medium TTFB |
| SSG (Static Gen) | At build time | Stale until rebuild | Good | Fastest |
| ISR (Incremental) | Build + background | Fresh (after revalidate) | Good | Fast |

CSR: React SPA → Browser gets empty HTML → JS builds page
SSR: Next.js getServerSideProps → Server builds HTML per request
SSG: Next.js getStaticProps → HTML built at deploy time
ISR: Next.js revalidate → Static + periodic regeneration

HYBRID (modern approach):
- Static shell (SSG)
- Dynamic islands (CSR/SSR for interactive parts)
- API data with React Query (cache + background refetch)
```

---

## Quick Reference: Top 20 Frontend Concepts for Interviews

| # | Concept | Key Takeaway |
|---|---------|--------------|
| 1 | Event Loop | Microtasks before macrotasks, don't block main thread |
| 2 | Closures | Functions remember outer scope, use for privacy/memoization |
| 3 | Virtual DOM | Diff algorithm, keys matter, same-level comparison |
| 4 | Fiber Architecture | Enables time-slicing, interruptible rendering |
| 5 | Code Splitting | lazy() + Suspense, route-level and component-level |
| 6 | Web Vitals | LCP < 2.5s, CLS < 0.1, INP < 200ms |
| 7 | Caching | HTTP headers, Service Worker, React Query staleTime |
| 8 | State Management | Local → Context → Zustand → Redux (by complexity) |
| 9 | Performance | useMemo, useCallback, React.memo, virtualization |
| 10 | Tree Shaking | ES Modules only, avoid side effects, named exports |
| 11 | Debounce/Throttle | Debounce for search, throttle for scroll |
| 12 | WebSockets | Full-duplex for chat/gaming, SSE for server push |
| 13 | Accessibility | Semantic HTML, ARIA, keyboard nav, focus management |
| 14 | Error Handling | Error boundaries + React Query retry + Sentry |
| 15 | Testing | RTL + MSW for unit/integration, Cypress/Playwright for E2E |
| 16 | SSR/SSG/ISR | SSG for static, ISR for periodic, SSR for dynamic |
| 17 | Container Queries | Components adapt to parent size, not viewport |
| 18 | Web Workers | Offload CPU work to background thread |
| 19 | Micro Frontends | Module Federation for independent team deployments |
| 20 | React Server Components | Zero JS on client, direct DB access |

---

## Interview Tips for Frontend Roles

1. **Always explain the "why"** — Don't just say "use useMemo", explain WHY it helps
2. **Mention trade-offs** — Every optimization has a cost (memory, complexity, DX)
3. **Know the numbers** — "LCP should be under 2.5s", "Bundle should be under 200KB"
4. **Build mental models** — Draw diagrams of event loop, rendering pipeline, etc.
5. **Practice implementing** — Build debounce, virtual list, custom hooks from scratch
6. **Know your tools** — Chrome DevTools Performance tab, Lighthouse, React Profiler
7. **Stay current** — React 18/19 features, Next.js App Router, new CSS features
8. **Accessibility matters** — Companies increasingly ask about a11y best practices
9. **System design** — For senior roles, be ready to design scalable frontend architectures
10. **Performance budgets** — Know typical targets: FCP < 1.8s, TTI < 3.8s, bundle < 200KB

---

*Last Updated: August 2026*
*Prepared for Frontend Developer Interviews (React/Next.js Focus)*
