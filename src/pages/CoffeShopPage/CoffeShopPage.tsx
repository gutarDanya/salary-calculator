import React, { useEffect } from "react";
import styles from './CoffeShopPage.module.css';
import { useAppDispatch, useAppSelector } from "../../services/store";
import LoadingComponent from "../../components/LoadingComponent/LoadingComponent";
import { addPositionToCoffeShop, getCurrentCoffeShop } from "../../services/slices/CoffeShopsSlice";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useInput } from "../../utils/hooks";
import BaseInput from "../../components/BaseInput/BaseInput";
import ProvisionContainer from "../../components/ProvisionContainer/ProvisionContainer";
import { checkValidity } from "../../utils/scripts";

export const CoffeShopPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useAppDispatch();
    const { id } = useParams();
    const coffeShop = useAppSelector(state => state.CoffeShopsSlice.currentCoffeShop);
    const coffeShops = useAppSelector(state => state.CoffeShopsSlice.coffeShops);
    const nameProvision = useInput("", { isEmpty: true });
    const provisionCount = useInput("", { isEmpty: true, isNumber: true });
    const minCount = useInput("", { isEmpty: false, isNumber: true });
    const shirmOpened = useAppSelector(state => state.AppSlice.shirmStatus);

    useEffect(() => {
        dispatch(getCurrentCoffeShop(id!))
    }, [])

    useEffect(() => {
        dispatch(getCurrentCoffeShop(id!))
    }, [coffeShops])

    const validity = checkValidity(nameProvision, provisionCount, minCount);

    function sendNewPosition(evt: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        evt.preventDefault();
        dispatch(addPositionToCoffeShop({
            id: id!,
             position: {
                name: nameProvision.value,
                count: Number(provisionCount.value),
                minCount: Number(minCount.value),
            },
            otherPositions: coffeShop!.provisions
        }))
    }

    function removeCoffeShop () {
        navigate('confirm', {state: {background: location}})
    }

    return (
        coffeShop
            ? <div className={styles.page} style={shirmOpened ? { marginLeft: '260px', width: 'calc(100% - 260px)' } : {}}>
                <h1 className={styles.header}>Кофейня: {coffeShop.name}</h1>
                <div className={styles.main}>
                    <div className={styles.provisions}>
                        <h2 >Провизия</h2>
                        <div className={styles.positions}>
                            {coffeShop.provisions && coffeShop.provisions.length > 0 && coffeShop.provisions.map((provision) => {
                                return (
                                    <ProvisionContainer name={provision.name} count={provision.count} minCount={provision.minCount} />
                                )
                            })}
                        </div>
                        <form className={styles.addPosition}>
                            <BaseInput input={nameProvision} placeholder="название" type='text' name='name' />
                            <BaseInput input={provisionCount} placeholder="колличество" type="number" name="count" />
                            <BaseInput input={minCount} placeholder="мин/кол" type="number" name='minCount' />
                            <button type='submit' disabled={validity} className={styles.submitProvision} onClick={(e) => {sendNewPosition(e)}}>Добавить</button>
                        </form>
                    </div>
                    <div className={styles.column}>
                        <div className={styles.statisticContainer}>
                            <h2 className={styles.secondHeader}>План</h2>
                            <div className={styles.diograms}>

                            </div>
                        </div>
                        <div className={styles.statisticContainer}>
                            <h2 className={styles.secondHeader}>Сотрудники</h2>
                        </div>
                        <div className={styles.statisticContainer}>
                            <h2 className={styles.secondHeader}>План</h2>
                        </div>
                        <div className={styles.statisticContainer}>
                            <h2 className={styles.secondHeader}>План</h2>
                        </div>
                    </div>
                </div>
                <button className={styles.submitButton} onClick={removeCoffeShop}>удалить кофейню</button>
            </div>
            : <LoadingComponent />
    )
}

export default CoffeShopPage