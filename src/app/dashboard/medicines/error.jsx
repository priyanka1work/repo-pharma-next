"use client"

import Button from "@/components/ui/Button"

function Error({error,reset}) {
  return (
    <div>
      <h1>Something went wrong</h1>

<p>
    We couldn't load the medicines.<b> ERROR!</b>
</p>
<Button onClick={()=>reset()}>
  Try Again
</Button>
    </div>
  )
}

export default Error
