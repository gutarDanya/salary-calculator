import React from "react";
import styles from './AddDessertPopup.module.css';
import BaseInput from "../../components/BaseInput/BaseInput";
import { useInput } from "../../utils/hooks";
import { useAppDispatch } from "../../services/store";
import { checkValidity } from "../../utils/scripts";
import CheckboxInput from "../../components/CheckboxInput/CheckboxInput";
import { sendNewDessert } from "../../services/slices/TestSlice";
import { v4 as uuidv4 } from 'uuid'

const AddDessertPopup = () => {
    const dispatch = useAppDispatch();
    const name = useInput('', { isEmpty: true });
    const url = useInput('', { isEmpty: false });
    const kkal = useInput("0", { isNumber: true, isEmpty: true });
    const p = useInput("0", { isNumber: true, isEmpty: true });
    const f = useInput("0", { isNumber: true, isEmpty: true });
    const c = useInput("0", { isNumber: true, isEmpty: true });
    const ingredientsInput = useInput("", { isEmpty: true });
    const hasStevia = useInput(false, { isEmpty: false })
    const withoutFlour = useInput(false, { isEmpty: false });
    const hasTopinambura = useInput(false, { isEmpty: false })
    const fewCalories = useInput(false, { isEmpty: false })
    const vegan = useInput(false, { isEmpty: false })
    const withoutEggs = useInput(false, { isEmpty: false })
    const withoutMilk = useInput(false, { isEmpty: false })
    const withoutGluten = useInput(false, { isEmpty: false })


    const validity = checkValidity(name, url, kkal, p, f, c);
    const ingredients = ingredientsInput.value.split(",").map((ingredient: string) => { return ingredient.replace(" ", '') })

    function sendDessert(evt: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        evt.preventDefault()
        dispatch(sendNewDessert({
            name: name.value,
            url: url.value,
            hasStevia: hasStevia.value,
            hasTopinambura: hasTopinambura.value,
            fewCalories: fewCalories.value,
            vegan: vegan.value,
            withoutFlour: withoutFlour.value,
            withoutEggs: withoutEggs.value,
            withoutGluten: withoutGluten.value,
            withoutMilk: withoutMilk.value,
            ingredients: ingredients,
            id: uuidv4(),
            info: {
                kkal: Number(kkal.value),
                p: Number(p.value),
                f: Number(f.value),
                c: Number(c.value)
            }
        }))
    }

    return (
        <form className={styles.container}>
            <BaseInput input={name} type="text" name="nameOfDessert" placeholder="название позиции" text="наименование" />
            <BaseInput input={url} type="url" name="url" placeholder="url" text="изображение" />
            <BaseInput input={kkal} type="number" name="kkal" placeholder="kkal/100г" text="калории" />
            <BaseInput input={p} type="number" name="p" placeholder="белок/100г" text='белок' />
            <BaseInput input={f} type="number" name="f" placeholder="жиры/100г" text='жиры' />
            <BaseInput input={c} type="number" name="c" placeholder="углеводы/100г" text="углеводы" />
            <BaseInput input={ingredientsInput} type="text" name="ingredients" placeholder="молоко, яйца, стевия" text="ингредиенты" />
            <div className={styles.checkboxContainer}>
                <CheckboxInput input={withoutFlour} text="без муки" />
                <CheckboxInput input={fewCalories} text="низкоколорийный" />
                <CheckboxInput input={vegan} text="веганский" />
                <CheckboxInput input={withoutEggs} text="без яиц" />
                <CheckboxInput input={withoutMilk} text="без молока" />
                <CheckboxInput input={withoutGluten} text="без глютена" />
            </div>
            <div className={styles.checkboxContainer}>
                <CheckboxInput input={hasStevia} text="есть стевия" />
                <CheckboxInput input={hasTopinambura} text="есть топинамбура" />
            </div>
            <button disabled={validity} className={styles.submit} onClick={(e) => { sendDessert(e) }} type="submit">Добавить дессерт</button>
        </form>
    )
}

export default AddDessertPopup