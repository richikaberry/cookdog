import React from "react";
import { Link, useMatches } from "@remix-run/react";
import { url } from "~/utils/url";

const menuHeaders = [
  {
    to: url(`mypage`),
    label: "マイページ"
  },
  {
    to: url(`top`),
    label: "ログアウト"
  },
];

export function Header() {
  const matches = useMatches();

  return (
    <header>
      <div>
        <a href='/top/page' >Cook Dog</a>
      </div>
      <nav>
        <ul>
          {menuHeaders.map(({ to, label }) => {
            if (matches[1].pathname !== to) {
              return (
                <React.Fragment key={label}>
                  <Link to={to}>{label}</Link>
                </React.Fragment>
              )
            }
          })}
        </ul>
      </nav>
    </header>
  )
}
