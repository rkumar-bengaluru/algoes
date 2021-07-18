import PropTypes from 'prop-types';
import React from 'react';
import autoBind from 'react-autobind';
import htmlElementAttributes from 'react-html-attributes';
import { debounce, isNil, pick } from 'lodash';
import Suggestions from './suggestions';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    if (props.renderSearchButton && !props.onSearch) {
      throw new Error(
        'prop `onSearch` is required when rendering search button'
      );
    }

    this.state = {
      focusedSuggestion: null,
      isFocused: false,
      searchTerm: null,
      value: ''
    };

    this.attributes = pick(props, htmlElementAttributes.input);

    autoBind(
      this,
      'clearInput',
      'handleChange',
      'handleClick',
      'handleHover',
      'handleKeyDown',
      'handleSelection',
      'search',
      'toggleFocus'
    );

    this.handleDebouncedChange = debounce(
      this.handleDebouncedChange,
      props.delay
    );
  }

  componentDidMount() {
    if (this.props.autoFocus) {
      this.input.focus();
    }

    document.addEventListener('click', this.handleClick);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClick);
  }

  getNextIndex(current, last, isScrollingDown) {
    let next = null;

    if (isScrollingDown && current !== last) {
      next = isNil(current) ? 0 : current + 1;
    } else if (!isScrollingDown && current !== 0) {
      next = isNil(current) ? last : current - 1;
    }

    return next;
  }

  setFocusedSuggestion(isScrollingDown) {
    const { focusedSuggestion: current, searchTerm } = this.state;
    const { suggestions } = this.props;
    const last = suggestions.length - 1;
    const next = this.getNextIndex(current, last, isScrollingDown);

    this.setState({
      focusedSuggestion: next,
      value: suggestions[next] || searchTerm
    });
  }

  clearInput() {
    this.setState({
      focusedSuggestion: null,
      searchTerm: null,
      value: ''
    });

    this.input.focus();
    this.props.onClear();
  }

  toggleFocus() {
    this.setState({
      isFocused: !this.state.isFocused
    });
  }

  handleClick(event) {
    if (!this.container.contains(event.target)) {
      this.props.onClear();
    }
  }

  handleDebouncedChange(searchTerm) {
    this.setState({
      searchTerm
    });

    this.props.onChange(searchTerm);
  }

  handleChange(event) {
    const { value } = event.target;
    const searchTerm = value.toLowerCase().trim();

    if (!value) {
      this.clearInput();
      return;
    }

    this.setState({
      focusedSuggestion: null,
      value
    });

    if (searchTerm) {
      this.handleDebouncedChange(searchTerm);
    }
  }

  handleKeyDown(event) {
    switch (event.key) {
      case 'ArrowUp':
      case 'ArrowDown':
        if (this.props.suggestions.length > 0) {
          event.preventDefault();
          this.setFocusedSuggestion(event.key === 'ArrowDown');
        }
        break;

      case 'Backspace':
        this.handleBackspace();
        break;

      case 'Enter':
        this.search();
        break;

      case 'Escape':
        this.handleEscape();
        break;
      default:
          break;
    }
  }

  handleBackspace() {
    this.setState({
      focusedSuggestion: null
    });
  }

  handleEscape() {
    this.setState({
      focusedSuggestion: null,
      searchTerm: ''
    });

    this.input.blur();
    this.props.onClear();
  }

  handleHover(current) {
    this.setState({
      focusedSuggestion: current
    });
  }

  handleSelection(suggestion) {
    this.setState({
      focusedSuggestion: null,
      value: suggestion
    });

    this.props.onClear();

    if (this.props.onSelection) {
      this.props.onSelection(suggestion);
    }
  }

  search() {
    this.props.onClear();
    this.props.onSearch(this.state.value.trim());
  }

  renderClearButton() {
    return (
      <button className="clear-button" onClick={this.clearInput} />
    );
  }

  renderSearchButton() {
    return (
      <button type="button" className="btn btn-primary" onClick={this.search}>
          <i className="fas fa-search"></i>
      </button>
    );
  }

  renderSuggestions(searchTerm, styles) {
    return (
      <Suggestions
        focusedSuggestion={this.state.focusedSuggestion}
        onSelection={this.handleSelection}
        onSuggestionHover={this.handleHover}
        searchTerm={searchTerm}
        styles={styles}
        suggestions={this.props.suggestions}
        suggestionRenderer={this.props.suggestionRenderer}
      />
    );
  }

  render() {
    const { props, state } = this;
    const { shouldRenderSearchButton, styles } = props;

    const shouldRenderClearButton = state.value && props.shouldRenderClearButton;
    const shouldRenderSuggestions = state.value && props.suggestions.length > 0;

    return (
      <div className="input-group" ref={ref => (this.container = ref)}>
        <input placeholder={this.props.placeholder}
          autoFocus style={{ "height": "45px","width": "400px" }}
          className="form-control ml-5"
          id="ex3"
          type="text"
          ref={ref => (this.input = ref)}
          value={state.value} onChange={this.handleChange}
          onFocus={this.toggleFocus}
          onBlur={this.toggleFocus}
          onKeyDown={props.suggestions && this.handleKeyDown} />

        {shouldRenderClearButton && this.renderClearButton()}
        {shouldRenderSearchButton && this.renderSearchButton()}
        {shouldRenderSuggestions && this.renderSuggestions(state.searchTerm, styles)}
      </div>
    );
  }
}

SearchBar.propTypes = {
  autoFocus: PropTypes.bool,
  delay: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onChange: PropTypes.func.isRequired,
  onClear: PropTypes.func.isRequired,
  onSearch: PropTypes.func,
  onSelection: PropTypes.func,
  shouldRenderClearButton: PropTypes.bool,
  shouldRenderSearchButton: PropTypes.bool,
  styles: PropTypes.object,
  suggestions: PropTypes.array.isRequired,
  suggestionRenderer: PropTypes.func
};

SearchBar.defaultProps = {
  autoCapitalize: 'off',
  autoComplete: 'off',
  autoCorrect: 'off',
  autoFocus: false,
  delay: 0,
  maxLength: 100,
  placeholder: '',
  shouldRenderClearButton: true,
  shouldRenderSearchButton: true,
  styles: {
    wrapper: 'search-container',
    field: 'field',
    focusedField: 'field--focused',
    hasSuggestions: 'react-search-bar__field--has-suggestions',
    input: 'input',
    clearButton: 'clear-button',
    submitButton: 'submit-button',
    suggestions: 'suggestions',
    suggestion: 'suggestion'
  },
  suggestionRenderer: suggestion => <div>{suggestion}</div>
};

export default SearchBar;