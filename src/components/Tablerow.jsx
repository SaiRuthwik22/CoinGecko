import React from 'react'
import "../index.css"

function Tablerow(props) {
    const {image,low_24h,high_24h,name,current_price} = props.element
    console.log(props)
  return (
    <>
        <tr>
            <td><img className='img-container' src={image} alt="" /></td>
            <td>{name}</td>
            <td>{current_price}</td>
            <td>{low_24h}</td>
            <td>{high_24h}</td>
        </tr>
    </>
  )
}

export default Tablerow
