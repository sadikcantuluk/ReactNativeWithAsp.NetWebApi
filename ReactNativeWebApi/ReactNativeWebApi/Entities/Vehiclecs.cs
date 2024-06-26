﻿using ReactNativeWebApi.Models;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

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
        public string ImageUrl { get; set; }
        public Guid CategoryId { get; set; }
        [JsonIgnore]
        public Category Category { get; set; }
    }
}
