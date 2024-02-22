package dev.group24.workwave.announcement;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.List;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;

@DataJpaTest
public class AnnouncementRepositoryTest {
    
    @Autowired
    TestEntityManager entityManager;

    @Autowired
    AnnouncementRepository repository;

    @Test
    @DisplayName("Find all announcements")
    void testGetAllAnnouncements() {
        List<Announcement> announcements = repository.findAll();
        assertEquals(6, announcements.size());
        assertThat(announcements.get(0).getJobName()).isEqualTo("Programador muy Junior");
    }

    @Test
    @DisplayName("Find announcement by id")
    void testGetOneAnnouncementById() {
        Announcement anun1 = repository.findById(2L).orElseThrow();
        assertEquals(2L, anun1.getId());
        assertEquals("Madrid", anun1.getProvince());
    }

    @AfterEach
    void tearDown() {
        entityManager.clear();
    }

    

}
