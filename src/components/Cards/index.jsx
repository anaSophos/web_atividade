import styles from './Input.module.css'

function Input({onChange}){

    return(
        <div className={styles.base}>
            <input className={styles.inputNumber} type='number' onChange={onChange}>
            </input>
        </div>
    )
}
export default Input;