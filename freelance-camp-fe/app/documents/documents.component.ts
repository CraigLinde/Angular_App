import { Component } from '@angular/core';
import { Document } from './document';

@Component({
  moduleId: module.id,
  selector: 'documents',
  templateUrl: 'documents.component.html',
  styleUrls:['documents.component.css']
})


export class DocumentsComponent{
  document: Document[] = [
  {
    title: "my first doc",
    description: 'lksdjflaksdjf',
    file_url: 'http:google.com',
    updated_at: '11/11/16',
    image_url: 'http:google.com',
  },
    {
    title: "my second doc",
    description: 'lksdjflaksdjf',
    file_url: 'http:google.com',
    updated_at: '11/11/16',
    image_url: 'http:google.com',
  },
    {
    title: "my last doc",
    description: 'lksdjflaksdjf',
    file_url: 'http:google.com',
    updated_at: '11/11/16',
    image_url: 'http:google.com',
  }
  ]
}