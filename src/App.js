import React from "react";
import styles from "./App.module.scss";

// import Modal from "./modal/Modal";
// import Quiz from "./quiz/Quiz";
import Main from "./users/Main";

const App = () => {
  // const [count, setCount] = React.useState(0);

  // const Plus = () => {
  //   setCount(count + 1);
  // };
  // const Minus = () => {
  //   setCount(count - 1);
  // };
  return (
    <div className={styles.wrapper}>
      {/* <div>Counter</div>
      <div>
        <h1>{count}</h1>
      </div>
      <button onClick={Plus}>PLUS</button>
      <button cnClick={Minus}>MINUS</button> */}

      {/* modal window */}
      {/* <Modal /> */}

      {/* quiz */}
      {/* <Quiz /> */}

      {/* users  */}
      <Main />
    </div>
  );
};

export default App;
