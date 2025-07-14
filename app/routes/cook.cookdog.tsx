// import { ActionFunctionArgs, redirect } from "@remix-run/node"
import { Form } from "@remix-run/react";
import { DynamicInput } from "~/components/dinamicInput"
import { Header } from "~/components/header";

// export const action = async ({ request }: ActionFunctionArgs) => {
//   const formData = await request.formData();
//   // input[0]〜無限大数的に増大するinput要素の取得
//   const formInputs = formData.getAll('input[]');
//   const inputs = String(formInputs);
//   if (typeof inputs !== "string") {
//     throw new Error("inputs be a string")
//   }
//   const errors: any = {};
//   if (inputs === "") {
//     errors.inputs = "入力は必須です";
//   }
//   if (Object.keys(errors).length > 0) {
//     return ({ errors });
//   }
//   return redirect(`/cook/seasoning?cookdog=${inputs}`);
// }

export default function CookDog() {
  return (
    <div className="bg-white">
      <Header />
      <div className="flex flex-col justify-center items-center gap-4">
        <label className="text-xl font-bold">Cook Dogへようこそ</label>
        <div>
          <Form method="get" action="/cook/seasoning">
            <DynamicInput
              title="Cook Dogに必要な材料を入力してください"
              namePrefix="input"
            />
            <button
              id="formButton"
              type="submit"
              className="bg-yellow-400 rounded p-2 mt-4 hover:cursol-pointer hover:bg-yellow-500 hover:text-white"
            >
              次へ
            </button>
          </Form>
        </div>
      </div>
    </div>
  )
}