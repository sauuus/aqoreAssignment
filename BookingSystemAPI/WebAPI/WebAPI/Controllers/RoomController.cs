using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using System.Data;
using WebAPI.Data;
using WebAPI.Models;

namespace WebAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class RoomController : Controller
    {
        
            private readonly BookingSystemDbContext _bookingSystemDbContext;
        private SqlDbType available;

        public SqlDbType Available { get; private set; }

        public RoomController(BookingSystemDbContext bookingSystemDbContext)
        {
            _bookingSystemDbContext = bookingSystemDbContext;
        }

        [HttpGet("getRoom")]

        public async Task<IActionResult> GetAllRooms()
        {
            var result = await _bookingSystemDbContext.Room.FromSqlRaw("GetAllRooms").ToListAsync();
            if (result == null || result.Count == 0)
            {
                return NotFound("No Rooms Found!!");
            }
            return Ok(result); //returns status 200
        }

        [HttpGet("getRoomById/{id}")]
        public async Task<IActionResult> GetSingleRoom(int id)
        {
            var result = await _bookingSystemDbContext.Room.FromSqlRaw("EXEC GetSingleRoom @r_id",
                new SqlParameter("@r_id", id)
            ).ToListAsync();

            if (result == null || result.Count == 0)
            {
                return NotFound();
            }

            return Ok(result);
        }

        [HttpGet("getAllRoomByHotel/{id}")]
        public async Task<IActionResult> GetAllRoomByHotel(int id)
        {
            var result = await _bookingSystemDbContext.Room.FromSqlRaw("EXEC GetAllRoomByHotel @h_id",
                new SqlParameter("@h_id", id)
            ).ToListAsync();

            if (result == null || result.Count == 0)
            {
                return NotFound();
            }

            return Ok(result);
        }


            [HttpGet("getRoomByAvailableId/{id}")]
        public async Task<IActionResult> GetRoomByAvailable(int id)
        {
            // Include the second parameter for the stored procedure
            var data = await _bookingSystemDbContext.Room.FromSqlRaw("EXEC GetRoomsByAvailableId @h_id, @Available",
                new SqlParameter("@h_id", id),
                new SqlParameter("@Available", true) // Set available to true
            ).ToListAsync();

            if (data == null || data.Count == 0)
            {
                return NotFound();
            }

            return Ok(data);
        }

        [HttpPost("addRoom")]
        public async Task<IActionResult> AddRoom([FromBody] Room room)
        {
            var existingRoom = await _bookingSystemDbContext.Room.FirstOrDefaultAsync(r => r.r_type == room.r_type && r.Price == room.Price);

            if (existingRoom != null)
            {
                // Return an appropriate error message to the client
                return BadRequest("A room with the same type and price already exists.");
            }
            var data = await _bookingSystemDbContext.Database.ExecuteSqlRawAsync("EXEC CreateRoomAPI @h_id,@r_type, @Price,@Available, @RemainingQuantity",

                new SqlParameter("@h_id", room.h_id),
                new SqlParameter("@r_type", room.r_type),
                new SqlParameter("@Price", room.Price),
                new SqlParameter("@RemainingQuantity", room.RemainingQuantity),
                new SqlParameter("@Available", room.Available)
                );
            if (data < 0)
            {
                return BadRequest();
            }
            return Ok(data);
        }


        [HttpPut("updateRoom/{id}")]
        public async Task<IActionResult> UpdateRoom(int id, Room room)
        {
            var data = await _bookingSystemDbContext.Database.ExecuteSqlRawAsync("EXEC UpdateRoomAPI @r_id,@h_id,@r_type, @Price,@Available, @RemainingQuantity",
                new SqlParameter("@r_id", id),
                new SqlParameter("@h_id", room.h_id),
                new SqlParameter("@r_type", room.r_type),
                new SqlParameter("@Price", room.Price),
                new SqlParameter("@RemainingQuantity", room.RemainingQuantity),
                new SqlParameter("@Available", room.Available)

            );

            if (data <= 0)
            {
                return BadRequest();
            }

            return Ok(data);
        }

        [HttpDelete("deleteRoom/{id}")]
        public async Task<IActionResult> DeleteRoom(int id)
        {
            var result = await _bookingSystemDbContext.Database.ExecuteSqlRawAsync("EXEC DeleteRoomAPI @r_id",
                new SqlParameter("@r_id", id)
            );

            if (result <= 0)
            {
                return BadRequest();
            }

            return Ok();
        }
    }
}