import "./App.css"
import Filter from "./assets/Filter"
import Keyword from "./assets/Keyword"
import SearchButton from "./assets/SearchButton"

const App = () => {
  return (
    <div>
      <div className="table-container">
        <table>
          <h1>温泉施設情報検索</h1>
        </table>
        <SearchButton />
        <Keyword />
        <Filter />
        <SearchButton />
      </div>
    </div>
  )
}

export default App