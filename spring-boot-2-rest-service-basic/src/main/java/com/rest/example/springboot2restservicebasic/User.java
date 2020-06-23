package com.rest.example.springboot2restservicebasic;

import java.util.Objects;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;


@Entity
public class User {


    @Id
    @GeneratedValue
    private Long id;
    private String name;
    private String mail;
    private String phone;
    private String skill;
    private String place;
    public User() {
        super();
    }

    public User( String name, String mail, String phone, String skill, String place) {
        super();

        this.name = name;
        this.mail = mail;
        this.phone = phone;
        this.skill = skill;
        this.place =place;
    }
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getMail() {
        return mail;
    }

    public void setMail(String mail) {
        this.mail = mail;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getSkill() {
        return skill;
    }

    public void setSkill(String skill) {
        this.skill = skill;
    }

    public String getPlace() {
        return place;
    }

    public void setPlace(String place) {
        this.place = place;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof User)) return false;
        User user = (User) o;
        return getId().equals(user.getId()) &&
                Objects.equals(getName(), user.getName()) &&
                Objects.equals(getMail(), user.getMail()) &&
                Objects.equals(getPhone(), user.getPhone()) &&
                Objects.equals(getSkill(), user.getSkill()) &&
                Objects.equals(getPlace(), user.getPlace());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getId(), getName(), getMail(), getPhone(), getSkill(), getPlace());
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", mail='" + mail + '\'' +
                ", phone='" + phone + '\'' +
                ", skill='" + skill + '\'' +
                ", place='" + place + '\'' +
                '}';
    }
}
