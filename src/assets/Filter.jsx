import { Areas, wideAreas } from "../../data"
import { IC, Expressway } from "../../data"
import { Conditions, allConditions } from "../../data"
import { useState } from "react"
import FilterContent from "./FilterContent"

const Filter = () => {
  const [wideAreaCheck, setWideAreaCheck] = useState(wideAreas.map(() => false))
  const [areaCheck, setAreaCheck] = useState(
    Areas.map((items) => items.content.map(() => false))
  )

  const [expresswayCheck, setExpresswayCheck] = useState(
    Expressway.map(() => false)
  )
  const [ICCheck, setICCheck] = useState(
    IC.map((items) => items.content.map(() => false))
  )

  const [allConditionsCheck, setAllConditionsCheck] = useState(
    allConditions.map(() => false)
  )
  const [conditionCheck, setConditionCheck] = useState(
    Conditions.map((items) => items.content.map(() => false))
  )

  const handleWideAreaChange = (index) => {
    setWideAreaCheck((prevWideAreaCheck) => {
      const updatedWideAreaCheck = [...prevWideAreaCheck]
      updatedWideAreaCheck[index] = !updatedWideAreaCheck[index]

      return updatedWideAreaCheck
    })
  }

  const handleExpresswayChange = (index) => {
    setExpresswayCheck((prevExpresswayCheck) => {
      const updatedExpresswayCheck = [...prevExpresswayCheck]
      updatedExpresswayCheck[index] = !updatedExpresswayCheck[index]

      console.log(updatedExpresswayCheck)
      return updatedExpresswayCheck
    })
  }

  const handleAllConditionsChange = (index) => {
    setAllConditionsCheck((prevAllConditionCheck) => {
      const updatedAllConditionCheck = [...prevAllConditionCheck]
      updatedAllConditionCheck[index] = !updatedAllConditionCheck[index]

      console.log(updatedAllConditionCheck)
      return updatedAllConditionCheck
    })
  }

  return (
    <div>
      <div className="table-container">
        {/* Area Search */}
        <table>
          <h2>エリアで探す</h2>
          <img src="../public/goto_map.png" alt="area-map" width="225" />
        </table>
        <table className="table-content">
          <tbody>
            {wideAreas.map((wideArea, index) => (
              <tr key={index}>
                <th>
                  <ul>
                    <input
                      type="checkbox"
                      id={`select-area-${index}`}
                      onChange={() => handleWideAreaChange(index)}
                      checked={wideAreaCheck[index]}
                    />
                    <label htmlFor={`select-area-${index}`}>{wideArea}</label>
                  </ul>
                </th>
                <FilterContent
                  id={`area-${index} + 1`}
                  content={Areas[index].content}
                  titleChecked={wideAreaCheck[index]}
                  contentCheck={areaCheck[index]}
                  setContentCheck={(newCheck) => {
                    setAreaCheck((prevContentCheck) => {
                      const updatedContentCheck = [...prevContentCheck]
                      updatedContentCheck[index] = newCheck
                      return updatedContentCheck
                    })
                  }}
                />
              </tr>
            ))}
          </tbody>
        </table>

        {/* IC Search */}
        <table>
          <h2>最寄りのIC</h2>
        </table>
        <table className="table-content">
          <tbody>
            {Expressway.map((Expressway, index) => (
              <tr key={index}>
                <th>
                  <ul>
                    <input
                      type="checkbox"
                      id={`select-expressway-${index}`}
                      onChange={() => handleExpresswayChange(index)}
                      checked={expresswayCheck[index]}
                    />
                    <label htmlFor={`select-expressway-${index}`}>
                      {Expressway}
                    </label>
                  </ul>
                </th>
                <FilterContent
                  id={`IC-${index + 1}`}
                  content={IC[index].content}
                  titleChecked={expresswayCheck[index]}
                  contentCheck={ICCheck[index]}
                  setContentCheck={(newCheck) => {
                    setICCheck((prevContentCheck) => {
                      const updatedContentCheck = [...prevContentCheck]
                      updatedContentCheck[index] = newCheck
                      return updatedContentCheck
                    })
                  }}
                />
              </tr>
            ))}
          </tbody>
        </table>

        {/* Condition Search */}
        <table>
          <h2>条件で探す</h2>
        </table>
        <table className="table-content">
          <tbody>
            {allConditions.map((allConditions, index) => (
              <tr key={index}>
                <th>
                  <ul>
                    <input
                      type="checkbox"
                      id={`select-condition-${index}`}
                      onChange={() => handleAllConditionsChange(index)}
                      checked={allConditionsCheck[index]}
                    />
                    <label htmlFor={`select-condition-${index}`}>
                      {allConditions}
                    </label>
                  </ul>
                </th>
                <FilterContent
                  id={`condition-${index + 1}`}
                  content={Conditions[index].content}
                  titleChecked={allConditionsCheck[index]}
                  contentCheck={conditionCheck[index]}
                  setContentCheck={(newCheck) => {
                    setConditionCheck((prevContentCheck) => {
                      const updatedContentCheck = [...prevContentCheck]
                      updatedContentCheck[index] = newCheck
                      return updatedContentCheck
                    })
                  }}
                />
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Filter
