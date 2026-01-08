import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <title>Home</title>

      <header className="header">
        <h1 className="logo">
          <span>E</span>
          <span>x</span>
          <span>p</span>
          <span>e</span>
          <span>n</span>
          <span>s</span>
          <span>e</span>
          <span>s</span>
          &nbsp;
          <span>T</span>
          <span>r</span>
          <span>a</span>
          <span>c</span>
          <span>k</span>
          <span>e</span>
          <span>r</span>
        </h1>

        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="form">Expenses Form</Link>
          <Link to="list">Expenses List</Link>
        </nav>
      </header>

      
      <main className="content">
        <h2 className="big-title">Track Your Expenses</h2>

        <p className="subtitle">
          Input your expenses here 👉 
        <Link to="form"><button className="here-btn">Here</button></Link> 
        </p>
      </main>
        <footer className="footer">
        <p>📧 Email: <Link to="mailto:oyedemisamad@gmail.com">oyedemisamad@gmail.com</Link></p>
        <p>👨‍💻 Website created by <strong> Programmer</strong></p>
        <p>© {new Date().getFullYear()} Expenses Tracker • All Rights Reserved</p>
      </footer>
        
    </div>
  );
}

export default Home;
