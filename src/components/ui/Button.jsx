// function Button({children}) {
//   return (
//     <button>
// {children}
//     </button>
//   )
// }

// export default Button
import React from "react";

export default function Button({
  children,
  type = "button",
  onClick,
  disabled = false,
}) {
  return (
    <button type={type} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
