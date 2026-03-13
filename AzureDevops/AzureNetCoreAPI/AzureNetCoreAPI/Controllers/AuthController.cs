using AzureNetCoreAPI.Model;
using AzureNetCoreAPI.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace AzureNetCoreAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IConfiguration _config;
        private readonly JwtService _jwtService;

        public AuthController(IConfiguration config, JwtService jwtService)
        {
            _config = config;
            _jwtService = jwtService;
        }

        [HttpPost("login")]
        public IActionResult Login(LoginRequest request)
        {
            var admin = _config.GetSection("AdminUser");

            if (request.Username == admin["Username"] &&
                request.Password == admin["Password"])
            {
                var token = _jwtService.GenerateToken(request.Username);

                return Ok(new { token });
            }

            return Unauthorized();
        }
    }
}
