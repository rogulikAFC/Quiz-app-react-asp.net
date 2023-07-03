using Microsoft.EntityFrameworkCore;
using server.DbContexts;
using server.Entities;
using server.Services;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers(options =>
{
    options.ReturnHttpNotAcceptable = true;
});


// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();

builder.Services.AddScoped<IServerRepository, ServerRepository>();

builder.Services.AddDbContext<ServerContext>(
    dbContextOptions => dbContextOptions.UseSqlite(
        builder.Configuration["ConnectionStrings:ServerDBConnectionString"]));

builder.Services.AddAutoMapper(typeof(Program));

builder.Services.AddTransient<DataSeeder>();

var app = builder.Build();

if (args.Length == 1 && args[0].ToLower() == "seeddata")
{
    var scopedFactory = app.Services.GetService<IServiceScopeFactory>();

    var scope = scopedFactory.CreateScope();
    var service = scope.ServiceProvider.GetService<DataSeeder>();

    service.Seed();
}

app.UseHttpsRedirection();

app.UseRouting();

app.UseAuthorization();

app.UseEndpoints(endpoints =>
{
    endpoints.MapControllers();
});

app.Run();