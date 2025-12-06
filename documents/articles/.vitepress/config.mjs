import { defineConfig } from 'vitepress'
import { sidebar } from './sidebar.mjs'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "AyaExpTech Arsenal",
    description: "A General-purpose JS/TS Library by AyaExpTech",
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: 'Home', link: '/' }
        ],

        sidebar: sidebar,

        socialLinks: [
            { icon: 'github', link: 'https://github.com/AXT-Studio/Arsenal' },
            { icon: 'jsr', link: 'https://jsr.io/@ayaexptech/arsenal' },
        ],
        outline: "deep"
    },

    markdown: {
        math: true,
        breaks: true
    },
    ignoreDeadLinks: true,

    head: [
        ['link', { rel: 'icon', href: '/images/favicon.svg', type: 'image/svg+xml' }]
    ]
})
