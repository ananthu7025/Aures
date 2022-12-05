import "./App.css";
// import Button from '@mui/material/Button';
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import logo from "./white-text.png";
import header_logo from "./header.png";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Carousel } from "react-carousel-minimal";
import img1 from "./img1.jpg";
import img2 from "./img2.jpg";
import img3 from "./img3.jpg";

import c1 from "./images/comp.svg";
import c2 from "./images/node.svg";
import c3 from "./images/seo.svg";
import c4 from "./images/analytics.svg";
import c5 from "./images/content.svg";
import c6 from "./images/draw.svg";
import c7 from "./images/person.svg";

import t1 from "./images/st1.png";
import t2 from "./images/st2.png";
import t3 from "./images/st3.png";
import t4 from "./images/st4.png";
import t5 from "./images/st5.png";


import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import * as React from "react";
import PropTypes from "prop-types";
import { experimentalStyled as styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
const icon = (TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
});

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
  };
}
function App() {
  const Item = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(2),
    textAlign: "center",
  }));

  const images = [
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GoldenGateBridge-001.jpg/1200px-GoldenGateBridge-001.jpg",
      caption: `<div>
                  San Francisco
                  <br/>
                  Next line
                </div>`,
    },
    {
      image:
        "https://cdn.britannica.com/s:800x450,c:crop/35/204435-138-2F2B745A/Time-lapse-hyper-lapse-Isle-Skye-Scotland.jpg",
      caption: "Scotland",
    },
    {
      image:
        "https://static2.tripoto.com/media/filter/tst/img/735873/TripDocument/1537686560_1537686557954.jpg",
      caption: "Darjeeling",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Palace_of_Fine_Arts_%2816794p%29.jpg/1200px-Palace_of_Fine_Arts_%2816794p%29.jpg",
      caption: "San Francisco",
    },
    {
      image:
        "https://i.natgeofe.com/n/f7732389-a045-402c-bf39-cb4eda39e786/scotland_travel_4x3.jpg",
      caption: "Scotland",
    },
    {
      image:
        "https://www.tusktravel.com/blog/wp-content/uploads/2020/07/Best-Time-to-Visit-Darjeeling-for-Honeymoon.jpg",
      caption: "Darjeeling",
    },
    {
      image:
        "https://www.omm.com/~/media/images/site/locations/san_francisco_780x520px.ashx",
      caption: "San Francisco",
    },
    {
      image:
        "https://images.ctfassets.net/bth3mlrehms2/6Ypj2Qd3m3jQk6ygmpsNAM/61d2f8cb9f939beed918971b9bc59bcd/Scotland.jpg?w=750&h=422&fl=progressive&q=50&fm=jpg",
      caption: "Scotland",
    },
    {
      image:
        "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/02/summer-7.jpg",
      caption: "Darjeeling",
    },

    {
      image:
        "https://www.tusktravel.com/blog/wp-content/uploads/2020/07/Best-Time-to-Visit-Darjeeling-for-Honeymoon.jpg",
      caption: "Darjeeling",
    },
    {
      image:
        "https://www.omm.com/~/media/images/site/locations/san_francisco_780x520px.ashx",
      caption: "San Francisco",
    },
    {
      image:
        "https://images.ctfassets.net/bth3mlrehms2/6Ypj2Qd3m3jQk6ygmpsNAM/61d2f8cb9f939beed918971b9bc59bcd/Scotland.jpg?w=750&h=422&fl=progressive&q=50&fm=jpg",
      caption: "Scotland",
    },
    {
      image:
        "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/02/summer-7.jpg",
      caption: "Darjeeling",
    },
  ];
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="body">
      <header>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Box className="header-section" sx={{ flexGrow: 1 }}>
        <Grid container>
          <Grid
            className="header-text-box"
            item
            xs={12}
            sm={12}
            md={8}
            lg={7}
            xl={7}
          >
            <p className="headline">| LOREM IPSUM</p>
            <Card className="header-box" sx={{ maxWidth: 1200 }}>
              <div className="box-content">
                <div className="box-content-head">LOREM IPSUM DOLOR SIT AM</div>
                <div>
                  Lorem Ipsum Dolor Sit Amet, Consecutetur Adiing Elit, Sed
                </div>
                <div>Do Eiusmod Tempor Incididunt Ut</div>
              </div>
            </Card>
          </Grid>

          <Grid
            item
            xs={12}
            sm={12}
            md={4}
            lg={5}
            xl={2}
            style={{ textAlign: "center" }}
          >
            <img src={header_logo} className="header-logo" alt="logo" />
          </Grid>
        </Grid>
      </Box>
      <div className="socialmedia-card">
        <span>Contact Us</span>
        <span className="icons">
          <WhatsAppIcon style={{ paddingLeft: "60px" }}></WhatsAppIcon>
          <FacebookIcon style={{ paddingLeft: "60px" }}></FacebookIcon>
          <InstagramIcon style={{ paddingLeft: "60px" }}></InstagramIcon>
          <TwitterIcon style={{ paddingLeft: "60px" }}></TwitterIcon>
        </span>
      </div>
      <div className="carousal">
        <Carousel
          data={images}
          time={2000}
          automatic={true}
          thumbnails={true}
          thumbnailWidth="150px"
        />
      </div>

      <Card className="casestudy-card">
        <div>CASE STUDY</div>

        <Box className="casestudy-section" sx={{ flexGrow: 1 }}>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
              <img src={img1} className="casestudy-image" alt="logo" />
              <p className="casestudy-subtitle">Lorem Ipsum Dolor Sit</p>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
              <img src={img2} className="casestudy-image" alt="logo" />
              <p className="casestudy-subtitle">Lorem Ipsum Dolor Sit</p>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
              <img src={img3} className="casestudy-image" alt="logo" />
              <p className="casestudy-subtitle">Lorem Ipsum Dolor Sit</p>
            </Grid>
          </Grid>
        </Box>
        <div className="see-more-section">
          <span className="see-more">See More</span>
          <ArrowCircleDownIcon
            sx={{ fontSize: 20 }}
            className="see-more-icon"
          ></ArrowCircleDownIcon>
        </div>
      </Card>
      <div className="tab-section">
        <Box>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs centered color="red" value={value} onChange={handleChange}>
              <Tab
                style={{ color: "white" }}
                label="STRATERGY"
                {...a11yProps(0)}
              />
              <Tab
                style={{ color: "white" }}
                label="BRANDING"
                {...a11yProps(1)}
              />
              <Tab
                style={{ color: "white" }}
                label="CONTENT"
                {...a11yProps(2)}
              />
              <Tab style={{ color: "white" }} label="WEB" {...a11yProps(3)} />
            </Tabs>
          </Box>
          <TabPanel className="individual-tab" value={value} index={0}>
            <div className="strategy-individual-tab">
              <div className="stratergy">STRATEGY</div>
              <img src={t5} className="strategy-image" alt="logo" />
            </div>

              <div className="tab-title-1"> BUILDING A STRONG FOUNDATION</div>
              <div className="tab-title-2">
                We position the brands of tomorrow to stand out. Drawing on our
                years of brand strategy experience, we leverage data and insight
                to differentiate brands from their competitors in the marketplace.
                This foundation enables brands to attract, strengthen, and achieve
                business goals building a stronger future.
              </div>
          </TabPanel>
          <TabPanel className="individual-tab" value={value} index={1}>
              <div className="branding">BRANDING</div>

            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={0}>
                <Grid item xs={12} sm={6} md={6} lg={5} xl={5}>
                    <img src={t4} className="branding-image" alt="logo" />
                </Grid>
                <Grid style={{ maxWidth: "30%" }} item xs={12} sm={5} md={5} lg={4} xl={4}>
                    <div className="tab-title-1"> BREAKING THROUGH THE CLUTTER</div>
                    <div className="tab-title-2">
                      We create bold brands that are humanly relevant and consistent
                      across all channels. By working closely with our partners we are
                      able to bring any idea to life, new or existing. The end result is
                      a custom, unique, and powerful brand image designed to be
                      different and stand the test of time.
                    </div>
                </Grid>
              </Grid>
            </Box>

          </TabPanel>
          <TabPanel className="content-individual-tab" value={value} index={2}>

          <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={0}>
                <Grid item xs={12} sm={12} md={6} lg={5} xl={7}>
                  <div className="content">CONTENT</div>
                </Grid>
                <Grid item xs={12} sm={12} md={5} lg={4} xl={4}>
                  <img src={t1} className="content-image" alt="logo" />
                </Grid>
              </Grid>
            </Box>

            <div className="tab-title-1"> PRODUCING COMPELLING CONETENT</div>
            <div className="tab-title-2">
              We create bold brands that are humanly relevant and consistent
              across all channels. By working closely with our partners we are
              able to bring any idea to life, new or existing. The end result is
              a custom, unique, and powerful brand image designed to be
              different and stand the test of time.
            </div>
          </TabPanel>
          <TabPanel className="web-individual-tab" value={value} index={3}>

          <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={0}>

                <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                    <img src={t3} className="web-content-image" alt="logo" />
                </Grid>

                <Grid item xs={6} sm={4} md={4} lg={4} xl={4}>
                 <div className="web">WEB</div>
                </Grid>
                <Grid item xs={6} sm={4} md={4} lg={4} xl={4}>
                  <img src={t2} className="web-content-image-2" alt="logo" />
                </Grid>
              </Grid>
            </Box>

            <div className="tab-title-1">
              {" "}
              CONNECTING CUSTOMERS TO BRAND ONLINE
            </div>
            <div className="tab-title-2">
              We create bold brands that are humanly relevant and consistent
              across all channels. By working closely with our partners we are
              able to bring any idea to life, new or existing. The end result is
              a custom, unique, and powerful brand image designed to be
              different and stand the test of time.
            </div>
          </TabPanel>{" "}
          
        </Box>
      </div>
      <Card className="capability-card">
        <div className="capabilities-text">CAPABILITIES</div>
        <div className="capabilities-sub-text">
          We Create A Customized Digital Marketing Plan For You
        </div>

        <Box className="capability-section" sx={{ flexGrow: 1 }}>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
              <img src={c1} className="capability-image" alt="logo" />
              <p>Lorem Ipsum Dolor Sit</p>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
              <img src={c2} className="capability-image" alt="logo" />
              <p>Lorem Ipsum Dolor Sit</p>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
              <img src={c3} className="capability-image" alt="logo" />
              <p>Lorem Ipsum Dolor Sit</p>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
              <img src={c4} className="capability-image" alt="logo" />
              <p>Lorem Ipsum Dolor Sit</p>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
              <img src={c5} className="capability-image" alt="logo" />
              <p>Lorem Ipsum Dolor Sit</p>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
              <img src={c6} className="capability-image" alt="logo" />
              <p>Lorem Ipsum Dolor Sit</p>
            </Grid>
          </Grid>
        </Box>
      </Card>

      <Card className="contact-card">
        <Box className="contact-section" sx={{ flexGrow: 1 }}>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={12} md={12} lg={9} xl={9}>
              <div className="contact-title">Like what you see?</div>
              <div className="contact-subtitle">
                Have a project in mind you'd like to talk about? Tap the button
                below to contact us and we'll get back to in almost no time at
                all
              </div>
              <div className="contact-title-2">Stay in the know .</div>
              <div className="email-text-field">
                <TextField
                  fullWidth
                  id="standard-basic"
                  label="Email"
                  variant="standard"
                />
              </div>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={2}
              xl={2}
              style={{ textAlign: "center" }}
            >
              <img src={c7} className="contact-image" alt="logo" />
            </Grid>
          </Grid>
        </Box>
      </Card>

      <div>
        <div className="footer-card">
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={4}>
              <Grid item xs={12} sm={12} md={2} lg={2} xl={2}>
                Home
              </Grid>
              <Grid item xs={12} sm={12} md={2} lg={2} xl={2}>
                Our Work
              </Grid>
              <Grid item xs={12} sm={12} md={2} lg={2} xl={2}>
                Our Story
              </Grid>
              <Grid item xs={12} sm={12} md={2} lg={2} xl={2}>
                Reviews
              </Grid>
              <Grid item xs={12} sm={12} md={2} lg={2} xl={2}>
                Design Workshop
              </Grid>
              <Grid item xs={12} sm={12} md={2} lg={2} xl={2}>
                Contact Us
              </Grid>
            </Grid>
          </Box>
        </div>
        <div className="socialmedia-footer">
          <span>
            <WhatsAppIcon></WhatsAppIcon>
            <FacebookIcon style={{ paddingLeft: "50px" }}></FacebookIcon>
            <InstagramIcon style={{ paddingLeft: "50px" }}></InstagramIcon>
            <TwitterIcon style={{ paddingLeft: "50px" }}></TwitterIcon>
          </span>
          <div className="footer-text1">
            ©2022 Auresmax all rights reserved.
          </div>
          <div className="footer-text2">
            Privacy & Cookie Policy | Terms & Conditions
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
