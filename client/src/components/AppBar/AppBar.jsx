import Box from '@mui/material/Box';
import Menu from './Menus/Menu'; 
import logo from '../../assets/logo.png'
import '../../index.css';
import Typography from '@mui/material/Typography';
import PhoneIcon from '@mui/icons-material/Phone';
import { Link } from 'react-router-dom';
import header from '../../assets/nên trên-01.png'
function AppBar() {
  const css = {
    container: {
      backgroundImage:
        `url('${header}')`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "100% 100%",
    },
  };

  return (
    <Box style={css.container} sx={{ position : 'relative', height : (theme) =>theme.football.appBarHeight, width: '100%', overflowY : 'hidden', overflowX: 'auto', '&::webkit-scrollbar-track' : {
      m : 2
    }, backgroundColor : '#2b2b2b' , px : { sm : 0, md : 2, xs : 1, xl : 32}, display : 'flex', alignItems : 'center', justifyContent : 'space-between'  }} >
          <Link to="/" >
            <img src={logo} style={{ objectFit : 'cover', minWidth : '160px', display : 'flex', alignItems : 'center' }} alt="logo"  width={230} height={70}  />
          </Link>
          <Menu/>
         <Link to='/' style={{ textDecoration : 'none' }}>
          <Box className='header_info'  sx={{ maxWidth : { md : '270px', xs : 0}, minWidth : '270px', p : 1 , color : 'white', gap : 1, display: {md : 'flex', xs : 'none'}}}>
            <PhoneIcon fontSize='large'/>
              <Box sx={{  }}>
                <Typography  sx={{ fontSize : 16, fontWeight : 500 }}>
                  Liên hệ quảng cáo
                </Typography>
                <Typography sx={{ fontSize : 12, fontWeight : 500 }}>
                  Liên hệ Telegram: @Viral_media88
                </Typography>
            </Box>
            </Box>
         </Link>
    </Box>

  )
}

export default AppBar
