import axios from 'axios';

const cards = document.querySelector('.cards');

axios.get('https://api.github.com/users/kaizensh')
  .then(res => {
    cards.appendChild(gitHubCard(res.data));
  })
  .catch(err => {
    console.error(err);
  })
  .finally('test');


  const followersArray = ['tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell'];

  followersArray.forEach(element => {
    axios.get(`https://api.github.com/users/${element}`)
    .then(res => {
      cards.appendChild(gitHubCard(res.data));
    })
    .catch(err => {
      console.error(err);
    })
    .finally('test');
  });

function gitHubCard(data) {

  const card = document.createElement('div');
  const avatar = document.createElement('img');
  const info = document.createElement('div');
  const name = document.createElement('h3');
  const username = document.createElement('p');
  const location = document.createElement('p');
  const profile = document.createElement('p');
  const profileLink = document.createElement('a');
  const followers = document.createElement('p');
  const following = document.createElement('p');
  const bio = document.createElement('p');

  card.classList.add('card');
  info.classList.add('card-info');
  name.classList.add('name');
  username.classList.add('username');

  card.appendChild(avatar);
  card.appendChild(info);
  info.appendChild(name);
  info.appendChild(username);
  info.appendChild(location);
  info.appendChild(profile);
  profile.appendChild(profileLink);
  info.appendChild(followers);
  info.appendChild(following);
  info.appendChild(bio);

  avatar.src = data.avatar_url;
  name.textContent = data.name;
  username.textContent = data.login;
  location.textContent = `Location: ${data.location}`;
  profileLink.href = data.html_url;
  profileLink.textContent = data.html_url;
  profile.textContent = `Profile: \n ${profileLink}`;
  followers.textContent = `Followers: ${data.followers}`;
  following.textContent = `Following: ${data.following}`;
  bio.textContent = `Bio: ${data.bio}`;

  return card;
}