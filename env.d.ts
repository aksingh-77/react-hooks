interface ImportMetaEnv {
  readonly VITE_PORT: number;
  readonly VITE_API_URL: string;
  readonly VITE_APP_NAME: string;
  readonly VITE_LOG_LEVEL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
