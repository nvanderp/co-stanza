import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

function SavedPoem(props) {
    const { poem } = props

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

const mapStateToProps = function(state, ownProps) {
    const poemId = Number(ownProps.match.params.poemId);

    // requires a poem unpacker of sorts!

    return {
        poem: state.poems.find(poem => poem.id === poemId)
    };
};

export default connect(mapStateToProps)(SavedPoem);