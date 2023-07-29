import style from "./style.module.scss";

import "/src/shared/_grid.scss";
import "/src/shared/_typo.scss";
import "/src/shared/_colors.scss";
import "/src/shared/_thumbnails.scss";
import "/src/shared/_buttons.scss";

import { useState } from "react";

const ChoosenColor = () => {
    const [selectedColor, setSelectedColor] = useState(null);

    const handleColor = (event) => {
        const selectedId = event.target.id;
        const selectedLabel = document.querySelector(`label[for=${selectedId}]`);
        setSelectedColor(selectedLabel.textContent);
    };

    // console.log(selectedColor);

    return (
        <div className={style.choosen__product__color}>
            <p className={"choosen__color"}>Fabric Color: {selectedColor}</p>
            <input type="radio" name="color" id={style.navy_blue} onChange={handleColor} /><label className={style.color} htmlFor={style.navy_blue}>Navy Blue</label>
            <input type="radio" name="color" id={style.leaf} onChange={handleColor} /><label className={style.color} htmlFor={style.leaf}>Leaf</label>
            <input type="radio" name="color" id={style.red_wine} onChange={handleColor} /><label className={style.color} htmlFor={style.red_wine}>Red Wine</label>
            <input type="radio" name="color" id={style.night} onChange={handleColor} /><label className={style.color} htmlFor={style.night}>Night</label>
            <input type="radio" name="color" id={style.light_grey} onChange={handleColor} /><label className={style.color} htmlFor={style.light_grey}>Light Grey</label>
        </div>
    )
};

export default ChoosenColor;