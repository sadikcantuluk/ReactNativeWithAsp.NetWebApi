using System.ComponentModel.DataAnnotations;

namespace ReactNativeWebApi.Dto.UserDto
{
    public class RegisterRequestDto
    {
        public string Email { get; set; }

        [Required(ErrorMessage = "Password alanı zorunludur.")]
        public string Password { get; set; }

        [Required(ErrorMessage = "Password alanı zorunludur.")]

        [Compare("Password", ErrorMessage = "Password doğrulanamadı.")]
        public string ConfirmPassword { get; set; }
    }
}
