namespace server.Models
{
    public class GetQuizDto
    {
        public ICollection<Guid> TopicsIds { get; set; } = new List<Guid>();
    }
}
