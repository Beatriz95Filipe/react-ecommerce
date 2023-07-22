import { Link } from "react-router-dom";

import style from "./ChoosenProduct/style.module.scss";

import "/src/shared/_grid.scss";
import "/src/shared/_typo.scss";
import "/src/shared/_colors.scss";
import "/src/shared/_thumbnails.scss";
import "/src/shared/_buttons.scss";


const ProductSpecs = ({ imgSrc }) => {
  return (
    <section className={"container"}>
            <p className={"about__title"}>Specifications</p>
            <div className={`${"row"} ${style.dimensions}`}>
                <div className={style["col-lg-5"]}>
                    <table>
                        <tbody>
                            <tr>
                                <th>General Dimensions</th>
                                <td>86" L x 61" D x 33" H</td>
                            </tr>
                            <tr>
                                <th>Seat Height</th>
                                <td>17"</td>
                            </tr>
                            <tr>
                                <th>Arm Height</th>
                                <td>23"</td>
                            </tr>
                            <tr>
                                <th>Chaise Length</th>
                                <td>13"</td>
                            </tr>
                            <tr>
                                <th>Seat Depth</th>
                                <td>134"</td>
                            </tr>
                            <tr>
                                <th>Chaise Seat Depth</th>
                                <td>11"</td>
                            </tr>
                            <tr>
                                <th>Leg Height</th>
                                <td>7"</td>
                            </tr>
                            <tr>
                                <th>Ottoman Dimensions</th>
                                <td>26" L x 26" W x 17" H</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className={style["col-lg-7"]}>
                    <img src={imgSrc} alt="product-dimensions" />
                </div>
            </div>
        </section>
  );
};

export default ProductSpecs;