import { Link } from "react-router-dom";
import { Button } from "~/components/ui/button";
import { Show, UserButton, RedirectToSignIn } from "@clerk/react";
import { ArrowRight, ArrowLeft } from "lucide-react";
import Bottombar from "~/components/bottombar";
import { useUser } from '@clerk/react'

function Reader() {

  const { user } = useUser()

  return (
    <>
      <Show fallback={<RedirectToSignIn />} when="signed-in">
        <nav className="navbar">
          {" "}
          <Link to="/">
            <h1 className="headerBranding">Lucider</h1>
          </Link>{" "}
          <Show when="signed-out">
            {" "}
            <Link to="/signin">
              <Button className="SignInButton">Sign In</Button>
            </Link>{" "}
          </Show>
          <Show when="signed-in">
            <UserButton />
          </Show>
        </nav>

        <div className="readertitle">
          <h1>Hey {user.firstName}! Ready to read? </h1>

          <div className="dateSwitcher">
            <Button className="dateSwitchButton">
              {" "}
              <ArrowLeft size={18} />{" "}
            </Button>
            <p className="reader-date">[Example Date] - 03/08/2026</p>
            <Button className="dateSwitchButton">
              {" "}
              <ArrowRight size={18} />{" "}
            </Button>
          </div>
        </div>

        {/*<hr className="septeration-line-reader" />*/}

          <div>
            <h1 className="sub-readertitle-2">Politics</h1>
            <p>Recent diplomatic developments show a cautious de-escalation in the Iran conflict. President Trump called off planned strikes on Iran, citing the "perimeters of a deal" to reopen the Strait of Hormuz. Iran's foreign ministry confirmed it is discussing a temporary shipping route through the strait with Oman, though it denies active negotiations with the US directly. Meanwhile, Trump has also claimed the "complete disarmament" of Hamas, though Hamas states it will only lay down arms if Israel withdraws from Gaza first.
            
            You will find the associated sources below this article.</p>
          </div>

        <hr className="septeration-line-reader" />
        
        <hr className="septeration-line-reader" />

          <div>
            <h1 className="sub-readertitle-2">Technology</h1>
            <p>China's rapid tech advances—new AI models, advanced robots, and specialty computer chips—are creating significant disruption across global markets, unsettling both Silicon Valley and the White House. These developments highlight intensifying competition in artificial intelligence and semiconductor technology between the US and China, with ripple effects impacting the broader tech industry. The pace of innovation continues to reshape strategic priorities, prompting concern among policymakers and industry leaders alike as they navigate the shifting technological landscape and its geopolitical implications.
            
            You will find the associated sources below this article.</p>
          </div>

        <hr className="septeration-line-reader" />

        <hr className="septeration-line-reader" />

          <div>
            <h1 className="sub-readertitle-2">Economy</h1>
            <p>Recent economic data shows mixed signals globally. UK manufacturing growth accelerated in July, marking its fourth consecutive month of expansion at the fastest pace in nearly two years, despite lingering concerns over the US-Iran conflict's impact on oil supplies. Meanwhile, the US economy grew at a sluggish 1.5% in the second quarter, with inflation exceeding the Fed's target. The Bank of England held interest rates at 3.75%, citing inflation fears amid rising oil prices tied to the Middle East crisis.
            
            You will find the associated sources below this article.</p>
          </div>

        <hr className="septeration-line-reader" />

        <hr className="septeration-line-reader" />

          <div>
            <h1 className="sub-readertitle-2">War</h1>
            <p>In the Israel-Iran war, President Trump abruptly canceled planned "massive" strikes on Iran, citing progress on a deal to reopen the Strait of Hormuz, with talks set to resume Monday. However, Iran's foreign ministry clarified it is not negotiating with the US, but rather discussing a temporary shipping route through Hormuz with Oman. Meanwhile, the Russia-Ukraine war continues with deadly exchanges: Ukrainian drone strikes killed civilians in Gelendzhik and hit a Wildberries warehouse, while Russia struck Kyiv and Ukrainian cargo ships, as both sides trade escalating infrastructure attacks.
            
            You will find the associated sources below this article.</p>
          </div>

        <hr className="septeration-line-reader" />
        
        <Bottombar/>
      </Show>
    </>
  );
}

export default Reader;
