import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Mar from 'react-fast-marquee'
import headerMarquee from '../../../assets/ĐƯỜNG VIỀN TRÊN TRẬN-01.png'
function Marquee() {
  const css = {
    container: {
      backgroundImage:
        `url('${headerMarquee}')`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "100% 100%",
    },
  };
  return (
    <Box style={css.container} sx={{ height : (theme) => theme.football.marqueeHeight, bgcolor : 'darkred', color : 'white', alignContent : 'center', display : 'flex', alignItems : 'center', p : 0}}>
       <Mar speed={120}>
          <Typography sx={{ fontWeight : 600, fontSize : 16, color : 'white' }}>
            Thông báo: Hiện tại đang có rất nhiều bên đã giả mạo SoVo TV để lừa đối tác, Quí đối tác vui lòng liên hệ Telegram chính chủ để Quảng Cáo nhé.
          </Typography>
        </Mar>
    </Box>
  )
}

export default Marquee
