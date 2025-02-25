import React from "react";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="navbar bg-base-300 shadow-md px-4 py-2">
      <div className="flex-1">
        <Link className="btn btn-ghost normal-case text-xl" href="/">Home</Link>
      </div>

    </header>
  )
}

export default Header;