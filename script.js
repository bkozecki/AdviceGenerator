const btn = document.querySelector(".btn");
const advNum = document.querySelector(".advice_id");
const adv = document.querySelector(".advice__text");

/// API

const adviceGen = function () {
  const request = fetch("https://api.adviceslip.com/advice").then((req) =>
    req.json().then((req) => {
      let { id } = req.slip;
      let { advice } = req.slip;
      advNum.innerHTML = `Advice #${id}`;
      adv.innerHTML = `"${advice}"`;
    })
  );
};

adviceGen();

btn.addEventListener("click", adviceGen);
