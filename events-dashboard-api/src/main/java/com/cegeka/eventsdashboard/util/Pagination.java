package com.cegeka.eventsdashboard.util;

import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.web.reactive.function.server.ServerRequest;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

public class Pagination {
   private Map<String, String>  queryParameters = new HashMap<>();
   private boolean isFiltered = false;
   private boolean isPageable = false;

   public void setQueryParameters(ServerRequest request){
       Optional<String> filter = request.queryParam("filter");
       Optional<String> sort = request.queryParam("sort");
       Optional<String> order = request.queryParam("order");
       Optional<String> pageNumber = request.queryParam("pageNumber");
       Optional<String> pageSize = request.queryParam("pageSize");

       if (
               (sort.isPresent() && !sort.get().isEmpty())
               && (order.isPresent() && !order.get().isEmpty())
               && (pageNumber.isPresent() && !pageNumber.get().isEmpty())
               && (pageSize.isPresent() && !pageSize.get().isEmpty())
       ) {
           addQueryParameter("sort", sort.get());
           addQueryParameter("order", order.get());
           addQueryParameter("pageNumber", pageNumber.get());
           addQueryParameter("pageSize", pageSize.get());
           this.isPageable = true;
       }

       if (filter.isPresent() && !filter.get().isEmpty()) {
           addQueryParameter("filter", filter.get());
           this.isFiltered = true;
       }
   }

   public void setDefaultPaginationParameters(String sort, String order, String pageNumber, String pageSize){
       addQueryParameter("sort", sort);
       addQueryParameter("order", order);
       addQueryParameter("pageNumber", pageNumber);
       addQueryParameter("pageSize",pageSize);
   }

   private void addQueryParameter(String parameter, String value) {
       queryParameters.put(parameter,value);
   }

    public Map<String, String> getQueryParameters() {
        return queryParameters;
    }

    public boolean isFiltered() {
        return isFiltered;
    }

    public boolean isPageable() {
        return isPageable;
    }

    public PageRequest resolvePageRequest(Pagination pagination){
        Sort.Direction srt;
        Map<String, String> qp = pagination.getQueryParameters();

        srt = qp.get("sort").toLowerCase().equals("desc") ? Sort.Direction.DESC : Sort.Direction.ASC;
        return PageRequest.of(Integer.parseInt(
                qp.get("pageNumber")),
                Integer.parseInt(qp.get("pageSize")),
                new Sort(srt, qp.get("order"))
        );
    }

}
