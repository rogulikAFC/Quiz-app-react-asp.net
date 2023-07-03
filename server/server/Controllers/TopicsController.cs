using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using server.Models;
using server.Services;
using System.Reflection.Metadata.Ecma335;

namespace server.Controllers
{
    [Route("api/topics")]
    [ApiController]
    public class TopicsController : ControllerBase
    {
        private readonly IServerRepository _serverRepository;
        private readonly IMapper _mapper;
        const int maxTopicsPageSize = 20;

        public TopicsController(IMapper mapper, IServerRepository serverRepository)
        {
            _serverRepository = serverRepository
                ?? throw new ArgumentNullException(nameof(serverRepository));

            _mapper = mapper
                ?? throw new ArgumentNullException(nameof(mapper));
        }

        public async Task<ActionResult<IEnumerable<TopicDto>>> GetTopics(
            int pageNumber = 1, int pageSize = 10)
        {
            if (pageSize > maxTopicsPageSize)
            {
                return BadRequest();
            }

            var topics = await _serverRepository.GetTopicsAsync(
                pageNumber, pageSize);

            var topicDtos = new List<TopicDto>();

            foreach (var topic in topics)
            {
                var topicDto = _mapper.Map<TopicDto>(topic);
                topicDtos.Add(topicDto);
            }

            return Ok(topicDtos);
        }
    }
}
