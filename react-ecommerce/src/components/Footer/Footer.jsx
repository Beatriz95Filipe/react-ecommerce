import style from "./style.module.scss";
import "/src/shared/_grid.scss";
import "/src/shared/_typo.scss";
import "/src/shared/_colors.scss";
import "/src/shared/_mixins.scss";

const Footer = () => {

  let copyrightFooter = () => {
      let getDate = new Date();
      let getYear = getDate.getFullYear();
      //console.log(getYear);
      return getYear;
  }

  return (
    <footer className={`${"container--fluid"} ${style.footer}`}>
      <div className={`${"row"} ${style.footer__list}`}>
        <div className={"col-lg-3"}>
          <ul>
            <li className={"title"}>Shopping Services</li>
            <li><a className={style.footer__list} href="">Schedule Consultation</a></li>
            <li><a className={style.footer__list} href="">Showrooms</a></li>
            <li><a className={style.footer__list} href="">Trade Program</a></li>
            <li><a className={style.footer__list} href="">Outlet</a></li>
          </ul>
        </div>
        <div className={"col-lg-3"}>
          <ul>
            <li className={"title"}>About</li>
            <li><a className={style.footer__list} href="">Our Story</a></li>
            <li><a className={style.footer__list} href="">Reviews</a></li>
            <li><a className={style.footer__list} href="">Careers</a></li>
            <li><a className={style.footer__list} href="">Financing</a></li>
            <li><a className={style.footer__list} href="">Patents</a></li>
            <li><a className={style.footer__list} href="">Our Blog</a></li>
          </ul>
        </div>
        <div className={"col-lg-3"}>
          <ul>
            <li className={"title"}>Resources</li>
            <li><a className={style.footer__list} href="">Look Up Order Status</a></li>
            <li><a className={style.footer__list} href="">Assembly Instructions</a></li>
            <li><a className={style.footer__list} href="">Returns</a></li>
            <li><a className={style.footer__list} href="">Shipping & Delivery</a></li>
            <li><a className={style.footer__list} href="">FAQ</a></li>
            <li><a className={style.footer__list} href="">Refer a Friend</a></li>
          </ul>
        </div>
        <div className={"col-lg-3"}>
          <ul>
            <li className={"title"}>Contact Customer Experience</li>
            <li>Email: support@template.com</li>
            <li>Text: 224-628-7769</li>
            <li>Hours:</li>
            <li>Monday to Friday — 10a to 8p EST</li>
            <li>Saturday to Sunday — 10a to 2p EST</li>
          </ul>
        </div>
        <div className={"col-lg-3"}></div>
        <div className={"col-lg-3"}></div>
        <div className={"col-lg-3"}></div>
      </div>
      <div className={style.footer__end}>
        <div className={style.copyright}>
          <p>© {copyrightFooter()} Template</p>
          <a className={style.site__links} href="">Terms</a>
          <span> - </span>
          <a className={style.site__links} href="">Accessibility</a>
          <span> - </span>
          <a className={style.site__links} href="">Sitemap</a>
          <span> - </span>
          <a className={style.site__links} href="">Privacy</a>
        </div>
        <div className={style.adress}>
          <p>15 W 27th Street, 9th Floor New York, NY, 10001</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;