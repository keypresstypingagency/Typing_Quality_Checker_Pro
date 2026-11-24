Typing Quality Checker — Pro Max OCR Guard

এই আপডেটে কী পরিবর্তন হয়েছে
1. AI OCR চালু থাকলেও PDF-এর নিজস্ব text layer পড়া হয়—শুধু যাচাইয়ের জন্য।
2. PDF text layer-এ অনুপস্থিত, দুই প্রশ্নের মাঝখানে থাকা সন্দেহজনক একক সংখ্যা OCR Noise হিসেবে শনাক্ত হয়।
3. শনাক্ত OCR Noise Comparison-এর Original Words / Missing / Extra গণনায় যোগ হয় না।
4. OCR Provider-এর আসল transcription অপরিবর্তিত থাকে এবং AI OCR Report-এ দেখা যায়।
5. PDF-এ text layer না থাকলে বা যাচাইয়ের মতো যথেষ্ট text না থাকলে এই ফিল্টার প্রয়োগ হয় না।
6. আগের সব UI, OCR Provider, PDF/DOCX/Image/TXT, language, Math Mode ও comparison logic অক্ষত রাখা হয়েছে।

ইনস্টল করার নিয়ম
1. ZIP Extract করুন।
2. Extract করা public/index.html ফাইলটি আপনার সার্ভারের public/index.html দিয়ে Replace করুন।
3. server.js, ai-ocr-client.js, package.json বা Dockerfile পরিবর্তন করবেন না।
4. Deploy/Restart করে Browser-এ Hard Refresh (Ctrl + Shift + R) দিন।

গুরুত্বপূর্ণ
- OCR Noise শনাক্তকরণটি একটি conservative cross-check; সব ধরনের OCR ভুল ধরার নিশ্চয়তা নয়।
- PDF-এর native text layer ভুল বা অসম্পূর্ণ হলে ফল যাচাই করুন।
- মূল OCR transcription মুছে ফেলা হয় না; শুধু সন্দেহজনক token comparison থেকে বাদ দিয়ে আলাদা রিপোর্ট করা হয়।
