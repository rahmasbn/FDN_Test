import Image from "next/image";
import BodyShop from "src/assets/icons/body-shop.png";
import Maybelline from "src/assets/icons/maybelline.png";
import Innisfree from "src/assets/icons/innisfree.png";
import Ordinary from "src/assets/icons/the-ordinary.png";
import Nivea from "src/assets/icons/nivea.png";
import SKII from "src/assets/icons/SK-II.png";
import styles from "src/commons/styles/Molecules.module.css";

function TopBrands() {
  return (
    <section className={styles.section}>
      <h2 style={{ marginBottom: "-0.5rem" }}>Top Brands</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <p style={{ color: "#a8a8a8", fontSize: "17px" }}>
          We all know and love
        </p>
        <p className={styles.seeMore}>See more &gt; </p>
      </div>
      <div className={styles.brandContainer}>
        <div className={styles.logo}>
          <Image
            src={Nivea}
            alt="brands"
            width={90}
            height={90}
            objectFit="contain"
          />
        </div>
        <div className={styles.logo}>
          <Image
            src={Ordinary}
            alt="brands"
            width={130}
            height={20}
            objectFit="contain"
          />
        </div>
        <div className={styles.logo}>
          <Image
            src={BodyShop}
            alt="brands"
            width={130}
            height={170}
            objectFit="contain"
          />
        </div>
        <div className={styles.logo}>
          <Image
            src={SKII}
            alt="brands"
            width={90}
            height={100}
            objectFit="contain"
          />
        </div>
        <div className={styles.logo}>
          <Image
            src={Maybelline}
            alt="brands"
            width={150}
            height={100}
            objectFit="contain"
          />
        </div>
        <div className={styles.logo}>
          <Image
            src={Innisfree}
            alt="brands"
            width={100}
            height={100}
            objectFit="contain"
          />
        </div>
      </div>
      <h1>
        Female Daily - Find everything you want to know about beauty on Female
        Daily
      </h1>
      <p style={{ fontSize: "17px", fontWeight: "500" }}>
        Product Reviews, Tips & Tricks, Expert and Consumer Opinions, Beauty
        Tutorials, Discussions, Beauty Workshops, anything! <br /> We are here
        to be your friendly solution to all things beauty, inside and out!
      </p>
    </section>
  );
}

export default TopBrands;
