import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { increment, decrement, incrementBy } from "./store/slices/counter";

function App() {
  const { counter } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>count is {counter}</h1>
      <div className="card">
        <button onClick={() => dispatch(decrement())}>
          -1
        </button>
        <button onClick={() =>dispatch(incrementBy(2))}>
          incrementBy(2)
        </button>
        <button onClick={() => dispatch(increment())}>
          +1
        </button>
      </div>
    </div>
  );
}

export default App;
