let galleryThumbElements = [];
let galleryFocusedElement;

const selectThumb = (thumb, selected) => {
  if (selected) {
    if (thumb.classList.contains("selected")) {
      thumb.classList.remove("selected");
    }
  } else {
    thumb.classList.add("selected");
  }
};

const selectGalleryThumb = (event) => {
  selectedSrc = event.target.src;
  galleryFocusedElement.src = selectedSrc;
  galleryThumbElements.forEach((thumb) =>
    selectThumb(thumb, thumb.src !== selectedSrc)
  );
};

const addEventListeners = () => {
  galleryThumbElements.forEach((element) =>
    element.addEventListener("click", selectGalleryThumb)
  );
};

const loadDOMElements = () => {
  galleryThumbElements = [...document.getElementsByClassName("gallery-thumb")];
  galleryFocusedElement = document.getElementById("gallery-focused");
};

document.addEventListener("DOMContentLoaded", () => {
  loadDOMElements();
  addEventListeners();
});
