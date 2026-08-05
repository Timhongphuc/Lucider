import cloudsImg from "../assets/clouds.jpg";
import { ArrowRight } from "lucide-react";
import { Show, UserButton } from "@clerk/react";
import { Link } from "react-router-dom";
import { Button } from "~/components/ui/button";
import timselfie from "../assets/selfietim.jpg";
import Bottombar from "~/components/bottombar";
import { BentoCard, BentoGrid } from "../components/ui/bento-grid"
import { EncryptedText } from "~/components/ui/encrypted-text";
import React from "react";

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

        
        <Button className="btnSecondary">See how it works <ArrowRight size={18}/> </Button>
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
        {/*<p className="citationtim">We are living in the age of AI. This brings a lot of benefits, such as faster reseach, prototyping, writing and creation. Despite these advantages, the current circumstances force us to radically rethink how we define the integrity of information around us. The Lucider project aims to minimize the flood of happenings that overruns us every day while remaining as accurate and trustworthy as possible. It's time for you to gain and maintain the insight.</p>*/}
        <EncryptedText className="citationtim" text="We are living in the age of AI. This brings a lot of benefits, such as faster reseach, prototyping, writing and creation. Despite these advantages, the current circumstances force us to radically rethink how we define the integrity of information around us. The Lucider project aims to minimize the flood of happenings that overruns us every day while remaining as accurate and trustworthy as possible. It's time for you to gain and maintain the insight." />
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

      {/*<BentoGrid>
        <BentoCard />
      </BentoGrid>*/}
      
      <Bottombar/>
    </>
  );
}

export default Home;
