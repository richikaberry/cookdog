import { ActionFunctionArgs, redirect } from "@remix-run/node"
import { useActionData } from "@remix-run/react";
import AuthForm from "~/components/authForm";

const getUserData = [
  {
    id: 1,
    name: "demo",
    image: "",
    email: "demo@example.com",
    password: "passworld"
  }
]

export const action = async ({ request }: ActionFunctionArgs) => {
  const formData: FormData = await request.formData();
  const formEmail = formData.get("email");
  const checkEmail: string | null = formEmail === null ? null : String(formEmail);
  const email = checkEmail === null ? null : encodeURI(checkEmail);
  const formPassword = formData.get("password");
  const checkPassword: string | null = formPassword === null ? null : String(formPassword);
  const password = checkPassword === null ? null : encodeURI(checkPassword);

  const user = email !== null && password !== null
    ? getUserData.find(user => user.email === email && user.password === password)
    : null;
  if (user === undefined) {
    return {
      errors: {
        email: "メールアドレスまたはパスワードが間違っています。",
        password: "メールアドレスまたはパスワードが間違っています。"
      }
    };
  } else {
    if (user !== null) {
      return redirect("/top/page");
    } else {
      return {
        errors: {
          email: "メールアドレスまたはパスワードが間違っています。",
          password: "メールアドレスまたはパスワードが間違っています。"
        }
      };
    }
  }
}

export default function Top() {
  const actionData = useActionData<typeof action>();
  return (
    <div className="flex flex-col items-center bg-gray-700" >
      <label>Cook Dogへようこそ</label>
      <AuthForm
        email={actionData?.errors?.email || ""}
        password={actionData?.errors?.password || ""}
      />
    </div>
  )
}