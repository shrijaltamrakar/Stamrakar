import React from "react"

export default function NotFound() {
  return (
    <div style={{ color: "white", textAlign: "center" }}>
      <h1>Page not Found...</h1>
      <p style={{ paddingTop: "15px" }}>
        Click{" "}
        <a href="/" style={{ border: "1px red solid", padding: "5px" }}>
          here
        </a>{" "}
        to be found!
      </p>
    </div>
  )
}
