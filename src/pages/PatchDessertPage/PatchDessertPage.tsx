import React, { useEffect } from "react";
import styles from './PatchDessertPage.module.css';
import { useAppDispatch, useAppSelector } from "../../services/store";
import { useInput } from "../../utils/hooks";
import BaseInput from "../../components/BaseInput/BaseInput";
import CheckboxInput from "../../components/CheckboxInput/CheckboxInput";
import IngredientContainer from "../../components/IngredientContainer/IngredientContainer";
import { addIngredient, deleteDessert, deleteIngredient, getCurrentDessert, patchDessert } from "../../services/slices/TestSlice";
import { useNavigate, useParams } from "react-router-dom";
import { checkValidity } from "../../utils/scripts";

const PatchDessertPopup = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const desserts = useAppSelector(state => state.TestSlice.desserts)
    const dessert = useAppSelector(state => state.TestSlice.currentDessert);
    const { id } = useParams();

    const name = useInput(dessert.name, { isEmpty: true });
    const url = useInput(dessert.url, { isEmpty: false });
    const kkal = useInput(dessert.info.kkal, { isNumber: true, isEmpty: true });
    const p = useInput(dessert.info.p, { isNumber: true, isEmpty: true });
    const f = useInput(dessert.info.f, { isNumber: true, isEmpty: true });
    const c = useInput(dessert.info.c, { isNumber: true, isEmpty: true });
    const hasStevia = useInput(dessert.hasStevia, { isEmpty: false })
    const withoutFlour = useInput(dessert.withoutFlour, { isEmpty: false });
    const hasTopinambura = useInput(dessert.hasTopinambura, { isEmpty: false })
    const fewCalories = useInput(dessert.fewCalories, { isEmpty: false })
    const vegan = useInput(dessert.vegan, { isEmpty: false })
    const withoutEggs = useInput(dessert.withoutEggs, { isEmpty: false })
    const withoutMilk = useInput(dessert.withoutMilk, { isEmpty: false })
    const withoutGluten = useInput(dessert.withoutGluten, { isEmpty: false })

    const extraIngredient = useInput("", { isEmpty: true });

    useEffect(() => {
        name.setState(dessert.name)
        url.setState(dessert.url)
        kkal.setState(dessert.info.kkal)
        p.setState(dessert.info.p)
        f.setState(dessert.info.f)
        c.setState(dessert.info.c)
        hasStevia.setState(dessert.hasStevia)
        withoutFlour.setState(dessert.withoutFlour)
        hasTopinambura.setState(dessert.hasTopinambura)
        fewCalories.setState(dessert.fewCalories)
        vegan.setState(dessert.vegan)
        withoutEggs.setState(dessert.withoutEggs)
        withoutMilk.setState(dessert.withoutMilk)
        withoutGluten.setState(dessert.withoutGluten)
    }, [dessert])

    const validity = checkValidity(
        name,
        url,
        kkal,
        p,
        f,
        c
    )

    function removeIngredient(ingredient: string) {
        dispatch(deleteIngredient(ingredient))
    }

    function removeDessert(evt: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        evt.preventDefault();
        dispatch(deleteDessert(dessert))
        navigate('/desserts', { replace: true })
    }

    function updateDessert(evt: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        evt.preventDefault();
        dispatch(patchDessert({
            name: name.value,
            url: url.value,
            info: {
                kkal: Number(kkal.value),
                p: Number(p.value),
                f: Number(f.value),
                c: Number(c.value)
            },
            hasStevia: hasStevia.value,
            withoutFlour: withoutFlour.value,
            hasTopinambura: hasTopinambura.value,
            fewCalories: fewCalories.value,
            vegan: vegan.value,
            withoutEggs: withoutEggs.value,
            ingredients: dessert.ingredients,
            withoutGluten: withoutGluten.value,
            withoutMilk: withoutMilk.value,
            id: dessert.id
        }))
    };

    function addNewIngredient () {
        dispatch(addIngredient(extraIngredient.value))
        extraIngredient.setState('')
    }

    useEffect(() => {
        dispatch(getCurrentDessert(id!))
    }, [desserts])

    return (
        dessert.name !== "дессерт"
            ? <form className={styles.container}>
                <div className={styles.column}>
                    <BaseInput input={name} type="text" name="name" placeholder="название" text="название" />
                    <BaseInput input={url} type="text" name="url" placeholder="ссылка на изображение" text="ссылка на изображение" />
                    <BaseInput input={kkal} type="number" name="kkal" placeholder="ккал/100г" text="калории" />
                    <BaseInput input={p} type="number" name="p" placeholder="белок/100г" text="белки" />
                    <BaseInput input={f} type="number" name="f" placeholder="жиры/100г" text="жиры" />
                    <BaseInput input={c} type="number" name="c" placeholder="углеводы/100г" text="углеводы" />
                    <div className={styles.checkboxes}>
                        <CheckboxInput input={hasStevia} text="есть стевия" />
                        <CheckboxInput input={withoutFlour} text="без муки" />
                        <CheckboxInput input={hasTopinambura} text="есть топмнамбура" />
                        <CheckboxInput input={fewCalories} text="низкоколорийный" />
                        <CheckboxInput input={vegan} text="веганский" />
                        <CheckboxInput input={withoutEggs} text="без яиц" />
                        <CheckboxInput input={withoutMilk} text="без молока" />
                        <CheckboxInput input={withoutGluten} text="без глютена" />
                    </div>
                </div>
                <div className={styles.column}>
                    <div className={styles.secondColumn}>
                        {dessert.ingredients && dessert.ingredients.length > 0 && dessert.ingredients.map((ingredient, i) => {
                            return (
                                <IngredientContainer ingredient={ingredient} handleDelete={() => { removeIngredient(ingredient) }} />
                            )
                        })}
                        <label className={styles.inputContainer}>
                        Доп ингредиент
                        <input type="text" value={extraIngredient.value} onChange={e => { extraIngredient.onChange(e) }} className={styles.input} />
                        <button type="button" className={styles.addButton} onClick={addNewIngredient} disabled={!extraIngredient.inputValid}>Добавить</button>
                    </label>
                    </div>

                    <button className={styles.patchButton} type="submit" disabled={validity} onClick={(e) => { updateDessert(e) }}>Изменить дессерт</button>
                    <button className={styles.deleteButton} type="submit" onClick={(e) => { removeDessert(e) }}>Удалить дессерт</button>
                </div>
            </form>
            : null
    )
}

export default PatchDessertPopup;