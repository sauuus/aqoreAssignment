using System.ComponentModel.DataAnnotations;

namespace WebAPI.Models
{
    public class Invoice
    {
        [Key]
        public int InvoiceId { get; set; }
        public int c_id { get; set; }
        public DateTime InvoiceDate { get; set; }
        public decimal TotalAmount { get; set; }
        public decimal Discount { get; set; }
        public decimal DiscountedAmount { get; set; }
    }
}