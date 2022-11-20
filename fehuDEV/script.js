document.querySelectorAll(".collapsible").forEach(function(current) {

    let toggler = document.createElement("button");
    toggler.className = "toggler";
    current.appendChild(toggler);

        toggler.innerHTML ="Show more reviews"

    toggler.addEventListener("click", function(e) {
      current.classList.toggle("open");
    }, false);

  });