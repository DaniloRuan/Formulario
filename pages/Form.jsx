import styles from "./form.module.css"

function Form() {
    return(
        <div>
            <div className={styles.formulario}>
                <h1>Login</h1>
                <form action="" method="post">
                    <label htmlFor="Email">Email</label>
                    <input type="text" />
                    <label htmlFor="Senha">Senha</label>
                    <input type="Password" />
                    <button type="submit">Enviar</button>
                </form>
            </div>
        </div>
    )
}

export default Form