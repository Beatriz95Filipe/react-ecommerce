import "/src/shared/_grid.scss";
import "/src/shared/_typo.scss";
import "/src/shared/_thumbnails.scss";

const ShopSpaces = () => {
    return (
        <section className={"container--fluid"}>
        <p className={"slogan"}>Shop these real-life spaces</p>
        <div className={"spaces"}>
            <div className={"spaces__thumbnail"}>
                <a href=""><img src="/src/assets/homepage/carousel/01-sofa.webp" alt="01-sofa" /></a>
            </div>
            <div className={"spaces__thumbnail"}>
                <a href=""><img src="/src/assets/homepage/carousel/02-sofa.webp" alt="02-sofa" /></a>
            </div>
            <div className={"spaces__thumbnail"}>
                <a href=""><img src="/src/assets/homepage/carousel/03-side-table.webp" alt="03-side-table" /></a>
            </div>
            <div className={"spaces__thumbnail"}>
                <a href=""><img src="/src/assets/homepage/carousel/04-bed.png" alt="04-bed" /></a>
            </div>
            <div className={"spaces__thumbnail"}>
                <a href=""><img src="/src/assets/homepage/carousel/05-sofa.webp" alt="05-sofa" /></a>
            </div>
            <div className={"spaces__thumbnail"}>
                <a href=""><img src="/src/assets/homepage/carousel/06-sofa.jpg" alt="06-sofa" /></a>
            </div>
        </div>
    </section>
    );
};

export default ShopSpaces;

//MELHORAR: criar um "spacesCard" e depois um ciclo que passe por um array de objectos de spaces!
//MELHORAR: fazer um <Link> to={produto relacionado com a imagem em que clico}