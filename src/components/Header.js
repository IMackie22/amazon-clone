import React from "react";
import "../styles/Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

function Header() {
	return (
		<div className="header">
			{/* Image */}
			<img
				className="header__logo"
				src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
				alt=""
			/>
			{/* Search Component */}
			<div className="header__search">
				<input className="header__searchInput" type="text" />
				{/* Search Logo */}
				<SearchIcon className="header__searchIcon" />
			</div>

			{/* Header Navigation*/}
			<div className="header__nav">
				<div className="header__option">
					<span className="header__optionLineOne">Hello Guest</span>
					<span className="header__optionLineTwo">Sign in</span>
				</div>
				<div className="header__option">
					<span className="header__optionLineOne">Returns</span>
					<span className="header__optionLineTwo">& Orders</span>
				</div>
				<div className="header__option">
					<span className="header__optionLineOne">Your</span>
					<span className="header__optionLineTwo">Prime</span>
				</div>
				<div className="header__optionBasket">
					<ShoppingBasketIcon />
					<span className="header__optionLineTwo header_basketCount">0</span>
				</div>
			</div>
		</div>
	);
}

export default Header;