package dev.group24.workwave.exceptions;

import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.http.HttpStatus;

@ResponseStatus(code = HttpStatus.NOT_FOUND, reason = "Annnouncement not found")
public class AnnouncementNotFoundException extends Exception {

    public AnnouncementNotFoundException(String message) {
        super(message);
    }

    public AnnouncementNotFoundException(String message, Throwable cause) {
        super(message,cause);
    }
    
}
