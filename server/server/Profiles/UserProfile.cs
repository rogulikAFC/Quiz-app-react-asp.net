using AutoMapper;
using server.Entities;
using server.Models;

namespace server.Profiles
{
    public class UserProfile : Profile
    {
        public UserProfile()
        {
            CreateMap<User, UserDto>();
            CreateMap<UserForRegistrationDto, User>();
        }
    }
}
