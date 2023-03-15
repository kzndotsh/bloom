import axios from "axios";

const Tabs = (topics) => {

  const topicWrapper = document.createElement('div');
  topicWrapper.classList.add('topics');

  topics.forEach(el => {
    const topicTab = document.createElement('div');
    topicTab.classList.add('tab');
    topicTab.textContent = el;
    topicWrapper.appendChild(topicTab);
  });

  return topicWrapper;
}

const tabsAppender = (selector) => {

  const tabsEntry = document.querySelector(selector);

  axios.get('http://localhost:5001/api/topics')
    .then(res => {
      const topics = res.data.topics;
      tabsEntry.appendChild(Tabs(topics));
    })
    .catch(err => {
      console.error(err);
    })
}

export { Tabs, tabsAppender }