const express = require('express');

const router = express.Router();
// app(express()메소드)과 비슷하게 작동한다. 앱 대체가능. 라우터 객체를 제공하지만 내부적으로 다르다.

// 아래처럼 라우터 핸들러 등록가능
router.get('/', function (req, res) {
  res.render('index');
});  // localhost:3000/

router.get('/about', function (req, res) {
  res.render('about');
});  // localhost:3000/about

// 라우터 객체 내보냄
module.exports = router;