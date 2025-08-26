import globals from 'globals'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'
import eslint from '@eslint/js'

export default defineConfig([
  globalIgnores(['**/build/*', '**/node_modules/*', '**/public/*']),
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
    plugins: { '@typescript-eslint': tseslint.plugin },
    extends: [eslint.configs.recommended, tseslint.configs.recommended],
    languageOptions: {
      globals: globals.node,
      parser: tseslint.parser,
      parserOptions: { ecmaVersion: 'latest', sourceType: 'module' }
    },
    rules: {
      // Contoh: mengganti aturan default
      'no-unused-vars': 'warn'
    }
  }
])
