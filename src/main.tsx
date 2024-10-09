import React from "react";
import ReactDOM from "react-dom/client";
import "./main.css";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
const books = [
  {
    title: "The Ultimate Docker Container Book",
    author: "Gabriel N. Schenker",
    img: "https://m.media-amazon.com/images/I/61-V3BqLggL._SY466_.jpg",
    id: 1,
  },
  {
    title: "The Kubernetes Book: 2024 Edition",
    author: "Nigel Poulton",
    img: "../public/assets/kubernetes_book.jpg",
    id: 2,
  },
];

const Booklist = () => {
  return (
    <section className="booklist">
      <EventExamples />
      {books.map((book): any => {
        return <Book {...book} key={book.id} />;
      })}
    </section>
  );
};
const handleFormInput = (e: any) => {
  console.log(e);
  console.log(e.target.name);
  console.log(e.target.value);
  console.log("handle form input");
};
const handleClick = () => {
  alert("Clicked!!");
};
const handleSubmission = (e: any) => {
  e.preventDefault()
  console.log("Form Submitted");
};
const EventExamples = () => {
  return (
    <>
      <form onSubmit={handleSubmission} action="">
        <h2>Typical Form</h2>
        <input
          onChange={handleFormInput}
          type="text"
          name="example"
          style={{ margin: "1rem 0" }}
        />
        <button onClick={handleClick}>Click Me</button>
      </form>
    </>
  );
};

const Book = ({ img, title, author, children }: any) => {
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author.toUpperCase()}</h4>
      {children}
    </article>
  );
};

root.render(
  <React.StrictMode>
    <Booklist />
  </React.StrictMode>
);
