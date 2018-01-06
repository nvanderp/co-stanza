import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { deletePoem } from '../store'

function SavedPoem(props) {
    let { poems, handleDelete } = props

    return (
        <div className='poem-list-container'>
            <nav>
                <Link to='/new-poem'><button className='bttn'>Generate Poem</button></Link>
            </nav>
            <ul className='poem-list'>
                {
                    !poems
                    ? 'Loading poems...'
                    : poems.map(poem => {
                        // console.log('type of poem === ', typeof(poem))
                        if (typeof(poem.content) === 'string' ) poem.content = JSON.parse(poem.content)
                        let title = poem.content[0].join(' ')
                        return (
                            <li>
                                <Link to={`/poems/${poem.id}`}>{title}</Link>
                                <button onClick={ evt => handleDelete(poem, evt) } className='bttn-sav-delete'>Delete</button>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        poems: state.poems
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        handleDelete(poem, evt) {
            dispatch(deletePoem(poem, ownProps.history))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SavedPoem);