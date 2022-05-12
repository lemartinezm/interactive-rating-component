import { useState } from "react";
import '../styles/circularButton.scss';
import { RatingValue } from "./RatingBox";

type CircularButtonProps = {
  children?: JSX.Element,
  ratingElement?: RatingValue,
  selectValue?: Function,
  disabled: Boolean
}

const CircularButton = ({ children,
  ratingElement,
  selectValue,
  disabled }: CircularButtonProps) => {

  const [over, setOver] = useState(false);

  if (disabled) {
    return (
      <div
        className="Circular-Button"
        onMouseOver={() => setOver(true)}
        onMouseLeave={() => setOver(false)}
      >
        {ratingElement?.calification || children}
      </div>
    )
  } else {
    return (
      <div
        className={over ?
          "Circular-Button-Over"
          :
          ratingElement?.isSelected ?
            "Circular-Button-Selected"
            :
            "Circular-Button"}
        onMouseOver={() => setOver(true)}
        onMouseLeave={() => setOver(false)}
        onClick={() => selectValue!(ratingElement)}
      >
        {ratingElement?.calification || children}
      </div>
    )
  }
}

export default CircularButton;