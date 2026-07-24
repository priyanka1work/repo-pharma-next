import Link from "next/link"
import Button from "../ui/Button"


function Navbar() {
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
      <li>
        <Link href="/login">
        <Button>Login</Button>
        </Link>
       
      </li>
    </ul>
  </nav>
  )
}

export default Navbar
