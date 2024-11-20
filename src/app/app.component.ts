import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./reactive-form.component.css']
})
export class AppComponent implements OnInit {
  form: FormGroup;
  submittedData: any[] = [];
  subjectsFormArray: FormArray;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      firstName: ['', Validators.required],
      middleName: [''],
      lastName: ['', Validators.required],
      gender: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      dob: ['', Validators.required],  // Add dob control
      subjects: this.fb.array([])
    });
    this.subjectsFormArray = this.form.get('subjects') as FormArray;
  }

  ngOnInit(): void {}

  addSubject() {
    this.subjectsFormArray.push(this.fb.group({
      subjectTitle: ['', Validators.required],
      marks: ['', [Validators.required, Validators.min(0)]]
    }));
  }

  removeSubject(index: number) {
    this.subjectsFormArray.removeAt(index);
  }

  onSubmit() {
    if (this.form.valid) {
      this.submittedData.push(this.form.value);
      this.form.reset();
      this.subjectsFormArray.clear();
    }
  }
}
