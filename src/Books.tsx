const Book = (props: object) => {
  const { img, title, author, id, getBook, number }: any = props;
  const getSingleBook = () => {
    getBook(id)
  }
  return (
    <article className="book">
      
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <button onClick={getSingleBook}>click me</button>
      <h4>{author.toUpperCase()}</h4>
      <span className="ranking">{`# ${number + 1}`}</span>
    </article>
  );
};

export default Book;