import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import CardVideo from '../../components/CardVideo/CardVideo'
import { useEffect } from 'react'
import ScrollReveal from "scrollreveal";

function LiveStream() {
  
  ScrollReveal().reveal("video_live", {
    delay: 0,
    duration: 600,
    
    mobile: true,
    desktop: true,
    easing: "ease-in",
  });
  return (
    <Container className='video_live' sx={{ p : 0 }}>
        <CardVideo ChatBox/>
    </Container>
  )
}

export default LiveStream