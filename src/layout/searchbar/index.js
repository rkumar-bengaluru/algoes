import React from 'react';
import autoBind from 'react-autobind';
import './search.css';
import SearchBar from './search-bar';
import  { Redirect } from 'react-router-dom'
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

  suggestionRenderer(suggestion, searchTerm) {
    return (
      <span>
        <span>{searchTerm}</span>
        <strong>{suggestion.substr(searchTerm.length)}</strong>
      </span>
    );
  }

  render() {
    const { fireRedirect, searchTerm } = this.state
    const to = '/#/search?searchTerm=' + searchTerm;
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
    }
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

export default Search;