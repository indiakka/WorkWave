package dev.group24.workwave.announcement;

import java.util.Date;

import com.fasterxml.jackson.annotation.JsonFormat;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "announcements")
public class Announcement {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) 
    @Column(name = "id_announcement")
    private Long id;

    @Column
    private String province;

    @Column
    private String jobName;

    @Column
    private String companyName;

    @Column
    private String jobRequirements;

    @Column
    private String jobDescription;

    @Column
    private Long salary;

    @Column
    @JsonFormat(pattern="yyyy-MM-dd")
    private Date publicationDate;

    public Announcement() {
    }

    public Announcement(String province, String jobName, String companyName, String jobRequirements,
            String jobDescription, Long salary, Date publicationDate) {
        this.province = province;
        this.jobName = jobName;
        this.companyName = companyName;
        this.jobRequirements = jobRequirements;
        this.jobDescription = jobDescription;
        this.salary = salary;
        this.publicationDate = publicationDate;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getProvince() {
        return province;
    }

    public void setProvince(String province) {
        this.province = province;
    }

    public String getJobName() {
        return jobName;
    }

    public void setJobName(String jobName) {
        this.jobName = jobName;
    }

    public String getCompanyName() {
        return companyName;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }

    public String getJobRequirements() {
        return jobRequirements;
    }

    public void setJobRequirements(String jobRequirements) {
        this.jobRequirements = jobRequirements;
    }

    public String getJobDescription() {
        return jobDescription;
    }

    public void setJobDescription(String jobDescription) {
        this.jobDescription = jobDescription;
    }

    public Long getSalary() {
        return salary;
    }

    public void setSalary(Long salary) {
        this.salary = salary;
    }

    public Date getPublicationDate() {
        return publicationDate;
    }

    public void setPublicationDate(Date publicationDate) {
        this.publicationDate = publicationDate;
    }
    
}
