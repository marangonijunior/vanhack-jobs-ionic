import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';

const SERVER_URL = 'https://vanhack-jobs.herokuapp.com/';
// const SERVER_URL = 'http://localhost:5000/';
const headers = new Headers({
  'Content-Type': 'application/json'
});
const options = new RequestOptions({
  headers: headers
});

@Injectable()
export class RestProvider {

	constructor(private http: Http) {
	}

	public post(path:string,body:any) {
    return this.http.post(SERVER_URL + path, body, options).map(res => res.json());
	}

}
