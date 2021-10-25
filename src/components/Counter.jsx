import { useDispatch, useSelector } from "react-redux";
import { addValue, reduceValue } from "../redux/actions/countAction";

export const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);

  const name = "hks";
  const age = 25;

  const dict = { name, age };
  console.log(`dict`, dict);

  console.log(`<span/>`, <span />);

  const handleOnClick = (e) => {
    const eventType = e.type;

    setTimeout(function () {
      console.log(`eventType`, eventType);
      console.log(`e.type`, e.type);
    }, 0);
  };

  return (
    <div>
      <h2>Counter {count}</h2>
      <button onClick={() => dispatch(reduceValue())}>Subtract</button>
      <button onClick={() => dispatch(addValue())}>Add</button>
      <div>{String(null)}</div>
      <div>{undefined}</div>
      <div>{String(undefined)}</div>
      <div>{String(false)}</div>
      <div>{Number(null)}</div>
      <div>{Number(undefined)}</div>
      <div>{Number(false)}</div>
      <div>{Number(true)}</div>
      <button onClick={handleOnClick}>Add</button>
    </div>
  );
};
