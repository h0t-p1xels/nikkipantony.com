/*
 * SocialLinks Molecule Component Story
 *
 */

import React from "react"
import Component from "./SocialLinks"

export default {
    title: "Molecules/SocialLinks",
    component: Component,
    parameters: {
        docs: {
            description: {
                component: "SocialLinks component.",
            },
        },
    },
    // argTypes: {
        // text: {
        //     description: "SocialLinks text",
        //     defaultValue: "SocialLinks",
        // },
        // modifier: {
        //     description: "Modifier options",
        //     control: {
        //         type: "select",
        //         labels: {
        //             "": "no modifier",
        //         },
        //     },
        // },
    // },
}

export const SocialLinks = args => <Component {...args} />
