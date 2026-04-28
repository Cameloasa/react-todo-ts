
# Contributing Guidelines

Thank you for contributing to this project!  
To keep the codebase clean, consistent, and easy to maintain, please follow the guidelines below.

---

## 📦 Project Requirements

Before contributing, make sure you have installed:

- Node.js (LTS recommended)
- npm
- Git

Install project dependencies:

```bash
npm install
🧹 Code Quality Standards
This project uses:

TypeScript for type safety

ESLint for code linting

Prettier for code formatting

Husky for Git hooks

lint-staged for running checks only on staged files

All code must pass linting and formatting before it can be committed.

🐶 Husky + lint-staged
Husky automatically runs before every commit.

The following checks are executed:

ESLint (eslint --fix)

Prettier (prettier --write)

Only staged .ts and .tsx files are processed.

If any errors remain after auto-fixing, the commit will be blocked until they are resolved.

🧪 Running Checks Manually
Lint the entire project:
bash
npm run lint
Fix lint issues:
bash
npm run lint:fix
Check formatting:
bash
npm run format
Format all files:
bash
npm run format:fix
Run both lint + format fixes:
bash
npm run fix
🧭 Git Workflow
1. Create a new branch
bash
git checkout -b feature/my-feature
2. Make your changes
Follow TypeScript, ESLint, and Prettier rules.

3. Stage your changes
bash
git add .
4. Commit
Husky will run lint-staged automatically.

bash
git commit -m "Add: new feature"
If the commit fails, fix the issues and try again.

5. Push your branch
bash
git push origin feature/my-feature
6. Open a Pull Request
Describe clearly what you changed and why.

🧱 Code Style
Use TypeScript everywhere.

Prefer functional components and React Hooks.

Keep components small and focused.

Use Axios services for API calls.

Use Bootstrap / React Bootstrap for UI.

Use SASS for custom styling.

Avoid unnecessary re-renders (React DevTools can help).

🗂️ Folder Structure
Kod
src/
  components/
  pages/
  services/
  types/
  hooks/
  styles/
components/ → reusable UI components

pages/ → route-level components

services/ → API logic (Axios)

types/ → TypeScript interfaces

styles/ → SASS files

✔️ Summary
By following these guidelines, you help maintain:

clean code

consistent formatting

predictable behavior

easy collaboration

professional project structure

Thank you for contributing!