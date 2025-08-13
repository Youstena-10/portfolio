

const books = [
    
    {img: "./img_book/download (1).jpeg  " ,title: "Deep Work",author: "Cal Newport",price: "$30",language: "English", publisher: "Grand Central Publishing", category: "Productivity"},
            {
                img: "./img_book/Best book in the world.jpeg",
                title: "Atomic Habits",
                author: "James Clear",
                price: "$25",
                language: "English",
                publisher: "Penguin Random House",
                category: "Self-help"
            },
            {
                img: " ./img_book/7 of Oprah's Favorite Super-Soulful Reads.jpeg",
                title: "The Power of Now",
                author: "Eckhart Tolle",
                price: "$20",
                language: "English",
                publisher: "New World Library",
                category: "Spirituality"
            },

            {img: "./img_book/download (4).jpeg", 

                title: "Inner Child",
    author: "William Shakespeare",
    price: "$15",
    language: "English",
    publisher: "Mindful Press",
    category: "Self-Help"
            },

{

    img: "./img_book/Mind Magic - The Hermetic Library Blog.jpeg",
                title: "Mind Magic",
    author: "George Orwell",
    price: "$18",
    language: "English",
    publisher: "Brainwave Publishing",
    category: "Psychology"



},
{img: "./img_book/download (6).jpeg",

 title: "How to Solve It",
    author: "Malk twain",
    price: "$17",
    language: "English",
    publisher: "Problem Solvers Press",
    category: "Education"


},
{


    img: "./img_book/Like She Owns the Place (1).jpeg",

  title: "Like She Owns the Place",
    author: "j.k Rowling",
    price: "$20",
    language: "English",
    publisher: "Confidence Books",
    category: "Motivational"

               
},
{
img: "./img_book/Mastering Your Mind_ A step by step guide to conquering your fears and negative emotions so you can finally create peace and prosperity in your life.jpeg",
 title: "Mastering Your Mind",
    author: "oscar wilde",
    price: "$22",
    language: "English",
    publisher: "Focus Books",
    category: "Self-Improvement"



},
{


    img: "./img_book/download (5).jpeg",
                title: "When Therapy Doesn't Work",
    author: "jane Austen",
    price: "$18",
    language: "English",
    publisher: "Healing Press",
    category: "Mental Health"

},

{


    img: "./img_book/download (8).jpeg  ",
               title: "Productivity is for Robots",
    author: "virginia woolf",
    price: "$16",
    language: "English",
    publisher: "Human Focus Publishing",
    category: "Self-Help"

},


  {
    img: "./img_book/Educated (ebook), Tara Westover _ 9781473538641 _ Boeken _ bol.jpeg",
                  title: "Educated",
    author: "Tara Westover",
    price: "$25",
    language: "English",
    publisher: "Random House",
    category: "Memoir"
},



{
    img: "./img_book/Find where is your real wealth.jpeg",
               
             title: "The Alchemist",
    author: "Paulo Coelho",
    price: "$20",
    language: "English",
    publisher: "HarperOne",
    category: "Fiction"
},
               {


    img: "./img_book/Pain in the brain, climate racism, and quantum cusp_ Books in brief.jpeg",
                title: "How Confidence Works",
    author: "oscar wilde",
    price: "$19",
    language: "English",
    publisher: "Confidence Books",
    category: "Self-Improvement"
},

{



    
    img:"./img_book/Sarah McKay.jpeg",
                 title: "The Woman's Brain Book",
    author: "Agathe Christie",
    price: "$21",
    language: "English",
    publisher: "Neuroscience Press",
    category: "Health"
},
{

    img: "./img_book/Shift_ Managing Your Emotions--So They Don't Manage You.jpeg",
               title: "Shift",
    author: "Arthur conan doyle",
    price: "$17",
    language: "English",
    publisher: "Change Publishers",
    category: "Motivation"
},




        ];
 

function renderCarousel() {
    const carouselInner = document.getElementById('carouselInner');
    carouselInner.innerHTML = '';

    for (let i = 0; i < books.length; i += 4) {
        const isActive = i === 0 ? 'active' : '';
        const slide = document.createElement('div');
        slide.className = `carousel-item ${isActive}`;
        
        const row = document.createElement('div');
        row.className = 'row justify-content-center';
        
        books.slice(i, i + 4).forEach(book => {
            const col = document.createElement('div');
            col.className = 'col-md-3';
            col.innerHTML = `
                <div class="book-card">
                    <img src="${book.img}"  class="card-img-top" 
                 style="width:200px; height:200px; border-radius:9px; object-fit:cover;" 
                 alt="">
                    <div class="book-title">${book.title}</div>
                    <div class="book-author">${book.author}</div>
                </div>
            `;
            row.appendChild(col);
        });

        slide.appendChild(row);
        carouselInner.appendChild(slide);
    }
}

renderCarousel();

function viewCategory(category) {
    window.location.href = `product.html?category=${encodeURIComponent(category)}`;
}