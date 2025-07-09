using Microsoft.AspNetCore.Mvc;
using Syncfusion.EJ2.Base;
using UrlAdaptor.Server.Models;

namespace UrlAdaptor.Server.Controllers
{
    public class OrdersController: Controller
    {
        /// <summary>
        /// Processes the DataManager request to perform paging operations (skip and take) on the ordersdetails data.
        /// </summary>
        /// <param name="DataManagerRequest">Contains the details of the data operation requested, including paging parameters.</param>
        /// <returns>Returns a JSON object with the paginated data and the total record count.</returns>
        [HttpPost]
        [Route("api/[controller]")]
        public object Post([FromBody] DataManagerRequest DataManagerRequest)
        {
            // Retrieve data from the data source (e.g., database).
            IQueryable<OrdersDetails> DataSource = GetOrderData().AsQueryable();
            
            // Initialize dataOperations instance.
            QueryableOperation queryableOperation = new QueryableOperation();

            // Get the total count of records.
            int totalRecordsCount = DataSource.Count();

            // Handling paging operation.
            if (DataManagerRequest.Skip != 0)
            {
                DataSource = queryableOperation.PerformSkip(DataSource, DataManagerRequest.Skip);
            }
            if (DataManagerRequest.Take != 0)
            {
                DataSource = queryableOperation.PerformTake(DataSource, DataManagerRequest.Take);
            }

            // Return the paginated data and the total record count.
            return new { result = DataSource, count = totalRecordsCount };
        }

        /// <summary>
        /// Retrieves all order data records from the data source.
        /// </summary>
        /// <returns>Returns a list of all order records.</returns>
        [HttpGet]
        [Route("api/[controller]")]
        public List<OrdersDetails> GetOrderData()
        {
            var data = OrdersDetails.GetAllRecords().ToList();
            return data;
        }
    }
}
