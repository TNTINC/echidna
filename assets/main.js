var timeline1 = anime.timeline();

timeline1
  .add({
    targets: "#design-header-shade",
    height: "5em",
    duration: 120,
    delay: 400,
    easing: "easeInExpo"
  })
  .add({
    targets: "#design-header-shade",
    width: 260,
    duration: 300,
    easing: "easeInOutExpo"
  })
  .add({
    targets: "#design-header",
    opacity: 1,
    duration: 1
  })
  .add({
    targets: "#design-header-shade",
    translateX: 260,
    duration: 300,
    width: 0,
    easing: "easeOutExpo"
  })
  .add({
    targets: "#design-definition-shade",
    height: 230,
    duration: 200,
    easing: "easeInExpo"
  })
  .add({
    targets: "#design-definition-shade",
    width: 400,
    duration: 200,
    easing: "easeOutExpo"
  })
  .add({
    targets: "#design-definition",
    opacity: 1,
    delay: 0,
    duration: 1
  })
  .add({
    targets: "#design-definition-shade",
    translateX: 400,
    width: 0,
    duration: 200,
    easing: "easeOutExpo"
  })
  .add({
    targets: "#design-art-li",
    translateY: 32,
    translateX: 104,
    fontSize: [1, "1.33em"],
    delay: 200,
    duration: 1000,
    easing: "easeOutExpo"
  })
  .add({
    targets: "#art-shade",
    width: 430,
    duration: 200,
    offset: "-=500",
    easing: "easeInExpo"
  })
  .add({
    targets: "#art-shade",
    height: 300,
    duration: 300,
    easing: "easeOutExpo"
  })
  .add({
    targets: "#design-art-li",
    opacity: 0,
    duration: 1
  })
  .add({
    targets: "#art",
    opacity: 1,
    duration: 1
  })
  .add({
    targets: "#art-shade",
    height: 0,
    translateY: 300,
    easing: "easeOutExpo"
  });

var underline = anime({
  targets: "#header-underline",
  width: 400,
  delay: 800,
  duration: 400,
  easing: "easeOutExpo"
});
