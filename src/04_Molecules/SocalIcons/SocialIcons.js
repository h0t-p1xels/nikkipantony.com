import React from "react"
import Icon from "../../03_Atoms/Icon/Icon"

const SocialIcons = () => {
    return (
        <ul className="social-icons">
            <li>
                <a
                    aria-label="Instgram logo, Click to visit Instgram profile, opens in a new tab"
                    href="https://www.instagram.com/nikkipantony/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <Icon name="instagram" />
                </a>
            </li>
            <li>
                <a
                    aria-label="Twitter logo, Click to visit Twitter profile, opens in a new tab"
                    href="https://twitter.com/nikkipantony"
                    target="_blank"
                    rel="noreferrer"
                >
                    <Icon name="twitter" />
                </a>
            </li>
            <li>
                <a
                    aria-label="Linked Logo, Click to visit LinkedIn profile, opens in a new tab"
                    href="https://www.linkedin.com/in/nikkipantony/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <Icon name="linkedin" />
                </a>
            </li>
            <li>
                <a
                    aria-label="GitHub Logo, Click to visit GitHub profile, opens in a new tab"
                    href="https://github.com/nikkipantony"
                    target="_blank"
                    rel="noreferrer"
                >
                    <Icon name="github" />
                </a>
            </li>
            <li>
                <a
                    aria-label="Medium Logo, Click to open Medium profile, opens in a new tab"
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
