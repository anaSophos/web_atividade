import styles from './TextoSecundario.module.css'

function TextoSecundario({children}){
    return(
        <div className={styles.texto}>
                {children}
        </div>
    )
}

export default TextoSecundario