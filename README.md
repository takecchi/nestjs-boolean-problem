# nestjs-boolean-problem

booleanが正しくパースされない問題の再現リポジトリ

## 実行手順

### 1. サーバーを起動
```bash
npm install
npm run start:dev
```

#### Swagger
Swaggerが立ち上がるので、そちらで確認することも可能
http://localhost:3000/api

### 2. curlでリクエストを送信 

```bash
curl -X 'POST' \
  'http://localhost:3000/' \
  -H 'accept: */*' \
  -H 'Content-Type: multipart/form-data' \
  -F 'is_banana=true' \
  -F 'is_apple=false'
```

### 3. 返却値がis_apple:trueになってしまう