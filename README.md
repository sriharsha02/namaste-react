# 🚀 Namaste React – Episode 01: Inception

---

## 📚 Topics Covered

- Setting up VS Code workspace
- Creating an HTML + JavaScript base project
- Adding React and ReactDOM via CDN links
- Understanding `React.createElement()`
- Creating a basic nested React element tree
- Rendering the tree using `ReactDOM.createRoot().render()`

---

# 🚀 Namaste React – Episode 02: Igniting Our App

---

## 📚 Topics Covered

- How to set up a React project using **Parcel**
- What `npx`, `npm init`, and `npm install` do
- Difference between `dependencies` and `devDependencies`
- What `node_modules`, `package.json`, `package-lock.json`, and `.gitignore` are
- Entry point: why we use `index.js` with `<script type="module">`
- Using `ReactDOM.createRoot()` and `.render()`
- Hot Module Replacement (HMR), Tree Shaking, Asset Optimization (minification, compression, etc.)

---





## 🛠️ Project Setup with Parcel (Step-by-Step)
### 1. Initialize npm
npm init -y

### 2. Install React & ReactDOM
npm install react react-dom

### 3. Install Parcel bundler and rimraf (for cleaning cache)
npm install --save-dev parcel rimraf

### 4. Create the following files:
 - index.html
 - index.js
 - App.js
 -  Then set up basic boilerplate code inside them

### 5. Add these scripts to your package.json:

"scripts": {
  "clean": "rimraf .parcel-cache dist",
  "start": "npm run clean && parcel index.html"
}


### 6. Run the project
npm start
