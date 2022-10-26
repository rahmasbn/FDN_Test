import Image from "next/image";
import AppStore from "src/assets/icons/appstore.png";
import PlayStore from "src/assets/icons/playstore.png";
import Facebook from "src/assets/icons/facebook.png";
import Instagram from "src/assets/icons/instagram.png";
import Twitter from "src/assets/icons/twitter.png";
import Youtube from "src/assets/icons/youtube.png";
import Logo from "src/assets/icons/logo.svg";
import styles from "src/commons/styles/Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div style={{ flexGrow: 3 }}>
        <div className={styles.wrapper}>
          <div
            style={{
              flexGrow: 1,
              fontWeight: "700",
            }}
          >
            <p>About Us</p>
            <p>Feedback</p>
            <p>Contact</p>
          </div>
          <div
            style={{
              flexGrow: 1,
              fontWeight: "700",
            }}
          >
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
            <p>Help</p>
          </div>
          <div
            style={{
              flexGrow: 1,
              fontWeight: "700",
            }}
          >
            <p>Awards</p>
            <p>Newsletter</p>
          </div>
        </div>
        <Image src={Logo} alt="logo" />
        <p className={styles.copyright}>
          Copyright &#169; 2015 - 2017 Female Daily Network &#x2022; All right
          reserved
        </p>
      </div>
      <div style={{ flexGrow: 1 }}>
        <p style={{ fontWeight: "700" }}>Download Our Mobile App</p>
        <div style={{ display: "flex", gap: "30px" }}>
          <Image
            src={AppStore}
            alt="App Store"
            width={160}
            height={50}
            objectFit="cover"
            style={{ borderRadius: "6px" }}
          />
          <Image
            src={PlayStore}
            alt="Play Store"
            width={160}
            height={50}
            objectFit="cover"
            style={{ borderRadius: "6px" }}
          />
        </div>
        <div className={styles.imgContainer}>
          <Image
            src={Facebook}
            alt="social media"
            width={35}
            height={35}
            objectFit="cover"
          />
          <Image
            src={Twitter}
            alt="social media"
            width={35}
            height={35}
            objectFit="cover"
          />
          <Image
            src={Instagram}
            alt="social media"
            width={35}
            height={35}
            objectFit="cover"
          />
          <Image
            src={Youtube}
            alt="social media"
            width={35}
            height={35}
            objectFit="cover"
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
