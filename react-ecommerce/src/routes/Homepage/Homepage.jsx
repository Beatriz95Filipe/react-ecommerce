import "/src/shared/_grid.scss";
import "/src/shared/_buttons.scss";
import "/src/shared/_typo.scss";
import "/src/shared/_video.scss";

import Splash from "../../components/Homepage/Splash/Splash";
import Categories from "../../components/Homepage/Categories/Categories";
import Info from "../../components/Homepage/Info/Info";
import ShopSpaces from "../../components/Homepage/ShopSpaces/ShopSpaces";
import Featured from "../../components/Homepage/Featured/Featured";

const HomePage = () => {
  return (
    <>
      <Splash />
      <Categories />
      <Info />
      <ShopSpaces />
      <Featured />
      <section className={"container--fluid"}>
          <p className={"slogan"}>Modular, easy-to-move design</p>
          <video className={"home-video"} muted autoPlay loop>
              <source src="/src/assets/videos/background-video-home.mp4" />
          </video>
          <div className={"row"}>
              <button className={"btn__shop"}>SHOP SEATING</button>
          </div>
      </section>
    </>
  );
};

export default HomePage;