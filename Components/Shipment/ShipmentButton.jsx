import React from 'react'

const ShipmentButton = ({active,label,handleClick,bigBtn}) => {
  return (
    <button onClick={handleClick} className={`${bigBtn ? 'md:h-14 md:leading-[56px] h-[45px] leading-[45px]': 'h-11 leading-[44px]'} grow   ${active?  " bg-yellow shadow-md ": " border border-grey "}  rounded text-grey`}>
                    {label}
        </button>
  )
}

export default ShipmentButton