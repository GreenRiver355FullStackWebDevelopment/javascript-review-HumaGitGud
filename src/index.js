// import calculateStarAverage from './logic.js'

//Do not change //////////////////////////////////
const reviews = [
  {
    username: "Rose",
    image: "./images/rose.png",
    star: 5,
    review: "Great coffee and ambiance",
  },
  {
    username: "butterfly2222",
    image: "./images/avatar2.png",
    star: 3,
    review: "Coffee was okay, took way to long to make.",
  },
  {
    username: "Sandy Tuna",
    image: "./images/avatar1.png",
    star: 1,
    review:
      "The coffee was great but the employees didn't let me stay past closing! ): Worst experience ever.",
  },
];
/////////////////////////////////////////////////////////////////////


//Your Code Below Here////
const renderReviews = () => {

  // grab .reviews container
  const reviewsContainer = document.querySelector(".reviews");

  // clear the reviews container before re-rendering to avoid rendering duplicate reviews
  reviewsContainer.innerHTML = "";

  // forEach review in reviews array
  reviews.forEach((review) => {
    // create div element with class name
    const div = document.createElement("div");
    div.className = "review_container";

    // create img element with src
    const img = document.createElement("img");
    img.src = review.image;
    
    // create inner div element
    const subDiv = document.createElement("div");

    // create p elements with review object property
    const pUser = document.createElement("p");
    pUser.innerText = review.username;
    const pStar = document.createElement("p");
    pStar.innerText = review.star;
    const pReview = document.createElement("p");
    pReview.innerText = review.review;
    
    // append p elements into inner div
    subDiv.appendChild(pUser);
    subDiv.appendChild(pStar);
    subDiv.appendChild(pReview);

    // append img and inner div in a outer div
    div.appendChild(img);
    div.appendChild(subDiv);

    // append outer div in a reviews container
    reviewsContainer.appendChild(div);
  });
}

renderReviews();

const submitReview = () => {
  // grab the form and add event listener with callback function
  const form = document.querySelector("form");
  form.addEventListener("submit", recordReview);
}

const recordReview = (event) => {
  // prevent page from reloading
  event.preventDefault();

  // grab form input values
  const username = document.querySelector("#username").value;
  const image = document.querySelector("#image").value;
  const star = Number(document.querySelector("#star").value);
  const reviewComment = document.querySelector("#review").value;

  // construct a new object with input values
  const newReview = {
    username: username,
    image: image,
    star: star,
    review: reviewComment,
  };

  // push into array
  reviews.push(newReview);
  
  // renderReviews upon submission
  renderReviews();
  // reset form areas
  form.reset();
}

submitReview();