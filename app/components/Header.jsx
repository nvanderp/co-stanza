import React from 'react'
import { connect } from 'react-redux'

function Header(props) {
    return (
        <h1>Co-Stanza</h1> 
    )
}

export default connect()(Header)