import React from 'react'

function Divider({ size, type, color }) {
  return (
    <div style={{ borderTop: `${size} ${type} ${color}`}}></div>
  )
}

export default Divider