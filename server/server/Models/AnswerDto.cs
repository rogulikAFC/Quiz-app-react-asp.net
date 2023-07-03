using System.Text.Json.Serialization;

namespace server.Models
{
    public class AnswerDto
    {
        public Guid Id { get; set; }

        [JsonPropertyName("answer")]
        public string Text { get; set; } = null!;
    }
}
