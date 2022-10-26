import Image from "next/image";
import Foundie from "src/assets/images/foundie.png";
import Blush from "src/assets/images/blush.png";
import Serum from "src/assets/images/serum.png";
import PinkBlush from "src/assets/images/pink-blush.png";
import styles from "src/commons/styles/Molecules.module.css";

const trendings = [
  {
    name: "Skinceuticals",
    rating: 4.9,
    description: "C E Ferulic",
    image: Serum,
  },
  {
    name: "Juice Beauty",
    rating: 4.9,
    description: "Phyto-Pigments Flawless Serum",
    image: Foundie,
  },
  {
    name: "Juice Beauty",
    rating: 4.9,
    description: "Pure Pressed Blush",
    image: PinkBlush,
  },
  {
    name: "Val by Valerie Thomas",
    rating: 4.9,
    description: "Pure Pressed Blush",
    image: Blush,
  },
  {
    name: "Skinceuticals",
    rating: 4.9,
    description: "C E Ferulic",
    image: Serum,
  },
  {
    name: "Juice Beauty",
    rating: 4.9,
    description: "Phyto-Pigments Flawless Serum",
    image: Foundie,
  },
];

function Trending() {
  return (
    <section className={styles.section}>
      <h2 style={{ marginBottom: "-0.5rem" }}>Trending This Week</h2>
      <p style={{ color: "#a8a8a8", fontSize: "17px" }}>
        See our weekly most reviewed products
      </p>
      <div style={{ display: "flex" }}>
        {trendings.map((val, idx) => {
          return (
            <>
              <div className={styles.box} key={idx}>
                <div
                  style={{
                    padding: "1rem 0.5rem",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      marginBottom: "20px",
                    }}
                  >
                    <Image
                      src={val.image}
                      alt="product"
                      width={120}
                      height={150}
                      objectFit="contain"
                    />
                  </div>
                  <div className={styles.ratingWrapper}>
                    {val.rating}
                    <i className={`bi bi-star-fill ${styles.star}`} />
                    <i className={`bi bi-star-fill ${styles.star}`} />
                    <i className={`bi bi-star-fill ${styles.star}`} />
                    <i className={`bi bi-star-fill ${styles.star}`} />
                    <i className="bi bi-star" />
                    (7)
                  </div>
                  <p
                    style={{
                      textTransform: "uppercase",
                      fontWeight: "700",
                    }}
                  >
                    {val.name}
                  </p>
                  <p style={{ fontWeight: "500" }}>{val.description}</p>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </section>
  );
}

export default Trending;
