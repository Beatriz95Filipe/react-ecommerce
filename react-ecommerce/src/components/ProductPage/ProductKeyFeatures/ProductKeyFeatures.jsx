import KeyFeatureItem from "../ProductKeyFeatures/KeyFeatureItem";

import "/src/shared/_grid.scss";
import "/src/shared/_typo.scss";

const ProductKeyFeatures = () => {
  return (
    <section className={"container"}>
        <p className={"about__title__key"}>Key Features</p>
        <div className={"key-feat"}>
            <KeyFeatureItem
                imgSrc={"/src/assets/icons/seating/icon-fabric.webp"}
                imgAlt="Customizable"
                featTitle="Customizable"
            />
            <KeyFeatureItem
                imgSrc={"/src/assets/icons/seating/icon-frame.webp"}
                imgAlt="Frame"
                featTitle="Frame"
            />
            <KeyFeatureItem
                imgSrc={"/src/assets/icons/seating/icon-hardware.webp"}
                imgAlt="Hardware"
                featTitle="Hardware"
            />
            <KeyFeatureItem
                imgSrc={"/src/assets/icons/seating/icon-charger.webp"}
                imgAlt="Charger"
                featTitle="Charger"
            />
            <KeyFeatureItem
                imgSrc={"/src/assets/icons/seating/icon-support.webp"}
                imgAlt="Legs"
                featTitle="Legs"
            />
        </div>
    </section>
  );
};

export default ProductKeyFeatures;