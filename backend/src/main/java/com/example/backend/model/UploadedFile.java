package com.example.backend.model;

import java.time.LocalDateTime;

public class UploadedFile {

    private String fileName;
    private LocalDateTime uploadTime;

    public UploadedFile(String fileName, LocalDateTime uploadTime) {
        this.fileName = fileName;
        this.uploadTime = uploadTime;
    }

    public String getFileName() {
        return fileName;
    }

    public void setFileName(String fileName) {
        this.fileName = fileName;
    }

    public LocalDateTime getUploadTime() {
        return uploadTime;
    }

    public void setUploadTime(LocalDateTime uploadTime) {
        this.uploadTime = uploadTime;
    }
}
