/// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { assert } from 'chai';
import { EditorComponent } from './editor.component';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';

let fixture: ComponentFixture<EditorComponent>;

describe('Counter component', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({ declarations: [EditorComponent] });
        fixture = TestBed.createComponent(EditorComponent);
        fixture.detectChanges();
    });
});
