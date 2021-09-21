import { request } from 'umi';
export async function fakeSubmitForm(params) {
  return request('/api/basicForm', {
    method: 'POST',
    data: params,
  });
}



export async function submitForm(params) {
  return request('/api/product', {
    method: 'POST',
    data: params,
  })
}
