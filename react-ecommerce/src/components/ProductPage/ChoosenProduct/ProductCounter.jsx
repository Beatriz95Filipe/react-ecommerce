import style from "./style.module.scss";

import "/src/shared/_grid.scss";
import "/src/shared/_typo.scss";
import "/src/shared/_colors.scss";
import "/src/shared/_thumbnails.scss";
import "/src/shared/_buttons.scss";

const ProductCounter = ({ productQuantity, quantityChanged }) => {

    const handleIncrease = () => {
        quantityChanged(productQuantity + 1);
    };

    const handleDecrease = () => {
        if (productQuantity > 0) {
            quantityChanged(productQuantity - 1);
        }
    };

    return (
        <div className="product_quantity">
            <button className="product_quantity_btn btn_decrease" onClick={handleDecrease}>-</button>
            <div className="product_quantity_num">{productQuantity}</div>
            <button className="product_quantity_btn btn_increase" onClick={handleIncrease}>+</button>
        </div>
    )
};

export default ProductCounter;