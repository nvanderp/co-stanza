import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { postPoem } from '../store'

function NewPoem(props) {
    const { quotes, poem, handleSave } = props

    return (
        <div className='poem-container'>
            <nav>
                <Link to='/new-poem'><button className='bttn'>Generate Poem</button></Link>
                <Link to='/poems'><button className='bttn'>List of Poems</button></Link>
                <button onClick={evt => handleSave(poem, evt)} className='bttn'>Save Poem</button>
            </nav>
            <h3>{!poem ? '...' : poem.content[0].join(' ')}</h3>
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
    let punct = [null, null, null, null, null, null, null, null, '(', ')', '-']
    poem.map(word => {
        let num = Math.floor(Math.random() * 2)
        let randoPunct = punct[Math.floor(Math.random() * (punct.length + 1))]
        if (!num) {
            if (typeof(newPoem[curIndex]) === 'undefined') newPoem[curIndex] = []
            if (newPoem[curIndex].length >= 1) {
                if (!randoPunct) newPoem[curIndex].push(' ' + word)
                else if (randoPunct === '-') newPoem[curIndex].push(randoPunct + word)
                else if (randoPunct === ')') newPoem[curIndex].push(' ' + word + randoPunct)
                else newPoem[curIndex].push(' ' + randoPunct + word)
            }
            else {  // so far, only word in currArray
                if (!randoPunct) newPoem[curIndex].push(word)
                else if (randoPunct === ')' || randoPunct === '-') newPoem[curIndex].push(word + randoPunct)
                else newPoem[curIndex].push(randoPunct + word)
            }
        } else {
            curIndex++
            newPoem[curIndex] = []
            if (!randoPunct) newPoem[curIndex].push(word)
            else if (randoPunct === ')') newPoem[curIndex].push(word + randoPunct)
            else newPoem[curIndex].push(randoPunct + word)
        }
    })
    if (!newPoem[0]) newPoem.shift()
    return newPoem
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
            dispatch(postPoem(newPoem, ownProps.history))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewPoem)