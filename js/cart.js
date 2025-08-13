var items = JSON.parse(localStorage.getItem("cartItems")) || [];

var cartTable = document.getElementById("cart-items");
var subtotalEl = document.getElementById("subtotal");
var taxEl = document.getElementById("tax");
var totalEl = document.getElementById("total");

function renderCart() {
    cartTable.innerHTML = "";
    var subtotal = 0;

    items.forEach((item, index) => {
        var totalPrice = item.price * item.qty;
        subtotal += totalPrice;

        var row = document.createElement("tr");
        row.innerHTML = `
          <td class="text-start">
            <strong>${item.title}</strong><br>
            <span class="text-muted small">${item.author}</span><br>
            <span class="text-muted small">ISBN ${item.isbn}</span>
          </td>
          <td>
            <div class="d-flex justify-content-center align-items-center gap-2">
              <button class="btn btn-sm btn-outline-secondary" onclick="changeQty(${index}, -1)">−</button>
              <span>${item.qty}</span>
              <button class="btn btn-sm btn-outline-secondary" onclick="changeQty(${index}, 1)">+</button>
            </div>
          </td>
          <td>$${item.price.toFixed(2)}</td>
          <td>$${totalPrice.toFixed(2)}</td>
          <td><button class="btn btn-sm" onclick="deleteItem(${index})"><i class="fa-solid fa-trash"></i></button></td>
        `;
        cartTable.appendChild(row);
    });

    var tax = subtotal * 0.028;
    var total = subtotal + tax;

    subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
    taxEl.textContent = `$${tax.toFixed(2)}`;
    totalEl.textContent = `$${total.toFixed(2)}`;
    localStorage.setItem("cartItems", JSON.stringify(items));
}

function changeQty(index, delta) {
    items[index].qty += delta;
    if (items[index].qty < 1) items[index].qty = 1;
    renderCart();
}

function deleteItem(index) {
    items.splice(index, 1);
    renderCart();
}

document.getElementById("checkoutBtn").addEventListener("click", function() {
    localStorage.setItem("checkoutItems", JSON.stringify(items));
    window.location.href = "./checkout.html";
});

renderCart();
