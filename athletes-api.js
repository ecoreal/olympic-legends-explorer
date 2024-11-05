// 使用 Express 创建简单的 API
const express = require('express');
const app = express();

app.get('/api/athletes', (req, res) => {
  // 从数据库获取运动员数据并返回
  res.json({ athletes: [...] });
});

app.get('/api/athlete/:id', (req, res) => {
  const athleteId = req.params.id;
  // 根据ID从数据库查询运动员详情
  res.json({ athlete: {...} });
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
