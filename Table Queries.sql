/*creating all the required tables */

create database aqore_hrs;
use aqore_hrs

CREATE TABLE Hotels (
    h_id INT IDENTITY(1, 1) PRIMARY KEY,
    h_name VARCHAR(100) NOT NULL UNIQUE,
    h_description VARCHAR(255) ,
	h_address varchar(100)
);

CREATE TABLE Room (
    r_id INT IDENTITY(1, 1) PRIMARY KEY,
	h_id INT NOT NULL,
    r_type VARCHAR(100) NOT NULL,
    Price DECIMAL(10, 2) NOT NULL,
	RemainingQuantity INT NOT NULL,
	Available Bit,
	FOREIGN KEY (h_id) REFERENCES Hotels (h_id),
    CONSTRAINT UC_RoomTypePrice UNIQUE (r_type, Price)
);
INSERT INTO ROOM (h_id, r_type, Price, RemainingQuantity, Available)
VALUES (6, 'Triple Bed', 2200, 3, 1);

CREATE TABLE Customer (
    c_id INT IDENTITY(1, 1) PRIMARY KEY,
    FullName VARCHAR(50) NOT NULL,
    Email VARCHAR(100) NOT NULL UNIQUE,
    Contact VARCHAR(15),
);

CREATE TABLE PaymentProcess (
    p_id INT IDENTITY(1, 1) PRIMARY KEY,
    c_id INT NOT NULL,
    r_id INT NOT NULL,
    Quantity INT NOT NULL,
    TransactionDate DATE NOT NULL,

    FOREIGN KEY (c_id) REFERENCES Customer (c_id),
    FOREIGN KEY (r_id) REFERENCES Room (r_id),
);

CREATE TABLE Invoice (
    InvoiceId INT IDENTITY(1, 1) PRIMARY KEY,
	c_id INT NOT NULL,
    InvoiceDate DATE NOT NULL,
    TotalAmount DECIMAL(10, 2) NOT NULL,
    Discount DECIMAL(4, 2) NOT NULL,
	DiscountedAmount DECIMAL(10,2) NOT NULL
	 FOREIGN KEY (c_id) REFERENCES Customer (c_id),
     CONSTRAINT UC_InvoiceIdCustomerId UNIQUE (InvoiceId, c_id)
);
