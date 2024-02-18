const allBtn = document.getElementsByClassName("allBtn");

let count = 20;
let count2 = 0;

for (const btn of allBtn) {
  btn.addEventListener("click", function (e) {
    const seatCount = document.getElementById("seat-count");
    seatCount.classList.remove("hidden");
    count2 += 1;
    seatCount.innerText = count2;

    const seatContainer = document.getElementById("seat");
    if (seatContainer.childElementCount > 3) {
      return;
    }
    if (seatContainer.childElementCount < 4) {
      e.target.style.backgroundColor = "#1dd100";
      e.target.style.color = "white";
    }

    count -= 1;
    const busNumber = e.target.innerText;
    setInnerText("20-seat", count);

    const p = document.createElement("p");
    seatContainer.appendChild(p);

    p.innerText = busNumber;
    const ticketPrice = document.getElementById("ticket-price").innerText;
    const h4 = document.createElement("h4");
    price.appendChild(h4);
    h4.innerText = ticketPrice;

    const classContent = document.getElementById("economy").innerText;

    const p2 = document.createElement("p");
    classes.appendChild(p2);
    p2.innerText = classContent;

    const totalPrice = document.getElementById("total-price").innerText;
    const convertPrice = parseInt(totalPrice);

    const totalTicketPrice = convertPrice + parseInt(ticketPrice);
    setInnerText("total-price", totalTicketPrice);
    setInnerText("grand-total", totalTicketPrice);
    const discount = totalTicketPrice * 0.15;
    const grand = document.getElementById("grand-total");

    document
      .getElementById("coupon-button")
      .addEventListener("click", function () {
        grand.innerText = totalTicketPrice - discount;
      });
  });
}

function setInnerText(id, value) {
  document.getElementById(id).innerText = value;
}
document.getElementById("input-text").addEventListener("keyup", function (e) {
  const text = e.target.value;
  const deleteButton = document.getElementById("coupon-button");
  if (text == "NEW15") {
    deleteButton.removeAttribute("disabled");
  } else if (text == "Couple 20") {
    deleteButton.removeAttribute("disabled");
  } else {
    deleteButton.setAttribute("disabled", true);
  }
});

document.getElementById("coupon-button").addEventListener("click", function () {
  const couponSection = document.getElementById("coupon-section");

  couponSection.style.display = "none";
});

document.getElementById("next-button").addEventListener("click", function () {
  const fullSection = document.getElementById("full-section");
  fullSection.classList.add("hidden");
  const modal = document.getElementById("modal");
  modal.classList.remove("hidden");
});
document.getElementById("continue-btn").addEventListener("click", function () {
  const fullSection = document.getElementById("full-section");
  fullSection.classList.remove("hidden");
  const modal = document.getElementById("modal");
  modal.classList.add("hidden");
});
