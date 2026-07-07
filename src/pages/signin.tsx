import { Link } from "react-router-dom";

import { SignIn } from '@clerk/react'
import PixelBlast from "~/components/PixelBlast";

function Signin() {
  return (
    <>
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -1 }}>
        <PixelBlast
          variant="square"
          pixelSize={5}
          color="#000000"
          patternScale={3.5}
          patternDensity={1.8}
          enableRipples
          rippleSpeed={0.3}
          rippleThickness={0.1}
          rippleIntensityScale={1}
          speed={0.5}
          transparent
          edgeFade={0}
        />
      </div>
      
    <nav className="navbar">
      {" "}
        <Link to="/">
          <h1 className="headerBranding">Lucider</h1>
        </Link>
      {" "}
    </nav>
      
      <div className="signInBox">
        <SignIn />
      </div>
    </>
  );
}

export default Signin;
