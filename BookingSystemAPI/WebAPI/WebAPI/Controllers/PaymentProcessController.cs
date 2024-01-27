using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using WebAPI.Data;
using WebAPI.Models;

namespace WebAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PaymentProcessController : Controller
    {
        private readonly BookingSystemDbContext _bookingSystemDbContext;

        public PaymentProcessController(BookingSystemDbContext bookingSystemDbContext)
        {
            _bookingSystemDbContext = bookingSystemDbContext;
        }

        [HttpGet("getPayment")]

        public async Task<IActionResult> GetPayment()
        {
            var data = await _bookingSystemDbContext.PaymentProcess.FromSqlRaw("GetAllProcess").ToListAsync();
            if (data == null || data.Count == 0)
            {
                return NotFound();
            }
            return Ok(data); //returns status 200
        }

        [HttpGet("getPaymentById/{id}")] 
        public async Task<IActionResult> GetSingleProcess(int id)
        {
            var result = await _bookingSystemDbContext.PaymentProcess.FromSqlRaw("EXEC GetSingleProcess @p_id",
                new SqlParameter("@p_id", id)
            ).ToListAsync();

            if (result == null || result.Count == 0)
            {
                return NotFound();
            }

            return Ok(result);
        }

        [HttpPost("addPaymentProcess")]
        public async Task<ActionResult> AddPaymentProcess(PaymentProcess pp)
        {
            var result = await _bookingSystemDbContext.Database.ExecuteSqlRawAsync("EXEC CreatePaymentProcessAPI @c_id, @r_id, @Quantity, @TransactionDate",

               new SqlParameter("@c_id", pp.c_id),
                new SqlParameter("@r_id", pp.r_id),
                new SqlParameter("@Quantity", pp.Quantity),
                new SqlParameter("@TransactionDate", pp.TransactionDate)
                );

            if (result <= 0)
            {
                return BadRequest();
            }

            return Ok();
        }


        [HttpPut("updatePayentProcess/{id}")]
        public async Task<IActionResult> UpdatePaymentProcess(int id, PaymentProcess pp)
        {
            var result = await _bookingSystemDbContext.Database.ExecuteSqlRawAsync("EXEC UpdatePaymentProcessAPI @p_id, @c_id, @r_id, @Quantity, @TransactionDate",
                new SqlParameter("@p_id", id),
                new SqlParameter("@r_id", pp.r_id),
                new SqlParameter("@c_id", pp.c_id),
                new SqlParameter("@Quantity", pp.Quantity),
                new SqlParameter("@TransactionDate", pp.TransactionDate)

            );

            if (result <= 0)
            {
                return BadRequest();
            }

            return Ok();
        }


        [HttpDelete("deletePaymentProcess/{id}")]
        public async Task<IActionResult> DeletePaymentProcess(int id)
        {
            var result = await _bookingSystemDbContext.Database.ExecuteSqlRawAsync("EXEC DeletePaymentProcessAPI @p_id",
                new SqlParameter("@p_id", id)
            );

            if (result <= 0)
            {
                return BadRequest();
            }

            return Ok();
        }

    }
}
