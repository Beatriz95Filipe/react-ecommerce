import style from "./style.module.scss";

import "/src/shared/_grid.scss";
import "/src/shared/_typo.scss";
import "/src/shared/_colors.scss";
import "/src/shared/_thumbnails.scss";
import "/src/shared/_buttons.scss";

import React, { useState } from "react";

const ChoosenProductSeating = () => {
    
    return (
        <>
            <div className={style.styles}>
                <div className={style.arm__style}>
                    <p className={"choices"}>Arm Style</p>
                    <div className={style.styles__choices}>
                        <div className={style.arm__round}>
                            <input type="radio" name="arm" id="round" />
                            <div className={style.arm__round__icon}></div>
                        </div>
                        <div className={style.arm__fillet}>
                            <input type="radio" name="arm" id="fillet" />
                            <div className={style.arm__fillet__icon}></div>
                        </div>
                    </div>
                </div>
                <div className={style.cushion__style}>
                    <p className={"choices"}>Flip Back Cushions</p>
                    <div className={style.styles__choices}>
                        <div className={style.cushion__flat}>
                            <input type="radio" name="cushion" id="flat" />
                            <div className={style.cushion__flat__icon}></div>
                        </div>
                        <div className={style.cushion__nail}>
                            <input type="radio" name="cushion" id="nail" />
                            <div className={style.cushion__nail__icon}></div>
                            <div className={style.cushion__nail__c1}></div>
                            <div className={style.cushion__nail__c2}></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.upgrades}>
                <p className={"choices"}>Upgrades</p>
                <div className={style.upgrade__check}>
                    <input type="checkbox" name="upgrade" id="moveable" />
                    <label htmlFor="moveable">Moveable chaise + €495</label>
                </div>
                <div className={style.upgrade__check}>
                    <input type="checkbox" name="upgrade" id="ottoman" />
                    <label htmlFor="ottoman">Ottoman + €345</label>
                </div>
                <div className={style.upgrade__check}>
                    <input type="checkbox" name="upgrade" id="lumbar" />
                    <label htmlFor="lumbar">Lumbar Pillows + €135</label>
                </div>
                <div className={style.upgrade__check}>
                    <input type="checkbox" name="upgrade" id="sleep" />
                    <label htmlFor="sleep">Sleep Kit + €295</label>
                </div>
            </div>
        </>
    )
};

export default ChoosenProductSeating;