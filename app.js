const allBtn = document.getElementsByClassName("allBtn");

let count = 12;

for (const btn of allBtn) {
  btn.addEventListener("click", function (e) {
    e.target.style.backgroundColor = "#1dd100";
    e.target.style.color = "white";

    const seatContainer = document.getElementById("seat");
    const seatCount = document.getElementById("seat-count");
    seatCount.innerText = seatContainer.childElementCount;
    const seatcountt = seatCount.innerText;

    if (seatContainer.childElementCount > 3) {
      return;
    }

    count -= 1;
    const busNumber = e.target.innerText;
    setInnerText("40-seat", count);

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
    console.log(convertPrice);

    const sum = convertPrice + parseInt(ticketPrice);
    setInnerText("total-price", sum);
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
  } else if (text == "couple 20") {
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
