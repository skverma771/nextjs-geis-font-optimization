CREATE TABLE bikes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    bike_id VARCHAR(255) UNIQUE NOT NULL,
    model VARCHAR(255),
    imei_or_hardware_id VARCHAR(255),
    status ENUM('active', 'inactive') DEFAULT 'active',
    battery_level INT,
    last_lat DECIMAL(10, 8),
    last_lng DECIMAL(11, 8),
    last_seen_at TIMESTAMP,
    owner_user_id INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (owner_user_id) REFERENCES users(id)
);
