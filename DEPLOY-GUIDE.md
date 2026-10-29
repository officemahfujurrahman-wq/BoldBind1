# Bold Bind — Deploy Guide (boldbind.com)

Site: Bold Bind agency website (Next.js 16 + TypeScript + Tailwind + Prisma/SQLite)

---

## ⚠️ সবচেয়ে গুরুত্বপূর্ণ নিয়ম (Most important rule)

**ZIP ফাইলটা GitHub-এ upload করবেন না!**
প্রথমে ZIP টা **Extract** করুন, তারপর **ভিতরের ফাইলগুলো** upload করুন — যেন
GitHub repo-র প্রথম পাতায় (root-এ) সরাসরি `package.json` ফাইলটা দেখা যায়।

যদি repo-তে শুধু `boldbind-website.zip` নামে একটা ফাইল থাকে, তাহলে Vercel-এ
সাইট খুললে এই error আসবে: **"This page doesn't exist — 404 NOT_FOUND"**

---

## Option A — Vercel (FREE, recommended) ⭐

### Step 1: ZIP extract করুন
1. `boldbind-website.zip` ফাইলটা কম্পিউটারে download করুন।
2. Right-click → **Extract All** (বা double-click) → একটা folder তৈরি হবে।
3. Folder-টা খুললে এই জিনিসগুলো দেখবেন: `src`, `prisma`, `public`, `db`,
   `package.json`, `next.config.ts`, `DEPLOY-GUIDE.md` ইত্যাদি।

### Step 2: GitHub-এ upload করুন (free)
1. https://github.com → Sign up / Log in।
2. আগের ভুল ঠিক করতে: আপনার repo (`boldbind-site`) খুলুন →
   যদি ভিতরে শুধু zip ফাইল থাকে → ফাইলটা খুলে **Delete** করুন (কমিট করুন)।
3. Repo পাতায় **"Add file → Upload files"** ক্লিক করুন।
4. Extract করা folder-এর **ভিতরে** ঢুকে **সব ফাইল ও ফোল্ডার সিলেক্ট করুন**
   (Ctrl+A) → টেনে এনে (drag) GitHub-এ ছেড়ে দিন।
   - নিশ্চিত করুন: তালিকায় `package.json`, `src`, `prisma`, `public`,
     `next.config.ts` দেখা যাচ্ছে।
5. নিচে **Commit changes** বাটনে ক্লিক করুন।
6. Repo-র প্রথম পাতায় এবার `package.json` সহ সব ফাইল দেখা যাবে ✅

### Step 3: Vercel-এ deploy করুন (free)
1. https://vercel.com → **Sign up with GitHub**।
2. **Add New... → Project** → `boldbind-site` repo → **Import**।
3. **Framework Preset: Next.js** সিলেক্ট হয়ে আছে কিনা দেখুন (auto হয়)।
4. **Environment Variables** সেকশনে যোগ করুন:
   - Name: `DATABASE_URL`
   - Value: `file:/tmp/custom.db`
5. **Deploy** ক্লিক করুন → ২–৩ মিনিট অপেক্ষা করুন।
6. Deploy শেষে **Visit** ক্লিক করে দেখুন — সাইট লাইভ! 🎉

### Step 4: নিজের ডোমেইন boldbind.com যোগ করুন
1. Vercel → আপনার project → **Settings → Domains**।
2. `boldbind.com` লিখে **Add** করুন। একইভাবে `www.boldbind.com`-ও যোগ করুন।
3. এবার যেখান থেকে ডোমেইন কিনেছেন (Namecheap / GoDaddy / Hostinger ইত্যাদি)
   সেখানে গিয়ে **DNS settings** খুলুন এবং এই ২টা record যোগ করুন:

   | Type  | Host/Name | Value                |
   |-------|-----------|----------------------|
   | A     | @         | 76.76.21.21          |
   | CNAME | www       | cname.vercel-dns.com |

   - Registrar যদি **Nameserver** চায়: **Custom DNS** বেছে নিন →
     `ns1.vercel-dns.com` ও `ns2.vercel-dns.com` দিন।
4. Save করুন → ১০ মিনিট থেকে ২৪ ঘণ্টার মধ্যে (সাধারণত ~৩০ মিনিট)
   **https://boldbind.com** লাইভ হয়ে যাবে — ফ্রি SSL (https 🔒) সহ। ✅

---

## 🔧 Troubleshooting

### "This page doesn't exist — 404 NOT_FOUND" (Vercel-এ)
**কারণ:** GitHub repo-তে zip ফাইল আছে, কিন্তু extract করা ফাইল নেই — তাই
`package.json` রুটে নেই এবং Vercel সাইট build করতে পারেনি।

**সমাধান:**
1. উপরের Step 1–2 দেখে extract করা ফাইলগুলো repo-তে upload করুন।
2. Vercel → project → **Deployments** → নতুন deployment auto শুরু হবে;
   না হলে সর্বশেষ deployment-এর **⋯ মেনু → Redeploy** ক্লিক করুন।
3. **Settings → General → Framework Preset** = **Next.js** আছে কিনা চেক করুন।

### Deploy failed হলে
- **Deployments** ট্যাবে গিয়ে failed deployment-এ ক্লিক করে **Build Logs** দেখুন।
- Logs-এ প্রথম red error লাইনটা আমাকে পাঠান — আমি ঠিক করে দেব।

### Contact form কাজ করছে না (500 error)
- Vercel-এ `DATABASE_URL=file:/tmp/custom.db` environment variable আছে কিনা
  দেখুন (Settings → Environment Variables)।

---

## Notes
- Contact form-এর মেসেজ SQLite database-এ জমা হয়। প্রথম বার ফর্ম সাবমিট হলে
  টেবিল অটো-তৈরি হয় (কোনো কমান্ড চালাতে হয় না)। Vercel ফ্রি টিয়ারে স্টোরেজ
  temporary — নতুন redeploy-তে পুরনো মেসেজ মুছে যেতে পারে। স্থায়ী স্টোরেজের
  জন্য ফ্রি cloud database (Turso / Neon) যুক্ত করা যায় — ১০ মিনিটের কাজ।
- সাইটের লেখা/কনটেন্ট বদলাতে: `src/lib/*.ts` ফাইলগুলো (site-data, services,
  portfolio, blog)।
- রং/থিম: `src/app/globals.css` (brand = #ED1C24 লাল)।
- লোগো ও ছবি: `public/` folder।

## Local run (নিজের কম্পিউটারে চালাতে চাইলে)
```bash
npm install
cp .env.example .env       # DATABASE_URL=file:./db/custom.db
npx prisma db push
npm run dev                # http://localhost:3000
```
