import { FormEvent, useState } from 'react'
import './Contacts.css'

export function Contacts() {
    return (
        <main className="contacts-container">
            <h3>Entre em Contato</h3>
            <p>Mande aqui sua duvida de projetos, orçamento e sujestões.</p>
            <form action="https://formsubmit.co/henrique@studioahga.arq.br" method="POST">
                <label>

                    <input
                        type="hidden"
                        name="_next"
                        value="https://studio-ahga.vercel.app/answer"
                    />

                    <input
                        type="hidden"
                        name="_autoresponse"
                        value="Mensagem Recebida com sucesso. Logo entrarei em contato."
                    />

                    <input
                        type="text"
                        name="Nome"
                        placeholder='Nome'
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder='Email'
                    />

                    <input
                        type="text"
                        name="Sobre"
                        placeholder='Sobre'
                    />

                    <textarea
                        name="Mensagem"
                        id="mensage"
                        placeholder='Insira sua mensagem'
                    />
                </label>

                <button type='submit'>Enviar mensagem</button>

            </form>
        </main>
    )
}