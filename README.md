# nestjs-boolean-problem

日本語の説明は[こちら](README-ja.md)

This repository demonstrates the issue of boolean values not being parsed correctly.

It seems that when data is sent using `multipart/form-data`, boolean values are not parsed correctly.

## Execution Steps

### 1. Start the Server
```bash
npm install
npm run start:dev
```

#### Swagger
Swagger will be available, so you can also check there:
http://localhost:3000/api

### 2. Send a Request with curl (or Swagger)

```bash
curl -X 'POST' \
  'http://localhost:3000/' \
  -H 'accept: */*' \
  -H 'Content-Type: multipart/form-data' \
  -F 'is_banana=true' \
  -F 'is_apple=false'
```

### 3. Issue: The return value incorrectly shows is_apple