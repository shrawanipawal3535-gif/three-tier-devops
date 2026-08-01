# 🚀 Three-Tier DevOps Project

A complete Three-Tier Application deployed using Docker, Kubernetes, Jenkins CI/CD, and monitored with Prometheus and Grafana.

---

## 📌 Project Overview

This project demonstrates a production-style three-tier architecture consisting of:

- Frontend (HTML/CSS/JavaScript)
- Backend (Node.js + Express)
- MySQL Database

The application is containerized using Docker, deployed on Kubernetes, automated with Jenkins CI/CD, and monitored using Prometheus and Grafana.

---

# 🏗 Architecture

```
             User
               │
               ▼
        Frontend (NodePort)
               │
               ▼
      Backend API (NodePort)
               │
               ▼
       MySQL Database Service
```

---

# ⚙️ Tech Stack

- Linux (Ubuntu)
- AWS EC2
- Git & GitHub
- Docker
- Docker Compose
- Kubernetes (Kind)
- Jenkins
- Node.js
- Express.js
- MySQL
- Prometheus
- Grafana

---

# 📂 Project Structure

```
three-tier-devops/
│
├── backend/
├── frontend/
├── database/
├── kubernetes/
├── jenkins/
├── monitoring/
├── Jenkinsfile
├── docker-compose.yml
├── kind-config.yaml
└── README.md
```

---

# 🚀 Features

- Three-Tier Architecture
- Docker Containerization
- Kubernetes Deployment
- Jenkins CI/CD Pipeline
- Automatic Docker Image Build
- Kubernetes Rollout
- Monitoring with Prometheus
- Dashboard using Grafana

---

# 🔄 CI/CD Pipeline

1. Pull Source Code
2. Build Docker Images
3. Push Images to Docker Hub
4. Deploy to Kubernetes
5. Verify Deployment

---

# ☸ Kubernetes Components

- Deployment
- Services
- Pods
- ReplicaSets
- NodePort Services

---

# 📊 Monitoring

- Prometheus
- Grafana
- Node Exporter
- cAdvisor

---

# ▶️ Run the Project

Clone repository

```bash
git clone https://github.com/shrawanipawal3535-gif/three-tier-devops.git
```

Go to project

```bash
cd three-tier-devops
```

Deploy Kubernetes resources

```bash
kubectl apply -f kubernetes/
```

Check Pods

```bash
kubectl get pods
```

Check Services

```bash
kubectl get svc
```

---

# 📸 Screenshots

Add screenshots here:

- Application: https://github.com/shrawanipawal3535-gif/three-tier-devops/blob/main/screenshots/Screenshot%202026-07-31%20171540.png
- Jenkins Pipeline
- Kubernetes Pods
- Grafana Dashboard
- Prometheus Targets

---

# 👩‍💻 Author

**Shrawani Pawal**

GitHub:
https://github.com/shrawanipawal3535-gif

---

# ⭐ If you like this project

Give this repository a ⭐ on GitHub.
