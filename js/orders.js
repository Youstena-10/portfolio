function displayOrders() {
  var orders = JSON.parse(localStorage.getItem("orders")) || [];
  var productRow = document.getElementById("productRow");

  productRow.innerHTML = "";

  orders.forEach((order, orderIndex) => {
    order.items.forEach((item, itemIndex) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${item.title}</td>
        <td>$${item.price.toFixed(2)}</td>
        <td>${item.qty}</td>
        <td>
          <button onclick="deleteOrder(${orderIndex}, ${itemIndex})" class="btn btn-danger">Delete</button>
        </td>
      `;
      productRow.appendChild(row);
    });
  });
}

function deleteOrder(orderIndex, itemIndex) {
  let orders = JSON.parse(localStorage.getItem("orders")) || [];
  
  orders[orderIndex].items.splice(itemIndex, 1); 
  
  
  if (orders[orderIndex].items.length === 0) {
    orders.splice(orderIndex, 1);
  }

  localStorage.setItem("orders", JSON.stringify(orders));
  displayOrders();
}


displayOrders();
