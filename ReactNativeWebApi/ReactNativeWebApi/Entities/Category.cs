using ReactNativeWebApi.Models;

namespace ReactNativeWebApi.Entities
{
    public class Category : BaseModel
    {
        public string CategoryName { get; set; }
        public string CategoryDescription { get; set; }
        public int VehicleCount { get; set; }
        public List<Vehiclecs> Vehiclecs { get; set; }
    }
}
