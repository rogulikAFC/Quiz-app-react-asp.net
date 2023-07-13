using server.Entities;

namespace server.Services
{
    public interface IServerRepository
    {
        Task<User?> GetUserByIdAsync(Guid id);
        Task<User?> GetUserByEmailAsync(string email);
        Task<bool> SaveChangesAsync();
        Task<IEnumerable<Topic>> GetTopicsAsync(int pageNumber, int pageSize);
        Task<bool> IsTopicValid(Guid topicId);
        Task<Question?> GetRandomQuestionByTopicAsync(Guid topicId);
        void AddUser(User user);
    }
}
