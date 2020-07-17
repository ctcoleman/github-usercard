import axios from 'axios'
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
const gitUserURL = 'https://api.github.com/users/ctcoleman'
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

function createMarkUp({ login, name, avatar_url, location, html_url, followers, following, bio }) {
  
  // create the elements to make the tree
  const card = document.createElement('div')
  card.className = 'card'
  const cardImage = document.createElement('img')
  cardImage.src = avatar_url
  const cardInfo = document.createElement('div')
  cardInfo.className = 'card-info'
  const nameHeader = document.createElement('h3')
  nameHeader.className = ''
  const userName = document.createElement('p')
  userName.className = 'username'
  userName.textContent = `${login}`
  const userLocation = document.createElement('p')
  userLocation.textContent = `Location: ${location}`
  const userProfile = document.createElement('p')
  userProfile.textContent = `Profile:`
  const userProfileLink = document.createElement('a')
  userProfileLink.href = html_url
  userProfileLink.textContent = `${html_url}`
  const userFollowers = document.createElement('p')
  userFollowers.textContent = `Followers: ${followers}`
  const userFollowing = document.createElement('p')
  userFollowing.textContent = `Following: ${following}`
  const userBio = document.createElement('p')
  userBio.textContent = `Bio: ${bio}`
  
  
  // place the elements in the dom in there respective parent elements
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
  return card
}

const cardsContainer = document.querySelector('.cards')
cardsContainer.appendChild(createMarkUp(gitUserURL))

// axios.get(gitUserURL)

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
