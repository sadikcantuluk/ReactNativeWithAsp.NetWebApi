﻿using System.ComponentModel.DataAnnotations.Schema;

namespace ReactNativeWebApi.Dto.VehicleDto
{
    public class ResultVehicleDto
    {
        public string Brand { get; set; }
        public string Model { get; set; }
        public string ModelYear { get; set; }

        [Column(TypeName = "decimal(18,2)")]
        public decimal Price { get; set; }
        public string Description { get; set; }
        public Guid CategoryId { get; set; }
    }
}
