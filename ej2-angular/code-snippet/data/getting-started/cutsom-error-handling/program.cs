using Microsoft.AspNetCore.OData;
using Microsoft.OData.ModelBuilder;
using ODataV4Adaptor.Server.Models;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
var modelBuilder = new ODataConventionModelBuilder();
modelBuilder.EntitySet<OrdersDetails>("Orders");

var recordCount = OrdersDetails.GetAllRecords().Count;

builder.Services.AddControllers().AddOData(
    options => options
    .Count()
    .OrderBy()
    .Filter()
    .SetMaxTop(recordCount)
    .AddRouteComponents(
        "odata",
        modelBuilder.GetEdmModel()));


// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(builder =>
    {
        builder.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader();
    });
});
var app = builder.Build();
app.UseCors();

app.UseDefaultFiles();
app.UseStaticFiles();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.MapFallbackToFile("/index.html");

app.Run();
