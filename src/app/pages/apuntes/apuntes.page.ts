import { Component, OnInit } from '@angular/core';
import { NavController, Platform, LoadingController } from '@ionic/angular';

import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { File } from '@ionic-native/File/ngx';

@Component({
  selector: 'app-apuntes',
  templateUrl: './apuntes.page.html',
  styleUrls: ['./apuntes.page.scss'],
})
export class ApuntesPage implements OnInit {

  constructor(
    public navCtrl: NavController, 
    private document: DocumentViewer,
    private file: File,
    private fileOpener: FileOpener,
    private platform: Platform,
    public loadingCtrl: LoadingController
    ) 
  {
    
  }

  ngOnInit() {
  }

  openPDF(){
    this.fileOpener.open('/assets/documents/OnesaitFront.pdf', 'application/pdf')
      .then(() => alert('File is opened'))
      .catch(e => alert('Error opening file: ' + e));
  }


}
