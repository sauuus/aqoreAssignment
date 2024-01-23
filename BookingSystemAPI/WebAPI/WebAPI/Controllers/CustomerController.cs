using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using WebAPI.Data;
using WebAPI.Models;

namespace WebAPI.Controllers
{
    [ApiController]
    [Route("api/Customer")]
    public class CustomerController : Controller {

    private readonly BookingSystemDbContext _bookingSystemDbContext;

    public CustomerController(BookingSystemDbContext bookingSystemDbContext)
    {
        _bookingSystemDbContext = bookingSystemDbContext;
    }

        [HttpGet("getCustomer")]

        public async Task<IActionResult> GetCustomers()
        {
            var data = await _bookingSystemDbContext.Customer.FromSqlRaw("GetAllCustomer").ToListAsync();
            if (data == null || data.Count == 0)
            {
                return NotFound();
            }
            return Ok(data); //returns status 200
        }


        [HttpGet("getCustomerById/{id}")]
        public async Task<IActionResult> GetSingleCustomer(int id)
        {
            var data = await _bookingSystemDbContext.Customer.FromSqlRaw("EXEC GetSingleCustomer @c_id;",
                new SqlParameter("@c_id", id)
            ).ToListAsync();

            if (data == null || data.Count == 0)
            {
                return NotFound();
            }

            return Ok(data);
        }


        [HttpPost("addCustomer")]
        public async Task<IActionResult> AddCustomer([FromBody] Customer customer)
        {
            var data = await _bookingSystemDbContext.Database.ExecuteSqlRawAsync("EXEC CreateCustomerAPI @FullName, @Email, @Contact",

               new SqlParameter("@FullName", customer.FullName),
                new SqlParameter("@Email", customer.Email),
                new SqlParameter("@Contact", customer.Contact)

                );
            if (data <= 0)
            {
                return BadRequest();
            }
            return Ok(data);
        }


        [HttpPut("updateCustomer/{id}")]
        public async Task<IActionResult> UpdateCustomer(int id, Customer customer)
        {
            var result = await _bookingSystemDbContext.Database.ExecuteSqlRawAsync("EXEC UpdateCustomerAPI @c_id, @FullName, @Email, @Contact",
                new SqlParameter("@c_id", id),
                new SqlParameter("@FullName", customer.FullName),
                new SqlParameter("@Email", customer.Email),
                new SqlParameter("@Contact", customer.Contact)


            );

            if (result <= 0)
            {
                return BadRequest();
            }

            return Ok();
        }


        [HttpDelete("deleteCustomer/{id}")]
        public async Task<IActionResult> DeleteCustomer(int id)
        {
            var result = await _bookingSystemDbContext.Database.ExecuteSqlRawAsync("EXEC DeleteCustomerAPI @c_id",
                new SqlParameter("@c_id", id)
            );

            if (result <= 0)
            {
                return BadRequest();
            }

            return Ok();
        }

    }
}
