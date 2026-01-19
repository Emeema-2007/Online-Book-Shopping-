import "./Home.css";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const books = [
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    category: "Fiction",
    price: "399",
    rating: "⭐⭐⭐⭐",
    image: "https://m.media-amazon.com/images/I/71aFt4+OTOL.jpg",
    description: "A journey of self-discovery and dreams."
  },
  {
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J. K. Rowling",
    category: "Fiction",
    price: "450",
    rating: "⭐⭐⭐⭐⭐",
    image: "https://rukmini1.flixcart.com/image/1500/1500/xif0q/book/6/t/7/harry-potter-and-the-sorcerer-s-stone-book-1-original-imah9b3wjbvvq2wf.jpeg?q=70",
    description: "The magical beginning of Harry Potter."
  },
  {
    title: "The Hobbit",
    author: "J. R. R. Tolkien",
    category: "Fiction",
    price: "499",
    rating: "⭐⭐⭐⭐⭐",
    image: "https://m.media-amazon.com/images/I/91b0C2YNSrL.jpg",
    description: "A fantasy adventure before Lord of the Rings."
  },
  {
    title: "1984",
    author: "George Orwell",
    category: "Fiction",
    price: "299",
    rating: "⭐⭐⭐⭐",
    image: "https://m.media-amazon.com/images/I/71kxa1-0mfL.jpg",
    description: "A dystopian future under total surveillance."
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    category: "Fiction",
    price: "350",
    rating: "⭐⭐⭐⭐",
    image: "https://m.media-amazon.com/images/I/81af+MCATTL.jpg",
    description: "A tragic story of love and ambition."
  },
  {
    title: "Life of Pi",
    author: "Yann Martel",
    category: "Fiction",
    price: "399",
    rating: "⭐⭐⭐⭐",
    image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1389468727i/1226.jpg",
    description: "A boy stranded at sea with a tiger."
  },
  {
    title: "The Fault in Our Stars",
    author: "John Green",
    category: "Fiction",
    price: "360",
    rating: "⭐⭐⭐⭐",
    image: "https://m.media-amazon.com/images/I/81a4kCNuH+L.jpg",
    description: "A touching story of love and loss."
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    category: "Fiction",
    price: "280",
    rating: "⭐⭐⭐⭐⭐",
    image: "https://rukminim2.flixcart.com/image/480/640/xif0q/book/f/s/1/pride-prejudice-original-imagy32ephewfga2.jpeg?q=90",
    description: "Classic romance and social drama."
  },
  {
    title: "The Kite Runner",
    author: "Khaled Hosseini",
    category: "Fiction",
    price: "420",
    rating: "⭐⭐⭐⭐⭐",
    image: "https://m.media-amazon.com/images/I/81YXfTztoZL._AC_UF1000,1000_QL80_.jpg",
    description: "Friendship, guilt, and redemption."
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    category: "Fiction",
    price: "399",
    rating: "⭐⭐⭐⭐⭐",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnqQwMdw_eyS-ILfy_z_5rwXp3WZtcP48U4w&s",
    description: "Justice and morality in the Deep South."
  },
  /* ========== MORE FICTION BOOKS (ADDITIONAL 10) ========== */
{
  title: "The Lord of the Rings: The Fellowship of the Ring",
  author: "J. R. R. Tolkien",
  category: "Fiction",
  price: "599",
  rating: "⭐⭐⭐⭐⭐",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlolbQGWxMLY1zDvDMbaGOM-WZzeU88wLTaA&s",
  description: "An epic fantasy adventure in Middle-earth."
},
{
  title: "The Chronicles of Narnia",
  author: "C. S. Lewis",
  category: "Fiction",
  price: "499",
  rating: "⭐⭐⭐⭐⭐",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI8_3vOTtC8pZESsdqXA388p-UHHNOdmVj9Q&s",
  description: "A magical world full of adventure and wonder."
},
{
  title: "The Hunger Games",
  author: "Suzanne Collins",
  category: "Fiction",
  price: "399",
  rating: "⭐⭐⭐⭐",
  image: "https://www.suzannecollinsbooks.com/images/The-Hunger-Games-Movie-Tie-In-Edition.jpg",
  description: "A dystopian battle for survival."
},
{
  title: "Divergent",
  author: "Veronica Roth",
  category: "Fiction",
  price: "380",
  rating: "⭐⭐⭐⭐",
  image: "https://m.media-amazon.com/images/I/81-DFVziuwL._AC_UF1000,1000_QL80_.jpg",
  description: "A society divided by factions."
},
{
  title: "The Maze Runner",
  author: "James Dashner",
  category: "Fiction",
  price: "420",
  rating: "⭐⭐⭐⭐",
  image: "https://m.media-amazon.com/images/I/71wOTfg+U+L._AC_UF1000,1000_QL80_.jpg",
  description: "A group of teens trapped in a deadly maze."
},
{
  title: "Percy Jackson & The Lightning Thief",
  author: "Rick Riordan",
  category: "Fiction",
  price: "450",
  rating: "⭐⭐⭐⭐⭐",
  image: "https://m.media-amazon.com/images/I/81TnrnCKOML._AC_UF1000,1000_QL80_.jpg",
  description: "Greek mythology meets modern adventure."
},
{
  title: "The Book Thief",
  author: "Markus Zusak",
  category: "Fiction",
  price: "399",
  rating: "⭐⭐⭐⭐⭐",
  image: "https://m.media-amazon.com/images/I/91ndEtx1uWL._AC_UF1000,1000_QL80_.jpg",
  description: "A powerful story set during World War II."
},
{
  title: "A Song of Ice and Fire",
  author: "George R. R. Martin",
  category: "Fiction",
  price: "650",
  rating: "⭐⭐⭐⭐⭐",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_8FjOOnnx-IT7BVqesinjfmDviT3z0mM6iQ&s",
  description: "Politics, power, and dragons."
},
{
  title: "The Time Traveler's Wife",
  author: "Audrey Niffenegger",
  category: "Fiction",
  price: "370",
  rating: "⭐⭐⭐⭐",
  image: "https://rukmini1.flixcart.com/image/1500/1500/xif0q/book/u/i/g/the-time-traveler-s-wife-original-imahygvyuza3wwnz.jpeg?q=70",
  description: "A love story beyond time."
},
{
  title: "Shantaram",
  author: "Gregory David Roberts",
  category: "Fiction",
  price: "520",
  rating: "⭐⭐⭐⭐⭐",
  image: "https://m.media-amazon.com/images/I/81B2DvL4vDL._AC_UF1000,1000_QL80_.jpg",
  description: "An epic tale of love, loss, and redemption."
}
,

  /* ================= NON-FICTION ================= */
  {
    title: "Sapiens",
    author: "Yuval Noah Harari",
    category: "Non-Fiction",
    price: "550",
    rating: "⭐⭐⭐⭐⭐",
    image: "https://m.media-amazon.com/images/I/713jIoMO3UL.jpg",
    description: "A brief history of humankind."
  },
  {
    title: "Educated",
    author: "Tara Westover",
    category: "Non-Fiction",
    price: "480",
    rating: "⭐⭐⭐⭐",
    image: "https://m.media-amazon.com/images/I/81WojUxbbFL.jpg",
    description: "A memoir about education and resilience."
  },
  {
    title: "The Power of Habit",
    author: "Charles Duhigg",
    category: "Non-Fiction",
    price: "499",
    rating: "⭐⭐⭐⭐",
    image: "https://m.media-amazon.com/images/I/71aMS2VSfeL._UF1000,1000_QL80_.jpg",
    description: "Why habits exist and how to change them."
  },
  {
    title: "Homo Deus",
    author: "Yuval Noah Harari",
    category: "Non-Fiction",
    price: "599",
    rating: "⭐⭐⭐⭐",
    image: "https://m.media-amazon.com/images/I/71N6LbagzSL._AC_UF1000,1000_QL80_.jpg",
    description: "A look into the future of humanity."
  },
  {
    title: "The Art of War",
    author: "Sun Tzu",
    category: "Non-Fiction",
    price: "199",
    rating: "⭐⭐⭐⭐",
    image: "https://m.media-amazon.com/images/I/71MizulW5AL.jpg",
    description: "Ancient military strategy and wisdom."
  },
  {
    title: "Outliers",
    author: "Malcolm Gladwell",
    category: "Non-Fiction",
    price: "450",
    rating: "⭐⭐⭐⭐",
    image: "https://m.media-amazon.com/images/I/61sDFu75vAS.jpg",
    description: "The story of success and opportunity."
  },
  {
    title: "Factfulness",
    author: "Hans Rosling",
    category: "Non-Fiction",
    price: "499",
    rating: "⭐⭐⭐⭐⭐",
    image: "https://m.media-amazon.com/images/I/71jvD7BVJEL._UF1000,1000_QL80_.jpg",
    description: "Understanding the world with facts."
  },
  {
    title: "The Subtle Art of Not Giving a F*ck",
    author: "Mark Manson",
    category: "Non-Fiction",
    price: "399",
    rating: "⭐⭐⭐⭐",
    image: "https://m.media-amazon.com/images/I/71QKQ9mwV7L.jpg",
    description: "A counterintuitive approach to living."
  },
  {
    title: "Guns, Germs, and Steel",
    author: "Jared Diamond",
    category: "Non-Fiction",
    price: "620",
    rating: "⭐⭐⭐⭐",
    image: "https://m.media-amazon.com/images/I/61V8g4GgqdL._AC_UF1000,1000_QL80_.jpg",
    description: "Why civilizations developed differently."
  },
  {
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    category: "Non-Fiction",
    price: "580",
    rating: "⭐⭐⭐⭐⭐",
    image: "https://upload.wikimedia.org/wikipedia/en/c/c1/Thinking%2C_Fast_and_Slow.jpg",
    description: "How we think and make decisions."
  },

  /* ================= SELF-HELP ================= */
  {
    title: "Atomic Habits",
    author: "James Clear",
    category: "Self-Help",
    price: "499",
    rating: "⭐⭐⭐⭐⭐",
    image: "https://m.media-amazon.com/images/I/91bYsX41DVL.jpg",
    description: "Build good habits and break bad ones."
  },
  {
    title: "Think Like a Monk",
    author: "Jay Shetty",
    category: "Self-Help",
    price: "520",
    rating: "⭐⭐⭐⭐",
    image: "https://m.media-amazon.com/images/I/81s6DUyQCZL.jpg",
    description: "Train your mind for peace and purpose."
  },
  {
    title: "Ikigai",
    author: "Héctor García",
    category: "Self-Help",
    price: "350",
    rating: "⭐⭐⭐⭐",
    image: "https://m.media-amazon.com/images/I/814L+vq01mL.jpg",
    description: "The Japanese secret to happiness."
  },
  {
    title: "Deep Work",
    author: "Cal Newport",
    category: "Self-Help",
    price: "540",
    rating: "⭐⭐⭐⭐",
    image: "https://m.media-amazon.com/images/I/71din4TLubL._UF1000,1000_QL80_.jpg",
    description: "Rules for focused success."
  },
  {
    title: "Can't Hurt Me",
    author: "David Goggins",
    category: "Self-Help",
    price: "599",
    rating: "⭐⭐⭐⭐⭐",
    image: "https://m.media-amazon.com/images/I/81gTRv2HXrL.jpg",
    description: "Master your mind and body."
  },
  {
    title: "The 7 Habits of Highly Effective People",
    author: "Stephen Covey",
    category: "Self-Help",
    price: "450",
    rating: "⭐⭐⭐⭐⭐",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5utxnHDhM4JFTo7hoFC2RBbsIegArwtqCiA&s",
    description: "Powerful lessons in personal change."
  },
  {
    title: "Mindset",
    author: "Carol S. Dweck",
    category: "Self-Help",
    price: "420",
    rating: "⭐⭐⭐⭐",
    image: "https://m.media-amazon.com/images/I/71wEDMAAnOL._AC_UF1000,1000_QL80_.jpg",
    description: "The psychology of success."
  },
  {
    title: "You Are a Badass",
    author: "Jen Sincero",
    category: "Self-Help",
    price: "399",
    rating: "⭐⭐⭐⭐",
    image: "https://m.media-amazon.com/images/I/71nse8cVsDL._UF1000,1000_QL80_.jpg",
    description: "Stop doubting your greatness."
  },
  {
    title: "How to Win Friends & Influence People",
    author: "Dale Carnegie",
    category: "Self-Help",
    price: "299",
    rating: "⭐⭐⭐⭐⭐",
    image: "https://m.media-amazon.com/images/I/618XGVFYlwL._AC_UF1000,1000_QL80_.jpg",
    description: "Improve communication and relationships."
  },
  {
    title: "The Power of Now",
    author: "Eckhart Tolle",
    category: "Self-Help",
    price: "499",
    rating: "⭐⭐⭐⭐",
    image: "https://m.media-amazon.com/images/I/61Ij8nLooNL.jpg",
    description: "Live in the present moment."
  },

  /* ================= BIOGRAPHY ================= */
  {
    title: "Wings of Fire",
    author: "A. P. J. Abdul Kalam",
    category: "Biography",
    price: "299",
    rating: "⭐⭐⭐⭐⭐",
    image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1588286863i/634583.jpg",
    description: "An inspiring autobiography."
  },
  {
    title: "The Diary of a Young Girl",
    author: "Anne Frank",
    category: "Biography",
    price: "350",
    rating: "⭐⭐⭐⭐⭐",
    image: "https://m.media-amazon.com/images/I/51Eyjz65gyL._AC_UF1000,1000_QL80_.jpg",
    description: "A powerful account of life in hiding."
  },
  {
    title: "Long Walk to Freedom",
    author: "Nelson Mandela",
    category: "Biography",
    price: "550",
    rating: "⭐⭐⭐⭐⭐",
    image: "https://m.media-amazon.com/images/I/91jMa+ndqrL._AC_UF1000,1000_QL80_.jpg",
    description: "The journey of a freedom fighter."
  },
  {
    title: "Steve Jobs",
    author: "Walter Isaacson",
    category: "Biography",
    price: "599",
    rating: "⭐⭐⭐⭐",
    image: "https://m.media-amazon.com/images/I/81VStYnDGrL.jpg",
    description: "The life of Apple's co-founder."
  },
  {
    title: "Becoming",
    author: "Michelle Obama",
    category: "Biography",
    price: "620",
    rating: "⭐⭐⭐⭐",
    image: "https://m.media-amazon.com/images/I/81h2gWPTYJL.jpg",
    description: "A deeply personal memoir."
  },
  {
    title: "Elon Musk",
    author: "Ashlee Vance",
    category: "Biography",
    price: "580",
    rating: "⭐⭐⭐⭐",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLrt0nx4U6P5MFKF_K-8-J5Kjj6PfeGMIT2Q&s",
    description: "The entrepreneur behind Tesla."
  },
  {
    title: "I Am Malala",
    author: "Malala Yousafzai",
    category: "Biography",
    price: "420",
    rating: "⭐⭐⭐⭐⭐",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwdCGXPLjV3M-vhLi1la1rRicIIJbZ0xNd0Q&s",
    description: "The story of a girl who stood up."
  },
  {
    title: "The Story of My Experiments with Truth",
    author: "Mahatma Gandhi",
    category: "Biography",
    price: "250",
    rating: "⭐⭐⭐⭐⭐",
    image: "https://www.maplepress.co.in/cdn/shop/products/9789380816807_700x700.jpg?v=1624808748",
    description: "Autobiography of Mahatma Gandhi."
  },
  {
    title: "Playing It My Way",
    author: "Sachin Tendulkar",
    category: "Biography",
    price: "499",
    rating: "⭐⭐⭐⭐⭐",
    image: "https://m.media-amazon.com/images/I/81RCmXjlMSL._UF1000,1000_QL80_.jpg",
    description: "The life of a cricket legend."
  },
  {
    title: "A Promised Land",
    author: "Barack Obama",
    category: "Biography",
    price: "650",
    rating: "⭐⭐⭐⭐",
    image: "https://m.media-amazon.com/images/I/91+NBrXG-PL._AC_UF1000,1000_QL80_.jpg",
    description: "Memoir of a former US President."
  }
];
function Home() {
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedPrice, setSelectedPrice] = useState("All");
  const [selectedRating, setSelectedRating] = useState("All");

  const [addedBook, setAddedBook] = useState(null);

  const filteredBooks = books
    .filter((book) => {
      const search = searchTerm.toLowerCase();
      return (
        book.title.toLowerCase().includes(search) ||
        book.author.toLowerCase().includes(search) ||
        book.category.toLowerCase().includes(search)
      );
    })
    .filter((book) => selectedCategory === "All" || book.category === selectedCategory)
    .filter((book) => {
      if (selectedPrice === "All") return true;
      if (selectedPrice === "Low") return book.price < 400;
      if (selectedPrice === "Medium") return book.price >= 400 && book.price <= 500;
      if (selectedPrice === "High") return book.price > 500;
      return true;
    })
    .filter((book) => {
      if (selectedRating === "All") return true;
      return book.rating.length >= parseInt(selectedRating);
    });

  return (
    <div className="home-container">
      <h2>📚 Online Book Store</h2>

      <button className="cart-btn" onClick={() => navigate("/checkout")}>
        🛒 Go to Cart
      </button>

      <div className="filters-container">
        <input
          type="text"
          placeholder="Search by name, author, or category"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />

        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="filter-select"
        >
          <option value="All">All Categories</option>
          <option value="Fiction">Fiction</option>
          <option value="Non-Fiction">Non-Fiction</option>
          <option value="Self-Help">Self-Help</option>
          <option value="Biography">Biography</option>
        </select>

        <select
          value={selectedPrice}
          onChange={(e) => setSelectedPrice(e.target.value)}
          className="filter-select"
        >
          <option value="All">All Prices</option>
          <option value="Low">Below ₹400</option>
          <option value="Medium">₹400 - ₹500</option>
          <option value="High">Above ₹500</option>
        </select>

        <select
          value={selectedRating}
          onChange={(e) => setSelectedRating(e.target.value)}
          className="filter-select"
        >
          <option value="All">All Ratings</option>
          <option value="4">⭐⭐⭐⭐ & Above</option>
          <option value="5">⭐⭐⭐⭐⭐</option>
        </select>
      </div>

      {addedBook && (
        <div className="cart-notification">
          ✅ "{addedBook}" added to cart!
        </div>
      )}


      <div className="book-grid">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book, index) => (
            <div key={index} className="book-card">
              <img src={book.image} alt={book.title} />
              <h3>{book.title}</h3>
              <p>{book.author}</p>
              <p>₹{book.price}</p>
              <p>{book.rating}</p>
              <button
                onClick={() => {
                  addToCart(book);
                  setAddedBook(book.title);
                  setTimeout(() => setAddedBook(null), 1500);
                }}
              >
                Add to Cart
              </button>
            </div>
          ))
        ) : (
          <p>No books found 😔</p>
        )}
      </div>
    </div>
  );
}

export default Home;
