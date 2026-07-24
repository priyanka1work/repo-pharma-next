import Link from "next/link"


function SidebarItem({href, label}) {
  return (
   <Link href={href}>{label}</Link>
  )
}

export default SidebarItem
