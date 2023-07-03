using AutoMapper;
using server.Entities;
using server.Models;

namespace server.Profiles
{
    public class QuestionProfile : Profile
    {
        public QuestionProfile()
        {
            CreateMap<Question, QuestionDto>();
        }
    }
}
