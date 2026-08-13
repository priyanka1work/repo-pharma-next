import Link from "next/link";
import Button from "../ui/Button";
import { isAuthenticated } from "@/lib/auth";

function Navbar() {
  {
    isAuthenticated ?? "medicines";
  }
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Homepage</Link>
        </li>
        {/* <li>
        <Link href="/dashboard">Dashboard</Link>
      </li> */}
        <li>
          <Link href="/about">About</Link>
        </li>
        {!isAuthenticated ? (
          <li>
            <Link href="/login">
              <Button>Login</Button>
            </Link>
          </li>
        ) : (
          <li>
            <Link href="/dashboard
            ">
              <Button>User</Button>
            </Link>
          </li>
        )}{" "}
        
      </ul>
    </nav>
  );
}

export default Navbar;
