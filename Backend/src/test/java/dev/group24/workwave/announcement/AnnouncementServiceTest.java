package dev.group24.workwave.announcement;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.contains;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;
import java.util.List;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

@ExtendWith(MockitoExtension.class)
public class AnnouncementServiceTest {
    @InjectMocks
    AnnouncementService service;

    @Mock
    AnnouncementRepository repository;

    @BeforeEach
    void setUp() {
        this.service = new AnnouncementService(repository);
    }

    @Test
    void testGetAllAnnouncements() {

        Date date = new GregorianCalendar(2024, Calendar.FEBRUARY, 22).getTime();

        Announcement anun1 = new Announcement("Asturias", "Programador muy Junior", "AsturBest", "Estar sobrio y no drogado", "El mejor puesto de trabajo del mundo", 100000L, date);
        anun1.setId(1L);

        Announcement anun2 = new Announcement("Islas Canarias", "Limpiador de ratones", "LimpiezaBoom", "Saber limpiar ratones", "Trabajo de tus sueños", 100L, date);
        anun2.setId(2L);

        List<Announcement> announcements = new ArrayList<>();
        announcements.add(anun1);
        announcements.add(anun2);

        when(repository.findAll()).thenReturn(announcements);
        List<Announcement> result = service.getAll();

        assertThat(result, contains(anun1,anun2));

    }
}
