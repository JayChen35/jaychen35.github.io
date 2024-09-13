'use client'
import React from 'react'

const ResumeButton = () => {
  // Function to handle the button click
  const handleButtonClick = () => {
    // Open the PDF in a new tab
    window.open('/assets/Jason_Chen_Resume.pdf', '_blank', 'noopener,noreferrer')
  }

  return (
    <button
      onClick={handleButtonClick}
      className="inline-flex items-center rounded bg-gray-300 px-4 py-2 font-bold text-gray-800 hover:bg-gray-400"
    >
      <svg
        className="mr-2 h-4 w-4 fill-current"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
      </svg>
      <span>Resume</span>
    </button>
  )
}

export default ResumeButton
