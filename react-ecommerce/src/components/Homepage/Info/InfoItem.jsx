import style from "./style.module.scss";

const InfoItem = ({ imgSrc, imgAlt, itemText }) => {
    const paragraphs = itemText.split('!').map((sentence, index) => (
    <p className={style.info__item__text} key={index}>{sentence}</p>
    ));

    return(
        <div className={`${style.info__item} ${"col-lg-4"}`}>
            <img src={imgSrc} alt={imgAlt} />
            {paragraphs}
        </div>
    );
};

export default InfoItem;