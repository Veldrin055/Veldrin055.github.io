import React from 'react'

const Artillery = () => {

  const [range, rangeChange] = React.useState(100)

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => rangeChange(Number(target.value))

  return (
    <div>
      <label>
        Range:
        <input onChange={handleChange} value={range} />
      </label>
      <p>Elevation: {-0.2371 * range + 1001.5}</p>
    </div>
  )
}

export default Artillery