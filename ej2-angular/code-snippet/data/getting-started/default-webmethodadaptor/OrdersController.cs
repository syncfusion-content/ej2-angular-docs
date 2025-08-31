using Syncfusion.EJ2.Base;
using Microsoft.AspNetCore.Mvc;
using WebMethodAdaptor.Server.Models;

namespace WebMethodAdaptor.Server.Controllers
{
    public class OrdersController
    {
        /// <summary>
        /// Retrieves all order data records from the data source.
        /// </summary>
        /// <returns>Returns a list of all order records.</returns>
        [HttpGet]
        [Route("api/[controller]")]
        public List<OrdersDetails> GetOrderData()
        {
            // Retrieve all records and convert to list.
            var data = OrdersDetails.GetAllRecords().ToList();
            return data;
        }

        /// <summary>
        /// Processes the DataManager request to perform paging operations (skip and take) on the ordersdetails data.
        /// </summary>
        /// <param name="DataManagerRequest">Contains the details of the data operation requested, including paging parameters such as skip and take.</param>
        /// <returns>Returns an object containing the paginated result set and the total record count.</returns>
        [HttpPost]
        [Route("api/[controller]")]
        public object Post([FromBody] DataManager DataManagerRequest)
        {
            // Retrieve data source and convert to queryable.
            IQueryable<OrdersDetails> DataSource = GetOrderData().AsQueryable();

            // Initialize dataOperations instance.
            QueryableOperation queryableOperation = new QueryableOperation();

            // Retrieve data manager value.
            DataManagerRequest dataManagerParams = DataManagerRequest.Value;

            // Get total record count after applying filters.
            int totalRecordsCount = DataSource.Count();

            // Perform skip operation if skip value is provided.
            if (dataManagerParams.Skip != 0)
            {
                DataSource = queryableOperation.PerformSkip(DataSource, dataManagerParams.Skip);
            }

            // Perform take operation if take value is provided.
            if (dataManagerParams.Take != 0)
            {
                DataSource = queryableOperation.PerformTake(DataSource, dataManagerParams.Take);
            }

            // Return the paginated data and the total record count.
            return new { result = DataSource, count = totalRecordsCount };
        }

    }
    
    public class DataManager
    {
        public required DataManagerRequest Value { get; set; }
    }
}