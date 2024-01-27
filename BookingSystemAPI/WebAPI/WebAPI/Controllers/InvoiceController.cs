using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using WebAPI.Data;
using WebAPI.Models;

namespace WebAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class InvoiceController : Controller
    {
        private readonly BookingSystemDbContext _bookingSystemDbContext;

        public InvoiceController(BookingSystemDbContext bookingSystemDbContext)
        {
            _bookingSystemDbContext = bookingSystemDbContext;
        }



        [HttpGet("getInvoice")]

        public async Task<IActionResult> GetInvoice()
        {
            var data = await _bookingSystemDbContext.Invoice.FromSqlRaw("GetAllInvoice").ToListAsync();
            if (data == null || data.Count == 0)
            {
                return NotFound();
            }
            return Ok(data); //returns status 200
        }

        [HttpGet("getInvoiceById/{id}")] 
        public async Task<IActionResult> GetSingleInvoice(int id)
        {
            var result = await _bookingSystemDbContext.Invoice.FromSqlRaw("EXEC GetSingleInvoice @InvoiceId",
                new SqlParameter("@InvoiceId", id)
            ).ToListAsync();

            if (result == null || result.Count == 0)
            {
                return NotFound();
            }

            return Ok(result);
        }

        [HttpPost("addInvoice")]
        public async Task<ActionResult> AddInvoice(Invoice invoice)
        {
            var result = await _bookingSystemDbContext.Database.ExecuteSqlRawAsync("EXEC CreateInvoiceAPI @c_id, @InvoiceDate, @TotalAmount, @Discount, @DiscountedAmount",

                new SqlParameter("@c_id", invoice.c_id),
                new SqlParameter("@InvoiceDate", invoice.InvoiceDate),
                new SqlParameter("@TotalAmount", invoice.TotalAmount),
                new SqlParameter("@Discount", invoice.Discount),
                new SqlParameter("@DiscountedAmount", invoice.DiscountedAmount)
                );

            if (result <= 0)
            {
                return BadRequest();
            }

            return Ok();
        }

        [HttpPut("updateInvoice/{id}")]
        public async Task<IActionResult> UpdateInvoice(int id, Invoice invoice)
        {
            var result = await _bookingSystemDbContext.Database.ExecuteSqlRawAsync("EXEC UpdateInvoiceAPI @InvoiceId, @c_id, @InvoiceDate, @TotalAmount, @Discount, @DiscountedAmount",
                new SqlParameter("@InvoiceId", id),
                new SqlParameter("@c_id", invoice.c_id),
                new SqlParameter("@InvoiceDate", invoice.InvoiceDate),
                new SqlParameter("@TotalAmount", invoice.TotalAmount),
                new SqlParameter("@Discount", invoice.Discount),
                new SqlParameter("@DiscountedAmount", invoice.DiscountedAmount)

            );

            if (result <= 0)
            {
                return BadRequest();
            }

            return Ok();
        }

        [HttpDelete("deleteInvoice/{id}")]
        public async Task<IActionResult> DeleteInvoice(int id)
        {
            var result = await _bookingSystemDbContext.Database.ExecuteSqlRawAsync("EXEC DeleteInvoiceAPI @InvoiceId",
                new SqlParameter("@InvoiceId", id)
            );

            if (result <= 0)
            {
                return BadRequest();
            }

            return Ok();
        }
    }
}
