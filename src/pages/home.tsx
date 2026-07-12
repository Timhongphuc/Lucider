import cloudsImg from "../assets/clouds.jpg";
import { ArrowRight } from "lucide-react";
import { Show, UserButton } from "@clerk/react";
import { Link } from "react-router-dom";
import { Button } from "~/components/ui/button";
import {
  Github,
  Mail,
  MapPin
} from "lucide-react";
import timselfie from "../assets/selfietim.jpg";

function Home() {
  return (
    <>
      <nav className="navbar">
        {" "}
        <Link to="/">
          <h1 className="headerBranding">Lucider</h1>
        </Link>{" "}
        <Show when="signed-out">

          {" "}<Link to="/signin">
            <Button className="SignInButton">
              Sign In
            </Button>
          </Link>{" "}
          
        </Show>
        <Show when="signed-in">
          <UserButton />
        </Show>
      </nav>

      <div className="maintitle">
        <h1>Organizing the world's happenings in one place.</h1>
      </div>

      <div className="centeredButtons">
        {" "}<Link to="/reader">
          <Button className="btnPrimary">
            Start reading <ArrowRight size={18} />
          </Button>
        </Link>{" "}

        
        <button className="btnSecondary">See how it works</button>
      </div>

      <div className="maindiv">
        <img
          src={cloudsImg}
          alt="Clouds"
          style={{
            width: "76%",
            maxWidth: "1285px",
            borderRadius: "20px",
            marginTop: "70px",
          }}
        />
      </div>

      <div className="maininfoLNDP">
        <p className="citationtim">We are living in the age of AI. This brings a lot of benefits, such as faster reseach, prototyping, writing and creation. Despite these advantages, the current circumstances force us to radically rethink how we define the integrity of information around us. The Lucider project aims to minimize the flood of happenings that overruns us every day while remaining as accurate and trustworthy as possible. It's time for you to gain and maintain the insight.</p>
      </div>

      <div className="citationMasterDiv">
        <div className="timscredits">
          <h2 className="timname">- Tim Seufert</h2>
          <p className="timdescription">Founder and Developer of Ludicer</p>
        </div>

        <img
          src={timselfie}
          alt="Selfie of Tim"
          style={{
          width: "10%",
          maxWidth: "74px",
          borderRadius: "47px",
          marginTop: "40px",
          marginLeft: "-120px",
        }}/>
      </div>

      <div className="howItWorksInformation-1">
        <h1>Test information about (two boxes, side by side)</h1>
      </div>


      
      {/*Beginning boilerplate footer code fom v0*/}

      <div className="footer">
        <footer className="bg-black text-white">
          <div className="max-w-6xl mx-auto px-6 py-16">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
              {/* SimplestHacks Brand */}
              <div className="md:col-span-1">
                <h1 className="footerBranding">Lucider</h1>
                <p className="text-gray-400 mb-6">
                  Our mission is to organize the world's happenings in one place
                  for everyone
                </p>
                <div className="flex items-center text-gray-400 text-sm">
                  <MapPin className="w-4 h-4 mr-2" />
                  Berlin, Germany
                </div>
              </div>

              {/* Project */}
              <div>
                <h4 className="text-lg font-semibold mb-6">Project</h4>
                <ul className="space-y-3">
                  <li>
                    <Link
                      to="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Manifest
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      How it works
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      FAQ
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Resources */}
              <div>
                <h4 className="text-lg font-semibold mb-6">Resources</h4>
                <ul className="space-y-3">
                  <li>
                    <Link
                      to="/imprint"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Imprint
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/privacy"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Privacy policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/termsofuse"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Terms of service
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Status
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Social */}
              <div>
                <h4 className="text-lg font-semibold mb-6">Connect</h4>
                <div className="space-y-3">
                  <Link
                    to="https://www.github.com/Timhongphuc/Lucider"
                    className="flex items-center text-gray-400 hover:text-white transition-colors"
                  >
                    <Github className="w-5 h-5 mr-3" />
                    GitHub
                  </Link>
                  <Link
                    to="mailto:timhongphuc@proton.me"
                    className="flex items-center text-gray-400 hover:text-white transition-colors"
                  >
                    <Mail className="w-5 h-5 mr-3" />
                    Contact
                  </Link>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center text-gray-400 text-sm mb-4 md:mb-0">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                All systems operational
              </div>
              <div className="text-gray-400 text-sm">
                © 2026 Lucider. Made with ❤️ in Berlin by{" "}
                <a
                  href="https://www.timhongphuc.de/"
                  target="_blank"
                  className="timseufertlink-footer"
                >
                  Tim Seufert
                </a>
                .
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Home;
