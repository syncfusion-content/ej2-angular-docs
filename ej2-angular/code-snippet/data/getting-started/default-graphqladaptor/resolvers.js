import { OrderData } from "./db";
import { DataUtil, Query, DataManager } from "@syncfusion/ej2-data";

DataUtil.serverTimezoneOffset = 0;

const resolvers = {
  Query: {
    getOrders: (parent, { datamanager }, context, info) => {
      console.log(datamanager);
      let orders = [...OrderData];
      let query = new Query();

      // Perform filtering.
    if (datamanager.where) {
      console.log("filtering", datamanager.where);
      const filters = JSON.parse(datamanager.where);
      filters.forEach(predicate => {
        const { field, operator, value } = predicate;
        query = query.where(field, operator, value);
      });
    }
    
    // Perform searching.
    if (datamanager.search) {
      console.log("Searching", datamanager);
      const { fields, key } = JSON.parse(datamanager.search)[0];
      query = query.search(key, fields);
    }

      // Perform sorting.
    if (datamanager.sorted) {
      console.log("sorting", datamanager);
      for (let i = 0; i < datamanager.sorted.length; i++) {
        const { name, direction } = datamanager.sorted[i];
        query = query.sortBy(name, direction);
      }
    }

      orders = new DataManager(orders).executeLocal(query);
      var count = orders.length;

      // Perform paging.
      if (datamanager.skip && datamanager.take) {
        console.log("paging", datamanager);
        const pageSkip = datamanager.skip / datamanager.take + 1;
        const pageTake = datamanager.take;
        query.page(pageSkip, pageTake);
      } else if (datamanager.skip === 0 && datamanager.take) {
        query.page(1, datamanager.take);
      }

      const currentResult = new DataManager(orders).executeLocal(query);
      return { result: currentResult, count: count };
    },
  }
};

export default resolvers;