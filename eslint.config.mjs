import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    // Quais arquivos o ESLint vai verificar
    files: ["**/*.{js,mjs,cjs}"],
    // Extende as regras recomendadas do ESLint para JS
    extends: [js.configs.recommended],
    // Define o ambiente (Node + ES2021 + Jest)
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.es2021,
        ...globals.jest
      },
      sourceType: "commonjs"
    },
    rules: {
      // 👇 Regras úteis e leves para Node
      "no-unused-vars": ["warn", { "argsIgnorePattern": "^_" }],
      "no-console": "off", // pode usar console.log
      "no-undef": "off", // evita erro com require/module/process
      // Estilo opcional (você pode ajustar)
      "quotes": ["warn", "single"],
      "semi": ["warn", "always"]
    }
  }
]);
