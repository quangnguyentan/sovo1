import Container from '@mui/material/Container'
import CustomCard from '../../components/CustomCard/CustomCard'
import Box from '@mui/material/Box'
import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs'
import bet11 from '../../assets/top_nha_cai.jpg'

import { useEffect } from 'react'
import { Chip, Typography } from '@mui/material'
function Top() {
  useEffect(() => {
    window.scrollTo({
      top : 0,
      left: 0,
      behavior :'smooth'
    })
  }, [])
  return (
    <Container fixed disableGutters sx={{ height : {md : '100vh', xs : 'fit-contetn'}, width : { md : '70%', xs : '100%', } }}>      
        <Box sx={{ lignItems : 'center', width : '100%',bgcolor : '#000000', borderRadius : '15px 15px 0 0 ', display : 'flex', gap : {md : 3, xs : 2}, justifyContent : 'space-between', px : { md : 4 , xs : 2}, py : {md : 4, xs : 4}  }}>
          <Box sx={{  justifyContent : 'end', display : 'flex', alignItems : 'center', gap : {md : 2, xs : 1}, flexDirection : 'column' }}>
            <img src={bet11} alt="" style={{ width : '90px', height : '90px', objectFit : 'cover' }} className='show_more_banner'/>
            <Box>
              <Typography sx={{ fontSize : {md :  '14px', xs : '10px'}, fontWeight : 600, color : 'white' }}>
                11BET
              </Typography>
              <Typography sx={{ fontSize : {md :  '14px', xs : '10px'},  fontWeight : 600, color : 'white' }}>
              10/10
              </Typography>
            </Box>
          </Box>
          <Box sx={{ height : {md : '60px', xs : '90px'}, width : { md : '280px', xs : '100px'}, display : 'flex', flexDirection : 'column', gap : 1}}>
            <Typography sx={{ fontSize : {md :  '14px', xs : '10px'},color : 'white' }}>
            ♠️THƯỞNG 100% LẦN NẠP ĐẦU TIÊN
            </Typography>
            <Typography sx={{ fontSize : {md :  '14px', xs : '10px'}, color : 'white' }}>
            ♠️HOÀN TRẢ 1% TỔNG CƯỢC MỖI NGÀY
            </Typography>
            <Typography sx={{ fontSize : {md :  '14px', xs : '10px'},color : 'white' }}>
            ♠️TẶNG 100K CHO THÀNH VIÊN MỚI
            </Typography>
            <Typography sx={{ fontSize : {md :  '14px', xs : '10px'}, color : 'white' }}>
              ♠️LÌ XÌ 60% TIỀN HOÀN TRẢ THỂ THAO
            </Typography>
          </Box>
          <Box sx={{ display : 'flex', flexDirection : 'column', gap : 2, alignItems : 'center', justifyContent : 'start' }}>
            <Chip label='Đặt Cược' className='button_info' sx={{ borderRadius : '10px', fontWeight : 600, width : '90px', height: {md : '30px', xs : '25px'}, fontSize : '10px' }} />
            <Chip label='Đặt Cược' className='button_info' sx={{ borderRadius : '10px', fontWeight : 600, width : '90px', height: {md : '30px', xs : '25px'}, fontSize : '10px' }} />
          </Box>
        </Box>
        <Box sx={{ lignItems : 'center', width : '100%',bgcolor : '#000000', borderRadius : '0 ', display : 'flex', gap : {md : 3, xs : 2}, justifyContent : 'space-between', px : { md : 4 , xs : 2}, py : {md : 4, xs : 4}  }}>
          <Box sx={{  justifyContent : 'end', display : 'flex', alignItems : 'center', gap : {md : 2, xs : 1}, flexDirection : 'column' }}>
            <img src={bet11} alt="" style={{ width : '90px', height : '90px', objectFit : 'cover' }} className='show_more_banner'/>
            <Box>
              <Typography sx={{ fontSize : {md :  '14px', xs : '10px'}, fontWeight : 600, color : 'white' }}>
                11BET
              </Typography>
              <Typography sx={{ fontSize : {md :  '14px', xs : '10px'},  fontWeight : 600, color : 'white' }}>
              10/10
              </Typography>
            </Box>
          </Box>
          <Box sx={{ height : {md : '60px', xs : '90px'}, width : { md : '280px', xs : '100px'}, display : 'flex', flexDirection : 'column', gap : 1}}>
            <Typography sx={{ fontSize : {md :  '14px', xs : '10px'},color : 'white' }}>
            ♠️THƯỞNG 100% LẦN NẠP ĐẦU TIÊN
            </Typography>
            <Typography sx={{ fontSize : {md :  '14px', xs : '10px'}, color : 'white' }}>
            ♠️HOÀN TRẢ 1% TỔNG CƯỢC MỖI NGÀY
            </Typography>
            <Typography sx={{ fontSize : {md :  '14px', xs : '10px'},color : 'white' }}>
            ♠️TẶNG 100K CHO THÀNH VIÊN MỚI
            </Typography>
            <Typography sx={{ fontSize : {md :  '14px', xs : '10px'}, color : 'white' }}>
              ♠️LÌ XÌ 60% TIỀN HOÀN TRẢ THỂ THAO
            </Typography>
          </Box>
          <Box sx={{ display : 'flex', flexDirection : 'column', gap : 2, alignItems : 'center', justifyContent : 'start' }}>
            <Chip label='Đặt Cược' className='button_info' sx={{ borderRadius : '10px', fontWeight : 600, width : '90px', height: {md : '30px', xs : '25px'}, fontSize : '10px' }} />
            <Chip label='Đặt Cược' className='button_info' sx={{ borderRadius : '10px', fontWeight : 600, width : '90px', height: {md : '30px', xs : '25px'}, fontSize : '10px' }} />
          </Box>
        </Box>
        <Box sx={{ lignItems : 'center', width : '100%',bgcolor : '#000000', borderRadius : '0 0 15px 15px  ', display : 'flex', gap : {md : 3, xs : 2}, justifyContent : 'space-between', px : { md : 4 , xs : 2}, py : {md : 4, xs : 4}  }}>
          <Box sx={{  justifyContent : 'end', display : 'flex', alignItems : 'center', gap : {md : 2, xs : 1}, flexDirection : 'column' }}>
            <img src={bet11} alt="" style={{ width : '90px', height : '90px', objectFit : 'cover' }} className='show_more_banner'/>
            <Box>
              <Typography sx={{ fontSize : {md :  '14px', xs : '10px'}, fontWeight : 600, color : 'white' }}>
                11BET
              </Typography>
              <Typography sx={{ fontSize : {md :  '14px', xs : '10px'},  fontWeight : 600, color : 'white' }}>
              10/10
              </Typography>
            </Box>
          </Box>
          <Box sx={{ height : {md : '60px', xs : '90px'}, width : { md : '280px', xs : '100px'}, display : 'flex', flexDirection : 'column', gap : 1}}>
            <Typography sx={{ fontSize : {md :  '14px', xs : '10px'},color : 'white' }}>
            ♠️THƯỞNG 100% LẦN NẠP ĐẦU TIÊN
            </Typography>
            <Typography sx={{ fontSize : {md :  '14px', xs : '10px'}, color : 'white' }}>
            ♠️HOÀN TRẢ 1% TỔNG CƯỢC MỖI NGÀY
            </Typography>
            <Typography sx={{ fontSize : {md :  '14px', xs : '10px'},color : 'white' }}>
            ♠️TẶNG 100K CHO THÀNH VIÊN MỚI
            </Typography>
            <Typography sx={{ fontSize : {md :  '14px', xs : '10px'}, color : 'white' }}>
              ♠️LÌ XÌ 60% TIỀN HOÀN TRẢ THỂ THAO
            </Typography>
          </Box>
          <Box sx={{ display : 'flex', flexDirection : 'column', gap : 2, alignItems : 'center', justifyContent : 'start' }}>
            <Chip label='Đặt Cược' className='button_info' sx={{ borderRadius : '10px', fontWeight : 600, width : '90px', height: {md : '30px', xs : '25px'}, fontSize : '10px' }} />
            <Chip label='Đặt Cược' className='button_info' sx={{ borderRadius : '10px', fontWeight : 600, width : '90px', height: {md : '30px', xs : '25px'}, fontSize : '10px' }} />
          </Box>
        </Box>
      </Container>
  )
}

export default Top