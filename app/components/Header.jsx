import React from 'react'
import { connect } from 'react-redux'

function Header(props) {
    return (
        <nav>
            <h1>Co-Stanza</h1> 
        </nav>
    )
}

export default connect()(Header)