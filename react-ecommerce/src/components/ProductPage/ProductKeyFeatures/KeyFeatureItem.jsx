import "/src/shared/_grid.scss";
import "/src/shared/_typo.scss";
import "/src/shared/_thumbnails.scss";

const KeyFeatureItem = ({ imgSrc, imgAlt, featTitle }) => {
    return (
        <div className={"key-feat__thumbnail"}>
            <img src={imgSrc} alt={imgAlt} />
            <span>{featTitle}</span>
        </div>
    );
  };
  
  export default KeyFeatureItem;