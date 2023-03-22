import { NavLink } from "react-router-dom";

export function Answer() {
    return (
        <main>
            <h1>Resposta</h1>

            <NavLink to="/">
                <button>Voltar</button>
            </NavLink>
        </main>
    )
}