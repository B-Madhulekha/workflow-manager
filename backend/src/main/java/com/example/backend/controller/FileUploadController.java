package com.example.backend.controller;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.backend.service.FileStorageService;

@RestController
@RequestMapping("/upload")
@CrossOrigin(origins = "http://localhost:3000") // Update this to match your frontend URL
public class FileUploadController {

    @Autowired
    private FileStorageService fileStorageService;

    @PostMapping
    public ResponseEntity<Map<String, String>> uploadFile(@RequestParam("file") MultipartFile file) {
        Map<String, String> response = new HashMap<>();
        try {
            fileStorageService.storeFile(file);
            response.put("message", "File uploaded successfully: " + file.getOriginalFilename());
            return ResponseEntity.ok(response);
        } catch (IOException e) {
            e.printStackTrace();
            response.put("message", "File upload failed");
            return ResponseEntity.status(500).body(response);
        }
    }

    @GetMapping("/files")
    public ResponseEntity<?> getUploadedFiles() {
        return ResponseEntity.ok(fileStorageService.getUploadedFiles());
    }

    @DeleteMapping("/files")
    public ResponseEntity<Map<String, String>> deleteFile(@RequestParam("fileName") String fileName) {
        Map<String, String> response = new HashMap<>();
        boolean isDeleted = fileStorageService.deleteFile(fileName);
        if (isDeleted) {
            response.put("message", "File deleted successfully: " + fileName);
            return ResponseEntity.ok(response);
        } else {
            response.put("message", "File deletion failed");
            return ResponseEntity.status(500).body(response);
        }
    }
}
