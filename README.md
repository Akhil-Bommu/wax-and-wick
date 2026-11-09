# 🕯️ Wax & Wick

A simple candle store website built as a **DevOps course project**. The website is small on purpose. The focus is on the DevOps workflow around it: version control, project management, automated testing, a CI/CD pipeline, Docker and deployment.

🔗 **Live website:** https://akhil-bommu.github.io/wax-and-wick/

---

## 📌 About the Project

Wax & Wick shows a collection of handmade candles for different parties, gifts and festivals, with sizes, types and prices. Every time code is pushed to GitHub, the pipeline automatically tests it and builds a Docker image.

## 🛠️ Tech Stack

| Area | Tool |
|---|---|
| Website | HTML, CSS, JavaScript |
| Version control | Git and GitHub |
| Project management | GitHub Projects (board) |
| Testing | Node.js with the built-in `assert` module |
| CI/CD pipeline | GitHub Actions |
| Containerization | Docker (nginx) |
| Deployment | GitHub Pages |
| Editor | Visual Studio Code |

## 📁 Project Structure

```
wax-and-wick/
├── .github/workflows/ci.yml   # CI/CD pipeline
├── docs/screenshots/          # Screenshots used in this README
├── Dockerfile                 # Docker image recipe
├── index.html                 # Website page
├── package.json               # Test command
├── README.md
├── script.js                  # Candle data and page logic
├── style.css                  # Website styling
└── test.js                    # Automated tests
```

## ⚙️ DevOps Workflow

```
Code push → Run tests → Build Docker image → Website live on GitHub Pages
```

### 1. Version Control (Git and GitHub)
All code is stored in this GitHub repository. Each change is saved as a commit, so the full history is tracked.

![GitHub repository](docs/screenshots/9-github-repo.png)

### 2. Project Management (GitHub Projects)
Tasks were planned and tracked on a Kanban board with To Do, Doing and Done columns.

![Project board](docs/screenshots/7-project-board.png)

### 3. Automated Testing
`test.js` checks that the candle list has at least 6 items, that every candle has a name, size and valid type, and that every price is a positive number. Run it with `npm test`.

![Test output](docs/screenshots/3-pipeline-test-output.png)

### 4. CI/CD Pipeline (GitHub Actions)
The pipeline in `.github/workflows/ci.yml` runs on every push to `main`. It has two jobs:

1. **build-and-test:** downloads the code, sets up Node.js and runs the tests.
2. **docker-build:** runs only if the tests pass. It builds the Docker image, starts the container and checks that the website responds.

![Actions list](docs/screenshots/1-actions-list.png)

![build-and-test steps](docs/screenshots/2-job-steps.png)

![Two jobs passed](docs/screenshots/4-two-jobs.png)

### 5. Containerization (Docker)
The `Dockerfile` packages the website into an nginx container, so it runs the same on any machine.

![Docker job steps](docs/screenshots/5-docker-steps.png)

### 6. Deployment (GitHub Pages)
The website is deployed from the `main` branch with GitHub Pages and is available to everyone online.

![Live website](docs/screenshots/6-live-website.png)

## ▶️ How to Run

**Run the website locally**
1. Clone the repository:
   ```
   git clone https://github.com/Akhil-Bommu/wax-and-wick.git
   cd wax-and-wick
   ```
2. Open `index.html` in a browser (or use the Live Server extension in VS Code).

**Run the tests** (needs Node.js)
```
npm test
```

**Run with Docker** (needs Docker Desktop)
```
docker build -t wax-and-wick .
docker run -d -p 8080:80 wax-and-wick
```
Then open http://localhost:8080

## 👥 Team

| Member | DevOps Part |
|---|---|
| Akhil Bommu | Version control, overall project |
| Member 2 name | Project management |
| Member 3 name | Automated testing |
| Member 4 name | CI/CD pipeline |
| Member 5 name | Docker and deployment |

## 📚 Course Outcomes Covered
- DevOps components and the CI/CD workflow
- Version control and project management tools
- Testing and automated pipelines
- Containerization and deployment

---
*Wax & Wick, DevOps Course Project*
