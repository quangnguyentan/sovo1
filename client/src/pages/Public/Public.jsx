import AppBar from '../../components/AppBar/AppBar'
import  Container from '@mui/material/Container'
import  Box from '@mui/material/Box'
import Marquee from '../../components/AppBar/Marquee/Marquee'
import Banner from '../../components/AppBar/Banner_Header/Banner'
import { Link, Outlet, useLocation } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import BannerLeft from '../../assets/banner_left.gif'
import BannerRight from '../../assets/banner_right.gif'
import React, { useEffect, useState } from 'react'
import { apiGetBanner } from '../../services/bannerService'
import { Button, Chip, Modal } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import popup from '../../assets/popup.gif'
import loading1 from '../../assets/loading1.webp'
import '../../index.css'
function Public() {
  const [ads, setAds] = useState('')
  const location = useLocation()
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = useState(false)

  const style = {
    position: 'absolute',
    top: '50%',
    left: {md : '40%', xs : '35%'},
    transform: 'translate(-50%, -50%)',
    width: '200px',
  };
  // useEffect(() => {
  //   setTimeout(() => {
  //     setOpen(true);
  //   }, 1000) // Mở modal khi trang được tải
  // }, [location]); // [] là mảng dependencies rỗng, nghĩa là sẽ chỉ gọi hàm useEffect này một lần sau khi component được mount
  
  const handleClose = () => {
    setOpen(false);
  };
  const apiGetAllADS = async() => {
   
    const response = await apiGetBanner()
    if(response?.success) {
      const filter = response?.ads?.filter(f => f?.root_domain === "sovo.link")?.map(el => {
        return el
      })
      setAds(filter)
    }
  }
  useEffect(() => {
    setLoading(true)
   const timer =  setTimeout(() => {
      apiGetAllADS()
      setLoading(false)

    }, 1000)
    return () => clearTimeout(timer);
  }, [])
  
  return (
   <>
 {loading ? <Box sx={{ width : '100%', height : '100vh'}}>
  <img src={loading1}  style={{ width : '100%' , height : '100%', objectFit : 'cover' }}/>
 </Box> : ads && <Container disableGutters maxWidth={false}>
     {/* <div>
     <Modal
       open={open}
       onClose={handleClose}
       aria-labelledby="modal-modal-title"
       aria-describedby="modal-modal-description"
     >
       <Box sx={style}>
         <Box sx={{ width : { md : '500px', xs : '300px' }}}>
           <Box onClick={handleClose} sx={{ fontSize : '30px', cursor : 'pointer', color : 'white', right : { md : '-300px', xs : '-100px' }, position : 'absolute' }}>
             <CloseIcon fontSize="inherit" />
           </Box>
           {ads?.map((el) => (
           <Link key={el?.id}>
            {el?.position === "FIXED_POPUP" ?  <img src={el?.file_url}/> : ''}
           </Link>
           ))}
         </Box>
       </Box>
     </Modal>
   </div> */}
    <Box sx={{ position : 'sticky', top : 0, zIndex : 2 }}>
      <AppBar/>
      <Marquee/>
    </Box>
    <Container disableGutters  fixed sx={{ display : 'flex', alignItems : 'center', gap : 1, py : 1, px : location.pathname.slice(0, 2) !== '/'  ? {md : location.pathname.slice(0, 6) === "/video" ? 5 : 20, xl : location.pathname === '/top-nha-cai'  ? 0 : 5} : {md : 20, xl : 0}}}>
       <Link style={{ textDecoration : 'none' }}>
          <Button className='button_info' sx={{ color : 'white', borderRadius : '5px', fontWeight : 600, width : {md : 'fit-content', xs : 'fit-content'}, height: {md : '40px', xs : '25px'}, fontSize : '10px' }} > Cược Ngay </Button>
        </Link>
        <Link style={{ textDecoration : 'none' }}>
        <Button  className='button_info' sx={{ color : 'white', borderRadius : '5px', fontWeight : 600, width : {md : 'fit-content', xs : 'fit-content'}, height: {md : '40px', xs : '25px'}, fontSize : '10px',  }} > Cược Ngay </Button>
        </Link>
        <Link style={{ textDecoration : 'none' }}>
        <Button  className='button_info' sx={{ color : 'white', borderRadius : '5px', fontWeight : 600, width : {md : 'fit-content', xs : 'fit-content'}, height: {md : '40px', xs : '25px'}, fontSize : '10px',  }} > Cược Ngay </Button>
        </Link>
    </Container>
    {location.pathname?.slice(0, 6) === "/video" ? '' : <Banner data={ads} />}
   <Box sx={{ display : 'flex' , m : 0 }}>
        {ads?.map((el) => (
           <Link key={el?.id}>
            {el?.position === "LEFT" ? <Box sx={{ flexDirection : 'column', display : { md : 'flex', sm : 'none', xs : 'none'}, height : '100%' }}>
          
          <img src={el?.file_url} alt=""style={{ position : 'fixed', left : '5%', top : '15%', height : '40%' }}/>
          <img src={el?.file_url} alt=""style={{ position : 'fixed', left : '5%', bottom :  '5%' , height : '40%'}}/>
        </Box>
       : ''}
           </Link>
           ))}
   
    <Outlet/>
    
    {ads?.map((el) => (
           <Link key={el?.id}>
            {el?.position === "RIGHT" ?  <Box sx={{ flexDirection : 'column', display : { md : 'flex', sm : 'none', xs : 'none'}, height : '100%' }}>
        <img src={el?.file_url} alt=""style={{ position : 'fixed', right : '5%', top : '15%', height : '40%' }}/>
        <img src={el?.file_url} alt=""style={{ position : 'fixed', right : '5%', bottom :  '5%' , height : '40%'}}/>
    </Box>
       : ''}
           </Link>
           ))}
  
   </Box>
   
    <Footer  />
  </Container>}
   </>
  )
}

export default Public