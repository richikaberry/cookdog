import { Link } from "@remix-run/react"
import { url } from "~/utils/url";
import { Header } from "~/components/header";

const menuItems = [
  {
    to: url(`cook/cookdog`),
    label: "Cook Dog"
  },
  {
    to: url(`cook/menu`),
    label: "Cooking Menu"
  },
];

export default function Page() {
  return (
    <div>
      <Header />
      <label>Cook Dog 選択メニュー</label>
      <div>
        <ul>
        {
          menuItems.map(link => (
            <li key={link.to}>
              <Link to={link.to}>{link.label}</Link>
            </li>
          ))
        }
        </ul>
      </div>
    </div>
  )
}