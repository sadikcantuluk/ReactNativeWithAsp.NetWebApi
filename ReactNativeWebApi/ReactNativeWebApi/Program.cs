using Microsoft.EntityFrameworkCore;
using ReactNativeWebApi.AutoMapping;
using ReactNativeWebApi.Context;

var builder = WebApplication.CreateBuilder(args);

// CORS Yapýlandýrmasý (Daha Kapsamlý)
builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(builder =>
    {
        builder.WithOrigins("http://localhost:8081")
               .AllowAnyMethod()
               .AllowAnyHeader()
               .AllowCredentials();
    });
});


// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddAutoMapper(typeof(AutoMappingConfig).Assembly);

builder.Services.AddDbContext<ApplicationContextDb>(options =>
{
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection"));
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

// CORS Middleware'ini Uygulama
app.UseCors(); // DefaultPolicy'yi kullanýr (yukarýda tanýmladýðýmýz)

app.UseRouting();

app.UseAuthorization();

app.MapControllers();

app.Run();
