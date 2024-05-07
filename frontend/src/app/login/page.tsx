import Link from "next/link";

export default function Page() {
  return (
    <div className="signin-container">
      <div className="signin-header">
        <h1>SkillSync</h1>
      </div>
      <div className="signin-body">
        <div className="signin-form">
          <div>
            <input type="email" placeholder="Email" />
          </div>
          <div>
            <input type="password" placeholder="Password" />
          </div>
        </div>
        <div>
          <button type="button">Log in</button>
        </div>
      </div>
      <div className="signin-footer">
        <p>
          Not a member yet? <Link href="/signin">Register!</Link>
        </p>
      </div>
    </div>
  );
}
