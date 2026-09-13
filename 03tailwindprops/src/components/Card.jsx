 
import React from "react"

function Card({ username, btnText }) {
  return (
    <div className="w-80 rounded-md shadow-md bg-black text-white overflow-hidden">

      {/* Image */}
      <div className="relative">
        <img
          src="https://picsum.photos/400/300"
          alt="card"
          className="w-full h-72 object-cover"
        />

        {/* Username on image */}
        <h2 className="absolute top-4 left-4 text-2xl font-bold text-white">
          {username}
        </h2>

        {/* Button on image */}
        <button className="absolute bottom-4 left-4 bg-white text-black px-5 py-2 rounded-md font-semibold">
          {btnText}
        </button>
      </div>

      {/* Text below image */}
      <div className="p-5">
        <p className="text-gray-300 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>

    </div>
  )
}

export default Card