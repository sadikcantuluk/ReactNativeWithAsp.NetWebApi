using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ReactNativeWebApi.Context;
using ReactNativeWebApi.Dto.CategoryDto;
using ReactNativeWebApi.Dto.VehicleDto;
using ReactNativeWebApi.Entities;

namespace ReactNativeWebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VehicleController : ControllerBase
    {
        private readonly ApplicationContextDb _applicationContextDb;
        public VehicleController(ApplicationContextDb applicationContextDb)
        {
            _applicationContextDb = applicationContextDb;
        }

        [HttpGet("GetAllVehicle")]
        public IActionResult GetAllVehicle()
        {
            List<Vehiclecs> vehiclecs = _applicationContextDb.Vehiclecs.ToList();
            if (vehiclecs is not null)
            {
                return Ok(vehiclecs);
            }
            return BadRequest();
        }

        [HttpGet("GetVehicle/{id}")]
        public IActionResult GetVehicle([FromRoute] Guid id)
        {
            Vehiclecs value = _applicationContextDb.Vehiclecs.Find(id);
            if (value is not null)
            {
                return Ok(value);
            }
            return BadRequest();
        }

        [HttpPost("AddVehicle")]
        public IActionResult AddVehicle(ResultVehicleDto resultVehicleDto)
        {
            Vehiclecs vehiclecs = new Vehiclecs()
            {
                Brand = resultVehicleDto.Brand,
                ModelYear = resultVehicleDto.ModelYear,
                Model = resultVehicleDto.Model,
                Price = resultVehicleDto.Price,
                Description = resultVehicleDto.Description,
                CategoryId = resultVehicleDto.CategoryId,
            };
            _applicationContextDb.Vehiclecs.Add(vehiclecs);
            _applicationContextDb.SaveChanges();
            return Ok();
        }

        [HttpDelete("RemoveVehicle/{vehicleId}")]
        public IActionResult RemoveVehicle([FromRoute] Guid vehicleId)
        {
            Vehiclecs value = _applicationContextDb.Vehiclecs.Find(vehicleId);
            if (value != null)
            {
                _applicationContextDb.Vehiclecs.Remove(value);
                if (_applicationContextDb.SaveChanges() > 0)
                {
                    return Ok();
                }
            }
            return BadRequest();
        }

        [HttpPut("UpdateVehicle/{vehicleId}")]
        public IActionResult UpdateVehicle([FromRoute] Guid vehicleId, ResultVehicleDto resultVehicleDto)
        {
            Vehiclecs value = _applicationContextDb.Vehiclecs.Find(vehicleId);
            if (value != null)
            {
                value.Brand = resultVehicleDto.Brand;
                value.ModelYear = resultVehicleDto.ModelYear;
                value.Model = resultVehicleDto.Model;
                value.Price = resultVehicleDto.Price;
                value.Description = resultVehicleDto.Description;
                value.CategoryId = resultVehicleDto.CategoryId;

                if (_applicationContextDb.SaveChanges() > 0)
                {
                    return Ok();
                }
            }
            return BadRequest();
        }
    }
}
