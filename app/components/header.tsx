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
    <header className="bg-gray-700 border-y-2 text-center">
      <div className="grid grid-cols-2">
        <div>
          <a href='/top/page' >Cook Dog</a>
        </div>
        <nav className="w-1/2">
          <ul className="flex gap-10">
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
      </div>
    </header>
  )
}
