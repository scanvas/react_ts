import request from './request'

interface ResponseData {
  code: number
  count: number
  programs: []
  more: boolean
}

export interface GET_LIST_PARAMS {
  rid: string
}

export const GET_TOP_LIST = (params: GET_LIST_PARAMS) =>
  request<ResponseData>({
    url: 'http://localhost:3333/dj/program',
    method: 'get',
    params,
  })
