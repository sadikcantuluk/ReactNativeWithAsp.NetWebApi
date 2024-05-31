using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ReactNativeWebApi.Context;
using ReactNativeWebApi.Dto.UserDto;
using ReactNativeWebApi.Entities;

namespace ReactNativeWebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private ApplicationContextDb _context;

        public AccountController(ApplicationContextDb context)
        {
            _context = context;
        }

        [HttpPost("Register")]
        public IActionResult Register(RegisterRequestDto registerRequestDto)
        {
            User user = new User()
            {
                Email = registerRequestDto.Email,
                Password = registerRequestDto.Password,
                ConfirmPassword = registerRequestDto.ConfirmPassword,
            };

            _context.Users.Add(user);
            if (_context.SaveChanges() > 0)
            {
                return Ok();
            }
            return BadRequest();
        }

        [HttpPost("CheckTrueAdmin")]
        public IActionResult CheckTrueAdmin(LoginRequestDto loginRequestDto)
        {
            User user = _context.Users.FirstOrDefault(x => x.Email == loginRequestDto.Email);

            if (user != null && user.Password == loginRequestDto.Password)
            {
                if (user.Role == Roles.Admin.ToString())
                {
                    return Ok(true);
                }
            }
            return BadRequest(false);
        }
    }
}
