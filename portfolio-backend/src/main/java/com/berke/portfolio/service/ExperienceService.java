package com.berke.portfolio.service;

import com.berke.portfolio.entity.Experience;
import com.berke.portfolio.repository.ExperienceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ExperienceService {
    
    private final ExperienceRepository experienceRepository;
    
    @Autowired
    public ExperienceService(ExperienceRepository experienceRepository) {
        this.experienceRepository = experienceRepository;
    }
    
    public List<Experience> getAllExperiences() {
        return experienceRepository.findAllOrderedByDisplayOrder();
    }
    
    public Optional<Experience> getExperienceById(Long id) {
        return experienceRepository.findById(id);
    }
    
    public Experience createExperience(Experience experience) {
        return experienceRepository.save(experience);
    }
    
    public Experience updateExperience(Long id, Experience experience) {
        experience.setId(id);
        return experienceRepository.save(experience);
    }
    
    public void deleteExperience(Long id) {
        experienceRepository.deleteById(id);
    }
    
    public boolean existsById(Long id) {
        return experienceRepository.existsById(id);
    }
} 