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

            //Perform paging operation.
            int skip = Convert.ToInt32(queryString["$skip"]);
            int take = Convert.ToInt32(queryString["$top"]);
            int TotalRecordsCount = data.Count;
         
            return take != 0 ? new { Items = data.Skip(skip).Take(take).ToList(), Count = TotalRecordsCount } : new { Items = data, Count = TotalRecordsCount };
        }
    }
}