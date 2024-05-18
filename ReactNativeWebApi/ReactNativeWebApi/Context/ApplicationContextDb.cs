using Microsoft.EntityFrameworkCore;
using ReactNativeWebApi.Entities;

namespace ReactNativeWebApi.Context
{
    public class ApplicationContextDb : DbContext
    {
        public ApplicationContextDb(DbContextOptions options) : base(options)
        {
            
        }

        public DbSet<Vehiclecs> Vehiclecs { get; set; }
        public DbSet<Category> Categories { get; set; }
    }
}
