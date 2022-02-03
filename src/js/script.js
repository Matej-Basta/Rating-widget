import { RatingWidget } from "./rating-widget.js";

//waiting for the document to get ready
document.addEventListener("DOMContentLoaded", () => {
  //inserting several widgets
  const rating = new RatingWidget("Pulp Fiction");
  document.body.appendChild(rating.element);
  const rating2 = new RatingWidget("Shrek");
  document.body.appendChild(rating2.element);
  const rating3 = new RatingWidget("Popelka");
  document.body.appendChild(rating3.element);

  const button = document.querySelector(".post-button");
  button.addEventListener("click", () => {
    clearingData();
  });
});

const clearingData = async () => {
  const clearing = await fetch(
    "https://test-api.codingbootcamp.cz/api/55986825/ratings/clear",
    {
      method: "POST",
      body: {},
      headers: { "Content-Type": "application/json" },
    }
  );

  const clearingShow = await clearing.json();
  console.log(clearingShow);
};
