import CircularButton from "./CircularButton";
import '../styles/ratingBox.scss';
import React, { useState } from "react";
import StarImg from "./images/StartImg";

export type RatingValue = {
  calification: number,
  isSelected: boolean
}

type RatingBoxProps = {
  setRating: Function,
  children?: JSX.Element
}

const RatingBox = ({ setRating, children }: RatingBoxProps) => {

  const defaultValues: RatingValue[] = [
    {
      calification: 1,
      isSelected: false
    },
    {
      calification: 2,
      isSelected: false
    },
    {
      calification: 3,
      isSelected: false
    },
    {
      calification: 4,
      isSelected: false
    },
    {
      calification: 5,
      isSelected: false
    },
  ];

  const [ratingValues, setRatingValues] = useState<RatingValue[]>(defaultValues);

  const [overSubmit, setOverSubmit] = useState(false);

  function selectedValue(ratingValue: RatingValue) {
    const tempValues: RatingValue[] = [...defaultValues];
    const index: number = ratingValues.indexOf(ratingValue);
    tempValues[index].isSelected = true;
    setRatingValues(tempValues);
  }

  function submitValue() {
    const selected: RatingValue[] = ratingValues.filter((e: RatingValue) => e.isSelected === true);
    console.log(`The selected rating is: ${selected[0]?.calification}`);
    setRating(selected[0]?.calification);
  }

  return (
    <div className="Rating-Container">

      <CircularButton disabled={true}>
        <StarImg />
      </CircularButton>

      <main>
        <p className="Title" >
          How did we do?
        </p>
        <p className="Body">
          Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!
        </p>
        <div className="Rating-Buttons">
          {
            ratingValues.map((ratingValue: RatingValue) => (
              <CircularButton
                ratingElement={ratingValue}
                key={ratingValue.calification}
                selectValue={selectedValue}
                disabled={false}
              />
            ))
          }
        </div>

        <button
          className={overSubmit ? 'Submit-Button-Over' : 'Submit-Button'}
          onMouseEnter={() => setOverSubmit(true)}
          onMouseLeave={() => setOverSubmit(false)}
          onClick={submitValue}
        >
          SUBMIT
        </button>
      </main>
    </div>
  )
}

export default RatingBox;