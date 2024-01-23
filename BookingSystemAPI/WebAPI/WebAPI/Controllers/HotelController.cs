using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using WebAPI.Data;
using WebAPI.Models;

namespace WebAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")] //routes to controller name 
    public class HotelController : Controller
    {
        private readonly BookingSystemDbContext _bookingSystemDbContext;

        public HotelController(BookingSystemDbContext bookingSystemDbContext)
        {
            _bookingSystemDbContext = bookingSystemDbContext;
        }
        [HttpGet("getHotel")]

        public async Task<IActionResult> GetHotels()
        {
            var hotels = await _bookingSystemDbContext.Hotels.FromSqlRaw("GetAllHotels").ToListAsync();
            if (hotels == null || hotels.Count == 0)
            {
                return NotFound();
            }
            return Ok(hotels); //returns status 200
        }

        [HttpGet("getHotelById/{id}")]
        public async Task<IActionResult> GetSingleHotel(int id)
        {
            var data = await _bookingSystemDbContext.Hotels.FromSqlRaw("EXEC GetSingleHotel @h_id;",
                new SqlParameter("@h_id", id)
            ).ToListAsync();

            if (data == null || data.Count == 0)
            {
                return NotFound();
            }

            return Ok(data);
        }

        [HttpPost("addHotel")]
        public async Task<IActionResult> AddHotel([FromBody]Hotel hotel)
        {
            var data = await _bookingSystemDbContext.Database.ExecuteSqlRawAsync("EXEC CreateHotelAPI @h_name, @h_description,@h_address",

                new SqlParameter("@h_name", hotel.h_name),
                new SqlParameter("@h_description", hotel.h_description),
                new SqlParameter("@h_address", hotel.h_address)

                );
            if (data <= 0)
            {
                return BadRequest();
            }
            return Ok();
        }

        [HttpPut("updateHotel/{id}")]
        public async Task<IActionResult> UpdateHotel(int id, Hotel hotel)
        {
            var data = await _bookingSystemDbContext.Database.ExecuteSqlRawAsync("EXEC UpdateHotelAPI @h_id, @h_name,@h_description,@h_address",
                new SqlParameter("@h_id", id),
                new SqlParameter("@h_name", hotel.h_name),
                new SqlParameter("@h_description", hotel.h_description),
                new SqlParameter("@h_address", hotel.h_address)

            );

            if (data <= 0)
            {
                return BadRequest();
            }

            return Ok(data);
        }

        [HttpDelete("deleteHotel/{id}")]
        public async Task<IActionResult> DeleteHotel(int id)
        {
            var result = await _bookingSystemDbContext.Database.ExecuteSqlRawAsync("EXEC DeleteHotelAPI @h_id",
                new SqlParameter("@h_id", id)
            );

            if (result <= 0)
            {
                return BadRequest();
            }

            return Ok();
        }

    }
}
