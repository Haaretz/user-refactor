export class DispatchService {

  constructor(private fetch = window.fetch) {
  }

  dispatch(url, data, method = "POST"): Promise<Response> {
    let request: any = {
      method
    };
    if (data) {
      request.body = data;
    }
    return this.fetch(url, request);
  }
}
