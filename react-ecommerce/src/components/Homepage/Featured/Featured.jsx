import style from "./style.module.scss";

import "/src/shared/_grid.scss";

const Featured = () => {
    return(
        <section className={`${"container--fluid"} ${style.featured}`}>
            <img className={style.featured__product__img} src="src/assets/homepage/05-featured-sofa.png" alt="featured-product" />
            <div className={`${style.featured_product} ${"container"}`}>
                <p className={`${"col-lg-3"} ${style.feat__product__name}`}>Nomad</p>
                <p className={`${"col-lg-3"} ${style.feat__product__description}`}> <span>The Ambid</span> system works beautifully. It's comfortable, absolutely solid, and looks great.</p>
                <a className={`${"col-lg-3"} ${style.feat_product_shop}`} href="">SHOP NOW</a>
            </div>
        </section>
    );
};

export default Featured;