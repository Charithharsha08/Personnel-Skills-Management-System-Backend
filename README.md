# 🚀 Personnel Skills Management System – Backend
(Node.js + Express + MySQL)

A backend API built for a consultancy/tech agency to manage personnel, skills, projects, and match team members to project requirements.
This system supports full CRUD operations for personnel, skills, projects, and includes a matching algorithm to recommend the best personnel for a given project.

---

## 📌 Project Overview

This backend provides RESTful APIs for:

### ✔ Personnel Management

* Create, read, update, delete personnel
* Assign skills with proficiency levels

### ✔ Skill Management

* Skill catalog CRUD
* Assign skills to personnel

### ✔ Project Management

* Create and manage projects
* Define required skills with minimum proficiency

### ✔ Matching Engine

* Suggest best personnel for a project
* Filters based on skill + proficiency
* Returns matched personnel with skill breakdown

This backend is designed to work with a React.js frontend.

---

## 🛠️ Tech Stack

| Layer             | Technology                        |
| ----------------- | --------------------------------- |
| Backend Framework | **Node.js + Express.js**          |
| Database          | **MySQL**                         |
| ORM/Query Layer   | MySQL                             |
| Language          | TypeScript                        |
| Tools             | Nodemon, dotenv                   |

---

## 📂 Project Structure

```
/src
 ├── controllers/
 ├── services/
 ├── repositories/
 ├── routes/
 ├── config/
 ├── index.ts
```

---

## 📦 Prerequisites

Make sure you have installed:

* **Node.js 18+**
* **MySQL 8+**
* **npm or yarn**

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/charithharsha08/personnel-skills-backend.git
cd personnel-skills-backend
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Configure Environment Variables

Create a `.env` file in the root:

```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=personnel_skills
PORT=5000
```

### 4️⃣ Set Up Database

Create the database:

```sql
CREATE DATABASE personnel_skills;
```

Run the schema:

```bash
# In MySQL CLI
SOURCE database/schema.sql;
```

### 5️⃣ Start the Backend

```bash
npm run dev
```

---

# 📡 API Endpoints Documentation

## 1. Personnel Endpoints

| Method | Endpoint             | Description          |
| ------ | -------------------- | -------------------- |
| POST   | `/api/personnel`     | Create new personnel |
| GET    | `/api/personnel`     | Get all personnel    |
| GET    | `/api/personnel/:id` | Get single personnel |
| PUT    | `/api/personnel/:id` | Update personnel     |
| DELETE | `/api/personnel/:id` | Delete personnel     |

---

## 2. Skills Endpoints

| Method | Endpoint          | Description      |
| ------ | ----------------- | ---------------- |
| POST   | `/api/skills`     | Create new skill |
| GET    | `/api/skills`     | Get all skills   |
| PUT    | `/api/skills/:id` | Update a skill   |
| DELETE | `/api/skills/:id` | Delete a skill   |

---

## 3. Skill Assignment

| Method | Endpoint                          | Description               |
| ------ | --------------------------------- | ------------------------- |
| POST   | `/api/personnel/:id/assign-skill` | Assign skill to personnel |
| GET    | `/api/personnel/:id/skills`       | View assigned skills      |

---

## 4. Project Endpoints

| Method | Endpoint                   | Description            |
| ------ | -------------------------- | ---------------------- |
| POST   | `/api/projects`            | Create new project     |
| GET    | `/api/projects`            | List all projects      |
| POST   | `/api/projects/:id/skills` | Assign required skills |

---

## 5. Matching Endpoint

| Method | Endpoint                  | Description                |
| ------ | ------------------------- | -------------------------- |
| GET    | `/api/projects/:id/match` | Get best personnel matches |

---

# 🗂️ Database Schema (Included in schema.sql)

* personnel
* skills
* personnel_skills
* projects
* project_required_skills

All relationships include foreign keys and cascading rules.

---

# 📸 API Testing Screenshots

> Add the following screenshots in your repository’s `/screenshots` folder and embed them:

✔ Creating personnel
✔ Getting all personnel
✔ Updating skill
✔ Assigning skill to personnel
✔ Matching API result

---

# 🌟 Additional Feature (Required by Assignment)

Add a section like this after you implement your creative feature:

## 🎨 Additional Feature – *[Your Feature Name]*

### 🔍 Overview

Explain what your feature does in a few sentences.

### 🧠 Why This Feature?

Explain the real-world benefit.

### ⚙️ Implementation

Brief explanation of how you implemented it.

### 📸 Screenshot

<img width="1680" height="1050" alt="Screenshot 2025-12-03 at 3 59 08 PM" src="https://github.com/user-attachments/assets/251baefa-224e-4e6f-9446-69e9773b4bd0" />

<img width="1680" height="1050" alt="Screenshot 2025-12-03 at 3 59 30 PM" src="https://github.com/user-attachments/assets/adc54e1a-a25f-4c16-95c2-d40fdb8d5db8" />

<img width="1680" height="1050" alt="Screenshot 2025-12-03 at 3 59 46 PM" src="https://github.com/user-attachments/assets/ee9c35e9-75ff-47ee-b551-7238520cc4b6" />




---

# 🧪 Running Tests (Optional)

```
npm test
```

---

# 🙌 Author

**Charith Harsha**
Full-stack Software Engineer

---

