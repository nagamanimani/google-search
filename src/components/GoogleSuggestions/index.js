// Write your code here

import SuggestionItem from './components/SuggestionItem'

;('/.index.css')
const GoogleSuggestions = props => {
  const {suggestionsList} = props

  state = {
    searchItems: '',
  }

  inputItems = event => {
    this.setState({searchItem: event.target.value})

  }

render()
 const { searchItems }=this.state
      const filterdlist=suggestionsList.filter(each=>each.suggestion.includes(searchItems))
  return{
     
    <div>
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
          alt="search icon"
        />
      </div>
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
        />
        <input type="search" placeholder="search item" onChange={inputItems} />
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="google logo"
        />
      </div>
      <div>
        <ul>
          {filterdlists.map(eachItem => (
            <SuggestionItem id={each.id} suggestion={each.suggestion} />
          ))}
        </ul>
      </div>
    </div>
          }
}
export default GoogleSuggestions
