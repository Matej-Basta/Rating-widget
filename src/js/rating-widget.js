export class RatingWidget {
  constructor(name) {
    this.name = name;
    this.rating = null;
    this.element = document.createElement("div");
    this.createWidget();
  }

  createWidget() {
    this.element.className = "rating";
    this.element.innerHTML = `<h2>${this.name}</h2><div class="rating__value">3</div>
      <div class="rating__stars">
        <div class="rating__star rating__star--on"></div>
        <div class="rating__star rating__star--on"></div>
        <div class="rating__star rating__star--on"></div>
        <div class="rating__star"></div>
        <div class="rating__star"></div>
      </div>`;
    const stars = this.element.querySelectorAll(".rating__star");
    let textRating = this.element.querySelector(".rating__value");
    stars.forEach((star, index) => {
      star.addEventListener("click", (e) => {
        //removing the styling for all the stars
        stars.forEach((element) => {
          element.classList.remove("rating__star--on");
        });

        //getting the order
        this.rating = index + 1;
        //changing the text in the text
        textRating.textContent = this.rating;
        //adding the styling for every star with index lower than the order
        for (let i = 0; i < this.rating; i++) {
          stars[i].classList.add("rating__star--on");
        }
        postData(this.name, this.rating);
      });
    });
  }
}

const postData = async (name, rating) => {
  //the url of the API
  const url = "https://test-api.codingbootcamp.cz/api/55986825/ratings";
  const myData = {};

  myData["rating_subject"] = name;
  myData["rating_value"] = rating;

  const myResponse = await fetch(url, {
    method: "POST",
    body: JSON.stringify(myData),
    headers: { "Content-Type": "application/json" },
  });

  const myUsableResponse = await myResponse.json();
  console.log(myUsableResponse);
};
