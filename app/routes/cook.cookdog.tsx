import { ActionFunctionArgs } from "@remix-run/node"
import { DynamicInput } from "~/components/dinamicInput"

export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  // input[0]〜無限大数的に増大するinput要素の取得
  
}

export default function CookDog() {
  return (
    <div>
      <label>Cook Dogへようこそ</label>
      <div>
        <label>最初は食材を入力してください</label>
        <form method="get" >
          <DynamicInput />
          <button id="formButton" type="submit" >次へ</button>
        </form>
      </div>
    </div>
  )
}