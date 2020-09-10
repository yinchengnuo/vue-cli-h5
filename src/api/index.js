import request from '@/utils/request'

export const api_index = params => request.get('/index', { params })
