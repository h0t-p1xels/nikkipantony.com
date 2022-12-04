/*
 * Icon Component
 *
 * SVG `symbol` a Good Choice for Icons by Chris Coyier: https://css-tricks.com/svg-symbol-good-choice-icons
 * Creating an SVG Icon System with React by Sarah Drasner: https://css-tricks.com/creating-svg-icon-system-react
 * Accessible SVGs by Heather Migliorisi https://css-tricks.com/accessible-svgs/
 */

import React from "react"
import PropTypes from "prop-types"
import IconsSprite from "./IconSprite.svg"

const Icon = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 24 24"
      focusable="false"
      role="img"
      className={`icon ${props.fill} ${props.modifier} ${props.className}`}
      aria-label={props.label}
    >
      <title>{props.title}</title>
      <use xlinkHref={`${IconsSprite}#${props.name}`} />
    </svg>
  )
}

Icon.defaultProps = {
  name: "",
  title: "",
  fill: "midnight",
  modifier: "",
  label: "",
  className: "",
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  fill: PropTypes.oneOf(["midnight", "snow"]),
  modifier: PropTypes.oneOf(["", "--small"]),
  label: PropTypes.string,
  className: PropTypes.string,
}

export default Icon
