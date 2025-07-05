import { Form } from "@remix-run/react";

interface AuthFormProps {
  id?: number;
  name?: string;
  image?: string;
  email: string;
  password: string;
}

export default function AuthForm({email, password}: AuthFormProps) {
  return (
    <Form method="post">
      <div className="my-4">ログイン</div>
      <div className="flex flex-col items-center gap-1.5" >
        <div className="grid grid-cols-2 gap-4 text-right">
          <label className="w-1/2">email :</label>
          <input className="rounded-md" type="email" name="email" />
        </div>
        <p className="text-red-500">{email ? ( <span>{email}</span> ) : null }</p>
        <div className="grid grid-cols-2 gap-4 text-right">
          <label className="w-1/2">password :</label>
          <input className="rounded-md" type="password" name="password" />
        </div>
        <p className="text-red-500">{password ? ( <span>{password}</span> ) : null }</p>
        <div className="w-1/2 border rounded-md text-center hover:bg-white cursor-pointer hover:text-black my-6">
          <button className="py-1.5" type="submit">ログイン</button>
        </div>
      </div>
    </Form>
  )
}