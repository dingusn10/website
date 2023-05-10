/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly SPOTIFY_ID: string
    readonly SPOTIFY_KEY: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}