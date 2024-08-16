package com.example.backend.service;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
public class FileStorageService {

    private static final String UPLOAD_DIRECTORY = "uploads";

    public void storeFile(MultipartFile file) throws IOException {
        byte[] bytes = file.getBytes();
        Path path = Paths.get(UPLOAD_DIRECTORY, file.getOriginalFilename());
        Files.write(path, bytes);
    }

    public List<Map<String, String>> getUploadedFiles() {
        try {
            return Files.walk(Paths.get(UPLOAD_DIRECTORY))
                    .filter(Files::isRegularFile)
                    .map(path -> {
                        Map<String, String> fileDetails = new HashMap<>();
                        fileDetails.put("fileName", path.getFileName().toString());
                        try {
                            fileDetails.put("uploadTime", Files.getLastModifiedTime(path).toString());
                        } catch (IOException e) {
                            fileDetails.put("uploadTime", "Error retrieving upload time");
                        }
                        return fileDetails;
                    })
                    .collect(Collectors.toList());
        } catch (IOException e) {
            e.printStackTrace();
            return List.of();
        }
    }

    public boolean deleteFile(String fileName) {
        Path path = Paths.get(UPLOAD_DIRECTORY, fileName);
        try {
            return Files.deleteIfExists(path);
        } catch (IOException e) {
            e.printStackTrace();
            return false;
        }
    }
}
