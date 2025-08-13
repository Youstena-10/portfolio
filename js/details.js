function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

const rawTitle = getQueryParam('title');
const title = rawTitle ? decodeURIComponent(rawTitle).trim().toLowerCase() : "";

const books = JSON.parse(localStorage.getItem("books")) || [];
const book = books.find(b => b.title.trim().toLowerCase() === title);

if (book) {
    document.getElementById('bookImg').src = book.img.trim();
    document.getElementById('bookImg').alt = book.title;
    document.getElementById('bookTitle').textContent = book.title;
    document.getElementById('bookAuthor').textContent = book.author;
    document.getElementById('bookPrice').textContent = book.price;
    document.getElementById('bookLanguage').textContent = book.language;
    document.getElementById('bookPublisher').textContent = book.publisher;
    document.getElementById('bookCategory').textContent = book.category;
    document.getElementById('bookSummary').textContent = book.summary || "No summary available.";

    const buyBtn = document.getElementById('buyBtn');
    buyBtn.style.display = 'inline-block';
    buyBtn.onclick = () => {
        alert(`Thank you for buying "${book.title}"!`);
    };
} else {
    document.body.innerHTML = "<p class='text-center mt-5'>Book not found.</p>";
}
