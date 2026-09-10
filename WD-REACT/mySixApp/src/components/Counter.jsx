import { useReducer } from "react";

function reducer(state, action) {
  if (action.type === "increment") {
    return { count: state.count + 1 };
  }

  return state;
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <>
      <h2>{state.count}</h2>

      <button onClick={() => dispatch({ type: "increment" })}>
        +
      </button>
    </>
  );
}