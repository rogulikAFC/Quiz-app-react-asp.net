using Microsoft.EntityFrameworkCore;
using server.Entities;

namespace server.DbContexts
{
    public class ServerContext : DbContext
    {
        public ServerContext(DbContextOptions<ServerContext> options) : base(options) { }

        public DbSet<User> Users { get; set; }
        public DbSet<Topic> Topics { get; set; }
        public DbSet<Question> Questions { get; set; }
        public DbSet<Answer> Answers { get; set; }

        /* protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>().HasData(
                new User("Vladimir", "testmail@gmail.com", "qwerty123456") 
                {
                    Id = Guid.NewGuid(),
                }
                );

            modelBuilder.Entity<Topic>().HasData(
                new Topic("Food")
                {
                    Id = Guid.NewGuid(),
                },
                new Topic("Society")
                {
                    Id = Guid.NewGuid(),
                },
                new Topic("School")
                {
                    Id = Guid.NewGuid(),
                },
                new Topic("Math")
                {
                    Id = Guid.NewGuid(),
                },
                new Topic("Biology")
                {
                    Id = Guid.NewGuid(),
                },
                new Topic("Chemistry")
                {
                    Id = Guid.NewGuid(),
                },
                new Topic("Python")
                {
                    Id = Guid.NewGuid(),
                }
                );

            modelBuilder.Entity<Question>().HasData(
                new Question("Question Text 1", 20, Guid.Parse("0990C2D4-95C6-4AC4-98CD-477982E788A8"))
                {
                    Id = Guid.NewGuid()
                },
                new Question("Question Text 2", 20, Guid.Parse("0990C2D4-95C6-4AC4-98CD-477982E788A8"))
                {
                    Id = Guid.NewGuid()
                }
                new Question("Question Text 3", 20, Guid.Parse("0990C2D4-95C6-4AC4-98CD-477982E788A8"))
                {
                    Id = Guid.NewGuid()
                },
                new Question("Question Text 4", 20, Guid.Parse("0990C2D4-95C6-4AC4-98CD-477982E788A8"))
                {
                    Id = Guid.NewGuid()
                },
                new Question("Question Text 5", 20, Guid.Parse("0990C2D4-95C6-4AC4-98CD-477982E788A8"))
                {
                    Id = Guid.NewGuid()
                } 
                );

            /* modelBuilder.Entity<Answer>().HasData(
                new Answer("Answer 1", true)
                {
                    Id = Guid.NewGuid()
                },
                new Answer("Answer 2", false)
                {
                    Id = Guid.NewGuid()
                },
                new Answer("Answer 3", false)
                {
                    Id = Guid.NewGuid()
                },
                new Answer("Answer 4", false)
                {
                    Id = Guid.NewGuid()
                },
                new Answer("Answer 1", true)
                {
                    Id = Guid.NewGuid()
                },
                new Answer("Answer 2", false)
                {
                    Id = Guid.NewGuid()
                },
                new Answer("Answer 3", false)
                {
                    Id = Guid.NewGuid()
                },
                new Answer("Answer 4", false)
                {
                    Id = Guid.NewGuid()
                },
                new Answer("Answer 1", true)
                {
                    Id = Guid.NewGuid()
                },
                new Answer("Answer 2", false)
                {
                    Id = Guid.NewGuid()
                },
                new Answer("Answer 3", false)
                {
                    Id = Guid.NewGuid()
                },
                new Answer("Answer 4", false)
                {
                    Id = Guid.NewGuid()
                },
                new Answer("Answer 1", true)
                {
                    Id = Guid.NewGuid()
                },
                new Answer("Answer 2", false)
                {
                    Id = Guid.NewGuid()
                },
                new Answer("Answer 3", false)
                {
                    Id = Guid.NewGuid()
                },
                new Answer("Answer 4", false)
                {
                    Id = Guid.NewGuid()
                }
                );

            modelBuilder.Entity<Question>()
                .HasMany(question => question.Answers)
                .WithMany(answer => answer.Questions)
                .UsingEntity<Dictionary<string, object>>(
                    "AnswerQuestion",
                    r => r.HasOne<Answer>().WithMany().HasForeignKey("AnswersId"),
                    l => l.HasOne<Question>().WithMany().HasForeignKey("QuestionsId"),
                    je =>
                    {
                        je.HasKey("AnswersId", "QuestionsId");
                        je.HasData(
                            new { QuestionsId = Guid.Parse("34500781-F063-4841-86B4-E7CE225D8837"), AnswersId = Guid.Parse("109A6F5F-B203-4590-9DF4-5FA77455B2EE") },
                            new { QuestionsId = Guid.Parse("34500781-F063-4841-86B4-E7CE225D8837"), AnswersId = Guid.Parse("21D7BA73-4EF3-4CC7-903D-3644C6276DDF") },
                            new { QuestionsId = Guid.Parse("34500781-F063-4841-86B4-E7CE225D8837"), AnswersId = Guid.Parse("317AAC07-D3B2-49AA-8A18-3C077893DC8D") },
                            new { QuestionsId = Guid.Parse("34500781-F063-4841-86B4-E7CE225D8837"), AnswersId = Guid.Parse("51604E14-D273-4619-81C3-F9F64F576AC7") },

                            new { QuestionsId = Guid.Parse("3CD2D462-E40B-4385-BAEC-986B3DA00FF6"), AnswersId = Guid.Parse("5E1FD473-78D6-4C34-BFFB-20E946B99544") },
                            new { QuestionsId = Guid.Parse("3CD2D462-E40B-4385-BAEC-986B3DA00FF6"), AnswersId = Guid.Parse("5F2E50B4-05C8-41C8-92B2-A19E467D5C07") },
                            new { QuestionsId = Guid.Parse("3CD2D462-E40B-4385-BAEC-986B3DA00FF6"), AnswersId = Guid.Parse("60CD4569-AB59-4748-87AC-945ADB584D10") },
                            new { QuestionsId = Guid.Parse("3CD2D462-E40B-4385-BAEC-986B3DA00FF6"), AnswersId = Guid.Parse("60FD4099-8E24-43E4-B2B7-61D196A0439D") },

                            new { QuestionsId = Guid.Parse("92CBF69F-885B-48CB-B70E-40BD842B7F45"), AnswersId = Guid.Parse("61D9E151-0FD3-4FED-B337-D413F47ED202") },
                            new { QuestionsId = Guid.Parse("92CBF69F-885B-48CB-B70E-40BD842B7F45"), AnswersId = Guid.Parse("6641FB77-6390-4809-8D5F-32700560D57F") },
                            new { QuestionsId = Guid.Parse("92CBF69F-885B-48CB-B70E-40BD842B7F45"), AnswersId = Guid.Parse("7C495755-536C-4578-B93C-3839648F31E6") },
                            new { QuestionsId = Guid.Parse("92CBF69F-885B-48CB-B70E-40BD842B7F45"), AnswersId = Guid.Parse("9F85A337-F6D6-4BA8-A97E-AB13095AC332") },

                            new { QuestionsId = Guid.Parse("93706AFA-EECA-4FAB-8BD3-0593564EB9DE"), AnswersId = Guid.Parse("A1009EB5-475A-4765-9FE6-D392AE95E8C2") },
                            new { QuestionsId = Guid.Parse("93706AFA-EECA-4FAB-8BD3-0593564EB9DE"), AnswersId = Guid.Parse("A6B64B6C-25DE-463B-8D32-C28EFD7AA489") },
                            new { QuestionsId = Guid.Parse("93706AFA-EECA-4FAB-8BD3-0593564EB9DE"), AnswersId = Guid.Parse("DB7AD29B-9D29-45BC-B147-0E018457B50E") },
                            new { QuestionsId = Guid.Parse("93706AFA-EECA-4FAB-8BD3-0593564EB9DE"), AnswersId = Guid.Parse("E0D26459-AC5B-42D0-B09E-47FE203BB35D") });
                    }
                );

            base.OnModelCreating(modelBuilder);
        } */
    }
}
