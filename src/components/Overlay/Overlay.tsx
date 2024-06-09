import React, { ReactNode, useEffect } from "react";
import styles from './Overlay.module.css';

const Overlay: React.FC<Props> = ({handleClose, children}) => {

    function closePopupByKey(evt: KeyboardEvent) {
        if (evt.key === 'Escape') {
            handleClose()
        }
    }

    useEffect(() => {
        document.addEventListener('keydown', closePopupByKey)

        return () => {
            document.removeEventListener('keydown', closePopupByKey)
        }
    }, [])

    return(
        <div className={styles.container} onClick={handleClose}>
            {children}
        </div>
    )
}

type Props = {
    handleClose: any;
    children?: ReactNode
}

export default Overlay
