import "/src/shared/_grid.scss";
import "/src/shared/_typo.scss";

const AboutItemSecond = ({ textTitle, textDescription}) => {
  return (
    <div className={"col-lg-5"}>
      <p className={"about__title__s"}>{textTitle}</p>
      <p className={"about__s"}>{textDescription}</p>
  </div>
  );
};

export default AboutItemSecond;