package com.example.backend.service;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.HashMap;
import java.util.Map;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.example.backend.repository.DocumentRepository;

@Service
public class DocumentService {

    private final DocumentRepository documentRepository = new DocumentRepository(); // Directly instantiate the repository
    private static final String UPLOAD_DIR = "uploads/";

    static {
        File uploadDir = new File(UPLOAD_DIR);
        if (!uploadDir.exists()) {
            uploadDir.mkdirs();
        }
    }

    public Map<String, String> uploadDocument(MultipartFile file) {
        Map<String, String> response = new HashMap<>();
        if (file.isEmpty()) {
            response.put("message", "File is empty");
            return response;
        }

        try {
            Path path = Paths.get(UPLOAD_DIR + file.getOriginalFilename());
            Files.write(path, file.getBytes());
            response.put("message", "File uploaded successfully");
            response.put("filename", file.getOriginalFilename());

            // Save file information using repository (simulated)
            documentRepository.saveFile(file.getOriginalFilename());

            // Simulate a delay for summary generation
            Thread.sleep(2000);
            response.put("summary", "Summary of the uploaded document: " + file.getOriginalFilename());
        } catch (IOException | InterruptedException e) {
            e.printStackTrace();
            response.put("message", "File upload failed");
        }

        return response;
    }
}
