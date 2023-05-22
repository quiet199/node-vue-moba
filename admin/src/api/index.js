import request from '@/plugins/request'

export const categoriesGet= data => {
    return request({
      url: '/admin/api/categories',
      method: 'get',
      params: data
    })
}

export const categoriesIdGet= data => {
    return request({
      url: `/admin/api/categories/${data}`,
      method: 'get'
    })
}

export const categoriesPost= data => {
    return request({
      url: '/admin/api/categories',
      method: 'post',
      data
    })
}

export const categoriesPutId= data => {
    return request({
      url: `/admin/api/categories/${data.id}`,
      method: 'put',
      data
    })
}

export const categoriesDelete= data => {
    return request({
      url: `/admin/api/categories/${data._id}`,
      method: 'delete',
      data
    })
}