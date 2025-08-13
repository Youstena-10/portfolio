let cartItems = JSON.parse(localStorage.getItem("checkoutItems")) || [];


const userFristName = document.getElementById("fname");
const userLastName = document.getElementById("lname");
const town = document.getElementById("town");
const address = document.getElementById("address");
const country = document.getElementById("country");
const zipCode = document.getElementById("zipcode");
const phone = document.getElementById("phone");
const email = document.getElementById("email");
const note = document.getElementById("note");
const placeOrder = document.getElementById("placeOrder");

placeOrder.disabled = true;


const checkoutList = document.getElementById("checkout-items");


function renderCheckoutItems() {
    let subtotal = 0;
    checkoutList.innerHTML = "";

    cartItems.forEach(item => {
        const totalPrice = item.price * item.qty;
        subtotal += totalPrice;

        const li = document.createElement("li");
        li.className = "list-group-item d-flex justify-content-between";
        li.innerHTML = `${item.title} x${item.qty} <span>$${totalPrice.toFixed(2)}</span>`;
        checkoutList.appendChild(li);
    });

    const tax = subtotal * 0.028;
    const total = subtotal + tax - 10;

    document.getElementById("subtotal").textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById("total").textContent = `$${total.toFixed(2)}`;
}


function validateForm() {
    const fnameValid = /^[A-Za-z]{3,8}$/.test(userFristName.value);
    const lnameValid = /^[A-Za-z]{3,8}$/.test(userLastName.value);
    const noteValid = /^.{10,}$/.test(note.value) || note.value.trim() === "";
    const emailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email.value);
    const addressValid = /^[\w\s.,'-]{5,100}$/.test(address.value);
    const zipCodeValid = /^\d{5}(-\d{4})?$/.test(zipCode.value);
    const phoneValid = /^01[0125]{1}[0-9]{8}$/.test(phone.value);
    const townValid = /^[A-Za-z]+(?:[\s-][A-Za-z]+)*$/.test(town.value);
    const countryValid = country.value !== "";

    toggleError("fnameError", fnameValid, userFristName.value);
    toggleError("lnameError", lnameValid, userLastName.value);
    toggleError("noteError", noteValid, note.value);
    toggleError("emailError", emailValid, email.value);
    toggleError("addressError", addressValid, address.value);
    toggleError("zipcodeError", zipCodeValid, zipCode.value);
    toggleError("phoneError", phoneValid, phone.value);
    toggleError("townError", townValid, town.value);

    const isValid = (
        fnameValid && lnameValid && emailValid &&
        addressValid && zipCodeValid && phoneValid &&
        townValid && countryValid && noteValid
    );

    placeOrder.disabled = !isValid;
    return isValid;
}


function toggleError(errorId, isValid, inputValue) {
    const errorElement = document.getElementById(errorId);
    if (!errorElement) return;

    if (inputValue.trim() === "") {
        errorElement.classList.add("d-none");
    } else {
        errorElement.classList.toggle("d-none", isValid);
    }
}


function submitOrder() {
    if (!validateForm()) {
        // alert("Please fill all required fields correctly");
        return;
    }

    const userInfo = {
        firstName: userFristName.value,
        lastName: userLastName.value,
        address: address.value,
        town: town.value,
        country: country.value,
        zip: zipCode.value,
        phone: phone.value,
        email: email.value,
        note: note.value
    };

    const order = {
        user: userInfo,
        items: cartItems.map(item => ({
            title: item.title,
            price: item.price,
            qty: item.qty
        })),
        date: new Date().toLocaleString(),
        total: document.getElementById("total").textContent
    };

    let orders = JSON.parse(localStorage.getItem("orders")) || [];
    orders.push(order);
    localStorage.setItem("orders", JSON.stringify(orders));

    localStorage.removeItem("cartItems");
    localStorage.removeItem("checkoutItems");

    // alert("Order placed successfully!");
    window.location.href = "./orders.html";
}


[userFristName, userLastName, town, address, country, zipCode, phone, email, note].forEach(input => {
    input.addEventListener("input", validateForm);
});


placeOrder.addEventListener("click", submitOrder);

renderCheckoutItems();
