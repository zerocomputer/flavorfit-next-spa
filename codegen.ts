
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  ignoreNoDocuments: true,
  schema: "http://localhost:3080/graphql",
  documents: "src/graphql/**/*.graphql",
  generates: {
    "src/__generated/output.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
      config: {
        enumsAsConst: true,
      }
    },
    "schema.json": {
      plugins: ['introspection']
    }
  }
};

export default config;
