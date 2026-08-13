import React from "react";
import SidebarItem from "./SidebarItem";

function Sidebar() {
  const menuItems = [
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Patients",
      href: "/dashboard/patients",
    },
    
    {
      label: "Medicines",
      href: "/dashboard/medicines",
    },
    
   
  ];
  return (
    <nav className="flex gap-3">
      {menuItems.map((item) => (
        <SidebarItem key={item.href} href={item.href} label={item.label} />
      ))}
    </nav>
  );
}

export default Sidebar;
