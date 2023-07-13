using Microsoft.EntityFrameworkCore;
using server.DbContexts;
using server.Entities;

namespace server.Services
{
    public class ServerRepository : IServerRepository
    {
        private readonly ServerContext _context;

        public ServerRepository(ServerContext context)
        {
            _context = context
                ?? throw new ArgumentNullException(nameof(context));
        }

        public async Task<User?> GetUserByIdAsync(Guid id)
        {
            return await _context.Users.FindAsync(id);
        }

        public async Task<User?> GetUserByEmailAsync(string email)
        {
            return await _context.Users
                .Where(u => u.Email == email)
                .FirstOrDefaultAsync();
        }

        public async Task<bool> SaveChangesAsync()
        {
            return await _context.SaveChangesAsync() >= 0;
        }

        public async Task<IEnumerable<Topic>> GetTopicsAsync(int pageNumber, int pageSize)
        {
            return await _context.Topics
                .Skip(pageNumber * pageSize)
                .Take(pageSize)
                .ToListAsync();
        }

        public async Task<bool> IsTopicValid(Guid topicId)
        {
            return await _context.Topics.FindAsync(topicId) != null;
        }

        public async Task<Question?> GetRandomQuestionByTopicAsync(Guid topicId)
        {
            return await _context.Questions
                .Where(q => q.TopicId == topicId)
                .OrderBy(q => EF.Functions.Random())
                .Include(q => q.Answers)
                .FirstOrDefaultAsync();
        }

        public void AddUser(User user)
        {
            _context.Add(user);
        }
    }
}
