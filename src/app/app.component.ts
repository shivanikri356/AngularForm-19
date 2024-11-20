import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  form: FormGroup;
  submittedData: any[] = [];
  subjectsFormArray: FormArray;
data: any;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      firstName: ['', Validators.required],
      middleName: [''],
      lastName: ['', Validators.required],
      gender: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      dob: ['', Validators.required],
      subjects: this.fb.array([])  // Initialize the form array
    });
    this.subjectsFormArray = this.form.get('subjects') as FormArray;
  }

  ngOnInit(): void {}

  // Add new subject to the FormArray
  addSubject() {
    const subjectGroup = this.fb.group({
      subjectTitle: ['',],
      marks: ['',]
    });
    this.subjectsFormArray.push(subjectGroup);
  }

  // Remove subject from the FormArray
  removeSubject(index: number) {
    this.subjectsFormArray.removeAt(index);
  }

  // Submit form data
  onSubmit() {
    if (this.form.valid) {
     
      this.submittedData.push(this.form.value);
      console.log('Form submitted:', this.submittedData);

      this.form.reset();
     
      this.subjectsFormArray.clear();
    } else {
      console.log("Form is invalid");
    }
  }
}
