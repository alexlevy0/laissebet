import type { Config } from "tailwindcss"
const defaultTheme = require("tailwindcss/defaultTheme")
import { nextui } from "@nextui-org/react"

const config: Config = {
        mode: "jit",
        darkMode: "class",
        variants: {},
        plugins: [
                nextui(),
                require("@tailwindcss/forms"),
                require("@tailwindcss/aspect-ratio"),
        ],
        content: [
                "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
                "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
                "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
                "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        ],
        theme: {
                extend: {
                        backgroundImage: {
                                "gradient-radial":
                                        "radial-gradient(var(--tw-gradient-stops))",
                                "gradient-conic":
                                        "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
                        },
                        fontFamily: {
                                sans: [
                                        "Raleway",
                                        ...defaultTheme.fontFamily.sans,
                                ],
                        },
                        animation: {
                                "gradient-x": "gradient-x 15s ease infinite",
                                "gradient-y": "gradient-y 15s ease infinite",
                                "gradient-xy": "gradient-xy 15s ease infinite",
                                blob: "blob 7s infinite",
                        },
                        keyframes: {
                                blob: {
                                        "0%": {
                                                transform: "translate(0px, 0px) scale(1)",
                                        },
                                        "33%": {
                                                transform: "translate(50px, -30px) scale(1.1)",
                                        },
                                        "66%": {
                                                transform: "translate(-20px, 20px) scale(0.9)",
                                        },
                                        "100%": {
                                                transform: "translate(0px, 0px) scale(1)",
                                        },
                                },
                                "gradient-y": {
                                        "0%, 100%": {
                                                "background-size": "400% 400%",
                                                "background-position":
                                                        "center top",
                                        },
                                        "50%": {
                                                "background-size": "200% 200%",
                                                "background-position":
                                                        "center center",
                                        },
                                },
                                "gradient-x": {
                                        "0%, 100%": {
                                                "background-size": "200% 200%",
                                                "background-position":
                                                        "left center",
                                        },
                                        "50%": {
                                                "background-size": "200% 200%",
                                                "background-position":
                                                        "right center",
                                        },
                                },
                                "gradient-xy": {
                                        "0%, 100%": {
                                                "background-size": "400% 400%",
                                                "background-position":
                                                        "left center",
                                        },
                                        "50%": {
                                                "background-size": "200% 200%",
                                                "background-position":
                                                        "right center",
                                        },
                                },
                        },
                        colors: {
                                "indian-orange": "#ff8000",
                                green: {
                                        650: "#008000",
                                },
                        },
                },
        },
}
export default config
