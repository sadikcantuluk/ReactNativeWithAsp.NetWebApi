using ReactNativeWebApi.Models;
using System.ComponentModel.DataAnnotations.Schema;

namespace ReactNativeWebApi.Entities
{
    public class Vehiclecs : BaseModel
    {
        public string Brand { get; set; }
        public string Model { get; set; }
        public string ModelYear { get; set; }

        [Column(TypeName = "decimal(18,2)")]
        public decimal Price { get; set; }
        public string Description { get; set; }
        public Guid CategoryId { get; set; }
        public Category Category { get; set; }
    }
}
