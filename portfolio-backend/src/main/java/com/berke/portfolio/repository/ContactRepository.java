package com.berke.portfolio.repository;

import com.berke.portfolio.entity.Contact;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ContactRepository extends JpaRepository<Contact, Long> {
    
    @Query("SELECT c FROM Contact c ORDER BY c.createdAt DESC")
    List<Contact> findAllOrderedByCreatedAt();
    
    @Query("SELECT c FROM Contact c WHERE c.isRead = false ORDER BY c.createdAt DESC")
    List<Contact> findUnreadMessages();
    
    @Query("SELECT COUNT(c) FROM Contact c WHERE c.isRead = false")
    Long countUnreadMessages();
} 