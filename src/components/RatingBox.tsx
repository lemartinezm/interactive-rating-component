import CircularButton from "./CircularButton";
import '../styles/ratingBox.scss';
import React, { useState } from "react";

export type RatingValue = {
  calification: number,
  isSelected: boolean
}

type RatingBoxProps = {
  setRating: Function,
  children?: JSX.Element
}

const RatingBox = ({setRating, children}: RatingBoxProps) => {

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
        <svg width="17" height="16" xmlns="http://www.w3.org/2000/svg"><path d="m9.067.43 1.99 4.031c.112.228.33.386.58.422l4.45.647a.772.772 0 0 1 .427 1.316l-3.22 3.138a.773.773 0 0 0-.222.683l.76 4.431a.772.772 0 0 1-1.12.813l-3.98-2.092a.773.773 0 0 0-.718 0l-3.98 2.092a.772.772 0 0 1-1.119-.813l.76-4.431a.77.77 0 0 0-.222-.683L.233 6.846A.772.772 0 0 1 .661 5.53l4.449-.647a.772.772 0 0 0 .58-.422L7.68.43a.774.774 0 0 1 1.387 0Z" fill="#FC7614" /></svg>
      </CircularButton>

      <p
        style={{
          fontWeight: '700'
        }}
      >
        How did we do?
      </p>
      <p
        style={{
          color: 'hsl(217, 12%, 63%)',
          fontSize: '15px',
          fontFamily: 'Overpass',
          fontWeight: '400'
        }}
      >
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

    </div>
  )
}

export default RatingBox;