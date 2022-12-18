namespace AspNet_Core_with_ReactJS.Models
{
    public static class DbInitializer
    {
        public static void CreateDbIfNotExists(IHost host)
        {
            using (var scope = host.Services.CreateScope())
            {
                var services = scope.ServiceProvider;
                try
                {
                    var context = services.GetRequiredService<DatabaseContext>();
                    Initialize(context);
                }
                catch (Exception ex)
                {
                    var logger = services.GetRequiredService<ILogger<Program>>();
                    logger.LogError(ex, "An error occurred creating the DB.");
                }
            }
        }
        private static void Initialize(DatabaseContext context)
        {
            context.Database.EnsureCreated();

            // Look for any students.
            if (context.WeatherForecast.Any())
            {
                return;   // DB has been seeded
            }

            var summaries = new[]
            {
                "Freezing1","Nguyen Huu Tai"
            };

            var sogio = new[]
            {
                8,9
            };

            var sotiencua1ngay = new[]
            {
                20,30
            };
            var weatherForecasts = summaries.Select(summary => new WeatherForecast
            {
                
                sogio=(int)summary.Length,
                sotiencua1ngay=(int)summary.Length,
                Summary = summary
            }).ToArray();

            context.WeatherForecast.AddRange(weatherForecasts);

            context.SaveChanges();
        }
    }
}
