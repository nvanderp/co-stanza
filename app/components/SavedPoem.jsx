import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

function SavedPoem(props) {
    let { poem } = props
    // console.log("Here's what I'm getting from the db", typeof(poem.content))
    // console.log(JSON.parse(poem.content))
    if (poem) poem.content = JSON.parse(poem.content)

    return (
        <div className='poem-container'>
            <nav>
                <Link to='/quotes'><button className='bttn'>Generate Poem</button></Link>
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

const mapStateToProps = (state, ownProps) => {
    const poemId = Number(ownProps.match.params.poemId);
    return {
        poems: state.poems,
        poem: state.poems.find(poem => poem.id === poemId)
    };
};

export default connect(mapStateToProps)(SavedPoem);