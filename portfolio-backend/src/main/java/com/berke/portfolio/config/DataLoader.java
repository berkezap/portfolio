package com.berke.portfolio.config;

import com.berke.portfolio.entity.Experience;
import com.berke.portfolio.entity.Project;
import com.berke.portfolio.repository.ExperienceRepository;
import com.berke.portfolio.repository.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.time.LocalDate;
import java.util.Arrays;
import java.util.List;

@Component
public class DataLoader implements CommandLineRunner {

    private final ExperienceRepository experienceRepository;
    private final ProjectRepository projectRepository;

    @Autowired
    public DataLoader(ExperienceRepository experienceRepository, ProjectRepository projectRepository) {
        this.experienceRepository = experienceRepository;
        this.projectRepository = projectRepository;
    }

    @Override
    public void run(String... args) throws Exception {
        loadExperiences();
        loadProjects();
    }

    private void loadExperiences() {
        if (experienceRepository.count() > 0) {
            return; // Data already exists
        }

        // Full-Stack Developer at EVE MAĞAZACILIK A.Ş.
        Experience exp1 = new Experience();
        exp1.setTitle("Full-Stack Developer");
        exp1.setCompany("EVE MAĞAZACILIK A.Ş.");
        exp1.setStartDate(LocalDate.of(2023, 8, 1));
        exp1.setEndDate(LocalDate.of(2025, 5, 31));
        exp1.setLocation("Istanbul, Türkiye");
        exp1.setDescriptions(Arrays.asList(
                "Engineered the end-to-end development of evecareer.com, the company's automated recruitment platform, utilizing Java, Spring Boot, and React.",
                "Ensured the sustainability of existing systems by maintaining and implementing new features for the Customer Management, Inventory Management, and User Panel modules.",
                "Actively participated in an Agile/Scrum environment, contributing to sprint planning, daily stand-ups, and retrospectives to enhance team velocity and accelerate project delivery."
        ));
        exp1.setDisplayOrder(1);

        // Software Developer Intern at EVE MAĞAZACILIK A.Ş.
        Experience exp2 = new Experience();
        exp2.setTitle("Software Developer Intern");
        exp2.setCompany("EVE MAĞAZACILIK A.Ş.");
        exp2.setStartDate(LocalDate.of(2023, 6, 1));
        exp2.setEndDate(LocalDate.of(2023, 8, 31));
        exp2.setLocation("Istanbul, Türkiye");
        exp2.setDescriptions(Arrays.asList(
                "Developed reusable and interactive UI components using React and TypeScript to enhance the overall user experience (UX).",
                "Rapidly iterated on solutions based on user feedback, demonstrating adaptability and contributing to a user-centric development approach."
        ));
        exp2.setDisplayOrder(2);

        // Corporate Communications Assistant
        Experience exp3 = new Experience();
        exp3.setTitle("Corporate Communications Assistant");
        exp3.setCompany("YEDITEPE UNIVERSITY, DIRECTORATE OF CORPORATE COMMUNICATION");
        exp3.setStartDate(LocalDate.of(2021, 9, 1));
        exp3.setEndDate(LocalDate.of(2023, 6, 30));
        exp3.setLocation("Istanbul, Türkiye");
        exp3.setDescriptions(Arrays.asList(
                "Represented the university at education fairs and official publicity events, effectively communicating program details and campus facilities to prospective students.",
                "Led a team of student representatives, managing event organization and coordinating team efforts to ensure the success of outreach initiatives."
        ));
        exp3.setDisplayOrder(3);

        experienceRepository.saveAll(Arrays.asList(exp1, exp2, exp3));
    }

    private void loadProjects() {
        if (projectRepository.count() > 0) {
            return; // Data already exists
        }

        // evecareer.com.tr
        Project project1 = new Project();
        project1.setTitle("evecareer.com.tr");
        project1.setDescription("A platform for managing recruitment processes and evaluating job applications.");
        project1.setTechnologies(Arrays.asList("Java", "Spring Boot", "React", "TypeScript", "JavaScript", "MySQL", "MS SQL"));
        project1.setProjectUrl("https://evecareer.com.tr");
        project1.setDisplayOrder(1);

        // Patheern App
        Project project2 = new Project();
        project2.setTitle("Patheern App");
        project2.setDescription("A platform designed to support students' cognitive and social development on their career paths.");
        project2.setTechnologies(Arrays.asList("React", "TypeScript"));
        project2.setProjectUrl("https://www.youtube.com/watch?v=luMcMjmYnM4");
        project2.setDisplayOrder(2);

        // AkademiPlus
        Project project3 = new Project();
        project3.setTitle("AkademiPlus");
        project3.setDescription("A Flutter mobile application developed in 72 hours with a team of 4, serving as a supplementary learning resource.");
        project3.setTechnologies(Arrays.asList("Flutter", "Dart"));
        project3.setDisplayOrder(3);

        // Good In Health, Good In Mind
        Project project4 = new Project();
        project4.setTitle("Good In Health, Good In Mind");
        project4.setDescription("Erasmus+ Italy project focused on health and mental wellness.");
        project4.setTechnologies(Arrays.asList("Project Management"));
        project4.setDisplayOrder(4);

        projectRepository.saveAll(Arrays.asList(project1, project2, project3, project4));
    }
} 