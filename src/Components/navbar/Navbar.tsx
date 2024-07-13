"use client";
import Link from "next/link";
import styles from "./Navbar.module.scss";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const path = usePathname();
  console.log("Path::", path);
  return (
    <nav className={styles.container}>
      <ul className={styles.navbar}>
        <li>
          <Link className={styles.links} href="/home">
            Home
          </Link>
        </li>
        <li>
          <Link className={styles.links} href={"/characters"}>
            Characters
          </Link>
        </li>
        <li>
          <Link className={styles.links} href={"/staticpage"}>
            Static Page
          </Link>
        </li>
        <li>
          <Link className={styles.links} href={"/ISR"}>
            ISR Page
          </Link>
        </li>
        <li>
          <Link className={styles.links} href={"/dynamic"}>
            Dynamic Page
          </Link>
        </li>
        <li>
          <Link className={styles.links} href={"/fanPage/1"}>
            ID-1
          </Link>
        </li>
        <li>
          <Link className={styles.links} href={"/fanPage/2"}>
            ID-2
          </Link>
        </li>
        <li>
          <Link className={styles.links} href={"/fanPage/3"}>
            ID-3
          </Link>
        </li>
        <li>
          <Link className={styles.links} href={"/profile"}>
            User Profile
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
