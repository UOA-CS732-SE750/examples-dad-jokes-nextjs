"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "./NavBar.module.css";

export default function ActiveLink({ href, children, ...props }) {
  const pathname = usePathname();
  const isActive = pathname === href ? styles.active : null;

  return (
    <Link href={href} className={isActive} {...props}>
      {children}
    </Link>
  );
}
