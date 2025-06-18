import { Link } from "@remix-run/react"
import { url } from "~/utils/url";

export default function Page() {
  return (
    <div>
      <label>Cook Dog 選択メニュー</label>
      <div>
        <ul>
        {[
          {
            to: url("/cook"),
            label: "Cook Dog"
          },
          {
            to: url("/menu"),
            label: "Cooking Menu"
          },
        ].map(link => (
          <li key={link.to}>
            <Link to={link.to}>{link.label}</Link>
          </li>
        ))}
        </ul>
      </div>
    </div>
  )
}