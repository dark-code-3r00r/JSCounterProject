    function $(selector) {
      return document.querySelector(selector);
    }

    let count = 1;
    setInterval(() => {
      if (count <= 999) {
        count++;
        $(".counter1").innerText = count;
      }
    }, 100);
    setInterval(() => {
      if (count <= 1999) {
        count++;
        $(".counter2").innerText = count;
      }
    }, 1);