package dev.group24.workwave.announcement;

import java.util.List;

import org.springframework.stereotype.Service;

import dev.group24.workwave.exceptions.AnnouncementNotFoundException;
import dev.group24.workwave.interfaces.IGenericGetService;

@Service
public class AnnouncementService implements IGenericGetService <Announcement> {

    AnnouncementRepository repository;

    public AnnouncementService (AnnouncementRepository repository) {
        this.repository = repository;
    }

    public List<Announcement> getAll() {
        List<Announcement> announcements = repository.findAll();
        return announcements;
    }

    public Announcement getById(Long id) throws Exception {
        
        Announcement announcement = repository.findById(id).orElseThrow(() -> new AnnouncementNotFoundException("Announcement not found"));

        return announcement;
    }
}
