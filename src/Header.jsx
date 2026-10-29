import reactLogo from "./react-logo.svg"

export default function Header() {
    return (
        <header>
            <img src={reactLogo} width="40px" alt="React logo" />
            <nav>
                <ul className="nav-list">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}
