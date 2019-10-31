import React from 'react'

const Artillery: React.FC = () => {

  const [range, rangeChange] = React.useState(100)

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => rangeChange(Number(target.value))

  const elevation = () => Math.round(-0.2371 * range + 1001.5)

  return (
    <div>
      <label>
        Range:
        <input onChange={handleChange} value={range} />
      </label>
      <p>{`Elevation: ${elevation()}`}</p>
    </div>
  )
}

export default Artillery