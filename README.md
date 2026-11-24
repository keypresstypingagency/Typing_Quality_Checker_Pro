# Typing Quality Checker — AI OCR (BothPlus)

## Included
- `public/index.html`: existing Typing Quality Checker interface and comparison/report features.
- `public/ai-ocr-client.js`: browser client; sends image pages to the backend.
- `server.js`: secure server-side API calls to ChatGPT, Gemini and OCR.space.
- `package.json`: Node dependencies and start command.
- `.env.example`: environment variable template.

## AI OCR behavior
1. Turn on **শুধু AI OCR চালু করুন** to use only the selected AI providers.
2. Default provider selection is **ChatGPT + Gemini + OCR.space**.
3. ChatGPT/Gemini are preferred for the primary transcription; OCR.space is also run and its result is shown for review.
4. If one selected provider fails but another succeeds, successful results are returned and the failure is shown in the AI report.
5. If all selected AI providers fail, the comparison stops with an error. It does **not** fall back to Tesseract.
6. Turn the AI checkbox off to use the existing traditional Tesseract OCR flow.
7. DOCX text extraction through Mammoth and the existing text comparison/report logic remain in place.

## Run locally
Requires Node.js 20 or newer.

```bash
npm install
cp .env.example .env
# Add API keys to .env
npm start
```

Open `http://localhost:3000`.

## Deploy
Deploy the whole project directory to a Node hosting service. Set the same environment variables in the host dashboard. Do not put API keys in `public/`, HTML, or browser JavaScript.

## API keys
- `OPENAI_API_KEY`: required to use ChatGPT.
- `GEMINI_API_KEY`: required to use Gemini.
- `OCR_SPACE_API_KEY`: required to use OCR.space.
The all-provider option can still return results if one provider is not configured, provided at least one other selected provider succeeds. Missing-provider errors appear in the AI OCR report.

## Notes
- PDF pages are rendered in the browser to images and sent one page at a time.
- Large/complex documents may require raising `MAX_UPLOAD_MB` or `OPENAI_MAX_OUTPUT_TOKENS`, subject to provider limits and hosting memory/time limits.
- OCR is not guaranteed perfect. Always proofread uncertain text against the source document.
