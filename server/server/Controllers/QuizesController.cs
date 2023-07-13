using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using server.Models;
using server.Services;

namespace server.Controllers
{
    [ApiController]
    [Route("api/quizes")]
    public class QuizesController : ControllerBase
    {
        private readonly IServerRepository _serverRepository;
        private readonly IMapper _mapper;
        private readonly ILogger<QuizesController> _logger;

        public QuizesController(IServerRepository serverRepository, IMapper mapper, ILogger<QuizesController> logger)
        {
            _serverRepository = serverRepository
                ?? throw new ArgumentNullException(nameof(serverRepository));

            _mapper = mapper
                ?? throw new ArgumentNullException(nameof(mapper));

            _logger = logger
                ?? throw new ArgumentNullException(nameof(logger));
        }

        [HttpPost("get_quiz")]
        public async Task<ActionResult<List<QuestionDto>>> GetQuiz(GetQuizDto getQuizDto)
        {
            var topicsIds = getQuizDto.TopicsIds;

            var quiz = new List<QuestionDto>();

            foreach (var topicId in topicsIds)
            {
                if (!await _serverRepository.IsTopicValid(topicId))
                {
                    return NotFound(nameof(topicId));
                }

                var question = await _serverRepository.GetRandomQuestionByTopicAsync(topicId);

                if (question == null)
                {
                    continue;
                }

                var answersDtosList = new List<AnswerDto>();

                foreach (var answer in question.Answers)
                {
                    var answerDto = _mapper.Map<AnswerDto>(answer);

                    answersDtosList.Add(answerDto);
                }

                var questionDto = _mapper.Map<QuestionDto>(question);
                
                questionDto.Answers = answersDtosList;

                quiz.Add(questionDto);
            }

            return Ok(quiz);
        }
    }
}
