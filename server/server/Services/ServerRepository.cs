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

        public async Task<User?> getUserByIdAsync(Guid id)
        {
            return await _context.Users.FindAsync(id);
        }

        public void CreateUser(User user)
        {
            _context.Add(user);
        }

        public async Task<bool> SaveChangesAsync()
        {
            return await _context.SaveChangesAsync() >= 0;
        }

        public async Task<IEnumerable<Topic>> GetTopicsAsync(int pageNumber, int pageSize)
        {
            return await _context.Topics
                .Skip(pageNumber * pageSize - 1)
                .Take(pageSize)
                .ToListAsync();
        }

        public async Task<Question?> GetRandomQuestionByTopicAsync(Guid topicId)
        {
            return await _context.Questions
                .OrderBy(q => EF.Functions.Random())
                .Include(q => q.Answers)
                .FirstAsync(); // need tests
        }
    }
}
