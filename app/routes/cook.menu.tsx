import { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { Header } from "~/components/header"

interface cookMenuList {
  id: number;
  name: string;
  image: string;
  description: string;
  recipe: {
    ingredients: string[]
    steps: string[]
    cookingTime: string;
    servingSize: string;
  },
}

export const arrayCookMenuList: cookMenuList[] = [
  {
    id: 1,
    name: "オムライス",
    image: "https://www.kewpie.co.jp/recipes/basictamago/tamago12/imgs/top.jpg",
    description: "ふわふわの卵とケチャップライスの組み合わせが絶品です。",
    recipe: {
      ingredients: [
        "ご飯",
        "卵",
        "ケチャップ",
        "玉ねぎ",
        "鶏肉",
        "塩",
        "胡椒",
      ],
      steps: [
        "玉ねぎと鶏肉を炒める。",
        "ご飯を加えて炒め、ケチャップで味付けする。",
        "卵を溶いてフライパンで焼き、オムライスの形にする。",
        "ご飯を包んで完成。",
      ],
      cookingTime: "30分",
      servingSize: "2人分",
    }
  },
  {
    id: 2,
    name: "カレーライス",
    image: "https://cdn.sbfoods.co.jp/recipes/10430_l.jpg",
    description: "スパイシーなカレーとご飯の相性が抜群です。",
    recipe: {
      ingredients: [
        "ご飯",
        "カレールウ",
        "玉ねぎ",
        "人参",
        "じゃがいも",
        "肉",
        "水",
      ],
      steps: [
        "野菜と肉を炒める。",
        "水を加えて煮込み、カレールウを入れる。",
        "ご飯にかけて完成。",
      ],
      cookingTime: "40分",
      servingSize: "2人分",
    }
  },
  {
    id: 3,
    name: "ハンバーグ",
    image: "https://www.sirogohan.com/_files/recipe/images/hanba-gu/hanba-gu6321.JPG",
    description: "ジューシーなハンバーグに特製ソースをかけて。",
    recipe: {
      ingredients: [
        "合挽き肉",
        "玉ねぎ",
        "パン粉",
        "卵",
        "塩",
        "胡椒",
        "ケチャップ",
        "ウスターソース",
      ],
      steps: [
        "玉ねぎをみじん切りにし、炒めて冷ます。",
        "ボウルに合挽き肉、玉ねぎ、パン粉、卵を入れて混ぜる。",
        "塩、胡椒で味付けし、形を整える。",
        "フライパンで焼き、ソースをかけて完成。",
      ],
      cookingTime: "30分",
      servingSize: "2人分",
    }
  },
];

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const { searchParams } = new URL(request.url);
  const searchId = searchParams.get("id");
  const id = Number(searchId);
  return id;
}

export default function Menu() {
  const id = useLoaderData<typeof loader>();
  return (
    <div className="text-center bg-gray-700">
      <Header />
      <div className="p-10">以下のメニューからお選びください</div>
      <div className="flex flex-col items-center bg-white text-black">
      {arrayCookMenuList.map(item => (
        item.id === id ?
          <div className="my-10">
            <div className="p-2.5"><label className="text-xl font-semibold">CookDog Menu<span className="mx-1.5">{item.id}</span></label></div>
            <ul className="max-w-lg">
              <h2 className="text-2xl text-blue-400 font-bold shadow-md p-2">{item.name}</h2>
              <div className="p-4">
                <li key={item.id} className="flex flex-col gap-2.5" >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full object-cover"
                  />
                  <p>{item.description}</p>
                </li>
                <div className="flex flex-col gap-3.5 mt-4">
                  <h3 className="text-lg font-bold">レシピ</h3>
                  <p>調理時間: {item.recipe.cookingTime}</p>
                  <p>分量: {item.recipe.servingSize}</p>
                  <h5>材料</h5>
                  <ul className="grid grid-cols-3 gap-1.5 shadow-2xl">
                    {item.recipe.ingredients.map((ingredient, index) => (
                      <li key={index} className="p-2" >{ingredient}</li>
                    ))}
                  </ul>
                  <h4 className="text-xl font-bold">手順:</h4>
                  <ol className="flex flex-col gap-2.5 text-left">
                    {item.recipe.steps.map((step, index) => (
                      <li key={index} ><span className="w-full text-blue-700 text-sm bg-blue-200 rounded-full border border-blue-700 px-2 py-1 mr-2">{index + 1}</span>{step}</li>
                    ))}
                  </ol>
                </div>
              </div>
            </ul>
          </div>
        :
          <></>
      ))}
      </div>
    </div>
  )
}