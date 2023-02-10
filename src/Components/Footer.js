import { VscGithub } from "react-icons/vsc"
import { GrLinkedin } from "react-icons/gr"
import { TfiEmail } from "react-icons/tfi"
import { BsFillCalendar2WeekFill } from "react-icons/bs"
import "./Footer.css"

function Footer() {
    return (
        <section className="squares">
        <div>
          <span className="square1">
            <span><BsFillCalendar2WeekFill size={"30px"} color={"aqua"} /></span>
          </span>
        </div>
        <div>
          <span className="square2">
            <span>Destiny Joyner</span>
            <span>destinyjoyner@pursuit.org</span>
            <span>New York City, New York</span>
          </span>
        </div>
        <div>
          <span className="square3">
            <span>
                <a href= "https://github.com/DestinyJoyner" target="blank">
                    <VscGithub color={"aqua"} size={"40px"}/>
                </a>
            </span>
            <span>
                <a href= "https://www.linkedin.com/in/destiny-joyner-934846243/" target="blank">
                    <GrLinkedin color={"aqua"} size={"40px"}/>
                </a>
                </span>
            <span>
                <a href= "mailto:destinyjoyner@pursuit.org" target="blank">
                    <TfiEmail color={"aqua"} size={"40px"}/>
                </a>
            </span>
          </span>
        </div>
      </section>
    );
}

export default Footer;