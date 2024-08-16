// package com.example.backend.controller;

// import org.json.JSONObject;
// import org.springframework.http.HttpEntity;
// import org.springframework.http.HttpHeaders;
// import org.springframework.http.HttpMethod;
// import org.springframework.http.ResponseEntity;
// import org.springframework.web.bind.annotation.PostMapping;
// import org.springframework.web.bind.annotation.RequestBody;
// import org.springframework.web.bind.annotation.RequestMapping;
// import org.springframework.web.bind.annotation.RestController;
// import org.springframework.web.client.RestTemplate;

// @RestController
// @RequestMapping("/api/chat")
// public class ChatController {

//     private final String OPENAI_API_URL = "https://api.openai.com/v1/engines/davinci-codex/completions";
//     private final String API_KEY = "sk-proj-m17OeRWQrjZsRZsm1DXFT3BlbkFJmKIDexx48Yjsb1zsKVNC"; // Replace with your OpenAI API key

//     @PostMapping
//     public ResponseEntity<String> getChatResponse(@RequestBody String userInput) {
//         RestTemplate restTemplate = new RestTemplate();

//         // Create JSON payload
//         JSONObject jsonObject = new JSONObject();
//         jsonObject.put("prompt", userInput);
//         jsonObject.put("max_tokens", 150);

//         // Set headers
//         HttpHeaders headers = new HttpHeaders();
//         headers.set("Authorization", "Bearer " + API_KEY);
//         headers.set("Content-Type", "application/json");
        
//         // Create request entity
//         HttpEntity<String> requestEntity = new HttpEntity<>(jsonObject.toString(), headers);
        
//         // Make the API call
//         ResponseEntity<String> response = restTemplate.exchange(
//             OPENAI_API_URL,
//             HttpMethod.POST,
//             requestEntity,
//             String.class
//         );

//         // Extract the AI response from the API response
//         JSONObject responseJson = new JSONObject(response.getBody());
//         String aiResponse = responseJson.getJSONArray("choices").getJSONObject(0).getString("text");

//         return ResponseEntity.ok(aiResponse);
//     }
// }
