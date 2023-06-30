using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace server.Entities
{
    public class Answer
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid Id { get; set; }

        [Required]
        public string Text { get; set; }

        public bool IsCorrect { get; set; }

        public ICollection<Question> Questions { get; set; }

        /* public Answer(string text, bool isCorrect = false)
        {
            Text = text;
            IsCorrect = isCorrect;
        } */
    }
}
