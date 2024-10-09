import React from 'react';
import ReactDOM from 'react-dom/client';
import './main.css';
import { books } from './booksList';
import Book from './Books';
import Title from './Title';


// root variable setting the entrypoint for react code
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

// BookList Component (Parent called in root)
const Booklist = () => {
  const getBook = (id: number) => {
    const book = books.find((book: any) => book.id === id);
    console.log(book);
  };
  return (
    <>
    <Title />
      <section className="booklist">
        {books.map((book: any, index: number)=> {
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
