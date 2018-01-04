import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { postPoem } from '../store'

function NewPoem(props) {
    const { quotes, poem, handleSave } = props

    return (
        <div className='poem-container'>
            <nav>
                <Link to='/quotes'><button className='bttn'>Generate Poem</button></Link>
                <button onClick={evt => handleSave(poem, evt)} className='bttn'>Save Poem</button>
            </nav>
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

const arrLengthAdj = (poem) => {
    let longest = poem.reduce((a, b) => { return a.length > b.length ? a : b }).length
    poem.map(line => {
        while (line.length <= longest ) {
            line.push('')
        }
    })
    return poem
}

const mapStateToProps = (state, ownProps) => {
    let poem
    if (state.quotes.length) poem = pickPoem(state.quotes)
    return {
        quotes: state.quotes,
        poem
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        handleSave(newPoem, evt) {
            evt.preventDefault();
            if (!newPoem.content[0]) newPoem.content.shift()
            newPoem.content = arrLengthAdj(newPoem.content)
            console.log(newPoem)
            dispatch(postPoem(newPoem, ownProps.history))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewPoem)