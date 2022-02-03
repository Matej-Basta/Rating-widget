import { RatingWidget } from "./rating-widget.js";

//waiting for the document to get ready
document.addEventListener("DOMContentLoaded", () => {
  const rating = new RatingWidget("Pulp Fiction");
  document.body.appendChild(rating.element);
  const rating2 = new RatingWidget("Shrek");
  document.body.appendChild(rating2.element);
  const rating3 = new RatingWidget("Popelka");
  document.body.appendChild(rating3.element);
  const rating4 = new RatingWidget("Spiderman");
  document.body.appendChild(rating4.element);
});
