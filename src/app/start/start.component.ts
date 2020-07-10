import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {

  startForm: FormGroup;

  @ViewChild('nickHTML') nickHTML: ElementRef;

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.startForm = this.formBuilder.group({
      nick: ['', Validators.required]
    });

    setTimeout(() => {
      this.nickHTML.nativeElement.focus();
    }, 100);
  }

  onJoin() {
    //
  }

}
