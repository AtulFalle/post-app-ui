// @ts-nocheck
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Pipe, PipeTransform, Injectable, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, Directive, Input, Output } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { Observable, of as observableOf, throwError } from 'rxjs';

import { Component } from '@angular/core';
import { AddPostComponent } from './add-post.component';

describe('AddPostComponent', () => {
  let fixture;
  let component;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
      providers: [

      ]
    }).overrideComponent(AddPostComponent, {

    }).compileComponents();
    fixture = TestBed.createComponent(AddPostComponent);
    component = fixture.debugElement.componentInstance;
  });

  it('should run #constructor()', async () => {
    expect(component).toBeTruthy();
  });

  it('should run #ngOnInit()', async () => {
    component.fb = component.fb || {};
    component.fb.group = jest.fn();
    component.ngOnInit();
    expect(component.fb.group).toHaveBeenCalled();
  });

  it('should run #savePost()', async () => {
    component._snackBar = component._snackBar || {};
    component._snackBar.open = jest.fn();
    component.savePost();
    expect(component._snackBar.open).toHaveBeenCalled();
  });

});