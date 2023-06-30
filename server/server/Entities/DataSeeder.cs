using server.DbContexts;

namespace server.Entities
{
    public class DataSeeder
    {
        private readonly ServerContext _context;

        public DataSeeder(ServerContext context)
        {
            _context = context
                ?? throw new ArgumentNullException(nameof(context));
        }

        public void Seed()
        {
            if (!_context.Topics.Any())
            {
                var topics = new List<Topic>()
                {
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
                };

                _context.Topics.AddRange(topics);
                _context.SaveChanges();
            }

            if (!_context.Questions.Any())
            {
                var questions = new List<Question>()
                {
                    new Question()
                    {
                        Id = Guid.NewGuid(),
                        QuestionText = "Math question 1",
                        Answers = new List<Answer>()
                        {
                            new Answer()
                            {
                                Id = Guid.NewGuid(),
                                Text = "Answer 1",
                                IsCorrect = true
                            },
                            new Answer()
                            {
                                Id = Guid.NewGuid(),
                                Text = "Answer 2",
                                IsCorrect = false
                            },
                            new Answer()
                            {
                                Id = Guid.NewGuid(),
                                Text = "Answer 3",
                                IsCorrect = false
                            },
                            new Answer()
                            {
                                Id = Guid.NewGuid(),
                                Text = "Answer 4",
                                IsCorrect = false
                            },
                        },
                        TopicId = new Guid("0E9BE6E2-2B14-40FC-A228-8FB28073B2CD")
                    },
                    new Question()
                    {
                        Id = Guid.NewGuid(),
                        QuestionText = "Math question 2",
                        Answers = new List<Answer>()
                        {
                            new Answer()
                            {
                                Id = Guid.NewGuid(),
                                Text = "Answer 1",
                                IsCorrect = true
                            },
                            new Answer()
                            {
                                Id = Guid.NewGuid(),
                                Text = "Answer 2",
                                IsCorrect = false
                            },
                            new Answer()
                            {
                                Id = Guid.NewGuid(),
                                Text = "Answer 3",
                                IsCorrect = false
                            },
                            new Answer()
                            {
                                Id = Guid.NewGuid(),
                                Text = "Answer 4",
                                IsCorrect = false
                            },
                        },
                        TopicId = new Guid("0E9BE6E2-2B14-40FC-A228-8FB28073B2CD")
                    },
                    new Question()
                    {
                        Id = Guid.NewGuid(),
                        QuestionText = "Math question 3",
                        Answers = new List<Answer>()
                        {
                            new Answer()
                            {
                                Id = Guid.NewGuid(),
                                Text = "Answer 1",
                                IsCorrect = true
                            },
                            new Answer()
                            {
                                Id = Guid.NewGuid(),
                                Text = "Answer 2",
                                IsCorrect = false
                            },
                            new Answer()
                            {
                                Id = Guid.NewGuid(),
                                Text = "Answer 3",
                                IsCorrect = false
                            },
                            new Answer()
                            {
                                Id = Guid.NewGuid(),
                                Text = "Answer 4",
                                IsCorrect = false
                            },
                        },
                        TopicId = new Guid("0E9BE6E2-2B14-40FC-A228-8FB28073B2CD")
                    },
                    new Question()
                    {
                        Id = Guid.NewGuid(),
                        QuestionText = "Math question 4",
                        Answers = new List<Answer>()
                        {
                            new Answer()
                            {
                                Id = Guid.NewGuid(),
                                Text = "Answer 1",
                                IsCorrect = true
                            },
                            new Answer()
                            {
                                Id = Guid.NewGuid(),
                                Text = "Answer 2",
                                IsCorrect = false
                            },
                            new Answer()
                            {
                                Id = Guid.NewGuid(),
                                Text = "Answer 3",
                                IsCorrect = false
                            },
                            new Answer()
                            {
                                Id = Guid.NewGuid(),
                                Text = "Answer 4",
                                IsCorrect = false
                            },
                        },
                        TopicId = new Guid("0E9BE6E2-2B14-40FC-A228-8FB28073B2CD")
                    },

                    new Question()
                    {
                        Id = Guid.NewGuid(),
                        QuestionText = "Biology question 1",
                        Answers = new List<Answer>()
                        {
                            new Answer()
                            {
                                Id = Guid.NewGuid(),
                                Text = "Answer 1",
                                IsCorrect = true
                            },
                            new Answer()
                            {
                                Id = Guid.NewGuid(),
                                Text = "Answer 2",
                                IsCorrect = false
                            },
                            new Answer()
                            {
                                Id = Guid.NewGuid(),
                                Text = "Answer 3",
                                IsCorrect = false
                            },
                            new Answer()
                            {
                                Id = Guid.NewGuid(),
                                Text = "Answer 4",
                                IsCorrect = false
                            },
                        },
                        TopicId = new Guid("DE436F37-6CB6-49BA-BDCD-4938AC985E64")
                    },
                    new Question()
                    {
                        Id = Guid.NewGuid(),
                        QuestionText = "Biology question 2",
                        Answers = new List<Answer>()
                        {
                            new Answer()
                            {
                                Id = Guid.NewGuid(),
                                Text = "Answer 1",
                                IsCorrect = true
                            },
                            new Answer()
                            {
                                Id = Guid.NewGuid(),
                                Text = "Answer 2",
                                IsCorrect = false
                            },
                            new Answer()
                            {
                                Id = Guid.NewGuid(),
                                Text = "Answer 3",
                                IsCorrect = false
                            },
                            new Answer()
                            {
                                Id = Guid.NewGuid(),
                                Text = "Answer 4",
                                IsCorrect = false
                            },
                        },
                        TopicId = new Guid("DE436F37-6CB6-49BA-BDCD-4938AC985E64")
                    },
                    new Question()
                    {
                        Id = Guid.NewGuid(),
                        QuestionText = "Biology question 3",
                        Answers = new List<Answer>()
                        {
                            new Answer()
                            {
                                Id = Guid.NewGuid(),
                                Text = "Answer 1",
                                IsCorrect = true
                            },
                            new Answer()
                            {
                                Id = Guid.NewGuid(),
                                Text = "Answer 2",
                                IsCorrect = false
                            },
                            new Answer()
                            {
                                Id = Guid.NewGuid(),
                                Text = "Answer 3",
                                IsCorrect = false
                            },
                            new Answer()
                            {
                                Id = Guid.NewGuid(),
                                Text = "Answer 4",
                                IsCorrect = false
                            },
                        },
                        TopicId = new Guid("DE436F37-6CB6-49BA-BDCD-4938AC985E64")
                    },
                    new Question()
                    {
                        Id = Guid.NewGuid(),
                        QuestionText = "Biology question 4",
                        Answers = new List<Answer>()
                        {
                            new Answer()
                            {
                                Id = Guid.NewGuid(),
                                Text = "Answer 1",
                                IsCorrect = true
                            },
                            new Answer()
                            {
                                Id = Guid.NewGuid(),
                                Text = "Answer 2",
                                IsCorrect = false
                            },
                            new Answer()
                            {
                                Id = Guid.NewGuid(),
                                Text = "Answer 3",
                                IsCorrect = false
                            },
                            new Answer()
                            {
                                Id = Guid.NewGuid(),
                                Text = "Answer 4",
                                IsCorrect = false
                            },
                        },
                        TopicId = new Guid("DE436F37-6CB6-49BA-BDCD-4938AC985E64")
                    }
                };

                _context.Questions.AddRange(questions);
                _context.SaveChanges();
            }

            if (!_context.Users.Any())
            {
                var users = new List<User>()
                {
                    new User()
                    {
                        Id = Guid.NewGuid(),
                        Name = "Vladimir",
                        Email = "rogulik@gmail.com",
                        Password = "password",
                    }
                };

                _context.Users.AddRange(users);
                _context.SaveChanges();
            }
        }
    }
}
