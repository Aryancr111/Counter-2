import React from 'react'

export default function Navbar() {

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="/">QuickSell</a>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://learn.quicksell.co/en/">QuickSell Learn</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://web.quicksell.co/">QuickSell Web</a>
                        </li>
                    </ul>
                    
  </div>
</nav>
        </>
            )
}
