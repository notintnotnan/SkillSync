import Link from "next/link";

export default function Page() {
  return (
    <div>
      <div className="auth-container">
        <div className="auth-header">
          <h1>SkillSync</h1>
        </div>
        <div className="auth-body">
          <h2>Sign in form</h2>
          <div className="auth-form">
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email" />
            <input type="email" placeholder="Confirm email" />
            <div>
              <input type="password" placeholder="Password" />
              <input type="checkbox" />
            </div>
            <div>
              <input type="password" placeholder="Confirm password" />
              <input type="checkbox" />
            </div>
          </div>
          <div>
            <button type="button">Register</button>
          </div>
        </div>
        <div className="auth-footer">
          <p>
            Already have an account? <Link href="/login">Log in!</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
