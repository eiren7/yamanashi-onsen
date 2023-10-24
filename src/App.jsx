import "./App.css"
import Filter from "./assets/Filter"
import Keyword from "./assets/Keyword"
import SearchButton from "./assets/SearchButton"

const App = () => {
  return (
    <div>
      <p>
        WARNING! This is a copysite of
        https://www.yamanashi-kankou.jp/search/onsen.html. <br />
        All Rights belong to the original creator and
        公益社団法人やまなし観光推進機構.
      </p>
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
