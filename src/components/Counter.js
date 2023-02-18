import { useDispatch, useSelector } from "react-redux";
import { calculatorActions } from "../store/calculator/calculatorSlice";
import classes from "./Counter.module.css";

const Calculator = () => {
  const { result } = useSelector((state) => state.caculator);
  const dispatch = useDispatch();

  const addHandler = () => {
    dispatch(calculatorActions.add(5));
  };

  const divideHandler = () => {
    dispatch(calculatorActions.dividi(4));
  };

  const subtractHandler = () => {
    dispatch(calculatorActions.subtract(10));
  };

  const multilyHandler = () => {
    dispatch(calculatorActions.multiply(2));
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>Result: {result}</div>
      <button onClick={addHandler}>+5</button>
      <button onClick={divideHandler}>/4</button>
      <button onClick={subtractHandler}>-10</button>
      <button onClick={multilyHandler}>*2</button>
    </main>
  );
};

export default Calculator;
