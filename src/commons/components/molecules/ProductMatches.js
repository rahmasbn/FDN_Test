import Girl from "src/assets/images/girl.png";
import Foundie from "src/assets/images/foundie.png";
import Blush from "src/assets/images/blush.png";
import Serum from "src/assets/images/serum.png";
import Image from "next/image";
import styles from "src/commons/styles/Molecules.module.css";

const productMatch = [
  {
    name: "VAL BY VALERIE THOMAS",
    rating: 4.9,
    description: "Pure Pressed Blush",
    image: Blush,
  },
  {
    name: "VAL BY VALERIE THOMAS",
    rating: 4.9,
    description: "Phito Pigment Liquid Serum Foundation",
    image: Foundie,
  },
  {
    name: "VAL BY VALERIE THOMAS",
    rating: 4.9,
    description: "Pure Pressed Blush",
    image: Serum,
  },
];

function ProductMatches() {
  return (
    <section className={styles.matchesContainer}>
      <div style={{ marginLeft: "-3rem" }}>
        <Image src={Girl} alt="girl" height={400} width={380} layout="fixed" />
      </div>
      <div className={styles.textMatches}>
        <h1>Looking for product that are just simply perfect for you?</h1>
        <p>
          Here are some products theat we believe match your skin, hair, and
          body! Have we mentioned that they solve your concerns too?{" "}
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <button className={styles.btnMatches}>See My Matches</button>
        </div>
      </div>
      {productMatch.map((val, idx) => {
        return (
          <>
            <div
              style={{
                width: "15%",
                padding: "0 0.5rem",
              }}
              key={idx}
            >
              <div className={styles.boxContainer}>
                <div className={styles.imgMatchesWrapper}>
                  <Image
                    src={val.image}
                    alt="product"
                    width={120}
                    height={150}
                    objectFit="cover"
                    layout="fixed"
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    marginBottom: "10px",
                  }}
                >
                  {val.rating}
                  <i className={`bi bi-star-fill ${styles.star}`} />
                  <i className={`bi bi-star-fill ${styles.star}`} />
                  <i className={`bi bi-star-fill ${styles.star}`} />
                  <i className={`bi bi-star-fill ${styles.star}`} />
                  <i className={`bi bi-star`} />
                  (7)
                </div>
                <div>{val.name}</div>
                <div>{val.description}</div>
              </div>
            </div>
          </>
        );
      })}
    </section>
  );
}

export default ProductMatches;
