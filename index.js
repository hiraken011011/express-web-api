const express = require('express'); // モジュール読み込み
const app = express(); // アプリ生成

app.use(express.static('web')); // webフォルダの中身を公開する

// 「localhost:3000/api/v1/list」アクセスで、ToDoを返す
app.get('/api/v1/list', (req, res) => {
  // クライアントに送るJSONデータ
  const todoList = [
    { title: 'JSを勉強', done: true },
    { title: 'Nodeを勉強', done: false },
    { title: 'WebAPIを作成', done: false },
  ];

  // JSONを送信
  res.json(todoList);
});

// ポート3000でサーバ立てる
app.listen(3000, () => console.log('Listening on port 3000'));

// 「localhost:3000/api/v1/list」にアクセス