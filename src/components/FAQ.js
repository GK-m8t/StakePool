import React from "react";
import { ThanosWallet } from "@thanos-wallet/dapp";
import {
  Container,
  Collapse,
  Row,
  Col,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Badge,
  Card,
  Table,
  UncontrolledButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import classnames from "classnames";
import stakepool from "./icons/stakepool.svg";
import bg from "./icons/background.png";
import setting from "./icons/setting.png";
import heart from "./icons/Heart.png";
import tezsure from "./icons/tezsure.png";
import youtube from "./icons/youtube.png";
import instagram from "./icons/instagram.png";
import google from "./icons/google.png";
import telegram from "./icons/telegram.png";
import linkedin from "./icons/linkedin.png";
import twitter from "./icons/twitter.png";
import axios from "axios";
import swal from "@sweetalert/with-react";
import { JSONPath } from "@astronautlabs/jsonpath";
import { animateScroll as scroll } from "react-scroll";

export default class setseller extends React.Component {
  tzInterval;
  constructor(props) {
    super(props);
    this.state = {
      currentCycle: null,
      winning: [],
      tamt: null,
      pool:null,
      announce: true,
      Rannounce:true
    };
  }

  async componentWillUnmount() {
    clearTimeout(this.tzInterval);
  }

  render() {
    return (
      <Container
        fluid="xs"
        style={{
          backgroundColor: "#F9FBFE",
          "background-size": "cover",
          height: "100%",
          width: "100vmax",
          "min-height": "100vh",
        }}
      >
        <Container
          fluid="xs"
          id="stake"
          style={{
            width: "100v",
            opacity: "1",
            "background-size": "100% 43vmax",
            backgroundImage: `url(${bg})`,
            backgroundClip: "padding-box",
            backgroundRepeat: "repeat-x",
            "box-shadow": "0px 10px 35px #00000008",
            "padding-bottom": "10vmax",
          }}
        >
        <Navbar
          color="faded"
          light
          style={{ "margin-left": "6.667vmax", "margin-right": "5.2vmax" }}
        >
          <link href="bootstrap.min.css" rel="stylesheet" />
          <NavbarBrand
            href="/"
            className="mr-auto"
            styles={{ "margin-top": "0.97222222vmax" }}
          >
            <img
              src={stakepool}
              style={{ width: "13.264vmax", height: "3.056vmax" }}
            />
          </NavbarBrand>
          <Nav>
            <NavItem>
              <NavLink
                href="https://www.notion.so/Stakepool-A-no-loss-price-prediction-experiment-38bc2c0e0fe540aaaa1bc91ebcdcf5c4"
                target="_blank" rel="noopener noreferrer"
                style={{
                  "font-size": "1.1111111111vmax",
                  "font-family": "OpenSans-SemiBold, sans-serif",
                  color: "#FFFFFF",
                  "margin-top": "1.736vmax",
                }}
              >
                Documentation
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="https://github.com/Tezsure/Stakepool-Contracts"
                target="_blank" rel="noopener noreferrer"
                style={{
                  "font-size": "1.1111111111vmax",
                  "font-family": "OpenSans-SemiBold, sans-serif",
                  color: "#FFFFFF",
                  "margin-top": "1.736vmax",
                }}
              >
                GitHub
              </NavLink>
            </NavItem>

            <NavItem>
              <UncontrolledButtonDropdown
                direction="bottom-start"
                style={{ color: "#1565D8" }}
              >
                <DropdownToggle
                  caret={false}
                  color="#1565D8"
                  style={{
                    "font-size": "1.1111111111vmax",
                    "font-family": "OpenSans-SemiBold, sans-serif",
                    color: "#FFFFFF",
                    "margin-top": "1.736vmax",
                  }}>
                  Stats
                </DropdownToggle>

                <DropdownMenu
                  style={{
                    backgroundColor: "#F9FBFE",
                    width: "200%",
                    "border-radius": "0.27777778vmax",
                  }}
                >
                  <DropdownItem style={{ "line-height": "0.6667vmax" }}>
                    <NavLink
                      href="mainnet"
                      style={{
                        "font-size": "1.1111111111vmax",
                        "font-family": "OpenSans-SemiBold, sans-serif",
                        color: "#5A7184",
                      }}
                    >
                      Mainnet
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem style={{ "line-height": "0.6667vmax" }}>
                    <NavLink
                      href="/statsdelphinet"
                      style={{
                        "font-size": "1.1111111111vmax",
                        "font-family": "OpenSans-SemiBold, sans-serif",
                        color: "#5A7184",
                      }}
                    >
                      Delphinet
                    </NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledButtonDropdown>
            </NavItem>

            <NavItem>
                <NavLink
                  href="/FAQ"
                  style={{
                    "font-size": "1.1111111111vmax",
                    "font-family": "OpenSans-SemiBold, sans-serif",
                    color: "#FFFFFF",
                    "margin-top": "1.736vmax",
                  }}
                >
                  FAQ
                </NavLink>
              </NavItem>

            <NavItem>
              <NavLink
                style={{
                  "font-size": "1.1111111111vmax",
                  "font-family": "OpenSans-SemiBold, sans-serif",
                  color: "#FFFFFF",
                  "margin-top": "0.764vmax",
                }}
              >
                <button
                  onClick={() => {
                    scroll.scrollToBottom();
                  }}
                  style={{
                    color: "#FFFFFF",
                    backgroundColor: "#1565D8",
                    "text-align": "center",
                    "font-size": "1.1111111111vmax",
                    border: "0.13889vmax solid #FFFFFF",
                    "border-radius": "0.556vmax",
                    width: "10.764vmax",
                    padding: "0.762vmax 0vmax 0.556vmax 0vmax",
                  }}
                >
                  Get In Touch
                </button>
              </NavLink>
            </NavItem>
            <NavItem>
              <UncontrolledButtonDropdown
                direction="bottom-start"
                style={{ color: "#1565D8" }}
              >
                <DropdownToggle
                  caret={false}
                  color="#1565D8"
                  style={{ "margin-top": "0.764vmax" }}
                >
                  <img
                    src={setting}
                    style={{
                      width: "4vmax",
                      height: "3.33333333vmax",
                      "padding-right": "0.24444444vmax",
                    }}
                  />
                </DropdownToggle>
                <DropdownMenu
                  style={{
                    backgroundColor: "#F9FBFE",
                    width: "200%",
                    "border-radius": "0.27777778vmax",
                  }}
                >
                  <DropdownItem header>Stakepool</DropdownItem>
                  <DropdownItem style={{ "line-height": "0.6667vmax" }}>
                    <NavLink
                    disabled
                      href="/"
                      style={{
                        "font-size": "1.1111111111vmax",
                        "font-family": "OpenSans-SemiBold, sans-serif",
                        color: "#5A7184",
                      }}
                    >
                      Mainnet
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem style={{ "line-height": "0.6667vmax" }}>
                    <NavLink
                      href="/"
                      style={{
                        "font-size": "1.1111111111vmax",
                        "font-family": "OpenSans-SemiBold, sans-serif",
                        color: "#5A7184",
                      }}
                    >
                      Delphinet
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem style={{ "line-height": "0.6667vmax" }}>
                    <NavLink
                      href="/account"
                      style={{
                        "font-size": "1.1111111111vmax",
                        "font-family": "OpenSans-SemiBold, sans-serif",
                        color: "#5A7184",
                      }}
                    >
                      Staking Orders
                    </NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledButtonDropdown>
            </NavItem>
          </Nav>
        </Navbar>
          <p
            align="center"
            style={{
              "font-size": "3.888888889vmax",
              "font-family": "OpenSans-Bold, sans-serif",
              "padding-top": "5vmax",
              "padding-bottom": "1.66666667vmax",
              "padding-left": "0.902777778vmax",
              color: "#FFFFFF",
              "letter-spacing": "0.049vmax",
              "line-height": "5.056vmax",
            }}
          >
            <strong>
            Frequently Asked Questions
            </strong>
          </p>

          <Card
            inverse={true}
            style={{
              "margin-left": "9.0888888889vmax",
              "margin-right": "7.6vmax",
              "box-shadow": "0px 0.6944444vmax 2.430555556vmax #00000008",
              "min-height": "22vmax",
            }}
          >

        <h2
        style=
            {{
            // "font-size": "4.1111111111vmax",
            "font-family": "OpenSans-SemiBold, sans-serif",
            color: "black",
            "margin-top": "2.736vmax",
            "padding-left": 40,
            }}
        >
        <strong>What is Stakepool?</strong>
        </h2>
        <br/>

        <p
        style=
            {{
            "font-size": "1.6111111111vmax",
            "font-family": "OpenSans-SemiBold, sans-serif",
            color: "black",
            "padding-left": 40,
            "padding-right": 20,
            }}
        >
        Stakepool lets you predict the Tezos price range for the duration of the staking cycle period and if by the end of the staking period (5 and 7 cycles for delphinet and mainnet respectively), 
        Tezos price falls in the range predicted by you, all the baking rewards accrued in the contract are distributed among the users who predicted the right price range. 
        That means helping you earn greater rewards than you usually get. Even if you predict wrong, you dont't get the staking rewards and don't need to even pay any fees to 
        utilize the platform since we only charge a platform usage fee if you win any rewards.
        </p>

        <h2
        style=
            {{
            // "font-size": "4.1111111111vmax",
            "font-family": "OpenSans-SemiBold, sans-serif",
            color: "black",
            "margin-top": "2.736vmax",
            "padding-left": 40,
            "padding-right": 20,
            }}
        >
        <strong>How do I get Started?</strong>
        </h2>
        <br/>

        <p
        style=
            {{
            "font-size": "1.6111111111vmax",
            "font-family": "OpenSans-SemiBold, sans-serif",
            color: "black",
            "padding-left": 40,
            "padding-right": 20,
            }}
        >
        Connect your Thanos wallet with stakepool and utilize your instincts to stake on a range 
        which you think XTZ will reach in the designated cycle.
        </p>

        <h2
        style=
            {{
            // "font-size": "4.1111111111vmax",
            "font-family": "OpenSans-SemiBold, sans-serif",
            color: "black",
            "margin-top": "2.736vmax",
            "padding-left": 40,
            "padding-right": 20,
            }}
        >
        <strong>How is Stakepool different from other betting platforms?</strong>
        </h2>
        <br/>

        <p
        style=
            {{
            "font-size": "1.6111111111vmax",
            "font-family": "OpenSans-SemiBold, sans-serif",
            color: "black",
            "padding-left": 40,
            "padding-right": 20,
            }}
        >
        In other betting platform you loose your bet amount if your prediction turns out be wrong, here in Stakepool you get your bet amount back.
        <br/>
        If you win then you get rewards just like any other betting platform.
        </p>

        <h2
        style=
            {{
            // "font-size": "4.1111111111vmax",
            "font-family": "OpenSans-SemiBold, sans-serif",
            color: "black",
            "margin-top": "2.736vmax",
            "padding-left": 40,
            "padding-right": 20,            
            }}
        >
        <strong>Is my money safe?</strong>
        </h2>
        <br/>

        <p
        style=
            {{
            "font-size": "1.6111111111vmax",
            "font-family": "OpenSans-SemiBold, sans-serif",
            color: "black",
            "padding-left": 40,
            "padding-right": 20,
            }}
        >
        Absolutely !  All the payouts are managed by our smart contract and there is no way to redirect them. 
        You can go through our smart contract to know how we disburse payment effectively.
        </p>

        <h2
        style=
            {{
            // "font-size": "4.1111111111vmax",
            "font-family": "OpenSans-SemiBold, sans-serif",
            color: "black",
            "margin-top": "2.736vmax",
            "padding-left": 40,
            }}
        >
        <strong>How much profit  can I expect from Stakepool?</strong>
        </h2>
        <br/>
        <p
        style=
            {{
            "font-size": "1.6111111111vmax",
            "font-family": "OpenSans-SemiBold, sans-serif",
            color: "black",
            "padding-left": 40,
            "padding-right": 20,
            }}
        >
        Well, there is no fixed ROI, your rewards are directly proportional to the amount staked on a particular cycle, 
        so if you want to earn more rewards then invite your friends on stakepool.
        </p>

        <h2
        style=
            {{
            // "font-size": "4.1111111111vmax",
            "font-family": "OpenSans-SemiBold, sans-serif",
            color: "black",
            "margin-top": "2.736vmax",
            "padding-left": 40,
            "padding-right": 20,
            }}
        >
        <strong>From where can I learn more about Stakepool?</strong>
        </h2>
        <br/>
        <p
        style=
            {{
            "font-size": "1.6111111111vmax",
            "font-family": "OpenSans-SemiBold, sans-serif",
            color: "black",
            "padding-left": 40,
            }}
        >
        You can go through our code base on <a href="https://github.com/Tezsure/Stakepool" target="_blank" rel="noopener noreferrer">Github</a>, 
        you can also read our documentation at <a href="https://www.notion.so/Stakepool-A-no-loss-price-prediction-experiment-38bc2c0e0fe540aaaa1bc91ebcdcf5c4" target="_blank" rel="noopener noreferrer">Notion</a>.
        </p>

        </Card>
        </Container>

        <Container
          fluid="xs"
          id="contact"
          align="center"
          style={{
            backgroundColor: "#F9FBFE",
            height: "100%",
            width: "100vmax",
            "padding-top": "3.333333vmax",
            "padding-bottom": "3.333333vmax",
          }}
        >
          <img src={heart} style={{ width: "8.8vmax", height: "8.8vmax" }} />
          <p
            style={{
              color: "#5A7184",
              "font-family": "OpenSans-SemiBold, sans-serif",
              "font-size": "1.34027778vmax",
            }}
          >
            <strong>Copyright © 2020. Crafted with love.</strong>
          </p>
          <img
            src={google}
            style={{
              width: "1.125em",
              height: "1.125em",
              "margin-left": "1.25em",
            }}
          />
          <img
            src={youtube}
            style={{
              width: "1.25vmax",
              height: "1.25vmax",
              "margin-left": "1.3888888889vmax",
            }}
          />
          <img
            src={telegram}
            style={{
              width: "1.25vmax",
              height: "1.25vmax",
              "margin-left": "1.3888888889vmax",
            }}
          />
          <img
            src={tezsure}
            style={{
              width: "1.25vmax",
              height: "1.25vmax",
              "margin-left": "1.3888888889vmax",
            }}
          />
          <img
            src={twitter}
            style={{
              width: "1.25vmax",
              height: "1.25vmax",
              "margin-left": "1.3888888889vmax",
            }}
          />
          <img
            src={linkedin}
            style={{
              width: "1.25vmax",
              height: "1.25vmax",
              "margin-left": "1.3888888889vmax",
            }}
          />
          <img
            src={instagram}
            style={{
              width: "1.25vmax",
              height: "1.25vmax",
              "margin-left": "1.3888888889vmax",
            }}
          />
        </Container>
      </Container>
    );
  }
}