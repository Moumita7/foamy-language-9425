import { Box, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import "../styles/homefooter.css"

const HomeFooter = () => {
  return (
    <div className='hfooter'>
        <div>
            <h2>Holiday Homes Across The Globe</h2>
            <div>
                <h4 className='col'>ASIA</h4>
                <h4 className='col'>EUROPE</h4>
                <h4 className='col'>NORTH AMERICA</h4>
                <h4 className='col'>SOUTH AMERICA</h4>
                <h4 className='col'>AFRICA</h4>
            </div>
                <hr />
<SimpleGrid minChildWidth='120px' spacing='60px'>
  <Box  height='80px'>
    <h4>India</h4>
    <p className='col'>3262 holiday homes</p>
  </Box>
  <Box  height='80px'>
    <h4>Georiga</h4>
    <p className='col'>102 holiday homes</p>
  </Box>
  <Box  height='80px'>
    <h4>Combodia</h4>
    <p className='col'>62 holiday homes</p>
  </Box>
  <Box  height='80px'>
    <h4>Nepal</h4>
    <p className='col'>22 holiday homes</p>
  </Box>
  <Box  height='80px'>
    <h4>Thailand</h4>
    <p className='col'>1234 holiday homes</p>
  </Box>
  <Box  height='80px'>
    <h4>Turkey</h4>
    <p className='col'>70 holiday homes</p>
  </Box>
</SimpleGrid>
<SimpleGrid minChildWidth='120px' spacing='60px'>
  <Box  height='80px'>
    <h4>Sri Lanka</h4>
    <p className='col'>262 holiday homes</p>
  </Box>
  <Box  height='80px'>
    <h4>chaina</h4>
    <p className='col'>3262 holiday homes</p>
  </Box>
  <Box  height='80px'>
    <h4>Patna</h4>
    <p className='col'>326 holiday homes</p>
  </Box>
  <Box  height='80px'>
    <h4>Kolkata</h4>
    <p className='col'>3262 holiday homes</p>
  </Box>
  <Box  height='80px'>
    <h4>Delhi</h4>
    <p className='col'>322 holiday homes</p>
  </Box>
  <Box  height='80px'>
    <h4>Japan</h4>
    <p className='col'>326 holiday homes</p>
  </Box>
</SimpleGrid>
<SimpleGrid minChildWidth='120px' spacing='40px'>
  <Box  height='80px'>
    <h4>China</h4>
    <p className='col'>32 holiday homes</p>
  </Box>
  <Box  height='80px'>
    <h4>Viet Nam</h4>
    <p className='col'>3262 holiday homes</p>
  </Box>



 
</SimpleGrid>
        </div>
    </div>
  )
}

export default HomeFooter