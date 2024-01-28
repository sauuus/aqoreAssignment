/*creating CRUD api*/

use aqore_hrs

/*--------------------------------HOTELAPI-------------*/
/*createHotel*/

CREATE PROCEDURE CreateHotelAPI
@h_name varchar(100),
@h_description varchar(255),
@h_address varchar(100)

As
Begin
	INSERT INTO Hotels(h_name,h_description,h_address) VALUES (@h_name,@h_description,@h_address)

End

/*updateHotel*/
CREATE PROCEDURE UpdateHotelAPI
	@h_id INT,
    @h_name varchar(100),
	@h_description varchar(255),
	@h_address varchar(100)
AS
BEGIN
    UPDATE Hotels
    SET h_name = @h_name,
		h_description= @h_description,
		h_address = @h_address
    WHERE h_id = @h_id;
END

/*deleteHotel*/

CREATE PROCEDURE DeleteHotelAPI
  @h_id INT
AS
BEGIN
  DELETE FROM Hotels WHERE h_id = @h_id;
END

/*ListHotel*/

CREATE PROCEDURE GetAllHotels
AS
BEGIN
    SELECT * FROM Hotels
END

/* GET Hotel By Id*/

CREATE PROCEDURE GetSingleHotel
    @h_id INT
AS
BEGIN
    SELECT *
    FROM Hotels
    WHERE h_id = @h_id;
END


EXEC GetSingleHotel @h_id;


/*------------------ROOM API-----------------------------------*/
/*createRoom*/
CREATE PROCEDURE CreateRoomAPI
@h_id INT,
@r_type varchar(100),
@Price DECIMAL(10, 2),
@RemainingQuantity int,
@Available BIT
As
Begin
	INSERT INTO Room(h_id,r_type,Price,RemainingQuantity,Available) VALUES (@h_id,@r_type,@Price,@RemainingQuantity,@Available)

End

EXEC CreateRoomAPI @h_id,@r_type, @Price,@Available, @RemainingQuantity;
/*updateRoom*/
CREATE PROCEDURE UpdateRoomAPI
    @r_id INT,
	@h_id INT,
    @r_type VARCHAR(100),
	@Price decimal(10,2),
	@RemainingQuantity int,
	@Available BIT
AS
BEGIN
    UPDATE Room
    SET h_id=@h_id ,r_type = @r_type, Price = @Price, RemainingQuantity = @RemainingQuantity,Available =@Available
    WHERE r_id = @r_id;
END

/*deleteRoom*/
CREATE PROCEDURE DeleteRoomAPI
  @r_id INT
AS
BEGIN
  DELETE FROM Room WHERE r_id = @r_id;
END

/*ListRoom*/

CREATE PROCEDURE GetAllRooms
AS
BEGIN
    SELECT * FROM Room
END

/* GET Room By Id*/

CREATE PROCEDURE GetSingleRoom
    @r_id INT
AS
BEGIN
    SELECT *
    FROM Room
    WHERE r_id = @r_id;
END


/*Customer*/
/*createCustomer*/
CREATE PROCEDURE CreateCustomerAPI
@FullName varchar(50),
@Email varchar(100),
@Contact VARCHAR(15)

As
Begin
	INSERT INTO Customer(FullName, Email,Contact) VALUES (@FullName, @Email,@Contact)

End

/*updateCustomer*/
CREATE PROCEDURE UpdateCustomerAPI
@c_id INT,
@FullName varchar(50),
@Email varchar(100),
@Contact VARCHAR(15)
AS
BEGIN
    UPDATE Customer
    SET FullName = @FullName, Email = @Email, Contact= @Contact
    WHERE c_id = @c_id;
END

/*deleteCustomer*/
CREATE PROCEDURE DeleteCustomerAPI
  @c_id INT
AS
BEGIN
  DELETE FROM Customer WHERE c_id = @c_id;
END

/*ListCustomer*/

CREATE PROCEDURE GetAllCustomer
AS
BEGIN
    SELECT * FROM Customer
END

/* GET Customer By Id*/

