import { Link } from "@remix-run/react";
import { useState } from "react";
import { Header } from "~/components/header"
import { PrimaryButton } from "~/components/button/primaryButton";

interface cookDogMenuList {
  id: number;
  name: string;
}

const arrayCookDogMenuList: cookDogMenuList[] = [
  {
    id: 1,
    name: "オムライス",
  },
  {
    id: 2,
    name: "カレーライス",
  },
  {
    id: 3,
    name: "ハンバーグ",
  },
  {
    id: 4,
    name: "肉じゃが",
  },
  {
    id: 5,
    name: "カツ丼"
  },
  {
    id: 6,
    name: "麻婆豆腐",
  },
  {
    id: 7,
    name: "お好み焼き"
  }
]

export default function List() {
  const [ limitList, setLimitList ] = useState(5);
  const [ hidden, setHidden ] = useState(false)
  return (
    <div>
      <Header />
      <div className="flex flex-col items-center mt-8" >
        <label className="text-xl">CookDogで紹介出来るメニューリスト</label>
        <div className="flex flex-col gap-2.5 mt-8 text-center">
          {
            arrayCookDogMenuList.map((item => (
              <Link
                className="text-lg hover:text-blue-400 hover:border hover:border-blue-400 hover:rounded-xl hover:p-1"
                to={`/cook/menu?id=${item.id}`}
              >{item.name}</Link>
            ))).slice(0, limitList)
          }
        </div>
        <PrimaryButton
          type="button"
          hidden={hidden}
          onClick={() => {
            setLimitList(arrayCookDogMenuList.length);
            setHidden(true);
          }}
        >
          更に表示する
        </PrimaryButton>
      </div>
    </div>
  )
}