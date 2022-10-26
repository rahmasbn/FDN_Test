import Pic1 from "src/assets/images/pic1.png";
import Pic2 from "src/assets/images/pic2.png";
import Pic3 from "src/assets/images/pic3.png";
import Pic4 from "src/assets/images/pic4.png";
import Image from "next/image";
import styles from "src/commons/styles/Molecules.module.css";

const groups = [
  {
    name: "Embrace the Curl",
    description: "May our curls pop and never stop!",
    image: Pic1,
  },
  {
    name: "Embrace the Curl",
    description: "May our curls pop and never stop!",
    image: Pic2,
  },
  {
    name: "Embrace the Curl",
    description: "May our curls pop and never stop!",
    image: Pic3,
  },
  {
    name: "Embrace the Curl",
    description: "May our curls pop and never stop!",
    image: Pic4,
  },
];

function PopularGroups() {
  return (
    <section className={styles.section}>
      <h2 style={{ marginBottom: "-0.5rem" }}>Popular Groups</h2>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <p style={{ color: "#a8a8a8", fontSize: "17px" }}>
          Where the beauty TALK are
        </p>
        <p className={styles.seeMore}>See more &gt; </p>
      </div>

      <div style={{ display: "flex", gap: "30px" }}>
        {groups.map((val, idx) => {
          return (
            <>
              <div className={styles.groupContainer} key={idx}>
                <div className={styles.imgGroupWrapper}>
                  <Image src={val.image} alt="Group" />
                </div>
                <h2 style={{ textAlign: "center" }}>{val.name}</h2>
                <div className={styles.iconWrapper}>
                  <i className={`bi bi-person-dash-fill ${styles.icon}`} />
                  <i className={`bi bi-list-ul ${styles.icon}`} />
                  <i className={`bi  bi-chat-right-text ${styles.icon}`} />
                </div>
                <p
                  style={{
                    textAlign: "center",
                    padding: "0 1rem",
                  }}
                >
                  {val.description}
                </p>
              </div>
            </>
          );
        })}
      </div>
    </section>
  );
}

export default PopularGroups;
