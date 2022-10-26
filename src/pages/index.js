import Image from "next/image";
import styles from "src/commons/styles/Home.module.css";
import Layout from "src/commons/components/global/Layout";
import Header from "src/commons/components/global/Header";
import Samantha from "src/assets/images/samantha.png";
import Vid1 from "src/assets/images/vid1.png";
import Vid2 from "src/assets/images/vid2.png";
import Vid3 from "src/assets/images/vid3.png";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllData } from "src/redux/slice/fdnSlice";
import Footer from "src/commons/components/global/Footer";
import ProductMatches from "src/commons/components/molecules/ProductMatches";
import PopularGroups from "src/commons/components/molecules/PopularGroups";
import TopBrands from "src/commons/components/molecules/TopBrands";
import Trending from "src/commons/components/molecules/Trending";

export default function Home() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.FDN.data);
  const editor_choice = data["editor's choice"];
  const articles = data["latest articles"];
  const reviews = data["latest review"];
  console.log("DATA EDITOR: ", reviews);

  useEffect(() => {
    dispatch(getAllData());
  }, []);

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
              {editor_choice?.map((val, idx) => {
                return (
                  <>
                    <div className={styles.box} key={idx}>
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
                            layout="fixed"
                          />
                        </div>
                        <div style={{ marginTop: "-0.7rem" }}>
                          <p className={styles.editorName}>{val.editor}</p>
                          <p className={styles.editorRole}>{val.role}</p>
                        </div>
                      </div>
                      <div className={styles.boxContainer}>
                        <div className={styles.imgEditorWrapper}>
                          <Image
                            src={val.product.image}
                            alt="product"
                            width={120}
                            height={150}
                            objectFit="cover"
                            layout="fixed"
                          />
                        </div>
                        <div className={styles.ratingWrapper}>
                          {val.product.rating}
                          <i className={`bi bi-star-fill ${styles.star}`} />
                          <i className={`bi bi-star-fill ${styles.star}`} />
                          <i className={`bi bi-star-fill ${styles.star}`} />
                          <i className={`bi bi-star-fill ${styles.star}`} />
                          <i className="bi bi-star" />
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

        {/* Matches Product */}
        <ProductMatches />

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
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p style={{ color: "#a8a8a8", fontSize: "17px" }}>
                So you can make better purchase decision
              </p>
              <p className={styles.seeMore}>See more &gt; </p>
            </div>

            <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
              {articles?.map((val, idx) => {
                return (
                  <>
                    <div key={idx} style={{ width: "32%" }}>
                      <Image
                        src={val.image}
                        alt="article"
                        width={600}
                        height={350}
                        objectFit="cover"
                        style={{ borderRadius: "12px" }}
                      />
                      <h3 style={{ margin: "10px 0 0 0" }}>{val.title}</h3>
                      <div style={{ display: "flex" }}>
                        <p
                          style={{
                            textTransform: "capitalize",
                            fontWeight: "500",
                          }}
                        >
                          <span style={{ color: "#393939" }}>{val.author}</span>{" "}
                          |
                          <span style={{ color: "#7c7c7c" }}>
                            {" "}
                            {val.published_at}
                          </span>
                        </p>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </section>

          {/* Latest Review */}
          <section className={styles.section}>
            <h2>Latest Reviews</h2>
            <div style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
              <div
                style={{
                  flexGrow: 2,
                  width: "10vw",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "-1rem",
                  }}
                >
                  <p style={{ color: "#a8a8a8", fontSize: "17px" }}>
                    So you can make better purchase decision
                  </p>
                  <p className={styles.seeMore}>See more &gt; </p>
                </div>
                <div style={{ display: "flex", gap: "20px" }}>
                  {reviews?.slice(0, 2).map((val, idx) => {
                    return (
                      <>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            position: "relative",
                          }}
                          key={idx}
                        >
                          <div className={styles.boxReviews}>
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "column",
                              }}
                            >
                              <div className={styles.reviewer}>
                                <div style={{ padding: "1rem 0" }}>
                                  <Image
                                    src={val.product.image}
                                    alt="editor"
                                    width={70}
                                    height={80}
                                    objectFit="contain"
                                    layout="fixed"
                                  />
                                </div>
                                <div
                                  style={{
                                    marginTop: "-0.7rem",
                                    padding: "1rem 0",
                                  }}
                                >
                                  <p className={styles["product-name"]}>
                                    {val.product.name}
                                  </p>
                                  <p
                                    style={{
                                      fontFamily: "Poppins",
                                      fontWeight: "500",
                                    }}
                                  >
                                    {val.product.desc}
                                  </p>
                                </div>
                              </div>

                              <div className={styles.rate}>
                                <div>
                                  <i
                                    className={`bi bi-star-fill ${styles.star}`}
                                  />
                                  <i
                                    className={`bi bi-star-fill ${styles.star}`}
                                  />
                                  <i
                                    className={`bi bi-star-fill ${styles.star}`}
                                  />
                                  <i className="bi bi-star" />
                                  <i className="bi bi-star" />
                                </div>
                                <div
                                  style={{ color: "gray", fontSize: "14px" }}
                                >
                                  2 hours ago
                                </div>
                              </div>
                              <p
                                style={{ padding: "0 1rem", fontSize: "14px" }}
                              >
                                {val.comment} ....{" "}
                                <span
                                  style={{
                                    color: "#db284e",
                                    fontWeight: "600",
                                  }}
                                >
                                  Read More
                                </span>
                              </p>
                            </div>
                          </div>
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "center",
                            }}
                          >
                            <div
                              style={{ position: "absolute", bottom: "2.8rem" }}
                            >
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
                            <div
                              style={{
                                marginTop: "0.5rem",
                                textAlign: "center",
                                textTransform: "capitalize",
                              }}
                            >
                              <p style={{ fontWeight: "500" }}>{val.user}</p>
                              <p
                                style={{
                                  marginTop: "-1rem",
                                  fontSize: "12px",
                                  color: "gray",
                                }}
                              >
                                {val.profile?.map((x) => {
                                  return x + ", ";
                                })}
                              </p>
                            </div>
                          </div>
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>

              <div
                style={{
                  backgroundColor: "lawngreen",
                  alignSelf: "center",
                  marginTop: "-2rem",
                }}
              >
                <div
                  style={{
                    alignItems: "center",
                    display: "flex",
                    justifyContent: "center",
                    width: "300px",
                    height: "250px",
                    border: "1px solid #7c7c7c",
                    backgroundColor: "#d8d8d8",
                  }}
                >
                  <p className={styles.bannerText}>
                    MR 2 <br />
                    300x250
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Popular Groups */}
          <PopularGroups />

          {/* Latest Videos */}
          <section className={styles.section}>
            <h2 style={{ marginBottom: "-0.5rem" }}>Latest Videos</h2>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p style={{ color: "#a8a8a8", fontSize: "17px" }}>
                Watch and learn, ladies
              </p>
              <p className={styles.seeMore}>See more &gt; </p>
            </div>

            <div style={{ display: "flex", gap: "30px", height: "400px" }}>
              <div style={{ flexGrow: "2" }}>
                <Image
                  src={Vid1}
                  alt="videos"
                  objectFit="contain"
                  width={700}
                  height={400}
                />
              </div>
              <div className={styles.videoContainer}>
                <Image
                  src={Vid2}
                  alt="videos"
                  objectFit="contain"
                  width={400}
                  height={500}
                />
                <Image
                  src={Vid3}
                  alt="videos"
                  objectFit="contain"
                  width={400}
                  height={500}
                />
              </div>
            </div>
          </section>

          {/* Trending */}
          <Trending />

          {/* Top Brands */}
          <TopBrands />
        </main>

        <hr />
        <Footer />

        <div className={styles.main}>
          <div className={styles.wrapper}>
            <div className={styles.topFrame}>
              <p className={styles.bannerText}>
                Bottom Frame 970x250, 468x60, 320x50
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
