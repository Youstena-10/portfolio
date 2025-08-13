 const books = [
            {
         img: "download (1).jpeg  ",


                title: "Deep Work",
                author: "Cal Newport",
                price: "$30",
                language: "English",
                publisher: "Grand Central Publishing",
                category: "Productivity"
            },
            {
                img: "Best book in the world.jpeg",
                title: "Atomic Habits",
                author: "James Clear",
                price: "$25",
                language: "English",
                publisher: "Penguin Random House",
                category: "Self-help"
            },
            {
                img: " 7 of Oprah's Favorite Super-Soulful Reads.jpeg",
                title: "The Power of Now",
                author: "Eckhart Tolle",
                price: "$20",
                language: "English",
                publisher: "New World Library",
                category: "Spirituality"
            },

            {img: "download (4).jpeg", 

                title: "Inner Child",
    author: "Unknown",
    price: "$15",
    language: "English",
    publisher: "Mindful Press",
    category: "Self-Help"
            },

{

    img: "Mind Magic - The Hermetic Library Blog.jpeg",
                title: "Mind Magic",
    author: "Unknown",
    price: "$18",
    language: "English",
    publisher: "Brainwave Publishing",
    category: "Psychology"



},
{img: "download (6).jpeg",

 title: "How to Solve It",
    author: "Unknown",
    price: "$17",
    language: "English",
    publisher: "Problem Solvers Press",
    category: "Education"


},
{


    img: "Like She Owns the Place (1).jpeg",

  title: "Like She Owns the Place",
    author: "Unknown",
    price: "$20",
    language: "English",
    publisher: "Confidence Books",
    category: "Motivational"

               
},
{
img: "Mastering Your Mind_ A step by step guide to conquering your fears and negative emotions so you can finally create peace and prosperity in your life.jpeg",
 title: "Mastering Your Mind",
    author: "Unknown",
    price: "$22",
    language: "English",
    publisher: "Focus Books",
    category: "Self-Improvement"



},
{


    img: "download (5).jpeg",
                title: "When Therapy Doesn't Work",
    author: "Unknown",
    price: "$18",
    language: "English",
    publisher: "Healing Press",
    category: "Mental Health"

},

{


    img: "download (8).jpeg  ",
               title: "Productivity is for Robots",
    author: "Unknown",
    price: "$16",
    language: "English",
    publisher: "Human Focus Publishing",
    category: "Self-Help"

},


  {
    img: "Educated (ebook), Tara Westover _ 9781473538641 _ Boeken _ bol.jpeg",
                  title: "Educated",
    author: "Tara Westover",
    price: "$25",
    language: "English",
    publisher: "Random House",
    category: "Memoir"
},



{
    img: "Find where is your real wealth.jpeg",
               
             title: "The Alchemist",
    author: "Paulo Coelho",
    price: "$20",
    language: "English",
    publisher: "HarperOne",
    category: "Fiction"
},
               {


    img: "Pain in the brain, climate racism, and quantum cusp_ Books in brief.jpeg",
                title: "How Confidence Works",
    author: "Unknown",
    price: "$19",
    language: "English",
    publisher: "Confidence Books",
    category: "Self-Improvement"
},

{



    
    img:"Sarah McKay.jpeg",
                 title: "The Woman's Brain Book",
    author: "Unknown",
    price: "$21",
    language: "English",
    publisher: "Neuroscience Press",
    category: "Health"
},
{

    img: "Shift_ Managing Your Emotions--So They Don't Manage You.jpeg",
               title: "Shift",
    author: "Unknown",
    price: "$17",
    language: "English",
    publisher: "Change Publishers",
    category: "Motivation"
},




        ];



const container = document.getElementById("booksContainer");

    
        books.forEach(book => {
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
                                <button class="btn btn-primary btn-sm">Details</button>
                                <button class="btn btn-success btn-sm">Buy</button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            
             bookList.appendChild(card);
        });