import { defineConfig } from "vite";
import devtools from "solid-devtools/vite";
import solidPlugin from "vite-plugin-solid";
import UnoCSS from "unocss/vite";
import presetUno from "@unocss/preset-uno";
import presetIcons from "@unocss/preset-icons";

export default defineConfig({
    plugins: [
        devtools({
            autoname: true,
        }),
        solidPlugin(),
        UnoCSS({
            presets: [presetUno(), presetIcons()],
        }),
    ],
});
