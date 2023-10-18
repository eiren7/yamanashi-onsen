import { Areas } from "../../data"
import { Conditions } from "../../data"
import { IC } from "../../data"
import { useState } from "react"

const FilterSearch = () => {
  const [rowCheckboxes, setRowCheckboxes] = useState(Areas.map(() => false))

  // Function to handle row checkbox changes
  const handleRowCheckboxChange = (rowIndex) => {
    const updatedCheckboxes = [...rowCheckboxes]
    updatedCheckboxes[rowIndex] = !updatedCheckboxes[rowIndex]
    setRowCheckboxes(updatedCheckboxes)
  }

  return (
    <div>
      <div className="table-container">
        {/* Area Search */}
        <table>
          <h2>エリアで探す</h2>
          <img src="public/goto_map.png" alt="area-map" width="225" />
        </table>
        <table className="table-content">
          <tbody>
            {Areas.map((areas, rowIndex) => (
              <tr key={areas.id}>
                <th>
                  <ul>
                    <input
                      type="checkbox"
                      id={`select-${areas.id}`}
                      checked={rowCheckboxes[rowIndex]}
                      onChange={() => handleRowCheckboxChange(rowIndex)}
                    />
                    <label htmlFor={`select-${areas.id}`}>
                      {areas.wideArea}
                    </label>
                  </ul>
                </th>
                <td>
                  {areas.area.map((subArea, subAreaIndex) => (
                    <ul key={subAreaIndex}>
                      <input
                        type="checkbox"
                        id={`select-${areas.id}-${subAreaIndex}`}
                      />
                      <label htmlFor={`select-${areas.id}-${subAreaIndex}`}>
                        {subArea}
                      </label>
                    </ul>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* IC Search */}
        <table className="table-header">
          <h2>最寄りのIC</h2>
        </table>
        <table>
          <tbody>
            {IC.map((items) => (
              <tr key={items.id}>
                <th>
                  <ul>
                    <input type="checkbox" id={`select-${items.id}`} />
                    <label htmlFor={`select-${items.id}`}>{items.title}</label>
                  </ul>
                </th>
                <td>
                  {items.content.map((content, contentIndex) => (
                    <ul key={contentIndex}>
                      <input
                        type="checkbox"
                        id={`select-${items.id}-${contentIndex}`}
                      />
                      <label htmlFor={`select-${items.id}-${contentIndex}`}>
                        {content}
                      </label>
                    </ul>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Condition Search */}
        <table className="table-header">
          <h2>条件で探す</h2>
        </table>
        <table>
          <tbody>
            {Conditions.map((items) => (
              <tr key={items.id}>
                <th>
                  <ul>
                    <input type="checkbox" id={`select-${items.id}`} />
                    <label htmlFor={`select-${items.id}`}>{items.title}</label>
                  </ul>
                </th>
                <td>
                  {items.content.map((content, contentIndex) => (
                    <ul key={contentIndex}>
                      <input
                        type="checkbox"
                        id={`select-${items.id}-${contentIndex}`}
                      />
                      <label htmlFor={`select-${items.id}-${contentIndex}`}>
                        {content}
                      </label>
                    </ul>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default FilterSearch
