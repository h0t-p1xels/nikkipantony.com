import { defineConfig } from 'astro/config';
import react from "@astrojs/react";

// docs: https://www.astroicon.dev/getting-started/
// icon sets: https://icon-sets.iconify.design/?category=General&license=MIT&attribution=false
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), icon({
    include: {
      gg: ["*"], // include full css.gg icon set, please remember to install the icon set first eg: `npm i -D @iconify-json/gg`
      // to include only specific icons use this syntax instead `gg: ["account"]` where `gg` is the set and `account` is the name of the icon
      // for all available icon sets available see: https://icon-sets.iconify.design
      ph: ["*"]
    }
  }),
  ],
});