import React from "react"
import Icon from "../../03_Atoms/Icon/Icon"

const SocialIcons = () => {
    return (
        <ul className="social-icons">
            <li>
                <a
                    aria-label="Visit Instgram profile. Opens in a new tab"
                    href="https://www.instagram.com/nikkipantony/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <Icon name="instagram" />
                </a>
            </li>
            <li>
                <a
                    aria-label="Visit Twitter profile. Opens in a new tab"
                    href="https://twitter.com/nikkipantony"
                    target="_blank"
                    rel="noreferrer"
                >
                    <Icon name="twitter" />
                </a>
            </li>
            <li>
                <a
                    aria-label="Visit LinkedIn profile. Opens in a new tab"
                    href="https://www.linkedin.com/in/nikkipantony/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <Icon name="linkedin" />
                </a>
            </li>
            <li>
                <a
                    aria-label="Visit GitHub profile, Opens in a new tab"
                    href="https://github.com/nikkipantony"
                    target="_blank"
                    rel="noreferrer"
                >
                    <Icon name="github" />
                </a>
            </li>
            <li>
                <a
                    aria-label="Visit Medium profile. Opens in a new tab"
                    href="https://medium.com/@nikkipantony"
                    target="_blank"
                    rel="noreferrer"
                >
                    <Icon name="medium" />
                </a>
            </li>
        </ul>
    )
}

export default SocialIcons
