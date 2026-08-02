import { Link } from "react-router-dom";
import { Button } from "~/components/ui/button";
import { Show, UserButton, RedirectToSignIn } from "@clerk/react";
import { ArrowRight, ArrowLeft } from "lucide-react";
import Bottombar from "~/components/bottombar";

function Reader() {
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
          <h1>Today's readings</h1>

          <div className="dateSwitcher">
            <Button>
              {" "}
              <ArrowLeft size={18} />{" "}
            </Button>
            <p className="reader-date">[Example Date]</p>
            <Button>
              {" "}
              <ArrowRight size={18} />{" "}
            </Button>
          </div>
        </div>

        <hr className="septeration-line-reader" />

          <div className="sub-readertitle-2">
            <h1>Politics</h1>
          </div>

        <hr className="septeration-line-reader" />
        
        <Bottombar/>
      </Show>
    </>
  );
}

export default Reader;
