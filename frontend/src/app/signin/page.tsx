import Link from "next/link";

export default function Page() {
  return (
    <div>
      <div className="signin-container">
        <div className="signin-header">
          <h1>SkillSync</h1>
        </div>
        <div className="signin-body">
          <h2>Sign in form</h2>
          <div className="signin-form">
            <input type="email" placeholder="Email address" />
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
        <div className="signin-footer">
          <p>
            Already have an account? <Link href="/login">Log in!</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
