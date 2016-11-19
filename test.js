class AutocompleteExample extends React.Component {
    constructor () {
        super()
        this.state = {tags: []}
    }

    handleChange (tags) {
        this.setState({tags})
    }

    render () {
        const autocompleteRenderInput = (props) => {
            const {addTag, ...other} = props
            const inputValue = (props.value && props.value.trim().toLowerCase()) || ""
            const inputLength = inputValue.length
            let {tags} = this.state
            let suggestions = states().filter((state) => {
                    return state.name.toLowerCase().slice(0, inputLength) === inputValue
                })

            return (
                <Autosuggest
            ref={props.ref}
            suggestions={suggestions}
            shouldRenderSuggestions={(value) => value && value.trim().length > 0}
            getSuggestionValue={(suggestion) => suggestion.name}
            renderSuggestion={(suggestion) => <span>{suggestion.name}</span>}
            inputProps={other}
            onSuggestionSelected={(e, {suggestion}) => {
                props.addTag(suggestion.name)
            }}
        />
        )
        }

        return <TagsInput ref='tags' renderInput={autocompleteRenderInput} value={this.state.tags} onChange={::this.handleChange} />
    }
}