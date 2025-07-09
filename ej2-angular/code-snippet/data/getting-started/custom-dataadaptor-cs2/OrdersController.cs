using Microsoft.AspNetCore.Mvc;
using Syncfusion.EJ2.Base;
using CustomDataAdaptor.Server.Models;

namespace CustomDataAdaptor.Server.Controllers
{
    public class OrdersController : Controller
    {
        /// <summary>
        /// Processes the DataManager request to perform searching, filtering, sorting, and paging operations.
        /// </summary>
        /// <param name="DataManagerRequest">Contains the details of the data operation requested.</param>
        /// <returns>Returns a JSON object along with the total record count.</returns>
        [HttpPost]
        [Route("api/[controller]")]
        public object Post([FromBody] DataManagerRequest DataManagerRequest)
        {
            // Retrieve data from the data source (e.g., database).
            IQueryable<OrdersDetails> DataSource = GetOrderData().AsQueryable();

            // Get the total count of records.
            int totalRecordsCount = DataSource.Count();

            // Return data based on the request.
            return new { result = DataSource, count = totalRecordsCount };
        }

        /// <summary>
        /// Retrieves all order records from the data source.
        /// </summary>
        /// <returns>A list of <see cref="OrdersDetails"/> objects representing all orders.</returns>
        [HttpGet]
        [Route("api/[controller]")]
        public List<OrdersDetails> GetOrderData()
        {
            var data = OrdersDetails.GetAllRecords().ToList();
            return data;
        }

    }
}
