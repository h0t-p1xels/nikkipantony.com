import React from "react"
import Icon from "../../03_Atoms/Icon/Icon"

const Contact = () => {
    return (
        <ul className="contact-details">
            <li>
                <Icon
                    name="mail"
                    label="Email symbol, To contact Nikki Pantony send email to:"
                />
                <a href="mailto:hello@nikkipantony.com">
                    hello@nikkipantony.com
                </a>
            </li>
            <li>
                <Icon
                    name="marker"
                    label="Map marker symbol, Click to open google map of where Nikki Pantony is based, opens in new tab"
                />
                <a
                    href="https://goo.gl/maps/xerYc51j4YC1KzWg8"
                    target="_blank"
                    rel="noreferrer"
                >
                    Remote / North East Coast of England, UK
                </a>
            </li>
        </ul>
    )
}

export default Contact
