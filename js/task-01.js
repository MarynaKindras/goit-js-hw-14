const categories = document.querySelectorAll("ul#categories li.item");

const numberOfCategories = categories.length;
console.log(`Number of categories: ${numberOfCategories}`);

categories.forEach((category) => {

  const categoryTitle = category.querySelector("h2").textContent;


  const numberOfElements = category.querySelectorAll("ul li").length;


  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${numberOfElements}`);
});
