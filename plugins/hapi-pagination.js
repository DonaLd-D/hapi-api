const hapiPagination=require('hapi-pagination')

const options={
  query:{

  },
  meta:{
    name:'meta',
  },
  results:{
    name:'results',
  },
  reply:{
    paginate:'paginate',
  },
  routes:{
    include:[
      '/shops',
    ],
    exclude:[]
  }
}

module.exports={
  register:hapiPagination,
  options:options,
}