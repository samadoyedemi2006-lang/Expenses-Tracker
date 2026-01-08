import { Link } from "react-router-dom";
import "./ExpensesList.css";

function ListOfExpenses({ list, setList }) {

  function deleteButton(index) {
    const newList = list.filter((_, i) => i !== index);
    setList(newList);

    // Save new list
    localStorage.setItem("expenses", JSON.stringify(newList));
  }

  const total = list.reduce((sum, user) => sum + Number(user.number), 0);

  return (
    <div className="page">
      <title>Expenses list</title>
      <header className="header">
        <h1 className="logo">
          <span>E</span><span>x</span><span>p</span><span>e</span><span>n</span>
          <span>s</span><span>e</span><span>s</span>
          &nbsp;
          <span>T</span><span>r</span><span>a</span><span>c</span><span>k</span>
          <span>e</span><span>r</span>
        </h1>

        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/form">Expenses Form</Link>
          <Link to="/list">Expenses List</Link>
        </nav>
      </header>

      <div className="wrapper">
        <div className="card">

          <h2>Your Expenses</h2>

          {list.length === 0 && (
            <p className="empty">No expenses yet…</p>
          )}

          <div className="expense-list">
            {list.map((item, index) => (
              <div key={index}>
                <span>
                  {item.name.toUpperCase()}  
                </span>

                <span>
                  ₦{item.number}
                </span>

                <span>
                  {item.date}
                </span>

                <button onClick={() => deleteButton(index)}>
                  Remove
                </button>
              </div>
            ))}
          </div>

          <h3 className="total">
            Total: ₦{total}
          </h3>

        </div>
      </div>

    </div>
  );
}

export default ListOfExpenses;
