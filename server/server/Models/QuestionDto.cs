namespace server.Models
{
    public class QuestionDto
    {
        public Guid Id { get; set; }
        public string QuestionText { get; set; }
        public ICollection<AnswerDto> Answers { get; set; }
        public Guid? CorrectAnswerId { get; set; }
        public int TimeInSeconds { get; set; }
    }
}
