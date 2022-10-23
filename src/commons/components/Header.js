import Image from "next/image";
import React from "react";
import styles from "src/commons/styles/Header.module.css";
import logo from "public/logo.svg";
import Link from "next/link";

function Header() {
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.navTop}>
          <div style={{ padding: "0 1rem" }}>
            <i
              class="bi bi-list"
              style={{ fontSize: "2rem", color: "#393939" }}
            />
          </div>
          <div style={{ padding: "0 1rem" }}>
            <Image src={logo} alt="logo" width={120} height={35} />
          </div>
          <div style={{ flexGrow: "3" }}>
            <i
              className="bi bi-search"
              style={{ position: "absolute", padding: "10px 1rem" }}
            />
            <input
              type="text"
              placeholder="Search products, articles, topics, brands, etc"
              name="search"
              className={styles.searchInput}
              // onChange={this.debounce(this.onSearch, 1000)}
              // onKeyPress={(e) => e.key === "Enter" && this.onSearch}
              // autoComplete="off"
            />
          </div>
          <div style={{ padding: "0 0 0 1rem" }}>
            <button className={styles.btnLogin}>
              <i
                class="bi bi-person-circle"
                style={{ fontSize: "1.3rem", color: "#fff" }}
              />
              <p className={styles.loginText}>login / signup</p>
            </button>
          </div>
        </div>
        <div className={styles.navBottom}>
          <Link href={"#"}>
            <p>SKINCARE</p>
          </Link>
          <Link href={"#"}>
            <p>MAKE UP</p>
          </Link>
          <Link href={"#"}>
            <p>BODY</p>
          </Link>
          <Link href={"#"}>
            <p>HAIR</p>
          </Link>
          <Link href={"#"}>
            <p>FRAGRANCE</p>
          </Link>
          <Link href={"#"}>
            <p>NAILS</p>
          </Link>
          <Link href={"#"}>
            <p>TOOLS</p>
          </Link>
          <Link href={"#"}>
            <p>BRANDS</p>
          </Link>
          
        </div>
      </nav>
    </>
  );
}

export default Header;
