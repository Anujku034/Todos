# 📝 Todo App

A simple and interactive **Todo application** built with React and Tailwind CSS that allows users to efficiently manage their daily tasks by adding, completing, and deleting Todos.

## 🚀 Live Demo

[Todo App](https://todos-iota-umber.vercel.app/)

## ✨ Features

* ➕ Add new Todos
* ✅ Mark Todos as completed
* 🗑️ Delete Todos
* 🎨 Clean and attractive user interface
* ⚡ Instant UI updates using React state
* 📱 Responsive design
* 🖼️ Custom background image
* 🎯 Interactive checkbox and delete icon

## 🛠️ Technologies Used

* **React.js**
* **JavaScript**
* **Tailwind CSS**
* **Lucide React**
* **Vite**

## 📂 Project Structure

```text
src/
├── assets/
│   └── TodoBgImg.jpg
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```

## ⚙️ Installation

Clone the repository:

```bash
git clone <your-repository-url>
```

Go to the project directory:

```bash
cd todo
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:5173
```

## 🧠 How It Works

The application uses React's `useState` hook to manage the Todo input and Todo list.

Each Todo contains:

```javascript
{
  id: Date.now(),
  text: "Todo task",
  completed: false
}
```

Users can:

1. Enter a task in the input field.
2. Click **Add** to create a Todo.
3. Use the checkbox to mark the Todo as completed.
4. Click the delete icon to remove a Todo.

## 📸 Application

The application provides a simple task-management interface where users can easily add, complete, and delete their daily tasks.

## 🌐 Deployment

The application is deployed using **Vercel**.

Live application:

https://todos-iota-umber.vercel.app/

## 👨‍💻 Author

**Anuj Kumar**

Built with ❤️ using React and Tailwind CSS.
