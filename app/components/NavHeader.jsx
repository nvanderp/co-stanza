import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

function NavHeader(props) {
    return (
        <nav>
            <h1>Co-Stanza</h1>
            <Link to='/quotes'><button className='bttn'>Generate Poem</button></Link>
            <Link to='/quotes'><button className='bttn'>Generate Poem</button></Link>
        </nav>
    )
}

const mapDispatchToProps = function(dispatch, ownProps) {

}

export default connect(mapDispatchToProps)(NavHeader)