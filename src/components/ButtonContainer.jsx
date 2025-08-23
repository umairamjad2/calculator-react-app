import styles from "./ButtonContainer.module.css";

const ButtonContainer = ({ onButtonClick }) => {
  const ButtonNames = [
    "C",
    "/",
    "*",
    "^",
    "7",
    "8",
    "9",
    "-",
    "4",
    "5",
    "6",
    "+",
    "1",
    "2",
    "3",
    "%",
    "0",
    "00",
    ".",
    "=",
  ];

  return (
    <div className={styles.buttonContainer}>
      {ButtonNames.map((buttonName) => {
        let buttonClass = styles.button;

        if (!isNaN(buttonName) || buttonName === "00" || buttonName === ".") {
          buttonClass += ` ${styles.num}`;
        } else if (["+", "-", "*", "/", "^", "%"].includes(buttonName)) {
          buttonClass += ` ${styles.operator}`;
        } else if (buttonName === "=") {
          buttonClass += ` ${styles.equals}`;
        } else if (buttonName === "C") {
          buttonClass += ` ${styles.clear}`;
        }

        return (
          <button
            key={buttonName}
            className={buttonClass}
            onClick={() => onButtonClick(buttonName)}
          >
            {buttonName}
          </button>
        );
      })}
    </div>
  );
};

export default ButtonContainer;
