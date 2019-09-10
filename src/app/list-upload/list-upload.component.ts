import { Component, OnInit } from '@angular/core';
import { UploadFileService } from '../service/upload-file.service';

@Component({
	selector: 'app-list-upload',
	templateUrl: './list-upload.component.html',
	styleUrls: ['./list-upload.component.css']
})
export class ListUploadComponent implements OnInit {
	fileUploads: any;

	constructor(private uploadFileService: UploadFileService) { }

	ngOnInit() {
		this.uploadFileService.refreshListNeeded.subscribe(() => {
			this.getListFiles();
		});

		this.getListFiles();
	}

	private getListFiles () {
		this.uploadFileService.getListFiles().subscribe(data => {
			this.fileUploads = data;
		}, error => {
			console.log(error);
		});
	}
}
