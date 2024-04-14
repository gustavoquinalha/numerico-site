new TypeIt("#element", {
  speed: 400,
  startDelay: 1000,
  loop: true
})
  .type("numerico", { delay: 400 })
  .pause(400)
  .delete(1)
  .pause(400)
  .type("0", { delay: 400 })
  .pause(400)
  .delete(1)
  .pause(400)
  .type("*", { delay: 400 })
  .go();