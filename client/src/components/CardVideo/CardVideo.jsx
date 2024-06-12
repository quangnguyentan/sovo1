import ReactPlayer from "react-player";
import ReactHlsPlayer from "react-hls-player";
import Box from "@mui/material/Box";
import CustomGrid from "../CustomGrid/CustomGrid";
import BannerBottomVideo from "../../assets/banner_video.gif";
import FacebookIcon from "@mui/icons-material/Facebook";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TelegramIcon from "@mui/icons-material/Telegram";
import { Helmet } from "react-helmet";
import qc from "../../assets/qc.jpg";
import aftermatch from "../../assets/ẢNH trước trận đấu-01.jpg";
import {
  Player,
  BigPlayButton,
  ControlBar,
  LoadingSpinner,
  PlayToggle,
  VolumeMenuButton,
  FullscreenToggle,
} from "video-react";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import { makeStyles } from "@mui/styles";
import Button from "@mui/material/Button";
import "../../index.css";
import { useEffect, useRef, useState } from "react";
import backgroundHeaderTitle from "../../assets/nene.png";
import { apiGetAccountById } from "../../services/accountService";
import { apiGetMatchesById } from "../../services/matchService";
// import loading from "../../assets/loading.gif";
import loading from "../../assets/loading1.webp";

import {
  Link,
  unstable_HistoryRouter,
  useLocation,
  useParams,
} from "react-router-dom";
import { Chip, Container, Grid, Typography } from "@mui/material";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import { apiGetBanner } from "../../services/bannerService";

import bannerLeft from "../../assets/banner_header_left.gif";
import bannerRight from "../../assets/banner_header_right.gif";
import { apiGetStream, apiGetStreamById } from "../../services/streamService";
import videojs from "video.js";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

