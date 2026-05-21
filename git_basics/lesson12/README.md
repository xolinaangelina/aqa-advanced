# Lesson 12 - ESLint, Prettier, Husky

## Що встановлено:

- **ESLint** - перевірка якості коду
- **Prettier** - форматування коду
- **Husky** - pre-commit hooks
- **lint-staged** - запуск лінтера тільки на змінених файлах

## Конфігурація:

- `.eslintrc.json` - правила ESLint
- `.prettierrc` - правила Prettier
- `.husky/pre-commit` - hook запускає eslint перед кожним комітом

## Команди:

- `npm run lint` - перевірка коду
- `npm run lint:fix` - автовиправлення
- `npm run format` - форматування
