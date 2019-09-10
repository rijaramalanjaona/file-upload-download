import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';
import { tap } from 'rxjs/operators';

@Injectable()
export class UploadFileService {
	private backEndHost = 'http://localhost:8080';

	private _refreshListNeeded = new Subject<any>();
	get refreshListNeeded() {
		return this._refreshListNeeded;
	}

	constructor(private http: HttpClient) {	}

	upload(file: File) {
		const formData: FormData = new FormData();
		formData.append('file', file);
		return this.http.post(this.backEndHost + '/files', formData, {reportProgress: true, responseType: 'text'})
			.pipe(
				tap(() => {
					this._refreshListNeeded.next();
				})
			);
	}

	getListFiles() {
		return this.http.get(this.backEndHost + '/files');
	}

}
