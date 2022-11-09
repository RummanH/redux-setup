import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

function App() {
  const [minion, setMinion] = useState("");
  const { minions } = useSelector((state) => state.minions);

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_MINION", payload: minion });
    setMinion("");
  };
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={minion}
          onChange={(e) => setMinion(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>

      <ul style={{ listStyle: "none" }}>
        {minions.map((minion) => (
          <li>{minion}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
