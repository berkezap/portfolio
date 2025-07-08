# 🎯 Portfolio Website

Modern, responsive portfolio website with Java Spring Boot backend and Next.js frontend.

## 🚀 Quick Start

### Backend (Spring Boot)
```bash
cd portfolio-backend
mvn spring-boot:run
```
Backend runs on: `http://localhost:8080`

### Frontend (Next.js)
```bash
cd portfolio-frontend
npm install
npm run dev
```
Frontend runs on: `http://localhost:3000`

## 🛠️ Tech Stack

### Backend
- **Java 17** with Spring Boot 3.2
- **Spring Security** for CORS management
- **Spring Data JPA** with Hibernate
- **H2 Database** (in-memory for development)
- **Maven** for dependency management

### Frontend  
- **Next.js 15** with TypeScript
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **Lucide React** for icons
- **Dark/Light theme** support
- **Xbox Gaming theme** toggle

## 🎮 Features

- **Responsive Design**: Mobile-first approach
- **Dark/Light Mode**: System preference detection
- **Xbox Gaming Theme**: Unique gaming-inspired UI
- **Smooth Animations**: Framer Motion powered
- **Modern UI**: Clean, professional design
- **API Ready**: Backend endpoints for dynamic content

## 📁 Project Structure

```
portfolio/
├── portfolio-backend/     # Java Spring Boot API
│   ├── src/main/java/    # Java source code
│   ├── src/main/resources/ # Application properties
│   ├── pom.xml           # Maven dependencies
│   └── railway.toml      # Railway deployment config
└── portfolio-frontend/   # Next.js React app
    ├── src/app/         # Next.js app directory
    ├── src/components/  # React components
    ├── src/data/        # Static data
    ├── package.json     # Node.js dependencies
    └── vercel.json      # Vercel deployment config
```

## 🌐 Deployment

### Backend - Railway
The backend is configured for Railway deployment with PostgreSQL database support.

### Frontend - Vercel  
The frontend is optimized for Vercel deployment with automatic CI/CD.

## 👨‍💻 Developer

**İhsan Berke Özşap**
- Email: berke.ozsap@gmail.com
- LinkedIn: [berke-ozsap](https://linkedin.com/in/berke-ozsap)
- GitHub: [berkezap](https://github.com/berkezap)

## 📝 License

This project is open source and available under the [MIT License](LICENSE). 