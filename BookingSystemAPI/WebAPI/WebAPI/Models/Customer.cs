using System.ComponentModel.DataAnnotations;

namespace WebAPI.Models
{
    public class Customer
    {
        [Key]
        public int c_id { get; set; }
        public string FullName { get; set; }
        public string Email { get; set; }
        public string Contact { get; set; }

    }
}
