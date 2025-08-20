CREATE TABLE refresh_tokens (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    token_hash VARCHAR(255) NOT NULL,
    ip VARCHAR(45),
    user_agent VARCHAR(255),
    revoked BOOLEAN DEFAULT FALSE,
    expires_at TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id)
);
