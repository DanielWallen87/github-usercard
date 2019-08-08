/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

axios.get('https://api.github.com/users/DanielWallen87')
.then((response) => {
  console.log(response);
});

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

function userCard(data){
  let newCard = document.createElement('div');
  newCard.classList.add('card');
  
  let newImage = document.createElement('img');
  newImage.classList.add('card');
  newImage.src = data.avatar_url;

  let newName = document.createElement('h3');
  newName.classList.add('card');
  newName.classList.add('name');
  newName.textContent = 

  let newUsername = document.createElement('p');
  newUsername.classList.add('card');
  newUsername.classList.add('username');

  let newLocation = document.createElement('p');
  newLocation.classList.add('card');

  let newProfile = document.createElement('a');
  newProfile.classList.add('card');

  let newFollowers = document.createElement('p');
  newFollowers.classList.add('card');

  let newFollowing = document.createElement('p');
  newFollowing.classList.add('card');

  let newBio = document.createElement('p');
  newBio.classList.add('card');
  
  newCard.appendChild(newImage, newName, newUsername, newLocation, newProfile, newFollowers, newFollowing, newBio);
  
  return newCard
}

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

let entryPoint = document.querySelector('cards');

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

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

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
