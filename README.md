# Vue-Auth-Frontend

A Vue.js-based authentication UI that communicates with a backend API for user management. This project provides a secure and responsive authentication system, including login, registration, and user dashboard - with state persistence for a smooth user experience.

## Tech Stack

- **Vue.js** – Frontend framework
- **Axios** – HTTP client for API requests
- **Tailwind CSS** – Styling framework
- **Vite** – Fast build tool for Vue.js
- **Pinia** – State management
- **Pinia Persisted State Plugin** – Persistent state storage

## Backend Integration

This frontend is designed to work seamlessly with a Laravel backend. You can find my Laravel implementation here:

[Laravel-Auth-Backend](https://github.com/Tabs467/Laravel-Auth-Backend)

## Project Setup

### Install dependencies

```sh
composer install
```

### Create .env file

```sh
cp .env.example .env
```

### Optionally, create db and run migrations

### Run dev server

```sh
php artisan serve
```
