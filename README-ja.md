# nestjs-boolean-problem

booleanが正しくパースされない問題の再現リポジトリになります。

どうやら、`multipart/form-data`で送信した場合に、`boolean`が正しくパースされないようです。

## 実行手順

### 1. サーバーを起動
```bash
npm install
npm run start:dev
```

#### Swagger
Swaggerが立ち上がるので、そちらで確認することも可能
http://localhost:3000/api

### 2. curlでリクエストを送信 (またはSwagger上で実行)

```bash
curl -X 'POST' \
  'http://localhost:3000/' \
  -H 'accept: */*' \
  -H 'Content-Type: multipart/form-data' \
  -F 'is_banana=true' \
  -F 'is_apple=false'
```

### 3. 問題: 返却値がis_apple:trueになってしまう