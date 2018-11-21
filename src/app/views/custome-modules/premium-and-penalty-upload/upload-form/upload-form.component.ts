import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatFormField, _getOptionScrollPosition } from '@angular/material';
import { MatIcon } from '@angular/material';
import { IOption } from 'ng-select';
import { MatSelect } from '@angular/material';
import { UploadEvent, UploadFile, FileSystemFileEntry, FileSystemDirectoryEntry } from 'ngx-file-drop';
import { MatFileUpload } from 'angular-material-fileupload';
import { trigger, state, style, animate, transition } from '@angular/animations';
import {
  HttpClient, HttpResponse, HttpRequest,
  HttpEventType, HttpErrorResponse
} from '@angular/common/http';
import { Subscription } from 'rxjs/Subscription';
import { of } from 'rxjs/observable/of';
import { catchError, last, map, tap } from 'rxjs/operators';


@Component({
  selector: 'app-upload-form',
  templateUrl: './upload-form.component.html',
  styleUrls: [
    './upload-form.component.scss',
    '../../../../../scss/vendors/bs-datepicker/bs-datepicker.scss',
    '../../../../../scss/vendors/ng-select/ng-select.scss'
  ],
  animations: [
    trigger('fadeInOut', [
      state('in', style({ opacity: 100 })),
      transition('* => void', [
        animate(300, style({ opacity: 0 }))
      ])
    ])
  ]

})
export class UploadFormComponent implements OnInit {
  isLinear = false;
  formGroup: FormGroup;

  customIsHidden = true;
  defaultIsHidden = false;

  currentPool = '';
  rules = [
    ''
  ];
  /** Link text */
  @Input() text = 'Upload';
  /** Name used in form which will be sent in HTTP request. */
  @Input() param = 'file';
  /** Target URL for file uploading. */
  @Input() target = 'https://file.io';
  /** File extension that accepted, same as 'accept' of <input type="file" />. 
      By the default, it's set to 'image/*'. */
  @Input() accept = '.xlsx, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel';
  /** Allow you to add handler after its completion. Bubble up response text from remote. */
  @Output() complete = new EventEmitter<string>();

  files: Array<FileUploadModel> = [];

  pools = [
    {
      poolName: 'Ultramax-Bulkers',
      poolId: '1',
      rules: [
        'rule1', 'rule2', 'rule3', 'rule4'
      ]
    },
    {
      poolName: 'Panamax-Bulkers',
      poolId: '1',
      rules: [
        'rul1', 'rul2', 'rul3', 'rul4'
      ]
    },
    {
      poolName: 'sample pool name',
      poolId: '1',
      rules: [
        'r1', 'r2', 'r3', 'r4'
      ]
    }
  ];

  // Angular 2 Input Mask

  public dateModel = '';
  public dateMask = [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/];

  public phoneModel = '';
  public phoneMask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

  public taxModel = '';
  public taxMask = [/\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/];

