import "/src/shared/_grid.scss";
import "/src/shared/_typo.scss";
import "/src/shared/_video.scss";
import "/src/shared/_thumbnails.scss";

import ProductVideoText from "./ProductVideoText";

const ProductVideos = () => {
  return (
    <section className={"container"}>
        <div className={`${"row"} ${"videos"}`}>
            <div className={"col-lg-6"}>
                <video className={"product-video"} muted autoPlay loop>
                    <source src="/src/assets/videos/product-video-seating-1.mp4" />
                </video>
            </div>
            <ProductVideoText
                sloganVideoTitle="Durable enough for everyday drama"
                sloganVideoText="Each and every component of our furniture is selected for durability, from the galvanized steel latches to the precision-milled Baltic Birch frame. The fabric is inherently scratch-resistant, thanks to an incredibly tight weave, which makes it perfect for pets and their parents."
                title1="Low carbon footprint"
                text1="Fabric made from upcycled materials"
                title2="Sustainable wood"
                text2="Sourced from responsibly managed forests"
            />
            <ProductVideoText
                sloganVideoTitle="Don't sweat the spills"
                sloganVideoText="Our olefin fabric is stain-resistant thanks to a deep dyeing process that colors each individual strand to the core, as opposed to other fibers that have little pores that absorb stains. You can even spray spills with a water and bleach solution (yes, we said bleach) and blot it out to clean stains."
                title1="Non toxic"
                text1="Zero chemical additives or treatments"
                title2="Zero PFCs"
                text2="Fabric free of dangerous formaldehydes"
            />
            <div className={"col-lg-6"}>
                <video className={"product-video"} muted autoPlay loop>
                    <source src="/src/assets/videos/product-video-seating-2.mp4" />
                </video>
            </div>
        </div>
    </section>
  );
};

export default ProductVideos;

//MELHORAR: mudar descrição e vídeos conforme a categoria - fetch - searchURLparameters