import InfoItem from "../../Homepage/Info/InfoItem";

import style from "./style.module.scss";

import "/src/shared/_grid.scss";
import "/src/shared/_mixins.scss";

const Info = () => {
    return (
        <section className={`${"container--fluid"} ${style.bg_info}`}>
            <div className={`${"row"} ${"container"} ${style.info_section}`}>
                <InfoItem
                    imgSrc="/src/assets/homepage/04-icons/shipping.png"
                    imgAlt="shipping"
                    itemText="Fast & free shipping.! Single order ships for free.! No minimums, no tiers, no fine print whatsoever."
                />
                <InfoItem
                    imgSrc="/src/assets/homepage/04-icons/modular.png"
                    imgAlt="modular"
                    itemText="Modular, easy-to-move design.! Our innovative modular design is driven by the belief that furniture should fit this home, and the next one."
                />
                <InfoItem
                    imgSrc="/src/assets/homepage/04-icons/sustainable.png"
                    imgAlt="sustainable"
                    itemText="Durable, premium materials.! We use materials like sustainably-forested wood, strengthened steel hardware, and top-grain Italian leather."
                />
            </div>
        </section>
    );
};

export default Info;