import { FacebookLogo, InstagramLogo } from '@phosphor-icons/react'
import './Footer.css'

export function Footer() {
    return (
        <footer>
            <div>
                <a href="https:/www.facebook.com">
                    <FacebookLogo /></a>
                <a href="https://www.instagram.com">
                    <InstagramLogo /></a>
            </div>
        </footer>
    )
}