import request from '../../utils/request'

export function getFormData(id: string): Promise<any> {
  return request({
    url: `/api/canvas/${id}`,
    method: 'GET',
  })
}
