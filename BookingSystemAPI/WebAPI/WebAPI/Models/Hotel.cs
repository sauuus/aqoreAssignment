using System.ComponentModel.DataAnnotations;

namespace WebAPI.Models
{
    public class Hotel
    {
        [Key]
        public int h_id { get; set; }
        public string h_name { get; set; }
        public string h_description { get; set; }
        public string h_address { get; set; }

    }
}
