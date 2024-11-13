document.addEventListener("DOMContentLoaded", function () {
  // Select all the navbar links and the corresponding articles
  const navLinks = document.querySelectorAll(".navbar-link");
  const articles = document.querySelectorAll("article");

  // Function to remove active classes from all navbar links and articles
  function removeActiveClasses() {
    navLinks.forEach((link) => link.classList.remove("active"));
    articles.forEach((article) => article.classList.remove("active"));
  }

  // Event listener for each navbar link
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      // Remove active classes from everything
      removeActiveClasses();

      // Add the active class to the clicked navbar link
      link.classList.add("active");

      // Get the target page from the button's id
      const targetPage = link.id;

      // Add the active class to the corresponding article
      const targetArticle = document.querySelector(`article.${targetPage}`);
      if (targetArticle) {
        targetArticle.classList.add("active");
      }
    });
  });
});
