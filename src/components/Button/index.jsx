import styles from './Button.module.css'

function ButtonCalcular({title, onClick}){
    return(
        <div className={styles.base}>
            <button className={styles.button} type="submit" onClick={onClick}>{title}</button>
        </div>
    )
}
export default ButtonCalcular;