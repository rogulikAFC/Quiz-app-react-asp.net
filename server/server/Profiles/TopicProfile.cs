using AutoMapper;
using server.Entities;
using server.Models;

namespace server.Profiles
{
    public class TopicProfile : Profile
    {
        public TopicProfile()
        {
            CreateMap<Topic, TopicDto>();
        }
    }
}
