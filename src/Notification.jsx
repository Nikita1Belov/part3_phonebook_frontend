import './styles/notification.css'

const Notification = ({ message }) => {
    if (message === null) {
      return null
    }
  
    return (
      <div className='note'>
        {message}
      </div>
    )
  }

  export default Notification