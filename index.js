const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 3000;

const SPRINGBOOT_API = 'http://userservice:8080/users';  // Spring Boot 서비스 이름을 올바르게 수정

app.use(express.static('public'));  // public 폴더에 HTML, CSS, JS 파일 배치
app.use(express.json());

// Spring Boot에서 데이터 가져오기
app.get('/api/get-data', async (req, res) => {
    try {
        const response = await axios.get(SPRINGBOOT_API);  // 수정된 API 주소
        res.json(response.data);
    } catch (error) {
        console.error(error);  // 오류 로깅 추가
        res.status(500).json({ error: 'Failed to fetch data' });
    }
});

// Spring Boot에 데이터 추가하기
app.post('/api/add-data', async (req, res) => {
    try {
        const { name, email } = req.body;
        const response = await axios.post(SPRINGBOOT_API, { name, email });  // 수정된 API 주소
        res.json(response.data);
    } catch (error) {
        console.error(error);  // 오류 로깅 추가
        res.status(500).json({ error: 'Failed to add data' });
    }
});

app.listen(PORT, () => {
    console.log(`Node.js server running on port ${PORT}`);
});
