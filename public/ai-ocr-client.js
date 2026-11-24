/* Typing Quality Checker - AI OCR browser client
   Same-origin request: API keys never enter the browser. */
(function () {
  "use strict";

  const API_BASE = ""; // same host as the website/backend

  async function run(blob, options = {}) {
    if (!(blob instanceof Blob)) {
      throw new Error("AI OCR-এ পাঠানোর মতো সঠিক ফাইল/ছবি পাওয়া যায়নি।");
    }
    const providers = Array.isArray(options.providers) ? options.providers : [];
    if (!providers.length) {
      throw new Error("কমপক্ষে একটি AI Provider নির্বাচন করুন।");
    }

    const form = new FormData();
    const filename = String(options.filename || "document-page.png")
      .replace(/[\\/\0]/g, "_").slice(0, 120);
    form.append("file", blob, filename);
    form.append("providers", providers.join(","));

    const response = await fetch(`${API_BASE}/api/ai-ocr`, {
      method: "POST",
      body: form,
      credentials: "same-origin"
    });

    const payload = await response.json().catch(() => ({}));
    if (!response.ok || !payload.ok) {
      const providerErrors = payload.providerErrors || {};
      const details = Object.entries(providerErrors)
        .map(([name, message]) => `${name}: ${message}`).join("; ");
      throw new Error([payload.error || `AI OCR server error (${response.status})`, details]
        .filter(Boolean).join(" — "));
    }
    if (!String(payload.text || "").trim()) {
      throw new Error("AI Provider কোনো লেখা ফেরত দেয়নি।");
    }
    return payload;
  }

  async function health() {
    const response = await fetch(`${API_BASE}/api/health`, { credentials: "same-origin" });
    if (!response.ok) throw new Error(`Backend status পাওয়া যায়নি (${response.status})`);
    return response.json();
  }

  window.AIOCR = Object.freeze({ run, health });
})();
