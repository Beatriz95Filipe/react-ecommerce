import { Link } from "react-router-dom";

import style from "./style.module.scss";
import carousel from "./product-carousel.module.scss";

import "/src/shared/_grid.scss";
import "/src/shared/_typo.scss";
import "/src/shared/_colors.scss";
import "/src/shared/_thumbnails.scss";
import "/src/shared/_buttons.scss";

const ChoosenProduct = () => {
  return (
    <section className={"container"}>
        <p className={"product__title"}>Nomad</p>
        <div className={"row"}>
            <div className={"col-lg-8"}>
                <div className={carousel.carousel}>
                    <img src="/src/assets/products/seating/1/product.webp" alt="nomad1" id="slide-1" />
                    <img src="/src/assets/products/seating/1/product-hover.webp" alt="nomad2" id="slide-2" />
                    <img src="/src/assets/products/seating/1/product-hover-4.webp" alt="nomad3" id="slide-3" />
                    <img src="/src/assets/products/seating/1/product-hover-5.webp" alt="nomad4" id="slide-4" />
                    <img src="/src/assets/products/seating/1/product-hover-6.webp" alt="nomad5" id="slide-5" />
                </div>
                <div className={carousel.carousel__preview}>
                    <a href="#slide-1"><img src="/src/assets/products/seating/1/product.webp" alt="nomad1" /></a>
                    <a href="#slide-2"><img src="/src/assets/products/seating/1/product-hover.webp" alt="nomad2" /></a>
                    <a href="#slide-3"><img src="/src/assets/products/seating/1/product-hover-4.webp" alt="nomad3" /></a>
                    <a href="#slide-4"><img src="/src/assets/products/seating/1/product-hover-5.webp" alt="nomad4" /></a>
                    <a href="#slide-5"><img src="/src/assets/products/seating/1/product-hover-6.webp" alt="nomad5" /></a>
                </div>
            </div>
            <div className={"col-lg-4"}>
                <p className={"choosen__product__name"}>Block Nomad Sofa</p>
                <p className={"choosen__product__price"}>€1595 + Free Shipping</p>
                <form action="">
                    <div className={style.choosen__product__color}>
                        <p className={"choosen__color"}>Fabric Color:</p>
                        <input type="radio" name="color" id={style.navy_blue} /><label className={style.color} for={style.navy_blue}>Navy Blue</label>
                        <input type="radio" name="color" id={style.leaf} /><label className={style.color} for={style.leaf}>Leaf</label>
                        <input type="radio" name="color" id={style.red_wine} /><label className={style.color} for={style.red_wine}>Red Wine</label>
                        <input type="radio" name="color" id={style.night} /><label className={style.color} for={style.night}>Night</label>
                        <input type="radio" name="color" id={style.light_grey} /><label className={style.color} for={style.light_grey}>Light Grey</label>
                    </div>
                    <div className={style.styles}>
                        <div className={style.arm__style}>
                            <p className={"choices"}>Arm Style</p>
                            <div className={style.styles__choices}>
                                <div className={style.arm__round}>
                                    <input type="radio" name="arm" id="round" />
                                    <div className={style.arm__round__icon}></div>
                                </div>
                                <div className={style.arm__fillet}>
                                    <input type="radio" name="arm" id="fillet" />
                                    <div className={style.arm__fillet__icon}></div>
                                </div>
                            </div>
                        </div>
                        <div className={style.cushion__style}>
                            <p className={"choices"}>Flip Back Cushions</p>
                            <div className={style.styles__choices}>
                                <div className={style.cushion__flat}>
                                    <input type="radio" name="cushion" id="flat" />
                                    <div className={style.cushion__flat__icon}></div>
                                </div>
                                <div className={style.cushion__nail}>
                                    <input type="radio" name="cushion" id="nail" />
                                    <div className={style.cushion__nail__icon}></div>
                                    <div className={style.cushion__nail__c1}></div>
                                    <div className={style.cushion__nail__c2}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={style.upgrades}>
                        <p className={"choices"}>Upgrades</p>
                        <div className={style.upgrade__check}>
                            <input type="checkbox" name="upgrade" id="moveable" />
                            <label for="moveable">Moveable chaise + €495</label>
                        </div>
                        <div className={style.upgrade__check}>
                            <input type="checkbox" name="upgrade" id="ottoman" />
                            <label for="ottoman">Ottoman + €345</label>
                        </div>
                        <div className={style.upgrade__check}>
                            <input type="checkbox" name="upgrade" id="lumbar" />
                            <label for="lumbar">Lumbar Pillows + €135</label>
                        </div>
                        <div className={style.upgrade__check}>
                            <input type="checkbox" name="upgrade" id="sleep" />
                            <label for="sleep">Sleep Kit + €295</label>
                        </div>
                    </div>
                    <div className={style.cart}>
                        <button class={"btn__cart"}>add to cart</button>
                    </div>
                </form>
            </div>
        </div>
    </section>
  );
};

export default ChoosenProduct;