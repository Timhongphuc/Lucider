import cloudsImg from "../assets/clouds.jpg";
import { ArrowRight } from "lucide-react";
import { Show, UserButton } from "@clerk/react";
import { Link } from "react-router-dom";
import { Button } from "~/components/ui/button";
import timselfie from "../assets/selfietim.jpg";
import Bottombar from "~/components/bottombar";
import { EncryptedText } from "~/components/ui/encrypted-text";
import { BentoGrid, BentoCard } from "~/components/ui/bento-grid";
import { AnimatedBeamMultipleOutputDemo } from "~/components/ui/animated-beam-multiple-inputs";

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
          <div className="accountbutton">
            <UserButton/>
          </div>  
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

      <BentoGrid className="max-w-4xl mx-auto my-12">
        <BentoCard 
          name="Distraction-Free Reading"
          className="col-span-3 lg:col-span-1"
          background={<div className="absolute inset-0 bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-900 dark:to-neutral-800" />}
          Icon={ArrowRight}
          description="Focus entirely on the content without annoying popups or ads."
          href="/reader"
          cta="Try it out"
        />
        <BentoCard 
          name="Real-time Synchronization"
          className="col-span-3 lg:col-span-2"
          background={<div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800" />}
          Icon={ArrowRight}
          description="Your reading progress and saved articles sync instantly across all your devices."
          href="/reader"
          cta="Learn more"
        />
        <BentoCard 
          name="Trusted sources only"
          className="col-span-3 lg:col-span-2"
          background={<AnimatedBeamMultipleOutputDemo className="absolute right-2 opacity-60" />}
          Icon={ArrowRight}
          description="Enjoy gorgeous typography, fluid animations, and a seamless dark mode."
          href="/reader"
          cta="See design"
        />
        <BentoCard 
          name="Secure & Private"
          className="col-span-3 lg:col-span-1"
          background={<div className="absolute inset-0 bg-gradient-to-br from-green-100 to-green-200 dark:from-green-900 dark:to-green-800" />}
          Icon={ArrowRight}
          description="Your data is encrypted and protected by enterprise-grade security."
          href="/reader"
          cta="Read docs"
        />
      </BentoGrid>
      
      <Bottombar/>
    </>
  );
}

export default Home;
