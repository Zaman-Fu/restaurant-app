import "./Header.css";


const Header = () => {




    return (
        <div className="container-header">
            <header>
                <div id="logo-header">
                    <img src="images/788740.jpg" width="auto" height="40px"></img>
                </div>
                <div id="title-header">FAST FOOD FRIENDS</div>
                <div id="container-nav">
                    <nav>
                        <button className="nav-button">Home</button>
                        <button className="nav-button">Our Restaurants</button>
                        <button className="nav-button">About</button>
                        <button className="nav-button">Contact Us</button>
                    </nav>
                </div>
                <div id="container-cart">
                    <button id="cart-button">Cart</button>
                </div>
                
            </header>
        </div>
        
        );

}



export default Header;