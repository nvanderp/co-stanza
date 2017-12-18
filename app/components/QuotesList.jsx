import React from 'react'
import { connect } from 'react-redux'

function QuotesList(props) {
    const { quotes, poem } = props

    return (
        <div className='poem-container'>
            <h3>Poem</h3>
            <pre className='poem'>
                { 
                    !poem 
                    ? 'Loading poem...' 
                    : poem.content 
                }
            </pre>
            {/* <h3>Available Quotes</h3>
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
            } */}
        </div>
    )
}

// utility function
const pickPoem = (quotes) => {
    let index = Math.floor(Math.random() * quotes.length)
    let quote = quotes[index]
    let newQuote = Object.assign({}, quote)
    newQuote.content = cummings(quote.content)
    return newQuote
}

const cummings = (words = '') => {
	let resultStr = ''
	words.split('').forEach(word => {
		const cummingsSpaces = Math.random() * 300
		let cummingsSpace = '\t'
		for (let i = 0; i < cummingsSpaces; i++) {
			cummingsSpace += '\t'
		}
		resultStr += word + cummingsSpace
	})

	return resultStr
}

const mapStateToProps = function(state, ownProps) {
    let poem
    if (state.quotes.length) { poem = pickPoem(state.quotes) }
    return {
        quotes: state.quotes,
        poem
    }
}

export default connect(mapStateToProps)(QuotesList)