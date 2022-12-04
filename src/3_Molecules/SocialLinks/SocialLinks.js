/*
 * SocialLinks Molecule Component
 *
 */

import React from "react"
import Icon from "../../2_Atoms/Icon/Icon"

const SocialLinks = () => {
  return (
    <address className="social-links">
      <ul className="social-links__list">
        <li>
          <a href="mailto:hello@nikkipantony.com">
            <Icon name="mail" title="hello@nikkipantony.com" />
            <span className="sr-only">
              Send email to hello@nikkipantony.com
            </span>
          </a>
        </li>
        <li>
          <a
            aria-label="Visit LinkedIn profile. Opens in a new tab"
            href="https://www.linkedin.com/in/nikkipantony/"
            target="_blank"
            rel="noreferrer"
          >
            <Icon name="linkedin" title="LinkedIn" />
            <span className="sr-only">Open LinkedIn profile</span>
          </a>
        </li>
        <li>
          <a
            aria-label="Visit GitHub profile, Opens in a new tab"
            href="https://github.com/nikkipantony"
            target="_blank"
            rel="noreferrer"
          >
            <Icon name="github" title="GitHub" className="github-icon" />
            <span className="sr-only">Open GitHub profile</span>
          </a>
        </li>
        <li>
          <a
            aria-label="Visit Instagram profile. Opens in a new tab"
            href="https://www.instagram.com/nikkipantony/"
            target="_blank"
            rel="noreferrer"
          >
            <Icon name="instagram" title="Instagram" />
            <span className="sr-only">Open Instagram profile</span>
          </a>
        </li>
        <li>
          <a
            aria-label="Visit Twitter profile. Opens in a new tab"
            href="https://twitter.com/nikkipantony"
            target="_blank"
            rel="noreferrer"
          >
            <Icon name="twitter" title="Twitter" />
            <span className="sr-only">Open Twitter profile</span>
          </a>
        </li>
      </ul>
    </address>
  )
}

export default SocialLinks
