const express = require('express'); // expressモジュールを読み込み
const express = require('multer'); // multerモジュール（ブラウザからのデータ解釈）
const uuidv4 = require('uuid/v4'); // uuidモジュール（ユニークID生成）

const app = express(); // expressアプリ生成
app.use(multer().none()); // multerでブラウザから送信されたデータを解釈する
app.use(express.static('web')); // webフォルダの中身を公開する

// ToDoリストデータ
const todoList = [];

// 「localhost:3000/api/v1/list」アクセスで、ToDoリストを返す
app.get('/api/v1/list', (req, res) => {
  // JSONを送信
  res.json(todoList);
});

// 「localhost:3000/api/v1/add」アクセスで、ToDoリストに項目を追加
app.post('/api/v1/add', (req, res) => {
  // クライアントからの送信データを取得
  const todoData = req.body;
  const todoTitle = todoData.title;
  // ユニークIDを生成する
  const id = uuidv4();
  // ToDoの項目を作る
  const todoItem = {
    id,
    title: todoTitle,
    done: false
  };
  
})

// ポート3000でサーバ立てる
app.listen(3000, () => console.log('Listening on port 3000'));

// 「localhost:3000/api/v1/list」にアクセス