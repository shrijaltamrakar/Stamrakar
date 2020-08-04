import React from "react"

export default function Home() {
  return (
    <div className="main-container" style={{ color: `White` }}>
      <div className="header-container">
        <h1>Hi! I'm Shrijal Tamrakar.</h1>
      </div>
      <p className="description">
        <strong>Software Engineer</strong> | Gamer | Football Enthusiast
      </p>
      <div className="links">
        <ul>
          <li>
            <a
              href="https://github.com/shrijaltamrakar"
              target="_blank"
              rel="noreferrer"
            >
              GITHUB
            </a>
          </li>
          <li>
            <a
              href="mailto:shrijaltamrakar@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              EMAIL
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/shrijaltamrakar/"
              target="_blank"
              rel="noreferrer"
            >
              LINKEDIN
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/shrijal.tamrakar/"
              target="_blank"
              rel="noreferrer"
            >
              INSTAGRAM
            </a>
          </li>
          <li>
            <a
              href="https://dev.to/shrijaltamrakar"
              target="_blank"
              rel="noreferrer"
            >
              BLOG
            </a>
          </li>
          {/* <li>
            <a href="#">RESUME</a>
          </li> */}
        </ul>
        {/* <p>Github</p>
        <p>Email</p>
        <p>Blog</p>
        <p>Instagram</p>
        <p>Facebook</p>
        <p>Resume</p> */}
      </div>
    </div>
  )
}
