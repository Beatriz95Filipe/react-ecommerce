import style from "./style.module.scss";

import "/src/shared/_grid.scss";
import "/src/shared/_typo.scss";
import "/src/shared/_video.scss";
import "/src/shared/_thumbnails.scss";

const ProductVideoText = ({ sloganVideoTitle, sloganVideoText, title1, text1, title2, text2}) => {
    return (
        <div className={"col-lg-6"}>
            <p className={"slogan__video"}>{sloganVideoTitle}</p>
            <p className={"about"}>{sloganVideoText}</p>
            <div className={style.zero}>
                <div className={"col-lg-6"}>
                    <p className={"about__title__s"}>{title1}</p>
                    <p>{text1}</p>
                </div>
                <div className={"col-lg-6"}>
                    <p className={"about__title__s"}>{title2}</p>
                    <p>{text2}</p>
                </div>
            </div>
        </div>
    );
  };
  
  export default ProductVideoText;