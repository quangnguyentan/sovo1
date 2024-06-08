import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import bannerFooterRight from "../../assets/banner_footer_right.gif";
import bannerFooterLeft from "../../assets/banner_footer.gif";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

function Footer() {
  const [hidden, setHidden] = useState(false);
  const AStyles = {
    display: "block",
    height: "100%",
  };
  const IStyles = {
    display: "block",
    width: "100%",
    height: "100%",
    objectFit: "fill"
  };
  return (
    <>
      {!hidden && (
        <div
        style={{
          position: "fixed",
          bottom: 0,
          zIndex: 999,
          left: '50%',
          transform: 'translateX(-50%)',
          width: "100vw",
          padding: '8px',
          height: "50px",
          maxWidth: '1280px',
          display: 'block',
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
            top: '8px',
            height: '16px',
            right: '8px',
            transform: "translateY(-50%)",
            border: 'none',
            background: '#ff0000',
            cursor: "pointer",
            color: '#ffffff'
          }}
        >
          X
        </button>
      </div>
      )}
    </>
  );
}

export default Footer;
