using ReactNativeWebApi.Models;
using System.ComponentModel.DataAnnotations;

namespace ReactNativeWebApi.Entities
{
    public enum Roles
    {
        Admin = 0,
        NormalUser = 1
    }
    public class User : BaseModel
    {
        public string Email { get; set; }

        [Required(ErrorMessage = "Password alanı zorunludur.")]
        public string Password { get; set; }

        [Required(ErrorMessage = "Password alanı zorunludur.")]

        [Compare("Password", ErrorMessage = "Password doğrulanamadı.")]
        public string ConfirmPassword { get; set; }
        public string? Role { get; set; }
    }
}
