using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using server.Entities;
using server.Models;
using server.Services;

namespace server.Controllers
{
    [ApiController]
    [Route("api/users")]
    public class UsersController : ControllerBase
    {
        private readonly IServerRepository _serverRepository;
        private readonly ILogger<UsersController> _logger;
        private readonly IMapper _mapper;

        public UsersController(
            IServerRepository serverRepository,
            ILogger<UsersController> logger,
            IMapper mapper)
        {
            _mapper = mapper
                ?? throw new ArgumentNullException(nameof(mapper));

            _serverRepository = serverRepository
                ?? throw new ArgumentNullException(nameof(serverRepository));

            _logger = logger
                ?? throw new ArgumentNullException(nameof(logger));
        }

        [HttpGet("get_user/{id}", Name = "GetUser")]
        public async Task<ActionResult<UserDto>> GetUser(Guid id)
        {
            _logger.LogInformation("called");
            _logger.LogInformation(id.ToString());

            var user = await _serverRepository.getUserByIdAsync(id);

            if (user == null)
            {
                return NotFound();
            }

            var userDto = _mapper.Map<UserDto>(user);

            return Ok(userDto);
        }

        [HttpPost("registrate")]
        public async Task<ActionResult<UserDto>> CreateUser(
            UserForRegistrationDto user)
        {
            var finalUser = _mapper.Map<User>(user);
            finalUser.Id = Guid.NewGuid();

            await _serverRepository.SaveChangesAsync();

            var userDto = _mapper.Map<UserDto>(finalUser);

            return CreatedAtRoute("GetUser",
                new
                {
                    id = userDto.Id,
                },
                userDto);
        }
    }
}
