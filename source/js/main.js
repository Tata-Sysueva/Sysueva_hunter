const slides = document.querySelectorAll(".slider__container"),
      button = document.querySelectorAll(".slider__btn"),
      prev = document.getElementById("btn-prev"),
      next = document.getElementById("btn-next"),
      dots = document.querySelectorAll(".slider__dot");
      // form = document.querySelector(".feedback");
      // email = document.getElementById("email-user");
      // errorNote = document.querySelector(".feedback__note");

/*slider*/

let index = 0;

const activeSlide = (n) => {
  for (const slide of slides) {
    slide.classList.remove("slider__container--current");
  }
  slides[n].classList.add("slider__container--current");
};

const activeDot = (n) => {
  for (const dot of dots) {
    dot.classList.remove("slider__dot--current");
  }
  dots[n].classList.add("slider__dot--current");
};

const prepareCurrentSlide = (ind) => {
  activeSlide(ind);
  activeDot(ind);
};

const nextSlide = () => {
  if (index === slides.length - 1) {
    index = 0;
    prepareCurrentSlide(index);
  } else {
    index++;
    prepareCurrentSlide(index);
  }
};

const prevSlide = () => {
  if (index === 0) {
    index = slides.length - 1;
    prepareCurrentSlide(index);
    // button.disabled = true;
  } else {
    index--;
    prepareCurrentSlide(index);
    // button.disabled = false;
  }
};

dots.forEach((item, indexDot) => {
  item.addEventListener("click", () => {
    index = indexDot;
    prepareCurrentSlide(index);
  });
});

next.addEventListener("click", nextSlide);
prev.addEventListener("click", prevSlide);

// /*form*/
//
// form.addEventListener("submit", function (evt) {
//   if (!email.value) {
//     evt.preventDefault();
//     errorNote.classList.add("feedback__error-js");
//   }
// });
