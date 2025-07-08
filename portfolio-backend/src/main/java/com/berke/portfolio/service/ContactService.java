package com.berke.portfolio.service;

import com.berke.portfolio.entity.Contact;
import com.berke.portfolio.repository.ContactRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ContactService {
    
    private final ContactRepository contactRepository;
    
    @Autowired
    public ContactService(ContactRepository contactRepository) {
        this.contactRepository = contactRepository;
    }
    
    public List<Contact> getAllContacts() {
        return contactRepository.findAllOrderedByCreatedAt();
    }
    
    public List<Contact> getUnreadMessages() {
        return contactRepository.findUnreadMessages();
    }
    
    public Long getUnreadMessageCount() {
        return contactRepository.countUnreadMessages();
    }
    
    public Optional<Contact> getContactById(Long id) {
        return contactRepository.findById(id);
    }
    
    public Contact createContact(Contact contact) {
        return contactRepository.save(contact);
    }
    
    public Contact markAsRead(Long id) {
        Optional<Contact> contactOpt = contactRepository.findById(id);
        if (contactOpt.isPresent()) {
            Contact contact = contactOpt.get();
            contact.setIsRead(true);
            return contactRepository.save(contact);
        }
        return null;
    }
    
    public void deleteContact(Long id) {
        contactRepository.deleteById(id);
    }
    
    public boolean existsById(Long id) {
        return contactRepository.existsById(id);
    }
} 