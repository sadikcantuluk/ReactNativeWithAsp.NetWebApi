using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ReactNativeWebApi.Context;
using ReactNativeWebApi.Dto.CategoryDto;
using ReactNativeWebApi.Entities;

namespace ReactNativeWebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        private readonly ApplicationContextDb _applicationContextDb;
        private readonly IMapper _mapper;

        public CategoryController(ApplicationContextDb applicationContextDb)
        {
            _applicationContextDb = applicationContextDb;
        }

        [HttpGet]
        public IActionResult GetAllCategory()
        {
            List<Category> categories = _applicationContextDb.Categories.ToList();
            try
            {
                if (categories is not null)
                {
                    // Content-Type başlığını ekle
                    Response.Headers.Add("Content-Type", "application/json");
                    return Ok(categories);
                }
            }
            catch (Exception ex)
            {
                // Content-Type başlığını ekle
                Response.Headers.Add("Content-Type", "application/json");
                return StatusCode(500, new { error = "Internal Server Error", message = ex.Message });
            }
            return BadRequest();
        }

        [HttpGet("{id}")]
        public IActionResult GetCategory([FromRoute] Guid id)
        {
            Category value = _applicationContextDb.Categories.Find(id);
            if (value is not null)
            {
                return Ok(value);
            }
            return BadRequest();
        }

        [HttpPost]
        public IActionResult AddCategory(ResultCategoryDto resultCategoryDto)
        {
            Category category = new Category()
            {
                CategoryName = resultCategoryDto.CategoryName,
                CategoryDescription = resultCategoryDto.CategoryDescription,
            };
            _applicationContextDb.Categories.Add(category);
            _applicationContextDb.SaveChanges();
            return Ok();
        }

        [HttpDelete("{categoryId}")]
        public IActionResult RemoveCategory([FromRoute] Guid categoryId)
        {
            Category value = _applicationContextDb.Categories.Find(categoryId);
            if (value != null)
            {
                _applicationContextDb.Categories.Remove(value);
                if (_applicationContextDb.SaveChanges() > 0)
                {
                    return Ok();
                }
            }
            return BadRequest();
        }

        [HttpPut("{categoryId}")]
        public IActionResult UpdateCategory([FromRoute] Guid categoryId, ResultCategoryDto resultCategoryDto)
        {
            Category value = _applicationContextDb.Categories.Find(categoryId);
            if (value != null)
            {
                value.CategoryName = resultCategoryDto.CategoryName;
                value.CategoryDescription = resultCategoryDto.CategoryDescription;

                if (_applicationContextDb.SaveChanges() > 0)
                {
                    return Ok();
                }
            }
            return BadRequest();
        }

        [HttpGet("GetVehiclesByCategoryId/{categoryId}")]
        public IActionResult GetVehiclesByCategoryId(Guid categoryId)
        {
            var values = _applicationContextDb.Categories.Include(x => x.Vehiclecs).FirstOrDefault(x => x.Id == categoryId);
            if (values != null)
            {
                return Ok(values);
            }
            return BadRequest();
        }

    }
}
