const axios = require('axios');
const cheerio = require('cheerio');
const express = require('express');
const app = express();

app.get('/check', (req, res) => {
    const { ip } = req.query;

    if (!ip) {
        res.status(400).json({
            success: false,
            status: 400,
            method: req.method,
            message: "You did not specify the required parameter"
        })
    }

    axios.get(`https://scamalytics.com/ip/${ip}`)
    .then(response => {
        const html = response.data;
        const $ = cheerio.load(html);
        const preContent = $('pre').text().trim();
        const { ip, score, risk } = JSON.parse(preContent);

        res.json({
            success: true,
            status: 200,
            ip: ip,
            score: score,
            risk: risk
        })

    })
    .catch(error => {
        res.status(500).json({
            success: false,
            status: 500,
            method: req.method,
            message: "IP address not found or error occurred"
        })
    });

})

app.listen(3000, () => {
    console.log('[SCAMYLYTICS] | Free API | Unlimited Reuqests | Runned on port: 3000')
})
