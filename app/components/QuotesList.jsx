import React from 'react'
import { connect } from 'react-redux'

function QuotesList(props) {
    const { quotes } = props

    return (
        <div>
            {/* <h3>Single Quote</h3>
                { !poem ? null : poem } */}
            <h3>All Quotes</h3>
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
        quotes: state.quotes
    }
}

export default connect(mapStateToProps)(QuotesList)