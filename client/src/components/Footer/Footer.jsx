import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import bannerFooterRight from "../../assets/banner_footer_right.gif";
import bannerFooterLeft from "../../assets/banner_footer.gif";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { Divider } from "@mui/material";
import logo from "../../assets/logo.png";
import { useLocation } from "react-router-dom";
function Footer() {
  const location = useLocation()
  const styles = {
    heroContainer: {
      backgroundImage: `url('https://staticcdn-mn.mediastation.live/template/public/img/bg_footer.png')`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "100% 100%",
      width: "100%",
      height: "100%",
    },
  };
  const [hidden, setHidden] = useState(false);
  const AStyles = {
    display: "block",
    height: "100%",
  };
  const IStyles = {
    display: "block",
    width: "100%",
    height: "100%",
    objectFit: "fill",
  };
  return (
    <>
      {!hidden && (
        <div
          style={{
            position: "fixed",
            bottom: 0,
            zIndex: 999,
            left: "50%",
            transform: "translateX(-50%)",
            width: "100vw",
            padding: "8px",
            height: "50px",
            maxWidth: "1280px",
            display: "block",
            //   backgroundColor: "#ff0000",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "50px",
            }}
          >
            <a style={AStyles} href="#">
              <img style={IStyles} src="/src/assets/banner_video.gif" />
            </a>
          </div>
          <button
            onClick={() => setHidden(!hidden)}
            style={{
              position: "absolute",
              top: "8px",
              height: "16px",
              right: "8px",
              transform: "translateY(-50%)",
              border: "none",
              background: "#ff0000",
              cursor: "pointer",
              color: "#ffffff",
            }}
          >
            X
          </button>
        </div>
      )}
      <Box
        sx={{
          height: { xl: "fit-content", xs: "fit-content" },
          width: { xl: "100%", xs: "100%" },
          bgcolor: "#000000",
          borderTopLeftRadius: "15px ",
          borderTopRightRadius: "15px ",
        }}
      >
        <Box style={styles.heroContainer}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              px: { xl: 40, xs: 1 },
              gap: { xs: 2, xl: 6 },
              py: { md: 8, xs: location.pathname.slice(0, 2) !== '/' ? 2 :2 },
            }}
          >
            <Box sx={{ flex: 1 }}>
              <img
                src="https://staticcdn-mn.mediastation.live/template/public/img/pic_tour01.png"
                alt=""
              />
            </Box>
            <Box sx={{ flex: 1 }}>
              <img
                src="https://staticcdn-mn.mediastation.live/template/public/img/pic_tour02.png"
                alt=""
              />
            </Box>
            <Box sx={{ flex: 1 }}>
              <img
                src="https://staticcdn-mn.mediastation.live/template/public/img/pic_tour03.png"
                alt=""
              />
            </Box>
            <Box sx={{ flex: 1 }}>
              <img
                src="https://staticcdn-mn.mediastation.live/template/public/img/pic_tour04.png"
                alt=""
              />
            </Box>
            <Box sx={{ flex: 1 }}>
              <img
                src="https://staticcdn-mn.mediastation.live/template/public/img/pic_tour05.png"
                alt=""
              />
            </Box>
            <Box sx={{ flex: 1 }}>
              <img
                src="https://staticcdn-mn.mediastation.live/template/public/img/pic_tour06.png"
                alt=""
              />
            </Box>
            <Box sx={{ flex: 1 }}>
              <img
                src="https://staticcdn-mn.mediastation.live/template/public/img/pic_tour07.png"
                alt=""
              />
            </Box>
          </Box>
          <Divider
            sx={{
              border: "1",
              borderColor: "white",
              width: "calc(100% - 500px)",
              left: "15%",
              position: "absolute",
            }}
          />
          <Box
            sx={{
              px: { xl: 38, xs: 1 },
              py: { md: 2, xs: 0 },
            }}
          >
            <Box
              sx={{
                width: { xl: "330px", xs: "260px" },
                height: { xl: "130px", xs: "70px" },
                ml: 2,
              }}
            >
              <img
                style={{ width: "100%", height: "100%" }}
                src={logo}
                alt=""
              />
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "center",
              px: { xl: 40, xs: 1 },
              gap: { xs: 2, xl: 6 },
              pb: { xl: 2, xs: 2 },
            }}
          >
            <Box
              sx={{
                flex: 4,
                color: "white",
                fontSize: { xl: "14px", xs: "11px" },
                fontWeight: 600,
              }}
            >
              Mọi trận đấu cho dù giải nhỏ cho tới các giải đấu lớn thì SoVoTv
              đều cung cấp đầy đủ link xem trực tiếp bóng đá online với độ phân
              giải và chất lượng cao nhất. Ngoài việc xem bóng đá trực tuyến,
              chúng tôi còn gửi tới bạn đọc lịch thi đấu bóng đá, kết quả bóng
              đá và soi kèo bóng đá với tỷ lệ chiến thắng cao. Chúc bạn đọc xem
              bóng đá vui vẻ và luôn ủng hộ SoVoTv
            </Box>
            <Box sx={{ display: { xs: "none", md : 'flex' } }}>
                <hr style={{ height: "140px" }} />
            </Box>
            <Box
              sx={{
                flex: 2,
                color: "white",
                display: { xl: "flex", xs: "none" },
                justifyContent: "start",
                flexDirection: "column",
                gap: { xl: 2, xs: 0 },
                opacity: 0.65,
              }}
            >
              <Typography
                sx={{ fontWeight: 600, fontSize: { xl: "14px", xs: "11px" } }}
              >
                TRANG CHỦ
              </Typography>
              <Typography
                sx={{ fontWeight: 600, fontSize: { xl: "14px", xs: "11px" } }}
              >
                TOP NHÀ CÁI
              </Typography>
            </Box>
            <Box sx={{ display: { xs: "none",md : 'flex' } }}>
              <hr style={{ height: "140px" }} />
            </Box>
            <Box
              sx={{
                flex: 6,
                color: "white",
                fontSize: "14px",
                fontWeight: 600,
                gap: 1,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography sx={{ fontSize: { xl: "14px", xs: "11px" } }}>
                Nội dung tổng hợp từ Internet. Dữ liệu: SportsAZ, Sofascore
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  justifyContent: { xs: "center", xl : 'start' },
                }}
              >
                <Box>
                  <img src="https://staticcdn-mn.mediastation.live/template/public/img/icon_fb.png" />
                </Box>
                <Box>
                  <img src="https://staticcdn-mn.mediastation.live/template/public/img/icon_tiktok.png" />
                </Box>
                <Box>
                  <img src="https://staticcdn-mn.mediastation.live/template/public/img/icon_youtube.png" />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Footer;
