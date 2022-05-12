import '../styles/thankBox.scss';
import ThankImg from './images/ThankImg';

type ThankBoxProps = {
  rating: number
}

const ThankBox = ({ rating }: ThankBoxProps) => {

  return (
    <div className="Thank-Container">
      <ThankImg />
      <div className='Value-Selected-Box'>
        You selected {rating} out of 5
      </div>
      <p
        style={{
          fontWeight: 700
        }}
      >Thank you!</p>
      <p>We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
    </div>
  )

}

export default ThankBox;