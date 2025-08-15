# 🗞️ NewsExplorer

**Welcome to NewsExplorer**, a delightful React-based web app that lets you search for recent news articles, save your favorites, and manage them in a personal account!

With a clean design and user-friendly interface, NewsExplorer combines functionality with aesthetic appeal.

> Built by **Georgia Lloyd**, this project showcases a blend of full-stack development and a passion for beautiful design.

Visit the deployed page [here](https://joja-peaches.github.io/news-explorer/) 

---

## ✨ Features

- **🔍 Search News**: Find the latest articles by keyword, with results from the past 7 days.  
- **💾 Save Articles**: Logged-in users can save articles to their personal collection.  
- **🔐 User Authentication**: Sign up, sign in, and securely manage your account using local storage.  
- **📱 Responsive Design**: Enjoy a seamless experience on desktop and mobile.  
- **🛡️ Protected Routes**: Access saved articles only when logged in.  
- **⚙️ Dynamic UI**:
  - Modals for sign-up and sign-in
  - Hamburger menu navigation
  - Preloader and not-found states

---

## 🖼️ Screenshots

- **Home Page**: Search Form and About the Author upon landing.
<p align="center">
  <img src="https://iili.io/FD5h9fe.jpg" alt="Landing page for NewsExplorer" width="600" />
</p>

- **Search Results**: Search results with option to see more and save articles.
<p align="center">
  <img src="https://iili.io/FD5h9fe.jpg" alt="Searches within NewsExplorer" width="600" />
</p>

- **Saved Articles**: Save favorite articles to your personal page with option to delete.
<p align="center">
  <img src="https://iili.io/FD5h2Jj.jpg" alt="Saved articles page for NewsExplorer" width="600" />
</p>

---

## 👩‍💻 About the Author

Created by **Georgia Lloyd** — blending clean code with a passion for beautiful, intuitive interfaces. Learn more about the author within the app.

---

## 🛠️ Tech Stack

### Frontend
- [React](https://reactjs.org)
- [React Router](https://reactrouter.com/)
- [Vite](https://vitejs.dev/)

### API
- [News API](https://newsapi.org) (via direct access or a custom proxy in production)

### Styling
- Modular CSS (component-based styles)

### State Management
- React Hooks (`useState`, `useEffect`)
- Context API

### Utilities
- Custom Hooks:
  - `useModalClose`
  - `useFormAndValidation`
- Helper functions for formatting and logic

### Storage
- Local storage for user data and saved articles
