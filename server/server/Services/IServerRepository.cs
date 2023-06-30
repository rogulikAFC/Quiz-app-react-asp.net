using server.Entities;

namespace server.Services
{
    public interface IServerRepository
    {
        Task<User?> getUserByIdAsync(Guid id);
        void CreateUser(User user);
        Task<bool> SaveChangesAsync();
        Task<IEnumerable<Topic>> GetAllTopicsAsync();
    }
}