const useStyles = makeStyles((theme) => ({
  "@media screen and (min-width: 428px) and (max-width: 428px)": {
    video_container_bottom_banner: {
      bottom: "-40px !important",
    },
  },
  "@media only screen and (min-width: 375px) and (max-width: 375px) ": {
    video_container_bottom_banner: {
      bottom: "-40px !important",
    },
  },
  "@media only screen and (min-width: 414px) and (max-width: 414px) and (-webkit-device-pixel-ratio: 3)":
    {
      video_container_bottom_banner: {
        bottom: "-40px !important",
      },
    },
  "@media only screen and (min-width: 430px) and (max-width: 430px) ": {
    video_container_bottom_banner: {
      bottom: "-40px !important",
    },
  },
  "@media only screen and (min-width: 390px) and (max-width: 390px) and (-webkit-device-pixel-ratio: 3)":
    {
      video_container_bottom_banner: {
        bottom: "-40px !important",
      },
    },
  "@media only screen and (min-width: 320px) and (max-width: 320px) and (-webkit-device-pixel-ratio: 2)":
    {
      video_container_bottom_banner: {
        bottom: "-40px !important",
      },
    },
}));
function CardVideo({ ChatBox, titleContent, blv, data, dataStream }) {
  const [ads, setAds] = useState("");
  const [adsSetting, setAdsSetting] = useState("");
  const [stream, setStream] = useState("");
  const [allStream, setAllStream] = useState("");
  const [adsBannerBottomFull, setAdsBannerBottomFull] = useState("");
  const chatBoxIframe = (
    <Box
      sx={{
        width: { md: "30%", xs: "100%" },
        height: { md: "500px", xs: "350px" },
        py: { md: 4, xs: 0 },
      }}
    >
      <iframe
        src="https://www5.cbox.ws/box/?boxid=949782&boxtag=pXQtQ5"
        width="100%"
        height="100%"
        allowtransparency="yes"
        allow="autoplay"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
        scrolling="auto"
      ></iframe>
    </Box>
  );
  const classes = useStyles();

  // useEffect(() => {
  //   const script = document.createElement("script");

  //   script.src = "https://vjs.zencdn.net/8.10.0/video.min.js";
  //   script.async = true;
  //   document.body.appendChild(script);

  //   return () => {
  //     document.body.removeChild(script);
  //   };
  // }, []);

  const apiGetByIDStream = async (idStr) => {
    const response = await apiGetStreamById(idStr);
    if (response?.success) setStream(response?.streamId);
  };
  const apiGetAllADS = async () => {
    const response = await apiGetBanner();
    if (response?.success) {
      const filter = response?.ads
        ?.filter(
          (f) => f?.root_domain === "sovo.link" && f?.position === "START_VIDEO"
        )
        ?.map((el) => {
          return el;
        });
      setAds(filter[0]);

      const adsSet = response?.ads
        ?.filter((f) => f?.root_domain === "sovo.link")
        ?.map((el) => {
          return el;
        });
      setAdsSetting(adsSet);
      const bannerBottom = response?.ads
        ?.filter(
          (f) =>
            f?.root_domain === "sovo.link" && f?.position === "RIBBON_VIDEO"
        )
        ?.map((el) => {
          return el;
        });
      setAdsBannerBottomFull(bannerBottom[0]);
    }
  };

  useEffect(() => {
    apiGetAllADS();
  }, []);
  const { idMatches, idAccount } = useParams();
  const location = useLocation();
  const [matches, setMatches] = useState("");
  const [account, setAccount] = useState("");
  const [hidden, setHidden] = useState(false);
  const [style, setStyle] = useState(true);
  const apiGetAccount = async (ids) => {
    const response = await apiGetAccountById(ids);
    if (response.success) setAccount(response?.accountId);
  };
  const convertDate = (dateString) => {
    if (dateString) {
      const date = new Date(dateString);
      const formattedDate = `${date.getDate()}/${date.getMonth() + 1}`;
      return formattedDate;
    } else {
      const date = new Date();
      const formattedDate = `${date.getDate()}/${date.getMonth() + 1}`;
      return formattedDate;
    }
  };
  const apiGetMatches = async (ids) => {
    const response = await apiGetMatchesById(ids);
    if (response.success) setMatches(response?.matchesId);
  };
  useEffect(() => {
    if (location.pathname.slice(0, 2) !== "/") {
      apiGetMatches(idMatches) &&
        apiGetAccount(idAccount) & apiGetByIDStream(Number(idMatches));
    }
  }, []);
  const styles = {
    heroContainer: {
      backgroundImage: `url('${backgroundHeaderTitle}')`,
      backgroundPosition: "bottom center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "100% 100%",
    },
  };

  let interval = 5;
  let timeArrow = 31;
  const [time, setTime] = useState(null);
  const [hiddenButton, setHiddenButton] = useState(false);
  const [timeNext, setTimeNext] = useState(null);
  const changeTime = () => {
    interval--;
    if (interval < 0) return;
    return interval;
  };

  // const changeArrowTime = () => {
  //   timeArrow--
  //   if(timeArrow < 0) {
  //     setChangeSource(sources.bunnyTrailer )
  //     return
  //   }
  //   return timeArrow
  // }
  const apiGetAllStream = async () => {
    const response = await apiGetStream();
    if (response.success) setAllStream(response?.stream);
  };
  useEffect(() => {
    apiGetAllStream();
  }, []);
  useEffect(() => {
    if (hidden) {
      const timeInterVal = setInterval(() => {
        const newTime = changeTime();
        if (newTime === undefined || newTime < 0) return;
        setTime(newTime);
      }, 1000);
      return () => {
        clearInterval(timeInterVal);
      };
    }
  }, [hidden]);

  //   useEffect(() => {
  //     const timeNextArrow = setInterval(() => {
  //        const newTimeArrow = changeArrowTime()
  //        setTimeNext(newTimeArrow)
  //      }, 1000)
  //      return (() => {
  //        clearInterval(timeNextArrow)
  //      })
  //  }, [])
  const handleChangeFullscreen = () => {
    let video;
    // let html = `
    //   <image src="https://img.icons8.com/?size=100&id=7FSknHLAHdnP&format=png&color=000000"/>
    // `

    document.addEventListener("fullscreenchange", function () {
      var isFullscreen = document.fullscreenElement !== null;
      if (isFullscreen && adsBannerBottomFull) {
        // Nếu video ở chế độ fullscreen, hiển thị banner GIF
        var banner = document.createElement("img");
        var icon = document.createElement("img");
        const phoneWidth = 480; // Đặt theo ý thích của bạn
        const phoneHeight = 900; // Đặt theo ý thích của bạn

        banner.src = `${adsBannerBottomFull?.file_url}`;
        banner.style.position = "absolute";
        banner.style.bottom = 0;
        banner.style.left = 0;
        banner.style.width = "100%";
        banner.style.height = "80px";
        banner.style.cursor = "pointer";
        banner.style.backgroundRepeat = "no-repeat";
        banner.style.zIndex = "10";
        icon.src =
          "https://img.icons8.com/?size=100&id=46&format=png&color=000000";
        icon.style.position = "absolute";
        icon.style.cursor = "pointer";
        icon.style.bottom = "40px";
        icon.style.right = "0";
        icon.style.width = "50px";
        icon.style.height = "50px";
        icon.style.display = "flex";
        icon.style.zIndex = "9999";

        document.getElementById("my-video").appendChild(banner);
        document.getElementById("my-video").appendChild(icon);

        var hideBannerAndIcon = function () {
          banner.style.display = "none";
          icon.style.display = "none";
        };
        if (
          window.innerWidth <= phoneWidth ||
          window.innerHeight <= phoneHeight
        ) {
          banner.style.display = "none";
          icon.style.display = "none";
        }
        window.addEventListener("click", hideBannerAndIcon);
        var transferLink = function () {
          window.open(
            "https://www.king368uefa.com/vi-VN/JoinNow?btag=b_749__236",
            "_blank"
          );
        };
        banner.addEventListener("click", transferLink);
      } else {
        // Nếu video thoát khỏi chế độ fullscreen, loại bỏ banner GIF
        var banner = document.querySelector(
          `img[src='${adsBannerBottomFull?.file_url}']`
        );
        var icon = document.querySelector(
          'img[src="https://img.icons8.com/?size=100&id=46&format=png&color=000000"]'
        );
        if (banner && icon) {
          banner.remove();
          icon.remove();
        }
      }
      return () => {
        video.removeEventListener("fullscreenchange");
      };
    });
  };
  function waitInitElement(selector) {
    return new Promise((resolve) => {
      let interval = setInterval(() => {
        let exist = document.querySelector(selector);
        if (exist !== undefined && exist != null && exist !== false) {
          clearInterval(interval);
          resolve(true);
        }
      }, 1000);
    });
  }
  const waitButtonClick = () => {
    waitInitElement("#my-video_html5_api").then((rs) => {
      const video = document.getElementById("my-video_html5_api");
      const myVideo = document.getElementById("my-video");
      
      if(video){
      video.play();
      }
      console.log(video)
      if(myVideo){
        myVideo.classList.remove("vjs-paused");
        myVideo.classList.add("vjs-playing");
      }

      const controlBar = document.querySelector(
        ".vjs-control-bar > :first-child"
      );
      if (controlBar) {
        controlBar.classList.remove("vjs-paused");
        controlBar.classList.add("vjs-playing");
      
      }

    });
  };

  const handleClick = () => {
    const video = document.getElementById("my-video_html5_api");

    const adSkipButton = document.getElementById("ad-skip-button");
    const userGestureEvents = ["touchend", "click"];
    const handleAdSkip = () => {
      console.log(video);
      video.play();
    };
    userGestureEvents.forEach((event) => {
      adSkipButton.addEventListener(event, handleAdSkip);
    });

    return () => {
      userGestureEvents.forEach((event) => {
        adSkipButton.removeEventListener(event, handleAdSkip);
      });
      video.removeEventListener("fullscreenchange");
    };
  };

  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const script = document.createElement("script");
    const link = document.createElement("link");

    link.rel = "stylesheet";
    link.href = "https://vjs.zencdn.net/8.10.0/video-js.css";
    script.src = "https://vjs.zencdn.net/8.10.0/video.min.js";
    script.async = true;
    document.body.appendChild(script);
    document.head.appendChild(link);
    window.addEventListener("DOMContentLoaded", waitButtonClick);

    handleChangeFullscreen();

    // Cleanup function
    return () => {
      document.body.removeChild(script);
      document.head.removeChild(link);
      window.removeEventListener("DOMContentLoaded", waitButtonClick);
    };
  }, [waitButtonClick]);
  return (
    <Box
      sx={{
        height: "fit-content",
        md: 0,
        xs: 0,
        bgcolor: "#1B1C21",
        p: 0,
        pt: { xl: 1, xs: 0 },
      }}
    >
      {!titleContent && matches && (
        <Container disableGutters sx={{ py: { md: 0, xs: 0 }, px: 2 }}>
          {adsSetting &&
            adsSetting?.map((el) => (
              <Box key={el?.id}>
                {el?.position === "TOP" ? (
                  <Box sx={{ display: "flex" }}>
                    <Box
                      sx={{
                        width: "100%",
                        py: { md: 0, xs: 0 },
                        display: { md: "flex", xs: "flex" },
                        flexDirection: { xs: "column", md: "row" },
                      }}
                    >
                      <Box sx={{ width: { md: "100%", xs: "100%" } }}>
                        <Link
                          onClick={() => {
                            window.open(
                              "https://www.king368uefa.com/vi-VN/JoinNow?btag=b_749__236",
                              "_blank"
                            );
                          }}
                        >
                          <img
                            src={el?.file_url}
                            style={{ width: "100%", objectFit: "contain" }}
                            alt=""
                          />
                        </Link>
                      </Box>
                      <Box sx={{ width: { md: "100%", xs: "100%" } }}>
                        <Link
                          onClick={() => {
                            window.open(
                              "https://www.king368uefa.com/vi-VN/JoinNow?btag=b_749__236",
                              "_blank"
                            );
                          }}
                        >
                          <img
                            src={el?.file_url}
                            style={{ width: "100%", objectFit: "contain" }}
                            alt=""
                          />
                        </Link>
                      </Box>
                    </Box>
                  </Box>
                ) : (
                  ""
                )}
              </Box>
            ))}

          <Box
            sx={{
              pt: {
                xs: 0,
                md: 0,
                width: "100%",
                height: { md: "120px", xs: "120px" },
              },
            }}
            style={styles.heroContainer}
          >
            <Box
              sx={{
                py: 4,
                display: { md: "flex", xs: "none" },
                gap: 4,
                justifyContent: "space-between",
                px: { xs: 1, md: 8 },
                alignItems: "center",
                color: "white",
              }}
            >
              <Box
                sx={{
                  flexDirection: "column",
                  alignItems: "center",
                  display: "flex",
                  gap: 1,
                }}
              >
                <img
                  width="70px"
                  height="70px"
                  src={matches[0]?.host_club_logo_url}
                  alt=""
                />
                <Typography sx={{ fontSize: "14px" }}>
                  {matches[0]?.host_club_name}
                </Typography>
              </Box>
              <Box
                sx={{
                  flexDirection: "column",
                  alignItems: "center",
                  display: "flex",
                  gap: 1,
                }}
              >
                <Link style={{ textDecoration: "none" }}>
                  <Chip
                    label={
                      stream && stream[0]?.m3u8_url ? (
                        <Box
                          sx={{ display: "flex", alignItems: "center", gap: 1 }}
                        >
                          <Box className="truc_tiep"></Box>
                          <span>Đang diễn ra</span>
                        </Box>
                      ) : (
                        "Chưa diễn ra"
                      )
                    }
                    className="button_info"
                    sx={{
                      color: "white",
                      borderRadius: "10px",
                      fontWeight: 600,
                      width: "fit-content",
                      height: "30px",
                      fontSize: "10px",
                    }}
                  />
                </Link>
                <Typography sx={{ fontSize: "25px" }}>0 - 0</Typography>
                <Link style={{ textDecoration: "none" }}>
                  <Chip
                    label="Cược TA88 đảm bảo uy tín 100%"
                    className="button_info"
                    sx={{
                      display: { md: "flex", xs: "none" },
                      color: "white",
                      borderRadius: "3px",
                      fontWeight: 600,
                      width: "fit-content",
                      height: "30px",
                      fontSize: "10px",
                    }}
                  />
                </Link>
                <Link style={{ textDecoration: "none" }}>
                  <Chip
                    label="Cược LUCKY88 đảo bảo uy tín 100%"
                    className="button_info"
                    sx={{
                      display: { md: "flex", xs: "none" },
                      color: "white",
                      borderRadius: "3px",
                      fontWeight: 600,
                      width: "fit-content",
                      height: "30px",
                      fontSize: "10px",
                    }}
                  />
                </Link>
              </Box>
              <Box
                sx={{
                  flexDirection: "column",
                  alignItems: "center",
                  display: "flex",
                  gap: 1,
                }}
              >
                <img
                  width="70px"
                  height="70px"
                  src={matches[0]?.guest_club_logo_url}
                  alt=""
                />
                <Typography sx={{ fontSize: "14px" }}>
                  {matches[0]?.guest_club_name}
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box
            sx={{
              width: "100%",
              height: "60px",
              p: 0,
              display: "flex",
              flexDirection: "column",
              color: "white",
              pt: 1,
            }}
          >
            <Box
              sx={{
                fontSize: { md: "15px", xs: "12px" },
                fontWeight: 600,
                py: 1,
              }}
            >
              Phát trực tiếp {matches[0]?.host_club_name} vs{" "}
              {matches[0]?.guest_club_name} vào lúc{" "}
              {matches[0]?.start_time?.slice(0, -3)}, ngày{" "}
              {convertDate(matches[0]?.start_date)}
            </Box>
            <Box
              sx={{
                fontStyle: "italic",
                color: "gray",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  fontSize: { md: "17px", xs: "12px" },
                  textTransform: "capitalize",
                  display: { md: "flex", xs: "inline-block" },
                  fontWeight: 600,
                  color: "white",
                }}
              >
                {matches[0]?.tournament_name}
              </Typography>
              <Box sx={{ display: "flex" }}>
                <Typography
                  sx={{
                    fontSize: { md: "15px", xs: "12px" },
                    textTransform: "capitalize",
                    display: { md: "flex", xs: "inline-block" },
                    fontWeight: 600,
                    color: "white",
                  }}
                >
                  Người bình luận:&nbsp;
                </Typography>

                <Typography
                  sx={{
                    fontSize: { md: "15px", xs: "12px" },
                    textTransform: "capitalize",
                    display: { md: "flex", xs: "inline-block" },
                    fontWeight: 600,
                    color: "white",
                  }}
                >
                  {account[0]?.name}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Container>
      )}
      <Box
        sx={{
          display: { md: "flex" },
          gap: 2,
          px: {
            md: location.pathname !== "/" ? 2 : 0,
            xl: location.pathname !== "/" ? 2 : 0,
          },
        }}
      >
        <Box
          sx={{
            width: {
              md: location?.pathname === "/" ? "66%" : "70%",
              xs: "100%",
            },
            height: "100%",
          }}
        >
          {location.pathname.slice(0, 2) !== "/" ? (
            <Box sx={{ height: "30px" }} />
          ) : (
            ""
          )}
          {hidden && !hiddenButton && (
            <Box
              sx={{
                position: "relative ",
                display: "flex",
                width: { md: "100%", xs: "100%" },
                justifyContent: "space-between",
              }}
            >
              {/* {changeSource !== sources.bunnyTrailer && <Button variant="contained" style={{ position : 'absolute', zIndex : 1, 
        color : 'white', fontSize : '10px', textTransform : 'capitalize', cursor : 'default',
        right : { md : '68%'}, width : 'fit-cotent', margin : '10px',  height: '30px', backgroundColor : 'black' }}>Video sẽ tự động bỏ qua sau {timeNext}</Button>} */}
              {ads && stream ? (
                time === 0 || time === undefined ? (
                  <Button
                    id="ad-skip-button"
                    endIcon={<SkipNextIcon />}
                    onClick={() => {
                      waitButtonClick();
                      setVisible(true);
                      setHiddenButton(true);
                    }}
                    variant="contained"
                    style={{
                      position: "absolute",
                      zIndex: 1,
                      color: "white",
                      fontSize: "10px",
                      textTransform: "capitalize",
                      cursor: "pointer",
                      right: 10,
                      width: "fit-content",
                      margin: "25px",
                      height: "30px",
                      backgroundColor: "black",
                    }}
                  >
                    Bỏ qua
                  </Button>
                ) : (
                  <Button
                    endIcon={<SkipNextIcon />}
                    variant="contained"
                    style={{
                      position: "absolute",
                      zIndex: 1,
                      color: "white",
                      fontSize: "10px",
                      textTransform: "capitalize",
                      cursor: "default",
                      right: 10,
                      width: "fit-content",
                      margin: "25px",
                      height: "30px",
                      backgroundColor: "black",
                    }}
                  >
                    Có thể bỏ qua {time ? time : 5}
                  </Button>
                )
              ) : (
                ""
              )}
            </Box>
          )}
          <Box sx={{ width: "100%", height: "100%", position: "relative" }}>
            {visible && stream && (
              <Box
                className="video_container"
                sx={{
                  height: { md: "470px" },
                }}
              >
                <video
                  id="my-video"
                  class="video-js"
                  controls={true}
                  preload="auto"
                  autoPlay="autoPlay"
                  playsInline
                  poster={!stream[0]?.m3u8_url ? qc : ""}
                  videoWidth="100%"
                  videoHeight="100%"
                  data-setup="{}"
                >
                  <source
                    src={stream[0]?.m3u8_url}
                    type="application/x-mpegURL"
                  />
                </video>
              </Box>
            )}

            {!visible && ads && (
              <Player
                onPlay={() => {
                  setHidden(true);
                }}
                controls={false}
                width="100%"
                playsInline
                height="100%"
                src={
                  ads?.file_url
                    ? ads?.file_url
                    : "https://sovotv.live/uploads/resources/videos/67aee69f05e555769b7c925b6d36aeb7.mp4"
                }
                poster={aftermatch}
                preload="auto"
                className="customIcon"
              >
                <ControlBar disableDefaultControls autoHide={true}>
                  <ControlBar disableDefaultControls>
                    {/* <PlayToggle /> */}
                    {/* <VolumeMenuButton /> */}
                  </ControlBar>
                  <ControlBar disableDefaultControls>
                    {/* <FullscreenToggle /> */}
                  </ControlBar>
                </ControlBar>
                <BigPlayButton
                  className={hidden ? "hidden_play" : ""}
                  position="center"
                />
                <LoadingSpinner />
              </Player>
            )}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Box
                className="video_container_image"
                sx={{
                  position: "absolute",
                  bottom: {
                    md: 20,
                    xs:
                      location.pathname.slice(0, 2) === "/" && visible === true
                        ? 0
                        : 10,
                  },
                  left: 12,
                  objectFit: "contain",
                  width: { md: "90px", xs: "50px", zIndex: 1 },
                }}
              >
                <img
                  src="https://sovotv.live/uploads/resources/images/6dabfc682d7291dbcdb56e76cd965ae6.jpg"
                  style={{ width: "300px" }}
                  alt=""
                />
              </Box>
              <Box
                className="video_container_link"
                sx={{
                  zIndex: 1,
                  objectFit: "contain",
                  position: "absolute",
                  right: { xs: "12px", md: "12px" },
                  display: " flex",
                  gap: { md: 2, xs: 1 },
                  color: "white",
                  fontSize: "10px",
                  textTransform: "capitalize",
                  cursor: "pointer",
                  bottom: {
                    md: 25,
                    xs:
                      location.pathname.slice(0, 2) === "/" && visible === true
                        ? 0
                        : 15,
                  },
                }}
              >
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  style={{ textDecoration: "none" }}
                  to="https://www.king368uefa.com/vi-VN/JoinNow?btag=b_749__236"
                >
                  <Chip
                    label="CƯỢC CMD68"
                    className="button_info"
                    sx={{
                      color: "white",
                      borderRadius: "10px",
                      fontWeight: 600,
                      width: { md: "fit-content", xs: "fit-content" },
                      height: { md: "25px", xs: "20px" },
                      fontSize: "10px",
                    }}
                  />
                </Link>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  style={{ textDecoration: "none" }}
                >
                  <Chip
                    label="CƯỢC NGAY"
                    className="button_info"
                    sx={{
                      color: "white",
                      borderRadius: "10px",
                      fontWeight: 600,
                      width: { md: "fit-content", xs: "fit-content" },
                      height: { md: "25px", xs: "20px" },
                      fontSize: "10px",
                    }}
                  />
                </Link>
              </Box>
              <Box
                className={classes.video_container_bottom_banner}
                sx={{
                  zIndex: 1,
                  position: "absolute",
                  cursor: "pointer",
                  bottom: {
                    md: -10,
                    xs:
                      location.pathname.slice(0, 2) === "/" && visible === true
                        ? 0
                        : -10,
                  },
                  width: { md: "100%", xs: "100%" },
                }}
              >
                {adsSetting &&
                  adsSetting?.map((el) => (
                    <Link key={el?.id}>
                      {el?.position === "RIBBON_VIDEO" ? (
                        <img
                          className="react-player1"
                          src={el?.file_url}
                          style={{
                            width: "100%",
                            objectFit: "contain",
                            height: "fit-content",
                          }}
                          alt=""
                        />
                      ) : (
                        ""
                      )}
                    </Link>
                  ))}
              </Box>
            </Box>
          </Box>
          <Box sx={{ height: { md: 0, xs: "20px" } }} />
          {!blv && ads && (
            <>
              <Box
                sx={{
                  display: "flex ",
                  justifyContent: "space-between",
                  py: 0.5,
                }}
              >
                <Box
                  sx={{
                    display: {
                      xs: "flex",
                      md: "flex",
                      width: "100%",
                    },
                  }}
                >
                  <Button
                    variant="contained"
                    lassName="button_info"
                    startIcon={<PlayArrowIcon style={{ opacity: 0.65 }} />}
                    sx={{
                      boxShadow: "none",
                      bgcolor: "red",
                      color: "white",
                      fontWeight: 600,
                      width: "fit-content",
                      height: "fit-content",
                      fontSize: "10px",
                      m: { xs: 1 },
                    }}
                  >
                    <Box sx={{}}>
                      <Typography
                        sx={{ fontSize: "9px", textTransform: "capitalize" }}
                      >
                        Cược ngay
                      </Typography>
                    </Box>
                  </Button>
                </Box>
                <Box
                  sx={{
                    display: {
                      xs: "flex",
                      md: "flex",
                      justifyContent: "end",
                      width: "100%",
                    },
                  }}
                >
                  <Button
                    variant="contained"
                    lassName="button_info"
                    startIcon={<TelegramIcon color="blue" />}
                    sx={{
                      boxShadow: "none",
                      color: "white",
                      borderRadius: "10px",
                      fontWeight: 600,
                      width: "fit-content",
                      height: "fit-content",
                      m: { xs: 1 },
                    }}
                  >
                    <Link
                      onClick={() => {
                        window.open(
                          "https://t.me/chotkeocungblvhangbai",
                          "_blank"
                        );
                      }}
                      style={{ textDecoration: "none" }}
                    >
                      <Typography
                        sx={{
                          fontSize: "9px",
                          textTransform: "capitalize",
                          color: "white",
                        }}
                      >
                        Telegram
                      </Typography>
                    </Link>
                  </Button>
                  <Button
                    variant="contained"
                    lassName="button_info"
                    startIcon={<FacebookOutlinedIcon color="blue" />}
                    sx={{
                      boxShadow: "none",
                      color: "white",
                      borderRadius: "10px",
                      fontWeight: 600,
                      width: "fit-content",
                      height: "fit-content",
                      fontSize: "10px",
                      m: { xs: 1 },
                    }}
                  >
                    <Link
                      onClick={() => {
                        window.open(
                          "https://www.facebook.com/groups/blvhangnghien",
                          "_blank"
                        );
                      }}
                      style={{ textDecoration: "none" }}
                    >
                      <Typography
                        sx={{
                          fontSize: { md: "9px", xs: "9px" },
                          textTransform: "capitalize",
                          color: "white",
                        }}
                      >
                        Facebook
                      </Typography>
                    </Link>
                  </Button>
                </Box>
              </Box>
            </>
          )}
        </Box>
        {ChatBox ? (
          chatBoxIframe
        ) : (
          <CustomGrid size={12} flexDirectionStyle headerBox />
        )}
      </Box>
      {/* {ads?.map((el) => (
           <Link key={el?.id}>
            {el?.position === "RIGHT" ?  <Box sx={{ flexDirection : 'column', display : { md : 'flex', sm : 'none', xs : 'none'}, height : '100%' }}>
        <img src={el?.file_url} alt=""style={{ position : 'fixed', right : '5%', top : '15%', height : '40%' }}/>
        <img src={el?.file_url} alt=""style={{ position : 'fixed', right : '5%', bottom :  '5%' , height : '40%'}}/>
    </Box>
       : ''}
           </Link>
           ))} */}
      {/* <Box
        sx={{
          width: "100%",
          py: { md: 1, xs: 0 },
          display: { md: "flex", xs: "flex" },
          flexDirection: { xs: "column", md: "row" },
        }}
      >
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
      </Box> */}
      <Box sx={{ height: "fit-content", px: 2 }}>
        {location.pathname.slice(0, 2) !== "/" ? (
          <CustomGrid start={0} end={6} />
        ) : (
          ""
        )}
      </Box>
      {/* <Box sx={{ width : '100%', py :  { md :  1, xs : 0}, display : { md : 'flex' , xs  : 'flex'}, flexDirection : { xs : 'column', md : 'row'} }}>
          <Box sx={{ width : { md : '50%', xs : '100%'} }}>
            <img src={BannerBottomVideo} style={{ width :  '100%', objectFit : 'contain' }} alt="" /> 
          </Box>
          <Box sx={{ width : { md : '50%', xs : '100%'} }}>
            <img src={BannerBottomVideo} style={{ width :  '100%', objectFit : 'contain' }} alt="" /> 
          </Box>
      </Box> */}
    </Box>
  );
}

export default CardVideo;
