using System.ComponentModel.DataAnnotations;

namespace WebAPI.Models
{
    public class PaymentProcess
    {
        [Key]
        public int p_id { get; set; }
        public int c_id { get; set; }
        public int r_id { get; set; }
        public int Quantity { get; set; }
        public DateTime TransactionDate { get; set; }

    }
}
