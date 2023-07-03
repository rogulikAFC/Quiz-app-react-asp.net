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
        public string QuestionText { get; set; } = null!;

        public virtual ICollection<Answer> Answers { get; set; } = new List<Answer>();

        public Guid? CorrectAnswerId
        {
            get
            {
                return Answers
                    .FirstOrDefault(a => a.IsCorrect)?
                    .Id;
            }
        }

        [Required]
        [Range(5, int.MaxValue)]
        public int TimeInSeconds { get; set; }

        [Required]
        [ForeignKey("Topic")]
        public Guid TopicId { get; set; }
    }
}
