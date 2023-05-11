/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly SPOTIFY_ID: string
    readonly SPOTIFY_KEY: string
    readonly PCO_APP_ID: string
    readonly PCO_APP_SECRET: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}