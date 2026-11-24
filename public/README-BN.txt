Typing Quality Checker — Pro Max Update 2

এই আপডেটে আগের সব UI, PDF/DOCX/TXT/Image extraction, Traditional OCR, AI OCR workflow ও provider selection অক্ষত রাখা হয়েছে।

নতুন উন্নতি:
1. একাধিক AI OCR Provider সফলভাবে ফলাফল দিলে প্রতিটি Provider-এর transcription-এর আনুমানিক মিল/পার্থক্য রিপোর্টে দেখাবে।
2. Provider comparison শুধু OCR লেখাগুলোর মিল পরিমাপ করে; কোন Provider সঠিক তা নিশ্চিত করে না। মূল PDF/ছবি দিয়ে যাচাই করতে হবে।
3. সম্ভাব্য বানান/OCR পার্থক্যের পাশে Original ও Typed—দুই লেখার আশপাশের শব্দের প্রসঙ্গ দেখাবে, যাতে শব্দের অবস্থান বুঝতে সুবিধা হয়।
4. শব্দের অবস্থানকে Word-এর পৃষ্ঠা নম্বর হিসেবে দেখানো হয় না; এটি শব্দের ক্রমিক অবস্থান।
5. এক লাইনে একা থাকা সংখ্যা Needs Review-তে থাকবে; আসল কনটেন্ট হতে পারে বলে স্বয়ংক্রিয়ভাবে বাদ দেওয়া হয় না।
6. কোনো লেখা নিজে থেকে সংশোধন বা মুছে ফেলা হয় না।

ইনস্টল:
- ZIP extract করুন।
- ভেতরের public/index.html আপনার সার্ভারের public/index.html দিয়ে replace করুন।
- server.js এবং ai-ocr-client.js আগের মতোই রাখুন।
- Backend/API key পরিবর্তনের প্রয়োজন নেই।

Provider তুলনা:
- AI OCR চালু রেখে Gemini + Tesseract, Gemini + OCR.space, অথবা একাধিক Provider-যুক্ত যেকোনো preset নির্বাচন করুন।
- একাধিক Provider-এর মধ্যে অন্তত ২টি সফল ফলাফল এলে pairwise comparison দেখা যাবে।
- শুধু Tesseract নির্বাচন করলে তুলনা হবে না; তখন রিপোর্টে একক Provider ফলাফল দেখাবে।

যাচাই:
- Inline JavaScript-এর Node syntax check করা হয়েছে।
- HTML parser check করা হয়েছে।
- বাস্তব PDF/DOCX/image এবং সব Provider-এর end-to-end browser test চালানো হয়নি।
