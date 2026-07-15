# ⏱️ TimeOn

> A modern, self-hosted time tracking and productivity platform built for individuals, teams, freelancers, and organizations.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Status](https://img.shields.io/badge/status-Under%20Development-orange)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)
![React](https://img.shields.io/badge/React-19-61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-Express-green)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Prisma-336791)

---

## 📖 Overview

TimeOn is an open-source, self-hosted time tracking and productivity platform inspired by applications like **Solidtime**, **Clockify**, and **Toggl Track**.

Rather than focusing on billing and invoicing, TimeOn is designed to help users understand where their time goes, stay focused, and manage projects more effectively.

This project is also being developed as a learning journey to gain hands-on experience with modern full-stack development, software architecture, DevOps, Docker, CI/CD, and production deployment.

---

## ✨ Features

### ⏱️ Time Tracking
- Quick Start Timer
- Manual Time Entries
- Edit & Delete Entries
- Running Timer
- Time History

### 📁 Project Management
- Self Projects
- Client Projects
- Project Organization
- Project Status
- Project Colors

### ✅ Task Management
- Tasks belong to Projects
- To Do
- In Progress
- Completed
- Time Tracking per Task

### 👥 Organizations
- Multiple Organizations
- Member Management
- Organization Switching
- Role-Based Access Control

### 🔐 Authentication
- Email & Password
- JWT Authentication
- Password Reset
- Email Verification

### 📊 Dashboard & Reports
- Daily Summary
- Weekly Summary
- Monthly Summary
- Productivity Analytics
- Export Reports

### 📦 Self Hosting
- Docker
- Docker Compose
- Traefik Reverse Proxy
- Environment Variables

---

# 🚀 Tech Stack

## Frontend

- React
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui
- Zustand
- TanStack Query
- Axios

## Backend

- Node.js
- Express.js
- TypeScript

## Database

- PostgreSQL
- Prisma ORM

## DevOps

- Docker
- Docker Compose
- Traefik
- GitHub Actions

---

# 🏗️ Architecture

```
React
   │
REST API
   │
Express
   │
Prisma ORM
   │
PostgreSQL
```

---

# 📂 Project Structure

```
timeon/
│
├── frontend/
├── backend/
├── docker/
├── traefik/
├── docs/
├── .github/
│   └── workflows/
│
├── docker-compose.yml
└── README.md
```

---

# 🎯 Product Vision

TimeOn is designed around one simple philosophy:

> **Capture time first. Organize it later.**

Unlike traditional time trackers that require selecting projects or tasks before starting work, TimeOn allows users to start tracking immediately and categorize their work afterward.

The platform supports:

- 👤 Personal Productivity
- 🎓 Students
- 💼 Freelancers
- 🏢 Teams
- 🏭 Organizations

using the same simple workflow.

---

# 🏢 Core Structure

```
Account
    │
Organization
    │
Projects
    │
Tasks
    │
Time Entries
```

Each account can belong to multiple organizations.

Projects can be either:

- Self Project
- Client Project

Tasks always belong to a project.

---

# ⚡ Core Principles

- Quick Start Timer
- Project-Centric Task Workflow
- Multiple Organizations
- Optional Client Management
- Self Hosting First
- Export Your Data
- Clean & Modern UI
- Production Ready Architecture

---

# 🛣️ Development Roadmap

- [x] Project Planning
- [x] Product Architecture
- [x] Technology Selection
- [ ] Sprint 0 – Foundation Setup
- [ ] Authentication
- [ ] Organizations
- [ ] Projects
- [ ] Tasks
- [ ] Time Tracking
- [ ] Dashboard
- [ ] Reports
- [ ] Export System
- [ ] Docker Deployment
- [ ] CI/CD
- [ ] Production Release

---

# 🚀 Getting Started

## Clone Repository

```bash
git clone https://github.com/madhanvp/timeon.git
```

```bash
cd timeon
```

---

## Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## Backend

```bash
cd backend
npm install
npm run dev
```

---

## Docker

```bash
docker compose up -d
```

---

# 🤝 Contributing

Contributions, suggestions, and feedback are always welcome.

If you'd like to contribute:

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push the branch
5. Open a Pull Request

---

# 📚 Learning Goals

This project is intentionally being built from scratch to learn:

- Full Stack Development
- TypeScript
- React
- Express.js
- PostgreSQL
- Prisma ORM
- Docker
- Linux
- DevOps
- CI/CD
- Production Deployment
- Software Architecture

---

# 📄 License

This project is licensed under the MIT License.

---

# ⭐ Support

If you like this project, consider giving it a ⭐ on GitHub.

It helps support the project and motivates future development.

---

Made with ❤️ by **Madhan**