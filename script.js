const febHolidays = [
    "Dear TASHEEN,",
    "First of all, I love you❤️",
    "You're my everything",
    "You are my CRUSH",
    "And of course...",
    "My future wife🤭",
    "I will always be there for u ",
    "No matter how far we are🥰",
    "You're the prettiest, cutest, funniest,",
    "sweetest girl alive.",
    "In one word, you're just best girl i know.😍",
    "I'm the happiest man alive🥰",
    "I'm so grateful I met you❤️",
    "I'll always do my best to keep you happy🥺",
    "You are the most special person in my life🥰",
    "I don't want to lose you",
    "And trust me I dont want anyone else",
    "There's no one i know better than you❤️",
    "You're the best Tasheen!!",
    "Or should I say, mo gro coco d'amour que j'adore a la folie XD",
    "means my big love that I adore madly",
    "Wow Time flies, we've already been together for a months",
    "but hamne hi late confess kara😅😅",
    "but ukw it made me realised how important you are in my life❤️",
    "This for you,",
    "To my love",
    "to doremon ",
    "to sand but uk me sand lover hun🤣❤️",
    "But anyways, i reallly love u my ms",
    "You're the love of my life,",
    "Your ramiz❤️"
  ];
  const ulEl = document.querySelector("ul");
  const d = new Date();
  let daynumber = d.getMonth() == 1 ? d.getDate() - 1 : 0;
  let activeIndex = daynumber;
  const rotate = -360 / febHolidays.length;
  init();
  function init() {
    febHolidays.forEach((holiday, idx) => {
      const liEl = document.createElement("li");
      liEl.style.setProperty("--day_idx", idx);
      liEl.innerHTML = `<time datetime="2022-02-${idx + 1}">${
        idx + 1
      }</time><span>${holiday}</span>`;
      ulEl.append(liEl);
    });
    ulEl.style.setProperty("--rotateDegrees", rotate);
    adjustDay(0);
  }
  function adjustDay(nr) {
    daynumber += nr;
    ulEl.style.setProperty("--currentDay", daynumber);
    const activeEl = document.querySelector("li.active");
    if (activeEl) activeEl.classList.remove("active");
    activeIndex = (activeIndex + nr + febHolidays.length) % febHolidays.length;
    const newActiveEl = document.querySelector(
      `li:nth-child(${activeIndex + 1})`
    );
    document.body.style.backgroundColor = window.getComputedStyle(
      newActiveEl
    ).backgroundColor;
    newActiveEl.classList.add("active");
  }
  window.addEventListener("keydown", (e) => {
    switch (e.key) {
      case "ArrowUp":
        adjustDay(-1);
        break;
      case "ArrowDown":
        adjustDay(1);
        break;
      default:
        return;
    }
  });
  