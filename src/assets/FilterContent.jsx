const FilterContent = ({
  id,
  content,
  titleChecked,
  contentCheck,
  setContentCheck,
}) => {
  const handleSubCheckboxChange = (contentIndex) => {
    const updatedContentCheck = [...contentCheck]
    updatedContentCheck[contentIndex] =
      !updatedContentCheck[contentIndex]
    setContentCheck(updatedContentCheck)

    console.log(updatedContentCheck)
  }



  return (
    <td>
      {content.map((content, contentIndex) => (
        <ul key={contentIndex}>
          <input
            type="checkbox"
            id={`select-${id}-${contentIndex}`}
            checked={titleChecked || contentCheck[contentIndex]}
            onChange={() => handleSubCheckboxChange(contentIndex)}
          />
          <label htmlFor={`select-${id}-${contentIndex}`}>{content}</label>
        </ul>
      ))}
    </td>
  )
}

export default FilterContent