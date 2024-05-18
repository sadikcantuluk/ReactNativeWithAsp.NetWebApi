using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
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
            if (categories is not null)
            {
                return Ok(categories);
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

    }
}
