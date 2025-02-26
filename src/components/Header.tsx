import React from "react";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="navbar bg-base-300 shadow-md px-4 py-2">
      <div className="flex-1">
        <Link className="btn btn-ghost normal-case text-xl" href="/">Home</Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal p-0">
          <li>
            <Link className="px-4 py-2 hover:text-primary" href="/blog">Blog</Link>
          </li>
          <li>
            <Link className="px-4 py-2 hover:text-primary" href="/projects">Projects</Link>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header;