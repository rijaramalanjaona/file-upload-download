import { Component, OnInit } from '@angular/core';
import { UploadFileService } from '../service/upload-file.service';

@Component({
	selector: 'app-form-upload',
	templateUrl: './form-upload.component.html',
	styleUrls: ['./form-upload.component.css']
})
export class FormUploadComponent implements OnInit {
	selectedFiles: FileList;
	currentFileUpload: File;

	constructor(private uploadFileService: UploadFileService) { }

	ngOnInit() {
	}

	selectFile(event) {
		this.selectedFiles = event.target.files;
	}

	upload() {
		this.currentFileUpload = this.selectedFiles.item(0);
		this.uploadFileService.upload(this.currentFileUpload).subscribe(event => {
			console.log('File uploaded');
		}, error => {
			console.log(error);
		});
	}

}
