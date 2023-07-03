using AutoMapper;
using server.Entities;
using server.Models;

namespace server.Profiles
{
    public class AnswerProfile : Profile
    {
        public AnswerProfile()
        {
            CreateMap<Answer, AnswerDto>();
        }
    }
}
