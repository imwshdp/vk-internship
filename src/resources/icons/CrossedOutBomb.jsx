import React from 'react';

const Bomb = ({ svgSize }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={svgSize} height={svgSize} viewBox="0 0 500 500">
    <g transform="matrix(31.89 0 0 31.89 250 250)">
      <path
        stroke='none'
        fill='rgb(0,0,0)'
        vectorEffect="non-scaling-stroke"
        transform=" translate(-7, -7)"
        d="M 11.324219 3.07539 L 10.105469 4.2941400000000005 L 10.726562 4.915240000000001 C 10.946875 5.13555 10.946875 5.4918000000000005 10.726562 5.709770000000001 L 10.31875 6.11758 C 10.595313 6.7293 10.75 7.40899 10.75 8.12383 C 10.75 10.8168 8.5679687 12.99883 5.875 12.99883 C 3.1820313 12.99883 1 10.81914 1 8.12617 C 1 5.433210000000001 3.1820312 3.25117 5.875 3.25117 C 6.5898437 3.25117 7.2695312 3.40586 7.88125 3.68242 L 8.2890625 3.27461 C 8.509375 3.0543 8.865625 3.0543 9.0835937 3.27461 L 9.7046875 3.8957 L 10.923438 2.67695 L 11.324219 3.07539 Z M 12.71875 2.40742 L 12.15625 2.40742 C 12.001562 2.40742 11.875 2.53399 11.875 2.68867 C 11.875 2.84336 12.001562 2.96992 12.15625 2.96992 L 12.71875 2.96992 C 12.873438 2.96992 13 2.84336 13 2.68867 C 13 2.53399 12.873438 2.40742 12.71875 2.40742 Z M 11.3125 1.00117 C 11.157812 1.00117 11.03125 1.12774 11.03125 1.28242 L 11.03125 1.84492 C 11.03125 1.9996099999999999 11.157812 2.12617 11.3125 2.12617 C 11.467188 2.12617 11.59375 1.99961 11.59375 1.8449200000000001 L 11.59375 1.2824200000000001 C 11.59375 1.1277400000000002 11.467188 1.0011700000000001 11.3125 1.0011700000000001 z M 12.107031 2.29024 L 12.505469 1.8918 C 12.615625 1.78164 12.615625 1.60352 12.505469 1.49336 C 12.395312 1.3832 12.217188 1.3832 12.107031 1.49336 L 11.708594 1.8918 C 11.598437 2.00195 11.598437 2.18008 11.708594 2.29024 C 11.821094 2.40039 11.999219 2.40039 12.107031 2.29024 z M 10.517968999999999 2.29024 C 10.628124999999999 2.40039 10.806249999999999 2.40039 10.916405999999998 2.29024 C 11.026561999999998 2.18008 11.026561999999998 2.00195 10.916405999999998 1.8918 L 10.517969 1.49336 C 10.407813 1.3832 10.229688000000001 1.3832 10.119531 1.49336 C 10.009375 1.60352 10.009375 1.78164 10.119531 1.8918 L 10.517969 2.29024 z M 12.107031 3.08711 C 11.996875 2.97695 11.81875 2.97695 11.708594 3.08711 C 11.598437 3.19727 11.598437 3.37539 11.708594 3.48555 L 12.107031 3.88399 C 12.217187999999998 3.99414 12.395311999999999 3.99414 12.505469 3.88399 C 12.615625 3.77383 12.615625 3.5957 12.505469 3.48555 L 12.107031 3.08711 Z M 3.625 7.37617 C 3.625 6.548830000000001 4.2976562000000005 5.87617 5.125 5.87617 C 5.33125 5.87617 5.5 5.70742 5.5 5.50117 C 5.5 5.29492 5.33125 5.12617 5.125 5.12617 C 3.8851562 5.12617 2.875 6.13633 2.875 7.37617 C 2.875 7.58242 3.04375 7.75117 3.25 7.75117 C 3.45625 7.75117 3.625 7.58242 3.625 7.37617 z"
        strokeLinecap="round" />
    </g>
    <g transform="matrix(11.66 0 0 11.66 250 250)">
      <path
        stroke='none'
        fill='rgb(221,46,68)'
        vectorEffect="non-scaling-stroke"
        transform=" translate(-17.98, -18.02)"
        d="M 21.533 18.002 L 33.768 5.768 C 34.71543052377025 4.787052782589225 34.701880934742746 3.2277880574472135 33.73754643864776 2.263453561352235 C 32.773211942552784 1.2991190652572566 31.213947217410777 1.2855694762297505 30.233 2.2329999999999997 L 17.998 14.467 L 5.764 2.233 C 5.295441162136914 1.7638319027467655 4.659573214675293 1.500204733168365 3.9965 1.500204733168365 C 3.3334267853247077 1.500204733168365 2.6975588378630855 1.763831902746766 2.228999999999999 2.2330000000000005 C 1.7598319027467662 2.7015588378630864 1.4962047331683654 3.337426785324708 1.4962047331683654 4.000500000000001 C 1.4962047331683654 4.663573214675292 1.759831902746766 5.2994411621369135 2.229 5.768000000000001 L 14.463000000000001 18.002000000000002 L 2.201 30.265 C 1.4844665846470249 30.979384258957612 1.269645094286246 32.05545073379322 1.6569520385573728 32.990201147370655 C 2.0442589828284996 33.92495156094808 2.9571887685512266 34.53374260664949 3.9689999999999994 34.532000000000004 C 4.609 34.532000000000004 5.2490000000000006 34.288000000000004 5.737 33.800000000000004 L 17.999000000000002 21.537000000000006 L 30.233000000000004 33.77100000000001 C 30.70149903814878 34.24046665286276 31.337758350700035 34.503895282267464 32.001000000000005 34.50300000000001 C 33.01186114487685 34.502784275574214 33.92311720959438 33.89383439297896 34.31005990918052 32.95996306993934 C 34.69700260876665 32.02609174689973 34.48347669648695 30.951096742361393 33.769000000000005 30.236000000000008 L 21.533 18.002 z"
        strokeLinecap="round"
      />
    </g>
  </svg>
)

export default Bomb;  