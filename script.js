let sum = 0;

fetch("./data.json")
  .then((res) => res.json())
  .then((data) => {
    data.map((item) => {
      let value = +document.querySelector("[data-" + item.category + "]")
        .innerHTML;
      let el = document.querySelector("[data-" + item.category + "]");
      function incrementValue() {
        if (item.score === value) {
          value--;
          clearInterval(cancelValue);
          let val = +document.querySelector("[data-Result]").innerHTML;
          let elem = document.querySelector("[data-Result]");
          function incrementResult() {
            if (val === Math.round(sum / 4)) {
              val--;
              clearInterval(cancelResult);
              document.querySelector("[data-Result]").innerHTML =
                Math.round(val);
            }
            val++;
            elem.innerText = val;
          }
          let cancelResult = setInterval(incrementResult, 50);
        }
        value++;
        el.innerText = value;
      }
      let cancelValue = setInterval(incrementValue, 50);
      sum += item.score;
    });
  })
  .then(() => {});
