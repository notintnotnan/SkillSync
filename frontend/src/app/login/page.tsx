import Link from "next/link";

export default function Page() {
  return (
    <div className="auth-container">
      <div className="auth-header">
        <h1>SkillSync</h1>
      </div>
      <div className="auth-body">
        <div className="auth-form">
          <input type="text" placeholder="Username" />
          <div>
            <input type="password" placeholder="Password" />
            <input type="checkbox" />
          </div>
        </div>
        <div>
          <button type="button">Log in</button>
        </div>
      </div>
      <div className="auth-footer">
        <p>
          Forgot your password? <Link href="/password">Password recovery</Link>
        </p>
        <p>
          Not a member yet? <Link href="/signin">Register!</Link>
        </p>
      </div>
    </div>
  );
}
