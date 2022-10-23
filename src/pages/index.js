import Head from "next/head";
import Image from "next/image";
import styles from "src/commons/styles/Home.module.css";
import Layout from "src/commons/components/Layout";
import Header from "src/commons/components/Header";
import Girl from "public/girl.png";
import Samantha from "public/samantha.png";
import Foundie from "public/foundie.png";
import Blush from "public/blush.png";
import Serum from "public/serum.png";

const Data = [
  {
    editor: "annedean",
    role: "Associate Editor",
    product: {
      name: "Y.O.U Makeups",
      rating: 4.1,
      description: "Rouge Velvet Matte Lip Cream",
      image:
        "https://static.femaledaily.com/dyn/640/images/prod-pics/product_1558000129_YOU_MAKEUP_800x800.png",
    },
  },
  {
    editor: "annedean",
    role: "Associate Editor",
    product: {
      name: "Y.O.U Makeups",
      rating: 4.1,
      description: "Rouge Velvet Matte Lip Cream",
      image:
        "https://static.femaledaily.com/dyn/640/images/prod-pics/product_1558000129_YOU_MAKEUP_800x800.png",
    },
  },
  {
    editor: "annedean",
    role: "Associate Editor",
    product: {
      name: "Y.O.U Makeups",
      rating: 4.1,
      description: "Rouge Velvet Matte Lip Cream",
      image:
        "https://static.femaledaily.com/dyn/640/images/prod-pics/product_1558000129_YOU_MAKEUP_800x800.png",
    },
  },
  {
    editor: "annedean",
    role: "Associate Editor",
    product: {
      name: "Y.O.U Makeups",
      rating: 4.1,
      description: "Rouge Velvet Matte Lip Cream",
      image:
        "https://static.femaledaily.com/dyn/640/images/prod-pics/product_1558000129_YOU_MAKEUP_800x800.png",
    },
  },
  {
    editor: "annedean",
    role: "Associate Editor",
    product: {
      name: "Y.O.U Makeups",
      rating: 4.1,
      description: "Rouge Velvet Matte Lip Cream",
      image:
        "https://static.femaledaily.com/dyn/640/images/prod-pics/product_1558000129_YOU_MAKEUP_800x800.png",
    },
  },
];

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

export default function Home() {
  return (
    <>
      <Layout title="Female Daily Network" />
      <div className={styles.container}>
        <Header />

        <main className={styles.main}>
          <div className={styles.wrapper}>
            <div className={styles.topFrame}>
              <p className={styles.bannerText}>TOP FRAME 970x50</p>
            </div>
            <div className={styles.billboard}>
              <p className={styles.bannerText}>BILLBOARD 970x250</p>
            </div>
          </div>

          {/* Editor's Choice */}
          <section className={styles.section}>
            <h2 style={{ marginBottom: "-0.5rem" }}>Editor&apos;s Choice</h2>
            <p style={{ color: "#a8a8a8", fontSize: "17px" }}>
              Curated with love
            </p>
            <div className={styles.wrapperChoice}>
              {Data.map((val, idx) => {
                return (
                  <>
                    <div className={styles.box}>
                      <div className={styles.editors}>
                        <div>
                          <Image
                            src={Samantha}
                            alt="editor"
                            width={60}
                            height={60}
                            objectFit="cover"
                            style={{
                              borderRadius: "50%",
                            }}
                          />
                        </div>
                        <div style={{ marginTop: "-0.7rem" }}>
                          <p className={styles.editorName}>{val.editor}</p>
                          <p className={styles.editorRole}>{val.role}</p>
                        </div>
                      </div>
                      <div className={styles.boxContainer}>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            marginBottom: "20px",
                          }}
                        >
                          <Image
                            src={val.product.image}
                            alt="product"
                            width={120}
                            height={150}
                            objectFit="cover"
                          />
                        </div>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            marginBottom: "10px",
                          }}
                        >
                          {val.product.rating}
                          <i
                            class="bi bi-star-fill"
                            style={{ color: "#db284e" }}
                          ></i>
                          <i
                            class="bi bi-star-fill"
                            style={{ color: "#db284e" }}
                          ></i>
                          <i
                            class="bi bi-star-fill"
                            style={{ color: "#db284e" }}
                          ></i>
                          <i
                            class="bi bi-star-fill"
                            style={{ color: "#db284e" }}
                          ></i>
                          <i class="bi bi-star"></i>
                          (7)
                        </div>
                        <div>{val.product.name}</div>
                        <div>{val.product.description}</div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </section>
        </main>

        <section
          style={{
            backgroundColor: "#ffdbdb",
            margin: "4rem 0",
            display: "flex",
          }}
        >
          <div
          // style={{ backgroundColor: "cyan" }}
          >
            <Image
              src={Girl}
              alt="girl"
              style={{ marginLeft: "-3rem" }}
              height={400}
              width={380}
            />
          </div>
          <div
            style={{
              // backgroundColor: "coral",
              // flexGrow: 2,
              marginLeft: "-7rem",
              // border: "1px solid black",
              width: "27%",
              padding: "3rem 1.5rem",
            }}
          >
            {/* <div style={{wordWrap: 'break-word'}}> */}
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
              <button
                style={{
                  padding: "1rem 1.7rem",
                  borderRadius: "6px",
                  border: "0",
                  backgroundColor: "#db284e",
                  color: "#fff",
                }}
              >
                See My Matches
              </button>
            </div>
            {/* </div> */}
          </div>
          {/* <div
            style={{
              backgroundColor: "cornsilk",
              width: "15%",
              padding: "0 0.5rem",
            }}
          > */}
          {productMatch.map((val, idx) => {
            return (
              <>
                <div
                  style={{
                    // backgroundColor: "cornsilk",
                    width: "15%",
                    padding: "0 0.5rem",
                  }}
                >
                  <div
                    // className={styles.boxContainer}
                    style={{
                      // border: "1px solid gray",
                      padding: "2rem 1rem",
                      margin: "1rem 0",
                      height: "92%",
                      borderRadius: "10px",
                      backgroundColor: "#fff",
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
                        objectFit="cover"
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
                      {/* Rating */}
                      <i
                        class="bi bi-star-fill"
                        style={{ color: "#db284e" }}
                      ></i>
                      <i
                        class="bi bi-star-fill"
                        style={{ color: "#db284e" }}
                      ></i>
                      <i
                        class="bi bi-star-fill"
                        style={{ color: "#db284e" }}
                      ></i>
                      <i
                        class="bi bi-star-fill"
                        style={{ color: "#db284e" }}
                      ></i>
                      <i class="bi bi-star"></i>
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

        <main className={styles.main}>
          <div className={styles.wrapper}>
            <div className={styles.billboard}>
              <p className={styles.bannerText}>
                HORIZONTAL 970x250 <br />
                (Internal campaign only)
              </p>
            </div>
          </div>

          {/* Latest Article */}
          <section className={styles.section}>
            <h2 style={{ marginBottom: "-0.5rem" }}>Latest Article</h2>
            <p style={{ color: "#a8a8a8", fontSize: "17px" }}>
              So you can make better purchase decision
            </p>
          </section>

          <div className={styles.wrapper}>
            <div className={styles.topFrame}>
              <p className={styles.bannerText}>
                Bottom Frame 970x250, 468x60, 320x50
              </p>
            </div>
          </div>
        </main>

        {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>  */}
      </div>
    </>
  );
}
