import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

function SavedPoem(props) {
    let { poems } = props

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
                            <li><Link to={`/poems/${poem.id}`}>{title}</Link></li>
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
    };
};

export default connect(mapStateToProps)(SavedPoem);