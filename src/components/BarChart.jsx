
import React from 'react'
import Plot from "react-plotly.js"

function BarChart() {
  return (
    <div>
      <Plot 
        data={[
          {type: "bar",
          x: ["one", "two", "three"],
          y: [29, 150, 85],
          marker: { color: "rgb(56, 125, 89)"}}
        ]}
        layout={{width: 1000, height: 500, title: "a simple bar chart"}}
      />
    </div>
  )
}

export default BarChart
