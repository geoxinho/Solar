function scrollAppear() {
  let cardServices = document.querySelectorAll(".card-service");
  cardServices.forEach((cardService) => {
    let introPosition = cardService.getBoundingClientRect().top;
    let screenPosition = window.innerHeight / 1.5;

    if (introPosition < screenPosition) {
      cardService.classList.add("intro-appear");
    }
  });
}

scrollAppear();

window.addEventListener("scroll", scrollAppear);
