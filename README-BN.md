# Typing Quality Checker Pro — নিরাপদ OCR আপডেট

এই প্যাকেজটি আপনার দেওয়া বর্তমান `index.html` এবং `server.js`-এর ভিত্তিতে তৈরি। বর্তমান ডিজাইন, PDF/DOCX/TXT প্রসেসিং, তুলনা, রিপোর্ট, Math Mode, ভাষা-সংক্রান্ত UI এবং বিদ্যমান Browser OCR কোড অক্ষত রাখা হয়েছে। Provider তালিকায় শুধু নতুন Tesseract server OCR অপশন যোগ হয়েছে।

## প্যাকেজে যা আছে

- `server.js` — Gemini, OCR.space, ChatGPT, Other AI এবং নতুন Local Tesseract Provider
- `Dockerfile` — সার্ভারে Tesseract ও ভাষার trained data ইনস্টল করে
- `public/index.html` — আপনার দেওয়া HTML-এর মূল ফিচার/ডিজাইন রেখে নতুন Provider অপশন যোগ করা সংস্করণ
- `.env.example` — পরিবেশ ভেরিয়েবলের নমুনা

## GitHub-এ ফাইল বসানো

1. ZIP Extract করুন।
2. GitHub repository-র Root-এ `server.js` replace করুন।
3. Root-এ `Dockerfile` যোগ করুন।
4. `public/index.html` replace করুন।
5. আপনার বিদ্যমান `public/ai-ocr-client.js`, `package.json`, `package-lock.json` এবং অন্য ফাইলগুলো অক্ষত রাখুন। এই প্যাকেজে সেগুলো replace করা হয়নি।
6. Commit/Push করুন।

## Render-এ Deploy

Tesseract executable ইনস্টল করতে Render service-কে Docker runtime দিয়ে deploy করতে হবে। আপনার বর্তমান Node runtime service-এ Dockerfile স্বয়ংক্রিয়ভাবে ব্যবহৃত না হলে Render service settings-এ Docker runtime নির্বাচন/নতুন Docker Web Service তৈরি করতে হবে। একই repository ও একই branch ব্যবহার করুন।

Render Environment-এ বিদ্যমান secret/API key অক্ষত রাখুন। শুধু এগুলো যোগ/যাচাই করুন:

- `TESSERACT_ENABLED=true`
- `TESSERACT_LANGUAGES=ben+eng`
- `TESSERACT_PSM=3`
- `ALLOWED_ORIGIN` = আপনার সাইটের সঠিক origin (যেমন `https://your-service.onrender.com`)

Gemini, OCR.space বা অন্য API key এখানে বা GitHub-এ লিখবেন না। Render Environment-এই রাখবেন।

## Deploy যাচাই

Deploy শেষে আপনার সাইটের origin-এর শেষে `/api/health` খুলুন। JSON-এ `tesseractInstalled: true` দেখতে হবে। `providers.tesseract`-ও `true` থাকা উচিত।

তারপর ওয়েবসাইটে AI OCR checkbox চালু করে `Tesseract (Free Bengali OCR)` অথবা `Gemini + Tesseract Free + OCR.space` নির্বাচন করে ছোট JPG/PNG দিয়ে পরীক্ষা করুন।

## ভাষা

Default `ben+eng` বাংলা-ইংরেজি মিশ্র পৃষ্ঠার জন্য। আলাদা ভাষার কাজের জন্য Render Environment-এ `TESSERACT_LANGUAGES` বদলানো যায়, যেমন `ara+eng`, `urd+eng`, `fas+eng`। একসঙ্গে অপ্রয়োজনীয় সব ভাষা না দেওয়াই ভালো।

## গুরুত্বপূর্ণ সীমাবদ্ধতা

- Tesseract সফটওয়্যার ও trained data ওপেন সোর্স/ফ্রি; কিন্তু Render-এর CPU, RAM, bandwidth বা hosting খরচ আলাদা হতে পারে।
- বাংলা বইয়ের জটিল ছাপা, কলাম, টেবিল, যুক্তাক্ষর, হরকত ও গাণিতিক সূত্রে ভুল হতে পারে। বাস্তব নমুনা দিয়ে যাচাই করুন।
- Browser-এ আগের Tesseract.js পথটি রাখা হয়েছে; নতুন `tesseract` Provider সার্ভারে native Tesseract চালায়।
- এই প্যাকেজে `package.json` বা `ai-ocr-client.js` replace করা হয়নি, যাতে আপনার বর্তমান dependencies/client অক্ষত থাকে।
