---
to: src/2_Atoms/<%= name %>/<%= name %>.stories.js
---

/*
 * <%= name %> Atom Component Story
 *
 */

import React from "react"
import Component from "./<%= name %>"

export default {
    title: "Atoms/<%= name %>",
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
