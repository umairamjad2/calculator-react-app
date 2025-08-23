import { useState } from "react";
import styles from "./App.module.css";
import ButtonContainer from "./components/ButtonContainer";
import Display from "./components/Display";
// import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [CalVal, setCalVal] = useState([""]);
  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setCalVal("");
    } else if (buttonText === "=") {
      setCalVal(eval(CalVal));
    } else {
      const newDisplayValue = CalVal + buttonText;
      setCalVal(newDisplayValue);
    }
  };

  return (
    <center>
      <div className={styles.calculator}>
        <Display DisplayChange={CalVal}></Display>
        <ButtonContainer onButtonClick={onButtonClick}></ButtonContainer>
      </div>
    </center>
  );
}

export default App;
