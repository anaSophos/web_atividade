import styles from './TextoPrimario.module.css'

function TextoPrimario({children}){
    return(
        <div className={styles.texto}>
                {children}
        </div>
    )
}

export default TextoPrimario;