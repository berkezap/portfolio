package com.berke.portfolio.controller;

import com.berke.portfolio.entity.Experience;
import com.berke.portfolio.service.ExperienceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import jakarta.validation.Valid;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/experiences")
@CrossOrigin(origins = "http://localhost:3000")
public class ExperienceController {
    
    private final ExperienceService experienceService;
    
    @Autowired
    public ExperienceController(ExperienceService experienceService) {
        this.experienceService = experienceService;
    }
    
    @GetMapping
    public ResponseEntity<List<Experience>> getAllExperiences() {
        List<Experience> experiences = experienceService.getAllExperiences();
        return ResponseEntity.ok(experiences);
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<Experience> getExperienceById(@PathVariable Long id) {
        Optional<Experience> experience = experienceService.getExperienceById(id);
        return experience.map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }
    
    @PostMapping
    public ResponseEntity<Experience> createExperience(@Valid @RequestBody Experience experience) {
        Experience createdExperience = experienceService.createExperience(experience);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdExperience);
    }
    
    @PutMapping("/{id}")
    public ResponseEntity<Experience> updateExperience(@PathVariable Long id, 
                                                      @Valid @RequestBody Experience experience) {
        if (!experienceService.existsById(id)) {
            return ResponseEntity.notFound().build();
        }
        Experience updatedExperience = experienceService.updateExperience(id, experience);
        return ResponseEntity.ok(updatedExperience);
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteExperience(@PathVariable Long id) {
        if (!experienceService.existsById(id)) {
            return ResponseEntity.notFound().build();
        }
        experienceService.deleteExperience(id);
        return ResponseEntity.noContent().build();
    }
} 