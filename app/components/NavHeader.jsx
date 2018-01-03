import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
// import { handleSave } from './QuotesList'

function NavHeader(props) {
    return (
        <nav>
            <h1>Co-Stanza</h1>
            <Link to='/quotes'><button className='bttn'>Generate Poem</button></Link>
            {/* <button onClick={evt => handleSave(evt)} className='bttn'>Save Poem</button> */}
        </nav>
    )
}

export default connect()(NavHeader)