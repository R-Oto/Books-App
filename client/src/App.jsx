import { useEffect, useState } from 'react';

function App() {
  const [book, setBook] = useState(null); // State to hold the fetched book data

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/books");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setBook(data); 
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <>
      {book ? (
        <div>{book.title}</div>
      ) : (
        <div>Loading...</div> 
      )}
    </>
  );
}

export default App;
