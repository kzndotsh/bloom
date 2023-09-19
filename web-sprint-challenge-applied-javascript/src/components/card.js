import axios from "axios";

const Card = (article) => {
  
  const card = document.createElement('div');
  const headline = document.createElement('div');
  const author = document.createElement('div');
  const imgContainer = document.createElement('div');
  const authorImg = document.createElement('img');
  const byline = document.createElement('span');
  
  card.classList.add('card');
  headline.classList.add('headline');
  author.classList.add('author');
  imgContainer.classList.add('img-container');

  card.appendChild(headline);
  card.appendChild(author);
  author.appendChild(imgContainer);
  imgContainer.appendChild(authorImg);
  author.appendChild(byline);

  headline.textContent = article.headline;
  authorImg.src = article.authorPhoto;
  byline.textContent = `By ${article.authorName}`;

  headline.addEventListener('click', () => {
    console.log(article.headline);
  });

  return card;
}

const cardAppender = (selector) => {
  const cardSelector = document.querySelector(selector);

  axios.get('http://localhost:5001/api/articles')
    .then(res => {
      const topics = res.data.articles;
      const topicsArr = Object.values(topics);
      for (let i = 0; i < topicsArr.length; i++) {
        const topic = topicsArr[i];
        topic.forEach(element => {
          cardSelector.appendChild(Card(element));
        });
      }
    })
    .catch(err => {
      console.error(err);
    })
}

export { Card, cardAppender }