import React from 'react'
import './gridSection.css'

const GridSection = element => (
  <div className="gridSection">
    <h5 className="gridSection__title">Title</h5>
    {element}
  </div>
)

export default GridSection