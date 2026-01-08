import { Link } from "react-router-dom";
import "./ExpensesForm.css"
const color = { color: "red" };

function InputValidation({ addOn, validate, setValidate, error, setError }) {

    function handleChange(e) {
        setValidate({
            ...validate,
            [e.target.name]: e.target.value
        });
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (!validate.name) {
            setError("Name is required");
            return;
        }

        if (!validate.number) {
            setError("You must enter an amount");
            return;
        }

        if (Number(validate.number) < 1) {
            setError("You can't input less than 1");
            return;
        }

        setError("");
        addOn();      
    }

    return (
        <div className="page">

            <title>Form</title>         
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
                    <h2>Add New Expense</h2>

                    <form onSubmit={handleSubmit}>
                      
                        <p style={color}>{error}</p>

                        <label>Expense Name</label>
                        <input
                            type="text"
                            name="name"
                            value={validate.name}   
                            onChange={handleChange}
                            required
                        />

                        <label>Amount</label>
                        <input
                            type="number"
                            name="number"
                            value={validate.number} 
                            onChange={handleChange}
                            required
                        />

                        <button type="submit">Add Expense</button>
                    </form>
                </div>
            </div>

        </div>
    );
}

export default InputValidation;
