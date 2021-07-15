// Dependencies
import React from 'react';

class StudioHeader extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            focusedSuggestion: null,
            isFocused: false,
            searchTerm: null,
            value: 'Search Algoes - Example Quick Sort...'
        }
    }

    toggleFocus() {
        this.setState({
            isFocused: !this.state.isFocused
        });
    }

    handleChange(event) {
        const { value } = event.target;
        console.log(value);
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
        }
    }

    handleEscape() {
        this.setState({
            focusedSuggestion: null,
            searchTerm: ''
        });

        this.input.blur();
        this.props.onClear();
    }

    renderClearButton() {
        return (
            <button className="clear-button" onClick={this.clearInput} >
                <i className="fas fa-clear"></i>
            </button>
        );
    }
    renderSearchButton() {
        return (
            <button type="button" className="btn btn-primary" onClick={this.search}>
                <i className="fas fa-search"></i>
            </button>
        );
    }

    search() {
        this.props.onClear();
        this.props.onSearch(this.state.value.trim());
    }

    render() {
        return (
            <div className="header-basic">
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary static-top">

                    <a className="ml-auto" href="https://www.vlocalshop.in" target="_blank" rel="noopener noreferrer">
                        <img src="img/logo.svg" alt="LocalShop" />
                    </a>
                    <div className="container">
                        <p className="font-weight-bold text-white ml-auto">JavaScript Algoes</p>
                        <div className="text-white ml-auto">"Learn Algorithms By Coding...!"</div>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <div className="input-group" ref={ref => (this.container = ref)}>
                                <input placeholder={this.state.value}
                                    className="form-control ml-5"
                                    id="ex3"
                                    type="text"
                                    autoFocus={true}
                                    onChange={this.handleChange}
                                    ref={ref => (this.input = ref)}
                                />
                                {this.renderClearButton()}
                                {this.renderSearchButton()}
                            </div>
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active">
                                    <a className="nav-link ml-2 mr-2"
                                        href="https://github.com/rkumar-bengaluru/algoes"
                                        target="_blank" rel="noopener noreferrer">GitHub
                                        <span className="sr-only">(current)</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
};


StudioHeader.defaultProps = {
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
export default StudioHeader;
