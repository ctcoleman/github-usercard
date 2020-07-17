import axios from 'axios'
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
// console.log(axios.get('https://api.github.com/users/ctcoleman'))
/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [];

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/
const gitUserObj = {
  
}
function createMarkUp(gitUserObj) {

  // create the elements to make the tree
  const card = document.createElement('div')
  card.className = 'card'
  const cardImage = document.createElement('img')
  cardImage.src = '#'
  const cardInfo = document.createElement('div')
  cardInfo.className = 'card-info'
  const nameHeader = document.createElement('h3')
  nameHeader.className = 'name'
  const username = document.createElement('p')
  username.className = 'username'
  const location = document.createElement('p')
  location.textContent = `Location: ${userLocation}`
  const profile = document.createElement('p')
  profile.textContent = `Profile: ${profileLink}`
  const profileLink = document.createElement('a')
  profileLink.href = 'https://github.com/ctcoleman'
  profileLink.textContent = 'https://github.com/ctcoleman'
  const followers = document.createElement('p')
  followers.textContent = `Followers: ${userFollowers}`
  const following = document.createElement('p')
  following.textContent = `Following: ${userFollowing}`
  const bio = document.createElement('p')
  bio.textContent = `Bio: ${bio}`
  const userLocation = null
  const userFollowing = null
  const userFollowers = null
  const userBio = null
  // place the elements in the dom in there respective parent elements
  o.appendChild(card)
  card.appendChild(cardImage)
  card.appendChild(cardInfo)
  cardInfo.appendChild(nameHeader)
  cardInfo.appendChild(username)
  cardInfo.appendChild(location)
  cardInfo.appendChild(profile)
  cardInfo.appendChild(profileLink)
  cardInfo.appendChild(following)
  cardInfo.appendChild(followers)
  cardInfo.appendChild(bio)


  // print out the card treee
  console.log(card)
}
const cards = document.querySelector('.cards')
console.log(cards)
createMarkUp(cards)

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
