using System.ComponentModel.DataAnnotations;

namespace ReactNativeWebApi.Dto.UserDto
{
    public class LoginRequestDto
    {
        public string Email { get; set; }

        [Required(ErrorMessage = "Password alanı zorunludur.")]
        public string Password { get; set; }
    }
}
