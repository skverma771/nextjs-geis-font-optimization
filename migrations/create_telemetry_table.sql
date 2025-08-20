CREATE TABLE telemetry (
    id INT AUTO_INCREMENT PRIMARY KEY,
    bike_id INT,
    lat DECIMAL(10, 8),
    lng DECIMAL(11, 8),
    speed DECIMAL(5, 2),
    battery INT,
    heading VARCHAR(10),
    recorded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (bike_id) REFERENCES bikes(id)
);
