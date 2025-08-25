import globals from 'globals'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['**/build/*', '**/node_modules/*', '**/public/*']),
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
    plugins: { '@typescript-eslint': tseslint.plugin },
    extends: ['js/recommended'],
    languageOptions: {
      globals: globals.node,
      parser: tseslint.parser,
      parserOptions: { ecmaVersion: 'latest', sourceType: 'module' }
    }
  },
  tseslint.configs.recommended
])
