import React from 'react'

const ComingSoon = () => {
  return (
    <div className="flex items-center ml-72 justify-center h-screen  animate-pulse">
      <div className="text-center animate-bounce">
        <h1 className="text-5xl text-hero-bg font-bold mb-4 animate-fadeIn animate-scaleUp">Coming Soon</h1>
        <p className="text-xl">We're currently working on something awesome. Stay tuned!</p>
      </div>
    </div>
  )
}

export default ComingSoon