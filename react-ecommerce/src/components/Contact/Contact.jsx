import style from "./style.module.scss";

import "/src/shared/_grid.scss";
import "/src/shared/_buttons.scss";
import "/src/shared/_thumbnails.scss";

const Contact = () => {
    return(
        <form className={style.contact} action="">
        <div className={style.subscribe}>
            <input type="email" placeholder="Sign up for enthralling couch reads" />
            <button className={"btn__subscribe"} type="submit">subscribe</button>
        </div>
        <div className={style.socials}>
            <a className={"socials_thumbnail"} href="">
                <img src="/src/assets/socials/icons8-youtube.svg" alt="youtube" />
            </a>
            <a className={"socials_thumbnail"} href="">
                <img src="/src/assets/socials/icons8-instagram.svg" alt="instagram" />
            </a>
            <a className={"socials_thumbnail"} href="">
                <img src="/src/assets/socials/icons8-facebook.svg" alt="facebook" />
            </a>
        </div>
    </form>
    );
};

export default Contact;