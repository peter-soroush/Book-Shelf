import img from "./assets/1.png";
import { books } from "./constants/mockData";
import Layout from "./layouts/Layout";
function App() {
  return (
    <Layout>
      <h1>Book App Starting files</h1>
      {books.map((book) => (
        <div key={book.id} className="Books">
          <p>{book.title}</p>
          <img src={book.image} />
        </div>
      ))}
    </Layout>
  );
}

export default App;
