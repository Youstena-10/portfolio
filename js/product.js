function goToDetails(title) {
    window.location.href = `details.html?title=${encodeURIComponent(title)}`;
}

function addToCart(book, button) {
    const currentEmail = localStorage.getItem("currentUserEmail");

   
    if (!currentEmail) {
        // alert("يجب تسجيل الدخول لإضافة الكتب إلى السلة!");
        window.location.href = "./login.html"; 
        return;
    }

    let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

    let exists = cartItems.some(item => item.title === book.title);
    if (!exists) {
        cartItems.push({
            title: book.title,
            author: book.author,
            isbn: Date.now().toString(),
            price: parseFloat(book.price.replace('$', '')),
            qty: 1
        });
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }

    button.disabled = true;
    button.innerText = "Added";
}

const books = [
    {
        img: "./img/Book3.jpeg",
        title: "EYEcontact",
        author: "Cal Newport",
        price: "$30",
        language: "English",
        publisher: "Grand Central Publishing",
        category: "Technology",
        summary: "A guide to deep, focused work that leads to extraordinary results."
    },
    {
        img: "./img/Book2.jpeg",
        title: "Atomic Habits",
        author: "James Clear",
        price: "$25",
        language: "English",
        publisher: "Penguin Random House",
        category: "Technology",
        summary: "Practical strategies for building good habits and breaking bad ones."
    },
    {
        img: "./img/Book1.jpeg",
        title: "The Power of Now",
        author: "Eckhart Tolle",
        price: "$20",
        language: "English",
        publisher: "New World Library",
        category: "Technology",
        summary: "A spiritual guide to living in the present moment."
    },
    {
        img: "./img/Book10.jpeg",
        title: "INNER CHILD",
        author: "Cal Newport",
        price: "$30",
        language: "English",
        publisher: "Grand Central Publishing",
        category: "Science",
        summary: "A guide to deep, focused work that leads to extraordinary results."
    },
    {
        img: "./img/Book11.jpeg",
        title: "WHEN THERAPY DOSNT WORK",
        author: "James Clear",
        price: "$25",
        language: "English",
        publisher: "Penguin Random House",
        category: "Science",
        summary: "Practical strategies for building good habits and breaking bad ones."
    },
    {
        img: "./img/Book12.jpeg",
        title: "HOW TO SOLVE IT",
        author: "Eckhart Tolle",
        price: "$20",
        language: "English",
        publisher: "New World Library",
        category: "Science",
        summary: "A spiritual guide to living in the present moment."
    },
    {
        img: "./img/Book13.jpeg",
        title: "PRODUCTIVIY",
        author: "Cal Newport",
        price: "$30",
        language: "English",
        publisher: "Grand Central Publishing",
        category: "Fiction",
        summary: "A guide to deep, focused work that leads to extraordinary results."
    },
    {
        img: "./img/Book14.jpeg",
        title: "EDUCATED",
        author: "James Clear",
        price: "$25",
        language: "English",
        publisher: "Penguin Random House",
        category: "Fiction",
        summary: "Practical strategies for building good habits and breaking bad ones."
    },
    {
        img: "./img/Book9.jpeg",
        title: "THE ALTHMIST",
        author: "Eckhart Tolle",
        price: "$20",
        language: "English",
        publisher: "New World Library",
        category: "Fiction",
        summary: "A spiritual guide to living in the present moment."
    },
    {
        img: "./img/Book8.jpeg",
        title: "LIKE SHE OWNS PLACE",
        author: "Cal Newport",
        price: "$30",
        language: "English",
        publisher: "Grand Central Publishing",
        category: "History",
        summary: "A guide to deep, focused work that leads to extraordinary results."
    },
    {
        img: "./img/Book7.jpeg",
        title: "MIND MAGIC",
        author: "James Clear",
        price: "$25",
        language: "English",
        publisher: "Penguin Random House",
        category: "History",
        summary: "Practical strategies for building good habits and breaking bad ones."
    },
    {
        img: "./img/Book4.jpeg",
        title: "SHIFT",
        author: "Eckhart Tolle",
        price: "$20",
        language: "English",
        publisher: "New World Library",
        category: "History",
        summary: "A spiritual guide to living in the present moment."
    },
     {
        img: "./img/Book5.jpeg",
        title: "MIND MAGIC",
        author: "James Clear",
        price: "$25",
        language: "English",
        publisher: "Penguin Random House",
        category: "Psychology",
        summary: "Practical strategies for building good habits and breaking bad ones."
    }, {
        img: "./img/Book6.jpeg",
        title: "MIND MAGIC",
        author: "James Clear",
        price: "$25",
        language: "English",
        publisher: "Penguin Random House",
        category: "Psychology",
        summary: "Practical strategies for building good habits and breaking bad ones."
    }, {
        img: "./img/Book15.jpeg",
        title: "MIND MAGIC",
        author: "James Clear",
        price: "$25",
        language: "English",
        publisher: "Penguin Random House",
        category: "Psychology",
        summary: "Practical strategies for building good habits and breaking bad ones."
    }
];

