import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListUploadComponent } from './list-upload/list-upload.component';
import { FormUploadComponent } from './form-upload/form-upload.component';
import { DetailsUploadComponent } from './details-upload/details-upload.component';
import { HttpClientModule } from '@angular/common/http';
import { UploadFileService } from './service/upload-file.service';

@NgModule({
	declarations: [
		AppComponent,
		ListUploadComponent,
		FormUploadComponent,
		DetailsUploadComponent
	],
	imports: [
		BrowserModule,
		HttpClientModule
	],
	providers: [UploadFileService],
	bootstrap: [AppComponent]
})
export class AppModule { }
