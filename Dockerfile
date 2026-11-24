
FROM node:22-bookworm-slim

ENV NODE_ENV=production
ENV TESSERACT_LANGUAGES=ben+eng

RUN apt-get update \
    && apt-get install -y --no-install-recommends \
       tesseract-ocr \
       tesseract-ocr-ben \
       tesseract-ocr-eng \
       tesseract-ocr-ara \
       tesseract-ocr-urd \
       tesseract-ocr-fas \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY package*.json ./
RUN npm install --omit=dev

# Copy all project files
COPY . .

# Explicitly ensure frontend files are included
COPY public ./public

# Stop build if index.html is missing
RUN test -f /app/public/index.html \
    && echo "SUCCESS: public/index.html found" \
    || (echo "ERROR: public/index.html is missing!" && exit 1)

EXPOSE 10000

CMD ["npm", "start"]
