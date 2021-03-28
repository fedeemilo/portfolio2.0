import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

interface NavBarProps {}

const NAV_ITEMS = ["Portfolio", "Skills", "History", "Resume"];

export const NavBar: React.FC<NavBarProps> = () => {

  const auxRouter = {
    asPath: "/#work"
  }

  const router = useRouter() || auxRouter;

  return (
    <div className="navbar">
      <ul className="navbar__brand">
        <li>
          <Link href="/">
            <a>fedemilo.</a>
          </Link>
        </li>
      </ul>
      {/* portfolio links */}
      <ul className="navbar__links">
        {NAV_ITEMS.map(navItem => (
          <li key={navItem}>
            <Link href={`#${navItem.toLowerCase()}`}>
              <a
                href=""
                className={`${
                  router.asPath === `/#${navItem.toLowerCase()}`
                    ? "navitem-selected"
                    : ""
                }`}
              >
                {navItem}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
