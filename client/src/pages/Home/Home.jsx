import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import CardVideo from "../../components/CardVideo/CardVideo";
import CustomGrid from "../../components/CustomGrid/CustomGrid";
import TranHotBanner from "../../assets/tranhot.png";
import btnMore from "../../assets/btnMore.webp";
import { useEffect, useState } from "react";
import ScrollReveal from "scrollreveal";

function Home() {
  const [visible, setVisible] = useState(12);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  // const apiGetAllADS = async () => {
  //   const response = await apiGetBanner();
  //   if (response?.success) {
  //     const filter = response?.ads
  //       ?.filter((f) => f?.root_domain === "sovo.link")
  //       ?.map((el) => {
  //         return el;
  //       });
  //     setAds(filter);
  //   }
  // };

  const showMoreItem = () => {
    setVisible((preValue) => preValue + 3);
  };

  // const apiGetPost = async () => {
  //   const response = await apiGetPosts();
  //   if (response.success) setPosts(response?.post);
  // };

  ScrollReveal().reveal("video_home", {
    delay: 0,
    duration: 600,
    mobile: true,
    desktop: true,
    easing: "cubic-bezier(0.5, 0, 0, 1)",
  });

  return (
    <>
      {
        <Container
          fixed
          disableGutters
          sx={{
            height: (theme) => theme.football.cardVideoHeight,
            width: { md: "70%", xs: "100%" },
          }}
        >
          <Box
            className="video_home"
            sx={{ p: { md: 0, xs: 0 }, m: { md: 0, xs: 0 } }}
          >
            <CardVideo titleContent blv />
          </Box>
          <Box sx={{ height: { xs: 0, xl: "20px" } }} />
          {/* <Box
        sx={{
          p: { md: 0, xs: 0 },
          m: { md: 0, xs: 0 },
          display: { xl: "flex", xs: "flex" },
          flexDirection: { xs: "column", xl: "row", md: "row" },
        }}
      >
        <Box sx={{ width: { md: "50%", xs: "100%" } }}>
          <img
            src={BannerBottomVideo}
            style={{ width: "100%", objectFit: "contain" }}
            alt=""
          />
        </Box>
        <Box sx={{ width: { md: "50%", xs: "100%" } }}>
          <img
            src={BannerBottomVideo}
            style={{ width: "100%", objectFit: "contain" }}
            alt=""
          />
        </Box>
      </Box>
      <Box
        sx={{
          p: { md: 0, xs: 0 },
          m: { md: 0, xs: 0 },
          display: { xl: "flex", xs: "flex" },
          flexDirection: { xs: "column", xl: "row", md: "row" },
        }}
      >
        <Box sx={{ width: { md: "50%", xs: "100%" } }}>
          <img
            src={BannerBottomVideo}
            style={{ width: "100%", objectFit: "contain" }}
            alt=""
          />
        </Box>
        <Box sx={{ width: { md: "50%", xs: "100%" } }}>
          <img
            src={BannerBottomVideo}
            style={{ width: "100%", objectFit: "contain" }}
            alt=""
          />
        </Box>
      </Box> */}
          <Box
            sx={{
              width: "100%",
              bgcolor: "#000000",
              px: 4,
              borderRadius: "15px ",
            }}
          >
            <Box sx={{ py: 2, justifyContent: "center" }}>
              <img
                src={TranHotBanner}
                alt=""
                style={{
                  display: { md: "flex", xs: "none" },
                  objectFit: "contain",
                }}
              />
            </Box>
            <CustomGrid size={2} start={0} end={visible} />
            <Box sx={{ py: 2, justifyContent: "center", display: "flex" }}>
              <img
                src={btnMore}
                onClick={showMoreItem}
                alt=""
                style={{
                  cursor: "pointer",
                  display: { md: "flex", xs: "none" },
                  objectFit: "contain",
                }}
                className="show_more_banner"
              />
            </Box>
          </Box>
          {/* <Box
        sx={{
          width: "100%",
          py: { md: 1, xs: 0 },
          display: { md: "flex", xs: "flex" },
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Box sx={{ width: "100%" }}>
          <Box sx={{ width: { md: "100%", xs: "100%" } }}>
            <img
              src={BannerBottomVideo}
              style={{ width: "100%", objectFit: "contain" }}
              alt=""
            />
          </Box>
          <Box sx={{ width: { md: "100%", xs: "100%" } }}>
            <img
              src={BannerBottomVideo}
              style={{ width: "100%", objectFit: "contain" }}
              alt=""
            />
          </Box>
        </Box>

        <Box sx={{ width: "100%" }}>
          <Box sx={{ width: { md: "100%", xs: "100%" } }}>
            <img
              src={BannerBottomVideo}
              style={{ width: "100%", objectFit: "contain" }}
              alt=""
            />
          </Box>
          <Box sx={{ width: { md: "100%", xs: "100%" } }}>
            <img
              src={BannerBottomVideo}
              style={{ width: "100%", objectFit: "contain" }}
              alt=""
            />
          </Box>
        </Box>
      </Box> */}

          {/* {posts ? <CustomCard data={posts} title={'Soi kèo bóng đá'}/> : ''} */}
        </Container>
      }
    </>
  );
}
export default Home;