localStorage.setItem("books", JSON.stringify(books));

const container = document.getElementById("booksContainer");
let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

const urlParams = new URLSearchParams(window.location.search);
const selectedCategory = urlParams.get('category');

let filteredBooks = books;
if (selectedCategory) {
    filteredBooks = books.filter(book => 
        book.category.toLowerCase() === selectedCategory.toLowerCase()
    );
}

filteredBooks.forEach(book => {
    let isInCart = cartItems.some(item => item.title === book.title);
    container.innerHTML += `
        <div class="col-md-4">
            <div class="card shadow-lg p-3">
                <img src="${book.img}" class="card-img-top" alt="${book.title}">
                <div class="card-body">
                    <h5 class="card-title">${book.title}</h5>
                    <h6 class="text-muted">by ${book.author}</h6>
                    <p>Price: ${book.price}</p>
                    <p>Language: ${book.language}</p>
                    <p>Publisher: ${book.publisher}</p>
                    <p>Category: ${book.category}</p>
                    <div class="d-flex gap-2">
                        <button class="btn btn-primary btn-sm" style="background-color:#a60dee;" onclick="goToDetails('${book.title}')">Details</button>
                        <button class="btn btn-success btn-sm" style="background-color:#6f42c1;" 
                            onclick='addToCart(${JSON.stringify(book)}, this)' 
                            ${isInCart ? "disabled" : ""}>
                            ${isInCart ? "Added" : "Add to cart"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
});




const searchInput = document.querySelector('.search-bar input');
const searchButton = document.querySelector('.search-bar button');


function displayBooks(booksToDisplay) {
    
    const cartItemsLocal = JSON.parse(localStorage.getItem("cartItems")) || [];

    container.innerHTML = "";
    booksToDisplay.forEach(book => {
        const isInCart = cartItemsLocal.some(item => item.title === book.title);
        container.innerHTML += `
            <div class="col-md-4">
                <div class="card shadow-lg p-3">
                    <img src="${book.img}" class="card-img-top" alt="${book.title}">
                    <div class="card-body">
                        <h5 class="card-title">${book.title}</h5>
                        <h6 class="text-muted">by ${book.author}</h6>
                        <p>Price: ${book.price}</p>
                        <p>Language: ${book.language}</p>
                        <p>Publisher: ${book.publisher}</p>
                        <p>Category: ${book.category}</p>
                        <div class="d-flex gap-2">
                            <button class="btn btn-primary btn-sm" style="background-color:#a60dee;" onclick="goToDetails('${book.title}')">Details</button>
                            <button class="btn btn-success btn-sm" style="background-color:#6f42c1;"
                                onclick='addToCart(${JSON.stringify(book)}, this)'
                                ${isInCart ? "disabled" : ""}>
                                ${isInCart ? "Added" : "Add to cart"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    });
}


function runSearch() {
    const q = (searchInput?.value || "").trim().toLowerCase();
    const result = q
        ? filteredBooks.filter(b => b.title.toLowerCase().includes(q))
        : filteredBooks; 
    displayBooks(result);
}


if (searchInput && searchButton) {
    searchButton.addEventListener("click", runSearch);
    searchInput.addEventListener("input", runSearch);
    searchInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            runSearch();
        }
    });
}
