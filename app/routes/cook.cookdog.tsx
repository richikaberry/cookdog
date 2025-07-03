import { ActionFunctionArgs, redirect } from "@remix-run/node"
import { Form } from "@remix-run/react";
import { DynamicInput } from "~/components/dinamicInput"

export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  // input[0]〜無限大数的に増大するinput要素の取得
  const formInputs = formData.getAll('input[]');
  const inputs = String(formInputs);
  if (typeof inputs !== "string") {
    throw new Error("inputs be a string")
  }
  const errors: any = {};
  if (inputs === "") {
    errors.inputs = "入力は必須です";
  }
  if (Object.keys(errors).length > 0) {
    return ({ errors });
  }
  return redirect(`/cook/seasoning?cookdog=${inputs}`);
}

export default function CookDog() {
  return (
    <div>
      <label>Cook Dogへようこそ</label>
      <div>
        <label>最初は食材を入力してください</label>
        <Form method="get" >
          <DynamicInput />
          <button id="formButton" type="submit" >次へ</button>
        </Form>
      </div>
    </div>
  )
}