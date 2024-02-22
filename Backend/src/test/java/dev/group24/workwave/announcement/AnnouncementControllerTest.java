package dev.group24.workwave.announcement;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.containsString;
import static org.hamcrest.Matchers.equalTo;
import static org.hamcrest.Matchers.is;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;
import java.util.List;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.mock.web.MockHttpServletResponse;
import org.springframework.test.web.servlet.MockMvc;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

@WebMvcTest(controllers = AnnouncementController.class)
@AutoConfigureMockMvc(addFilters = false)
public class AnnouncementControllerTest {

    @Autowired
    MockMvc mockMvc;

    @Autowired
    ObjectMapper mapper;

    @MockBean
    AnnouncementService service;

    @Test
    @DisplayName("Should return a list of announcements")
    void testIndex() throws JsonProcessingException, Exception {

        List<Announcement> announcements = new ArrayList<>();

        Date date = new GregorianCalendar(2024, Calendar.FEBRUARY, 22).getTime();

        Announcement anun1 = new Announcement("Asturias", "Programador muy Junior", "AsturBest", "Estar sobrio y no drogado", "El mejor puesto de trabajo del mundo", 100000L, date);
        anun1.setId(1L);

        Announcement anun2 = new Announcement("Islas Canarias", "Limpiador de ratones", "LimpiezaBoom", "Saber limpiar ratones", "Trabajo de tus suenos", 100L, date);
        anun2.setId(2L);
        announcements.add(anun1);
        announcements.add(anun2);

        when(service.getAll()).thenReturn(announcements);
        MockHttpServletResponse response = mockMvc.perform(get("/workwave/api/announcements")
                .accept(MediaType.APPLICATION_JSON)
                .content("application/json"))
                .andExpect(status().isOk())
                .andReturn()
                .getResponse();

        assertThat(response.getStatus(), is(HttpStatus.OK.value()));
        assertThat(response.getContentAsString(), containsString("Asturias"));
        assertThat(response.getContentAsString(), containsString("Islas Canarias"));
        assertThat(response.getContentAsString(), equalTo(mapper.writeValueAsString(announcements)));
    }

    @Test
    @DisplayName("Should return announcement with id 1")
    @SuppressWarnings("all")
    void testGetOneAnnouncementById() throws Exception {

        Date date = new GregorianCalendar(2024, Calendar.FEBRUARY, 22).getTime();

        Announcement anun1 = new Announcement("Asturias", "Programador muy Junior", "AsturBest", "Estar sobrio y no drogado", "El mejor puesto de trabajo del mundo", 100000L, date);
        anun1.setId(1L);

        when(service.getById(1L)).thenReturn(anun1);
        MockHttpServletResponse response = mockMvc.perform(get("/workwave/api/announcements/{id}", 1L)
            .contentType(MediaType.APPLICATION_JSON))
            .andExpect(status().isOk())
            .andReturn()
            .getResponse();

        assertThat(response.getStatus(), is(HttpStatus.OK.value()));
        assertThat(response.getContentAsString(), containsString("Asturias"));
    }
}