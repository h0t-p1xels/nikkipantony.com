import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Avatar = () => {
  return (
    <>
      <StaticImage
        className="avatar"
        src="../../7_Assets/images/nikki-pantony-avatar.jpg"
        alt="Nikki Pantony with trees behind her in the woods."
        placeholder="blurred"
        layout="fixed"
        width={200}
        height={200}
      />
    </>
  )
}

export default Avatar
