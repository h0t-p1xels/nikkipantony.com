---
to: src/4_Organisms/<%= name %>/<%= name %>.stories.js
---

/*
 * <%= name %> Organism Component Story
 *
 */

import React from "react"
import Component from "./<%= name %>"

export default {
    title: "Organisms/<%= name %>",
    component: Component,
    parameters: {
        docs: {
            description: {
                component: "<%= name %> component.",
            },
        },
    },
    // argTypes: {
        // text: {
        //     description: "<%= name %> text",
        //     defaultValue: "<%= name %>",
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

export const <%= name %> = args => <Component {...args} />
