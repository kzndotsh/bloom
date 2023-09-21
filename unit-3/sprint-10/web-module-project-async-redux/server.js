const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

const { createProxyMiddleware } = require('http-proxy-middleware');

app.use(
    '/',
    createProxyMiddleware({
        target: 'https://api.dynapictures.com', //original url
        changeOrigin: true,
        //secure: false,
        onProxyRes: function (proxyRes, req, res) {
            proxyRes.headers['Access-Control-Allow-Origin'] = '*';
        },
    })
);

app.listen(5000);
