import Image from 'react-bootstrap/Image'
import Coffe from '../assets/images/coffee.jpg'

const NotFound = () => {
  return (
    <>
      <h1>Sorry, that page could not be found 😔, take a break and have some coffee!</h1>

      <Image src={Coffe} fluid />
    </>
  )
}

export default NotFound
