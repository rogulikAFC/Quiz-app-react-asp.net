using server.Entities;

namespace server.Services
{
    public interface IServerRepository
    {
        Task<User?> getUserByIdAsync(Guid id);
        void CreateUser(User user);
        Task<bool> SaveChangesAsync();
        Task<IEnumerable<Topic>> GetTopicsAsync(int pageNumber, int pageSize);
        Task<Question?> GetRandomQuestionByTopicAsync(Guid topicId);
    }
}
