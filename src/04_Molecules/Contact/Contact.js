import React from "react"
import Icon from "../../03_Atoms/Icon/Icon"

const Contact = () => {
    return (
        <ul className="contact-details">
            <li>
                <Icon name="mail" label="Send email" />
                <a href="mailto:hello@nikkipantony.com">
                    <span className="sr-only">
                        To contact Nikki Pantony send email to{" "}
                    </span>
                    hello@nikkipantony.com
                </a>
            </li>
            <li>
                <Icon name="marker" label="Open google map" />
                <a
                    href="https://goo.gl/maps/xerYc51j4YC1KzWg8"
                    target="_blank"
                    rel="noreferrer"
                >
                    <span className="sr-only">
                        Nikki Pantony works from the{" "}
                    </span>
                    North East Coast of England, UK
                    <span className="sr-only">
                        . Link opens google map in a new tab
                    </span>
                </a>
            </li>
        </ul>
    )
}

export default Contact
