using AutoMapper;
using ReactNativeWebApi.Dto.CategoryDto;
using ReactNativeWebApi.Dto.VehicleDto;
using ReactNativeWebApi.Entities;

namespace ReactNativeWebApi.AutoMapping
{
    public class AutoMappingConfig : Profile
    {
        public AutoMappingConfig()
        {
            CreateMap<Category, ResultCategoryDto>().ReverseMap();

            CreateMap<Vehiclecs, ResultVehicleDto>().ReverseMap();
        }
    }
}
