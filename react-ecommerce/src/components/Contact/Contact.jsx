import style from "./style.module.scss";
import { useEffect, useState } from "react";

import "/src/shared/_grid.scss";
import "/src/shared/_buttons.scss";
import "/src/shared/_thumbnails.scss";

const Contact = () => {

    const [email, setEmail] = useState("");

    const handleEmailInput = (event) => {
        setEmail(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        const submittedEmail = formData.get("emailField");
        console.log(submittedEmail);

        fetch('https://fakeNewsletter.com', { //vai dar erro porque não existe este URL, certo??
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ submittedEmail })
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                alert('Thank you for joining our newsletter!');
            })
            .catch((error) => {
                if (submittedEmail === '') {
                    alert("Don't forget to enter your email!");
                }
            });

        setEmail("");
    };

    return(
        <form className={style.contact} action="" onSubmit={handleSubmit}>
        <div className={style.subscribe}>
            <input onChange={handleEmailInput} type="email" placeholder="Sign up for enthralling couch reads" name="emailField" />
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