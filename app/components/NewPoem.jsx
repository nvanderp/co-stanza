import React from 'react'
import { connect } from 'react-redux'

function NewPoem(props) {
    const { quotes, poem } = props

    return (
        <div className='poem-container'>
            <pre className='poem'>
                { 
                    !poem 
                    ? 'Loading poem...' 
                    : poem.content.map(line => {
                        if (line.length === 1 || line.length === 4) {
                            return (
                                <div className='align-left'>
                                    {line}
                                </div>
                            )  
                        }
                        else if (line.length === 3 || line.length === 5) {
                            return (
                                <div>
                                    {line}
                                </div>
                            )
                        } else {
                            return (
                                <div className='align-right'>
                                    {line}
                                </div>
                            )    
                        }
                    })
                }
            </pre>
        </div>
    )
}

// utility functions
const pickPoem = (quotes) => {
    let index = Math.floor(Math.random() * quotes.length)
    let quote = quotes[index]
    let newQuote = Object.assign({}, quote)
    newQuote.content = poemGenerator(quote.content)
    return newQuote
}

const poemGenerator = (content) => {
    let poem = content.split(' ')
    let newPoem = []
    let curIndex = 0
    poem.map(word => {
        let num = Math.floor(Math.random() * 2)
        if (!num) {
            if (typeof(newPoem[curIndex]) === 'undefined') newPoem[curIndex] = []
            if (newPoem[curIndex].length >= 1) newPoem[curIndex].push(' ' + word)
            else newPoem[curIndex].push(word)
        } else {
            curIndex++
            newPoem[curIndex] = []
            newPoem[curIndex].push(word)
        }
    })
    return newPoem
}

const mapStateToProps = function(state, ownProps) {
    let poem
    if (state.quotes.length) poem = pickPoem(state.quotes)
    return {
        quotes: state.quotes,
        poem
    }
}

export default connect(mapStateToProps)(NewPoem)