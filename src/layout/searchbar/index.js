import React from 'react';
import autoBind from 'react-autobind';
import './search.css';
import SearchBar from './search-bar';
import { Redirect } from 'react-router-dom'
class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      suggestions: [],
      fireRedirect: false,
      searchTerm: 'test',
      words: props.words
    };
    autoBind(this, 'handleChange', 'handleClear', 'handleSelection', 'handleSearch');
  }



  handleClear() {
    this.setState({
      suggestions: []
    });
  }

  handleChange(input) {
    this.setState({
      suggestions: this.state.words.filter(word => word.includes(input, 0))
    });

  }

  handleSelection(value) {
    if (value) {
      console.info(`Selected "${value}"`);
    }
    this.setState({ searchTerm: value });
    //this.state.searchTerm = value;
    //alert(`handleSelection ` + this.state.searchTerm);    
  }

  handleSearch(value) {
    this.setState({ searchTerm: value });
    this.setState({ fireRedirect: true });
    if (value) {
      console.info(`Searching "${value}"`);
    }
  }

  componentDidMount() {
		this.setState({ fireRedirect: false });
	}

  suggestionRenderer(suggestion, searchTerm) {
    return (
      <span>
        <span>{searchTerm}</span>
        <strong>{suggestion.substr(searchTerm.length)}</strong>
      </span>
    );
  }

  render() {
    const search = window.location.href;
    const { fireRedirect, searchTerm } = this.state
    var to = '/algoes/#/search?searchTerm=' + searchTerm;

    if(to.includes('algoes/#/algoes/#')) {
      to = to = '/algoes/#/search?searchTerm=' + searchTerm;
    }
   
    console.log(search);
    console.log(to);
    if (fireRedirect) {
      return (
        <div>
          <SearchBar
            autoFocus
            renderClearButton
            renderSearchButton
            placeholder="Search Algorithm / regex / design patterns ..."
            onChange={this.handleChange}
            onClear={this.handleClear}
            onSelection={this.handleSelection}
            onSearch={this.handleSearch}
            suggestions={this.state.suggestions}
            suggestionRenderer={this.suggestionRenderer}
          />
          <Redirect to={to} />;
          {window.location = to}
         
         
        </div>
      );
    } else {
      return (
        <div>
          <SearchBar
            autoFocus
            renderClearButton
            renderSearchButton
            placeholder="Search Algorithm / regex / design patterns ..."
            onChange={this.handleChange}
            onClear={this.handleClear}
            onSelection={this.handleSelection}
            onSearch={this.handleSearch}
            suggestions={this.state.suggestions}
            suggestionRenderer={this.suggestionRenderer}
          />
        </div>
      );
    }
    
  }
}

export default Search;