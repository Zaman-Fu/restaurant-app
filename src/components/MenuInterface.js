import './MenuInterface.css';

const MenuInterface = (props) => {




    return (
        <div className="container-menu">

            <div className="category-tabs">
                <button className="category-button">All</button>
                <button className="category-button">Main</button>
                <button className="category-button">Side</button>
                <button className="category-button">Dessert</button>
                <button className="category-button">Drink</button>
            </div>
            <div className="menu-item-container">
            </div>
        </div>

    );
}


export default MenuInterface;


