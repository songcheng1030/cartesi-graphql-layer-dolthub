export function getQuery(args) {
    const filters = args.filters;
    const sorts  = args.sorts;
    let query = ''
    if (filters.length != 0){
      query = 'where '
      filters.map((item, index)=>{
        query = query + `${item.field} like '%${item.contains}%' `
        if (index != filters.length-1){
          query = query + 'and '
        }
      })
    }
   
    if (sorts.length != 0){
      query = query + 'order by '
      sorts.map(item=>{
        query = query + item.field + ' ' + item.sort + ' ';
      })
    }
  
    query = query + `limit ${args.offset}, ${args.limit}`;
    return query
}
