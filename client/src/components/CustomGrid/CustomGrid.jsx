import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { experimentalStyled as styled } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import "../../index.css";
import Chip from "@mui/material/Chip";
import {
  Link,
  NavLink,
  useLocation,
  useNavigate,
  useNavigation,
  useParams,
} from "react-router-dom";
import path from "../../utils/path";
import { Button, Container, css } from "@mui/material";
import { apiGetMatches } from "../../services/matchService";
import { useEffect, useState } from "react";
import { apiGetAccount } from "../../services/accountService";
import { apiGetStream } from "../../services/streamService";
import aftermatch from '../../assets/after_match.png'
import buttonBit from '../../assets/Khung tran dau-01.png'
import khung from '../../assets/ĐƯỜNG VIỀN TRÊN TRẬN-01.png'

function CustomGrid({
  size,
  flexDirectionStyle,
  headerBox,
  start,
  end,
  custom,
}) {
  const [matches, setMatches] = useState("");
  const [account, setAccount] = useState("");
  const [stream, setStream] = useState("");

  const location = useLocation();
  const linkSetBit =
    "https://www.king368uefa.com/vi-VN/JoinNow?btag=b_749__236";
  const styles = {
    heroContainer: {
      backgroundImage:
        `url('${aftermatch}')`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "100% 100%",
    },
  };
  const css = {
    container: {
      backgroundImage:
        `url('${buttonBit}')`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "100% 100%",
    },
  };
  const style = {
    container: {
      backgroundImage:
        `url('${khung}')`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "100% 100%",
    },
  };
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    height: "fit-cotent",
  }));

  const getApiMatches = async () => {
    const response = await apiGetMatches();
    if (response.success) setMatches(response.matches);
  };
  const getApiAccount = async () => {
    const response = await apiGetAccount();
    if (response.success) setAccount(response.account);
  };
  useEffect(() => {
    getApiMatches() && getApiAccount() && apiGetStreamSetting();
  }, []);
  const convertDate = (dateString) => {
    if (dateString) {
      const date = new Date(dateString);
      const formattedDate = `${date.getDate()}/${date.getMonth() + 1}`;
      return formattedDate;
    } else {
      const date = new Date();
      const formattedDate = `${date.getHours()}:${date.getMinutes()} - ${date.getDate()}/${
        date.getMonth() + 1
      }`;
      return formattedDate;
    }
  };

  const navigate = useNavigate();
  const apiGetStreamSetting = async () => {
    const response = await apiGetStream();
    if (response.success) setStream(response?.stream);
  };
  const checkOnlStream = () => {
    let rs = [];
    if (stream && matches) {
      matches?.filter((el) => {
        rs.push(el?.id);
      });
      return stream?.filter((el) => rs.includes(el?.match_id));
    }
  };

  const ls = [];
  checkOnlStream()?.filter((rs) => ls.push(rs?.match_id));
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Box
      style={style.container}
        sx={{
          mb: 1,
          color: "white",
          width: "100%",
          border: 1,
          borderColor: "white",
          background: "linear-gradient(50deg, #ff6427, #770000)",
          borderRadius: "5px",
          fontSize: "13px",
          fontWeight: 600,
          display: headerBox ? { md: "flex", xs: "none" } : "none",
          justifyContent: "center",
        }}
      >
        CÁC TRẬN HOT
      </Box>
      {size > 3 ? (
        <Box
          sx={{
            flexDirection: { md: flexDirectionStyle ? "column" : "" },
            display: { xs: "none", md: "flex", flexDirection: "column" },
          }}
        >
          <Grid
            container
            rowSpacing={3}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={size}>
              {matches &&
                matches?.slice(0, 3)?.map((el) => (
                  <>
                    {account &&
                      account
                        ?.filter((acc) => acc?.id === el?.account_id)
                        ?.map((result) => (
                          <Grid
                            item
                            xs={2}
                            sm={4}
                            md={12}
                            key={el?.id}
                            sx={{ py: 1 }}
                          >
                            <Link
                              key={el?.id}
                              to={{
                                pathname: `/video/${el?.id}/${result?.id}/${el?.slug}`,
                              }}
                              style={{ textDecoration: "none" }}
                            >
                              <Item
                                style={styles.heroContainer}
                                
                                key={el?.id}
                                sx={{
                                  // borderRadius: "10px",
                                  // border: 1,
                                  flexDirection: "column",
                                  height: "fit-content",
                                  cursor: "pointer",
                                  "&:hover": {
                                    transform: "translateY(-3px)",
                                    transitionDuration: "5s",
                                  },
                                  py : 1.5,
                                }}
                              >
                               
                                <Box
                                  width="100%"
                                  height="100%"
                                  sx={{
                                    
                                    // bgcolor: "#232324",
                                    // borderBottomLeftRadius: "10px",
                                    // borderBottomRightRadius: "10px",
                                  }}
                                >
                                 <Box
                                  sx={{
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                    display: "-webkit-box",
                                    WebkitLineClamp: "1",
                                    WebkitBoxOrient: "vertical",
                                    color: "white",
                                    display: "flex",
                                    alignItems: "end",
                                    justifyContent: "space-between",
                                    px: 2,
                                    // borderTopRightRadius: "10px",
                                    // borderTopLeftRadius: "10px",
                                  
                                  }}
                                >
                                  <Typography
                                    sx={{
                                      fontSize: "13px",
                                      fontWeight: 600,
                                      color: "white",
                                      overflow: "hidden",
                                      textOverflow: "ellipsis",
                                      display: "-webkit-box",
                                      WebkitLineClamp: "1",
                                      WebkitBoxOrient: "vertical",
                                    }}
                                  >
                                    {el?.tournament_name}
                                  </Typography>
                                  <Typography
                                    sx={{
                                      fontSize: "15px",
                                      fontWeight: 600,
                                      overflow: "hidden",
                                      textOverflow: "ellipsis",
                                      display: "-webkit-box",
                                      WebkitLineClamp: "1",
                                      WebkitBoxOrient: "vertical",
                                    }}
                                  >
                                    {result?.name}
                                  </Typography>
                                </Box>
{/* 
                                  <Divider
                                    sx={{ border: "1", borderColor: "white" }}
                                  /> */}
                                  <Box
                                    sx={{
                                      color: "white",
                                      display: "flex",
                                      alignItems: "center",
                                      justifyContent: "space-between",
                                      px: 1,
                                    }}
                                  >
                                    <Box sx={{ flexDirection: "column" }}>
                                      <img
                                        style={{ objectFit: "cover", width :"18px",
                                          height: "18px" }}
                                        src={el?.host_club_logo_url}
                                        alt=""
                                      />
                                      <Typography
                                        sx={{
                                          fontSize: "14px",
                                          overflow: "hidden",
                                          textOverflow: "ellipsis",
                                          display: "-webkit-box",
                                          WebkitLineClamp: "1",
                                          WebkitBoxOrient: "vertical",
                                        }}
                                      >
                                        {el?.host_club_name}
                                      </Typography>
                                    </Box>

                                    <Box sx={{ flexDirection: "column" }}>
                                      <Typography
                                        sx={{
                                          fontSize: "15px",
                                          fontWeight: 600,
                                        }}
                                      >
                                        {el?.start_time?.slice(0, -3)} -{" "}
                                        {convertDate(el?.start_date)}
                                      </Typography>
                                      <Typography
                                        sx={{
                                          fontSize: "15px",
                                          fontWeight: 600,
                                          color: "white",
                                        }}
                                      >
                                        vs
                                      </Typography>
                                    </Box>
                                    <Box
                                      sx={{
                                        flexDirection: "column",
                                        height: "50px",
                                        py: 1,
                                      }}
                                    >
                                      <img
                                        
                                        style={{ objectFit: "cover", width:"18px",
                                          height:"18px" }}
                                        src={el?.guest_club_logo_url}
                                        alt=""
                                      />
                                      <Typography
                                        sx={{
                                          fontSize: "14px",
                                          overflow: "hidden",
                                          textOverflow: "ellipsis",
                                          display: "-webkit-box",
                                          WebkitLineClamp: "1",
                                          WebkitBoxOrient: "vertical",
                                        }}
                                      >
                                        {el?.guest_club_name}
                                      </Typography>
                                    </Box>
                                  </Box>
                                  
                                  <Box
                                    sx={{
                                      
                                      color: "white",
                                      display: "flex",
                                      alignItems: "end",
                                      justifyContent: "space-between",
                                      px: 2,
                                    }}
                                  >
                                    <Typography
                                      sx={{ fontSize: "15px", fontWeight: 600 }}
                                    >
                                      {ls?.includes(el?.id) ? (
                                        <Box
                                          sx={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: 1,
                                          }}
                                        >
                                          <Box className="truc_tiep"></Box>
                                          <span>Đang diễn ra</span>
                                        </Box>
                                      ) : (
                                        "Chưa diễn ra"
                                      )}
                                    </Typography>
                                    <Link
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      onClick={(e) => e.stopPropagation()}
                                      to={linkSetBit}
                                      style={{ textDecoration: "none",  height : '28px' }}
                                    >
                                      <Button
                                      style={css.container}
                                        className="button_info"
                                        sx={{
                                         mt : 1,
                                          borderRadius: "10px",
                                          fontWeight: 700,
                                          width: "90px",
                                          height: "25px",
                                          fontSize: "10px",
                                          color : 'black',
                                          fontSize : '8px'
                                        }}
                                      >Đặt Cược</Button>
                                    </Link>
                                  </Box>
                                </Box>
                              </Item>
                            </Link>
                          </Grid>
                        ))}
                  </>
                ))}
            </Grid>
          </Grid>
        </Box>
      ) : (
        <Box sx={{ flexGrow: 1, pl : { xl : 3, xs: 0}, py : 3 }}>
          {location.pathname.slice(0, 2) !== "/" ? (
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 2, sm: 8, md: 12 }}
              sx={{bgcolor : {xl : '#000000'},  pr : {xl : 3, xs : 0}, pb : {xl : 3, xs : 0}, borderRadius : {xl : '10px'}}}
            >
              {matches &&
                matches?.slice(start, end)?.map((el) => (
                  <>
                    {account &&
                      account
                        ?.filter((acc) => acc?.id === el?.account_id)
                        ?.map((result) => (
                          <Grid item xs={2} sm={4} md={4} key={el?.id}  >
                            {/* {stream && stream?.filter(str => str?.match_id === account?.id)?.map(rs => ( */}
                            <Link
                              onClick={() => {
                                window.location.href = `/video/${el?.id}/${result?.id}/${el?.slug}`;
                              
                              }}
                              to={`/video/${el?.id}/${result?.id}/${el?.slug}`}
                              style={{ textDecoration: "none" }}
                            >
                              <Item
                                style={styles.heroContainer}
                                key={el?.id}
                                sx={{
                                  // borderRadius: "10px",
                                  // border: 1,
                                  flexDirection: "column",
                                  height: "fit-content",
                                  cursor: "pointer",
                                  "&:hover": {
                                    transform: "translateY(-3px)",
                                    transitionDuration: "5s",
                                  },
                                }}
                              >
                               
                                <Box
                                  width="100%"
                                  height="100%"
                                  sx={{
                                    
                                    // bgcolor: "#232324",
                                    // borderBottomLeftRadius: "10px",
                                    // borderBottomRightRadius: "10px",
                                  }}
                                >
                                 <Box
                                  sx={{
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                    display: "-webkit-box",
                                    WebkitLineClamp: "1",
                                    WebkitBoxOrient: "vertical",
                                    color: "white",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    px: 2,
                                    // borderTopRightRadius: "10px",
                                    // borderTopLeftRadius: "10px",
                                    p: 1,
                                  
                                  }}
                                >
                                  <Typography
                                    sx={{
                                      fontSize: "13px",
                                      fontWeight: 600,
                                      color: "white",
                                      overflow: "hidden",
                                      textOverflow: "ellipsis",
                                      display: "-webkit-box",
                                      WebkitLineClamp: "1",
                                      WebkitBoxOrient: "vertical",
                                    }}
                                  >
                                    {el?.tournament_name}
                                  </Typography>
                                  <Typography
                                    sx={{
                                      fontSize: "15px",
                                      fontWeight: 600,
                                      overflow: "hidden",
                                      textOverflow: "ellipsis",
                                      display: "-webkit-box",
                                      WebkitLineClamp: "1",
                                      WebkitBoxOrient: "vertical",
                                    }}
                                  >
                                    {result?.name}
                                  </Typography>
                                </Box>
{/* 
                                  <Divider
                                    sx={{ border: "1", borderColor: "white" }}
                                  /> */}
                                  <Box
                                    sx={{
                                      color: "white",
                                      display: "flex",
                                      alignItems: "center",
                                      justifyContent: "space-between",
                                      px: 2,
                                      py: 1,
                                    }}
                                  >
                                    <Box sx={{ flexDirection: "column" }}>
                                      <img
                                     
                                        style={{ objectFit: "cover", width :"18px",
                                          height: "18px" }}
                                        src={el?.host_club_logo_url}
                                        alt=""
                                      />
                                      <Typography
                                        sx={{
                                          fontSize: "14px",
                                          overflow: "hidden",
                                          textOverflow: "ellipsis",
                                          display: "-webkit-box",
                                          WebkitLineClamp: "1",
                                          WebkitBoxOrient: "vertical",
                                        }}
                                      >
                                        {el?.host_club_name}
                                      </Typography>
                                    </Box>

                                    <Box sx={{ flexDirection: "column" }}>
                                      <Typography
                                        sx={{
                                          fontSize: "15px",
                                          fontWeight: 600,
                                        }}
                                      >
                                        {el?.start_time?.slice(0, -3)} -{" "}
                                        {convertDate(el?.start_date)}
                                      </Typography>
                                      <Typography
                                        sx={{
                                          fontSize: "15px",
                                          fontWeight: 600,
                                          color: "white",
                                        }}
                                      >
                                        vs
                                      </Typography>
                                    </Box>
                                    <Box
                                      sx={{
                                        flexDirection: "column",
                                        height: "50px",
                                        py: 0.5,
                                      }}
                                    >
                                      <img
                                        
                                        style={{ objectFit: "cover", width:"18px",
                                          height:"18px" }}
                                        src={el?.guest_club_logo_url}
                                        alt=""
                                      />
                                      <Typography
                                        sx={{
                                          fontSize: "14px",
                                          overflow: "hidden",
                                          textOverflow: "ellipsis",
                                          display: "-webkit-box",
                                          WebkitLineClamp: "1",
                                          WebkitBoxOrient: "vertical",
                                        }}
                                      >
                                        {el?.guest_club_name}
                                      </Typography>
                                    </Box>
                                  </Box>
                                  {/* <Divider
                                    sx={{ border: "1", borderColor: "white" }}
                                  /> */}
                                  <Box
                                    sx={{
                                      p: 1,
                                      color: "white",
                                      display: "flex",
                                      alignItems: "center",
                                      justifyContent: "space-between",
                                      px: 2,
                                    }}
                                  >
                                    <Typography
                                      sx={{ fontSize: "15px", fontWeight: 600 }}
                                    >
                                      {ls?.includes(el?.id) ? (
                                        <Box
                                          sx={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: 1,
                                          }}
                                        >
                                          <Box className="truc_tiep"></Box>
                                          <span>Đang diễn ra</span>
                                        </Box>
                                      ) : (
                                        "Chưa diễn ra"
                                      )}
                                    </Typography>
                                    <Link
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      onClick={(e) => e.stopPropagation()}
                                      to={linkSetBit}
                                      style={{ textDecoration: "none" }}
                                    >
                                      <Chip
                                        style={css.container}

                                        label="Đặt Cược"
                                        className="button_info"
                                        sx={{
                                          borderRadius: "10px",
                                          fontWeight: 600,
                                          width: "90px",
                                          height: "30px",
                                          fontSize: "10px",
                                        }}
                                      />
                                    </Link>
                                  </Box>
                                </Box>
                              </Item>
                            </Link>
                            {/* ))} */}
                          </Grid>
                        ))}
                  </>
                ))}
            </Grid>
          ) : (
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 2, sm: 8, md: 12, xl : 18 }}
            >
              {matches &&
                matches?.slice(start, end)?.map((el) => (
                  <>
                    {account &&
                      account
                        ?.filter((acc) => acc?.id === el?.account_id)
                        ?.map((result) => (
                          <Grid item xs={2} sm={4} md={6} key={el?.id}>
                            <Link
                              to={{
                                pathname: `/video/${el?.id}/${result?.id}/${el?.slug}`,
                              }}
                              style={{ textDecoration: "none" }}
                            >
                              <Item
                                style={styles.heroContainer}
                                key={el?.id}
                                sx={{
                                  // borderRadius: "10px",
                                  // border: 1,
                                  flexDirection: "column",
                                  height: "fit-content",
                                  cursor: "pointer",
                                  "&:hover": {
                                    transform: "translateY(-3px)",
                                    transitionDuration: "5s",
                                  },
                                }}
                              >
                               
                                <Box
                                  width="100%"
                                  height="100%"
                                  sx={{
                                    
                                    // bgcolor: "#232324",
                                    // borderBottomLeftRadius: "10px",
                                    // borderBottomRightRadius: "10px",
                                  }}
                                >
                                 <Box
                                  sx={{
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                    display: "-webkit-box",
                                    WebkitLineClamp: "1",
                                    WebkitBoxOrient: "vertical",
                                    color: "white",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    px: 2,
                                    // borderTopRightRadius: "10px",
                                    // borderTopLeftRadius: "10px",
                                    p: 1,
                                  
                                  }}
                                >
                                  <Typography
                                    sx={{
                                      fontSize: "13px",
                                      fontWeight: 600,
                                      color: "white",
                                      overflow: "hidden",
                                      textOverflow: "ellipsis",
                                      display: "-webkit-box",
                                      WebkitLineClamp: "1",
                                      WebkitBoxOrient: "vertical",
                                    }}
                                  >
                                    {el?.tournament_name}
                                  </Typography>
                                  <Typography
                                    sx={{
                                      fontSize: "15px",
                                      fontWeight: 600,
                                      overflow: "hidden",
                                      textOverflow: "ellipsis",
                                      display: "-webkit-box",
                                      WebkitLineClamp: "1",
                                      WebkitBoxOrient: "vertical",
                                    }}
                                  >
                                    {result?.name}
                                  </Typography>
                                </Box>
{/* 
                                  <Divider
                                    sx={{ border: "1", borderColor: "white" }}
                                  /> */}
                                  <Box
                                    sx={{
                                      color: "white",
                                      display: "flex",
                                      alignItems: "center",
                                      justifyContent: "space-between",
                                      px: 2,
                                      py: 1,
                                    }}
                                  >
                                    <Box sx={{ flexDirection: "column" }}>
                                      <img
                                     
                                        style={{ objectFit: "cover", width :"18px",
                                          height: "18px" }}
                                        src={el?.host_club_logo_url}
                                        alt=""
                                      />
                                      <Typography
                                        sx={{
                                          fontSize: "14px",
                                          overflow: "hidden",
                                          textOverflow: "ellipsis",
                                          display: "-webkit-box",
                                          WebkitLineClamp: "1",
                                          WebkitBoxOrient: "vertical",
                                        }}
                                      >
                                        {el?.host_club_name}
                                      </Typography>
                                    </Box>

                                    <Box sx={{ flexDirection: "column" }}>
                                      <Typography
                                        sx={{
                                          fontSize: "15px",
                                          fontWeight: 600,
                                        }}
                                      >
                                        {el?.start_time?.slice(0, -3)} -{" "}
                                        {convertDate(el?.start_date)}
                                      </Typography>
                                      <Typography
                                        sx={{
                                          fontSize: "15px",
                                          fontWeight: 600,
                                          color: "white",
                                        }}
                                      >
                                        vs
                                      </Typography>
                                    </Box>
                                    <Box
                                      sx={{
                                        flexDirection: "column",
                                        height: "50px",
                                        py: 0.5,
                                      }}
                                    >
                                      <img
                                        
                                        style={{ objectFit: "cover", width:"18px",
                                          height:"18px" }}
                                        src={el?.guest_club_logo_url}
                                        alt=""
                                      />
                                      <Typography
                                        sx={{
                                          fontSize: "14px",
                                          overflow: "hidden",
                                          textOverflow: "ellipsis",
                                          display: "-webkit-box",
                                          WebkitLineClamp: "1",
                                          WebkitBoxOrient: "vertical",
                                        }}
                                      >
                                        {el?.guest_club_name}
                                      </Typography>
                                    </Box>
                                  </Box>
                                  {/* <Divider
                                    sx={{ border: "1", borderColor: "white" }}
                                  /> */}
                                  <Box
                                    sx={{
                                      p: 1,
                                      color: "white",
                                      display: "flex",
                                      alignItems: "center",
                                      justifyContent: "space-between",
                                      px: 2,
                                    }}
                                  >
                                    <Typography
                                      sx={{ fontSize: "15px", fontWeight: 600 }}
                                    >
                                      {ls?.includes(el?.id) ? (
                                        <Box
                                          sx={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: 1,
                                          }}
                                        >
                                          <Box className="truc_tiep"></Box>
                                          <span>Đang diễn ra</span>
                                        </Box>
                                      ) : (
                                        "Chưa diễn ra"
                                      )}
                                    </Typography>
                                    <Link
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      onClick={(e) => e.stopPropagation()}
                                      to={linkSetBit}
                                      style={{ textDecoration: "none" }}
                                    >
                                      <Chip
                                      style={css.container}

                                        label="Đặt Cược"
                                        className="button_info"
                                        sx={{
                                          borderRadius: "10px",
                                          fontWeight: 600,
                                          width: "90px",
                                          height: "30px",
                                          fontSize: "10px",
                                        }}
                                      />
                                    </Link>
                                  </Box>
                                </Box>
                              </Item>
                            </Link>
                          </Grid>
                        ))}
                  </>
                ))}
            </Grid>
          )}
        </Box>
      )}
    </Box>
  );
}

export default CustomGrid;
