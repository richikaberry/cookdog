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
      <div>
        <label>ログイン</label>
        <div>
          email :
          <input type="email" name="email" defaultValue={email} />
          <p>{email ? ( <span>{email}</span> ) : null }</p>
        </div>
        <div>
          password :
          <input type="password" name="password" defaultValue={password} />
          <p>{password ? ( <span>{password}</span> ) : null }</p>
        </div>
        <div>
          <button type="submit">ログイン</button>
        </div>
      </div>
    </Form>
  )
}