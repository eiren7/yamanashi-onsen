import "./App.css"
import FilterSearch from "./assets/FilterSearch"
import KeywordSearch from "./assets/Keyword"
import SearchButton from "./assets/SearchButton"

const App = () => {
  return (
    <div>
      <div className="table-container">
        <table>
          <h1>温泉施設情報検索</h1>
        </table>
        <SearchButton />
        <KeywordSearch />
        <FilterSearch />
        <SearchButton />
      </div>
    </div>
  )
}

export default App