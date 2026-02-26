
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  ignoreNoDocuments: true,
  schema: "http://localhost:3080/graphql",
  documents: [
    "src/features/**/*.graphql",
    "src/shared/**/*.graphql",
  ],
  generates: {
    "./src/__generated__/": { 
      preset: "client",
      plugins: [],
      presetConfig: {
        fragmentMasking: false, 
      }
    }
  }
};

export default config;
