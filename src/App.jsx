import "./App.css";

function App() {
  return (
    <div className="container mt-3">
      <div class="form-group">
        <label for="name">Name</label>
        <input
          type="text"
          class="form-control"
          name="name"
          id="name"
          aria-describedby="nameHelp"
          placeholder="Enter your name"
        />
        <small id="nameHelp" class="form-text text-muted">
          You can enter your name
        </small>
      </div>
    </div>
  );
}

export default App;
