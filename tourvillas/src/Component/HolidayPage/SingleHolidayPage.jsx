import React from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../HomePage/Navbar'
import "../styles/SinglePage.css"
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Input,
  SimpleGrid,
  Box,
} from '@chakra-ui/react'

const SingleHolidayPage = () => {
  const {id}=useParams()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  return (
    <div>
    <Navbar/>
    <h5 style={{marginTop:'10px',marginBottom:"10px"}}>Home / India / Goa / Morjim / Property #  ${id}</h5>
    <hr/>
    <div className='flexdiv'>
      <div className='imgdiv'>
      <img src="https://d2vcelvjdj7n25.cloudfront.net/media/property_photos/image_watermarked_1024/25009945/28391f115bc711ebbcb60a5f3ca25ae5_watermarked_image_1024.jpeg" alt="sw"/>
      </div>
      <div className='textdiv'>
        <h2>Double Bungalow With A Garden View</h2>
<h4 style={{marginTop:"10px"}}>Goa, Southern Province, Sri Lanka | -</h4>


<SimpleGrid columns={[2, null, 2]} spacing='40px' mt="40px" mr="15px" ml="15px">
  {/* <Box bg='tomato' height='80px'> */}
    <Button p="7" color="#0F7AE5" border="1px solid #0F7AE5" bg="#ffffff">PRIVATE ROOM</Button>
    <Button p="7" color="#0F7AE5" border="1px solid #0F7AE5" bg="#ffffff">AC</Button>
    <Button p="7" color="#0F7AE5" border="1px solid #0F7AE5" bg="#ffffff">SWIMMING POOL</Button>
    <Button p="7" color="#0F7AE5" border="1px solid #0F7AE5" bg="#ffffff">CARETAKER</Button>
    <Button p="7" color="#0F7AE5" border="1px solid #0F7AE5" bg="#ffffff">5 MAX GUESTS</Button>

  {/* </Box> */}
  {/* <Box bg='tomato' height='80px'></Box>
  <Box bg='tomato' height='80px'></Box>
  <Box bg='tomato' height='80px'></Box>
  <Box bg='tomato' height='80px'></Box> */}
</SimpleGrid>

      </div>
      <div className='frmdiv' >
      <div>
        <h5>Starting</h5>
        <h2>₹11740 PerNight</h2>
        <form className='frm'>
        <select className='slt' name="" id="">
          <option value="1units">unit </option>
          <option value="2units">1</option>

        </select>
        <div>
          <input type="date"className='dslt'/>
          <input type="date"className='dslt'/>

        </div>
        <select className='slt' name="" id="">
          <option value="1units">Select Guests</option>
          <option value="2units">1</option>

        </select>
        <p>Rateplan: No meals provided (European Plan)</p>
        <button className='btnn'>REQUEST TO BOOK</button>


        </form>
      </div>

      
      </div>

      
    </div>
.
<div className='seDiv'>
  <div>
  <SimpleGrid columns={[2, null, 2]} spacing='40px'p="90">
  <Box  height='80px' textAlign="center"pt="10" boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px;"><h3 className='tx'>Private Room
Type Of Property</h3></Box>
  <Box  height='80px'textAlign="center" pt="10" boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"><h3 className='tx'>1
Bathrooms</h3></Box>
  <Box height='80px'textAlign="center" pt="10" boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px;"><h3 className='tx'>4
Max. Guests</h3></Box>

</SimpleGrid>
  </div>
  <div style={{padding:"10px"}}>
   <h3 className='tx' style={{marginBottom:"10px"}}>Key Amenities</h3>
   <hr />
   <SimpleGrid columns={[2, null, 4]} spacing='100px' p="10">
   <Button p="17" color="#0F7AE5" border="1px solid #0F7AE5" bg="#ffffff">PRIVATE ROOM</Button>
    <Button p="17" color="#0F7AE5" border="1px solid #0F7AE5" bg="#ffffff">AC</Button>
    <Button p="17" color="#0F7AE5" border="1px solid #0F7AE5" bg="#ffffff">SWIMMING POOL</Button>
    <Button p="17" color="#0F7AE5" border="1px solid #0F7AE5" bg="#ffffff">CARETAKER</Button>
    <Button p="17" color="#0F7AE5" border="1px solid #0F7AE5" bg="#ffffff">5 MAX GUESTS</Button>
    <Button p="17" color="#0F7AE5" border="1px solid #0F7AE5" bg="#ffffff">5 MAX GUESTS</Button>
    <Button p="17" color="#0F7AE5" border="1px solid #0F7AE5" bg="#ffffff">5 MAX GUESTS</Button>
    <Button p="17" color="#0F7AE5" border="1px solid #0F7AE5" bg="#ffffff">5 MAX GUESTS</Button>
    <Button p="17" color="#0F7AE5" border="1px solid #0F7AE5" bg="#ffffff">5 MAX GUESTS</Button>

 
</SimpleGrid>
  </div>
</div>
<div style={{padding:"20px"}}>
<h3 className='tx'>Policies & Fees</h3>
<hr />
<h4 className='tx'>Default Cancellation Policy</h4>
<h5 className='tx'>Stringent: No charges will be levied if booking is canceled 61 days prior to check-in. If cancellation is done between 30 to 60 days prior to check-in, 50% of the total booking amount will be charged. Post that, there will be no refund.</h5>
</div>
    
     </div>
  )
}

export default SingleHolidayPage



