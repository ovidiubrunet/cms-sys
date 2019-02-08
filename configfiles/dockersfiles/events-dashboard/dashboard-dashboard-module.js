(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"],{

/***/ "./node_modules/@ckeditor/ckeditor5-angular/fesm5/ckeditor-ckeditor5-angular.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-angular/fesm5/ckeditor-ckeditor5-angular.js ***!
  \**************************************************************************************/
/*! exports provided: CKEditorModule, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CKEditorModule", function() { return CKEditorModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return CKEditorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");




/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var CKEditorComponent = /** @class */ (function () {
    function CKEditorComponent(elementRef, ngZone) {
        /**
         * The initial data of the editor. Useful when not using the ngModel.
         * See https://angular.io/api/forms/NgModel to learn more.
         */
        this.data = '';
        /**
         * Tag name of the editor component.
         *
         * The default tag is 'div'.
         */
        this.tagName = 'div';
        /**
         * Fires when the editor is ready. It corresponds with the `editor#ready`
         * https://ckeditor.com/docs/ckeditor5/latest/api/module_core_editor_editor-Editor.html#event-ready
         * event.
         */
        this.ready = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Fires when the content of the editor has changed. It corresponds with the `editor.model.document#change`
         * https://ckeditor.com/docs/ckeditor5/latest/api/module_engine_model_document-Document.html#event-change
         * event.
         */
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Fires when the editing view of the editor is blurred. It corresponds with the `editor.editing.view.document#blur`
         * https://ckeditor.com/docs/ckeditor5/latest/api/module_engine_view_document-Document.html#event-event:blur
         * event.
         */
        this.blur = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Fires when the editing view of the editor is focused. It corresponds with the `editor.editing.view.document#focus`
         * https://ckeditor.com/docs/ckeditor5/latest/api/module_engine_view_document-Document.html#event-event:focus
         * event.
         */
        this.focus = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * The instance of the editor created by this component.
         */
        this.editorInstance = null;
        /**
         * If the component is read–only before the editor instance is created, it remembers that state,
         * so the editor can become read–only once it is ready.
         */
        this.initialIsDisabled = false;
        this.ngZone = ngZone;
        this.elementRef = elementRef;
    }
    Object.defineProperty(CKEditorComponent.prototype, "disabled", {
        get: /**
         * @return {?}
         */
        function () {
            if (this.editorInstance) {
                return this.editorInstance.isReadOnly;
            }
            return this.initialIsDisabled;
        },
        /**
         * When set `true`, the editor becomes read-only.
         * See https://ckeditor.com/docs/ckeditor5/latest/api/module_core_editor_editor-Editor.html#member-isReadOnly
         * to learn more.
         */
        set: /**
         * When set `true`, the editor becomes read-only.
         * See https://ckeditor.com/docs/ckeditor5/latest/api/module_core_editor_editor-Editor.html#member-isReadOnly
         * to learn more.
         * @param {?} isDisabled
         * @return {?}
         */
        function (isDisabled) {
            this.setDisabledState(isDisabled);
        },
        enumerable: true,
        configurable: true
    });
    // Implementing the AfterViewInit interface.
    /**
     * @return {?}
     */
    CKEditorComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.ngZone.runOutsideAngular(function () {
            _this.createEditor();
        });
    };
    // Implementing the OnDestroy interface.
    /**
     * @return {?}
     */
    CKEditorComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.editorInstance) {
            this.editorInstance.destroy();
            this.editorInstance = null;
        }
    };
    // Implementing the ControlValueAccessor interface (only when binding to ngModel).
    /**
     * @param {?} value
     * @return {?}
     */
    CKEditorComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        // This method is called with the `null` value when the form resets.
        // A component's responsibility is to restore to the initial state.
        if (value === null) {
            value = '';
        }
        // If already initialized.
        if (this.editorInstance) {
            this.editorInstance.setData(value);
        }
        else {
            this.data = value;
        }
    };
    // Implementing the ControlValueAccessor interface (only when binding to ngModel).
    /**
     * @param {?} callback
     * @return {?}
     */
    CKEditorComponent.prototype.registerOnChange = /**
     * @param {?} callback
     * @return {?}
     */
    function (callback) {
        this.cvaOnChange = callback;
    };
    // Implementing the ControlValueAccessor interface (only when binding to ngModel).
    /**
     * @param {?} callback
     * @return {?}
     */
    CKEditorComponent.prototype.registerOnTouched = /**
     * @param {?} callback
     * @return {?}
     */
    function (callback) {
        this.cvaOnTouched = callback;
    };
    // Implementing the ControlValueAccessor interface (only when binding to ngModel).
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    CKEditorComponent.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        // If already initialized
        if (this.editorInstance) {
            this.editorInstance.isReadOnly = isDisabled;
        }
        else {
            this.initialIsDisabled = isDisabled;
        }
    };
    /**
     * Creates the editor instance, sets initial editor data,
     * then integrates the editor with the Angular component.
     * @return {?}
     */
    CKEditorComponent.prototype.createEditor = /**
     * Creates the editor instance, sets initial editor data,
     * then integrates the editor with the Angular component.
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var element = document.createElement(this.tagName);
        this.elementRef.nativeElement.appendChild(element);
        return /** @type {?} */ ((this.editor)).create(element, this.config).then(function (editor) {
            _this.editorInstance = editor;
            editor.setData(_this.data);
            if (_this.initialIsDisabled) {
                editor.isReadOnly = _this.initialIsDisabled;
            }
            _this.ngZone.run(function () {
                _this.ready.emit(editor);
            });
            _this.setUpEditorEvents(editor);
        }).catch(function (err) {
            console.error(err.stack);
        });
    };
    /**
     * Integrates the editor with the component by attaching related event listeners.
     * @param {?} editor
     * @return {?}
     */
    CKEditorComponent.prototype.setUpEditorEvents = /**
     * Integrates the editor with the component by attaching related event listeners.
     * @param {?} editor
     * @return {?}
     */
    function (editor) {
        var _this = this;
        /** @type {?} */
        var modelDocument = editor.model.document;
        /** @type {?} */
        var viewDocument = editor.editing.view.document;
        modelDocument.on('change:data', function (evt) {
            /** @type {?} */
            var data = editor.getData();
            _this.ngZone.run(function () {
                if (_this.cvaOnChange) {
                    _this.cvaOnChange(data);
                }
                _this.change.emit({ event: evt, editor: editor });
            });
        });
        viewDocument.on('focus', function (evt) {
            _this.ngZone.run(function () {
                _this.focus.emit({ event: evt, editor: editor });
            });
        });
        viewDocument.on('blur', function (evt) {
            _this.ngZone.run(function () {
                if (_this.cvaOnTouched) {
                    _this.cvaOnTouched();
                }
                _this.blur.emit({ event: evt, editor: editor });
            });
        });
    };
    CKEditorComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'ckeditor',
                    template: '<ng-template></ng-template>',
                    // Integration with @angular/forms.
                    providers: [
                        {
                            provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                            useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return CKEditorComponent; }),
                            multi: true,
                        }
                    ]
                }] }
    ];
    /** @nocollapse */
    CKEditorComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }
    ]; };
    CKEditorComponent.propDecorators = {
        editor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        config: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        tagName: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        ready: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        change: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        blur: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        focus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
    };
    return CKEditorComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var CKEditorModule = /** @class */ (function () {
    function CKEditorModule() {
    }
    CKEditorModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
                    declarations: [CKEditorComponent],
                    exports: [CKEditorComponent]
                },] }
    ];
    return CKEditorModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2tlZGl0b3ItY2tlZGl0b3I1LWFuZ3VsYXIuanMubWFwIiwic291cmNlcyI6WyJuZzovL0Bja2VkaXRvci9ja2VkaXRvcjUtYW5ndWxhci9ja2VkaXRvci5jb21wb25lbnQudHMiLCJuZzovL0Bja2VkaXRvci9ja2VkaXRvcjUtYW5ndWxhci9ja2VkaXRvci5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZSBDb3B5cmlnaHQgKGMpIDIwMDMtMjAxOCwgQ0tTb3VyY2UgLSBGcmVkZXJpY28gS25hYmJlbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIEZvciBsaWNlbnNpbmcsIHNlZSBMSUNFTlNFLm1kLlxuICovXG5cbmltcG9ydCB7XG5cdENvbXBvbmVudCxcblx0SW5wdXQsXG5cdE91dHB1dCxcblx0Tmdab25lLFxuXHRFdmVudEVtaXR0ZXIsXG5cdGZvcndhcmRSZWYsXG5cdEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSxcblx0RWxlbWVudFJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtcblx0Q29udHJvbFZhbHVlQWNjZXNzb3IsXG5cdE5HX1ZBTFVFX0FDQ0VTU09SXG59IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgQ0tFZGl0b3I1IH0gZnJvbSAnLi9ja2VkaXRvcic7XG5cbkBDb21wb25lbnQoIHtcblx0c2VsZWN0b3I6ICdja2VkaXRvcicsXG5cdHRlbXBsYXRlOiAnPG5nLXRlbXBsYXRlPjwvbmctdGVtcGxhdGU+JyxcblxuXHQvLyBJbnRlZ3JhdGlvbiB3aXRoIEBhbmd1bGFyL2Zvcm1zLlxuXHRwcm92aWRlcnM6IFtcblx0XHR7XG5cdFx0XHRwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcblx0XHRcdHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCAoKSA9PiBDS0VkaXRvckNvbXBvbmVudCApLFxuXHRcdFx0bXVsdGk6IHRydWUsXG5cdFx0fVxuXHRdXG59IClcbmV4cG9ydCBjbGFzcyBDS0VkaXRvckNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSwgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuXHQvKipcblx0ICogVGhlIHJlZmVyZW5jZSB0byB0aGUgRE9NIGVsZW1lbnQgY3JlYXRlZCBieSB0aGUgY29tcG9uZW50LlxuXHQgKi9cblx0cHJpdmF0ZSBlbGVtZW50UmVmITogRWxlbWVudFJlZjxIVE1MRWxlbWVudD47XG5cblx0LyoqXG5cdCAqIFRoZSBjb25zdHJ1Y3RvciBvZiB0aGUgZWRpdG9yIHRvIGJlIHVzZWQgZm9yIHRoZSBpbnN0YW5jZSBvZiB0aGUgY29tcG9uZW50LlxuXHQgKiBJdCBjYW4gYmUgZS5nLiB0aGUgYENsYXNzaWNFZGl0b3JCdWlsZGAsIGBJbmxpbmVFZGl0b3JCdWlsZGAgb3Igc29tZSBjdXN0b20gZWRpdG9yLlxuXHQgKi9cblx0QElucHV0KCkgZWRpdG9yPzogQ0tFZGl0b3I1LkVkaXRvckNvbnN0cnVjdG9yO1xuXG5cdC8qKlxuXHQgKiBUaGUgY29uZmlndXJhdGlvbiBvZiB0aGUgZWRpdG9yLlxuXHQgKiBTZWUgaHR0cHM6Ly9ja2VkaXRvci5jb20vZG9jcy9ja2VkaXRvcjUvbGF0ZXN0L2FwaS9tb2R1bGVfY29yZV9lZGl0b3JfZWRpdG9yY29uZmlnLUVkaXRvckNvbmZpZy5odG1sXG5cdCAqIHRvIGxlYXJuIG1vcmUuXG5cdCAqL1xuXHRASW5wdXQoKSBjb25maWc/OiBDS0VkaXRvcjUuQ29uZmlnO1xuXG5cdC8qKlxuXHQgKiBUaGUgaW5pdGlhbCBkYXRhIG9mIHRoZSBlZGl0b3IuIFVzZWZ1bCB3aGVuIG5vdCB1c2luZyB0aGUgbmdNb2RlbC5cblx0ICogU2VlIGh0dHBzOi8vYW5ndWxhci5pby9hcGkvZm9ybXMvTmdNb2RlbCB0byBsZWFybiBtb3JlLlxuXHQgKi9cblx0QElucHV0KCkgZGF0YSA9ICcnO1xuXG5cdC8qKlxuXHQgKiBUYWcgbmFtZSBvZiB0aGUgZWRpdG9yIGNvbXBvbmVudC5cblx0ICpcblx0ICogVGhlIGRlZmF1bHQgdGFnIGlzICdkaXYnLlxuXHQgKi9cblx0QElucHV0KCkgdGFnTmFtZSA9ICdkaXYnO1xuXG5cdC8qKlxuXHQgKiBXaGVuIHNldCBgdHJ1ZWAsIHRoZSBlZGl0b3IgYmVjb21lcyByZWFkLW9ubHkuXG5cdCAqIFNlZSBodHRwczovL2NrZWRpdG9yLmNvbS9kb2NzL2NrZWRpdG9yNS9sYXRlc3QvYXBpL21vZHVsZV9jb3JlX2VkaXRvcl9lZGl0b3ItRWRpdG9yLmh0bWwjbWVtYmVyLWlzUmVhZE9ubHlcblx0ICogdG8gbGVhcm4gbW9yZS5cblx0ICovXG5cdEBJbnB1dCgpIHNldCBkaXNhYmxlZCggaXNEaXNhYmxlZDogYm9vbGVhbiApIHtcblx0XHR0aGlzLnNldERpc2FibGVkU3RhdGUoIGlzRGlzYWJsZWQgKTtcblx0fVxuXG5cdGdldCBkaXNhYmxlZCgpIHtcblx0XHRpZiAoIHRoaXMuZWRpdG9ySW5zdGFuY2UgKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5lZGl0b3JJbnN0YW5jZS5pc1JlYWRPbmx5O1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzLmluaXRpYWxJc0Rpc2FibGVkO1xuXHR9XG5cblx0LyoqXG5cdCAqIEZpcmVzIHdoZW4gdGhlIGVkaXRvciBpcyByZWFkeS4gSXQgY29ycmVzcG9uZHMgd2l0aCB0aGUgYGVkaXRvciNyZWFkeWBcblx0ICogaHR0cHM6Ly9ja2VkaXRvci5jb20vZG9jcy9ja2VkaXRvcjUvbGF0ZXN0L2FwaS9tb2R1bGVfY29yZV9lZGl0b3JfZWRpdG9yLUVkaXRvci5odG1sI2V2ZW50LXJlYWR5XG5cdCAqIGV2ZW50LlxuXHQgKi9cblx0QE91dHB1dCgpIHJlYWR5ID0gbmV3IEV2ZW50RW1pdHRlcjxDS0VkaXRvcjUuRWRpdG9yPigpO1xuXG5cdC8qKlxuXHQgKiBGaXJlcyB3aGVuIHRoZSBjb250ZW50IG9mIHRoZSBlZGl0b3IgaGFzIGNoYW5nZWQuIEl0IGNvcnJlc3BvbmRzIHdpdGggdGhlIGBlZGl0b3IubW9kZWwuZG9jdW1lbnQjY2hhbmdlYFxuXHQgKiBodHRwczovL2NrZWRpdG9yLmNvbS9kb2NzL2NrZWRpdG9yNS9sYXRlc3QvYXBpL21vZHVsZV9lbmdpbmVfbW9kZWxfZG9jdW1lbnQtRG9jdW1lbnQuaHRtbCNldmVudC1jaGFuZ2Vcblx0ICogZXZlbnQuXG5cdCAqL1xuXHRAT3V0cHV0KCkgY2hhbmdlOiBFdmVudEVtaXR0ZXI8Q2hhbmdlRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxDaGFuZ2VFdmVudD4oKTtcblxuXHQvKipcblx0ICogRmlyZXMgd2hlbiB0aGUgZWRpdGluZyB2aWV3IG9mIHRoZSBlZGl0b3IgaXMgYmx1cnJlZC4gSXQgY29ycmVzcG9uZHMgd2l0aCB0aGUgYGVkaXRvci5lZGl0aW5nLnZpZXcuZG9jdW1lbnQjYmx1cmBcblx0ICogaHR0cHM6Ly9ja2VkaXRvci5jb20vZG9jcy9ja2VkaXRvcjUvbGF0ZXN0L2FwaS9tb2R1bGVfZW5naW5lX3ZpZXdfZG9jdW1lbnQtRG9jdW1lbnQuaHRtbCNldmVudC1ldmVudDpibHVyXG5cdCAqIGV2ZW50LlxuXHQgKi9cblx0QE91dHB1dCgpIGJsdXI6IEV2ZW50RW1pdHRlcjxCbHVyRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxCbHVyRXZlbnQ+KCk7XG5cblx0LyoqXG5cdCAqIEZpcmVzIHdoZW4gdGhlIGVkaXRpbmcgdmlldyBvZiB0aGUgZWRpdG9yIGlzIGZvY3VzZWQuIEl0IGNvcnJlc3BvbmRzIHdpdGggdGhlIGBlZGl0b3IuZWRpdGluZy52aWV3LmRvY3VtZW50I2ZvY3VzYFxuXHQgKiBodHRwczovL2NrZWRpdG9yLmNvbS9kb2NzL2NrZWRpdG9yNS9sYXRlc3QvYXBpL21vZHVsZV9lbmdpbmVfdmlld19kb2N1bWVudC1Eb2N1bWVudC5odG1sI2V2ZW50LWV2ZW50OmZvY3VzXG5cdCAqIGV2ZW50LlxuXHQgKi9cblx0QE91dHB1dCgpIGZvY3VzOiBFdmVudEVtaXR0ZXI8Rm9jdXNFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPEZvY3VzRXZlbnQ+KCk7XG5cblx0LyoqXG5cdCAqIFRoZSBpbnN0YW5jZSBvZiB0aGUgZWRpdG9yIGNyZWF0ZWQgYnkgdGhpcyBjb21wb25lbnQuXG5cdCAqL1xuXHRwdWJsaWMgZWRpdG9ySW5zdGFuY2U6IENLRWRpdG9yNS5FZGl0b3IgfCBudWxsID0gbnVsbDtcblxuXHQvKipcblx0ICogSWYgdGhlIGNvbXBvbmVudCBpcyByZWFkw6LCgMKTb25seSBiZWZvcmUgdGhlIGVkaXRvciBpbnN0YW5jZSBpcyBjcmVhdGVkLCBpdCByZW1lbWJlcnMgdGhhdCBzdGF0ZSxcblx0ICogc28gdGhlIGVkaXRvciBjYW4gYmVjb21lIHJlYWTDosKAwpNvbmx5IG9uY2UgaXQgaXMgcmVhZHkuXG5cdCAqL1xuXHRwcml2YXRlIGluaXRpYWxJc0Rpc2FibGVkID0gZmFsc2U7XG5cblx0LyoqXG5cdCAqIEFuIGluc3RhbmNlIG9mIGh0dHBzOi8vYW5ndWxhci5pby9hcGkvY29yZS9OZ1pvbmUgdG8gYWxsb3cgdGhlIGludGVyYWN0aW9uIHdpdGggdGhlIGVkaXRvclxuXHQgKiB3aXRoaW5nIHRoZSBBbmd1bGFyIGV2ZW50IGxvb3AuXG5cdCAqL1xuXHRwcml2YXRlIG5nWm9uZTogTmdab25lO1xuXG5cdC8qKlxuXHQgKiBBIGNhbGxiYWNrIGV4ZWN1dGVkIHdoZW4gdGhlIGNvbnRlbnQgb2YgdGhlIGVkaXRvciBjaGFuZ2VzLiBQYXJ0IG9mIHRoZVxuXHQgKiBgQ29udHJvbFZhbHVlQWNjZXNzb3JgIChodHRwczovL2FuZ3VsYXIuaW8vYXBpL2Zvcm1zL0NvbnRyb2xWYWx1ZUFjY2Vzc29yKSBpbnRlcmZhY2UuXG5cdCAqXG5cdCAqIE5vdGU6IFVuc2V0IHVubGVzcyB0aGUgY29tcG9uZW50IHVzZXMgdGhlIGBuZ01vZGVsYC5cblx0ICovXG5cdHByaXZhdGUgY3ZhT25DaGFuZ2U/OiAoIGRhdGE6IHN0cmluZyApID0+IHZvaWQ7XG5cblx0LyoqXG5cdCAqIEEgY2FsbGJhY2sgZXhlY3V0ZWQgd2hlbiB0aGUgZWRpdG9yIGhhcyBiZWVuIGJsdXJyZWQuIFBhcnQgb2YgdGhlXG5cdCAqIGBDb250cm9sVmFsdWVBY2Nlc3NvcmAgKGh0dHBzOi8vYW5ndWxhci5pby9hcGkvZm9ybXMvQ29udHJvbFZhbHVlQWNjZXNzb3IpIGludGVyZmFjZS5cblx0ICpcblx0ICogTm90ZTogVW5zZXQgdW5sZXNzIHRoZSBjb21wb25lbnQgdXNlcyB0aGUgYG5nTW9kZWxgLlxuXHQgKi9cblx0cHJpdmF0ZSBjdmFPblRvdWNoZWQ/OiAoKSA9PiB2b2lkO1xuXG5cdGNvbnN0cnVjdG9yKCBlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBuZ1pvbmU6IE5nWm9uZSApIHtcblx0XHR0aGlzLm5nWm9uZSA9IG5nWm9uZTtcblx0XHR0aGlzLmVsZW1lbnRSZWYgPSBlbGVtZW50UmVmO1xuXHR9XG5cblx0Ly8gSW1wbGVtZW50aW5nIHRoZSBBZnRlclZpZXdJbml0IGludGVyZmFjZS5cblx0bmdBZnRlclZpZXdJbml0KCkge1xuXHRcdHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCAoKSA9PiB7XG5cdFx0XHR0aGlzLmNyZWF0ZUVkaXRvcigpO1xuXHRcdH0gKTtcblx0fVxuXG5cdC8vIEltcGxlbWVudGluZyB0aGUgT25EZXN0cm95IGludGVyZmFjZS5cblx0bmdPbkRlc3Ryb3koKSB7XG5cdFx0aWYgKCB0aGlzLmVkaXRvckluc3RhbmNlICkge1xuXHRcdFx0dGhpcy5lZGl0b3JJbnN0YW5jZS5kZXN0cm95KCk7XG5cdFx0XHR0aGlzLmVkaXRvckluc3RhbmNlID0gbnVsbDtcblx0XHR9XG5cdH1cblxuXHQvLyBJbXBsZW1lbnRpbmcgdGhlIENvbnRyb2xWYWx1ZUFjY2Vzc29yIGludGVyZmFjZSAob25seSB3aGVuIGJpbmRpbmcgdG8gbmdNb2RlbCkuXG5cdHdyaXRlVmFsdWUoIHZhbHVlOiBzdHJpbmcgfCBudWxsICk6IHZvaWQge1xuXHRcdC8vIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCB3aXRoIHRoZSBgbnVsbGAgdmFsdWUgd2hlbiB0aGUgZm9ybSByZXNldHMuXG5cdFx0Ly8gQSBjb21wb25lbnQncyByZXNwb25zaWJpbGl0eSBpcyB0byByZXN0b3JlIHRvIHRoZSBpbml0aWFsIHN0YXRlLlxuXHRcdGlmICggdmFsdWUgPT09IG51bGwgKSB7XG5cdFx0XHR2YWx1ZSA9ICcnO1xuXHRcdH1cblxuXHRcdC8vIElmIGFscmVhZHkgaW5pdGlhbGl6ZWQuXG5cdFx0aWYgKCB0aGlzLmVkaXRvckluc3RhbmNlICkge1xuXHRcdFx0dGhpcy5lZGl0b3JJbnN0YW5jZS5zZXREYXRhKCB2YWx1ZSApO1xuXHRcdH1cblx0XHQvLyBJZiBub3QsIHdhaXQgZm9yIGl0IHRvIGJlIHJlYWR5OyBzdG9yZSB0aGUgZGF0YS5cblx0XHRlbHNlIHtcblx0XHRcdHRoaXMuZGF0YSA9IHZhbHVlO1xuXHRcdH1cblx0fVxuXG5cdC8vIEltcGxlbWVudGluZyB0aGUgQ29udHJvbFZhbHVlQWNjZXNzb3IgaW50ZXJmYWNlIChvbmx5IHdoZW4gYmluZGluZyB0byBuZ01vZGVsKS5cblx0cmVnaXN0ZXJPbkNoYW5nZSggY2FsbGJhY2s6ICggZGF0YTogc3RyaW5nICkgPT4gdm9pZCApOiB2b2lkIHtcblx0XHR0aGlzLmN2YU9uQ2hhbmdlID0gY2FsbGJhY2s7XG5cdH1cblxuXHQvLyBJbXBsZW1lbnRpbmcgdGhlIENvbnRyb2xWYWx1ZUFjY2Vzc29yIGludGVyZmFjZSAob25seSB3aGVuIGJpbmRpbmcgdG8gbmdNb2RlbCkuXG5cdHJlZ2lzdGVyT25Ub3VjaGVkKCBjYWxsYmFjazogKCkgPT4gdm9pZCApOiB2b2lkIHtcblx0XHR0aGlzLmN2YU9uVG91Y2hlZCA9IGNhbGxiYWNrO1xuXHR9XG5cblx0Ly8gSW1wbGVtZW50aW5nIHRoZSBDb250cm9sVmFsdWVBY2Nlc3NvciBpbnRlcmZhY2UgKG9ubHkgd2hlbiBiaW5kaW5nIHRvIG5nTW9kZWwpLlxuXHRzZXREaXNhYmxlZFN0YXRlKCBpc0Rpc2FibGVkOiBib29sZWFuICk6IHZvaWQge1xuXHRcdC8vIElmIGFscmVhZHkgaW5pdGlhbGl6ZWRcblx0XHRpZiAoIHRoaXMuZWRpdG9ySW5zdGFuY2UgKSB7XG5cdFx0XHR0aGlzLmVkaXRvckluc3RhbmNlLmlzUmVhZE9ubHkgPSBpc0Rpc2FibGVkO1xuXHRcdH1cblx0XHQvLyBJZiBub3QsIHdhaXQgZm9yIGl0IHRvIGJlIHJlYWR5OyBzdG9yZSB0aGUgc3RhdGUuXG5cdFx0ZWxzZSB7XG5cdFx0XHR0aGlzLmluaXRpYWxJc0Rpc2FibGVkID0gaXNEaXNhYmxlZDtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogQ3JlYXRlcyB0aGUgZWRpdG9yIGluc3RhbmNlLCBzZXRzIGluaXRpYWwgZWRpdG9yIGRhdGEsXG5cdCAqIHRoZW4gaW50ZWdyYXRlcyB0aGUgZWRpdG9yIHdpdGggdGhlIEFuZ3VsYXIgY29tcG9uZW50LlxuXHQgKi9cblx0cHJpdmF0ZSBjcmVhdGVFZGl0b3IoKTogUHJvbWlzZTxhbnk+IHtcblx0XHRjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggdGhpcy50YWdOYW1lICk7XG5cblx0XHR0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5hcHBlbmRDaGlsZCggZWxlbWVudCApO1xuXG5cdFx0cmV0dXJuIHRoaXMuZWRpdG9yIS5jcmVhdGUoIGVsZW1lbnQsIHRoaXMuY29uZmlnIClcblx0XHRcdC50aGVuKCBlZGl0b3IgPT4ge1xuXHRcdFx0XHR0aGlzLmVkaXRvckluc3RhbmNlID0gZWRpdG9yO1xuXG5cdFx0XHRcdGVkaXRvci5zZXREYXRhKCB0aGlzLmRhdGEgKTtcblxuXHRcdFx0XHRpZiAoIHRoaXMuaW5pdGlhbElzRGlzYWJsZWQgKSB7XG5cdFx0XHRcdFx0ZWRpdG9yLmlzUmVhZE9ubHkgPSB0aGlzLmluaXRpYWxJc0Rpc2FibGVkO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5uZ1pvbmUucnVuKCAoKSA9PiB7XG5cdFx0XHRcdFx0dGhpcy5yZWFkeS5lbWl0KCBlZGl0b3IgKTtcblx0XHRcdFx0fSApO1xuXG5cdFx0XHRcdHRoaXMuc2V0VXBFZGl0b3JFdmVudHMoIGVkaXRvciApO1xuXHRcdFx0fSApXG5cdFx0XHQuY2F0Y2goICggZXJyOiBFcnJvciApID0+IHtcblx0XHRcdFx0Y29uc29sZS5lcnJvciggZXJyLnN0YWNrICk7XG5cdFx0XHR9ICk7XG5cdH1cblxuXHQvKipcblx0ICogSW50ZWdyYXRlcyB0aGUgZWRpdG9yIHdpdGggdGhlIGNvbXBvbmVudCBieSBhdHRhY2hpbmcgcmVsYXRlZCBldmVudCBsaXN0ZW5lcnMuXG5cdCAqL1xuXHRwcml2YXRlIHNldFVwRWRpdG9yRXZlbnRzKCBlZGl0b3I6IENLRWRpdG9yNS5FZGl0b3IgKTogdm9pZCB7XG5cdFx0Y29uc3QgbW9kZWxEb2N1bWVudCA9IGVkaXRvci5tb2RlbC5kb2N1bWVudDtcblx0XHRjb25zdCB2aWV3RG9jdW1lbnQgPSBlZGl0b3IuZWRpdGluZy52aWV3LmRvY3VtZW50O1xuXG5cdFx0bW9kZWxEb2N1bWVudC5vbiggJ2NoYW5nZTpkYXRhJywgKCBldnQ6IENLRWRpdG9yNS5FdmVudEluZm88J2NoYW5nZTpkYXRhJz4gKSA9PiB7XG5cdFx0XHRjb25zdCBkYXRhID0gZWRpdG9yLmdldERhdGEoKTtcblxuXHRcdFx0dGhpcy5uZ1pvbmUucnVuKCAoKSA9PiB7XG5cdFx0XHRcdGlmICggdGhpcy5jdmFPbkNoYW5nZSApIHtcblx0XHRcdFx0XHR0aGlzLmN2YU9uQ2hhbmdlKCBkYXRhICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLmNoYW5nZS5lbWl0KCB7IGV2ZW50OiBldnQsIGVkaXRvciB9ICk7XG5cdFx0XHR9ICk7XG5cdFx0fSApO1xuXG5cdFx0dmlld0RvY3VtZW50Lm9uKCAnZm9jdXMnLCAoIGV2dDogQ0tFZGl0b3I1LkV2ZW50SW5mbzwnZm9jdXMnPiApID0+IHtcblx0XHRcdHRoaXMubmdab25lLnJ1biggKCkgPT4ge1xuXHRcdFx0XHR0aGlzLmZvY3VzLmVtaXQoIHsgZXZlbnQ6IGV2dCwgZWRpdG9yIH0gKTtcblx0XHRcdH0gKTtcblx0XHR9ICk7XG5cblx0XHR2aWV3RG9jdW1lbnQub24oICdibHVyJywgKCBldnQ6IENLRWRpdG9yNS5FdmVudEluZm88J2JsdXInPiApID0+IHtcblx0XHRcdHRoaXMubmdab25lLnJ1biggKCkgPT4ge1xuXHRcdFx0XHRpZiAoIHRoaXMuY3ZhT25Ub3VjaGVkICkge1xuXHRcdFx0XHRcdHRoaXMuY3ZhT25Ub3VjaGVkKCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLmJsdXIuZW1pdCggeyBldmVudDogZXZ0LCBlZGl0b3IgfSApO1xuXHRcdFx0fSApO1xuXHRcdH0gKTtcblx0fVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEJsdXJFdmVudCB7XG5cdGV2ZW50OiBDS0VkaXRvcjUuRXZlbnRJbmZvPCdibHVyJz47XG5cdGVkaXRvcjogQ0tFZGl0b3I1LkVkaXRvcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBGb2N1c0V2ZW50IHtcblx0ZXZlbnQ6IENLRWRpdG9yNS5FdmVudEluZm88J2ZvY3VzJz47XG5cdGVkaXRvcjogQ0tFZGl0b3I1LkVkaXRvcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDaGFuZ2VFdmVudCB7XG5cdGV2ZW50OiBDS0VkaXRvcjUuRXZlbnRJbmZvPCdjaGFuZ2U6ZGF0YSc+O1xuXHRlZGl0b3I6IENLRWRpdG9yNS5FZGl0b3I7XG59XG4iLCIvKipcbiAqIEBsaWNlbnNlIENvcHlyaWdodCAoYykgMjAwMy0yMDE4LCBDS1NvdXJjZSAtIEZyZWRlcmljbyBLbmFiYmVuLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogRm9yIGxpY2Vuc2luZywgc2VlIExJQ0VOU0UubWQuXG4gKi9cblxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IENLRWRpdG9yQ29tcG9uZW50IH0gZnJvbSAnLi9ja2VkaXRvci5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoIHtcblx0aW1wb3J0czogWyBGb3Jtc01vZHVsZSwgQ29tbW9uTW9kdWxlIF0sXG5cdGRlY2xhcmF0aW9uczogWyBDS0VkaXRvckNvbXBvbmVudCBdLFxuXHRleHBvcnRzOiBbIENLRWRpdG9yQ29tcG9uZW50IF1cbn0gKVxuZXhwb3J0IGNsYXNzIENLRWRpdG9yTW9kdWxlIHt9XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0lBa0pDLDJCQUFhLFVBQXNCLEVBQUUsTUFBYzs7Ozs7b0JBdkZuQyxFQUFFOzs7Ozs7dUJBT0MsS0FBSzs7Ozs7O3FCQXdCTixJQUFJLFlBQVksRUFBb0I7Ozs7OztzQkFPUixJQUFJLFlBQVksRUFBZTs7Ozs7O29CQU9uQyxJQUFJLFlBQVksRUFBYTs7Ozs7O3FCQU8zQixJQUFJLFlBQVksRUFBYzs7Ozs4QkFLekIsSUFBSTs7Ozs7aUNBTXpCLEtBQUs7UUF5QmhDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO0tBQzdCO0lBNUVELHNCQUFhLHVDQUFROzs7O1FBSXJCO1lBQ0MsSUFBSyxJQUFJLENBQUMsY0FBZSxFQUFFO2dCQUMxQixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDO2FBQ3RDO1lBRUQsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUM7U0FDOUI7Ozs7Ozs7Ozs7Ozs7UUFWRCxVQUF1QixVQUFtQjtZQUN6QyxJQUFJLENBQUMsZ0JBQWdCLENBQUUsVUFBVSxDQUFFLENBQUM7U0FDcEM7OztPQUFBOzs7OztJQTZFRCwyQ0FBZTs7O0lBQWY7UUFBQSxpQkFJQztRQUhBLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUU7WUFDOUIsS0FBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1NBQ3BCLENBQUUsQ0FBQztLQUNKOzs7OztJQUdELHVDQUFXOzs7SUFBWDtRQUNDLElBQUssSUFBSSxDQUFDLGNBQWUsRUFBRTtZQUMxQixJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQzlCLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO1NBQzNCO0tBQ0Q7Ozs7OztJQUdELHNDQUFVOzs7O0lBQVYsVUFBWSxLQUFvQjs7O1FBRy9CLElBQUssS0FBSyxLQUFLLElBQUssRUFBRTtZQUNyQixLQUFLLEdBQUcsRUFBRSxDQUFDO1NBQ1g7O1FBR0QsSUFBSyxJQUFJLENBQUMsY0FBZSxFQUFFO1lBQzFCLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFFLEtBQUssQ0FBRSxDQUFDO1NBQ3JDO2FBRUk7WUFDSixJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztTQUNsQjtLQUNEOzs7Ozs7SUFHRCw0Q0FBZ0I7Ozs7SUFBaEIsVUFBa0IsUUFBa0M7UUFDbkQsSUFBSSxDQUFDLFdBQVcsR0FBRyxRQUFRLENBQUM7S0FDNUI7Ozs7OztJQUdELDZDQUFpQjs7OztJQUFqQixVQUFtQixRQUFvQjtRQUN0QyxJQUFJLENBQUMsWUFBWSxHQUFHLFFBQVEsQ0FBQztLQUM3Qjs7Ozs7O0lBR0QsNENBQWdCOzs7O0lBQWhCLFVBQWtCLFVBQW1COztRQUVwQyxJQUFLLElBQUksQ0FBQyxjQUFlLEVBQUU7WUFDMUIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1NBQzVDO2FBRUk7WUFDSixJQUFJLENBQUMsaUJBQWlCLEdBQUcsVUFBVSxDQUFDO1NBQ3BDO0tBQ0Q7Ozs7OztJQU1PLHdDQUFZOzs7Ozs7OztRQUNuQixJQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFFLElBQUksQ0FBQyxPQUFPLENBQUUsQ0FBQztRQUV2RCxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUUsT0FBTyxDQUFFLENBQUM7UUFFckQsMEJBQU8sSUFBSSxDQUFDLE1BQU0sR0FBRSxNQUFNLENBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQzlDLElBQUksQ0FBRSxVQUFBLE1BQU07WUFDWixLQUFJLENBQUMsY0FBYyxHQUFHLE1BQU0sQ0FBQztZQUU3QixNQUFNLENBQUMsT0FBTyxDQUFFLEtBQUksQ0FBQyxJQUFJLENBQUUsQ0FBQztZQUU1QixJQUFLLEtBQUksQ0FBQyxpQkFBa0IsRUFBRTtnQkFDN0IsTUFBTSxDQUFDLFVBQVUsR0FBRyxLQUFJLENBQUMsaUJBQWlCLENBQUM7YUFDM0M7WUFFRCxLQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBRTtnQkFDaEIsS0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUUsTUFBTSxDQUFFLENBQUM7YUFDMUIsQ0FBRSxDQUFDO1lBRUosS0FBSSxDQUFDLGlCQUFpQixDQUFFLE1BQU0sQ0FBRSxDQUFDO1NBQ2pDLEVBQ0EsS0FBSyxDQUFFLFVBQUUsR0FBVTtZQUNuQixPQUFPLENBQUMsS0FBSyxDQUFFLEdBQUcsQ0FBQyxLQUFLLENBQUUsQ0FBQztTQUMzQixFQUFHOzs7Ozs7O0lBTUUsNkNBQWlCOzs7OztjQUFFLE1BQXdCOzs7UUFDbEQsSUFBTSxhQUFhLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUM7O1FBQzVDLElBQU0sWUFBWSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUVsRCxhQUFhLENBQUMsRUFBRSxDQUFFLGFBQWEsRUFBRSxVQUFFLEdBQXVDOztZQUN6RSxJQUFNLElBQUksR0FBRyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7WUFFOUIsS0FBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUU7Z0JBQ2hCLElBQUssS0FBSSxDQUFDLFdBQVksRUFBRTtvQkFDdkIsS0FBSSxDQUFDLFdBQVcsQ0FBRSxJQUFJLENBQUUsQ0FBQztpQkFDekI7Z0JBRUQsS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUUsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLE1BQU0sUUFBQSxFQUFFLENBQUUsQ0FBQzthQUMzQyxDQUFFLENBQUM7U0FDSixDQUFFLENBQUM7UUFFSixZQUFZLENBQUMsRUFBRSxDQUFFLE9BQU8sRUFBRSxVQUFFLEdBQWlDO1lBQzVELEtBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFFO2dCQUNoQixLQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBRSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsTUFBTSxRQUFBLEVBQUUsQ0FBRSxDQUFDO2FBQzFDLENBQUUsQ0FBQztTQUNKLENBQUUsQ0FBQztRQUVKLFlBQVksQ0FBQyxFQUFFLENBQUUsTUFBTSxFQUFFLFVBQUUsR0FBZ0M7WUFDMUQsS0FBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUU7Z0JBQ2hCLElBQUssS0FBSSxDQUFDLFlBQWEsRUFBRTtvQkFDeEIsS0FBSSxDQUFDLFlBQVksRUFBRSxDQUFDO2lCQUNwQjtnQkFFRCxLQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBRSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsTUFBTSxRQUFBLEVBQUUsQ0FBRSxDQUFDO2FBQ3pDLENBQUUsQ0FBQztTQUNKLENBQUUsQ0FBQzs7O2dCQXRQTCxTQUFTLFNBQUU7b0JBQ1gsUUFBUSxFQUFFLFVBQVU7b0JBQ3BCLFFBQVEsRUFBRSw2QkFBNkI7O29CQUd2QyxTQUFTLEVBQUU7d0JBQ1Y7NEJBQ0MsT0FBTyxFQUFFLGlCQUFpQjs0QkFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBRSxjQUFNLE9BQUEsaUJBQWlCLEdBQUEsQ0FBRTs0QkFDbEQsS0FBSyxFQUFFLElBQUk7eUJBQ1g7cUJBQ0Q7aUJBQ0Q7Ozs7Z0JBdEJBLFVBQVU7Z0JBSlYsTUFBTTs7O3lCQXFDTCxLQUFLO3lCQU9MLEtBQUs7dUJBTUwsS0FBSzswQkFPTCxLQUFLOzJCQU9MLEtBQUs7d0JBaUJMLE1BQU07eUJBT04sTUFBTTt1QkFPTixNQUFNO3dCQU9OLE1BQU07OzRCQS9HUjs7Ozs7Ozs7Ozs7Z0JDVUMsUUFBUSxTQUFFO29CQUNWLE9BQU8sRUFBRSxDQUFFLFdBQVcsRUFBRSxZQUFZLENBQUU7b0JBQ3RDLFlBQVksRUFBRSxDQUFFLGlCQUFpQixDQUFFO29CQUNuQyxPQUFPLEVBQUUsQ0FBRSxpQkFBaUIsQ0FBRTtpQkFDOUI7O3lCQWREOzs7Ozs7Ozs7OyJ9

/***/ }),

/***/ "./node_modules/rxjs/index.js":
/*!************************************!*\
  !*** ./node_modules/rxjs/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = __webpack_require__(/*! ./internal/Observable */ "./node_modules/rxjs/internal/Observable.js");
exports.Observable = Observable_1.Observable;
var ConnectableObservable_1 = __webpack_require__(/*! ./internal/observable/ConnectableObservable */ "./node_modules/rxjs/internal/observable/ConnectableObservable.js");
exports.ConnectableObservable = ConnectableObservable_1.ConnectableObservable;
var groupBy_1 = __webpack_require__(/*! ./internal/operators/groupBy */ "./node_modules/rxjs/internal/operators/groupBy.js");
exports.GroupedObservable = groupBy_1.GroupedObservable;
var observable_1 = __webpack_require__(/*! ./internal/symbol/observable */ "./node_modules/rxjs/internal/symbol/observable.js");
exports.observable = observable_1.observable;
var Subject_1 = __webpack_require__(/*! ./internal/Subject */ "./node_modules/rxjs/internal/Subject.js");
exports.Subject = Subject_1.Subject;
var BehaviorSubject_1 = __webpack_require__(/*! ./internal/BehaviorSubject */ "./node_modules/rxjs/internal/BehaviorSubject.js");
exports.BehaviorSubject = BehaviorSubject_1.BehaviorSubject;
var ReplaySubject_1 = __webpack_require__(/*! ./internal/ReplaySubject */ "./node_modules/rxjs/internal/ReplaySubject.js");
exports.ReplaySubject = ReplaySubject_1.ReplaySubject;
var AsyncSubject_1 = __webpack_require__(/*! ./internal/AsyncSubject */ "./node_modules/rxjs/internal/AsyncSubject.js");
exports.AsyncSubject = AsyncSubject_1.AsyncSubject;
var asap_1 = __webpack_require__(/*! ./internal/scheduler/asap */ "./node_modules/rxjs/internal/scheduler/asap.js");
exports.asapScheduler = asap_1.asap;
var async_1 = __webpack_require__(/*! ./internal/scheduler/async */ "./node_modules/rxjs/internal/scheduler/async.js");
exports.asyncScheduler = async_1.async;
var queue_1 = __webpack_require__(/*! ./internal/scheduler/queue */ "./node_modules/rxjs/internal/scheduler/queue.js");
exports.queueScheduler = queue_1.queue;
var animationFrame_1 = __webpack_require__(/*! ./internal/scheduler/animationFrame */ "./node_modules/rxjs/internal/scheduler/animationFrame.js");
exports.animationFrameScheduler = animationFrame_1.animationFrame;
var VirtualTimeScheduler_1 = __webpack_require__(/*! ./internal/scheduler/VirtualTimeScheduler */ "./node_modules/rxjs/internal/scheduler/VirtualTimeScheduler.js");
exports.VirtualTimeScheduler = VirtualTimeScheduler_1.VirtualTimeScheduler;
exports.VirtualAction = VirtualTimeScheduler_1.VirtualAction;
var Scheduler_1 = __webpack_require__(/*! ./internal/Scheduler */ "./node_modules/rxjs/internal/Scheduler.js");
exports.Scheduler = Scheduler_1.Scheduler;
var Subscription_1 = __webpack_require__(/*! ./internal/Subscription */ "./node_modules/rxjs/internal/Subscription.js");
exports.Subscription = Subscription_1.Subscription;
var Subscriber_1 = __webpack_require__(/*! ./internal/Subscriber */ "./node_modules/rxjs/internal/Subscriber.js");
exports.Subscriber = Subscriber_1.Subscriber;
var Notification_1 = __webpack_require__(/*! ./internal/Notification */ "./node_modules/rxjs/internal/Notification.js");
exports.Notification = Notification_1.Notification;
var pipe_1 = __webpack_require__(/*! ./internal/util/pipe */ "./node_modules/rxjs/internal/util/pipe.js");
exports.pipe = pipe_1.pipe;
var noop_1 = __webpack_require__(/*! ./internal/util/noop */ "./node_modules/rxjs/internal/util/noop.js");
exports.noop = noop_1.noop;
var identity_1 = __webpack_require__(/*! ./internal/util/identity */ "./node_modules/rxjs/internal/util/identity.js");
exports.identity = identity_1.identity;
var isObservable_1 = __webpack_require__(/*! ./internal/util/isObservable */ "./node_modules/rxjs/internal/util/isObservable.js");
exports.isObservable = isObservable_1.isObservable;
var ArgumentOutOfRangeError_1 = __webpack_require__(/*! ./internal/util/ArgumentOutOfRangeError */ "./node_modules/rxjs/internal/util/ArgumentOutOfRangeError.js");
exports.ArgumentOutOfRangeError = ArgumentOutOfRangeError_1.ArgumentOutOfRangeError;
var EmptyError_1 = __webpack_require__(/*! ./internal/util/EmptyError */ "./node_modules/rxjs/internal/util/EmptyError.js");
exports.EmptyError = EmptyError_1.EmptyError;
var ObjectUnsubscribedError_1 = __webpack_require__(/*! ./internal/util/ObjectUnsubscribedError */ "./node_modules/rxjs/internal/util/ObjectUnsubscribedError.js");
exports.ObjectUnsubscribedError = ObjectUnsubscribedError_1.ObjectUnsubscribedError;
var UnsubscriptionError_1 = __webpack_require__(/*! ./internal/util/UnsubscriptionError */ "./node_modules/rxjs/internal/util/UnsubscriptionError.js");
exports.UnsubscriptionError = UnsubscriptionError_1.UnsubscriptionError;
var TimeoutError_1 = __webpack_require__(/*! ./internal/util/TimeoutError */ "./node_modules/rxjs/internal/util/TimeoutError.js");
exports.TimeoutError = TimeoutError_1.TimeoutError;
var bindCallback_1 = __webpack_require__(/*! ./internal/observable/bindCallback */ "./node_modules/rxjs/internal/observable/bindCallback.js");
exports.bindCallback = bindCallback_1.bindCallback;
var bindNodeCallback_1 = __webpack_require__(/*! ./internal/observable/bindNodeCallback */ "./node_modules/rxjs/internal/observable/bindNodeCallback.js");
exports.bindNodeCallback = bindNodeCallback_1.bindNodeCallback;
var combineLatest_1 = __webpack_require__(/*! ./internal/observable/combineLatest */ "./node_modules/rxjs/internal/observable/combineLatest.js");
exports.combineLatest = combineLatest_1.combineLatest;
var concat_1 = __webpack_require__(/*! ./internal/observable/concat */ "./node_modules/rxjs/internal/observable/concat.js");
exports.concat = concat_1.concat;
var defer_1 = __webpack_require__(/*! ./internal/observable/defer */ "./node_modules/rxjs/internal/observable/defer.js");
exports.defer = defer_1.defer;
var empty_1 = __webpack_require__(/*! ./internal/observable/empty */ "./node_modules/rxjs/internal/observable/empty.js");
exports.empty = empty_1.empty;
var forkJoin_1 = __webpack_require__(/*! ./internal/observable/forkJoin */ "./node_modules/rxjs/internal/observable/forkJoin.js");
exports.forkJoin = forkJoin_1.forkJoin;
var from_1 = __webpack_require__(/*! ./internal/observable/from */ "./node_modules/rxjs/internal/observable/from.js");
exports.from = from_1.from;
var fromEvent_1 = __webpack_require__(/*! ./internal/observable/fromEvent */ "./node_modules/rxjs/internal/observable/fromEvent.js");
exports.fromEvent = fromEvent_1.fromEvent;
var fromEventPattern_1 = __webpack_require__(/*! ./internal/observable/fromEventPattern */ "./node_modules/rxjs/internal/observable/fromEventPattern.js");
exports.fromEventPattern = fromEventPattern_1.fromEventPattern;
var generate_1 = __webpack_require__(/*! ./internal/observable/generate */ "./node_modules/rxjs/internal/observable/generate.js");
exports.generate = generate_1.generate;
var iif_1 = __webpack_require__(/*! ./internal/observable/iif */ "./node_modules/rxjs/internal/observable/iif.js");
exports.iif = iif_1.iif;
var interval_1 = __webpack_require__(/*! ./internal/observable/interval */ "./node_modules/rxjs/internal/observable/interval.js");
exports.interval = interval_1.interval;
var merge_1 = __webpack_require__(/*! ./internal/observable/merge */ "./node_modules/rxjs/internal/observable/merge.js");
exports.merge = merge_1.merge;
var never_1 = __webpack_require__(/*! ./internal/observable/never */ "./node_modules/rxjs/internal/observable/never.js");
exports.never = never_1.never;
var of_1 = __webpack_require__(/*! ./internal/observable/of */ "./node_modules/rxjs/internal/observable/of.js");
exports.of = of_1.of;
var onErrorResumeNext_1 = __webpack_require__(/*! ./internal/observable/onErrorResumeNext */ "./node_modules/rxjs/internal/observable/onErrorResumeNext.js");
exports.onErrorResumeNext = onErrorResumeNext_1.onErrorResumeNext;
var pairs_1 = __webpack_require__(/*! ./internal/observable/pairs */ "./node_modules/rxjs/internal/observable/pairs.js");
exports.pairs = pairs_1.pairs;
var race_1 = __webpack_require__(/*! ./internal/observable/race */ "./node_modules/rxjs/internal/observable/race.js");
exports.race = race_1.race;
var range_1 = __webpack_require__(/*! ./internal/observable/range */ "./node_modules/rxjs/internal/observable/range.js");
exports.range = range_1.range;
var throwError_1 = __webpack_require__(/*! ./internal/observable/throwError */ "./node_modules/rxjs/internal/observable/throwError.js");
exports.throwError = throwError_1.throwError;
var timer_1 = __webpack_require__(/*! ./internal/observable/timer */ "./node_modules/rxjs/internal/observable/timer.js");
exports.timer = timer_1.timer;
var using_1 = __webpack_require__(/*! ./internal/observable/using */ "./node_modules/rxjs/internal/observable/using.js");
exports.using = using_1.using;
var zip_1 = __webpack_require__(/*! ./internal/observable/zip */ "./node_modules/rxjs/internal/observable/zip.js");
exports.zip = zip_1.zip;
var empty_2 = __webpack_require__(/*! ./internal/observable/empty */ "./node_modules/rxjs/internal/observable/empty.js");
exports.EMPTY = empty_2.EMPTY;
var never_2 = __webpack_require__(/*! ./internal/observable/never */ "./node_modules/rxjs/internal/observable/never.js");
exports.NEVER = never_2.NEVER;
var config_1 = __webpack_require__(/*! ./internal/config */ "./node_modules/rxjs/internal/config.js");
exports.config = config_1.config;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/AsyncSubject.js":
/*!****************************************************!*\
  !*** ./node_modules/rxjs/internal/AsyncSubject.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Subject_1 = __webpack_require__(/*! ./Subject */ "./node_modules/rxjs/internal/Subject.js");
var Subscription_1 = __webpack_require__(/*! ./Subscription */ "./node_modules/rxjs/internal/Subscription.js");
var AsyncSubject = (function (_super) {
    __extends(AsyncSubject, _super);
    function AsyncSubject() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.value = null;
        _this.hasNext = false;
        _this.hasCompleted = false;
        return _this;
    }
    AsyncSubject.prototype._subscribe = function (subscriber) {
        if (this.hasError) {
            subscriber.error(this.thrownError);
            return Subscription_1.Subscription.EMPTY;
        }
        else if (this.hasCompleted && this.hasNext) {
            subscriber.next(this.value);
            subscriber.complete();
            return Subscription_1.Subscription.EMPTY;
        }
        return _super.prototype._subscribe.call(this, subscriber);
    };
    AsyncSubject.prototype.next = function (value) {
        if (!this.hasCompleted) {
            this.value = value;
            this.hasNext = true;
        }
    };
    AsyncSubject.prototype.error = function (error) {
        if (!this.hasCompleted) {
            _super.prototype.error.call(this, error);
        }
    };
    AsyncSubject.prototype.complete = function () {
        this.hasCompleted = true;
        if (this.hasNext) {
            _super.prototype.next.call(this, this.value);
        }
        _super.prototype.complete.call(this);
    };
    return AsyncSubject;
}(Subject_1.Subject));
exports.AsyncSubject = AsyncSubject;
//# sourceMappingURL=AsyncSubject.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/BehaviorSubject.js":
/*!*******************************************************!*\
  !*** ./node_modules/rxjs/internal/BehaviorSubject.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Subject_1 = __webpack_require__(/*! ./Subject */ "./node_modules/rxjs/internal/Subject.js");
var ObjectUnsubscribedError_1 = __webpack_require__(/*! ./util/ObjectUnsubscribedError */ "./node_modules/rxjs/internal/util/ObjectUnsubscribedError.js");
var BehaviorSubject = (function (_super) {
    __extends(BehaviorSubject, _super);
    function BehaviorSubject(_value) {
        var _this = _super.call(this) || this;
        _this._value = _value;
        return _this;
    }
    Object.defineProperty(BehaviorSubject.prototype, "value", {
        get: function () {
            return this.getValue();
        },
        enumerable: true,
        configurable: true
    });
    BehaviorSubject.prototype._subscribe = function (subscriber) {
        var subscription = _super.prototype._subscribe.call(this, subscriber);
        if (subscription && !subscription.closed) {
            subscriber.next(this._value);
        }
        return subscription;
    };
    BehaviorSubject.prototype.getValue = function () {
        if (this.hasError) {
            throw this.thrownError;
        }
        else if (this.closed) {
            throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
        }
        else {
            return this._value;
        }
    };
    BehaviorSubject.prototype.next = function (value) {
        _super.prototype.next.call(this, this._value = value);
    };
    return BehaviorSubject;
}(Subject_1.Subject));
exports.BehaviorSubject = BehaviorSubject;
//# sourceMappingURL=BehaviorSubject.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/InnerSubscriber.js":
/*!*******************************************************!*\
  !*** ./node_modules/rxjs/internal/InnerSubscriber.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Subscriber_1 = __webpack_require__(/*! ./Subscriber */ "./node_modules/rxjs/internal/Subscriber.js");
var InnerSubscriber = (function (_super) {
    __extends(InnerSubscriber, _super);
    function InnerSubscriber(parent, outerValue, outerIndex) {
        var _this = _super.call(this) || this;
        _this.parent = parent;
        _this.outerValue = outerValue;
        _this.outerIndex = outerIndex;
        _this.index = 0;
        return _this;
    }
    InnerSubscriber.prototype._next = function (value) {
        this.parent.notifyNext(this.outerValue, value, this.outerIndex, this.index++, this);
    };
    InnerSubscriber.prototype._error = function (error) {
        this.parent.notifyError(error, this);
        this.unsubscribe();
    };
    InnerSubscriber.prototype._complete = function () {
        this.parent.notifyComplete(this);
        this.unsubscribe();
    };
    return InnerSubscriber;
}(Subscriber_1.Subscriber));
exports.InnerSubscriber = InnerSubscriber;
//# sourceMappingURL=InnerSubscriber.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/Notification.js":
/*!****************************************************!*\
  !*** ./node_modules/rxjs/internal/Notification.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var empty_1 = __webpack_require__(/*! ./observable/empty */ "./node_modules/rxjs/internal/observable/empty.js");
var of_1 = __webpack_require__(/*! ./observable/of */ "./node_modules/rxjs/internal/observable/of.js");
var throwError_1 = __webpack_require__(/*! ./observable/throwError */ "./node_modules/rxjs/internal/observable/throwError.js");
var Notification = (function () {
    function Notification(kind, value, error) {
        this.kind = kind;
        this.value = value;
        this.error = error;
        this.hasValue = kind === 'N';
    }
    Notification.prototype.observe = function (observer) {
        switch (this.kind) {
            case 'N':
                return observer.next && observer.next(this.value);
            case 'E':
                return observer.error && observer.error(this.error);
            case 'C':
                return observer.complete && observer.complete();
        }
    };
    Notification.prototype.do = function (next, error, complete) {
        var kind = this.kind;
        switch (kind) {
            case 'N':
                return next && next(this.value);
            case 'E':
                return error && error(this.error);
            case 'C':
                return complete && complete();
        }
    };
    Notification.prototype.accept = function (nextOrObserver, error, complete) {
        if (nextOrObserver && typeof nextOrObserver.next === 'function') {
            return this.observe(nextOrObserver);
        }
        else {
            return this.do(nextOrObserver, error, complete);
        }
    };
    Notification.prototype.toObservable = function () {
        var kind = this.kind;
        switch (kind) {
            case 'N':
                return of_1.of(this.value);
            case 'E':
                return throwError_1.throwError(this.error);
            case 'C':
                return empty_1.empty();
        }
        throw new Error('unexpected notification kind value');
    };
    Notification.createNext = function (value) {
        if (typeof value !== 'undefined') {
            return new Notification('N', value);
        }
        return Notification.undefinedValueNotification;
    };
    Notification.createError = function (err) {
        return new Notification('E', undefined, err);
    };
    Notification.createComplete = function () {
        return Notification.completeNotification;
    };
    Notification.completeNotification = new Notification('C');
    Notification.undefinedValueNotification = new Notification('N', undefined);
    return Notification;
}());
exports.Notification = Notification;
//# sourceMappingURL=Notification.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/OuterSubscriber.js":
/*!*******************************************************!*\
  !*** ./node_modules/rxjs/internal/OuterSubscriber.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Subscriber_1 = __webpack_require__(/*! ./Subscriber */ "./node_modules/rxjs/internal/Subscriber.js");
var OuterSubscriber = (function (_super) {
    __extends(OuterSubscriber, _super);
    function OuterSubscriber() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OuterSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.destination.next(innerValue);
    };
    OuterSubscriber.prototype.notifyError = function (error, innerSub) {
        this.destination.error(error);
    };
    OuterSubscriber.prototype.notifyComplete = function (innerSub) {
        this.destination.complete();
    };
    return OuterSubscriber;
}(Subscriber_1.Subscriber));
exports.OuterSubscriber = OuterSubscriber;
//# sourceMappingURL=OuterSubscriber.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/ReplaySubject.js":
/*!*****************************************************!*\
  !*** ./node_modules/rxjs/internal/ReplaySubject.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Subject_1 = __webpack_require__(/*! ./Subject */ "./node_modules/rxjs/internal/Subject.js");
var queue_1 = __webpack_require__(/*! ./scheduler/queue */ "./node_modules/rxjs/internal/scheduler/queue.js");
var Subscription_1 = __webpack_require__(/*! ./Subscription */ "./node_modules/rxjs/internal/Subscription.js");
var observeOn_1 = __webpack_require__(/*! ./operators/observeOn */ "./node_modules/rxjs/internal/operators/observeOn.js");
var ObjectUnsubscribedError_1 = __webpack_require__(/*! ./util/ObjectUnsubscribedError */ "./node_modules/rxjs/internal/util/ObjectUnsubscribedError.js");
var SubjectSubscription_1 = __webpack_require__(/*! ./SubjectSubscription */ "./node_modules/rxjs/internal/SubjectSubscription.js");
var ReplaySubject = (function (_super) {
    __extends(ReplaySubject, _super);
    function ReplaySubject(bufferSize, windowTime, scheduler) {
        if (bufferSize === void 0) { bufferSize = Number.POSITIVE_INFINITY; }
        if (windowTime === void 0) { windowTime = Number.POSITIVE_INFINITY; }
        var _this = _super.call(this) || this;
        _this.scheduler = scheduler;
        _this._events = [];
        _this._infiniteTimeWindow = false;
        _this._bufferSize = bufferSize < 1 ? 1 : bufferSize;
        _this._windowTime = windowTime < 1 ? 1 : windowTime;
        if (windowTime === Number.POSITIVE_INFINITY) {
            _this._infiniteTimeWindow = true;
            _this.next = _this.nextInfiniteTimeWindow;
        }
        else {
            _this.next = _this.nextTimeWindow;
        }
        return _this;
    }
    ReplaySubject.prototype.nextInfiniteTimeWindow = function (value) {
        var _events = this._events;
        _events.push(value);
        if (_events.length > this._bufferSize) {
            _events.shift();
        }
        _super.prototype.next.call(this, value);
    };
    ReplaySubject.prototype.nextTimeWindow = function (value) {
        this._events.push(new ReplayEvent(this._getNow(), value));
        this._trimBufferThenGetEvents();
        _super.prototype.next.call(this, value);
    };
    ReplaySubject.prototype._subscribe = function (subscriber) {
        var _infiniteTimeWindow = this._infiniteTimeWindow;
        var _events = _infiniteTimeWindow ? this._events : this._trimBufferThenGetEvents();
        var scheduler = this.scheduler;
        var len = _events.length;
        var subscription;
        if (this.closed) {
            throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
        }
        else if (this.isStopped || this.hasError) {
            subscription = Subscription_1.Subscription.EMPTY;
        }
        else {
            this.observers.push(subscriber);
            subscription = new SubjectSubscription_1.SubjectSubscription(this, subscriber);
        }
        if (scheduler) {
            subscriber.add(subscriber = new observeOn_1.ObserveOnSubscriber(subscriber, scheduler));
        }
        if (_infiniteTimeWindow) {
            for (var i = 0; i < len && !subscriber.closed; i++) {
                subscriber.next(_events[i]);
            }
        }
        else {
            for (var i = 0; i < len && !subscriber.closed; i++) {
                subscriber.next(_events[i].value);
            }
        }
        if (this.hasError) {
            subscriber.error(this.thrownError);
        }
        else if (this.isStopped) {
            subscriber.complete();
        }
        return subscription;
    };
    ReplaySubject.prototype._getNow = function () {
        return (this.scheduler || queue_1.queue).now();
    };
    ReplaySubject.prototype._trimBufferThenGetEvents = function () {
        var now = this._getNow();
        var _bufferSize = this._bufferSize;
        var _windowTime = this._windowTime;
        var _events = this._events;
        var eventsCount = _events.length;
        var spliceCount = 0;
        while (spliceCount < eventsCount) {
            if ((now - _events[spliceCount].time) < _windowTime) {
                break;
            }
            spliceCount++;
        }
        if (eventsCount > _bufferSize) {
            spliceCount = Math.max(spliceCount, eventsCount - _bufferSize);
        }
        if (spliceCount > 0) {
            _events.splice(0, spliceCount);
        }
        return _events;
    };
    return ReplaySubject;
}(Subject_1.Subject));
exports.ReplaySubject = ReplaySubject;
var ReplayEvent = (function () {
    function ReplayEvent(time, value) {
        this.time = time;
        this.value = value;
    }
    return ReplayEvent;
}());
//# sourceMappingURL=ReplaySubject.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/Scheduler.js":
/*!*************************************************!*\
  !*** ./node_modules/rxjs/internal/Scheduler.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Scheduler = (function () {
    function Scheduler(SchedulerAction, now) {
        if (now === void 0) { now = Scheduler.now; }
        this.SchedulerAction = SchedulerAction;
        this.now = now;
    }
    Scheduler.prototype.schedule = function (work, delay, state) {
        if (delay === void 0) { delay = 0; }
        return new this.SchedulerAction(this, work).schedule(state, delay);
    };
    Scheduler.now = function () { return Date.now(); };
    return Scheduler;
}());
exports.Scheduler = Scheduler;
//# sourceMappingURL=Scheduler.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/Subject.js":
/*!***********************************************!*\
  !*** ./node_modules/rxjs/internal/Subject.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = __webpack_require__(/*! ./Observable */ "./node_modules/rxjs/internal/Observable.js");
var Subscriber_1 = __webpack_require__(/*! ./Subscriber */ "./node_modules/rxjs/internal/Subscriber.js");
var Subscription_1 = __webpack_require__(/*! ./Subscription */ "./node_modules/rxjs/internal/Subscription.js");
var ObjectUnsubscribedError_1 = __webpack_require__(/*! ./util/ObjectUnsubscribedError */ "./node_modules/rxjs/internal/util/ObjectUnsubscribedError.js");
var SubjectSubscription_1 = __webpack_require__(/*! ./SubjectSubscription */ "./node_modules/rxjs/internal/SubjectSubscription.js");
var rxSubscriber_1 = __webpack_require__(/*! ../internal/symbol/rxSubscriber */ "./node_modules/rxjs/internal/symbol/rxSubscriber.js");
var SubjectSubscriber = (function (_super) {
    __extends(SubjectSubscriber, _super);
    function SubjectSubscriber(destination) {
        var _this = _super.call(this, destination) || this;
        _this.destination = destination;
        return _this;
    }
    return SubjectSubscriber;
}(Subscriber_1.Subscriber));
exports.SubjectSubscriber = SubjectSubscriber;
var Subject = (function (_super) {
    __extends(Subject, _super);
    function Subject() {
        var _this = _super.call(this) || this;
        _this.observers = [];
        _this.closed = false;
        _this.isStopped = false;
        _this.hasError = false;
        _this.thrownError = null;
        return _this;
    }
    Subject.prototype[rxSubscriber_1.rxSubscriber] = function () {
        return new SubjectSubscriber(this);
    };
    Subject.prototype.lift = function (operator) {
        var subject = new AnonymousSubject(this, this);
        subject.operator = operator;
        return subject;
    };
    Subject.prototype.next = function (value) {
        if (this.closed) {
            throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
        }
        if (!this.isStopped) {
            var observers = this.observers;
            var len = observers.length;
            var copy = observers.slice();
            for (var i = 0; i < len; i++) {
                copy[i].next(value);
            }
        }
    };
    Subject.prototype.error = function (err) {
        if (this.closed) {
            throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
        }
        this.hasError = true;
        this.thrownError = err;
        this.isStopped = true;
        var observers = this.observers;
        var len = observers.length;
        var copy = observers.slice();
        for (var i = 0; i < len; i++) {
            copy[i].error(err);
        }
        this.observers.length = 0;
    };
    Subject.prototype.complete = function () {
        if (this.closed) {
            throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
        }
        this.isStopped = true;
        var observers = this.observers;
        var len = observers.length;
        var copy = observers.slice();
        for (var i = 0; i < len; i++) {
            copy[i].complete();
        }
        this.observers.length = 0;
    };
    Subject.prototype.unsubscribe = function () {
        this.isStopped = true;
        this.closed = true;
        this.observers = null;
    };
    Subject.prototype._trySubscribe = function (subscriber) {
        if (this.closed) {
            throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
        }
        else {
            return _super.prototype._trySubscribe.call(this, subscriber);
        }
    };
    Subject.prototype._subscribe = function (subscriber) {
        if (this.closed) {
            throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
        }
        else if (this.hasError) {
            subscriber.error(this.thrownError);
            return Subscription_1.Subscription.EMPTY;
        }
        else if (this.isStopped) {
            subscriber.complete();
            return Subscription_1.Subscription.EMPTY;
        }
        else {
            this.observers.push(subscriber);
            return new SubjectSubscription_1.SubjectSubscription(this, subscriber);
        }
    };
    Subject.prototype.asObservable = function () {
        var observable = new Observable_1.Observable();
        observable.source = this;
        return observable;
    };
    Subject.create = function (destination, source) {
        return new AnonymousSubject(destination, source);
    };
    return Subject;
}(Observable_1.Observable));
exports.Subject = Subject;
var AnonymousSubject = (function (_super) {
    __extends(AnonymousSubject, _super);
    function AnonymousSubject(destination, source) {
        var _this = _super.call(this) || this;
        _this.destination = destination;
        _this.source = source;
        return _this;
    }
    AnonymousSubject.prototype.next = function (value) {
        var destination = this.destination;
        if (destination && destination.next) {
            destination.next(value);
        }
    };
    AnonymousSubject.prototype.error = function (err) {
        var destination = this.destination;
        if (destination && destination.error) {
            this.destination.error(err);
        }
    };
    AnonymousSubject.prototype.complete = function () {
        var destination = this.destination;
        if (destination && destination.complete) {
            this.destination.complete();
        }
    };
    AnonymousSubject.prototype._subscribe = function (subscriber) {
        var source = this.source;
        if (source) {
            return this.source.subscribe(subscriber);
        }
        else {
            return Subscription_1.Subscription.EMPTY;
        }
    };
    return AnonymousSubject;
}(Subject));
exports.AnonymousSubject = AnonymousSubject;
//# sourceMappingURL=Subject.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/SubjectSubscription.js":
/*!***********************************************************!*\
  !*** ./node_modules/rxjs/internal/SubjectSubscription.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Subscription_1 = __webpack_require__(/*! ./Subscription */ "./node_modules/rxjs/internal/Subscription.js");
var SubjectSubscription = (function (_super) {
    __extends(SubjectSubscription, _super);
    function SubjectSubscription(subject, subscriber) {
        var _this = _super.call(this) || this;
        _this.subject = subject;
        _this.subscriber = subscriber;
        _this.closed = false;
        return _this;
    }
    SubjectSubscription.prototype.unsubscribe = function () {
        if (this.closed) {
            return;
        }
        this.closed = true;
        var subject = this.subject;
        var observers = subject.observers;
        this.subject = null;
        if (!observers || observers.length === 0 || subject.isStopped || subject.closed) {
            return;
        }
        var subscriberIndex = observers.indexOf(this.subscriber);
        if (subscriberIndex !== -1) {
            observers.splice(subscriberIndex, 1);
        }
    };
    return SubjectSubscription;
}(Subscription_1.Subscription));
exports.SubjectSubscription = SubjectSubscription;
//# sourceMappingURL=SubjectSubscription.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/observable/ConnectableObservable.js":
/*!************************************************************************!*\
  !*** ./node_modules/rxjs/internal/observable/ConnectableObservable.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Subject_1 = __webpack_require__(/*! ../Subject */ "./node_modules/rxjs/internal/Subject.js");
var Observable_1 = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/internal/Observable.js");
var Subscriber_1 = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/internal/Subscriber.js");
var Subscription_1 = __webpack_require__(/*! ../Subscription */ "./node_modules/rxjs/internal/Subscription.js");
var refCount_1 = __webpack_require__(/*! ../operators/refCount */ "./node_modules/rxjs/internal/operators/refCount.js");
var ConnectableObservable = (function (_super) {
    __extends(ConnectableObservable, _super);
    function ConnectableObservable(source, subjectFactory) {
        var _this = _super.call(this) || this;
        _this.source = source;
        _this.subjectFactory = subjectFactory;
        _this._refCount = 0;
        _this._isComplete = false;
        return _this;
    }
    ConnectableObservable.prototype._subscribe = function (subscriber) {
        return this.getSubject().subscribe(subscriber);
    };
    ConnectableObservable.prototype.getSubject = function () {
        var subject = this._subject;
        if (!subject || subject.isStopped) {
            this._subject = this.subjectFactory();
        }
        return this._subject;
    };
    ConnectableObservable.prototype.connect = function () {
        var connection = this._connection;
        if (!connection) {
            this._isComplete = false;
            connection = this._connection = new Subscription_1.Subscription();
            connection.add(this.source
                .subscribe(new ConnectableSubscriber(this.getSubject(), this)));
            if (connection.closed) {
                this._connection = null;
                connection = Subscription_1.Subscription.EMPTY;
            }
            else {
                this._connection = connection;
            }
        }
        return connection;
    };
    ConnectableObservable.prototype.refCount = function () {
        return refCount_1.refCount()(this);
    };
    return ConnectableObservable;
}(Observable_1.Observable));
exports.ConnectableObservable = ConnectableObservable;
var connectableProto = ConnectableObservable.prototype;
exports.connectableObservableDescriptor = {
    operator: { value: null },
    _refCount: { value: 0, writable: true },
    _subject: { value: null, writable: true },
    _connection: { value: null, writable: true },
    _subscribe: { value: connectableProto._subscribe },
    _isComplete: { value: connectableProto._isComplete, writable: true },
    getSubject: { value: connectableProto.getSubject },
    connect: { value: connectableProto.connect },
    refCount: { value: connectableProto.refCount }
};
var ConnectableSubscriber = (function (_super) {
    __extends(ConnectableSubscriber, _super);
    function ConnectableSubscriber(destination, connectable) {
        var _this = _super.call(this, destination) || this;
        _this.connectable = connectable;
        return _this;
    }
    ConnectableSubscriber.prototype._error = function (err) {
        this._unsubscribe();
        _super.prototype._error.call(this, err);
    };
    ConnectableSubscriber.prototype._complete = function () {
        this.connectable._isComplete = true;
        this._unsubscribe();
        _super.prototype._complete.call(this);
    };
    ConnectableSubscriber.prototype._unsubscribe = function () {
        var connectable = this.connectable;
        if (connectable) {
            this.connectable = null;
            var connection = connectable._connection;
            connectable._refCount = 0;
            connectable._subject = null;
            connectable._connection = null;
            if (connection) {
                connection.unsubscribe();
            }
        }
    };
    return ConnectableSubscriber;
}(Subject_1.SubjectSubscriber));
var RefCountOperator = (function () {
    function RefCountOperator(connectable) {
        this.connectable = connectable;
    }
    RefCountOperator.prototype.call = function (subscriber, source) {
        var connectable = this.connectable;
        connectable._refCount++;
        var refCounter = new RefCountSubscriber(subscriber, connectable);
        var subscription = source.subscribe(refCounter);
        if (!refCounter.closed) {
            refCounter.connection = connectable.connect();
        }
        return subscription;
    };
    return RefCountOperator;
}());
var RefCountSubscriber = (function (_super) {
    __extends(RefCountSubscriber, _super);
    function RefCountSubscriber(destination, connectable) {
        var _this = _super.call(this, destination) || this;
        _this.connectable = connectable;
        return _this;
    }
    RefCountSubscriber.prototype._unsubscribe = function () {
        var connectable = this.connectable;
        if (!connectable) {
            this.connection = null;
            return;
        }
        this.connectable = null;
        var refCount = connectable._refCount;
        if (refCount <= 0) {
            this.connection = null;
            return;
        }
        connectable._refCount = refCount - 1;
        if (refCount > 1) {
            this.connection = null;
            return;
        }
        var connection = this.connection;
        var sharedConnection = connectable._connection;
        this.connection = null;
        if (sharedConnection && (!connection || sharedConnection === connection)) {
            sharedConnection.unsubscribe();
        }
    };
    return RefCountSubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=ConnectableObservable.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/observable/bindCallback.js":
/*!***************************************************************!*\
  !*** ./node_modules/rxjs/internal/observable/bindCallback.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/internal/Observable.js");
var AsyncSubject_1 = __webpack_require__(/*! ../AsyncSubject */ "./node_modules/rxjs/internal/AsyncSubject.js");
var map_1 = __webpack_require__(/*! ../operators/map */ "./node_modules/rxjs/internal/operators/map.js");
var isArray_1 = __webpack_require__(/*! ../util/isArray */ "./node_modules/rxjs/internal/util/isArray.js");
var isScheduler_1 = __webpack_require__(/*! ../util/isScheduler */ "./node_modules/rxjs/internal/util/isScheduler.js");
function bindCallback(callbackFunc, resultSelector, scheduler) {
    if (resultSelector) {
        if (isScheduler_1.isScheduler(resultSelector)) {
            scheduler = resultSelector;
        }
        else {
            return function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return bindCallback(callbackFunc, scheduler).apply(void 0, args).pipe(map_1.map(function (args) { return isArray_1.isArray(args) ? resultSelector.apply(void 0, args) : resultSelector(args); }));
            };
        }
    }
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var context = this;
        var subject;
        var params = {
            context: context,
            subject: subject,
            callbackFunc: callbackFunc,
            scheduler: scheduler,
        };
        return new Observable_1.Observable(function (subscriber) {
            if (!scheduler) {
                if (!subject) {
                    subject = new AsyncSubject_1.AsyncSubject();
                    var handler = function () {
                        var innerArgs = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            innerArgs[_i] = arguments[_i];
                        }
                        subject.next(innerArgs.length <= 1 ? innerArgs[0] : innerArgs);
                        subject.complete();
                    };
                    try {
                        callbackFunc.apply(context, args.concat([handler]));
                    }
                    catch (err) {
                        subject.error(err);
                    }
                }
                return subject.subscribe(subscriber);
            }
            else {
                var state = {
                    args: args, subscriber: subscriber, params: params,
                };
                return scheduler.schedule(dispatch, 0, state);
            }
        });
    };
}
exports.bindCallback = bindCallback;
function dispatch(state) {
    var _this = this;
    var self = this;
    var args = state.args, subscriber = state.subscriber, params = state.params;
    var callbackFunc = params.callbackFunc, context = params.context, scheduler = params.scheduler;
    var subject = params.subject;
    if (!subject) {
        subject = params.subject = new AsyncSubject_1.AsyncSubject();
        var handler = function () {
            var innerArgs = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                innerArgs[_i] = arguments[_i];
            }
            var value = innerArgs.length <= 1 ? innerArgs[0] : innerArgs;
            _this.add(scheduler.schedule(dispatchNext, 0, { value: value, subject: subject }));
        };
        try {
            callbackFunc.apply(context, args.concat([handler]));
        }
        catch (err) {
            subject.error(err);
        }
    }
    this.add(subject.subscribe(subscriber));
}
function dispatchNext(state) {
    var value = state.value, subject = state.subject;
    subject.next(value);
    subject.complete();
}
function dispatchError(state) {
    var err = state.err, subject = state.subject;
    subject.error(err);
}
//# sourceMappingURL=bindCallback.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/observable/bindNodeCallback.js":
/*!*******************************************************************!*\
  !*** ./node_modules/rxjs/internal/observable/bindNodeCallback.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/internal/Observable.js");
var AsyncSubject_1 = __webpack_require__(/*! ../AsyncSubject */ "./node_modules/rxjs/internal/AsyncSubject.js");
var map_1 = __webpack_require__(/*! ../operators/map */ "./node_modules/rxjs/internal/operators/map.js");
var isScheduler_1 = __webpack_require__(/*! ../util/isScheduler */ "./node_modules/rxjs/internal/util/isScheduler.js");
var isArray_1 = __webpack_require__(/*! ../util/isArray */ "./node_modules/rxjs/internal/util/isArray.js");
function bindNodeCallback(callbackFunc, resultSelector, scheduler) {
    if (resultSelector) {
        if (isScheduler_1.isScheduler(resultSelector)) {
            scheduler = resultSelector;
        }
        else {
            return function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return bindNodeCallback(callbackFunc, scheduler).apply(void 0, args).pipe(map_1.map(function (args) { return isArray_1.isArray(args) ? resultSelector.apply(void 0, args) : resultSelector(args); }));
            };
        }
    }
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var params = {
            subject: undefined,
            args: args,
            callbackFunc: callbackFunc,
            scheduler: scheduler,
            context: this,
        };
        return new Observable_1.Observable(function (subscriber) {
            var context = params.context;
            var subject = params.subject;
            if (!scheduler) {
                if (!subject) {
                    subject = params.subject = new AsyncSubject_1.AsyncSubject();
                    var handler = function () {
                        var innerArgs = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            innerArgs[_i] = arguments[_i];
                        }
                        var err = innerArgs.shift();
                        if (err) {
                            subject.error(err);
                            return;
                        }
                        subject.next(innerArgs.length <= 1 ? innerArgs[0] : innerArgs);
                        subject.complete();
                    };
                    try {
                        callbackFunc.apply(context, args.concat([handler]));
                    }
                    catch (err) {
                        subject.error(err);
                    }
                }
                return subject.subscribe(subscriber);
            }
            else {
                return scheduler.schedule(dispatch, 0, { params: params, subscriber: subscriber, context: context });
            }
        });
    };
}
exports.bindNodeCallback = bindNodeCallback;
function dispatch(state) {
    var _this = this;
    var params = state.params, subscriber = state.subscriber, context = state.context;
    var callbackFunc = params.callbackFunc, args = params.args, scheduler = params.scheduler;
    var subject = params.subject;
    if (!subject) {
        subject = params.subject = new AsyncSubject_1.AsyncSubject();
        var handler = function () {
            var innerArgs = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                innerArgs[_i] = arguments[_i];
            }
            var err = innerArgs.shift();
            if (err) {
                _this.add(scheduler.schedule(dispatchError, 0, { err: err, subject: subject }));
            }
            else {
                var value = innerArgs.length <= 1 ? innerArgs[0] : innerArgs;
                _this.add(scheduler.schedule(dispatchNext, 0, { value: value, subject: subject }));
            }
        };
        try {
            callbackFunc.apply(context, args.concat([handler]));
        }
        catch (err) {
            this.add(scheduler.schedule(dispatchError, 0, { err: err, subject: subject }));
        }
    }
    this.add(subject.subscribe(subscriber));
}
function dispatchNext(arg) {
    var value = arg.value, subject = arg.subject;
    subject.next(value);
    subject.complete();
}
function dispatchError(arg) {
    var err = arg.err, subject = arg.subject;
    subject.error(err);
}
//# sourceMappingURL=bindNodeCallback.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/observable/combineLatest.js":
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/internal/observable/combineLatest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var isScheduler_1 = __webpack_require__(/*! ../util/isScheduler */ "./node_modules/rxjs/internal/util/isScheduler.js");
var isArray_1 = __webpack_require__(/*! ../util/isArray */ "./node_modules/rxjs/internal/util/isArray.js");
var OuterSubscriber_1 = __webpack_require__(/*! ../OuterSubscriber */ "./node_modules/rxjs/internal/OuterSubscriber.js");
var subscribeToResult_1 = __webpack_require__(/*! ../util/subscribeToResult */ "./node_modules/rxjs/internal/util/subscribeToResult.js");
var fromArray_1 = __webpack_require__(/*! ./fromArray */ "./node_modules/rxjs/internal/observable/fromArray.js");
var NONE = {};
function combineLatest() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i] = arguments[_i];
    }
    var resultSelector = null;
    var scheduler = null;
    if (isScheduler_1.isScheduler(observables[observables.length - 1])) {
        scheduler = observables.pop();
    }
    if (typeof observables[observables.length - 1] === 'function') {
        resultSelector = observables.pop();
    }
    if (observables.length === 1 && isArray_1.isArray(observables[0])) {
        observables = observables[0];
    }
    return fromArray_1.fromArray(observables, scheduler).lift(new CombineLatestOperator(resultSelector));
}
exports.combineLatest = combineLatest;
var CombineLatestOperator = (function () {
    function CombineLatestOperator(resultSelector) {
        this.resultSelector = resultSelector;
    }
    CombineLatestOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new CombineLatestSubscriber(subscriber, this.resultSelector));
    };
    return CombineLatestOperator;
}());
exports.CombineLatestOperator = CombineLatestOperator;
var CombineLatestSubscriber = (function (_super) {
    __extends(CombineLatestSubscriber, _super);
    function CombineLatestSubscriber(destination, resultSelector) {
        var _this = _super.call(this, destination) || this;
        _this.resultSelector = resultSelector;
        _this.active = 0;
        _this.values = [];
        _this.observables = [];
        return _this;
    }
    CombineLatestSubscriber.prototype._next = function (observable) {
        this.values.push(NONE);
        this.observables.push(observable);
    };
    CombineLatestSubscriber.prototype._complete = function () {
        var observables = this.observables;
        var len = observables.length;
        if (len === 0) {
            this.destination.complete();
        }
        else {
            this.active = len;
            this.toRespond = len;
            for (var i = 0; i < len; i++) {
                var observable = observables[i];
                this.add(subscribeToResult_1.subscribeToResult(this, observable, observable, i));
            }
        }
    };
    CombineLatestSubscriber.prototype.notifyComplete = function (unused) {
        if ((this.active -= 1) === 0) {
            this.destination.complete();
        }
    };
    CombineLatestSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        var values = this.values;
        var oldVal = values[outerIndex];
        var toRespond = !this.toRespond
            ? 0
            : oldVal === NONE ? --this.toRespond : this.toRespond;
        values[outerIndex] = innerValue;
        if (toRespond === 0) {
            if (this.resultSelector) {
                this._tryResultSelector(values);
            }
            else {
                this.destination.next(values.slice());
            }
        }
    };
    CombineLatestSubscriber.prototype._tryResultSelector = function (values) {
        var result;
        try {
            result = this.resultSelector.apply(this, values);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        this.destination.next(result);
    };
    return CombineLatestSubscriber;
}(OuterSubscriber_1.OuterSubscriber));
exports.CombineLatestSubscriber = CombineLatestSubscriber;
//# sourceMappingURL=combineLatest.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/observable/concat.js":
/*!*********************************************************!*\
  !*** ./node_modules/rxjs/internal/observable/concat.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var isScheduler_1 = __webpack_require__(/*! ../util/isScheduler */ "./node_modules/rxjs/internal/util/isScheduler.js");
var of_1 = __webpack_require__(/*! ./of */ "./node_modules/rxjs/internal/observable/of.js");
var from_1 = __webpack_require__(/*! ./from */ "./node_modules/rxjs/internal/observable/from.js");
var concatAll_1 = __webpack_require__(/*! ../operators/concatAll */ "./node_modules/rxjs/internal/operators/concatAll.js");
function concat() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i] = arguments[_i];
    }
    if (observables.length === 1 || (observables.length === 2 && isScheduler_1.isScheduler(observables[1]))) {
        return from_1.from(observables[0]);
    }
    return concatAll_1.concatAll()(of_1.of.apply(void 0, observables));
}
exports.concat = concat;
//# sourceMappingURL=concat.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/observable/defer.js":
/*!********************************************************!*\
  !*** ./node_modules/rxjs/internal/observable/defer.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/internal/Observable.js");
var from_1 = __webpack_require__(/*! ./from */ "./node_modules/rxjs/internal/observable/from.js");
var empty_1 = __webpack_require__(/*! ./empty */ "./node_modules/rxjs/internal/observable/empty.js");
function defer(observableFactory) {
    return new Observable_1.Observable(function (subscriber) {
        var input;
        try {
            input = observableFactory();
        }
        catch (err) {
            subscriber.error(err);
            return undefined;
        }
        var source = input ? from_1.from(input) : empty_1.empty();
        return source.subscribe(subscriber);
    });
}
exports.defer = defer;
//# sourceMappingURL=defer.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/observable/forkJoin.js":
/*!***********************************************************!*\
  !*** ./node_modules/rxjs/internal/observable/forkJoin.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/internal/Observable.js");
var isArray_1 = __webpack_require__(/*! ../util/isArray */ "./node_modules/rxjs/internal/util/isArray.js");
var empty_1 = __webpack_require__(/*! ./empty */ "./node_modules/rxjs/internal/observable/empty.js");
var subscribeToResult_1 = __webpack_require__(/*! ../util/subscribeToResult */ "./node_modules/rxjs/internal/util/subscribeToResult.js");
var OuterSubscriber_1 = __webpack_require__(/*! ../OuterSubscriber */ "./node_modules/rxjs/internal/OuterSubscriber.js");
var map_1 = __webpack_require__(/*! ../operators/map */ "./node_modules/rxjs/internal/operators/map.js");
function forkJoin() {
    var sources = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        sources[_i] = arguments[_i];
    }
    var resultSelector;
    if (typeof sources[sources.length - 1] === 'function') {
        resultSelector = sources.pop();
    }
    if (sources.length === 1 && isArray_1.isArray(sources[0])) {
        sources = sources[0];
    }
    if (sources.length === 0) {
        return empty_1.EMPTY;
    }
    if (resultSelector) {
        return forkJoin(sources).pipe(map_1.map(function (args) { return resultSelector.apply(void 0, args); }));
    }
    return new Observable_1.Observable(function (subscriber) {
        return new ForkJoinSubscriber(subscriber, sources);
    });
}
exports.forkJoin = forkJoin;
var ForkJoinSubscriber = (function (_super) {
    __extends(ForkJoinSubscriber, _super);
    function ForkJoinSubscriber(destination, sources) {
        var _this = _super.call(this, destination) || this;
        _this.sources = sources;
        _this.completed = 0;
        _this.haveValues = 0;
        var len = sources.length;
        _this.values = new Array(len);
        for (var i = 0; i < len; i++) {
            var source = sources[i];
            var innerSubscription = subscribeToResult_1.subscribeToResult(_this, source, null, i);
            if (innerSubscription) {
                _this.add(innerSubscription);
            }
        }
        return _this;
    }
    ForkJoinSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.values[outerIndex] = innerValue;
        if (!innerSub._hasValue) {
            innerSub._hasValue = true;
            this.haveValues++;
        }
    };
    ForkJoinSubscriber.prototype.notifyComplete = function (innerSub) {
        var _a = this, destination = _a.destination, haveValues = _a.haveValues, values = _a.values;
        var len = values.length;
        if (!innerSub._hasValue) {
            destination.complete();
            return;
        }
        this.completed++;
        if (this.completed !== len) {
            return;
        }
        if (haveValues === len) {
            destination.next(values);
        }
        destination.complete();
    };
    return ForkJoinSubscriber;
}(OuterSubscriber_1.OuterSubscriber));
//# sourceMappingURL=forkJoin.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/observable/from.js":
/*!*******************************************************!*\
  !*** ./node_modules/rxjs/internal/observable/from.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/internal/Observable.js");
var isPromise_1 = __webpack_require__(/*! ../util/isPromise */ "./node_modules/rxjs/internal/util/isPromise.js");
var isArrayLike_1 = __webpack_require__(/*! ../util/isArrayLike */ "./node_modules/rxjs/internal/util/isArrayLike.js");
var isInteropObservable_1 = __webpack_require__(/*! ../util/isInteropObservable */ "./node_modules/rxjs/internal/util/isInteropObservable.js");
var isIterable_1 = __webpack_require__(/*! ../util/isIterable */ "./node_modules/rxjs/internal/util/isIterable.js");
var fromArray_1 = __webpack_require__(/*! ./fromArray */ "./node_modules/rxjs/internal/observable/fromArray.js");
var fromPromise_1 = __webpack_require__(/*! ./fromPromise */ "./node_modules/rxjs/internal/observable/fromPromise.js");
var fromIterable_1 = __webpack_require__(/*! ./fromIterable */ "./node_modules/rxjs/internal/observable/fromIterable.js");
var fromObservable_1 = __webpack_require__(/*! ./fromObservable */ "./node_modules/rxjs/internal/observable/fromObservable.js");
var subscribeTo_1 = __webpack_require__(/*! ../util/subscribeTo */ "./node_modules/rxjs/internal/util/subscribeTo.js");
function from(input, scheduler) {
    if (!scheduler) {
        if (input instanceof Observable_1.Observable) {
            return input;
        }
        return new Observable_1.Observable(subscribeTo_1.subscribeTo(input));
    }
    if (input != null) {
        if (isInteropObservable_1.isInteropObservable(input)) {
            return fromObservable_1.fromObservable(input, scheduler);
        }
        else if (isPromise_1.isPromise(input)) {
            return fromPromise_1.fromPromise(input, scheduler);
        }
        else if (isArrayLike_1.isArrayLike(input)) {
            return fromArray_1.fromArray(input, scheduler);
        }
        else if (isIterable_1.isIterable(input) || typeof input === 'string') {
            return fromIterable_1.fromIterable(input, scheduler);
        }
    }
    throw new TypeError((input !== null && typeof input || input) + ' is not observable');
}
exports.from = from;
//# sourceMappingURL=from.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/observable/fromEvent.js":
/*!************************************************************!*\
  !*** ./node_modules/rxjs/internal/observable/fromEvent.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/internal/Observable.js");
var isArray_1 = __webpack_require__(/*! ../util/isArray */ "./node_modules/rxjs/internal/util/isArray.js");
var isFunction_1 = __webpack_require__(/*! ../util/isFunction */ "./node_modules/rxjs/internal/util/isFunction.js");
var map_1 = __webpack_require__(/*! ../operators/map */ "./node_modules/rxjs/internal/operators/map.js");
var toString = Object.prototype.toString;
function fromEvent(target, eventName, options, resultSelector) {
    if (isFunction_1.isFunction(options)) {
        resultSelector = options;
        options = undefined;
    }
    if (resultSelector) {
        return fromEvent(target, eventName, options).pipe(map_1.map(function (args) { return isArray_1.isArray(args) ? resultSelector.apply(void 0, args) : resultSelector(args); }));
    }
    return new Observable_1.Observable(function (subscriber) {
        function handler(e) {
            if (arguments.length > 1) {
                subscriber.next(Array.prototype.slice.call(arguments));
            }
            else {
                subscriber.next(e);
            }
        }
        setupSubscription(target, eventName, handler, subscriber, options);
    });
}
exports.fromEvent = fromEvent;
function setupSubscription(sourceObj, eventName, handler, subscriber, options) {
    var unsubscribe;
    if (isEventTarget(sourceObj)) {
        var source_1 = sourceObj;
        sourceObj.addEventListener(eventName, handler, options);
        unsubscribe = function () { return source_1.removeEventListener(eventName, handler, options); };
    }
    else if (isJQueryStyleEventEmitter(sourceObj)) {
        var source_2 = sourceObj;
        sourceObj.on(eventName, handler);
        unsubscribe = function () { return source_2.off(eventName, handler); };
    }
    else if (isNodeStyleEventEmitter(sourceObj)) {
        var source_3 = sourceObj;
        sourceObj.addListener(eventName, handler);
        unsubscribe = function () { return source_3.removeListener(eventName, handler); };
    }
    else if (sourceObj && sourceObj.length) {
        for (var i = 0, len = sourceObj.length; i < len; i++) {
            setupSubscription(sourceObj[i], eventName, handler, subscriber, options);
        }
    }
    else {
        throw new TypeError('Invalid event target');
    }
    subscriber.add(unsubscribe);
}
function isNodeStyleEventEmitter(sourceObj) {
    return sourceObj && typeof sourceObj.addListener === 'function' && typeof sourceObj.removeListener === 'function';
}
function isJQueryStyleEventEmitter(sourceObj) {
    return sourceObj && typeof sourceObj.on === 'function' && typeof sourceObj.off === 'function';
}
function isEventTarget(sourceObj) {
    return sourceObj && typeof sourceObj.addEventListener === 'function' && typeof sourceObj.removeEventListener === 'function';
}
//# sourceMappingURL=fromEvent.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/observable/fromEventPattern.js":
/*!*******************************************************************!*\
  !*** ./node_modules/rxjs/internal/observable/fromEventPattern.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/internal/Observable.js");
var isArray_1 = __webpack_require__(/*! ../util/isArray */ "./node_modules/rxjs/internal/util/isArray.js");
var isFunction_1 = __webpack_require__(/*! ../util/isFunction */ "./node_modules/rxjs/internal/util/isFunction.js");
var map_1 = __webpack_require__(/*! ../operators/map */ "./node_modules/rxjs/internal/operators/map.js");
function fromEventPattern(addHandler, removeHandler, resultSelector) {
    if (resultSelector) {
        return fromEventPattern(addHandler, removeHandler).pipe(map_1.map(function (args) { return isArray_1.isArray(args) ? resultSelector.apply(void 0, args) : resultSelector(args); }));
    }
    return new Observable_1.Observable(function (subscriber) {
        var handler = function () {
            var e = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                e[_i] = arguments[_i];
            }
            return subscriber.next(e.length === 1 ? e[0] : e);
        };
        var retValue;
        try {
            retValue = addHandler(handler);
        }
        catch (err) {
            subscriber.error(err);
            return undefined;
        }
        if (!isFunction_1.isFunction(removeHandler)) {
            return undefined;
        }
        return function () { return removeHandler(handler, retValue); };
    });
}
exports.fromEventPattern = fromEventPattern;
//# sourceMappingURL=fromEventPattern.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/observable/fromIterable.js":
/*!***************************************************************!*\
  !*** ./node_modules/rxjs/internal/observable/fromIterable.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/internal/Observable.js");
var Subscription_1 = __webpack_require__(/*! ../Subscription */ "./node_modules/rxjs/internal/Subscription.js");
var iterator_1 = __webpack_require__(/*! ../symbol/iterator */ "./node_modules/rxjs/internal/symbol/iterator.js");
var subscribeToIterable_1 = __webpack_require__(/*! ../util/subscribeToIterable */ "./node_modules/rxjs/internal/util/subscribeToIterable.js");
function fromIterable(input, scheduler) {
    if (!input) {
        throw new Error('Iterable cannot be null');
    }
    if (!scheduler) {
        return new Observable_1.Observable(subscribeToIterable_1.subscribeToIterable(input));
    }
    else {
        return new Observable_1.Observable(function (subscriber) {
            var sub = new Subscription_1.Subscription();
            var iterator;
            sub.add(function () {
                if (iterator && typeof iterator.return === 'function') {
                    iterator.return();
                }
            });
            sub.add(scheduler.schedule(function () {
                iterator = input[iterator_1.iterator]();
                sub.add(scheduler.schedule(function () {
                    if (subscriber.closed) {
                        return;
                    }
                    var value;
                    var done;
                    try {
                        var result = iterator.next();
                        value = result.value;
                        done = result.done;
                    }
                    catch (err) {
                        subscriber.error(err);
                        return;
                    }
                    if (done) {
                        subscriber.complete();
                    }
                    else {
                        subscriber.next(value);
                        this.schedule();
                    }
                }));
            }));
            return sub;
        });
    }
}
exports.fromIterable = fromIterable;
//# sourceMappingURL=fromIterable.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/observable/fromObservable.js":
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/internal/observable/fromObservable.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/internal/Observable.js");
var Subscription_1 = __webpack_require__(/*! ../Subscription */ "./node_modules/rxjs/internal/Subscription.js");
var observable_1 = __webpack_require__(/*! ../symbol/observable */ "./node_modules/rxjs/internal/symbol/observable.js");
var subscribeToObservable_1 = __webpack_require__(/*! ../util/subscribeToObservable */ "./node_modules/rxjs/internal/util/subscribeToObservable.js");
function fromObservable(input, scheduler) {
    if (!scheduler) {
        return new Observable_1.Observable(subscribeToObservable_1.subscribeToObservable(input));
    }
    else {
        return new Observable_1.Observable(function (subscriber) {
            var sub = new Subscription_1.Subscription();
            sub.add(scheduler.schedule(function () {
                var observable = input[observable_1.observable]();
                sub.add(observable.subscribe({
                    next: function (value) { sub.add(scheduler.schedule(function () { return subscriber.next(value); })); },
                    error: function (err) { sub.add(scheduler.schedule(function () { return subscriber.error(err); })); },
                    complete: function () { sub.add(scheduler.schedule(function () { return subscriber.complete(); })); },
                }));
            }));
            return sub;
        });
    }
}
exports.fromObservable = fromObservable;
//# sourceMappingURL=fromObservable.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/observable/fromPromise.js":
/*!**************************************************************!*\
  !*** ./node_modules/rxjs/internal/observable/fromPromise.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/internal/Observable.js");
var Subscription_1 = __webpack_require__(/*! ../Subscription */ "./node_modules/rxjs/internal/Subscription.js");
var subscribeToPromise_1 = __webpack_require__(/*! ../util/subscribeToPromise */ "./node_modules/rxjs/internal/util/subscribeToPromise.js");
function fromPromise(input, scheduler) {
    if (!scheduler) {
        return new Observable_1.Observable(subscribeToPromise_1.subscribeToPromise(input));
    }
    else {
        return new Observable_1.Observable(function (subscriber) {
            var sub = new Subscription_1.Subscription();
            sub.add(scheduler.schedule(function () { return input.then(function (value) {
                sub.add(scheduler.schedule(function () {
                    subscriber.next(value);
                    sub.add(scheduler.schedule(function () { return subscriber.complete(); }));
                }));
            }, function (err) {
                sub.add(scheduler.schedule(function () { return subscriber.error(err); }));
            }); }));
            return sub;
        });
    }
}
exports.fromPromise = fromPromise;
//# sourceMappingURL=fromPromise.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/observable/generate.js":
/*!***********************************************************!*\
  !*** ./node_modules/rxjs/internal/observable/generate.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/internal/Observable.js");
var identity_1 = __webpack_require__(/*! ../util/identity */ "./node_modules/rxjs/internal/util/identity.js");
var isScheduler_1 = __webpack_require__(/*! ../util/isScheduler */ "./node_modules/rxjs/internal/util/isScheduler.js");
function generate(initialStateOrOptions, condition, iterate, resultSelectorOrObservable, scheduler) {
    var resultSelector;
    var initialState;
    if (arguments.length == 1) {
        var options = initialStateOrOptions;
        initialState = options.initialState;
        condition = options.condition;
        iterate = options.iterate;
        resultSelector = options.resultSelector || identity_1.identity;
        scheduler = options.scheduler;
    }
    else if (resultSelectorOrObservable === undefined || isScheduler_1.isScheduler(resultSelectorOrObservable)) {
        initialState = initialStateOrOptions;
        resultSelector = identity_1.identity;
        scheduler = resultSelectorOrObservable;
    }
    else {
        initialState = initialStateOrOptions;
        resultSelector = resultSelectorOrObservable;
    }
    return new Observable_1.Observable(function (subscriber) {
        var state = initialState;
        if (scheduler) {
            return scheduler.schedule(dispatch, 0, {
                subscriber: subscriber,
                iterate: iterate,
                condition: condition,
                resultSelector: resultSelector,
                state: state
            });
        }
        do {
            if (condition) {
                var conditionResult = void 0;
                try {
                    conditionResult = condition(state);
                }
                catch (err) {
                    subscriber.error(err);
                    return undefined;
                }
                if (!conditionResult) {
                    subscriber.complete();
                    break;
                }
            }
            var value = void 0;
            try {
                value = resultSelector(state);
            }
            catch (err) {
                subscriber.error(err);
                return undefined;
            }
            subscriber.next(value);
            if (subscriber.closed) {
                break;
            }
            try {
                state = iterate(state);
            }
            catch (err) {
                subscriber.error(err);
                return undefined;
            }
        } while (true);
        return undefined;
    });
}
exports.generate = generate;
function dispatch(state) {
    var subscriber = state.subscriber, condition = state.condition;
    if (subscriber.closed) {
        return undefined;
    }
    if (state.needIterate) {
        try {
            state.state = state.iterate(state.state);
        }
        catch (err) {
            subscriber.error(err);
            return undefined;
        }
    }
    else {
        state.needIterate = true;
    }
    if (condition) {
        var conditionResult = void 0;
        try {
            conditionResult = condition(state.state);
        }
        catch (err) {
            subscriber.error(err);
            return undefined;
        }
        if (!conditionResult) {
            subscriber.complete();
            return undefined;
        }
        if (subscriber.closed) {
            return undefined;
        }
    }
    var value;
    try {
        value = state.resultSelector(state.state);
    }
    catch (err) {
        subscriber.error(err);
        return undefined;
    }
    if (subscriber.closed) {
        return undefined;
    }
    subscriber.next(value);
    if (subscriber.closed) {
        return undefined;
    }
    return this.schedule(state);
}
//# sourceMappingURL=generate.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/observable/iif.js":
/*!******************************************************!*\
  !*** ./node_modules/rxjs/internal/observable/iif.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var defer_1 = __webpack_require__(/*! ./defer */ "./node_modules/rxjs/internal/observable/defer.js");
var empty_1 = __webpack_require__(/*! ./empty */ "./node_modules/rxjs/internal/observable/empty.js");
function iif(condition, trueResult, falseResult) {
    if (trueResult === void 0) { trueResult = empty_1.EMPTY; }
    if (falseResult === void 0) { falseResult = empty_1.EMPTY; }
    return defer_1.defer(function () { return condition() ? trueResult : falseResult; });
}
exports.iif = iif;
//# sourceMappingURL=iif.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/observable/interval.js":
/*!***********************************************************!*\
  !*** ./node_modules/rxjs/internal/observable/interval.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/internal/Observable.js");
var async_1 = __webpack_require__(/*! ../scheduler/async */ "./node_modules/rxjs/internal/scheduler/async.js");
var isNumeric_1 = __webpack_require__(/*! ../util/isNumeric */ "./node_modules/rxjs/internal/util/isNumeric.js");
function interval(period, scheduler) {
    if (period === void 0) { period = 0; }
    if (scheduler === void 0) { scheduler = async_1.async; }
    if (!isNumeric_1.isNumeric(period) || period < 0) {
        period = 0;
    }
    if (!scheduler || typeof scheduler.schedule !== 'function') {
        scheduler = async_1.async;
    }
    return new Observable_1.Observable(function (subscriber) {
        subscriber.add(scheduler.schedule(dispatch, period, { subscriber: subscriber, counter: 0, period: period }));
        return subscriber;
    });
}
exports.interval = interval;
function dispatch(state) {
    var subscriber = state.subscriber, counter = state.counter, period = state.period;
    subscriber.next(counter);
    this.schedule({ subscriber: subscriber, counter: counter + 1, period: period }, period);
}
//# sourceMappingURL=interval.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/observable/merge.js":
/*!********************************************************!*\
  !*** ./node_modules/rxjs/internal/observable/merge.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/internal/Observable.js");
var isScheduler_1 = __webpack_require__(/*! ../util/isScheduler */ "./node_modules/rxjs/internal/util/isScheduler.js");
var mergeAll_1 = __webpack_require__(/*! ../operators/mergeAll */ "./node_modules/rxjs/internal/operators/mergeAll.js");
var fromArray_1 = __webpack_require__(/*! ./fromArray */ "./node_modules/rxjs/internal/observable/fromArray.js");
function merge() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i] = arguments[_i];
    }
    var concurrent = Number.POSITIVE_INFINITY;
    var scheduler = null;
    var last = observables[observables.length - 1];
    if (isScheduler_1.isScheduler(last)) {
        scheduler = observables.pop();
        if (observables.length > 1 && typeof observables[observables.length - 1] === 'number') {
            concurrent = observables.pop();
        }
    }
    else if (typeof last === 'number') {
        concurrent = observables.pop();
    }
    if (scheduler === null && observables.length === 1 && observables[0] instanceof Observable_1.Observable) {
        return observables[0];
    }
    return mergeAll_1.mergeAll(concurrent)(fromArray_1.fromArray(observables, scheduler));
}
exports.merge = merge;
//# sourceMappingURL=merge.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/observable/never.js":
/*!********************************************************!*\
  !*** ./node_modules/rxjs/internal/observable/never.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/internal/Observable.js");
var noop_1 = __webpack_require__(/*! ../util/noop */ "./node_modules/rxjs/internal/util/noop.js");
exports.NEVER = new Observable_1.Observable(noop_1.noop);
function never() {
    return exports.NEVER;
}
exports.never = never;
//# sourceMappingURL=never.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/observable/onErrorResumeNext.js":
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/internal/observable/onErrorResumeNext.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/internal/Observable.js");
var from_1 = __webpack_require__(/*! ./from */ "./node_modules/rxjs/internal/observable/from.js");
var isArray_1 = __webpack_require__(/*! ../util/isArray */ "./node_modules/rxjs/internal/util/isArray.js");
var empty_1 = __webpack_require__(/*! ./empty */ "./node_modules/rxjs/internal/observable/empty.js");
function onErrorResumeNext() {
    var sources = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        sources[_i] = arguments[_i];
    }
    if (sources.length === 0) {
        return empty_1.EMPTY;
    }
    var first = sources[0], remainder = sources.slice(1);
    if (sources.length === 1 && isArray_1.isArray(first)) {
        return onErrorResumeNext.apply(void 0, first);
    }
    return new Observable_1.Observable(function (subscriber) {
        var subNext = function () { return subscriber.add(onErrorResumeNext.apply(void 0, remainder).subscribe(subscriber)); };
        return from_1.from(first).subscribe({
            next: function (value) { subscriber.next(value); },
            error: subNext,
            complete: subNext,
        });
    });
}
exports.onErrorResumeNext = onErrorResumeNext;
//# sourceMappingURL=onErrorResumeNext.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/observable/pairs.js":
/*!********************************************************!*\
  !*** ./node_modules/rxjs/internal/observable/pairs.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/internal/Observable.js");
var Subscription_1 = __webpack_require__(/*! ../Subscription */ "./node_modules/rxjs/internal/Subscription.js");
function pairs(obj, scheduler) {
    if (!scheduler) {
        return new Observable_1.Observable(function (subscriber) {
            var keys = Object.keys(obj);
            for (var i = 0; i < keys.length && !subscriber.closed; i++) {
                var key = keys[i];
                if (obj.hasOwnProperty(key)) {
                    subscriber.next([key, obj[key]]);
                }
            }
            subscriber.complete();
        });
    }
    else {
        return new Observable_1.Observable(function (subscriber) {
            var keys = Object.keys(obj);
            var subscription = new Subscription_1.Subscription();
            subscription.add(scheduler.schedule(dispatch, 0, { keys: keys, index: 0, subscriber: subscriber, subscription: subscription, obj: obj }));
            return subscription;
        });
    }
}
exports.pairs = pairs;
function dispatch(state) {
    var keys = state.keys, index = state.index, subscriber = state.subscriber, subscription = state.subscription, obj = state.obj;
    if (!subscriber.closed) {
        if (index < keys.length) {
            var key = keys[index];
            subscriber.next([key, obj[key]]);
            subscription.add(this.schedule({ keys: keys, index: index + 1, subscriber: subscriber, subscription: subscription, obj: obj }));
        }
        else {
            subscriber.complete();
        }
    }
}
exports.dispatch = dispatch;
//# sourceMappingURL=pairs.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/observable/race.js":
/*!*******************************************************!*\
  !*** ./node_modules/rxjs/internal/observable/race.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var isArray_1 = __webpack_require__(/*! ../util/isArray */ "./node_modules/rxjs/internal/util/isArray.js");
var fromArray_1 = __webpack_require__(/*! ./fromArray */ "./node_modules/rxjs/internal/observable/fromArray.js");
var OuterSubscriber_1 = __webpack_require__(/*! ../OuterSubscriber */ "./node_modules/rxjs/internal/OuterSubscriber.js");
var subscribeToResult_1 = __webpack_require__(/*! ../util/subscribeToResult */ "./node_modules/rxjs/internal/util/subscribeToResult.js");
function race() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i] = arguments[_i];
    }
    if (observables.length === 1) {
        if (isArray_1.isArray(observables[0])) {
            observables = observables[0];
        }
        else {
            return observables[0];
        }
    }
    return fromArray_1.fromArray(observables, undefined).lift(new RaceOperator());
}
exports.race = race;
var RaceOperator = (function () {
    function RaceOperator() {
    }
    RaceOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new RaceSubscriber(subscriber));
    };
    return RaceOperator;
}());
exports.RaceOperator = RaceOperator;
var RaceSubscriber = (function (_super) {
    __extends(RaceSubscriber, _super);
    function RaceSubscriber(destination) {
        var _this = _super.call(this, destination) || this;
        _this.hasFirst = false;
        _this.observables = [];
        _this.subscriptions = [];
        return _this;
    }
    RaceSubscriber.prototype._next = function (observable) {
        this.observables.push(observable);
    };
    RaceSubscriber.prototype._complete = function () {
        var observables = this.observables;
        var len = observables.length;
        if (len === 0) {
            this.destination.complete();
        }
        else {
            for (var i = 0; i < len && !this.hasFirst; i++) {
                var observable = observables[i];
                var subscription = subscribeToResult_1.subscribeToResult(this, observable, observable, i);
                if (this.subscriptions) {
                    this.subscriptions.push(subscription);
                }
                this.add(subscription);
            }
            this.observables = null;
        }
    };
    RaceSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        if (!this.hasFirst) {
            this.hasFirst = true;
            for (var i = 0; i < this.subscriptions.length; i++) {
                if (i !== outerIndex) {
                    var subscription = this.subscriptions[i];
                    subscription.unsubscribe();
                    this.remove(subscription);
                }
            }
            this.subscriptions = null;
        }
        this.destination.next(innerValue);
    };
    return RaceSubscriber;
}(OuterSubscriber_1.OuterSubscriber));
exports.RaceSubscriber = RaceSubscriber;
//# sourceMappingURL=race.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/observable/range.js":
/*!********************************************************!*\
  !*** ./node_modules/rxjs/internal/observable/range.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/internal/Observable.js");
function range(start, count, scheduler) {
    if (start === void 0) { start = 0; }
    if (count === void 0) { count = 0; }
    return new Observable_1.Observable(function (subscriber) {
        var index = 0;
        var current = start;
        if (scheduler) {
            return scheduler.schedule(dispatch, 0, {
                index: index, count: count, start: start, subscriber: subscriber
            });
        }
        else {
            do {
                if (index++ >= count) {
                    subscriber.complete();
                    break;
                }
                subscriber.next(current++);
                if (subscriber.closed) {
                    break;
                }
            } while (true);
        }
        return undefined;
    });
}
exports.range = range;
function dispatch(state) {
    var start = state.start, index = state.index, count = state.count, subscriber = state.subscriber;
    if (index >= count) {
        subscriber.complete();
        return;
    }
    subscriber.next(start);
    if (subscriber.closed) {
        return;
    }
    state.index = index + 1;
    state.start = start + 1;
    this.schedule(state);
}
exports.dispatch = dispatch;
//# sourceMappingURL=range.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/observable/throwError.js":
/*!*************************************************************!*\
  !*** ./node_modules/rxjs/internal/observable/throwError.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/internal/Observable.js");
function throwError(error, scheduler) {
    if (!scheduler) {
        return new Observable_1.Observable(function (subscriber) { return subscriber.error(error); });
    }
    else {
        return new Observable_1.Observable(function (subscriber) { return scheduler.schedule(dispatch, 0, { error: error, subscriber: subscriber }); });
    }
}
exports.throwError = throwError;
function dispatch(_a) {
    var error = _a.error, subscriber = _a.subscriber;
    subscriber.error(error);
}
//# sourceMappingURL=throwError.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/observable/timer.js":
/*!********************************************************!*\
  !*** ./node_modules/rxjs/internal/observable/timer.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/internal/Observable.js");
var async_1 = __webpack_require__(/*! ../scheduler/async */ "./node_modules/rxjs/internal/scheduler/async.js");
var isNumeric_1 = __webpack_require__(/*! ../util/isNumeric */ "./node_modules/rxjs/internal/util/isNumeric.js");
var isScheduler_1 = __webpack_require__(/*! ../util/isScheduler */ "./node_modules/rxjs/internal/util/isScheduler.js");
function timer(dueTime, periodOrScheduler, scheduler) {
    if (dueTime === void 0) { dueTime = 0; }
    var period = -1;
    if (isNumeric_1.isNumeric(periodOrScheduler)) {
        period = Number(periodOrScheduler) < 1 && 1 || Number(periodOrScheduler);
    }
    else if (isScheduler_1.isScheduler(periodOrScheduler)) {
        scheduler = periodOrScheduler;
    }
    if (!isScheduler_1.isScheduler(scheduler)) {
        scheduler = async_1.async;
    }
    return new Observable_1.Observable(function (subscriber) {
        var due = isNumeric_1.isNumeric(dueTime)
            ? dueTime
            : (+dueTime - scheduler.now());
        return scheduler.schedule(dispatch, due, {
            index: 0, period: period, subscriber: subscriber
        });
    });
}
exports.timer = timer;
function dispatch(state) {
    var index = state.index, period = state.period, subscriber = state.subscriber;
    subscriber.next(index);
    if (subscriber.closed) {
        return;
    }
    else if (period === -1) {
        return subscriber.complete();
    }
    state.index = index + 1;
    this.schedule(state, period);
}
//# sourceMappingURL=timer.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/observable/using.js":
/*!********************************************************!*\
  !*** ./node_modules/rxjs/internal/observable/using.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/internal/Observable.js");
var from_1 = __webpack_require__(/*! ./from */ "./node_modules/rxjs/internal/observable/from.js");
var empty_1 = __webpack_require__(/*! ./empty */ "./node_modules/rxjs/internal/observable/empty.js");
function using(resourceFactory, observableFactory) {
    return new Observable_1.Observable(function (subscriber) {
        var resource;
        try {
            resource = resourceFactory();
        }
        catch (err) {
            subscriber.error(err);
            return undefined;
        }
        var result;
        try {
            result = observableFactory(resource);
        }
        catch (err) {
            subscriber.error(err);
            return undefined;
        }
        var source = result ? from_1.from(result) : empty_1.EMPTY;
        var subscription = source.subscribe(subscriber);
        return function () {
            subscription.unsubscribe();
            if (resource) {
                resource.unsubscribe();
            }
        };
    });
}
exports.using = using;
//# sourceMappingURL=using.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/observable/zip.js":
/*!******************************************************!*\
  !*** ./node_modules/rxjs/internal/observable/zip.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var fromArray_1 = __webpack_require__(/*! ./fromArray */ "./node_modules/rxjs/internal/observable/fromArray.js");
var isArray_1 = __webpack_require__(/*! ../util/isArray */ "./node_modules/rxjs/internal/util/isArray.js");
var Subscriber_1 = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/internal/Subscriber.js");
var OuterSubscriber_1 = __webpack_require__(/*! ../OuterSubscriber */ "./node_modules/rxjs/internal/OuterSubscriber.js");
var subscribeToResult_1 = __webpack_require__(/*! ../util/subscribeToResult */ "./node_modules/rxjs/internal/util/subscribeToResult.js");
var iterator_1 = __webpack_require__(/*! ../../internal/symbol/iterator */ "./node_modules/rxjs/internal/symbol/iterator.js");
function zip() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i] = arguments[_i];
    }
    var resultSelector = observables[observables.length - 1];
    if (typeof resultSelector === 'function') {
        observables.pop();
    }
    return fromArray_1.fromArray(observables, undefined).lift(new ZipOperator(resultSelector));
}
exports.zip = zip;
var ZipOperator = (function () {
    function ZipOperator(resultSelector) {
        this.resultSelector = resultSelector;
    }
    ZipOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new ZipSubscriber(subscriber, this.resultSelector));
    };
    return ZipOperator;
}());
exports.ZipOperator = ZipOperator;
var ZipSubscriber = (function (_super) {
    __extends(ZipSubscriber, _super);
    function ZipSubscriber(destination, resultSelector, values) {
        if (values === void 0) { values = Object.create(null); }
        var _this = _super.call(this, destination) || this;
        _this.iterators = [];
        _this.active = 0;
        _this.resultSelector = (typeof resultSelector === 'function') ? resultSelector : null;
        _this.values = values;
        return _this;
    }
    ZipSubscriber.prototype._next = function (value) {
        var iterators = this.iterators;
        if (isArray_1.isArray(value)) {
            iterators.push(new StaticArrayIterator(value));
        }
        else if (typeof value[iterator_1.iterator] === 'function') {
            iterators.push(new StaticIterator(value[iterator_1.iterator]()));
        }
        else {
            iterators.push(new ZipBufferIterator(this.destination, this, value));
        }
    };
    ZipSubscriber.prototype._complete = function () {
        var iterators = this.iterators;
        var len = iterators.length;
        if (len === 0) {
            this.destination.complete();
            return;
        }
        this.active = len;
        for (var i = 0; i < len; i++) {
            var iterator = iterators[i];
            if (iterator.stillUnsubscribed) {
                this.add(iterator.subscribe(iterator, i));
            }
            else {
                this.active--;
            }
        }
    };
    ZipSubscriber.prototype.notifyInactive = function () {
        this.active--;
        if (this.active === 0) {
            this.destination.complete();
        }
    };
    ZipSubscriber.prototype.checkIterators = function () {
        var iterators = this.iterators;
        var len = iterators.length;
        var destination = this.destination;
        for (var i = 0; i < len; i++) {
            var iterator = iterators[i];
            if (typeof iterator.hasValue === 'function' && !iterator.hasValue()) {
                return;
            }
        }
        var shouldComplete = false;
        var args = [];
        for (var i = 0; i < len; i++) {
            var iterator = iterators[i];
            var result = iterator.next();
            if (iterator.hasCompleted()) {
                shouldComplete = true;
            }
            if (result.done) {
                destination.complete();
                return;
            }
            args.push(result.value);
        }
        if (this.resultSelector) {
            this._tryresultSelector(args);
        }
        else {
            destination.next(args);
        }
        if (shouldComplete) {
            destination.complete();
        }
    };
    ZipSubscriber.prototype._tryresultSelector = function (args) {
        var result;
        try {
            result = this.resultSelector.apply(this, args);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        this.destination.next(result);
    };
    return ZipSubscriber;
}(Subscriber_1.Subscriber));
exports.ZipSubscriber = ZipSubscriber;
var StaticIterator = (function () {
    function StaticIterator(iterator) {
        this.iterator = iterator;
        this.nextResult = iterator.next();
    }
    StaticIterator.prototype.hasValue = function () {
        return true;
    };
    StaticIterator.prototype.next = function () {
        var result = this.nextResult;
        this.nextResult = this.iterator.next();
        return result;
    };
    StaticIterator.prototype.hasCompleted = function () {
        var nextResult = this.nextResult;
        return nextResult && nextResult.done;
    };
    return StaticIterator;
}());
var StaticArrayIterator = (function () {
    function StaticArrayIterator(array) {
        this.array = array;
        this.index = 0;
        this.length = 0;
        this.length = array.length;
    }
    StaticArrayIterator.prototype[iterator_1.iterator] = function () {
        return this;
    };
    StaticArrayIterator.prototype.next = function (value) {
        var i = this.index++;
        var array = this.array;
        return i < this.length ? { value: array[i], done: false } : { value: null, done: true };
    };
    StaticArrayIterator.prototype.hasValue = function () {
        return this.array.length > this.index;
    };
    StaticArrayIterator.prototype.hasCompleted = function () {
        return this.array.length === this.index;
    };
    return StaticArrayIterator;
}());
var ZipBufferIterator = (function (_super) {
    __extends(ZipBufferIterator, _super);
    function ZipBufferIterator(destination, parent, observable) {
        var _this = _super.call(this, destination) || this;
        _this.parent = parent;
        _this.observable = observable;
        _this.stillUnsubscribed = true;
        _this.buffer = [];
        _this.isComplete = false;
        return _this;
    }
    ZipBufferIterator.prototype[iterator_1.iterator] = function () {
        return this;
    };
    ZipBufferIterator.prototype.next = function () {
        var buffer = this.buffer;
        if (buffer.length === 0 && this.isComplete) {
            return { value: null, done: true };
        }
        else {
            return { value: buffer.shift(), done: false };
        }
    };
    ZipBufferIterator.prototype.hasValue = function () {
        return this.buffer.length > 0;
    };
    ZipBufferIterator.prototype.hasCompleted = function () {
        return this.buffer.length === 0 && this.isComplete;
    };
    ZipBufferIterator.prototype.notifyComplete = function () {
        if (this.buffer.length > 0) {
            this.isComplete = true;
            this.parent.notifyInactive();
        }
        else {
            this.destination.complete();
        }
    };
    ZipBufferIterator.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.buffer.push(innerValue);
        this.parent.checkIterators();
    };
    ZipBufferIterator.prototype.subscribe = function (value, index) {
        return subscribeToResult_1.subscribeToResult(this, this.observable, this, index);
    };
    return ZipBufferIterator;
}(OuterSubscriber_1.OuterSubscriber));
//# sourceMappingURL=zip.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/operators/concatAll.js":
/*!***********************************************************!*\
  !*** ./node_modules/rxjs/internal/operators/concatAll.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var mergeAll_1 = __webpack_require__(/*! ./mergeAll */ "./node_modules/rxjs/internal/operators/mergeAll.js");
function concatAll() {
    return mergeAll_1.mergeAll(1);
}
exports.concatAll = concatAll;
//# sourceMappingURL=concatAll.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/operators/groupBy.js":
/*!*********************************************************!*\
  !*** ./node_modules/rxjs/internal/operators/groupBy.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Subscriber_1 = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/internal/Subscriber.js");
var Subscription_1 = __webpack_require__(/*! ../Subscription */ "./node_modules/rxjs/internal/Subscription.js");
var Observable_1 = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/internal/Observable.js");
var Subject_1 = __webpack_require__(/*! ../Subject */ "./node_modules/rxjs/internal/Subject.js");
function groupBy(keySelector, elementSelector, durationSelector, subjectSelector) {
    return function (source) {
        return source.lift(new GroupByOperator(keySelector, elementSelector, durationSelector, subjectSelector));
    };
}
exports.groupBy = groupBy;
var GroupByOperator = (function () {
    function GroupByOperator(keySelector, elementSelector, durationSelector, subjectSelector) {
        this.keySelector = keySelector;
        this.elementSelector = elementSelector;
        this.durationSelector = durationSelector;
        this.subjectSelector = subjectSelector;
    }
    GroupByOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new GroupBySubscriber(subscriber, this.keySelector, this.elementSelector, this.durationSelector, this.subjectSelector));
    };
    return GroupByOperator;
}());
var GroupBySubscriber = (function (_super) {
    __extends(GroupBySubscriber, _super);
    function GroupBySubscriber(destination, keySelector, elementSelector, durationSelector, subjectSelector) {
        var _this = _super.call(this, destination) || this;
        _this.keySelector = keySelector;
        _this.elementSelector = elementSelector;
        _this.durationSelector = durationSelector;
        _this.subjectSelector = subjectSelector;
        _this.groups = null;
        _this.attemptedToUnsubscribe = false;
        _this.count = 0;
        return _this;
    }
    GroupBySubscriber.prototype._next = function (value) {
        var key;
        try {
            key = this.keySelector(value);
        }
        catch (err) {
            this.error(err);
            return;
        }
        this._group(value, key);
    };
    GroupBySubscriber.prototype._group = function (value, key) {
        var groups = this.groups;
        if (!groups) {
            groups = this.groups = new Map();
        }
        var group = groups.get(key);
        var element;
        if (this.elementSelector) {
            try {
                element = this.elementSelector(value);
            }
            catch (err) {
                this.error(err);
            }
        }
        else {
            element = value;
        }
        if (!group) {
            group = (this.subjectSelector ? this.subjectSelector() : new Subject_1.Subject());
            groups.set(key, group);
            var groupedObservable = new GroupedObservable(key, group, this);
            this.destination.next(groupedObservable);
            if (this.durationSelector) {
                var duration = void 0;
                try {
                    duration = this.durationSelector(new GroupedObservable(key, group));
                }
                catch (err) {
                    this.error(err);
                    return;
                }
                this.add(duration.subscribe(new GroupDurationSubscriber(key, group, this)));
            }
        }
        if (!group.closed) {
            group.next(element);
        }
    };
    GroupBySubscriber.prototype._error = function (err) {
        var groups = this.groups;
        if (groups) {
            groups.forEach(function (group, key) {
                group.error(err);
            });
            groups.clear();
        }
        this.destination.error(err);
    };
    GroupBySubscriber.prototype._complete = function () {
        var groups = this.groups;
        if (groups) {
            groups.forEach(function (group, key) {
                group.complete();
            });
            groups.clear();
        }
        this.destination.complete();
    };
    GroupBySubscriber.prototype.removeGroup = function (key) {
        this.groups.delete(key);
    };
    GroupBySubscriber.prototype.unsubscribe = function () {
        if (!this.closed) {
            this.attemptedToUnsubscribe = true;
            if (this.count === 0) {
                _super.prototype.unsubscribe.call(this);
            }
        }
    };
    return GroupBySubscriber;
}(Subscriber_1.Subscriber));
var GroupDurationSubscriber = (function (_super) {
    __extends(GroupDurationSubscriber, _super);
    function GroupDurationSubscriber(key, group, parent) {
        var _this = _super.call(this, group) || this;
        _this.key = key;
        _this.group = group;
        _this.parent = parent;
        return _this;
    }
    GroupDurationSubscriber.prototype._next = function (value) {
        this.complete();
    };
    GroupDurationSubscriber.prototype._unsubscribe = function () {
        var _a = this, parent = _a.parent, key = _a.key;
        this.key = this.parent = null;
        if (parent) {
            parent.removeGroup(key);
        }
    };
    return GroupDurationSubscriber;
}(Subscriber_1.Subscriber));
var GroupedObservable = (function (_super) {
    __extends(GroupedObservable, _super);
    function GroupedObservable(key, groupSubject, refCountSubscription) {
        var _this = _super.call(this) || this;
        _this.key = key;
        _this.groupSubject = groupSubject;
        _this.refCountSubscription = refCountSubscription;
        return _this;
    }
    GroupedObservable.prototype._subscribe = function (subscriber) {
        var subscription = new Subscription_1.Subscription();
        var _a = this, refCountSubscription = _a.refCountSubscription, groupSubject = _a.groupSubject;
        if (refCountSubscription && !refCountSubscription.closed) {
            subscription.add(new InnerRefCountSubscription(refCountSubscription));
        }
        subscription.add(groupSubject.subscribe(subscriber));
        return subscription;
    };
    return GroupedObservable;
}(Observable_1.Observable));
exports.GroupedObservable = GroupedObservable;
var InnerRefCountSubscription = (function (_super) {
    __extends(InnerRefCountSubscription, _super);
    function InnerRefCountSubscription(parent) {
        var _this = _super.call(this) || this;
        _this.parent = parent;
        parent.count++;
        return _this;
    }
    InnerRefCountSubscription.prototype.unsubscribe = function () {
        var parent = this.parent;
        if (!parent.closed && !this.closed) {
            _super.prototype.unsubscribe.call(this);
            parent.count -= 1;
            if (parent.count === 0 && parent.attemptedToUnsubscribe) {
                parent.unsubscribe();
            }
        }
    };
    return InnerRefCountSubscription;
}(Subscription_1.Subscription));
//# sourceMappingURL=groupBy.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/operators/map.js":
/*!*****************************************************!*\
  !*** ./node_modules/rxjs/internal/operators/map.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Subscriber_1 = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/internal/Subscriber.js");
function map(project, thisArg) {
    return function mapOperation(source) {
        if (typeof project !== 'function') {
            throw new TypeError('argument is not a function. Are you looking for `mapTo()`?');
        }
        return source.lift(new MapOperator(project, thisArg));
    };
}
exports.map = map;
var MapOperator = (function () {
    function MapOperator(project, thisArg) {
        this.project = project;
        this.thisArg = thisArg;
    }
    MapOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new MapSubscriber(subscriber, this.project, this.thisArg));
    };
    return MapOperator;
}());
exports.MapOperator = MapOperator;
var MapSubscriber = (function (_super) {
    __extends(MapSubscriber, _super);
    function MapSubscriber(destination, project, thisArg) {
        var _this = _super.call(this, destination) || this;
        _this.project = project;
        _this.count = 0;
        _this.thisArg = thisArg || _this;
        return _this;
    }
    MapSubscriber.prototype._next = function (value) {
        var result;
        try {
            result = this.project.call(this.thisArg, value, this.count++);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        this.destination.next(result);
    };
    return MapSubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=map.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/operators/mergeAll.js":
/*!**********************************************************!*\
  !*** ./node_modules/rxjs/internal/operators/mergeAll.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var mergeMap_1 = __webpack_require__(/*! ./mergeMap */ "./node_modules/rxjs/internal/operators/mergeMap.js");
var identity_1 = __webpack_require__(/*! ../util/identity */ "./node_modules/rxjs/internal/util/identity.js");
function mergeAll(concurrent) {
    if (concurrent === void 0) { concurrent = Number.POSITIVE_INFINITY; }
    return mergeMap_1.mergeMap(identity_1.identity, concurrent);
}
exports.mergeAll = mergeAll;
//# sourceMappingURL=mergeAll.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/operators/mergeMap.js":
/*!**********************************************************!*\
  !*** ./node_modules/rxjs/internal/operators/mergeMap.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var subscribeToResult_1 = __webpack_require__(/*! ../util/subscribeToResult */ "./node_modules/rxjs/internal/util/subscribeToResult.js");
var OuterSubscriber_1 = __webpack_require__(/*! ../OuterSubscriber */ "./node_modules/rxjs/internal/OuterSubscriber.js");
var map_1 = __webpack_require__(/*! ./map */ "./node_modules/rxjs/internal/operators/map.js");
var from_1 = __webpack_require__(/*! ../observable/from */ "./node_modules/rxjs/internal/observable/from.js");
function mergeMap(project, resultSelector, concurrent) {
    if (concurrent === void 0) { concurrent = Number.POSITIVE_INFINITY; }
    if (typeof resultSelector === 'function') {
        return function (source) { return source.pipe(mergeMap(function (a, i) { return from_1.from(project(a, i)).pipe(map_1.map(function (b, ii) { return resultSelector(a, b, i, ii); })); }, concurrent)); };
    }
    else if (typeof resultSelector === 'number') {
        concurrent = resultSelector;
    }
    return function (source) { return source.lift(new MergeMapOperator(project, concurrent)); };
}
exports.mergeMap = mergeMap;
var MergeMapOperator = (function () {
    function MergeMapOperator(project, concurrent) {
        if (concurrent === void 0) { concurrent = Number.POSITIVE_INFINITY; }
        this.project = project;
        this.concurrent = concurrent;
    }
    MergeMapOperator.prototype.call = function (observer, source) {
        return source.subscribe(new MergeMapSubscriber(observer, this.project, this.concurrent));
    };
    return MergeMapOperator;
}());
exports.MergeMapOperator = MergeMapOperator;
var MergeMapSubscriber = (function (_super) {
    __extends(MergeMapSubscriber, _super);
    function MergeMapSubscriber(destination, project, concurrent) {
        if (concurrent === void 0) { concurrent = Number.POSITIVE_INFINITY; }
        var _this = _super.call(this, destination) || this;
        _this.project = project;
        _this.concurrent = concurrent;
        _this.hasCompleted = false;
        _this.buffer = [];
        _this.active = 0;
        _this.index = 0;
        return _this;
    }
    MergeMapSubscriber.prototype._next = function (value) {
        if (this.active < this.concurrent) {
            this._tryNext(value);
        }
        else {
            this.buffer.push(value);
        }
    };
    MergeMapSubscriber.prototype._tryNext = function (value) {
        var result;
        var index = this.index++;
        try {
            result = this.project(value, index);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        this.active++;
        this._innerSub(result, value, index);
    };
    MergeMapSubscriber.prototype._innerSub = function (ish, value, index) {
        this.add(subscribeToResult_1.subscribeToResult(this, ish, value, index));
    };
    MergeMapSubscriber.prototype._complete = function () {
        this.hasCompleted = true;
        if (this.active === 0 && this.buffer.length === 0) {
            this.destination.complete();
        }
    };
    MergeMapSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.destination.next(innerValue);
    };
    MergeMapSubscriber.prototype.notifyComplete = function (innerSub) {
        var buffer = this.buffer;
        this.remove(innerSub);
        this.active--;
        if (buffer.length > 0) {
            this._next(buffer.shift());
        }
        else if (this.active === 0 && this.hasCompleted) {
            this.destination.complete();
        }
    };
    return MergeMapSubscriber;
}(OuterSubscriber_1.OuterSubscriber));
exports.MergeMapSubscriber = MergeMapSubscriber;
//# sourceMappingURL=mergeMap.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/operators/observeOn.js":
/*!***********************************************************!*\
  !*** ./node_modules/rxjs/internal/operators/observeOn.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Subscriber_1 = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/internal/Subscriber.js");
var Notification_1 = __webpack_require__(/*! ../Notification */ "./node_modules/rxjs/internal/Notification.js");
function observeOn(scheduler, delay) {
    if (delay === void 0) { delay = 0; }
    return function observeOnOperatorFunction(source) {
        return source.lift(new ObserveOnOperator(scheduler, delay));
    };
}
exports.observeOn = observeOn;
var ObserveOnOperator = (function () {
    function ObserveOnOperator(scheduler, delay) {
        if (delay === void 0) { delay = 0; }
        this.scheduler = scheduler;
        this.delay = delay;
    }
    ObserveOnOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new ObserveOnSubscriber(subscriber, this.scheduler, this.delay));
    };
    return ObserveOnOperator;
}());
exports.ObserveOnOperator = ObserveOnOperator;
var ObserveOnSubscriber = (function (_super) {
    __extends(ObserveOnSubscriber, _super);
    function ObserveOnSubscriber(destination, scheduler, delay) {
        if (delay === void 0) { delay = 0; }
        var _this = _super.call(this, destination) || this;
        _this.scheduler = scheduler;
        _this.delay = delay;
        return _this;
    }
    ObserveOnSubscriber.dispatch = function (arg) {
        var notification = arg.notification, destination = arg.destination;
        notification.observe(destination);
        this.unsubscribe();
    };
    ObserveOnSubscriber.prototype.scheduleMessage = function (notification) {
        this.add(this.scheduler.schedule(ObserveOnSubscriber.dispatch, this.delay, new ObserveOnMessage(notification, this.destination)));
    };
    ObserveOnSubscriber.prototype._next = function (value) {
        this.scheduleMessage(Notification_1.Notification.createNext(value));
    };
    ObserveOnSubscriber.prototype._error = function (err) {
        this.scheduleMessage(Notification_1.Notification.createError(err));
    };
    ObserveOnSubscriber.prototype._complete = function () {
        this.scheduleMessage(Notification_1.Notification.createComplete());
    };
    return ObserveOnSubscriber;
}(Subscriber_1.Subscriber));
exports.ObserveOnSubscriber = ObserveOnSubscriber;
var ObserveOnMessage = (function () {
    function ObserveOnMessage(notification, destination) {
        this.notification = notification;
        this.destination = destination;
    }
    return ObserveOnMessage;
}());
exports.ObserveOnMessage = ObserveOnMessage;
//# sourceMappingURL=observeOn.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/operators/refCount.js":
/*!**********************************************************!*\
  !*** ./node_modules/rxjs/internal/operators/refCount.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Subscriber_1 = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/internal/Subscriber.js");
function refCount() {
    return function refCountOperatorFunction(source) {
        return source.lift(new RefCountOperator(source));
    };
}
exports.refCount = refCount;
var RefCountOperator = (function () {
    function RefCountOperator(connectable) {
        this.connectable = connectable;
    }
    RefCountOperator.prototype.call = function (subscriber, source) {
        var connectable = this.connectable;
        connectable._refCount++;
        var refCounter = new RefCountSubscriber(subscriber, connectable);
        var subscription = source.subscribe(refCounter);
        if (!refCounter.closed) {
            refCounter.connection = connectable.connect();
        }
        return subscription;
    };
    return RefCountOperator;
}());
var RefCountSubscriber = (function (_super) {
    __extends(RefCountSubscriber, _super);
    function RefCountSubscriber(destination, connectable) {
        var _this = _super.call(this, destination) || this;
        _this.connectable = connectable;
        return _this;
    }
    RefCountSubscriber.prototype._unsubscribe = function () {
        var connectable = this.connectable;
        if (!connectable) {
            this.connection = null;
            return;
        }
        this.connectable = null;
        var refCount = connectable._refCount;
        if (refCount <= 0) {
            this.connection = null;
            return;
        }
        connectable._refCount = refCount - 1;
        if (refCount > 1) {
            this.connection = null;
            return;
        }
        var connection = this.connection;
        var sharedConnection = connectable._connection;
        this.connection = null;
        if (sharedConnection && (!connection || sharedConnection === connection)) {
            sharedConnection.unsubscribe();
        }
    };
    return RefCountSubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=refCount.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/scheduler/Action.js":
/*!********************************************************!*\
  !*** ./node_modules/rxjs/internal/scheduler/Action.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Subscription_1 = __webpack_require__(/*! ../Subscription */ "./node_modules/rxjs/internal/Subscription.js");
var Action = (function (_super) {
    __extends(Action, _super);
    function Action(scheduler, work) {
        return _super.call(this) || this;
    }
    Action.prototype.schedule = function (state, delay) {
        if (delay === void 0) { delay = 0; }
        return this;
    };
    return Action;
}(Subscription_1.Subscription));
exports.Action = Action;
//# sourceMappingURL=Action.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/scheduler/AnimationFrameAction.js":
/*!**********************************************************************!*\
  !*** ./node_modules/rxjs/internal/scheduler/AnimationFrameAction.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var AsyncAction_1 = __webpack_require__(/*! ./AsyncAction */ "./node_modules/rxjs/internal/scheduler/AsyncAction.js");
var AnimationFrameAction = (function (_super) {
    __extends(AnimationFrameAction, _super);
    function AnimationFrameAction(scheduler, work) {
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        return _this;
    }
    AnimationFrameAction.prototype.requestAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) { delay = 0; }
        if (delay !== null && delay > 0) {
            return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
        }
        scheduler.actions.push(this);
        return scheduler.scheduled || (scheduler.scheduled = requestAnimationFrame(function () { return scheduler.flush(null); }));
    };
    AnimationFrameAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) { delay = 0; }
        if ((delay !== null && delay > 0) || (delay === null && this.delay > 0)) {
            return _super.prototype.recycleAsyncId.call(this, scheduler, id, delay);
        }
        if (scheduler.actions.length === 0) {
            cancelAnimationFrame(id);
            scheduler.scheduled = undefined;
        }
        return undefined;
    };
    return AnimationFrameAction;
}(AsyncAction_1.AsyncAction));
exports.AnimationFrameAction = AnimationFrameAction;
//# sourceMappingURL=AnimationFrameAction.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/scheduler/AnimationFrameScheduler.js":
/*!*************************************************************************!*\
  !*** ./node_modules/rxjs/internal/scheduler/AnimationFrameScheduler.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var AsyncScheduler_1 = __webpack_require__(/*! ./AsyncScheduler */ "./node_modules/rxjs/internal/scheduler/AsyncScheduler.js");
var AnimationFrameScheduler = (function (_super) {
    __extends(AnimationFrameScheduler, _super);
    function AnimationFrameScheduler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AnimationFrameScheduler.prototype.flush = function (action) {
        this.active = true;
        this.scheduled = undefined;
        var actions = this.actions;
        var error;
        var index = -1;
        var count = actions.length;
        action = action || actions.shift();
        do {
            if (error = action.execute(action.state, action.delay)) {
                break;
            }
        } while (++index < count && (action = actions.shift()));
        this.active = false;
        if (error) {
            while (++index < count && (action = actions.shift())) {
                action.unsubscribe();
            }
            throw error;
        }
    };
    return AnimationFrameScheduler;
}(AsyncScheduler_1.AsyncScheduler));
exports.AnimationFrameScheduler = AnimationFrameScheduler;
//# sourceMappingURL=AnimationFrameScheduler.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/scheduler/AsapAction.js":
/*!************************************************************!*\
  !*** ./node_modules/rxjs/internal/scheduler/AsapAction.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Immediate_1 = __webpack_require__(/*! ../util/Immediate */ "./node_modules/rxjs/internal/util/Immediate.js");
var AsyncAction_1 = __webpack_require__(/*! ./AsyncAction */ "./node_modules/rxjs/internal/scheduler/AsyncAction.js");
var AsapAction = (function (_super) {
    __extends(AsapAction, _super);
    function AsapAction(scheduler, work) {
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        return _this;
    }
    AsapAction.prototype.requestAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) { delay = 0; }
        if (delay !== null && delay > 0) {
            return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
        }
        scheduler.actions.push(this);
        return scheduler.scheduled || (scheduler.scheduled = Immediate_1.Immediate.setImmediate(scheduler.flush.bind(scheduler, null)));
    };
    AsapAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) { delay = 0; }
        if ((delay !== null && delay > 0) || (delay === null && this.delay > 0)) {
            return _super.prototype.recycleAsyncId.call(this, scheduler, id, delay);
        }
        if (scheduler.actions.length === 0) {
            Immediate_1.Immediate.clearImmediate(id);
            scheduler.scheduled = undefined;
        }
        return undefined;
    };
    return AsapAction;
}(AsyncAction_1.AsyncAction));
exports.AsapAction = AsapAction;
//# sourceMappingURL=AsapAction.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/scheduler/AsapScheduler.js":
/*!***************************************************************!*\
  !*** ./node_modules/rxjs/internal/scheduler/AsapScheduler.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var AsyncScheduler_1 = __webpack_require__(/*! ./AsyncScheduler */ "./node_modules/rxjs/internal/scheduler/AsyncScheduler.js");
var AsapScheduler = (function (_super) {
    __extends(AsapScheduler, _super);
    function AsapScheduler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AsapScheduler.prototype.flush = function (action) {
        this.active = true;
        this.scheduled = undefined;
        var actions = this.actions;
        var error;
        var index = -1;
        var count = actions.length;
        action = action || actions.shift();
        do {
            if (error = action.execute(action.state, action.delay)) {
                break;
            }
        } while (++index < count && (action = actions.shift()));
        this.active = false;
        if (error) {
            while (++index < count && (action = actions.shift())) {
                action.unsubscribe();
            }
            throw error;
        }
    };
    return AsapScheduler;
}(AsyncScheduler_1.AsyncScheduler));
exports.AsapScheduler = AsapScheduler;
//# sourceMappingURL=AsapScheduler.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/scheduler/AsyncAction.js":
/*!*************************************************************!*\
  !*** ./node_modules/rxjs/internal/scheduler/AsyncAction.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Action_1 = __webpack_require__(/*! ./Action */ "./node_modules/rxjs/internal/scheduler/Action.js");
var AsyncAction = (function (_super) {
    __extends(AsyncAction, _super);
    function AsyncAction(scheduler, work) {
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        _this.pending = false;
        return _this;
    }
    AsyncAction.prototype.schedule = function (state, delay) {
        if (delay === void 0) { delay = 0; }
        if (this.closed) {
            return this;
        }
        this.state = state;
        var id = this.id;
        var scheduler = this.scheduler;
        if (id != null) {
            this.id = this.recycleAsyncId(scheduler, id, delay);
        }
        this.pending = true;
        this.delay = delay;
        this.id = this.id || this.requestAsyncId(scheduler, this.id, delay);
        return this;
    };
    AsyncAction.prototype.requestAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) { delay = 0; }
        return setInterval(scheduler.flush.bind(scheduler, this), delay);
    };
    AsyncAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) { delay = 0; }
        if (delay !== null && this.delay === delay && this.pending === false) {
            return id;
        }
        return clearInterval(id) && undefined || undefined;
    };
    AsyncAction.prototype.execute = function (state, delay) {
        if (this.closed) {
            return new Error('executing a cancelled action');
        }
        this.pending = false;
        var error = this._execute(state, delay);
        if (error) {
            return error;
        }
        else if (this.pending === false && this.id != null) {
            this.id = this.recycleAsyncId(this.scheduler, this.id, null);
        }
    };
    AsyncAction.prototype._execute = function (state, delay) {
        var errored = false;
        var errorValue = undefined;
        try {
            this.work(state);
        }
        catch (e) {
            errored = true;
            errorValue = !!e && e || new Error(e);
        }
        if (errored) {
            this.unsubscribe();
            return errorValue;
        }
    };
    AsyncAction.prototype._unsubscribe = function () {
        var id = this.id;
        var scheduler = this.scheduler;
        var actions = scheduler.actions;
        var index = actions.indexOf(this);
        this.work = null;
        this.state = null;
        this.pending = false;
        this.scheduler = null;
        if (index !== -1) {
            actions.splice(index, 1);
        }
        if (id != null) {
            this.id = this.recycleAsyncId(scheduler, id, null);
        }
        this.delay = null;
    };
    return AsyncAction;
}(Action_1.Action));
exports.AsyncAction = AsyncAction;
//# sourceMappingURL=AsyncAction.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/scheduler/AsyncScheduler.js":
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/internal/scheduler/AsyncScheduler.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Scheduler_1 = __webpack_require__(/*! ../Scheduler */ "./node_modules/rxjs/internal/Scheduler.js");
var AsyncScheduler = (function (_super) {
    __extends(AsyncScheduler, _super);
    function AsyncScheduler(SchedulerAction, now) {
        if (now === void 0) { now = Scheduler_1.Scheduler.now; }
        var _this = _super.call(this, SchedulerAction, function () {
            if (AsyncScheduler.delegate && AsyncScheduler.delegate !== _this) {
                return AsyncScheduler.delegate.now();
            }
            else {
                return now();
            }
        }) || this;
        _this.actions = [];
        _this.active = false;
        _this.scheduled = undefined;
        return _this;
    }
    AsyncScheduler.prototype.schedule = function (work, delay, state) {
        if (delay === void 0) { delay = 0; }
        if (AsyncScheduler.delegate && AsyncScheduler.delegate !== this) {
            return AsyncScheduler.delegate.schedule(work, delay, state);
        }
        else {
            return _super.prototype.schedule.call(this, work, delay, state);
        }
    };
    AsyncScheduler.prototype.flush = function (action) {
        var actions = this.actions;
        if (this.active) {
            actions.push(action);
            return;
        }
        var error;
        this.active = true;
        do {
            if (error = action.execute(action.state, action.delay)) {
                break;
            }
        } while (action = actions.shift());
        this.active = false;
        if (error) {
            while (action = actions.shift()) {
                action.unsubscribe();
            }
            throw error;
        }
    };
    return AsyncScheduler;
}(Scheduler_1.Scheduler));
exports.AsyncScheduler = AsyncScheduler;
//# sourceMappingURL=AsyncScheduler.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/scheduler/QueueAction.js":
/*!*************************************************************!*\
  !*** ./node_modules/rxjs/internal/scheduler/QueueAction.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var AsyncAction_1 = __webpack_require__(/*! ./AsyncAction */ "./node_modules/rxjs/internal/scheduler/AsyncAction.js");
var QueueAction = (function (_super) {
    __extends(QueueAction, _super);
    function QueueAction(scheduler, work) {
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        return _this;
    }
    QueueAction.prototype.schedule = function (state, delay) {
        if (delay === void 0) { delay = 0; }
        if (delay > 0) {
            return _super.prototype.schedule.call(this, state, delay);
        }
        this.delay = delay;
        this.state = state;
        this.scheduler.flush(this);
        return this;
    };
    QueueAction.prototype.execute = function (state, delay) {
        return (delay > 0 || this.closed) ?
            _super.prototype.execute.call(this, state, delay) :
            this._execute(state, delay);
    };
    QueueAction.prototype.requestAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) { delay = 0; }
        if ((delay !== null && delay > 0) || (delay === null && this.delay > 0)) {
            return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
        }
        return scheduler.flush(this);
    };
    return QueueAction;
}(AsyncAction_1.AsyncAction));
exports.QueueAction = QueueAction;
//# sourceMappingURL=QueueAction.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/scheduler/QueueScheduler.js":
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/internal/scheduler/QueueScheduler.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var AsyncScheduler_1 = __webpack_require__(/*! ./AsyncScheduler */ "./node_modules/rxjs/internal/scheduler/AsyncScheduler.js");
var QueueScheduler = (function (_super) {
    __extends(QueueScheduler, _super);
    function QueueScheduler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return QueueScheduler;
}(AsyncScheduler_1.AsyncScheduler));
exports.QueueScheduler = QueueScheduler;
//# sourceMappingURL=QueueScheduler.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/scheduler/VirtualTimeScheduler.js":
/*!**********************************************************************!*\
  !*** ./node_modules/rxjs/internal/scheduler/VirtualTimeScheduler.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var AsyncAction_1 = __webpack_require__(/*! ./AsyncAction */ "./node_modules/rxjs/internal/scheduler/AsyncAction.js");
var AsyncScheduler_1 = __webpack_require__(/*! ./AsyncScheduler */ "./node_modules/rxjs/internal/scheduler/AsyncScheduler.js");
var VirtualTimeScheduler = (function (_super) {
    __extends(VirtualTimeScheduler, _super);
    function VirtualTimeScheduler(SchedulerAction, maxFrames) {
        if (SchedulerAction === void 0) { SchedulerAction = VirtualAction; }
        if (maxFrames === void 0) { maxFrames = Number.POSITIVE_INFINITY; }
        var _this = _super.call(this, SchedulerAction, function () { return _this.frame; }) || this;
        _this.maxFrames = maxFrames;
        _this.frame = 0;
        _this.index = -1;
        return _this;
    }
    VirtualTimeScheduler.prototype.flush = function () {
        var _a = this, actions = _a.actions, maxFrames = _a.maxFrames;
        var error, action;
        while ((action = actions.shift()) && (this.frame = action.delay) <= maxFrames) {
            if (error = action.execute(action.state, action.delay)) {
                break;
            }
        }
        if (error) {
            while (action = actions.shift()) {
                action.unsubscribe();
            }
            throw error;
        }
    };
    VirtualTimeScheduler.frameTimeFactor = 10;
    return VirtualTimeScheduler;
}(AsyncScheduler_1.AsyncScheduler));
exports.VirtualTimeScheduler = VirtualTimeScheduler;
var VirtualAction = (function (_super) {
    __extends(VirtualAction, _super);
    function VirtualAction(scheduler, work, index) {
        if (index === void 0) { index = scheduler.index += 1; }
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        _this.index = index;
        _this.active = true;
        _this.index = scheduler.index = index;
        return _this;
    }
    VirtualAction.prototype.schedule = function (state, delay) {
        if (delay === void 0) { delay = 0; }
        if (!this.id) {
            return _super.prototype.schedule.call(this, state, delay);
        }
        this.active = false;
        var action = new VirtualAction(this.scheduler, this.work);
        this.add(action);
        return action.schedule(state, delay);
    };
    VirtualAction.prototype.requestAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) { delay = 0; }
        this.delay = scheduler.frame + delay;
        var actions = scheduler.actions;
        actions.push(this);
        actions.sort(VirtualAction.sortActions);
        return true;
    };
    VirtualAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) { delay = 0; }
        return undefined;
    };
    VirtualAction.prototype._execute = function (state, delay) {
        if (this.active === true) {
            return _super.prototype._execute.call(this, state, delay);
        }
    };
    VirtualAction.sortActions = function (a, b) {
        if (a.delay === b.delay) {
            if (a.index === b.index) {
                return 0;
            }
            else if (a.index > b.index) {
                return 1;
            }
            else {
                return -1;
            }
        }
        else if (a.delay > b.delay) {
            return 1;
        }
        else {
            return -1;
        }
    };
    return VirtualAction;
}(AsyncAction_1.AsyncAction));
exports.VirtualAction = VirtualAction;
//# sourceMappingURL=VirtualTimeScheduler.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/scheduler/animationFrame.js":
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/internal/scheduler/animationFrame.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var AnimationFrameAction_1 = __webpack_require__(/*! ./AnimationFrameAction */ "./node_modules/rxjs/internal/scheduler/AnimationFrameAction.js");
var AnimationFrameScheduler_1 = __webpack_require__(/*! ./AnimationFrameScheduler */ "./node_modules/rxjs/internal/scheduler/AnimationFrameScheduler.js");
exports.animationFrame = new AnimationFrameScheduler_1.AnimationFrameScheduler(AnimationFrameAction_1.AnimationFrameAction);
//# sourceMappingURL=animationFrame.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/scheduler/asap.js":
/*!******************************************************!*\
  !*** ./node_modules/rxjs/internal/scheduler/asap.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var AsapAction_1 = __webpack_require__(/*! ./AsapAction */ "./node_modules/rxjs/internal/scheduler/AsapAction.js");
var AsapScheduler_1 = __webpack_require__(/*! ./AsapScheduler */ "./node_modules/rxjs/internal/scheduler/AsapScheduler.js");
exports.asap = new AsapScheduler_1.AsapScheduler(AsapAction_1.AsapAction);
//# sourceMappingURL=asap.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/scheduler/async.js":
/*!*******************************************************!*\
  !*** ./node_modules/rxjs/internal/scheduler/async.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var AsyncAction_1 = __webpack_require__(/*! ./AsyncAction */ "./node_modules/rxjs/internal/scheduler/AsyncAction.js");
var AsyncScheduler_1 = __webpack_require__(/*! ./AsyncScheduler */ "./node_modules/rxjs/internal/scheduler/AsyncScheduler.js");
exports.async = new AsyncScheduler_1.AsyncScheduler(AsyncAction_1.AsyncAction);
//# sourceMappingURL=async.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/scheduler/queue.js":
/*!*******************************************************!*\
  !*** ./node_modules/rxjs/internal/scheduler/queue.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var QueueAction_1 = __webpack_require__(/*! ./QueueAction */ "./node_modules/rxjs/internal/scheduler/QueueAction.js");
var QueueScheduler_1 = __webpack_require__(/*! ./QueueScheduler */ "./node_modules/rxjs/internal/scheduler/QueueScheduler.js");
exports.queue = new QueueScheduler_1.QueueScheduler(QueueAction_1.QueueAction);
//# sourceMappingURL=queue.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/symbol/iterator.js":
/*!*******************************************************!*\
  !*** ./node_modules/rxjs/internal/symbol/iterator.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function getSymbolIterator() {
    if (typeof Symbol !== 'function' || !Symbol.iterator) {
        return '@@iterator';
    }
    return Symbol.iterator;
}
exports.getSymbolIterator = getSymbolIterator;
exports.iterator = getSymbolIterator();
exports.$$iterator = exports.iterator;
//# sourceMappingURL=iterator.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/ArgumentOutOfRangeError.js":
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/internal/util/ArgumentOutOfRangeError.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ArgumentOutOfRangeError = (function (_super) {
    __extends(ArgumentOutOfRangeError, _super);
    function ArgumentOutOfRangeError() {
        var _this = _super.call(this, 'argument out of range') || this;
        _this.name = 'ArgumentOutOfRangeError';
        Object.setPrototypeOf(_this, ArgumentOutOfRangeError.prototype);
        return _this;
    }
    return ArgumentOutOfRangeError;
}(Error));
exports.ArgumentOutOfRangeError = ArgumentOutOfRangeError;
//# sourceMappingURL=ArgumentOutOfRangeError.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/EmptyError.js":
/*!*******************************************************!*\
  !*** ./node_modules/rxjs/internal/util/EmptyError.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var EmptyError = (function (_super) {
    __extends(EmptyError, _super);
    function EmptyError() {
        var _this = _super.call(this, 'no elements in sequence') || this;
        _this.name = 'EmptyError';
        Object.setPrototypeOf(_this, EmptyError.prototype);
        return _this;
    }
    return EmptyError;
}(Error));
exports.EmptyError = EmptyError;
//# sourceMappingURL=EmptyError.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/Immediate.js":
/*!******************************************************!*\
  !*** ./node_modules/rxjs/internal/util/Immediate.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var nextHandle = 1;
var tasksByHandle = {};
function runIfPresent(handle) {
    var cb = tasksByHandle[handle];
    if (cb) {
        cb();
    }
}
exports.Immediate = {
    setImmediate: function (cb) {
        var handle = nextHandle++;
        tasksByHandle[handle] = cb;
        Promise.resolve().then(function () { return runIfPresent(handle); });
        return handle;
    },
    clearImmediate: function (handle) {
        delete tasksByHandle[handle];
    },
};
//# sourceMappingURL=Immediate.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/ObjectUnsubscribedError.js":
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/internal/util/ObjectUnsubscribedError.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ObjectUnsubscribedError = (function (_super) {
    __extends(ObjectUnsubscribedError, _super);
    function ObjectUnsubscribedError() {
        var _this = _super.call(this, 'object unsubscribed') || this;
        _this.name = 'ObjectUnsubscribedError';
        Object.setPrototypeOf(_this, ObjectUnsubscribedError.prototype);
        return _this;
    }
    return ObjectUnsubscribedError;
}(Error));
exports.ObjectUnsubscribedError = ObjectUnsubscribedError;
//# sourceMappingURL=ObjectUnsubscribedError.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/TimeoutError.js":
/*!*********************************************************!*\
  !*** ./node_modules/rxjs/internal/util/TimeoutError.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var TimeoutError = (function (_super) {
    __extends(TimeoutError, _super);
    function TimeoutError() {
        var _this = _super.call(this, 'Timeout has occurred') || this;
        _this.name = 'TimeoutError';
        Object.setPrototypeOf(_this, TimeoutError.prototype);
        return _this;
    }
    return TimeoutError;
}(Error));
exports.TimeoutError = TimeoutError;
//# sourceMappingURL=TimeoutError.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/identity.js":
/*!*****************************************************!*\
  !*** ./node_modules/rxjs/internal/util/identity.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function identity(x) {
    return x;
}
exports.identity = identity;
//# sourceMappingURL=identity.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/isArrayLike.js":
/*!********************************************************!*\
  !*** ./node_modules/rxjs/internal/util/isArrayLike.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.isArrayLike = (function (x) { return x && typeof x.length === 'number' && typeof x !== 'function'; });
//# sourceMappingURL=isArrayLike.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/isInteropObservable.js":
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/internal/util/isInteropObservable.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = __webpack_require__(/*! ../symbol/observable */ "./node_modules/rxjs/internal/symbol/observable.js");
function isInteropObservable(input) {
    return input && typeof input[observable_1.observable] === 'function';
}
exports.isInteropObservable = isInteropObservable;
//# sourceMappingURL=isInteropObservable.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/isIterable.js":
/*!*******************************************************!*\
  !*** ./node_modules/rxjs/internal/util/isIterable.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var iterator_1 = __webpack_require__(/*! ../symbol/iterator */ "./node_modules/rxjs/internal/symbol/iterator.js");
function isIterable(input) {
    return input && typeof input[iterator_1.iterator] === 'function';
}
exports.isIterable = isIterable;
//# sourceMappingURL=isIterable.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/isNumeric.js":
/*!******************************************************!*\
  !*** ./node_modules/rxjs/internal/util/isNumeric.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var isArray_1 = __webpack_require__(/*! ./isArray */ "./node_modules/rxjs/internal/util/isArray.js");
function isNumeric(val) {
    return !isArray_1.isArray(val) && (val - parseFloat(val) + 1) >= 0;
}
exports.isNumeric = isNumeric;
//# sourceMappingURL=isNumeric.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/isObservable.js":
/*!*********************************************************!*\
  !*** ./node_modules/rxjs/internal/util/isObservable.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/internal/Observable.js");
function isObservable(obj) {
    return !!obj && (obj instanceof Observable_1.Observable || (typeof obj.lift === 'function' && typeof obj.subscribe === 'function'));
}
exports.isObservable = isObservable;
//# sourceMappingURL=isObservable.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/isPromise.js":
/*!******************************************************!*\
  !*** ./node_modules/rxjs/internal/util/isPromise.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function isPromise(value) {
    return value && typeof value.subscribe !== 'function' && typeof value.then === 'function';
}
exports.isPromise = isPromise;
//# sourceMappingURL=isPromise.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/subscribeTo.js":
/*!********************************************************!*\
  !*** ./node_modules/rxjs/internal/util/subscribeTo.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/internal/Observable.js");
var subscribeToArray_1 = __webpack_require__(/*! ./subscribeToArray */ "./node_modules/rxjs/internal/util/subscribeToArray.js");
var subscribeToPromise_1 = __webpack_require__(/*! ./subscribeToPromise */ "./node_modules/rxjs/internal/util/subscribeToPromise.js");
var subscribeToIterable_1 = __webpack_require__(/*! ./subscribeToIterable */ "./node_modules/rxjs/internal/util/subscribeToIterable.js");
var subscribeToObservable_1 = __webpack_require__(/*! ./subscribeToObservable */ "./node_modules/rxjs/internal/util/subscribeToObservable.js");
var isArrayLike_1 = __webpack_require__(/*! ./isArrayLike */ "./node_modules/rxjs/internal/util/isArrayLike.js");
var isPromise_1 = __webpack_require__(/*! ./isPromise */ "./node_modules/rxjs/internal/util/isPromise.js");
var isObject_1 = __webpack_require__(/*! ./isObject */ "./node_modules/rxjs/internal/util/isObject.js");
var iterator_1 = __webpack_require__(/*! ../symbol/iterator */ "./node_modules/rxjs/internal/symbol/iterator.js");
var observable_1 = __webpack_require__(/*! ../symbol/observable */ "./node_modules/rxjs/internal/symbol/observable.js");
exports.subscribeTo = function (result) {
    if (result instanceof Observable_1.Observable) {
        return function (subscriber) {
            if (result._isScalar) {
                subscriber.next(result.value);
                subscriber.complete();
                return undefined;
            }
            else {
                return result.subscribe(subscriber);
            }
        };
    }
    else if (result && typeof result[observable_1.observable] === 'function') {
        return subscribeToObservable_1.subscribeToObservable(result);
    }
    else if (isArrayLike_1.isArrayLike(result)) {
        return subscribeToArray_1.subscribeToArray(result);
    }
    else if (isPromise_1.isPromise(result)) {
        return subscribeToPromise_1.subscribeToPromise(result);
    }
    else if (result && typeof result[iterator_1.iterator] === 'function') {
        return subscribeToIterable_1.subscribeToIterable(result);
    }
    else {
        var value = isObject_1.isObject(result) ? 'an invalid object' : "'" + result + "'";
        var msg = "You provided " + value + " where a stream was expected."
            + ' You can provide an Observable, Promise, Array, or Iterable.';
        throw new TypeError(msg);
    }
};
//# sourceMappingURL=subscribeTo.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/subscribeToIterable.js":
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/internal/util/subscribeToIterable.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var iterator_1 = __webpack_require__(/*! ../symbol/iterator */ "./node_modules/rxjs/internal/symbol/iterator.js");
exports.subscribeToIterable = function (iterable) { return function (subscriber) {
    var iterator = iterable[iterator_1.iterator]();
    do {
        var item = iterator.next();
        if (item.done) {
            subscriber.complete();
            break;
        }
        subscriber.next(item.value);
        if (subscriber.closed) {
            break;
        }
    } while (true);
    if (typeof iterator.return === 'function') {
        subscriber.add(function () {
            if (iterator.return) {
                iterator.return();
            }
        });
    }
    return subscriber;
}; };
//# sourceMappingURL=subscribeToIterable.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/subscribeToObservable.js":
/*!******************************************************************!*\
  !*** ./node_modules/rxjs/internal/util/subscribeToObservable.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = __webpack_require__(/*! ../symbol/observable */ "./node_modules/rxjs/internal/symbol/observable.js");
exports.subscribeToObservable = function (obj) { return function (subscriber) {
    var obs = obj[observable_1.observable]();
    if (typeof obs.subscribe !== 'function') {
        throw new TypeError('Provided object does not correctly implement Symbol.observable');
    }
    else {
        return obs.subscribe(subscriber);
    }
}; };
//# sourceMappingURL=subscribeToObservable.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/subscribeToPromise.js":
/*!***************************************************************!*\
  !*** ./node_modules/rxjs/internal/util/subscribeToPromise.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var hostReportError_1 = __webpack_require__(/*! ./hostReportError */ "./node_modules/rxjs/internal/util/hostReportError.js");
exports.subscribeToPromise = function (promise) { return function (subscriber) {
    promise.then(function (value) {
        if (!subscriber.closed) {
            subscriber.next(value);
            subscriber.complete();
        }
    }, function (err) { return subscriber.error(err); })
        .then(null, hostReportError_1.hostReportError);
    return subscriber;
}; };
//# sourceMappingURL=subscribeToPromise.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/subscribeToResult.js":
/*!**************************************************************!*\
  !*** ./node_modules/rxjs/internal/util/subscribeToResult.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var InnerSubscriber_1 = __webpack_require__(/*! ../InnerSubscriber */ "./node_modules/rxjs/internal/InnerSubscriber.js");
var subscribeTo_1 = __webpack_require__(/*! ./subscribeTo */ "./node_modules/rxjs/internal/util/subscribeTo.js");
function subscribeToResult(outerSubscriber, result, outerValue, outerIndex) {
    var destination = new InnerSubscriber_1.InnerSubscriber(outerSubscriber, outerValue, outerIndex);
    return subscribeTo_1.subscribeTo(result)(destination);
}
exports.subscribeToResult = subscribeToResult;
//# sourceMappingURL=subscribeToResult.js.map

/***/ }),

/***/ "./src/app/ckeditor.js":
/*!*****************************!*\
  !*** ./src/app/ckeditor.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * @license Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */
!function(t){t.en=Object.assign(t.en||{},{a:"Cannot upload file:",b:"Bold",c:"Block quote",d:"Italic",e:"Insert image",f:"Enter image caption",g:"Upload failed",h:"Full size image",i:"Side image",j:"Left aligned image",k:"Centered image",l:"Right aligned image",m:"Numbered List",n:"Bulleted List",o:"media widget",p:"Insert media",q:"The URL must not be empty.",r:"This media URL is not supported.",s:"Insert table",t:"Header column",u:"Insert column before",v:"Insert column after",w:"Delete column",x:"Column",y:"Header row",z:"Insert row below",aa:"Insert row above",ab:"Delete row",ac:"Row",ad:"Merge cell up",ae:"Merge cell right",af:"Merge cell down",ag:"Merge cell left",ah:"Split cell vertically",ai:"Split cell horizontally",aj:"Merge cells",ak:"image widget",al:"Link",am:"Choose heading",an:"Heading",ao:"Upload in progress",ap:"Change image text alternative",aq:"Unlink",ar:"Edit link",as:"Open link in new tab",at:"This link has no URL",au:"Rich Text Editor, %0",av:"Rich Text Editor",aw:"Save",ax:"Cancel",ay:"Text alternative",az:"Undo",ba:"Redo",bb:"Paragraph",bc:"Heading 1",bd:"Heading 2",be:"Heading 3",bf:"Link URL",bg:"Media URL"})}(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={})),function(t,e){ true?module.exports=e():undefined}(window,function(){return function(t){var e={};function n(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(o,i,function(e){return t[e]}.bind(null,i));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=114)}([function(t,e,n){"use strict";n.d(e,"b",function(){return i}),n.d(e,"a",function(){return r});const o="https://ckeditor.com/docs/ckeditor5/latest/framework/guides/support/error-codes.html";class i extends Error{constructor(t,e){t=r(t),e&&(t+=" "+JSON.stringify(e)),super(t),this.name="CKEditorError",this.data=e}static isCKEditorError(t){return t instanceof i}}function r(t){const e=t.match(/^([^:]+):/);return e?t+` Read more: ${o}#error-${e[1]}\n`:t}},function(t,e,n){"use strict";var o=n(0);const i={error(t,e){console.error(Object(o.a)(t),e)},warn(t,e){console.warn(Object(o.a)(t),e)}};e.a=i},function(t,e,n){var o={},i=function(t){var e;return function(){return void 0===e&&(e=t.apply(this,arguments)),e}}(function(){return window&&document&&document.all&&!window.atob}),r=function(t){var e={};return function(t,n){if("function"==typeof t)return t();if(void 0===e[t]){var o=function(t,e){return e?e.querySelector(t):document.querySelector(t)}.call(this,t,n);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(t){o=null}e[t]=o}return e[t]}}(),s=null,a=0,c=[],l=n(44);function d(t,e){for(var n=0;n<t.length;n++){var i=t[n],r=o[i.id];if(r){r.refs++;for(var s=0;s<r.parts.length;s++)r.parts[s](i.parts[s]);for(;s<i.parts.length;s++)r.parts.push(g(i.parts[s],e))}else{var a=[];for(s=0;s<i.parts.length;s++)a.push(g(i.parts[s],e));o[i.id]={id:i.id,refs:1,parts:a}}}}function u(t,e){for(var n=[],o={},i=0;i<t.length;i++){var r=t[i],s=e.base?r[0]+e.base:r[0],a={css:r[1],media:r[2],sourceMap:r[3]};o[s]?o[s].parts.push(a):n.push(o[s]={id:s,parts:[a]})}return n}function h(t,e){var n=r(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=c[c.length-1];if("top"===t.insertAt)o?o.nextSibling?n.insertBefore(e,o.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),c.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var i=r(t.insertAt.before,n);n.insertBefore(e,i)}}function f(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=c.indexOf(t);e>=0&&c.splice(e,1)}function m(t){var e=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var o=function(){0;return n.nc}();o&&(t.attrs.nonce=o)}return p(e,t.attrs),h(t,e),e}function p(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function g(t,e){var n,o,i,r;if(e.transform&&t.css){if(!(r="function"==typeof e.transform?e.transform(t.css):e.transform.default(t.css)))return function(){};t.css=r}if(e.singleton){var c=a++;n=s||(s=m(e)),o=w.bind(null,n,c,!1),i=w.bind(null,n,c,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",p(e,t.attrs),h(t,e),e}(e),o=function(t,e,n){var o=n.css,i=n.sourceMap,r=void 0===e.convertToAbsoluteUrls&&i;(e.convertToAbsoluteUrls||r)&&(o=l(o));i&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var s=new Blob([o],{type:"text/css"}),a=t.href;t.href=URL.createObjectURL(s),a&&URL.revokeObjectURL(a)}.bind(null,n,e),i=function(){f(n),n.href&&URL.revokeObjectURL(n.href)}):(n=m(e),o=function(t,e){var n=e.css,o=e.media;o&&t.setAttribute("media",o);if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,n),i=function(){f(n)});return o(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;o(t=e)}else i()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=i()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=u(t,e);return d(n,e),function(t){for(var i=[],r=0;r<n.length;r++){var s=n[r];(a=o[s.id]).refs--,i.push(a)}t&&d(u(t,e),e);for(r=0;r<i.length;r++){var a;if(0===(a=i[r]).refs){for(var c=0;c<a.parts.length;c++)a.parts[c]();delete o[a.id]}}}};var b=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}();function w(t,e,n,o){var i=n?"":o.css;if(t.styleSheet)t.styleSheet.cssText=b(e,i);else{var r=document.createTextNode(i),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(r,s[e]):t.appendChild(r)}}},,function(t,e,n){"use strict";var o=n(9),i="object"==typeof self&&self&&self.Object===Object&&self,r=o.a||i||Function("return this")();e.a=r},function(t,e,n){"use strict";(function(t){var o=n(9),i="object"==typeof exports&&exports&&!exports.nodeType&&exports,r=i&&"object"==typeof t&&t&&!t.nodeType&&t,s=r&&r.exports===i&&o.a.process,a=function(){try{var t=r&&r.require&&r.require("util").types;return t||s&&s.binding&&s.binding("util")}catch(t){}}();e.a=a}).call(this,n(11)(t))},function(t,e,n){"use strict";(function(t){var o=n(4),i=n(18),r="object"==typeof exports&&exports&&!exports.nodeType&&exports,s=r&&"object"==typeof t&&t&&!t.nodeType&&t,a=s&&s.exports===r?o.a.Buffer:void 0,c=(a?a.isBuffer:void 0)||i.a;e.a=c}).call(this,n(11)(t))},function(t,e){t.exports='<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6.972 16.615a.997.997 0 0 1-.744-.292l-4.596-4.596a1 1 0 1 1 1.414-1.414l3.926 3.926 9.937-9.937a1 1 0 0 1 1.414 1.415L7.717 16.323a.997.997 0 0 1-.745.292z" fill="#000" fill-rule="evenodd"/></svg>'},function(t,e){t.exports='<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11.591 10.177l4.243 4.242a1 1 0 0 1-1.415 1.415l-4.242-4.243-4.243 4.243a1 1 0 0 1-1.414-1.415l4.243-4.242L4.52 5.934A1 1 0 0 1 5.934 4.52l4.243 4.243 4.242-4.243a1 1 0 1 1 1.415 1.414l-4.243 4.243z" fill="#000" fill-rule="evenodd"/></svg>'},function(t,e,n){"use strict";(function(t){var n="object"==typeof t&&t&&t.Object===Object&&t;e.a=n}).call(this,n(16))},function(t,e){t.exports='<svg width="20" height="20" xmlns="http://www.w3.org/2000/svg"><g fill="#000" fill-rule="nonzero"><path d="M2 4.5V3h16v1.5zM2 7.5V6h5.674v1.5zM2 10.5V9h5.674v1.5zM2 13.5V12h5.674v1.5zM10.5 7.5V12h6V7.5h-6zM9.682 6h7.636c.377 0 .682.407.682.91v5.68c0 .503-.305.91-.682.91H9.682c-.377 0-.682-.407-.682-.91V6.91c0-.503.305-.91.682-.91zM2 16.5V15h16v1.5z"/></g></svg>\n'},function(t,e){t.exports=function(t){if(!t.webpackPolyfill){var e=Object.create(t);e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),Object.defineProperty(e,"exports",{enumerable:!0}),e.webpackPolyfill=1}return e}},function(t){t.exports={a:"11.1.1"}},function(t,e){t.exports='<svg width="20" height="20" xmlns="http://www.w3.org/2000/svg"><g fill="#000" fill-rule="nonzero"><path d="M2 4.5V3h16v1.5zM4.5 7.5V12h11V7.5h-11zM4.061 6H15.94c.586 0 1.061.407 1.061.91v5.68c0 .503-.475.91-1.061.91H4.06C3.475 13.5 3 13.093 3 12.59V6.91C3 6.406 3.475 6 4.061 6zM2 16.5V15h16v1.5z"/></g></svg>\n'},function(t,e){t.exports='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M18 4.5V3H2v1.5h16zm0 3V6h-5.674v1.5H18zm0 3V9h-5.674v1.5H18zm0 3V12h-5.674v1.5H18zm-8.5-6V12h-6V7.5h6zm.818-1.5H2.682C2.305 6 2 6.407 2 6.91v5.68c0 .503.305.91.682.91h7.636c.377 0 .682-.407.682-.91V6.91c0-.503-.305-.91-.682-.91zM18 16.5V15H2v1.5h16z" fill-rule="nonzero"/></svg>'},function(t,e){t.exports='<svg width="20" height="20" xmlns="http://www.w3.org/2000/svg"><g fill="#000" fill-rule="nonzero"><path d="M2 4.5V3h16v1.5zM6.5 7.5V12h7V7.5h-7zM5.758 6h8.484c.419 0 .758.407.758.91v5.681c0 .502-.34.909-.758.909H5.758c-.419 0-.758-.407-.758-.91V6.91c0-.503.34-.91.758-.91zM2 16.5V15h16v1.5z"/></g></svg>\n'},function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){var o=n(91);"string"==typeof o&&(o=[[t.i,o,""]]);var i={singleton:!0,hmr:!0,transform:void 0,insertInto:void 0};n(2)(o,i);o.locals&&(t.exports=o.locals)},function(t,e,n){"use strict";e.a=function(){return!1}},function(t,e,n){"use strict";(function(t){var o=n(4),i="object"==typeof exports&&exports&&!exports.nodeType&&exports,r=i&&"object"==typeof t&&t&&!t.nodeType&&t,s=r&&r.exports===i?o.a.Buffer:void 0,a=s?s.allocUnsafe:void 0;e.a=function(t,e){if(e)return t.slice();var n=t.length,o=a?a(n):new t.constructor(n);return t.copy(o),o}}).call(this,n(11)(t))},function(t,e){t.exports='<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5.042 9.367l2.189 1.837a.75.75 0 0 1-.965 1.149l-3.788-3.18a.747.747 0 0 1-.21-.284.75.75 0 0 1 .17-.945L6.23 4.762a.75.75 0 1 1 .964 1.15L4.863 7.866h8.917A.75.75 0 0 1 14 7.9a4 4 0 1 1-1.477 7.718l.344-1.489a2.5 2.5 0 1 0 1.094-4.73l.008-.032H5.042z" fill="#000" fill-rule="nonzero"/></svg>'},function(t,e){t.exports='<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M14.958 9.367l-2.189 1.837a.75.75 0 0 0 .965 1.149l3.788-3.18a.747.747 0 0 0 .21-.284.75.75 0 0 0-.17-.945L13.77 4.762a.75.75 0 1 0-.964 1.15l2.331 1.955H6.22A.75.75 0 0 0 6 7.9a4 4 0 1 0 1.477 7.718l-.344-1.489A2.5 2.5 0 1 1 6.039 9.4l-.008-.032h8.927z" fill="#000" fill-rule="nonzero"/></svg>'},function(t,e){t.exports='<svg width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M10.187 17H5.773c-.637 0-1.092-.138-1.364-.415-.273-.277-.409-.718-.409-1.323V4.738c0-.617.14-1.062.419-1.332.279-.27.73-.406 1.354-.406h4.68c.69 0 1.288.041 1.793.124.506.083.96.242 1.36.478.341.197.644.447.906.75a3.262 3.262 0 0 1 .808 2.162c0 1.401-.722 2.426-2.167 3.075C15.05 10.175 16 11.315 16 13.01a3.756 3.756 0 0 1-2.296 3.504 6.1 6.1 0 0 1-1.517.377c-.571.073-1.238.11-2 .11zm-.217-6.217H7v4.087h3.069c1.977 0 2.965-.69 2.965-2.072 0-.707-.256-1.22-.768-1.537-.512-.319-1.277-.478-2.296-.478zM7 5.13v3.619h2.606c.729 0 1.292-.067 1.69-.2a1.6 1.6 0 0 0 .91-.765c.165-.267.247-.566.247-.897 0-.707-.26-1.176-.778-1.409-.519-.232-1.31-.348-2.375-.348H7z" fill="#000" fill-rule="evenodd"/></svg>\n'},function(t,e){t.exports='<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.586 14.633l.021.004c-.036.335.095.655.393.962.082.083.173.15.274.201h1.474a.6.6 0 1 1 0 1.2H5.304a.6.6 0 0 1 0-1.2h1.15c.474-.07.809-.182 1.005-.334.157-.122.291-.32.404-.597l2.416-9.55a1.053 1.053 0 0 0-.281-.823 1.12 1.12 0 0 0-.442-.296H8.15a.6.6 0 0 1 0-1.2h6.443a.6.6 0 1 1 0 1.2h-1.195c-.376.056-.65.155-.823.296-.215.175-.423.439-.623.79l-2.366 9.347z" fill="#333" fill-rule="evenodd"/></svg>'},function(t,e){t.exports='<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><g fill="#000" fill-rule="evenodd"><path d="M3 10.423a6.5 6.5 0 0 1 6.056-6.408l.038.67C6.448 5.423 5.354 7.663 5.22 10H9c.552 0 .5.432.5.986v4.511c0 .554-.448.503-1 .503h-5c-.552 0-.5-.449-.5-1.003v-4.011-.563zM11 10.423a6.5 6.5 0 0 1 6.056-6.408l.038.67c-2.646.739-3.74 2.979-3.873 5.315H17c.552 0 .5.432.5.986v4.511c0 .554-.448.503-1 .503h-5c-.552 0-.5-.449-.5-1.003v-4.011-.563z"/></g></svg>\n'},function(t,e){t.exports='<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><g><path d="M4 0v1H1v3H0V.5A.5.5 0 0 1 .5 0H4zm8 0h3.5a.5.5 0 0 1 .5.5V4h-1V1h-3V0zM4 16H.5a.5.5 0 0 1-.5-.5V12h1v3h3v1zm8 0v-1h3v-3h1v3.5a.5.5 0 0 1-.5.5H12z"/><path fill-opacity=".256" d="M1 1h14v14H1z"/><g class="ck-icon__selected-indicator"><path d="M7 0h2v1H7V0zM0 7h1v2H0V7zm15 0h1v2h-1V7zm-8 8h2v1H7v-1z"/><path fill-opacity=".254" d="M1 1h14v14H1z"/></g></g></svg>\n'},function(t,e){t.exports='<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5.085 6.22L2.943 4.078a.75.75 0 1 1 1.06-1.06l2.592 2.59A11.094 11.094 0 0 1 10 5.068c4.738 0 8.578 3.101 8.578 5.083 0 1.197-1.401 2.803-3.555 3.887l1.714 1.713a.75.75 0 0 1-.09 1.138.488.488 0 0 1-.15.084.75.75 0 0 1-.821-.16L6.17 7.304c-.258.11-.51.233-.757.365l6.239 6.24-.006.005.78.78c-.388.094-.78.166-1.174.215l-1.11-1.11h.011L4.55 8.197a7.2 7.2 0 0 0-.665.514l-.112.098 4.897 4.897-.005.006 1.276 1.276a10.164 10.164 0 0 1-1.477-.117l-.479-.479-.009.009-4.863-4.863-.022.031a2.563 2.563 0 0 0-.124.2c-.043.077-.08.158-.108.241a.534.534 0 0 0-.028.133.29.29 0 0 0 .008.072.927.927 0 0 0 .082.226c.067.133.145.26.234.379l3.242 3.365.025.01.59.623c-3.265-.918-5.59-3.155-5.59-4.668 0-1.194 1.448-2.838 3.663-3.93zm7.07.531a4.632 4.632 0 0 1 1.108 5.992l.345.344.046-.018a9.313 9.313 0 0 0 2-1.112c.256-.187.5-.392.727-.613.137-.134.27-.277.392-.431.072-.091.141-.185.203-.286.057-.093.107-.19.148-.292a.72.72 0 0 0 .036-.12.29.29 0 0 0 .008-.072.492.492 0 0 0-.028-.133.999.999 0 0 0-.036-.096 2.165 2.165 0 0 0-.071-.145 2.917 2.917 0 0 0-.125-.2 3.592 3.592 0 0 0-.263-.335 5.444 5.444 0 0 0-.53-.523 7.955 7.955 0 0 0-1.054-.768 9.766 9.766 0 0 0-1.879-.891c-.337-.118-.68-.219-1.027-.301zm-2.85.21l-.069.002a.508.508 0 0 0-.254.097.496.496 0 0 0-.104.679.498.498 0 0 0 .326.199l.045.005c.091.003.181.003.272.012.9.093 1.676.675 2.017 1.513.024.061.043.125.069.185a.494.494 0 0 0 .45.287h.008a.496.496 0 0 0 .35-.158.482.482 0 0 0 .13-.335.638.638 0 0 0-.048-.219 3.379 3.379 0 0 0-.36-.723 3.438 3.438 0 0 0-2.791-1.543l-.028-.001h-.013z" fill="#000" fill-rule="evenodd"/></svg>'},function(t,e){t.exports='<svg width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M6.91 10.54c.26-.23.64-.21.88.03l3.36 3.14 2.23-2.06a.64.64 0 0 1 .87 0l2.52 2.97V4.5H3.2v10.12l3.71-4.08zm10.27-7.51c.6 0 1.09.47 1.09 1.05v11.84c0 .59-.49 1.06-1.09 1.06H2.79c-.6 0-1.09-.47-1.09-1.06V4.08c0-.58.49-1.05 1.1-1.05h14.38zm-5.22 5.56a1.96 1.96 0 1 1 3.4-1.96 1.96 1.96 0 0 1-3.4 1.96z" fill="#000" fill-rule="nonzero"/></svg>\n'},function(t,e){t.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 250"><g fill="#FAFAFA" fill-rule="evenodd"><rect width="700" height="250" rx="4"/></g></svg>\n'},function(t,e){t.exports='<svg width="10" height="10" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg"><path d="M.941 4.523a.75.75 0 1 1 1.06-1.06l3.006 3.005 3.005-3.005a.75.75 0 1 1 1.06 1.06l-3.549 3.55a.75.75 0 0 1-1.168-.136L.941 4.523z" fill="#000" fill-rule="evenodd"/></svg>'},function(t,e){t.exports='<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><g fill="#000" fill-rule="evenodd"><path d="M11.077 15l.991-1.416a.75.75 0 1 1 1.229.86l-1.148 1.64a.748.748 0 0 1-.217.206 5.251 5.251 0 0 1-8.503-5.955c.02-.095.06-.189.12-.274l1.147-1.639a.75.75 0 1 1 1.228.86L4.933 10.7l.006.003a3.75 3.75 0 0 0 6.132 4.294l.006.004zm5.494-5.335a.748.748 0 0 1-.12.274l-1.147 1.639a.75.75 0 1 1-1.228-.86l.86-1.23a3.75 3.75 0 0 0-6.144-4.301l-.86 1.229a.75.75 0 0 1-1.229-.86l1.148-1.64a.748.748 0 0 1 .217-.206 5.251 5.251 0 0 1 8.503 5.955zm-4.563-2.532a.75.75 0 0 1 .184 1.045l-3.155 4.505a.75.75 0 1 1-1.229-.86l3.155-4.506a.75.75 0 0 1 1.045-.184zM16.927 17.695l-1.414 1.414a.75.75 0 1 1-1.06-1.06l1.414-1.415-1.415-1.414a.75.75 0 0 1 1.061-1.06l1.414 1.414 1.414-1.415a.75.75 0 0 1 1.061 1.061l-1.414 1.414 1.414 1.415a.75.75 0 0 1-1.06 1.06l-1.415-1.414z"/></g></svg>'},function(t,e){t.exports='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7.3 17.37l-.061.088a1.518 1.518 0 0 1-.934.535l-4.178.663-.806-4.153a1.495 1.495 0 0 1 .187-1.058l.056-.086L8.77 2.639c.958-1.351 2.803-1.076 4.296-.03 1.497 1.047 2.387 2.693 1.433 4.055L7.3 17.37zM9.14 4.728l-5.545 8.346 3.277 2.294 5.544-8.346L9.14 4.728zM6.07 16.512l-3.276-2.295.53 2.73 2.746-.435zM9.994 3.506L13.271 5.8c.316-.452-.16-1.333-1.065-1.966-.905-.634-1.895-.78-2.212-.328zM8 18.5L9.375 17H19v1.5H8z" fill="#000" fill-rule="nonzero"/></svg>\n'},function(t,e){t.exports='<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11.077 15l.991-1.416a.75.75 0 1 1 1.229.86l-1.148 1.64a.748.748 0 0 1-.217.206 5.251 5.251 0 0 1-8.503-5.955c.02-.095.06-.189.12-.274l1.147-1.639a.75.75 0 1 1 1.228.86L4.933 10.7l.006.003a3.75 3.75 0 0 0 6.132 4.294l.006.004zm5.494-5.335a.748.748 0 0 1-.12.274l-1.147 1.639a.75.75 0 1 1-1.228-.86l.86-1.23a3.75 3.75 0 0 0-6.144-4.301l-.86 1.229a.75.75 0 0 1-1.229-.86l1.148-1.64a.748.748 0 0 1 .217-.206 5.251 5.251 0 0 1 8.503 5.955zm-4.563-2.532a.75.75 0 0 1 .184 1.045l-3.155 4.505a.75.75 0 1 1-1.229-.86l3.155-4.506a.75.75 0 0 1 1.045-.184z" fill="#000" fill-rule="evenodd"/></svg>'},function(t,e){t.exports='<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7 5.75c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zM3.5 3v5H2V3.7H1v-1h2.5V3zM.343 17.857l2.59-3.257H2.92a.6.6 0 1 0-1.04 0H.302a2 2 0 1 1 3.995 0h-.001c-.048.405-.16.734-.333.988-.175.254-.59.692-1.244 1.312H4.3v1h-4l.043-.043zM7 14.75a.75.75 0 0 1 .75-.75h9.5a.75.75 0 1 1 0 1.5h-9.5a.75.75 0 0 1-.75-.75z" fill="#454545" fill-rule="evenodd"/></svg>'},function(t,e){t.exports='<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7 5.75c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zm-6 0C1 4.784 1.777 4 2.75 4c.966 0 1.75.777 1.75 1.75 0 .966-.777 1.75-1.75 1.75C1.784 7.5 1 6.723 1 5.75zm6 9c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zm-6 0c0-.966.777-1.75 1.75-1.75.966 0 1.75.777 1.75 1.75 0 .966-.777 1.75-1.75 1.75-.966 0-1.75-.777-1.75-1.75z" fill="#454545" fill-rule="evenodd"/></svg>'},function(t,e){t.exports='<svg width="64" height="42" xmlns="http://www.w3.org/2000/svg"><path d="M47.426 17V3.713L63.102 0v19.389h-.001l.001.272c0 1.595-2.032 3.43-4.538 4.098-2.506.668-4.538-.083-4.538-1.678 0-1.594 2.032-3.43 4.538-4.098.914-.244 2.032-.565 2.888-.603V4.516L49.076 7.447v9.556A1.014 1.014 0 0 0 49 17h-1.574zM29.5 17h-8.343a7.073 7.073 0 1 0-4.657 4.06v3.781H3.3a2.803 2.803 0 0 1-2.8-2.804V8.63a2.803 2.803 0 0 1 2.8-2.805h4.082L8.58 2.768A1.994 1.994 0 0 1 10.435 1.5h8.985c.773 0 1.477.448 1.805 1.149l1.488 3.177H26.7c1.546 0 2.8 1.256 2.8 2.805V17zm-11.637 0H17.5a1 1 0 0 0-1 1v.05A4.244 4.244 0 1 1 17.863 17zm29.684 2c.97 0 .953-.048.953.889v20.743c0 .953.016.905-.953.905H19.453c-.97 0-.953.048-.953-.905V19.89c0-.937-.016-.889.97-.889h28.077zm-4.701 19.338V22.183H24.154v16.155h18.692zM20.6 21.375v1.616h1.616v-1.616H20.6zm0 3.231v1.616h1.616v-1.616H20.6zm0 3.231v1.616h1.616v-1.616H20.6zm0 3.231v1.616h1.616v-1.616H20.6zm0 3.231v1.616h1.616v-1.616H20.6zm0 3.231v1.616h1.616V37.53H20.6zm24.233-16.155v1.616h1.615v-1.616h-1.615zm0 3.231v1.616h1.615v-1.616h-1.615zm0 3.231v1.616h1.615v-1.616h-1.615zm0 3.231v1.616h1.615v-1.616h-1.615zm0 3.231v1.616h1.615v-1.616h-1.615zm0 3.231v1.616h1.615V37.53h-1.615zM29.485 25.283a.4.4 0 0 1 .593-.35l9.05 4.977a.4.4 0 0 1 0 .701l-9.05 4.978a.4.4 0 0 1-.593-.35v-9.956z" fill="#000" fill-rule="nonzero"/></svg>'},function(t,e){t.exports='<svg width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M18.68 2.53c.6 0 .59-.03.59.55v12.84c0 .59.01.56-.59.56H1.29c-.6 0-.59.03-.59-.56V3.08c0-.58-.01-.55.6-.55h17.38zM15.77 14.5v-10H4.2v10h11.57zM2 4v1h1V4H2zm0 2v1h1V6H2zm0 2v1h1V8H2zm0 2v1h1v-1H2zm0 2v1h1v-1H2zm0 2v1h1v-1H2zM17 4v1h1V4h-1zm0 2v1h1V6h-1zm0 2v1h1V8h-1zm0 2v1h1v-1h-1zm0 2v1h1v-1h-1zm0 2v1h1v-1h-1zM7.5 6.677a.4.4 0 0 1 .593-.351l5.133 2.824a.4.4 0 0 1 0 .7l-5.133 2.824a.4.4 0 0 1-.593-.35V6.676z" fill="#000" fill-rule="nonzero"/></svg>'},function(t,e){t.exports='<svg width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M3 6v3h4V6H3zm0 4v3h4v-3H3zm0 4v3h4v-3H3zm5 3h4v-3H8v3zm5 0h4v-3h-4v3zm4-4v-3h-4v3h4zm0-4V6h-4v3h4zm1.5 8a1.5 1.5 0 0 1-1.5 1.5H3A1.5 1.5 0 0 1 1.5 17V4c.222-.863 1.068-1.5 2-1.5h13c.932 0 1.778.637 2 1.5v13zM12 13v-3H8v3h4zm0-4V6H8v3h4z" fill="#333" fill-rule="evenodd"/></svg>'},function(t,e){t.exports='<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><g fill="#333" fill-rule="evenodd"><path d="M2.5 1h15A1.5 1.5 0 0 1 19 2.5v15a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 1 17.5v-15A1.5 1.5 0 0 1 2.5 1zM2 2v16h16V2H2z" opacity=".6"/><path d="M18 7v1H2V7h16zm0 5v1H2v-1h16z" fill-rule="nonzero" opacity=".6"/><path d="M14 1v18a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1zm-2 1H8v4h4V2zm0 6H8v4h4V8zm0 6H8v4h4v-4z"/></g></svg>'},function(t,e){t.exports='<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><g fill="#333" fill-rule="evenodd"><path d="M2.5 1h15A1.5 1.5 0 0 1 19 2.5v15a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 1 17.5v-15A1.5 1.5 0 0 1 2.5 1zM2 2v16h16V2H2z" opacity=".6"/><path d="M7 2h1v16H7V2zm5 0h1v16h-1V2z" fill-rule="nonzero" opacity=".6"/><path d="M1 6h18a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1zm1 2v4h4V8H2zm6 0v4h4V8H8zm6 0v4h4V8h-4z"/></g></svg>'},function(t,e){t.exports='<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><g fill="#333" fill-rule="evenodd"><path d="M2.5 1h15A1.5 1.5 0 0 1 19 2.5v15a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 1 17.5v-15A1.5 1.5 0 0 1 2.5 1zM2 2v16h16V2H2z" opacity=".6"/><path d="M7 2h1v16H7V2zm5 0h1v7h-1V2zm6 5v1H2V7h16zM8 12v1H2v-1h6z" fill-rule="nonzero" opacity=".6"/><path d="M7 7h12a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1zm1 2v9h10V9H8z"/></g></svg>'},function(t,e,n){"use strict";(function(t){var e=n(1),o=n(12);const i="object"==typeof window?window:t;i.CKEDITOR_VERSION?e.a.error("ckeditor-version-collision: The global CKEDITOR_VERSION constant has already been set.",{collidingVersion:i.CKEDITOR_VERSION,version:o.a}):i.CKEDITOR_VERSION=o.a}).call(this,n(16))},function(t,e,n){var o=n(43);"string"==typeof o&&(o=[[t.i,o,""]]);var i={singleton:!0,hmr:!0,transform:void 0,insertInto:void 0};n(2)(o,i);o.locals&&(t.exports=o.locals)},function(t,e){t.exports=".ck-hidden{display:none!important}.ck.ck-reset,.ck.ck-reset_all,.ck.ck-reset_all *{box-sizing:border-box;width:auto;height:auto;position:static}:root{--ck-z-default:1;--ck-z-modal:calc(var(--ck-z-default) + 999);--ck-color-base-foreground:#fafafa;--ck-color-base-background:#fff;--ck-color-base-border:#c4c4c4;--ck-color-base-action:#61b045;--ck-color-base-focus:#6cb5f9;--ck-color-base-text:#333;--ck-color-base-active:#198cf0;--ck-color-base-active-focus:#0e7fe1;--ck-color-base-error:#db3700;--ck-color-focus-border:#47a4f5;--ck-color-focus-shadow:rgba(119,186,248,0.5);--ck-color-focus-disabled-shadow:rgba(119,186,248,0.3);--ck-color-focus-error-shadow:rgba(255,64,31,0.3);--ck-color-text:var(--ck-color-base-text);--ck-color-shadow-drop:rgba(0,0,0,0.15);--ck-color-shadow-inner:rgba(0,0,0,0.1);--ck-color-button-default-background:transparent;--ck-color-button-default-hover-background:#e6e6e6;--ck-color-button-default-active-background:#d9d9d9;--ck-color-button-default-active-shadow:#bfbfbf;--ck-color-button-default-disabled-background:transparent;--ck-color-button-on-background:#dedede;--ck-color-button-on-hover-background:#c4c4c4;--ck-color-button-on-active-background:#bababa;--ck-color-button-on-active-shadow:#a1a1a1;--ck-color-button-on-disabled-background:#dedede;--ck-color-button-action-background:var(--ck-color-base-action);--ck-color-button-action-hover-background:#579e3d;--ck-color-button-action-active-background:#53973b;--ck-color-button-action-active-shadow:#498433;--ck-color-button-action-disabled-background:#7ec365;--ck-color-button-action-text:var(--ck-color-base-background);--ck-color-button-save:#008a00;--ck-color-button-cancel:#db3700;--ck-color-switch-button-off-background:#b0b0b0;--ck-color-switch-button-on-background:var(--ck-color-button-action-background);--ck-color-switch-button-inner-background:var(--ck-color-base-background);--ck-color-dropdown-panel-background:var(--ck-color-base-background);--ck-color-dropdown-panel-border:var(--ck-color-base-border);--ck-color-input-background:var(--ck-color-base-background);--ck-color-input-border:#c7c7c7;--ck-color-input-error-border:var(--ck-color-base-error);--ck-color-input-text:var(--ck-color-base-text);--ck-color-input-disabled-background:#f2f2f2;--ck-color-input-disabled-border:#c7c7c7;--ck-color-input-disabled-text:#5c5c5c;--ck-color-list-background:var(--ck-color-base-background);--ck-color-list-button-hover-background:var(--ck-color-base-foreground);--ck-color-list-button-on-background:var(--ck-color-base-active);--ck-color-list-button-on-background-focus:var(--ck-color-base-active-focus);--ck-color-list-button-on-text:var(--ck-color-base-background);--ck-color-panel-background:var(--ck-color-base-background);--ck-color-panel-border:var(--ck-color-base-border);--ck-color-toolbar-background:var(--ck-color-base-foreground);--ck-color-toolbar-border:var(--ck-color-base-border);--ck-color-tooltip-background:var(--ck-color-base-text);--ck-color-tooltip-text:var(--ck-color-base-background);--ck-color-engine-placeholder-text:#c2c2c2;--ck-color-upload-bar-background:#6cb5f9;--ck-color-upload-infinite-background:rgba(0,0,0,0.1);--ck-color-link-default:#0000f0;--ck-color-link-selected-background:#ebf8ff;--ck-disabled-opacity:.5;--ck-focus-outer-shadow-geometry:0 0 0 3px;--ck-focus-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-shadow);--ck-focus-disabled-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-disabled-shadow);--ck-focus-error-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-error-shadow);--ck-focus-ring:1px solid var(--ck-color-focus-border);--ck-font-size-base:13px;--ck-line-height-base:1.84615;--ck-font-face:Helvetica,Arial,Tahoma,Verdana,Sans-Serif;--ck-font-size-tiny:0.7em;--ck-font-size-small:0.75em;--ck-font-size-normal:1em;--ck-font-size-big:1.4em;--ck-font-size-large:1.8em;--ck-ui-component-min-height:2.3em}.ck.ck-reset,.ck.ck-reset_all,.ck.ck-reset_all *{margin:0;padding:0;border:0;background:transparent;text-decoration:none;vertical-align:middle;transition:none;word-wrap:break-word}.ck.ck-reset_all,.ck.ck-reset_all *{border-collapse:collapse;font:normal normal normal var(--ck-font-size-base)/var(--ck-line-height-base) var(--ck-font-face);color:var(--ck-color-text);text-align:left;white-space:nowrap;cursor:auto;float:none}.ck.ck-reset_all .ck-rtl *{text-align:right}.ck.ck-reset_all iframe{vertical-align:inherit}.ck.ck-reset_all textarea{white-space:pre-wrap}.ck.ck-reset_all input[type=password],.ck.ck-reset_all input[type=text],.ck.ck-reset_all textarea{cursor:text}.ck.ck-reset_all input[type=password][disabled],.ck.ck-reset_all input[type=text][disabled],.ck.ck-reset_all textarea[disabled]{cursor:default}.ck.ck-reset_all fieldset{padding:10px;border:2px groove #dfdee3}.ck.ck-reset_all button::-moz-focus-inner{padding:0;border:0}:root{--ck-border-radius:2px;--ck-inner-shadow:2px 2px 3px var(--ck-color-shadow-inner) inset;--ck-drop-shadow:0 1px 2px 1px var(--ck-color-shadow-drop);--ck-spacing-unit:0.6em;--ck-spacing-large:calc(var(--ck-spacing-unit) * 1.5);--ck-spacing-standard:var(--ck-spacing-unit);--ck-spacing-medium:calc(var(--ck-spacing-unit) * 0.8);--ck-spacing-small:calc(var(--ck-spacing-unit) * 0.5);--ck-spacing-tiny:calc(var(--ck-spacing-unit) * 0.3);--ck-spacing-extra-tiny:calc(var(--ck-spacing-unit) * 0.16)}"},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,o=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var i,r=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(r)?t:(i=0===r.indexOf("//")?r:0===r.indexOf("/")?n+r:o+r.replace(/^\.\//,""),"url("+JSON.stringify(i)+")")})}},function(t,e,n){var o=n(46);"string"==typeof o&&(o=[[t.i,o,""]]);var i={singleton:!0,hmr:!0,transform:void 0,insertInto:void 0};n(2)(o,i);o.locals&&(t.exports=o.locals)},function(t,e){t.exports=".ck.ck-editor__editable:not(.ck-editor__nested-editable){border-radius:0}.ck-rounded-corners .ck.ck-editor__editable:not(.ck-editor__nested-editable),.ck.ck-editor__editable:not(.ck-editor__nested-editable).ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-editor__editable:not(.ck-editor__nested-editable).ck-focused{outline:none;border:var(--ck-focus-ring);box-shadow:var(--ck-inner-shadow),0 0}.ck.ck-editor__editable_inline{overflow:auto;padding:0 var(--ck-spacing-standard);border:1px solid transparent}.ck.ck-editor__editable_inline>:first-child{margin-top:var(--ck-spacing-large)}.ck.ck-editor__editable_inline>:last-child{margin-bottom:var(--ck-spacing-large)}.ck.ck-balloon-panel.ck-toolbar-container[class*=arrow_n]:after{border-bottom-color:var(--ck-color-base-foreground)}.ck.ck-balloon-panel.ck-toolbar-container[class*=arrow_s]:after{border-top-color:var(--ck-color-base-foreground)}"},function(t,e,n){var o=n(48);"string"==typeof o&&(o=[[t.i,o,""]]);var i={singleton:!0,hmr:!0,transform:void 0,insertInto:void 0};n(2)(o,i);o.locals&&(t.exports=o.locals)},function(t,e){t.exports=".ck.ck-label{display:block}.ck.ck-voice-label{display:none}.ck.ck-label{font-weight:700}"},function(t,e,n){var o=n(50);"string"==typeof o&&(o=[[t.i,o,""]]);var i={singleton:!0,hmr:!0,transform:void 0,insertInto:void 0};n(2)(o,i);o.locals&&(t.exports=o.locals)},function(t,e){t.exports=".ck.ck-sticky-panel .ck-sticky-panel__content_sticky{z-index:var(--ck-z-modal);position:fixed;top:0}.ck.ck-sticky-panel .ck-sticky-panel__content_sticky_bottom-limit{top:auto;position:absolute}.ck.ck-sticky-panel .ck-sticky-panel__content_sticky{box-shadow:var(--ck-drop-shadow),0 0;border-width:0 1px 1px;border-top-left-radius:0;border-top-right-radius:0}"},function(t,e,n){var o=n(52);"string"==typeof o&&(o=[[t.i,o,""]]);var i={singleton:!0,hmr:!0,transform:void 0,insertInto:void 0};n(2)(o,i);o.locals&&(t.exports=o.locals)},function(t,e){t.exports=".ck.ck-toolbar{-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none;display:flex;flex-flow:row wrap;align-items:center}.ck.ck-toolbar.ck-toolbar_vertical{flex-direction:column}.ck.ck-toolbar.ck-toolbar_floating{flex-wrap:nowrap}.ck.ck-toolbar__separator{display:inline-block}.ck.ck-toolbar__newline{display:block;width:100%}.ck.ck-toolbar{border-radius:0}.ck-rounded-corners .ck.ck-toolbar,.ck.ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-toolbar{background:var(--ck-color-toolbar-background);padding:0 var(--ck-spacing-small);border:1px solid var(--ck-color-toolbar-border)}.ck.ck-toolbar>*{margin-right:var(--ck-spacing-small);margin-top:var(--ck-spacing-small);margin-bottom:var(--ck-spacing-small)}.ck.ck-toolbar.ck-toolbar_vertical{padding:0}.ck.ck-toolbar.ck-toolbar_vertical>*{width:100%;margin:0;border-radius:0;border:0}.ck.ck-toolbar>:last-child{margin-right:0}.ck-toolbar-container .ck.ck-toolbar{border:0}.ck.ck-toolbar__separator{align-self:stretch;width:1px;margin-top:0;margin-bottom:0;background:var(--ck-color-toolbar-border)}.ck.ck-toolbar__newline{margin:0}"},function(t,e,n){var o=n(54);"string"==typeof o&&(o=[[t.i,o,""]]);var i={singleton:!0,hmr:!0,transform:void 0,insertInto:void 0};n(2)(o,i);o.locals&&(t.exports=o.locals)},function(t,e){t.exports=".ck.ck-editor{position:relative}.ck.ck-editor .ck-editor__top .ck-sticky-panel .ck-toolbar{z-index:var(--ck-z-modal)}.ck.ck-editor__top .ck-sticky-panel .ck-toolbar{border-radius:0}.ck-rounded-corners .ck.ck-editor__top .ck-sticky-panel .ck-toolbar,.ck.ck-editor__top .ck-sticky-panel .ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius);border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-editor__top .ck-sticky-panel .ck-toolbar{border-bottom-width:0}.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar{border-bottom-width:1px;border-radius:0}.ck-rounded-corners .ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar,.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius);border-radius:0}.ck.ck-editor__main>.ck-editor__editable{background:var(--ck-color-base-background);border-radius:0}.ck-rounded-corners .ck.ck-editor__main>.ck-editor__editable,.ck.ck-editor__main>.ck-editor__editable.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0;border-top-right-radius:0}.ck.ck-editor__main>.ck-editor__editable:not(.ck-focused){border-color:var(--ck-color-base-border)}"},function(t,e,n){var o=n(56);"string"==typeof o&&(o=[[t.i,o,""]]);var i={singleton:!0,hmr:!0,transform:void 0,insertInto:void 0};n(2)(o,i);o.locals&&(t.exports=o.locals)},function(t,e){t.exports=".ck.ck-icon{vertical-align:middle}:root{--ck-icon-size:calc(var(--ck-line-height-base) * var(--ck-font-size-normal))}.ck.ck-icon{width:var(--ck-icon-size);height:var(--ck-icon-size);font-size:.8333350694em;will-change:transform}.ck.ck-icon,.ck.ck-icon *{color:inherit;cursor:inherit}.ck.ck-icon *{fill:currentColor}"},function(t,e,n){var o=n(58);"string"==typeof o&&(o=[[t.i,o,""]]);var i={singleton:!0,hmr:!0,transform:void 0,insertInto:void 0};n(2)(o,i);o.locals&&(t.exports=o.locals)},function(t,e){t.exports='.ck.ck-tooltip,.ck.ck-tooltip .ck-tooltip__text:after{position:absolute;pointer-events:none;-webkit-backface-visibility:hidden}.ck-tooltip{visibility:hidden;opacity:0;display:none;z-index:var(--ck-z-modal)}.ck-tooltip .ck-tooltip__text{display:inline-block}.ck-tooltip .ck-tooltip__text:after{content:"";width:0;height:0}:root{--ck-tooltip-arrow-size:5px}.ck.ck-tooltip{left:50%}.ck.ck-tooltip.ck-tooltip_s{bottom:calc(-1 * var(--ck-tooltip-arrow-size));transform:translateY(100%)}.ck.ck-tooltip.ck-tooltip_s .ck-tooltip__text:after{top:calc(-1 * var(--ck-tooltip-arrow-size));transform:translateX(-50%);border-left-color:transparent;border-bottom-color:var(--ck-color-tooltip-background);border-right-color:transparent;border-top-color:transparent;border-left-width:var(--ck-tooltip-arrow-size);border-bottom-width:var(--ck-tooltip-arrow-size);border-right-width:var(--ck-tooltip-arrow-size);border-top-width:0}.ck.ck-tooltip.ck-tooltip_n{top:calc(-1 * var(--ck-tooltip-arrow-size));transform:translateY(-100%)}.ck.ck-tooltip.ck-tooltip_n .ck-tooltip__text:after{bottom:calc(-1 * var(--ck-tooltip-arrow-size));transform:translateX(-50%);border-left-color:transparent;border-bottom-color:transparent;border-right-color:transparent;border-top-color:var(--ck-color-tooltip-background);border-left-width:var(--ck-tooltip-arrow-size);border-bottom-width:0;border-right-width:var(--ck-tooltip-arrow-size);border-top-width:var(--ck-tooltip-arrow-size)}.ck.ck-tooltip .ck-tooltip__text{border-radius:0}.ck-rounded-corners .ck.ck-tooltip .ck-tooltip__text,.ck.ck-tooltip .ck-tooltip__text.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-tooltip .ck-tooltip__text{font-size:.9em;line-height:1.5;color:var(--ck-color-tooltip-text);padding:var(--ck-spacing-small) var(--ck-spacing-medium);background:var(--ck-color-tooltip-background);position:relative;left:-50%}.ck.ck-tooltip .ck-tooltip__text:after{border-style:solid;left:50%}.ck.ck-tooltip,.ck.ck-tooltip .ck-tooltip__text:after{transition:opacity .2s ease-in-out .2s}'},function(t,e,n){var o=n(60);"string"==typeof o&&(o=[[t.i,o,""]]);var i={singleton:!0,hmr:!0,transform:void 0,insertInto:void 0};n(2)(o,i);o.locals&&(t.exports=o.locals)},function(t,e){t.exports=".ck.ck-button,a.ck.ck-button{-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ck.ck-button .ck-tooltip,a.ck.ck-button .ck-tooltip{display:block}@media (hover:none){.ck.ck-button .ck-tooltip,a.ck.ck-button .ck-tooltip{display:none}}.ck.ck-button,a.ck.ck-button{position:relative;display:inline-flex;align-items:center;justify-content:left}.ck.ck-button.ck-button_with-text .ck-button__label,a.ck.ck-button.ck-button_with-text .ck-button__label{display:inline-block}.ck.ck-button:not(.ck-button_with-text),a.ck.ck-button:not(.ck-button_with-text){justify-content:center}.ck.ck-button:hover .ck-tooltip,a.ck.ck-button:hover .ck-tooltip{visibility:visible;opacity:1}.ck.ck-button .ck-button__label,.ck.ck-button:focus:not(:hover) .ck-tooltip,a.ck.ck-button .ck-button__label,a.ck.ck-button:focus:not(:hover) .ck-tooltip{display:none}.ck.ck-button,a.ck.ck-button{background:var(--ck-color-button-default-background)}.ck.ck-button:not(.ck-disabled):hover,a.ck.ck-button:not(.ck-disabled):hover{background:var(--ck-color-button-default-hover-background)}.ck.ck-button:not(.ck-disabled):active,a.ck.ck-button:not(.ck-disabled):active{background:var(--ck-color-button-default-active-background);box-shadow:inset 0 2px 2px var(--ck-color-button-default-active-shadow)}.ck.ck-button.ck-disabled,a.ck.ck-button.ck-disabled{background:var(--ck-color-button-default-disabled-background)}.ck.ck-button,a.ck.ck-button{border-radius:0}.ck-rounded-corners .ck.ck-button,.ck-rounded-corners a.ck.ck-button,.ck.ck-button.ck-rounded-corners,a.ck.ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-button,a.ck.ck-button{white-space:nowrap;cursor:default;vertical-align:middle;padding:var(--ck-spacing-tiny);text-align:center;min-width:var(--ck-ui-component-min-height);min-height:var(--ck-ui-component-min-height);line-height:1;font-size:inherit;border:1px solid transparent;transition:box-shadow .2s ease-in-out;-webkit-appearance:none}.ck.ck-button:active,.ck.ck-button:focus,a.ck.ck-button:active,a.ck.ck-button:focus{outline:none;border:var(--ck-focus-ring);box-shadow:var(--ck-focus-outer-shadow),0 0;border-color:transparent}.ck.ck-button.ck-disabled:active,.ck.ck-button.ck-disabled:focus,a.ck.ck-button.ck-disabled:active,a.ck.ck-button.ck-disabled:focus{box-shadow:var(--ck-focus-disabled-outer-shadow),0 0}.ck.ck-button.ck-disabled .ck-button__icon,a.ck.ck-button.ck-disabled .ck-button__icon{opacity:var(--ck-disabled-opacity)}.ck.ck-button.ck-disabled .ck-button__label,a.ck.ck-button.ck-disabled .ck-button__label{opacity:var(--ck-disabled-opacity)}.ck.ck-button.ck-button_with-text,a.ck.ck-button.ck-button_with-text{padding:var(--ck-spacing-tiny) var(--ck-spacing-standard)}.ck.ck-button.ck-button_with-text .ck-button__icon,a.ck.ck-button.ck-button_with-text .ck-button__icon{margin-left:calc(-1 * var(--ck-spacing-small));margin-right:var(--ck-spacing-small)}.ck.ck-button.ck-on,a.ck.ck-button.ck-on{background:var(--ck-color-button-on-background)}.ck.ck-button.ck-on:not(.ck-disabled):hover,a.ck.ck-button.ck-on:not(.ck-disabled):hover{background:var(--ck-color-button-on-hover-background)}.ck.ck-button.ck-on:not(.ck-disabled):active,a.ck.ck-button.ck-on:not(.ck-disabled):active{background:var(--ck-color-button-on-active-background);box-shadow:inset 0 2px 2px var(--ck-color-button-on-active-shadow)}.ck.ck-button.ck-on.ck-disabled,a.ck.ck-button.ck-on.ck-disabled{background:var(--ck-color-button-on-disabled-background)}.ck.ck-button.ck-button-save,a.ck.ck-button.ck-button-save{color:var(--ck-color-button-save)}.ck.ck-button.ck-button-cancel,a.ck.ck-button.ck-button-cancel{color:var(--ck-color-button-cancel)}.ck.ck-button .ck-button__icon use,.ck.ck-button .ck-button__icon use *,a.ck.ck-button .ck-button__icon use,a.ck.ck-button .ck-button__icon use *{color:inherit}.ck.ck-button .ck-button__label,a.ck.ck-button .ck-button__label{font-size:inherit;font-weight:inherit;color:inherit;cursor:inherit;vertical-align:middle}.ck.ck-button-action,a.ck.ck-button-action{background:var(--ck-color-button-action-background)}.ck.ck-button-action:not(.ck-disabled):hover,a.ck.ck-button-action:not(.ck-disabled):hover{background:var(--ck-color-button-action-hover-background)}.ck.ck-button-action:not(.ck-disabled):active,a.ck.ck-button-action:not(.ck-disabled):active{background:var(--ck-color-button-action-active-background);box-shadow:inset 0 2px 2px var(--ck-color-button-action-active-shadow)}.ck.ck-button-action.ck-disabled,a.ck.ck-button-action.ck-disabled{background:var(--ck-color-button-action-disabled-background)}.ck.ck-button-action,a.ck.ck-button-action{color:var(--ck-color-button-action-text)}.ck.ck-button-bold,a.ck.ck-button-bold{font-weight:700}"},function(t,e,n){var o=n(62);"string"==typeof o&&(o=[[t.i,o,""]]);var i={singleton:!0,hmr:!0,transform:void 0,insertInto:void 0};n(2)(o,i);o.locals&&(t.exports=o.locals)},function(t,e){t.exports=".ck-content blockquote{overflow:hidden;padding-right:1.5em;padding-left:1.5em;margin-left:0;font-style:italic;border-left:5px solid #ccc}"},function(t,e,n){var o=n(64);"string"==typeof o&&(o=[[t.i,o,""]]);var i={singleton:!0,hmr:!0,transform:void 0,insertInto:void 0};n(2)(o,i);o.locals&&(t.exports=o.locals)},function(t,e){t.exports=".ck .ck-widget.ck-widget_selectable{position:relative}.ck .ck-widget.ck-widget_selectable .ck-widget__selection-handler{visibility:hidden;position:absolute}.ck .ck-widget.ck-widget_selectable .ck-widget__selection-handler .ck-icon{display:block}.ck .ck-widget.ck-widget_selectable.ck-widget_selected .ck-widget__selection-handler,.ck .ck-widget.ck-widget_selectable:hover .ck-widget__selection-handler{visibility:visible}:root{--ck-widget-outline-thickness:3px;--ck-widget-handler-icon-size:16px;--ck-widget-handler-animation-duration:200ms;--ck-widget-handler-animation-curve:ease;--ck-color-widget-blurred-border:#dedede;--ck-color-widget-hover-border:#ffc83d;--ck-color-widget-editable-focus-background:var(--ck-color-base-background);--ck-color-widget-drag-handler-icon-color:var(--ck-color-base-background)}.ck .ck-widget{margin:var(--ck-spacing-standard) 0;padding:0;outline-width:var(--ck-widget-outline-thickness);outline-style:solid;outline-color:transparent;transition:outline-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve)}.ck .ck-widget.ck-widget_selected,.ck .ck-widget.ck-widget_selected:hover{outline:var(--ck-widget-outline-thickness) solid var(--ck-color-focus-border)}.ck .ck-widget:hover{outline-color:var(--ck-color-widget-hover-border)}.ck .ck-editor__nested-editable{border:1px solid transparent}.ck .ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck .ck-editor__nested-editable:focus{outline:none;border:var(--ck-focus-ring);box-shadow:var(--ck-inner-shadow),0 0;background-color:var(--ck-color-widget-editable-focus-background)}.ck .ck-widget.ck-widget_selectable .ck-widget__selection-handler{padding:4px;box-sizing:border-box;background-color:transparent;opacity:0;transition:background-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),visibility var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);border-radius:var(--ck-border-radius) var(--ck-border-radius) 0 0;transform:translateY(-100%);left:calc(0px - var(--ck-widget-outline-thickness))}.ck .ck-widget.ck-widget_selectable .ck-widget__selection-handler:hover .ck-icon .ck-icon__selected-indicator{opacity:1}.ck .ck-widget.ck-widget_selectable .ck-widget__selection-handler .ck-icon{width:var(--ck-widget-handler-icon-size);height:var(--ck-widget-handler-icon-size);color:var(--ck-color-widget-drag-handler-icon-color)}.ck .ck-widget.ck-widget_selectable .ck-widget__selection-handler .ck-icon .ck-icon__selected-indicator{opacity:0;transition:opacity .3s var(--ck-widget-handler-animation-curve)}.ck .ck-widget.ck-widget_selectable.ck-widget_selected .ck-widget__selection-handler,.ck .ck-widget.ck-widget_selectable.ck-widget_selected:hover .ck-widget__selection-handler{opacity:1;background-color:var(--ck-color-focus-border)}.ck .ck-widget.ck-widget_selectable.ck-widget_selected .ck-widget__selection-handler .ck-icon .ck-icon__selected-indicator,.ck .ck-widget.ck-widget_selectable.ck-widget_selected:hover .ck-widget__selection-handler .ck-icon .ck-icon__selected-indicator{opacity:1}.ck .ck-widget.ck-widget_selectable:hover .ck-widget__selection-handler{opacity:1;background-color:var(--ck-color-widget-hover-border)}.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected,.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected:hover{outline-color:var(--ck-color-widget-blurred-border)}.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected .ck-widget__selection-handler,.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected .ck-widget__selection-handler:hover,.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected:hover .ck-widget__selection-handler,.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected:hover .ck-widget__selection-handler:hover{background:var(--ck-color-widget-blurred-border)}"},function(t,e,n){var o=n(66);"string"==typeof o&&(o=[[t.i,o,""]]);var i={singleton:!0,hmr:!0,transform:void 0,insertInto:void 0};n(2)(o,i);o.locals&&(t.exports=o.locals)},function(t,e){t.exports=".ck.ck-labeled-input .ck-labeled-input__error{font-size:var(--ck-font-size-small);color:var(--ck-color-base-error);margin-top:var(--ck-spacing-small)}"},function(t,e,n){var o=n(68);"string"==typeof o&&(o=[[t.i,o,""]]);var i={singleton:!0,hmr:!0,transform:void 0,insertInto:void 0};n(2)(o,i);o.locals&&(t.exports=o.locals)},function(t,e){t.exports=":root{--ck-input-text-width:18em}.ck.ck-input-text{border-radius:0}.ck-rounded-corners .ck.ck-input-text,.ck.ck-input-text.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-input-text{box-shadow:var(--ck-inner-shadow),0 0;background:var(--ck-color-input-background);border:1px solid var(--ck-color-input-border);padding:var(--ck-spacing-extra-tiny) var(--ck-spacing-medium);min-width:var(--ck-input-text-width);min-height:var(--ck-ui-component-min-height);transition-property:box-shadow,border;transition:.2s ease-in-out}.ck.ck-input-text:focus{outline:none;border:var(--ck-focus-ring);box-shadow:var(--ck-focus-outer-shadow),var(--ck-inner-shadow)}.ck.ck-input-text[readonly]{border:1px solid var(--ck-color-input-disabled-border);background:var(--ck-color-input-disabled-background);color:var(--ck-color-input-disabled-text)}.ck.ck-input-text[readonly]:focus{box-shadow:var(--ck-focus-disabled-outer-shadow),var(--ck-inner-shadow)}.ck.ck-input-text.ck-error{border-color:var(--ck-color-input-error-border);animation:ck-text-input-shake .3s ease both}.ck.ck-input-text.ck-error:focus{box-shadow:var(--ck-focus-error-outer-shadow),var(--ck-inner-shadow)}@keyframes ck-text-input-shake{20%{transform:translateX(-2px)}40%{transform:translateX(2px)}60%{transform:translateX(-1px)}80%{transform:translateX(1px)}}"},function(t,e,n){var o=n(70);"string"==typeof o&&(o=[[t.i,o,""]]);var i={singleton:!0,hmr:!0,transform:void 0,insertInto:void 0};n(2)(o,i);o.locals&&(t.exports=o.locals)},function(t,e){t.exports=".ck.ck-text-alternative-form .ck-labeled-input{display:inline-block}.ck.ck-text-alternative-form .ck-label{display:none}.ck.ck-text-alternative-form{padding:var(--ck-spacing-standard)}.ck.ck-text-alternative-form:focus{outline:none}.ck.ck-text-alternative-form>:not(:first-child){margin-left:var(--ck-spacing-standard)}"},function(t,e,n){var o=n(72);"string"==typeof o&&(o=[[t.i,o,""]]);var i={singleton:!0,hmr:!0,transform:void 0,insertInto:void 0};n(2)(o,i);o.locals&&(t.exports=o.locals)},function(t,e){t.exports=':root{--ck-balloon-panel-arrow-z-index:calc(var(--ck-z-default) - 3)}.ck.ck-balloon-panel{display:none;position:absolute;z-index:var(--ck-z-modal)}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after,.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{content:"";position:absolute}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel[class*=arrow_n]:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel[class*=arrow_n]:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel[class*=arrow_s]:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel[class*=arrow_s]:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel.ck-balloon-panel_visible{display:block}:root{--ck-balloon-arrow-offset:2px;--ck-balloon-arrow-height:10px;--ck-balloon-arrow-half-width:8px}.ck.ck-balloon-panel{border-radius:0}.ck-rounded-corners .ck.ck-balloon-panel,.ck.ck-balloon-panel.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-balloon-panel{box-shadow:var(--ck-drop-shadow),0 0;min-height:15px;background:var(--ck-color-panel-background);border:1px solid var(--ck-color-panel-border)}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after,.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{width:0;height:0;border-style:solid}.ck.ck-balloon-panel[class*=arrow_n]:after,.ck.ck-balloon-panel[class*=arrow_n]:before{border-left-width:var(--ck-balloon-arrow-half-width);border-bottom-width:var(--ck-balloon-arrow-height);border-right-width:var(--ck-balloon-arrow-half-width);border-top-width:0}.ck.ck-balloon-panel[class*=arrow_n]:before{border-bottom-color:var(--ck-color-panel-border)}.ck.ck-balloon-panel[class*=arrow_n]:after,.ck.ck-balloon-panel[class*=arrow_n]:before{border-left-color:transparent;border-right-color:transparent;border-top-color:transparent}.ck.ck-balloon-panel[class*=arrow_n]:after{border-bottom-color:var(--ck-color-panel-background);margin-top:var(--ck-balloon-arrow-offset)}.ck.ck-balloon-panel[class*=arrow_s]:after,.ck.ck-balloon-panel[class*=arrow_s]:before{border-left-width:var(--ck-balloon-arrow-half-width);border-bottom-width:0;border-right-width:var(--ck-balloon-arrow-half-width);border-top-width:var(--ck-balloon-arrow-height)}.ck.ck-balloon-panel[class*=arrow_s]:before{border-top-color:var(--ck-color-panel-border)}.ck.ck-balloon-panel[class*=arrow_s]:after,.ck.ck-balloon-panel[class*=arrow_s]:before{border-left-color:transparent;border-bottom-color:transparent;border-right-color:transparent}.ck.ck-balloon-panel[class*=arrow_s]:after{border-top-color:var(--ck-color-panel-background);margin-bottom:var(--ck-balloon-arrow-offset)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_n:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_n:before{left:50%;margin-left:calc(-1 * var(--ck-balloon-arrow-half-width));top:calc(-1 * var(--ck-balloon-arrow-height))}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nw:before{left:calc(2 * var(--ck-balloon-arrow-half-width));top:calc(-1 * var(--ck-balloon-arrow-height))}.ck.ck-balloon-panel.ck-balloon-panel_arrow_ne:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_ne:before{right:calc(2 * var(--ck-balloon-arrow-half-width));top:calc(-1 * var(--ck-balloon-arrow-height))}.ck.ck-balloon-panel.ck-balloon-panel_arrow_s:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_s:before{left:50%;margin-left:calc(-1 * var(--ck-balloon-arrow-half-width));bottom:calc(-1 * var(--ck-balloon-arrow-height))}.ck.ck-balloon-panel.ck-balloon-panel_arrow_sw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_sw:before{left:calc(2 * var(--ck-balloon-arrow-half-width));bottom:calc(-1 * var(--ck-balloon-arrow-height))}.ck.ck-balloon-panel.ck-balloon-panel_arrow_se:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_se:before{right:calc(2 * var(--ck-balloon-arrow-half-width));bottom:calc(-1 * var(--ck-balloon-arrow-height))}'},function(t,e,n){var o=n(74);"string"==typeof o&&(o=[[t.i,o,""]]);var i={singleton:!0,hmr:!0,transform:void 0,insertInto:void 0};n(2)(o,i);o.locals&&(t.exports=o.locals)},function(t,e){t.exports=".ck-content .image{clear:both;text-align:center}.ck-content .image>img{display:block;margin:0 auto;max-width:100%}"},function(t,e,n){var o=n(76);"string"==typeof o&&(o=[[t.i,o,""]]);var i={singleton:!0,hmr:!0,transform:void 0,insertInto:void 0};n(2)(o,i);o.locals&&(t.exports=o.locals)},function(t,e){t.exports=".ck-content .image{position:relative;overflow:hidden}.ck-content .image .ck-progress-bar{position:absolute;top:0;left:0}:root{--ck-image-upload-progress-line-width:30px}.ck-content .image.ck-appear{animation:fadeIn .7s}.ck-content .image .ck-progress-bar{height:2px;width:0;background:var(--ck-color-upload-bar-background);transition:width .1s}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}"},function(t,e,n){var o=n(78);"string"==typeof o&&(o=[[t.i,o,""]]);var i={singleton:!0,hmr:!0,transform:void 0,insertInto:void 0};n(2)(o,i);o.locals&&(t.exports=o.locals)},function(t,e){t.exports='.ck-image-upload-complete-icon{display:block;position:absolute;top:10px;right:10px;border-radius:50%}.ck-image-upload-complete-icon:after{content:"";position:absolute}:root{--ck-color-image-upload-icon:#fff;--ck-color-image-upload-icon-background:#008a00;--ck-image-upload-icon-size:20px;--ck-image-upload-icon-width:2px}.ck-image-upload-complete-icon{width:var(--ck-image-upload-icon-size);height:var(--ck-image-upload-icon-size);opacity:0;background:var(--ck-color-image-upload-icon-background);animation-name:ck-upload-complete-icon-show,ck-upload-complete-icon-hide;animation-fill-mode:forwards,forwards;animation-duration:.5s,.5s;font-size:var(--ck-image-upload-icon-size);animation-delay:0ms,3s}.ck-image-upload-complete-icon:after{left:25%;top:50%;opacity:0;height:0;width:0;transform:scaleX(-1) rotate(135deg);transform-origin:left top;border-top:var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);border-right:var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);animation-name:ck-upload-complete-icon-check;animation-duration:.5s;animation-delay:.5s;animation-fill-mode:forwards;box-sizing:border-box}@keyframes ck-upload-complete-icon-show{0%{opacity:0}to{opacity:1}}@keyframes ck-upload-complete-icon-hide{0%{opacity:1}to{opacity:0}}@keyframes ck-upload-complete-icon-check{0%{opacity:1;width:0;height:0}33%{width:.3em;height:0}to{opacity:1;width:.3em;height:.45em}}'},function(t,e,n){var o=n(80);"string"==typeof o&&(o=[[t.i,o,""]]);var i={singleton:!0,hmr:!0,transform:void 0,insertInto:void 0};n(2)(o,i);o.locals&&(t.exports=o.locals)},function(t,e){t.exports='.ck .ck-upload-placeholder-loader{position:absolute;display:flex;align-items:center;justify-content:center;top:0;left:0}.ck .ck-upload-placeholder-loader:before{content:"";position:relative}:root{--ck-color-upload-placeholder-loader:#b3b3b3;--ck-upload-placeholder-loader-size:32px}.ck .ck-image-upload-placeholder{width:100%;margin:0}.ck .ck-upload-placeholder-loader{width:100%;height:100%}.ck .ck-upload-placeholder-loader:before{width:var(--ck-upload-placeholder-loader-size);height:var(--ck-upload-placeholder-loader-size);border-radius:50%;border-top:3px solid var(--ck-color-upload-placeholder-loader);border-right:2px solid transparent;animation:ck-upload-placeholder-loader 1s linear infinite}@keyframes ck-upload-placeholder-loader{to{transform:rotate(1turn)}}'},function(t,e,n){var o=n(82);"string"==typeof o&&(o=[[t.i,o,""]]);var i={singleton:!0,hmr:!0,transform:void 0,insertInto:void 0};n(2)(o,i);o.locals&&(t.exports=o.locals)},function(t,e){t.exports=".ck.ck-dropdown{display:inline-block;position:relative}.ck.ck-dropdown .ck-dropdown__arrow{pointer-events:none;z-index:var(--ck-z-default)}.ck.ck-dropdown .ck-button.ck-dropdown__button{width:100%}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on .ck-tooltip{display:none}.ck.ck-dropdown .ck-dropdown__panel{-webkit-backface-visibility:hidden;display:none;z-index:var(--ck-z-modal);position:absolute;left:0;transform:translate3d(0,100%,0)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel-visible{display:inline-block;will-change:transform}:root{--ck-dropdown-arrow-size:calc(0.5 * var(--ck-icon-size))}.ck.ck-dropdown{font-size:inherit}.ck.ck-dropdown .ck-dropdown__arrow{right:var(--ck-spacing-standard);width:var(--ck-dropdown-arrow-size);margin-left:var(--ck-spacing-small)}.ck.ck-dropdown.ck-disabled .ck-dropdown__arrow{opacity:var(--ck-disabled-opacity)}.ck.ck-dropdown .ck-button.ck-dropdown__button:not(.ck-button_with-text){padding-left:var(--ck-spacing-small)}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-disabled .ck-button__label{opacity:var(--ck-disabled-opacity)}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on{border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-dropdown .ck-button.ck-dropdown__button .ck-button__label{width:7em;overflow:hidden;text-overflow:ellipsis}.ck.ck-dropdown__panel{box-shadow:var(--ck-drop-shadow),0 0;border-radius:0}.ck-rounded-corners .ck.ck-dropdown__panel,.ck.ck-dropdown__panel.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0}.ck.ck-dropdown__panel{background:var(--ck-color-dropdown-panel-background);border:1px solid var(--ck-color-dropdown-panel-border);bottom:0;min-width:100%}"},function(t,e,n){var o=n(84);"string"==typeof o&&(o=[[t.i,o,""]]);var i={singleton:!0,hmr:!0,transform:void 0,insertInto:void 0};n(2)(o,i);o.locals&&(t.exports=o.locals)},function(t,e){t.exports=".ck.ck-list{-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none;display:flex;flex-direction:column}.ck.ck-list .ck-list__item,.ck.ck-list .ck-list__separator{display:block}.ck.ck-list .ck-list__item>:focus{position:relative;z-index:var(--ck-z-default)}.ck.ck-list{border-radius:0}.ck-rounded-corners .ck.ck-list,.ck.ck-list.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-list{list-style-type:none;background:var(--ck-color-list-background)}.ck.ck-list__item{cursor:default;min-width:12em}.ck.ck-list__item .ck-button{min-height:unset;width:100%;text-align:left;border-radius:0;border:0;padding:calc(.2 * var(--ck-line-height-base) * var(--ck-font-size-base)) calc(.4 * var(--ck-line-height-base) * var(--ck-font-size-base))}.ck.ck-list__item .ck-button .ck-button__label{line-height:calc(1.2 * var(--ck-line-height-base) * var(--ck-font-size-base))}.ck.ck-list__item .ck-button:active{box-shadow:none}.ck.ck-list__item .ck-button.ck-on{background:var(--ck-color-list-button-on-background);color:var(--ck-color-list-button-on-text)}.ck.ck-list__item .ck-button.ck-on:hover:not(ck-disabled){background:var(--ck-color-list-button-on-background-focus)}.ck.ck-list__item .ck-button.ck-on:active{box-shadow:none}.ck.ck-list__item .ck-button:hover:not(.ck-disabled){background:var(--ck-color-list-button-hover-background)}.ck.ck-list__item .ck-switchbutton.ck-on{background:var(--ck-color-list-background);color:inherit}.ck.ck-list__item .ck-switchbutton.ck-on:hover:not(ck-disabled){background:var(--ck-color-list-button-hover-background);color:inherit}.ck.ck-list__separator{height:1px;width:100%;background:var(--ck-color-base-border)}"},function(t,e,n){var o=n(86);"string"==typeof o&&(o=[[t.i,o,""]]);var i={singleton:!0,hmr:!0,transform:void 0,insertInto:void 0};n(2)(o,i);o.locals&&(t.exports=o.locals)},function(t,e){t.exports=".ck.ck-button.ck-switchbutton .ck-button__toggle,.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{display:block}:root{--ck-switch-button-toggle-width:2.6153846154em;--ck-switch-button-toggle-inner-size:1.0769230769em;--ck-switch-button-toggle-spacing:1px}.ck.ck-button.ck-switchbutton .ck-button__label{margin-right:calc(2 * var(--ck-spacing-large))}.ck.ck-button.ck-switchbutton.ck-disabled .ck-button__toggle{opacity:var(--ck-disabled-opacity)}.ck.ck-button.ck-switchbutton .ck-button__toggle{border-radius:0}.ck-rounded-corners .ck.ck-button.ck-switchbutton .ck-button__toggle,.ck.ck-button.ck-switchbutton .ck-button__toggle.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-button.ck-switchbutton .ck-button__toggle{margin-left:auto;transition:background .4s ease;width:var(--ck-switch-button-toggle-width);background:var(--ck-color-switch-button-off-background)}.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{border-radius:0}.ck-rounded-corners .ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner,.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner.ck-rounded-corners{border-radius:var(--ck-border-radius);border-radius:calc(.5 * var(--ck-border-radius))}.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{margin:var(--ck-switch-button-toggle-spacing);width:var(--ck-switch-button-toggle-inner-size);height:var(--ck-switch-button-toggle-inner-size);background:var(--ck-color-switch-button-inner-background);transition:transform .3s ease}.ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle{background:var(--ck-color-switch-button-on-background)}.ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle .ck-button__toggle__inner{transform:translateX(1.3846153847em)}"},function(t,e,n){var o=n(88);"string"==typeof o&&(o=[[t.i,o,""]]);var i={singleton:!0,hmr:!0,transform:void 0,insertInto:void 0};n(2)(o,i);o.locals&&(t.exports=o.locals)},function(t,e){t.exports=".ck.ck-toolbar-dropdown .ck-toolbar{flex-wrap:nowrap}.ck.ck-toolbar-dropdown .ck-dropdown__panel .ck-button:focus{z-index:calc(var(--ck-z-default) + 1)}.ck.ck-toolbar-dropdown .ck-toolbar{border:0}"},function(t,e,n){var o=n(90);"string"==typeof o&&(o=[[t.i,o,""]]);var i={singleton:!0,hmr:!0,transform:void 0,insertInto:void 0};n(2)(o,i);o.locals&&(t.exports=o.locals)},function(t,e){t.exports=".ck.ck-dropdown .ck-dropdown__panel .ck-list{border-radius:0}.ck-rounded-corners .ck.ck-dropdown .ck-dropdown__panel .ck-list,.ck.ck-dropdown .ck-dropdown__panel .ck-list.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0}.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:first-child .ck-button{border-radius:0}.ck-rounded-corners .ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:first-child .ck-button,.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:first-child .ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0;border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:last-child .ck-button{border-radius:0}.ck-rounded-corners .ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:last-child .ck-button,.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:last-child .ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0;border-top-right-radius:0}"},function(t,e){t.exports=".ck.ck-heading_heading1{font-size:20px}.ck.ck-heading_heading2{font-size:17px}.ck.ck-heading_heading3{font-size:14px}.ck[class*=ck-heading_heading]{font-weight:700}.ck.ck-dropdown.ck-heading-dropdown .ck-dropdown__button .ck-button__label{width:8em}.ck.ck-dropdown.ck-heading-dropdown .ck-dropdown__panel .ck-list__item{min-width:18em}"},function(t,e,n){var o=n(93);"string"==typeof o&&(o=[[t.i,o,""]]);var i={singleton:!0,hmr:!0,transform:void 0,insertInto:void 0};n(2)(o,i);o.locals&&(t.exports=o.locals)},function(t,e){t.exports=".ck.ck-placeholder:before,.ck .ck-placeholder:before{content:attr(data-placeholder);pointer-events:none;cursor:text;color:var(--ck-color-engine-placeholder-text)}"},function(t,e,n){var o=n(95);"string"==typeof o&&(o=[[t.i,o,""]]);var i={singleton:!0,hmr:!0,transform:void 0,insertInto:void 0};n(2)(o,i);o.locals&&(t.exports=o.locals)},function(t,e){t.exports=".ck-content .image>figcaption{color:#333;background-color:#f7f7f7;padding:.6em;font-size:.75em;outline-offset:-1px}"},function(t,e,n){var o=n(97);"string"==typeof o&&(o=[[t.i,o,""]]);var i={singleton:!0,hmr:!0,transform:void 0,insertInto:void 0};n(2)(o,i);o.locals&&(t.exports=o.locals)},function(t,e){t.exports=":root{--ck-image-style-spacing:1.5em}.ck-content .image-style-align-center,.ck-content .image-style-align-left,.ck-content .image-style-align-right,.ck-content .image-style-side{max-width:50%}.ck-content .image-style-side{float:right;margin-left:var(--ck-image-style-spacing)}.ck-content .image-style-align-left{float:left;margin-right:var(--ck-image-style-spacing)}.ck-content .image-style-align-center{margin-left:auto;margin-right:auto}.ck-content .image-style-align-right{float:right;margin-left:var(--ck-image-style-spacing)}"},function(t,e,n){var o=n(99);"string"==typeof o&&(o=[[t.i,o,""]]);var i={singleton:!0,hmr:!0,transform:void 0,insertInto:void 0};n(2)(o,i);o.locals&&(t.exports=o.locals)},function(t,e){t.exports=".ck .ck-link_selected{background:var(--ck-color-link-selected-background)}"},function(t,e,n){var o=n(101);"string"==typeof o&&(o=[[t.i,o,""]]);var i={singleton:!0,hmr:!0,transform:void 0,insertInto:void 0};n(2)(o,i);o.locals&&(t.exports=o.locals)},function(t,e){t.exports=".ck.ck-link-form .ck-labeled-input{display:inline-block}.ck.ck-link-form .ck-label{display:none}.ck.ck-link-form{padding:var(--ck-spacing-standard)}.ck.ck-link-form:focus{outline:none}.ck.ck-link-form>:not(:first-child){margin-left:var(--ck-spacing-standard)}"},function(t,e,n){var o=n(103);"string"==typeof o&&(o=[[t.i,o,""]]);var i={singleton:!0,hmr:!0,transform:void 0,insertInto:void 0};n(2)(o,i);o.locals&&(t.exports=o.locals)},function(t,e){t.exports=".ck.ck-link-actions .ck-link-actions__preview{display:inline-block}.ck.ck-link-actions .ck-link-actions__preview .ck-button__label{overflow:hidden}.ck.ck-link-actions{padding:var(--ck-spacing-standard)}.ck.ck-link-actions .ck-button.ck-link-actions__preview{padding-left:0;padding-right:0}.ck.ck-link-actions .ck-button.ck-link-actions__preview,.ck.ck-link-actions .ck-button.ck-link-actions__preview:active,.ck.ck-link-actions .ck-button.ck-link-actions__preview:focus,.ck.ck-link-actions .ck-button.ck-link-actions__preview:hover{background:none}.ck.ck-link-actions .ck-button.ck-link-actions__preview:active{box-shadow:none}.ck.ck-link-actions .ck-button.ck-link-actions__preview:focus .ck-button__label{text-decoration:underline}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label{padding:0 var(--ck-spacing-medium);color:var(--ck-color-link-default);text-overflow:ellipsis;cursor:pointer;max-width:var(--ck-input-text-width);min-width:3em;text-align:center}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label:hover{text-decoration:underline}.ck.ck-link-actions:focus{outline:none}.ck.ck-link-actions>:not(:first-child){margin-left:var(--ck-spacing-standard)}"},function(t,e,n){var o=n(105);"string"==typeof o&&(o=[[t.i,o,""]]);var i={singleton:!0,hmr:!0,transform:void 0,insertInto:void 0};n(2)(o,i);o.locals&&(t.exports=o.locals)},function(t,e){t.exports='.ck-media__wrapper>:not(.ck-media__placeholder){pointer-events:none}.ck-media__wrapper .ck-media__placeholder{display:flex;flex-direction:column;align-items:center}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url .ck-tooltip{display:block}@media (hover:none){.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url .ck-tooltip{display:none}}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url{max-width:100%;position:relative}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url:hover .ck-tooltip{visibility:visible;opacity:1}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url .ck-media__placeholder__url__text{overflow:hidden;display:block}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck-media__placeholder__icon *{display:none}:root{--ck-media-embed-placeholder-icon-size:3em;--ck-color-media-embed-placeholder-url-text:#757575;--ck-color-media-embed-placeholder-url-text-hover:var(--ck-color-base-text)}.ck-media__wrapper{margin:0 auto}.ck-media__wrapper .ck-media__placeholder{padding:calc(3 * var(--ck-spacing-standard));background:var(--ck-color-base-foreground)}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__icon{min-width:var(--ck-media-embed-placeholder-icon-size);height:var(--ck-media-embed-placeholder-icon-size);margin-bottom:var(--ck-spacing-large);background-position:50%;background-size:cover}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__icon .ck-icon{width:100%;height:100%}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url .ck-media__placeholder__url__text{color:var(--ck-color-media-embed-placeholder-url-text);white-space:nowrap;text-align:center;font-style:italic;text-overflow:ellipsis}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url .ck-media__placeholder__url__text:hover{color:var(--ck-color-media-embed-placeholder-url-text-hover);cursor:pointer;text-decoration:underline}.ck-media__wrapper[data-oembed-url*="open.spotify.com"]{max-width:300px;max-height:380px}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder{background:linear-gradient(90deg,#71c6f4,#0d70a5)}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MDAgNDAwIj48cGF0aCBkPSJNNDAwIDIwMGMwIDExMC41LTg5LjUgMjAwLTIwMCAyMDBTMCAzMTAuNSAwIDIwMCA4OS41IDAgMjAwIDBzMjAwIDg5LjUgMjAwIDIwMHpNMTYzLjQgMzA1LjVjODguNyAwIDEzNy4yLTczLjUgMTM3LjItMTM3LjIgMC0yLjEgMC00LjItLjEtNi4yIDkuNC02LjggMTcuNi0xNS4zIDI0LjEtMjUtOC42IDMuOC0xNy45IDYuNC0yNy43IDcuNiAxMC02IDE3LjYtMTUuNCAyMS4yLTI2LjctOS4zIDUuNS0xOS42IDkuNS0zMC42IDExLjctOC44LTkuNC0yMS4zLTE1LjItMzUuMi0xNS4yLTI2LjYgMC00OC4yIDIxLjYtNDguMiA0OC4yIDAgMy44LjQgNy41IDEuMyAxMS00MC4xLTItNzUuNi0yMS4yLTk5LjQtNTAuNC00LjEgNy4xLTYuNSAxNS40LTYuNSAyNC4yIDAgMTYuNyA4LjUgMzEuNSAyMS41IDQwLjEtNy45LS4yLTE1LjMtMi40LTIxLjgtNnYuNmMwIDIzLjQgMTYuNiA0Mi44IDM4LjcgNDcuMy00IDEuMS04LjMgMS43LTEyLjcgMS43LTMuMSAwLTYuMS0uMy05LjEtLjkgNi4xIDE5LjIgMjMuOSAzMy4xIDQ1IDMzLjUtMTYuNSAxMi45LTM3LjMgMjAuNi01OS45IDIwLjYtMy45IDAtNy43LS4yLTExLjUtLjcgMjEuMSAxMy44IDQ2LjUgMjEuOCA3My43IDIxLjgiIGZpbGw9IiNmZmYiLz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__url__text{color:#b8e6ff}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}.ck-media__wrapper[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTAuMzc4IiBoZWlnaHQ9IjI1NC4xNjciIHZpZXdCb3g9IjAgMCA2Ni4yNDYgNjcuMjQ4Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTcyLjUzMSAtMjE4LjQ1NSkgc2NhbGUoLjk4MDEyKSI+PHJlY3Qgcnk9IjUuMjM4IiByeD0iNS4yMzgiIHk9IjIzMS4zOTkiIHg9IjE3Ni4wMzEiIGhlaWdodD0iNjAuMDk5IiB3aWR0aD0iNjAuMDk5IiBmaWxsPSIjMzRhNjY4IiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxwYXRoIGQ9Ik0yMDYuNDc3IDI2MC45bC0yOC45ODcgMjguOTg3YTUuMjE4IDUuMjE4IDAgMCAwIDMuNzggMS42MWg0OS42MjFjMS42OTQgMCAzLjE5LS43OTggNC4xNDYtMi4wMzd6IiBmaWxsPSIjNWM4OGM1Ii8+PHBhdGggZD0iTTIyNi43NDIgMjIyLjk4OGMtOS4yNjYgMC0xNi43NzcgNy4xNy0xNi43NzcgMTYuMDE0LjAwNyAyLjc2Mi42NjMgNS40NzQgMi4wOTMgNy44NzUuNDMuNzAzLjgzIDEuNDA4IDEuMTkgMi4xMDcuMzMzLjUwMi42NSAxLjAwNS45NSAxLjUwOC4zNDMuNDc3LjY3My45NTcuOTg4IDEuNDQgMS4zMSAxLjc2OSAyLjUgMy41MDIgMy42MzcgNS4xNjguNzkzIDEuMjc1IDEuNjgzIDIuNjQgMi40NjYgMy45OSAyLjM2MyA0LjA5NCA0LjAwNyA4LjA5MiA0LjYgMTMuOTE0di4wMTJjLjE4Mi40MTIuNTE2LjY2Ni44NzkuNjY3LjQwMy0uMDAxLjc2OC0uMzE0LjkzLS43OTkuNjAzLTUuNzU2IDIuMjM4LTkuNzI5IDQuNTg1LTEzLjc5NC43ODItMS4zNSAxLjY3My0yLjcxNSAyLjQ2NS0zLjk5IDEuMTM3LTEuNjY2IDIuMzI4LTMuNCAzLjYzOC01LjE2OS4zMTUtLjQ4Mi42NDUtLjk2Mi45ODgtMS40MzkuMy0uNTAzLjYxNy0xLjAwNi45NS0xLjUwOC4zNTktLjcuNzYtMS40MDQgMS4xOS0yLjEwNyAxLjQyNi0yLjQwMiAyLTUuMTE0IDIuMDA0LTcuODc1IDAtOC44NDQtNy41MTEtMTYuMDE0LTE2Ljc3Ni0xNi4wMTR6IiBmaWxsPSIjZGQ0YjNlIiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxlbGxpcHNlIHJ5PSI1LjU2NCIgcng9IjUuODI4IiBjeT0iMjM5LjAwMiIgY3g9IjIyNi43NDIiIGZpbGw9IiM4MDJkMjciIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PHBhdGggZD0iTTE5MC4zMDEgMjM3LjI4M2MtNC42NyAwLTguNDU3IDMuODUzLTguNDU3IDguNjA2czMuNzg2IDguNjA3IDguNDU3IDguNjA3YzMuMDQzIDAgNC44MDYtLjk1OCA2LjMzNy0yLjUxNiAxLjUzLTEuNTU3IDIuMDg3LTMuOTEzIDIuMDg3LTYuMjkgMC0uMzYyLS4wMjMtLjcyMi0uMDY0LTEuMDc5aC04LjI1N3YzLjA0M2g0Ljg1Yy0uMTk3Ljc1OS0uNTMxIDEuNDUtMS4wNTggMS45ODYtLjk0Mi45NTgtMi4wMjggMS41NDgtMy45MDEgMS41NDgtMi44NzYgMC01LjIwOC0yLjM3Mi01LjIwOC01LjI5OSAwLTIuOTI2IDIuMzMyLTUuMjk5IDUuMjA4LTUuMjk5IDEuMzk5IDAgMi42MTguNDA3IDMuNTg0IDEuMjkzbDIuMzgxLTIuMzhjMC0uMDAyLS4wMDMtLjAwNC0uMDA0LS4wMDUtMS41ODgtMS41MjQtMy42Mi0yLjIxNS01Ljk1NS0yLjIxNXptNC40MyA1LjY2bC4wMDMuMDA2di0uMDAzeiIgZmlsbD0iI2ZmZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJNMjE1LjE4NCAyNTEuOTI5bC03Ljk4IDcuOTc5IDI4LjQ3NyAyOC40NzVhNS4yMzMgNS4yMzMgMCAwIDAgLjQ0OS0yLjEyM3YtMzEuMTY1Yy0uNDY5LjY3NS0uOTM0IDEuMzQ5LTEuMzgyIDIuMDA1LS43OTIgMS4yNzUtMS42ODIgMi42NC0yLjQ2NSAzLjk5LTIuMzQ3IDQuMDY1LTMuOTgyIDguMDM4LTQuNTg1IDEzLjc5NC0uMTYyLjQ4NS0uNTI3Ljc5OC0uOTMuNzk5LS4zNjMtLjAwMS0uNjk3LS4yNTUtLjg3OS0uNjY3di0uMDEyYy0uNTkzLTUuODIyLTIuMjM3LTkuODItNC42LTEzLjkxNC0uNzgzLTEuMzUtMS42NzMtMi43MTUtMi40NjYtMy45OS0xLjEzNy0xLjY2Ni0yLjMyNy0zLjQtMy42MzctNS4xNjlsLS4wMDItLjAwM3oiIGZpbGw9IiNjM2MzYzMiLz48cGF0aCBkPSJNMjEyLjk4MyAyNDguNDk1bC0zNi45NTIgMzYuOTUzdi44MTJhNS4yMjcgNS4yMjcgMCAwIDAgNS4yMzggNS4yMzhoMS4wMTVsMzUuNjY2LTM1LjY2NmExMzYuMjc1IDEzNi4yNzUgMCAwIDAtMi43NjQtMy45IDM3LjU3NSAzNy41NzUgMCAwIDAtLjk4OS0xLjQ0IDM1LjEyNyAzNS4xMjcgMCAwIDAtLjk1LTEuNTA4Yy0uMDgzLS4xNjItLjE3Ni0uMzI2LS4yNjQtLjQ4OXoiIGZpbGw9IiNmZGRjNGYiIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PHBhdGggZD0iTTIxMS45OTggMjYxLjA4M2wtNi4xNTIgNi4xNTEgMjQuMjY0IDI0LjI2NGguNzgxYTUuMjI3IDUuMjI3IDAgMCAwIDUuMjM5LTUuMjM4di0xLjA0NXoiIGZpbGw9IiNmZmYiIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PC9nPjwvc3ZnPg==)}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder{background:#4268b3}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAyNCIgaGVpZ2h0PSIxMDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik05NjcuNDg0IDBINTYuNTE3QzI1LjMwNCAwIDAgMjUuMzA0IDAgNTYuNTE3djkxMC45NjZDMCA5OTguNjk0IDI1LjI5NyAxMDI0IDU2LjUyMiAxMDI0SDU0N1Y2MjhINDE0VjQ3M2gxMzNWMzU5LjAyOWMwLTEzMi4yNjIgODAuNzczLTIwNC4yODIgMTk4Ljc1Ni0yMDQuMjgyIDU2LjUxMyAwIDEwNS4wODYgNC4yMDggMTE5LjI0NCA2LjA4OVYyOTlsLTgxLjYxNi4wMzdjLTYzLjk5MyAwLTc2LjM4NCAzMC40OTItNzYuMzg0IDc1LjIzNlY0NzNoMTUzLjQ4N2wtMTkuOTg2IDE1NUg3MDd2Mzk2aDI2MC40ODRjMzEuMjEzIDAgNTYuNTE2LTI1LjMwMyA1Ni41MTYtNTYuNTE2VjU2LjUxNUMxMDI0IDI1LjMwMyA5OTguNjk3IDAgOTY3LjQ4NCAwIiBmaWxsPSIjRkZGRkZFIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__url__text{color:#cdf}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder{background:linear-gradient(-135deg,#1400c8,#b900b4,#f50000)}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTA0IiBoZWlnaHQ9IjUwNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGRlZnM+PHBhdGggaWQ9ImEiIGQ9Ik0wIC4xNTloNTAzLjg0MVY1MDMuOTRIMHoiLz48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48bWFzayBpZD0iYiIgZmlsbD0iI2ZmZiI+PHVzZSB4bGluazpocmVmPSIjYSIvPjwvbWFzaz48cGF0aCBkPSJNMjUxLjkyMS4xNTljLTY4LjQxOCAwLTc2Ljk5Ny4yOS0xMDMuODY3IDEuNTE2LTI2LjgxNCAxLjIyMy00NS4xMjcgNS40ODItNjEuMTUxIDExLjcxLTE2LjU2NiA2LjQzNy0zMC42MTUgMTUuMDUxLTQ0LjYyMSAyOS4wNTYtMTQuMDA1IDE0LjAwNi0yMi42MTkgMjguMDU1LTI5LjA1NiA0NC42MjEtNi4yMjggMTYuMDI0LTEwLjQ4NyAzNC4zMzctMTEuNzEgNjEuMTUxQy4yOSAxNzUuMDgzIDAgMTgzLjY2MiAwIDI1Mi4wOGMwIDY4LjQxNy4yOSA3Ni45OTYgMS41MTYgMTAzLjg2NiAxLjIyMyAyNi44MTQgNS40ODIgNDUuMTI3IDExLjcxIDYxLjE1MSA2LjQzNyAxNi41NjYgMTUuMDUxIDMwLjYxNSAyOS4wNTYgNDQuNjIxIDE0LjAwNiAxNC4wMDUgMjguMDU1IDIyLjYxOSA0NC42MjEgMjkuMDU3IDE2LjAyNCA2LjIyNyAzNC4zMzcgMTAuNDg2IDYxLjE1MSAxMS43MDkgMjYuODcgMS4yMjYgMzUuNDQ5IDEuNTE2IDEwMy44NjcgMS41MTYgNjguNDE3IDAgNzYuOTk2LS4yOSAxMDMuODY2LTEuNTE2IDI2LjgxNC0xLjIyMyA0NS4xMjctNS40ODIgNjEuMTUxLTExLjcwOSAxNi41NjYtNi40MzggMzAuNjE1LTE1LjA1MiA0NC42MjEtMjkuMDU3IDE0LjAwNS0xNC4wMDYgMjIuNjE5LTI4LjA1NSAyOS4wNTctNDQuNjIxIDYuMjI3LTE2LjAyNCAxMC40ODYtMzQuMzM3IDExLjcwOS02MS4xNTEgMS4yMjYtMjYuODcgMS41MTYtMzUuNDQ5IDEuNTE2LTEwMy44NjYgMC02OC40MTgtLjI5LTc2Ljk5Ny0xLjUxNi0xMDMuODY3LTEuMjIzLTI2LjgxNC01LjQ4Mi00NS4xMjctMTEuNzA5LTYxLjE1MS02LjQzOC0xNi41NjYtMTUuMDUyLTMwLjYxNS0yOS4wNTctNDQuNjIxLTE0LjAwNi0xNC4wMDUtMjguMDU1LTIyLjYxOS00NC42MjEtMjkuMDU2LTE2LjAyNC02LjIyOC0zNC4zMzctMTAuNDg3LTYxLjE1MS0xMS43MUMzMjguOTE3LjQ0OSAzMjAuMzM4LjE1OSAyNTEuOTIxLjE1OXptMCA0NS4zOTFjNjcuMjY1IDAgNzUuMjMzLjI1NyAxMDEuNzk3IDEuNDY5IDI0LjU2MiAxLjEyIDM3LjkwMSA1LjIyNCA0Ni43NzggOC42NzQgMTEuNzU5IDQuNTcgMjAuMTUxIDEwLjAyOSAyOC45NjYgMTguODQ1IDguODE2IDguODE1IDE0LjI3NSAxNy4yMDcgMTguODQ1IDI4Ljk2NiAzLjQ1IDguODc3IDcuNTU0IDIyLjIxNiA4LjY3NCA0Ni43NzggMS4yMTIgMjYuNTY0IDEuNDY5IDM0LjUzMiAxLjQ2OSAxMDEuNzk4IDAgNjcuMjY1LS4yNTcgNzUuMjMzLTEuNDY5IDEwMS43OTctMS4xMiAyNC41NjItNS4yMjQgMzcuOTAxLTguNjc0IDQ2Ljc3OC00LjU3IDExLjc1OS0xMC4wMjkgMjAuMTUxLTE4Ljg0NSAyOC45NjYtOC44MTUgOC44MTYtMTcuMjA3IDE0LjI3NS0yOC45NjYgMTguODQ1LTguODc3IDMuNDUtMjIuMjE2IDcuNTU0LTQ2Ljc3OCA4LjY3NC0yNi41NiAxLjIxMi0zNC41MjcgMS40NjktMTAxLjc5NyAxLjQ2OS02Ny4yNzEgMC03NS4yMzctLjI1Ny0xMDEuNzk4LTEuNDY5LTI0LjU2Mi0xLjEyLTM3LjkwMS01LjIyNC00Ni43NzgtOC42NzQtMTEuNzU5LTQuNTctMjAuMTUxLTEwLjAyOS0yOC45NjYtMTguODQ1LTguODE1LTguODE1LTE0LjI3NS0xNy4yMDctMTguODQ1LTI4Ljk2Ni0zLjQ1LTguODc3LTcuNTU0LTIyLjIxNi04LjY3NC00Ni43NzgtMS4yMTItMjYuNTY0LTEuNDY5LTM0LjUzMi0xLjQ2OS0xMDEuNzk3IDAtNjcuMjY2LjI1Ny03NS4yMzQgMS40NjktMTAxLjc5OCAxLjEyLTI0LjU2MiA1LjIyNC0zNy45MDEgOC42NzQtNDYuNzc4IDQuNTctMTEuNzU5IDEwLjAyOS0yMC4xNTEgMTguODQ1LTI4Ljk2NiA4LjgxNS04LjgxNiAxNy4yMDctMTQuMjc1IDI4Ljk2Ni0xOC44NDUgOC44NzctMy40NSAyMi4yMTYtNy41NTQgNDYuNzc4LTguNjc0IDI2LjU2NC0xLjIxMiAzNC41MzItMS40NjkgMTAxLjc5OC0xLjQ2OXoiIGZpbGw9IiNGRkYiIG1hc2s9InVybCgjYikiLz48cGF0aCBkPSJNMjUxLjkyMSAzMzYuMDUzYy00Ni4zNzggMC04My45NzQtMzcuNTk2LTgzLjk3NC04My45NzMgMC00Ni4zNzggMzcuNTk2LTgzLjk3NCA4My45NzQtODMuOTc0IDQ2LjM3NyAwIDgzLjk3MyAzNy41OTYgODMuOTczIDgzLjk3NCAwIDQ2LjM3Ny0zNy41OTYgODMuOTczLTgzLjk3MyA4My45NzN6bTAtMjEzLjMzOGMtNzEuNDQ3IDAtMTI5LjM2NSA1Ny45MTgtMTI5LjM2NSAxMjkuMzY1IDAgNzEuNDQ2IDU3LjkxOCAxMjkuMzY0IDEyOS4zNjUgMTI5LjM2NCA3MS40NDYgMCAxMjkuMzY0LTU3LjkxOCAxMjkuMzY0LTEyOS4zNjQgMC03MS40NDctNTcuOTE4LTEyOS4zNjUtMTI5LjM2NC0xMjkuMzY1ek00MTYuNjI3IDExNy42MDRjMCAxNi42OTYtMTMuNTM1IDMwLjIzLTMwLjIzMSAzMC4yMy0xNi42OTUgMC0zMC4yMy0xMy41MzQtMzAuMjMtMzAuMjMgMC0xNi42OTYgMTMuNTM1LTMwLjIzMSAzMC4yMy0zMC4yMzEgMTYuNjk2IDAgMzAuMjMxIDEzLjUzNSAzMC4yMzEgMzAuMjMxIiBmaWxsPSIjRkZGIi8+PC9nPjwvc3ZnPg==)}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__url__text{color:#ffe0fe}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}'},function(t,e,n){var o=n(107);"string"==typeof o&&(o=[[t.i,o,""]]);var i={singleton:!0,hmr:!0,transform:void 0,insertInto:void 0};n(2)(o,i);o.locals&&(t.exports=o.locals)},function(t,e){t.exports=".ck.ck-media-form{display:flex;align-items:flex-start}.ck.ck-media-form .ck-labeled-input{display:inline-block}.ck.ck-media-form .ck-label{display:none}.ck.ck-media-form{padding:var(--ck-spacing-standard)}.ck.ck-media-form:focus{outline:none}.ck.ck-media-form>:not(:first-child){margin-left:var(--ck-spacing-standard)}"},function(t,e,n){var o=n(109);"string"==typeof o&&(o=[[t.i,o,""]]);var i={singleton:!0,hmr:!0,transform:void 0,insertInto:void 0};n(2)(o,i);o.locals&&(t.exports=o.locals)},function(t,e){t.exports=":root{--ck-color-table-focused-cell-background:#f5fafe}.ck-widget.table td.ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck-widget.table th.ck-editor__nested-editable.ck-editor__nested-editable_focused{background:var(--ck-color-table-focused-cell-background);border-style:none;outline:1px solid var(--ck-color-focus-border);outline-offset:-1px}"},function(t,e,n){var o=n(111);"string"==typeof o&&(o=[[t.i,o,""]]);var i={singleton:!0,hmr:!0,transform:void 0,insertInto:void 0};n(2)(o,i);o.locals&&(t.exports=o.locals)},function(t,e){t.exports=":root{--ck-insert-table-dropdown-padding:10px;--ck-insert-table-dropdown-box-height:11px;--ck-insert-table-dropdown-box-width:12px;--ck-insert-table-dropdown-box-margin:1px;--ck-insert-table-dropdown-box-border-color:#bfbfbf;--ck-insert-table-dropdown-box-border-active-color:#53a0e4;--ck-insert-table-dropdown-box-active-background:#c7e5ff}.ck .ck-insert-table-dropdown__grid{display:flex;flex-direction:row;flex-wrap:wrap;width:calc(var(--ck-insert-table-dropdown-box-width) * 10 + var(--ck-insert-table-dropdown-box-margin) * 20 + var(--ck-insert-table-dropdown-padding) * 2);padding:var(--ck-insert-table-dropdown-padding) var(--ck-insert-table-dropdown-padding) 0}.ck .ck-insert-table-dropdown__label{text-align:center}.ck .ck-insert-table-dropdown-grid-box{width:var(--ck-insert-table-dropdown-box-width);height:var(--ck-insert-table-dropdown-box-height);margin:var(--ck-insert-table-dropdown-box-margin);border:1px solid var(--ck-insert-table-dropdown-box-border-color);border-radius:1px}.ck .ck-insert-table-dropdown-grid-box.ck-on{border-color:var(--ck-insert-table-dropdown-box-border-active-color);background:var(--ck-insert-table-dropdown-box-active-background)}"},function(t,e,n){var o=n(113);"string"==typeof o&&(o=[[t.i,o,""]]);var i={singleton:!0,hmr:!0,transform:void 0,insertInto:void 0};n(2)(o,i);o.locals&&(t.exports=o.locals)},function(t,e){t.exports=".ck-content .table{margin:1em auto;display:table}.ck-content .table table{border-collapse:collapse;border-spacing:0;border:1px double #b3b3b3}.ck-content .table table td,.ck-content .table table th{min-width:2em;padding:.4em;border-color:#d9d9d9}.ck-content .table table th{font-weight:700;background:#fafafa}"},function(t,e,n){"use strict";n.r(e);var o=n(4),i=o.a.Symbol,r=Object.prototype,s=r.hasOwnProperty,a=r.toString,c=i?i.toStringTag:void 0;var l=function(t){var e=s.call(t,c),n=t[c];try{t[c]=void 0;var o=!0}catch(t){}var i=a.call(t);return o&&(e?t[c]=n:delete t[c]),i},d=Object.prototype.toString;var u=function(t){return d.call(t)},h="[object Null]",f="[object Undefined]",m=i?i.toStringTag:void 0;var p=function(t){return null==t?void 0===t?f:h:m&&m in Object(t)?l(t):u(t)};var g=function(t,e){return function(n){return t(e(n))}},b=g(Object.getPrototypeOf,Object);var w=function(t){return null!=t&&"object"==typeof t},_="[object Object]",k=Function.prototype,v=Object.prototype,y=k.toString,x=v.hasOwnProperty,A=y.call(Object);var C=function(t){if(!w(t)||p(t)!=_)return!1;var e=b(t);if(null===e)return!0;var n=x.call(e,"constructor")&&e.constructor;return"function"==typeof n&&n instanceof n&&y.call(n)==A};class T{constructor(t,e){this._config={},e&&this.define(e),t&&this._setObjectToTarget(this._config,t)}set(t,e){this._setToTarget(this._config,t,e)}define(t,e){this._setToTarget(this._config,t,e,!0)}get(t){return this._getFromSource(this._config,t)}_setToTarget(t,e,n,o=!1){if(C(e))return void this._setObjectToTarget(t,e,o);const i=e.split(".");e=i.pop();for(const e of i)C(t[e])||(t[e]={}),t=t[e];if(C(n))return C(t[e])||(t[e]={}),t=t[e],void this._setObjectToTarget(t,n,o);o&&void 0!==t[e]||(t[e]=n)}_getFromSource(t,e){const n=e.split(".");e=n.pop();for(const e of n){if(!C(t[e])){t=null;break}t=t[e]}return t?t[e]:void 0}_setObjectToTarget(t,e,n){Object.keys(e).forEach(o=>{this._setToTarget(t,o,e[o],n)})}}var M=n(0);var P=function(){return function t(){t.called=!0}};class S{constructor(t,e){this.source=t,this.name=e,this.path=[],this.stop=P(),this.off=P()}}function E(){let t="e";for(let e=0;e<8;e++)t+=Math.floor(65536*(1+Math.random())).toString(16).substring(1);return t}var I={get(t){return"number"!=typeof t?this[t]||this.normal:t},highest:1e5,high:1e3,normal:0,low:-1e3,lowest:-1e5};const N=Symbol("listeningTo"),O=Symbol("emitterId");var R={on(t,e,n={}){this.listenTo(this,t,e,n)},once(t,e,n){this.listenTo(this,t,function(t,...n){t.off(),e.call(this,t,...n)},n)},off(t,e){this.stopListening(this,t,e)},listenTo(t,e,n,o={}){let i,r;this[N]||(this[N]={});const s=this[N];L(t)||D(t);const a=L(t);(i=s[a])||(i=s[a]={emitter:t,callbacks:{}}),(r=i.callbacks[e])||(r=i.callbacks[e]=[]),r.push(n),function(t,e){const n=j(t);if(n[e])return;let o=e,i=null;const r=[];for(;""!==o&&!n[o];)n[o]={callbacks:[],childEvents:[]},r.push(n[o]),i&&n[o].childEvents.push(i),i=o,o=o.substr(0,o.lastIndexOf(":"));if(""!==o){for(const t of r)t.callbacks=n[o].callbacks.slice();n[o].childEvents.push(i)}}(t,e);const c=V(t,e),l=I.get(o.priority),d={callback:n,priority:l};for(const t of c){let e=!1;for(let n=0;n<t.length;n++)if(t[n].priority<l){t.splice(n,0,d),e=!0;break}e||t.push(d)}},stopListening(t,e,n){const o=this[N];let i=t&&L(t);const r=o&&i&&o[i],s=r&&e&&r.callbacks[e];if(!(!o||t&&!r||e&&!s))if(n)z(t,e,n);else if(s){for(;n=s.pop();)z(t,e,n);delete r.callbacks[e]}else if(r){for(e in r.callbacks)this.stopListening(t,e);delete o[i]}else{for(i in o)this.stopListening(o[i].emitter);delete this[N]}},fire(t,...e){const n=t instanceof S?t:new S(this,t),o=n.name;let i=function t(e,n){let o;if(!e._events||!(o=e._events[n])||!o.callbacks.length)return n.indexOf(":")>-1?t(e,n.substr(0,n.lastIndexOf(":"))):null;return o.callbacks}(this,o);if(n.path.push(this),i){const t=[n,...e];i=Array.from(i);for(let e=0;e<i.length&&(i[e].callback.apply(this,t),n.off.called&&(delete n.off.called,z(this,o,i[e].callback)),!n.stop.called);e++);}if(this._delegations){const t=this._delegations.get(o),i=this._delegations.get("*");t&&F(t,n,e),i&&F(i,n,e)}return n.return},delegate(...t){return{to:(e,n)=>{this._delegations||(this._delegations=new Map);for(const o of t){const t=this._delegations.get(o);t?t.set(e,n):this._delegations.set(o,new Map([[e,n]]))}}}},stopDelegating(t,e){if(this._delegations)if(t)if(e){const n=this._delegations.get(t);n&&n.delete(e)}else this._delegations.delete(t);else this._delegations.clear()}};function D(t,e){t[O]||(t[O]=e||E())}function L(t){return t[O]}function j(t){return t._events||Object.defineProperty(t,"_events",{value:{}}),t._events}function V(t,e){const n=j(t)[e];if(!n)return[];let o=[n.callbacks];for(let e=0;e<n.childEvents.length;e++){const i=V(t,n.childEvents[e]);o=o.concat(i)}return o}function F(t,e,n){for(let[o,i]of t){i?"function"==typeof i&&(i=i(e.name)):i=e.name;const t=new S(e.source,i);t.path=[...e.path],o.fire(t,...n)}}function z(t,e,n){const o=V(t,e);for(const t of o)for(let e=0;e<t.length;e++)t[e].callback==n&&(t.splice(e,1),e--)}function B(t,...e){e.forEach(e=>{Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e)).forEach(n=>{if(n in t.prototype)return;const o=Object.getOwnPropertyDescriptor(e,n);o.enumerable=!1,Object.defineProperty(t.prototype,n,o)})})}function U(t,e){const n=Math.min(t.length,e.length);for(let o=0;o<n;o++)if(t[o]!=e[o])return o;return t.length==e.length?"same":t.length<e.length?"prefix":"extension"}var H=function(){this.__data__=[],this.size=0};var q=function(t,e){return t===e||t!=t&&e!=e};var W=function(t,e){for(var n=t.length;n--;)if(q(t[n][0],e))return n;return-1},Y=Array.prototype.splice;var G=function(t){var e=this.__data__,n=W(e,t);return!(n<0||(n==e.length-1?e.pop():Y.call(e,n,1),--this.size,0))};var $=function(t){var e=this.__data__,n=W(e,t);return n<0?void 0:e[n][1]};var Q=function(t){return W(this.__data__,t)>-1};var J=function(t,e){var n=this.__data__,o=W(n,t);return o<0?(++this.size,n.push([t,e])):n[o][1]=e,this};function K(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var o=t[e];this.set(o[0],o[1])}}K.prototype.clear=H,K.prototype.delete=G,K.prototype.get=$,K.prototype.has=Q,K.prototype.set=J;var Z=K;var X=function(){this.__data__=new Z,this.size=0};var tt=function(t){var e=this.__data__,n=e.delete(t);return this.size=e.size,n};var et=function(t){return this.__data__.get(t)};var nt=function(t){return this.__data__.has(t)};var ot=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)},it="[object AsyncFunction]",rt="[object Function]",st="[object GeneratorFunction]",at="[object Proxy]";var ct=function(t){if(!ot(t))return!1;var e=p(t);return e==rt||e==st||e==it||e==at},lt=o.a["__core-js_shared__"],dt=function(){var t=/[^.]+$/.exec(lt&&lt.keys&&lt.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();var ut=function(t){return!!dt&&dt in t},ht=Function.prototype.toString;var ft=function(t){if(null!=t){try{return ht.call(t)}catch(t){}try{return t+""}catch(t){}}return""},mt=/^\[object .+?Constructor\]$/,pt=Function.prototype,gt=Object.prototype,bt=pt.toString,wt=gt.hasOwnProperty,_t=RegExp("^"+bt.call(wt).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var kt=function(t){return!(!ot(t)||ut(t))&&(ct(t)?_t:mt).test(ft(t))};var vt=function(t,e){return null==t?void 0:t[e]};var yt=function(t,e){var n=vt(t,e);return kt(n)?n:void 0},xt=yt(o.a,"Map"),At=yt(Object,"create");var Ct=function(){this.__data__=At?At(null):{},this.size=0};var Tt=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},Mt="__lodash_hash_undefined__",Pt=Object.prototype.hasOwnProperty;var St=function(t){var e=this.__data__;if(At){var n=e[t];return n===Mt?void 0:n}return Pt.call(e,t)?e[t]:void 0},Et=Object.prototype.hasOwnProperty;var It=function(t){var e=this.__data__;return At?void 0!==e[t]:Et.call(e,t)},Nt="__lodash_hash_undefined__";var Ot=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=At&&void 0===e?Nt:e,this};function Rt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var o=t[e];this.set(o[0],o[1])}}Rt.prototype.clear=Ct,Rt.prototype.delete=Tt,Rt.prototype.get=St,Rt.prototype.has=It,Rt.prototype.set=Ot;var Dt=Rt;var Lt=function(){this.size=0,this.__data__={hash:new Dt,map:new(xt||Z),string:new Dt}};var jt=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t};var Vt=function(t,e){var n=t.__data__;return jt(e)?n["string"==typeof e?"string":"hash"]:n.map};var Ft=function(t){var e=Vt(this,t).delete(t);return this.size-=e?1:0,e};var zt=function(t){return Vt(this,t).get(t)};var Bt=function(t){return Vt(this,t).has(t)};var Ut=function(t,e){var n=Vt(this,t),o=n.size;return n.set(t,e),this.size+=n.size==o?0:1,this};function Ht(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var o=t[e];this.set(o[0],o[1])}}Ht.prototype.clear=Lt,Ht.prototype.delete=Ft,Ht.prototype.get=zt,Ht.prototype.has=Bt,Ht.prototype.set=Ut;var qt=Ht,Wt=200;var Yt=function(t,e){var n=this.__data__;if(n instanceof Z){var o=n.__data__;if(!xt||o.length<Wt-1)return o.push([t,e]),this.size=++n.size,this;n=this.__data__=new qt(o)}return n.set(t,e),this.size=n.size,this};function Gt(t){var e=this.__data__=new Z(t);this.size=e.size}Gt.prototype.clear=X,Gt.prototype.delete=tt,Gt.prototype.get=et,Gt.prototype.has=nt,Gt.prototype.set=Yt;var $t=Gt;var Qt=function(t,e){for(var n=-1,o=null==t?0:t.length;++n<o&&!1!==e(t[n],n,t););return t},Jt=function(){try{var t=yt(Object,"defineProperty");return t({},"",{}),t}catch(t){}}();var Kt=function(t,e,n){"__proto__"==e&&Jt?Jt(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n},Zt=Object.prototype.hasOwnProperty;var Xt=function(t,e,n){var o=t[e];Zt.call(t,e)&&q(o,n)&&(void 0!==n||e in t)||Kt(t,e,n)};var te=function(t,e,n,o){var i=!n;n||(n={});for(var r=-1,s=e.length;++r<s;){var a=e[r],c=o?o(n[a],t[a],a,n,t):void 0;void 0===c&&(c=t[a]),i?Kt(n,a,c):Xt(n,a,c)}return n};var ee=function(t,e){for(var n=-1,o=Array(t);++n<t;)o[n]=e(n);return o},ne="[object Arguments]";var oe=function(t){return w(t)&&p(t)==ne},ie=Object.prototype,re=ie.hasOwnProperty,se=ie.propertyIsEnumerable,ae=oe(function(){return arguments}())?oe:function(t){return w(t)&&re.call(t,"callee")&&!se.call(t,"callee")},ce=Array.isArray,le=n(6),de=9007199254740991,ue=/^(?:0|[1-9]\d*)$/;var he=function(t,e){var n=typeof t;return!!(e=null==e?de:e)&&("number"==n||"symbol"!=n&&ue.test(t))&&t>-1&&t%1==0&&t<e},fe=9007199254740991;var me=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=fe},pe={};pe["[object Float32Array]"]=pe["[object Float64Array]"]=pe["[object Int8Array]"]=pe["[object Int16Array]"]=pe["[object Int32Array]"]=pe["[object Uint8Array]"]=pe["[object Uint8ClampedArray]"]=pe["[object Uint16Array]"]=pe["[object Uint32Array]"]=!0,pe["[object Arguments]"]=pe["[object Array]"]=pe["[object ArrayBuffer]"]=pe["[object Boolean]"]=pe["[object DataView]"]=pe["[object Date]"]=pe["[object Error]"]=pe["[object Function]"]=pe["[object Map]"]=pe["[object Number]"]=pe["[object Object]"]=pe["[object RegExp]"]=pe["[object Set]"]=pe["[object String]"]=pe["[object WeakMap]"]=!1;var ge=function(t){return w(t)&&me(t.length)&&!!pe[p(t)]};var be=function(t){return function(e){return t(e)}},we=n(5),_e=we.a&&we.a.isTypedArray,ke=_e?be(_e):ge,ve=Object.prototype.hasOwnProperty;var ye=function(t,e){var n=ce(t),o=!n&&ae(t),i=!n&&!o&&Object(le.a)(t),r=!n&&!o&&!i&&ke(t),s=n||o||i||r,a=s?ee(t.length,String):[],c=a.length;for(var l in t)!e&&!ve.call(t,l)||s&&("length"==l||i&&("offset"==l||"parent"==l)||r&&("buffer"==l||"byteLength"==l||"byteOffset"==l)||he(l,c))||a.push(l);return a},xe=Object.prototype;var Ae=function(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||xe)},Ce=g(Object.keys,Object),Te=Object.prototype.hasOwnProperty;var Me=function(t){if(!Ae(t))return Ce(t);var e=[];for(var n in Object(t))Te.call(t,n)&&"constructor"!=n&&e.push(n);return e};var Pe=function(t){return null!=t&&me(t.length)&&!ct(t)};var Se=function(t){return Pe(t)?ye(t):Me(t)};var Ee=function(t,e){return t&&te(e,Se(e),t)};var Ie=function(t){var e=[];if(null!=t)for(var n in Object(t))e.push(n);return e},Ne=Object.prototype.hasOwnProperty;var Oe=function(t){if(!ot(t))return Ie(t);var e=Ae(t),n=[];for(var o in t)("constructor"!=o||!e&&Ne.call(t,o))&&n.push(o);return n};var Re=function(t){return Pe(t)?ye(t,!0):Oe(t)};var De=function(t,e){return t&&te(e,Re(e),t)},Le=n(19);var je=function(t,e){var n=-1,o=t.length;for(e||(e=Array(o));++n<o;)e[n]=t[n];return e};var Ve=function(t,e){for(var n=-1,o=null==t?0:t.length,i=0,r=[];++n<o;){var s=t[n];e(s,n,t)&&(r[i++]=s)}return r};var Fe=function(){return[]},ze=Object.prototype.propertyIsEnumerable,Be=Object.getOwnPropertySymbols,Ue=Be?function(t){return null==t?[]:(t=Object(t),Ve(Be(t),function(e){return ze.call(t,e)}))}:Fe;var He=function(t,e){return te(t,Ue(t),e)};var qe=function(t,e){for(var n=-1,o=e.length,i=t.length;++n<o;)t[i+n]=e[n];return t},We=Object.getOwnPropertySymbols?function(t){for(var e=[];t;)qe(e,Ue(t)),t=b(t);return e}:Fe;var Ye=function(t,e){return te(t,We(t),e)};var Ge=function(t,e,n){var o=e(t);return ce(t)?o:qe(o,n(t))};var $e=function(t){return Ge(t,Se,Ue)};var Qe=function(t){return Ge(t,Re,We)},Je=yt(o.a,"DataView"),Ke=yt(o.a,"Promise"),Ze=yt(o.a,"Set"),Xe=yt(o.a,"WeakMap"),tn=ft(Je),en=ft(xt),nn=ft(Ke),on=ft(Ze),rn=ft(Xe),sn=p;(Je&&"[object DataView]"!=sn(new Je(new ArrayBuffer(1)))||xt&&"[object Map]"!=sn(new xt)||Ke&&"[object Promise]"!=sn(Ke.resolve())||Ze&&"[object Set]"!=sn(new Ze)||Xe&&"[object WeakMap]"!=sn(new Xe))&&(sn=function(t){var e=p(t),n="[object Object]"==e?t.constructor:void 0,o=n?ft(n):"";if(o)switch(o){case tn:return"[object DataView]";case en:return"[object Map]";case nn:return"[object Promise]";case on:return"[object Set]";case rn:return"[object WeakMap]"}return e});var an=sn,cn=Object.prototype.hasOwnProperty;var ln=function(t){var e=t.length,n=new t.constructor(e);return e&&"string"==typeof t[0]&&cn.call(t,"index")&&(n.index=t.index,n.input=t.input),n},dn=o.a.Uint8Array;var un=function(t){var e=new t.constructor(t.byteLength);return new dn(e).set(new dn(t)),e};var hn=function(t,e){var n=e?un(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.byteLength)},fn=/\w*$/;var mn=function(t){var e=new t.constructor(t.source,fn.exec(t));return e.lastIndex=t.lastIndex,e},pn=i?i.prototype:void 0,gn=pn?pn.valueOf:void 0;var bn=function(t){return gn?Object(gn.call(t)):{}};var wn=function(t,e){var n=e?un(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.length)},_n="[object Boolean]",kn="[object Date]",vn="[object Map]",yn="[object Number]",xn="[object RegExp]",An="[object Set]",Cn="[object String]",Tn="[object Symbol]",Mn="[object ArrayBuffer]",Pn="[object DataView]",Sn="[object Float32Array]",En="[object Float64Array]",In="[object Int8Array]",Nn="[object Int16Array]",On="[object Int32Array]",Rn="[object Uint8Array]",Dn="[object Uint8ClampedArray]",Ln="[object Uint16Array]",jn="[object Uint32Array]";var Vn=function(t,e,n){var o=t.constructor;switch(e){case Mn:return un(t);case _n:case kn:return new o(+t);case Pn:return hn(t,n);case Sn:case En:case In:case Nn:case On:case Rn:case Dn:case Ln:case jn:return wn(t,n);case vn:return new o;case yn:case Cn:return new o(t);case xn:return mn(t);case An:return new o;case Tn:return bn(t)}},Fn=Object.create,zn=function(){function t(){}return function(e){if(!ot(e))return{};if(Fn)return Fn(e);t.prototype=e;var n=new t;return t.prototype=void 0,n}}();var Bn=function(t){return"function"!=typeof t.constructor||Ae(t)?{}:zn(b(t))},Un="[object Map]";var Hn=function(t){return w(t)&&an(t)==Un},qn=we.a&&we.a.isMap,Wn=qn?be(qn):Hn,Yn="[object Set]";var Gn=function(t){return w(t)&&an(t)==Yn},$n=we.a&&we.a.isSet,Qn=$n?be($n):Gn,Jn=1,Kn=2,Zn=4,Xn="[object Arguments]",to="[object Function]",eo="[object GeneratorFunction]",no="[object Object]",oo={};oo[Xn]=oo["[object Array]"]=oo["[object ArrayBuffer]"]=oo["[object DataView]"]=oo["[object Boolean]"]=oo["[object Date]"]=oo["[object Float32Array]"]=oo["[object Float64Array]"]=oo["[object Int8Array]"]=oo["[object Int16Array]"]=oo["[object Int32Array]"]=oo["[object Map]"]=oo["[object Number]"]=oo[no]=oo["[object RegExp]"]=oo["[object Set]"]=oo["[object String]"]=oo["[object Symbol]"]=oo["[object Uint8Array]"]=oo["[object Uint8ClampedArray]"]=oo["[object Uint16Array]"]=oo["[object Uint32Array]"]=!0,oo["[object Error]"]=oo[to]=oo["[object WeakMap]"]=!1;var io=function t(e,n,o,i,r,s){var a,c=n&Jn,l=n&Kn,d=n&Zn;if(o&&(a=r?o(e,i,r,s):o(e)),void 0!==a)return a;if(!ot(e))return e;var u=ce(e);if(u){if(a=ln(e),!c)return je(e,a)}else{var h=an(e),f=h==to||h==eo;if(Object(le.a)(e))return Object(Le.a)(e,c);if(h==no||h==Xn||f&&!r){if(a=l||f?{}:Bn(e),!c)return l?Ye(e,De(a,e)):He(e,Ee(a,e))}else{if(!oo[h])return r?e:{};a=Vn(e,h,c)}}s||(s=new $t);var m=s.get(e);if(m)return m;if(s.set(e,a),Qn(e))return e.forEach(function(i){a.add(t(i,n,o,i,e,s))}),a;if(Wn(e))return e.forEach(function(i,r){a.set(r,t(i,n,o,r,e,s))}),a;var p=d?l?Qe:$e:l?keysIn:Se,g=u?void 0:p(e);return Qt(g||e,function(i,r){g&&(i=e[r=i]),Xt(a,r,t(i,n,o,r,e,s))}),a},ro=4;var so=function(t){return io(t,ro)};class ao{constructor(){this.parent=null}get index(){let t;if(!this.parent)return null;if(-1==(t=this.parent.getChildIndex(this)))throw new M.b("view-node-not-found-in-parent: The node's parent does not contain this node.");return t}get nextSibling(){const t=this.index;return null!==t&&this.parent.getChild(t+1)||null}get previousSibling(){const t=this.index;return null!==t&&this.parent.getChild(t-1)||null}get root(){let t=this;for(;t.parent;)t=t.parent;return t}get document(){return this.parent instanceof ao?this.parent.document:null}getPath(){const t=[];let e=this;for(;e.parent;)t.unshift(e.index),e=e.parent;return t}getAncestors(t={includeSelf:!1,parentFirst:!1}){const e=[];let n=t.includeSelf?this:this.parent;for(;n;)e[t.parentFirst?"push":"unshift"](n),n=n.parent;return e}getCommonAncestor(t,e={}){const n=this.getAncestors(e),o=t.getAncestors(e);let i=0;for(;n[i]==o[i]&&n[i];)i++;return 0===i?null:n[i-1]}isBefore(t){if(this==t)return!1;if(this.root!==t.root)return!1;const e=this.getPath(),n=t.getPath(),o=U(e,n);switch(o){case"prefix":return!0;case"extension":return!1;default:return e[o]<n[o]}}isAfter(t){return this!=t&&(this.root===t.root&&!this.isBefore(t))}_remove(){this.parent._removeChildren(this.index)}_fireChange(t,e){this.fire("change:"+t,e),this.parent&&this.parent._fireChange(t,e)}toJSON(){const t=so(this);return delete t.parent,t}is(t){return"node"==t}}B(ao,R);class co extends ao{constructor(t){super(),this._textData=t}is(t){return"text"==t||super.is(t)}get data(){return this._textData}get _data(){return this.data}set _data(t){this._fireChange("text",this),this._textData=t}isSimilar(t){return t instanceof co&&(this===t||this.data===t.data)}_clone(){return new co(this.data)}}class lo{constructor(t,e,n){if(this.textNode=t,e<0||e>t.data.length)throw new M.b("view-textproxy-wrong-offsetintext: Given offsetInText value is incorrect.");if(n<0||e+n>t.data.length)throw new M.b("view-textproxy-wrong-length: Given length value is incorrect.");this.data=t.data.substring(e,e+n),this.offsetInText=e}get offsetSize(){return this.data.length}get isPartial(){return this.data.length!==this.textNode.data.length}get parent(){return this.textNode.parent}get root(){return this.textNode.root}get document(){return this.textNode.document}is(t){return"textProxy"==t}getAncestors(t={includeSelf:!1,parentFirst:!1}){const e=[];let n=t.includeSelf?this.textNode:this.parent;for(;null!==n;)e[t.parentFirst?"push":"unshift"](n),n=n.parent;return e}}function uo(t){const e=new Map;for(const n in t)e.set(n,t[n]);return e}function ho(t){return!(!t||!t[Symbol.iterator])}class fo{constructor(...t){this._patterns=[],this.add(...t)}add(...t){for(let e of t)("string"==typeof e||e instanceof RegExp)&&(e={name:e}),e.classes&&("string"==typeof e.classes||e.classes instanceof RegExp)&&(e.classes=[e.classes]),this._patterns.push(e)}match(...t){for(const e of t)for(const t of this._patterns){const n=mo(e,t);if(n)return{element:e,pattern:t,match:n}}return null}matchAll(...t){const e=[];for(const n of t)for(const t of this._patterns){const o=mo(n,t);o&&e.push({element:n,pattern:t,match:o})}return e.length>0?e:null}getElementName(){if(1!==this._patterns.length)return null;const t=this._patterns[0],e=t.name;return"function"==typeof t||!e||e instanceof RegExp?null:e}}function mo(t,e){if("function"==typeof e)return e(t);const n={};return e.name&&(n.name=function(t,e){if(t instanceof RegExp)return t.test(e);return t===e}(e.name,t.name),!n.name)?null:e.attributes&&(n.attributes=function(t,e){const n=[];for(const o in t){const i=t[o];if(!e.hasAttribute(o))return null;{const t=e.getAttribute(o);if(!0===i)n.push(o);else if(i instanceof RegExp){if(!i.test(t))return null;n.push(o)}else{if(t!==i)return null;n.push(o)}}}return n}(e.attributes,t),!n.attributes)?null:!(e.classes&&(n.classes=function(t,e){const n=[];for(const o of t)if(o instanceof RegExp){const t=e.getClassNames();for(const e of t)o.test(e)&&n.push(e);if(0===n.length)return null}else{if(!e.hasClass(o))return null;n.push(o)}return n}(e.classes,t),!n.classes))&&(!(e.styles&&(n.styles=function(t,e){const n=[];for(const o in t){const i=t[o];if(!e.hasStyle(o))return null;{const t=e.getStyle(o);if(i instanceof RegExp){if(!i.test(t))return null;n.push(o)}else{if(t!==i)return null;n.push(o)}}}return n}(e.styles,t),!n.styles))&&n)}class po extends ao{constructor(t,e,n){if(super(),this.name=t,this._attrs=function(t){t=C(t)?uo(t):new Map(t);for(const[e,n]of t)null===n?t.delete(e):"string"!=typeof n&&t.set(e,String(n));return t}(e),this._children=[],n&&this._insertChild(0,n),this._classes=new Set,this._attrs.has("class")){const t=this._attrs.get("class");bo(this._classes,t),this._attrs.delete("class")}this._styles=new Map,this._attrs.has("style")&&(go(this._styles,this._attrs.get("style")),this._attrs.delete("style")),this._customProperties=new Map}get childCount(){return this._children.length}get isEmpty(){return 0===this._children.length}is(t,e=null){return e?"element"==t&&e==this.name:"element"==t||t==this.name||super.is(t)}getChild(t){return this._children[t]}getChildIndex(t){return this._children.indexOf(t)}getChildren(){return this._children[Symbol.iterator]()}*getAttributeKeys(){this._classes.size>0&&(yield"class"),this._styles.size>0&&(yield"style");for(const t of this._attrs.keys())yield t}*getAttributes(){yield*this._attrs.entries(),this._classes.size>0&&(yield["class",this.getAttribute("class")]),this._styles.size>0&&(yield["style",this.getAttribute("style")])}getAttribute(t){if("class"==t)return this._classes.size>0?[...this._classes].join(" "):void 0;if("style"!=t)return this._attrs.get(t);if(this._styles.size>0){let t="";for(const[e,n]of this._styles)t+=`${e}:${n};`;return t}}hasAttribute(t){return"class"==t?this._classes.size>0:"style"==t?this._styles.size>0:this._attrs.has(t)}isSimilar(t){if(!(t instanceof po))return!1;if(this===t)return!0;if(this.name!=t.name)return!1;if(this._attrs.size!==t._attrs.size||this._classes.size!==t._classes.size||this._styles.size!==t._styles.size)return!1;for(const[e,n]of this._attrs)if(!t._attrs.has(e)||t._attrs.get(e)!==n)return!1;for(const e of this._classes)if(!t._classes.has(e))return!1;for(const[e,n]of this._styles)if(!t._styles.has(e)||t._styles.get(e)!==n)return!1;return!0}hasClass(...t){for(const e of t)if(!this._classes.has(e))return!1;return!0}getClassNames(){return this._classes.keys()}getStyle(t){return this._styles.get(t)}getStyleNames(){return this._styles.keys()}hasStyle(...t){for(const e of t)if(!this._styles.has(e))return!1;return!0}findAncestor(...t){const e=new fo(...t);let n=this.parent;for(;n;){if(e.match(n))return n;n=n.parent}return null}getCustomProperty(t){return this._customProperties.get(t)}*getCustomProperties(){yield*this._customProperties.entries()}getIdentity(){const t=Array.from(this._classes).sort().join(","),e=Array.from(this._styles).map(t=>`${t[0]}:${t[1]}`).sort().join(";"),n=Array.from(this._attrs).map(t=>`${t[0]}="${t[1]}"`).sort().join(" ");return this.name+(""==t?"":` class="${t}"`)+(""==e?"":` style="${e}"`)+(""==n?"":` ${n}`)}_clone(t=!1){const e=[];if(t)for(const n of this.getChildren())e.push(n._clone(t));const n=new this.constructor(this.name,this._attrs,e);return n._classes=new Set(this._classes),n._styles=new Map(this._styles),n._customProperties=new Map(this._customProperties),n.getFillerOffset=this.getFillerOffset,n}_appendChild(t){return this._insertChild(this.childCount,t)}_insertChild(t,e){this._fireChange("children",this);let n=0;const o=function(t){if("string"==typeof t)return[new co(t)];ho(t)||(t=[t]);return Array.from(t).map(t=>"string"==typeof t?new co(t):t instanceof lo?new co(t.data):t)}(e);for(const e of o)null!==e.parent&&e._remove(),e.parent=this,this._children.splice(t,0,e),t++,n++;return n}_removeChildren(t,e=1){this._fireChange("children",this);for(let n=t;n<t+e;n++)this._children[n].parent=null;return this._children.splice(t,e)}_setAttribute(t,e){e=String(e),this._fireChange("attributes",this),"class"==t?bo(this._classes,e):"style"==t?go(this._styles,e):this._attrs.set(t,e)}_removeAttribute(t){return this._fireChange("attributes",this),"class"==t?this._classes.size>0&&(this._classes.clear(),!0):"style"==t?this._styles.size>0&&(this._styles.clear(),!0):this._attrs.delete(t)}_addClass(t){this._fireChange("attributes",this),(t=Array.isArray(t)?t:[t]).forEach(t=>this._classes.add(t))}_removeClass(t){this._fireChange("attributes",this),(t=Array.isArray(t)?t:[t]).forEach(t=>this._classes.delete(t))}_setStyle(t,e){if(this._fireChange("attributes",this),C(t)){const e=Object.keys(t);for(const n of e)this._styles.set(n,t[n])}else this._styles.set(t,e)}_removeStyle(t){this._fireChange("attributes",this),(t=Array.isArray(t)?t:[t]).forEach(t=>this._styles.delete(t))}_setCustomProperty(t,e){this._customProperties.set(t,e)}_removeCustomProperty(t){return this._customProperties.delete(t)}}function go(t,e){let n=null,o=0,i=0,r=null;if(t.clear(),""!==e){";"!=e.charAt(e.length-1)&&(e+=";");for(let s=0;s<e.length;s++){const a=e.charAt(s);if(null===n)switch(a){case":":r||(r=e.substr(o,s-o),i=s+1);break;case'"':case"'":n=a;break;case";":{const n=e.substr(i,s-i);r&&t.set(r.trim(),n.trim()),r=null,o=s+1;break}}else a===n&&(n=null)}}}function bo(t,e){const n=e.split(/\s+/);t.clear(),n.forEach(e=>t.add(e))}class wo extends po{constructor(t,e,n){super(t,e,n),this.getFillerOffset=_o}is(t,e=null){return e?"containerElement"==t&&e==this.name||super.is(t,e):"containerElement"==t||super.is(t)}}function _o(){const t=[...this.getChildren()],e=t[this.childCount-1];if(e&&e.is("element","br"))return this.childCount;for(const e of t)if(!e.is("uiElement"))return null;return this.childCount}var ko=function(t){return t};var vo=function(t,e,n){switch(n.length){case 0:return t.call(e);case 1:return t.call(e,n[0]);case 2:return t.call(e,n[0],n[1]);case 3:return t.call(e,n[0],n[1],n[2])}return t.apply(e,n)},yo=Math.max;var xo=function(t,e,n){return e=yo(void 0===e?t.length-1:e,0),function(){for(var o=arguments,i=-1,r=yo(o.length-e,0),s=Array(r);++i<r;)s[i]=o[e+i];i=-1;for(var a=Array(e+1);++i<e;)a[i]=o[i];return a[e]=n(s),vo(t,this,a)}};var Ao=function(t){return function(){return t}},Co=Jt?function(t,e){return Jt(t,"toString",{configurable:!0,enumerable:!1,value:Ao(e),writable:!0})}:ko,To=800,Mo=16,Po=Date.now;var So=function(t){var e=0,n=0;return function(){var o=Po(),i=Mo-(o-n);if(n=o,i>0){if(++e>=To)return arguments[0]}else e=0;return t.apply(void 0,arguments)}}(Co);var Eo=function(t,e){return So(xo(t,e,ko),t+"")};var Io=function(t,e,n){if(!ot(n))return!1;var o=typeof e;return!!("number"==o?Pe(n)&&he(e,n.length):"string"==o&&e in n)&&q(n[e],t)};var No=function(t){return Eo(function(e,n){var o=-1,i=n.length,r=i>1?n[i-1]:void 0,s=i>2?n[2]:void 0;for(r=t.length>3&&"function"==typeof r?(i--,r):void 0,s&&Io(n[0],n[1],s)&&(r=i<3?void 0:r,i=1),e=Object(e);++o<i;){var a=n[o];a&&t(e,a,o,r)}return e})}(function(t,e){te(e,Re(e),t)});const Oo=Symbol("observableProperties"),Ro=Symbol("boundObservables"),Do=Symbol("boundProperties"),Lo={set(t,e){if(ot(t))return void Object.keys(t).forEach(e=>{this.set(e,t[e])},this);Vo(this);const n=this[Oo];if(t in this&&!n.has(t))throw new M.b("observable-set-cannot-override: Cannot override an existing property.");Object.defineProperty(this,t,{enumerable:!0,configurable:!0,get:()=>n.get(t),set(e){const o=n.get(t);let i=this.fire("set:"+t,t,e,o);void 0===i&&(i=e),o===i&&n.has(t)||(n.set(t,i),this.fire("change:"+t,t,i,o))}}),this[t]=e},bind(...t){if(!t.length||!Bo(t))throw new M.b("observable-bind-wrong-properties: All properties must be strings.");if(new Set(t).size!==t.length)throw new M.b("observable-bind-duplicate-properties: Properties must be unique.");Vo(this);const e=this[Do];t.forEach(t=>{if(e.has(t))throw new M.b("observable-bind-rebind: Cannot bind the same property more that once.")});const n=new Map;return t.forEach(t=>{const o={property:t,to:[]};e.set(t,o),n.set(t,o)}),{to:Fo,toMany:zo,_observable:this,_bindProperties:t,_to:[],_bindings:n}},unbind(...t){if(!(Oo in this))return;const e=this[Do],n=this[Ro];if(t.length){if(!Bo(t))throw new M.b("observable-unbind-wrong-properties: Properties must be strings.");t.forEach(t=>{const o=e.get(t);if(!o)return;let i,r,s,a;o.to.forEach(t=>{i=t[0],r=t[1],s=n.get(i),(a=s[r]).delete(o),a.size||delete s[r],Object.keys(s).length||(n.delete(i),this.stopListening(i,"change"))}),e.delete(t)})}else n.forEach((t,e)=>{this.stopListening(e,"change")}),n.clear(),e.clear()},decorate(t){const e=this[t];if(!e)throw new M.b("observablemixin-cannot-decorate-undefined: Cannot decorate an undefined method.",{object:this,methodName:t});this.on(t,(t,n)=>{t.return=e.apply(this,n)}),this[t]=function(...e){return this.fire(t,e)}}};No(Lo,R);var jo=Lo;function Vo(t){Oo in t||(Object.defineProperty(t,Oo,{value:new Map}),Object.defineProperty(t,Ro,{value:new Map}),Object.defineProperty(t,Do,{value:new Map}))}function Fo(...t){const e=function(...t){if(!t.length)throw new M.b("observable-bind-to-parse-error: Invalid argument syntax in `to()`.");const e={to:[]};let n;"function"==typeof t[t.length-1]&&(e.callback=t.pop());return t.forEach(t=>{if("string"==typeof t)n.properties.push(t);else{if("object"!=typeof t)throw new M.b("observable-bind-to-parse-error: Invalid argument syntax in `to()`.");n={observable:t,properties:[]},e.to.push(n)}}),e}(...t),n=Array.from(this._bindings.keys()),o=n.length;if(!e.callback&&e.to.length>1)throw new M.b("observable-bind-to-no-callback: Binding multiple observables only possible with callback.");if(o>1&&e.callback)throw new M.b("observable-bind-to-extra-callback: Cannot bind multiple properties and use a callback in one binding.");e.to.forEach(t=>{if(t.properties.length&&t.properties.length!==o)throw new M.b("observable-bind-to-properties-length: The number of properties must match.");t.properties.length||(t.properties=this._bindProperties)}),this._to=e.to,e.callback&&(this._bindings.get(n[0]).callback=e.callback),function(t,e){e.forEach(e=>{const n=t[Ro];let o;n.get(e.observable)||t.listenTo(e.observable,"change",(i,r)=>{(o=n.get(e.observable)[r])&&o.forEach(e=>{Uo(t,e.property)})})})}(this._observable,this._to),function(t){let e;t._bindings.forEach((n,o)=>{t._to.forEach(i=>{e=i.properties[n.callback?0:t._bindProperties.indexOf(o)],n.to.push([i.observable,e]),function(t,e,n,o){const i=t[Ro],r=i.get(n),s=r||{};s[o]||(s[o]=new Set);s[o].add(e),r||i.set(n,s)}(t._observable,n,i.observable,e)})})}(this),this._bindProperties.forEach(t=>{Uo(this._observable,t)})}function zo(t,e,n){if(this._bindings.size>1)throw new M.b("observable-bind-to-many-not-one-binding: Cannot bind multiple properties with toMany().");this.to(...function(t,e){const n=t.map(t=>[t,e]);return Array.prototype.concat.apply([],n)}(t,e),n)}function Bo(t){return t.every(t=>"string"==typeof t)}function Uo(t,e){const n=t[Do].get(e);let o;o=n.callback?n.callback.apply(t,n.to.map(t=>t[0][t[1]])):(o=n.to[0])[0][o[1]],t.hasOwnProperty(e)?t[e]=o:t.set(e,o)}const Ho=Symbol("document");class qo extends wo{constructor(t,e,n){super(t,e,n),this.set("isReadOnly",!1),this.set("isFocused",!1)}get document(){return this.getCustomProperty(Ho)}set _document(t){if(this.getCustomProperty(Ho))throw new M.b("view-editableelement-document-already-set: View document is already set.");this._setCustomProperty(Ho,t),this.bind("isReadOnly").to(t),this.bind("isFocused").to(t,"isFocused",e=>e&&t.selection.editableElement==this),this.listenTo(t.selection,"change",()=>{this.isFocused=t.isFocused&&t.selection.editableElement==this})}}B(qo,jo);const Wo=Symbol("rootName");class Yo extends qo{constructor(t){super(t),this.rootName="main"}is(t,e=null){return e?"rootElement"==t&&e==this.name||super.is(t,e):"rootElement"==t||super.is(t)}get rootName(){return this.getCustomProperty(Wo)}set rootName(t){this._setCustomProperty(Wo,t)}set _name(t){this.name=t}}class Go{constructor(t={}){if(!t.boundaries&&!t.startPosition)throw new M.b("view-tree-walker-no-start-position: Neither boundaries nor starting position have been defined.");if(t.direction&&"forward"!=t.direction&&"backward"!=t.direction)throw new M.b("view-tree-walker-unknown-direction: Only `backward` and `forward` direction allowed.",{direction:t.direction});this.boundaries=t.boundaries||null,t.startPosition?this.position=$o.createFromPosition(t.startPosition):this.position=$o.createFromPosition(t.boundaries["backward"==t.direction?"end":"start"]),this.direction=t.direction||"forward",this.singleCharacters=!!t.singleCharacters,this.shallow=!!t.shallow,this.ignoreElementEnd=!!t.ignoreElementEnd,this._boundaryStartParent=this.boundaries?this.boundaries.start.parent:null,this._boundaryEndParent=this.boundaries?this.boundaries.end.parent:null}[Symbol.iterator](){return this}skip(t){let e,n,o;do{o=this.position,({done:e,value:n}=this.next())}while(!e&&t(n));e||(this.position=o)}next(){return"forward"==this.direction?this._next():this._previous()}_next(){let t=$o.createFromPosition(this.position);const e=this.position,n=t.parent;if(null===n.parent&&t.offset===n.childCount)return{done:!0};if(n===this._boundaryEndParent&&t.offset==this.boundaries.end.offset)return{done:!0};let o;if(n instanceof co){if(t.isAtEnd)return this.position=$o.createAfter(n),this._next();o=n.data[t.offset]}else o=n.getChild(t.offset);if(o instanceof po)return this.shallow?t.offset++:t=new $o(o,0),this.position=t,this._formatReturnValue("elementStart",o,e,t,1);if(o instanceof co){if(this.singleCharacters)return t=new $o(o,0),this.position=t,this._next();{let n,i=o.data.length;return o==this._boundaryEndParent?(i=this.boundaries.end.offset,n=new lo(o,0,i),t=$o.createAfter(n)):(n=new lo(o,0,o.data.length),t.offset++),this.position=t,this._formatReturnValue("text",n,e,t,i)}}if("string"==typeof o){let o;if(this.singleCharacters)o=1;else{o=(n===this._boundaryEndParent?this.boundaries.end.offset:n.data.length)-t.offset}const i=new lo(n,t.offset,o);return t.offset+=o,this.position=t,this._formatReturnValue("text",i,e,t,o)}return t=$o.createAfter(n),this.position=t,this.ignoreElementEnd?this._next():this._formatReturnValue("elementEnd",n,e,t)}_previous(){let t=$o.createFromPosition(this.position);const e=this.position,n=t.parent;if(null===n.parent&&0===t.offset)return{done:!0};if(n==this._boundaryStartParent&&t.offset==this.boundaries.start.offset)return{done:!0};let o;if(n instanceof co){if(t.isAtStart)return this.position=$o.createBefore(n),this._previous();o=n.data[t.offset-1]}else o=n.getChild(t.offset-1);if(o instanceof po)return this.shallow?(t.offset--,this.position=t,this._formatReturnValue("elementStart",o,e,t,1)):(t=new $o(o,o.childCount),this.position=t,this.ignoreElementEnd?this._previous():this._formatReturnValue("elementEnd",o,e,t));if(o instanceof co){if(this.singleCharacters)return t=new $o(o,o.data.length),this.position=t,this._previous();{let n,i=o.data.length;if(o==this._boundaryStartParent){const e=this.boundaries.start.offset;i=(n=new lo(o,e,o.data.length-e)).data.length,t=$o.createBefore(n)}else n=new lo(o,0,o.data.length),t.offset--;return this.position=t,this._formatReturnValue("text",n,e,t,i)}}if("string"==typeof o){let o;if(this.singleCharacters)o=1;else{const e=n===this._boundaryStartParent?this.boundaries.start.offset:0;o=t.offset-e}t.offset-=o;const i=new lo(n,t.offset,o);return this.position=t,this._formatReturnValue("text",i,e,t,o)}return t=$o.createBefore(n),this.position=t,this._formatReturnValue("elementStart",n,e,t,1)}_formatReturnValue(t,e,n,o,i){return e instanceof lo&&(e.offsetInText+e.data.length==e.textNode.data.length&&("forward"!=this.direction||this.boundaries&&this.boundaries.end.isEqual(this.position)?n=$o.createAfter(e.textNode):(o=$o.createAfter(e.textNode),this.position=o)),0===e.offsetInText&&("backward"!=this.direction||this.boundaries&&this.boundaries.start.isEqual(this.position)?n=$o.createBefore(e.textNode):(o=$o.createBefore(e.textNode),this.position=o))),{done:!1,value:{type:t,item:e,previousPosition:n,nextPosition:o,length:i}}}}class $o{constructor(t,e){this.parent=t,this.offset=e}get nodeAfter(){return this.parent.is("text")?null:this.parent.getChild(this.offset)||null}get nodeBefore(){return this.parent.is("text")?null:this.parent.getChild(this.offset-1)||null}get isAtStart(){return 0===this.offset}get isAtEnd(){const t=this.parent.is("text")?this.parent.data.length:this.parent.childCount;return this.offset===t}get root(){return this.parent.root}get editableElement(){let t=this.parent;for(;!(t instanceof qo);){if(!t.parent)return null;t=t.parent}return t}getShiftedBy(t){const e=$o.createFromPosition(this),n=e.offset+t;return e.offset=n<0?0:n,e}getLastMatchingPosition(t,e={}){e.startPosition=this;const n=new Go(e);return n.skip(t),n.position}getAncestors(){return this.parent.is("documentFragment")?[this.parent]:this.parent.getAncestors({includeSelf:!0})}getCommonAncestor(t){const e=this.getAncestors(),n=t.getAncestors();let o=0;for(;e[o]==n[o]&&e[o];)o++;return 0===o?null:e[o-1]}isEqual(t){return this.parent==t.parent&&this.offset==t.offset}isBefore(t){return"before"==this.compareWith(t)}isAfter(t){return"after"==this.compareWith(t)}compareWith(t){if(this.root!==t.root)return"different";if(this.isEqual(t))return"same";const e=this.parent.is("node")?this.parent.getPath():[],n=t.parent.is("node")?t.parent.getPath():[];e.push(this.offset),n.push(t.offset);const o=U(e,n);switch(o){case"prefix":return"before";case"extension":return"after";default:return e[o]<n[o]?"before":"after"}}static createAt(t,e){if(t instanceof $o)return this.createFromPosition(t);{const n=t;if("end"==e)e=n.is("text")?n.data.length:n.childCount;else{if("before"==e)return this.createBefore(n);if("after"==e)return this.createAfter(n);e||(e=0)}return new $o(n,e)}}static createAfter(t){if(t.is("textProxy"))return new $o(t.textNode,t.offsetInText+t.data.length);if(!t.parent)throw new M.b("view-position-after-root: You can not make position after root.",{root:t});return new $o(t.parent,t.index+1)}static createBefore(t){if(t.is("textProxy"))return new $o(t.textNode,t.offsetInText);if(!t.parent)throw new M.b("view-position-before-root: You can not make position before root.",{root:t});return new $o(t.parent,t.index)}static createFromPosition(t){return new this(t.parent,t.offset)}}class Qo{constructor(t,e=null){this.start=$o.createFromPosition(t),this.end=e?$o.createFromPosition(e):$o.createFromPosition(t)}*[Symbol.iterator](){yield*new Go({boundaries:this,ignoreElementEnd:!0})}get isCollapsed(){return this.start.isEqual(this.end)}get isFlat(){return this.start.parent===this.end.parent}get root(){return this.start.root}getEnlarged(){let t=this.start.getLastMatchingPosition(Jo,{direction:"backward"}),e=this.end.getLastMatchingPosition(Jo);return t.parent.is("text")&&t.isAtStart&&(t=$o.createBefore(t.parent)),e.parent.is("text")&&e.isAtEnd&&(e=$o.createAfter(e.parent)),new Qo(t,e)}getTrimmed(){let t=this.start.getLastMatchingPosition(Jo);if(t.isAfter(this.end)||t.isEqual(this.end))return new Qo(t,t);let e=this.end.getLastMatchingPosition(Jo,{direction:"backward"});const n=t.nodeAfter,o=e.nodeBefore;return n&&n.is("text")&&(t=new $o(n,0)),o&&o.is("text")&&(e=new $o(o,o.data.length)),new Qo(t,e)}isEqual(t){return this==t||this.start.isEqual(t.start)&&this.end.isEqual(t.end)}containsPosition(t){return t.isAfter(this.start)&&t.isBefore(this.end)}containsRange(t,e=!1){t.isCollapsed&&(e=!1);const n=this.containsPosition(t.start)||e&&this.start.isEqual(t.start),o=this.containsPosition(t.end)||e&&this.end.isEqual(t.end);return n&&o}getDifference(t){const e=[];return this.isIntersecting(t)?(this.containsPosition(t.start)&&e.push(new Qo(this.start,t.start)),this.containsPosition(t.end)&&e.push(new Qo(t.end,this.end))):e.push(Qo.createFromRange(this)),e}getIntersection(t){if(this.isIntersecting(t)){let e=this.start,n=this.end;return this.containsPosition(t.start)&&(e=t.start),this.containsPosition(t.end)&&(n=t.end),new Qo(e,n)}return null}getWalker(t={}){return t.boundaries=this,new Go(t)}getCommonAncestor(){return this.start.getCommonAncestor(this.end)}*getItems(t={}){t.boundaries=this,t.ignoreElementEnd=!0;const e=new Go(t);for(const t of e)yield t.item}*getPositions(t={}){t.boundaries=this;const e=new Go(t);yield e.position;for(const t of e)yield t.nextPosition}isIntersecting(t){return this.start.isBefore(t.end)&&this.end.isAfter(t.start)}static createFromParentsAndOffsets(t,e,n,o){return new this(new $o(t,e),new $o(n,o))}static createFromRange(t){return new this(t.start,t.end)}static createFromPositionAndShift(t,e){const n=t,o=t.getShiftedBy(e);return e>0?new this(n,o):new this(o,n)}static createIn(t){return this.createFromParentsAndOffsets(t,0,t,t.childCount)}static createOn(t){const e=t.is("textProxy")?t.offsetSize:1;return this.createFromPositionAndShift($o.createBefore(t),e)}static createCollapsedAt(t,e){const n=$o.createAt(t,e),o=$o.createFromPosition(n);return new Qo(n,o)}}function Jo(t){return!(!t.item.is("attributeElement")&&!t.item.is("uiElement"))}function Ko(t){let e=0;for(const n of t)e++;return e}class Zo{constructor(t=null,e,n){this._ranges=[],this._lastRangeBackward=!1,this._isFake=!1,this._fakeSelectionLabel="",this.setTo(t,e,n)}get isFake(){return this._isFake}get fakeSelectionLabel(){return this._fakeSelectionLabel}get anchor(){if(!this._ranges.length)return null;const t=this._ranges[this._ranges.length-1],e=this._lastRangeBackward?t.end:t.start;return $o.createFromPosition(e)}get focus(){if(!this._ranges.length)return null;const t=this._ranges[this._ranges.length-1],e=this._lastRangeBackward?t.start:t.end;return $o.createFromPosition(e)}get isCollapsed(){return 1===this.rangeCount&&this._ranges[0].isCollapsed}get rangeCount(){return this._ranges.length}get isBackward(){return!this.isCollapsed&&this._lastRangeBackward}get editableElement(){return this.anchor?this.anchor.editableElement:null}*getRanges(){for(const t of this._ranges)yield Qo.createFromRange(t)}getFirstRange(){let t=null;for(const e of this._ranges)t&&!e.start.isBefore(t.start)||(t=e);return t?Qo.createFromRange(t):null}getLastRange(){let t=null;for(const e of this._ranges)t&&!e.end.isAfter(t.end)||(t=e);return t?Qo.createFromRange(t):null}getFirstPosition(){const t=this.getFirstRange();return t?$o.createFromPosition(t.start):null}getLastPosition(){const t=this.getLastRange();return t?$o.createFromPosition(t.end):null}isEqual(t){if(this.isFake!=t.isFake)return!1;if(this.isFake&&this.fakeSelectionLabel!=t.fakeSelectionLabel)return!1;if(this.rangeCount!=t.rangeCount)return!1;if(0===this.rangeCount)return!0;if(!this.anchor.isEqual(t.anchor)||!this.focus.isEqual(t.focus))return!1;for(const e of this._ranges){let n=!1;for(const o of t._ranges)if(e.isEqual(o)){n=!0;break}if(!n)return!1}return!0}isSimilar(t){if(this.isBackward!=t.isBackward)return!1;const e=Ko(this.getRanges());if(e!=Ko(t.getRanges()))return!1;if(0==e)return!0;for(let e of this.getRanges()){e=e.getTrimmed();let n=!1;for(let o of t.getRanges())if(o=o.getTrimmed(),e.start.isEqual(o.start)&&e.end.isEqual(o.end)){n=!0;break}if(!n)return!1}return!0}getSelectedElement(){if(1!==this.rangeCount)return null;const t=this.getFirstRange(),e=t.start.nodeAfter,n=t.end.nodeBefore;return e instanceof po&&e==n?e:null}setTo(t,e,n){if(null===t)this._setRanges([]),this._setFakeOptions(e);else if(t instanceof Zo||t instanceof Xo)this._setRanges(t.getRanges(),t.isBackward),this._setFakeOptions({fake:t.isFake,label:t.fakeSelectionLabel});else if(t instanceof Qo)this._setRanges([t],e&&e.backward),this._setFakeOptions(e);else if(t instanceof $o)this._setRanges([new Qo(t)]),this._setFakeOptions(e);else if(t instanceof ao){const o=!!n&&!!n.backward;let i;if(void 0===e)throw new M.b("view-selection-setTo-required-second-parameter: selection.setTo requires the second parameter when the first parameter is a node.");i="in"==e?Qo.createIn(t):"on"==e?Qo.createOn(t):Qo.createCollapsedAt(t,e),this._setRanges([i],o),this._setFakeOptions(n)}else{if(!ho(t))throw new M.b("view-selection-setTo-not-selectable: Cannot set selection to given place.");this._setRanges(t,e&&e.backward),this._setFakeOptions(e)}this.fire("change")}setFocus(t,e){if(null===this.anchor)throw new M.b("view-selection-setFocus-no-ranges: Cannot set selection focus if there are no ranges in selection.");const n=$o.createAt(t,e);if("same"==n.compareWith(this.focus))return;const o=this.anchor;this._ranges.pop(),"before"==n.compareWith(o)?this._addRange(new Qo(n,o),!0):this._addRange(new Qo(o,n)),this.fire("change")}_setRanges(t,e=!1){t=Array.from(t),this._ranges=[];for(const e of t)this._addRange(e);this._lastRangeBackward=!!e}_setFakeOptions(t={}){this._isFake=!!t.fake,this._fakeSelectionLabel=t.fake&&t.label||""}_addRange(t,e=!1){if(!(t instanceof Qo))throw new M.b("view-selection-add-range-not-range: Selection range set to an object that is not an instance of view.Range");this._pushRange(t),this._lastRangeBackward=!!e}_pushRange(t){for(const e of this._ranges)if(t.isIntersecting(e))throw new M.b("view-selection-range-intersects: Trying to add a range that intersects with another range from selection.",{addedRange:t,intersectingRange:e});this._ranges.push(Qo.createFromRange(t))}}B(Zo,R);class Xo{constructor(t=null,e,n){this._selection=new Zo,this._selection.delegate("change").to(this),this._selection.setTo(t,e,n)}get isFake(){return this._selection.isFake}get fakeSelectionLabel(){return this._selection.fakeSelectionLabel}get anchor(){return this._selection.anchor}get focus(){return this._selection.focus}get isCollapsed(){return this._selection.isCollapsed}get rangeCount(){return this._selection.rangeCount}get isBackward(){return this._selection.isBackward}get editableElement(){return this._selection.editableElement}get _ranges(){return this._selection._ranges}*getRanges(){yield*this._selection.getRanges()}getFirstRange(){return this._selection.getFirstRange()}getLastRange(){return this._selection.getLastRange()}getFirstPosition(){return this._selection.getFirstPosition()}getLastPosition(){return this._selection.getLastPosition()}getSelectedElement(){return this._selection.getSelectedElement()}isEqual(t){return this._selection.isEqual(t)}isSimilar(t){return this._selection.isSimilar(t)}_setTo(t,e,n){this._selection.setTo(t,e,n)}_setFocus(t,e){this._selection.setFocus(t,e)}}B(Xo,R);class ti{constructor(t={}){this._items=[],this._itemMap=new Map,this._idProperty=t.idProperty||"id",this._bindToExternalToInternalMap=new WeakMap,this._bindToInternalToExternalMap=new WeakMap,this._skippedIndexesFromExternal=[]}get length(){return this._items.length}get first(){return this._items[0]||null}get last(){return this._items[this.length-1]||null}add(t,e){let n;const o=this._idProperty;if(o in t){if("string"!=typeof(n=t[o]))throw new M.b("collection-add-invalid-id");if(this.get(n))throw new M.b("collection-add-item-already-exists")}else t[o]=n=E();if(void 0===e)e=this._items.length;else if(e>this._items.length||e<0)throw new M.b("collection-add-item-invalid-index");return this._items.splice(e,0,t),this._itemMap.set(n,t),this.fire("add",t,e),this}get(t){let e;if("string"==typeof t)e=this._itemMap.get(t);else{if("number"!=typeof t)throw new M.b("collection-get-invalid-arg: Index or id must be given.");e=this._items[t]}return e||null}getIndex(t){let e;return e="string"==typeof t?this._itemMap.get(t):t,this._items.indexOf(e)}remove(t){let e,n,o,i=!1;const r=this._idProperty;if("string"==typeof t?(n=t,i=!(o=this._itemMap.get(n)),o&&(e=this._items.indexOf(o))):"number"==typeof t?(e=t,i=!(o=this._items[e]),o&&(n=o[r])):(n=(o=t)[r],i=-1==(e=this._items.indexOf(o))||!this._itemMap.get(n)),i)throw new M.b("collection-remove-404: Item not found.");this._items.splice(e,1),this._itemMap.delete(n);const s=this._bindToInternalToExternalMap.get(o);return this._bindToInternalToExternalMap.delete(o),this._bindToExternalToInternalMap.delete(s),this.fire("remove",o,e),o}map(t,e){return this._items.map(t,e)}find(t,e){return this._items.find(t,e)}filter(t,e){return this._items.filter(t,e)}clear(){for(this._bindToCollection&&(this.stopListening(this._bindToCollection),this._bindToCollection=null);this.length;)this.remove(0)}bindTo(t){if(this._bindToCollection)throw new M.b("collection-bind-to-rebind: The collection cannot be bound more than once.");return this._bindToCollection=t,{as:t=>{this._setUpBindToBinding(e=>new t(e))},using:t=>{"function"==typeof t?this._setUpBindToBinding(e=>t(e)):this._setUpBindToBinding(e=>e[t])}}}_setUpBindToBinding(t){const e=this._bindToCollection,n=(n,o,i)=>{const r=e._bindToCollection==this,s=e._bindToInternalToExternalMap.get(o);if(r&&s)this._bindToExternalToInternalMap.set(o,s),this._bindToInternalToExternalMap.set(s,o);else{const n=t(o);if(!n)return void this._skippedIndexesFromExternal.push(i);let r=i;for(const t of this._skippedIndexesFromExternal)i>t&&r--;for(const t of e._skippedIndexesFromExternal)r>=t&&r++;this._bindToExternalToInternalMap.set(o,n),this._bindToInternalToExternalMap.set(n,o),this.add(n,r);for(let t=0;t<e._skippedIndexesFromExternal.length;t++)r<=e._skippedIndexesFromExternal[t]&&e._skippedIndexesFromExternal[t]++}};for(const t of e)n(0,t,e.getIndex(t));this.listenTo(e,"add",n),this.listenTo(e,"remove",(t,e,n)=>{const o=this._bindToExternalToInternalMap.get(e);o&&this.remove(o),this._skippedIndexesFromExternal=this._skippedIndexesFromExternal.reduce((t,e)=>(n<e&&t.push(e-1),n>e&&t.push(e),t),[])})}[Symbol.iterator](){return this._items[Symbol.iterator]()}}B(ti,R);class ei{constructor(){this.selection=new Xo,this.roots=new ti({idProperty:"rootName"}),this.set("isReadOnly",!1),this.set("isFocused",!1),this.set("isComposing",!1),this._postFixers=new Set}getRoot(t="main"){return this.roots.get(t)}registerPostFixer(t){this._postFixers.add(t)}_callPostFixers(t){let e=!1;do{for(const n of this._postFixers)if(e=n(t))break}while(e)}}B(ei,jo);const ni=10;class oi extends po{constructor(t,e,n){super(t,e,n),this.getFillerOffset=ii,this._priority=ni,this._id=null,this._clonesGroup=null}get priority(){return this._priority}get id(){return this._id}getElementsWithSameId(){if(null===this.id)throw new M.b("attribute-element-get-elements-with-same-id-no-id: Cannot get elements with the same id for an attribute element without id.");return new Set(this._clonesGroup)}is(t,e=null){return e?"attributeElement"==t&&e==this.name||super.is(t,e):"attributeElement"==t||super.is(t)}isSimilar(t){return null!==this.id||null!==t.id?this.id===t.id:super.isSimilar(t)&&this.priority==t.priority}_clone(t){const e=super._clone(t);return e._priority=this._priority,e._id=this._id,e}}function ii(){if(ri(this))return null;let t=this.parent;for(;t&&t.is("attributeElement");){if(ri(t)>1)return null;t=t.parent}return!t||ri(t)>1?null:this.childCount}function ri(t){return Array.from(t.getChildren()).filter(t=>!t.is("uiElement")).length}oi.DEFAULT_PRIORITY=ni;class si extends po{constructor(t,e,n){super(t,e,n),this.getFillerOffset=ai}is(t,e=null){return e?"emptyElement"==t&&e==this.name||super.is(t,e):"emptyElement"==t||super.is(t)}_insertChild(t,e){if(e&&(e instanceof ao||Array.from(e).length>0))throw new M.b("view-emptyelement-cannot-add: Cannot add child nodes to EmptyElement instance.")}}function ai(){return null}const ci=navigator.userAgent.toLowerCase();var li={isMac:function(t){return t.indexOf("macintosh")>-1}(ci),isEdge:function(t){return!!t.match(/edge\/(\d+.?\d*)/)}(ci)};const di={"⌘":"ctrl","⇧":"shift","⌥":"alt"},ui={ctrl:"⌘",shift:"⇧",alt:"⌥"},hi=function(){const t={arrowleft:37,arrowup:38,arrowright:39,arrowdown:40,backspace:8,delete:46,enter:13,space:32,esc:27,tab:9,ctrl:1114112,cmd:1114112,shift:2228224,alt:4456448};for(let e=65;e<=90;e++){const n=String.fromCharCode(e);t[n.toLowerCase()]=e}for(let e=48;e<=57;e++)t[e-48]=e;for(let e=112;e<=123;e++)t["f"+(e-111)]=e;return t}();function fi(t){let e;if("string"==typeof t){if(!(e=hi[t.toLowerCase()]))throw new M.b("keyboard-unknown-key: Unknown key name.",{key:t})}else e=t.keyCode+(t.altKey?hi.alt:0)+(t.ctrlKey?hi.ctrl:0)+(t.shiftKey?hi.shift:0);return e}function mi(t){return"string"==typeof t&&(t=pi(t)),t.map(t=>"string"==typeof t?fi(t):t).reduce((t,e)=>e+t,0)}function pi(t){return t.split(/\s*\+\s*/)}class gi extends po{constructor(t,e,n){super(t,e,n),this.getFillerOffset=wi}is(t,e=null){return e?"uiElement"==t&&e==this.name||super.is(t,e):"uiElement"==t||super.is(t)}_insertChild(t,e){if(e&&(e instanceof ao||Array.from(e).length>0))throw new M.b("view-uielement-cannot-add: Cannot add child nodes to UIElement instance.")}render(t){return this.toDomElement(t)}toDomElement(t){const e=t.createElement(this.name);for(const t of this.getAttributeKeys())e.setAttribute(t,this.getAttribute(t));return e}}function bi(t){t.document.on("keydown",(e,n)=>(function(t,e,n){if(e.keyCode==hi.arrowright){const t=e.domTarget.ownerDocument.defaultView.getSelection(),o=1==t.rangeCount&&t.getRangeAt(0).collapsed;if(o||e.shiftKey){const e=t.focusNode,i=t.focusOffset,r=n.domPositionToView(e,i);if(null===r)return;let s=!1;const a=r.getLastMatchingPosition(t=>(t.item.is("uiElement")&&(s=!0),!(!t.item.is("uiElement")&&!t.item.is("attributeElement"))));if(s){const e=n.viewPositionToDom(a);o?t.collapse(e.parent,e.offset):t.extend(e.parent,e.offset)}}}})(0,n,t.domConverter))}function wi(){return null}class _i{constructor(t){this._children=[],t&&this._insertChild(0,t)}[Symbol.iterator](){return this._children[Symbol.iterator]()}get childCount(){return this._children.length}get isEmpty(){return 0===this.childCount}get root(){return this}get parent(){return null}is(t){return"documentFragment"==t}_appendChild(t){return this._insertChild(this.childCount,t)}getChild(t){return this._children[t]}getChildIndex(t){return this._children.indexOf(t)}getChildren(){return this._children[Symbol.iterator]()}_insertChild(t,e){this._fireChange("children",this);let n=0;const o=function(t){if("string"==typeof t)return[new co(t)];ho(t)||(t=[t]);return Array.from(t).map(t=>"string"==typeof t?new co(t):t instanceof lo?new co(t.data):t)}(e);for(const e of o)null!==e.parent&&e._remove(),e.parent=this,this._children.splice(t,0,e),t++,n++;return n}_removeChildren(t,e=1){this._fireChange("children",this);for(let n=t;n<t+e;n++)this._children[n].parent=null;return this._children.splice(t,e)}_fireChange(t,e){this.fire("change:"+t,e)}}B(_i,R);class ki{constructor(t){this.document=t,this._cloneGroups=new Map}setSelection(t,e,n){this.document.selection._setTo(t,e,n)}setSelectionFocus(t,e){this.document.selection._setFocus(t,e)}createText(t){return new co(t)}createAttributeElement(t,e,n={}){const o=new oi(t,e);return n.priority&&(o._priority=n.priority),n.id&&(o._id=n.id),o}createContainerElement(t,e){return new wo(t,e)}createEditableElement(t,e){const n=new qo(t,e);return n._document=this.document,n}createEmptyElement(t,e){return new si(t,e)}createUIElement(t,e,n){const o=new gi(t,e);return n&&(o.render=n),o}setAttribute(t,e,n){n._setAttribute(t,e)}removeAttribute(t,e){e._removeAttribute(t)}addClass(t,e){e._addClass(t)}removeClass(t,e){e._removeClass(t)}setStyle(t,e,n){C(t)&&void 0===n&&(n=e),n._setStyle(t,e)}removeStyle(t,e){e._removeStyle(t)}setCustomProperty(t,e,n){n._setCustomProperty(t,e)}removeCustomProperty(t,e){return e._removeCustomProperty(t)}breakAttributes(t){return t instanceof $o?this._breakAttributes(t):this._breakAttributesRange(t)}breakContainer(t){const e=t.parent;if(!e.is("containerElement"))throw new M.b("view-writer-break-non-container-element: Trying to break an element which is not a container element.");if(!e.parent)throw new M.b("view-writer-break-root: Trying to break root element.");if(t.isAtStart)return $o.createBefore(e);if(!t.isAtEnd){const n=e._clone(!1);this.insert($o.createAfter(e),n);const o=new Qo(t,$o.createAt(e,"end")),i=new $o(n,0);this.move(o,i)}return $o.createAfter(e)}mergeAttributes(t){const e=t.offset,n=t.parent;if(n.is("text"))return t;if(n.is("attributeElement")&&0===n.childCount){const t=n.parent,e=n.index;return n._remove(),this._removeFromClonedElementsGroup(n),this.mergeAttributes(new $o(t,e))}const o=n.getChild(e-1),i=n.getChild(e);if(!o||!i)return t;if(o.is("text")&&i.is("text"))return Ci(o,i);if(o.is("attributeElement")&&i.is("attributeElement")&&o.isSimilar(i)){const t=o.childCount;return o._appendChild(i.getChildren()),i._remove(),this._removeFromClonedElementsGroup(i),this.mergeAttributes(new $o(o,t))}return t}mergeContainers(t){const e=t.nodeBefore,n=t.nodeAfter;if(!(e&&n&&e.is("containerElement")&&n.is("containerElement")))throw new M.b("view-writer-merge-containers-invalid-position: Element before and after given position cannot be merged.");const o=e.getChild(e.childCount-1),i=o instanceof co?$o.createAt(o,"end"):$o.createAt(e,"end");return this.move(Qo.createIn(n),$o.createAt(e,"end")),this.remove(Qo.createOn(n)),i}insert(t,e){(function t(e){for(const n of e){if(!Ti.some(t=>n instanceof t))throw new M.b("view-writer-insert-invalid-node");n.is("text")||t(n.getChildren())}})(e=ho(e)?[...e]:[e]);const n=vi(t);if(!n)throw new M.b("view-writer-invalid-position-container");const o=this._breakAttributes(t,!0),i=n._insertChild(o.offset,e);for(const t of e)this._addToClonedElementsGroup(t);const r=o.getShiftedBy(i),s=this.mergeAttributes(o);if(0===i)return new Qo(s,s);{s.isEqual(o)||r.offset--;const t=this.mergeAttributes(r);return new Qo(s,t)}}remove(t){const e=t instanceof Qo?t:Qo.createOn(t);if(Pi(e),e.isCollapsed)return new _i;const{start:n,end:o}=this._breakAttributesRange(e,!0),i=n.parent,r=o.offset-n.offset,s=i._removeChildren(n.offset,r);for(const t of s)this._removeFromClonedElementsGroup(t);const a=this.mergeAttributes(n);return e.start=a,e.end=$o.createFromPosition(a),new _i(s)}clear(t,e){Pi(t);const n=t.getWalker({direction:"backward",ignoreElementEnd:!0});for(const o of n){const n=o.item;let i;if(n.is("element")&&e.isSimilar(n))i=Qo.createOn(n);else if(!o.nextPosition.isAfter(t.start)&&n.is("textProxy")){const t=n.getAncestors().find(t=>t.is("element")&&e.isSimilar(t));t&&(i=Qo.createIn(t))}i&&(i.end.isAfter(t.end)&&(i.end=t.end),i.start.isBefore(t.start)&&(i.start=t.start),this.remove(i))}}move(t,e){let n;if(e.isAfter(t.end)){const o=(e=this._breakAttributes(e,!0)).parent,i=o.childCount;t=this._breakAttributesRange(t,!0),n=this.remove(t),e.offset+=o.childCount-i}else n=this.remove(t);return this.insert(e,n)}wrap(t,e){if(!(e instanceof oi))throw new M.b("view-writer-wrap-invalid-attribute");if(Pi(t),t.isCollapsed){let n=t.start;n.parent.is("element")&&!function(t){return Array.from(t.getChildren()).some(t=>!t.is("uiElement"))}(n.parent)&&(n=n.getLastMatchingPosition(t=>t.item.is("uiElement"))),n=this._wrapPosition(n,e);const o=this.document.selection;return o.isCollapsed&&o.getFirstPosition().isEqual(t.start)&&this.setSelection(n),new Qo(n)}return this._wrapRange(t,e)}unwrap(t,e){if(!(e instanceof oi))throw new M.b("view-writer-unwrap-invalid-attribute");if(Pi(t),t.isCollapsed)return t;const{start:n,end:o}=this._breakAttributesRange(t,!0);if(o.isEqual(n.getShiftedBy(1))){const t=n.nodeAfter;if(!e.isSimilar(t)&&t instanceof oi&&this._unwrapAttributeElement(e,t)){const t=this.mergeAttributes(n);t.isEqual(n)||o.offset--;const e=this.mergeAttributes(o);return new Qo(t,e)}}const i=n.parent,r=this._unwrapChildren(i,n.offset,o.offset,e),s=this.mergeAttributes(r.start);s.isEqual(r.start)||r.end.offset--;const a=this.mergeAttributes(r.end);return new Qo(s,a)}rename(t,e){const n=new wo(t,e.getAttributes());return this.insert($o.createAfter(e),n),this.move(Qo.createIn(e),$o.createAt(n)),this.remove(Qo.createOn(e)),n}clearClonedElementsGroup(t){this._cloneGroups.delete(t)}_wrapChildren(t,e,n,o){let i=e;const r=[];for(;i<n;){const e=t.getChild(i),n=e.is("text"),s=e.is("attributeElement"),a=e.is("emptyElement"),c=e.is("uiElement");if(n||a||c||s&&yi(o,e)){const n=o._clone();e._remove(),n._appendChild(e),t._insertChild(i,n),this._addToClonedElementsGroup(n),r.push(new $o(t,i))}else s&&this._wrapChildren(e,0,e.childCount,o);i++}let s=0;for(const t of r){if(t.offset-=s,t.offset==e)continue;this.mergeAttributes(t).isEqual(t)||(s++,n--)}return Qo.createFromParentsAndOffsets(t,e,t,n)}_unwrapChildren(t,e,n,o){let i=e;const r=[];for(;i<n;){const e=t.getChild(i);if(e.isSimilar(o)){const o=e.getChildren(),s=e.childCount;e._remove(),t._insertChild(i,o),this._removeFromClonedElementsGroup(e),r.push(new $o(t,i),new $o(t,i+s)),i+=s,n+=s-1}else e.is("attributeElement")&&this._unwrapChildren(e,0,e.childCount,o),i++}let s=0;for(const t of r){if(t.offset-=s,t.offset==e||t.offset==n)continue;this.mergeAttributes(t).isEqual(t)||(s++,n--)}return Qo.createFromParentsAndOffsets(t,e,t,n)}_wrapRange(t,e){if(function(t){return t.start.parent==t.end.parent&&t.start.parent.is("attributeElement")&&0===t.start.offset&&t.end.offset===t.start.parent.childCount}(t)&&this._wrapAttributeElement(e,t.start.parent)){const e=t.start.parent,n=this.mergeAttributes($o.createAfter(e)),o=this.mergeAttributes($o.createBefore(e));return new Qo(o,n)}const{start:n,end:o}=this._breakAttributesRange(t,!0);if(o.isEqual(n.getShiftedBy(1))){const t=n.nodeAfter;if(t instanceof oi&&this._wrapAttributeElement(e,t)){const t=this.mergeAttributes(n);t.isEqual(n)||o.offset--;const e=this.mergeAttributes(o);return new Qo(t,e)}}const i=n.parent,r=this._unwrapChildren(i,n.offset,o.offset,e),s=this._wrapChildren(i,r.start.offset,r.end.offset,e),a=this.mergeAttributes(s.start);a.isEqual(s.start)||s.end.offset--;const c=this.mergeAttributes(s.end);return new Qo(a,c)}_wrapPosition(t,e){if(e.isSimilar(t.parent))return xi($o.createFromPosition(t));t.parent.is("text")&&(t=Ai(t));const n=this.createAttributeElement();n._priority=Number.POSITIVE_INFINITY,n.isSimilar=(()=>!1),t.parent._insertChild(t.offset,n);const o=new Qo(t,t.getShiftedBy(1));this.wrap(o,e);const i=new $o(n.parent,n.index);n._remove();const r=i.nodeBefore,s=i.nodeAfter;return r instanceof co&&s instanceof co?Ci(r,s):xi(i)}_wrapAttributeElement(t,e){if(!Si(t,e))return!1;if(t.name!==e.name||t.priority!==e.priority)return!1;for(const n of t.getAttributeKeys())if("class"!==n&&"style"!==n&&e.hasAttribute(n)&&e.getAttribute(n)!==t.getAttribute(n))return!1;for(const n of t.getStyleNames())if(e.hasStyle(n)&&e.getStyle(n)!==t.getStyle(n))return!1;for(const n of t.getAttributeKeys())"class"!==n&&"style"!==n&&(e.hasAttribute(n)||this.setAttribute(n,t.getAttribute(n),e));for(const n of t.getStyleNames())e.hasStyle(n)||this.setStyle(n,t.getStyle(n),e);for(const n of t.getClassNames())e.hasClass(n)||this.addClass(n,e);return!0}_unwrapAttributeElement(t,e){if(!Si(t,e))return!1;if(t.name!==e.name||t.priority!==e.priority)return!1;for(const n of t.getAttributeKeys())if("class"!==n&&"style"!==n&&(!e.hasAttribute(n)||e.getAttribute(n)!==t.getAttribute(n)))return!1;if(!e.hasClass(...t.getClassNames()))return!1;for(const n of t.getStyleNames())if(!e.hasStyle(n)||e.getStyle(n)!==t.getStyle(n))return!1;for(const n of t.getAttributeKeys())"class"!==n&&"style"!==n&&this.removeAttribute(n,e);return this.removeClass(Array.from(t.getClassNames()),e),this.removeStyle(Array.from(t.getStyleNames()),e),!0}_breakAttributesRange(t,e=!1){const n=t.start,o=t.end;if(Pi(t),t.isCollapsed){const n=this._breakAttributes(t.start,e);return new Qo(n,n)}const i=this._breakAttributes(o,e),r=i.parent.childCount,s=this._breakAttributes(n,e);return i.offset+=i.parent.childCount-r,new Qo(s,i)}_breakAttributes(t,e=!1){const n=t.offset,o=t.parent;if(t.parent.is("emptyElement"))throw new M.b("view-writer-cannot-break-empty-element");if(t.parent.is("uiElement"))throw new M.b("view-writer-cannot-break-ui-element");if(!e&&o.is("text")&&Mi(o.parent))return $o.createFromPosition(t);if(Mi(o))return $o.createFromPosition(t);if(o.is("text"))return this._breakAttributes(Ai(t),e);if(n==o.childCount){const t=new $o(o.parent,o.index+1);return this._breakAttributes(t,e)}if(0===n){const t=new $o(o.parent,o.index);return this._breakAttributes(t,e)}{const t=o.index+1,i=o._clone();o.parent._insertChild(t,i),this._addToClonedElementsGroup(i);const r=o.childCount-n,s=o._removeChildren(n,r);i._appendChild(s);const a=new $o(o.parent,t);return this._breakAttributes(a,e)}}_addToClonedElementsGroup(t){if(!t.root.is("rootElement"))return;if(t.is("element"))for(const e of t.getChildren())this._addToClonedElementsGroup(e);const e=t.id;if(!e)return;let n=this._cloneGroups.get(e);n||(n=new Set,this._cloneGroups.set(e,n)),n.add(t),t._clonesGroup=n}_removeFromClonedElementsGroup(t){if(t.is("element"))for(const e of t.getChildren())this._removeFromClonedElementsGroup(e);const e=t.id;if(!e)return;const n=this._cloneGroups.get(e);n&&n.delete(t)}}function vi(t){let e=t.parent;for(;!Mi(e);){if(!e)return;e=e.parent}return e}function yi(t,e){return t.priority<e.priority||!(t.priority>e.priority)&&t.getIdentity()<e.getIdentity()}function xi(t){const e=t.nodeBefore;if(e&&e.is("text"))return new $o(e,e.data.length);const n=t.nodeAfter;return n&&n.is("text")?new $o(n,0):t}function Ai(t){if(t.offset==t.parent.data.length)return new $o(t.parent.parent,t.parent.index+1);if(0===t.offset)return new $o(t.parent.parent,t.parent.index);const e=t.parent.data.slice(t.offset);return t.parent._data=t.parent.data.slice(0,t.offset),t.parent.parent._insertChild(t.parent.index+1,new co(e)),new $o(t.parent.parent,t.parent.index+1)}function Ci(t,e){const n=t.data.length;return t._data+=e.data,e._remove(),new $o(t,n)}const Ti=[co,oi,wo,si,gi];function Mi(t){return t&&(t.is("containerElement")||t.is("documentFragment"))}function Pi(t){const e=vi(t.start),n=vi(t.end);if(!e||!n||e!==n)throw new M.b("view-writer-invalid-range-container")}function Si(t,e){return null===t.id&&null===e.id}function Ei(t){return"[object Text]"==Object.prototype.toString.call(t)}const Ii=t=>{const e=t.createElement("br");return e.dataset.ckeFiller=!0,e},Ni=t=>t.createTextNode(" "),Oi=7;let Ri="";for(let t=0;t<Oi;t++)Ri+="​";function Di(t){return Ei(t)&&t.data.substr(0,Oi)===Ri}function Li(t){return t.data.length==Oi&&Di(t)}function ji(t){return Di(t)?t.data.slice(Oi):t.data}const Vi=new WeakMap;function Fi(t,e){let n=Vi.get(e);return n||(n=e(window.document),Vi.set(e,n)),t.isEqualNode(n)}function zi(t,e){if(e.keyCode==hi.arrowleft){const t=e.domTarget.ownerDocument.defaultView.getSelection();if(1==t.rangeCount&&t.getRangeAt(0).collapsed){const e=t.getRangeAt(0).startContainer,n=t.getRangeAt(0).startOffset;Di(e)&&n<=Oi&&t.collapse(e,0)}}}function Bi(t,e,n){let o,i;if(n=n||function(t,e){return t===e},e.length<t.length){const n=t;t=e,e=n,o="delete",i="insert"}else o="insert",i="delete";const r=t.length,s=e.length,a=s-r,c={},l={};function d(a){const d=(void 0!==l[a-1]?l[a-1]:-1)+1,u=void 0!==l[a+1]?l[a+1]:-1,h=d>u?-1:1;c[a+h]&&(c[a]=c[a+h].slice(0)),c[a]||(c[a]=[]),c[a].push(d>u?o:i);let f=Math.max(d,u),m=f-a;for(;m<r&&f<s&&n(t[m],e[f]);)m++,f++,c[a].push("equal");return f}let u,h=0;do{for(u=-h;u<a;u++)l[u]=d(u);for(u=a+h;u>a;u--)l[u]=d(u);l[a]=d(a),h++}while(l[a]!==s);return c[a].slice(1)}function Ui(t,e,n){t.insertBefore(n,t.childNodes[e]||null)}function Hi(t){const e=t.parentNode;e&&e.removeChild(t)}function qi(t){if(t){if(t.defaultView)return t instanceof t.defaultView.Document;if(t.ownerDocument&&t.ownerDocument.defaultView)return t instanceof t.ownerDocument.defaultView.Node}return!1}function Wi(t,e){if(t===e)return[];return function(t,e){const n=[],{firstIndex:o,lastIndexOld:i,lastIndexNew:r}=e;r-o>0&&n.push({index:o,type:"insert",values:t.substring(o,r).split("")});i-o>0&&n.push({index:o+(r-o),type:"delete",howMany:i-o});return n}(e,function(t,e){const n=Yi(t,e),o=Gi(t,n),i=Gi(e,n),r=Yi(o,i),s=t.length-r,a=e.length-r;return{firstIndex:n,lastIndexOld:s,lastIndexNew:a}}(t,e))}function Yi(t,e){for(let n=0;n<Math.max(t.length,e.length);n++)if(t[n]!==e[n])return n}function Gi(t,e){return t.substring(e).split("").reverse().join("")}class $i{constructor(t,e){this.domDocuments=new Set,this.domConverter=t,this.markedAttributes=new Set,this.markedChildren=new Set,this.markedTexts=new Set,this.selection=e,this.isFocused=!1,this._inlineFiller=null,this._fakeSelectionContainer=null}markToSync(t,e){if("text"===t)this.domConverter.mapViewToDom(e.parent)&&this.markedTexts.add(e);else{if(!this.domConverter.mapViewToDom(e))return;if("attributes"===t)this.markedAttributes.add(e);else{if("children"!==t)throw new M.b("view-renderer-unknown-type: Unknown type passed to Renderer.markToSync.");this.markedChildren.add(e)}}}render(){let t;for(const t of this.markedChildren)this._updateChildrenMappings(t);this._inlineFiller&&!this._isSelectionInInlineFiller()&&this._removeInlineFiller(),this._inlineFiller?t=this._getInlineFillerPosition():this._needsInlineFillerAtSelection()&&(t=this.selection.getFirstPosition(),this.markedChildren.add(t.parent));for(const t of this.markedAttributes)this._updateAttrs(t);for(const e of this.markedChildren)this._updateChildren(e,{inlineFillerPosition:t});for(const e of this.markedTexts)!this.markedChildren.has(e.parent)&&this.domConverter.mapViewToDom(e.parent)&&this._updateText(e,{inlineFillerPosition:t});if(t){const e=this.domConverter.viewPositionToDom(t),n=e.parent.ownerDocument;Di(e.parent)?this._inlineFiller=e.parent:this._inlineFiller=Qi(n,e.parent,e.offset)}else this._inlineFiller=null;this._updateSelection(),this._updateFocus(),this.markedTexts.clear(),this.markedAttributes.clear(),this.markedChildren.clear()}_updateChildrenMappings(t){const e=this.domConverter.mapViewToDom(t);if(!e)return;const n=this.domConverter.mapViewToDom(t).childNodes,o=Array.from(this.domConverter.viewChildrenToDom(t,e.ownerDocument,{withChildren:!1})),i=this._diffNodeLists(n,o),r=this._findReplaceActions(i,n,o);if(-1!==r.indexOf("replace")){const e={equal:0,insert:0,delete:0};for(const i of r)if("replace"===i){const i=e.equal+e.insert,r=e.equal+e.delete,s=t.getChild(i);s&&!s.is("uiElement")&&this._updateElementMappings(s,n[r]),Hi(o[i]),e.equal++}else e[i]++}}_updateElementMappings(t,e){this.domConverter.unbindDomElement(e),this.domConverter.bindElements(e,t),this.markedChildren.add(t),this.markedAttributes.add(t)}_getInlineFillerPosition(){const t=this.selection.getFirstPosition();return t.parent.is("text")?$o.createBefore(this.selection.getFirstPosition().parent):t}_isSelectionInInlineFiller(){if(1!=this.selection.rangeCount||!this.selection.isCollapsed)return!1;const t=this.selection.getFirstPosition(),e=this.domConverter.viewPositionToDom(t);return!!(e&&Ei(e.parent)&&Di(e.parent))}_removeInlineFiller(){const t=this._inlineFiller;if(!Di(t))throw new M.b("view-renderer-filler-was-lost: The inline filler node was lost.");Li(t)?t.parentNode.removeChild(t):t.data=t.data.substr(Oi),this._inlineFiller=null}_needsInlineFillerAtSelection(){if(1!=this.selection.rangeCount||!this.selection.isCollapsed)return!1;const t=this.selection.getFirstPosition(),e=t.parent,n=t.offset;if(!this.domConverter.mapViewToDom(e.root))return!1;if(!e.is("element"))return!1;if(!function(t){if("false"==t.getAttribute("contenteditable"))return!1;const e=t.findAncestor(t=>t.hasAttribute("contenteditable"));return!e||"true"==e.getAttribute("contenteditable")}(e))return!1;if(n===e.getFillerOffset())return!1;const o=t.nodeBefore,i=t.nodeAfter;return!(o instanceof co||i instanceof co)}_updateText(t,e){const n=this.domConverter.findCorrespondingDomText(t),o=this.domConverter.viewToDom(t,n.ownerDocument),i=n.data;let r=o.data;const s=e.inlineFillerPosition;if(s&&s.parent==t.parent&&s.offset==t.index&&(r=Ri+r),i!=r){const t=Wi(i,r);for(const e of t)"insert"===e.type?n.insertData(e.index,e.values.join("")):n.deleteData(e.index,e.howMany)}}_updateAttrs(t){const e=this.domConverter.mapViewToDom(t);if(!e)return;const n=Array.from(e.attributes).map(t=>t.name),o=t.getAttributeKeys();for(const n of o)e.setAttribute(n,t.getAttribute(n));for(const o of n)t.hasAttribute(o)||e.removeAttribute(o)}_updateChildren(t,e){const n=this.domConverter.mapViewToDom(t);if(!n)return;const o=e.inlineFillerPosition,i=this.domConverter.mapViewToDom(t).childNodes,r=Array.from(this.domConverter.viewChildrenToDom(t,n.ownerDocument,{bind:!0,inlineFillerPosition:o}));o&&o.parent===t&&Qi(n.ownerDocument,r,o.offset);const s=this._diffNodeLists(i,r);let a=0;const c=new Set;for(const t of s)"insert"===t?(Ui(n,a,r[a]),a++):"delete"===t?(c.add(i[a]),Hi(i[a])):(this._markDescendantTextToSync(this.domConverter.domToView(r[a])),a++);for(const t of c)t.parentNode||this.domConverter.unbindDomElement(t)}_diffNodeLists(t,e){return Bi(t,e,function(t,e,n){if(e===n)return!0;if(Ei(e)&&Ei(n))return e.data===n.data;if(Fi(e,t)&&Fi(n,t))return!0;return!1}.bind(null,this.domConverter.blockFiller))}_findReplaceActions(t,e,n){if(-1===t.indexOf("insert")||-1===t.indexOf("delete"))return t;let o=[],i=[],r=[];const s={equal:0,insert:0,delete:0};for(const a of t)"insert"===a?r.push(n[s.equal+s.insert]):"delete"===a?i.push(e[s.equal+s.delete]):((o=o.concat(Bi(i,r,Ji).map(t=>"equal"===t?"replace":t))).push("equal"),i=[],r=[]),s[a]++;return o.concat(Bi(i,r,Ji).map(t=>"equal"===t?"replace":t))}_markDescendantTextToSync(t){if(t)if(t.is("text"))this.markedTexts.add(t);else if(t.is("element"))for(const e of t.getChildren())this._markDescendantTextToSync(e)}_updateSelection(){if(0===this.selection.rangeCount)return this._removeDomSelection(),void this._removeFakeSelection();const t=this.domConverter.mapViewToDom(this.selection.editableElement);this.isFocused&&t&&(this.selection.isFake?this._updateFakeSelection(t):(this._removeFakeSelection(),this._updateDomSelection(t)))}_updateFakeSelection(t){const e=t.ownerDocument;let n=this._fakeSelectionContainer;n||(this._fakeSelectionContainer=n=e.createElement("div"),Object.assign(n.style,{position:"fixed",top:0,left:"-9999px",width:"42px"}),n.appendChild(e.createTextNode(" "))),n.parentElement||t.appendChild(n),n.firstChild.data=this.selection.fakeSelectionLabel||" ";const o=e.getSelection(),i=e.createRange();o.removeAllRanges(),i.selectNodeContents(n),o.addRange(i),this.domConverter.bindFakeSelection(n,this.selection)}_updateDomSelection(t){const e=t.ownerDocument.defaultView.getSelection();if(!this._domSelectionNeedsUpdate(e))return;const n=this.domConverter.viewPositionToDom(this.selection.anchor),o=this.domConverter.viewPositionToDom(this.selection.focus);t.focus(),e.collapse(n.parent,n.offset),e.extend(o.parent,o.offset)}_domSelectionNeedsUpdate(t){if(!this.domConverter.isDomSelectionCorrect(t))return!0;const e=t&&this.domConverter.domSelectionToView(t);return(!e||!this.selection.isEqual(e))&&!(!this.selection.isCollapsed&&this.selection.isSimilar(e))}_removeDomSelection(){for(const t of this.domDocuments){if(t.getSelection().rangeCount){const e=t.activeElement,n=this.domConverter.mapDomToView(e);e&&n&&t.getSelection().removeAllRanges()}}}_removeFakeSelection(){const t=this._fakeSelectionContainer;t&&t.remove()}_updateFocus(){if(this.isFocused){const t=this.selection.editableElement;t&&this.domConverter.focus(t)}}}function Qi(t,e,n){const o=e instanceof Array?e:e.childNodes,i=o[n];if(Ei(i))return i.data=Ri+i.data,i;{const i=t.createTextNode(Ri);return Array.isArray(e)?o.splice(n,0,i):Ui(e,n,i),i}}function Ji(t,e){return qi(t)&&qi(e)&&!Ei(t)&&!Ei(e)&&t.tagName.toLowerCase()===e.tagName.toLowerCase()}B($i,jo);var Ki={window:window,document:document};function Zi(t){let e=0;for(;t.previousSibling;)t=t.previousSibling,e++;return e}function Xi(t){const e=[];for(;t&&t.nodeType!=Node.DOCUMENT_NODE;)e.unshift(t),t=t.parentNode;return e}var tr=function(t){return w(t)&&1===t.nodeType&&!C(t)};class er{constructor(t={}){this.blockFiller=t.blockFiller||Ii,this.preElements=["pre"],this.blockElements=["p","div","h1","h2","h3","h4","h5","h6"],this._domToViewMapping=new WeakMap,this._viewToDomMapping=new WeakMap,this._fakeSelectionMapping=new WeakMap}bindFakeSelection(t,e){this._fakeSelectionMapping.set(t,new Zo(e))}fakeSelectionToView(t){return this._fakeSelectionMapping.get(t)}bindElements(t,e){this._domToViewMapping.set(t,e),this._viewToDomMapping.set(e,t)}unbindDomElement(t){const e=this._domToViewMapping.get(t);if(e){this._domToViewMapping.delete(t),this._viewToDomMapping.delete(e);for(const e of Array.from(t.childNodes))this.unbindDomElement(e)}}bindDocumentFragments(t,e){this._domToViewMapping.set(t,e),this._viewToDomMapping.set(e,t)}viewToDom(t,e,n={}){if(t.is("text")){const n=this._processDataFromViewText(t);return e.createTextNode(n)}{if(this.mapViewToDom(t))return this.mapViewToDom(t);let o;if(t.is("documentFragment"))o=e.createDocumentFragment(),n.bind&&this.bindDocumentFragments(o,t);else{if(t.is("uiElement"))return o=t.render(e),n.bind&&this.bindElements(o,t),o;o=e.createElement(t.name),n.bind&&this.bindElements(o,t);for(const e of t.getAttributeKeys())o.setAttribute(e,t.getAttribute(e))}if(n.withChildren||void 0===n.withChildren)for(const i of this.viewChildrenToDom(t,e,n))o.appendChild(i);return o}}*viewChildrenToDom(t,e,n={}){const o=t.getFillerOffset&&t.getFillerOffset();let i=0;for(const r of t.getChildren())o===i&&(yield this.blockFiller(e)),yield this.viewToDom(r,e,n),i++;o===i&&(yield this.blockFiller(e))}viewRangeToDom(t){const e=this.viewPositionToDom(t.start),n=this.viewPositionToDom(t.end),o=document.createRange();return o.setStart(e.parent,e.offset),o.setEnd(n.parent,n.offset),o}viewPositionToDom(t){const e=t.parent;if(e.is("text")){const n=this.findCorrespondingDomText(e);if(!n)return null;let o=t.offset;return Di(n)&&(o+=Oi),{parent:n,offset:o}}{let n,o,i;if(0===t.offset){if(!(n=this.mapViewToDom(e)))return null;i=n.childNodes[0]}else{const e=t.nodeBefore;if(!(o=e.is("text")?this.findCorrespondingDomText(e):this.mapViewToDom(t.nodeBefore)))return null;n=o.parentNode,i=o.nextSibling}if(Ei(i)&&Di(i))return{parent:i,offset:Oi};return{parent:n,offset:o?Zi(o)+1:0}}}domToView(t,e={}){if(Fi(t,this.blockFiller))return null;const n=this.getParentUIElement(t,this._domToViewMapping);if(n)return n;if(Ei(t)){if(Li(t))return null;{const e=this._processDataFromDomText(t);return""===e?null:new co(e)}}if(this.isComment(t))return null;{if(this.mapDomToView(t))return this.mapDomToView(t);let n;if(this.isDocumentFragment(t))n=new _i,e.bind&&this.bindDocumentFragments(t,n);else{const o=e.keepOriginalCase?t.tagName:t.tagName.toLowerCase();n=new po(o),e.bind&&this.bindElements(t,n);const i=t.attributes;for(let t=i.length-1;t>=0;t--)n._setAttribute(i[t].name,i[t].value)}if(e.withChildren||void 0===e.withChildren)for(const o of this.domChildrenToView(t,e))n._appendChild(o);return n}}*domChildrenToView(t,e={}){for(let n=0;n<t.childNodes.length;n++){const o=t.childNodes[n],i=this.domToView(o,e);null!==i&&(yield i)}}domSelectionToView(t){if(1===t.rangeCount){let e=t.getRangeAt(0).startContainer;Ei(e)&&(e=e.parentNode);const n=this.fakeSelectionToView(e);if(n)return n}const e=this.isDomSelectionBackward(t),n=[];for(let e=0;e<t.rangeCount;e++){const o=t.getRangeAt(e),i=this.domRangeToView(o);i&&n.push(i)}return new Zo(n,{backward:e})}domRangeToView(t){const e=this.domPositionToView(t.startContainer,t.startOffset),n=this.domPositionToView(t.endContainer,t.endOffset);return e&&n?new Qo(e,n):null}domPositionToView(t,e){if(Fi(t,this.blockFiller))return this.domPositionToView(t.parentNode,Zi(t));const n=this.mapDomToView(t);if(n&&n.is("uiElement"))return $o.createBefore(n);if(Ei(t)){if(Li(t))return this.domPositionToView(t.parentNode,Zi(t));const n=this.findCorrespondingViewText(t);let o=e;return n?(Di(t)&&(o=(o-=Oi)<0?0:o),new $o(n,o)):null}if(0===e){const e=this.mapDomToView(t);if(e)return new $o(e,0)}else{const n=t.childNodes[e-1],o=Ei(n)?this.findCorrespondingViewText(n):this.mapDomToView(n);if(o&&o.parent)return new $o(o.parent,o.index+1)}return null}mapDomToView(t){return this.getParentUIElement(t)||this._domToViewMapping.get(t)}findCorrespondingViewText(t){if(Li(t))return null;const e=this.getParentUIElement(t);if(e)return e;const n=t.previousSibling;if(n){if(!this.isElement(n))return null;const t=this.mapDomToView(n);if(t){return t.nextSibling instanceof co?t.nextSibling:null}}else{const e=this.mapDomToView(t.parentNode);if(e){const t=e.getChild(0);return t instanceof co?t:null}}return null}mapViewToDom(t){return this._viewToDomMapping.get(t)}findCorrespondingDomText(t){const e=t.previousSibling;return e&&this.mapViewToDom(e)?this.mapViewToDom(e).nextSibling:!e&&t.parent&&this.mapViewToDom(t.parent)?this.mapViewToDom(t.parent).childNodes[0]:null}focus(t){const e=this.mapViewToDom(t);if(e&&e.ownerDocument.activeElement!==e){const{scrollX:t,scrollY:n}=Ki.window,o=[];or(e,t=>{const{scrollLeft:e,scrollTop:n}=t;o.push([e,n])}),e.focus(),or(e,t=>{const[e,n]=o.shift();t.scrollLeft=e,t.scrollTop=n}),Ki.window.scrollTo(t,n)}}isElement(t){return t&&t.nodeType==Node.ELEMENT_NODE}isDocumentFragment(t){return t&&t.nodeType==Node.DOCUMENT_FRAGMENT_NODE}isComment(t){return t&&t.nodeType==Node.COMMENT_NODE}isDomSelectionBackward(t){if(t.isCollapsed)return!1;const e=document.createRange();e.setStart(t.anchorNode,t.anchorOffset),e.setEnd(t.focusNode,t.focusOffset);const n=e.collapsed;return e.detach(),n}getParentUIElement(t){const e=Xi(t);for(e.pop();e.length;){const t=e.pop(),n=this._domToViewMapping.get(t);if(n&&n.is("uiElement"))return n}return null}isDomSelectionCorrect(t){return this._isDomSelectionPositionCorrect(t.anchorNode,t.anchorOffset)&&this._isDomSelectionPositionCorrect(t.focusNode,t.focusOffset)}_isDomSelectionPositionCorrect(t,e){if(Ei(t)&&Di(t)&&e<Oi)return!1;if(this.isElement(t)&&Di(t.childNodes[e]))return!1;const n=this.mapDomToView(t);return!n||!n.is("uiElement")}_processDataFromViewText(t){let e=t.data;if(t.getAncestors().some(t=>this.preElements.includes(t.name)))return e;if(" "==e.charAt(0)){const n=this._getTouchingViewTextNode(t,!1);!(n&&this._nodeEndsWithSpace(n))&&n||(e=" "+e.substr(1))}if(" "==e.charAt(e.length-1)){this._getTouchingViewTextNode(t,!0)||(e=e.substr(0,e.length-1)+" ")}return e.replace(/ {2}/g,"  ")}_nodeEndsWithSpace(t){if(t.getAncestors().some(t=>this.preElements.includes(t.name)))return!1;const e=this._processDataFromViewText(t);return" "==e.charAt(e.length-1)}_processDataFromDomText(t){let e=t.data;if(nr(t,this.preElements))return ji(t);e=e.replace(/[ \n\t\r]{1,}/g," ");const n=this._getTouchingInlineDomNode(t,!1),o=this._getTouchingInlineDomNode(t,!0),i=this._checkShouldLeftTrimDomText(n),r=this._checkShouldRightTrimDomText(t,o);return i&&(e=e.replace(/^ /,"")),r&&(e=e.replace(/ $/,"")),e=(e=ji(new Text(e))).replace(/ \u00A0/g,"  "),i&&(e=e.replace(/^\u00A0/," ")),Ei(o)&&" "!=o.data.charAt(0)||(e=e.replace(/\u00A0( *)$/," $1")),e}_checkShouldLeftTrimDomText(t){return!t||(!!tr(t)||/[^\S\u00A0]/.test(t.data.charAt(t.data.length-1)))}_checkShouldRightTrimDomText(t,e){return!e&&!Di(t)}_getTouchingViewTextNode(t,e){const n=new Go({startPosition:e?$o.createAfter(t):$o.createBefore(t),direction:e?"forward":"backward"});for(const t of n){if(t.item.is("containerElement"))return null;if(t.item.is("br"))return null;if(t.item.is("textProxy"))return t.item}return null}_getTouchingInlineDomNode(t,e){if(!t.parentNode)return null;const n=e?"nextNode":"previousNode",o=t.ownerDocument,i=Xi(t)[0],r=o.createTreeWalker(i,NodeFilter.SHOW_TEXT|NodeFilter.SHOW_ELEMENT,{acceptNode:t=>Ei(t)?NodeFilter.FILTER_ACCEPT:"BR"==t.tagName?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP});r.currentNode=t;const s=r[n]();if(null!==s){const e=function(t,e){const n=Xi(t),o=Xi(e);let i=0;for(;n[i]==o[i]&&n[i];)i++;return 0===i?null:n[i-1]}(t,s);if(e&&!nr(t,this.blockElements,e)&&!nr(s,this.blockElements,e))return s}return null}}function nr(t,e,n){let o=Xi(t);return n&&(o=o.slice(o.indexOf(n)+1)),o.some(t=>t.tagName&&e.includes(t.tagName.toLowerCase()))}function or(t,e){for(;t&&t!=Ki.document;)e(t),t=t.parentNode}function ir(t){const e=Object.prototype.toString.apply(t);return"[object Window]"==e||"[object global]"==e}var rr=No({},R,{listenTo(t,...e){if(qi(t)||ir(t)){const n=this._getProxyEmitter(t)||new sr(t);n.attach(...e),t=n}R.listenTo.call(this,t,...e)},stopListening(t,e,n){if(qi(t)||ir(t)){const e=this._getProxyEmitter(t);if(!e)return;t=e}R.stopListening.call(this,t,e,n),t instanceof sr&&t.detach(e)},_getProxyEmitter(t){return function(t,e){return t[N]&&t[N][e]?t[N][e].emitter:null}(this,ar(t))}});class sr{constructor(t){D(this,ar(t)),this._domNode=t}}function ar(t){return t["data-ck-expando"]||(t["data-ck-expando"]=E())}No(sr.prototype,R,{attach(t,e,n={}){if(this._domListeners&&this._domListeners[t])return;const o=this._createDomListener(t,!!n.useCapture);this._domNode.addEventListener(t,o,!!n.useCapture),this._domListeners||(this._domListeners={}),this._domListeners[t]=o},detach(t){let e;!this._domListeners[t]||(e=this._events[t])&&e.callbacks.length||this._domListeners[t].removeListener()},_createDomListener(t,e){const n=e=>{this.fire(t,e)};return n.removeListener=(()=>{this._domNode.removeEventListener(t,n,e),delete this._domListeners[t]}),n}});class cr{constructor(t){this.view=t,this.document=t.document,this.isEnabled=!1}enable(){this.isEnabled=!0}disable(){this.isEnabled=!1}destroy(){this.disable(),this.stopListening()}}B(cr,rr);var lr="__lodash_hash_undefined__";var dr=function(t){return this.__data__.set(t,lr),this};var ur=function(t){return this.__data__.has(t)};function hr(t){var e=-1,n=null==t?0:t.length;for(this.__data__=new qt;++e<n;)this.add(t[e])}hr.prototype.add=hr.prototype.push=dr,hr.prototype.has=ur;var fr=hr;var mr=function(t,e){for(var n=-1,o=null==t?0:t.length;++n<o;)if(e(t[n],n,t))return!0;return!1};var pr=function(t,e){return t.has(e)},gr=1,br=2;var wr=function(t,e,n,o,i,r){var s=n&gr,a=t.length,c=e.length;if(a!=c&&!(s&&c>a))return!1;var l=r.get(t);if(l&&r.get(e))return l==e;var d=-1,u=!0,h=n&br?new fr:void 0;for(r.set(t,e),r.set(e,t);++d<a;){var f=t[d],m=e[d];if(o)var p=s?o(m,f,d,e,t,r):o(f,m,d,t,e,r);if(void 0!==p){if(p)continue;u=!1;break}if(h){if(!mr(e,function(t,e){if(!pr(h,e)&&(f===t||i(f,t,n,o,r)))return h.push(e)})){u=!1;break}}else if(f!==m&&!i(f,m,n,o,r)){u=!1;break}}return r.delete(t),r.delete(e),u};var _r=function(t){var e=-1,n=Array(t.size);return t.forEach(function(t,o){n[++e]=[o,t]}),n};var kr=function(t){var e=-1,n=Array(t.size);return t.forEach(function(t){n[++e]=t}),n},vr=1,yr=2,xr="[object Boolean]",Ar="[object Date]",Cr="[object Error]",Tr="[object Map]",Mr="[object Number]",Pr="[object RegExp]",Sr="[object Set]",Er="[object String]",Ir="[object Symbol]",Nr="[object ArrayBuffer]",Or="[object DataView]",Rr=i?i.prototype:void 0,Dr=Rr?Rr.valueOf:void 0;var Lr=function(t,e,n,o,i,r,s){switch(n){case Or:if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case Nr:return!(t.byteLength!=e.byteLength||!r(new dn(t),new dn(e)));case xr:case Ar:case Mr:return q(+t,+e);case Cr:return t.name==e.name&&t.message==e.message;case Pr:case Er:return t==e+"";case Tr:var a=_r;case Sr:var c=o&vr;if(a||(a=kr),t.size!=e.size&&!c)return!1;var l=s.get(t);if(l)return l==e;o|=yr,s.set(t,e);var d=wr(a(t),a(e),o,i,r,s);return s.delete(t),d;case Ir:if(Dr)return Dr.call(t)==Dr.call(e)}return!1},jr=1,Vr=Object.prototype.hasOwnProperty;var Fr=function(t,e,n,o,i,r){var s=n&jr,a=$e(t),c=a.length;if(c!=$e(e).length&&!s)return!1;for(var l=c;l--;){var d=a[l];if(!(s?d in e:Vr.call(e,d)))return!1}var u=r.get(t);if(u&&r.get(e))return u==e;var h=!0;r.set(t,e),r.set(e,t);for(var f=s;++l<c;){var m=t[d=a[l]],p=e[d];if(o)var g=s?o(p,m,d,e,t,r):o(m,p,d,t,e,r);if(!(void 0===g?m===p||i(m,p,n,o,r):g)){h=!1;break}f||(f="constructor"==d)}if(h&&!f){var b=t.constructor,w=e.constructor;b!=w&&"constructor"in t&&"constructor"in e&&!("function"==typeof b&&b instanceof b&&"function"==typeof w&&w instanceof w)&&(h=!1)}return r.delete(t),r.delete(e),h},zr=1,Br="[object Arguments]",Ur="[object Array]",Hr="[object Object]",qr=Object.prototype.hasOwnProperty;var Wr=function(t,e,n,o,i,r){var s=ce(t),a=ce(e),c=s?Ur:an(t),l=a?Ur:an(e),d=(c=c==Br?Hr:c)==Hr,u=(l=l==Br?Hr:l)==Hr,h=c==l;if(h&&Object(le.a)(t)){if(!Object(le.a)(e))return!1;s=!0,d=!1}if(h&&!d)return r||(r=new $t),s||ke(t)?wr(t,e,n,o,i,r):Lr(t,e,c,n,o,i,r);if(!(n&zr)){var f=d&&qr.call(t,"__wrapped__"),m=u&&qr.call(e,"__wrapped__");if(f||m){var p=f?t.value():t,g=m?e.value():e;return r||(r=new $t),i(p,g,n,o,r)}}return!!h&&(r||(r=new $t),Fr(t,e,n,o,i,r))};var Yr=function t(e,n,o,i,r){return e===n||(null==e||null==n||!w(e)&&!w(n)?e!=e&&n!=n:Wr(e,n,o,i,t,r))};var Gr=function(t,e,n){var o=(n="function"==typeof n?n:void 0)?n(t,e):void 0;return void 0===o?Yr(t,e,void 0,n):!!o};class $r extends cr{constructor(t){super(t),this._config={childList:!0,characterData:!0,characterDataOldValue:!0,subtree:!0},this.domConverter=t.domConverter,this.renderer=t._renderer,this._domElements=[],this._mutationObserver=new window.MutationObserver(this._onMutations.bind(this))}flush(){this._onMutations(this._mutationObserver.takeRecords())}observe(t){this._domElements.push(t),this.isEnabled&&this._mutationObserver.observe(t,this._config)}enable(){super.enable();for(const t of this._domElements)this._mutationObserver.observe(t,this._config)}disable(){super.disable(),this._mutationObserver.disconnect()}destroy(){super.destroy(),this._mutationObserver.disconnect()}_onMutations(t){if(0===t.length)return;const e=this.domConverter,n=new Map,o=new Set;for(const n of t)if("childList"===n.type){const t=e.mapDomToView(n.target);if(t&&t.is("uiElement"))continue;t&&!this._isBogusBrMutation(n)&&o.add(t)}for(const i of t){const t=e.mapDomToView(i.target);if((!t||!t.is("uiElement"))&&"characterData"===i.type){const t=e.findCorrespondingViewText(i.target);t&&!o.has(t.parent)?n.set(t,{type:"text",oldText:t.data,newText:ji(i.target),node:t}):!t&&Di(i.target)&&o.add(e.mapDomToView(i.target.parentNode))}}const i=[];for(const t of n.values())this.renderer.markToSync("text",t.node),i.push(t);for(const t of o){const n=e.mapViewToDom(t),o=Array.from(t.getChildren()),r=Array.from(e.domChildrenToView(n,{withChildren:!1}));Gr(o,r,a)||(this.renderer.markToSync("children",t),i.push({type:"children",oldChildren:o,newChildren:r,node:t}))}const r=t[0].target.ownerDocument.getSelection();let s=null;if(r&&r.anchorNode){const t=e.domPositionToView(r.anchorNode,r.anchorOffset),n=e.domPositionToView(r.focusNode,r.focusOffset);t&&n&&(s=new Zo(t)).setFocus(n)}function a(t,e){if(!Array.isArray(t))return t===e||!(!t.is("text")||!e.is("text"))&&t.data===e.data}this.document.fire("mutations",i,s),this.view.render()}_isBogusBrMutation(t){let e=null;return null===t.nextSibling&&0===t.removedNodes.length&&1==t.addedNodes.length&&(e=this.domConverter.domToView(t.addedNodes[0],{withChildren:!1})),e&&e.is("element","br")}}class Qr{constructor(t,e,n){this.view=t,this.document=t.document,this.domEvent=e,this.domTarget=e.target,No(this,n)}get target(){return this.view.domConverter.mapDomToView(this.domTarget)}preventDefault(){this.domEvent.preventDefault()}stopPropagation(){this.domEvent.stopPropagation()}}class Jr extends cr{constructor(t){super(t),this.useCapture=!1}observe(t){("string"==typeof this.domEventType?[this.domEventType]:this.domEventType).forEach(e=>{this.listenTo(t,e,(t,e)=>{this.isEnabled&&this.onDomEvent(e)},{useCapture:this.useCapture})})}fire(t,e,n){this.isEnabled&&this.document.fire(t,new Qr(this.view,e,n))}}class Kr extends Jr{constructor(t){super(t),this.domEventType=["keydown","keyup"]}onDomEvent(t){this.fire(t.type,t,{keyCode:t.keyCode,altKey:t.altKey,ctrlKey:t.ctrlKey||t.metaKey,shiftKey:t.shiftKey,get keystroke(){return fi(this)}})}}var Zr=function(){return o.a.Date.now()},Xr="[object Symbol]";var ts=function(t){return"symbol"==typeof t||w(t)&&p(t)==Xr},es=NaN,ns=/^\s+|\s+$/g,os=/^[-+]0x[0-9a-f]+$/i,is=/^0b[01]+$/i,rs=/^0o[0-7]+$/i,ss=parseInt;var as=function(t){if("number"==typeof t)return t;if(ts(t))return es;if(ot(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=ot(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(ns,"");var n=is.test(t);return n||rs.test(t)?ss(t.slice(2),n?2:8):os.test(t)?es:+t},cs="Expected a function",ls=Math.max,ds=Math.min;var us=function(t,e,n){var o,i,r,s,a,c,l=0,d=!1,u=!1,h=!0;if("function"!=typeof t)throw new TypeError(cs);function f(e){var n=o,r=i;return o=i=void 0,l=e,s=t.apply(r,n)}function m(t){var n=t-c;return void 0===c||n>=e||n<0||u&&t-l>=r}function p(){var t=Zr();if(m(t))return g(t);a=setTimeout(p,function(t){var n=e-(t-c);return u?ds(n,r-(t-l)):n}(t))}function g(t){return a=void 0,h&&o?f(t):(o=i=void 0,s)}function b(){var t=Zr(),n=m(t);if(o=arguments,i=this,c=t,n){if(void 0===a)return function(t){return l=t,a=setTimeout(p,e),d?f(t):s}(c);if(u)return a=setTimeout(p,e),f(c)}return void 0===a&&(a=setTimeout(p,e)),s}return e=as(e)||0,ot(n)&&(d=!!n.leading,r=(u="maxWait"in n)?ls(as(n.maxWait)||0,e):r,h="trailing"in n?!!n.trailing:h),b.cancel=function(){void 0!==a&&clearTimeout(a),l=0,o=c=i=a=void 0},b.flush=function(){return void 0===a?s:g(Zr())},b};class hs extends cr{constructor(t){super(t),this._fireSelectionChangeDoneDebounced=us(t=>this.document.fire("selectionChangeDone",t),200)}observe(){const t=this.document;t.on("keydown",(e,n)=>{t.selection.isFake&&function(t){return t==hi.arrowright||t==hi.arrowleft||t==hi.arrowup||t==hi.arrowdown}(n.keyCode)&&this.isEnabled&&(n.preventDefault(),this._handleSelectionMove(n.keyCode))},{priority:"lowest"})}destroy(){super.destroy(),this._fireSelectionChangeDoneDebounced.cancel()}_handleSelectionMove(t){const e=this.document.selection,n=new Zo(e.getRanges(),{backward:e.isBackward,fake:!1});t!=hi.arrowleft&&t!=hi.arrowup||n.setTo(n.getFirstPosition()),t!=hi.arrowright&&t!=hi.arrowdown||n.setTo(n.getLastPosition());const o={oldSelection:e,newSelection:n,domSelection:null};this.document.fire("selectionChange",o),this._fireSelectionChangeDoneDebounced(o)}}var fs=n(1);class ms extends cr{constructor(t){super(t),this.mutationObserver=t.getObserver($r),this.selection=this.document.selection,this.domConverter=t.domConverter,this._documents=new WeakSet,this._fireSelectionChangeDoneDebounced=us(t=>this.document.fire("selectionChangeDone",t),200),this._clearInfiniteLoopInterval=setInterval(()=>this._clearInfiniteLoop(),1e3),this._loopbackCounter=0}observe(t){const e=t.ownerDocument;this._documents.has(e)||(this.listenTo(e,"selectionchange",()=>{this._handleSelectionChange(e)}),this._documents.add(e))}destroy(){super.destroy(),clearInterval(this._clearInfiniteLoopInterval),this._fireSelectionChangeDoneDebounced.cancel()}_handleSelectionChange(t){if(!this.isEnabled||!this.document.isFocused&&!this.document.isReadOnly)return;this.mutationObserver.flush();const e=t.defaultView.getSelection(),n=this.domConverter.domSelectionToView(e);if(!this.selection.isEqual(n)||!this.domConverter.isDomSelectionCorrect(e))if(++this._loopbackCounter>60)fs.a.warn("selectionchange-infinite-loop: Selection change observer detected an infinite rendering loop.");else if(this.selection.isSimilar(n))this.view.render();else{const t={oldSelection:this.selection,newSelection:n,domSelection:e};this.document.fire("selectionChange",t),this._fireSelectionChangeDoneDebounced(t)}}_clearInfiniteLoop(){this._loopbackCounter=0}}class ps extends Jr{constructor(t){super(t),this.domEventType=["focus","blur"],this.useCapture=!0;const e=this.document;e.on("focus",()=>{e.isFocused=!0,this._renderTimeoutId=setTimeout(()=>t.render(),50)}),e.on("blur",(n,o)=>{const i=e.selection.editableElement;null!==i&&i!==o.target||(e.isFocused=!1,t.render())})}onDomEvent(t){this.fire(t.type,t)}destroy(){this._renderTimeoutId&&clearTimeout(this._renderTimeoutId),super.destroy()}}class gs extends Jr{constructor(t){super(t),this.domEventType=["compositionstart","compositionupdate","compositionend"];const e=this.document;e.on("compositionstart",()=>{e.isComposing=!0}),e.on("compositionend",()=>{e.isComposing=!1})}onDomEvent(t){this.fire(t.type,t)}}function bs(t){return"[object Range]"==Object.prototype.toString.apply(t)}function ws(t){const e=t.ownerDocument.defaultView.getComputedStyle(t);return{top:parseInt(e.borderTopWidth,10),right:parseInt(e.borderRightWidth,10),bottom:parseInt(e.borderBottomWidth,10),left:parseInt(e.borderLeftWidth,10)}}const _s=["top","right","bottom","left","width","height"];class ks{constructor(t){const e=bs(t);if(Object.defineProperty(this,"_source",{value:t._source||t,writable:!0,enumerable:!1}),tr(t)||e){const n=e?t.startContainer:t;n.ownerDocument&&n.ownerDocument.body.contains(n)||fs.a.warn("rect-source-not-in-dom: The source of this rect does not belong to any rendered DOM tree.",{source:t}),vs(this,e?ks.getDomRangeRects(t)[0]:t.getBoundingClientRect())}else if(ir(t)){const{innerWidth:e,innerHeight:n}=t;vs(this,{top:0,right:e,bottom:n,left:0,width:e,height:n})}else vs(this,t)}clone(){return new ks(this)}moveTo(t,e){return this.top=e,this.right=t+this.width,this.bottom=e+this.height,this.left=t,this}moveBy(t,e){return this.top+=e,this.right+=t,this.left+=t,this.bottom+=e,this}getIntersection(t){const e={top:Math.max(this.top,t.top),right:Math.min(this.right,t.right),bottom:Math.min(this.bottom,t.bottom),left:Math.max(this.left,t.left)};return e.width=e.right-e.left,e.height=e.bottom-e.top,e.width<0||e.height<0?null:new ks(e)}getIntersectionArea(t){const e=this.getIntersection(t);return e?e.getArea():0}getArea(){return this.width*this.height}getVisible(){const t=this._source;let e=this.clone();if(!ys(t)){let n=t.parentNode||t.commonAncestorContainer;for(;n&&!ys(n);){const t=new ks(n),o=e.getIntersection(t);if(!o)return null;o.getArea()<e.getArea()&&(e=o),n=n.parentNode}}return e}isEqual(t){for(const e of _s)if(this[e]!==t[e])return!1;return!0}contains(t){const e=this.getIntersection(t);return!(!e||!e.isEqual(t))}excludeScrollbarsAndBorders(){const t=this._source;let e,n;if(ir(t))e=t.innerWidth-t.document.documentElement.clientWidth,n=t.innerHeight-t.document.documentElement.clientHeight;else{const o=ws(this._source);e=t.offsetWidth-t.clientWidth,n=t.offsetHeight-t.clientHeight,this.moveBy(o.left,o.top)}return this.width-=e,this.right-=e,this.height-=n,this.bottom-=n,this}static getDomRangeRects(t){const e=[],n=Array.from(t.getClientRects());if(n.length)for(const t of n)e.push(new ks(t));else{let n=t.startContainer;Ei(n)&&(n=n.parentNode);const o=new ks(n.getBoundingClientRect());o.right=o.left,o.width=0,e.push(o)}return e}}function vs(t,e){for(const n of _s)t[n]=e[n]}function ys(t){return!!tr(t)&&t===t.ownerDocument.body}function xs({target:t,viewportOffset:e=0}){const n=Es(t);let o=n,i=null;for(;o;){let r;Cs(r=Is(o==n?t:i),()=>Ns(t,o));const s=Ns(t,o);if(As(o,s,e),o.parent!=o){if(i=o.frameElement,o=o.parent,!i)return}else o=null}}function As(t,e,n){const o=e.clone().moveBy(0,n),i=e.clone().moveBy(0,-n),r=new ks(t).excludeScrollbarsAndBorders();if(![i,o].every(t=>r.contains(t))){let{scrollX:s,scrollY:a}=t;Ms(i,r)?a-=r.top-e.top+n:Ts(o,r)&&(a+=e.bottom-r.bottom+n),Ps(e,r)?s-=r.left-e.left+n:Ss(e,r)&&(s+=e.right-r.right+n),t.scrollTo(s,a)}}function Cs(t,e){const n=Es(t);let o,i;for(;t!=n.document.body;)i=e(),(o=new ks(t).excludeScrollbarsAndBorders()).contains(i)||(Ms(i,o)?t.scrollTop-=o.top-i.top:Ts(i,o)&&(t.scrollTop+=i.bottom-o.bottom),Ps(i,o)?t.scrollLeft-=o.left-i.left:Ss(i,o)&&(t.scrollLeft+=i.right-o.right)),t=t.parentNode}function Ts(t,e){return t.bottom>e.bottom}function Ms(t,e){return t.top<e.top}function Ps(t,e){return t.left<e.left}function Ss(t,e){return t.right>e.right}function Es(t){return bs(t)?t.startContainer.ownerDocument.defaultView:t.ownerDocument.defaultView}function Is(t){if(bs(t)){let e=t.commonAncestorContainer;return Ei(e)&&(e=e.parentNode),e}return t.parentNode}function Ns(t,e){const n=Es(t),o=new ks(t);if(n===e)return o;{let t=n;for(;t!=e;){const e=t.frameElement,n=new ks(e).excludeScrollbarsAndBorders();o.moveBy(n.left,n.top),t=t.parent}}return o}Object.assign({},{scrollViewportToShowTarget:xs,scrollAncestorsToShowTarget:function(t){Cs(Is(t),()=>new ks(t))}});class Os{constructor(){this.document=new ei,this.domConverter=new er,this._renderer=new $i(this.domConverter,this.document.selection),this._renderer.bind("isFocused").to(this.document),this.domRoots=new Map,this._observers=new Map,this._ongoingChange=!1,this._renderingInProgress=!1,this._postFixersInProgress=!1,this._renderingDisabled=!1,this._writer=new ki(this.document),this.addObserver($r),this.addObserver(ms),this.addObserver(ps),this.addObserver(Kr),this.addObserver(hs),this.addObserver(gs),function(t){t.document.on("keydown",zi)}(this),bi(this),this.on("render",()=>{this._render(),this.document.fire("layoutChanged")})}attachDomRoot(t,e="main"){const n=this.document.getRoot(e);n._name=t.tagName.toLowerCase(),this.domRoots.set(e,t),this.domConverter.bindElements(t,n),this._renderer.markToSync("children",n),this._renderer.domDocuments.add(t.ownerDocument),n.on("change:children",(t,e)=>this._renderer.markToSync("children",e)),n.on("change:attributes",(t,e)=>this._renderer.markToSync("attributes",e)),n.on("change:text",(t,e)=>this._renderer.markToSync("text",e));for(const n of this._observers.values())n.observe(t,e)}getDomRoot(t="main"){return this.domRoots.get(t)}addObserver(t){let e=this._observers.get(t);if(e)return e;e=new t(this),this._observers.set(t,e);for(const[t,n]of this.domRoots)e.observe(n,t);return e.enable(),e}getObserver(t){return this._observers.get(t)}disableObservers(){for(const t of this._observers.values())t.disable()}enableObservers(){for(const t of this._observers.values())t.enable()}scrollToTheSelection(){const t=this.document.selection.getFirstRange();t&&xs({target:this.domConverter.viewRangeToDom(t),viewportOffset:20})}focus(){if(!this.document.isFocused){const t=this.document.selection.editableElement;t?(this.domConverter.focus(t),this.render()):fs.a.warn("view-focus-no-selection: There is no selection in any editable to focus.")}}change(t){if(this._renderingInProgress||this._postFixersInProgress)throw new M.b("cannot-change-view-tree: Attempting to make changes to the view when it is in incorrect state: rendering or post-fixers are in progress. This may cause some unexpected behaviour and inconsistency between the DOM and the view.");this._ongoingChange?t(this._writer):(this._ongoingChange=!0,t(this._writer),this._ongoingChange=!1,this._renderingDisabled||(this._postFixersInProgress=!0,this.document._callPostFixers(this._writer),this._postFixersInProgress=!1,this.fire("render")))}render(){this.change(()=>{})}destroy(){for(const t of this._observers.values())t.destroy();this.stopListening()}_render(){this._renderingInProgress=!0,this.disableObservers(),this._renderer.render(),this.enableObservers(),this._renderingInProgress=!1}}function Rs(t){return C(t)?uo(t):new Map(t)}B(Os,jo);class Ds{constructor(t){this.parent=null,this._attrs=Rs(t)}get index(){let t;if(!this.parent)return null;if(null===(t=this.parent.getChildIndex(this)))throw new M.b("model-node-not-found-in-parent: The node's parent does not contain this node.");return t}get startOffset(){let t;if(!this.parent)return null;if(null===(t=this.parent.getChildStartOffset(this)))throw new M.b("model-node-not-found-in-parent: The node's parent does not contain this node.");return t}get offsetSize(){return 1}get endOffset(){return this.parent?this.startOffset+this.offsetSize:null}get nextSibling(){const t=this.index;return null!==t&&this.parent.getChild(t+1)||null}get previousSibling(){const t=this.index;return null!==t&&this.parent.getChild(t-1)||null}get root(){let t=this;for(;t.parent;)t=t.parent;return t}get document(){return this.root==this?null:this.root.document||null}getPath(){const t=[];let e=this;for(;e.parent;)t.unshift(e.startOffset),e=e.parent;return t}getAncestors(t={includeSelf:!1,parentFirst:!1}){const e=[];let n=t.includeSelf?this:this.parent;for(;n;)e[t.parentFirst?"push":"unshift"](n),n=n.parent;return e}getCommonAncestor(t,e={}){const n=this.getAncestors(e),o=t.getAncestors(e);let i=0;for(;n[i]==o[i]&&n[i];)i++;return 0===i?null:n[i-1]}isBefore(t){if(this==t)return!1;if(this.root!==t.root)return!1;const e=this.getPath(),n=t.getPath(),o=U(e,n);switch(o){case"prefix":return!0;case"extension":return!1;default:return e[o]<n[o]}}isAfter(t){return this!=t&&(this.root===t.root&&!this.isBefore(t))}hasAttribute(t){return this._attrs.has(t)}getAttribute(t){return this._attrs.get(t)}getAttributes(){return this._attrs.entries()}getAttributeKeys(){return this._attrs.keys()}toJSON(){const t={};return this._attrs.size&&(t.attributes=Array.from(this._attrs).reduce((t,e)=>(t[e[0]]=e[1],t),{})),t}_clone(){return new Ds(this._attrs)}_remove(){this.parent._removeChildren(this.index)}_setAttribute(t,e){this._attrs.set(t,e)}_setAttributesTo(t){this._attrs=Rs(t)}_removeAttribute(t){return this._attrs.delete(t)}_clearAttributes(){this._attrs.clear()}is(t){return"node"==t}}class Ls extends Ds{constructor(t,e){super(e),this._data=t||""}get offsetSize(){return this.data.length}get data(){return this._data}is(t){return"text"==t||super.is(t)}toJSON(){const t=super.toJSON();return t.data=this.data,t}_clone(){return new Ls(this.data,this.getAttributes())}static fromJSON(t){return new Ls(t.data,t.attributes)}}class js{constructor(t,e,n){if(this.textNode=t,e<0||e>t.offsetSize)throw new M.b("model-textproxy-wrong-offsetintext: Given offsetInText value is incorrect.");if(n<0||e+n>t.offsetSize)throw new M.b("model-textproxy-wrong-length: Given length value is incorrect.");this.data=t.data.substring(e,e+n),this.offsetInText=e}get startOffset(){return null!==this.textNode.startOffset?this.textNode.startOffset+this.offsetInText:null}get offsetSize(){return this.data.length}get endOffset(){return null!==this.startOffset?this.startOffset+this.offsetSize:null}get isPartial(){return this.offsetSize!==this.textNode.offsetSize}get parent(){return this.textNode.parent}get root(){return this.textNode.root}get document(){return this.textNode.document}is(t){return"textProxy"==t}getPath(){const t=this.textNode.getPath();return t.length>0&&(t[t.length-1]+=this.offsetInText),t}getAncestors(t={includeSelf:!1,parentFirst:!1}){const e=[];let n=t.includeSelf?this:this.parent;for(;n;)e[t.parentFirst?"push":"unshift"](n),n=n.parent;return e}hasAttribute(t){return this.textNode.hasAttribute(t)}getAttribute(t){return this.textNode.getAttribute(t)}getAttributes(){return this.textNode.getAttributes()}getAttributeKeys(){return this.textNode.getAttributeKeys()}}class Vs{constructor(t){this._nodes=[],t&&this._insertNodes(0,t)}[Symbol.iterator](){return this._nodes[Symbol.iterator]()}get length(){return this._nodes.length}get maxOffset(){return this._nodes.reduce((t,e)=>t+e.offsetSize,0)}getNode(t){return this._nodes[t]||null}getNodeIndex(t){const e=this._nodes.indexOf(t);return-1==e?null:e}getNodeStartOffset(t){const e=this.getNodeIndex(t);return null===e?null:this._nodes.slice(0,e).reduce((t,e)=>t+e.offsetSize,0)}indexToOffset(t){if(t==this._nodes.length)return this.maxOffset;const e=this._nodes[t];if(!e)throw new M.b("model-nodelist-index-out-of-bounds: Given index cannot be found in the node list.");return this.getNodeStartOffset(e)}offsetToIndex(t){let e=0;for(const n of this._nodes){if(t>=e&&t<e+n.offsetSize)return this.getNodeIndex(n);e+=n.offsetSize}if(e!=t)throw new M.b("model-nodelist-offset-out-of-bounds: Given offset cannot be found in the node list.",{offset:t,nodeList:this});return this.length}_insertNodes(t,e){for(const t of e)if(!(t instanceof Ds))throw new M.b("model-nodelist-insertNodes-not-node: Trying to insert an object which is not a Node instance.");this._nodes.splice(t,0,...e)}_removeNodes(t,e=1){return this._nodes.splice(t,e)}toJSON(){return this._nodes.map(t=>t.toJSON())}}class Fs extends Ds{constructor(t,e,n){super(e),this.name=t,this._children=new Vs,n&&this._insertChild(0,n)}get childCount(){return this._children.length}get maxOffset(){return this._children.maxOffset}get isEmpty(){return 0===this.childCount}is(t,e=null){return e?"element"==t&&e==this.name:"element"==t||t==this.name||super.is(t)}getChild(t){return this._children.getNode(t)}getChildren(){return this._children[Symbol.iterator]()}getChildIndex(t){return this._children.getNodeIndex(t)}getChildStartOffset(t){return this._children.getNodeStartOffset(t)}offsetToIndex(t){return this._children.offsetToIndex(t)}getNodeByPath(t){let e=this;for(const n of t)e=e.getChild(e.offsetToIndex(n));return e}toJSON(){const t=super.toJSON();if(t.name=this.name,this._children.length>0){t.children=[];for(const e of this._children)t.children.push(e.toJSON())}return t}_clone(t=!1){const e=t?Array.from(this._children).map(t=>t._clone(!0)):null;return new Fs(this.name,this.getAttributes(),e)}_appendChild(t){this._insertChild(this.childCount,t)}_insertChild(t,e){const n=function(t){if("string"==typeof t)return[new Ls(t)];ho(t)||(t=[t]);return Array.from(t).map(t=>"string"==typeof t?new Ls(t):t instanceof js?new Ls(t.data,t.getAttributes()):t)}(e);for(const t of n)null!==t.parent&&t._remove(),t.parent=this;this._children._insertNodes(t,n)}_removeChildren(t,e=1){const n=this._children._removeNodes(t,e);for(const t of n)t.parent=null;return n}static fromJSON(t){let e=null;if(t.children){e=[];for(const n of t.children)n.name?e.push(Fs.fromJSON(n)):e.push(Ls.fromJSON(n))}return new Fs(t.name,t.attributes,e)}}class zs{constructor(t={}){if(!t.boundaries&&!t.startPosition)throw new M.b("model-tree-walker-no-start-position: Neither boundaries nor starting position have been defined.");const e=t.direction||"forward";if("forward"!=e&&"backward"!=e)throw new M.b("model-tree-walker-unknown-direction: Only `backward` and `forward` direction allowed.",{direction:e});this.direction=e,this.boundaries=t.boundaries||null,t.startPosition?this.position=Hs.createFromPosition(t.startPosition):this.position=Hs.createFromPosition(this.boundaries["backward"==this.direction?"end":"start"]),this.position.stickiness="toNone",this.singleCharacters=!!t.singleCharacters,this.shallow=!!t.shallow,this.ignoreElementEnd=!!t.ignoreElementEnd,this._boundaryStartParent=this.boundaries?this.boundaries.start.parent:null,this._boundaryEndParent=this.boundaries?this.boundaries.end.parent:null,this._visitedParent=this.position.parent}[Symbol.iterator](){return this}skip(t){let e,n,o,i;do{o=this.position,i=this._visitedParent,({done:e,value:n}=this.next())}while(!e&&t(n));e||(this.position=o,this._visitedParent=i)}next(){return"forward"==this.direction?this._next():this._previous()}_next(){const t=this.position,e=Hs.createFromPosition(this.position),n=this._visitedParent;if(null===n.parent&&e.offset===n.maxOffset)return{done:!0};if(n===this._boundaryEndParent&&e.offset==this.boundaries.end.offset)return{done:!0};const o=e.textNode?e.textNode:e.nodeAfter;if(o instanceof Fs)return this.shallow?e.offset++:(e.path.push(0),this._visitedParent=o),this.position=e,Bs("elementStart",o,t,e,1);if(o instanceof Ls){let i;if(this.singleCharacters)i=1;else{let t=o.endOffset;this._boundaryEndParent==n&&this.boundaries.end.offset<t&&(t=this.boundaries.end.offset),i=t-e.offset}const r=e.offset-o.startOffset,s=new js(o,r,i);return e.offset+=i,this.position=e,Bs("text",s,t,e,i)}return e.path.pop(),e.offset++,this.position=e,this._visitedParent=n.parent,this.ignoreElementEnd?this._next():Bs("elementEnd",n,t,e)}_previous(){const t=this.position,e=Hs.createFromPosition(this.position),n=this._visitedParent;if(null===n.parent&&0===e.offset)return{done:!0};if(n==this._boundaryStartParent&&e.offset==this.boundaries.start.offset)return{done:!0};const o=e.textNode?e.textNode:e.nodeBefore;if(o instanceof Fs)return e.offset--,this.shallow?(this.position=e,Bs("elementStart",o,t,e,1)):(e.path.push(o.maxOffset),this.position=e,this._visitedParent=o,this.ignoreElementEnd?this._previous():Bs("elementEnd",o,t,e));if(o instanceof Ls){let i;if(this.singleCharacters)i=1;else{let t=o.startOffset;this._boundaryStartParent==n&&this.boundaries.start.offset>t&&(t=this.boundaries.start.offset),i=e.offset-t}const r=e.offset-o.startOffset,s=new js(o,r-i,i);return e.offset-=i,this.position=e,Bs("text",s,t,e,i)}return e.path.pop(),this.position=e,this._visitedParent=n.parent,Bs("elementStart",n,t,e,1)}}function Bs(t,e,n,o,i){return{done:!1,value:{type:t,item:e,previousPosition:n,nextPosition:o,length:i}}}var Us=function(t){var e=null==t?0:t.length;return e?t[e-1]:void 0};class Hs{constructor(t,e,n="toNone"){if(!t.is("element")&&!t.is("documentFragment"))throw new M.b("model-position-root-invalid: Position root invalid.");if(!(e instanceof Array)||0===e.length)throw new M.b("model-position-path-incorrect: Position path must be an array with at least one item.",{path:e});e=t.getPath().concat(e),t=t.root,this.root=t,this.path=e,this.stickiness=n}get offset(){return Us(this.path)}set offset(t){this.path[this.path.length-1]=t}get parent(){let t=this.root;for(let e=0;e<this.path.length-1;e++)t=t.getChild(t.offsetToIndex(this.path[e]));return t}get index(){return this.parent.offsetToIndex(this.offset)}get textNode(){const t=this.parent.getChild(this.index);return t instanceof Ls&&t.startOffset<this.offset?t:null}get nodeAfter(){return null===this.textNode?this.parent.getChild(this.index):null}get nodeBefore(){return null===this.textNode?this.parent.getChild(this.index-1):null}get isAtStart(){return 0===this.offset}get isAtEnd(){return this.offset==this.parent.maxOffset}compareWith(t){if(this.root!=t.root)return"different";const e=U(this.path,t.path);switch(e){case"same":return"same";case"prefix":return"before";case"extension":return"after";default:return this.path[e]<t.path[e]?"before":"after"}}getLastMatchingPosition(t,e={}){e.startPosition=this;const n=new zs(e);return n.skip(t),n.position}getParentPath(){return this.path.slice(0,-1)}getAncestors(){return this.parent.is("documentFragment")?[this.parent]:this.parent.getAncestors({includeSelf:!0})}getCommonPath(t){if(this.root!=t.root)return[];const e=U(this.path,t.path),n="string"==typeof e?Math.min(this.path.length,t.path.length):e;return this.path.slice(0,n)}getCommonAncestor(t){const e=this.getAncestors(),n=t.getAncestors();let o=0;for(;e[o]==n[o]&&e[o];)o++;return 0===o?null:e[o-1]}getShiftedBy(t){const e=Hs.createFromPosition(this),n=e.offset+t;return e.offset=n<0?0:n,e}isAfter(t){return"after"==this.compareWith(t)}isBefore(t){return"before"==this.compareWith(t)}isEqual(t){return"same"==this.compareWith(t)}isTouching(t){let e=null,n=null;switch(this.compareWith(t)){case"same":return!0;case"before":e=Hs.createFromPosition(this),n=Hs.createFromPosition(t);break;case"after":e=Hs.createFromPosition(t),n=Hs.createFromPosition(this);break;default:return!1}let o=e.parent;for(;e.path.length+n.path.length;){if(e.isEqual(n))return!0;if(e.path.length>n.path.length){if(e.offset!==o.maxOffset)return!1;e.path=e.path.slice(0,-1),o=o.parent,e.offset++}else{if(0!==n.offset)return!1;n.path=n.path.slice(0,-1)}}}hasSameParentAs(t){if(this.root!==t.root)return!1;return"same"==U(this.getParentPath(),t.getParentPath())}getTransformedByOperation(t){let e;switch(t.type){case"insert":e=this._getTransformedByInsertOperation(t);break;case"move":case"remove":case"reinsert":e=this._getTransformedByMoveOperation(t);break;case"split":e=this._getTransformedBySplitOperation(t);break;case"merge":e=this._getTransformedByMergeOperation(t);break;default:e=Hs.createFromPosition(this)}return e}_getTransformedByInsertOperation(t){return this._getTransformedByInsertion(t.position,t.howMany)}_getTransformedByMoveOperation(t){return this._getTransformedByMove(t.sourcePosition,t.targetPosition,t.howMany)}_getTransformedBySplitOperation(t){const e=t.movedRange;return e.containsPosition(this)||e.start.isEqual(this)&&"toNext"==this.stickiness?this._getCombined(t.splitPosition,t.moveTargetPosition):t.graveyardPosition?this._getTransformedByMove(t.graveyardPosition,t.insertionPosition,1):this._getTransformedByInsertion(t.insertionPosition,1)}_getTransformedByMergeOperation(t){const e=t.movedRange;let n;return e.containsPosition(this)||e.start.isEqual(this)?(n=this._getCombined(t.sourcePosition,t.targetPosition),t.sourcePosition.isBefore(t.targetPosition)&&(n=n._getTransformedByDeletion(t.deletionPosition,1))):n=this.isEqual(t.deletionPosition)?Hs.createFromPosition(t.deletionPosition):this._getTransformedByMove(t.deletionPosition,t.graveyardPosition,1),n}_getTransformedByDeletion(t,e){const n=Hs.createFromPosition(this);if(this.root!=t.root)return n;if("same"==U(t.getParentPath(),this.getParentPath())){if(t.offset<this.offset){if(t.offset+e>this.offset)return null;n.offset-=e}}else if("prefix"==U(t.getParentPath(),this.getParentPath())){const o=t.path.length-1;if(t.offset<=this.path[o]){if(t.offset+e>this.path[o])return null;n.path[o]-=e}}return n}_getTransformedByInsertion(t,e){const n=Hs.createFromPosition(this);if(this.root!=t.root)return n;if("same"==U(t.getParentPath(),this.getParentPath()))(t.offset<this.offset||t.offset==this.offset&&"toPrevious"!=this.stickiness)&&(n.offset+=e);else if("prefix"==U(t.getParentPath(),this.getParentPath())){const o=t.path.length-1;t.offset<=this.path[o]&&(n.path[o]+=e)}return n}_getTransformedByMove(t,e,n){if(e=e._getTransformedByDeletion(t,n),t.isEqual(e))return Hs.createFromPosition(this);const o=this._getTransformedByDeletion(t,n);return null===o||t.isEqual(this)&&"toNext"==this.stickiness||t.getShiftedBy(n).isEqual(this)&&"toPrevious"==this.stickiness?this._getCombined(t,e):o._getTransformedByInsertion(e,n)}_getCombined(t,e){const n=t.path.length-1,o=Hs.createFromPosition(e);return o.stickiness=this.stickiness,o.offset=o.offset+this.path[n]-t.offset,o.path=o.path.concat(this.path.slice(n+1)),o}toJSON(){return{root:this.root.toJSON(),path:Array.from(this.path),stickiness:this.stickiness}}static createAt(t,e){if(t instanceof Hs)return this.createFromPosition(t);{const n=t;if("end"==e)e=n.maxOffset;else{if("before"==e)return this.createBefore(n);if("after"==e)return this.createAfter(n);e||(e=0)}return this.createFromParentAndOffset(n,e)}}static createAfter(t){if(!t.parent)throw new M.b("model-position-after-root: You cannot make a position after root.",{root:t});return this.createFromParentAndOffset(t.parent,t.endOffset)}static createBefore(t){if(!t.parent)throw new M.b("model-position-before-root: You cannot make a position before root.",{root:t});return this.createFromParentAndOffset(t.parent,t.startOffset)}static createFromParentAndOffset(t,e){if(!t.is("element")&&!t.is("documentFragment"))throw new M.b("model-position-parent-incorrect: Position parent have to be a element or document fragment.");const n=t.getPath();return n.push(e),new this(t.root,n)}static createFromPosition(t){const e=new this(t.root,t.path.slice());return e.stickiness=t.stickiness,e}static fromJSON(t,e){if("$graveyard"===t.root){const n=new Hs(e.graveyard,t.path);return n.stickiness=t.stickiness,n}if(!e.getRoot(t.root))throw new M.b("model-position-fromjson-no-root: Cannot create position for document. Root with specified name does not exist.",{rootName:t.root});const n=new Hs(e.getRoot(t.root),t.path);return n.stickiness=t.stickiness,n}}class qs{constructor(t,e=null){this.start=Hs.createFromPosition(t),this.end=e?Hs.createFromPosition(e):Hs.createFromPosition(t),this.start.stickiness=this.isCollapsed?"toNone":"toNext",this.end.stickiness=this.isCollapsed?"toNone":"toPrevious"}*[Symbol.iterator](){yield*new zs({boundaries:this,ignoreElementEnd:!0})}get isCollapsed(){return this.start.isEqual(this.end)}get isFlat(){return"same"==U(this.start.getParentPath(),this.end.getParentPath())}get root(){return this.start.root}containsPosition(t){return t.isAfter(this.start)&&t.isBefore(this.end)}containsRange(t,e=!1){t.isCollapsed&&(e=!1);const n=this.containsPosition(t.start)||e&&this.start.isEqual(t.start),o=this.containsPosition(t.end)||e&&this.end.isEqual(t.end);return n&&o}containsItem(t){const e=Hs.createBefore(t);return this.containsPosition(e)||this.start.isEqual(e)}isEqual(t){return this.start.isEqual(t.start)&&this.end.isEqual(t.end)}isIntersecting(t){return this.start.isBefore(t.end)&&this.end.isAfter(t.start)}getDifference(t){const e=[];return this.isIntersecting(t)?(this.containsPosition(t.start)&&e.push(new qs(this.start,t.start)),this.containsPosition(t.end)&&e.push(new qs(t.end,this.end))):e.push(qs.createFromRange(this)),e}getIntersection(t){if(this.isIntersecting(t)){let e=this.start,n=this.end;return this.containsPosition(t.start)&&(e=t.start),this.containsPosition(t.end)&&(n=t.end),new qs(e,n)}return null}getMinimalFlatRanges(){const t=[],e=this.start.getCommonPath(this.end).length,n=Hs.createFromPosition(this.start);let o=n.parent;for(;n.path.length>e+1;){const e=o.maxOffset-n.offset;0!==e&&t.push(new qs(n,n.getShiftedBy(e))),n.path=n.path.slice(0,-1),n.offset++,o=o.parent}for(;n.path.length<=this.end.path.length;){const e=this.end.path[n.path.length-1],o=e-n.offset;0!==o&&t.push(new qs(n,n.getShiftedBy(o))),n.offset=e,n.path.push(0)}return t}getWalker(t={}){return t.boundaries=this,new zs(t)}*getItems(t={}){t.boundaries=this,t.ignoreElementEnd=!0;const e=new zs(t);for(const t of e)yield t.item}*getPositions(t={}){t.boundaries=this;const e=new zs(t);yield e.position;for(const t of e)yield t.nextPosition}getTransformedByOperation(t){switch(t.type){case"insert":return this._getTransformedByInsertOperation(t);case"move":case"remove":case"reinsert":return this._getTransformedByMoveOperation(t);case"split":return[this._getTransformedBySplitOperation(t)];case"merge":return[this._getTransformedByMergeOperation(t)]}return[qs.createFromRange(this)]}getTransformedByOperations(t){const e=[qs.createFromRange(this)];for(const n of t)for(let t=0;t<e.length;t++){const o=e[t].getTransformedByOperation(n);e.splice(t,1,...o),t+=o.length-1}for(let t=0;t<e.length;t++){const n=e[t];for(let o=t+1;o<e.length;o++){const t=e[o];(n.containsRange(t)||t.containsRange(n)||n.isEqual(t))&&e.splice(o,1)}}return e}getCommonAncestor(){return this.start.getCommonAncestor(this.end)}toJSON(){return{start:this.start.toJSON(),end:this.end.toJSON()}}_getTransformedByInsertOperation(t,e=!1){return this._getTransformedByInsertion(t.position,t.howMany,e)}_getTransformedByMoveOperation(t,e=!1){const n=t.sourcePosition,o=t.howMany,i=t.targetPosition;return this._getTransformedByMove(n,i,o,e)}_getTransformedBySplitOperation(t){const e=this.start._getTransformedBySplitOperation(t);let n;return n=this.end.isEqual(t.insertionPosition)?this.end.getShiftedBy(1):this.end._getTransformedBySplitOperation(t),new qs(e,n)}_getTransformedByMergeOperation(t){let e=this.start._getTransformedByMergeOperation(t),n=this.end._getTransformedByMergeOperation(t);return e.root!=n.root&&(n=this.end.getShiftedBy(-1)),e.isAfter(n)?(t.sourcePosition.isBefore(t.targetPosition)?(e=Hs.createFromPosition(n)).offset=0:(t.deletionPosition.isEqual(e)||(n=t.deletionPosition),e=t.targetPosition),new qs(e,n)):new qs(e,n)}_getTransformedByInsertion(t,e,n=!1){if(n&&this.containsPosition(t))return[new qs(this.start,t),new qs(t.getShiftedBy(e),this.end._getTransformedByInsertion(t,e))];{const n=qs.createFromRange(this);return n.start=n.start._getTransformedByInsertion(t,e),n.end=n.end._getTransformedByInsertion(t,e),[n]}}_getTransformedByMove(t,e,n,o=!1){if(this.isCollapsed){const o=this.start._getTransformedByMove(t,e,n);return[new qs(o)]}const i=qs.createFromPositionAndShift(t,n),r=e._getTransformedByDeletion(t,n);if(this.containsPosition(e)&&!o&&(i.containsPosition(this.start)||i.containsPosition(this.end))){const o=this.start._getTransformedByMove(t,e,n),i=this.end._getTransformedByMove(t,e,n);return[new qs(o,i)]}let s;const a=this.getDifference(i);let c=null;const l=this.getIntersection(i);if(1==a.length?c=new qs(a[0].start._getTransformedByDeletion(t,n),a[0].end._getTransformedByDeletion(t,n)):2==a.length&&(c=new qs(this.start,this.end._getTransformedByDeletion(t,n))),s=c?c._getTransformedByInsertion(r,n,null!==l||o):[],l){const t=new qs(l.start._getCombined(i.start,r),l.end._getCombined(i.start,r));2==s.length?s.splice(1,0,t):s.push(t)}return s}_getTransformedByDeletion(t,e){let n=this.start._getTransformedByDeletion(t,e),o=this.end._getTransformedByDeletion(t,e);return null==n&&null==o?null:(null==n&&(n=t),null==o&&(o=t),new qs(n,o))}static createFromPositionAndShift(t,e){const n=t,o=t.getShiftedBy(e);return e>0?new this(n,o):new this(o,n)}static createFromParentsAndOffsets(t,e,n,o){return new this(Hs.createFromParentAndOffset(t,e),Hs.createFromParentAndOffset(n,o))}static createFromRange(t){return new this(t.start,t.end)}static createIn(t){return this.createFromParentsAndOffsets(t,0,t,t.maxOffset)}static createOn(t){return this.createFromPositionAndShift(Hs.createBefore(t),t.offsetSize)}static createCollapsedAt(t,e){const n=Hs.createAt(t,e),o=Hs.createFromPosition(n);return new qs(n,o)}static createFromRanges(t){if(0===t.length)throw new M.b("range-create-from-ranges-empty-array: At least one range has to be passed.");if(1==t.length)return this.createFromRange(t[0]);const e=t[0];t.sort((t,e)=>t.start.isAfter(e.start)?1:-1);const n=t.indexOf(e),o=new this(e.start,e.end);if(n>0)for(let e=n-1;t[e].end.isEqual(o.start);e++)o.start=Hs.createFromPosition(t[e].start);for(let e=n+1;e<t.length&&t[e].start.isEqual(o.end);e++)o.end=Hs.createFromPosition(t[e].end);return o}static fromJSON(t,e){return new this(Hs.fromJSON(t.start,e),Hs.fromJSON(t.end,e))}}class Ws{constructor(){this._modelToViewMapping=new WeakMap,this._viewToModelMapping=new WeakMap,this._viewToModelLengthCallbacks=new Map,this._markerNameToElements=new Map,this.on("modelToViewPosition",(t,e)=>{if(e.viewPosition)return;const n=this._modelToViewMapping.get(e.modelPosition.parent);e.viewPosition=this._findPositionIn(n,e.modelPosition.offset)},{priority:"low"}),this.on("viewToModelPosition",(t,e)=>{if(e.modelPosition)return;let n=e.viewPosition.parent,o=this._viewToModelMapping.get(n);for(;!o;)n=n.parent,o=this._viewToModelMapping.get(n);const i=this._toModelOffset(e.viewPosition.parent,e.viewPosition.offset,n);e.modelPosition=Hs.createFromParentAndOffset(o,i)},{priority:"low"})}bindElements(t,e){this._modelToViewMapping.set(t,e),this._viewToModelMapping.set(e,t)}unbindViewElement(t){const e=this.toModelElement(t);this._viewToModelMapping.delete(t),this._modelToViewMapping.get(e)==t&&this._modelToViewMapping.delete(e)}unbindModelElement(t){const e=this.toViewElement(t);this._modelToViewMapping.delete(t),this._viewToModelMapping.get(e)==t&&this._viewToModelMapping.delete(e)}bindElementToMarker(t,e){const n=this._markerNameToElements.get(e)||new Set;n.add(t),this._markerNameToElements.set(e,n)}unbindElementsFromMarkerName(t){this._markerNameToElements.delete(t)}clearBindings(){this._modelToViewMapping=new WeakMap,this._viewToModelMapping=new WeakMap,this._markerNameToElements=new Map}toModelElement(t){return this._viewToModelMapping.get(t)}toViewElement(t){return this._modelToViewMapping.get(t)}toModelRange(t){return new qs(this.toModelPosition(t.start),this.toModelPosition(t.end))}toViewRange(t){return new Qo(this.toViewPosition(t.start),this.toViewPosition(t.end))}toModelPosition(t){const e={viewPosition:t,mapper:this};return this.fire("viewToModelPosition",e),e.modelPosition}toViewPosition(t,e={isPhantom:!1}){const n={modelPosition:t,mapper:this,isPhantom:e.isPhantom};return this.fire("modelToViewPosition",n),n.viewPosition}markerNameToElements(t){const e=this._markerNameToElements.get(t);if(!e)return null;const n=new Set;for(const t of e)if(t.is("attributeElement"))for(const e of t.getElementsWithSameId())n.add(e);else n.add(t);return n}registerViewToModelLength(t,e){this._viewToModelLengthCallbacks.set(t,e)}_toModelOffset(t,e,n){if(n!=t){return this._toModelOffset(t.parent,t.index,n)+this._toModelOffset(t,e,t)}if(t.is("text"))return e;let o=0;for(let n=0;n<e;n++)o+=this.getModelLength(t.getChild(n));return o}getModelLength(t){if(this._viewToModelLengthCallbacks.get(t.name)){return this._viewToModelLengthCallbacks.get(t.name)(t)}if(this._viewToModelMapping.has(t))return 1;if(t.is("text"))return t.data.length;if(t.is("uiElement"))return 0;{let e=0;for(const n of t.getChildren())e+=this.getModelLength(n);return e}}_findPositionIn(t,e){let n,o=0,i=0,r=0;if(t.is("text"))return new $o(t,e);for(;i<e;)n=t.getChild(r),i+=o=this.getModelLength(n),r++;return i==e?this._moveViewPositionToTextNode(new $o(t,r)):this._findPositionIn(n,e-(i-o))}_moveViewPositionToTextNode(t){const e=t.nodeBefore,n=t.nodeAfter;return e instanceof co?new $o(e,e.data.length):n instanceof co?new $o(n,0):t}}B(Ws,R);class Ys{constructor(){this._consumable=new Map,this._textProxyRegistry=new Map}add(t,e){e=Gs(e),t instanceof js&&(t=this._getSymbolForTextProxy(t)),this._consumable.has(t)||this._consumable.set(t,new Map),this._consumable.get(t).set(e,!0)}consume(t,e){return e=Gs(e),t instanceof js&&(t=this._getSymbolForTextProxy(t)),!!this.test(t,e)&&(this._consumable.get(t).set(e,!1),!0)}test(t,e){e=Gs(e),t instanceof js&&(t=this._getSymbolForTextProxy(t));const n=this._consumable.get(t);if(void 0===n)return null;const o=n.get(e);return void 0===o?null:o}revert(t,e){e=Gs(e),t instanceof js&&(t=this._getSymbolForTextProxy(t));const n=this.test(t,e);return!1===n?(this._consumable.get(t).set(e,!0),!0):!0!==n&&null}_getSymbolForTextProxy(t){let e=null;const n=this._textProxyRegistry.get(t.startOffset);if(n){const o=n.get(t.endOffset);o&&(e=o.get(t.parent))}return e||(e=this._addSymbolForTextProxy(t.startOffset,t.endOffset,t.parent)),e}_addSymbolForTextProxy(t,e,n){const o=Symbol("textProxySymbol");let i,r;return(i=this._textProxyRegistry.get(t))||(i=new Map,this._textProxyRegistry.set(t,i)),(r=i.get(e))||(r=new Map,i.set(e,r)),r.set(n,o),o}}function Gs(t){const e=t.split(":");return e.length>1?e[0]+":"+e[1]:e[0]}class $s{constructor(t={}){this.conversionApi=No({dispatcher:this},t)}convertChanges(t,e){for(const n of t.getMarkersToRemove())this.convertMarkerRemove(n.name,n.range,e);for(const n of t.getChanges())"insert"==n.type?this.convertInsert(qs.createFromPositionAndShift(n.position,n.length),e):"remove"==n.type?this.convertRemove(n.position,n.length,n.name,e):this.convertAttribute(n.range,n.attributeKey,n.attributeOldValue,n.attributeNewValue,e);for(const n of t.getMarkersToAdd())this.convertMarkerAdd(n.name,n.range,e)}convertInsert(t,e){this.conversionApi.writer=e,this.conversionApi.consumable=this._createInsertConsumable(t);for(const e of t){const t=e.item,n={item:t,range:qs.createFromPositionAndShift(e.previousPosition,e.length)};this._testAndFire("insert",n);for(const e of t.getAttributeKeys())n.attributeKey=e,n.attributeOldValue=null,n.attributeNewValue=t.getAttribute(e),this._testAndFire(`attribute:${e}`,n)}this._clearConversionApi()}convertRemove(t,e,n,o){this.conversionApi.writer=o,this.fire("remove:"+n,{position:t,length:e},this.conversionApi),this._clearConversionApi()}convertAttribute(t,e,n,o,i){this.conversionApi.writer=i,this.conversionApi.consumable=this._createConsumableForRange(t,`attribute:${e}`);for(const i of t){const t={item:i.item,range:qs.createFromPositionAndShift(i.previousPosition,i.length),attributeKey:e,attributeOldValue:n,attributeNewValue:o};this._testAndFire(`attribute:${e}`,t)}this._clearConversionApi()}convertSelection(t,e,n){const o=Array.from(e.getMarkersAtPosition(t.getFirstPosition()));if(this.conversionApi.writer=n,this.conversionApi.consumable=this._createSelectionConsumable(t,o),this.fire("selection",{selection:t},this.conversionApi),t.isCollapsed){for(const e of o){const n=e.getRange();if(!Qs(t.getFirstPosition(),e,this.conversionApi.mapper))continue;const o={item:t,markerName:e.name,markerRange:n};this.conversionApi.consumable.test(t,"addMarker:"+e.name)&&this.fire("addMarker:"+e.name,o,this.conversionApi)}for(const e of t.getAttributeKeys()){const n={item:t,range:t.getFirstRange(),attributeKey:e,attributeOldValue:null,attributeNewValue:t.getAttribute(e)};this.conversionApi.consumable.test(t,"attribute:"+n.attributeKey)&&this.fire("attribute:"+n.attributeKey,n,this.conversionApi)}this._clearConversionApi()}}convertMarkerAdd(t,e,n){if(!e.root.document||"$graveyard"==e.root.rootName)return;this.conversionApi.writer=n;const o="addMarker:"+t;if(e.isCollapsed){const n=new Ys;return n.add(e,o),this.conversionApi.consumable=n,void this.fire(o,{markerName:t,markerRange:e},this.conversionApi)}this.conversionApi.consumable=this._createConsumableForRange(e,o);for(const n of e.getItems()){if(!this.conversionApi.consumable.test(n,o))continue;const i={item:n,range:qs.createOn(n),markerName:t,markerRange:e};this.fire(o,i,this.conversionApi)}this._clearConversionApi()}convertMarkerRemove(t,e,n){e.root.document&&"$graveyard"!=e.root.rootName&&(this.conversionApi.writer=n,this.fire("removeMarker:"+t,{markerName:t,markerRange:e},this.conversionApi),this._clearConversionApi())}_createInsertConsumable(t){const e=new Ys;for(const n of t){const t=n.item;e.add(t,"insert");for(const n of t.getAttributeKeys())e.add(t,"attribute:"+n)}return e}_createConsumableForRange(t,e){const n=new Ys;for(const o of t.getItems())n.add(o,e);return n}_createSelectionConsumable(t,e){const n=new Ys;n.add(t,"selection");for(const o of e)n.add(t,"addMarker:"+o.name);for(const e of t.getAttributeKeys())n.add(t,"attribute:"+e);return n}_testAndFire(t,e){if(!this.conversionApi.consumable.test(e.item,t))return;const n=e.item.name||"$text";this.fire(t+":"+n,e,this.conversionApi)}_clearConversionApi(){delete this.conversionApi.writer,delete this.conversionApi.consumable}}function Qs(t,e,n){const o=e.getRange(),i=Array.from(t.getAncestors());return i.shift(),i.reverse(),!i.some(t=>{if(o.containsItem(t)){return!!n.toViewElement(t).getCustomProperty("addHighlight")}})}B($s,R);class Js{constructor(t,e,n){this._lastRangeBackward=!1,this._ranges=[],this._attrs=new Map,t&&this.setTo(t,e,n)}get anchor(){if(this._ranges.length>0){const t=this._ranges[this._ranges.length-1];return this._lastRangeBackward?t.end:t.start}return null}get focus(){if(this._ranges.length>0){const t=this._ranges[this._ranges.length-1];return this._lastRangeBackward?t.start:t.end}return null}get isCollapsed(){return 1===this._ranges.length&&this._ranges[0].isCollapsed}get rangeCount(){return this._ranges.length}get isBackward(){return!this.isCollapsed&&this._lastRangeBackward}isEqual(t){if(this.rangeCount!=t.rangeCount)return!1;if(0===this.rangeCount)return!0;if(!this.anchor.isEqual(t.anchor)||!this.focus.isEqual(t.focus))return!1;for(const e of this._ranges){let n=!1;for(const o of t._ranges)if(e.isEqual(o)){n=!0;break}if(!n)return!1}return!0}*getRanges(){for(const t of this._ranges)yield qs.createFromRange(t)}getFirstRange(){let t=null;for(const e of this._ranges)t&&!e.start.isBefore(t.start)||(t=e);return t?qs.createFromRange(t):null}getLastRange(){let t=null;for(const e of this._ranges)t&&!e.end.isAfter(t.end)||(t=e);return t?qs.createFromRange(t):null}getFirstPosition(){const t=this.getFirstRange();return t?Hs.createFromPosition(t.start):null}getLastPosition(){const t=this.getLastRange();return t?Hs.createFromPosition(t.end):null}setTo(t,e,n){if(null===t)this._setRanges([]);else if(t instanceof Js)this._setRanges(t.getRanges(),t.isBackward);else if(t&&"function"==typeof t.getRanges)this._setRanges(t.getRanges(),t.isBackward);else if(t instanceof qs)this._setRanges([t],!!e&&!!e.backward);else if(t instanceof Hs)this._setRanges([new qs(t)]);else if(t instanceof Ds){const o=!!n&&!!n.backward;let i;if("in"==e)i=qs.createIn(t);else if("on"==e)i=qs.createOn(t);else{if(void 0===e)throw new M.b("model-selection-setTo-required-second-parameter: selection.setTo requires the second parameter when the first parameter is a node.");i=qs.createCollapsedAt(t,e)}this._setRanges([i],o)}else{if(!ho(t))throw new M.b("model-selection-setTo-not-selectable: Cannot set selection to given place.");this._setRanges(t,e&&!!e.backward)}}_setRanges(t,e=!1){const n=(t=Array.from(t)).some(t=>{if(!(t instanceof qs))throw new M.b("model-selection-set-ranges-not-range: Selection range set to an object that is not an instance of model.Range.");return this._ranges.every(e=>!e.isEqual(t))});if(t.length!==this._ranges.length||n){this._removeAllRanges();for(const e of t)this._pushRange(e);this._lastRangeBackward=!!e,this.fire("change:range",{directChange:!0})}}setFocus(t,e){if(null===this.anchor)throw new M.b("model-selection-setFocus-no-ranges: Cannot set selection focus if there are no ranges in selection.");const n=Hs.createAt(t,e);if("same"==n.compareWith(this.focus))return;const o=this.anchor;this._ranges.length&&this._popRange(),"before"==n.compareWith(o)?(this._pushRange(new qs(n,o)),this._lastRangeBackward=!0):(this._pushRange(new qs(o,n)),this._lastRangeBackward=!1),this.fire("change:range",{directChange:!0})}getAttribute(t){return this._attrs.get(t)}getAttributes(){return this._attrs.entries()}getAttributeKeys(){return this._attrs.keys()}hasAttribute(t){return this._attrs.has(t)}removeAttribute(t){this.hasAttribute(t)&&(this._attrs.delete(t),this.fire("change:attribute",{attributeKeys:[t],directChange:!0}))}setAttribute(t,e){this.getAttribute(t)!==e&&(this._attrs.set(t,e),this.fire("change:attribute",{attributeKeys:[t],directChange:!0}))}getSelectedElement(){if(1!==this.rangeCount)return null;const t=this.getFirstRange(),e=t.start.nodeAfter,n=t.end.nodeBefore;return e instanceof Fs&&e==n?e:null}*getSelectedBlocks(){const t=new WeakSet;for(const e of this.getRanges()){const n=Zs(e.start,t);n&&(yield n);for(const n of e.getWalker())"elementEnd"==n.type&&Ks(n.item,t)&&(yield n.item);const o=Zs(e.end,t);o&&!e.end.isTouching(Hs.createAt(o))&&(yield o)}}containsEntireContent(t=this.anchor.root){const e=Hs.createAt(t),n=Hs.createAt(t,"end");return e.isTouching(this.getFirstPosition())&&n.isTouching(this.getLastPosition())}_pushRange(t){this._checkRange(t),this._ranges.push(qs.createFromRange(t))}_checkRange(t){for(let e=0;e<this._ranges.length;e++)if(t.isIntersecting(this._ranges[e]))throw new M.b("model-selection-range-intersects: Trying to add a range that intersects with another range in the selection.",{addedRange:t,intersectingRange:this._ranges[e]})}_removeAllRanges(){for(;this._ranges.length>0;)this._popRange()}_popRange(){this._ranges.pop()}}function Ks(t,e){return!e.has(t)&&(e.add(t),t.document.model.schema.isBlock(t)&&t.parent)}function Zs(t,e){const n=t.parent.getAncestors({parentFirst:!0,includeSelf:!0}),o=n.find(t=>Ks(t,e));return n.forEach(t=>e.add(t)),o}B(Js,R);class Xs extends qs{constructor(t,e){super(t,e),function(){this.listenTo(this.root.document.model,"applyOperation",(t,e)=>{const n=e[0];n.isDocumentOperation&&function(t){const e=this.getTransformedByOperation(t),n=qs.createFromRanges(e),o=!n.isEqual(this),i=function(t,e){switch(e.type){case"insert":return t.containsPosition(e.position);case"move":case"remove":case"reinsert":case"merge":return t.containsPosition(e.sourcePosition)||t.start.isEqual(e.sourcePosition)||t.containsPosition(e.targetPosition);case"split":return t.containsPosition(e.splitPosition)||t.containsPosition(e.insertionPosition)}return!1}(this,t);let r=null;if(o){"$graveyard"==n.root.rootName&&(r="remove"==t.type?t.sourcePosition:t.deletionPosition);const e=qs.createFromRange(this);this.start=n.start,this.end=n.end,this.fire("change:range",e,{deletionPosition:r})}else i&&this.fire("change:content",qs.createFromRange(this),{deletionPosition:r})}.call(this,n)},{priority:"low"})}.call(this)}detach(){this.stopListening()}}B(Xs,R);const ta="selection:";class ea{constructor(t){this._selection=new na(t),this._selection.delegate("change:range").to(this),this._selection.delegate("change:attribute").to(this)}get isCollapsed(){return this._selection.isCollapsed}get anchor(){return this._selection.anchor}get focus(){return this._selection.focus}get rangeCount(){return this._selection.rangeCount}get hasOwnRange(){return this._selection.hasOwnRange}get isBackward(){return this._selection.isBackward}get isGravityOverridden(){return this._selection.isGravityOverridden}get _ranges(){return this._selection._ranges}getRanges(){return this._selection.getRanges()}getFirstPosition(){return this._selection.getFirstPosition()}getLastPosition(){return this._selection.getLastPosition()}getFirstRange(){return this._selection.getFirstRange()}getLastRange(){return this._selection.getLastRange()}getSelectedBlocks(){return this._selection.getSelectedBlocks()}getSelectedElement(){return this._selection.getSelectedElement()}containsEntireContent(t){return this._selection.containsEntireContent(t)}destroy(){this._selection.destroy()}getAttributeKeys(){return this._selection.getAttributeKeys()}getAttributes(){return this._selection.getAttributes()}getAttribute(t){return this._selection.getAttribute(t)}hasAttribute(t){return this._selection.hasAttribute(t)}_setFocus(t,e){this._selection.setFocus(t,e)}_setTo(t,e,n){this._selection.setTo(t,e,n)}_setAttribute(t,e){this._selection.setAttribute(t,e)}_removeAttribute(t){this._selection.removeAttribute(t)}_getStoredAttributes(){return this._selection._getStoredAttributes()}_overrideGravity(){return this._selection.overrideGravity()}_restoreGravity(t){this._selection.restoreGravity(t)}static _getStoreAttributeKey(t){return ta+t}static _isStoreAttributeKey(t){return t.startsWith(ta)}}B(ea,R);class na extends Js{constructor(t){super(),this._model=t.model,this._document=t,this._attributePriority=new Map,this._fixGraveyardRangesData=[],this._hasChangedRange=!1,this._overriddenGravityRegister=new Set,this.on("change:range",()=>{for(const t of this.getRanges())if(!this._document._validateSelectionRange(t))throw new M.b("document-selection-wrong-position: Range from document selection starts or ends at incorrect position.",{range:t})}),this.listenTo(this._document,"change",(t,e)=>{this._updateAttributes(!1),function(t,e){const n=t.document.differ;for(const o of n.getChanges()){if("insert"!=o.type)continue;const n=o.position.parent,i=o.length===n.maxOffset;i&&t.enqueueChange(e,t=>{const e=Array.from(n.getAttributeKeys()).filter(t=>t.startsWith(ta));for(const o of e)t.removeAttribute(o,n)})}}(this._model,e)}),this.listenTo(this._model,"applyOperation",()=>{for(;this._fixGraveyardRangesData.length;){const{liveRange:t,sourcePosition:e}=this._fixGraveyardRangesData.shift();this._fixGraveyardSelection(t,e)}this._hasChangedRange&&(this._hasChangedRange=!1,this.fire("change:range",{directChange:!1}))},{priority:"lowest"})}get isCollapsed(){return 0===this._ranges.length?this._document._getDefaultRange().isCollapsed:super.isCollapsed}get anchor(){return super.anchor||this._document._getDefaultRange().start}get focus(){return super.focus||this._document._getDefaultRange().end}get rangeCount(){return this._ranges.length?this._ranges.length:1}get hasOwnRange(){return this._ranges.length>0}get isGravityOverridden(){return!!this._overriddenGravityRegister.size}destroy(){for(let t=0;t<this._ranges.length;t++)this._ranges[t].detach();this.stopListening()}*getRanges(){this._ranges.length?yield*super.getRanges():yield this._document._getDefaultRange()}getFirstRange(){return super.getFirstRange()||this._document._getDefaultRange()}getLastRange(){return super.getLastRange()||this._document._getDefaultRange()}setTo(t,e,n){super.setTo(t,e,n),this._refreshAttributes()}setFocus(t,e){super.setFocus(t,e),this._refreshAttributes()}setAttribute(t,e){if(this._setAttribute(t,e)){const e=[t];this.fire("change:attribute",{attributeKeys:e,directChange:!0})}}removeAttribute(t){if(this._removeAttribute(t)){const e=[t];this.fire("change:attribute",{attributeKeys:e,directChange:!0})}}overrideGravity(){const t=E();return this._overriddenGravityRegister.add(t),1===this._overriddenGravityRegister.size&&this._refreshAttributes(),t}restoreGravity(t){if(!this._overriddenGravityRegister.has(t))throw new M.b("document-selection-gravity-wrong-restore: Attempting to restore the selection gravity for an unknown UID.",{uid:t});this._overriddenGravityRegister.delete(t),this.isGravityOverridden||this._refreshAttributes()}_refreshAttributes(){this._updateAttributes(!0)}_popRange(){this._ranges.pop().detach()}_pushRange(t){const e=this._prepareRange(t);e&&this._ranges.push(e)}_prepareRange(t){if(this._checkRange(t),t.root==this._document.graveyard)return void fs.a.warn("model-selection-range-in-graveyard: Trying to add a Range that is in the graveyard root. Range rejected.");const e=Xs.createFromRange(t);return e.on("change:range",(t,n,o)=>{this._hasChangedRange=!0,e.root==this._document.graveyard&&this._fixGraveyardRangesData.push({liveRange:e,sourcePosition:o.deletionPosition})}),e}_updateAttributes(t){const e=Rs(this._getSurroundingAttributes()),n=Rs(this.getAttributes());if(t)this._attributePriority=new Map,this._attrs=new Map;else for(const[t,e]of this._attributePriority)"low"==e&&(this._attrs.delete(t),this._attributePriority.delete(t));this._setAttributesTo(e);const o=[];for(const[t,e]of this.getAttributes())n.has(t)&&n.get(t)===e||o.push(t);for(const[t]of n)this.hasAttribute(t)||o.push(t);o.length>0&&this.fire("change:attribute",{attributeKeys:o,directChange:!1})}_setAttribute(t,e,n=!0){const o=n?"normal":"low";return("low"!=o||"normal"!=this._attributePriority.get(t))&&(super.getAttribute(t)!==e&&(this._attrs.set(t,e),this._attributePriority.set(t,o),!0))}_removeAttribute(t,e=!0){const n=e?"normal":"low";return("low"!=n||"normal"!=this._attributePriority.get(t))&&(this._attributePriority.set(t,n),!!super.hasAttribute(t)&&(this._attrs.delete(t),!0))}_setAttributesTo(t){const e=new Set;for(const[e,n]of this.getAttributes())t.get(e)!==n&&this._removeAttribute(e,!1);for(const[n,o]of t){this._setAttribute(n,o,!1)&&e.add(n)}return e}*_getStoredAttributes(){const t=this.getFirstPosition().parent;if(this.isCollapsed&&t.isEmpty)for(const e of t.getAttributeKeys())if(e.startsWith(ta)){yield[e.substr(ta.length),t.getAttribute(e)]}}_getSurroundingAttributes(){const t=this.getFirstPosition(),e=this._model.schema;let n=null;if(this.isCollapsed){const e=t.textNode?t.textNode:t.nodeBefore,o=t.textNode?t.textNode:t.nodeAfter;if(this.isGravityOverridden||(n=oa(e)),n||(n=oa(o)),!this.isGravityOverridden&&!n){let t=e;for(;t&&!n;)n=oa(t=t.previousSibling)}if(!n){let t=o;for(;t&&!n;)n=oa(t=t.nextSibling)}n||(n=this._getStoredAttributes())}else{const t=this.getFirstRange();for(const o of t){if(o.item.is("element")&&e.isObject(o.item))break;"text"==o.type&&null===n&&(n=o.item.getAttributes())}}return n}_fixGraveyardSelection(t,e){const n=Hs.createFromPosition(e),o=this._model.schema.getNearestSelectionRange(n),i=this._ranges.indexOf(t);if(this._ranges.splice(i,1),t.detach(),o){const t=this._prepareRange(o);this._ranges.splice(i,0,t)}}}function oa(t){return t instanceof js||t instanceof Ls?t.getAttributes():null}var ia=1,ra=4;var sa=function(t){return io(t,ia|ra)};function aa(t){return(t=sa(t)).view=da(t.view,"container"),e=>{e.on("insert:"+t.model,function(t){return(e,n,o)=>{const i=t(n.item,o.writer);if(!i)return;if(!o.consumable.consume(n.item,"insert"))return;const r=o.mapper.toViewPosition(n.range.start);o.mapper.bindElements(n.item,i),o.writer.insert(r,i)}}(t.view),{priority:t.converterPriority||"normal"})}}function ca(t){let e="attribute:"+((t=sa(t)).model.key?t.model.key:t.model);if(t.model.name&&(e+=":"+t.model.name),t.model.values)for(const e of t.model.values)t.view[e]=da(t.view[e],"attribute");else t.view=da(t.view,"attribute");const n=ua(t);return o=>{o.on(e,function(t){return(e,n,o)=>{const i=t(n.attributeOldValue,o.writer),r=t(n.attributeNewValue,o.writer);if(!i&&!r)return;if(!o.consumable.consume(n.item,e.name))return;const s=o.writer,a=s.document.selection;if(n.item instanceof Js||n.item instanceof ea)s.wrap(a.getFirstRange(),r);else{let t=o.mapper.toViewRange(n.range);null!==n.attributeOldValue&&i&&(t=s.unwrap(t,i)),null!==n.attributeNewValue&&r&&s.wrap(t,r)}}}(n),{priority:t.converterPriority||"normal"})}}function la(t){let e="attribute:"+((t=sa(t)).model.key?t.model.key:t.model);if(t.model.name&&(e+=":"+t.model.name),t.model.values)for(const e of t.model.values)t.view[e]=ha(t.view[e]);else t.view=ha(t.view);const n=ua(t);return o=>{o.on(e,function(t){return t=t||((t,e)=>({value:t,key:e.attributeKey})),(e,n,o)=>{const i=t(n.attributeOldValue,n),r=t(n.attributeNewValue,n);if(!i&&!r)return;if(!o.consumable.consume(n.item,e.name))return;const s=o.mapper.toViewElement(n.item),a=o.writer;if(null!==n.attributeOldValue&&i)if("class"==i.key){const t=Array.isArray(i.value)?i.value:[i.value];for(const e of t)a.removeClass(e,s)}else if("style"==i.key){const t=Object.keys(i.value);for(const e of t)a.removeStyle(e,s)}else a.removeAttribute(i.key,s);if(null!==n.attributeNewValue&&r)if("class"==r.key){const t=Array.isArray(r.value)?r.value:[r.value];for(const e of t)a.addClass(e,s)}else if("style"==r.key){const t=Object.keys(r.value);for(const e of t)a.setStyle(e,r.value[e],s)}else a.setAttribute(r.key,r.value,s)}}(n),{priority:t.converterPriority||"normal"})}}function da(t,e){return"function"==typeof t?t:(n,o)=>(function(t,e,n){"string"==typeof t&&(t={name:t});let o;const i=Object.assign({},t.attributes);if("container"==n)o=e.createContainerElement(t.name,i);else if("attribute"==n){const n={priority:t.priority||oi.DEFAULT_PRIORITY};o=e.createAttributeElement(t.name,i,n)}else o=e.createUIElement(t.name,i);if(t.styles){const n=Object.keys(t.styles);for(const i of n)e.setStyle(i,t.styles[i],o)}if(t.classes){const n=t.classes;if("string"==typeof n)e.addClass(n,o);else for(const t of n)e.addClass(t,o)}return o})(t,o,e)}function ua(t){return t.model.values?(e,n)=>{const o=t.view[e];return o?o(e,n):null}:t.view}function ha(t){return"string"==typeof t?e=>({key:t,value:e}):"object"==typeof t?t.value?()=>t:e=>({key:t.key,value:e}):t}class fa{constructor(t){this.model=t,this.view=new Os,this.mapper=new Ws,this.downcastDispatcher=new $s({mapper:this.mapper});const e=this.model.document,n=e.selection,o=this.model.markers;this.listenTo(this.model,"_beforeChanges",()=>{this.view._renderingDisabled=!0},{priority:"highest"}),this.listenTo(this.model,"_afterChanges",()=>{this.view._renderingDisabled=!1,this.view.render()},{priority:"lowest"}),this.listenTo(e,"change",()=>{this.view.change(t=>{this.downcastDispatcher.convertChanges(e.differ,t),this.downcastDispatcher.convertSelection(n,o,t)})},{priority:"low"}),this.listenTo(this.view.document,"selectionChange",function(t,e){return(n,o)=>{const i=o.newSelection,r=new Js,s=[];for(const t of i.getRanges())s.push(e.toModelRange(t));r.setTo(s,{backward:i.isBackward}),r.isEqual(t.document.selection)||t.change(t=>{t.setSelection(r)})}}(this.model,this.mapper)),this.downcastDispatcher.on("insert:$text",(t,e,n)=>{if(!n.consumable.consume(e.item,"insert"))return;const o=n.writer,i=n.mapper.toViewPosition(e.range.start),r=o.createText(e.item.data);o.insert(i,r)},{priority:"lowest"}),this.downcastDispatcher.on("remove",(t,e,n)=>{const o=n.mapper.toViewPosition(e.position),i=e.position.getShiftedBy(e.length),r=n.mapper.toViewPosition(i,{isPhantom:!0}),s=new Qo(o,r),a=n.writer.remove(s.getTrimmed());for(const t of Qo.createIn(a).getItems())n.mapper.unbindViewElement(t)},{priority:"low"}),this.downcastDispatcher.on("selection",(t,e,n)=>{const o=n.writer,i=o.document.selection;for(const t of i.getRanges())t.isCollapsed&&t.end.parent.document&&n.writer.mergeAttributes(t.start);o.setSelection(null)},{priority:"low"}),this.downcastDispatcher.on("selection",(t,e,n)=>{const o=e.selection;if(o.isCollapsed)return;if(!n.consumable.consume(o,"selection"))return;const i=[];for(const t of o.getRanges()){const e=n.mapper.toViewRange(t);i.push(e)}n.writer.setSelection(i,{backward:o.isBackward})},{priority:"low"}),this.downcastDispatcher.on("selection",(t,e,n)=>{const o=e.selection;if(!o.isCollapsed)return;if(!n.consumable.consume(o,"selection"))return;const i=n.writer,r=o.getFirstPosition(),s=n.mapper.toViewPosition(r),a=i.breakAttributes(s);i.setSelection(a)},{priority:"low"}),this.view.document.roots.bindTo(this.model.document.roots).using(t=>{if("$graveyard"==t.rootName)return null;const e=new Yo(t.name);return e.rootName=t.rootName,e._document=this.view.document,this.mapper.bindElements(t,e),e})}destroy(){this.view.destroy(),this.stopListening()}}B(fa,jo);class ma{constructor(t,e=[]){this._editor=t,this._availablePlugins=new Map,this._plugins=new Map;for(const t of e)this._availablePlugins.set(t,t),t.pluginName&&this._availablePlugins.set(t.pluginName,t)}*[Symbol.iterator](){for(const t of this._plugins)"function"==typeof t[0]&&(yield t)}get(t){return this._plugins.get(t)}load(t,e=[]){const n=this,o=this._editor,i=new Set,r=[],s=u(t),a=u(e),c=function(t){const e=[];for(const n of t)d(n)||e.push(n);return e.length?e:null}(t);if(c){const t="plugincollection-plugin-not-found: Some plugins are not available and could not be loaded.";return fs.a.error(t,{plugins:c}),Promise.reject(new M.b(t,{plugins:c}))}return Promise.all(s.map(l)).then(()=>r);function l(t){if(!a.includes(t)&&!n.get(t)&&!i.has(t))return function(t){return new Promise(s=>{i.add(t),t.requires&&t.requires.forEach(n=>{const o=d(n);if(e.includes(o))throw new M.b("plugincollection-required: Cannot load a plugin because one of its dependencies is listed inthe `removePlugins` option.",{plugin:o,requiredBy:t});l(o)});const a=new t(o);n._add(t,a),r.push(a),s()})}(t).catch(e=>{throw fs.a.error("plugincollection-load: It was not possible to load the plugin.",{plugin:t}),e})}function d(t){return"function"==typeof t?t:n._availablePlugins.get(t)}function u(t){return t.map(t=>d(t)).filter(t=>!!t)}}destroy(){const t=Array.from(this).map(([,t])=>t).filter(t=>"function"==typeof t.destroy).map(t=>t.destroy());return Promise.all(t)}_add(t,e){this._plugins.set(t,e);const n=t.pluginName;n&&(this._plugins.has(n)?fs.a.warn("plugincollection-plugin-name-conflict: Two plugins with the same name were loaded.",{pluginName:n,plugin1:this._plugins.get(n).constructor,plugin2:t}):this._plugins.set(n,e))}}class pa{constructor(){this._commands=new Map}add(t,e){this._commands.set(t,e)}get(t){return this._commands.get(t)}execute(t,...e){const n=this.get(t);if(!n)throw new M.b("commandcollection-command-not-found: Command does not exist.",{commandName:t});n.execute(...e)}*names(){yield*this._commands.keys()}*commands(){yield*this._commands.values()}[Symbol.iterator](){return this._commands[Symbol.iterator]()}destroy(){for(const t of this.commands())t.destroy()}}function ga(t,e){const n=Object.keys(window.CKEDITOR_TRANSLATIONS).length;return 1===n&&(t=Object.keys(window.CKEDITOR_TRANSLATIONS)[0]),0!==n&&function(t,e){return t in window.CKEDITOR_TRANSLATIONS&&e in window.CKEDITOR_TRANSLATIONS[t]}(t,e)?window.CKEDITOR_TRANSLATIONS[t][e].replace(/ \[context: [^\]]+\]$/,""):e.replace(/ \[context: [^\]]+\]$/,"")}window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={});class ba{constructor(t){this.language=t||"en",this.t=((...t)=>this._t(...t))}_t(t,e){let n=ga(this.language,t);return e&&(n=n.replace(/%(\d+)/g,(t,n)=>n<e.length?e[n]:t)),n}}class wa{constructor(){this._consumables=new Map}add(t,e){let n;t.is("text")||t.is("documentFragment")?this._consumables.set(t,!0):(this._consumables.has(t)?n=this._consumables.get(t):(n=new _a,this._consumables.set(t,n)),n.add(e))}test(t,e){const n=this._consumables.get(t);return void 0===n?null:t.is("text")||t.is("documentFragment")?n:n.test(e)}consume(t,e){return!!this.test(t,e)&&(t.is("text")||t.is("documentFragment")?this._consumables.set(t,!1):this._consumables.get(t).consume(e),!0)}revert(t,e){const n=this._consumables.get(t);void 0!==n&&(t.is("text")||t.is("documentFragment")?this._consumables.set(t,!0):n.revert(e))}static consumablesFromElement(t){const e={name:!0,attributes:[],classes:[],styles:[]},n=t.getAttributeKeys();for(const t of n)"style"!=t&&"class"!=t&&e.attributes.push(t);const o=t.getClassNames();for(const t of o)e.classes.push(t);const i=t.getStyleNames();for(const t of i)e.styles.push(t);return e}static createFrom(t,e){if(e||(e=new wa),t.is("text"))return e.add(t),e;t.is("element")&&e.add(t,wa.consumablesFromElement(t)),t.is("documentFragment")&&e.add(t);for(const n of t.getChildren())e=wa.createFrom(n,e);return e}}class _a{constructor(){this._canConsumeName=null,this._consumables={attributes:new Map,styles:new Map,classes:new Map}}add(t){t.name&&(this._canConsumeName=!0);for(const e in this._consumables)e in t&&this._add(e,t[e])}test(t){if(t.name&&!this._canConsumeName)return this._canConsumeName;for(const e in this._consumables)if(e in t){const n=this._test(e,t[e]);if(!0!==n)return n}return!0}consume(t){t.name&&(this._canConsumeName=!1);for(const e in this._consumables)e in t&&this._consume(e,t[e])}revert(t){t.name&&(this._canConsumeName=!0);for(const e in this._consumables)e in t&&this._revert(e,t[e])}_add(t,e){const n=ce(e)?e:[e],o=this._consumables[t];for(const e of n){if("attributes"===t&&("class"===e||"style"===e))throw new M.b("viewconsumable-invalid-attribute: Classes and styles should be handled separately.");o.set(e,!0)}}_test(t,e){const n=ce(e)?e:[e],o=this._consumables[t];for(const e of n)if("attributes"!==t||"class"!==e&&"style"!==e){const t=o.get(e);if(void 0===t)return null;if(!t)return!1}else{const t="class"==e?"classes":"styles",n=this._test(t,[...this._consumables[t].keys()]);if(!0!==n)return n}return!0}_consume(t,e){const n=ce(e)?e:[e],o=this._consumables[t];for(const e of n)if("attributes"!==t||"class"!==e&&"style"!==e)o.set(e,!1);else{const t="class"==e?"classes":"styles";this._consume(t,[...this._consumables[t].keys()])}}_revert(t,e){const n=ce(e)?e:[e],o=this._consumables[t];for(const e of n)if("attributes"!==t||"class"!==e&&"style"!==e){!1===o.get(e)&&o.set(e,!0)}else{const t="class"==e?"classes":"styles";this._revert(t,[...this._consumables[t].keys()])}}}class ka{constructor(){this._sourceDefinitions={},this.decorate("checkChild"),this.decorate("checkAttribute"),this.on("checkAttribute",(t,e)=>{e[0]=new va(e[0])},{priority:"highest"}),this.on("checkChild",(t,e)=>{e[0]=new va(e[0]),e[1]=this.getDefinition(e[1])},{priority:"highest"})}register(t,e){if(this._sourceDefinitions[t])throw new M.b("schema-cannot-register-item-twice: A single item cannot be registered twice in the schema.",{itemName:t});this._sourceDefinitions[t]=[Object.assign({},e)],this._clearCache()}extend(t,e){if(!this._sourceDefinitions[t])throw new M.b("schema-cannot-extend-missing-item: Cannot extend an item which was not registered yet.",{itemName:t});this._sourceDefinitions[t].push(Object.assign({},e)),this._clearCache()}getDefinitions(){return this._compiledDefinitions||this._compile(),this._compiledDefinitions}getDefinition(t){let e;return e="string"==typeof t?t:t.is&&(t.is("text")||t.is("textProxy"))?"$text":t.name,this.getDefinitions()[e]}isRegistered(t){return!!this.getDefinition(t)}isBlock(t){const e=this.getDefinition(t);return!(!e||!e.isBlock)}isLimit(t){const e=this.getDefinition(t);return!!e&&!(!e.isLimit&&!e.isObject)}isObject(t){const e=this.getDefinition(t);return!(!e||!e.isObject)}checkChild(t,e){return!!e&&this._checkContextMatch(e,t)}checkAttribute(t,e){const n=this.getDefinition(t.last);return!!n&&n.allowAttributes.includes(e)}checkMerge(t,e=null){if(t instanceof Hs){const e=t.nodeBefore,n=t.nodeAfter;if(!(e instanceof Fs))throw new M.b("schema-check-merge-no-element-before: The node before the merge position must be an element.");if(!(n instanceof Fs))throw new M.b("schema-check-merge-no-element-after: The node after the merge position must be an element.");return this.checkMerge(e,n)}for(const n of e.getChildren())if(!this.checkChild(t,n))return!1;return!0}addChildCheck(t){this.on("checkChild",(e,[n,o])=>{if(!o)return;const i=t(n,o);"boolean"==typeof i&&(e.stop(),e.return=i)},{priority:"high"})}addAttributeCheck(t){this.on("checkAttribute",(e,[n,o])=>{const i=t(n,o);"boolean"==typeof i&&(e.stop(),e.return=i)},{priority:"high"})}getLimitElement(t){let e;if(t instanceof Hs)e=t.parent;else{e=(t instanceof qs?[t]:Array.from(t.getRanges())).reduce((t,e)=>{const n=e.getCommonAncestor();return t?t.getCommonAncestor(n,{includeSelf:!0}):n},null)}for(;!this.isLimit(e)&&e.parent;)e=e.parent;return e}checkAttributeInSelection(t,e){if(t.isCollapsed){const n=[...t.getFirstPosition().getAncestors(),new Ls("",t.getAttributes())];return this.checkAttribute(n,e)}{const n=t.getRanges();for(const t of n)for(const n of t)if(this.checkAttribute(n.item,e))return!0}return!1}*getValidRanges(t,e){t=function*(t){for(const e of t)yield*e.getMinimalFlatRanges()}(t);for(const n of t)yield*this._getValidRangesForRange(n,e)}*_getValidRangesForRange(t,e){let n=t.start,o=t.start;for(const i of t.getItems({shallow:!0}))i.is("element")&&(yield*this._getValidRangesForRange(qs.createIn(i),e)),this.checkAttribute(i,e)||(n.isEqual(o)||(yield new qs(n,o)),n=Hs.createAfter(i)),o=Hs.createAfter(i);n.isEqual(o)||(yield new qs(n,o))}getNearestSelectionRange(t,e="both"){if(this.checkChild(t,"$text"))return new qs(t);let n,o;"both"!=e&&"backward"!=e||(n=new zs({startPosition:t,direction:"backward"})),"both"!=e&&"forward"!=e||(o=new zs({startPosition:t}));for(const t of function*(t,e){let n=!1;for(;!n;){if(n=!0,t){const e=t.next();e.done||(n=!1,yield{walker:t,value:e.value})}if(e){const t=e.next();t.done||(n=!1,yield{walker:e,value:t.value})}}}(n,o)){const e=t.walker==n?"elementEnd":"elementStart",o=t.value;if(o.type==e&&this.isObject(o.item))return qs.createOn(o.item);if(this.checkChild(o.nextPosition,"$text"))return new qs(o.nextPosition)}return null}findAllowedParent(t,e){let n=e.parent;for(;n;){if(this.checkChild(n,t))return n;if(this.isLimit(n))return null;n=n.parent}return null}removeDisallowedAttributes(t,e){for(const n of t){for(const t of n.getAttributeKeys())this.checkAttribute(n,t)||e.removeAttribute(t,n);n.is("element")&&this.removeDisallowedAttributes(n.getChildren(),e)}}_clearCache(){this._compiledDefinitions=null}_compile(){const t={},e=this._sourceDefinitions,n=Object.keys(e);for(const o of n)t[o]=ya(e[o],o);for(const e of n)xa(t,e);for(const e of n)Aa(t,e);for(const e of n)Ca(t,e),Ta(t,e);for(const e of n)Ma(t,e),Pa(t,e);this._compiledDefinitions=t}_checkContextMatch(t,e,n=e.length-1){const o=e.getItem(n);if(t.allowIn.includes(o.name)){if(0==n)return!0;{const t=this.getDefinition(o);return this._checkContextMatch(t,e,n-1)}}return!1}}B(ka,jo);class va{constructor(t){if(t instanceof va)return t;"string"==typeof t?t=[t]:Array.isArray(t)||(t=t.getAncestors({includeSelf:!0})),t[0]&&"string"!=typeof t[0]&&t[0].is("documentFragment")&&t.shift(),this._items=t.map(Ia)}get length(){return this._items.length}get last(){return this._items[this._items.length-1]}[Symbol.iterator](){return this._items[Symbol.iterator]()}push(t){const e=new va([t]);return e._items=[...this._items,...e._items],e}getItem(t){return this._items[t]}*getNames(){yield*this._items.map(t=>t.name)}endsWith(t){return Array.from(this.getNames()).join(" ").endsWith(t)}}function ya(t,e){const n={name:e,allowIn:[],allowContentOf:[],allowWhere:[],allowAttributes:[],allowAttributesOf:[],inheritTypesFrom:[]};return function(t,e){for(const n of t){const t=Object.keys(n).filter(t=>t.startsWith("is"));for(const o of t)e[o]=n[o]}}(t,n),Sa(t,n,"allowIn"),Sa(t,n,"allowContentOf"),Sa(t,n,"allowWhere"),Sa(t,n,"allowAttributes"),Sa(t,n,"allowAttributesOf"),Sa(t,n,"inheritTypesFrom"),function(t,e){for(const n of t){const t=n.inheritAllFrom;t&&(e.allowContentOf.push(t),e.allowWhere.push(t),e.allowAttributesOf.push(t),e.inheritTypesFrom.push(t))}}(t,n),n}function xa(t,e){for(const n of t[e].allowContentOf)if(t[n]){Ea(t,n).forEach(t=>{t.allowIn.push(e)})}delete t[e].allowContentOf}function Aa(t,e){for(const n of t[e].allowWhere){const o=t[n];if(o){const n=o.allowIn;t[e].allowIn.push(...n)}}delete t[e].allowWhere}function Ca(t,e){for(const n of t[e].allowAttributesOf){const o=t[n];if(o){const n=o.allowAttributes;t[e].allowAttributes.push(...n)}}delete t[e].allowAttributesOf}function Ta(t,e){const n=t[e];for(const e of n.inheritTypesFrom){const o=t[e];if(o){const t=Object.keys(o).filter(t=>t.startsWith("is"));for(const e of t)e in n||(n[e]=o[e])}}delete n.inheritTypesFrom}function Ma(t,e){const n=t[e],o=n.allowIn.filter(e=>t[e]);n.allowIn=Array.from(new Set(o))}function Pa(t,e){const n=t[e];n.allowAttributes=Array.from(new Set(n.allowAttributes))}function Sa(t,e,n){for(const o of t)"string"==typeof o[n]?e[n].push(o[n]):Array.isArray(o[n])&&e[n].push(...o[n])}function Ea(t,e){const n=t[e];return function(t){return Object.keys(t).map(e=>t[e])}(t).filter(t=>t.allowIn.includes(n.name))}function Ia(t){return"string"==typeof t?{name:t,*getAttributeKeys(){},getAttribute(){}}:{name:t.is("element")?t.name:"$text",*getAttributeKeys(){yield*t.getAttributeKeys()},getAttribute:e=>t.getAttribute(e)}}class Na{constructor(t={}){this._removeIfEmpty=new Set,this._modelCursor=null,this.conversionApi=Object.assign({},t),this.conversionApi.convertItem=this._convertItem.bind(this),this.conversionApi.convertChildren=this._convertChildren.bind(this),this.conversionApi.splitToAllowedParent=this._splitToAllowedParent.bind(this)}convert(t,e,n=["$root"]){this.fire("viewCleanup",t),this._modelCursor=function(t,e){let n;for(const o of new va(t)){const t={};for(const e of o.getAttributeKeys())t[e]=o.getAttribute(e);const i=e.createElement(o.name,t);n&&e.append(i,n),n=Hs.createAt(i)}return n}(n,e),this.conversionApi.writer=e,this.conversionApi.consumable=wa.createFrom(t),this.conversionApi.store={};const{modelRange:o}=this._convertItem(t,this._modelCursor),i=e.createDocumentFragment();if(o){this._removeEmptyElements();for(const t of Array.from(this._modelCursor.parent.getChildren()))e.append(t,i);i.markers=function(t,e){const n=new Set,o=new Map,i=qs.createIn(t).getItems();for(const t of i)"$marker"==t.name&&n.add(t);for(const t of n){const n=t.getAttribute("data-name"),i=Hs.createBefore(t);o.has(n)?o.get(n).end=Hs.createFromPosition(i):o.set(n,new qs(Hs.createFromPosition(i))),e.remove(t)}return o}(i,e)}return this._modelCursor=null,this._removeIfEmpty.clear(),this.conversionApi.writer=null,this.conversionApi.store=null,i}_convertItem(t,e){const n=Object.assign({viewItem:t,modelCursor:e,modelRange:null});if(t.is("element")?this.fire("element:"+t.name,n,this.conversionApi):t.is("text")?this.fire("text",n,this.conversionApi):this.fire("documentFragment",n,this.conversionApi),n.modelRange&&!(n.modelRange instanceof qs))throw new M.b("view-conversion-dispatcher-incorrect-result: Incorrect conversion result was dropped.");return{modelRange:n.modelRange,modelCursor:n.modelCursor}}_convertChildren(t,e){const n=new qs(e);let o=e;for(const e of Array.from(t.getChildren())){const t=this._convertItem(e,o);t.modelRange instanceof qs&&(n.end=t.modelRange.end,o=t.modelCursor)}return{modelRange:n,modelCursor:o}}_splitToAllowedParent(t,e){const n=this.conversionApi.schema.findAllowedParent(t,e);if(!n)return null;if(n===e.parent)return{position:e};if(this._modelCursor.parent.getAncestors().includes(n))return null;const o=this.conversionApi.writer.split(e,n);for(const t of o.range.getPositions())t.isEqual(o.position)||this._removeIfEmpty.add(t.parent);return{position:o.position,cursorParent:o.range.end.parent}}_removeEmptyElements(){let t=!1;for(const e of this._removeIfEmpty)e.isEmpty&&(this.conversionApi.writer.remove(e),this._removeIfEmpty.delete(e),t=!0);t&&this._removeEmptyElements()}}function Oa(t){const e=function(t){const e=new fo(t.view);return(n,o,i)=>{const r=e.match(o.viewItem);if(!r)return;r.match.name=!0;const s=function(t,e,n){return t instanceof Function?t(e,n):n.createElement(t)}(t.model,o.viewItem,i.writer);if(!s)return;if(!i.consumable.test(o.viewItem,r.match))return;const a=i.splitToAllowedParent(s,o.modelCursor);if(!a)return;i.writer.insert(s,a.position);const c=i.convertChildren(o.viewItem,Hs.createAt(s));i.consumable.consume(o.viewItem,r.match),o.modelRange=new qs(Hs.createBefore(s),Hs.createAfter(c.modelCursor.parent)),a.cursorParent?o.modelCursor=Hs.createAt(a.cursorParent):o.modelCursor=o.modelRange.end}}(t=sa(t)),n=La(t),o=n?"element:"+n:"element";return n=>{n.on(o,e,{priority:t.converterPriority||"normal"})}}function Ra(t){ja(t=sa(t));const e=Va(t,!1),n=La(t),o=n?"element:"+n:"element";return n=>{n.on(o,e,{priority:t.converterPriority||"normal"})}}function Da(t){let e=null;("string"==typeof(t=sa(t)).view||t.view.key)&&(e=function(t){"string"==typeof t.view&&(t.view={key:t.view});const e=t.view.key;let n;if("class"==e||"style"==e){const o="class"==e?"classes":"styles";n={[o]:t.view.value}}else{const o=void 0===t.view.value?/[\s\S]*/:t.view.value;n={attributes:{[e]:o}}}t.view.name&&(n.name=t.view.name);return t.view=n,e}(t)),ja(t,e);const n=Va(t,!0);return e=>{e.on("element",n,{priority:t.converterPriority||"low"})}}function La(t){return"string"==typeof t.view?t.view:"object"==typeof t.view&&"string"==typeof t.view.name?t.view.name:null}function ja(t,e=null){const n=null===e||(t=>t.getAttribute(e)),o="object"!=typeof t.model?t.model:t.model.key,i="object"!=typeof t.model||void 0===t.model.value?n:t.model.value;t.model={key:o,value:i}}function Va(t,e){const n=new fo(t.view);return(o,i,r)=>{const s=n.match(i.viewItem);if(!s)return;const a=t.model.key,c="function"==typeof t.model.value?t.model.value(i.viewItem):t.model.value;null!==c&&(!function(t){if("object"==typeof t.view&&!La(t))return!1;return!t.view.classes&&!t.view.attributes&&!t.view.styles}(t)?delete s.match.name:s.match.name=!0,r.consumable.test(i.viewItem,s.match)&&(i.modelRange||(i=Object.assign(i,r.convertChildren(i.viewItem,i.modelCursor))),function(t,e,n,o){let i=!1;for(const r of Array.from(t.getItems({shallow:n})))o.schema.checkAttribute(r,e.key)&&(o.writer.setAttribute(e.key,e.value,r),i=!0);return i}(i.modelRange,{key:a,value:c},e,r)&&r.consumable.consume(i.viewItem,s.match)))}}B(Na,R);class Fa{constructor(t,e){this.model=t,this.processor=e,this.mapper=new Ws,this.downcastDispatcher=new $s({mapper:this.mapper}),this.downcastDispatcher.on("insert:$text",(t,e,n)=>{if(!n.consumable.consume(e.item,"insert"))return;const o=n.writer,i=n.mapper.toViewPosition(e.range.start),r=o.createText(e.item.data);o.insert(i,r)},{priority:"lowest"}),this.upcastDispatcher=new Na({schema:t.schema}),this.upcastDispatcher.on("text",(t,e,n)=>{if(n.schema.checkChild(e.modelCursor,"$text")&&n.consumable.consume(e.viewItem)){const t=n.writer.createText(e.viewItem.data);n.writer.insert(t,e.modelCursor),e.modelRange=qs.createFromPositionAndShift(e.modelCursor,t.offsetSize),e.modelCursor=e.modelRange.end}},{priority:"lowest"}),this.upcastDispatcher.on("element",(t,e,n)=>{if(!e.modelRange&&n.consumable.consume(e.viewItem,{name:!0})){const{modelRange:t,modelCursor:o}=n.convertChildren(e.viewItem,e.modelCursor);e.modelRange=t,e.modelCursor=o}},{priority:"lowest"}),this.upcastDispatcher.on("documentFragment",(t,e,n)=>{if(!e.modelRange&&n.consumable.consume(e.viewItem,{name:!0})){const{modelRange:t,modelCursor:o}=n.convertChildren(e.viewItem,e.modelCursor);e.modelRange=t,e.modelCursor=o}},{priority:"lowest"}),this.decorate("init")}get(t="main"){return this.stringify(this.model.document.getRoot(t))}stringify(t){const e=this.toView(t);return this.processor.toData(e)}toView(t){this.mapper.clearBindings();const e=qs.createIn(t),n=new _i,o=new ki(new ei);if(this.mapper.bindElements(t,n),this.downcastDispatcher.convertInsert(e,o),!t.is("documentFragment")){const e=function(t){const e=[],n=t.root.document;if(!n)return[];const o=qs.createIn(t);for(const t of n.model.markers){const n=o.getIntersection(t.getRange());n&&e.push([t.name,n])}return e}(t);for(const[t,n]of e)this.downcastDispatcher.convertMarkerAdd(t,n,o)}return n}init(t,e="main"){if(this.model.document.version)throw new M.b("datacontroller-init-document-not-empty: Trying to set initial data to not empty document.");const n=this.model.document.getRoot(e);return this.model.enqueueChange("transparent",e=>{e.insert(this.parse(t,n),n)}),Promise.resolve()}set(t,e="main"){const n=this.model.document.getRoot(e);this.model.enqueueChange("transparent",e=>{e.setSelection(null),e.removeSelectionAttribute(this.model.document.selection.getAttributeKeys()),e.remove(qs.createIn(n)),e.insert(this.parse(t,n),n)})}parse(t,e="$root"){const n=this.processor.toView(t);return this.toModel(n,e)}toModel(t,e="$root"){return this.model.change(n=>this.upcastDispatcher.convert(t,n,e))}destroy(){}}B(Fa,jo);class za{constructor(){this._dispatchersGroups=new Map}register(t,e){if(this._dispatchersGroups.has(t))throw new M.b("conversion-register-group-exists: Trying to register a group name that was already registered.");this._dispatchersGroups.set(t,e)}for(t){const e=this._getDispatchers(t);return{add(t){return function(t,e){for(const n of t)e(n)}(e,t),this}}}elementToElement(t){this.for("downcast").add(aa(t));for(const{model:e,view:n}of Ba(t))this.for("upcast").add(Oa({model:e,view:n,converterPriority:t.converterPriority}))}attributeToElement(t){this.for("downcast").add(ca(t));for(const{model:e,view:n}of Ba(t))this.for("upcast").add(Ra({view:n,model:e,priority:t.priority}))}attributeToAttribute(t){this.for("downcast").add(la(t));for(const{model:e,view:n}of Ba(t))this.for("upcast").add(Da({view:n,model:e}))}_getDispatchers(t){const e=this._dispatchersGroups.get(t);if(!e)throw new M.b("conversion-for-unknown-group: Trying to add a converter to an unknown dispatchers group.");return e}}function*Ba(t){if(t.model.values)for(const e of t.model.values){yield*Ua({key:t.model.key,value:e},t.view[e],t.upcastAlso?t.upcastAlso[e]:void 0)}else yield*Ua(t.model,t.view,t.upcastAlso)}function*Ua(t,e,n){if(yield{model:t,view:e},n){n=Array.isArray(n)?n:[n];for(const e of n)yield{model:t,view:e}}}class Ha{constructor(t="default"){this.operations=[],this.type=t}get baseVersion(){for(const t of this.operations)if(null!==t.baseVersion)return t.baseVersion;return null}addOperation(t){return t.batch=this,this.operations.push(t),t}}class qa{constructor(t){this.baseVersion=t,this.isDocumentOperation=null!==this.baseVersion,this.batch=null}_validate(){}toJSON(){const t=Object.assign({},this);return t.__className=this.constructor.className,delete t.batch,delete t.isDocumentOperation,t}static get className(){return"Operation"}static fromJSON(t){return new this(t.baseVersion)}}class Wa{constructor(t){this.markers=new Map,this._children=new Vs,t&&this._insertChild(0,t)}[Symbol.iterator](){return this.getChildren()}get childCount(){return this._children.length}get maxOffset(){return this._children.maxOffset}get isEmpty(){return 0===this.childCount}get root(){return this}get parent(){return null}is(t){return"documentFragment"==t}getChild(t){return this._children.getNode(t)}getChildren(){return this._children[Symbol.iterator]()}getChildIndex(t){return this._children.getNodeIndex(t)}getChildStartOffset(t){return this._children.getNodeStartOffset(t)}getPath(){return[]}getNodeByPath(t){let e=this;for(const n of t)e=e.getChild(e.offsetToIndex(n));return e}offsetToIndex(t){return this._children.offsetToIndex(t)}toJSON(){const t=[];for(const e of this._children)t.push(e.toJSON());return t}static fromJSON(t){const e=[];for(const n of t)n.name?e.push(Fs.fromJSON(n)):e.push(Ls.fromJSON(n));return new Wa(e)}_appendChild(t){this._insertChild(this.childCount,t)}_insertChild(t,e){const n=function(t){if("string"==typeof t)return[new Ls(t)];ho(t)||(t=[t]);return Array.from(t).map(t=>"string"==typeof t?new Ls(t):t instanceof js?new Ls(t.data,t.getAttributes()):t)}(e);for(const t of n)null!==t.parent&&t._remove(),t.parent=this;this._children._insertNodes(t,n)}_removeChildren(t,e=1){const n=this._children._removeNodes(t,e);for(const t of n)t.parent=null;return n}}function Ya(t,e){const n=(e=Qa(e)).reduce((t,e)=>t+e.offsetSize,0),o=t.parent;Ka(t);const i=t.index;return o._insertChild(i,e),Ja(o,i+e.length),Ja(o,i),new qs(t,t.getShiftedBy(n))}function Ga(t){if(!t.isFlat)throw new M.b("operation-utils-remove-range-not-flat: Trying to remove a range which starts and ends in different element.");const e=t.start.parent;Ka(t.start),Ka(t.end);const n=e._removeChildren(t.start.index,t.end.index-t.start.index);return Ja(e,t.start.index),n}function $a(t,e){if(!t.isFlat)throw new M.b("operation-utils-move-range-not-flat: Trying to move a range which starts and ends in different element.");const n=Ga(t);return Ya(e=e._getTransformedByDeletion(t.start,t.end.offset-t.start.offset),n)}function Qa(t){const e=[];t instanceof Array||(t=[t]);for(let n=0;n<t.length;n++)if("string"==typeof t[n])e.push(new Ls(t[n]));else if(t[n]instanceof js)e.push(new Ls(t[n].data,t[n].getAttributes()));else if(t[n]instanceof Wa||t[n]instanceof Vs)for(const o of t[n])e.push(o);else t[n]instanceof Ds&&e.push(t[n]);for(let t=1;t<e.length;t++){const n=e[t],o=e[t-1];n instanceof Ls&&o instanceof Ls&&Za(n,o)&&(e.splice(t-1,2,new Ls(o.data+n.data,o.getAttributes())),t--)}return e}function Ja(t,e){const n=t.getChild(e-1),o=t.getChild(e);if(n&&o&&n.is("text")&&o.is("text")&&Za(n,o)){const i=new Ls(n.data+o.data,n.getAttributes());t._removeChildren(e-1,2),t._insertChild(e-1,i)}}function Ka(t){const e=t.textNode,n=t.parent;if(e){const o=t.offset-e.startOffset,i=e.index;n._removeChildren(i,1);const r=new Ls(e.data.substr(0,o),e.getAttributes()),s=new Ls(e.data.substr(o),e.getAttributes());n._insertChild(i,[r,s])}}function Za(t,e){const n=t.getAttributes(),o=e.getAttributes();for(const t of n){if(t[1]!==e.getAttribute(t[0]))return!1;o.next()}return o.next().done}var Xa=function(t,e){return Yr(t,e)};class tc extends qa{constructor(t,e,n,o,i){super(i),this.range=qs.createFromRange(t),this.key=e,this.oldValue=void 0===n?null:n,this.newValue=void 0===o?null:o}get type(){return null===this.oldValue?"addAttribute":null===this.newValue?"removeAttribute":"changeAttribute"}clone(){return new tc(this.range,this.key,this.oldValue,this.newValue,this.baseVersion)}getReversed(){return new tc(this.range,this.key,this.newValue,this.oldValue,this.baseVersion+1)}toJSON(){const t=super.toJSON();return t.range=this.range.toJSON(),t}_validate(){if(!this.range.isFlat)throw new M.b("attribute-operation-range-not-flat: The range to change is not flat.");for(const t of this.range.getItems({shallow:!0})){if(null!==this.oldValue&&!Xa(t.getAttribute(this.key),this.oldValue))throw new M.b("attribute-operation-wrong-old-value: Changed node has different attribute value than operation's old attribute value.",{item:t,key:this.key,value:this.oldValue});if(null===this.oldValue&&null!==this.newValue&&t.hasAttribute(this.key))throw new M.b("attribute-operation-attribute-exists: The attribute with given key already exists.",{node:t,key:this.key})}}_execute(){Xa(this.oldValue,this.newValue)||function(t,e,n){Ka(t.start),Ka(t.end);for(const o of t.getItems({shallow:!0})){const t=o.is("textProxy")?o.textNode:o;null!==n?t._setAttribute(e,n):t._removeAttribute(e),Ja(t.parent,t.index)}Ja(t.end.parent,t.end.index)}(this.range,this.key,this.newValue)}static get className(){return"AttributeOperation"}static fromJSON(t,e){return new tc(qs.fromJSON(t.range,e),t.key,t.oldValue,t.newValue,t.baseVersion)}}class ec extends qa{constructor(t,e){super(null),this.sourcePosition=Hs.createFromPosition(t),this.howMany=e}get type(){return"detach"}toJSON(){const t=super.toJSON();return t.sourcePosition=this.sourcePosition.toJSON(),t}_validate(){if(this.sourcePosition.root.document)throw new M.b("detach-operation-on-document-node: Cannot detach document node.")}_execute(){Ga(qs.createFromPositionAndShift(this.sourcePosition,this.howMany))}static get className(){return"DetachOperation"}}class nc extends qa{constructor(t,e,n,o){super(o),this.sourcePosition=Hs.createFromPosition(t),this.sourcePosition.stickiness="toNext",this.howMany=e,this.targetPosition=Hs.createFromPosition(n),this.targetPosition.stickiness="toNone"}get type(){return"$graveyard"==this.targetPosition.root.rootName?"remove":"$graveyard"==this.sourcePosition.root.rootName?"reinsert":"move"}clone(){return new this.constructor(this.sourcePosition,this.howMany,this.targetPosition,this.baseVersion)}getMovedRangeStart(){return this.targetPosition._getTransformedByDeletion(this.sourcePosition,this.howMany)}getReversed(){const t=this.sourcePosition._getTransformedByInsertion(this.targetPosition,this.howMany);return new this.constructor(this.getMovedRangeStart(),this.howMany,t,this.baseVersion+1)}_validate(){const t=this.sourcePosition.parent,e=this.targetPosition.parent,n=this.sourcePosition.offset,o=this.targetPosition.offset;if(!t||!e)throw new M.b("move-operation-position-invalid: Source position or target position is invalid.");if(n+this.howMany>t.maxOffset)throw new M.b("move-operation-nodes-do-not-exist: The nodes which should be moved do not exist.");if(t===e&&n<o&&o<n+this.howMany)throw new M.b("move-operation-range-into-itself: Trying to move a range of nodes to the inside of that range.");if(this.sourcePosition.root==this.targetPosition.root&&"prefix"==U(this.sourcePosition.getParentPath(),this.targetPosition.getParentPath())){const t=this.sourcePosition.path.length-1;if(this.targetPosition.path[t]>=n&&this.targetPosition.path[t]<n+this.howMany)throw new M.b("move-operation-node-into-itself: Trying to move a range of nodes into one of nodes from that range.")}}_execute(){$a(qs.createFromPositionAndShift(this.sourcePosition,this.howMany),this.targetPosition)}toJSON(){const t=super.toJSON();return t.sourcePosition=this.sourcePosition.toJSON(),t.targetPosition=this.targetPosition.toJSON(),t}static get className(){return"MoveOperation"}static fromJSON(t,e){const n=Hs.fromJSON(t.sourcePosition,e),o=Hs.fromJSON(t.targetPosition,e);return new this(n,t.howMany,o,t.baseVersion)}}class oc extends qa{constructor(t,e,n){super(n),this.position=Hs.createFromPosition(t),this.position.stickiness="toNone",this.nodes=new Vs(Qa(e)),this.shouldReceiveAttributes=!1}get type(){return"insert"}get howMany(){return this.nodes.maxOffset}clone(){const t=new Vs([...this.nodes].map(t=>t._clone(!0))),e=new oc(this.position,t,this.baseVersion);return e.shouldReceiveAttributes=this.shouldReceiveAttributes,e}getReversed(){const t=this.position.root.document.graveyard,e=new Hs(t,[0]);return new nc(this.position,this.nodes.maxOffset,e,this.baseVersion+1)}_validate(){const t=this.position.parent;if(!t||t.maxOffset<this.position.offset)throw new M.b("insert-operation-position-invalid: Insertion position is invalid.")}_execute(){const t=this.nodes;this.nodes=new Vs([...t].map(t=>t._clone(!0))),Ya(this.position,t)}toJSON(){const t=super.toJSON();return t.position=this.position.toJSON(),t.nodes=this.nodes.toJSON(),t}static get className(){return"InsertOperation"}static fromJSON(t,e){const n=[];for(const e of t.nodes)e.name?n.push(Fs.fromJSON(e)):n.push(Ls.fromJSON(e));const o=new oc(Hs.fromJSON(t.position,e),n,t.baseVersion);return o.shouldReceiveAttributes=t.shouldReceiveAttributes,o}}class ic extends qa{constructor(t,e,n,o,i,r){super(r),this.name=t,this.oldRange=e?qs.createFromRange(e):null,this.newRange=n?qs.createFromRange(n):null,this.affectsData=i,this._markers=o}get type(){return"marker"}clone(){return new ic(this.name,this.oldRange,this.newRange,this._markers,this.affectsData,this.baseVersion)}getReversed(){return new ic(this.name,this.newRange,this.oldRange,this._markers,this.affectsData,this.baseVersion+1)}_execute(){const t=this.newRange?"_set":"_remove";this._markers[t](this.name,this.newRange,!0,this.affectsData)}toJSON(){const t=super.toJSON();return this.oldRange&&(t.oldRange=this.oldRange.toJSON()),this.newRange&&(t.newRange=this.newRange.toJSON()),delete t._markers,t}static get className(){return"MarkerOperation"}static fromJSON(t,e){return new ic(t.name,t.oldRange?qs.fromJSON(t.oldRange,e):null,t.newRange?qs.fromJSON(t.newRange,e):null,e.model.markers,t.affectsData,t.baseVersion)}}class rc extends qa{constructor(t,e,n,o){super(o),this.position=t,this.position.stickiness="toNext",this.oldName=e,this.newName=n}get type(){return"rename"}clone(){return new rc(Hs.createFromPosition(this.position),this.oldName,this.newName,this.baseVersion)}getReversed(){return new rc(Hs.createFromPosition(this.position),this.newName,this.oldName,this.baseVersion+1)}_validate(){const t=this.position.nodeAfter;if(!(t instanceof Fs))throw new M.b("rename-operation-wrong-position: Given position is invalid or node after it is not an instance of Element.");if(t.name!==this.oldName)throw new M.b("rename-operation-wrong-name: Element to change has different name than operation's old name.")}_execute(){this.position.nodeAfter.name=this.newName}toJSON(){const t=super.toJSON();return t.position=this.position.toJSON(),t}static get className(){return"RenameOperation"}static fromJSON(t,e){return new rc(Hs.fromJSON(t.position,e),t.oldName,t.newName,t.baseVersion)}}class sc extends qa{constructor(t,e,n,o,i){super(i),this.root=t,this.key=e,this.oldValue=n,this.newValue=o}get type(){return null===this.oldValue?"addRootAttribute":null===this.newValue?"removeRootAttribute":"changeRootAttribute"}clone(){return new sc(this.root,this.key,this.oldValue,this.newValue,this.baseVersion)}getReversed(){return new sc(this.root,this.key,this.newValue,this.oldValue,this.baseVersion+1)}_validate(){if(this.root!=this.root.root||this.root.is("documentFragment"))throw new M.b("rootattribute-operation-not-a-root: The element to change is not a root element.",{root:this.root,key:this.key});if(null!==this.oldValue&&this.root.getAttribute(this.key)!==this.oldValue)throw new M.b("rootattribute-operation-wrong-old-value: Changed node has different attribute value than operation's old attribute value.",{root:this.root,key:this.key});if(null===this.oldValue&&null!==this.newValue&&this.root.hasAttribute(this.key))throw new M.b("rootattribute-operation-attribute-exists: The attribute with given key already exists.",{root:this.root,key:this.key})}_execute(){null!==this.newValue?this.root._setAttribute(this.key,this.newValue):this.root._removeAttribute(this.key)}toJSON(){const t=super.toJSON();return t.root=this.root.toJSON(),t}static get className(){return"RootAttributeOperation"}static fromJSON(t,e){if(!e.getRoot(t.root))throw new M.b("rootattribute-operation-fromjson-no-root: Cannot create RootAttributeOperation. Root with specified name does not exist.",{rootName:t.root});return new sc(e.getRoot(t.root),t.key,t.oldValue,t.newValue,t.baseVersion)}}class ac extends qa{constructor(t,e,n,o,i){super(i),this.sourcePosition=Hs.createFromPosition(t),this.sourcePosition.stickiness="toPrevious",this.howMany=e,this.targetPosition=Hs.createFromPosition(n),this.targetPosition.stickiness="toNext",this.graveyardPosition=Hs.createFromPosition(o)}get type(){return"merge"}get deletionPosition(){return new Hs(this.sourcePosition.root,this.sourcePosition.path.slice(0,-1))}get movedRange(){const t=this.sourcePosition.getShiftedBy(Number.POSITIVE_INFINITY);return new qs(this.sourcePosition,t)}clone(){return new this.constructor(this.sourcePosition,this.howMany,this.targetPosition,this.graveyardPosition,this.baseVersion)}getReversed(){const t=this.targetPosition._getTransformedByMergeOperation(this),e=this.sourcePosition.path.slice(0,-1),n=new Hs(this.sourcePosition.root,e)._getTransformedByMergeOperation(this),o=new cc(t,this.howMany,this.graveyardPosition,this.baseVersion+1);return o.insertionPosition=n,o}_validate(){const t=this.sourcePosition.parent,e=this.targetPosition.parent;if(!(t&&t.is("element")&&t.parent))throw new M.b("merge-operation-source-position-invalid: Merge source position is invalid.");if(!(e&&e.is("element")&&e.parent))throw new M.b("merge-operation-target-position-invalid: Merge target position is invalid.");if(this.howMany!=t.maxOffset)throw new M.b("merge-operation-how-many-invalid: Merge operation specifies wrong number of nodes to move.")}_execute(){const t=this.sourcePosition.parent;$a(qs.createIn(t),this.targetPosition),$a(qs.createOn(t),this.graveyardPosition)}toJSON(){const t=super.toJSON();return t.sourcePosition=t.sourcePosition.toJSON(),t.targetPosition=t.targetPosition.toJSON(),t.graveyardPosition=t.graveyardPosition.toJSON(),t}static get className(){return"MergeOperation"}static fromJSON(t,e){const n=Hs.fromJSON(t.sourcePosition,e),o=Hs.fromJSON(t.targetPosition,e),i=Hs.fromJSON(t.graveyardPosition,e);return new this(n,t.howMany,o,i,t.baseVersion)}}class cc extends qa{constructor(t,e,n,o){super(o),this.splitPosition=Hs.createFromPosition(t),this.splitPosition.stickiness="toNext",this.howMany=e,this.insertionPosition=cc.getInsertionPosition(t),this.insertionPosition.stickiness="toNone",this.graveyardPosition=n?Hs.createFromPosition(n):null,this.graveyardPosition&&(this.graveyardPosition.stickiness="toNext")}get type(){return"split"}get moveTargetPosition(){const t=this.insertionPosition.path.slice();return t.push(0),new Hs(this.insertionPosition.root,t)}get movedRange(){const t=this.splitPosition.getShiftedBy(Number.POSITIVE_INFINITY);return new qs(this.splitPosition,t)}clone(){const t=new this.constructor(this.splitPosition,this.howMany,this.graveyardPosition,this.baseVersion);return t.insertionPosition=this.insertionPosition,t}getReversed(){const t=this.splitPosition.root.document.graveyard,e=new Hs(t,[0]);return new ac(this.moveTargetPosition,this.howMany,this.splitPosition,e,this.baseVersion+1)}_validate(){const t=this.splitPosition.parent,e=this.splitPosition.offset;if(!t||t.maxOffset<e)throw new M.b("split-operation-position-invalid: Split position is invalid.");if(!t.parent)throw new M.b("split-operation-split-in-root: Cannot split root element.");if(this.howMany!=t.maxOffset-this.splitPosition.offset)throw new M.b("split-operation-how-many-invalid: Split operation specifies wrong number of nodes to move.");if(this.graveyardPosition&&!this.graveyardPosition.nodeAfter)throw new M.b("split-operation-graveyard-position-invalid: Graveyard position invalid.")}_execute(){const t=this.splitPosition.parent;if(this.graveyardPosition)$a(qs.createFromPositionAndShift(this.graveyardPosition,1),this.insertionPosition);else{const e=t._clone();Ya(this.insertionPosition,e)}$a(qs.createFromParentsAndOffsets(t,this.splitPosition.offset,t,t.maxOffset),this.moveTargetPosition)}toJSON(){const t=super.toJSON();return t.splitPosition=this.splitPosition.toJSON(),t.insertionPosition=this.insertionPosition.toJSON(),this.graveyardPosition&&(t.graveyardPosition=this.graveyardPosition.toJSON()),t}static get className(){return"SplitOperation"}static getInsertionPosition(t){const e=t.path.slice(0,-1);return e[e.length-1]++,new Hs(t.root,e)}static fromJSON(t,e){const n=Hs.fromJSON(t.splitPosition,e),o=Hs.fromJSON(t.insertionPosition,e),i=t.graveyardPosition?Hs.fromJSON(t.graveyardPosition,e):null,r=new this(n,t.howMany,i,t.baseVersion);return r.insertionPosition=o,r}}class lc extends Fs{constructor(t,e,n="main"){super(e),this._doc=t,this.rootName=n}get document(){return this._doc}is(t,e){return e?"rootElement"==t&&e==this.name||super.is(t,e):"rootElement"==t||super.is(t)}toJSON(){return this.rootName}}class dc{constructor(t,e){this.model=t,this.batch=e}createText(t,e){return new Ls(t,e)}createElement(t,e){return new Fs(t,e)}createDocumentFragment(){return new Wa}insert(t,e,n){this._assertWriterUsedCorrectly();const o=Hs.createAt(e,n);if(t.parent){if(pc(t.root,o.root))return void this.move(qs.createOn(t),o);if(t.root.document)throw new Error("model-writer-insert-forbidden-move: Cannot move a node from a document to a different tree.");this.remove(t)}const i=o.root.document?o.root.document.version:null,r=new oc(o,t,i);if(t instanceof Ls&&(r.shouldReceiveAttributes=!0),this.batch.addOperation(r),this.model.applyOperation(r),t instanceof Wa)for(const[e,n]of t.markers){const t=Hs.createAt(n.root),i=new qs(n.start._getCombined(t,o),n.end._getCombined(t,o));this.addMarker(e,{range:i,usingOperation:!0})}}insertText(t,e,n,o){e instanceof Wa||e instanceof Fs||e instanceof Hs?this.insert(this.createText(t),e,n):this.insert(this.createText(t,e),n,o)}insertElement(t,e,n,o){e instanceof Wa||e instanceof Fs||e instanceof Hs?this.insert(this.createElement(t),e,n):this.insert(this.createElement(t,e),n,o)}append(t,e){this.insert(t,e,"end")}appendText(t,e,n){e instanceof Wa||e instanceof Fs?this.insert(this.createText(t),e,"end"):this.insert(this.createText(t,e),n,"end")}appendElement(t,e,n){e instanceof Wa||e instanceof Fs?this.insert(this.createElement(t),e,"end"):this.insert(this.createElement(t,e),n,"end")}setAttribute(t,e,n){if(this._assertWriterUsedCorrectly(),n instanceof qs){const o=n.getMinimalFlatRanges();for(const n of o)uc(this,t,e,n)}else hc(this,t,e,n)}setAttributes(t,e){for(const[n,o]of Rs(t))this.setAttribute(n,o,e)}removeAttribute(t,e){if(this._assertWriterUsedCorrectly(),e instanceof qs){const n=e.getMinimalFlatRanges();for(const e of n)uc(this,t,null,e)}else hc(this,t,null,e)}clearAttributes(t){this._assertWriterUsedCorrectly();const e=t=>{for(const e of t.getAttributeKeys())this.removeAttribute(e,t)};if(t instanceof qs)for(const n of t.getItems())e(n);else e(t)}move(t,e,n){if(this._assertWriterUsedCorrectly(),!(t instanceof qs))throw new M.b("writer-move-invalid-range: Invalid range to move.");if(!t.isFlat)throw new M.b("writer-move-range-not-flat: Range to move is not flat.");const o=Hs.createAt(e,n);if(!pc(t.root,o.root))throw new M.b("writer-move-different-document: Range is going to be moved between different documents.");const i=t.root.document?t.root.document.version:null,r=new nc(t.start,t.end.offset-t.start.offset,o,i);this.batch.addOperation(r),this.model.applyOperation(r)}remove(t){if(this._assertWriterUsedCorrectly(),t instanceof qs){const e=t.getMinimalFlatRanges().reverse();for(const t of e)mc(t.start,t.end.offset-t.start.offset,this.batch,this.model)}else{const e=t.is("text")?t.offsetSize:1;mc(Hs.createBefore(t),e,this.batch,this.model)}}merge(t){this._assertWriterUsedCorrectly();const e=t.nodeBefore,n=t.nodeAfter;if(!(e instanceof Fs))throw new M.b("writer-merge-no-element-before: Node before merge position must be an element.");if(!(n instanceof Fs))throw new M.b("writer-merge-no-element-after: Node after merge position must be an element.");t.root.document?this._merge(t):this._mergeDetached(t)}_mergeDetached(t){const e=t.nodeBefore,n=t.nodeAfter;this.move(qs.createIn(n),Hs.createAt(e,"end")),this.remove(n)}_merge(t){const e=Hs.createAt(t.nodeBefore,"end"),n=Hs.createAt(t.nodeAfter,0),o=t.root.document.graveyard,i=new Hs(o,[0]),r=t.root.document.version,s=new ac(n,t.nodeAfter.maxOffset,e,i,r);this.batch.addOperation(s),this.model.applyOperation(s)}rename(t,e){if(this._assertWriterUsedCorrectly(),!(t instanceof Fs))throw new M.b("writer-rename-not-element-instance: Trying to rename an object which is not an instance of Element.");const n=t.root.document?t.root.document.version:null,o=new rc(Hs.createBefore(t),t.name,e,n);this.batch.addOperation(o),this.model.applyOperation(o)}split(t,e){this._assertWriterUsedCorrectly();let n,o,i=t.parent;if(!i.parent)throw new M.b("writer-split-element-no-parent: Element with no parent can not be split.");if(e||(e=i.parent),!t.parent.getAncestors({includeSelf:!0}).includes(e))throw new M.b("writer-split-invalid-limit-element: Limit element is not a position ancestor.");do{const e=i.root.document?i.root.document.version:null,r=i.maxOffset-t.offset,s=new cc(t,r,null,e);this.batch.addOperation(s),this.model.applyOperation(s),n||o||(n=i,o=t.parent.nextSibling),i=(t=Hs.createAfter(t.parent)).parent}while(i!==e);return{position:t,range:new qs(Hs.createAt(n,"end"),Hs.createAt(o))}}wrap(t,e){if(this._assertWriterUsedCorrectly(),!t.isFlat)throw new M.b("writer-wrap-range-not-flat: Range to wrap is not flat.");const n=e instanceof Fs?e:new Fs(e);if(n.childCount>0)throw new M.b("writer-wrap-element-not-empty: Element to wrap with is not empty.");if(null!==n.parent)throw new M.b("writer-wrap-element-attached: Element to wrap with is already attached to tree model.");const o=t.root.document?t.root.document.version:null,i=new oc(t.start,n,o);this.batch.addOperation(i),this.model.applyOperation(i);const r=new nc(t.start.getShiftedBy(1),t.end.offset-t.start.offset,Hs.createAt(n,0),null===o?null:o+1);this.batch.addOperation(r),this.model.applyOperation(r)}unwrap(t){if(this._assertWriterUsedCorrectly(),null===t.parent)throw new M.b("writer-unwrap-element-no-parent: Trying to unwrap an element which has no parent.");this.move(qs.createIn(t),Hs.createAfter(t)),this.remove(t)}addMarker(t,e){if(this._assertWriterUsedCorrectly(),!e||"boolean"!=typeof e.usingOperation)throw new M.b("writer-addMarker-no-usingOperations: The options.usingOperations parameter is required when adding a new marker.");const n=e.usingOperation,o=e.range,i=void 0!==e.affectsData&&e.affectsData;if(this.model.markers.has(t))throw new M.b("writer-addMarker-marker-exists: Marker with provided name already exists.");if(!o)throw new M.b("writer-addMarker-no-range: Range parameter is required when adding a new marker.");return n?(fc(this,t,null,o,i),this.model.markers.get(t)):this.model.markers._set(t,o,n,i)}updateMarker(t,e={}){this._assertWriterUsedCorrectly();const n="string"==typeof t?t:t.name,o=this.model.markers.get(n);if(!o)throw new M.b("writer-updateMarker-marker-not-exists: Marker with provided name does not exists.");const i="boolean"==typeof e.usingOperation,r="boolean"==typeof e.affectsData,s=r?e.affectsData:o.affectsData;if(!i&&!e.range&&!r)throw new M.b("writer-updateMarker-wrong-options: One of the options is required - provide range, usingOperations or affectsData.");const a=o.getRange(),c=e.range?e.range:a;i&&e.usingOperation!==o.managedUsingOperations?e.usingOperation?fc(this,n,null,c,s):(fc(this,n,a,null,s),this.model.markers._set(n,c,void 0,s)):o.managedUsingOperations?fc(this,n,a,c,s):this.model.markers._set(n,c,void 0,s)}removeMarker(t){this._assertWriterUsedCorrectly();const e="string"==typeof t?t:t.name;if(!this.model.markers.has(e))throw new M.b("writer-removeMarker-no-marker: Trying to remove marker which does not exist.");const n=this.model.markers.get(e);n.managedUsingOperations?fc(this,e,n.getRange(),null,n.affectsData):this.model.markers._remove(e)}setSelection(t,e,n){this._assertWriterUsedCorrectly(),this.model.document.selection._setTo(t,e,n)}setSelectionFocus(t,e){this._assertWriterUsedCorrectly(),this.model.document.selection._setFocus(t,e)}setSelectionAttribute(t,e){if(this._assertWriterUsedCorrectly(),"string"==typeof t)this._setSelectionAttribute(t,e);else for(const[e,n]of Rs(t))this._setSelectionAttribute(e,n)}removeSelectionAttribute(t){if(this._assertWriterUsedCorrectly(),"string"==typeof t)this._removeSelectionAttribute(t);else for(const e of t)this._removeSelectionAttribute(e)}overrideSelectionGravity(){return this.model.document.selection._overrideGravity()}restoreSelectionGravity(t){this.model.document.selection._restoreGravity(t)}_setSelectionAttribute(t,e){const n=this.model.document.selection;if(n.isCollapsed&&n.anchor.parent.isEmpty){const o=ea._getStoreAttributeKey(t);this.setAttribute(o,e,n.anchor.parent)}n._setAttribute(t,e)}_removeSelectionAttribute(t){const e=this.model.document.selection;if(e.isCollapsed&&e.anchor.parent.isEmpty){const n=ea._getStoreAttributeKey(t);this.removeAttribute(n,e.anchor.parent)}e._removeAttribute(t)}_assertWriterUsedCorrectly(){if(this.model._currentWriter!==this)throw new M.b("writer-incorrect-use: Trying to use a writer outside the change() block.")}}function uc(t,e,n,o){const i=t.model,r=i.document;let s,a,c,l=o.start;for(const t of o.getWalker({shallow:!0}))c=t.item.getAttribute(e),s&&a!=c&&(a!=n&&d(),l=s),s=t.nextPosition,a=c;function d(){const o=new qs(l,s),c=o.root.document?r.version:null,d=new tc(o,e,a,n,c);t.batch.addOperation(d),i.applyOperation(d)}s instanceof Hs&&s!=l&&a!=n&&d()}function hc(t,e,n,o){const i=t.model,r=i.document,s=o.getAttribute(e);let a,c;if(s!=n){if(o.root===o){const t=o.document?r.version:null;c=new sc(o,e,s,n,t)}else{const t=(a=new qs(Hs.createBefore(o),Hs.createAfter(o))).root.document?r.version:null;c=new tc(a,e,s,n,t)}t.batch.addOperation(c),i.applyOperation(c)}}function fc(t,e,n,o,i){const r=t.model,s=r.document,a=new ic(e,n,o,r.markers,i,s.version);t.batch.addOperation(a),r.applyOperation(a)}function mc(t,e,n,o){let i;if(t.root.document){const n=o.document,r=new Hs(n.graveyard,[0]);i=new nc(t,e,r,n.version)}else i=new ec(t,e);n.addOperation(i),o.applyOperation(i)}function pc(t,e){return t===e||t instanceof lc&&e instanceof lc}class gc{constructor(t){this._markerCollection=t,this._changesInElement=new Map,this._elementSnapshots=new Map,this._changedMarkers=new Map,this._changeCount=0,this._cachedChanges=null,this._cachedChangesWithGraveyard=null}get isEmpty(){return 0==this._changesInElement.size&&0==this._changedMarkers.size}bufferOperation(t){switch(t.type){case"insert":if(this._isInInsertedElement(t.position.parent))return;this._markInsert(t.position.parent,t.position.offset,t.nodes.maxOffset);break;case"addAttribute":case"removeAttribute":case"changeAttribute":for(const e of t.range.getItems())this._isInInsertedElement(e.parent)||this._markAttribute(e);break;case"remove":case"move":case"reinsert":{const e=this._isInInsertedElement(t.sourcePosition.parent),n=this._isInInsertedElement(t.targetPosition.parent);e||this._markRemove(t.sourcePosition.parent,t.sourcePosition.offset,t.howMany),n||this._markInsert(t.targetPosition.parent,t.getMovedRangeStart().offset,t.howMany);break}case"rename":{if(this._isInInsertedElement(t.position.parent))return;this._markRemove(t.position.parent,t.position.offset,1),this._markInsert(t.position.parent,t.position.offset,1);const e=qs.createFromPositionAndShift(t.position,1);for(const t of this._markerCollection.getMarkersIntersectingRange(e)){const e=t.getRange();this.bufferMarkerChange(t.name,e,e,t.affectsData)}break}case"split":{const e=t.splitPosition.parent;this._isInInsertedElement(e)||this._markRemove(e,t.splitPosition.offset,t.howMany),this._isInInsertedElement(t.insertionPosition.parent)||this._markInsert(t.insertionPosition.parent,t.insertionPosition.offset,1),t.graveyardPosition&&this._markRemove(t.graveyardPosition.parent,t.graveyardPosition.offset,1);break}case"merge":{const e=t.sourcePosition.parent;this._isInInsertedElement(e.parent)||this._markRemove(e.parent,e.startOffset,1);const n=t.graveyardPosition.parent;this._markInsert(n,t.graveyardPosition.offset,1);const o=t.targetPosition.parent;this._isInInsertedElement(o)||this._markInsert(o,t.targetPosition.offset,e.maxOffset);break}}this._cachedChanges=null}bufferMarkerChange(t,e,n,o){const i=this._changedMarkers.get(t);i?(i.newRange=n,i.affectsData=o,null==i.oldRange&&null==i.newRange&&this._changedMarkers.delete(t)):this._changedMarkers.set(t,{oldRange:e,newRange:n,affectsData:o})}getMarkersToRemove(){const t=[];for(const[e,n]of this._changedMarkers)null!=n.oldRange&&t.push({name:e,range:n.oldRange});return t}getMarkersToAdd(){const t=[];for(const[e,n]of this._changedMarkers)null!=n.newRange&&t.push({name:e,range:n.newRange});return t}hasDataChanges(){for(const[,t]of this._changedMarkers)if(t.affectsData)return!0;return this._changesInElement.size>0}getChanges(t={includeChangesInGraveyard:!1}){if(this._cachedChanges)return t.includeChangesInGraveyard?this._cachedChangesWithGraveyard.slice():this._cachedChanges.slice();const e=[];for(const t of this._changesInElement.keys()){const n=this._changesInElement.get(t).sort((t,e)=>t.offset===e.offset?t.type!=e.type?"remove"==t.type?-1:1:0:t.offset<e.offset?-1:1),o=this._elementSnapshots.get(t),i=bc(t.getChildren()),r=wc(o.length,n);let s=0,a=0;for(const n of r)if("i"===n)e.push(this._getInsertDiff(t,s,i[s].name)),s++;else if("r"===n)e.push(this._getRemoveDiff(t,s,o[a].name)),a++;else if("a"===n){const n=i[s].attributes,r=o[a].attributes;let c;if("$text"==i[s].name)c=qs.createFromParentsAndOffsets(t,s,t,s+1);else{const e=t.offsetToIndex(s);c=qs.createFromParentsAndOffsets(t,s,t.getChild(e),0)}e.push(...this._getAttributesDiff(c,r,n)),s++,a++}else s++,a++}e.sort((t,e)=>t.position.root!=e.position.root?t.position.root.rootName<e.position.root.rootName?-1:1:t.position.isEqual(e.position)?t.changeCount<e.changeCount?-1:1:t.position.isBefore(e.position)?-1:1);for(let t=1;t<e.length;t++){const n=e[t-1],o=e[t],i="remove"==n.type&&"remove"==o.type&&"$text"==n.name&&"$text"==o.name&&n.position.isEqual(o.position),r="insert"==n.type&&"insert"==o.type&&"$text"==n.name&&"$text"==o.name&&n.position.parent==o.position.parent&&n.position.offset+n.length==o.position.offset,s="attribute"==n.type&&"attribute"==o.type&&n.position.parent==o.position.parent&&n.range.isFlat&&o.range.isFlat&&n.position.offset+n.length==o.position.offset&&n.attributeKey==o.attributeKey&&n.attributeOldValue==o.attributeOldValue&&n.attributeNewValue==o.attributeNewValue;(i||r||s)&&(e[t-1].length++,s&&(e[t-1].range.end=e[t-1].range.end.getShiftedBy(1)),e.splice(t,1),t--)}for(const t of e)delete t.changeCount,"attribute"==t.type&&(delete t.position,delete t.length);return this._changeCount=0,this._cachedChangesWithGraveyard=e.slice(),this._cachedChanges=e.slice().filter(_c),t.includeChangesInGraveyard?this._cachedChangesWithGraveyard:this._cachedChanges}reset(){this._changesInElement.clear(),this._elementSnapshots.clear(),this._changedMarkers.clear(),this._cachedChanges=null}_markInsert(t,e,n){const o={type:"insert",offset:e,howMany:n,count:this._changeCount++};this._markChange(t,o)}_markRemove(t,e,n){const o={type:"remove",offset:e,howMany:n,count:this._changeCount++};this._markChange(t,o),this._removeAllNestedChanges(t,e,n)}_markAttribute(t){const e={type:"attribute",offset:t.startOffset,howMany:t.offsetSize,count:this._changeCount++};this._markChange(t.parent,e)}_markChange(t,e){this._makeSnapshot(t);const n=this._getChangesForElement(t);this._handleChange(e,n),n.push(e);for(let t=0;t<n.length;t++)n[t].howMany<1&&(n.splice(t,1),t--)}_getChangesForElement(t){let e;return this._changesInElement.has(t)?e=this._changesInElement.get(t):(e=[],this._changesInElement.set(t,e)),e}_makeSnapshot(t){this._elementSnapshots.has(t)||this._elementSnapshots.set(t,bc(t.getChildren()))}_handleChange(t,e){t.nodesToHandle=t.howMany;for(const n of e){const o=t.offset+t.howMany,i=n.offset+n.howMany;if("insert"==t.type&&("insert"==n.type&&(t.offset<=n.offset?n.offset+=t.howMany:t.offset<i&&(n.howMany+=t.nodesToHandle,t.nodesToHandle=0)),"remove"==n.type&&t.offset<n.offset&&(n.offset+=t.howMany),"attribute"==n.type))if(t.offset<=n.offset)n.offset+=t.howMany;else if(t.offset<i){const i=n.howMany;n.howMany=t.offset-n.offset,e.unshift({type:"attribute",offset:o,howMany:i-n.howMany,count:this._changeCount++})}if("remove"==t.type){if("insert"==n.type)if(o<=n.offset)n.offset-=t.howMany;else if(o<=i)if(t.offset<n.offset){const e=o-n.offset;n.offset=t.offset,n.howMany-=e,t.nodesToHandle-=e}else n.howMany-=t.nodesToHandle,t.nodesToHandle=0;else if(t.offset<=n.offset)t.nodesToHandle-=n.howMany,n.howMany=0;else if(t.offset<i){const e=i-t.offset;n.howMany-=e,t.nodesToHandle-=e}if("remove"==n.type&&(o<=n.offset?n.offset-=t.howMany:t.offset<n.offset&&(t.nodesToHandle+=n.howMany,n.howMany=0)),"attribute"==n.type)if(o<=n.offset)n.offset-=t.howMany;else if(t.offset<n.offset){const e=o-n.offset;n.offset=t.offset,n.howMany-=e}else if(t.offset<i)if(o<=i){const o=n.howMany;n.howMany=t.offset-n.offset;const i=o-n.howMany-t.nodesToHandle;e.unshift({type:"attribute",offset:t.offset,howMany:i,count:this._changeCount++})}else n.howMany-=i-t.offset}if("attribute"==t.type){if("insert"==n.type)if(t.offset<n.offset&&o>n.offset){if(o>i){const t={type:"attribute",offset:i,howMany:o-i,count:this._changeCount++};this._handleChange(t,e),e.push(t)}t.nodesToHandle=n.offset-t.offset,t.howMany=t.nodesToHandle}else t.offset>=n.offset&&t.offset<i&&(o>i?(t.nodesToHandle=o-i,t.offset=i):t.nodesToHandle=0);"attribute"==n.type&&(t.offset>=n.offset&&o<=i?(t.nodesToHandle=0,t.howMany=0,t.offset=0):t.offset<=n.offset&&o>=i&&(n.howMany=0))}}t.howMany=t.nodesToHandle,delete t.nodesToHandle}_getInsertDiff(t,e,n){return{type:"insert",position:Hs.createFromParentAndOffset(t,e),name:n,length:1,changeCount:this._changeCount++}}_getRemoveDiff(t,e,n){return{type:"remove",position:Hs.createFromParentAndOffset(t,e),name:n,length:1,changeCount:this._changeCount++}}_getAttributesDiff(t,e,n){const o=[];n=new Map(n);for(const[i,r]of e){const e=n.has(i)?n.get(i):null;e!==r&&o.push({type:"attribute",position:t.start,range:qs.createFromRange(t),length:1,attributeKey:i,attributeOldValue:r,attributeNewValue:e,changeCount:this._changeCount++}),n.delete(i)}for(const[e,i]of n)o.push({type:"attribute",position:t.start,range:qs.createFromRange(t),length:1,attributeKey:e,attributeOldValue:null,attributeNewValue:i,changeCount:this._changeCount++});return o}_isInInsertedElement(t){const e=t.parent;if(!e)return!1;const n=this._changesInElement.get(e),o=t.startOffset;if(n)for(const t of n)if("insert"==t.type&&o>=t.offset&&o<t.offset+t.howMany)return!0;return this._isInInsertedElement(e)}_removeAllNestedChanges(t,e,n){const o=qs.createFromParentsAndOffsets(t,e,t,e+n);for(const t of o.getItems({shallow:!0}))t.is("element")&&(this._elementSnapshots.delete(t),this._changesInElement.delete(t),this._removeAllNestedChanges(t,0,t.maxOffset))}}function bc(t){const e=[];for(const n of t)if(n.is("text"))for(let t=0;t<n.data.length;t++)e.push({name:"$text",attributes:new Map(n.getAttributes())});else e.push({name:n.name,attributes:new Map(n.getAttributes())});return e}function wc(t,e){const n=[];let o=0,i=0;for(const t of e)t.offset>o&&(n.push(..."e".repeat(t.offset-o).split("")),i+=t.offset-o),"insert"==t.type?(n.push(..."i".repeat(t.howMany).split("")),o=t.offset+t.howMany):"remove"==t.type?(n.push(..."r".repeat(t.howMany).split("")),o=t.offset,i+=t.howMany):(n.push(..."a".repeat(t.howMany).split("")),o=t.offset+t.howMany,i+=t.howMany);return i<t&&n.push(..."e".repeat(t-i).split("")),n}function _c(t){const e=t.position&&"$graveyard"==t.position.root.rootName,n=t.range&&"$graveyard"==t.range.root.rootName;return!e&&!n}class kc{constructor(){this._operations=[],this._undoPairs=new Map,this._undoneOperations=new Set}addOperation(t){this._operations.includes(t)||this._operations.push(t)}getOperations(t=0,e=Number.POSITIVE_INFINITY){return t<0?[]:this._operations.slice(t,e)}getOperation(t){return this._operations[t]}setOperationAsUndone(t,e){this._undoPairs.set(e,t),this._undoneOperations.add(t)}isUndoingOperation(t){return this._undoPairs.has(t)}isUndoneOperation(t){return this._undoneOperations.has(t)}getUndoneOperation(t){return this._undoPairs.get(t)}}function vc(t,e){return function(t){return!!t&&1==t.length&&/[\ud800-\udbff]/.test(t)}(t.charAt(e-1))&&function(t){return!!t&&1==t.length&&/[\udc00-\udfff]/.test(t)}(t.charAt(e))}function yc(t,e){return function(t){return!!t&&1==t.length&&/[\u0300-\u036f\u1ab0-\u1aff\u1dc0-\u1dff\u20d0-\u20ff\ufe20-\ufe2f]/.test(t)}(t.charAt(e))}const xc="$graveyard";class Ac{constructor(t){this.model=t,this.version=0,this.history=new kc(this),this.selection=new ea(this),this.roots=new ti({idProperty:"rootName"}),this.differ=new gc(t.markers),this._postFixers=new Set,this.createRoot("$root",xc),this.listenTo(t,"applyOperation",(t,e)=>{const n=e[0];if(n.isDocumentOperation&&n.baseVersion!==this.version)throw new M.b("model-document-applyOperation-wrong-version: Only operations with matching versions can be applied.",{operation:n})},{priority:"highest"}),this.listenTo(t,"applyOperation",(t,e)=>{const n=e[0];n.isDocumentOperation&&this.differ.bufferOperation(n)},{priority:"high"}),this.listenTo(t,"applyOperation",(t,e)=>{const n=e[0];n.isDocumentOperation&&(this.version++,this.history.addOperation(n))},{priority:"low"});let e=!1;this.listenTo(this.selection,"change",()=>{e=!0}),this.listenTo(t,"_change",(t,n)=>{this.differ.isEmpty&&!e||(this._callPostFixers(n),this.differ.hasDataChanges()?this.fire("change:data",n.batch):this.fire("change",n.batch),this.differ.reset(),e=!1)}),this.listenTo(t.markers,"update",(t,e,n,o)=>{this.differ.bufferMarkerChange(e.name,n,o,e.affectsData),null===n&&e.on("change",(t,n)=>{this.differ.bufferMarkerChange(e.name,n,e.getRange(),e.affectsData)})})}get graveyard(){return this.getRoot(xc)}createRoot(t="$root",e="main"){if(this.roots.get(e))throw new M.b("model-document-createRoot-name-exists: Root with specified name already exists.",{name:e});const n=new lc(this,t,e);return this.roots.add(n),n}destroy(){this.selection.destroy(),this.stopListening()}getRoot(t="main"){return this.roots.get(t)}getRootNames(){return Array.from(this.roots,t=>t.rootName).filter(t=>t!=xc)}registerPostFixer(t){this._postFixers.add(t)}toJSON(){const t=so(this);return t.selection="[engine.model.DocumentSelection]",t.model="[engine.model.Model]",t}_getDefaultRoot(){for(const t of this.roots)if(t!==this.graveyard)return t;return this.graveyard}_getDefaultRange(){const t=this._getDefaultRoot(),e=this.model.schema,n=new Hs(t,[0]);return e.getNearestSelectionRange(n)||new qs(n)}_validateSelectionRange(t){return Cc(t.start)&&Cc(t.end)}_callPostFixers(t){let e=!1;do{for(const n of this._postFixers)if(e=n(t))break}while(e)}}function Cc(t){const e=t.textNode;if(e){const n=e.data,o=t.offset-e.startOffset;return!vc(n,o)&&!yc(n,o)}return!0}B(Ac,R);class Tc{constructor(){this._markers=new Map}[Symbol.iterator](){return this._markers.values()}has(t){return this._markers.has(t)}get(t){return this._markers.get(t)||null}_set(t,e,n=!1,o=!1){const i=t instanceof Mc?t.name:t,r=this._markers.get(i);if(r){const t=r.getRange();let s=!1;return t.isEqual(e)||(r._attachLiveRange(Xs.createFromRange(e)),s=!0),n!=r.managedUsingOperations&&(r._managedUsingOperations=n,s=!0),"boolean"==typeof o&&o!=r.affectsData&&(r._affectsData=o,s=!0),s&&this.fire("update:"+i,r,t,e),r}const s=Xs.createFromRange(e),a=new Mc(i,s,n,o);return this._markers.set(i,a),this.fire("update:"+i,a,null,e),a}_remove(t){const e=t instanceof Mc?t.name:t,n=this._markers.get(e);return!!n&&(this._markers.delete(e),this.fire("update:"+e,n,n.getRange(),null),this._destroyMarker(n),!0)}*getMarkersAtPosition(t){for(const e of this)e.getRange().containsPosition(t)&&(yield e)}*getMarkersIntersectingRange(t){for(const e of this)null!==e.getRange().getIntersection(t)&&(yield e)}destroy(){for(const t of this._markers.values())this._destroyMarker(t);this._markers=null,this.stopListening()}*getMarkersGroup(t){for(const e of this._markers.values())e.name.startsWith(t+":")&&(yield e)}_destroyMarker(t){t.stopListening(),t._detachLiveRange()}}B(Tc,R);class Mc{constructor(t,e,n,o){this.name=t,this._liveRange=this._attachLiveRange(e),this._managedUsingOperations=n,this._affectsData=o}get managedUsingOperations(){if(!this._liveRange)throw new M.b("marker-destroyed: Cannot use a destroyed marker instance.");return this._managedUsingOperations}get affectsData(){if(!this._liveRange)throw new M.b("marker-destroyed: Cannot use a destroyed marker instance.");return this._affectsData}getStart(){if(!this._liveRange)throw new M.b("marker-destroyed: Cannot use a destroyed marker instance.");return Hs.createFromPosition(this._liveRange.start)}getEnd(){if(!this._liveRange)throw new M.b("marker-destroyed: Cannot use a destroyed marker instance.");return Hs.createFromPosition(this._liveRange.end)}getRange(){if(!this._liveRange)throw new M.b("marker-destroyed: Cannot use a destroyed marker instance.");return qs.createFromRange(this._liveRange)}_attachLiveRange(t){return this._liveRange&&this._detachLiveRange(),t.delegate("change:range").to(this),t.delegate("change:content").to(this),this._liveRange=t,t}_detachLiveRange(){this._liveRange.stopDelegating("change:range",this),this._liveRange.stopDelegating("change:content",this),this._liveRange.detach(),this._liveRange=null}}B(Mc,R);class Pc extends Hs{constructor(t,e,n="toNone"){if(super(t,e,n),!this.root.is("rootElement"))throw new M.b("model-liveposition-root-not-rootelement: LivePosition's root has to be an instance of RootElement.");(function(){this.listenTo(this.root.document.model,"applyOperation",(t,e)=>{const n=e[0];n.isDocumentOperation&&function(t){const e=this.getTransformedByOperation(t);if(!this.isEqual(e)){const t=Hs.createFromPosition(this);this.path=e.path,this.root=e.root,this.fire("change",t)}}.call(this,n)},{priority:"low"})}).call(this)}detach(){this.stopListening()}}B(Pc,R);class Sc{constructor(t,e,n){this.model=t,this.writer=e,this.position=n,this.canMergeWith=new Set([this.position.parent]),this.schema=t.schema,this._filterAttributesOf=[]}handleNodes(t,e){t=Array.from(t);for(let n=0;n<t.length;n++){const o=t[n];this._handleNode(o,{isFirst:0===n&&e.isFirst,isLast:n===t.length-1&&e.isLast})}this.schema.removeDisallowedAttributes(this._filterAttributesOf,this.writer),this._filterAttributesOf=[]}getSelectionRange(){return this.nodeToSelect?qs.createOn(this.nodeToSelect):this.model.schema.getNearestSelectionRange(this.position)}_handleNode(t,e){if(this.schema.isObject(t))return void this._handleObject(t,e);this._checkAndSplitToAllowedPosition(t,e)?(this._insert(t),this._mergeSiblingsOf(t,e)):this._handleDisallowedNode(t,e)}_handleObject(t,e){this._checkAndSplitToAllowedPosition(t)?this._insert(t):this._tryAutoparagraphing(t,e)}_handleDisallowedNode(t,e){t.is("element")?this.handleNodes(t.getChildren(),e):this._tryAutoparagraphing(t,e)}_insert(t){if(!this.schema.checkChild(this.position,t))return void fs.a.error("insertcontent-wrong-position: The node cannot be inserted on the given position.",{node:t,position:this.position});const e=Pc.createFromPosition(this.position);e.stickiness="toNext",this.writer.insert(t,this.position),this.position=Hs.createFromPosition(e),e.detach(),this.schema.isObject(t)&&!this.schema.checkChild(this.position,"$text")?this.nodeToSelect=t:this.nodeToSelect=null,this._filterAttributesOf.push(t)}_mergeSiblingsOf(t,e){if(!(t instanceof Fs))return;const n=this._canMergeLeft(t,e),o=this._canMergeRight(t,e),i=Pc.createBefore(t);i.stickiness="toNext";const r=Pc.createAfter(t);if(r.stickiness="toNext",n){const t=Pc.createFromPosition(this.position);t.stickiness="toNext",this.writer.merge(i),this.position=Hs.createFromPosition(t),t.detach()}if(o){this.position.isEqual(r)||fs.a.error("insertcontent-wrong-position-on-merge: The insertion position should equal the merge position"),this.position=Hs.createAt(r.nodeBefore,"end");const t=new Pc(this.position.root,this.position.path,"toPrevious");this.writer.merge(r),this.position=Hs.createFromPosition(t),t.detach()}(n||o)&&this._filterAttributesOf.push(this.position.parent),i.detach(),r.detach()}_canMergeLeft(t,e){const n=t.previousSibling;return e.isFirst&&n instanceof Fs&&this.canMergeWith.has(n)&&this.model.schema.checkMerge(n,t)}_canMergeRight(t,e){const n=t.nextSibling;return e.isLast&&n instanceof Fs&&this.canMergeWith.has(n)&&this.model.schema.checkMerge(t,n)}_tryAutoparagraphing(t,e){const n=this.writer.createElement("paragraph");this._getAllowedIn(n,this.position.parent)&&this.schema.checkChild(n,t)&&(n._appendChild(t),this._handleNode(n,e))}_checkAndSplitToAllowedPosition(t){const e=this._getAllowedIn(t,this.position.parent);if(!e)return!1;for(;e!=this.position.parent;){if(this.schema.isLimit(this.position.parent))return!1;if(this.position.isAtStart){const t=this.position.parent;this.position=Hs.createBefore(t),t.isEmpty&&this.writer.remove(t)}else if(this.position.isAtEnd)this.position=Hs.createAfter(this.position.parent);else{const t=Hs.createAfter(this.position.parent);this.writer.split(this.position),this.position=t,this.canMergeWith.add(this.position.nodeAfter)}}return!0}_getAllowedIn(t,e){return this.schema.checkChild(e,t)?e:e.parent?this._getAllowedIn(t,e.parent):null}}function Ec(t,e,n={}){if(e.isCollapsed)return;const o=t.schema;t.change(t=>{if(!n.doNotResetEntireContent&&function(t,e){const n=t.getLimitElement(e);if(!e.containsEntireContent(n))return!1;const o=e.getFirstRange();if(o.start.parent==o.end.parent)return!1;return t.checkChild(n,"paragraph")}(o,e))return void function(t,e){const n=t.model.schema.getLimitElement(e);t.remove(qs.createIn(n)),Ic(t,Hs.createAt(n),e)}(t,e);const i=e.getFirstRange(),r=i.start,s=Pc.createFromPosition(i.end);s.stickiness="toNext",i.start.isTouching(i.end)||t.remove(i),n.leaveUnmerged||(!function t(e,n,o){const i=n.parent;const r=o.parent;if(i==r)return;if(!i.parent||!r.parent)return;if(!function(t,e,n){const o=new qs(t,e);for(const t of o.getWalker())if(n.isLimit(t.item))return!1;return!0}(n,o,e.model.schema))return;n=Hs.createAfter(i);o=Hs.createBefore(r);o.isEqual(n)||e.insert(r,n);e.merge(n);for(;o.parent.isEmpty;){const t=o.parent;o=Hs.createBefore(t),e.remove(t)}t(e,n,o)}(t,r,s),o.removeDisallowedAttributes(r.parent.getChildren(),t)),e instanceof ea?t.setSelection(r):e.setTo(r),function(t,e){const n=t.checkChild(e,"$text"),o=t.checkChild(e,"paragraph");return!n&&o}(o,r)&&Ic(t,r,e),s.detach()})}function Ic(t,e,n){const o=t.createElement("paragraph");t.insert(o,e),n instanceof ea?t.setSelection(o,0):n.setTo(o,0)}const Nc=' ,.?!:;"-()';function Oc(t,e,n={}){const o=t.schema,i="backward"!=n.direction,r=n.unit?n.unit:"character",s=e.focus,a=new zs({boundaries:function(t,e){const n=t.root,o=Hs.createAt(n,e?"end":0);return e?new qs(t,o):new qs(o,t)}(s,i),singleCharacters:!0,direction:i?"forward":"backward"}),c={walker:a,schema:o,isForward:i,unit:r};let l;for(;l=a.next();){if(l.done)return;const n=Rc(c,l.value);if(n)return void(e instanceof ea?t.change(t=>{t.setSelectionFocus(n)}):e.setFocus(n))}}function Rc(t,e){if("text"==e.type)return"word"===t.unit?function(t,e){let n=t.position.textNode;if(n){let o=t.position.offset-n.startOffset;for(;!Dc(n.data,o,e)&&!Lc(n,o,e);){t.next();const i=e?t.position.nodeAfter:t.position.nodeBefore;if(i&&i.is("text")){const o=i.data.charAt(e?0:i.data.length-1);Nc.includes(o)||(t.next(),n=t.position.textNode)}o=t.position.offset-n.startOffset}}return t.position}(t.walker,t.isForward):function(t,e){const n=t.position.textNode;if(n){const o=n.data;let i=t.position.offset-n.startOffset;for(;vc(o,i)||"character"==e&&yc(o,i);)t.next(),i=t.position.offset-n.startOffset}return t.position}(t.walker,t.unit,t.isForward);if(e.type==(t.isForward?"elementStart":"elementEnd")){if(t.schema.isObject(e.item))return Hs.createAt(e.item,t.isForward?"after":"before");if(t.schema.checkChild(e.nextPosition,"$text"))return e.nextPosition}else{if(t.schema.isLimit(e.item))return void t.walker.skip(()=>!0);if(t.schema.checkChild(e.nextPosition,"$text"))return e.nextPosition}}function Dc(t,e,n){const o=e+(n?0:-1);return Nc.includes(t.charAt(o))}function Lc(t,e,n){return e===(n?t.endOffset:0)}function jc(t,e){const n=[];Array.from(t.getItems({direction:"backward"})).map(t=>qs.createOn(t)).filter(e=>{return(e.start.isAfter(t.start)||e.start.isEqual(t.start))&&(e.end.isBefore(t.end)||e.end.isEqual(t.end))}).forEach(t=>{n.push(t.start.parent),e.remove(t)}),n.forEach(t=>{let n=t;for(;n.parent&&n.isEmpty;){const t=qs.createOn(n);n=n.parent,e.remove(t)}})}function Vc(t){t.document.registerPostFixer(e=>(function(t,e){const n=e.document.selection,o=e.schema,i=[];let r=!1;for(const t of n.getRanges()){const e=Fc(t,o);e?(i.push(e),r=!0):i.push(t)}if(r){let e=i;if(i.length>1){const t=i[0].start,n=i[i.length-1].end;e=[new qs(t,n)]}t.setSelection(e,{backward:n.isBackward})}})(e,t))}function Fc(t,e){return t.isCollapsed?function(t,e){const n=t.start,o=e.getNearestSelectionRange(n);if(!o)return null;const i=o.start;if(n.isEqual(i))return null;if(i.nodeAfter&&e.isLimit(i.nodeAfter))return new qs(i,Hs.createAfter(i.nodeAfter));return new qs(i)}(t,e):function(t,e){const n=t.start,o=t.end,i=e.checkChild(n,"$text"),r=e.checkChild(o,"$text"),s=e.getLimitElement(n),a=e.getLimitElement(o);if(s===a){if(i&&r)return null;if(function(t,e,n){const o=t.nodeAfter&&!n.isLimit(t.nodeAfter)||n.checkChild(t,"$text"),i=e.nodeBefore&&!n.isLimit(e.nodeBefore)||n.checkChild(e,"$text");return o&&i}(n,o,e)){const t=e.getNearestSelectionRange(n,"forward"),i=e.getNearestSelectionRange(o,"backward");return new qs(t?t.start:n,i?i.start:o)}}const c=s&&!s.is("rootElement"),l=a&&!a.is("rootElement");if(c||l){const t=c?zc(Hs.createAt(s),e,"start"):n,i=l?zc(Hs.createAt(a),e,"end"):o;return new qs(t,i)}return null}(t,e)}function zc(t,e,n){let o=t.parent,i=o;for(;e.isLimit(i)&&i.parent;)o=i,i=i.parent;return"start"===n?Hs.createBefore(o):Hs.createAfter(o)}class Bc{constructor(){this.markers=new Tc,this.document=new Ac(this),this.schema=new ka,this._pendingChanges=[],this._currentWriter=null,["insertContent","deleteContent","modifySelection","getSelectedContent","applyOperation"].forEach(t=>this.decorate(t)),this.on("applyOperation",(t,e)=>{e[0]._validate()},{priority:"highest"}),this.schema.register("$root",{isLimit:!0}),this.schema.register("$block",{allowIn:"$root",isBlock:!0}),this.schema.register("$text",{allowIn:"$block"}),this.schema.register("$clipboardHolder",{allowContentOf:"$root",isLimit:!0}),this.schema.extend("$text",{allowIn:"$clipboardHolder"}),this.schema.register("$marker",{allowIn:["$root","$block"]}),Vc(this)}change(t){return 0===this._pendingChanges.length?(this._pendingChanges.push({batch:new Ha,callback:t}),this._runPendingChanges()[0]):t(this._currentWriter)}enqueueChange(t,e){"string"==typeof t?t=new Ha(t):"function"==typeof t&&(e=t,t=new Ha),this._pendingChanges.push({batch:t,callback:e}),1==this._pendingChanges.length&&this._runPendingChanges()}applyOperation(t){t._execute()}insertContent(t,e){!function(t,e,n){t.change(o=>{let i;(i=n?n instanceof Js||n instanceof ea?n:new Js(n):t.document.selection).isCollapsed||t.deleteContent(i);const r=new Sc(t,o,i.anchor);let s;s=e.is("documentFragment")?e.getChildren():[e],r.handleNodes(s,{isFirst:!0,isLast:!0});const a=r.getSelectionRange();a?i instanceof ea?o.setSelection(a):i.setTo(a):fs.a.warn("insertcontent-no-range: Cannot determine a proper selection range after insertion.")})}(this,t,e)}deleteContent(t,e){Ec(this,t,e)}modifySelection(t,e){Oc(this,t,e)}getSelectedContent(t){return function(t,e){return t.change(t=>{const n=t.createDocumentFragment(),o=e.getFirstRange();if(!o||o.isCollapsed)return n;const i=o.start.root,r=o.start.getCommonPath(o.end),s=i.getNodeByPath(r);let a;const c=(a=o.start.parent==o.end.parent?o:qs.createFromParentsAndOffsets(s,o.start.path[r.length],s,o.end.path[r.length]+1)).end.offset-a.start.offset;for(const e of a.getItems({shallow:!0}))e.is("textProxy")?t.appendText(e.data,e.getAttributes(),n):t.append(e._clone(!0),n);if(a!=o){const e=o._getTransformedByMove(a.start,Hs.createAt(n,0),c)[0],i=new qs(Hs.createAt(n),e.start);jc(new qs(e.end,Hs.createAt(n,"end")),t),jc(i,t)}return n})}(this,t)}hasContent(t){if(t instanceof Fs&&(t=qs.createIn(t)),t.isCollapsed)return!1;for(const e of t.getItems())if(e.is("textProxy")||this.schema.isObject(e))return!0;return!1}destroy(){this.document.destroy(),this.stopListening()}_runPendingChanges(){const t=[];for(this.fire("_beforeChanges");this._pendingChanges.length;){const e=this._pendingChanges[0].batch;this._currentWriter=new dc(this,e);const n=this._pendingChanges[0].callback(this._currentWriter);t.push(n),this.fire("_change",this._currentWriter),this._pendingChanges.shift(),this._currentWriter=null}return this.fire("_afterChanges"),t}}B(Bc,jo);class Uc{constructor(){this._listener=Object.create(rr)}listenTo(t){this._listener.listenTo(t,"keydown",(t,e)=>{this._listener.fire("_keydown:"+fi(e),e)})}set(t,e,n={}){const o=mi(t),i=n.priority;this._listener.listenTo(this._listener,"_keydown:"+o,(t,n)=>{e(n,()=>{n.preventDefault(),n.stopPropagation(),t.stop()}),t.return=!0},{priority:i})}press(t){return!!this._listener.fire("_keydown:"+fi(t),t)}destroy(){this._listener.stopListening()}}class Hc extends Uc{constructor(t){super(),this.editor=t}set(t,e,n={}){if("string"==typeof e){const t=e;e=((e,n)=>{this.editor.execute(t),n()})}super.set(t,e,n)}}n(41);class qc{constructor(t){const e=this.constructor.builtinPlugins;this.config=new T(t,this.constructor.defaultConfig),this.config.define("plugins",e),this.plugins=new ma(this,e),this.commands=new pa,this.locale=new ba(this.config.get("language")),this.t=this.locale.t,this.set("state","initializing"),this.once("ready",()=>this.state="ready",{priority:"high"}),this.once("destroy",()=>this.state="destroyed",{priority:"high"}),this.set("isReadOnly",!1),this.model=new Bc,this.data=new Fa(this.model),this.editing=new fa(this.model),this.editing.view.document.bind("isReadOnly").to(this),this.conversion=new za,this.conversion.register("downcast",[this.editing.downcastDispatcher,this.data.downcastDispatcher]),this.conversion.register("editingDowncast",[this.editing.downcastDispatcher]),this.conversion.register("dataDowncast",[this.data.downcastDispatcher]),this.conversion.register("upcast",[this.data.upcastDispatcher]),this.keystrokes=new Hc(this),this.keystrokes.listenTo(this.editing.view.document)}initPlugins(){const t=this,e=this.config;return function(){const n=e.get("plugins")||[],o=e.get("removePlugins")||[];return t.plugins.load(n,o)}().then(t=>n(t,"init").then(()=>n(t,"afterInit"))).then(()=>this.fire("pluginsReady"));function n(t,e){return t.reduce((t,n)=>n[e]?t.then(n[e].bind(n)):t,Promise.resolve())}}destroy(){let t=Promise.resolve();return"initializing"==this.state&&(t=new Promise(t=>this.once("ready",t))),t.then(()=>{this.fire("destroy"),this.stopListening(),this.commands.destroy()}).then(()=>this.plugins.destroy()).then(()=>{this.model.destroy(),this.data.destroy(),this.editing.destroy(),this.keystrokes.destroy()})}execute(...t){this.commands.execute(...t)}static create(t){return new Promise(e=>{const n=new this(t);e(n.initPlugins().then(()=>{n.fire("dataReady"),n.fire("ready")}).then(()=>n))})}}B(qc,jo);var Wc={setData(t){this.data.set(t)},getData(){return this.data.get()}};var Yc={updateSourceElement(){if(!this.sourceElement)throw new M.b("editor-missing-sourceelement: Cannot update the source element of a detached editor.");!function(t,e){t instanceof HTMLTextAreaElement&&(t.value=e),t.innerHTML=e}(this.sourceElement,this.data.get())}};class Gc{getHtml(t){const e=document.implementation.createHTMLDocument("").createElement("div");return e.appendChild(t),e.innerHTML}}class $c{constructor(){this._domParser=new DOMParser,this._domConverter=new er({blockFiller:Ni}),this._htmlWriter=new Gc}toData(t){const e=this._domConverter.viewToDom(t,document);return this._htmlWriter.getHtml(e)}toView(t){const e=this._toDom(t);return this._domConverter.domToView(e)}_toDom(t){const e=this._domParser.parseFromString(t,"text/html"),n=e.createDocumentFragment(),o=e.body.childNodes;for(;o.length>0;)n.appendChild(o[0]);return n}}class Qc{constructor(t){this.editor=t,this._components=new Map}*names(){for(const t of this._components.values())yield t.originalName}add(t,e){if(this.has(t))throw new M.b("componentfactory-item-exists: The item already exists in the component factory.",{name:t});this._components.set(Jc(t),{callback:e,originalName:t})}create(t){if(!this.has(t))throw new M.b("componentfactory-item-missing: The required component is not registered in the factory.",{name:t});return this._components.get(Jc(t)).callback(this.editor.locale)}has(t){return this._components.has(Jc(t))}}function Jc(t){return String(t).toLowerCase()}class Kc{constructor(){this.set("isFocused",!1),this.focusedElement=null,this._elements=new Set,this._nextEventLoopTimeout=null}add(t){if(this._elements.has(t))throw new M.b("focusTracker-add-element-already-exist");this.listenTo(t,"focus",()=>this._focus(t),{useCapture:!0}),this.listenTo(t,"blur",()=>this._blur(),{useCapture:!0}),this._elements.add(t)}remove(t){t===this.focusedElement&&this._blur(t),this._elements.has(t)&&(this.stopListening(t),this._elements.delete(t))}_focus(t){clearTimeout(this._nextEventLoopTimeout),this.focusedElement=t,this.isFocused=!0}_blur(){clearTimeout(this._nextEventLoopTimeout),this._nextEventLoopTimeout=setTimeout(()=>{this.focusedElement=null,this.isFocused=!1},0)}}B(Kc,rr),B(Kc,jo);class Zc{constructor(t,e){this.editor=t,this.view=e,this.componentFactory=new Qc(t),this.focusTracker=new Kc,this.listenTo(t.editing.view.document,"layoutChanged",()=>this.update())}update(){this.fire("update")}destroy(){this.stopListening(),this.view.destroy()}}B(Zc,R);class Xc extends Zc{constructor(t,e){super(t,e),this._toolbarConfig=function(t){return Array.isArray(t)?{items:t}:t?Object.assign({items:[]},t):{items:[]}}(t.config.get("toolbar"))}init(){const t=this.editor,e=this.view;e.render(),e.stickyPanel.bind("isActive").to(this.focusTracker,"isFocused"),e.stickyPanel.limiterElement=e.element,this._toolbarConfig.viewportTopOffset&&(e.stickyPanel.viewportTopOffset=this._toolbarConfig.viewportTopOffset);const n=t.editing.view.document.getRoot();e.editable.bind("isReadOnly").to(n),e.editable.bind("isFocused").to(t.editing.view.document),e.editable.name=n.rootName,this.focusTracker.add(this.view.editableElement),this.view.toolbar.fillFromConfig(this._toolbarConfig.items,this.componentFactory),function({origin:t,originKeystrokeHandler:e,originFocusTracker:n,toolbar:o,beforeFocus:i,afterBlur:r}){n.add(o.element),e.set("Alt+F10",(t,e)=>{n.isFocused&&!o.focusTracker.isFocused&&(i&&i(),o.focus(),e())}),o.keystrokes.set("Esc",(e,n)=>{o.focusTracker.isFocused&&(t.focus(),r&&r(),n())})}({origin:t.editing.view,originFocusTracker:this.focusTracker,originKeystrokeHandler:t.keystrokes,toolbar:this.view.toolbar})}}class tl extends ti{constructor(t){super({idProperty:"viewUid"}),this.on("add",(t,e,n)=>{e.isRendered||e.render(),e.element&&this._parentElement&&this._parentElement.insertBefore(e.element,this._parentElement.children[n])}),this.on("remove",(t,e)=>{e.element&&this._parentElement&&e.element.remove()}),this.locale=t,this._parentElement=null}destroy(){this.map(t=>t.destroy())}setParent(t){this._parentElement=t}delegate(...t){if(!t.length||!function(t){return t.every(t=>"string"==typeof t)}(t))throw new M.b("ui-viewcollection-delegate-wrong-events: All event names must be strings.");return{to:e=>{for(const n of this)for(const o of t)n.delegate(o).to(e);this.on("add",(n,o)=>{for(const n of t)o.delegate(n).to(e)}),this.on("remove",(n,o)=>{for(const n of t)o.stopDelegating(n,e)})}}}}B(ti,jo);var el=1,nl=4;var ol=function(t,e){return io(t,el|nl,e="function"==typeof e?e:void 0)};const il="http://www.w3.org/1999/xhtml";class rl{constructor(t){Object.assign(this,ml(fl(t))),this._isRendered=!1,this._revertData=null}render(){const t=this._renderNode({intoFragment:!0});return this._isRendered=!0,t}apply(t){return this._revertData={children:[],bindings:[],attributes:{}},this._renderNode({node:t,isApplying:!0,revertData:this._revertData}),t}revert(t){if(!this._revertData)throw new M.b("ui-template-revert-not-applied: Attempting to revert a template which has not been applied yet.");this._revertTemplateFromNode(t,this._revertData)}*getViews(){yield*function*t(e){if(e.children)for(const n of e.children)_l(n)?yield n:kl(n)&&(yield*t(n))}(this)}static bind(t,e){return{to:(n,o)=>new al({eventNameOrFunction:n,attribute:n,observable:t,emitter:e,callback:o}),if:(n,o,i)=>new cl({observable:t,emitter:e,attribute:n,valueIfTrue:o,callback:i})}}static extend(t,e){t._isRendered&&fs.a.warn("template-extend-render: Attempting to extend a template which has already been rendered."),function t(e,n){n.attributes&&(e.attributes||(e.attributes={}),bl(e.attributes,n.attributes));n.eventListeners&&(e.eventListeners||(e.eventListeners={}),bl(e.eventListeners,n.eventListeners));n.text&&e.text.push(...n.text);if(n.children&&n.children.length){if(e.children.length!=n.children.length)throw new M.b("ui-template-extend-children-mismatch: The number of children in extended definition does not match.");let o=0;for(const i of n.children)t(e.children[o++],i)}}(t,ml(fl(e)))}_renderNode(t){let e;if(e=t.node?this.tag&&this.text:this.tag?this.text:!this.text)throw new M.b('ui-template-wrong-syntax: Node definition must have either "tag" or "text" when rendering a new Node.');return this.text?this._renderText(t):this._renderElement(t)}_renderElement(t){let e=t.node;return e||(e=t.node=document.createElementNS(this.ns||il,this.tag)),this._renderAttributes(t),this._renderElementChildren(t),this._setUpListeners(t),e}_renderText(t){let e=t.node;return e?t.revertData.text=e.textContent:e=t.node=document.createTextNode(""),ll(this.text)?this._bindToObservable({schema:this.text,updater:function(t){return{set(e){t.textContent=e},remove(){t.textContent=""}}}(e),data:t}):e.textContent=this.text.join(""),e}_renderAttributes(t){let e,n,o,i;if(!this.attributes)return;const r=t.node,s=t.revertData;for(e in this.attributes)if(o=r.getAttribute(e),n=this.attributes[e],s&&(s.attributes[e]=o),i=ot(n[0])&&n[0].ns?n[0].ns:null,ll(n)){const a=i?n[0].value:n;s&&yl(e)&&a.unshift(o),this._bindToObservable({schema:a,updater:ul(r,e,i),data:t})}else"style"==e&&"string"!=typeof n[0]?this._renderStyleAttribute(n[0],t):(s&&o&&yl(e)&&n.unshift(o),wl(n=n.map(t=>t&&t.value||t).reduce((t,e)=>t.concat(e),[]).reduce(gl,""))||r.setAttributeNS(i,e,n))}_renderStyleAttribute(t,e){const n=e.node;for(const o in t){const i=t[o];ll(i)?this._bindToObservable({schema:[i],updater:hl(n,o),data:e}):n.style[o]=i}}_renderElementChildren(t){const e=t.node,n=t.intoFragment?document.createDocumentFragment():e,o=t.isApplying;let i=0;for(const r of this.children)if(vl(r)){if(!o){r.setParent(e);for(const t of r)n.appendChild(t.element)}}else if(_l(r))o||(r.isRendered||r.render(),n.appendChild(r.element));else if(qi(r))n.appendChild(r);else if(o){const e={children:[],bindings:[],attributes:{}};t.revertData.children.push(e),r._renderNode({node:n.childNodes[i++],isApplying:!0,revertData:e})}else n.appendChild(r.render());t.intoFragment&&e.appendChild(n)}_setUpListeners(t){if(this.eventListeners)for(const e in this.eventListeners){const n=this.eventListeners[e].map(n=>{const[o,i]=e.split("@");return n.activateDomEventListener(o,i,t)});t.revertData&&t.revertData.bindings.push(n)}}_bindToObservable({schema:t,updater:e,data:n}){const o=n.revertData;dl(t,e,n);const i=t.filter(t=>!wl(t)).filter(t=>t.observable).map(o=>o.activateAttributeListener(t,e,n));o&&o.bindings.push(i)}_revertTemplateFromNode(t,e){for(const t of e.bindings)for(const e of t)e();if(e.text)t.textContent=e.text;else{for(const n in e.attributes){const o=e.attributes[n];null===o?t.removeAttribute(n):t.setAttribute(n,o)}for(let n=0;n<e.children.length;++n)this._revertTemplateFromNode(t.childNodes[n],e.children[n])}}}B(rl,R);class sl{constructor(t){Object.assign(this,t)}getValue(t){const e=this.observable[this.attribute];return this.callback?this.callback(e,t):e}activateAttributeListener(t,e,n){const o=()=>dl(t,e,n);return this.emitter.listenTo(this.observable,"change:"+this.attribute,o),()=>{this.emitter.stopListening(this.observable,"change:"+this.attribute,o)}}}class al extends sl{activateDomEventListener(t,e,n){const o=(t,n)=>{e&&!n.target.matches(e)||("function"==typeof this.eventNameOrFunction?this.eventNameOrFunction(n):this.observable.fire(this.eventNameOrFunction,n))};return this.emitter.listenTo(n.node,t,o),()=>{this.emitter.stopListening(n.node,t,o)}}}class cl extends sl{getValue(t){return!wl(super.getValue(t))&&(this.valueIfTrue||!0)}}function ll(t){return!!t&&(t.value&&(t=t.value),Array.isArray(t)?t.some(ll):t instanceof sl)}function dl(t,e,{node:n}){let o=function(t,e){return t.map(t=>t instanceof sl?t.getValue(e):t)}(t,n);wl(o=1==t.length&&t[0]instanceof cl?o[0]:o.reduce(gl,""))?e.remove():e.set(o)}function ul(t,e,n){return{set(o){t.setAttributeNS(n,e,o)},remove(){t.removeAttributeNS(n,e)}}}function hl(t,e){return{set(n){t.style[e]=n},remove(){t.style[e]=null}}}function fl(t){return ol(t,t=>{if(t&&(t instanceof sl||kl(t)||_l(t)||vl(t)))return t})}function ml(t){if("string"==typeof t?t=function(t){return{text:[t]}}(t):t.text&&function(t){Array.isArray(t.text)||(t.text=[t.text])}(t),t.on&&(t.eventListeners=function(t){for(const e in t)pl(t,e);return t}(t.on),delete t.on),!t.text){t.attributes&&function(t){for(const e in t)t[e].value&&(t[e].value=[].concat(t[e].value)),pl(t,e)}(t.attributes);const e=[];if(t.children)if(vl(t.children))e.push(t.children);else for(const n of t.children)kl(n)||_l(n)||qi(n)?e.push(n):e.push(new rl(n));t.children=e}return t}function pl(t,e){Array.isArray(t[e])||(t[e]=[t[e]])}function gl(t,e){return wl(e)?t:wl(t)?e:`${t} ${e}`}function bl(t,e){for(const n in e)t[n]?t[n].push(...e[n]):t[n]=e[n]}function wl(t){return!t&&0!==t}function _l(t){return t instanceof xl}function kl(t){return t instanceof rl}function vl(t){return t instanceof tl}function yl(t){return"class"==t||"style"==t}n(42);class xl{constructor(t){this.element=null,this.isRendered=!1,this.locale=t,this.t=t&&t.t,this._viewCollections=new ti,this._unboundChildren=this.createCollection(),this._viewCollections.on("add",(e,n)=>{n.locale=t}),this.decorate("render")}get bindTemplate(){return this._bindTemplate?this._bindTemplate:this._bindTemplate=rl.bind(this,this)}createCollection(){const t=new tl;return this._viewCollections.add(t),t}registerChild(t){ho(t)||(t=[t]);for(const e of t)this._unboundChildren.add(e)}deregisterChild(t){ho(t)||(t=[t]);for(const e of t)this._unboundChildren.remove(e)}setTemplate(t){this.template=new rl(t)}extendTemplate(t){rl.extend(this.template,t)}render(){if(this.isRendered)throw new M.b("ui-view-render-already-rendered: This View has already been rendered.");this.template&&(this.element=this.template.render(),this.registerChild(this.template.getViews())),this.isRendered=!0}destroy(){this.stopListening(),this._viewCollections.map(t=>t.destroy())}}B(xl,rr),B(xl,jo);n(45);class Al extends xl{constructor(t){super(t),this.body=this.createCollection()}render(){super.render(),this._renderBodyCollection()}destroy(){return this._bodyCollectionContainer.remove(),super.destroy()}_renderBodyCollection(){const t=this._bodyCollectionContainer=new rl({tag:"div",attributes:{class:["ck","ck-reset_all","ck-body","ck-rounded-corners"]},children:this.body}).render();document.body.appendChild(t)}}n(47);class Cl extends xl{constructor(t){super(t),this.set("text"),this.set("for");const e=this.bindTemplate;this.setTemplate({tag:"label",attributes:{class:["ck","ck-label"],for:e.to("for")},children:[{text:e.to("text")}]})}}class Tl extends Al{constructor(t){super(t);const e=E();this.top=this.createCollection(),this.main=this.createCollection(),this._voiceLabelView=this._createVoiceLabel(e),this.setTemplate({tag:"div",attributes:{class:["ck","ck-reset","ck-editor","ck-rounded-corners"],role:"application",dir:"ltr",lang:t.language,"aria-labelledby":`ck-editor__aria-label_${e}`},children:[this._voiceLabelView,{tag:"div",attributes:{class:["ck","ck-editor__top","ck-reset_all"],role:"presentation"},children:this.top},{tag:"div",attributes:{class:["ck","ck-editor__main"],role:"presentation"},children:this.main}]})}_createVoiceLabel(t){const e=this.t,n=new Cl;return n.text=e("av"),n.extendTemplate({attributes:{id:`ck-editor__aria-label_${t}`,class:"ck-voice-label"}}),n}}class Ml extends xl{constructor(t,e){super(t);const n=this.bindTemplate;e&&(this.element=this.editableElement=e),this.setTemplate({tag:"div",attributes:{class:["ck","ck-content","ck-editor__editable","ck-rounded-corners",n.to("isFocused",t=>t?"ck-focused":"ck-blurred")],contenteditable:n.to("isReadOnly",t=>!t)}}),this.set("isReadOnly",!1),this.set("isFocused",!1),this.externalElement=e}render(){super.render(),this.externalElement?this.template.apply(this.element=this.externalElement):this.editableElement=this.element}destroy(){this.externalElement&&this.template.revert(this.externalElement),super.destroy()}}class Pl extends Ml{constructor(t,e){super(t,e);const n=this.bindTemplate,o=this.t;this.set("name",null);this.extendTemplate({attributes:{role:"textbox","aria-label":n.to("name",t=>o("au",[t])),class:"ck-editor__editable_inline"}})}}function Sl(t){return e=>e+t}n(49);const El=Sl("px");class Il extends xl{constructor(t){super(t);const e=this.bindTemplate;this.set("isActive",!1),this.set("isSticky",!1),this.set("limiterElement",null),this.set("limiterBottomOffset",50),this.set("viewportTopOffset",0),this.set("_marginLeft",null),this.set("_isStickyToTheLimiter",!1),this.set("_hasViewportTopOffset",!1),this.content=this.createCollection(),this._contentPanelPlaceholder=new rl({tag:"div",attributes:{class:["ck","ck-sticky-panel__placeholder"],style:{display:e.to("isSticky",t=>t?"block":"none"),height:e.to("isSticky",t=>t?El(this._panelRect.height):null)}}}).render(),this._contentPanel=new rl({tag:"div",attributes:{class:["ck","ck-sticky-panel__content",e.if("isSticky","ck-sticky-panel__content_sticky"),e.if("_isStickyToTheLimiter","ck-sticky-panel__content_sticky_bottom-limit")],style:{width:e.to("isSticky",t=>t?El(this._contentPanelPlaceholder.getBoundingClientRect().width):null),top:e.to("_hasViewportTopOffset",t=>t?El(this.viewportTopOffset):null),bottom:e.to("_isStickyToTheLimiter",t=>t?El(this.limiterBottomOffset):null),marginLeft:e.to("_marginLeft")}},children:this.content}).render(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-sticky-panel"]},children:[this._contentPanelPlaceholder,this._contentPanel]})}render(){super.render(),this._checkIfShouldBeSticky(),this.listenTo(Ki.window,"scroll",()=>{this._checkIfShouldBeSticky()}),this.listenTo(this,"change:isActive",()=>{this._checkIfShouldBeSticky()})}_checkIfShouldBeSticky(){const t=this._panelRect=this._contentPanel.getBoundingClientRect();let e;this.limiterElement?(e=this._limiterRect=this.limiterElement.getBoundingClientRect(),this.isSticky=this.isActive&&e.top<this.viewportTopOffset&&this._panelRect.height+this.limiterBottomOffset<e.height):this.isSticky=!1,this.isSticky?(this._isStickyToTheLimiter=e.bottom<t.height+this.limiterBottomOffset+this.viewportTopOffset,this._hasViewportTopOffset=!this._isStickyToTheLimiter&&!!this.viewportTopOffset,this._marginLeft=this._isStickyToTheLimiter?null:El(-Ki.window.scrollX)):(this._isStickyToTheLimiter=!1,this._hasViewportTopOffset=!1,this._marginLeft=null)}}class Nl{constructor(t){if(Object.assign(this,t),t.actions&&t.keystrokeHandler)for(const e in t.actions){let n=t.actions[e];"string"==typeof n&&(n=[n]);for(const o of n)t.keystrokeHandler.set(o,(t,n)=>{this[e](),n()})}}get first(){return this.focusables.find(Ol)||null}get last(){return this.focusables.filter(Ol).slice(-1)[0]||null}get next(){return this._getFocusableItem(1)}get previous(){return this._getFocusableItem(-1)}get current(){let t=null;return null===this.focusTracker.focusedElement?null:(this.focusables.find((e,n)=>{const o=e.element===this.focusTracker.focusedElement;return o&&(t=n),o}),t)}focusFirst(){this._focus(this.first)}focusLast(){this._focus(this.last)}focusNext(){this._focus(this.next)}focusPrevious(){this._focus(this.previous)}_focus(t){t&&t.focus()}_getFocusableItem(t){const e=this.current,n=this.focusables.length;if(!n)return null;if(null===e)return this[1===t?"first":"last"];let o=(e+n+t)%n;do{const e=this.focusables.get(o);if(Ol(e))return e;o=(o+n+t)%n}while(o!==e);return null}}function Ol(t){return!(!t.focus||"none"==Ki.window.getComputedStyle(t.element).display)}class Rl extends xl{constructor(t){super(t),this.setTemplate({tag:"span",attributes:{class:["ck","ck-toolbar__separator"]}})}}n(51);class Dl extends xl{constructor(t){super(t);const e=this.bindTemplate;this.items=this.createCollection(),this.focusTracker=new Kc,this.keystrokes=new Uc,this.set("isVertical",!1),this.set("className"),this._focusCycler=new Nl({focusables:this.items,focusTracker:this.focusTracker,keystrokeHandler:this.keystrokes,actions:{focusPrevious:["arrowleft","arrowup"],focusNext:["arrowright","arrowdown"]}}),this.setTemplate({tag:"div",attributes:{class:["ck","ck-toolbar",e.if("isVertical","ck-toolbar_vertical"),e.to("className")]},children:this.items,on:{mousedown:function(t){return t.bindTemplate.to(e=>{e.target===t.element&&e.preventDefault()})}(this)}})}render(){super.render();for(const t of this.items)this.focusTracker.add(t.element);this.items.on("add",(t,e)=>{this.focusTracker.add(e.element)}),this.items.on("remove",(t,e)=>{this.focusTracker.remove(e.element)}),this.keystrokes.listenTo(this.element)}focus(){this._focusCycler.focusFirst()}focusLast(){this._focusCycler.focusLast()}fillFromConfig(t,e){t.map(t=>{"|"==t?this.items.add(new Rl):e.has(t)?this.items.add(e.create(t)):fs.a.warn("toolbarview-item-unavailable: The requested toolbar item is unavailable.",{name:t})})}}n(53);class Ll extends Tl{constructor(t){super(t),this.stickyPanel=new Il(t),this.toolbar=new Dl(t),this.editable=new Pl(t)}render(){super.render(),this.stickyPanel.content.add(this.toolbar),this.top.add(this.stickyPanel),this.main.add(this.editable)}get editableElement(){return this.editable.element}}class jl{constructor(){this._replacedElements=[]}replace(t,e){this._replacedElements.push({element:t,newElement:e}),t.style.display="none",e&&t.parentNode.insertBefore(e,t.nextSibling)}restore(){this._replacedElements.forEach(({element:t,newElement:e})=>{t.style.display="",e&&e.remove()}),this._replacedElements=[]}}class Vl extends qc{constructor(t,e){super(e),tr(t)&&(this.sourceElement=t),this._elementReplacer=new jl,this.data.processor=new $c,this.model.document.createRoot(),this.ui=new Xc(this,new Ll(this.locale)),function(t){if(!ct(t.updateSourceElement))throw new M.b("attachtoform-missing-elementapi-interface: Editor passed to attachToForm() must implement ElementApi.");const e=t.sourceElement;if(e&&"textarea"===e.tagName.toLowerCase()&&e.form){let n;const o=e.form,i=()=>t.updateSourceElement();ct(o.submit)&&(n=o.submit,o.submit=(()=>{i(),n.apply(o)})),o.addEventListener("submit",i),t.on("destroy",()=>{o.removeEventListener("submit",i),n&&(o.submit=n)})}}(this)}get element(){return this.ui.view.element}destroy(){return this.sourceElement&&this.updateSourceElement(),this._elementReplacer.restore(),this.ui.destroy(),super.destroy()}static create(t,e){return new Promise(n=>{const o=new this(t,e);n(o.initPlugins().then(()=>o.ui.init()).then(()=>{tr(t)&&o._elementReplacer.replace(t,o.element),o.fire("uiReady")}).then(()=>o.editing.view.attachDomRoot(o.ui.view.editableElement)).then(()=>{const e=tr(t)?function(t){return t instanceof HTMLTextAreaElement?t.value:t.innerHTML}(t):t;return o.data.init(e)}).then(()=>{o.fire("dataReady"),o.fire("ready")}).then(()=>o))})}}B(Vl,Wc),B(Vl,Yc);class Fl{constructor(t){this.editor=t}destroy(){this.stopListening()}}B(Fl,jo);class zl{constructor(t){this.files=function(t){const e=t.files?Array.from(t.files):[],n=t.items?Array.from(t.items):[];if(e.length)return e;return n.filter(t=>"file"===t.kind).map(t=>t.getAsFile())}(t),this._native=t}get types(){return this._native.types}getData(t){return this._native.getData(t)}setData(t,e){this._native.setData(t,e)}}class Bl extends Jr{constructor(t){super(t);const e=this.document;function n(t,n){n.preventDefault();const o=n.dropRange?[n.dropRange]:Array.from(e.selection.getRanges());e.fire("clipboardInput",{dataTransfer:n.dataTransfer,targetRanges:o})}this.domEventType=["paste","copy","cut","drop","dragover"],this.listenTo(e,"paste",n,{priority:"low"}),this.listenTo(e,"drop",n,{priority:"low"})}onDomEvent(t){const e={dataTransfer:new zl(t.clipboardData?t.clipboardData:t.dataTransfer)};"drop"==t.type&&(e.dropRange=function(t,e){const n=e.target.ownerDocument,o=e.clientX,i=e.clientY;let r;n.caretRangeFromPoint&&n.caretRangeFromPoint(o,i)?r=n.caretRangeFromPoint(o,i):e.rangeParent&&((r=n.createRange()).setStart(e.rangeParent,e.rangeOffset),r.collapse(!0));return r?t.domConverter.domRangeToView(r):t.document.selection.getFirstRange()}(this.view,t)),this.fire(t.type,t,e)}}const Ul=["figcaption","li"];class Hl extends Fl{static get pluginName(){return"Clipboard"}init(){const t=this.editor,e=t.model.document,n=t.editing.view,o=n.document;function i(n,i){const r=i.dataTransfer;i.preventDefault();const s=t.data.toView(t.model.getSelectedContent(e.selection));o.fire("clipboardOutput",{dataTransfer:r,content:s,method:n.name})}this._htmlDataProcessor=new $c,n.addObserver(Bl),this.listenTo(o,"clipboardInput",e=>{t.isReadOnly&&e.stop()},{priority:"highest"}),this.listenTo(o,"clipboardInput",(t,e)=>{const o=e.dataTransfer;let i="";o.getData("text/html")?i=function(t){return t.replace(/<span(?: class="Apple-converted-space"|)>(\s+)<\/span>/g,(t,e)=>1==e.length?" ":e)}(o.getData("text/html")):o.getData("text/plain")&&(i=function(t){return(t=t.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\n\n/g,"</p><p>").replace(/\n/g,"<br>").replace(/^\s/,"&nbsp;").replace(/\s$/,"&nbsp;").replace(/\s\s/g," &nbsp;")).indexOf("</p><p>")>-1&&(t=`<p>${t}</p>`),t}(o.getData("text/plain"))),i=this._htmlDataProcessor.toView(i),this.fire("inputTransformation",{content:i,dataTransfer:o}),n.scrollToTheSelection()},{priority:"low"}),this.listenTo(this,"inputTransformation",(t,e)=>{if(!e.content.isEmpty){const t=this.editor.data,n=this.editor.model,o=t.toModel(e.content,"$clipboardHolder");if(0==o.childCount)return;n.insertContent(o)}},{priority:"low"}),this.listenTo(o,"copy",i,{priority:"low"}),this.listenTo(o,"cut",(e,n)=>{t.isReadOnly?n.preventDefault():i(e,n)},{priority:"low"}),this.listenTo(o,"clipboardOutput",(n,o)=>{o.content.isEmpty||(o.dataTransfer.setData("text/html",this._htmlDataProcessor.toData(o.content)),o.dataTransfer.setData("text/plain",function t(e){let n="";if(e.is("text")||e.is("textProxy"))n=e.data;else if(e.is("img")&&e.hasAttribute("alt"))n=e.getAttribute("alt");else{let o=null;for(const i of e.getChildren()){const e=t(i);o&&(o.is("containerElement")||i.is("containerElement"))&&(Ul.includes(o.name)||Ul.includes(i.name)?n+="\n":n+="\n\n"),n+=e,o=i}}return n}(o.content))),"cut"==o.method&&t.model.deleteContent(e.selection)},{priority:"low"})}}class ql{constructor(t){this.editor=t,this.set("value",void 0),this.set("isEnabled",!1),this.decorate("execute"),this.listenTo(this.editor.model.document,"change",()=>{this.refresh()}),this.on("execute",t=>{this.isEnabled||t.stop()},{priority:"high"}),this.listenTo(t,"change:isReadOnly",(t,e,n)=>{n?(this.on("set:isEnabled",Wl,{priority:"highest"}),this.isEnabled=!1):(this.off("set:isEnabled",Wl),this.refresh())})}refresh(){this.isEnabled=!0}execute(){}destroy(){this.stopListening()}}function Wl(t){t.return=!1,t.stop()}B(ql,jo);class Yl extends ql{execute(){const t=this.editor.model,e=t.document;t.change(n=>{!function(t,e,n,o){const i=n.isCollapsed,r=n.getFirstRange(),s=r.start.parent,a=r.end.parent;if(o.isLimit(s)||o.isLimit(a))return void(i||s!=a||t.deleteContent(n));if(i)Gl(e,n,r.start);else{const o=!(r.start.isAtStart&&r.end.isAtEnd),i=s==a;t.deleteContent(n,{leaveUnmerged:o}),o&&(i?Gl(e,n,n.focus):e.setSelection(a,0))}}(this.editor.model,n,e.selection,t.schema),this.fire("afterExecute",{writer:n})})}}function Gl(t,e,n){const o=n.parent,i=new o.constructor(o.name,o.getAttributes());n.isAtEnd?t.insert(i,n.parent,"after"):n.isAtStart?t.insert(i,n.parent,"before"):t.split(n),t.setSelection(n.parent.nextSibling,0)}class $l extends cr{constructor(t){super(t);const e=this.document;e.on("keydown",(t,n)=>{if(this.isEnabled&&n.keyCode==hi.enter){let o;e.once("enter",t=>o=t,{priority:"highest"}),e.fire("enter",new Qr(e,n.domEvent,{isSoft:n.shiftKey})),o&&o.stop.called&&t.stop()}})}observe(){}}class Ql extends Fl{static get pluginName(){return"Enter"}init(){const t=this.editor,e=t.editing.view,n=e.document;e.addObserver($l),t.commands.add("enter",new Yl(t)),this.listenTo(n,"enter",(n,o)=>{o.preventDefault(),o.isSoft||(t.execute("enter"),e.scrollToTheSelection())},{priority:"low"})}}class Jl extends ql{execute(){const t=this.editor.model,e=t.document;t.change(n=>{!function(t,e,n){const o=n.isCollapsed,i=n.getFirstRange(),r=i.start.parent,s=i.end.parent,a=r==s;if(o)Kl(e,i.end);else{const o=!(i.start.isAtStart&&i.end.isAtEnd);t.deleteContent(n,{leaveUnmerged:o}),a?Kl(e,n.focus):o&&e.setSelection(s,0)}}(t,n,e.selection),this.fire("afterExecute",{writer:n})})}refresh(){const t=this.editor.model,e=t.document;this.isEnabled=function(t,e){if(e.rangeCount>1)return!1;const n=e.anchor;if(!n||!t.checkChild(n,"softBreak"))return!1;const o=e.getFirstRange(),i=o.start.parent,r=o.end.parent;if((Zl(i,t)||Zl(r,t))&&i!==r)return!1;return!0}(t.schema,e.selection)}}function Kl(t,e){const n=t.createElement("softBreak");t.insert(n,e),t.setSelection(n,"after")}function Zl(t,e){return!t.is("rootElement")&&(e.isLimit(t)||Zl(t.parent,e))}class Xl extends Fl{static get pluginName(){return"ShiftEnter"}init(){const t=this.editor,e=t.model.schema,n=t.conversion,o=t.editing.view,i=o.document;e.register("softBreak",{allowWhere:"$text"}),n.for("upcast").add(Oa({model:"softBreak",view:"br"})),n.for("downcast").add(aa({model:"softBreak",view:(t,e)=>e.createEmptyElement("br")})),o.addObserver($l),t.commands.add("shiftEnter",new Jl(t)),this.listenTo(i,"enter",(e,n)=>{n.preventDefault(),n.isSoft&&(t.execute("shiftEnter"),o.scrollToTheSelection())},{priority:"low"})}}class td{constructor(t,e=20){this.model=t,this.size=0,this.limit=e,this.isLocked=!1,this._changeCallback=((t,e)=>{"transparent"!=e.type&&e!==this._batch&&this._reset(!0)}),this._selectionChangeCallback=(()=>{this._reset()}),this.model.document.on("change",this._changeCallback),this.model.document.selection.on("change:range",this._selectionChangeCallback),this.model.document.selection.on("change:attribute",this._selectionChangeCallback)}get batch(){return this._batch||(this._batch=new Ha),this._batch}input(t){this.size+=t,this.size>=this.limit&&this._reset(!0)}lock(){this.isLocked=!0}unlock(){this.isLocked=!1}destroy(){this.model.document.off("change",this._changeCallback),this.model.document.selection.off("change:range",this._selectionChangeCallback),this.model.document.selection.off("change:attribute",this._selectionChangeCallback)}_reset(t){this.isLocked&&!t||(this._batch=null,this.size=0)}}class ed extends ql{constructor(t,e){super(t),this._buffer=new td(t.model,e)}get buffer(){return this._buffer}destroy(){super.destroy(),this._buffer.destroy()}execute(t={}){const e=this.editor.model,n=e.document,o=t.text||"",i=o.length,r=t.range||n.selection.getFirstRange(),s=t.resultRange;e.enqueueChange(this._buffer.batch,t=>{const e=r.isCollapsed;this._buffer.lock(),e||t.remove(r),o&&t.insertText(o,n.selection.getAttributes(),r.start),s?t.setSelection(s):e&&t.setSelection(r.start.getShiftedBy(i)),this._buffer.unlock(),this._buffer.input(i)})}}function nd(t){let e=null;const n=t.model,o=t.editing.view,i=t.commands.get("input");function r(){const t=i.buffer;t.lock(),n.enqueueChange(t.batch,()=>{n.deleteContent(n.document.selection)}),t.unlock()}o.document.on("keydown",(t,s)=>(function(t){const s=n.document,a=o.document.isComposing,c=e&&e.isEqual(s.selection);if(e=null,!i.isEnabled)return;if(function(t){if(t.ctrlKey)return!0;return od.includes(t.keyCode)}(t)||s.selection.isCollapsed)return;if(a&&229===t.keyCode)return;if(!a&&229===t.keyCode&&c)return;r()})(s),{priority:"lowest"}),o.document.on("compositionstart",function(){const t=n.document,e=1!==t.selection.rangeCount||t.selection.getFirstRange().isFlat;if(t.selection.isCollapsed||e)return;r()},{priority:"lowest"}),o.document.on("compositionend",()=>{e=new Js(n.document.selection)},{priority:"lowest"})}const od=[fi("arrowUp"),fi("arrowRight"),fi("arrowDown"),fi("arrowLeft"),9,16,17,18,20,27,33,34,35,36];for(let t=112;t<=135;t++)od.push(t);function id(t){if(0==t.length)return!1;for(const e of t)if("children"===e.type&&!rd(e))return!0;return!1}function rd(t){if(t.newChildren.length-t.oldChildren.length!=1)return;const e=function(t,e){const n=[];let o,i=0;return t.forEach(t=>{"equal"==t?(r(),i++):"insert"==t?(s("insert")?o.values.push(e[i]):(r(),o={type:"insert",index:i,values:[e[i]]}),i++):s("delete")?o.howMany++:(r(),o={type:"delete",index:i,howMany:1})}),r(),n;function r(){o&&(n.push(o),o=null)}function s(t){return o&&o.type==t}}(Bi(t.oldChildren,t.newChildren,sd),t.newChildren);if(e.length>1)return;const n=e[0];return n.values[0]instanceof co?n:void 0}function sd(t,e){return t instanceof co&&e instanceof co?t.data===e.data:t===e}class ad{constructor(t){this.editor=t,this.editing=this.editor.editing}handle(t,e){if(id(t))this._handleContainerChildrenMutations(t,e);else for(const n of t)this._handleTextMutation(n,e),this._handleTextNodeInsertion(n)}_handleContainerChildrenMutations(t,e){const n=function(t){const e=t.map(t=>t.node).reduce((t,e)=>t.getCommonAncestor(e,{includeSelf:!0}));if(!e)return;return e.getAncestors({includeSelf:!0,parentFirst:!0}).find(t=>t.is("containerElement")||t.is("rootElement"))}(t);if(!n)return;const o=this.editor.editing.view.domConverter.mapViewToDom(n),i=new er,r=this.editor.data.toModel(i.domToView(o)).getChild(0),s=this.editor.editing.mapper.toModelElement(n);if(!s)return;const a=Array.from(r.getChildren()),c=Array.from(s.getChildren()),l=a[a.length-1],d=c[c.length-1];if(l&&l.is("softBreak")&&d&&!d.is("softBreak")&&a.pop(),!cd(a)||!cd(c))return;const u=a.map(t=>t.is("text")?t.data:"@").join("").replace(/\u00A0/g," "),h=c.map(t=>t.is("text")?t.data:"@").join("").replace(/\u00A0/g," ");if(h===u)return;const f=Bi(h,u),{firstChangeAt:m,insertions:p,deletions:g}=ld(f);let b=null;e&&(b=this.editing.mapper.toModelRange(e.getFirstRange()));const w=u.substr(m,p),_=qs.createFromParentsAndOffsets(s,m,s,m+g);this.editor.execute("input",{text:w,range:_,resultRange:b})}_handleTextMutation(t,e){if("text"!=t.type)return;const n=t.newText.replace(/\u00A0/g," "),o=Bi(t.oldText.replace(/\u00A0/g," "),n),{firstChangeAt:i,insertions:r,deletions:s}=ld(o);let a=null;e&&(a=this.editing.mapper.toModelRange(e.getFirstRange()));const c=new $o(t.node,i),l=this.editing.mapper.toModelPosition(c),d=qs.createFromPositionAndShift(l,s),u=n.substr(i,r);this.editor.execute("input",{text:u,range:d,resultRange:a})}_handleTextNodeInsertion(t){if("children"!=t.type)return;const e=rd(t),n=new $o(t.node,e.index),o=this.editing.mapper.toModelPosition(n),i=e.values[0].data;this.editor.execute("input",{text:i.replace(/\u00A0/g," "),range:new qs(o)})}}function cd(t){return t.every(t=>t.is("text")||t.is("softBreak"))}function ld(t){let e=null,n=null;for(let o=0;o<t.length;o++){"equal"!=t[o]&&(e=null===e?o:e,n=o)}let o=0,i=0;for(let r=e;r<=n;r++)"insert"!=t[r]&&o++,"delete"!=t[r]&&i++;return{insertions:i,deletions:o,firstChangeAt:e}}class dd extends Fl{static get pluginName(){return"Input"}init(){const t=this.editor,e=new ed(t,t.config.get("typing.undoStep")||20);t.commands.add("input",e),nd(t),function(t){t.editing.view.document.on("mutations",(e,n,o)=>{new ad(t).handle(n,o)})}(t)}}class ud extends ql{constructor(t,e){super(t),this.direction=e,this._buffer=new td(t.model,t.config.get("typing.undoStep"))}execute(t={}){const e=this.editor.model,n=e.document;e.enqueueChange(this._buffer.batch,o=>{this._buffer.lock();const i=new Js(n.selection),r=i.isCollapsed;if(i.isCollapsed&&e.modifySelection(i,{direction:this.direction,unit:t.unit}),this._shouldEntireContentBeReplacedWithParagraph(t.sequence||1))return void this._replaceEntireContentWithParagraph(o);if(i.isCollapsed)return;let s=0;i.getFirstRange().getMinimalFlatRanges().forEach(t=>{s+=Ko(t.getWalker({singleCharacters:!0,ignoreElementEnd:!0,shallow:!0}))}),e.deleteContent(i,{doNotResetEntireContent:r}),this._buffer.input(s),o.setSelection(i),this._buffer.unlock()})}_shouldEntireContentBeReplacedWithParagraph(t){if(t>1)return!1;const e=this.editor.model,n=e.document.selection,o=e.schema.getLimitElement(n);if(!(n.isCollapsed&&n.containsEntireContent(o)))return!1;if(!e.schema.checkChild(o,"paragraph"))return!1;const i=o.getChild(0);return!i||"paragraph"!==i.name}_replaceEntireContentWithParagraph(t){const e=this.editor.model,n=e.document.selection,o=e.schema.getLimitElement(n),i=new Fs("paragraph");t.remove(qs.createIn(o)),t.insert(i,o),t.setSelection(i,0)}}class hd extends cr{constructor(t){super(t);const e=t.document;let n=0;e.on("keyup",(t,e)=>{e.keyCode!=hi.delete&&e.keyCode!=hi.backspace||(n=0)}),e.on("keydown",(t,o)=>{const i={};if(o.keyCode==hi.delete)i.direction="forward",i.unit="character";else{if(o.keyCode!=hi.backspace)return;i.direction="backward",i.unit="codePoint"}const r=li.isMac?o.altKey:o.ctrlKey;let s;i.unit=r?"word":i.unit,i.sequence=++n,e.once("delete",t=>s=t,{priority:"highest"}),e.fire("delete",new Qr(e,o.domEvent,i)),s&&s.stop.called&&t.stop()})}observe(){}}function fd(t){const e=t.model,n=t.editing.view,o=200;let i=null,r=new Js(e.document.selection),s=Date.now();e.document.selection.on("change",function(t){const e=new Js(t.source);r.isEqual(e)||(i=r,r=e,s=Date.now())}),n.document.on("mutations",function(n,a){id(a)&&function(t){for(const e of t){if("children"!==e.type)continue;const t=e.oldChildren,n=e.newChildren;if(!md(t))continue;const o=Bi(t,n),i=o.some(t=>"delete"===t),r=o.some(t=>"insert"===t);if(i&&!r)return!0}return!1}(a)&&(!function(){Date.now()-s<o&&i&&!i.isCollapsed&&r.isCollapsed&&r.getLastPosition().isEqual(i.getLastPosition())&&e.enqueueChange(t=>{t.setSelection(i)});t.execute("delete")}(),n.stop())},{priority:"highest"})}function md(t){return t.every(t=>t.is("containerElement"))}class pd extends Fl{static get pluginName(){return"Delete"}init(){const t=this.editor,e=t.editing.view,n=e.document;e.addObserver(hd),t.commands.add("forwardDelete",new ud(t,"forward")),t.commands.add("delete",new ud(t,"backward")),this.listenTo(n,"delete",(n,o)=>{t.execute("forward"==o.direction?"forwardDelete":"delete",{unit:o.unit,sequence:o.sequence}),o.preventDefault(),e.scrollToTheSelection()}),fd(t)}}class gd extends Fl{static get requires(){return[dd,pd]}static get pluginName(){return"Typing"}}class bd extends qa{get type(){return"noop"}clone(){return new bd(this.baseVersion)}getReversed(){return new bd(this.baseVersion+1)}_execute(){}static get className(){return"NoOperation"}}const wd=new Map;function _d(t,e,n){let o=wd.get(t);o||(o=new Map,wd.set(t,o)),o.set(e,n)}function kd(t){return[t]}function vd(t,e,n={}){const o=function(t,e){const n=wd.get(t);return n&&n.has(e)?n.get(e):kd}(t.constructor,e.constructor);try{return o(t=t.clone(),e,n)}catch(o){throw fs.a.error("Error during operation transformation!",o.message),fs.a.error("Transformed operation",t),fs.a.error("Operation transformed by",e),fs.a.error("context.aIsStrong",n.aIsStrong),fs.a.error("context.aWasUndone",n.aWasUndone),fs.a.error("context.bWasUndone",n.bWasUndone),fs.a.error("context.abRelation",n.abRelation),fs.a.error("context.baRelation",n.baRelation),o}}function yd(t,e,n){if(t=t.slice(),e=e.slice(),0==t.length||0==e.length)return{operationsA:t,operationsB:e};const o=new WeakMap;for(const e of t)o.set(e,0);const i={nextBaseVersionA:t[t.length-1].baseVersion+1,nextBaseVersionB:e[e.length-1].baseVersion+1,originalOperationsACount:t.length,originalOperationsBCount:e.length},r=new xd(n.document,n.useRelations);r.setOriginalOperations(t),r.setOriginalOperations(e);let s=0;for(;s<t.length;){const n=t[s],i=o.get(n);if(i==e.length){s++;continue}const a=e[i],c=vd(n,a,r.getContext(n,a,!0)),l=vd(a,n,r.getContext(a,n,!1));r.updateRelation(n,a),r.setOriginalOperations(c,n),r.setOriginalOperations(l,a);for(const t of c)o.set(t,i+l.length);t.splice(s,1,...c),e.splice(i,1,...l)}if(n.padWithNoOps){const n=t.length-i.originalOperationsACount,o=e.length-i.originalOperationsBCount;Cd(t,o-n),Cd(e,n-o)}return Ad(t,i.nextBaseVersionB),Ad(e,i.nextBaseVersionA),{operationsA:t,operationsB:e}}class xd{constructor(t,e){this._history=t.history,this._useRelations=e,this._originalOperations=new Map,this._relations=new Map}setOriginalOperations(t,e=null){const n=e?this._originalOperations.get(e):null;for(const e of t)this._originalOperations.set(e,n||e)}updateRelation(t,e){switch(t.constructor){case nc:switch(e.constructor){case ac:t.targetPosition.isEqual(e.sourcePosition)||e.movedRange.containsPosition(t.targetPosition)?this._setRelation(t,e,"insertAtSource"):t.targetPosition.isEqual(e.deletionPosition)&&this._setRelation(t,e,"insertBetween");break;case nc:t.targetPosition.isEqual(e.sourcePosition)||t.targetPosition.isBefore(e.sourcePosition)?this._setRelation(t,e,"insertBefore"):this._setRelation(t,e,"insertAfter")}break;case cc:switch(e.constructor){case ac:t.splitPosition.isBefore(e.sourcePosition)&&this._setRelation(t,e,"splitBefore");break;case nc:(t.splitPosition.isEqual(e.sourcePosition)||t.splitPosition.isBefore(e.sourcePosition))&&this._setRelation(t,e,"splitBefore")}break;case ac:switch(e.constructor){case ac:t.targetPosition.isEqual(e.sourcePosition)||this._setRelation(t,e,"mergeTargetNotMoved"),t.sourcePosition.isEqual(e.sourcePosition)&&this._setRelation(t,e,"mergeSameElement")}}}getContext(t,e,n){return{aIsStrong:n,aWasUndone:this._wasUndone(t),bWasUndone:this._wasUndone(e),abRelation:this._useRelations?this._getRelation(t,e):null,baRelation:this._useRelations?this._getRelation(e,t):null}}_wasUndone(t){const e=this._originalOperations.get(t);return e.wasUndone||this._history.isUndoneOperation(e)}_getRelation(t,e){const n=this._originalOperations.get(e),o=this._history.getUndoneOperation(n);if(!o)return null;const i=this._originalOperations.get(t),r=this._relations.get(i);return r&&r.get(o)||null}_setRelation(t,e,n){const o=this._originalOperations.get(t),i=this._originalOperations.get(e);let r=this._relations.get(o);r||(r=new Map,this._relations.set(o,r)),r.set(i,n)}}function Ad(t,e){for(const n of t)n.baseVersion=e++}function Cd(t,e){for(let n=0;n<e;n++)t.push(new bd(0))}function Td(t,e,n){const o=t.nodes.getNode(0).getAttribute(e);if(o==n)return null;const i=new qs(t.position,t.position.getShiftedBy(t.howMany));return new tc(i,e,o,n,0)}function Md(t,e){return null===t.targetPosition._getTransformedByDeletion(e.sourcePosition,e.howMany)}function Pd(t,e){const n=[];for(let o=0;o<t.length;o++){const i=t[o],r=new nc(i.start,i.end.offset-i.start.offset,e,0);n.push(r);for(let e=o+1;e<t.length;e++)t[e]=t[e]._getTransformedByMove(r.sourcePosition,r.targetPosition,r.howMany)[0];e=e._getTransformedByMove(r.sourcePosition,r.targetPosition,r.howMany)}return n}_d(tc,tc,(t,e,n)=>{if(t.key===e.key){const o=t.range.getDifference(e.range).map(e=>new tc(e,t.key,t.oldValue,t.newValue,0)),i=t.range.getIntersection(e.range);return i&&n.aIsStrong&&o.push(new tc(i,e.key,e.newValue,t.newValue,0)),0==o.length?[new bd(0)]:o}return[t]}),_d(tc,oc,(t,e)=>{if(t.range.start.hasSameParentAs(e.position)&&t.range.containsPosition(e.position)){const n=t.range._getTransformedByInsertion(e.position,e.howMany,!e.shouldReceiveAttributes).map(e=>new tc(e,t.key,t.oldValue,t.newValue,t.baseVersion));if(e.shouldReceiveAttributes){const o=Td(e,t.key,t.oldValue);o&&n.unshift(o)}return n}return t.range=t.range._getTransformedByInsertion(e.position,e.howMany,!1)[0],[t]}),_d(tc,ac,(t,e)=>{const n=[];t.range.start.hasSameParentAs(e.deletionPosition)&&(t.range.containsPosition(e.deletionPosition)||t.range.start.isEqual(e.deletionPosition))&&n.push(qs.createFromPositionAndShift(e.graveyardPosition,1));const o=t.range._getTransformedByMergeOperation(e);return o.isCollapsed||n.push(o),n.map(e=>new tc(e,t.key,t.oldValue,t.newValue,t.baseVersion))}),_d(tc,nc,(t,e)=>{return function(t,e){const n=qs.createFromPositionAndShift(e.sourcePosition,e.howMany);let o=null,i=[];n.containsRange(t,!0)?o=t:t.start.hasSameParentAs(n.start)?(i=t.getDifference(n),o=t.getIntersection(n)):i=[t];const r=[];for(let t of i){t=t._getTransformedByDeletion(e.sourcePosition,e.howMany);const n=e.getMovedRangeStart(),o=t.start.hasSameParentAs(n);t=t._getTransformedByInsertion(n,e.howMany,o),r.push(...t)}o&&r.push(o._getTransformedByMove(e.sourcePosition,e.targetPosition,e.howMany,!1)[0]);return r}(t.range,e).map(e=>new tc(e,t.key,t.oldValue,t.newValue,t.baseVersion))}),_d(tc,cc,(t,e)=>{if(t.range.end.isEqual(e.insertionPosition))return e.graveyardPosition||t.range.end.offset++,[t];if(t.range.start.hasSameParentAs(e.splitPosition)&&t.range.containsPosition(e.splitPosition)){const n=t.clone();return n.range=new qs(Hs.createFromPosition(e.moveTargetPosition),t.range.end._getCombined(e.splitPosition,e.moveTargetPosition)),t.range.end=Hs.createFromPosition(e.splitPosition),t.range.end.stickiness="toPrevious",[t,n]}return t.range=t.range._getTransformedBySplitOperation(e),[t]}),_d(oc,tc,(t,e)=>{const n=[t];if(t.shouldReceiveAttributes&&t.position.hasSameParentAs(e.range.start)&&e.range.containsPosition(t.position)){const o=Td(t,e.key,e.newValue);o&&n.push(o)}return n}),_d(oc,oc,(t,e,n)=>t.position.isEqual(e.position)&&n.aIsStrong?[t]:(t.position=t.position._getTransformedByInsertOperation(e),[t])),_d(oc,nc,(t,e)=>(t.position=t.position._getTransformedByMoveOperation(e),[t])),_d(oc,cc,(t,e)=>(t.position=t.position._getTransformedBySplitOperation(e),[t])),_d(oc,ac,(t,e)=>(t.position=t.position._getTransformedByMergeOperation(e),[t])),_d(ic,oc,(t,e)=>(t.oldRange&&(t.oldRange=t.oldRange._getTransformedByInsertOperation(e)[0]),t.newRange&&(t.newRange=t.newRange._getTransformedByInsertOperation(e)[0]),[t])),_d(ic,ic,(t,e,n)=>{if(t.name==e.name){if(!n.aIsStrong)return[new bd(0)];t.oldRange=e.newRange?qs.createFromRange(e.newRange):null}return[t]}),_d(ic,ac,(t,e)=>(t.oldRange&&(t.oldRange=t.oldRange._getTransformedByMergeOperation(e)),t.newRange&&(t.newRange=t.newRange._getTransformedByMergeOperation(e)),[t])),_d(ic,nc,(t,e)=>(t.oldRange&&(t.oldRange=qs.createFromRanges(t.oldRange._getTransformedByMoveOperation(e))),t.newRange&&(t.newRange=qs.createFromRanges(t.newRange._getTransformedByMoveOperation(e))),[t])),_d(ic,cc,(t,e)=>(t.oldRange&&(t.oldRange=t.oldRange._getTransformedBySplitOperation(e)),t.newRange&&(t.newRange=t.newRange._getTransformedBySplitOperation(e)),[t])),_d(ac,oc,(t,e)=>(t.sourcePosition.hasSameParentAs(e.position)&&(t.howMany+=e.howMany),t.sourcePosition=t.sourcePosition._getTransformedByInsertOperation(e),t.targetPosition=t.targetPosition._getTransformedByInsertOperation(e),[t])),_d(ac,ac,(t,e,n)=>{if(t.sourcePosition.isEqual(e.sourcePosition)&&t.targetPosition.isEqual(e.targetPosition)){if(n.bWasUndone){const n=e.graveyardPosition.path.slice();return n.push(0),t.sourcePosition=new Hs(e.graveyardPosition.root,n),t.howMany=0,[t]}return[new bd(0)]}if(t.sourcePosition.isEqual(e.sourcePosition)&&!t.targetPosition.isEqual(e.targetPosition)&&!n.bWasUndone){const o="$graveyard"==t.targetPosition.root.rootName,i="$graveyard"==e.targetPosition.root.rootName;if(i&&!o||!(o&&!i)&&n.aIsStrong){const n=e.targetPosition._getTransformedByMergeOperation(e),o=t.targetPosition._getTransformedByMergeOperation(e);return[new nc(n,t.howMany,o,0)]}return[new bd(0)]}return t.sourcePosition.hasSameParentAs(e.targetPosition)&&(t.howMany+=e.howMany),t.sourcePosition=t.sourcePosition._getTransformedByMergeOperation(e),t.targetPosition=t.targetPosition._getTransformedByMergeOperation(e),t.graveyardPosition.isEqual(e.graveyardPosition)&&n.aIsStrong||(t.graveyardPosition=t.graveyardPosition._getTransformedByMergeOperation(e)),[t]}),_d(ac,nc,(t,e,n)=>{const o=qs.createFromPositionAndShift(e.sourcePosition,e.howMany);return"remove"==e.type&&!n.bWasUndone&&t.deletionPosition.hasSameParentAs(e.sourcePosition)&&o.containsPosition(t.sourcePosition)?[new bd(0)]:(t.sourcePosition.hasSameParentAs(e.targetPosition)&&(t.howMany+=e.howMany),t.sourcePosition.hasSameParentAs(e.sourcePosition)&&(t.howMany-=e.howMany),t.sourcePosition=t.sourcePosition._getTransformedByMoveOperation(e),t.targetPosition=t.targetPosition._getTransformedByMoveOperation(e),t.graveyardPosition.isEqual(e.targetPosition)||(t.graveyardPosition=t.graveyardPosition._getTransformedByMoveOperation(e)),[t])}),_d(ac,cc,(t,e,n)=>{if(e.graveyardPosition&&(t.graveyardPosition=t.graveyardPosition._getTransformedByDeletion(e.graveyardPosition,1),t.deletionPosition.isEqual(e.graveyardPosition)&&(t.howMany=e.howMany)),t.targetPosition.isEqual(e.splitPosition)){const o=0!=e.howMany,i=e.graveyardPosition&&t.deletionPosition.isEqual(e.graveyardPosition);if(o||i||"mergeTargetNotMoved"==n.abRelation)return t.sourcePosition=t.sourcePosition._getTransformedBySplitOperation(e),[t]}return t.sourcePosition.isEqual(e.splitPosition)&&"mergeSameElement"==n.abRelation?(t.sourcePosition=Hs.createFromPosition(e.moveTargetPosition),t.targetPosition=t.targetPosition._getTransformedBySplitOperation(e),[t]):(t.sourcePosition.hasSameParentAs(e.splitPosition)&&(t.howMany=e.splitPosition.offset),t.sourcePosition=t.sourcePosition._getTransformedBySplitOperation(e),t.targetPosition=t.targetPosition._getTransformedBySplitOperation(e),[t])}),_d(nc,oc,(t,e)=>{const n=qs.createFromPositionAndShift(t.sourcePosition,t.howMany)._getTransformedByInsertOperation(e,!1)[0];return t.sourcePosition=n.start,t.howMany=n.end.offset-n.start.offset,t.targetPosition.isEqual(e.position)||(t.targetPosition=t.targetPosition._getTransformedByInsertOperation(e)),[t]}),_d(nc,nc,(t,e,n)=>{const o=qs.createFromPositionAndShift(t.sourcePosition,t.howMany),i=qs.createFromPositionAndShift(e.sourcePosition,e.howMany);let r,s=n.aIsStrong,a=!n.aIsStrong;if("insertBefore"==n.abRelation?a=!0:"insertAfter"==n.abRelation&&(a=!1),r=t.targetPosition.isEqual(e.targetPosition)&&a?t.targetPosition._getTransformedByDeletion(e.sourcePosition,e.howMany):t.targetPosition._getTransformedByMove(e.sourcePosition,e.targetPosition,e.howMany),Md(t,e)&&Md(e,t))return[e.getReversed()];if(o.containsPosition(e.targetPosition)&&o.containsRange(i,!0))return o.start=o.start._getTransformedByMove(e.sourcePosition,e.targetPosition,e.howMany),o.end=o.end._getTransformedByMove(e.sourcePosition,e.targetPosition,e.howMany),Pd([o],r);if(i.containsPosition(t.targetPosition)&&i.containsRange(o,!0))return o.start=o.start._getCombined(e.sourcePosition,e.getMovedRangeStart()),o.end=o.end._getCombined(e.sourcePosition,e.getMovedRangeStart()),Pd([o],r);const c=U(t.sourcePosition.getParentPath(),e.sourcePosition.getParentPath());if("prefix"==c||"extension"==c)return o.start=o.start._getTransformedByMove(e.sourcePosition,e.targetPosition,e.howMany),o.end=o.end._getTransformedByMove(e.sourcePosition,e.targetPosition,e.howMany),Pd([o],r);"remove"!=t.type||"remove"==e.type||n.aWasUndone?"remove"==t.type||"remove"!=e.type||n.bWasUndone||(s=!1):s=!0;const l=[],d=o.getDifference(i);for(const t of d){t.start=t.start._getTransformedByDeletion(e.sourcePosition,e.howMany),t.end=t.end._getTransformedByDeletion(e.sourcePosition,e.howMany);const n="same"==U(t.start.getParentPath(),e.getMovedRangeStart().getParentPath()),o=t._getTransformedByInsertion(e.getMovedRangeStart(),e.howMany,n);l.push(...o)}const u=o.getIntersection(i);return null!==u&&s&&(u.start=u.start._getCombined(e.sourcePosition,e.getMovedRangeStart()),u.end=u.end._getCombined(e.sourcePosition,e.getMovedRangeStart()),0===l.length?l.push(u):1==l.length?i.start.isBefore(o.start)||i.start.isEqual(o.start)?l.unshift(u):l.push(u):l.splice(1,0,u)),0===l.length?[new bd(t.baseVersion)]:Pd(l,r)}),_d(nc,cc,(t,e,n)=>{let o=Hs.createFromPosition(t.targetPosition);t.targetPosition.isEqual(e.insertionPosition)&&e.graveyardPosition||(o=t.targetPosition._getTransformedBySplitOperation(e));const i=qs.createFromPositionAndShift(t.sourcePosition,t.howMany);if(i.end.isEqual(e.insertionPosition))return e.graveyardPosition||t.howMany++,t.targetPosition=o,[t];if(i.start.hasSameParentAs(e.splitPosition)&&i.containsPosition(e.splitPosition)){let t=new qs(e.splitPosition,i.end);return t=t._getTransformedBySplitOperation(e),Pd([new qs(i.start,e.splitPosition),t],o)}t.targetPosition.isEqual(e.splitPosition)&&"insertAtSource"==n.abRelation&&(o=e.moveTargetPosition),t.targetPosition.isEqual(e.insertionPosition)&&"insertBetween"==n.abRelation&&(o=t.targetPosition);const r=i._getTransformedBySplitOperation(e);return t.sourcePosition=r.start,t.howMany=r.end.offset-r.start.offset,t.targetPosition=o,[t]}),_d(nc,ac,(t,e,n)=>{const o=qs.createFromPositionAndShift(t.sourcePosition,t.howMany);if(e.deletionPosition.hasSameParentAs(t.sourcePosition)&&o.containsPosition(e.sourcePosition))if("remove"==t.type){if(!n.aWasUndone)return[e.getReversed(),t]}else if(1==t.howMany)return n.bWasUndone?(t.sourcePosition=Hs.createFromPosition(e.graveyardPosition),t.targetPosition=t.targetPosition._getTransformedByMergeOperation(e),[t]):[new bd(0)];const i=qs.createFromPositionAndShift(t.sourcePosition,t.howMany)._getTransformedByMergeOperation(e);return t.sourcePosition=i.start,t.howMany=i.end.offset-i.start.offset,t.targetPosition=t.targetPosition._getTransformedByMergeOperation(e),[t]}),_d(rc,oc,(t,e)=>(t.position=t.position._getTransformedByInsertOperation(e),[t])),_d(rc,ac,(t,e)=>t.position.isEqual(e.deletionPosition)?(t.position=Hs.createFromPosition(e.graveyardPosition),t.position.stickiness="toNext",[t]):(t.position=t.position._getTransformedByMergeOperation(e),[t])),_d(rc,nc,(t,e)=>(t.position=t.position._getTransformedByMoveOperation(e),[t])),_d(rc,rc,(t,e,n)=>{if(t.position.isEqual(e.position)){if(!n.aIsStrong)return[new bd(0)];t.oldName=e.newName}return[t]}),_d(rc,cc,(t,e)=>{if("same"==U(t.position.path,e.splitPosition.getParentPath())&&!e.graveyardPosition){return[t,new rc(t.position.getShiftedBy(1),t.oldName,t.newName,0)]}return t.position=t.position._getTransformedBySplitOperation(e),[t]}),_d(sc,sc,(t,e,n)=>{if(t.root===e.root&&t.key===e.key){if(!n.aIsStrong||t.newValue===e.newValue)return[new bd(0)];t.oldValue=e.newValue}return[t]}),_d(cc,oc,(t,e)=>(t.splitPosition.hasSameParentAs(e.position)&&t.splitPosition.offset<e.position.offset&&(t.howMany+=e.howMany),t.splitPosition=t.splitPosition._getTransformedByInsertOperation(e),t.insertionPosition=cc.getInsertionPosition(t.splitPosition),[t])),_d(cc,ac,(t,e,n)=>{if(!t.graveyardPosition&&!n.bWasUndone&&t.splitPosition.hasSameParentAs(e.sourcePosition)){const n=e.graveyardPosition.path.slice();n.push(0);const o=new Hs(e.graveyardPosition.root,n),i=cc.getInsertionPosition(new Hs(e.graveyardPosition.root,n)),r=new cc(o,0,null,0);return r.insertionPosition=i,t.splitPosition=t.splitPosition._getTransformedByMergeOperation(e),t.insertionPosition=cc.getInsertionPosition(t.splitPosition),t.graveyardPosition=Hs.createFromPosition(r.insertionPosition),t.graveyardPosition.stickiness="toNext",[r,t]}return t.splitPosition.hasSameParentAs(e.deletionPosition)&&!t.splitPosition.isAfter(e.deletionPosition)&&t.howMany--,t.splitPosition.hasSameParentAs(e.targetPosition)&&(t.howMany+=e.howMany),t.splitPosition=t.splitPosition._getTransformedByMergeOperation(e),t.insertionPosition=cc.getInsertionPosition(t.splitPosition),t.graveyardPosition&&(t.graveyardPosition=t.graveyardPosition._getTransformedByMergeOperation(e)),[t]}),_d(cc,nc,(t,e,n)=>{t.graveyardPosition&&(t.graveyardPosition=t.graveyardPosition._getTransformedByMoveOperation(e));const o=qs.createFromPositionAndShift(e.sourcePosition,e.howMany);if(t.splitPosition.hasSameParentAs(e.sourcePosition)&&o.containsPosition(t.splitPosition)){const n=e.howMany-(t.splitPosition.offset-e.sourcePosition.offset);return t.howMany-=n,t.splitPosition.hasSameParentAs(e.targetPosition)&&t.splitPosition.offset<e.targetPosition.offset&&(t.howMany+=e.howMany),t.splitPosition=Hs.createFromPosition(e.sourcePosition),t.insertionPosition=cc.getInsertionPosition(t.splitPosition),[t]}return!t.splitPosition.isEqual(e.targetPosition)||"insertAtSource"!=n.baRelation&&"splitBefore"!=n.abRelation?(t.splitPosition.hasSameParentAs(e.sourcePosition)&&t.splitPosition.offset<=e.sourcePosition.offset&&(t.howMany-=e.howMany),t.splitPosition.hasSameParentAs(e.targetPosition)&&t.splitPosition.offset<e.targetPosition.offset&&(t.howMany+=e.howMany),t.splitPosition.stickiness="toNone",t.splitPosition=t.splitPosition._getTransformedByMoveOperation(e),t.splitPosition.stickiness="toNext",t.graveyardPosition?t.insertionPosition=t.insertionPosition._getTransformedByMoveOperation(e):t.insertionPosition=cc.getInsertionPosition(t.splitPosition),[t]):(t.howMany+=e.howMany,t.splitPosition=t.splitPosition._getTransformedByDeletion(e.sourcePosition,e.howMany),t.insertionPosition=cc.getInsertionPosition(t.splitPosition),[t])}),_d(cc,cc,(t,e,n)=>{if(t.splitPosition.isEqual(e.splitPosition)){if(!t.graveyardPosition&&!e.graveyardPosition)return[new bd(0)];if(t.graveyardPosition&&e.graveyardPosition&&t.graveyardPosition.isEqual(e.graveyardPosition))return[new bd(0)]}if(t.graveyardPosition&&e.graveyardPosition&&t.graveyardPosition.isEqual(e.graveyardPosition)){const o="$graveyard"==t.splitPosition.root.rootName,i="$graveyard"==e.splitPosition.root.rootName;if(i&&!o||!(o&&!i)&&n.aIsStrong){const n=[];return e.howMany&&n.push(new nc(e.moveTargetPosition,e.howMany,e.splitPosition,0)),t.howMany&&n.push(new nc(t.splitPosition,t.howMany,t.moveTargetPosition,0)),n}return[new bd(0)]}if(t.graveyardPosition&&(t.graveyardPosition=t.graveyardPosition._getTransformedBySplitOperation(e)),t.splitPosition.isEqual(e.insertionPosition)&&"splitBefore"==n.abRelation)return t.howMany++,[t];if(e.splitPosition.isEqual(t.insertionPosition)&&"splitBefore"==n.baRelation){const n=e.insertionPosition.path.slice();n.push(0);const o=new Hs(e.insertionPosition.root,n);return[t,new nc(t.insertionPosition,1,o,0)]}return t.splitPosition.hasSameParentAs(e.splitPosition)&&t.splitPosition.offset<e.splitPosition.offset&&(t.howMany-=e.howMany),t.splitPosition=t.splitPosition._getTransformedBySplitOperation(e),t.insertionPosition=cc.getInsertionPosition(t.splitPosition),[t]});class Sd extends ql{constructor(t){super(t),this._stack=[],this._createdBatches=new WeakSet,this.refresh()}refresh(){this.isEnabled=this._stack.length>0}addBatch(t){const e=this.editor.model.document.selection,n={ranges:e.hasOwnRange?Array.from(e.getRanges()):[],isBackward:e.isBackward};this._stack.push({batch:t,selection:n}),this.refresh()}clearStack(){this._stack=[],this.refresh()}_restoreSelection(t,e,n){const o=this.editor.model,i=o.document,r=[];for(const e of t){const t=Ed(e,n).find(t=>t.start.root!=i.graveyard);t&&r.push(t)}r.length&&o.change(t=>{t.setSelection(r,{backward:e})})}_undo(t,e){const n=this.editor.model,o=n.document;this._createdBatches.add(e);const i=t.operations.slice().filter(t=>t.isDocumentOperation);i.reverse();for(const t of i){const i=t.baseVersion+1,r=Array.from(o.history.getOperations(i)),s=yd([t.getReversed()],r,{useRelations:!0,document:this.editor.model.document,padWithNoOps:!1}).operationsA;for(const i of s)e.addOperation(i),n.applyOperation(i),o.history.setOperationAsUndone(t,i)}}}function Ed(t,e){const n=t.getTransformedByOperations(e);n.sort((t,e)=>t.start.isBefore(e.start)?-1:1);for(let t=1;t<n.length;t++){const e=n[t-1],o=n[t];e.end.isTouching(o.start)&&(e.end=o.end,n.splice(t,1),t--)}return n}class Id extends Sd{execute(t=null){const e=t?this._stack.findIndex(e=>e.batch==t):this._stack.length-1,n=this._stack.splice(e,1)[0],o=new Ha;this.editor.model.enqueueChange(o,()=>{this._undo(n.batch,o);const t=this.editor.model.document.history.getOperations(n.batch.baseVersion);this._restoreSelection(n.selection.ranges,n.selection.isBackward,t),this.fire("revert",n.batch,o)}),this.refresh()}}class Nd extends Sd{execute(){const t=this._stack.pop(),e=new Ha;this.editor.model.enqueueChange(e,()=>{const n=t.batch.operations[t.batch.operations.length-1].baseVersion+1,o=this.editor.model.document.history.getOperations(n);this._restoreSelection(t.selection.ranges,t.selection.isBackward,o),this._undo(t.batch,e)}),this.refresh()}}class Od extends Fl{constructor(t){super(t),this._batchRegistry=new WeakSet}init(){const t=this.editor;this._undoCommand=new Id(t),this._redoCommand=new Nd(t),t.commands.add("undo",this._undoCommand),t.commands.add("redo",this._redoCommand),this.listenTo(t.model,"applyOperation",(t,e)=>{const n=e[0];if(!n.isDocumentOperation)return;const o=n.batch;this._batchRegistry.has(o)||"transparent"==o.type||(this._redoCommand._createdBatches.has(o)?this._undoCommand.addBatch(o):this._undoCommand._createdBatches.has(o)||(this._undoCommand.addBatch(o),this._redoCommand.clearStack()),this._batchRegistry.add(o))},{priority:"highest"}),this.listenTo(this._undoCommand,"revert",(t,e,n)=>{this._redoCommand.addBatch(n)}),t.keystrokes.set("CTRL+Z","undo"),t.keystrokes.set("CTRL+Y","redo"),t.keystrokes.set("CTRL+SHIFT+Z","redo")}}n(55);class Rd extends xl{constructor(){super();const t=this.bindTemplate;this.set("content",""),this.set("viewBox","0 0 20 20"),this.set("fillColor",""),this.setTemplate({tag:"svg",ns:"http://www.w3.org/2000/svg",attributes:{class:["ck","ck-icon"],viewBox:t.to("viewBox")}})}render(){super.render(),this._updateXMLContent(),this._colorFillPaths(),this.on("change:content",()=>{this._updateXMLContent(),this._colorFillPaths()}),this.on("change:fillColor",()=>{this._colorFillPaths()})}_updateXMLContent(){if(this.content){const t=(new DOMParser).parseFromString(this.content.trim(),"image/svg+xml").querySelector("svg"),e=t.getAttribute("viewBox");for(e&&(this.viewBox=e),this.element.innerHTML="";t.childNodes.length>0;)this.element.appendChild(t.childNodes[0])}}_colorFillPaths(){this.fillColor&&this.element.querySelectorAll(".ck-icon__fill").forEach(t=>{t.style.fill=this.fillColor})}}n(57);class Dd extends xl{constructor(t){super(t),this.set("text",""),this.set("position","s");const e=this.bindTemplate;this.setTemplate({tag:"span",attributes:{class:["ck","ck-tooltip",e.to("position",t=>"ck-tooltip_"+t),e.if("text","ck-hidden",t=>!t.trim())]},children:[{tag:"span",attributes:{class:["ck","ck-tooltip__text"]},children:[{text:e.to("text")}]}]})}}n(59);class Ld extends xl{constructor(t){super(t);const e=this.bindTemplate,n=E();this.set("class"),this.set("labelStyle"),this.set("icon"),this.set("isEnabled",!0),this.set("isOn",!1),this.set("isVisible",!0),this.set("keystroke"),this.set("label"),this.set("tabindex",-1),this.set("tooltip"),this.set("tooltipPosition","s"),this.set("type","button"),this.set("withText",!1),this.children=this.createCollection(),this.tooltipView=this._createTooltipView(),this.labelView=this._createLabelView(n),this.iconView=new Rd,this.iconView.extendTemplate({attributes:{class:"ck-button__icon"}}),this.bind("_tooltipString").to(this,"tooltip",this,"label",this,"keystroke",this._getTooltipString.bind(this)),this.setTemplate({tag:"button",attributes:{class:["ck","ck-button",e.to("class"),e.if("isEnabled","ck-disabled",t=>!t),e.if("isVisible","ck-hidden",t=>!t),e.to("isOn",t=>t?"ck-on":"ck-off"),e.if("withText","ck-button_with-text")],type:e.to("type",t=>t||"button"),tabindex:e.to("tabindex"),"aria-labelledby":`ck-editor__aria-label_${n}`,"aria-disabled":e.if("isEnabled",!0,t=>!t),"aria-pressed":e.if("isOn",!0)},children:this.children,on:{mousedown:e.to(t=>{t.preventDefault()}),click:e.to(t=>{this.isEnabled?this.fire("execute"):t.preventDefault()})}})}render(){super.render(),this.icon&&(this.iconView.bind("content").to(this,"icon"),this.children.add(this.iconView)),this.children.add(this.tooltipView),this.children.add(this.labelView)}focus(){this.element.focus()}_createTooltipView(){const t=new Dd;return t.bind("text").to(this,"_tooltipString"),t.bind("position").to(this,"tooltipPosition"),t}_createLabelView(t){const e=new xl,n=this.bindTemplate;return e.setTemplate({tag:"span",attributes:{class:["ck","ck-button__label"],style:n.to("labelStyle"),id:`ck-editor__aria-label_${t}`},children:[{text:this.bindTemplate.to("label")}]}),e}_getTooltipString(t,e,n){return t?"string"==typeof t?t:(n&&(n=function(t){return li.isMac?pi(t).map(t=>ui[t.toLowerCase()]||t).reduce((t,e)=>t.slice(-1)in di?t+e:t+"+"+e):t}(n)),t instanceof Function?t(e,n):`${e}${n?` (${n})`:""}`):""}}var jd=n(20),Vd=n.n(jd),Fd=n(21),zd=n.n(Fd);class Bd extends Fl{init(){const t=this.editor.t;this._addButton("undo",t("az"),"CTRL+Z",Vd.a),this._addButton("redo",t("ba"),"CTRL+Y",zd.a)}_addButton(t,e,n,o){const i=this.editor;i.ui.componentFactory.add(t,r=>{const s=i.commands.get(t),a=new Ld(r);return a.set({label:e,icon:o,keystroke:n,tooltip:!0}),a.bind("isEnabled").to(s,"isEnabled"),this.listenTo(a,"execute",()=>i.execute(t)),a})}}class Ud extends Fl{static get requires(){return[Od,Bd]}static get pluginName(){return"Undo"}}class Hd extends Fl{static get pluginName(){return"PendingActions"}init(){this.set("hasAny",!1),this._actions=new ti({idProperty:"_id"}),this._actions.delegate("add","remove").to(this)}add(t){if("string"!=typeof t)throw new M.b("pendingactions-add-invalid-message: The message must be a string.");const e=Object.create(jo);return e.set("message",t),this._actions.add(e),this.hasAny=!0,e}remove(t){this._actions.remove(t),this.hasAny=!!this._actions.length}get first(){return this._actions.get(0)}[Symbol.iterator](){return this._actions[Symbol.iterator]()}}class qd{constructor(){const t=new window.FileReader;this._reader=t,this.set("loaded",0),t.onprogress=(t=>{this.loaded=t.loaded})}get error(){return this._reader.error}read(t){const e=this._reader;return this.total=t.size,new Promise((n,o)=>{e.onload=(()=>{n(e.result)}),e.onerror=(()=>{o("error")}),e.onabort=(()=>{o("aborted")}),this._reader.readAsDataURL(t)})}abort(){this._reader.abort()}}B(qd,jo);class Wd extends Fl{static get pluginName(){return"FileRepository"}static get requires(){return[Hd]}init(){this.loaders=new ti,this.loaders.on("add",()=>this._updatePendingAction()),this.loaders.on("remove",()=>this._updatePendingAction()),this._pendingAction=null,this.set("uploaded",0),this.set("uploadTotal",null),this.bind("uploadedPercent").to(this,"uploaded",this,"uploadTotal",(t,e)=>e?t/e*100:0)}getLoader(t){for(const e of this.loaders)if(e.file==t)return e;return null}createLoader(t){if(!this.createUploadAdapter)return fs.a.error("filerepository-no-upload-adapter: Upload adapter is not defined."),null;const e=new Yd(t);return e._adapter=this.createUploadAdapter(e),this.loaders.add(e),e.on("change:uploaded",()=>{let t=0;for(const e of this.loaders)t+=e.uploaded;this.uploaded=t}),e.on("change:uploadTotal",()=>{let t=0;for(const e of this.loaders)e.uploadTotal&&(t+=e.uploadTotal);this.uploadTotal=t}),e}destroyLoader(t){const e=t instanceof Yd?t:this.getLoader(t);e._destroy(),this.loaders.remove(e)}_updatePendingAction(){const t=this.editor.plugins.get(Hd);if(this.loaders.length){if(!this._pendingAction){const e=this.editor.t,n=t=>`${e("ao")} ${parseInt(t)}%.`;this._pendingAction=t.add(n(this.uploadedPercent)),this._pendingAction.bind("message").to(this,"uploadedPercent",n)}}else t.remove(this._pendingAction),this._pendingAction=null}}B(Wd,jo);class Yd{constructor(t,e){this.id=E(),this.file=t,this._adapter=e,this._reader=new qd,this.set("status","idle"),this.set("uploaded",0),this.set("uploadTotal",null),this.bind("uploadedPercent").to(this,"uploaded",this,"uploadTotal",(t,e)=>e?t/e*100:0),this.set("uploadResponse",null)}read(){if("idle"!=this.status)throw new M.b("filerepository-read-wrong-status: You cannot call read if the status is different than idle.");return this.status="reading",this._reader.read(this.file).then(t=>(this.status="idle",t)).catch(t=>{if("aborted"===t)throw this.status="aborted","aborted";throw this.status="error",this._reader.error})}upload(){if("idle"!=this.status)throw new M.b("filerepository-upload-wrong-status: You cannot call upload if the status is different than idle.");return this.status="uploading",this._adapter.upload().then(t=>(this.uploadResponse=t,this.status="idle",t)).catch(t=>{if("aborted"===this.status)throw"aborted";throw this.status="error",t})}abort(){const t=this.status;this.status="aborted","reading"==t&&this._reader.abort(),"uploading"==t&&this._adapter.abort&&this._adapter.abort(),this._destroy()}_destroy(){this._reader=void 0,this._adapter=void 0,this.data=void 0,this.uploadResponse=void 0,this.file=void 0}}B(Yd,jo);const Gd="ckCsrfToken",$d=40,Qd="abcdefghijklmnopqrstuvwxyz0123456789";function Jd(){let t=function(t){t=t.toLowerCase();const e=document.cookie.split(";");for(const n of e){const e=n.split("="),o=decodeURIComponent(e[0].trim().toLowerCase());if(o===t)return decodeURIComponent(e[1])}return null}(Gd);return t&&t.length==$d||(t=function(t){let e="";const n=new Uint8Array(t);window.crypto.getRandomValues(n);for(let t=0;t<n.length;t++){const o=Qd.charAt(n[t]%Qd.length);e+=Math.random()>.5?o.toUpperCase():o}return e}($d),function(t,e){document.cookie=encodeURIComponent(t)+"="+encodeURIComponent(e)+";path=/"}(Gd,t)),t}class Kd{constructor(t,e,n){this.loader=t,this.url=e,this.t=n}upload(){return new Promise((t,e)=>{this._initRequest(),this._initListeners(t,e),this._sendRequest()})}abort(){this.xhr&&this.xhr.abort()}_initRequest(){const t=this.xhr=new XMLHttpRequest;t.open("POST",this.url,!0),t.responseType="json"}_initListeners(t,e){const n=this.xhr,o=this.loader,i=(0,this.t)("a")+` ${o.file.name}.`;n.addEventListener("error",()=>e(i)),n.addEventListener("abort",()=>e()),n.addEventListener("load",()=>{const o=n.response;if(!o||!o.uploaded)return e(o&&o.error&&o.error.message?o.error.message:i);t({default:o.url})}),n.upload&&n.upload.addEventListener("progress",t=>{t.lengthComputable&&(o.uploadTotal=t.total,o.uploaded=t.loaded)})}_sendRequest(){const t=new FormData;t.append("upload",this.loader.file),t.append("ckCsrfToken",Jd()),this.xhr.send(t)}}class Zd{constructor(t,e,n){let o;if("function"==typeof n)o=n;else{const e=n;o=(()=>{t.execute(e)})}t.model.document.on("change",(n,i)=>{if("transparent"==i.type)return;const r=Array.from(t.model.document.differ.getChanges()),s=r[0];if(1!=r.length||"insert"!==s.type||"$text"!=s.name||1!=s.length)return;const a=s.position.textNode||s.position.nodeAfter;if(!a.parent.is("paragraph"))return;const c=e.exec(a.data);c&&t.model.enqueueChange(t=>{const e=qs.createFromParentsAndOffsets(a.parent,0,a.parent,c[0].length);t.remove(e),o({match:c})})})}}class Xd{constructor(t,e,n){let o,i,r,s;e instanceof RegExp?o=e:r=e,"string"==typeof n?i=n:s=n,r=r||(t=>{let e;const n=[],i=[];for(;null!==(e=o.exec(t))&&!(e&&e.length<4);){let{index:t,1:o,2:r,3:s}=e;const a=o+r+s,c=[t+=e[0].length-a.length,t+o.length],l=[t+o.length+r.length,t+o.length+r.length+s.length];n.push(c),n.push(l),i.push([t+o.length,t+o.length+r.length])}return{remove:n,format:i}}),s=s||((t,e)=>{for(const n of e)t.setAttribute(i,!0,n);t.removeSelectionAttribute(i)}),t.model.document.on("change",(e,n)=>{if("transparent"==n.type)return;const o=t.model.document.selection;if(!o.isCollapsed)return;const a=Array.from(t.model.document.differ.getChanges()),c=a[0];if(1!=a.length||"insert"!==c.type||"$text"!=c.name||1!=c.length)return;const l=o.focus.parent,d=function(t){return Array.from(t.getChildren()).reduce((t,e)=>t+e.data,"")}(l).slice(0,o.focus.offset),u=r(d),h=tu(l,u.format),f=tu(l,u.remove);h.length&&f.length&&t.model.enqueueChange(e=>{const n=t.model.schema.getValidRanges(h,i);s(e,n);for(const t of f.reverse())e.remove(t)})})}}function tu(t,e){return e.filter(t=>void 0!==t[0]&&void 0!==t[1]).map(e=>qs.createFromParentsAndOffsets(t,e[0],t,e[1]))}class eu extends ql{constructor(t,e){super(t),this.attributeKey=e}refresh(){const t=this.editor.model,e=t.document;this.value=this._getValueFromFirstAllowedNode(),this.isEnabled=t.schema.checkAttributeInSelection(e.selection,this.attributeKey)}execute(t={}){const e=this.editor.model,n=e.document.selection,o=void 0===t.forceValue?!this.value:t.forceValue;e.change(t=>{if(n.isCollapsed)o?t.setSelectionAttribute(this.attributeKey,!0):t.removeSelectionAttribute(this.attributeKey);else{const i=e.schema.getValidRanges(n.getRanges(),this.attributeKey);for(const e of i)o?t.setAttribute(this.attributeKey,o,e):t.removeAttribute(this.attributeKey,e)}})}_getValueFromFirstAllowedNode(){const t=this.editor.model,e=t.schema,n=t.document.selection;if(n.isCollapsed)return n.hasAttribute(this.attributeKey);for(const t of n.getRanges())for(const n of t.getItems())if(e.checkAttribute(n,this.attributeKey))return n.hasAttribute(this.attributeKey);return!1}}const nu="bold";class ou extends Fl{init(){const t=this.editor;t.model.schema.extend("$text",{allowAttributes:nu}),t.conversion.attributeToElement({model:nu,view:"strong",upcastAlso:["b",{styles:{"font-weight":"bold"}}]}),t.commands.add(nu,new eu(t,nu)),t.keystrokes.set("CTRL+B",nu)}}var iu=n(22),ru=n.n(iu);const su="bold";class au extends Fl{init(){const t=this.editor,e=t.t;t.ui.componentFactory.add(su,n=>{const o=t.commands.get(su),i=new Ld(n);return i.set({label:e("b"),icon:ru.a,keystroke:"CTRL+B",tooltip:!0}),i.bind("isOn","isEnabled").to(o,"value","isEnabled"),this.listenTo(i,"execute",()=>t.execute(su)),i})}}const cu="italic";class lu extends Fl{init(){const t=this.editor;t.model.schema.extend("$text",{allowAttributes:cu}),t.conversion.attributeToElement({model:cu,view:"i",upcastAlso:["em",{styles:{"font-style":"italic"}}]}),t.commands.add(cu,new eu(t,cu)),t.keystrokes.set("CTRL+I",cu)}}var du=n(23),uu=n.n(du);const hu="italic";class fu extends Fl{init(){const t=this.editor,e=t.t;t.ui.componentFactory.add(hu,n=>{const o=t.commands.get(hu),i=new Ld(n);return i.set({label:e("d"),icon:uu.a,keystroke:"CTRL+I",tooltip:!0}),i.bind("isOn","isEnabled").to(o,"value","isEnabled"),this.listenTo(i,"execute",()=>t.execute(hu)),i})}}function mu(t){const e=t.next();return e.done?null:e.value}class pu extends ql{refresh(){this.value=this._getValue(),this.isEnabled=this._checkEnabled()}execute(){const t=this.editor.model,e=t.document,n=t.schema,o=Array.from(e.selection.getSelectedBlocks());t.change(t=>{if(this.value)this._removeQuote(t,o.filter(gu));else{const e=o.filter(t=>gu(t)||wu(n,t));this._applyQuote(t,e)}})}_getValue(){const t=mu(this.editor.model.document.selection.getSelectedBlocks());return!(!t||!gu(t))}_checkEnabled(){if(this.value)return!0;const t=this.editor.model.document.selection,e=this.editor.model.schema,n=mu(t.getSelectedBlocks());return!!n&&wu(e,n)}_removeQuote(t,e){bu(e).reverse().forEach(e=>{if(e.start.isAtStart&&e.end.isAtEnd)return void t.unwrap(e.start.parent);if(e.start.isAtStart){const n=Hs.createBefore(e.start.parent);return void t.move(e,n)}e.end.isAtEnd||t.split(e.end);const n=Hs.createAfter(e.end.parent);t.move(e,n)})}_applyQuote(t,e){const n=[];bu(e).reverse().forEach(e=>{let o=gu(e.start);o||(o=new Fs("blockQuote"),t.wrap(e,o)),n.push(o)}),n.reverse().reduce((e,n)=>e.nextSibling==n?(t.merge(Hs.createAfter(e)),e):n)}}function gu(t){return"blockQuote"==t.parent.name?t.parent:null}function bu(t){let e,n=0;const o=[];for(;n<t.length;){const i=t[n],r=t[n+1];e||(e=Hs.createBefore(i)),r&&i.nextSibling==r||(o.push(new qs(e,Hs.createAfter(i))),e=null),n++}return o}function wu(t,e){const n=t.checkChild(e.parent,"blockQuote"),o=t.checkChild(["$root","blockQuote"],e);return n&&o}class _u extends Fl{init(){const t=this.editor,e=t.model.schema;t.commands.add("blockQuote",new pu(t)),e.register("blockQuote",{allowWhere:"$block",allowContentOf:"$root"}),e.addChildCheck((t,e)=>{if(t.endsWith("blockQuote")&&"blockQuote"==e.name)return!1}),t.conversion.elementToElement({model:"blockQuote",view:"blockquote"}),t.model.document.registerPostFixer(n=>{const o=t.model.document.differ.getChanges();for(const t of o)if("insert"==t.type){const o=t.position.nodeAfter;if(!o)continue;if(o.is("blockQuote")&&o.isEmpty)return n.remove(o),!0;if(o.is("blockQuote")&&!e.checkChild(t.position,o))return n.unwrap(o),!0;if(o.is("element")){const t=qs.createIn(o);for(const o of t.getItems())if(o.is("blockQuote")&&!e.checkChild(Hs.createBefore(o),o))return n.unwrap(o),!0}}else if("remove"==t.type){const e=t.position.parent;if(e.is("blockQuote")&&e.isEmpty)return n.remove(e),!0}return!1})}afterInit(){const t=this.editor.commands.get("blockQuote");this.listenTo(this.editor.editing.view.document,"enter",(e,n)=>{const o=this.editor.model.document,i=o.selection.getLastPosition().parent;o.selection.isCollapsed&&i.isEmpty&&t.value&&(this.editor.execute("blockQuote"),this.editor.editing.view.scrollToTheSelection(),n.preventDefault(),e.stop())})}}var ku=n(24),vu=n.n(ku);n(61);class yu extends Fl{init(){const t=this.editor,e=t.t;t.ui.componentFactory.add("blockQuote",n=>{const o=t.commands.get("blockQuote"),i=new Ld(n);return i.set({label:e("c"),icon:vu.a,tooltip:!0}),i.bind("isOn","isEnabled").to(o,"value","isEnabled"),this.listenTo(i,"execute",()=>t.execute("blockQuote")),i})}}const xu=/^data:(\S*?);base64,/;class Au{constructor(t,e,n){if(!t)throw new Error("File must be provided");if(!e)throw new Error("Token must be provided");if(!n)throw new Error("Api address must be provided");this.file=function(t){if("string"!=typeof t)return!1;const e=t.match(xu);return!(!e||!e.length)}(t)?function(t,e=512){try{const n=t.match(xu)[1],o=atob(t.replace(xu,"")),i=[];for(let t=0;t<o.length;t+=e){const n=o.slice(t,t+e),r=new Array(n.length);for(let t=0;t<n.length;t++)r[t]=n.charCodeAt(t);i.push(new Uint8Array(r))}return new Blob(i,{type:n})}catch(t){throw new Error("Problem with decoding Base64 image data.")}}(t):t,this._token=e,this._apiAddress=n}onProgress(t){return this.on("progress",(e,n)=>t(n)),this}onError(t){return this.once("error",(e,n)=>t(n)),this}abort(){this.xhr.abort()}send(){return this._prepareRequest(),this._attachXHRListeners(),this._sendRequest()}_prepareRequest(){const t=new XMLHttpRequest;t.open("POST",this._apiAddress),t.setRequestHeader("Authorization",this._token.value),t.responseType="json",this.xhr=t}_attachXHRListeners(){const t=this,e=this.xhr;function n(e){return()=>t.fire("error",e)}e.addEventListener("error",n("Network Error")),e.addEventListener("abort",n("Abort")),e.upload&&e.upload.addEventListener("progress",t=>{t.lengthComputable&&this.fire("progress",{total:t.total,uploaded:t.loaded})}),e.addEventListener("load",()=>{const t=e.status,n=e.response;if(t<200||t>299)return this.fire("error",n.message||n.error)})}_sendRequest(){const t=new FormData,e=this.xhr;return t.append("file",this.file),new Promise((n,o)=>{e.addEventListener("load",()=>{const t=e.status,i=e.response;return t<200||t>299?o(i.message||i.error):n(i)}),e.addEventListener("error",()=>o("Network Error")),e.addEventListener("abort",()=>o("Abort")),e.send(t)})}}B(Au,R);var Cu=Au;const Tu={refreshInterval:36e5,autoRefresh:!0};class Mu{constructor(t,e=Tu){if(!t)throw new Error("`tokenUrl` must be provided");this.set("value",e.initValue),this._tokenUrl=t,this._options=Object.assign({},Tu,e)}init(){return new Promise((t,e)=>{this._options.autoRefresh&&this._startRefreshing(),this.value?t(this):this._refreshToken().then(t).catch(e)})}_refreshToken(){return new Promise((t,e)=>{const n=new XMLHttpRequest;n.open("GET",this._tokenUrl),n.addEventListener("load",()=>{const o=n.status,i=n.response;return o<200||o>299?e("Cannot download new token!"):(this.set("value",i),t(this))}),n.addEventListener("error",()=>e("Network Error")),n.addEventListener("abort",()=>e("Abort")),n.send()})}_startRefreshing(){this._refreshInterval=setInterval(this._refreshToken.bind(this),this._options.refreshInterval)}_stopRefreshing(){clearInterval(this._refreshInterval)}static create(t,e=Tu){return new Mu(t,e).init()}}B(Mu,jo);var Pu=Mu;class Su extends Fl{static get pluginName(){return"CloudServices"}init(){const t=this.editor.config.get("cloudServices")||{};for(const e in t)this[e]=t[e];if(this.tokenUrl)return this.token=new Su.Token(this.tokenUrl),this.token.init();this.token=null}}Su.Token=Pu;class Eu extends Fl{static get requires(){return[Wd,Su]}init(){const t=this.editor,e=t.plugins.get(Su),n=e.token,o=e.uploadUrl;n&&(this._uploadGateway=new Eu._UploadGateway(n,o),t.plugins.get(Wd).createUploadAdapter=(t=>new Iu(this._uploadGateway,t)))}}class Iu{constructor(t,e){this.uploadGateway=t,this.loader=e}upload(){return this.fileUploader=this.uploadGateway.upload(this.loader.file),this.fileUploader.on("progress",(t,e)=>{this.loader.uploadTotal=e.total,this.loader.uploaded=e.uploaded}),this.fileUploader.send()}abort(){this.fileUploader.abort()}}Eu._UploadGateway=class{constructor(t,e){if(!t)throw new Error("Token must be provided");if(!e)throw new Error("Api address must be provided");this._token=t,this._apiAddress=e}upload(t){return new Cu(t,this._token,this._apiAddress)}};class Nu extends cr{constructor(t){super(t),this._observedElements=new Set}observe(t,e){this.document.getRoot(e).on("change:children",(e,n)=>{this.view.once("render",()=>this._updateObservedElements(t,n))})}_updateObservedElements(t,e){if(!e.is("element")||e.is("attributeElement"))return;const n=this.view.domConverter.mapViewToDom(e);if(n){for(const t of n.querySelectorAll("img"))this._observedElements.has(t)||(this.listenTo(t,"load",(t,e)=>this._fireEvents(e)),this._observedElements.add(t));for(const e of this._observedElements)t.contains(e)||(this.stopListening(e),this._observedElements.delete(e))}}_fireEvents(t){this.isEnabled&&(this.document.fire("layoutChanged"),this.document.fire("imageLoaded",t))}destroy(){this._observedElements.clear(),super.destroy()}}function Ou(t){return n=>{n.on(`attribute:${t}:image`,e)};function e(t,e,n){if(!n.consumable.consume(e.item,t.name))return;const o=n.writer,i=n.mapper.toViewElement(e.item).getChild(0);null!==e.attributeNewValue?o.setAttribute(e.attributeKey,e.attributeNewValue,i):o.removeAttribute(e.attributeKey,i)}}class Ru{constructor(){this._stack=[]}add(t,e){const n=this._stack,o=n[0];this._insertDescriptor(t);const i=n[0];o===i||Du(o,i)||this.fire("change:top",{oldDescriptor:o,newDescriptor:i,writer:e})}remove(t,e){const n=this._stack,o=n[0];this._removeDescriptor(t);const i=n[0];o===i||Du(o,i)||this.fire("change:top",{oldDescriptor:o,newDescriptor:i,writer:e})}_insertDescriptor(t){const e=this._stack,n=e.findIndex(e=>e.id===t.id);if(Du(t,e[n]))return;n>-1&&e.splice(n,1);let o=0;for(;e[o]&&Lu(e[o],t);)o++;e.splice(o,0,t)}_removeDescriptor(t){const e=this._stack,n=e.findIndex(e=>e.id===t);n>-1&&e.splice(n,1)}}function Du(t,e){return t&&e&&t.priority==e.priority&&ju(t.classes)==ju(e.classes)}function Lu(t,e){return t.priority>e.priority||!(t.priority<e.priority)&&ju(t.classes)>ju(e.classes)}function ju(t){return Array.isArray(t)?t.sort().join(","):t}B(Ru,R);var Vu=n(25),Fu=n.n(Vu);const zu=Symbol("isWidget"),Bu=Symbol("label"),Uu="ck-widget",Hu="ck-widget_selected";function qu(t){return!!t.getCustomProperty(zu)}function Wu(t,e,n={}){return li.isEdge||e.setAttribute("contenteditable","false",t),e.addClass(Uu,t),e.setCustomProperty(zu,!0,t),t.getFillerOffset=Qu,n.label&&function(t,e,n){n.setCustomProperty(Bu,e,t)}(t,n.label,e),n.hasSelectionHandler&&function(t,e){const n=e.createUIElement("div",{class:"ck ck-widget__selection-handler"},function(t){const e=this.toDomElement(t),n=new Rd;return n.set("content",Fu.a),n.render(),e.appendChild(n.element),e});e.insert($o.createAt(t),n),e.addClass(["ck-widget_selectable"],t)}(t,e),function(t,e,n,o){const i=new Ru;i.on("change:top",(e,i)=>{i.oldDescriptor&&o(t,i.oldDescriptor,i.writer),i.newDescriptor&&n(t,i.newDescriptor,i.writer)}),e.setCustomProperty("addHighlight",(t,e,n)=>i.add(e,n),t),e.setCustomProperty("removeHighlight",(t,e,n)=>i.remove(e,n),t)}(t,e,(t,e,n)=>n.addClass(o(e.classes),t),(t,e,n)=>n.removeClass(o(e.classes),t)),t;function o(t){return Array.isArray(t)?t:[t]}}function Yu(t){const e=t.getCustomProperty(Bu);return e?"function"==typeof e?e():e:""}function Gu(t,e){return e.addClass(["ck-editor__editable","ck-editor__nested-editable"],t),li.isEdge||(e.setAttribute("contenteditable",t.isReadOnly?"false":"true",t),t.on("change:isReadOnly",(n,o,i)=>{e.setAttribute("contenteditable",i?"false":"true",t)})),t.on("change:isFocused",(n,o,i)=>{i?e.addClass("ck-editor__nested-editable_focused",t):e.removeClass("ck-editor__nested-editable_focused",t)}),t}function $u(t){const e=t.getSelectedElement();if(e)return Hs.createAfter(e);const n=t.getSelectedBlocks().next().value;if(n){if(n.isEmpty)return Hs.createAt(n);const e=Hs.createAfter(n);return t.focus.isTouching(e)?e:Hs.createBefore(n)}return t.focus}function Qu(){return null}const Ju=Symbol("isImage");function Ku(t){const e=t.getSelectedElement();return!(!e||!function(t){return!!t.getCustomProperty(Ju)&&qu(t)}(e))}function Zu(t){return t instanceof Fs&&"image"==t.name}class Xu extends Fl{init(){const t=this.editor,e=t.model.schema,n=t.t,o=t.conversion;t.editing.view.addObserver(Nu),e.register("image",{isObject:!0,isBlock:!0,allowWhere:"$block",allowAttributes:["alt","src","srcset"]}),o.for("dataDowncast").add(aa({model:"image",view:(t,e)=>th(e)})),o.for("editingDowncast").add(aa({model:"image",view:(t,e)=>(function(t,e,n){return e.setCustomProperty(Ju,!0,t),Wu(t,e,{label:function(){const e=t.getChild(0).getAttribute("alt");return e?`${e} ${n}`:n}})})(th(e),e,n("ak"))})),o.for("downcast").add(Ou("src")).add(Ou("alt")).add(function(){return e=>{e.on("attribute:srcset:image",t)};function t(t,e,n){if(!n.consumable.consume(e.item,t.name))return;const o=n.writer,i=n.mapper.toViewElement(e.item).getChild(0);if(null===e.attributeNewValue){const t=e.attributeOldValue;t.data&&(o.removeAttribute("srcset",i),o.removeAttribute("sizes",i),t.width&&o.removeAttribute("width",i))}else{const t=e.attributeNewValue;t.data&&(o.setAttribute("srcset",t.data,i),o.setAttribute("sizes","100vw",i),t.width&&o.setAttribute("width",t.width,i))}}}()),o.for("upcast").add(Oa({view:{name:"img",attributes:{src:!0}},model:(t,e)=>e.createElement("image",{src:t.getAttribute("src")})})).add(Da({view:{name:"img",key:"alt"},model:"alt"})).add(Da({view:{name:"img",key:"srcset"},model:{key:"srcset",value:t=>{const e={data:t.getAttribute("srcset")};return t.hasAttribute("width")&&(e.width=t.getAttribute("width")),e}}})).add(function(){return e=>{e.on("element:figure",t)};function t(t,e,n){if(!n.consumable.test(e.viewItem,{name:!0,classes:"image"}))return;const o=Array.from(e.viewItem.getChildren()).find(t=>t.is("img"));if(!o||!o.hasAttribute("src")||!n.consumable.test(o,{name:!0}))return;const i=n.convertItem(o,e.modelCursor),r=mu(i.modelRange.getItems());r&&(n.convertChildren(e.viewItem,Hs.createAt(r)),e.modelRange=i.modelRange,e.modelCursor=i.modelCursor)}}())}}function th(t){const e=t.createEmptyElement("img"),n=t.createContainerElement("figure",{class:"image"});return t.insert($o.createAt(n),e),n}class eh extends Jr{constructor(t){super(t),this.domEventType="mousedown"}onDomEvent(t){this.fire(t.type,t)}}n(63);const nh=mi("Ctrl+A");class oh extends Fl{static get pluginName(){return"Widget"}init(){const t=this.editor.editing.view,e=t.document;this._previouslySelected=new Set,this.editor.editing.downcastDispatcher.on("selection",(t,e,n)=>{this._clearPreviouslySelectedWidgets(n.writer);const o=n.writer,i=o.document.selection,r=i.getSelectedElement();for(const t of i.getRanges())for(const e of t){const t=e.item;t.is("element")&&qu(t)&&(o.addClass(Hu,t),this._previouslySelected.add(t),t==r&&o.setSelection(i.getRanges(),{fake:!0,label:Yu(r)}))}},{priority:"low"}),t.addObserver(eh),this.listenTo(e,"mousedown",(...t)=>this._onMousedown(...t)),this.listenTo(e,"keydown",(...t)=>this._onKeydown(...t),{priority:"high"}),this.listenTo(e,"delete",(t,e)=>{this._handleDelete("forward"==e.direction)&&(e.preventDefault(),t.stop())},{priority:"high"})}_onMousedown(t,e){const n=this.editor,o=n.editing.view,i=o.document;let r=e.target;if(function(t){for(;t;){if(t instanceof qo&&!(t instanceof Yo))return!0;t=t.parent}return!1}(r))return;if(!qu(r)&&!(r=r.findAncestor(qu)))return;e.preventDefault(),i.isFocused||o.focus();const s=n.editing.mapper.toModelElement(r);this._setSelectionOverElement(s)}_onKeydown(t,e){const n=e.keyCode,o=n==hi.delete||n==hi.arrowdown||n==hi.arrowright;let i=!1;!function(t){return t==hi.arrowright||t==hi.arrowleft||t==hi.arrowup||t==hi.arrowdown}(n)?!function(t){return fi(t)==nh}(e)?n===hi.enter&&(i=this._handleEnterKey(e.shiftKey)):i=this._selectAllNestedEditableContent()||this._selectAllContent():i=this._handleArrowKeys(o),i&&(e.preventDefault(),t.stop())}_handleDelete(t){if(this.editor.isReadOnly)return;const e=this.editor.model.document.selection;if(!e.isCollapsed)return;const n=this._getObjectElementNextToSelection(t);return n?(this.editor.model.change(t=>{let o=e.anchor.parent;for(;o.isEmpty;){const e=o;o=e.parent,t.remove(e)}this._setSelectionOverElement(n)}),!0):void 0}_handleArrowKeys(t){const e=this.editor.model,n=e.schema,o=e.document.selection,i=o.getSelectedElement();if(i&&n.isObject(i)){const i=t?o.getLastPosition():o.getFirstPosition(),r=n.getNearestSelectionRange(i,t?"forward":"backward");return r&&e.change(t=>{t.setSelection(r)}),!0}if(!o.isCollapsed)return;const r=this._getObjectElementNextToSelection(t);return r instanceof Fs&&n.isObject(r)?(this._setSelectionOverElement(r),!0):void 0}_handleEnterKey(t){const e=this.editor.model,n=e.document.selection.getSelectedElement();if(n&&e.schema.isObject(n))return e.change(e=>{const o=e.createElement("paragraph");e.insert(o,n,t?"before":"after"),e.setSelection(o,"in")}),!0}_selectAllNestedEditableContent(){const t=this.editor.model,e=t.document.selection,n=t.schema.getLimitElement(e);return e.getFirstRange().root!=n&&(t.change(t=>{t.setSelection(qs.createIn(n))}),!0)}_selectAllContent(){const t=this.editor.model,e=this.editor.editing,n=e.view.document.selection.getSelectedElement();if(n&&qu(n)){const o=e.mapper.toModelElement(n.parent);return t.change(t=>{t.setSelection(qs.createIn(o))}),!0}return!1}_setSelectionOverElement(t){this.editor.model.change(e=>{e.setSelection(qs.createOn(t))})}_getObjectElementNextToSelection(t){const e=this.editor.model,n=e.schema,o=e.document.selection,i=new Js(o);e.modifySelection(i,{direction:t?"forward":"backward"});const r=t?i.focus.nodeBefore:i.focus.nodeAfter;return r instanceof Fs&&n.isObject(r)?r:null}_clearPreviouslySelectedWidgets(t){for(const e of this._previouslySelected)t.removeClass(Hu,e);this._previouslySelected.clear()}}class ih extends ql{refresh(){const t=this.editor.model.document.selection.getSelectedElement();this.isEnabled=Zu(t),Zu(t)&&t.hasAttribute("alt")?this.value=t.getAttribute("alt"):this.value=!1}execute(t){const e=this.editor.model,n=e.document.selection.getSelectedElement();e.change(e=>{e.setAttribute("alt",t.newValue,n)})}}class rh extends Fl{init(){this.editor.commands.add("imageTextAlternative",new ih(this.editor))}}function sh({emitter:t,activator:e,callback:n,contextElements:o}){t.listenTo(document,"mousedown",(t,{target:i})=>{if(e()){for(const t of o)if(t.contains(i))return;n()}})}n(65);class ah extends xl{constructor(t,e){super(t);const n=`ck-input-${E()}`,o=`ck-error-${E()}`;this.set("label"),this.set("value"),this.set("isReadOnly",!1),this.set("errorText",null),this.labelView=this._createLabelView(n),this.inputView=this._createInputView(e,n,o),this.errorView=this._createErrorView(o);const i=this.bindTemplate;this.setTemplate({tag:"div",attributes:{class:["ck","ck-labeled-input",i.if("isReadOnly","ck-disabled")]},children:[this.labelView,this.inputView,this.errorView]})}_createLabelView(t){const e=new Cl(this.locale);return e.for=t,e.bind("text").to(this,"label"),e}_createInputView(t,e,n){const o=new t(this.locale,n);return o.id=e,o.ariaDesribedById=n,o.bind("value").to(this),o.bind("isReadOnly").to(this),o.bind("hasError").to(this,"errorText",t=>!!t),o.on("input",()=>{this.errorText=null}),o}_createErrorView(t){const e=new xl(this.locale),n=this.bindTemplate;return e.setTemplate({tag:"div",attributes:{class:["ck","ck-labeled-input__error",n.if("errorText","ck-hidden",t=>!t)],id:t},children:[{text:n.to("errorText")}]}),e}select(){this.inputView.select()}focus(){this.inputView.focus()}}n(67);class ch extends xl{constructor(t){super(t),this.set("value"),this.set("id"),this.set("placeholder"),this.set("isReadOnly",!1),this.set("hasError",!1),this.set("ariaDesribedById");const e=this.bindTemplate;this.setTemplate({tag:"input",attributes:{type:"text",class:["ck","ck-input","ck-input-text",e.if("hasError","ck-error")],id:e.to("id"),placeholder:e.to("placeholder"),readonly:e.to("isReadOnly"),"aria-invalid":e.if("hasError",!0),"aria-describedby":e.to("ariaDesribedById")},on:{input:e.to("input")}})}render(){super.render();const t=t=>{this.element.value=t||0===t?t:""};t(this.value),this.on("change:value",(e,n,o)=>{t(o)})}select(){this.element.select()}focus(){this.element.focus()}}function lh({view:t}){t.listenTo(t.element,"submit",(e,n)=>{n.preventDefault(),t.fire("submit")},{useCapture:!0})}var dh=n(7),uh=n.n(dh),hh=n(8),fh=n.n(hh);n(69);class mh extends xl{constructor(t){super(t);const e=this.locale.t;this.focusTracker=new Kc,this.keystrokes=new Uc,this.labeledInput=this._createLabeledInputView(),this.saveButtonView=this._createButton(e("aw"),uh.a,"ck-button-save"),this.saveButtonView.type="submit",this.cancelButtonView=this._createButton(e("ax"),fh.a,"ck-button-cancel","cancel"),this._focusables=new tl,this._focusCycler=new Nl({focusables:this._focusables,focusTracker:this.focusTracker,keystrokeHandler:this.keystrokes,actions:{focusPrevious:"shift + tab",focusNext:"tab"}}),this.setTemplate({tag:"form",attributes:{class:["ck","ck-text-alternative-form"],tabindex:"-1"},children:[this.labeledInput,this.saveButtonView,this.cancelButtonView]})}render(){super.render(),this.keystrokes.listenTo(this.element),lh({view:this}),[this.labeledInput,this.saveButtonView,this.cancelButtonView].forEach(t=>{this._focusables.add(t),this.focusTracker.add(t.element)})}_createButton(t,e,n,o){const i=new Ld(this.locale);return i.set({label:t,icon:e,tooltip:!0}),i.extendTemplate({attributes:{class:n}}),o&&i.delegate("execute").to(this,o),i}_createLabeledInputView(){const t=this.locale.t,e=new ah(this.locale,ch);return e.label=t("ay"),e.inputView.placeholder=t("ay"),e}}function ph(t,e,n){const{left:o,top:i,name:r}=t(e,n);return[r,n.clone().moveTo(o,i)]}function gh({left:t,top:e}){const{scrollX:n,scrollY:o}=Ki.window;return{left:t+n,top:e+o}}n(71);const bh=Sl("px"),wh=Ki.document.body;class _h extends xl{constructor(t){super(t);const e=this.bindTemplate;this.set("top",0),this.set("left",0),this.set("position","arrow_nw"),this.set("isVisible",!1),this.set("withArrow",!0),this.set("className"),this.content=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-balloon-panel",e.to("position",t=>`ck-balloon-panel_${t}`),e.if("isVisible","ck-balloon-panel_visible"),e.if("withArrow","ck-balloon-panel_with-arrow"),e.to("className")],style:{top:e.to("top",bh),left:e.to("left",bh)}},children:this.content})}show(){this.isVisible=!0}hide(){this.isVisible=!1}attachTo(t){this.show();const e=_h.defaultPositions,n=Object.assign({},{element:this.element,positions:[e.southArrowNorth,e.southArrowNorthWest,e.southArrowNorthEast,e.northArrowSouth,e.northArrowSouthWest,e.northArrowSouthEast],limiter:wh,fitInViewport:!0},t),{top:o,left:i,name:r}=_h._getOptimalPosition(n);Object.assign(this,{top:o,left:i,position:r})}pin(t){this.unpin(),this._pinWhenIsVisibleCallback=(()=>{this.isVisible?this._startPinning(t):this._stopPinning()}),this._startPinning(t),this.listenTo(this,"change:isVisible",this._pinWhenIsVisibleCallback)}unpin(){this._pinWhenIsVisibleCallback&&(this._stopPinning(),this.stopListening(this,"change:isVisible",this._pinWhenIsVisibleCallback),this._pinWhenIsVisibleCallback=null,this.hide())}_startPinning(t){this.attachTo(t);const e=kh(t.target),n=t.limiter?kh(t.limiter):wh;this.listenTo(Ki.document,"scroll",(o,i)=>{const r=i.target,s=e&&r.contains(e),a=n&&r.contains(n);!s&&!a&&e&&n||this.attachTo(t)},{useCapture:!0}),this.listenTo(Ki.window,"resize",()=>{this.attachTo(t)})}_stopPinning(){this.stopListening(Ki.document,"scroll"),this.stopListening(Ki.window,"resize")}}function kh(t){return tr(t)?t:bs(t)?t.commonAncestorContainer:"function"==typeof t?kh(t()):null}function vh(t,e){return t.top-e.height-_h.arrowVerticalOffset}function yh(t){return t.bottom+_h.arrowVerticalOffset}_h.arrowHorizontalOffset=25,_h.arrowVerticalOffset=10,_h._getOptimalPosition=function({element:t,target:e,positions:n,limiter:o,fitInViewport:i}){ct(e)&&(e=e()),ct(o)&&(o=o());const r=function(t){for(;t&&"html"!=t.tagName.toLowerCase();){if("static"!=Ki.window.getComputedStyle(t).position)return t;t=t.parentElement}return null}(t.parentElement),s=new ks(t),a=new ks(e);let c,l;if(o||i){const t=o&&new ks(o).getVisible(),e=i&&new ks(Ki.window);[l,c]=function(t,e,n,o,i){let r,s,a=0,c=0;const l=n.getArea();return t.some(t=>{const[d,u]=ph(t,e,n);let h,f;if(o)if(i){const t=o.getIntersection(i);h=t?t.getIntersectionArea(u):0}else h=o.getIntersectionArea(u);function m(){c=f,a=h,r=u,s=d}return i&&(f=i.getIntersectionArea(u)),i&&!o?f>c&&m():!i&&o?h>a&&m():f>c&&h>=a?m():f>=c&&h>a&&m(),h===l}),r?[s,r]:null}(n,a,s,t,e)||ph(n[0],a,s)}else[l,c]=ph(n[0],a,s);let{left:d,top:u}=gh(c);if(r){const t=gh(new ks(r)),e=ws(r);d-=t.left,u-=t.top,d+=r.scrollLeft,u+=r.scrollTop,d-=e.left,u-=e.top}return{left:d,top:u,name:l}},_h.defaultPositions={northArrowSouth:(t,e)=>({top:vh(t,e),left:t.left+t.width/2-e.width/2,name:"arrow_s"}),northArrowSouthEast:(t,e)=>({top:vh(t,e),left:t.left+t.width/2-e.width+_h.arrowHorizontalOffset,name:"arrow_se"}),northArrowSouthWest:(t,e)=>({top:vh(t,e),left:t.left+t.width/2-_h.arrowHorizontalOffset,name:"arrow_sw"}),northWestArrowSouth:(t,e)=>({top:vh(t,e),left:t.left-e.width/2,name:"arrow_s"}),northWestArrowSouthWest:(t,e)=>({top:vh(t,e),left:t.left-_h.arrowHorizontalOffset,name:"arrow_sw"}),northWestArrowSouthEast:(t,e)=>({top:vh(t,e),left:t.left-e.width+_h.arrowHorizontalOffset,name:"arrow_se"}),northEastArrowSouth:(t,e)=>({top:vh(t,e),left:t.right-e.width/2,name:"arrow_s"}),northEastArrowSouthEast:(t,e)=>({top:vh(t,e),left:t.right-e.width+_h.arrowHorizontalOffset,name:"arrow_se"}),northEastArrowSouthWest:(t,e)=>({top:vh(t,e),left:t.right-_h.arrowHorizontalOffset,name:"arrow_sw"}),southArrowNorth:(t,e)=>({top:yh(t),left:t.left+t.width/2-e.width/2,name:"arrow_n"}),southArrowNorthEast:(t,e)=>({top:yh(t),left:t.left+t.width/2-e.width+_h.arrowHorizontalOffset,name:"arrow_ne"}),southArrowNorthWest:(t,e)=>({top:yh(t),left:t.left+t.width/2-_h.arrowHorizontalOffset,name:"arrow_nw"}),southWestArrowNorth:(t,e)=>({top:yh(t),left:t.left-e.width/2,name:"arrow_n"}),southWestArrowNorthWest:(t,e)=>({top:yh(t),left:t.left-_h.arrowHorizontalOffset,name:"arrow_nw"}),southWestArrowNorthEast:(t,e)=>({top:yh(t),left:t.left-e.width+_h.arrowHorizontalOffset,name:"arrow_ne"}),southEastArrowNorth:(t,e)=>({top:yh(t),left:t.right-e.width/2,name:"arrow_n"}),southEastArrowNorthEast:(t,e)=>({top:yh(t),left:t.right-e.width+_h.arrowHorizontalOffset,name:"arrow_ne"}),southEastArrowNorthWest:(t,e)=>({top:yh(t),left:t.right-_h.arrowHorizontalOffset,name:"arrow_nw"})};class xh extends Fl{static get pluginName(){return"ContextualBalloon"}init(){this.view=new _h,this.positionLimiter=(()=>{const t=this.editor.editing.view,e=t.document.selection.editableElement;return e?t.domConverter.mapViewToDom(e.root):null}),this._stack=new Map,this.editor.ui.view.body.add(this.view),this.editor.ui.focusTracker.add(this.view.element)}get visibleView(){const t=this._stack.get(this.view.content.get(0));return t?t.view:null}hasView(t){return this._stack.has(t)}add(t){if(this.hasView(t.view))throw new M.b("contextualballoon-add-view-exist: Cannot add configuration of the same view twice.");this.visibleView&&this.view.content.remove(this.visibleView),this._stack.set(t.view,t),this._show(t)}remove(t){if(!this.hasView(t))throw new M.b("contextualballoon-remove-view-not-exist: Cannot remove configuration of not existing view.");if(this.visibleView===t){this.view.content.remove(t),this._stack.delete(t);const e=Array.from(this._stack.values()).pop();e?this._show(e):this.view.hide()}else this._stack.delete(t)}updatePosition(t){t&&(this._stack.get(this.visibleView).position=t),this.view.pin(this._getBalloonPosition())}_show({view:t,balloonClassName:e=""}){this.view.className=e,this.view.content.add(t),this.view.pin(this._getBalloonPosition())}_getBalloonPosition(){let t=Array.from(this._stack.values()).pop().position;return t&&!t.limiter&&(t=Object.assign({},t,{limiter:this.positionLimiter})),t}}var Ah=n(26),Ch=n.n(Ah);function Th(t){const e=t.editing.view,n=_h.defaultPositions;return{target:e.domConverter.viewToDom(e.document.selection.getSelectedElement()),positions:[n.northArrowSouth,n.northArrowSouthWest,n.northArrowSouthEast,n.southArrowNorth,n.southArrowNorthWest,n.southArrowNorthEast]}}class Mh extends Fl{static get requires(){return[xh]}init(){this._createButton(),this._createForm()}_createButton(){const t=this.editor,e=t.t;t.ui.componentFactory.add("imageTextAlternative",n=>{const o=t.commands.get("imageTextAlternative"),i=new Ld(n);return i.set({label:e("ap"),icon:Ch.a,tooltip:!0}),i.bind("isEnabled").to(o,"isEnabled"),this.listenTo(i,"execute",()=>this._showForm()),i})}_createForm(){const t=this.editor,e=t.editing.view.document;this._balloon=this.editor.plugins.get("ContextualBalloon"),this._form=new mh(t.locale),this._form.render(),this.listenTo(this._form,"submit",()=>{t.execute("imageTextAlternative",{newValue:this._form.labeledInput.inputView.element.value}),this._hideForm(!0)}),this.listenTo(this._form,"cancel",()=>{this._hideForm(!0)}),this._form.keystrokes.set("Esc",(t,e)=>{this._hideForm(!0),e()}),this.listenTo(t.ui,"update",()=>{Ku(e.selection)?this._isVisible&&function(t){const e=t.plugins.get("ContextualBalloon");if(Ku(t.editing.view.document.selection)){const n=Th(t);e.updatePosition(n)}}(t):this._hideForm(!0)}),sh({emitter:this._form,activator:()=>this._isVisible,contextElements:[this._form.element],callback:()=>this._hideForm()})}_showForm(){if(this._isVisible)return;const t=this.editor,e=t.commands.get("imageTextAlternative"),n=this._form.labeledInput;this._balloon.hasView(this._form)||this._balloon.add({view:this._form,position:Th(t)}),n.value=n.inputView.element.value=e.value||"",this._form.labeledInput.select()}_hideForm(t){this._isVisible&&(this._balloon.remove(this._form),t&&this.editor.editing.view.focus())}get _isVisible(){return this._balloon.visibleView==this._form}}class Ph extends Fl{static get requires(){return[rh,Mh]}static get pluginName(){return"ImageTextAlternative"}}n(73);class Sh extends Fl{static get requires(){return[Xu,oh,Ph]}static get pluginName(){return"Image"}}class Eh extends xl{constructor(t){super(t),this.buttonView=new Ld(t),this._fileInputView=new Ih(t),this._fileInputView.bind("acceptedType").to(this),this._fileInputView.bind("allowMultipleFiles").to(this),this._fileInputView.delegate("done").to(this),this.setTemplate({tag:"span",attributes:{class:"ck-file-dialog-button"},children:[this.buttonView,this._fileInputView]}),this.buttonView.on("execute",()=>{this._fileInputView.open()})}focus(){this.buttonView.focus()}}class Ih extends xl{constructor(t){super(t),this.set("acceptedType"),this.set("allowMultipleFiles",!1);const e=this.bindTemplate;this.setTemplate({tag:"input",attributes:{class:["ck-hidden"],type:"file",tabindex:"-1",accept:e.to("acceptedType"),multiple:e.to("allowMultipleFiles")},on:{change:e.to(()=>{this.element&&this.element.files&&this.element.files.length&&this.fire("done",this.element.files),this.element.value=""})}})}open(){this.element.click()}}var Nh=n(27),Oh=n.n(Nh);function Rh(t){return/^image\/(jpeg|png|gif|bmp)$/.test(t.type)}class Dh extends Fl{init(){const t=this.editor,e=t.t;t.ui.componentFactory.add("imageUpload",n=>{const o=new Eh(n),i=t.commands.get("imageUpload");return o.set({acceptedType:"image/*",allowMultipleFiles:!0}),o.buttonView.set({label:e("e"),icon:Oh.a,tooltip:!0}),o.buttonView.bind("isEnabled").to(i),o.on("done",(e,n)=>{const o=Array.from(n).filter(Rh);o.length&&t.execute("imageUpload",{files:o})}),o})}}var Lh=n(28),jh=n.n(Lh);n(75),n(77),n(79);class Vh extends Fl{constructor(t){super(t),this.placeholder="data:image/svg+xml;utf8,"+encodeURIComponent(jh.a)}init(){this.editor.editing.downcastDispatcher.on("attribute:uploadStatus:image",(...t)=>this.uploadStatusChange(...t))}uploadStatusChange(t,e,n){const o=this.editor,i=e.item,r=i.getAttribute("uploadId");if(!n.consumable.consume(e.item,t.name))return;const s=o.plugins.get(Wd),a=r?e.attributeNewValue:null,c=this.placeholder,l=o.editing.mapper.toViewElement(i),d=n.writer;if("reading"==a)return Bh(l,d),void Uh(c,l,d);if("uploading"==a){const t=s.loaders.get(r);return Bh(l,d),void(t?(Hh(l,d),function(t,e,n,o){const i=function(t){const e=t.createUIElement("div",{class:"ck-progress-bar"});return t.setCustomProperty(Fh,!0,e),e}(e);e.insert($o.createAt(t,"end"),i),n.on("change:uploadedPercent",(t,e,n)=>{o.change(t=>{t.setStyle("width",n+"%",i)})})}(l,d,t,o.editing.view)):Uh(c,l,d))}"complete"==a&&s.loaders.get(r)&&!li.isEdge&&function(t,e,n){const o=new gi("div",{class:"ck-image-upload-complete-icon"});e.insert($o.createAt(t,"end"),o),setTimeout(()=>{n.change(t=>t.remove(Qo.createOn(o)))},3e3)}(l,d,o.editing.view),function(t,e){Wh(t,e,Fh)}(l,d),Hh(l,d),function(t,e){e.removeClass("ck-appear",t)}(l,d)}}const Fh=Symbol("progress-bar"),zh=Symbol("placeholder");function Bh(t,e){t.hasClass("ck-appear")||e.addClass("ck-appear",t)}function Uh(t,e,n){e.hasClass("ck-image-upload-placeholder")||n.addClass("ck-image-upload-placeholder",e);const o=e.getChild(0);o.getAttribute("src")!==t&&n.setAttribute("src",t,o),qh(e,zh)||n.insert($o.createAfter(o),function(t){const e=t.createUIElement("div",{class:"ck-upload-placeholder-loader"});return t.setCustomProperty(zh,!0,e),e}(n))}function Hh(t,e){t.hasClass("ck-image-upload-placeholder")&&e.removeClass("ck-image-upload-placeholder",t),Wh(t,e,zh)}function qh(t,e){for(const n of t.getChildren())if(n.getCustomProperty(e))return n}function Wh(t,e,n){const o=qh(t,n);o&&e.remove(Qo.createOn(o))}class Yh extends ql{refresh(){const t=this.editor.model,e=t.document.selection,n=t.schema;this.isEnabled=function(t,e){const n=function(t){let e=$u(t).parent;e.is("$root")||(e=e.parent);return e}(t);return e.checkChild(n,"image")}(e,n)&&function(t,e){const n=t.getSelectedElement(),o=!!n&&e.isObject(n),i=!![...t.focus.getAncestors()].find(t=>e.isObject(t));return!o&&!i}(e,n)}execute(t){const e=this.editor;e.model.change(n=>{const o=Array.isArray(t.files)?t.files:[t.files];for(const t of o)Gh(n,e,t)})}}function Gh(t,e,n){const o=e.model.document,i=e.plugins.get(Wd).createLoader(n);if(!i)return;const r=t.createElement("image",{uploadId:i.id}),s=$u(o.selection);e.model.insertContent(r,s),r.parent&&t.setSelection(r,"on")}class $h extends Fl{static get pluginName(){return"Notification"}init(){this.on("show:warning",(t,e)=>{window.alert(e.message)},{priority:"lowest"})}showSuccess(t,e={}){this._showNotification({message:t,type:"success",namespace:e.namespace,title:e.title})}showInfo(t,e={}){this._showNotification({message:t,type:"info",namespace:e.namespace,title:e.title})}showWarning(t,e={}){this._showNotification({message:t,type:"warning",namespace:e.namespace,title:e.title})}_showNotification(t){const e=`show:${t.type}`+(t.namespace?`:${t.namespace}`:"");this.fire(e,{message:t.message,type:t.type,title:t.title||""})}}class Qh extends Fl{static get requires(){return[Wd,$h]}init(){const t=this.editor,e=t.model.document,n=t.model.schema,o=t.plugins.get(Wd);n.extend("image",{allowAttributes:["uploadId","uploadStatus"]}),t.commands.add("imageUpload",new Yh(t)),this.listenTo(t.editing.view.document,"clipboardInput",(e,n)=>{if(function(t){return Array.from(t.types).includes("text/html")&&""!==t.getData("text/html")}(n.dataTransfer))return;const o=Array.from(n.dataTransfer.files).filter(Rh),i=new Js(n.targetRanges.map(e=>t.editing.mapper.toModelRange(e)));t.model.change(n=>{n.setSelection(i),o.length&&(e.stop(),t.model.enqueueChange("default",()=>{t.execute("imageUpload",{files:o})}))})}),t.editing.view.document.on("dragover",(t,e)=>{e.preventDefault()}),e.on("change",()=>{const t=e.differ.getChanges({includeChangesInGraveyard:!0});for(const e of t)if("insert"==e.type&&"image"==e.name){const t=e.position.nodeAfter,n="$graveyard"==e.position.root.rootName,i=t.getAttribute("uploadId");if(!i)continue;const r=o.loaders.get(i);if(!r)continue;n?r.abort():"idle"==r.status&&this._readAndUpload(r,t)}})}_readAndUpload(t,e){const n=this.editor,o=n.model,i=n.locale.t,r=n.plugins.get(Wd),s=n.plugins.get($h);return o.enqueueChange("transparent",t=>{t.setAttribute("uploadStatus","reading",e)}),t.read().then(i=>{const r=n.editing.mapper.toViewElement(e).getChild(0),s=t.upload();return n.editing.view.change(t=>{t.setAttribute("src",i,r)}),o.enqueueChange("transparent",t=>{t.setAttribute("uploadStatus","uploading",e)}),s}).then(t=>{o.enqueueChange("transparent",n=>{n.setAttributes({uploadStatus:"complete",src:t.default},e);let o=0;const i=Object.keys(t).filter(t=>{const e=parseInt(t,10);if(!isNaN(e))return o=Math.max(o,e),!0}).map(e=>`${t[e]} ${e}w`).join(", ");""!=i&&n.setAttribute("srcset",{data:i,width:o},e)}),a()}).catch(n=>{if("error"!==t.status&&"aborted"!==t.status)throw n;"error"==t.status&&s.showWarning(n,{title:i("g"),namespace:"upload"}),a(),o.enqueueChange("transparent",t=>{t.remove(e)})});function a(){o.enqueueChange("transparent",t=>{t.removeAttribute("uploadId",e),t.removeAttribute("uploadStatus",e)}),r.destroyLoader(t)}}}class Jh extends Fl{static get pluginName(){return"ImageUpload"}static get requires(){return[Qh,Dh,Vh]}}class Kh extends ql{refresh(){const t=this.editor.model,e=mu(t.document.selection.getSelectedBlocks());this.value=!!e&&e.is("paragraph"),this.isEnabled=!!e&&Zh(e,t.schema)}execute(t={}){const e=this.editor.model,n=e.document;e.change(o=>{const i=(t.selection||n.selection).getSelectedBlocks();for(const t of i)!t.is("paragraph")&&Zh(t,e.schema)&&o.rename(t,"paragraph")})}}function Zh(t,e){return e.checkChild(t.parent,"paragraph")&&!e.isObject(t)}class Xh extends Fl{static get pluginName(){return"Paragraph"}init(){const t=this.editor,e=t.model,n=t.data;t.commands.add("paragraph",new Kh(t)),e.schema.register("paragraph",{inheritAllFrom:"$block"}),t.conversion.elementToElement({model:"paragraph",view:"p"}),n.upcastDispatcher.on("element",(t,e,n)=>{if(n.consumable.test(e.viewItem,{name:e.viewItem.name}))if(Xh.paragraphLikeElements.has(e.viewItem.name)){if(e.viewItem.isEmpty)return;const t=n.writer.createElement("paragraph"),o=n.splitToAllowedParent(t,e.modelCursor);if(!o)return;n.writer.insert(t,o.position);const{modelRange:i}=n.convertChildren(e.viewItem,Hs.createAt(t));e.modelRange=new qs(Hs.createBefore(t),i.end),e.modelCursor=e.modelRange.end}else ef(e.viewItem,e.modelCursor,n.schema)&&(e=Object.assign(e,tf(e.viewItem,e.modelCursor,n)))},{priority:"low"}),n.upcastDispatcher.on("text",(t,e,n)=>{e.modelRange||ef(e.viewItem,e.modelCursor,n.schema)&&(e=Object.assign(e,tf(e.viewItem,e.modelCursor,n)))},{priority:"lowest"}),e.document.registerPostFixer(t=>this._autoparagraphEmptyRoots(t)),t.on("dataReady",()=>{e.enqueueChange("transparent",t=>this._autoparagraphEmptyRoots(t))},{priority:"lowest"})}_autoparagraphEmptyRoots(t){const e=this.editor.model;for(const n of e.document.getRootNames()){const o=e.document.getRoot(n);if(o.isEmpty&&"$graveyard"!=o.rootName&&e.schema.checkChild(o,"paragraph"))return t.insertElement("paragraph",o),!0}}}function tf(t,e,n){const o=n.writer.createElement("paragraph");return n.writer.insert(o,e),n.convertItem(t,Hs.createAt(o))}function ef(t,e,n){const o=new va(e);return!!n.checkChild(o,"paragraph")&&!!n.checkChild(o.push("paragraph"),t)}Xh.paragraphLikeElements=new Set(["blockquote","dd","div","dt","h1","h2","h3","h4","h5","h6","li","p","td"]);class nf extends ql{constructor(t,e){super(t),this.modelElements=e}refresh(){const t=mu(this.editor.model.document.selection.getSelectedBlocks());this.value=!!t&&this.modelElements.includes(t.name)&&t.name,this.isEnabled=!!t&&this.modelElements.some(e=>of(t,e,this.editor.model.schema))}execute(t){const e=this.editor.model,n=e.document,o=t.value;e.change(t=>{const i=Array.from(n.selection.getSelectedBlocks()).filter(t=>of(t,o,e.schema));for(const e of i)e.is(o)||t.rename(e,o)})}}function of(t,e,n){return n.checkChild(t.parent,e)&&!n.isObject(t)}const rf="paragraph";class sf extends Fl{constructor(t){super(t),t.config.define("heading",{options:[{model:"paragraph",title:"Paragraph",class:"ck-heading_paragraph"},{model:"heading1",view:"h2",title:"Heading 1",class:"ck-heading_heading1"},{model:"heading2",view:"h3",title:"Heading 2",class:"ck-heading_heading2"},{model:"heading3",view:"h4",title:"Heading 3",class:"ck-heading_heading3"}]})}static get requires(){return[Xh]}init(){const t=this.editor,e=t.config.get("heading.options"),n=[];for(const o of e)o.model!==rf&&(t.model.schema.register(o.model,{inheritAllFrom:"$block"}),t.conversion.elementToElement(o),n.push(o.model));t.commands.add("heading",new nf(t,n))}afterInit(){const t=this.editor,e=t.commands.get("enter"),n=t.config.get("heading.options");e&&this.listenTo(e,"afterExecute",(e,o)=>{const i=t.model.document.selection.getFirstPosition().parent;n.some(t=>i.is(t.model))&&!i.is(rf)&&0===i.childCount&&o.writer.rename(i,rf)})}}class af{constructor(t,e){e&&No(this,e),t&&this.set(t)}}B(af,jo);class cf extends xl{constructor(t){super(t);const e=this.bindTemplate;this.set("isVisible",!1),this.children=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-reset","ck-dropdown__panel",e.if("isVisible","ck-dropdown__panel-visible")]},children:this.children,on:{selectstart:e.to(t=>t.preventDefault())}})}focus(){this.children.length&&this.children.first.focus()}focusLast(){if(this.children.length){const t=this.children.last;"function"==typeof t.focusLast?t.focusLast():t.focus()}}}n(81);class lf extends xl{constructor(t,e,n){super(t);const o=this.bindTemplate;this.buttonView=e,this.panelView=n,this.set("isOpen",!1),this.set("isEnabled",!0),this.focusTracker=new Kc,this.keystrokes=new Uc,this.setTemplate({tag:"div",attributes:{class:["ck","ck-dropdown",o.if("isEnabled","ck-disabled",t=>!t)]},children:[e,n]}),e.extendTemplate({attributes:{class:["ck-dropdown__button"]}})}render(){super.render(),this.listenTo(this.buttonView,"open",()=>{this.isOpen=!this.isOpen}),this.panelView.bind("isVisible").to(this,"isOpen"),this.keystrokes.listenTo(this.element),this.focusTracker.add(this.element);const t=(t,e)=>{this.isOpen&&(this.buttonView.focus(),this.isOpen=!1,e())};this.keystrokes.set("arrowdown",(t,e)=>{this.buttonView.isEnabled&&!this.isOpen&&(this.isOpen=!0,e())}),this.keystrokes.set("arrowright",(t,e)=>{this.isOpen&&e()}),this.keystrokes.set("arrowleft",t),this.keystrokes.set("esc",t)}focus(){this.buttonView.focus()}}var df=n(29),uf=n.n(df);class hf extends Ld{constructor(t){super(t),this.arrowView=this._createArrowView(),this.extendTemplate({attributes:{"aria-haspopup":!0}}),this.delegate("execute").to(this,"open")}render(){super.render(),this.children.add(this.arrowView)}_createArrowView(){const t=new Rd;return t.content=uf.a,t.extendTemplate({attributes:{class:"ck-dropdown__arrow"}}),t}}n(83);class ff extends xl{constructor(){super(),this.items=this.createCollection(),this.focusTracker=new Kc,this.keystrokes=new Uc,this._focusCycler=new Nl({focusables:this.items,focusTracker:this.focusTracker,keystrokeHandler:this.keystrokes,actions:{focusPrevious:"arrowup",focusNext:"arrowdown"}}),this.setTemplate({tag:"ul",attributes:{class:["ck","ck-reset","ck-list"]},children:this.items})}render(){super.render();for(const t of this.items)this.focusTracker.add(t.element);this.items.on("add",(t,e)=>{this.focusTracker.add(e.element)}),this.items.on("remove",(t,e)=>{this.focusTracker.remove(e.element)}),this.keystrokes.listenTo(this.element)}focus(){this._focusCycler.focusFirst()}focusLast(){this._focusCycler.focusLast()}}class mf extends xl{constructor(t){super(t),this.children=this.createCollection(),this.setTemplate({tag:"li",attributes:{class:["ck","ck-list__item"]},children:this.children})}focus(){this.children.first.focus()}}class pf extends xl{constructor(t){super(t),this.setTemplate({tag:"li",attributes:{class:["ck","ck-list__separator"]}})}}n(85);class gf extends Ld{constructor(t){super(t),this.toggleSwitchView=this._createToggleView(),this.extendTemplate({attributes:{class:"ck-switchbutton"}})}render(){super.render(),this.children.add(this.toggleSwitchView)}_createToggleView(){const t=new xl;return t.setTemplate({tag:"span",attributes:{class:["ck","ck-button__toggle"]},children:[{tag:"span",attributes:{class:["ck","ck-button__toggle__inner"]}}]}),t}}n(87),n(89);function bf(t,e=hf){const n=new e(t),o=new cf(t),i=new lf(t,n,o);return n.bind("isEnabled").to(i),n instanceof hf?n.bind("isOn").to(i,"isOpen"):n.arrowView.bind("isOn").to(i,"isOpen"),function(t){(function(t){t.on("render",()=>{sh({emitter:t,activator:()=>t.isOpen,callback:()=>{t.isOpen=!1},contextElements:[t.element]})})})(t),function(t){t.on("execute",e=>{e.source instanceof gf||(t.isOpen=!1)})}(t),function(t){t.keystrokes.set("arrowdown",(e,n)=>{t.isOpen&&(t.panelView.focus(),n())}),t.keystrokes.set("arrowup",(e,n)=>{t.isOpen&&(t.panelView.focusLast(),n())})}(t)}(i),i}function wf(t,e){const n=t.locale,o=t.listView=new ff(n);o.items.bindTo(e).using(({type:t,model:e})=>{if("separator"===t)return new pf(n);if("button"===t||"switchbutton"===t){const o=new mf(n);let i;return(i="button"===t?new Ld(n):new gf(n)).bind(...Object.keys(e)).to(e),i.delegate("execute").to(o),o.children.add(i),o}}),t.panelView.children.add(o),o.items.delegate("execute").to(t)}n(17);class _f extends Fl{init(){const t=this.editor,e=t.t,n=function(t){const e=t.t,n={Paragraph:e("bb"),"Heading 1":e("bc"),"Heading 2":e("bd"),"Heading 3":e("be")};return t.config.get("heading.options").map(t=>{const e=n[t.title];return e&&e!=t.title&&(t=Object.assign({},t,{title:e})),t})}(t),o=e("am"),i=e("an");t.ui.componentFactory.add("heading",e=>{const r={},s=new ti,a=t.commands.get("heading"),c=t.commands.get("paragraph"),l=[a];for(const t of n){const e={type:"button",model:new af({label:t.title,class:t.class,withText:!0})};"paragraph"===t.model?(e.model.bind("isOn").to(c,"value"),e.model.set("commandName","paragraph"),l.push(c)):(e.model.bind("isOn").to(a,"value",e=>e===t.model),e.model.set({commandName:"heading",commandValue:t.model})),s.add(e),r[t.model]=t.title}const d=bf(e);return wf(d,s),d.buttonView.set({isOn:!1,withText:!0,tooltip:i}),d.extendTemplate({attributes:{class:["ck-heading-dropdown"]}}),d.bind("isEnabled").toMany(l,"isEnabled",(...t)=>t.some(t=>t)),d.buttonView.bind("label").to(a,"value",c,"value",(t,e)=>{const n=t||e&&"paragraph";return r[n]?r[n]:o}),this.listenTo(d,"execute",e=>{t.execute(e.source.commandName,e.source.commandValue?{value:e.source.commandValue}:void 0),t.editing.view.focus()}),d})}}n(92);const kf=new WeakMap;function vf(t,e,n,o){const i=t.document;kf.has(i)||(kf.set(i,new Map),i.registerPostFixer(t=>(function(t,e){const n=kf.get(t);let o=!1;for(const[t,i]of n)yf(e,t,i)&&(o=!0);return o})(i,t))),kf.get(i).set(e,{placeholderText:n,checkFunction:o}),t.render()}function yf(t,e,n){const o=e.document,i=n.placeholderText;let r=!1;if(!o)return!1;e.getAttribute("data-placeholder")!==i&&(t.setAttribute("data-placeholder",i,e),r=!0);const s=o.selection.anchor,a=n.checkFunction;if(a&&!a())return e.hasClass("ck-placeholder")&&(t.removeClass("ck-placeholder",e),r=!0),r;const c=!Array.from(e.getChildren()).some(t=>!t.is("uiElement"));return!o.isFocused&&c?(e.hasClass("ck-placeholder")||(t.addClass("ck-placeholder",e),r=!0),r):(c&&s&&s.parent!==e?e.hasClass("ck-placeholder")||(t.addClass("ck-placeholder",e),r=!0):e.hasClass("ck-placeholder")&&(t.removeClass("ck-placeholder",e),r=!0),r)}const xf=Symbol("imageCaption");function Af(t){for(const e of t.getChildren())if(e instanceof Fs&&"caption"==e.name)return e;return null}function Cf(t){const e=t.parent;return"figcaption"==t.name&&e&&"figure"==e.name&&e.hasClass("image")?{name:!0}:null}class Tf extends Fl{init(){const t=this.editor,e=t.editing.view,n=t.model.schema,o=t.data,i=t.editing,r=t.t;n.register("caption",{allowIn:"image",allowContentOf:"$block",isLimit:!0}),t.model.document.registerPostFixer(t=>this._insertMissingModelCaptionElement(t)),t.conversion.for("upcast").add(Oa({view:Cf,model:"caption"}));o.downcastDispatcher.on("insert:caption",Mf(t=>t.createContainerElement("figcaption"),!1));const s=function(t,e){return n=>{const o=n.createEditableElement("figcaption");return n.setCustomProperty(xf,!0,o),vf(t,o,e),Gu(o,n)}}(e,r("f"));i.downcastDispatcher.on("insert:caption",Mf(s)),i.downcastDispatcher.on("insert",this._fixCaptionVisibility(t=>t.item),{priority:"high"}),i.downcastDispatcher.on("remove",this._fixCaptionVisibility(t=>t.position.parent),{priority:"high"}),e.document.registerPostFixer(t=>this._updateCaptionVisibility(t))}_updateCaptionVisibility(t){const e=this.editor.editing.mapper,n=this._lastSelectedCaption;let o;const i=this.editor.model.document.selection,r=i.getSelectedElement();if(r&&r.is("image")){const t=Af(r);o=e.toViewElement(t)}const s=Pf(i.getFirstPosition().parent);if(s&&(o=e.toViewElement(s)),o)return n?n===o?Ef(o,t):(Sf(n,t),this._lastSelectedCaption=o,Ef(o,t)):(this._lastSelectedCaption=o,Ef(o,t));if(n){const e=Sf(n,t);return this._lastSelectedCaption=null,e}return!1}_fixCaptionVisibility(t){return(e,n,o)=>{const i=Pf(t(n)),r=this.editor.editing.mapper,s=o.writer;if(i){const t=r.toViewElement(i);t&&(i.childCount?s.removeClass("ck-hidden",t):s.addClass("ck-hidden",t))}}}_insertMissingModelCaptionElement(t){const e=this.editor.model.document.differ.getChanges();for(const n of e)if("insert"==n.type&&"image"==n.name){const e=n.position.nodeAfter;if(!Af(e))return t.appendElement("caption",e),!0}}}function Mf(t,e=!0){return(n,o,i)=>{const r=o.item;if((r.childCount||e)&&Zu(r.parent)){if(!i.consumable.consume(o.item,"insert"))return;const e=i.mapper.toViewElement(o.range.start.parent),n=t(i.writer),s=i.writer;r.childCount||s.addClass("ck-hidden",n),function(t,e,n,o){const i=$o.createAt(n,"end");o.writer.insert(i,t),o.mapper.bindElements(e,t)}(n,o.item,e,i)}}}function Pf(t){const e=t.getAncestors({includeSelf:!0}).find(t=>"caption"==t.name);return e&&e.parent&&"image"==e.parent.name?e:null}function Sf(t,e){return!t.childCount&&!t.hasClass("ck-hidden")&&(e.addClass("ck-hidden",t),!0)}function Ef(t,e){return!!t.hasClass("ck-hidden")&&(e.removeClass("ck-hidden",t),!0)}n(94);class If extends ql{constructor(t,e){super(t),this._defaultStyle=!1,this.styles=e.reduce((t,e)=>(t[e.name]=e,e.isDefault&&(this._defaultStyle=e.name),t),{})}refresh(){const t=this.editor.model.document.selection.getSelectedElement();if(this.isEnabled=Zu(t),t)if(t.hasAttribute("imageStyle")){const e=t.getAttribute("imageStyle");this.value=!!this.styles[e]&&e}else this.value=this._defaultStyle;else this.value=!1}execute(t){const e=t.value,n=this.editor.model,o=n.document.selection.getSelectedElement();n.change(t=>{this.styles[e].isDefault?t.removeAttribute("imageStyle",o):t.setAttribute("imageStyle",e,o)})}}function Nf(t,e){for(const n of e)if(n.name===t)return n}var Of=n(13),Rf=n.n(Of),Df=n(14),Lf=n.n(Df),jf=n(15),Vf=n.n(jf),Ff=n(10),zf=n.n(Ff);const Bf={full:{name:"full",title:"Full size image",icon:Rf.a,isDefault:!0},side:{name:"side",title:"Side image",icon:zf.a,className:"image-style-side"},alignLeft:{name:"alignLeft",title:"Left aligned image",icon:Lf.a,className:"image-style-align-left"},alignCenter:{name:"alignCenter",title:"Centered image",icon:Vf.a,className:"image-style-align-center"},alignRight:{name:"alignRight",title:"Right aligned image",icon:zf.a,className:"image-style-align-right"}},Uf={full:Rf.a,left:Lf.a,right:zf.a,center:Vf.a};function Hf(t=[]){return t.map(qf).map(t=>Object.assign({},t))}function qf(t){if("string"==typeof t){const e=t;Bf[e]?t=Object.assign({},Bf[e]):(fs.a.warn("image-style-not-found: There is no such image style of given name.",{name:e}),t={name:e})}else if(Bf[t.name]){const e=Bf[t.name],n=Object.assign({},t);for(const o in e)t.hasOwnProperty(o)||(n[o]=e[o]);t=n}return"string"==typeof t.icon&&Uf[t.icon]&&(t.icon=Uf[t.icon]),t}class Wf extends Fl{static get requires(){return[Xu]}static get pluginName(){return"ImageStyleEditing"}init(){const t=this.editor,e=t.model.schema,n=t.data,o=t.editing;t.config.define("image.styles",["full","side"]);const i=Hf(t.config.get("image.styles"));e.extend("image",{allowAttributes:"imageStyle"});const r=function(t){return(e,n,o)=>{if(!o.consumable.consume(n.item,e.name))return;const i=Nf(n.attributeNewValue,t),r=Nf(n.attributeOldValue,t),s=o.mapper.toViewElement(n.item),a=o.writer;r&&a.removeClass(r.className,s),i&&a.addClass(i.className,s)}}(i);o.downcastDispatcher.on("attribute:imageStyle:image",r),n.downcastDispatcher.on("attribute:imageStyle:image",r),n.upcastDispatcher.on("element:figure",function(t){const e=t.filter(t=>!t.isDefault);return(t,n,o)=>{if(!n.modelRange)return;const i=n.viewItem,r=mu(n.modelRange.getItems());if(o.schema.checkAttribute(r,"imageStyle"))for(const t of e)o.consumable.consume(i,{classes:t.className})&&o.writer.setAttribute("imageStyle",t.name,r)}}(i),{priority:"low"}),t.commands.add("imageStyle",new If(t,i))}}n(96);class Yf extends Fl{get localizedDefaultStylesTitles(){const t=this.editor.t;return{"Full size image":t("h"),"Side image":t("i"),"Left aligned image":t("j"),"Centered image":t("k"),"Right aligned image":t("l")}}init(){const t=function(t,e){for(const n of t)e[n.title]&&(n.title=e[n.title]);return t}(Hf(this.editor.config.get("image.styles")),this.localizedDefaultStylesTitles);for(const e of t)this._createButton(e)}_createButton(t){const e=this.editor,n=`imageStyle:${t.name}`;e.ui.componentFactory.add(n,n=>{const o=e.commands.get("imageStyle"),i=new Ld(n);return i.set({label:t.title,icon:t.icon,tooltip:!0}),i.bind("isEnabled").to(o,"isEnabled"),i.bind("isOn").to(o,"value",e=>e===t.name),this.listenTo(i,"execute",()=>e.execute("imageStyle",{value:t.name})),i})}}class Gf extends Fl{static get requires(){return[xh]}static get pluginName(){return"WidgetToolbarRepository"}init(){const t=this.editor,e=t.plugins.get("BalloonToolbar");e&&this.listenTo(e,"show",e=>{(function(t){const e=t.getSelectedElement();return!(!e||!qu(e))})(t.editing.view.document.selection)&&e.stop()},{priority:"high"}),this._toolbars=new Map,this._balloon=this.editor.plugins.get("ContextualBalloon"),this.listenTo(t.ui,"update",()=>{this._updateToolbarsVisibility()}),this.listenTo(t.ui.focusTracker,"change:isFocused",()=>{this._updateToolbarsVisibility()},{priority:"low"})}register(t,{items:e,visibleWhen:n,balloonClassName:o="ck-toolbar-container"}){const i=this.editor,r=new Dl;if(this._toolbars.has(t))throw new M.b("widget-toolbar-duplicated: Toolbar with the given id was already added.",{toolbarId:t});r.fillFromConfig(e,i.ui.componentFactory),this._toolbars.set(t,{view:r,visibleWhen:n,balloonClassName:o})}_updateToolbarsVisibility(){for(const t of this._toolbars.values())this.editor.ui.focusTracker.isFocused&&t.visibleWhen(this.editor.editing.view.document.selection)?this._showToolbar(t):this._hideToolbar(t)}_hideToolbar(t){this._isToolbarVisible(t)&&this._balloon.remove(t.view)}_showToolbar(t){this._isToolbarVisible(t)?function(t){const e=t.plugins.get("ContextualBalloon"),n=$f(t);e.updatePosition(n)}(this.editor):this._balloon.hasView(t.view)||this._balloon.add({view:t.view,position:$f(this.editor),balloonClassName:t.balloonClassName})}_isToolbarVisible(t){return this._balloon.visibleView==t.view}}function $f(t){const e=t.editing.view,n=_h.defaultPositions,o=function(t){const e=t.getSelectedElement();if(e&&qu(e))return e;let n=t.getFirstPosition().parent;for(;n;){if(n.is("element")&&qu(n))return n;n=n.parent}}(e.document.selection);return{target:e.domConverter.viewToDom(o),positions:[n.northArrowSouth,n.northArrowSouthWest,n.northArrowSouthEast,n.southArrowNorth,n.southArrowNorthWest,n.southArrowNorthEast]}}function Qf(t,e){return new qs(Jf(t,e,!0),Jf(t,e,!1))}function Jf(t,e,n){let o=t.textNode||(n?t.nodeBefore:t.nodeAfter),i=null;for(;o&&o.getAttribute("linkHref")==e;)i=o,o=n?o.previousSibling:o.nextSibling;return i?Hs.createAt(i,n?"before":"after"):t}class Kf extends ql{refresh(){const t=this.editor.model,e=t.document;this.value=e.selection.getAttribute("linkHref"),this.isEnabled=t.schema.checkAttributeInSelection(e.selection,"linkHref")}execute(t){const e=this.editor.model,n=e.document.selection;e.change(o=>{if(n.isCollapsed){const e=n.getFirstPosition();if(n.hasAttribute("linkHref")){const e=Qf(n.getFirstPosition(),n.getAttribute("linkHref"));o.setAttribute("linkHref",t,e),o.setSelection(e)}else if(""!==t){const i=Rs(n.getAttributes());i.set("linkHref",t);const r=o.createText(t,i);o.insert(r,e),o.setSelection(qs.createOn(r))}}else{const i=e.schema.getValidRanges(n.getRanges(),"linkHref");for(const e of i)o.setAttribute("linkHref",t,e)}})}}class Zf extends ql{refresh(){this.isEnabled=this.editor.model.document.selection.hasAttribute("linkHref")}execute(){const t=this.editor.model,e=t.document.selection;t.change(t=>{const n=e.isCollapsed?[Qf(e.getFirstPosition(),e.getAttribute("linkHref"))]:e.getRanges();for(const e of n)t.removeAttribute("linkHref",e)})}}const Xf=Symbol("linkElement"),tm=/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205f\u3000]/g,em=/^(?:(?:https?|ftps?|mailto):|[^a-z]|[a-z+.-]+(?:[^a-z+.:-]|$))/i;function nm(t,e){const n=e.createAttributeElement("a",{href:t},{priority:5});return e.setCustomProperty(Xf,!0,n),n}function om(t){return function(t){return t.replace(tm,"").match(em)}(t=String(t))?t:"#"}class im{constructor(t,e,n){this.model=t,this.attribute=n,this._modelSelection=t.document.selection,this._overrideUid=null,this._isNextGravityRestorationSkipped=!1,e.listenTo(this._modelSelection,"change:range",(t,e)=>{this._isNextGravityRestorationSkipped?this._isNextGravityRestorationSkipped=!1:this._isGravityOverridden&&(!e.directChange&&rm(this._modelSelection.getFirstPosition(),n)||this._restoreGravity())})}handleForwardMovement(t,e){const n=this.attribute;if(!(this._isGravityOverridden||t.isAtStart&&this._hasSelectionAttribute))return cm(t,n)&&this._hasSelectionAttribute?(this._preventCaretMovement(e),this._removeSelectionAttribute(),!0):sm(t,n)?(this._preventCaretMovement(e),this._overrideGravity(),!0):am(t,n)&&this._hasSelectionAttribute?(this._preventCaretMovement(e),this._overrideGravity(),!0):void 0}handleBackwardMovement(t,e){const n=this.attribute;return this._isGravityOverridden?cm(t,n)&&this._hasSelectionAttribute?(this._preventCaretMovement(e),this._restoreGravity(),this._removeSelectionAttribute(),!0):(this._preventCaretMovement(e),this._restoreGravity(),t.isAtStart&&this._removeSelectionAttribute(),!0):cm(t,n)&&!this._hasSelectionAttribute?(this._preventCaretMovement(e),this._setSelectionAttributeFromTheNodeBefore(t),!0):t.isAtEnd&&am(t,n)?this._hasSelectionAttribute?void(lm(t,n)&&(this._skipNextAutomaticGravityRestoration(),this._overrideGravity())):(this._preventCaretMovement(e),this._setSelectionAttributeFromTheNodeBefore(t),!0):t.isAtStart?this._hasSelectionAttribute?(this._removeSelectionAttribute(),this._preventCaretMovement(e),!0):void 0:void(lm(t,n)&&(this._skipNextAutomaticGravityRestoration(),this._overrideGravity()))}get _isGravityOverridden(){return!!this._overrideUid}get _hasSelectionAttribute(){return this._modelSelection.hasAttribute(this.attribute)}_overrideGravity(){this._overrideUid=this.model.change(t=>t.overrideSelectionGravity())}_restoreGravity(){this.model.change(t=>{t.restoreSelectionGravity(this._overrideUid),this._overrideUid=null})}_preventCaretMovement(t){t.preventDefault()}_removeSelectionAttribute(){this.model.change(t=>{t.removeSelectionAttribute(this.attribute)})}_setSelectionAttributeFromTheNodeBefore(t){const e=this.attribute;this.model.change(n=>{n.setSelectionAttribute(this.attribute,t.nodeBefore.getAttribute(e))})}_skipNextAutomaticGravityRestoration(){this._isNextGravityRestorationSkipped=!0}}function rm(t,e){return sm(t,e)||am(t,e)}function sm(t,e){const{nodeBefore:n,nodeAfter:o}=t,i=!!n&&n.hasAttribute(e);return!!o&&o.hasAttribute(e)&&(!i||n.getAttribute(e)!==o.getAttribute(e))}function am(t,e){const{nodeBefore:n,nodeAfter:o}=t,i=!!n&&n.hasAttribute(e),r=!!o&&o.hasAttribute(e);return i&&(!r||n.getAttribute(e)!==o.getAttribute(e))}function cm(t,e){const{nodeBefore:n,nodeAfter:o}=t,i=!!n&&n.hasAttribute(e);if(!!o&&o.hasAttribute(e)&&i)return o.getAttribute(e)!==n.getAttribute(e)}function lm(t,e){return rm(t.getShiftedBy(-1),e)}n(98);const dm="ck-link_selected";class um extends Fl{init(){const t=this.editor;t.model.schema.extend("$text",{allowAttributes:"linkHref"}),t.conversion.for("dataDowncast").add(ca({model:"linkHref",view:nm})),t.conversion.for("editingDowncast").add(ca({model:"linkHref",view:(t,e)=>nm(om(t),e)})),t.conversion.for("upcast").add(Ra({view:{name:"a",attributes:{href:!0}},model:{key:"linkHref",value:t=>t.getAttribute("href")}})),t.commands.add("link",new Kf(t)),t.commands.add("unlink",new Zf(t)),function(t,e,n,o){const i=new im(e,n,o),r=e.document.selection;n.listenTo(t.document,"keydown",(t,e)=>{if(!r.isCollapsed)return;if(e.shiftKey||e.altKey||e.ctrlKey)return;const n=e.keyCode==hi.arrowright,o=e.keyCode==hi.arrowleft;if(!n&&!o)return;const s=r.getFirstPosition();let a;(a=n?i.handleForwardMovement(s,e):i.handleBackwardMovement(s,e))&&t.stop()},{priority:I.get("high")+1})}(t.editing.view,t.model,this,"linkHref"),this._setupLinkHighlight()}_setupLinkHighlight(){const t=this.editor,e=t.editing.view,n=new Set;e.document.registerPostFixer(e=>{const o=t.model.document.selection;if(o.hasAttribute("linkHref")){const i=Qf(o.getFirstPosition(),o.getAttribute("linkHref")),r=t.editing.mapper.toViewRange(i);for(const t of r.getItems())t.is("a")&&(e.addClass(dm,t),n.add(t))}}),t.conversion.for("editingDowncast").add(t=>{function o(){e.change(t=>{for(const e of n.values())t.removeClass(dm,e),n.delete(e)})}t.on("insert",o,{priority:"highest"}),t.on("remove",o,{priority:"highest"}),t.on("attribute",o,{priority:"highest"}),t.on("selection",o,{priority:"highest"})})}}class hm extends Jr{constructor(t){super(t),this.domEventType="click"}onDomEvent(t){this.fire(t.type,t)}}n(100);class fm extends xl{constructor(t){super(t);const e=t.t;this.focusTracker=new Kc,this.keystrokes=new Uc,this.urlInputView=this._createUrlInput(),this.saveButtonView=this._createButton(e("aw"),uh.a,"ck-button-save"),this.saveButtonView.type="submit",this.cancelButtonView=this._createButton(e("ax"),fh.a,"ck-button-cancel","cancel"),this._focusables=new tl,this._focusCycler=new Nl({focusables:this._focusables,focusTracker:this.focusTracker,keystrokeHandler:this.keystrokes,actions:{focusPrevious:"shift + tab",focusNext:"tab"}}),this.setTemplate({tag:"form",attributes:{class:["ck","ck-link-form"],tabindex:"-1"},children:[this.urlInputView,this.saveButtonView,this.cancelButtonView]})}render(){super.render(),lh({view:this}),[this.urlInputView,this.saveButtonView,this.cancelButtonView].forEach(t=>{this._focusables.add(t),this.focusTracker.add(t.element)}),this.keystrokes.listenTo(this.element)}focus(){this._focusCycler.focusFirst()}_createUrlInput(){const t=this.locale.t,e=new ah(this.locale,ch);return e.label=t("bf"),e.inputView.placeholder="https://example.com",e}_createButton(t,e,n,o){const i=new Ld(this.locale);return i.set({label:t,icon:e,tooltip:!0}),i.extendTemplate({attributes:{class:n}}),o&&i.delegate("execute").to(this,o),i}}var mm=n(30),pm=n.n(mm),gm=n(31),bm=n.n(gm);n(102);class wm extends xl{constructor(t){super(t);const e=t.t;this.focusTracker=new Kc,this.keystrokes=new Uc,this.previewButtonView=this._createPreviewButton(),this.unlinkButtonView=this._createButton(e("aq"),pm.a,"unlink"),this.editButtonView=this._createButton(e("ar"),bm.a,"edit"),this.set("href"),this._focusables=new tl,this._focusCycler=new Nl({focusables:this._focusables,focusTracker:this.focusTracker,keystrokeHandler:this.keystrokes,actions:{focusPrevious:"shift + tab",focusNext:"tab"}}),this.setTemplate({tag:"div",attributes:{class:["ck","ck-link-actions"],tabindex:"-1"},children:[this.previewButtonView,this.editButtonView,this.unlinkButtonView]})}render(){super.render(),[this.previewButtonView,this.editButtonView,this.unlinkButtonView].forEach(t=>{this._focusables.add(t),this.focusTracker.add(t.element)}),this.keystrokes.listenTo(this.element)}focus(){this._focusCycler.focusFirst()}_createButton(t,e,n){const o=new Ld(this.locale);return o.set({label:t,icon:e,tooltip:!0}),o.delegate("execute").to(this,n),o}_createPreviewButton(){const t=new Ld(this.locale),e=this.bindTemplate,n=this.t;return t.set({withText:!0,tooltip:n("as")}),t.extendTemplate({attributes:{class:["ck","ck-link-actions__preview"],href:e.to("href",t=>t&&om(t)),target:"_blank"}}),t.bind("label").to(this,"href",t=>t||n("at")),t.bind("isEnabled").to(this,"href",t=>!!t),t.template.tag="a",t.template.eventListeners={},t}}var _m=n(32),km=n.n(_m);const vm="Ctrl+K";class ym extends Fl{static get requires(){return[xh]}init(){const t=this.editor;t.editing.view.addObserver(hm),this.actionsView=this._createActionsView(),this.formView=this._createFormView(),this._balloon=t.plugins.get(xh),this._createToolbarLinkButton(),this._enableUserBalloonInteractions()}_createActionsView(){const t=this.editor,e=new wm(t.locale),n=t.commands.get("link"),o=t.commands.get("unlink");return e.bind("href").to(n,"value"),e.editButtonView.bind("isEnabled").to(n),e.unlinkButtonView.bind("isEnabled").to(o),this.listenTo(e,"edit",()=>{this._addFormView()}),this.listenTo(e,"unlink",()=>{t.execute("unlink"),this._hideUI()}),e.keystrokes.set("Esc",(t,e)=>{this._hideUI(),e()}),e.keystrokes.set(vm,(t,e)=>{this._addFormView(),e()}),e}_createFormView(){const t=this.editor,e=new fm(t.locale),n=t.commands.get("link");return e.urlInputView.bind("value").to(n,"value"),e.urlInputView.bind("isReadOnly").to(n,"isEnabled",t=>!t),e.saveButtonView.bind("isEnabled").to(n),this.listenTo(e,"submit",()=>{t.execute("link",e.urlInputView.inputView.element.value),this._removeFormView()}),this.listenTo(e,"cancel",()=>{this._removeFormView()}),e.keystrokes.set("Esc",(t,e)=>{this._removeFormView(),e()}),e}_createToolbarLinkButton(){const t=this.editor,e=t.commands.get("link"),n=t.t;t.keystrokes.set(vm,(t,n)=>{n(),e.isEnabled&&this._showUI()}),t.ui.componentFactory.add("link",t=>{const o=new Ld(t);return o.isEnabled=!0,o.label=n("al"),o.icon=km.a,o.keystroke=vm,o.tooltip=!0,o.bind("isOn","isEnabled").to(e,"value","isEnabled"),this.listenTo(o,"execute",()=>this._showUI()),o})}_enableUserBalloonInteractions(){const t=this.editor.editing.view.document;this.listenTo(t,"click",()=>{this._getSelectedLinkElement()&&this._showUI()}),this.editor.keystrokes.set("Tab",(t,e)=>{this._areActionsVisible&&!this.actionsView.focusTracker.isFocused&&(this.actionsView.focus(),e())},{priority:"high"}),this.editor.keystrokes.set("Esc",(t,e)=>{this._isUIVisible&&(this._hideUI(),e())}),sh({emitter:this.formView,activator:()=>this._isUIVisible,contextElements:[this._balloon.view.element],callback:()=>this._hideUI()})}_addActionsView(){this._areActionsInPanel||this._balloon.add({view:this.actionsView,position:this._getBalloonPositionData()})}_addFormView(){if(this._isFormInPanel)return;const t=this.editor.commands.get("link");this._balloon.add({view:this.formView,position:this._getBalloonPositionData()}),this.formView.urlInputView.select(),this.formView.urlInputView.inputView.element.value=t.value||""}_removeFormView(){this._isFormInPanel&&(this._balloon.remove(this.formView),this.editor.editing.view.focus())}_showUI(){this.editor.commands.get("link").isEnabled&&(this._getSelectedLinkElement()?this._areActionsVisible?this._addFormView():this._addActionsView():(this._addActionsView(),this._addFormView()),this._startUpdatingUI())}_hideUI(){if(!this._isUIInPanel)return;const t=this.editor;this.stopListening(t.ui,"update"),this._removeFormView(),this._balloon.remove(this.actionsView),t.editing.view.focus()}_startUpdatingUI(){const t=this.editor,e=t.editing.view.document;let n=this._getSelectedLinkElement(),o=i();function i(){return e.selection.focus.getAncestors().reverse().find(t=>t.is("element"))}this.listenTo(t.ui,"update",()=>{const t=this._getSelectedLinkElement(),e=i();n&&!t||!n&&e!==o?this._hideUI():this._balloon.updatePosition(this._getBalloonPositionData()),n=t,o=e})}get _isFormInPanel(){return this._balloon.hasView(this.formView)}get _areActionsInPanel(){return this._balloon.hasView(this.actionsView)}get _areActionsVisible(){return this._balloon.visibleView===this.actionsView}get _isUIInPanel(){return this._isFormInPanel||this._areActionsInPanel}get _isUIVisible(){return this._balloon.visibleView==this.formView||this._areActionsVisible}_getBalloonPositionData(){const t=this.editor.editing.view,e=t.document,n=this._getSelectedLinkElement();return{target:n?t.domConverter.mapViewToDom(n):t.domConverter.viewRangeToDom(e.selection.getFirstRange())}}_getSelectedLinkElement(){const t=this.editor.editing.view.document.selection;if(t.isCollapsed)return xm(t.getFirstPosition());{const e=t.getFirstRange().getTrimmed(),n=xm(e.start),o=xm(e.end);return n&&n==o&&Qo.createIn(n).getTrimmed().isEqual(e)?n:null}}}function xm(t){return t.getAncestors().find(t=>(function(t){return t.is("attributeElement")&&!!t.getCustomProperty(Xf)})(t))}class Am extends ql{constructor(t,e){super(t),this.type="bulleted"==e?"bulleted":"numbered"}refresh(){this.value=this._getValue(),this.isEnabled=this._checkEnabled()}execute(){const t=this.editor.model,e=t.document,n=Array.from(e.selection.getSelectedBlocks()).filter(e=>Tm(e,t.schema)),o=!0===this.value;t.change(t=>{if(o){let e=n[n.length-1].nextSibling,o=Number.POSITIVE_INFINITY,i=[];for(;e&&"listItem"==e.name&&0!==e.getAttribute("listIndent");){const t=e.getAttribute("listIndent");t<o&&(o=t);const n=t-o;i.push({element:e,listIndent:n}),e=e.nextSibling}i=i.reverse();for(const e of i)t.setAttribute("listIndent",e.listIndent,e.element)}if(!o){let t=Number.POSITIVE_INFINITY;for(const e of n)e.is("listItem")&&e.getAttribute("listIndent")<t&&(t=e.getAttribute("listIndent"));Cm(n,!0,t=0===t?1:t),Cm(n,!1,t)}for(const e of n.reverse())o&&"listItem"==e.name?t.rename(e,"paragraph"):o||"listItem"==e.name?o||"listItem"!=e.name||e.getAttribute("listType")==this.type||t.setAttribute("listType",this.type,e):(t.setAttributes({listType:this.type,listIndent:0},e),t.rename(e,"listItem"))})}_getValue(){const t=mu(this.editor.model.document.selection.getSelectedBlocks());return!!t&&t.is("listItem")&&t.getAttribute("listType")==this.type}_checkEnabled(){if(this.value)return!0;const t=this.editor.model.document.selection,e=this.editor.model.schema,n=mu(t.getSelectedBlocks());return!!n&&Tm(n,e)}}function Cm(t,e,n){const o=e?t[0]:t[t.length-1];if(o.is("listItem")){let i=o[e?"previousSibling":"nextSibling"],r=o.getAttribute("listIndent");for(;i&&i.is("listItem")&&i.getAttribute("listIndent")>=n;)r>i.getAttribute("listIndent")&&(r=i.getAttribute("listIndent")),i.getAttribute("listIndent")==r&&t[e?"unshift":"push"](i),i=i[e?"previousSibling":"nextSibling"]}}function Tm(t,e){return e.checkChild(t.parent,"listItem")&&!e.isObject(t)}class Mm extends ql{constructor(t,e){super(t),this._indentBy="forward"==e?1:-1}refresh(){this.isEnabled=this._checkEnabled()}execute(){const t=this.editor.model,e=t.document;let n=Array.from(e.selection.getSelectedBlocks());t.change(t=>{const e=n[n.length-1];let o=e.nextSibling;for(;o&&"listItem"==o.name&&o.getAttribute("listIndent")>e.getAttribute("listIndent");)n.push(o),o=o.nextSibling;this._indentBy<0&&(n=n.reverse());for(const e of n){const n=e.getAttribute("listIndent")+this._indentBy;n<0?t.rename(e,"paragraph"):t.setAttribute("listIndent",n,e)}})}_checkEnabled(){const t=mu(this.editor.model.document.selection.getSelectedBlocks());if(!t||!t.is("listItem"))return!1;if(this._indentBy>0){const e=t.getAttribute("listIndent"),n=t.getAttribute("listType");let o=t.previousSibling;for(;o&&o.is("listItem")&&o.getAttribute("listIndent")>=e;){if(o.getAttribute("listIndent")==e)return o.getAttribute("listType")==n;o=o.previousSibling}return!1}return!0}}function Pm(){const t=!this.isEmpty&&("ul"==this.getChild(0).name||"ol"==this.getChild(0).name);return this.isEmpty||t?0:null}function Sm(t,e,n){const o=n.consumable;if(!o.test(e.item,"insert")||!o.test(e.item,"attribute:listType")||!o.test(e.item,"attribute:listIndent"))return;o.consume(e.item,"insert"),o.consume(e.item,"attribute:listType"),o.consume(e.item,"attribute:listIndent");const i=e.item;Hm(i,function(t,e){const n=e.mapper,o=e.writer,i="numbered"==t.getAttribute("listType")?"ol":"ul",r=function(t){const e=t.createContainerElement("li");return e.getFillerOffset=Pm,e}(o),s=o.createContainerElement(i,null);return o.insert($o.createAt(s),r),n.bindElements(t,r),r}(i,n),n)}function Em(t,e,n){const o=n.mapper.toViewPosition(e.position).getLastMatchingPosition(t=>!t.item.is("li")).nodeAfter,i=n.writer;i.breakContainer($o.createBefore(o)),i.breakContainer($o.createAfter(o));const r=o.parent,s=r.previousSibling,a=Qo.createOn(r),c=i.remove(a);s&&s.nextSibling&&Um(i,s,s.nextSibling),qm(n.mapper.toModelElement(o).getAttribute("listIndent")+1,e.position,a.start,o,n);for(const t of Qo.createIn(c).getItems())n.mapper.unbindViewElement(t);t.stop()}function Im(t,e,n){if(!n.consumable.consume(e.item,"attribute:listType"))return;const o=n.mapper.toViewElement(e.item),i=n.writer;i.breakContainer($o.createBefore(o)),i.breakContainer($o.createAfter(o));let r=o.parent;const s="numbered"==e.attributeNewValue?"ol":"ul";Um(i,r=i.rename(s,r),r.nextSibling),Um(i,r.previousSibling,r);for(const t of e.item.getChildren())n.consumable.consume(t,"insert")}function Nm(t,e,n){if(!n.consumable.consume(e.item,"attribute:listIndent"))return;const o=n.mapper.toViewElement(e.item),i=n.writer;i.breakContainer($o.createBefore(o)),i.breakContainer($o.createAfter(o));const r=o.parent,s=r.previousSibling,a=Qo.createOn(r);i.remove(a),s&&s.nextSibling&&Um(i,s,s.nextSibling),qm(e.attributeOldValue+1,e.range.start,a.start,o,n),Hm(e.item,o,n);for(const t of e.item.getChildren())n.consumable.consume(t,"insert")}function Om(t,e,n){if("listItem"!=e.item.name){let t=n.mapper.toViewPosition(e.range.start);const o=n.writer,i=[];for(;("ul"==t.parent.name||"ol"==t.parent.name)&&"li"==(t=o.breakContainer(t)).parent.name;){const e=t,n=$o.createAt(t.parent,"end");if(!e.isEqual(n)){const t=o.remove(new Qo(e,n));i.push(t)}t=$o.createAfter(t.parent)}if(i.length>0){for(let e=0;e<i.length;e++){const n=t.nodeBefore;if(t=o.insert(t,i[e]).end,e>0){const e=Um(o,n,n.nextSibling);e&&e.parent==n&&t.offset--}}Um(o,t.nodeBefore,t.nodeAfter)}}}function Rm(t,e,n){const o=n.mapper.toViewPosition(e.position),i=o.nodeBefore,r=o.nodeAfter;Um(n.writer,i,r)}function Dm(t,e,n){if(n.consumable.consume(e.viewItem,{name:!0})){const t=n.writer,o=this.conversionApi.store,i=t.createElement("listItem");o.indent=o.indent||0,t.setAttribute("listIndent",o.indent,i);const r=e.viewItem.parent&&"ol"==e.viewItem.parent.name?"numbered":"bulleted";t.setAttribute("listType",r,i),o.indent++;const s=n.splitToAllowedParent(i,e.modelCursor);if(!s)return;t.insert(i,s.position);let a=Hs.createAfter(i);for(const t of e.viewItem.getChildren())"ul"==t.name||"ol"==t.name?a=n.convertItem(t,a).modelCursor:n.convertItem(t,Hs.createAt(i,"end"));o.indent--,e.modelRange=new qs(e.modelCursor,a),s.cursorParent?e.modelCursor=Hs.createAt(s.cursorParent):e.modelCursor=e.modelRange.end}}function Lm(t,e,n){if(n.consumable.test(e.viewItem,{name:!0})){const t=Array.from(e.viewItem.getChildren());for(const e of t)e.is("li")||e._remove()}}function jm(t,e,n){if(n.consumable.test(e.viewItem,{name:!0})){if(0===e.viewItem.childCount)return;const t=[...e.viewItem.getChildren()];let n=!1,o=!0;for(const e of t)!n||e.is("ul")||e.is("ol")||e._remove(),e.is("text")?(o&&(e._data=e.data.replace(/^\s+/,"")),(!e.nextSibling||e.nextSibling.is("ul")||e.nextSibling.is("ol"))&&(e._data=e.data.replace(/\s+$/,""))):(e.is("ul")||e.is("ol"))&&(n=!0),o=!1}}function Vm(t,e){if(e.isPhantom)return;const n=e.modelPosition.nodeBefore;if(n&&n.is("listItem")){const t=e.mapper.toViewElement(n),o=t.getAncestors().find(t=>t.is("ul")||t.is("ol")),i=new Go({startPosition:$o.createAt(t,0)});for(const t of i){if("elementStart"==t.type&&t.item.is("li")){e.viewPosition=t.previousPosition;break}if("elementEnd"==t.type&&t.item==o){e.viewPosition=t.nextPosition;break}}}}function Fm(t,e){const n=e.viewPosition,o=n.parent,i=e.mapper;if("ul"==o.name||"ol"==o.name){if(n.isAtEnd){const t=i.toModelElement(n.nodeBefore),o=i.getModelLength(n.nodeBefore);e.modelPosition=Hs.createBefore(t).getShiftedBy(o)}else{const t=i.toModelElement(n.nodeAfter);e.modelPosition=Hs.createBefore(t)}t.stop()}else if("li"==o.name&&n.nodeBefore&&("ul"==n.nodeBefore.name||"ol"==n.nodeBefore.name)){const r=i.toModelElement(o);let s=1,a=n.nodeBefore;for(;a&&(a.is("ul")||a.is("ol"));)s+=i.getModelLength(a),a=a.previousSibling;e.modelPosition=Hs.createBefore(r).getShiftedBy(s),t.stop()}}function zm(t,[e,n]){let o,i=e.is("documentFragment")?e.getChild(0):e;if(o=n?new Js(n):this.document.selection,i&&i.is("listItem")){const t=o.getFirstPosition();let e=null;if(t.parent.is("listItem")?e=t.parent:t.nodeBefore&&t.nodeBefore.is("listItem")&&(e=t.nodeBefore),e){const t=e.getAttribute("listIndent");if(t>0)for(;i&&i.is("listItem");)i._setAttribute("listIndent",i.getAttribute("listIndent")+t),i=i.nextSibling}}}function Bm(t,e){const n=!!e.sameIndent,o=!!e.smallerIndent,i=t instanceof Fs?t.getAttribute("listIndent"):e.listIndent;let r=t instanceof Fs?t.previousSibling:t.nodeBefore;for(;r&&"listItem"==r.name;){const t=r.getAttribute("listIndent");if(n&&i==t||o&&i>t)return r;r=r.previousSibling}return null}function Um(t,e,n){return e&&n&&("ul"==e.name||"ol"==e.name)&&e.name==n.name?t.mergeContainers($o.createAfter(e)):null}function Hm(t,e,n){const o=e.parent,i=n.mapper,r=n.writer;let s=i.toViewPosition(Hs.createBefore(t));const a=Bm(t,{sameIndent:!0,smallerIndent:!0}),c=t.previousSibling;if(a&&a.getAttribute("listIndent")==t.getAttribute("listIndent")){const t=i.toViewElement(a);s=r.breakContainer($o.createAfter(t))}else s=c&&"listItem"==c.name?i.toViewPosition(Hs.createAt(c,"end")):i.toViewPosition(Hs.createBefore(t));if(s=Wm(s),r.insert(s,o),c&&"listItem"==c.name){const t=i.toViewElement(c),n=new Go({boundaries:new Qo($o.createAt(t,0),s),ignoreElementEnd:!0});for(const t of n)if(t.item.is("li")){const o=r.breakContainer($o.createBefore(t.item)),i=t.item.parent,s=$o.createAt(e,"end");Um(r,s.nodeBefore,s.nodeAfter),r.move(Qo.createOn(i),s),n.position=o}}else{const n=o.nextSibling;if(n&&(n.is("ul")||n.is("ol"))){let o=null;for(const e of n.getChildren()){const n=i.toModelElement(e);if(!(n&&n.getAttribute("listIndent")>t.getAttribute("listIndent")))break;o=e}o&&(r.breakContainer($o.createAfter(o)),r.move(Qo.createOn(o.parent),$o.createAt(e,"end")))}}Um(r,o,o.nextSibling),Um(r,o.previousSibling,o)}function qm(t,e,n,o,i){const r=Bm(e,{sameIndent:!0,smallerIndent:!0,listIndent:t}),s=i.mapper,a=i.writer,c=r?r.getAttribute("listIndent"):null;let l;if(r)if(c==t){const t=s.toViewElement(r).parent;l=$o.createAfter(t)}else{const t=Hs.createAt(r,"end");l=s.toViewPosition(t)}else l=n;l=Wm(l);for(const t of[...o.getChildren()])(t.is("ul")||t.is("ol"))&&(l=a.move(Qo.createOn(t),l).end,Um(a,t,t.nextSibling),Um(a,t.previousSibling,t))}function Wm(t){return t.getLastMatchingPosition(t=>t.item.is("uiElement"))}class Ym extends Fl{static get requires(){return[Xh]}init(){const t=this.editor;t.model.schema.register("listItem",{inheritAllFrom:"$block",allowAttributes:["listType","listIndent"]});const e=t.data,n=t.editing;t.model.document.registerPostFixer(e=>(function(t,e){const n=t.document.differ.getChanges(),o=new Map;let i=!1;for(const t of n)if("insert"==t.type&&"listItem"==t.name)r(t.position);else if("insert"==t.type&&"listItem"!=t.name){if("$text"!=t.name){const n=t.position.nodeAfter;n.hasAttribute("listIndent")&&(e.removeAttribute("listIndent",n),i=!0),n.hasAttribute("listType")&&(e.removeAttribute("listType",n),i=!0)}r(t.position.getShiftedBy(t.length))}else"remove"==t.type&&"listItem"==t.name?r(t.position):"attribute"==t.type&&"listIndent"==t.attributeKey?r(t.range.start):"attribute"==t.type&&"listType"==t.attributeKey&&r(t.range.start);for(const t of o.values())s(t),a(t);return i;function r(t){const e=t.nodeBefore;if(e&&e.is("listItem")){let n=e;if(o.has(n))return;for(;n.previousSibling&&n.previousSibling.is("listItem");)if(n=n.previousSibling,o.has(n))return;o.set(t.nodeBefore,n)}else{const e=t.nodeAfter;e&&e.is("listItem")&&o.set(e,e)}}function s(t){let n=0,o=null;for(;t&&t.is("listItem");){const r=t.getAttribute("listIndent");if(r>n){let s;null===o?(o=r-n,s=n):(o>r&&(o=r),s=r-o),e.setAttribute("listIndent",s,t),i=!0}else o=null,n=t.getAttribute("listIndent")+1;t=t.nextSibling}}function a(t){let n=[],o=null;for(;t&&t.is("listItem");){const r=t.getAttribute("listIndent");if(o&&o.getAttribute("listIndent")>r&&(n=n.slice(0,r+1)),0!=r)if(n[r]){const o=n[r];t.getAttribute("listType")!=o&&(e.setAttribute("listType",o,t),i=!0)}else n[r]=t.getAttribute("listType");o=t,t=t.nextSibling}}})(t.model,e)),n.mapper.registerViewToModelLength("li",Gm),e.mapper.registerViewToModelLength("li",Gm),n.mapper.on("modelToViewPosition",Vm),n.mapper.on("viewToModelPosition",Fm),e.mapper.on("modelToViewPosition",Vm),n.downcastDispatcher.on("insert",Om,{priority:"high"}),n.downcastDispatcher.on("insert:listItem",Sm),e.downcastDispatcher.on("insert",Om,{priority:"high"}),e.downcastDispatcher.on("insert:listItem",Sm),n.downcastDispatcher.on("attribute:listType:listItem",Im),e.downcastDispatcher.on("attribute:listType:listItem",Im),n.downcastDispatcher.on("attribute:listIndent:listItem",Nm),e.downcastDispatcher.on("attribute:listIndent:listItem",Nm),n.downcastDispatcher.on("remove:listItem",Em),n.downcastDispatcher.on("remove",Rm,{priority:"low"}),e.downcastDispatcher.on("remove:listItem",Em),e.downcastDispatcher.on("remove",Rm,{priority:"low"}),e.upcastDispatcher.on("element:ul",Lm,{priority:"high"}),e.upcastDispatcher.on("element:ol",Lm,{priority:"high"}),e.upcastDispatcher.on("element:li",jm,{priority:"high"}),e.upcastDispatcher.on("element:li",Dm),t.model.on("insertContent",zm,{priority:"high"}),t.commands.add("numberedList",new Am(t,"numbered")),t.commands.add("bulletedList",new Am(t,"bulleted")),t.commands.add("indentList",new Mm(t,"forward")),t.commands.add("outdentList",new Mm(t,"backward"));const o=this.editor.editing.view.document;this.listenTo(o,"enter",(t,e)=>{const n=this.editor.model.document,o=n.selection.getLastPosition().parent;n.selection.isCollapsed&&"listItem"==o.name&&o.isEmpty&&(this.editor.execute("outdentList"),e.preventDefault(),t.stop())}),this.listenTo(o,"delete",(t,e)=>{if("backward"!==e.direction)return;const n=this.editor.model.document.selection;if(!n.isCollapsed)return;const o=n.getFirstPosition();if(!o.isAtStart)return;const i=o.parent;"listItem"===i.name&&(i.previousSibling&&"listItem"===i.previousSibling.name||(this.editor.execute("outdentList"),e.preventDefault(),t.stop()))},{priority:"high"});const i=t=>(e,n)=>{this.editor.commands.get(t).isEnabled&&(this.editor.execute(t),n())};this.editor.keystrokes.set("Tab",i("indentList")),this.editor.keystrokes.set("Shift+Tab",i("outdentList"))}}function Gm(t){let e=1;for(const n of t.getChildren())if("ul"==n.name||"ol"==n.name)for(const t of n.getChildren())e+=Gm(t);return e}var $m=n(33),Qm=n.n($m),Jm=n(34),Km=n.n(Jm);class Zm extends Fl{init(){const t=this.editor.t;this._addButton("numberedList",t("m"),Qm.a),this._addButton("bulletedList",t("n"),Km.a)}_addButton(t,e,n){const o=this.editor;o.ui.componentFactory.add(t,i=>{const r=o.commands.get(t),s=new Ld(i);return s.set({label:e,icon:n,tooltip:!0}),s.bind("isOn","isEnabled").to(r,"value","isEnabled"),this.listenTo(s,"execute",()=>o.execute(t)),s})}}function Xm(t,e){return t=>{t.on("attribute:url:media",n)};function n(n,o,i){if(!i.consumable.consume(o.item,n.name))return;const r=o.attributeNewValue,s=i.writer,a=i.mapper.toViewElement(o.item);s.remove(Qo.createIn(a));const c=t.getMediaViewElement(s,r,e);s.insert($o.createAt(a),c)}}const tp=Symbol("isMedia");function ep(t,e,n,o){const i=t.createContainerElement("figure",{class:"media"});return i.getFillerOffset=op,t.insert($o.createAt(i),e.getMediaViewElement(t,n,o)),i}function np(t){const e=t.getSelectedElement();return e&&e.is("media")?e:null}function op(){return null}class ip extends ql{refresh(){const t=this.editor.model,e=t.document.selection,n=t.schema,o=e.getFirstPosition(),i=np(e);let r=o.parent;r!=r.root&&(r=r.parent),this.value=i?i.getAttribute("url"):null,this.isEnabled=n.checkChild(r,"media")}execute(t){const e=this.editor.model,n=e.document.selection,o=np(n);if(o)e.change(e=>{e.setAttribute("url",t,o)});else{const o=$u(n);e.change(n=>{const i=n.createElement("media",{url:t});e.insertContent(i,o),n.setSelection(i,"on")})}}}var rp=n(35),sp=n.n(rp);const ap="0 0 64 42";class cp{constructor(t,e){const n=e.providers,o=e.extraProviders||[],i=new Set(e.removeProviders),r=n.concat(o).filter(t=>{const e=t.name;return e?!i.has(e):(fs.a.warn("media-embed-no-provider-name: The configured media provider has no name and cannot be used.",{provider:t}),!1)});this.locale=t,this.providerDefinitions=r}hasMedia(t){return!!this._getMedia(t)}getMediaViewElement(t,e,n){return this._getMedia(e).getViewElement(t,n)}_getMedia(t){if(!t)return new lp(this.locale);t=t.trim();for(const e of this.providerDefinitions){const n=e.html;let o=e.url;Array.isArray(o)||(o=[o]);for(const e of o){const o=this._getUrlMatches(t,e);if(o)return new lp(this.locale,t,o,n)}}return null}_getUrlMatches(t,e){let n=t.match(e);if(n)return n;let o=t.replace(/^https?:\/\//,"");return(n=o.match(e))?n:(n=(o=o.replace(/^www\./,"")).match(e))||null}}class lp{constructor(t,e,n,o){this.url=this._getValidUrl(e),this._t=t.t,this._match=n,this._previewRenderer=o}getViewElement(t,e){const n={};if(e.renderForEditingView||e.renderMediaPreview&&this.url&&this._previewRenderer){this.url&&(n["data-oembed-url"]=this.url),e.renderForEditingView&&(n.class="ck-media__wrapper");const o=this._getPreviewHtml(e);return t.createUIElement("div",n,function(t){const e=this.toDomElement(t);return e.innerHTML=o,e})}return this.url&&(n.url=this.url),t.createEmptyElement("oembed",n)}_getPreviewHtml(t){return this._previewRenderer?this._previewRenderer(this._match):this.url&&t.renderForEditingView?this._getPlaceholderHtml():""}_getPlaceholderHtml(){const t=new Dd,e=new Rd;return t.text=this._t("Open media in new tab"),e.content=sp.a,e.viewBox=ap,new rl({tag:"div",attributes:{class:"ck ck-reset_all ck-media__placeholder"},children:[{tag:"div",attributes:{class:"ck-media__placeholder__icon"},children:[e]},{tag:"a",attributes:{class:"ck-media__placeholder__url",target:"new",href:this.url},children:[{tag:"span",attributes:{class:"ck-media__placeholder__url__text"},children:[this.url]},t]}]}).render().outerHTML}_getValidUrl(t){return t?t.match(/^https?/)?t:"https://"+t:null}}n(104);class dp extends Fl{constructor(t){super(t),t.config.define("mediaEmbed",{providers:[{name:"dailymotion",url:/^dailymotion\.com\/video\/(\w+)/,html:t=>{return'<div style="position: relative; padding-bottom: 100%; height: 0; ">'+`<iframe src="https://www.dailymotion.com/embed/video/${t[1]}" `+'style="position: absolute; width: 100%; height: 100%; top: 0; left: 0;" frameborder="0" width="480" height="270" allowfullscreen allow="autoplay"></iframe></div>'}},{name:"spotify",url:[/^open\.spotify\.com\/(artist\/\w+)/,/^open\.spotify\.com\/(album\/\w+)/,/^open\.spotify\.com\/(track\/\w+)/],html:t=>{return'<div style="position: relative; padding-bottom: 100%; height: 0; padding-bottom: 126%;">'+`<iframe src="https://open.spotify.com/embed/${t[1]}" `+'style="position: absolute; width: 100%; height: 100%; top: 0; left: 0;" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe></div>'}},{name:"youtube",url:[/^youtube\.com\/watch\?v=([\w-]+)/,/^youtube\.com\/v\/([\w-]+)/,/^youtube\.com\/embed\/([\w-]+)/,/^youtu\.be\/([\w-]+)/],html:t=>{return'<div style="position: relative; padding-bottom: 100%; height: 0; padding-bottom: 56.2493%;">'+`<iframe src="https://www.youtube.com/embed/${t[1]}" `+'style="position: absolute; width: 100%; height: 100%; top: 0; left: 0;" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div>'}},{name:"vimeo",url:[/^vimeo\.com\/(\d+)/,/^vimeo\.com\/[^/]+\/[^/]+\/video\/(\d+)/,/^vimeo\.com\/album\/[^/]+\/video\/(\d+)/,/^vimeo\.com\/channels\/[^/]+\/(\d+)/,/^vimeo\.com\/groups\/[^/]+\/videos\/(\d+)/,/^vimeo\.com\/ondemand\/[^/]+\/(\d+)/,/^player\.vimeo\.com\/video\/(\d+)/],html:t=>{return'<div style="position: relative; padding-bottom: 100%; height: 0; padding-bottom: 56.2493%;">'+`<iframe src="https://player.vimeo.com/video/${t[1]}" `+'style="position: absolute; width: 100%; height: 100%; top: 0; left: 0;" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div>'}},{name:"instagram",url:/^instagram\.com\/p\/(\w+)/},{name:"twitter",url:/^twitter\.com/},{name:"googleMaps",url:/^google\.com\/maps/},{name:"flickr",url:/^flickr\.com/},{name:"facebook",url:/^facebook\.com/}]}),this.registry=new cp(t.locale,t.config.get("mediaEmbed"))}init(){const t=this.editor,e=t.model.schema,n=t.t,o=t.conversion,i=t.config.get("mediaEmbed.previewsInData"),r=this.registry;t.commands.add("mediaEmbed",new ip(t)),e.register("media",{isObject:!0,isBlock:!0,allowWhere:"$block",allowAttributes:["url"]}),o.for("dataDowncast").add(aa({model:"media",view:(t,e)=>{const n=t.getAttribute("url");return ep(e,r,n,{renderMediaPreview:n&&i})}})),o.for("dataDowncast").add(Xm(r,{renderMediaPreview:i})),o.for("editingDowncast").add(aa({model:"media",view:(t,e)=>{const o=t.getAttribute("url");return function(t,e,n){return e.setCustomProperty(tp,!0,t),Wu(t,e,{label:n})}(ep(e,r,o,{renderForEditingView:!0}),e,n("o"))}})),o.for("editingDowncast").add(Xm(r,{renderForEditingView:!0})),o.for("upcast").add(Oa({view:{name:"oembed",attributes:{url:!0}},model:(t,e)=>{const n=t.getAttribute("url");if(r.hasMedia(n))return e.createElement("media",{url:n})}})).add(Oa({view:{name:"div",attributes:{"data-oembed-url":!0}},model:(t,e)=>{const n=t.getAttribute("data-oembed-url");if(r.hasMedia(n))return e.createElement("media",{url:n})}}))}}const up=/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w.-]+)+[\w\-._~:/?#[\]@!$&'()*+,;=]+$/;class hp extends Fl{static get requires(){return[Hl,Ud]}static get pluginName(){return"AutoMediaEmbed"}constructor(t){super(t),this._timeoutId=null,this._positionToInsert=null}init(){const t=this.editor,e=t.model.document;this.listenTo(t.plugins.get(Hl),"inputTransformation",()=>{const t=e.selection.getFirstRange(),n=Pc.createFromPosition(t.start);n.stickiness="toPrevious";const o=Pc.createFromPosition(t.end);o.stickiness="toNext",e.once("change:data",()=>{this._embedMediaBetweenPositions(n,o),n.detach(),o.detach()},{priority:"high"})}),t.commands.get("undo").on("execute",()=>{this._timeoutId&&(Ki.window.clearTimeout(this._timeoutId),this._positionToInsert.detach(),this._timeoutId=null,this._positionToInsert=null)},{priority:"high"})}_embedMediaBetweenPositions(t,e){const n=this.editor,o=n.plugins.get(dp).registry,i=new Xs(t,e),r=new zs({boundaries:i,ignoreElementEnd:!0});let s="";for(const t of r)t.item.is("textProxy")&&(s+=t.item.data);(s=s.trim()).match(up)&&o.hasMedia(s)&&(this._positionToInsert=Pc.createFromPosition(t),this._timeoutId=Ki.window.setTimeout(()=>{n.model.change(t=>{this._timeoutId=null,t.remove(i),"$graveyard"!==this._positionToInsert.root.rootName&&t.setSelection(this._positionToInsert),n.commands.execute("mediaEmbed",s),this._positionToInsert.detach(),this._positionToInsert=null})},100))}}n(106);class fp extends xl{constructor(t,e){super(e);const n=e.t;this.focusTracker=new Kc,this.keystrokes=new Uc,this.urlInputView=this._createUrlInput(),this.saveButtonView=this._createButton(n("aw"),uh.a,"ck-button-save"),this.saveButtonView.type="submit",this.cancelButtonView=this._createButton(n("ax"),fh.a,"ck-button-cancel","cancel"),this._focusables=new tl,this._focusCycler=new Nl({focusables:this._focusables,focusTracker:this.focusTracker,keystrokeHandler:this.keystrokes,actions:{focusPrevious:"shift + tab",focusNext:"tab"}}),this._validators=t,this.setTemplate({tag:"form",attributes:{class:["ck","ck-media-form"],tabindex:"-1"},children:[this.urlInputView,this.saveButtonView,this.cancelButtonView]})}render(){super.render(),lh({view:this}),[this.urlInputView,this.saveButtonView,this.cancelButtonView].forEach(t=>{this._focusables.add(t),this.focusTracker.add(t.element)}),this.keystrokes.listenTo(this.element);const t=t=>t.stopPropagation();this.keystrokes.set("arrowright",t),this.keystrokes.set("arrowleft",t),this.keystrokes.set("arrowup",t),this.keystrokes.set("arrowdown",t),this.listenTo(this.urlInputView.element,"selectstart",(t,e)=>{e.stopPropagation()},{priority:"high"})}focus(){this._focusCycler.focusFirst()}get url(){return this.urlInputView.inputView.element.value.trim()}set url(t){this.urlInputView.inputView.element.value=t.trim()}isValid(){this.resetErrors();for(const t of this._validators){const e=t(this);if(e)return this.urlInputView.errorText=e,!1}return!0}resetErrors(){this.urlInputView.errorText=!1}_createUrlInput(){const t=this.locale.t,e=new ah(this.locale,ch);return e.label=t("bg"),e.inputView.placeholder="https://example.com",e}_createButton(t,e,n,o){const i=new Ld(this.locale);return i.set({label:t,icon:e,tooltip:!0}),i.extendTemplate({attributes:{class:n}}),o&&i.delegate("execute").to(this,o),i}}var mp=n(36),pp=n.n(mp);class gp extends Fl{static get requires(){return[dp]}init(){const t=this.editor,e=t.commands.get("mediaEmbed"),n=t.plugins.get(dp).registry;t.ui.componentFactory.add("mediaEmbed",o=>{const i=new fp(function(t,e){return[e=>{if(!e.url.length)return t("q")},n=>{if(!e.hasMedia(n.url))return t("r")}]}(t.t,n),o),r=bf(o);return this._setUpDropdown(r,i,e,t),this._setUpForm(i,r,e),r})}_setUpDropdown(t,e,n){const o=this.editor,i=o.t,r=t.buttonView;function s(){o.editing.view.focus(),t.isOpen=!1}t.bind("isEnabled").to(n),t.panelView.children.add(e),r.set({label:i("p"),icon:pp.a,tooltip:!0}),r.on("open",()=>{e.url=n.value||"",e.urlInputView.select(),e.focus()},{priority:"low"}),t.on("submit",()=>{e.isValid()&&(o.execute("mediaEmbed",e.url),s())}),t.on("change:isOpen",()=>e.resetErrors()),t.on("cancel",()=>s())}_setUpForm(t,e,n){t.delegate("submit","cancel").to(e),t.urlInputView.bind("value").to(n,"value"),t.urlInputView.bind("isReadOnly").to(n,"isEnabled",t=>!t),t.saveButtonView.bind("isEnabled").to(n)}}function bp(t,e){let n=e.parent;for(;n;){if(n.name===t)return n;n=n.parent}}function wp(t,e,n,o,i=1){e>i?o.setAttribute(t,e,n):o.removeAttribute(t,n)}function _p(t,e,n={}){const o=t.createElement("tableCell",n);t.insertElement("paragraph",o),t.insert(o,e)}function kp(){return t=>{t.on("element:table",(t,e,n)=>{const o=e.viewItem;if(!n.consumable.test(o,{name:!0}))return;const{rows:i,headingRows:r,headingColumns:s}=function(t){const e={headingRows:0,headingColumns:0},n=[],o=[];let i;for(const r of Array.from(t.getChildren()))if("tbody"===r.name||"thead"===r.name||"tfoot"===r.name){"thead"!==r.name||i||(i=r);for(const t of Array.from(r.getChildren()))if("thead"===t.parent.name&&t.parent===i)e.headingRows++,n.push(t);else{o.push(t);const n=yp(t);n>e.headingColumns&&(e.headingColumns=n)}}return e.rows=[...n,...o],e}(o),a={};s&&(a.headingColumns=s),r&&(a.headingRows=r);const c=n.writer.createElement("table",a),l=n.splitToAllowedParent(c,e.modelCursor);if(l){if(n.writer.insert(c,l.position),n.consumable.consume(o,{name:!0}),i.length)i.forEach(t=>n.convertItem(t,Hs.createAt(c,"end")));else{const t=n.writer.createElement("tableRow");n.writer.insert(t,Hs.createAt(c,"end")),_p(n.writer,Hs.createAt(t,"end"))}e.modelRange=new qs(Hs.createBefore(c),Hs.createAfter(c)),l.cursorParent?e.modelCursor=Hs.createAt(l.cursorParent):e.modelCursor=e.modelRange.end}})}}function vp(t){return e=>{e.on(`element:${t}`,(t,e,n)=>{const o=e.viewItem;if(!n.consumable.test(o,{name:!0}))return;const i=n.writer.createElement("tableCell"),r=n.splitToAllowedParent(i,e.modelCursor);if(!r)return;n.writer.insert(i,r.position),n.consumable.consume(o,{name:!0});const s=Hs.createAt(i);n.convertChildren(o,s),i.childCount||n.writer.insertElement("paragraph",s),e.modelRange=new qs(Hs.createBefore(i),Hs.createAfter(i)),e.modelCursor=e.modelRange.end})}}function yp(t){let e=0,n=0;const o=Array.from(t.getChildren()).filter(t=>"th"===t.name||"td"===t.name);for(;n<o.length&&"th"===o[n].name;){const t=o[n];e+=parseInt(t.getAttribute("colspan")||1),n++}return e}class xp{constructor(t,e={}){this.table=t,this.startRow=e.startRow||0,this.endRow="number"==typeof e.endRow?e.endRow:void 0,this.includeSpanned=!!e.includeSpanned,this.column="number"==typeof e.column?e.column:void 0,this._skipRows=new Set,this._row=0,this._column=0,this._cell=0,this._spannedCells=new Map}[Symbol.iterator](){return this}next(){const t=this.table.getChild(this._row);if(!t||this._isOverEndRow())return{done:!0};if(this._isSpanned(this._row,this._column)){const t=this._column,e=this._formatOutValue(void 0,t);return this._column++,!this.includeSpanned||this._shouldSkipRow()||this._shouldSkipColumn(t,1)?this.next():e}const e=t.getChild(this._cell);if(!e)return this._row++,this._column=0,this._cell=0,this.next();const n=parseInt(e.getAttribute("colspan")||1),o=parseInt(e.getAttribute("rowspan")||1);(n>1||o>1)&&this._recordSpans(this._row,this._column,o,n);const i=this._column,r=this._formatOutValue(e,i,o,n);return this._column++,this._cell++,this._shouldSkipRow()||this._shouldSkipColumn(i,n)?this.next():r}skipRow(t){this._skipRows.add(t)}_isOverEndRow(){return void 0!==this.endRow&&this._row>this.endRow}_formatOutValue(t,e,n=1,o=1){return{done:!1,value:{cell:t,row:this._row,column:e,rowspan:n,colspan:o,cellIndex:this._cell}}}_shouldSkipRow(){const t=this._row<this.startRow,e=this._skipRows.has(this._row);return t||e}_shouldSkipColumn(t,e){if(void 0===this.column)return!1;const n=t===this.column,o=t<this.column&&t+e>this.column;return!n&&!o}_isSpanned(t,e){if(!this._spannedCells.has(t))return!1;return this._spannedCells.get(t).has(e)}_recordSpans(t,e,n,o){for(let n=e+1;n<=e+o-1;n++)this._markSpannedCell(t,n);for(let i=t+1;i<t+n;i++)for(let t=e;t<=e+o-1;t++)this._markSpannedCell(i,t)}_markSpannedCell(t,e){this._spannedCells.has(t)||this._spannedCells.set(t,new Map),this._spannedCells.get(t).set(e,!0)}}const Ap=Symbol("isTable");function Cp(t){return!!t.getCustomProperty(Ap)&&qu(t)}function Tp(t){const e=t.getSelectedElement();return!(!e||!Cp(e))}function Mp(t){const e=bp("table",t.getFirstPosition());return!(!e||!Cp(e.parent))}function Pp(t={}){return e=>e.on("insert:table",(e,n,o)=>{const i=n.item;if(!o.consumable.consume(i,"insert"))return;o.consumable.consume(i,"attribute:headingRows:table"),o.consumable.consume(i,"attribute:headingColumns:table");const r=t&&t.asWidget,s=o.writer.createContainerElement("figure",{class:"table"}),a=o.writer.createContainerElement("table");let c;o.writer.insert($o.createAt(s),a),r&&(c=function(t,e){return e.setCustomProperty(Ap,!0,t),Wu(t,e,{hasSelectionHandler:!0})}(s,o.writer));const l=new xp(i),d={headingRows:i.getAttribute("headingRows")||0,headingColumns:i.getAttribute("headingColumns")||0};for(const e of l){const{row:n,cell:r}=e,s=Fp(Vp(n,d),a,o),c=Lp(i.getChild(n),n,s,o);o.consumable.consume(r,"insert"),Dp(e,d,$o.createAt(c,"end"),o,t)}const u=o.mapper.toViewPosition(n.range.start);o.mapper.bindElements(i,r?c:s),o.writer.insert(u,r?c:s)})}function Sp(t={}){return e=>e.on("insert:tableRow",(e,n,o)=>{const i=n.item;if(!o.consumable.consume(i,"insert"))return;const r=i.parent,s=Hp(o.mapper.toViewElement(r)),a=r.getChildIndex(i),c=new xp(r,{startRow:a,endRow:a}),l={headingRows:r.getAttribute("headingRows")||0,headingColumns:r.getAttribute("headingColumns")||0};for(const e of c){const n=Lp(i,a,Fp(Vp(a,l),s,o),o);o.consumable.consume(e.cell,"insert"),Dp(e,l,$o.createAt(n,"end"),o,t)}})}function Ep(t={}){return e=>e.on("insert:tableCell",(e,n,o)=>{const i=n.item;if(!o.consumable.consume(i,"insert"))return;const r=i.parent,s=r.parent,a=s.getChildIndex(r),c=new xp(s,{startRow:a,endRow:a}),l={headingRows:s.getAttribute("headingRows")||0,headingColumns:s.getAttribute("headingColumns")||0};for(const e of c)if(e.cell===i){const n=o.mapper.toViewElement(r);return void Dp(e,l,$o.createAt(n,r.getChildIndex(i)),o,t)}})}function Ip(t={}){const e=!!t.asWidget;return t=>t.on("attribute:headingRows:table",(t,n,o)=>{const i=n.item;if(!o.consumable.consume(n.item,t.name))return;const r=Hp(o.mapper.toViewElement(i)),s=n.attributeOldValue,a=n.attributeNewValue;if(a>s){const t=Array.from(i.getChildren()).filter(({index:t})=>c(t,s-1,a));Up(t,Fp("thead",r,o),o,"end");for(const n of t)for(const t of n.getChildren())Op(t,"th",o,e);Bp("tbody",r,o)}else{Up(Array.from(i.getChildren()).filter(({index:t})=>c(t,a-1,s)).reverse(),Fp("tbody",r,o),o);const t=new xp(i,{startRow:a?a-1:a,endRow:s-1}),n={headingRows:i.getAttribute("headingRows")||0,headingColumns:i.getAttribute("headingColumns")||0};for(const i of t)Rp(i,n,o,e);Bp("thead",r,o)}function c(t,e,n){return t>e&&t<n}})}function Np(t={}){const e=!!t.asWidget;return t=>t.on("attribute:headingColumns:table",(t,n,o)=>{const i=n.item;if(!o.consumable.consume(n.item,t.name))return;const r={headingRows:i.getAttribute("headingRows")||0,headingColumns:i.getAttribute("headingColumns")||0},s=n.attributeOldValue,a=n.attributeNewValue,c=(s>a?s:a)-1;for(const t of new xp(i))t.column>c||Rp(t,r,o,e)})}function Op(t,e,n,o){const i=n.mapper.toViewElement(t);if(!i)return;let r;if(o){r=Gu(n.writer.createEditableElement(e,i.getAttributes()),n.writer),n.writer.insert($o.createAfter(i),r),n.writer.move(Qo.createIn(i),$o.createAt(r)),n.writer.remove(Qo.createOn(i))}else r=n.writer.rename(e,i);n.mapper.bindElements(t,r)}function Rp(t,e,n,o){const{cell:i}=t,r=jp(t,e),s=n.mapper.toViewElement(i);s&&s.name!==r&&Op(i,r,n,o)}function Dp(t,e,n,o,i){const r=i&&i.asWidget,s=jp(t,e),a=r?Gu(o.writer.createEditableElement(s),o.writer):o.writer.createContainerElement(s),c=t.cell,l=1===c.childCount&&"paragraph"===c.getChild(0).name;if(o.writer.insert(n,a),l){const t=c.getChild(0),e=$o.createAt(a,"end");if(o.consumable.consume(t,"insert"),i.asWidget){const n=[...t.getAttributeKeys()].length?"p":"span",i=o.writer.createContainerElement(n);o.mapper.bindElements(t,i),o.writer.insert(e,i),o.mapper.bindElements(c,a)}else o.mapper.bindElements(c,a),o.mapper.bindElements(t,a)}else o.mapper.bindElements(c,a)}function Lp(t,e,n,o){let i=o.mapper.toViewElement(t);if(!i){o.consumable.consume(t,"insert"),i=o.writer.createContainerElement("tr"),o.mapper.bindElements(t,i);const r=t.parent.getAttribute("headingRows")||0,s=r>0&&e>=r?e-r:e,a=$o.createAt(n,s);o.writer.insert(a,i)}return i}function jp(t,e){const{row:n,column:o}=t,{headingColumns:i,headingRows:r}=e;return r&&r>n?"th":i&&i>o?"th":"td"}function Vp(t,e){return t<e.headingRows?"thead":"tbody"}function Fp(t,e,n){const o=zp(t,e);return o||function(t,e,n){const o=n.writer.createContainerElement(t);return n.writer.insert($o.createAt(e,"tbody"==t?"end":"start"),o),o}(t,e,n)}function zp(t,e){for(const n of e.getChildren())if(n.name==t)return n}function Bp(t,e,n){const o=zp(t,e);o&&0===o.childCount&&n.writer.remove(Qo.createOn(o))}function Up(t,e,n,o){for(const i of t){const t=n.mapper.toViewElement(i);t&&n.writer.move(Qo.createOn(t),$o.createAt(e,o))}}function Hp(t){for(const e of t.getChildren())if("table"===e.name)return e}class qp extends Fl{static get pluginName(){return"TableUtils"}getCellLocation(t){const e=t.parent,n=e.parent,o=n.getChildIndex(e),i=new xp(n,{startRow:o,endRow:o});for(const{cell:e,row:n,column:o}of i)if(e===t)return{row:n,column:o}}createTable(t,e,n){const o=t.createElement("table");return Wp(t,o,0,e,n),o}insertRows(t,e={}){const n=this.editor.model,o=e.at||0,i=e.rows||1;n.change(e=>{const n=t.getAttribute("headingRows")||0;if(n>o&&e.setAttribute("headingRows",n+i,t),0===o||o===t.childCount)return void Wp(e,t,o,i,this.getColumns(t));const r=new xp(t,{endRow:o});let s=0;for(const{row:t,rowspan:n,colspan:a,cell:c}of r){t<o&&t+n>o&&e.setAttribute("rowspan",n+i,c),t===o&&(s+=a)}Wp(e,t,o,i,s)})}insertColumns(t,e={}){const n=this.editor.model,o=e.at||0,i=e.columns||1;n.change(e=>{const n=t.getAttribute("headingColumns");o<n&&e.setAttribute("headingColumns",n+i,t);const r=this.getColumns(t);if(0===o||r===o){for(const n of t.getChildren())Yp(i,e,Hs.createAt(n,o?"end":0));return}const s=new xp(t,{column:o,includeSpanned:!0});for(const{row:n,column:r,cell:a,colspan:c,rowspan:l,cellIndex:d}of s)if(r!==o){if(e.setAttribute("colspan",c+i,a),s.skipRow(n),l>1)for(let t=n+1;t<n+l;t++)s.skipRow(t)}else{const o=Hs.createFromParentAndOffset(t.getChild(n),d);Yp(i,e,o)}})}splitCellVertically(t,e=2){const n=this.editor.model,o=t.parent.parent,i=parseInt(t.getAttribute("rowspan")||1),r=parseInt(t.getAttribute("colspan")||1);n.change(n=>{if(r>1){const{newCellsSpan:o,updatedSpan:s}=Gp(r,e);wp("colspan",s,t,n);const a={};o>1&&(a.colspan=o),i>1&&(a.rowspan=i),Yp(r>e?e-1:r-1,n,Hs.createAfter(t),a)}if(r<e){const s=e-r,a=[...new xp(o)],{column:c}=a.find(({cell:e})=>e===t),l=a.filter(({cell:e,colspan:n,column:o})=>{return e!==t&&o===c||o<c&&o+n>c});for(const{cell:t,colspan:e}of l)n.setAttribute("colspan",e+s,t);const d={};i>1&&(d.rowspan=i),Yp(s,n,Hs.createAfter(t),d);const u=o.getAttribute("headingColumns")||0;u>c&&wp("headingColumns",u+s,o,n)}})}splitCellHorizontally(t,e=2){const n=this.editor.model,o=t.parent,i=o.parent,r=i.getChildIndex(o),s=parseInt(t.getAttribute("rowspan")||1),a=parseInt(t.getAttribute("colspan")||1);n.change(n=>{if(s>1){const o=[...new xp(i,{startRow:r,endRow:r+s-1,includeSpanned:!0})],{newCellsSpan:c,updatedSpan:l}=Gp(s,e);wp("rowspan",l,t,n);const{column:d}=o.find(({cell:e})=>e===t),u={};c>1&&(u.rowspan=c),a>1&&(u.colspan=a);for(const{column:t,row:e,cellIndex:s}of o){if(e>=r+l&&t===d&&(e+r+l)%c==0){Yp(1,n,Hs.createFromParentAndOffset(i.getChild(e),s),u)}}}if(s<e){const o=e-s,c=[...new xp(i,{startRow:0,endRow:r})];for(const{cell:e,rowspan:i,row:s}of c)if(e!==t&&s+i>r){const t=i+o;n.setAttribute("rowspan",t,e)}const l={};a>1&&(l.colspan=a),Wp(n,i,r+1,o,1,l);const d=i.getAttribute("headingRows")||0;d>r&&wp("headingRows",d+o,i,n)}})}getColumns(t){return[...t.getChild(0).getChildren()].reduce((t,e)=>{return t+parseInt(e.getAttribute("colspan")||1)},0)}}function Wp(t,e,n,o,i,r={}){for(let s=0;s<o;s++){const o=t.createElement("tableRow");t.insert(o,e,n),Yp(i,t,Hs.createAt(o,"end"),r)}}function Yp(t,e,n,o={}){for(let i=0;i<t;i++)_p(e,n,o)}function Gp(t,e){if(t<e)return{newCellsSpan:1,updatedSpan:1};const n=Math.floor(t/e);return{newCellsSpan:n,updatedSpan:t-n*e+n}}class $p extends ql{refresh(){const t=this.editor.model,e=t.document.selection,n=t.schema,o=function(t){const e=t.parent;return e===e.root?e:e.parent}(e.getFirstPosition());this.isEnabled=n.checkChild(o,"table")}execute(t={}){const e=this.editor.model,n=e.document.selection,o=this.editor.plugins.get(qp),i=parseInt(t.rows)||2,r=parseInt(t.columns)||2,s=$u(n);e.change(t=>{const n=o.createTable(t,i,r);e.insertContent(n,s),t.setSelection(Hs.createAt(n.getChild(0).getChild(0).getChild(0)))})}}class Qp extends ql{constructor(t,e={}){super(t),this.order=e.order||"below"}refresh(){const t=bp("table",this.editor.model.document.selection.getFirstPosition());this.isEnabled=!!t}execute(){const t=this.editor,e=t.model.document.selection,n=t.plugins.get(qp),o=bp("tableCell",e.getFirstPosition()).parent,i=o.parent,r=i.getChildIndex(o),s="below"===this.order?r+1:r;n.insertRows(i,{rows:1,at:s})}}class Jp extends ql{constructor(t,e={}){super(t),this.order=e.order||"after"}refresh(){const t=bp("table",this.editor.model.document.selection.getFirstPosition());this.isEnabled=!!t}execute(){const t=this.editor,e=t.model.document.selection,n=t.plugins.get(qp),o=bp("tableCell",e.getFirstPosition()),i=o.parent.parent,{column:r}=n.getCellLocation(o),s="after"===this.order?r+1:r;n.insertColumns(i,{columns:1,at:s})}}class Kp extends ql{constructor(t,e={}){super(t),this.direction=e.direction||"horizontally"}refresh(){const t=bp("tableCell",this.editor.model.document.selection.getFirstPosition());this.isEnabled=!!t}execute(){const t=bp("tableCell",this.editor.model.document.selection.getFirstPosition()),e="horizontally"===this.direction,n=this.editor.plugins.get(qp);e?n.splitCellHorizontally(t,2):n.splitCellVertically(t,2)}}class Zp extends ql{constructor(t,e){super(t),this.direction=e.direction,this.isHorizontal="right"==this.direction||"left"==this.direction}refresh(){const t=this._getMergeableCell();this.isEnabled=!!t,this.value=t}execute(){const t=this.editor.model,e=bp("tableCell",t.document.selection.getFirstPosition()),n=this.value,o=this.direction;t.change(t=>{const i="right"==o||"down"==o,r=i?e:n,s=i?n:e,a=s.parent;!function(t,e,n){Xp(t)||(Xp(e)&&n.remove(qs.createIn(e)),n.move(qs.createIn(t),Hs.createAt(e,"end")));n.remove(t)}(s,r,t);const c=this.isHorizontal?"colspan":"rowspan",l=parseInt(e.getAttribute(c)||1),d=parseInt(n.getAttribute(c)||1);t.setAttribute(c,l+d,r),t.setSelection(qs.createIn(r)),a.childCount||function(t,e){const n=t.parent,o=n.getChildIndex(t);for(const{cell:t,row:i,rowspan:r}of new xp(n,{endRow:o})){const n=i+r-1>=o;n&&wp("rowspan",r-1,t,e)}e.remove(t)}(a,t)})}_getMergeableCell(){const t=bp("tableCell",this.editor.model.document.selection.getFirstPosition());if(!t)return;const e=this.editor.plugins.get(qp),n=this.isHorizontal?function(t,e,n){const o="right"==e?t.nextSibling:t.previousSibling;if(!o)return;const i="right"==e?t:o,r="right"==e?o:t,{column:s}=n.getCellLocation(i),{column:a}=n.getCellLocation(r),c=parseInt(i.getAttribute("colspan")||1);return s+c===a?o:void 0}(t,this.direction,e):function(t,e){const n=t.parent,o=n.parent,i=o.getChildIndex(n);if("down"==e&&i===o.childCount-1||"up"==e&&0===i)return;const r=parseInt(t.getAttribute("rowspan")||1),s=o.getAttribute("headingRows")||0;if(s&&("down"==e&&i+r===s||"up"==e&&i===s))return;const a=parseInt(t.getAttribute("rowspan")||1),c="down"==e?i+a:i,l=[...new xp(o,{endRow:c})],d=l.find(e=>e.cell===t).column,u=l.find(({row:t,rowspan:n,column:o})=>o===d&&("down"==e?t===c:c===t+n));return u&&u.cell}(t,this.direction);if(!n)return;const o=this.isHorizontal?"rowspan":"colspan",i=parseInt(t.getAttribute(o)||1);return parseInt(n.getAttribute(o)||1)===i?n:void 0}}function Xp(t){return 1==t.childCount&&t.getChild(0).is("paragraph")&&t.getChild(0).isEmpty}class tg extends ql{refresh(){const t=bp("tableCell",this.editor.model.document.selection.getFirstPosition());this.isEnabled=!!t&&t.parent.parent.childCount>1}execute(){const t=this.editor.model,e=bp("tableCell",t.document.selection.getFirstPosition()).parent,n=e.parent,o=n.getChildIndex(e),i=n.getAttribute("headingRows")||0;t.change(t=>{i&&o<=i&&wp("headingRows",i-1,n,t,0);const r=[...new xp(n,{endRow:o})],s=new Map;r.filter(({row:t,rowspan:e})=>t===o&&e>1).forEach(({column:t,cell:e,rowspan:n})=>s.set(t,{cell:e,rowspanToSet:n-1})),r.filter(({row:t,rowspan:e})=>t<=o-1&&t+e>o).forEach(({cell:e,rowspan:n})=>wp("rowspan",n-1,e,t));const a=o+1,c=new xp(n,{includeSpanned:!0,startRow:a,endRow:a});let l;for(const{row:e,column:o,cell:i}of[...c])if(s.has(o)){const{cell:i,rowspanToSet:r}=s.get(o),a=l?Hs.createAfter(l):Hs.createAt(n.getChild(e));t.move(qs.createOn(i),a),wp("rowspan",r,i,t),l=i}else l=i;t.remove(e)})}}class eg extends ql{refresh(){const t=this.editor,e=t.model.document.selection,n=t.plugins.get(qp),o=bp("tableCell",e.getFirstPosition());this.isEnabled=!!o&&n.getColumns(o.parent.parent)>1}execute(){const t=this.editor.model,e=bp("tableCell",t.document.selection.getFirstPosition()),n=e.parent,o=n.parent,i=o.getAttribute("headingColumns")||0,r=o.getChildIndex(n),s=[...new xp(o)],a=s.find(t=>t.cell===e).column;t.change(t=>{i&&r<=i&&t.setAttribute("headingColumns",i-1,o);for(const{cell:e,column:n,colspan:o}of s)n<=a&&o>1&&n+o>a?wp("colspan",o-1,e,t):n===a&&t.remove(e)})}}class ng extends ql{refresh(){const t=bp("tableCell",this.editor.model.document.selection.getFirstPosition()),e=!!t;this.isEnabled=e,this.value=e&&this._isInHeading(t,t.parent.parent)}execute(){const t=this.editor.model,e=bp("tableCell",t.document.selection.getFirstPosition()).parent,n=e.parent,o=n.getAttribute("headingRows")||0,i=e.index,r=o>i?i:i+1;t.change(t=>{if(r){const e=function(t,e,n){const o=[],i=new xp(t,{startRow:e>n?n:0,endRow:e-1});for(const{row:t,rowspan:n,cell:r}of i)n>1&&t+n>e&&o.push(r);return o}(n,r,o);for(const n of e)og(n,r,t)}wp("headingRows",r,n,t,0)})}_isInHeading(t,e){const n=parseInt(e.getAttribute("headingRows")||0);return!!n&&t.parent.index<n}}function og(t,e,n){const o=t.parent,i=o.parent,r=e-o.index,s={},a=parseInt(t.getAttribute("rowspan"))-r;a>1&&(s.rowspan=a);const c=i.getChildIndex(o),l=c+r,d=[...new xp(i,{startRow:c,endRow:l,includeSpanned:!0})];let u;for(const{row:e,column:o,cell:r,colspan:a,cellIndex:c}of d)if(r===t&&(u=o,a>1&&(s.colspan=a)),void 0!==u&&u===o&&e===l){const t=i.getChild(e);_p(n,Hs.createFromParentAndOffset(t,c),s)}wp("rowspan",r,t,n)}class ig extends ql{refresh(){const t=bp("tableCell",this.editor.model.document.selection.getFirstPosition()),e=!!t;this.isEnabled=e,this.value=e&&this._isInHeading(t,t.parent.parent)}execute(){const t=this.editor.model,e=t.document.selection,n=this.editor.plugins.get("TableUtils"),o=bp("tableCell",e.getFirstPosition().parent),i=o.parent.parent,r=parseInt(i.getAttribute("headingColumns")||0),{column:s}=n.getCellLocation(o),a=r>s?s:s+1;t.change(t=>{wp("headingColumns",a,i,t,0)})}_isInHeading(t,e){const n=parseInt(e.getAttribute("headingColumns")||0),o=this.editor.plugins.get("TableUtils"),{column:i}=o.getCellLocation(t);return!!n&&i<n}}function rg(t){t.document.registerPostFixer(e=>(function(t,e){const n=e.document.differ.getChanges();let o=!1;const i=new Set;for(const e of n){let n;"table"==e.name&&"insert"==e.type&&(n=e.position.nodeAfter),"tableRow"!=e.name&&"tableCell"!=e.name||(n=bp("table",e.position)),cg(e)&&(n=bp("table",e.range.start)),n&&!i.has(n)&&(o=sg(n,t)||o,o=ag(n,t)||o,i.add(n))}return o})(e,t))}function sg(t,e){let n=!1;const o=function(t){const e=parseInt(t.getAttribute("headingRows")||0),n=t.childCount,o=[];for(const{row:i,rowspan:r,cell:s}of new xp(t)){if(r<2)continue;const t=i<e,a=t?e:n;if(i+r>a){const t=a-i;o.push({cell:s,rowspan:t})}}return o}(t);if(o.length){n=!0;for(const t of o)wp("rowspan",t.rowspan,t.cell,e,1)}return n}function ag(t,e){let n=!1;const o=function(t){const e={};for(const{row:n}of new xp(t,{includeSpanned:!0}))e[n]||(e[n]=0),e[n]+=1;return e}(t),i=o[0];if(!Object.values(o).every(t=>t===i)){const i=Object.values(o).reduce((t,e)=>e>t?e:t,0);for(const[r,s]of Object.entries(o)){const o=i-s;if(o){for(let n=0;n<o;n++)_p(e,Hs.createAt(t.getChild(r),"end"));n=!0}}}return n}function cg(t){const e="attribute"===t.type,n=t.attributeKey;return e&&("headingRows"===n||"colspan"===n||"rowspan"===n)}function lg(t){t.document.registerPostFixer(e=>(function(t,e){const n=e.document.differ.getChanges();let o=!1;for(const e of n)"remove"==e.type&&e.position.parent.is("tableCell")&&(o=hg(e.position.parent,t)||o),"insert"==e.type&&("table"==e.name&&(o=dg(e.position.nodeAfter,t)||o),"tableRow"==e.name&&(o=ug(e.position.nodeAfter,t)||o),"tableCell"==e.name&&(o=hg(e.position.nodeAfter,t)||o));return o})(e,t))}function dg(t,e){let n=!1;for(const o of t.getChildren())n=ug(o,e)||n;return n}function ug(t,e){let n=!1;for(const o of t.getChildren())n=hg(o,e)||n;return n}function hg(t,e){return 0==t.childCount&&(e.insertElement("paragraph",t),!0)}function fg(t,e){e.view.document.registerPostFixer(n=>(function(t,e,n,o){let i=!1;const r=function(t){const e=Array.from(t._renderer.markedAttributes).filter(t=>!!t.parent).filter(pg).filter(t=>gg(t.parent)),n=Array.from(t._renderer.markedChildren).filter(t=>!!t.parent).filter(gg).reduce((t,e)=>{const n=Array.from(e.getChildren()).filter(pg);return[...t,...n]},[]);return[...e,...n]}(o);for(const e of r)i=mg(e,n,t)||i;i&&function(t,e,n){const o=Array.from(t.getRanges()).map(t=>e.toViewRange(t));n.setSelection(o,{backward:t.isBackward})}(e.document.selection,n,t);return i})(n,t,e.mapper,e.view))}function mg(t,e,n){const o=e.toModelElement(t),i=function(t,e){const n=t.childCount>1,o=!![...e.getAttributes()].length;return n||o?"p":"span"}(o.parent,o);if(t.name!==i){e.unbindViewElement(t);const r=n.rename(i,t);return e.bindElements(o,r),!0}return!1}function pg(t){return t.is("p")||t.is("span")}function gg(t){return t.is("td")||t.is("th")}n(108);class bg extends Fl{init(){const t=this.editor,e=t.model,n=e.schema,o=t.conversion;n.register("table",{allowWhere:"$block",allowAttributes:["headingRows","headingColumns"],isLimit:!0,isObject:!0}),n.register("tableRow",{allowIn:"table",isLimit:!0}),n.register("tableCell",{allowIn:"tableRow",allowAttributes:["colspan","rowspan"],isLimit:!0}),n.extend("$block",{allowIn:"tableCell"}),n.addChildCheck((t,e)=>{if("table"==e.name&&Array.from(t.getNames()).includes("table"))return!1}),n.addChildCheck((t,e)=>{if(Array.from(t.getNames()).includes("table"))return"image"!=e.name&&"media"!=e.name&&void 0}),o.for("upcast").add(kp()),o.for("editingDowncast").add(Pp({asWidget:!0})),o.for("dataDowncast").add(Pp()),o.for("upcast").add(Oa({model:"tableRow",view:"tr"})),o.for("editingDowncast").add(Sp({asWidget:!0})),o.for("dataDowncast").add(Sp()),o.for("downcast").add(t=>t.on("remove:tableRow",(t,e,n)=>{t.stop();const o=n.mapper.toViewPosition(e.position).getLastMatchingPosition(t=>!t.item.is("tr")).nodeAfter,i=o.parent,r=Qo.createOn(o),s=n.writer.remove(r);for(const t of Qo.createIn(s).getItems())n.mapper.unbindViewElement(t);i.childCount||n.writer.remove(Qo.createOn(i))},{priority:"higher"})),o.for("upcast").add(vp("td")),o.for("upcast").add(vp("th")),o.for("editingDowncast").add(Ep({asWidget:!0})),o.for("dataDowncast").add(Ep()),o.attributeToAttribute({model:"colspan",view:"colspan"}),o.attributeToAttribute({model:"rowspan",view:"rowspan"}),o.for("editingDowncast").add(Np({asWidget:!0})),o.for("dataDowncast").add(Np()),o.for("editingDowncast").add(Ip({asWidget:!0})),o.for("dataDowncast").add(Ip()),fg(t.model,t.editing),t.commands.add("insertTable",new $p(t)),t.commands.add("insertTableRowAbove",new Qp(t,{order:"above"})),t.commands.add("insertTableRowBelow",new Qp(t,{order:"below"})),t.commands.add("insertTableColumnBefore",new Jp(t,{order:"before"})),t.commands.add("insertTableColumnAfter",new Jp(t,{order:"after"})),t.commands.add("removeTableRow",new tg(t)),t.commands.add("removeTableColumn",new eg(t)),t.commands.add("splitTableCellVertically",new Kp(t,{direction:"vertically"})),t.commands.add("splitTableCellHorizontally",new Kp(t,{direction:"horizontally"})),t.commands.add("mergeTableCellRight",new Zp(t,{direction:"right"})),t.commands.add("mergeTableCellLeft",new Zp(t,{direction:"left"})),t.commands.add("mergeTableCellDown",new Zp(t,{direction:"down"})),t.commands.add("mergeTableCellUp",new Zp(t,{direction:"up"})),t.commands.add("setTableColumnHeader",new ig(t)),t.commands.add("setTableRowHeader",new ng(t)),rg(e),lg(e),this.editor.keystrokes.set("Tab",(...t)=>this._handleTabOnSelectedTable(...t),{priority:"low"}),this.editor.keystrokes.set("Tab",this._getTabHandler(!0),{priority:"low"}),this.editor.keystrokes.set("Shift+Tab",this._getTabHandler(!1),{priority:"low"})}static get requires(){return[qp]}_handleTabOnSelectedTable(t,e){const n=this.editor,o=n.model.document.selection;if(!o.isCollapsed&&1===o.rangeCount&&o.getFirstRange().isFlat){const t=o.getSelectedElement();if(!t||!t.is("table"))return;e(),n.model.change(e=>{e.setSelection(qs.createIn(t.getChild(0).getChild(0)))})}}_getTabHandler(t){const e=this.editor;return(n,o)=>{const i=bp("tableCell",e.model.document.selection.getFirstPosition());if(!i)return;o();const r=i.parent,s=r.parent,a=s.getChildIndex(r),c=r.getChildIndex(i),l=0===c;if(!t&&l&&0===a)return;const d=c===r.childCount-1,u=a===s.childCount-1;let h;if(t&&u&&d&&e.plugins.get(qp).insertRows(s,{at:s.childCount}),t&&d){const t=s.getChild(a+1);h=t.getChild(0)}else if(!t&&l){const t=s.getChild(a-1);h=t.getChild(t.childCount-1)}else h=r.getChild(c+(t?1:-1));e.model.change(t=>{t.setSelection(qs.createIn(h))})}}}n(110);class wg extends xl{constructor(t){super(t);const e=this.bindTemplate;this.items=this.createCollection(),this.set("rows",0),this.set("columns",0),this.bind("label").to(this,"columns",this,"rows",(t,e)=>`${e} x ${t}`),this.setTemplate({tag:"div",attributes:{class:["ck"]},children:[{tag:"div",attributes:{class:["ck-insert-table-dropdown__grid"]},children:this.items},{tag:"div",attributes:{class:["ck-insert-table-dropdown__label"]},children:[{text:e.to("label")}]}],on:{mousedown:e.to(t=>{t.preventDefault()}),click:e.to(()=>{this.fire("execute")})}});for(let t=0;t<100;t++){const e=new _g;e.on("over",()=>{const e=Math.floor(t/10),n=t%10;this.set("rows",e+1),this.set("columns",n+1)}),this.items.add(e)}this.on("change:columns",()=>{this._highlightGridBoxes()}),this.on("change:rows",()=>{this._highlightGridBoxes()})}focus(){}focusLast(){}_highlightGridBoxes(){const t=this.rows,e=this.columns;this.items.map((n,o)=>{const i=Math.floor(o/10)<t&&o%10<e;n.set("isOn",i)})}}class _g extends xl{constructor(t){super(t);const e=this.bindTemplate;this.set("isOn",!1),this.setTemplate({tag:"div",attributes:{class:["ck-insert-table-dropdown-grid-box",e.if("isOn","ck-on")]},on:{mouseover:e.to("over")}})}}var kg=n(37),vg=n.n(kg),yg=n(38),xg=n.n(yg),Ag=n(39),Cg=n.n(Ag),Tg=n(40),Mg=n.n(Tg);class Pg extends Fl{init(){const t=this.editor,e=this.editor.t;t.ui.componentFactory.add("insertTable",n=>{const o=t.commands.get("insertTable"),i=bf(n);i.bind("isEnabled").to(o),i.buttonView.set({icon:vg.a,label:e("s"),tooltip:!0});const r=new wg(n);return i.panelView.children.add(r),r.delegate("execute").to(i),i.buttonView.on("open",()=>{r.rows=0,r.columns=0}),i.on("execute",()=>{t.execute("insertTable",{rows:r.rows,columns:r.columns}),t.editing.view.focus()}),i}),t.ui.componentFactory.add("tableColumn",t=>{const n=[{type:"switchbutton",model:{commandName:"setTableColumnHeader",label:e("t"),bindIsOn:!0}},{type:"separator"},{type:"button",model:{commandName:"insertTableColumnBefore",label:e("u")}},{type:"button",model:{commandName:"insertTableColumnAfter",label:e("v")}},{type:"button",model:{commandName:"removeTableColumn",label:e("w")}}];return this._prepareDropdown(e("x"),xg.a,n,t)}),t.ui.componentFactory.add("tableRow",t=>{const n=[{type:"switchbutton",model:{commandName:"setTableRowHeader",label:e("y"),bindIsOn:!0}},{type:"separator"},{type:"button",model:{commandName:"insertTableRowBelow",label:e("z")}},{type:"button",model:{commandName:"insertTableRowAbove",label:e("aa")}},{type:"button",model:{commandName:"removeTableRow",label:e("ab")}}];return this._prepareDropdown(e("ac"),Cg.a,n,t)}),t.ui.componentFactory.add("mergeTableCells",t=>{const n=[{type:"button",model:{commandName:"mergeTableCellUp",label:e("ad")}},{type:"button",model:{commandName:"mergeTableCellRight",label:e("ae")}},{type:"button",model:{commandName:"mergeTableCellDown",label:e("af")}},{type:"button",model:{commandName:"mergeTableCellLeft",label:e("ag")}},{type:"separator"},{type:"button",model:{commandName:"splitTableCellVertically",label:e("ah")}},{type:"button",model:{commandName:"splitTableCellHorizontally",label:e("ai")}}];return this._prepareDropdown(e("aj"),Mg.a,n,t)})}_prepareDropdown(t,e,n,o){const i=this.editor,r=bf(o),s=[],a=new ti;for(const t of n)Sg(t,i,s,a);return wf(r,a),r.buttonView.set({label:t,icon:e,tooltip:!0}),r.bind("isEnabled").toMany(s,"isEnabled",(...t)=>t.some(t=>t)),this.listenTo(r,"execute",t=>{i.execute(t.source.commandName),i.editing.view.focus()}),r}}function Sg(t,e,n,o){const i=t.model=new af(t.model),{commandName:r,bindIsOn:s}=t.model;if("separator"!==t.type){const t=e.commands.get(r);n.push(t),i.set({commandName:r}),i.bind("isEnabled").to(t),s&&i.bind("isOn").to(t,"value")}i.set({withText:!0}),o.add(t)}n(112);n.d(e,"default",function(){return Eg});class Eg extends Vl{}Eg.builtinPlugins=[class extends Fl{static get requires(){return[Hl,Ql,Xl,gd,Ud]}static get pluginName(){return"Essentials"}},class extends Fl{static get requires(){return[Wd]}static get pluginName(){return"CKFinderUploadAdapter"}init(){const t=this.editor.config.get("ckfinder.uploadUrl");t&&(this.editor.plugins.get(Wd).createUploadAdapter=(e=>new Kd(e,t,this.editor.t)))}},class extends Fl{static get pluginName(){return"Autoformat"}afterInit(){this._addListAutoformats(),this._addBasicStylesAutoformats(),this._addHeadingAutoformats(),this._addBlockQuoteAutoformats()}_addListAutoformats(){const t=this.editor.commands;t.get("bulletedList")&&new Zd(this.editor,/^[*-]\s$/,"bulletedList"),t.get("numberedList")&&new Zd(this.editor,/^\d+[.|)]\s$/,"numberedList")}_addBasicStylesAutoformats(){const t=this.editor.commands;t.get("bold")&&(new Xd(this.editor,/(\*\*)([^*]+)(\*\*)$/g,"bold"),new Xd(this.editor,/(__)([^_]+)(__)$/g,"bold")),t.get("italic")&&(new Xd(this.editor,/(?:^|[^*])(\*)([^*_]+)(\*)$/g,"italic"),new Xd(this.editor,/(?:^|[^_])(_)([^_]+)(_)$/g,"italic")),t.get("code")&&new Xd(this.editor,/(`)([^`]+)(`)$/g,"code")}_addHeadingAutoformats(){const t=this.editor.commands.get("heading");t&&t.modelElements.filter(t=>t.match(/^heading[1-6]$/)).forEach(t=>{const e=t[7],n=new RegExp(`^(#{${e}})\\s$`);new Zd(this.editor,n,()=>{this.editor.execute("heading",{value:t})})})}_addBlockQuoteAutoformats(){this.editor.commands.get("blockQuote")&&new Zd(this.editor,/^>\s$/,"blockQuote")}},class extends Fl{static get requires(){return[ou,au]}static get pluginName(){return"Bold"}},class extends Fl{static get requires(){return[lu,fu]}static get pluginName(){return"Italic"}},class extends Fl{static get requires(){return[_u,yu]}static get pluginName(){return"BlockQuote"}},class extends Fl{static get requires(){return[Eu,Sh,Jh]}static get pluginName(){return"EasyImage"}},class extends Fl{static get requires(){return[sf,_f]}static get pluginName(){return"Heading"}},Sh,class extends Fl{static get requires(){return[Tf]}static get pluginName(){return"ImageCaption"}},class extends Fl{static get requires(){return[Wf,Yf]}static get pluginName(){return"ImageStyle"}},class extends Fl{static get requires(){return[Gf]}static get pluginName(){return"ImageToolbar"}afterInit(){const t=this.editor;t.plugins.get(Gf).register("image",{items:t.config.get("image.toolbar")||[],visibleWhen:Ku})}},Jh,class extends Fl{static get requires(){return[um,ym]}static get pluginName(){return"Link"}},class extends Fl{static get requires(){return[Ym,Zm]}static get pluginName(){return"List"}},class extends Fl{static get requires(){return[dp,gp,hp,oh]}static get pluginName(){return"MediaEmbed"}},Xh,class extends Fl{static get requires(){return[bg,Pg,oh]}static get pluginName(){return"Table"}},class extends Fl{static get requires(){return[Gf]}static get pluginName(){return"TableToolbar"}afterInit(){const t=this.editor,e=t.plugins.get(Gf),n=t.config.get("table.contentToolbar"),o=t.config.get("table.toolbar"),i=t.config.get("table.tableToolbar");o&&console.warn("`config.table.toolbar` is deprecated and will be removed in the next major release. Use `config.table.contentToolbar` instead."),(n||o)&&e.register("tableContent",{items:n||o,visibleWhen:Mp}),i&&e.register("table",{items:i,visibleWhen:Tp})}}],Eg.defaultConfig={toolbar:{items:["heading","|","bold","italic","link","bulletedList","numberedList","imageUpload","blockQuote","insertTable","mediaEmbed","undo","redo"]},image:{toolbar:["imageStyle:full","imageStyle:side","|","imageTextAlternative"]},table:{contentToolbar:["tableColumn","tableRow","mergeTableCells"]},language:"en"}}]).default});
//# sourceMappingURL=ckeditor.js.map

/***/ }),

/***/ "./src/app/dashboard/components/main-content/main-content.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/dashboard/components/main-content/main-content.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/dashboard/components/main-content/main-content.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/dashboard/components/main-content/main-content.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%; }\n\nth.mat-sort-header-sorted {\n  color: black; }\n"

/***/ }),

/***/ "./src/app/dashboard/components/main-content/main-content.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/dashboard/components/main-content/main-content.component.ts ***!
  \*****************************************************************************/
/*! exports provided: MainContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainContentComponent", function() { return MainContentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainContentComponent = /** @class */ (function () {
    function MainContentComponent() {
    }
    MainContentComponent.prototype.ngOnInit = function () {
    };
    MainContentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main-content',
            template: __webpack_require__(/*! ./main-content.component.html */ "./src/app/dashboard/components/main-content/main-content.component.html"),
            styles: [__webpack_require__(/*! ./main-content.component.scss */ "./src/app/dashboard/components/main-content/main-content.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MainContentComponent);
    return MainContentComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/components/new-contact-dialog/new-contact-dialog.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/dashboard/components/new-contact-dialog/new-contact-dialog.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>Add new contact</h2>\r\n<mat-dialog-content>\r\n\r\n  <div class=\"example-container\">\r\n\r\n    <mat-form-field>\r\n      <mat-select placeholder=\"Avatar\" [(ngModel)]=\"user.avatar\">\r\n        <mat-select-trigger>\r\n          <mat-icon svgIcon=\"{{user.avatar}}\"></mat-icon> {{ user.avatar }}\r\n        </mat-select-trigger>\r\n        <mat-option *ngFor=\"let avatar of avatars\" [value]=\"avatar\">\r\n          <mat-icon svgIcon=\"{{avatar}}\"></mat-icon> {{ avatar }}\r\n        </mat-option>\r\n      </mat-select>\r\n    </mat-form-field>\r\n\r\n    <mat-form-field>\r\n      <input matInput placeholder=\"Name\" [formControl]=\"name\" [(ngModel)]=\"user.name\" required>\r\n      <mat-error *ngIf=\"name.invalid\">{{getErrorMessage()}}</mat-error>\r\n    </mat-form-field>\r\n\r\n    <mat-form-field>\r\n      <input matInput [matDatepicker]=\"picker\" placeholder=\"Born\" [(ngModel)]=\"user.birthDate\">\r\n      <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n      <mat-datepicker #picker></mat-datepicker>\r\n    </mat-form-field>\r\n\r\n    <mat-form-field>\r\n      <textarea matInput placeholder=\"Bio\" [(ngModel)]=\"user.bio\"></textarea>\r\n    </mat-form-field>\r\n\r\n  </div>\r\n\r\n</mat-dialog-content>\r\n<mat-dialog-actions>\r\n  <button mat-button color=\"primary\" (click)=\"save()\">\r\n    <mat-icon>save</mat-icon> Save\r\n  </button>\r\n  <button mat-button color=\"primary\" (click)=\"dismiss()\">\r\n    <mat-icon>cancel</mat-icon> Cancel\r\n  </button>\r\n</mat-dialog-actions>"

/***/ }),

/***/ "./src/app/dashboard/components/new-contact-dialog/new-contact-dialog.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/dashboard/components/new-contact-dialog/new-contact-dialog.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\n  display: flex;\n  flex-direction: column; }\n\n.example-container > * {\n  width: 100%; }\n"

/***/ }),

/***/ "./src/app/dashboard/components/new-contact-dialog/new-contact-dialog.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/dashboard/components/new-contact-dialog/new-contact-dialog.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: NewContactDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewContactDialogComponent", function() { return NewContactDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/user */ "./src/app/dashboard/models/user.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/dashboard/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NewContactDialogComponent = /** @class */ (function () {
    function NewContactDialogComponent(dialogRef, userService) {
        this.dialogRef = dialogRef;
        this.userService = userService;
        this.avatars = [
            'svg-1', 'svg-2', 'svg-3', 'svg-4'
        ];
        this.name = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
    }
    NewContactDialogComponent.prototype.getErrorMessage = function () {
        return this.name.hasError('required') ? 'You must enter a name' : '';
    };
    NewContactDialogComponent.prototype.ngOnInit = function () {
        this.user = new _models_user__WEBPACK_IMPORTED_MODULE_2__["User"]();
    };
    NewContactDialogComponent.prototype.save = function () {
        var _this = this;
        this.userService.addUser(this.user).then(function (user) {
            _this.dialogRef.close(user);
        });
    };
    NewContactDialogComponent.prototype.dismiss = function () {
        this.dialogRef.close(null);
    };
    NewContactDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new-contact-dialog',
            template: __webpack_require__(/*! ./new-contact-dialog.component.html */ "./src/app/dashboard/components/new-contact-dialog/new-contact-dialog.component.html"),
            styles: [__webpack_require__(/*! ./new-contact-dialog.component.scss */ "./src/app/dashboard/components/new-contact-dialog/new-contact-dialog.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]])
    ], NewContactDialogComponent);
    return NewContactDialogComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/components/notes/notes.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/dashboard/components/notes/notes.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"example-container mat-elevation-z8\">\r\n    <div class=\"example-header\">\r\n      <mat-form-field>\r\n        <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\r\n      </mat-form-field>\r\n    </div>\r\n\r\n    <mat-table #table [dataSource]=\"dataSource\" matSort>\r\n\r\n      <ng-container matColumnDef=\"position\">\r\n        <mat-header-cell *matHeaderCellDef mat-sort-header> No. </mat-header-cell>\r\n        <mat-cell *matCellDef=\"let note\"> {{note.id}} </mat-cell>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"title\">\r\n        <mat-header-cell *matHeaderCellDef mat-sort-header> Title </mat-header-cell>\r\n        <mat-cell *matCellDef=\"let note\"> {{note.title}} </mat-cell>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"date\">\r\n        <mat-header-cell *matHeaderCellDef mat-sort-header> Date </mat-header-cell>\r\n        <mat-cell *matCellDef=\"let note\"> {{note.date | date:'yyyy-MM-dd'}} </mat-cell>\r\n      </ng-container>\r\n\r\n      <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n      <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n    </mat-table>\r\n\r\n    <mat-paginator #paginator [pageSize]=\"2\" [pageSizeOptions]=\"[5, 10, 20]\">\r\n    </mat-paginator>\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/dashboard/components/notes/notes.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/dashboard/components/notes/notes.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\n  display: flex;\n  flex-direction: column;\n  max-height: 500px;\n  min-width: 300px; }\n\n.mat-table {\n  overflow: auto;\n  max-height: 500px; }\n\n.example-header {\n  min-height: 64px;\n  padding: 8px 24px 0; }\n\n.mat-form-field {\n  font-size: 14px;\n  width: 100%; }\n\ntable {\n  width: 100%; }\n\nth.mat-sort-header-sorted {\n  color: black; }\n"

/***/ }),

/***/ "./src/app/dashboard/components/notes/notes.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/dashboard/components/notes/notes.component.ts ***!
  \***************************************************************/
/*! exports provided: NotesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotesComponent", function() { return NotesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotesComponent = /** @class */ (function () {
    function NotesComponent() {
        this.displayedColumns = ['position', 'title', 'date'];
    }
    NotesComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    NotesComponent.prototype.ngOnInit = function () {
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](this.notes);
    };
    NotesComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], NotesComponent.prototype, "notes", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], NotesComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], NotesComponent.prototype, "sort", void 0);
    NotesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-notes',
            template: __webpack_require__(/*! ./notes.component.html */ "./src/app/dashboard/components/notes/notes.component.html"),
            styles: [__webpack_require__(/*! ./notes.component.scss */ "./src/app/dashboard/components/notes/notes.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NotesComponent);
    return NotesComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/components/sidenav/sidenav.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/dashboard/components/sidenav/sidenav.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container class=\"app-sidenav-container\"\r\n                      [class.dark-theme]=\"isDarkTheme\" [dir]=\"dir\">\r\n  <mat-sidenav #sidenav class=\"app-sidenav mat-elevation-z10\"\r\n               [opened]=\"!isScreenSmall()\"\r\n               [mode]=\"isScreenSmall() ? 'over' : 'side'\">\r\n    <mat-toolbar id=\"logo-cegeka\"  >\r\n        <!-- <img src=\"../assets/logo-cgk.png\" id=\"logo-cegeka\"  /> -->\r\n    </mat-toolbar>\r\n\r\n    <mat-nav-list>\r\n      <mat-list-item [routerLink]=\"['/secured/posts']\" routerLinkActive=\"activated\">\r\n        <a matLine >\r\n          <mat-icon class=\"material-icons\" >folder</mat-icon> Posts\r\n        </a>\r\n      </mat-list-item>\r\n      <mat-list-item  [routerLink]=\"['/secured/event-registration']\" routerLinkActive=\"activated\" >\r\n          <a matLine >\r\n            <mat-icon class=\"material-icons\" >calendar_today</mat-icon> Event Registration\r\n          </a>\r\n      </mat-list-item>\r\n    </mat-nav-list>\r\n\r\n  </mat-sidenav>\r\n\r\n  <div class=\"app-sidenav-content\">\r\n    <app-toolbar (toggleTheme)=\"toggleTheme()\"\r\n                 (toggleSidenav)=\"sidenav.toggle()\"\r\n                 (toggleDir)=\"toggleDir()\">\r\n    </app-toolbar>\r\n    <div class=\"wrapper\">\r\n      <app-main-content></app-main-content>\r\n    </div>\r\n  </div>\r\n\r\n</mat-sidenav-container>\r\n"

/***/ }),

/***/ "./src/app/dashboard/components/sidenav/sidenav.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/dashboard/components/sidenav/sidenav.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app-sidenav-container {\n  flex: 1;\n  position: fixed;\n  width: 100%;\n  min-width: 100%;\n  height: 100%;\n  min-height: 100%; }\n\n.app-sidenav-content {\n  display: flex;\n  height: 100%;\n  flex-direction: column; }\n\n.app-sidenav {\n  width: 240px; }\n\n.app-sidenav .activated {\n    background-color: #a4b0b6; }\n\n.wrapper {\n  margin: 50px; }\n\n.material-icons {\n  vertical-align: sub;\n  /* new */\n  font-family: 'Material Icons';\n  font-weight: normal;\n  font-style: normal;\n  font-size: 24px;\n  line-height: 1;\n  letter-spacing: normal;\n  text-transform: none;\n  display: inline;\n  white-space: nowrap;\n  word-wrap: normal;\n  direction: ltr;\n  -webkit-font-feature-settings: 'liga';\n  -webkit-font-smoothing: antialiased;\n  display: inline; }\n\n#logo-cegeka {\n  background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANUAAABWCAYAAABYZNP1AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVhZHlxyWU8AAAhyklEQVR4Xu2dB3xUVRbGv+mTmfRCGkmA0AQRREFFBGEtKAoKKGtXEHVR1EUUQRFURBFcVNZesWIBlUVQFER6FQi9pEAgvUwyyfSZ7Dl3Xpb0zIRJVvm9vztL5r03r8397in33DeKKgIyMjIBQyn9KyMjEyBkUcnIBBhZVDIyAUYWlYxMgJFFJSMTYGRRycgEGFlUMjIBRhaVjEyAkUUlIxNgZFHJyAQYWVQyMgFGFpWMTICRRSUjE2BkUcnIBBhZVDIyAUYWlYxMgJFFJSMTYM7qmb8VTheKbQ6U078Otwd8pRqVAsFqNcJ1GkTptdKWMjKB46wTVabZgt3FZSixO2F3uWD3VMHlroL3PzLNCkClUJK4gCASVzu9DkMTohGsUXt3ICNzhpwVorKReDbkl2B7gQlOuhotObUqhYIEpAT9A/pfLfiC+eXxeEB6g5WsWGqoATd2iEeILC6ZM+QvLaoScu02F5RgU34pdColjGR5VGyKWoDF6Uapw4l7urZHj/AQujMt24+MzF9SVC5y6baQZdpaUIpKsjIh5MspAiACvhUldgcui4vCVe3bSUtlZPzjLyeqUoqVvjyWjVKnCzqlEmp6BRK+HRUuN7obgzGyUxy0ajlBKuMfbd5iqtxuOA8dgghm/GR3UTleSTuGSmr0BnL1Ai2oauKCdXhx7WFszS6VlsjI+E6bispTXAzTsGtQeskAWBd9LC31jRUn8rE08xSig3TQqMjdk5a3BnxToiOCMejjLd4FMjJ+0Gaicu7di7K/3wJYLNAOHgQNvXxlaUYutheZEHEG40oswupX0yjgpphNeH30mr72iHexjIyPtImoHFu3wvzIo1CQu1ZlscEwfRrUqanS2qb5Ij0b+0rNCNWo/UpGeCg2cpCrWZ3VK7TaUUAvHgw203u720Pi8Uhbn4YP4aR1VpcHUeEGzNuW5c2/y8j4SKsnKpzbtqN8/DioklPgzsmB4YH7EXT//dLapll2PA+7ik0I0zZvoVhELBJXlYKE5IBOpUYcuYrRQVrEGXRi/ElNiuF4rMjqQL7NjlOVNpGUCCGzpCaXUoxt0b54P4v3FCKr1E7ic+OhvsmYPbiL90AyMs3QqqJy7UmDafhwaC68EO5SE5SJCQj/4nNpbdNsyCvG6txihDUzGMuump1EoCE1GGnbLiHB6BcTLsqQfIHHutbkFuFkhQ0WlwtGrRoWuwuLdhaQRXPBQRarW5geG+4eIH1CRqZpWk1UHEOZJ9wHZbt2gN2OKqcLYd98DWVUpLRF4+RUWvHJsZNkWThl3ojLR6ddRvs0qlXoFh6M7mHB6EKvlmKyO8XY125TOSpsbry3ORc6jQouEqyOLNmn1/XCwPYR0tYyMo3TKjGV+/gJVE6dCmVoqEgMeMxm6G+/1SdBMT+Q28dKb0xQHA/xIG2fyFDc3jkJ1yfHnZGgGLZsw5JjMbZjAkotTrJgLlEnqKE4MNdsw868cmlLmUBhIxf80y++xiuvv4mvlnyPcnOFtOavTcBFVeVwouKRfwJWGxRBQfBUVkLdtSv0d90lbdE07PblcDKDYpy6sE01k3XihPq93VMwskO8iJcCSccQI5KVISL756H/OHHhIRfTZHFIW8gEik1bt+GtDz7Gip9WYf6r/8beffulNX9tAi4q86RJ8OSchIKslFCB0ykEpWhAJA3xTUYOYvS6egk3J7lhFbSv3pEhmNI7FcnBBmlNYOHj/H6kBH1DwyleU9B5VJEbqMa+EovIJMoEDk4OBRsMMBqNMAQZoPKxjfzZCaio7MuWwbluPZQJCUJQVQ4H/R0P7ZDLpS2a5sv0k4g3knWT3lfD7h6r7Or27TAiJV5a2jrklTuQVlCBWJ0O0SoNiawKWpUCRWSpKmVRBZRazr2ibjf61yVgonIdOYrKBa9C1TmV/SXasxLuQ4cR/Mp8aYum4Zq+7AordHXiKKfbTTe/CmMo1unfrvUTBZ/uzEFiiB5WjwsdtQYSeJWIrcp5fhaLW0amGQIiKu5jrO+9BwWJqXqA1mO3Q9m9G1SJ7cX75thSUAwXtdmaA7w8XlRB1uG+czqiY2jruHt1eX9HDiKNGmEt+ZWkCYKLrtDh5nGws6c3lWk9AiIq+5IlcK5ZA2V4uHcBCcNz/DiCX3rJ+74Z2K3KqbSTj31aUA4SlMnhxKwLuyFc2zYTBz/deQoxJChGSfbRQbJKUOvhYldWLJWRaZ4zFlWV3Qbbx59AGRXlTUzwMoqlVKmpUCb5ZqVyLFYU2Owifc3w2BBn3CZ0S6GmXdsdbE2+3VeAEF1tAXOlRphSI7KALLRAwEODDrpH/GrJMCHPWObPOp1OaUnLqT4PdyOu7QFy4f/YtUd61zQuctXttC+XyyUtCSx83TbygHzFxc8msbfe+TTGGQ/+2hZ/hUqySOqUFK+o2Erl5UF3550wPDhR2qppdhSUYNmJfETpdcLlslBjGZoQg0tifRvXCgTfkaBeWZ+FYK1XQNWwzI9ZKhEepsKyURcg1tjyot6t23di45ZtyM/PR0WlRXQYBkMQYqKjkUwd0LXDrkBIcOPjbes2bMaOP3Yhh+6vzUqNi84zIiwcnVM7YvQN1yG4ic/W5NDhI1i9dj3yCgpgKjWJr02n09F5RCEhPg49e3SDuaISe/buw2+0nUKhxIJ5s9EhOVnaQ22++nYp0jOPo7ComBoxdY4aDaKok+15TjeMGnmdtFV91m/YhOfn/gt6+t7Lyssx9/mZuLj/hdLa2iz7cSV+Wb1WCESj1eLFZ58WWcO67Emjc163AaayMpSaykhYTtpeg+jIKCS1T8RNo0aKe96anLGoijt2grpXL+kdQbtzm0wInj4d2muGSQsbhw+//Hge0korEKxRweJyI8mow+1dGv4CWwMbuZ//XH4EabkVCNWftlR8YzjJm0WWND5Wg+9GnF/PkvlCpcWCKdNmisasVqvENTupcXDPy8/RUKvVcFd54LQ7sXH1CiGWmvDnJ02eiqysE1CqlMIiuOmlUqpEg/HQ39wTPD9jGgZc3F/6VMM8NnUGduzaRQ2fOrAqN4mArV2VSGezGBRKrn/k1BBbBrc4Vn5+AWY9PRVjR98o9lHNTrJgs154iToIq0jmuOi789B1qFVqcU0sAIMxCIveeQPRJNi6+Cqqnbv3YPzERxFL+zhyNAPPTJ+Me+64XVrr5SBZ1BfmvYpc6nC4DXKrdrldouPic1HSCYoiawop5s+ZhYv6NSzeQHBG7p/17bdFyrxmK2DXT92pI1Tn95GWNA3HK3nU6/Kjw9z0N2dW21JQzMrDxVhzrARhQfUFI67M5cE5YYYWCaqUOpghV4/AgYOHERoaIpIv+qAgnNO9K32xF6BH924IMhjgJleFrVWNWylga9J3wBCcyM6Bmhq9khp/aqcOovGlkoXiD2g0WmHhbr5jnLBmDcE997CRY7GNLF1oaCg1OjciIyJw6YB+uHzQQLJO3aHTa0mgHjqfIDpHPYy0zwv69MY3n39UT1CLv1mKcQ9MEm46C5I/06NHV1xMjTU+PlaIyxhsFPsbPvoWHElPlz7pH6aycoy86TZ0TE4i4Zkx/u7b6guKOqvBw0Yi+9Qp8Z6tbnxsLHqf2xN9qMMPD+cxUwWC9HpEhIfh/kmPYd3GTWLb1uCMLFXplVdBSRfA6fNqqsxmqM7thZCFr0lLmsZKPeGb+zOpo1WI6RnjKI7qElbfrLcWVupdr3rvD2jJgvB4VF34ytJNFbi9fxyeHuh/pfrt4/+B7JMnERUZKXrRm6lx3jfuDhgNp6+R44T/kHtzHjWCbl1rH+OK4Td6e326T/FxcZg+5RESZDdpLbB3/0E8O+dllFHjY2Edy8zEH5vWCGtRDVvEZ55/EWvXbxTnYbXacO89t2PMDSPoqzv93RUUFmHBwrdEg4sml7SMhLjki0X0mdpDGUfTMzCBLIfRaEAFuYmXXXoJJk2cgNiYGGkLYPnKn/HGux+K86ioqECf3ufilRefr3W85ixVbl4+dRTjyfUOo/VlOL/3eXht3hxp7WnK6bOPPvEUiktKcfWVQzF21A3kftYIHaiJf/v9f/DRJ18IS28hy8+d2sL5c4VlDjQttlT2lT/R/5MeawYghIfeczW6z9AF8/gPv5Kot2tLQTHP/ZIBs8MNXQOCYjjGM5BLGBuq9y7wg/0HDuPgwUOIpi84JydXCOqfDz1QS1CMnjqmm6gh1BXUJ59/JQTHFspA1m3G1MdqCYrp1fMcPP7Ph4Srw8KLJgG8+c4H0lovhw4fxS9rfheCMlMDv3HEcNxMx6vZwJl2MdF48bkZokFyLMLu5aTHpkprT8Pnxa4dd4ShYaGYPXN6LUEx111zNUYOvwZ2m11Y6B07d5Pb6VvCgykpMWHajOfo3mipE7CiU4cOeOm5Z6S1tWHLO+upqUK0EyeMqy0ohs5zzI0j0L9fX1jpfILoXp7KycMBfqxDK9BiUTm2bCFlOWqLit03cgXU550nLfAdfvjldSlx0ru2YUd2Gb7fX4iEkPplUdWwuxau16BXTIi0xHfe/uBjxFBDZT+ee/6byDL4wy9r1grrU0oNbPDAAejapeGJnX1798Yl/ftR7FUpXJ/tf+yW1ng5fOQoxXAkEvpuSk2l+MeEe6Q1DTPujttQWFgs3KaGMn+ffvk1YmPb4fiJE3j+mWnS0vo8cO/dsFgtQrxW6hyOHsuQ1jTPgn+/ifSsLCEA/uzc2TPp78Y7NnadOWHTFAMuupAsp1KcD1tGdi1bgxaJyp11HJ6jR0XBbE24YZI/CXUjX35DcFjMAWTvyFAkGANbHNsUJVYHHv7hCNqH6xsVFGN3ehASpMLF8dIYnB8UFhWITsZMLvHASy9C+/a+W/D9ZOHYTVGStWA3q1vXztKa+mg0anTskCzcOhaOzWZDTm6utBbIPJFN1tE7eO52Ne/td+ncSRyb4YxiUXGx+JvZvG0HwsnycNRQRXFKj261LWddwimG4aRMOFmTPWl7RYzVIMLp8XbQc+b9C8tW/EzxTzjFSTn46uP3EduutiVsCWFh9B3SMUQ7pVfzd6JltExUGekkLIqD6szIFSdKAaoyOcW7wAeo40CcUY9zI7gyvMWG0y+4MmL6ymPkT/OzKBp2+xjv16/AeXH+TyvJoXjARQ1YRdfkcLoQHeHf8EBBQRFsDvYEIAL+1I4dpDUNw41Xq9GKhsnW1WQ63QuHkjA4M8cofLjFHKOwy8kHZ/czmscgJbiSnN0tHo/q3q0ztNqmJ4P26tFDpNk568kpd85aNghdZ0REOH76ZQ0++eJrdExJFjHei88+RZ2R7/WePObGSaHtO3dh244/xGsHWe7j1LFwR8EuraDxr/2MaVGiwvrhh7C++RZUiYnC5ROIfxXwVJQj4rffvMt8gGsVyimmCSJ1aVlhbcDctVn4Ji0f0cEaOuOG7251b5ZvtuOH8b2RFOzf2AbHMdNmzRaxSXmZN2t1521/l9Y2z3fLfsSbFOizy8PWp/+FfUW2zumuM+BLJ6qluCMjPVMkLURqXK3GM9OeQO/zeopNfl+/EQ9NnkoWKBX5BYV467V5IinSGBz07913ACEhwTienY1dm9ZKa9iKvEpu6W/CgulIxFcMHSREXK/mhN6yddy4eatIOPDaMLJwH7/7b+i0Xo+kZqKC11979ZX4esn3CKXjWiiOunXsGNxz+y1i2+awWKxivGx32j6cpPi1stJCnZmD7r+bhK8mwUbQfkNI2IW0tUK4ys8+PQ0DL7nIu4MA4ncr5pS56+BBMQHxf4L6H/S+7qJm4EYdRhfdVoJacagIi3bmIMrYuKAYXiPS33qV34JiOONWjUKlgIoauj/w5zktzf4/JwV+WL5SJCDe++CT2q8PP8Ebb72PX39bh9JSE/LyC1BAFsFJcVw1SRRvxMfFw04Wgxv2S/NfEy5ZQ6xa/Rt+37BRWD7O8k2eVHsA30X7ZWvI0zasNiveeX8R3v1gUYPn9eq/30ba/gN0XmXIzytASUkJqhqon+T9ackyLv5miRAYv+dz7d6lcZe3JpzIGPfAw/jo88VivCoz8zhKSkuFhe6QnIRgEulJciP30rl4m2wrminCb0vloUDXNPYW0SOSTZeWStCueJZvxFrfLVVbsjHLhL9/kYZecRQTSMsag73Cg/mVWHJHL5yfGCYt9Z2j6emYOuM50bhLqLGPv/M2jLvrNmlt8yxfuQoL33qXelmtsDyDB12KdtHR1PtSo5a2qQ8PcLrFd3PFkMEiBV/NN0t/wCsL30IcxSY8mGylnv3O28di8MBLhYtaUFiMjz/7HDt2pSEpMQHFJICu1Kg/fOt1aQ9eXnn9Dfznx5+EC8iDxWNGjRCD1k33pgrRMXDS4ebRI+j8vO2mpqViN/PVl+fgqVnPkZWyi2znPuq8Vy79Cp1TO4ntG2Pyk0+LSpUEul6uNpk+ZTJGXle/8GDDxi14Yd4CEYO2pqXyW1Tu/HyUXj4Emi51xmyk3XjM5P6tPe0u/Fngwd3HVxxBjJF7QmlhE/ADX+wUh2yY2HSFQmNUmCsxfuLDogGXlpXhljE34qEHJkhrm2fL9p148eUFZC25WgKioQy4uJ+0tmW899Fn5F4tpev3JofM9F3xlHYeu2ELwkLhe+N1Ny/AjKmT65UCfUvi/BeJk7OaPLC9btVyaY3/1BQVD06/Pm8OxU+JGHXLPQiiZbw8MysLK777Gu2bGKZJTO2JSy7qRxa6CCOuHYYpjz4kranN1m07MeuFuVBTHGj5M7l//BAXBfWW5JdIC+rgS4ttY1aToGb+ko4wfe26vsZgK3WqzI7HL286RdsUwSHUGOlg7MYZ9EHIIJeEx4h8pQv1zjqKlbjPKzOVi177TDiRfYpcwzwUFZeI6gnOFnJcxBk2jmE4XouJisDfBl+GZ5+aijkzn2qwtm7I5YOQW1AgrFR+QRHt96S05sxgl89md4ikyOyZ04Rl44LhhIQETHz08SaPo1Z7y6t48HfMjSOlpfVxu3kSj+ijWhW/ReXJy4WCGkm9eKq6tSpVqHLVCab/j6zNKMFjPx6BhnpjfiqSL1TY3Tg33oiBHfx3+2rS85zuonFwSnz95i0ooi/dV7iKgRs1D+iKz2/YDJOpTFrrH3nkXUyeOh2fLf4WT05+BPNemCVeH729EB+/S6933sBH7yzEG6/Ox1NTHxMVEmy9GoLPK5oEyG5oclIiZpOlCTSD6Pj3jb9blCVxrMVVG7PnviKSDw3hltqbjiwQJ0UaQ6fXC/H65Zq1gBaIik6aetBGIQvmPnxUevP/ZdHOXNz19QHEBWt9FhT3FRaHG2N7xyHK0PKKdObJyZPoSy4QPWMM9cB3T3hQuIMNwYG5nQfTazCVBMBjRByLHMvIwMsLXm90ugdbtCNHj2Hq07OkJaf5adVqZB7PFkMWo264XpQ9cekPD5h2SEkhq5WCFAro42LbeWPlZpgx7XGRouaB6d179+HDRY0/y5Fnbq/46Rcs+myxtMQ3xo4eiXF33kodUQnCwkJFwmPG83NE8qguoXQtPMCeSFZt2sxnpaX14cwgJ3+83b9CxJKtgWoWIf3tE1V79sCxaTOUoQ1XGFSRiVWT66Lu3l1a0vawKJ79NR0fbj+FLlGG01bUB6xON7q3M2L6kJa7ftVwxs9Bvej6jZtFiRCP0Xz59VK0axcNq80mkgE5OXnYQr7+3Pmv4ctvv8PYMTdInwaioyNRVFSCrTt2IjE+Hmn7DtC+togpGmZzBQrJlePyp01bt+ONdz7Aa2+8g23b/8ANI4aLwtFqVv66GlkkKs7ope3fL5IA3ixhkejZq19s0QoKC1FuNovKDE6SNERiYjwOHDwkhBXXrh3WUmyUnpGJYLKsXKlQWFiEzMwsUdw7Z94CfPTJ5zBR/DZowMUiTV/NCfr8Oro3LHLuVK4cenmt2Klvn/NQTtaKrTx3AH/sShP7vvyyS6UtvBgMeqziMqyISGFBV/78qxgsZneb3d2MrON4+71FWPztUvGgGT5epdWGC2j/XfnxDwHG70RFxbdLoH55DmzxSaJ6oi5u/kIGD4LRP60GjP15ZsxZm4UjhRayNBxD+S4o3jS71Iqld/RGl5jA1SDOpOB4+YpVQiQatUpkA9lScKPl6gee98OxFzfs7CNp9c559tz5+GH5z/QZbyKB3aDIiHASrQpWqx2m8jIxZsQxSXhYCBYveh+RNYpgudxp0pQnRf0cN17+fHCwkZwKPs7pY/FxuQo+iASVEBeLc8/tiQfGN/xoOTEdZM7LYnCVGzCPK7FfFUrH53+5iNZCDZfjQnbfrhg6GM88OaVWnLZ23QbMfvlfQuSc9Hh59iyRcKjL9Jkv4Jff1qJDUhIJJBOPTLy/1pgfu9hTnpqFDRs3iYwnW/PKSivCwkNFWRIPNRRQ59Svbx+R+OH7zecYTTFkIon4xWdnSHsKDH5bqvW7i2FZsxopMXrY3N7f1K2JgnpjhU4P7bXX1Gscrc1nu3Iwc1UGyigmigjyT1DcvjJLrLi3XyKG9zjzkpiaDBk0EMntE8Skv5NkmTjNbqIenevweLKiVqMS83vmzJpBPXX96oFBAweIYluunTtOAbvd5RDZMi46ZXeSf/iBA/w7bh2Lxx7+BzXy2r8CydUYXKGQST222+UWjbiszCwSIPx5FhlXG7CF4gbJcQwnIXjCH49/jW5goiGLcujggUhKTMRmspRc0c7FqsV0TqYyk6i44JbbITkFTz7+MG65abRIjNSES5CWfLcM5spKkeK/7pqrxETCuvD1p+09gE1btoqkxPKffkZoaJiwZAyP5V0xZJCYu7V+01YhGrvTjrJSukf0N/f91w67Ek8/MRnDrr4Cs2a/JIYeDh06iiSKC7n4N5D4ban2bj2G6Rc/jndGAO0UDpjdatHXVbdf/lE3xvjsLPEM9bYgq8SGJ1YewdGiSpEyb8nv/pbbnAjTq7Bi3AXSktahnNygjIzjwk1R0k0LD/fO3PUVl9sjBjjZwnFJmMFgpJgoqV7le11ycvPIRXwfv6/fJKzYzaNGYuAlF8PFKXuCvQ6eG7Vt5x/48NMvxNiYngL7wuIi3DpmNB584F6xXWOwIDOzTghLyNaOqxc6p3aga2w+buHayGBjcLPTMLgwmAXDrilnL9naN8TRY+liO26TfF96nFO7PpE7Fn6QJ8eRYg5bgPFbVCUnizEiaTx69eiE+9ufQB9jJcqdGvCDxLzehAKenBzo7p0Aw/2+j8u0hFPldizdm4+3t55EqE4trJNfFyPBP5tDLQpL7+yDSHIZzza4AT08eRqcZOFGXHetmCHcFCyQu+978H+JE54E+f1Xn4i/ZZrH7/SHSqtC13gKtK1uzMtIxk9FkQhRu2FU8VRqbptVUPLI//ffw0N+cmuQZ7bjrU3ZmPjdIby37RSSwvUtFhQX19ocbjw1tONZKShmzsuvigxaGPXszQmKYSszlOLi6meb6/Rn531pLfwWld6oR6e+naB02hCi8uCznFjMykjBKbsWETo7dErq9fm5Cfl5sP/4o/SpwFBmdWLGqnTcsXgfPt2VSy6bC+3D9GQjWzb2wIY132zDrX3icGXXaO/Cs5DdaXtFdUJz0zRqwuNjHJNW0V3iiYYyvuO3qHQkqn7Dz0dZgVlMmwhVe3DSqsOUQ6mYfrgjKt0KhCicCO6QANeTT0ifajkudxV+Sy/GmM/24NI3t+P39BIhoDCyTHqNskViqobdx2u7R+PhgW37TIy2hj18FtWO3btFjV1zHMvIEhlDLr61Wa3o6+PzRmS8+B1TMXt+3YOFd78BjSGIglJvcMl9mtWtQq5DhZ4hVgyMMCFVaUZUVBAilyyGL9MP2fIUW5woszmRUWzFmowSrE83wUIxT2KYDgaN6oxEVA1fcgkd58KkELx5Qw9p6dnLwL8NR0iIUaSe4+JiMfuZ6aIyomY2jlP6XOZziuLhGc+9JCq/uaqCM4PiCU8yPtMiUXlcbrxww1yk78yCMbzm45jZWQBsHiXKnFwWBMRV5CPypiFQ3XM9whxOhGn5p0DJQNJRuaiTf0mj3OaGmQR1imKlnDI7civssDh4GrsaRp1KWESO1wIBz/sprnTi8tRwzLvWd3for8wvq3/HM8/PEc+TcJOwuGqC6//iYmNFaQ9/Dzy1/FROLg4ePCwmRXKK3WgMxnNPTxVPfZLxnRaJilm+YBmWzFsOQ1hDzzj3istTpRDPR3cW0xd242UoHnoxDCazGFfxblYlHlHGP1zNqVd+mhHPq+LHlXG6OUA6+h+cnTxRaiWXLwZzhnVuUer9rwpXLsxfsBAnTp4Saebq5+Bx2pnhZsDveRoHdzz8EMzbxo5Bh5Sz2zVuDVosKua+jhPFmISK3LImoUPo8kqQe+fVyPvbAOiKTmcF22qAmLN8x0lQ9/ZPxOODm56afjbDA7qr1/6OnbvTUFxcQi6hW7h5PJGvW2onDBl8Ga762xBpa5mWcEaiytpxGA/2m4aO56SInq4pPNQzGo6dRO6E61E4qD+UNgeUDpfXfLQyXHVO/TAeHZiCMb1ipaUyMq2D39m/mnS4sBtGP3QVco7milKRplCSpbB0bo+YL1cjcfEKeu+Gk6epc9Vxy3XdJCzXArMD8SEavDOqhywomTbhjCyVFw+ev3IW9m07jpj2kQ0+g6AmfDhVhRXuqBDkjr0SJX16Qp9fAqWbrBa7ggFyB110HocKKjCB3L1JlyaLwWEZmbYgAKICynMK8dz1LyE/24TQ6IYeCFMbXqt0OqEqNaOif3dk3zUSHpWGXEI7LSdxkfWqF2s1JrbqY4nV/HiuKvGrh1VkAN8e3R3nJ5zZREMZGX8JiKgYZ2kZXrhxPg7uOo6o+EifDI6HtlGXW6GpqEDJ0AtQfMn5cEaHw6XX8YlBSUG0gh++yK/G9scHUqnAz4gsN1sRpldjSGoEpg/1PrxfRqatCZiovHiw8I7XsfH7HQiODoPeoG3eHZReGlMFFB4XLN07wNKpPexxkXBERcARQyLjX49QKIXQxMaMUgGFipaRK1lxOBuhcOGiAV1w6wXt0T2Ac6FkZPwlwKLysu6jVfhsxlcoLrIhrlO70y5aE4gt2DqJrCC5b0FaOA1B8Bh08GjVqDIa4OLp7WLgWAFPpQ3m9Dy4TGaMefx6XDryAnTpGvgyfhkZf2kVUVWz4pWlWDjlI0RExcAQEgS1WinGRJodm+LVZOEU9Koi10/M0aI4i0tp7BYHyikWC4kMxqgnrsfwicOhon17PyQj8/+nVUVVzc8LlmLdt9tRVmKBheIep8MFpVpNoRAJjNy4mul4Ph12GVlAXFJTRXrSG7XQ8eRD+kzfq3vi+kevQ2RCYGfnysgEijYRVTVFx05i16o9OJVRgMrSSpTll8NiscNBcRGXyDB6vRaaYD2C6BUeGwZDWDA6ntdeTDeJ7yK7dzJ/ftpUVLXxoLLIDJvNCUcli8q7VKfTQENWSU+xlC64obpCGZk/N/9HUcnInJ2cUZmSjIxMfWRRycgEGFlUMjIBRhaVjEyAkUUlIxNgZFHJyAQYWVQyMgFGFpWMTEAB/guC4qQ93Tx9cgAAAABJRU5ErkJggg==\");\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: center;\n  background-color: white; }\n"

/***/ }),

/***/ "./src/app/dashboard/components/sidenav/sidenav.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/dashboard/components/sidenav/sidenav.component.ts ***!
  \*******************************************************************/
/*! exports provided: SidenavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavComponent", function() { return SidenavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/dashboard/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SMALL_WIDTH_BREAKPOINT = 720;
var SidenavComponent = /** @class */ (function () {
    function SidenavComponent(zone, userService, router) {
        var _this = this;
        this.userService = userService;
        this.router = router;
        this.mediaMatcher = matchMedia("(max-width: " + SMALL_WIDTH_BREAKPOINT + "px)");
        this.isDarkTheme = false;
        this.dir = 'ltr';
        this.mediaMatcher.addListener(function (mql) {
            return zone.run(function () { return _this.mediaMatcher = mql; });
        });
    }
    SidenavComponent.prototype.toggleTheme = function () {
        this.isDarkTheme = !this.isDarkTheme;
    };
    SidenavComponent.prototype.toggleDir = function () {
        var _this = this;
        this.dir = this.dir === 'ltr' ? 'rtl' : 'ltr';
        this.sidenav.toggle().then(function () { return _this.sidenav.toggle(); });
    };
    SidenavComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.subscribe(function () {
            if (_this.isScreenSmall()) {
                _this.sidenav.close();
            }
        });
    };
    SidenavComponent.prototype.isScreenSmall = function () {
        return this.mediaMatcher.matches;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSidenav"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSidenav"])
    ], SidenavComponent.prototype, "sidenav", void 0);
    SidenavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidenav',
            template: __webpack_require__(/*! ./sidenav.component.html */ "./src/app/dashboard/components/sidenav/sidenav.component.html"),
            styles: [__webpack_require__(/*! ./sidenav.component.scss */ "./src/app/dashboard/components/sidenav/sidenav.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SidenavComponent);
    return SidenavComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/components/toolbar/toolbar.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/dashboard/components/toolbar/toolbar.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\r\n\r\n  <button mat-button class=\"sidenav-toggle\" (click)=\"toggleSidenav.emit()\">\r\n    <mat-icon>menu</mat-icon>\r\n  </button>\r\n\r\n  <span>Dashboard</span>\r\n\r\n  <span class=\"example-spacer\"></span>\r\n\r\n  <button mat-button [matMenuTriggerFor]=\"menu\">\r\n    <mat-icon>more_vert</mat-icon>\r\n  </button>\r\n  <mat-menu #menu=\"matMenu\">\r\n    <button mat-menu-item (click)=\"openAddContactDialog()\">New Contact</button>\r\n    <button mat-menu-item (click)=\"toggleTheme.emit()\">Toggle theme</button>\r\n    <button mat-menu-item (click)=\"toggleDir.emit()\">Toggle dir</button>\r\n    <button mat-menu-item (click)=\"authService.logout()\"> <mat-icon class=\"icon\">input</mat-icon> Logout</button>\r\n  </mat-menu>\r\n\r\n</mat-toolbar>\r\n"

/***/ }),

/***/ "./src/app/dashboard/components/toolbar/toolbar.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/dashboard/components/toolbar/toolbar.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-spacer {\n  flex: 1 1 auto; }\n\n.sidenav-toggle {\n  display: none;\n  padding: 0;\n  margin: 8px;\n  min-width: 56px; }\n\n@media (max-width: 720px) {\n    .sidenav-toggle {\n      display: flex;\n      align-items: center;\n      justify-content: center; } }\n\n.sidenav-toggle mat-icon {\n    font-size: 30px;\n    height: 56px;\n    width: 56px;\n    line-height: 56px;\n    color: white; }\n"

/***/ }),

/***/ "./src/app/dashboard/components/toolbar/toolbar.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/dashboard/components/toolbar/toolbar.component.ts ***!
  \*******************************************************************/
/*! exports provided: ToolbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarComponent", function() { return ToolbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _new_contact_dialog_new_contact_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../new-contact-dialog/new-contact-dialog.component */ "./src/app/dashboard/components/new-contact-dialog/new-contact-dialog.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/auth/_service/auth.service */ "./src/app/auth/_service/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ToolbarComponent = /** @class */ (function () {
    function ToolbarComponent(dialog, snackBar, authService, router) {
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.authService = authService;
        this.router = router;
        this.toggleSidenav = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.toggleTheme = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.toggleDir = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ToolbarComponent.prototype.ngOnInit = function () {
    };
    ToolbarComponent.prototype.openAddContactDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_new_contact_dialog_new_contact_dialog_component__WEBPACK_IMPORTED_MODULE_2__["NewContactDialogComponent"], {
            width: '450px'
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed', result);
            if (result) {
                _this.openSnackBar('Contact added', 'Navigate')
                    .onAction().subscribe(function () {
                    _this.router.navigate(['/secured', result.id]);
                });
            }
        });
    };
    ToolbarComponent.prototype.openSnackBar = function (message, action) {
        return this.snackBar.open(message, action, {
            duration: 5000,
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ToolbarComponent.prototype, "toggleSidenav", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ToolbarComponent.prototype, "toggleTheme", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ToolbarComponent.prototype, "toggleDir", void 0);
    ToolbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-toolbar',
            template: __webpack_require__(/*! ./toolbar.component.html */ "./src/app/dashboard/components/toolbar/toolbar.component.html"),
            styles: [__webpack_require__(/*! ./toolbar.component.scss */ "./src/app/dashboard/components/toolbar/toolbar.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"],
            src_app_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ToolbarComponent);
    return ToolbarComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard-app.component.ts":
/*!******************************************************!*\
  !*** ./src/app/dashboard/dashboard-app.component.ts ***!
  \******************************************************/
/*! exports provided: DashboardAppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardAppComponent", function() { return DashboardAppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardAppComponent = /** @class */ (function () {
    function DashboardAppComponent(iconRegistry, sanitizer) {
        iconRegistry.addSvgIconSet(sanitizer.bypassSecurityTrustResourceUrl('assets/avatars.svg'));
    }
    DashboardAppComponent.prototype.ngOnInit = function () {
    };
    DashboardAppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard-app',
            template: "\n    <app-sidenav></app-sidenav>\n  ",
            styles: []
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconRegistry"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], DashboardAppComponent);
    return DashboardAppComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.module.ts":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.module.ts ***!
  \***********************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/material.module */ "./src/app/shared/material.module.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _dashboard_app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard-app.component */ "./src/app/dashboard/dashboard-app.component.ts");
/* harmony import */ var _components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/toolbar/toolbar.component */ "./src/app/dashboard/components/toolbar/toolbar.component.ts");
/* harmony import */ var _components_main_content_main_content_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/main-content/main-content.component */ "./src/app/dashboard/components/main-content/main-content.component.ts");
/* harmony import */ var _components_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/sidenav/sidenav.component */ "./src/app/dashboard/components/sidenav/sidenav.component.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/user.service */ "./src/app/dashboard/services/user.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _components_notes_notes_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/notes/notes.component */ "./src/app/dashboard/components/notes/notes.component.ts");
/* harmony import */ var _components_new_contact_dialog_new_contact_dialog_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/new-contact-dialog/new-contact-dialog.component */ "./src/app/dashboard/components/new-contact-dialog/new-contact-dialog.component.ts");
/* harmony import */ var _posts_post_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./posts/post-list.component */ "./src/app/dashboard/posts/post-list.component.ts");
/* harmony import */ var _posts_post_detail_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./posts/post-detail.component */ "./src/app/dashboard/posts/post-detail.component.ts");
/* harmony import */ var _event_registration_event_registration_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./event-registration/event-registration.component */ "./src/app/dashboard/event-registration/event-registration.component.ts");
/* harmony import */ var _event_registration_event_registration_detail_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./event-registration/event-registration-detail.component */ "./src/app/dashboard/event-registration/event-registration-detail.component.ts");
/* harmony import */ var _posts_post_dialog_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./posts/post-dialog.component */ "./src/app/dashboard/posts/post-dialog.component.ts");
/* harmony import */ var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ckeditor/ckeditor5-angular */ "./node_modules/@ckeditor/ckeditor5-angular/fesm5/ckeditor-ckeditor5-angular.js");
/* harmony import */ var _shared_safe_pipe_pipe__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../shared/safe-pipe.pipe */ "./src/app/shared/safe-pipe.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var routes = [
    {
        path: '', component: _dashboard_app_component__WEBPACK_IMPORTED_MODULE_6__["DashboardAppComponent"],
        children: [
            { path: 'posts', component: _posts_post_list_component__WEBPACK_IMPORTED_MODULE_14__["PostListComponent"] },
            { path: 'posts/:id', component: _posts_post_detail_component__WEBPACK_IMPORTED_MODULE_15__["PostDetailComponent"] },
            { path: 'event-registration', component: _event_registration_event_registration_component__WEBPACK_IMPORTED_MODULE_16__["EventRegistrationComponent"] },
            { path: 'event-registration/:id', component: _event_registration_event_registration_detail_component__WEBPACK_IMPORTED_MODULE_17__["EventRegistrationDetailComponent"] },
            { path: '', component: _posts_post_list_component__WEBPACK_IMPORTED_MODULE_14__["PostListComponent"] }
        ]
    },
    { path: '**', redirectTo: '' }
];
var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
                _shared_material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
                _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_19__["CKEditorModule"]
            ],
            providers: [
                _services_user_service__WEBPACK_IMPORTED_MODULE_10__["UserService"],
            ],
            declarations: [
                _dashboard_app_component__WEBPACK_IMPORTED_MODULE_6__["DashboardAppComponent"],
                _components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_7__["ToolbarComponent"],
                _components_main_content_main_content_component__WEBPACK_IMPORTED_MODULE_8__["MainContentComponent"],
                _components_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_9__["SidenavComponent"],
                _components_notes_notes_component__WEBPACK_IMPORTED_MODULE_12__["NotesComponent"],
                _components_new_contact_dialog_new_contact_dialog_component__WEBPACK_IMPORTED_MODULE_13__["NewContactDialogComponent"],
                _posts_post_list_component__WEBPACK_IMPORTED_MODULE_14__["PostListComponent"],
                _posts_post_detail_component__WEBPACK_IMPORTED_MODULE_15__["PostDetailComponent"],
                _event_registration_event_registration_component__WEBPACK_IMPORTED_MODULE_16__["EventRegistrationComponent"],
                _event_registration_event_registration_detail_component__WEBPACK_IMPORTED_MODULE_17__["EventRegistrationDetailComponent"],
                _posts_post_dialog_component__WEBPACK_IMPORTED_MODULE_18__["PostDialogComponent"],
                _shared_safe_pipe_pipe__WEBPACK_IMPORTED_MODULE_20__["SafePipe"]
            ],
            exports: [
                _shared_safe_pipe_pipe__WEBPACK_IMPORTED_MODULE_20__["SafePipe"]
            ],
            entryComponents: [
                _components_new_contact_dialog_new_contact_dialog_component__WEBPACK_IMPORTED_MODULE_13__["NewContactDialogComponent"],
                _posts_post_dialog_component__WEBPACK_IMPORTED_MODULE_18__["PostDialogComponent"]
            ]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "./src/app/dashboard/event-registration/event-registration-detail.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/dashboard/event-registration/event-registration-detail.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  event-registration-detail works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/dashboard/event-registration/event-registration-detail.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/dashboard/event-registration/event-registration-detail.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/event-registration/event-registration-detail.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/dashboard/event-registration/event-registration-detail.component.ts ***!
  \*************************************************************************************/
/*! exports provided: EventRegistrationDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventRegistrationDetailComponent", function() { return EventRegistrationDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EventRegistrationDetailComponent = /** @class */ (function () {
    function EventRegistrationDetailComponent() {
    }
    EventRegistrationDetailComponent.prototype.ngOnInit = function () {
    };
    EventRegistrationDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-event-registration-detail',
            template: __webpack_require__(/*! ./event-registration-detail.component.html */ "./src/app/dashboard/event-registration/event-registration-detail.component.html"),
            styles: [__webpack_require__(/*! ./event-registration-detail.component.scss */ "./src/app/dashboard/event-registration/event-registration-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], EventRegistrationDetailComponent);
    return EventRegistrationDetailComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/event-registration/event-registration.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/dashboard/event-registration/event-registration.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  event-registration works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/dashboard/event-registration/event-registration.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/dashboard/event-registration/event-registration.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/event-registration/event-registration.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/dashboard/event-registration/event-registration.component.ts ***!
  \******************************************************************************/
/*! exports provided: EventRegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventRegistrationComponent", function() { return EventRegistrationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EventRegistrationComponent = /** @class */ (function () {
    function EventRegistrationComponent() {
    }
    EventRegistrationComponent.prototype.ngOnInit = function () {
    };
    EventRegistrationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-event-registration',
            template: __webpack_require__(/*! ./event-registration.component.html */ "./src/app/dashboard/event-registration/event-registration.component.html"),
            styles: [__webpack_require__(/*! ./event-registration.component.scss */ "./src/app/dashboard/event-registration/event-registration.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], EventRegistrationComponent);
    return EventRegistrationComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/models/user.ts":
/*!******************************************!*\
  !*** ./src/app/dashboard/models/user.ts ***!
  \******************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
        this.notes = [];
    }
    return User;
}());



/***/ }),

/***/ "./src/app/dashboard/posts/post-detail.component.html":
/*!************************************************************!*\
  !*** ./src/app/dashboard/posts/post-detail.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!post\">\r\n    <mat-spinner></mat-spinner>\r\n  </div>\r\n  <div *ngIf=\"post\">\r\n    <mat-card>\r\n      <mat-card-header>\r\n        <mat-icon mat-card-avatar svgIcon=\"1\"></mat-icon>\r\n        <mat-card-title>\r\n          <h2>{{ post.title }}</h2>\r\n        </mat-card-title>\r\n        <mat-card-subtitle>\r\n          Date Posted {{ post.datePosted | date:'d LLLL' }}\r\n        </mat-card-subtitle>\r\n      </mat-card-header>\r\n      <mat-card-content>\r\n        <mat-tab-group>\r\n          <mat-tab label=\"Body\">\r\n            <p  [innerHTML]=\"post.body | safePipe\">\r\n              {{post.body}}\r\n            </p>\r\n          </mat-tab>\r\n          <!-- <mat-tab label=\"Notes\">\r\n            <app-notes [notes]=\"user.notes\"></app-notes>\r\n          </mat-tab> -->\r\n        </mat-tab-group>\r\n        <mat-card-footer>\r\n            <button mat-button (click)='onBack()'>\r\n              <i class=\"material-icons\">\r\n                    arrow_back\r\n              </i>\r\n              Back to posts\r\n            </button>\r\n        </mat-card-footer>\r\n      </mat-card-content>\r\n    </mat-card>\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/dashboard/posts/post-detail.component.scss":
/*!************************************************************!*\
  !*** ./src/app/dashboard/posts/post-detail.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "figure {\n  width: 400px;\n  height: 400px; }\n"

/***/ }),

/***/ "./src/app/dashboard/posts/post-detail.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/dashboard/posts/post-detail.component.ts ***!
  \**********************************************************/
/*! exports provided: PostDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostDetailComponent", function() { return PostDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/post.service */ "./src/app/dashboard/services/post.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PostDetailComponent = /** @class */ (function () {
    function PostDetailComponent(route, router, postService) {
        this.route = route;
        this.router = router;
        this.postService = postService;
    }
    PostDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('helle');
        var id = +this.route.snapshot.paramMap.get('id');
        this.postService.getPost(id).subscribe(function (post) {
            _this.post = post;
        }, function (error) { return _this.errorMessage = error; });
    };
    PostDetailComponent.prototype.onBack = function () {
        this.router.navigate(['/secured/posts']);
    };
    PostDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-post-detail',
            template: __webpack_require__(/*! ./post-detail.component.html */ "./src/app/dashboard/posts/post-detail.component.html"),
            styles: [__webpack_require__(/*! ./post-detail.component.scss */ "./src/app/dashboard/posts/post-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"]])
    ], PostDetailComponent);
    return PostDetailComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/posts/post-dialog.component.html":
/*!************************************************************!*\
  !*** ./src/app/dashboard/posts/post-dialog.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<script>\r\n    document.querySelectorAll( 'oembed[url]' ).forEach( element => {\r\n        iframely.load( element, element.attributes.url.value );\r\n    } );\r\n</script>\r\n<h1 mat-dialog-title>{{data}}</h1>\r\n<div mat-dialog-content>\r\n  <form class=\"example-form\" (ngSubmit)=\"onSubmit()\">\r\n    <mat-form-field>\r\n      <input matInput placeholder=\"Post Title\" type=\"text\" required [(ngModel)]=\"blogPost.title\" name=\"name\">\r\n    </mat-form-field>\r\n    <ckeditor\r\n     [config]=\"editorConfig\"\r\n     [editor]=\"Editor\" type=\"text\" required [(ngModel)]=\"blogPost.body\" name=\"name\"></ckeditor>\r\n    <mat-form-field>\r\n      <mat-select matInput placeholder=\"Post Category\" required [(ngModel)]=\"blogPost.category\" name=\"category\">\r\n        <mat-option *ngFor=\"let cat of categories\" [value]=\"cat.value\">\r\n          {{ cat.viewValue }}\r\n        </mat-option>\r\n      </mat-select>\r\n    </mat-form-field>\r\n    <button mat-raised-button type=\"submit\" color=\"primary\">Save</button>\r\n  </form>\r\n</div>\r\n<div mat-dialog-actions>\r\n  <button mat-raised-button class=\"close\" (click)=\"onNoClick()\" color=\"warn\">Cancel</button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/dashboard/posts/post-dialog.component.scss":
/*!************************************************************!*\
  !*** ./src/app/dashboard/posts/post-dialog.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-form {\n  display: flex;\n  flex-direction: column; }\n\n.example-form > * {\n  width: 100%; }\n\n.close {\n  width: 100%; }\n"

/***/ }),

/***/ "./src/app/dashboard/posts/post-dialog.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/dashboard/posts/post-dialog.component.ts ***!
  \**********************************************************/
/*! exports provided: PostDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostDialogComponent", function() { return PostDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/data.service */ "./src/app/dashboard/services/data.service.ts");
/* harmony import */ var _ckeditor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ckeditor */ "./src/app/ckeditor.js");
/* harmony import */ var _ckeditor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ckeditor__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var PostDialogComponent = /** @class */ (function () {
    function PostDialogComponent(dialogRef, data, dataService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.dataService = dataService;
        this.Editor = _ckeditor__WEBPACK_IMPORTED_MODULE_3__;
        this.editorConfig = {
            image: {
                // You need to configure the image toolbar too, so it uses the new style buttons.
                toolbar: ['imageTextAlternative', '|', 'imageStyle:alignLeft', 'imageStyle:full', 'imageStyle:alignRight'],
                styles: [
                    // This option is equal to a situation where no style is applied.
                    'full',
                    // This represents an image aligned to the left.
                    'alignLeft',
                    // This represents an image aligned to the right.
                    'alignRight'
                ]
            },
            mediaEmbed: {
                previewInData: true,
            },
            heading: {
                options: [
                    { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
                    { model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1' },
                    { model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' }
                ]
            },
            cloudServices: {
                // PROVIDE CORRECT VALUES HERE:
                // tokenUrl: 'https://example.com/cs-token-endpoint',
                // uploadUrl: 'https://your-organization-id.cke-cs.com/easyimage/upload/',
                webSocketUrl: 'your-organization-id.cke-cs.com/ws/',
                documentId: 'collabEditing'
            }
        };
        // public Editor = ClassicEditorBuild;
        this.blogPost = {
            id: 1,
            title: '',
            body: '',
            category: '',
            position: 0,
            datePosted: new Date()
        };
        this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.categories = this.dataService.getCategories();
    }
    PostDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    PostDialogComponent.prototype.onSubmit = function () {
        this.blogPost.position = this.dataService.dataLength();
        this.event.emit({ data: this.blogPost });
        this.dialogRef.close();
    };
    PostDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-post-dialog',
            template: __webpack_require__(/*! ./post-dialog.component.html */ "./src/app/dashboard/posts/post-dialog.component.html"),
            styles: [__webpack_require__(/*! ./post-dialog.component.scss */ "./src/app/dashboard/posts/post-dialog.component.scss")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object, _services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], PostDialogComponent);
    return PostDialogComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/posts/post-list.component.html":
/*!**********************************************************!*\
  !*** ./src/app/dashboard/posts/post-list.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    <br>\r\n      <div class=\"container\">\r\n          <div class=\"container\">\r\n            <div fxLayout=\"column\" fxLayoutGap=\"20px\" fxLayout.gt-md=\"row\"  fxLayoutAlign=\"space-around center\" class=\"content\">\r\n                <div class=\"blocks\">\r\n                    <button button=\"submit\" mat-raised-button color=\"primary\" (click)= \"openDialog()\">\r\n                        <mat-icon>add</mat-icon> Add Post\r\n                    </button>\r\n                </div>\r\n          </div>\r\n      </div>\r\n      <br>\r\n      <div class=\"container\">\r\n        <div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"content\">\r\n          <mat-card class=\"card\" >\r\n            <mat-card-title fxLayout.gt-xs=\"row\" fxLayout.xs=\"column\">\r\n              <h3>Recent Posts</h3>\r\n            </mat-card-title>\r\n            <mat-card-content>\r\n                <mat-form-field>\r\n                    <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\r\n                  </mat-form-field>\r\n                <div class=\"example-container mat-elevation-z8\">\r\n                    <mat-table #table [dataSource]=\"dataSource\" matSort>\r\n                    <ng-container matColumnDef=\"datePosted\">\r\n                      <mat-header-cell *matHeaderCellDef mat-sort-header> Date Posted </mat-header-cell>\r\n                      <mat-cell *matCellDef=\"let element\"> {{element.datePosted  | date: 'd/M/y'}} </mat-cell>\r\n                    </ng-container>\r\n                      <ng-container matColumnDef=\"title\">\r\n                        <mat-header-cell *matHeaderCellDef mat-sort-header> Title </mat-header-cell>\r\n                        <mat-cell  *matCellDef=\"let element\">\r\n                            <button [routerLink]=\"['/secured/posts', element.id]\" mat-button>{{element.title}}</button>\r\n                        </mat-cell>\r\n                      </ng-container>\r\n                      <ng-container matColumnDef=\"category\">\r\n                        <mat-header-cell *matHeaderCellDef mat-sort-header > Category </mat-header-cell>\r\n                        <mat-cell *matCellDef=\"let element\"> {{element.category}} </mat-cell>\r\n                      </ng-container>\r\n                      <ng-container matColumnDef=\"delete\">\r\n                        <mat-header-cell *matHeaderCellDef mat-sort-header ></mat-header-cell>\r\n                        <mat-cell *matCellDef=\"let element\">\r\n                          <a\r\n                              type=\"button\">\r\n                            <mat-icon class=\"icon\">delete</mat-icon>\r\n                          </a>\r\n                        </mat-cell>\r\n                      </ng-container>\r\n                      <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n                      <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n                    </mat-table>\r\n                    <mat-paginator #paginator [pageSize]=\"10\" [pageSizeOptions]=\"[5, 10, 20]\">\r\n                    </mat-paginator>\r\n                  </div>\r\n            </mat-card-content>\r\n          </mat-card>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n"

/***/ }),

/***/ "./src/app/dashboard/posts/post-list.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/dashboard/posts/post-list.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n  min-width: 80%; }\n\n.example-container {\n  display: flex;\n  flex-direction: column;\n  max-height: 500px;\n  min-width: 100%; }\n\n.mat-table {\n  overflow: auto;\n  max-height: 500px; }\n\na {\n  cursor: pointer; }\n"

/***/ }),

/***/ "./src/app/dashboard/posts/post-list.component.ts":
/*!********************************************************!*\
  !*** ./src/app/dashboard/posts/post-list.component.ts ***!
  \********************************************************/
/*! exports provided: PostListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostListComponent", function() { return PostListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _post_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./post-dialog.component */ "./src/app/dashboard/posts/post-dialog.component.ts");
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/post.service */ "./src/app/dashboard/services/post.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PostListComponent = /** @class */ (function () {
    function PostListComponent(postService, dialog) {
        this.postService = postService;
        this.dialog = dialog;
        this.posts = [];
        this.displayedColumns = ['datePosted', 'title', 'category', 'delete'];
    }
    PostListComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_post_dialog_component__WEBPACK_IMPORTED_MODULE_2__["PostDialogComponent"], {
            height: '768px',
            width: '1024px',
            data: 'Add Post'
        });
        dialogRef.componentInstance.event.subscribe(function (result) {
            _this.postService.addPost(result.data).subscribe(function (data) {
                // This code will be executed when the HTTP call returns successfully
                _this.postService.getPosts().subscribe(function (posts) {
                    _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](posts);
                }, function (error) { return _this.errorMessage = error; });
            });
        });
    };
    PostListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.postService.getPosts().subscribe(function (posts) {
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](posts);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        }, function (error) { return _this.errorMessage = error; });
    };
    PostListComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], PostListComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], PostListComponent.prototype, "sort", void 0);
    PostListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-posts',
            template: __webpack_require__(/*! ./post-list.component.html */ "./src/app/dashboard/posts/post-list.component.html"),
            styles: [__webpack_require__(/*! ./post-list.component.scss */ "./src/app/dashboard/posts/post-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_post_service__WEBPACK_IMPORTED_MODULE_3__["PostService"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], PostListComponent);
    return PostListComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/services/data.service.ts":
/*!****************************************************!*\
  !*** ./src/app/dashboard/services/data.service.ts ***!
  \****************************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/index */ "./node_modules/rxjs/index.js");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_index__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataService = /** @class */ (function () {
    function DataService() {
        this.ELEMENT_DATA = [
            { position: 0, id: 1, title: 'Post One', category: 'Web Development', datePosted: new Date(), body: 'Body 1' },
            { position: 1, id: 2, title: 'Post Two', category: 'Android Development', datePosted: new Date(), body: 'Body 2' },
            { position: 2, id: 3, title: 'Post Three', category: 'IOS Development', datePosted: new Date(), body: 'Body 3' },
            { position: 3, id: 4, title: 'Post Four', category: 'Android Development', datePosted: new Date(), body: 'Body 4' },
            { position: 4, id: 5, title: 'Post Five', category: 'IOS Development', datePosted: new Date(), body: 'Body 5' },
            { position: 5, id: 6, title: 'Post Six', category: 'Web Development', datePosted: new Date(), body: 'Body 6' },
        ];
        this.categories = [
            { value: 'Web-Development', viewValue: 'Web Development' },
            { value: 'Android-Development', viewValue: 'Android Development' },
            { value: 'IOS-Development', viewValue: 'IOS Development' }
        ];
    }
    DataService.prototype.getData = function () {
        return Object(rxjs_index__WEBPACK_IMPORTED_MODULE_1__["of"])(this.ELEMENT_DATA);
    };
    DataService.prototype.getCategories = function () {
        return this.categories;
    };
    DataService.prototype.addPost = function (data) {
        this.ELEMENT_DATA.push(data);
    };
    DataService.prototype.getPost = function (id) {
        return this.ELEMENT_DATA.find(function (x) { return x.id == id; });
    };
    DataService.prototype.deletePost = function (index) {
        this.ELEMENT_DATA = this.ELEMENT_DATA.slice(0, index).concat(this.ELEMENT_DATA.slice(index + 1));
    };
    DataService.prototype.dataLength = function () {
        return this.ELEMENT_DATA.length;
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/dashboard/services/post.service.ts":
/*!****************************************************!*\
  !*** ./src/app/dashboard/services/post.service.ts ***!
  \****************************************************/
/*! exports provided: PostService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostService", function() { return PostService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PostService = /** @class */ (function () {
    function PostService(http) {
        this.http = http;
        this.apiUrl = 'http://localhost:8090';
        this.dataStore = { posts: [] };
        this._posts = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
    }
    PostService.prototype.addPost = function (post) {
        return this.http.post(this.apiUrl + '/posts', post).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (posts) { return console.log('save post'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    PostService.prototype.getPost = function (id) {
        return this.http.get(this.apiUrl + '/posts/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (data) { return console.log('post:' + JSON.stringify(data)); }));
    };
    PostService.prototype.getPosts = function () {
        return this.http.get(this.apiUrl + '/posts').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (data) { return console.log('All:' + JSON.stringify(data)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    PostService.prototype.handleError = function (err) {
        // in real world  app, we may send the server to some remote logging infrastructure
        // instead of logging it to console
        var errorMessage = '';
        if (err.error instanceof ErrorEvent) {
            // A client-side or network error occured. Handle it accordingly
            errorMessage = "An error ocurred : " + err.error.message;
        }
        else {
            // the backed returned an unusuccesfull response code.
            // the response body may contain clues as to what went wrong
            errorMessage = "Server returned code: " + err.status + ", error message is: " + err.message;
        }
        console.error(errorMessage);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(errorMessage);
    };
    PostService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PostService);
    return PostService;
}());



/***/ }),

/***/ "./src/app/dashboard/services/user.service.ts":
/*!****************************************************!*\
  !*** ./src/app/dashboard/services/user.service.ts ***!
  \****************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/index */ "./node_modules/rxjs/index.js");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_index__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.dataStore = { users: [] };
        this._users = new rxjs_index__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
    }
    Object.defineProperty(UserService.prototype, "users", {
        get: function () {
            return this._users.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    UserService.prototype.addUser = function (user) {
        var _this = this;
        return new Promise(function (resolver, reject) {
            user.id = _this.dataStore.users.length + 1;
            _this.dataStore.users.push(user);
            _this._users.next(Object.assign({}, _this.dataStore).users);
            resolver(user);
        });
    };
    UserService.prototype.userById = function (id) {
        return this.dataStore.users.find(function (x) { return x.id == id; });
    };
    UserService.prototype.loadAll = function () {
        var _this = this;
        var usersUrl = 'https://angular-material-api.azurewebsites.net/users';
        return this.http.get(usersUrl)
            .subscribe(function (data) {
            _this.dataStore.users = data;
            _this._users.next(Object.assign({}, _this.dataStore).users);
        }, function (error) {
            console.log('Failed to fetch users');
        });
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/shared/safe-pipe.pipe.ts":
/*!******************************************!*\
  !*** ./src/app/shared/safe-pipe.pipe.ts ***!
  \******************************************/
/*! exports provided: SafePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafePipe", function() { return SafePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SafePipe = /** @class */ (function () {
    function SafePipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafePipe.prototype.transform = function (content) {
        this.sanitizer.bypassSecurityTrustStyle(content);
        return this.sanitizer.bypassSecurityTrustHtml(content);
    };
    SafePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'safePipe', pure: false
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]])
    ], SafePipe);
    return SafePipe;
}());



/***/ })

}]);
//# sourceMappingURL=dashboard-dashboard-module.js.map