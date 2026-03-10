import { defineConfig } from 'orval'

export default defineConfig({
  miningApi: {
    input: {
      target: process.env.VITE_API_BASE_URL
        ? `${process.env.VITE_API_BASE_URL}/openapi.json`
        : 'http://172.16.2.31:8000/openapi.json',
    },
    output: {
      mode: 'tags-split',
      target: 'src/api/generated/endpoints',
      schemas: 'src/api/generated/models',
      client: 'axios',
      httpClient: 'axios',
      override: {
        mutator: {
          path: 'src/api/client.ts',
          name: 'default',
        },
      },
      clean: true,
    },
    hooks: {
      afterAllFilesWrite: 'prettier --write src/api/generated',
    },
  },
})
