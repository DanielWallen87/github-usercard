/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

// Moving to bottom for ease of access

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

function userCard(data){
  let newCard = document.createElement('div');
  newCard.classList.add('card');
  
  // creates new div and applies the class name "card"

  let newImage = document.createElement('img');
  newImage.src = data.avatar_url;

  // creates new image and provides the source URL from the API's data object

  let cardInfo = document.createElement('div');
  cardInfo.classList.add('card-info');

  // creates new div, which serves as the container for the profile's text elements, and gives it the card-info class

  let newName = document.createElement('h3');
  newName.classList.add('name');
  newName.textContent = data.name;

  // This element and the six below it pass the API's data into the textContent field along with any explanatory text

  let newUsername = document.createElement('p');
  newUsername.classList.add('username');
  newUsername.textContent = data.login;

  let newLocation = document.createElement('p');
  newLocation.textContent = "Location: " + data.location;

  let newProfile = document.createElement('p');
  newProfile.textContent = "Profile: " + data.html_url;

  let newFollowers = document.createElement('p');
  newFollowers.textContent = "Followers: " + data.followers;

  let newFollowing = document.createElement('p');
  newFollowing.textContent = "Following: " + data.following;

  let newBio = document.createElement('p');
  newBio.textContent = "Bio: " + data.bio;
  
  // Below, elements are attached to their rightful parent (newCard only gets the image and text's parent container)
  // All the text info children receive the parent cardInfo, which was created for the specific purpose of housing them

  newCard.append(newImage);
  newCard.append(cardInfo);
  cardInfo.append(newName); 
  cardInfo.append(newUsername); 
  cardInfo.append(newLocation); 
  cardInfo.append(newProfile);
  cardInfo.append(newFollowers); 
  cardInfo.append(newFollowing); 
  cardInfo.append(newBio);

  // "Cards" is the container on which everything we've created in this component shall be attached
  
  const cards = document.querySelector('.cards');
  cards.appendChild(newCard);

  return newCard // "newCard" is the variable that contains a profile's information
}

axios.get('https://api.github.com/users/DanielWallen87') // get all the info attached to my GitHub profile via their API
.then((response) => { // Then do some things with the response
  console.log(response);
  userCard(response.data); // If response was successful, parse the data through the userCard function (create a profile)
})
  
  .catch((err) => { // Catch any weird errors or bugs that might happen
    console.log(err) // Print the specifics in the console so I can deal with it
  })


/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = ['SGonzalez44', 'brandonharris177', 'juarezfrench', 'deegrams221', 'AceMouty'];

followersArray.forEach(follower => {
  axios.get('https://api.github.com/users/' + follower)
  .then((response) => {
    console.log(response);
    userCard(response.data);
  })
})
  
  .catch((err) => {
    console.log(err)
  })

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
