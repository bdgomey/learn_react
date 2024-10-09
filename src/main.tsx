import React from 'react';
import ReactDOM from 'react-dom/client';
import './main.css';
import { books } from './books';
import Book from './Books';
import Title from './Title';


// root variable setting the entrypoint for react code
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

// BookList Component (Parent called in root)
const Booklist = () => {
  const getBook = (id) => {
    const book = books.find((book: any) => book.id === id);
    console.log(book);
  };
  return (
    <>
    <Title />
      <section className="booklist">
        {books.map((book, index): any => {
          return <Book {...book} key={book.id} getBook={getBook} number={index} />;
        })}
      </section>
    </>
  );
};

root.render(
  <React.StrictMode>
    <Booklist />
  </React.StrictMode>
);
