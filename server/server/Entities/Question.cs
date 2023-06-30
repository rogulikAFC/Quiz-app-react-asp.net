using server.DbContexts;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace server.Entities
{
    public class Question
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid Id { get; set; }

        [Required]
        public string QuestionText { get; set; }
        
        public ICollection<Answer> Answers { get; set; }

        [Required]
        public virtual Guid? CorrectAnswerId
        {
            get
            {
                return Answers
                    .FirstOrDefault(answer => answer.IsCorrect == true)?
                    .Id;
            }
        }

        [Required]
        [Range(5, int.MaxValue)]
        public int TimeInSeconds { get; set; }

        [Required]
        [ForeignKey("Topic")]
        public Guid TopicId { get; set; }

        /* public Question(string questionText, int timeInSeconds, Guid topicId, ICollection<Answer> answers)
        {
            QuestionText = questionText;
            TimeInSeconds = timeInSeconds;
            TopicId = topicId;
            Answers = answers;
        } */
    }
}
