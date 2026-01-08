import "./Home.css";

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
          <a href="/">Home</a>
          <a href="form">Expenses Form</a>
          <a href="list">Expenses List</a>
        </nav>
      </header>

      
      <main className="content">
        <h2 className="big-title">Track Your Expenses</h2>

        <p className="subtitle">
          Input your expenses here 👉 
        <a href="form"><button className="here-btn">Here</button></a> 
        </p>
      </main>
        <footer className="footer">
        <p>📧 Email: <a href="mailto:oyedemisamad@gmail.com">oyedemisamad@gmail.com</a></p>
        <p>👨‍💻 Website created by <strong> Programmer</strong></p>
        <p>© {new Date().getFullYear()} Expenses Tracker • All Rights Reserved</p>
      </footer>
        
    </div>
  );
}

export default Home;
