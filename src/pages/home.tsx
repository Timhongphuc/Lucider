import cloudsImg from "../assets/clouds.jpg";
import { ArrowRight, Check, BookOpen, LayoutGrid, Bell } from "lucide-react";
import { Show, UserButton } from "@clerk/react";
import { Link } from "react-router-dom";
import { Button } from "~/components/ui/button";
import timselfie from "../assets/selfietim.jpg";
import Bottombar from "~/components/bottombar";
import { EncryptedText } from "~/components/ui/encrypted-text";
import { BentoGrid, BentoCard } from "~/components/ui/bento-grid";
import { AnimatedBeamMultipleOutputDemo } from "~/components/ui/animated-beam-multiple-inputs";
import { AnimatedListDemo } from "~/components/ui/animated-list-demo"
import { MarqueeDemo } from "~/components/ui/marquee-demo"
import { MorphingTextDemo } from "~/components/ui/morphing-text-demo"

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

        <Button 
          className="btnSecondary"
          onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
        >
          See how it works <ArrowRight size={18}/> 
        </Button>
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

      {/*<div className="howItWorksInformation-1">
        <h1>Test information about (two boxes, side by side)</h1>
      </div>*/}

      <section id="features">
        <BentoGrid className="max-w-4xl mx-auto my-12">
          <BentoCard 
            name="4 focused categories."
            className="col-span-3 lg:col-span-1"
            background={<MarqueeDemo />}
            Icon={LayoutGrid}
            description="Get informed about Politics, Technology, Economy and War."
            href="/reader"
            cta="Try it out"
          />
          <BentoCard 
            name="Your morning brief is ready. Are you?"
            className="col-span-3 lg:col-span-2"
            background={<AnimatedListDemo className="absolute right-0 opacity-60 p-10" />}
            Icon={Bell}
            description="Get notified in order to never miss the latest headlines and news."
            href="/reader"
            cta="Activate notifications"
          />
          <BentoCard 
            name="Trusted sources only."
            className="col-span-3 lg:col-span-2"
            background={<AnimatedBeamMultipleOutputDemo className="absolute right-2 opacity-60" />}
            Icon={Check}
            description="Utilizing trustworthy sources like Reuters, NY Times, DW, BBC and WSJ while excluding sources like Reddit, Truthsocial, X or FoxNews."
            href="/reader"
            cta="See design"
          />
          <BentoCard 
            name="Your news overview. Generated while you sleep."
            className="col-span-3 lg:col-span-1"
            background={<MorphingTextDemo />}
            Icon={BookOpen}
            description="Triggered by an automatic on-server chronjob, the AI summaries are ready whenever you are."
            href="/reader"
            cta="Learn more"
          />
        </BentoGrid>
      </section>
      
      <Bottombar/>
    </>
  );
}

export default Home;
