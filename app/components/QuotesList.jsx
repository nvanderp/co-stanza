import React from 'react'
import { connect } from 'react-redux'

function QuotesList(props) {
    const { quotes, poem } = props

    return (
        <div>
            <h3>Poem</h3>
                { !poem ? 'Loading poem...' : poem.content }
            <h3>Available Quotes</h3>
            {
                !quotes
                ? null
                : quotes.map(quote => {
                    return (
                        <div key={quote.id}>
                            {quote.content}
                        </div>
                    )
                })
            }
        </div>
    )
}

const mapStateToProps = function(state, ownProps) {
    return {
        quotes: state.quotes,
        poem: state.poem
    }
}

export default connect(mapStateToProps)(QuotesList)