CREATE PROCEDURE GetSingleCustomer
    @c_id INT
AS
BEGIN
    SELECT *
    FROM Customer
    WHERE c_id = @c_id;
END

/*PaymentProcess*/
/*createPaymentProcess*/
CREATE PROCEDURE CreatePaymentProcessAPI
@c_id INT,
@r_id INT,
@Quantity INT,
@TransactionDate DATE

As
Begin
	INSERT INTO PaymentProcess(c_id, r_id, Quantity, TransactionDate) VALUES (@c_id, @r_id, @Quantity, @TransactionDate)

End

/*updatePaymentProcess*/
CREATE PROCEDURE UpdatePaymentProcessAPI
@p_id INT,
@c_id INT,
@r_id INT,
@Quantity INT,
@TransactionDate Date
AS
BEGIN
    UPDATE PaymentProcess
    SET c_id = @c_id, r_id = @r_id, Quantity = @Quantity, TransactionDate = @TransactionDate
    WHERE p_id = @p_id;
END

/*deletePaymentProcess*/
CREATE PROCEDURE DeletePaymentProcessAPI
  @p_id INT
AS
BEGIN
  DELETE FROM PaymentProcess WHERE p_id = @p_id;
END

/*ListPayment*/

CREATE PROCEDURE GetAllProcess
AS
BEGIN
    SELECT * FROM PaymentProcess
END

/* GET Payment By Id*/

CREATE PROCEDURE GetSingleProcess
    @p_id INT
AS
BEGIN
    SELECT *
    FROM PaymentProcess
    WHERE p_id = @p_id;
END



/*Invoice*/
/*createInvoice*/
CREATE PROCEDURE CreateInvoiceAPI
@c_id INT,
@InvoiceDate Date,
@TotalAmount decimal(10,2),
@Discount decimal(4,2),
@DiscountedAmount decimal(10,2)

As
Begin
	INSERT INTO Invoice(c_id, InvoiceDate, TotalAmount, Discount, DiscountedAmount) VALUES (@c_id, @InvoiceDate, @TotalAmount, @Discount, @DiscountedAmount)

End



/*updateInvoice*/
CREATE PROCEDURE UpdateInvoiceAPI
@InvoiceId INT,
@c_id INT,
@InvoiceDate Date,
@TotalAmount decimal(10,2),
@Discount decimal(4,2),
@DiscountedAmount decimal(10,2)

AS
BEGIN
    UPDATE Invoice
    SET c_id = @c_id, InvoiceDate = @InvoiceDate, TotalAmount = @TotalAmount, Discount = @Discount, DiscountedAmount = @DiscountedAmount
    WHERE InvoiceId = @InvoiceId;
END


/*deleteInvoice*/
CREATE PROCEDURE DeleteInvoiceAPI
  @InvoiceId INT
AS
BEGIN
  DELETE FROM Invoice WHERE InvoiceId = @InvoiceId;
END

/*ListInvoice*/

CREATE PROCEDURE GetAllInvoice
AS
BEGIN
    SELECT * FROM Invoice
END

/* GET Payment By Id*/

CREATE PROCEDURE GetSingleInvoice
    @InvoiceId INT
AS
BEGIN
    SELECT *
    FROM Invoice
    WHERE InvoiceId = @InvoiceId;
END

----------------------------------------------------
CREATE PROCEDURE GetAllRoomByHotel
    @h_id INT
AS
BEGIN
    SELECT *
    FROM Room r
    WHERE r.h_id = @h_id;
END;
--------------------------
CREATE PROCEDURE GetHotelsByAvailable AS 
SELECT h.* FROM Hotels h JOIN Room r ON h.h_id = r.h_id WHERE r.Available = 1 
GO

Exec GetHotelsByAvailable;
-----------------------------------------------------------
CREATE PROCEDURE GetRoomsByAvailableId 
@h_id INT, @available BIT = 1 AS BEGIN SELECT r.* FROM 
Room r WHERE r.h_id = @h_id AND r.Available = @available END
GO
Exec GetRoomsByAvailableId @h_id = 3;
