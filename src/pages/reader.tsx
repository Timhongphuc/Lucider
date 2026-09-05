import { Link } from "react-router-dom";
import { Button } from "~/components/ui/button";
import { Show, UserButton, RedirectToSignIn } from "@clerk/react";
import { ArrowRight, ArrowLeft } from "lucide-react";
import Bottombar from "~/components/bottombar";
import { useUser } from '@clerk/react'
import { AnimatedTestimonials } from "~/components/ui/animated-testimonials";
{/*import { FcGoogle } from "react-icons/fc";*/}
import { createClient } from '@supabase/supabase-js'
import { useEffect, useState } from 'react'



const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

function Reader() {
  const { user } = useUser()

  const [politicsText, setPoliticsText] = useState("Fetching the latest news, just for you...");
  const [technologyText, setTechnologyText] = useState("Fetching the latest news, just for you...");
  const [economyText, setEconomyText] = useState("Fetching the latest news, just for you...");
  const [warText, setWarText] = useState("Fetching the latest news, just for you...");
  const [dateTime, setDateTime] = useState("...");

  useEffect(() => {
    async function pullNews() {
      // .single() tells Supabase to return exactly ONE object instead of an array of objects (AI)
      const { data, error } = await supabase
        .from('NewsStorage')
        .select('*')
        .order('id', { ascending: false })
        .limit(1)
        .single();
      
      if (error) {
        console.error(error)
        return
      }
      
      if (data) {
        setPoliticsText(data.politics)
        setTechnologyText(data.technology)
        setEconomyText(data.economy)
        setWarText(data.war)
        setDateTime(data.created_at)
      }
    }

    pullNews();
  }, []); // Empty array means run once on page load

  
  
  
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
            <div className="accountbutton">
              <UserButton />
            </div>
          </Show>
        </nav>

        <div className="readertitle">
          <h1>Hey {user?.firstName}! Ready for the news? </h1>
          <p className="ainotice">AI can make mistakes. Please double-check critical information manually.</p>

          <div className="dateSwitcher">
            {/*<Button className="dateSwitchButton">
              {" "}
              <ArrowLeft size={18} />{" "}
            </Button>*/}
            <p className="reader-date">{dateTime}</p>
            {/*<Button className="dateSwitchButton">
              {" "}
              <ArrowRight size={18} />{" "}
            </Button>*/}
          </div>
        </div>

        {/*<hr className="septeration-line-reader" />

          <article>
            <h1 className="sub-readertitle-2">Politics</h1>
            <p className="articleText">Recent diplomatic developments show a cautious de-escalation in the Iran conflict. President Trump called off planned strikes on Iran, citing the "perimeters of a deal" to reopen the Strait of Hormuz. Iran's foreign ministry confirmed it is discussing a temporary shipping route through the strait with Oman, though it denies active negotiations with the US directly. Meanwhile, Trump has also claimed the "complete disarmament" of Hamas, though Hamas states it will only lay down arms if Israel withdraws from Gaza first.
            
            You will find the associated sources below this article.</p>
          </article>

        <hr className="septeration-line-reader" />
        
        <hr className="septeration-line-reader" />

          <article>
            <h1 className="sub-readertitle-2">Technology</h1>
            <p className="articleText">China's rapid tech advances—new AI models, advanced robots, and specialty computer chips—are creating significant disruption across global markets, unsettling both Silicon Valley and the White House. These developments highlight intensifying competition in artificial intelligence and semiconductor technology between the US and China, with ripple effects impacting the broader tech industry. The pace of innovation continues to reshape strategic priorities, prompting concern among policymakers and industry leaders alike as they navigate the shifting technological landscape and its geopolitical implications.
            
            You will find the associated sources below this article.</p>
          </article>

        <hr className="septeration-line-reader" />

        <hr className="septeration-line-reader" />

          <article>
            <h1 className="sub-readertitle-2">Economy</h1>
            <p className="articleText">Recent economic data shows mixed signals globally. UK manufacturing growth accelerated in July, marking its fourth consecutive month of expansion at the fastest pace in nearly two years, despite lingering concerns over the US-Iran conflict's impact on oil supplies. Meanwhile, the US economy grew at a sluggish 1.5% in the second quarter, with inflation exceeding the Fed's target. The Bank of England held interest rates at 3.75%, citing inflation fears amid rising oil prices tied to the Middle East crisis.
            
            You will find the associated sources below this article.</p>
          </article>

        <hr className="septeration-line-reader" />

        <hr className="septeration-line-reader" />

          <article>
            <h1 className="sub-readertitle-2">War</h1>
            <p className="articleText">In the Israel-Iran war, President Trump abruptly canceled planned "massive" strikes on Iran, citing progress on a deal to reopen the Strait of Hormuz, with talks set to resume Monday. However, Iran's foreign ministry clarified it is not negotiating with the US, but rather discussing a temporary shipping route through Hormuz with Oman. Meanwhile, the Russia-Ukraine war continues with deadly exchanges: Ukrainian drone strikes killed civilians in Gelendzhik and hit a Wildberries warehouse, while Russia struck Kyiv and Ukrainian cargo ships, as both sides trade escalating infrastructure attacks.
            
            You will find the associated sources below this article.</p>
          </article>

        <hr className="septeration-line-reader" />*/}

        <div className="newsandcheckDIV">
          <AnimatedTestimonials 
            testimonials={[
              {
                name: "Politics",
                quote: politicsText,
                src: "https://images.unsplash.com/photo-1520452112805-c6692c840af0?q=80&w=1380&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              },
              {
                name: "Technology",
                quote: technologyText,
                src: "https://images.unsplash.com/photo-1556742419-3d4480213f85?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              },
              {
                name: "Economy",
                quote: economyText,
                src: "https://images.unsplash.com/photo-1618044733300-9472054094ee?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              },
              {
                name: "War",
                quote: warText,
                src: "https://images.unsplash.com/photo-1500252185289-40ca85eb23a7?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              }
            ]} 
            autoplay={false}
          />

          {/*<Button onClick={()=> href="" target="_blank"}> <FcGoogle /> Check via AI Overview</Button>*/}
        </div>

        <div>
          
        </div>
        
        <Bottombar/>
        
      </Show>
    </>
  );
}

export default Reader;
