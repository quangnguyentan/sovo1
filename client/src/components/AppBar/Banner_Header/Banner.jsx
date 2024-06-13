import { Link } from "react-router-dom";

import bannerRight from "../../../assets/banner_header_right.gif";
import Container from "@mui/material/Container";
import { Box } from "@mui/material";

function Banner({ data }) {
  const bannerLeft = 'https://sovotv.live/uploads/resources/images/760c52157f0797e19698d7a409cac2f2.gif'
  const checkBanner = [];
  // if (data) {
  //   data
  //     ?.filter((fm) => fm?.position === "TOP")
  //     ?.map((el) => {
  //       checkBanner.push(el);
  //     });
  // }

  return (
    <Container
      disableGutters
      maxWidth="lg"
      fixed
      sx={{
        flexDirection: { md: "column", xs: "column" },
        display: { md: "flex", xs: "flex" },
        height: { xs: "fit-content", md: "fit-content", xl : 'fit-content' },
        width: { xs: "100%", xl: "70%", md: "70%" },
        justifyContent: checkBanner.length > 1 ? "" : { md: "", xl: "center" },
        mb: checkBanner.length > 1 ? { md: 0, xs: 8 } : "",
      }}
    >
      {/* <Box
        sx={{
          p: { md: 0, xs: 0 },
          m: { md: 0, xs: 0 },
          display: { xl: "flex", xs: "flex", md : 'flex' },
          flexDirection: { xs: "column", xl: "row", md : 'row' },
        }}
      >
        <Box sx={{ width: { md: "50%", xs: "100%" } }}>
          <img
            src={bannerLeft}
            style={{ width: "100%", objectFit: "contain" }}
            alt=""
          />
        </Box>
        <Box sx={{ width: { md: "50%", xs: "100%" } }}>
          <img
            src={bannerLeft}
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
          flexDirection: { xs: "column", xl: "row", md : 'row' },

        }}
      >
        <Box sx={{ width: { md: "50%", xs: "100%" } }}>
          <img
            src={bannerLeft}
            style={{ width: "100%", objectFit: "contain" }}
            alt=""
          />
        </Box>
        <Box sx={{ width: { md: "50%", xs: "100%" } }}>
          <img
            src={bannerLeft}
            style={{ width: "100%", objectFit: "contain" }}
            alt=""
          />
        </Box>
      </Box> */}
      {/* {data
        ?.filter((fm) => fm?.position === "TOP")
        ?.map((el) => (
          <Link>
            <img
              src={el?.file_url}
              alt="logo"
              style={{
                width: { md: "50%", xs: "100%" },
              }}
            />
          </Link>
        ))} */}
    </Container>
  );
}

export default Banner;
