import axios from 'axios';

const axiosWithAuth = () => {
    const token = localStorage.getItem('token');

    return axios.create({
        baseURL: 'http://localhost:9000/api',
        headers: {
            Authorization: token,
        },
    });
};

const axiosGetArticles = () => {
    return axiosWithAuth()
        .get('/articles')
        .then((res) => {
            // console.log('axios/index.js fetchArticles', res);
            return res.data;
        })
        .catch((err) => {
            // console.log('axios/index.js fetchArticles', err);
            return err;
        });
};

const axiosPostLogin = (credentials) => {
    return axios
        .post('http://localhost:9000/api/login', credentials)
        .then((res) => {
            // console.log('axios/index.js postLogin', res);
            return res.data;
        })
        .catch((err) => {
            // console.log('axios/index.js postLogin', err);
            return err;
        });
};

const axiosPostArticle = (article) => {
    return axiosWithAuth()
        .post('/articles', article)
        .then((res) => {
            // console.log('axios/index.js submitArticle', res);
            return res.data;
        })
        .catch((err) => {
            // console.log('axios/index.js submitArticle', err);
            return err;
        });
};

const axiosUpdateArticle = (id, article) => {
    return axiosWithAuth()
        .put(`/articles/${id}`, article)
        .then((res) => {
            // console.log('axios/index.js putArticle', res);
            return res.data;
        })
        .catch((err) => {
            // console.log('axios/index.js putArticle', err);
            return err;
        });
};

const axiosDeleteArticle = (id) => {
    return axiosWithAuth()
        .delete(`/articles/${id}`)
        .then((res) => {
            // console.log('axios/index.js deleteArticle', res);
            return res.data;
        })
        .catch((err) => {
            // console.log('axios/index.js deleteArticle', err);
            return err;
        });
};

export {
    axiosPostLogin,
    axiosGetArticles,
    axiosPostArticle,
    axiosUpdateArticle,
    axiosDeleteArticle,
};
