import { Areas, wideAreas } from "../../data"
import { Conditions } from "../../data"
import { IC } from "../../data"
import { useState } from "react"
import FilterContent from "./FilterContent"

const Filter = () => {
  // const initialCheckboxes = Areas.map((areas) => ({
  //   wideArea: false,
  //   areas: areas.area.map(() => false),
  // }));

  // const firstRowCheckboxes = initialCheckboxes[0]

  // console.log(firstRowCheckboxes)

  const [wideAreaCheckboxes, setWideAreaCheckboxes] = useState(
    wideAreas.reduce((acc, wideArea, index) => {
      acc[index] = false
      return acc
    }, {})
  )

  const [areaCheckboxes, setAreaCheckboxes] = useState(
    Areas.map((area) => area.area.map(() => false))
  )

  const handleWideAreaChange = (index) => {
    setWideAreaCheckboxes((prevWideAreaCheckboxes) => {
      const updatedWideAreaCheckboxes = { ...prevWideAreaCheckboxes }
      updatedWideAreaCheckboxes[index] = !updatedWideAreaCheckboxes[index]
      return updatedWideAreaCheckboxes
    })

    // Toggle the check status of corresponding areas
    setAreaCheckboxes((prevAreaCheckboxes) => {
      const updatedAreaCheckboxes = { ...prevAreaCheckboxes }
      updatedAreaCheckboxes[index + 1] = areaCheckboxes[index + 1].map(
        () => !wideAreaCheckboxes[index]
      )
      return updatedAreaCheckboxes
    })
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
            {wideAreas.map((wideArea, index) => (
              <tr key={index}>
                <th>
                  <ul>
                    <input
                      type="checkbox"
                      id={`select-${index}`}
                      onChange={() => handleWideAreaChange(index)}
                      checked={wideAreaCheckboxes[index]}
                    />
                    <label htmlFor={`select-${index}`}>{wideArea}</label>
                  </ul>
                </th>
                <FilterContent
                  id={index + 1}
                  area={Areas[index].area}
                  wideAreaChecked={wideAreaCheckboxes[index]}
                  areaCheckboxes={areaCheckboxes[index]}
                  setAreaCheckboxes={(newCheckboxes) => {
                    setAreaCheckboxes((prevAreaCheckboxes) => ({
                      ...prevAreaCheckboxes,
                      [index + 1]: newCheckboxes,
                    }))
                  }}
                />
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

export default Filter
