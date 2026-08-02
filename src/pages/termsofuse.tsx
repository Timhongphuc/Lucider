import { Link } from "react-router-dom";
import { Show, UserButton } from "@clerk/react";
import { Button } from "~/components/ui/button";
import Bottombar from "~/components/bottombar";

function TermsOfUse() {
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
          <h2>Terms Of Use</h2>
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

      <Bottombar/>
    </>
  );
}

export default TermsOfUse;