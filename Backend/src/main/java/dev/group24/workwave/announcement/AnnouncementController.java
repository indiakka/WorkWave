package dev.group24.workwave.announcement;

import java.util.List;

import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import dev.group24.workwave.interfaces.IGenericGetService;

@RestController
@RequestMapping(path = "${api-endpoint}/announcements")
public class AnnouncementController {
    
    IGenericGetService <Announcement> service;

    public AnnouncementController (IGenericGetService <Announcement> service) {
        this.service = service;
    }

    @GetMapping(path = "")
    public List<Announcement> index() {

        List<Announcement> announcements = service.getAll();
        return announcements;

    }

    @GetMapping(path = "/{id}")
    public ResponseEntity<Announcement> getOneById(@PathVariable("id") Long id) throws Exception {

        Announcement announcement = service.getById(id);

        return ResponseEntity.status(HttpStatusCode.valueOf(200)).body(announcement);
    }
}
