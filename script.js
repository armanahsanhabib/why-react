// Counter1

let likeNumber = 0;
let dislikeNumber = 0;

const like = document.querySelector("#like");
const dislike = document.querySelector("#dislike");

const displayLike = document.querySelector("#display-like");
const displayDisLike = document.querySelector("#display-dislike");

like.addEventListener("click", () => {
    likeNumber++;
    displayLike.textContent = likeNumber;
})

dislike.addEventListener("click", () => {
    dislikeNumber++;
    displayDisLike.textContent = dislikeNumber;
})

