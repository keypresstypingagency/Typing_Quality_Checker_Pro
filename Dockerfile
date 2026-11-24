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

COPY . .

EXPOSE 3000
CMD ["npm", "start"]
