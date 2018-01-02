import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

function NavHeader(props) {
    return (
        <nav>
            <h1>Co-Stanza</h1>
            <Link to='/quotes'><button>Generate Poem</button></Link>
        </nav>
    )
}

export default connect()(NavHeader)