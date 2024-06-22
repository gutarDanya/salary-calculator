import React from "react";
import styles from './CoffeShopsPage.module.css';
import { useAppSelector } from "../../services/store";
import CoffeShopCell from "../../components/CoffeShopCell/CoffeShopCell";
import { useLocation, useNavigate } from "react-router-dom";

const CoffeShopsPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const shirmOpened = useAppSelector(state => state.AppSlice.shirmStatus);
    const coffeShops = useAppSelector(state => state.CoffeShopsSlice.coffeShops);

    function addCoffeChop() {
        navigate('/coffe-shops/add-coffe-shop', {state: {background: location}})
    }

    return(
        <div className={styles.page} style={shirmOpened ? { marginLeft: "260px" } : {}}>
            <h1 className={styles.header}>Кофейни</h1>
            <div className={styles.coffeShops}>
                {coffeShops && coffeShops.length > 0 && coffeShops.map((coffeShop) => {
                    return (
                        <CoffeShopCell name={coffeShop.name} />
                    )
                })}
                <button className={styles.addButton} onClick={addCoffeChop}>Добавить новую кофейню</button>
            </div>
        </div>
    )
}

export default CoffeShopsPage;