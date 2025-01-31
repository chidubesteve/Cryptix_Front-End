import React from 'react'

const VerifiedSvg = ({ customStyle }) => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 24 24"
    color="#38BDF8"
    style={{ color: "#38BDF8" }}
    height="17"
    width="17"
    xmlns="http://www.w3.org/2000/svg"
    className={customStyle}
  >
    <path fill="none" d="M0 0h24v24H0z"></path>
    <path d="M23 12l-2.44-2.79.34-3.69-3.61-.82-1.89-3.2L12 2.96 8.6 1.5 6.71 4.69 3.1 5.5l.34 3.7L1 12l2.44 2.79-.34 3.7 3.61.82L8.6 22.5l3.4-1.47 3.4 1.46 1.89-3.19 3.61-.82-.34-3.69L23 12z"></path>
    {/* <!-- Checkmark path with white fill --> */}
    <path
      d="M10.09 16.72l-3.8-3.81 1.48-1.48 2.32 2.33 5.85-5.87 1.48 1.48-7.33 7.35z"
      fill="#FFFFFF"
    ></path>
  </svg>
);

export default VerifiedSvg; 
