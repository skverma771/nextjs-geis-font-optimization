CREATE TABLE plans (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    duration_days INT NOT NULL,
    features TEXT
);
