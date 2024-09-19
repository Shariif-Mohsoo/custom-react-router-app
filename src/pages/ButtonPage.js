import { GoZap, GoUpload, GoArchive } from "react-icons/go";
import Button from "../components/Button";

function ButtonPage() {
  const handleClick = () => {
    // console.log("Clicked!");
  };

  return (
    <div>
      <div>
        <Button secondary className="mb-5" onClick={handleClick}>
          <GoZap />
          Click me!!
        </Button>
      </div>
      <div>
        <Button danger onMouseEnter={handleClick}>
          <GoUpload />
          Buy Now!
        </Button>
      </div>
      <div>
        <Button warning onMouseLeave={handleClick}>
          <GoArchive />
          See Deal!
        </Button>
      </div>
      <div>
        <Button secondary>Hide Ads!</Button>
      </div>
      <div>
        <Button primary>Something!</Button>
      </div>
    </div>
  );
}

export default ButtonPage;
