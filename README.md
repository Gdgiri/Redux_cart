# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

- Here's a sample README for your React Redux cart project. This README covers the purpose of the project, setup instructions, and some usage details.

---

# React Redux Cart

## Overview

This project is a simple e-commerce cart application built with React and Redux. It allows users to view products, add them to a cart, and manage the cart's contents. The project demonstrates the use of Redux for state management and integrates Bootstrap for responsive design.

## Features

- Display a list of products with details such as price, description, and images.
- Add products to the cart and manage their quantities.
- View the total quantity and price of products in the cart.
- Responsive design using Bootstrap.

## Tech Stack

- **React**: For building the user interface.
- **Redux**: For state management.
- **Bootstrap**: For styling and responsive design.
- **React-Redux**: For integrating Redux with React.

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/react-redux-cart.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd react-redux-cart
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

## Usage



   This will start the development server and open the application in your default browser. The app will be available at `https://cart-gd.netlify.app/`.

2. **Explore the application:**

   - **Navbar**: Navigate between Home, Products, and Cart pages.
   - **Product List**: View available products and add them to your cart.
   - **Cart**: Manage cart items, adjust quantities, and remove products. View total quantity and price in a sticky header.

## Configuration

The application uses Redux for state management. The product data is stored in `ProducteData`, and the cart state is managed through Redux slices. The main components are:

- **Navbare**: The navigation bar for routing.
- **Cart**: Displays products in the cart with options to manage quantities and remove items.
- **Footers**: The footer section displaying copyright information.
