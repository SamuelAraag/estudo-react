import reactLogo from "./react-logo.svg"

export default function Header() {
    return (
        <header className="header">
            <img src={reactLogo} className="header-logo" alt="React logo" />
            <span className="header-title">ReactFacts</span>
        </header>
    )
}
