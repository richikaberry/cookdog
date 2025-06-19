export const arrayCookMenuList = [
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
]

export default function Menu() {
  return (
    <div>
      <label>メニューを以下からお選びください</label>
      <div>
        <label>メニュー</label>
        <div>
          <ul>
            {arrayCookMenuList.map(item => (
              <div>
              <li key={item.id} >
                <img src={item.image} alt={item.name} />
                <h3>{item.name}</h3>
                <p>{item.description}</p>
              </li>
              <div>
                <h4>レシピ</h4>
                <p>調理時間: {item.recipe.cookingTime}</p>
                <p>分量: {item.recipe.servingSize}</p>
                <h5>材料:</h5>
                <ul>
                  {item.recipe.ingredients.map((ingredient, index) => (
                    <li key={index} >{ingredient}</li>
                  ))}
                </ul>
                <h5>手順:</h5>
                <ol>
                  {item.recipe.steps.map((step, index) => (
                    <li key={index} >{step}</li>
                  ))}
                </ol>
              </div>
            </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}