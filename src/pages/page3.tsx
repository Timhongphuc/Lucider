import { Link } from "react-router-dom";
import { Button } from "~/components/ui/button";

function Page3() {
  return (
    <>
      <h1>This is the third page!</h1>

      <Button> <Link to="/page1">Go to the first Page...</Link> </Button>
    </>
  );
}

export default Page3;
