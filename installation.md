
# React Todos — Project Setup & Configuration

This project is a React + TypeScript application built with Vite.  
It includes a complete development environment with routing, API communication, styling, linting, formatting, and a local JSON Server backend.

---

## 🚀 1. Create the Project

```bash
npm create vite@latest react-todos -- --template react-ts
cd react-todos
npm install
📦 2. Installed Dependencies
Runtime dependencies
bash
npm install axios
npm install react-router-dom
npm install bootstrap react-bootstrap
Development dependencies
bash
npm install -D sass
npm install -D json-server
npm install -D prettier eslint-config-prettier eslint-plugin-prettier
npm install -D eslint eslint-plugin-react-hooks eslint-plugin-react-refresh
🗂️ 3. Project Structure
Kod
react-todos/
│
├── data/
│   └── db.json
│
├── src/
│   ├── types/
│   ├── services/
│   ├── components/
│   ├── pages/
│   ├── App.tsx
│   └── main.tsx
│
└── package.json
🛠️ 4. JSON Server Setup
db.json location
The database file is stored inside the data/ folder.

Add script in package.json
json
"server": "json-server --watch data/db.json --port 3000"
Start the backend
bash
npm run server
API endpoint:

Kod
http://localhost:3000/todos
🎨 5. Bootstrap Setup
Import Bootstrap in src/main.tsx:

ts
import 'bootstrap/dist/css/bootstrap.min.css'
React Bootstrap components are available globally.

🧭 6. React Router Setup
Wrap the app in BrowserRouter:

tsx
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
Define routes in App.tsx:

tsx
import { Routes, Route } from 'react-router-dom'

<Routes>
  <Route path="/" element={<TodoList />} />
  <Route path="/add" element={<AddTodo />} />
</Routes>
🧹 7. ESLint + Prettier Configuration
.prettierrc
json
{
  "semi": false,
  "singleQuote": true,
  "trailingComma": "es5",
  "tabWidth": 2,
  "printWidth": 100
}
.prettierignore
Kod
node_modules
dist
build
coverage
ESLint integration
Add to .eslintrc:

json
"extends": [
  "eslint:recommended",
  "plugin:react-hooks/recommended",
  "plugin:react-refresh/recommended",
  "plugin:prettier/recommended"
]
🌀 8. Spinner Component
React Bootstrap spinner example:

tsx
import Spinner from 'react-bootstrap/Spinner'

<Spinner animation="border" />
▶️ 9. Start the App
Start frontend
bash
npm run dev
Start backend
bash
npm run server
✔️ 10. Summary
This project includes:

React + TypeScript (Vite)

Axios for API requests

JSON Server as a local backend

React Router for navigation

Bootstrap + React Bootstrap for UI

SASS support

ESLint + Prettier for clean code

Spinner component for loading states

Everything is fully configured and ready for development.

Terminal
npm run lint
npm run lint:fix
npm run format
npm run format:fix
npm run fix
