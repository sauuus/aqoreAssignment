using System.ComponentModel.DataAnnotations;

namespace WebAPI.Models
{
    public class Room
    
         {
        [Key]
        public int r_id { get; set; }
        public int h_id { get; set; }
        public string r_type { get; set; }
        public bool Available { get; set; }
        public decimal Price { get; set; }
        public int RemainingQuantity { get; set; }
    }
}
