import { Link } from "react-router-dom";
import { Show, UserButton } from "@clerk/react";
import { Button } from "~/components/ui/button";
import {
  Github,
  Mail,
  MapPin
} from "lucide-react";

function Imprint() {
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


      
      
      <div className="resourcesMAINDIV">
        <div>
          <h2>Imprint</h2>
        </div>
        
        <div>
          <h1>Introduction</h1>
          <h3>At Lucider, we take your privacy seriously. This Privacy Policy explains how we collect, use, and protect your personal information when you visit our website.</h3>
        </div>
  
        <div>
          <h1>Information We Collect</h1>
          <h3>We collect minimal information from our website visitors. This may include: </h3>
          <h3>• Usage data (such as pages visited and time spent on our website)</h3>
          <h3>• Device information (browser type, operating system)</h3>
          <h3>• IP address</h3>
        </div>
  
        <div>
          <h1>How We Use Your Information</h1>
          <h3>We use the collected information to: </h3>
          <h3>• Improve our website and services</h3>
          <h3>• Analyze website traffic and usage patterns</h3>
          <h3>• Maintain website security</h3>
          <h3>• Manage users</h3>
        </div>

        <div>
          <h1>Data Protection</h1>
          <h3>We implement appropriate security measures to protect your information from unauthorized access, alteration, or disclosure.</h3>
        </div>

        <div>
          <h1>Contact Us</h1>
          <h3>If you have any questions about our Privacy Policy, please contact us.</h3>
        </div>

        <div>
          <h1>Updates to This Privacy Policy</h1>
          <h3>We may update this Privacy Policy from time to time. Any changes will be posted on this page.</h3>
        </div>      
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
                      to="#"
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

export default Imprint;