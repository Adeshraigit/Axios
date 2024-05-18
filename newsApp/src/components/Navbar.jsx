import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
    const categories = [
        { id:1, name: "Top Headlines", path: "/"},
        { id:2, name: "Bussiness", path: "/Bussiness" },
        { id:3, name: "Entertainment", path: "/Entertainment" },
        { id:4, name: "Sports", path: "/Sports" },
    ]
  return (
    <div>
        <div>
            {categories.map((category) =>  (
                <NavLink
                 key={category.id}
                 to={category.path}
                 className={`text-white m-10 p-4 text-2xl`}
                >
                    <button>
                        {category.name}
                    </button>
                </NavLink>
            ))}
        </div>
    </div>
  )
}

export default Navbar