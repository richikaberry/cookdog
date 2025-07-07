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
    <div className="flex flex-col gap-2.5 text-center">
      <Header />
      <label className="font-bold">Cook Dog 選択メニュー</label>
      <div className="flex justify-center">
        <ul className="grid grid-cols-2 gap-10 w-fit text-center">
        {
          menuItems.map(link => (
            <li className="border rounded-xl border-blue-300 p-1 hover:bg-white hover:text-black" key={link.to}>
              <Link to={link.to}>{link.label}</Link>
            </li>
          ))
        }
        </ul>
      </div>
    </div>
  )
}