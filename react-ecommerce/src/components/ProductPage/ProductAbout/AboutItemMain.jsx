import "/src/shared/_grid.scss";
import "/src/shared/_typo.scss";

const AboutItemMain = ({ textTitle, textDescription}) => {
  return (
        <div className={"row__left"}>
            <p className={"about__title"}>{textTitle}</p>
            <p className={"about"}>{textDescription}</p>
        </div>
  );
};

export default AboutItemMain;