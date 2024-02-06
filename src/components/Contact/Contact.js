import React, { useState } from "react";
import { ContactWrapper, Email,ContactInfo } from "./ContactElements";
import { MdContentCopy } from "react-icons/md";
import { IconButton, Tooltip } from "@mui/material";
import Zoom from '@mui/material/Zoom';

// import ScrollAnimation from "react-animate-on-scroll";
import { IoCallSharp } from "react-icons/io5"; // Add this import

// ... (rest of the code)

function Contact() {
  const [showEmailTooltip, setShowEmailTooltip] = useState(false);
  const [showPhoneTooltip, setShowPhoneTooltip] = useState(false);

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText("manasaraju27@gmail.com");
    setShowEmailTooltip(true);
    setTimeout(() => {
      setShowEmailTooltip(false);
    }, 700);
  };

  const callPhoneNumber = () => {
    window.location.href = "tel:+918197817833";
  };

  return (
    <ContactWrapper id="contact">
      <div className="Container">
        <div className="SectionTitle">Get In Touch</div>
        {/* <ScrollAnimation animateIn="fadeIn" > */}
          <div className="MyBigCard">
            <Email>
              <div style={{ display: 'flex', alignItems: 'center', columnGap: '20px', rowGap: '10px', flexWrap: 'wrap', justifyContent: 'center' }} >
                <span>manasaraju27@gmail.com</span>
                <Tooltip
                  PopperProps={{
                    disablePortal: true,
                  }}
                  open={showEmailTooltip}
                  onClose={() => setShowEmailTooltip(false)}
                  title="Copied!"
                  TransitionComponent={Zoom}
                  disableFocusListener
                  disableHoverListener
                  disableTouchListener
                  placement="bottom"
                >
                  <IconButton  onClick={copyEmailToClipboard} >
                    <MdContentCopy size={25} style={{ cursor: 'pointer', color: "#151418" }}/>
                  </IconButton>
                </Tooltip>
              </div>
              <a
                className="btn PrimaryBtn btn-shadow"
                href="mailto:manasaraju27@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Send Email
              </a>
            </Email>

            {/* Phone */}
            {/* <ContactInfo>
              <div style={{ display: 'flex', alignItems: 'center', columnGap: '20px', rowGap: '10px', flexWrap: 'wrap', justifyContent: 'center' }} >
                <span>Do Contact</span>
                <Tooltip
                  PopperProps={{
                    disablePortal: true,
                  }}
                  open={showPhoneTooltip}
                  onClose={() => setShowPhoneTooltip(false)}
                  title="Calling..."
                  TransitionComponent={Zoom}
                  disableFocusListener
                  disableHoverListener
                  disableTouchListener
                  placement="bottom"
                >
                  <IconButton  onClick={callPhoneNumber} >
                    <IoCallSharp size={25} style={{ cursor: 'pointer', color: "#151418" }}/>
                  </IconButton>
                </Tooltip>
              </div>
            </ContactInfo> */}



          </div>
        {/* </ScrollAnimation> */}
      </div>
    </ContactWrapper>
  );
}

export default Contact;
