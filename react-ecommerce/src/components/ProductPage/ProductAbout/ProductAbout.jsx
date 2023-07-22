import "/src/shared/_grid.scss";
import "/src/shared/_typo.scss";

import AboutItemMain from "../ProductAbout/AboutItemMain";
import AboutItemSecond from "../ProductAbout/AboutItemSecond";

const ProductAbout = () => {
  return (
    <section className={"container"}>
        <AboutItemMain
            textTitle="About this piece"
            textDescription="The ideal three-seat sofa featuring one seat with a chaise lounge addition, one seat with an ottoman, and one seat for the chiropractor who loves to sit upright with their feet on the floor. Like everything we make, our modular design is incredibly easy to move and packed with all the clever, life-changing features you expect from Burrow, starting with a built-in USB charger."
        />
        <div className={"row"}>
            <AboutItemSecond
                textTitle="Customizable"
                textDescription="Create your ideal sectional sofa with five fabric colors, six leg finishes, and three armrest heights. You can even swap the reversible back cushions: one side is tufted for a classic look, the other smooth and contemporary."
            />
            <AboutItemSecond
                textTitle="Adaptable"
                textDescription="Rest easy with the knowledge that your new furniture can grow and expand with your life, thanks to the universal, modular design of our Nomad Collection."
            />
            <div className={"col-lg-2"}></div>
        </div>
    </section>
  );
};

export default ProductAbout;