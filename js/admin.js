document.addEventListener("DOMContentLoaded", () => {
    const bookForm = document.getElementById("bookForm");
    const booksTableBody = document.querySelector("#booksTable tbody");

    let books = JSON.parse(localStorage.getItem("books")) || [];

    function renderBooks() {
        booksTableBody.innerHTML = "";
        books.forEach((book, index) => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${book.title}</td>
                <td>${book.author}</td>
                <td>${book.price} $</td>
                <td>
                    <button onclick="editBook(${index})">Edit</button>
                    <button onclick="deleteBook(${index})">delete</button>
                </td>
            `;
            booksTableBody.appendChild(row);
        });
        localStorage.setItem("books", JSON.stringify(books));
    }

    bookForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const title = document.getElementById("title").value.trim();
        const author = document.getElementById("author").value.trim();
        const price = document.getElementById("price").value.trim();

        books.push({ title, author, price });
        renderBooks();

        bookForm.reset();
    });

    window.deleteBook = (index) => {
        books.splice(index, 1);
        renderBooks();
    };

    window.editBook = (index) => {
        const book = books[index];
        document.getElementById("title").value = book.title;
        document.getElementById("author").value = book.author;
        document.getElementById("price").value = book.price;

        books.splice(index, 1);
        renderBooks();
    };

    renderBooks();
});
