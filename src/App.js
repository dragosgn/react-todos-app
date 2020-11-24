import "./App.css";

function App() {
  // Create a todos state handler to store all our todos as an array

  // Create a currenttodo state handler to store the current todo

  // Create an error state handler to help us inform the user in case there is an error

  const handleChange = (e) => {
    // We capture the value of the input and set it as current todo
  };

  const handleSubmit = (e) => {};

  return (
    <>
      <div class="header">Dragos's Tasks</div>
      <div className="root">
        <div className="dashboard">
          <p className="in-progress">{}</p>
          <p>in progress</p>
        </div>
        <form onSubmit={handleSubmit} className="add-todo-form">
          <div className="input-row">
            <input
              placeholder="Add a todo here..."
              className="input"
              onChange={handleChange}
              type="text"
            ></input>
            <button className="submit-button" type="submit">
              Add todo
            </button>
          </div>
        </form>
        <p className="todos-title">Todos:</p>
      </div>
    </>
  );
}

export default App;
