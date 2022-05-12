import '../styles/thankBox.scss';
import ThankImg from './images/ThankImg';

type ThankBoxProps = {
  rating: number
}

const ThankBox = ({ rating }: ThankBoxProps) => {

  return (
    <div className="Thank-Container">
      <div className='Image'>
        <ThankImg />
      </div>

      <div className='Value-Selected-Box'>
        You selected {rating} out of 5
      </div>
      <p className='Title'>Thank you!</p>
      <p className='Body' style={{textAlign: 'center'}}>We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
    </div>
  )

}

export default ThankBox;