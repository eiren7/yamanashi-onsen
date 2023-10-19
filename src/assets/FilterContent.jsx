const FilterContent = ({
  id,
  area,
  wideAreaChecked,
  areaCheckboxes,
  setAreaCheckboxes,
}) => {
  const handleSubCheckboxChange = (subAreaIndex) => {
    // Create a copy of the areaCheckboxes and toggle the sub-checkbox
    const updatedAreaCheckboxes = [...areaCheckboxes]
    updatedAreaCheckboxes[subAreaIndex] = !updatedAreaCheckboxes[subAreaIndex]

    // Call the provided setAreaCheckboxes function with the updated value
    setAreaCheckboxes(updatedAreaCheckboxes)
  }

  return (
    <td>
      {area.map((subArea, subAreaIndex) => (
        <ul key={subAreaIndex}>
          <input
            type="checkbox"
            id={`select-${id}-${subAreaIndex}`}
            checked={wideAreaChecked || setAreaCheckboxes[subAreaIndex]}
            onChange={() => handleSubCheckboxChange(subAreaIndex)}
          />
          <label htmlFor={`select-${id}-${subAreaIndex}`}>{subArea}</label>
        </ul>
      ))}
    </td>
  )
}

export default FilterContent