  public ssnModel = '';
  public ssnMask = [/\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

  public eyeScriptModel = '';
  public eyeScriptMask = ['~', /\d/, '.', /\d/, /\d/, ' ', '~', /\d/, '.', /\d/, /\d/, ' ', /\d/, /\d/, /\d/];

  public ccnModel = '';
  public ccnMask = [/\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/];


  // Datepicker

  minDate = new Date(2017, 5, 10);
  maxDate = new Date(2018, 9, 15);

  bsValue: Date = new Date();
  bsRangeValue: any = [new Date(2017, 7, 4), new Date(2017, 7, 20)];

  /** Returns a FormArray with the name 'formArray'. */
  get formArray(): AbstractControl | null { return this.formGroup.get('formArray'); }

  constructor(private _formBuilder: FormBuilder, private _http: HttpClient) {
  }

  ngOnInit() {
    /*  this.uploadForm = new FormGroup({
        poolid : new FormControl('', Validators.required),
        sem : new FormControl('', Validators.required),
        startdate : new FormControl(''),
        enddate : new FormControl(''),
        consassesmentfile: new FormControl('' , Validators.required)
      } );
  */
    this.formGroup = this._formBuilder.group({
      formArray: this._formBuilder.array([
        this._formBuilder.group({
          poolIdCtrl: ['', Validators.required],
          ruleSetCtrl: ['', Validators.required],
          semesterCtrl: ['', Validators.required],
          startDateCtrl: ['', Validators.required],
          endDateCtrl: ['', Validators.required],
          DescCtrl: ['', Validators.required],
        }),
        this._formBuilder.group({
          poolIdCtrl: ['', Validators.required],
          ruleSetCtrl: ['', Validators.required],
          semesterCtrl: ['', Validators.required],
          startDateCtrl: ['', Validators.required],
          endDateCtrl: ['', Validators.required],
          DescCtrl: ['', Validators.required],
        }),
        this._formBuilder.group({
          poolIdCtrl: ['', Validators.required],
          ruleSetCtrl: ['', Validators.required],
          semesterCtrl: ['', Validators.required],
          startDateCtrl: ['', Validators.required],
          endDateCtrl: ['', Validators.required],
          DescCtrl: ['', Validators.required],
        }),
        this._formBuilder.group({
          poolIdCtrl: ['', Validators.required],
          ruleSetCtrl: ['', Validators.required],
          semesterCtrl: ['', Validators.required],
          startDateCtrl: ['', Validators.required],
          endDateCtrl: ['', Validators.required],
          DescCtrl: ['', Validators.required],
        }),
        this._formBuilder.group({
          poolIdCtrl: ['', Validators.required],
          ruleSetCtrl: ['', Validators.required],
          semesterCtrl: ['', Validators.required],
          startDateCtrl: ['', Validators.required],
          endDateCtrl: ['', Validators.required],
          DescCtrl: ['', Validators.required],
        })
      ])
    });

  }

  validateForm(uploadData) {

    console.log('The value ', uploadData.poolId);
  }
  getRulesForPool() {
    for (let pool of this.pools) {
      if (pool.poolName == this.currentPool) {
        this.rules = pool.rules;
        return 0;
      }
    }
  }

  onClick() {
    const fileUpload = document.getElementById('fileUpload') as HTMLInputElement;
    fileUpload.onchange = () => {
      for (let index = 0; index < fileUpload.files.length; index++) {
        const file = fileUpload.files[index];
        this.files.push({
          data: file, state: 'in',
          inProgress: false, progress: 0, canRetry: false, canCancel: true
        });
      }
      this.uploadFiles();
    };
    fileUpload.click();
  }

  cancelFile(file: FileUploadModel) {
    file.sub.unsubscribe();
    this.removeFileFromArray(file);
  }

  retryFile(file: FileUploadModel) {
    this.uploadFile(file);
    file.canRetry = false;
  }

  private uploadFile(file: FileUploadModel) {
    const fd = new FormData();
    fd.append(this.param, file.data);

    const req = new HttpRequest('POST', this.target, fd, {
      reportProgress: true
    });

    file.inProgress = true;
    file.sub = this._http.request(req).pipe(
      map(event => {
        switch (event.type) {
          case HttpEventType.UploadProgress:
            file.progress = Math.round(event.loaded * 100 / event.total);
            break;
          case HttpEventType.Response:
            return event;
        }
      }),
      tap(message => { }),
      last(),
      catchError((error: HttpErrorResponse) => {
        file.inProgress = false;
        file.canRetry = true;
        return of(`${file.data.name} upload failed.`);
      })
    ).subscribe(
      (event: any) => {
        if (typeof (event) === 'object') {
          this.removeFileFromArray(file);
          this.complete.emit(event.body);
        }
      }
    );
  }

  private uploadFiles() {
    const fileUpload = document.getElementById('fileUpload') as HTMLInputElement;
    fileUpload.value = '';

    this.files.forEach(file => {
      this.uploadFile(file);
    });
  }

  private removeFileFromArray(file: FileUploadModel) {
    const index = this.files.indexOf(file);
    if (index > -1) {
      this.files.splice(index, 1);
    }
  }

}

export class FileUploadModel {
  data: File;
  state: string;
  inProgress: boolean;
  progress: number;
  canRetry: boolean;
  canCancel: boolean;
  sub?: Subscription;
}

