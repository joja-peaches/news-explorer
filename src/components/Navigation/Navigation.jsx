import "./Navigation.css";

function Navigation() {
    return (
        <nav className="navigation">
            <div className="navigation__link-container">
                <p className="navigation__logo">NewsExplorer</p>
                <div className="navigation__links">
                    <button className="navigation__links__home">Home</button>
                    <button className="navigation__links__sign-in">Sign In</button>
                    <button className="navigation__links__saved-articles">Saved articles</button>
                    <button className="navigation__links__profile">Georgia</button>
                </div>
            </div>
        </nav>
    )
}

export default Navigation;