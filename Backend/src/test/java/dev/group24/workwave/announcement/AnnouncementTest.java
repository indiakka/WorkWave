package dev.group24.workwave.announcement;

import static org.hamcrest.Matchers.is;

import org.exparity.hamcrest.date.DateMatchers;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.hamcrest.MatcherAssert.assertThat;

import java.lang.reflect.Field;
import java.time.temporal.ChronoUnit;
import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;

public class AnnouncementTest {

    Announcement announcement;

    @BeforeEach
    void setUp() {

        Date date = new GregorianCalendar(2024, Calendar.FEBRUARY, 22).getTime();

        announcement = new Announcement("Asturias", "Programador muy Junior", "AsturBest", "Estar sobrio y no drogado", "El mejor puesto de trabajo del mundo", 100000L, date);
        announcement.setId(1L);
    }

    @Test
    void testAnnouncementHas8Attributes() {
        Field[] fields = announcement.getClass().getDeclaredFields();
        assertThat(fields.length, is(8));
    }

    @Test
    void testAnnouncementHasCorrectAttributes() {

        Date currentDate = new GregorianCalendar(2024, Calendar.FEBRUARY, 22).getTime();
        
        assertThat(announcement.getId(), is(1L));
        assertThat(announcement.getJobName(), is("Programador muy Junior"));
        assertThat(announcement.getCompanyName(), is("AsturBest"));
        assertThat(announcement.getJobRequirements(), is("Estar sobrio y no drogado"));
        assertThat(announcement.getJobDescription(), is("El mejor puesto de trabajo del mundo"));
        assertThat(announcement.getSalary(), is(100000L));
        assertThat(announcement.getPublicationDate(), DateMatchers.within(2, ChronoUnit.SECONDS, currentDate));
    }

}