using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebApiAdaptor.Server.Models;

namespace WebApiAdaptor.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrdersController : ControllerBase
    {
        // GET: api/Orders.
        [HttpGet]
        // Action to retrieve orders.
        public object Get()
        {
            var queryString = Request.Query;
            var data = OrdersDetails.GetAllRecords().ToList();

            int totalRecordsCount = data.Count;

            int skip = Convert.ToInt32(queryString["$skip"]);
            int take = Convert.ToInt32(queryString["$top"]);
            if (take != 0)
            {
                data = data.Skip(skip).Take(take).ToList();
            }

            return new { result = data, count = totalRecordsCount };
        }

    }
}