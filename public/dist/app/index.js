/*!
 * grapesjs-components-farmer
 * grapesjs plugin to build components for different css framework
 *
 * @version v0.6.3
 * @author friends@niiknow.org
 * @homepage https://niiknow.github.io/grapesjs-components-farmer/
 * @repository https://github.com/niiknow/grapesjs-components-farmer.git
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("grapesjs"), require("jQuery"));
	else if(typeof define === 'function' && define.amd)
		define("grapesjs-components-farmer", ["grapesjs", "jQuery"], factory);
	else if(typeof exports === 'object')
		exports["grapesjs-components-farmer"] = factory(require("grapesjs"), require("jQuery"));
	else
		root["grapesjs-components-farmer"] = factory(root["grapesjs"], root["jQuery"]);
})(self, function(__WEBPACK_EXTERNAL_MODULE_grapesjs__, __WEBPACK_EXTERNAL_MODULE_jquery__) {
return /******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./example/bootstrap4.js":
/*!*******************************!*\
  !*** ./example/bootstrap4.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var config = {
  canvas: {
    styles: ['https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css'],
    scripts: ['https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js']
  }
};
/* harmony default export */ __webpack_exports__["default"] = (config);

/***/ }),

/***/ "./example/custom-blocks.js":
/*!**********************************!*\
  !*** ./example/custom-blocks.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (editor) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var bm = editor.BlockManager;
  bm.add('contact', {
    label: "<svg class=\"gjs-block-svg\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\">\n        <path class=\"gjs-block-svg-path\" d=\"M22,5.5 C22,5.2 21.5,5 20.75,5 L3.25,5 C2.5,5 2,5.2 2,5.5 L2,8.5 C2,8.8 2.5,9 3.25,9 L20.75,9 C21.5,9 22,8.8 22,8.5 L22,5.5 Z M21,8 L3,8 L3,6 L21,6 L21,8 Z\" fill-rule=\"nonzero\"></path>\n        <path class=\"gjs-block-svg-path\" d=\"M22,10.5 C22,10.2 21.5,10 20.75,10 L3.25,10 C2.5,10 2,10.2 2,10.5 L2,13.5 C2,13.8 2.5,14 3.25,14 L20.75,14 C21.5,14 22,13.8 22,13.5 L22,10.5 Z M21,13 L3,13 L3,11 L21,11 L21,13 Z\" fill-rule=\"nonzero\"></path>\n        <rect class=\"gjs-block-svg-path\" x=\"2\" y=\"15\" width=\"10\" height=\"3\" rx=\"0.5\"></rect>\n      </svg>\n      <div class=\"gjs-block-label\">Contact</div></div>",
    category: opts.cateogyrLabel || 'Templates',
    content: {
      components: [{
        type: 'comp_input',
        label_attr: 'Name',
        name_attr: 'name',
        placeholder_attr: 'Name'
      }, {
        type: 'comp_input',
        label_attr: 'Email',
        name_attr: 'email',
        placeholder_attr: 'Email',
        type_attr: 'email'
      }, {
        type: 'comp_textarea',
        name_attr: 'message',
        placeholder_attr: 'Message',
        label_attr: 'Message'
      }, {
        type: 'comp_submit'
      }]
    }
  });
  bm.add('address', {
    label: "<svg class=\"gjs-block-svg\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\">\n        <path class=\"gjs-block-svg-path\" d=\"M22,5.5 C22,5.2 21.5,5 20.75,5 L3.25,5 C2.5,5 2,5.2 2,5.5 L2,8.5 C2,8.8 2.5,9 3.25,9 L20.75,9 C21.5,9 22,8.8 22,8.5 L22,5.5 Z M21,8 L3,8 L3,6 L21,6 L21,8 Z\" fill-rule=\"nonzero\"></path>\n        <path class=\"gjs-block-svg-path\" d=\"M22,10.5 C22,10.2 21.5,10 20.75,10 L3.25,10 C2.5,10 2,10.2 2,10.5 L2,13.5 C2,13.8 2.5,14 3.25,14 L20.75,14 C21.5,14 22,13.8 22,13.5 L22,10.5 Z M21,13 L3,13 L3,11 L21,11 L21,13 Z\" fill-rule=\"nonzero\"></path>\n        <rect class=\"gjs-block-svg-path\" x=\"2\" y=\"15\" width=\"10\" height=\"3\" rx=\"0.5\"></rect>\n      </svg>\n      <div class=\"gjs-block-label\">Address</div></div>",
    category: opts.cateogyrLabel || 'Templates',
    content: {
      components: [{
        type: 'comp_row',
        components: [{
          type: 'comp_col',
          components: [{
            type: 'comp_input',
            type_attr: 'email',
            label_attr: 'Email',
            name_attr: 'email',
            placeholder_attr: 'Email'
          }]
        }]
      }, {
        type: 'comp_row',
        components: [{
          type: 'comp_col',
          components: [{
            type: 'comp_input',
            label_attr: 'First name',
            name_attr: 'first_name',
            placeholder_attr: 'First name'
          }]
        }, {
          type: 'comp_col',
          components: [{
            type: 'comp_input',
            label_attr: 'Last name',
            name_attr: 'last_name',
            placeholder_attr: 'Last name'
          }]
        }]
      }, {
        type: 'comp_row',
        components: [{
          type: 'comp_col',
          components: [{
            type: 'comp_input',
            label_attr: 'Street address',
            name_attr: 'address1',
            placeholder_attr: 'Street address'
          }]
        }]
      }, {
        type: 'comp_row',
        components: [{
          type: 'comp_col',
          components: [{
            type: 'comp_input',
            label_attr: 'Address line 2',
            name_attr: 'address2',
            placeholder_attr: 'Address line 2'
          }]
        }]
      }, {
        type: 'comp_row',
        components: [{
          type: 'comp_col',
          components: [{
            type: 'comp_input',
            label_attr: 'City',
            name_attr: 'city',
            placeholder_attr: 'City'
          }]
        }, {
          type: 'comp_col',
          components: [{
            type: 'comp_input',
            label_attr: 'State / Province / Region',
            name_attr: 'state',
            placeholder_attr: 'State / Province / Region'
          }]
        }, {
          type: 'comp_col',
          components: [{
            type: 'comp_input',
            label_attr: 'Postal / Zip Code',
            name_attr: 'postal',
            placeholder_attr: 'Postal / Zip Code'
          }]
        }]
      }]
    }
  });
  bm.add('donation', {
    label: "<svg class=\"gjs-block-svg\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\">\n        <path class=\"gjs-block-svg-path\" d=\"M22,5.5 C22,5.2 21.5,5 20.75,5 L3.25,5 C2.5,5 2,5.2 2,5.5 L2,8.5 C2,8.8 2.5,9 3.25,9 L20.75,9 C21.5,9 22,8.8 22,8.5 L22,5.5 Z M21,8 L3,8 L3,6 L21,6 L21,8 Z\" fill-rule=\"nonzero\"></path>\n        <path class=\"gjs-block-svg-path\" d=\"M22,10.5 C22,10.2 21.5,10 20.75,10 L3.25,10 C2.5,10 2,10.2 2,10.5 L2,13.5 C2,13.8 2.5,14 3.25,14 L20.75,14 C21.5,14 22,13.8 22,13.5 L22,10.5 Z M21,13 L3,13 L3,11 L21,11 L21,13 Z\" fill-rule=\"nonzero\"></path>\n        <rect class=\"gjs-block-svg-path\" x=\"2\" y=\"15\" width=\"10\" height=\"3\" rx=\"0.5\"></rect>\n      </svg>\n      <div class=\"gjs-block-label\">Donation</div></div>",
    category: opts.cateogyrLabel || 'Templates',
    content: {
      components: [{
        type: 'comp_row',
        components: [{
          type: 'comp_col',
          components: [{
            type: 'comp_input',
            type_attr: 'email',
            label_attr: 'Email',
            name_attr: 'email',
            placeholder_attr: 'Email'
          }]
        }]
      }, {
        type: 'comp_row',
        components: [{
          type: 'comp_col',
          components: [{
            type: 'comp_input',
            label_attr: 'First name',
            name_attr: 'first_name',
            placeholder_attr: 'First name'
          }]
        }, {
          type: 'comp_col',
          components: [{
            type: 'comp_input',
            label_attr: 'Last name',
            name_attr: 'last_name',
            placeholder_attr: 'Last name'
          }]
        }]
      }, {
        type: 'comp_row',
        components: [{
          type: 'comp_col',
          components: [{
            type: 'comp_input',
            label_attr: 'Street address',
            name_attr: 'address1',
            placeholder_attr: 'Street address'
          }]
        }]
      }, {
        type: 'comp_row',
        components: [{
          type: 'comp_col',
          components: [{
            type: 'comp_input',
            label_attr: 'Address line 2',
            name_attr: 'address2',
            placeholder_attr: 'Address line 2'
          }]
        }]
      }, {
        type: 'comp_row',
        components: [{
          type: 'comp_col',
          components: [{
            type: 'comp_input',
            label_attr: 'City',
            name_attr: 'city',
            placeholder_attr: 'City'
          }]
        }, {
          type: 'comp_col',
          components: [{
            type: 'comp_input',
            label_attr: 'State / Province / Region',
            name_attr: 'state',
            placeholder_attr: 'State / Province / Region'
          }]
        }, {
          type: 'comp_col',
          components: [{
            type: 'comp_input',
            label_attr: 'Postal / Zip Code',
            name_attr: 'postal',
            placeholder_attr: 'Postal / Zip Code'
          }]
        }]
      }, {
        type: 'comp_row',
        components: [{
          type: 'comp_col',
          components: [{
            type: 'comp_input',
            type_attr: 'phone',
            label_attr: 'Phone #000-000-000',
            name_attr: 'phone',
            placeholder_attr: '000-000-000',
            pattern_attr: '000-000-000'
          }]
        }]
      }, {
        type: 'comp_row',
        components: [{
          type: 'comp_col',
          components: [{
            type: 'comp_checkbox',
            label_attr: 'I\'m retired or unemployed.',
            name_attr: 'is_retired_or_unemployed'
          }]
        }]
      }, {
        type: 'comp_row',
        components: [{
          type: 'comp_col',
          components: [{
            type: 'comp_input',
            label_attr: 'Occupation',
            name_attr: 'occupation',
            placeholder_attr: 'Occupation'
          }]
        }, {
          type: 'comp_col',
          components: [{
            type: 'comp_input',
            label_attr: 'Employer',
            name_attr: 'employer',
            placeholder_attr: 'Employer'
          }]
        }]
      }]
    }
  });
});

/***/ }),

/***/ "./example/foundation.js":
/*!*******************************!*\
  !*** ./example/foundation.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var config = {
  canvas: {
    styles: ['https://cdn.jsdelivr.net/npm/foundation-sites@6.6.2/dist/css/foundation.min.css'],
    scripts: ['https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js', 'https://cdnjs.cloudflare.com/ajax/libs/foundation/6.6.2/js/foundation.min.js']
  },
  comps: {
    'comp_input': {
      label: 'Input',
      classes: 'cell large-12',
      useTag: 'div',
      template: "\n        <label for=\"<%=it.name_attr%>\"><%=it.label_attr%>\n          <input <%= it.required_attr ? 'required ' : '' %>type=\"<%=it.type_attr%>\" id=\"<%=it.name_attr%>\" name=\"<%=it.name_attr%>\" placeholder=\"<%=it.placeholder_attr || ''%>\" <%= it.value_attr ? 'value=\"' + it.value_attr + '\"' : '' %>/>\n        </label>\n      "
    },
    'comp_select': {
      label: 'Select',
      classes: 'cell large-12',
      useTag: 'div',
      template: "\n        <label for=\"<%=it.name_attr%>\"><%=it.label_attr%>\n          <select <%= it.multiple_attr ? 'multiple ' : '' %><%= it.required_attr ? 'required ' : '' %>id=\"<%=it.name_attr%>\" name=\"<%=it.name_attr%>\">\n            <option selected>-- Please select an option -- </option>\n            <% (it.option_attr + \"\").trim().split(\"\\n\").forEach(function(option){ %>\n            <% var msgProps = option.split('::');\n            %> <option value=\"<%= msgProps[0]%>\"><%= msgProps[1] || msgProps[0] %></option>\n            <% }); %>\n          </select>\n        </label>\n      "
    },
    'comp_textarea': {
      label: 'Textarea',
      classes: 'cell large-12',
      useTag: 'div',
      template: "\n        <label for=\"<%=it.name_attr%>\"><%=it.label_attr%>\n          <textarea <%= it.required_attr ? 'required ' : '' %><%= it.rows_attr ? 'rows=\"' + it.rows_attr + '\" ' : '' %><%= it.rows_attr ? 'cols=\"' + it.rows_attr + '\" ' : '' %>id=\"<%=it.name_attr%>\" name=\"<%=it.name_attr%>\" placeholder=\"<%=it.placeholder_attr || ''%>\"><%= it.value_attr || '' %></textarea>\n        </label>\n      "
    },
    'comp_checkbox': {
      label: 'Checkbox',
      classes: 'cell large-12',
      useTag: 'div',
      template: "\n        <label for=\"<%=it.name_attr%>\">\n          <input <%= it.required_attr ? 'required ' : '' %>type=\"checkbox\"id=\"<%=it.name_attr%>\"  name=\"<%=it.name_attr%>\" <%= it.value_attr ? 'value=\"' + it.value_attr + '\"' : '' %>/>\n          <%=it.label_attr%>\n        </label>\n      "
    },
    'comp_hidden': {
      label: 'Hidden Input',
      useTag: 'div',
      template: "\n        <input <%= it.required_attr ? 'required ' : '' %>type=\"hidden\" id=\"<%=it.name_attr%>\" name=\"<%=it.name_attr%>\" <%= it.value_attr ? 'value=\"' + it.value_attr + '\"' : '' %>/>\n      "
    },
    'comp_submit': {
      label: 'Submit Button',
      classes: 'button',
      useTag: 'button',
      template: '<%= it.label_attr %>'
    },
    'comp_row': {
      label: 'Row',
      useTag: 'div',
      classes: 'grid-x'
    },
    'comp_col': {
      label: 'Column',
      useTag: 'div',
      classes: 'cell'
    },
    'comp_col1': {
      label: '1 Column',
      useTag: 'div',
      classes: 'large-12'
    },
    'comp_col2': {
      label: '2 Columns',
      useTag: 'div',
      classes: 'large-6'
    },
    'comp_col3': {
      label: '3 Columns',
      useTag: 'div',
      classes: 'large-4'
    },
    'comp_text': {
      label: 'Text'
    },
    'comp_image': {
      label: 'Image'
    },
    'comp_map': {
      label: 'Map'
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (config);

/***/ }),

/***/ "./example/googlemd.js":
/*!*****************************!*\
  !*** ./example/googlemd.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var config = {
  canvas: {
    styles: ['https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css'],
    scripts: ['https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js', 'https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js']
  },
  comps: {
    'comp_input': {
      label: 'Input',
      classes: 'input-field col s12',
      useTag: 'div',
      template: "\n        <input <%= it.required_attr ? 'required ' : '' %>type=\"<%=it.type_attr%>\" id=\"<%=it.name_attr%>\" name=\"<%=it.name_attr%>\" placeholder=\"<%=it.placeholder_attr || ''%>\" <%= it.value_attr ? 'value=\"' + it.value_attr + '\"' : '' %>/>\n        <label for=\"<%=it.name_attr%>\"><%=it.label_attr%></label>\n      "
    },
    'comp_select': {
      label: 'Select',
      classes: 'input-field col s12',
      useTag: 'div',
      template: "\n        <select <%= it.multiple_attr ? 'multiple ' : '' %><%= it.required_attr ? 'required ' : '' %>id=\"<%=it.name_attr%>\" name=\"<%=it.name_attr%>\">\n          <option selected>-- Please select an option -- </option>\n          <% (it.option_attr + \"\").trim().split(\"\\n\").forEach(function(option){ %>\n          <% var msgProps = option.split('::');\n          %> <option value=\"<%= msgProps[0]%>\"><%= msgProps[1] || msgProps[0] %></option>\n          <% }); %>\n        </select>\n        <label for=\"<%=it.name_attr%>\"><%=it.label_attr%></label>\n      "
    },
    'comp_textarea': {
      label: 'Textarea',
      classes: 'input-field col s12',
      useTag: 'div',
      template: "\n        <textarea <%= it.required_attr ? 'required ' : '' %><%= it.rows_attr ? 'rows=\"' + it.rows_attr + '\" ' : '' %><%= it.rows_attr ? 'cols=\"' + it.rows_attr + '\" ' : '' %>id=\"<%=it.name_attr%>\" name=\"<%=it.name_attr%>\" placeholder=\"<%=it.placeholder_attr || ''%>\"><%= it.value_attr || '' %></textarea>\n        <label for=\"<%=it.name_attr%>\"><%=it.label_attr%></label>\n      "
    },
    'comp_checkbox': {
      label: 'Checkbox',
      classes: 'row',
      useTag: 'div',
      template: "\n        <div class=\"input-field col s12\">\n          <label for=\"<%=it.name_attr%>\">\n            <input <%= it.required_attr ? 'required ' : '' %>type=\"checkbox\" id=\"<%=it.name_attr%>\" name=\"<%=it.name_attr%>\" <%= it.value_attr ? 'value=\"' + it.value_attr + '\"' : '' %>/>\n            <span><%=it.label_attr%></span>\n          </label>\n        </div>\n      "
    },
    'comp_hidden': {
      label: 'Hidden Input',
      useTag: 'div',
      template: "\n        <input <%= it.required_attr ? 'required ' : '' %>type=\"hidden\" id=\"<%=it.name_attr%>\" name=\"<%=it.name_attr%>\" <%= it.value_attr ? 'value=\"' + it.value_attr + '\"' : '' %>/>\n      "
    },
    'comp_submit': {
      label: 'Submit Button',
      classes: 'btn waves-effect waves-light',
      useTag: 'button',
      template: '<%= it.label_attr %>'
    },
    'comp_row': {
      label: 'Row',
      useTag: 'div',
      classes: 'row'
    },
    'comp_col': {
      label: 'Column',
      useTag: 'div'
    },
    'comp_col1': {
      label: '1 Column',
      useTag: 'div',
      classes: 'col s12'
    },
    'comp_col2': {
      label: '2 Columns',
      useTag: 'div',
      classes: 'col s6'
    },
    'comp_col3': {
      label: '3 Columns',
      useTag: 'div',
      classes: 'col s4'
    },
    'comp_text': {
      label: 'Text'
    },
    'comp_image': {
      label: 'Image'
    },
    'comp_map': {
      label: 'Map'
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (config);

/***/ }),

/***/ "./example/init.js":
/*!*************************!*\
  !*** ./example/init.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src */ "./src/index.js");
/* harmony import */ var grapesjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! grapesjs */ "grapesjs");
/* harmony import */ var grapesjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(grapesjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _custom_blocks_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./custom-blocks.js */ "./example/custom-blocks.js");




/* harmony default export */ __webpack_exports__["default"] = (function () {
  var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var config = {
    container: '#gjs',
    height: '100%',
    noticeOnUnload: 0,
    showOffsets: 1,
    autorender: 1,
    allowScripts: 1,
    storageManager: {
      id: 'gjs-',
      // Prefix identifier that will be used on parameters
      type: 'local',
      // Type of the storage
      autosave: true,
      // Store data automatically
      autoload: true,
      // Autoload stored data on init
      stepsBeforeSave: 1 // If autosave enabled, indicates how many changes are necessary before store method is triggered

    },
    forceClass: 0,
    avoidInlineStyle: 1,
    styleManager: {
      clearProperties: 1
    },
    fromElement: 1,
    canvas: opts.canvas,
    plugins: ['grapesjs-components-farmer', 'gjs-plugin-ckeditor'],
    pluginsOpts: {
      'grapesjs-components-farmer': {
        formNextId: 1,
        panel: 1,
        comps: opts.comps
      },
      'gjs-plugin-ckeditor': {
        position: 'center',
        options: {
          startupFocus: true,
          // Allows any class and any inline style
          extraAllowedContent: '*(*);*{*}',
          // Disable auto-formatting, class removing, etc.
          allowedContent: true,
          enterMode: CKEDITOR.ENTER_BR,
          extraPlugins: 'sharedspace,justify,colorbutton,panelbutton,font',
          toolbar: [{
            name: 'styles',
            items: ['Font', 'FontSize']
          }, ['Bold', 'Italic', 'Underline', 'Strike'], {
            name: 'paragraph',
            items: ['NumberedList', 'BulletedList']
          }, {
            name: 'links',
            items: ['Link', 'Unlink']
          }, {
            name: 'colors',
            items: ['TextColor', 'BGColor']
          }]
        }
      }
    }
  };
  var editor = grapesjs__WEBPACK_IMPORTED_MODULE_1___default().init(config);
  //////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////Elimina Mun?? Templates//////////////////////////////////////////////
  /*(0,_custom_blocks_js__WEBPACK_IMPORTED_MODULE_3__.default)(editor, {
    categoryLabel: 'Templates'
  });*/
  var pfx = editor.getConfig().stylePrefix;
  var modal = editor.Modal;
  var cmdm = editor.Commands;
  var codeViewer = editor.CodeManager.getViewer('CodeMirror').clone();
  var pnm = editor.Panels;
  var container = document.createElement('div');
  codeViewer.set({
    codeName: 'htmlmixed',
    readOnly: 0,
    theme: 'hopscotch',
    autoBeautify: true,
    autoCloseTags: true,
    autoCloseBrackets: true,
    lineWrapping: true,
    styleActiveLine: true,
    smartIndent: true,
    indentWithTabs: true
  });
  cmdm.add('html-export-usable', {
    run: function run(editor, sender) {
      sender && sender.set('active', 0);
      var viewer = codeViewer.editor;
      modal.setTitle('Usable HTML');

      if (!viewer) {
        var txtarea = document.createElement('textarea');
        container.appendChild(txtarea);
        codeViewer.init(txtarea);
        viewer = codeViewer.editor;
      }

      modal.setContent('');
      modal.setContent(container);
      codeViewer.setContent(editor.runCommand('get-usable-html'));
      modal.open();
      viewer.refresh();
    }
  });
  pnm.addButton('options', [{
    id: 'export',
    className: 'fa fa-download',
    command: 'html-export-usable',
    attributes: {
      title: 'Export usable HTML'
    }
  }]);
});

/***/ }),

/***/ "./src/blocks.js":
/*!***********************!*\
  !*** ./src/blocks.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/* harmony default export */ __webpack_exports__["default"] = (function (editor) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var bm = editor.BlockManager;
  var c = opts.comps;
  var blocks = c.blocks;
  var cats = c.blockCategories;

  if (opts.resetBlocks) {
    bm.getAll().reset();
  }

  var allBlocks = {
    category: opts.categoryLabel
  }; // CORE BLOCKS

  bm.add('comp_col1').set(_objectSpread({
    label: c.comp_col1.label,
    attributes: {
      "class": 'gjs-fonts gjs-f-b1'
    },
    content: {
      type: 'comp_row',
      components: [{
        type: 'comp_col',
        classes: c.comp_col1.classes.concat(c.comp_col.classes)
      }]
    }
  }, allBlocks));
  bm.add('comp_col2').set(_objectSpread({
    label: c.comp_col2.label,
    attributes: {
      "class": 'gjs-fonts gjs-f-b2'
    },
    content: {
      type: 'comp_row',
      components: [{
        type: 'comp_col',
        classes: c.comp_col2.classes.concat(c.comp_col.classes)
      }, {
        type: 'comp_col',
        classes: c.comp_col2.classes.concat(c.comp_col.classes)
      }]
    }
  }, allBlocks));
  bm.add('comp_col3').set(_objectSpread({
    label: c.comp_col3.label,
    attributes: {
      "class": 'gjs-fonts gjs-f-b3'
    },
    content: {
      type: 'comp_row',
      components: [{
        type: 'comp_col',
        classes: c.comp_col3.classes.concat(c.comp_col.classes)
      }, {
        type: 'comp_col',
        classes: c.comp_col3.classes.concat(c.comp_col.classes)
      }, {
        type: 'comp_col',
        classes: c.comp_col3.classes.concat(c.comp_col.classes)
      }]
    }
  }, allBlocks));
  bm.add('comp_submit', _objectSpread({
    label: "\n      <div style=\"color: #fff;\n    background-color: #007bff;\n    border-color: #007bff;\n    display: inline-block;\n    text-align: center;\n    white-space: nowrap;\n    vertical-align: middle;\n    border: 1px solid transparent;\n    padding-left: 5px;\n    padding-right: 5px;\n    font-size: 1rem;\n    line-height: 1.5;\n    border-radius: .25rem;\n    margin-top: 12px;\n    margin-bottom: 16px;\n    width: 50px;\">&nbsp;</div>\n      <div class=\"gjs-block-label\">".concat(c.comp_submit.label, "</div>\n    "),
    content: {
      type: 'comp_submit'
    }
  }, allBlocks));
  bm.add('comp_input', _objectSpread({
    label: "\n    <svg class=\"gjs-block-svg\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\">\n      <path class=\"gjs-block-svg-path\" d=\"M22,9 C22,8.4 21.5,8 20.75,8 L3.25,8 C2.5,8 2,8.4 2,9 L2,15 C2,15.6 2.5,16 3.25,16 L20.75,16 C21.5,16 22,15.6 22,15 L22,9 Z M21,15 L3,15 L3,9 L21,9 L21,15 Z\"></path>\n      <polygon class=\"gjs-block-svg-path\" points=\"4 10 5 10 5 14 4 14\"></polygon>\n    </svg>\n    <div class=\"gjs-block-label\">".concat(c.comp_input.label, "</div>"),
    content: {
      type: 'comp_input'
    }
  }, allBlocks));
  bm.add('comp_textarea', _objectSpread({
    label: "\n    <svg class=\"gjs-block-svg\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\">\n      <path class=\"gjs-block-svg-path\" d=\"M22,7.5 C22,6.6 21.5,6 20.75,6 L3.25,6 C2.5,6 2,6.6 2,7.5 L2,16.5 C2,17.4 2.5,18 3.25,18 L20.75,18 C21.5,18 22,17.4 22,16.5 L22,7.5 Z M21,17 L3,17 L3,7 L21,7 L21,17 Z\"></path>\n      <polygon class=\"gjs-block-svg-path\" points=\"4 8 5 8 5 12 4 12\"></polygon>\n      <polygon class=\"gjs-block-svg-path\" points=\"19 7 20 7 20 17 19 17\"></polygon>\n      <polygon class=\"gjs-block-svg-path\" points=\"20 8 21 8 21 9 20 9\"></polygon>\n      <polygon class=\"gjs-block-svg-path\" points=\"20 15 21 15 21 16 20 16\"></polygon>\n    </svg>\n    <div class=\"gjs-block-label\">".concat(c.comp_textarea.label, "</div>"),
    content: {
      type: 'comp_textarea'
    }
  }, allBlocks));
  bm.add('comp_select', _objectSpread({
    label: "\n    <svg class=\"gjs-block-svg\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\">\n      <path class=\"gjs-block-svg-path\" d=\"M22,9 C22,8.4 21.5,8 20.75,8 L3.25,8 C2.5,8 2,8.4 2,9 L2,15 C2,15.6 2.5,16 3.25,16 L20.75,16 C21.5,16 22,15.6 22,15 L22,9 Z M21,15 L3,15 L3,9 L21,9 L21,15 Z\" fill-rule=\"nonzero\"></path>\n      <polygon class=\"gjs-block-svg-path\" transform=\"translate(18.500000, 12.000000) scale(1, -1) translate(-18.500000, -12.000000) \" points=\"18.5 11 20 13 17 13\"></polygon>\n      <rect class=\"gjs-block-svg-path\" x=\"4\" y=\"11.5\" width=\"11\" height=\"1\"></rect>\n    </svg>\n    <div class=\"gjs-block-label\">".concat(c.comp_select.label, "</div>"),
    content: {
      type: 'comp_select'
    }
  }, allBlocks));
  /*bm.add('comp_file', _objectSpread({
    label: c.comp_file.label,
    attributes: {
      "class": 'fa fa-file'
    },
    content: {
      type: 'comp_file'
    }
  }, allBlocks));*/
  /*bm.add('comp_checkbox', _objectSpread({
    label: c.comp_checkbox.label,
    attributes: {
      "class": 'fa fa-check-square'
    },
    content: {
      type: 'comp_checkbox'
    }
  }, allBlocks));*/
  /*bm.add('comp_hidden', _objectSpread({
    label: "<svg class=\"gjs-block-svg\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\">\n      <path class=\"gjs-block-svg-path\" d=\"M22,9 C22,8.4 21.5,8 20.75,8 L3.25,8 C2.5,8 2,8.4 2,9 L2,15 C2,15.6 2.5,16 3.25,16 L20.75,16 C21.5,16 22,15.6 22,15 L22,9 Z M21,15 L3,15 L3,9 L21,9 L21,15 Z\"></path>\n      <polygon class=\"gjs-block-svg-path\" points=\"4 10 5 10 5 14 4 14\"></polygon>\n    </svg>\n    <div class=\"gjs-block-label\">".concat(c.comp_hidden.label, "</div>"),
    content: {
      type: 'comp_hidden'
    }
  }, allBlocks));*/
  bm.add('comp_text', _objectSpread({
    label: c.comp_text.label,
    attributes: {
      "class": 'gjs-fonts gjs-f-text'
    },
    content: {
      type: 'text',
      content: 'Insert your text here',
      style: {
        padding: '10px'
      },
      activeOnRender: 1
    }
  }, allBlocks));
  bm.add('comp_image', _objectSpread({
    label: c.comp_image.label,
    attributes: {
      "class": 'gjs-fonts gjs-f-image'
    },
    content: {
      style: {
        color: 'black'
      },
      type: 'image',
      activeOnRender: 1
    }
  }, allBlocks));
  /*bm.add('comp_map', _objectSpread({
    label: c.comp_map.label,
    attributes: {
      "class": 'fa fa-map-o'
    },
    content: {
      type: 'map',
      style: {
        height: '350px'
      }
    }
  }, allBlocks));*/
  /*bm.add('comp_recaptcha', _objectSpread({
    label: "\n      <image src=\"https://www.gstatic.com/recaptcha/api2/logo_48.png\">\n      <br /><br />\n    <div class=\"gjs-block-label\">".concat(c.comp_recaptcha.label, "</div>"),
    content: {
      type: 'comp_recaptcha'
    }
  }, allBlocks));
  bm.add('comp_stripe', _objectSpread({
    label: c.comp_stripe.label,
    attributes: {
      "class": 'fa fa-cc-stripe'
    },
    content: {
      type: 'comp_stripe'
    }
  }, allBlocks));*/
});

/***/ }),

/***/ "./src/consts.js":
/*!***********************!*\
  !*** ./src/consts.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cmdDeviceDesktop": function() { return /* binding */ cmdDeviceDesktop; },
/* harmony export */   "cmdDeviceTablet": function() { return /* binding */ cmdDeviceTablet; },
/* harmony export */   "cmdDeviceMobile": function() { return /* binding */ cmdDeviceMobile; },
/* harmony export */   "cmdClear": function() { return /* binding */ cmdClear; }
/* harmony export */ });
var cmdDeviceDesktop = 'set-device-desktop',
    cmdDeviceTablet = 'set-device-tablet',
    cmdDeviceMobile = 'set-device-mobile',
    cmdClear = 'canvas-clear';

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_template__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash.template */ "./node_modules/lodash.template/index.js");
/* harmony import */ var lodash_template__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_template__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var grapesjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! grapesjs */ "grapesjs");
/* harmony import */ var grapesjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(grapesjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var cash_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cash-dom */ "./node_modules/cash-dom/dist/cash.js");
/* harmony import */ var cash_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cash_dom__WEBPACK_IMPORTED_MODULE_2__);
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}




/* harmony default export */ __webpack_exports__["default"] = (grapesjs__WEBPACK_IMPORTED_MODULE_1___default().plugins.add('grapesjs-components-farmer', function (editor) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var commands = editor.Commands;
  var pn = editor.Panels;
  var opts_comps = opts.comps || {};
  var default_comps = {
    'comp_input': {
      label: 'Input',
      classes: 'form-group',
      useTag: 'div',
      template: "\n        <label for=\"<%=it.name_attr%>\"><%=it.label_attr%></label>\n        <input <%= it.required_attr ? 'required ' : '' %>type=\"<%=it.type_attr%>\" class=\"form-control\" id=\"<%=it.name_attr%>\" name=\"<%=it.name_attr%>\" placeholder=\"<%=it.placeholder_attr || ''%>\" <%= it.value_attr ? 'value=\"' + it.value_attr + '\"' : '' %>/>\n      "
    },
    'comp_select': {
      label: 'Select',
      classes: 'form-group',
      useTag: 'div',
      template: "\n        <label for=\"<%=it.name_attr%>\"><%=it.label_attr%></label>\n        <select <%= it.multiple_attr ? 'multiple ' : '' %><%= it.required_attr ? 'required ' : '' %>class=\"form-control\" id=\"<%=it.name_attr%>\" name=\"<%=it.name_attr%>\">\n          <option selected>-- Please select an option -- </option>\n          <% (it.option_attr + \"\").trim().split(\"\\n\").forEach(function(option){ %>\n          <% var msgProps = option.split('::');\n          %> <option value=\"<%= msgProps[0]%>\"><%= msgProps[1] || msgProps[0] %></option>\n          <% }); %>\n        </select>\n      "
    },
    'comp_file': {
      label: 'File',
      classes: 'custom-file',
      useTag: 'div',
      template: "\n        <input <%= it.required_attr ? 'required ' : '' %>type=\"file\" class=\"custom-file-input\" id=\"<%=it.name_attr%>\" name=\"<%=it.name_attr%>\" placeholder=\"<%=it.placeholder_attr || ''%>\" <%= it.accept_attr ? 'accept=\"' + it.accept_attr + '\"' : '' %> <%= it.value_attr ? 'value=\"' + it.value_attr + '\"' : '' %>/>\n        <label for=\"<%=it.name_attr%>\" class=\"custom-file-label\"><%=it.label_attr%></label>\n      "
    },
    'comp_textarea': {
      label: 'Textarea',
      classes: 'form-group',
      useTag: 'div',
      template: "\n        <label for=\"<%=it.name_attr%>\"><%=it.label_attr%></label>\n        <textarea <%= it.required_attr ? 'required ' : '' %><%= it.rows_attr ? 'rows=\"' + it.rows_attr + '\" ' : '' %><%= it.rows_attr ? 'cols=\"' + it.rows_attr + '\" ' : '' %>class=\"form-control\" id=\"<%=it.name_attr%>\" name=\"<%=it.name_attr%>\" placeholder=\"<%=it.placeholder_attr || ''%>\"><%= it.value_attr || '' %></textarea>\n      "
    },
    'comp_checkbox': {
      label: 'Checkbox',
      classes: 'form-check',
      useTag: 'div',
      template: "\n        <label for=\"<%=it.name_attr%>\" class=\"form-check-label\">\n          <input <%= it.required_attr ? 'required ' : '' %>type=\"checkbox\" id=\"<%=it.name_attr%>\" name=\"<%=it.name_attr%>\" class=\"form-check-input\" <%= it.value_attr ? 'value=\"' + it.value_attr + '\"' : '' %>/>\n          <%=it.label_attr%>\n        </label>\n      "
    },
    'comp_hidden': {
      label: 'Hidden Input',
      useTag: 'div',
      template: "\n        <input <%= it.required_attr ? 'required ' : '' %>type=\"hidden\" id=\"<%=it.name_attr%>\" name=\"<%=it.name_attr%>\" <%= it.value_attr ? 'value=\"' + it.value_attr + '\"' : '' %>/>\n      "
    },
    'comp_submit': {
      label: 'Submit Button',
      classes: 'btn btn-primary btn-block',
      useTag: 'button',
      template: '<%= it.label_attr %>'
    },
    'comp_row': {
      label: 'Row',
      useTag: 'div',
      classes: 'row'
    },
    'comp_col': {
      label: 'Column',
      useTag: 'div',
      classes: 'col'
    },
    'comp_col1': {
      label: '1 Column',
      useTag: 'div'
    },
    'comp_col2': {
      label: '2 Columns',
      useTag: 'div'
    },
    'comp_col3': {
      label: '3 Columns',
      useTag: 'div'
    },
    'comp_text': {
      label: 'Text'
    },
    'comp_image': {
      label: 'Image'
    },
    'comp_map': {
      label: 'Map'
    },
    'comp_recaptcha': {
      label: 'reCaptcha',
      classes: 'form-group',
      template: "\n        <input type=\"hidden\" name=\"g-recaptcha-response\" id=\"g-recaptcha-response\">\n        <div id=\"g-recaptcha\" class=\"g-recaptcha\" data-sitekey=\"<%= it.sitekey_attr || '' %>\"></div><br />\n        <script type=\"text/javascript\" src=\"https://www.google.com/recaptcha/api.js\" async defer></script>\n      "
    },
    'comp_stripe': {
      label: 'Payment',
      classes: 'form-group',
      template: "\n        <script type=\"text/javascript\" src=\"https://js.stripe.com/v3/\"></script>\n        <div id=\"stripeElement\" data-key=\"<%= it.publickey_attr || '' %>\" data-hide-postal=\"<%= it.hidepostal_attr || 'false' %>\">&nbsp;</div>\n      "
    }
  }; // provide defaults

  for (var k in default_comps) {
    var x = default_comps[k];
    var y = opts_comps[k];

    if (y) {
      for (var j in y) {
        y[j] = y[j] || x[j];
      }

      opts_comps[k] = y;
    } else {
      opts_comps[k] = x;
    }

    opts_comps[k]['classes'] = (opts_comps[k]['classes'] || '').split(' ');
  }

  var options = _objectSpread({
    formNextId: 1,
    categoryLabel: 'Basic',
    formFieldsPrefix: 'field',
    showStylesOnChange: 1,
    addResource: function addResource(url) {
      var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'script';
      var doc = editor.Canvas.getDocument();
      var head = doc.head || doc.getElementsByTagName('head')[0];
      var res = document.createElement(type);

      if (type === 'script') {
        res.src = url;
      } else if (type === 'link') {
        res.rel = 'stylesheet';
        res.href = url;
      }

      head.appendChild(res);
    }
  }, opts);

  options.comps = options.comps || opts_comps;

  var compileTemplates = function compileTemplates() {
    Object.keys(options.comps).forEach(function (k) {
      var t = options.comps[k];

      if (t && typeof t.template === 'string') {
        t.template = lodash_template__WEBPACK_IMPORTED_MODULE_0___default()(t.template);
      }
    });
  };
  /** Prevent Input Default Actions **/


  var preventInputDefaults = function preventInputDefaults() {
    var el = editor.Canvas.getBody();
    var win = el.ownerWindow;
    var body = cash_dom__WEBPACK_IMPORTED_MODULE_2___default()(el);
    body.on('click', function (e) {
      var event = e || win.event;
      var target = event.target || event.srcElement;
      var tagName = (target.tagName + '').toLowerCase();

      if (tagName === 'input') {
        event.preventDefault();
        return false;
      }
    });
  };

  commands.add('get-usable-html', {
    run: function run() {
      // get the builder xml
      var html = editor.getHtml(); // convert into html

      for (var _k in options.comps) {
        // default tag as div unless useTag value is provided
        var tag = options.comps[_k].useTag || 'div';
        html = html.replace(new RegExp('<' + _k, 'g'), '<' + tag);
        html = html.replace(new RegExp('</' + _k + '>', 'g'), '</' + tag + '>');
        html = html.replace(new RegExp(" data-gjs-type=\"".concat(_k, "\" "), 'g'), ' ');
        html = html.replace(new RegExp(' data\-highlightable\=\"1\" ', 'g'), ' ');
      }

      return html;
    }
  }); // Add plugins

  __webpack_require__(/*! ./traits */ "./src/traits.js").default(editor, options);

  __webpack_require__(/*! ./blocks */ "./src/blocks.js").default(editor, options);

  if (opts.panel) {
    __webpack_require__(/*! ./panels */ "./src/panels.js").default(editor, options);
  }

  editor.on('load', function () {
    compileTemplates();
    setTimeout(function () {
      var doc = editor.Canvas.getDocument();
      var head = doc.head || doc.getElementsByTagName('head')[0];
      var css = "\n\ncomp_recaptcha,\ncomp_row,\ncomp_col,\ncomp_hidden {\n  min-height: 2rem !important;\n}\n\ncomp_row {\n  display: block;\n  width: 100%;\n  margin-left: 15px;\n  margin-right: 15px;\n}\n\ncomp_col {\n  min-width: 100px;\n}\n\ncomp_hidden, comp_recaptcha, comp_stripe {\n  display: block;\n  width: 100%;\n  min-width: 100%;\n}\n\ncomp_recaptcha {\n  background: url(data:image/png;base64,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6aWXyn777SdXXHGF2vP8YROs529y9HnmzJkj9913n5IKJEXuJRrU/PnztRh+Acjktttu0/p33nmnEhsaFw8ChIB4dV03or4mTpyobU+aNEkauDezQEhXX311VInNq/SFaznyyCNl4cKFem5Muj59+siLL76opunll18uRx99dORhpPZDDz2kfi9MBPp3wgknRE7KMcr/8MMP+uHY3Xffrcd931mCjX+II5VtJe0QgEiI44Jo0KJwtLPtxd9DljyffNCqICuW1GOfL0c9zhld/u+VK4Tn3h/TlSR9bROaVyyWjz76qFx00UW6m+TyyZNd3ta8eapt/fTTT7L//vvLd999J/3794+tqtuvvvqqHHTQQXqDiUj++OOPBaIYNWqUzoKB1sT+MWPG6FD06NGj5ZFHHtFAQAYPKFuZ2Yi2BNFCkPziEXtz8cUX63bz5s0r7ctnn30WSZDv2bOnkieaFyNJaFGQEb6uU045ReujTaFlcn4GMc4880zVAnlIb7rpJkGruv3227Us5DZy5EgZMmSIXhvXxYgT12mS/ghAMhBL586dZbfddtPnHJ8VmjxExj2P1pSiScofY190Gb8fElyzZq2OVnbs2DElYGwTmlcssphLXjAbubHeTNx99931EERSlXgzEbt/r732kgULFmjRCRMmyODBgyORysxDhvaChlYbgUjQtDBNr7nmGiUd6jFyWpWgJSIrV66UX3/9VduHuJC8vDz19X3//fe6zReaGcSFHHbYYbocP368+i/YwKT24gkPZ61J/UMADblZs2b6fNN7fpRzc5tLodOseHZ5TqIJK5qk/Lpf+qunDuQHCbZs2ULP6Y8le7lNklc0yLE3J3Y7umxN65hvsb9CrVu3VqdnTXU5jqbEryQaEVHPtQke9OeFvBDqeeFBa9WqlQ5r+33RSxyxyJ9//hlR/T2Js99PAsmwuEn9Q2CXXXZRt0U0Qe27bx/9oeaeYkoykIWvi+e+ug8/eDwvaGwQF885PtZUyjZPXlsTfMw8BgKi5aOPPhK0u9rIPffcI/369VMH/LXXXqsO89rUo0z79u21KFqUF3xtaGNeU2Q/fgwvDA4gmM486Ajao5dvvvlGV+tCor6uLVOPAAGokE7sD3L3bt30nu+0005KRPiC0dIo27BhQ9XK0MxwyLOPY/jACJtg8CnPafTeQknlVW6TPq9EAY7z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) no-repeat left;\n  height: 70px;\n}\n";
      var style = doc.createElement('style');
      style.type = 'text/css';

      if (style.styleSheet) {
        // This is required for IE8 and below.
        style.styleSheet.cssText = css;
      } else {
        style.appendChild(doc.createTextNode(css));
      }

      head.appendChild(style);
      preventInputDefaults();
    }, 0);
  });
}));

/***/ }),

/***/ "./src/panels.js":
/*!***********************!*\
  !*** ./src/panels.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./consts */ "./src/consts.js");
/* harmony import */ var cash_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cash-dom */ "./node_modules/cash-dom/dist/cash.js");
/* harmony import */ var cash_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cash_dom__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (function (editor, opts) {
  var cmds = editor.Commands;
  var pn = editor.Panels;
  var eConfig = editor.getConfig();
  var crc = 'create-comp';
  var mvc = 'move-comp';
  var swv = 'sw-visibility';
  var expt = 'export-template';
  var osm = 'open-sm';
  var otm = 'open-tm';
  var ola = 'open-layers';
  var obl = 'open-blocks';
  var ful = 'fullscreen';
  var prv = 'preview';
  eConfig.showDevices = 0;
  var txtConfirm = opts.textCleanCanvas || 'Are you sure to clean the canvas?';
  cmds.add(_consts__WEBPACK_IMPORTED_MODULE_0__.cmdDeviceDesktop, function (e) {
    return e.setDevice('Desktop');
  });
  cmds.add(_consts__WEBPACK_IMPORTED_MODULE_0__.cmdDeviceTablet, function (e) {
    return e.setDevice('Tablet');
  });
  cmds.add(_consts__WEBPACK_IMPORTED_MODULE_0__.cmdDeviceMobile, function (e) {
    return e.setDevice('Mobile portrait');
  });
  cmds.add(_consts__WEBPACK_IMPORTED_MODULE_0__.cmdClear, function (e) {
    return confirm(txtConfirm) && e.runCommand('core:canvas-clear');
  });
  pn.getPanels().reset([{
    id: 'commands',
    buttons: [{}]
  }, {
    id: 'options',
    buttons: [{
      id: swv,
      command: swv,
      context: swv,
      active: 1,
      className: 'fa fa-square-o',
      attributes: {
        title: 'Show Borders'
      }
    }, {
      id: prv,
      context: prv,
      command: function command(e) {
        return e.runCommand(prv);
      },
      className: 'fa fa-eye',
      attributes: {
        title: 'Preview'
      }
    }, {
      id: ful,
      command: ful,
      context: ful,
      className: 'fa fa-arrows-alt',
      attributes: {
        title: 'Fullscreen'
      }
    }, {
      id: expt,
      className: 'fa fa-code',
      command: function command(e) {
        return e.runCommand(expt);
      },
      attributes: {
        title: 'Show code'
      }
    }, {
      id: 'undo',
      className: 'fa fa-undo',
      command: function command(e) {
        return e.runCommand('core:undo');
      },
      attributes: {
        title: 'Undo'
      }
    }, {
      id: 'redo',
      className: 'fa fa-repeat',
      command: function command(e) {
        return e.runCommand('core:redo');
      },
      attributes: {
        title: 'Redo'
      }
    }, {
      id: _consts__WEBPACK_IMPORTED_MODULE_0__.cmdClear,
      className: 'fa fa-trash',
      command: function command(e) {
        return e.runCommand(_consts__WEBPACK_IMPORTED_MODULE_0__.cmdClear);
      },
      attributes: {
        title: 'Clear canvas'
      }
    }]
  }, {
    id: 'views',
    buttons: [{
      id: osm,
      command: osm,
      className: 'fa fa-paint-brush',
      attributes: {
        title: 'Style Manager'
      }
    }, {
      id: otm,
      command: otm,
      className: 'fa fa-cog',
      attributes: {
        title: 'Settings'
      }
    }, {
      id: ola,
      command: ola,
      className: 'fa fa-bars',
      attributes: {
        title: 'Layers'
      }
    }, {
      id: obl,
      command: obl,
      className: 'fa fa-th-large',
      active: 1,
      attributes: {
        title: 'Blocks'
      }
    }]
  }]); // Add devices buttons

  var panelDevices = pn.addPanel({
    id: 'devices-c'
  });
  panelDevices.get('buttons').add([{
    id: _consts__WEBPACK_IMPORTED_MODULE_0__.cmdDeviceDesktop,
    command: _consts__WEBPACK_IMPORTED_MODULE_0__.cmdDeviceDesktop,
    className: 'fa fa-desktop',
    active: 1,
    attributes: {
      title: 'Desktop'
    }
  }, {
    id: _consts__WEBPACK_IMPORTED_MODULE_0__.cmdDeviceTablet,
    command: _consts__WEBPACK_IMPORTED_MODULE_0__.cmdDeviceTablet,
    className: 'fa fa-tablet',
    attributes: {
      title: 'Tablet'
    }
  }, {
    id: _consts__WEBPACK_IMPORTED_MODULE_0__.cmdDeviceMobile,
    command: _consts__WEBPACK_IMPORTED_MODULE_0__.cmdDeviceMobile,
    className: 'fa fa-mobile',
    attributes: {
      title: 'Mobile'
    }
  }]);
  editor.on('load', function () {
    var pn = editor.Panels;
    var editorEl = cash_dom__WEBPACK_IMPORTED_MODULE_1___default()(editor.getEl()); // Load and show settings and style manager

    var openTmBtn = pn.getButton('views', 'open-tm');
    openTmBtn && openTmBtn.set('active', 1);
    var openSm = pn.getButton('views', 'open-sm');
    openSm && openSm.set('active', 1); // Add Settings Sector

    var traitsSector = cash_dom__WEBPACK_IMPORTED_MODULE_1___default()("<div class=\"gjs-sm-sector no-select\">\n<div class=\"gjs-sm-title\"><span class=\"icon-settings fa fa-cog\"></span> Settings</div>\n<div class=\"gjs-sm-properties\"></div></div>");
    var traitsProps = traitsSector.find('.gjs-sm-properties'); // copy from settings tab into traits sector and then hide settings tab

    traitsProps.append(editorEl.find('.gjs-trt-traits'));
    editorEl.find('.gjs-pn-views .fa-cog').get(0).style.display = 'none';
    editorEl.find('.gjs-sm-sectors').before(traitsSector);
    traitsSector.find('.gjs-sm-title').on('click', function () {
      var traitStyle = traitsProps.get(0).style;
      var hidden = traitStyle.display === 'none';

      if (hidden) {
        traitStyle.display = 'block';
      } else {
        traitStyle.display = 'none';
      }
    });
    var openBl = pn.getButton('views', obl);
    openBl && openBl.set('active', 1); // On component change show the Style Manager

    opts.showStylesOnChange && editor.on('component:selected', function () {
      var openSmBtn = pn.getButton('views', osm);
      var openLayersBtn = pn.getButton('views', ola); // Don't switch when the Layer Manager is on or
      // there is no selected component

      if ((!openLayersBtn || !openLayersBtn.get('active')) && editor.getSelected()) {
        openSmBtn && openSmBtn.set('active', 1);
      }
    });
  });
});

/***/ }),

/***/ "./src/traits.js":
/*!***********************!*\
  !*** ./src/traits.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var cash_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cash-dom */ "./node_modules/cash-dom/dist/cash.js");
/* harmony import */ var cash_dom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cash_dom__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}


/* harmony default export */ __webpack_exports__["default"] = (function (editor) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var tm = editor.TraitManager;
  var dc = editor.DomComponents;
  var bm = editor.BlockManager;
  var defaultType = dc.getType('default');
  var selectType = dc.getType('select') || defaultType;
  var defaultModel = defaultType.model;
  var defaultView = defaultType.view;
  var textType = dc.getType('text');
  var fieldTraits = defaultModel.prototype.defaults.traits.concat([{
    type: 'text',
    name: 'name_attr',
    label: 'Name',
    placeholder: 'Enter a field name..'
  }, {
    type: 'text',
    name: 'label_attr',
    label: 'Label',
    placeholder: 'Enter a field label..'
  }]);
  var inputTraits = fieldTraits.concat([{
    type: 'text',
    name: 'value_attr',
    label: 'Value',
    changeProp: 1,
    placeholder: 'Enter a default value..'
  }, {
    type: 'text',
    name: 'placeholder_attr',
    label: 'Placeholder',
    changeProp: 1,
    placeholder: 'Enter placeholder text..'
  }, {
    type: 'checkbox',
    name: 'required_attr',
    changeProp: 1,
    label: 'Required'
  }, {
    type: 'text',
    name: 'pattern_attr',
    changeProp: 1,
    label: 'Pattern'
  }, {
    type: 'number',
    name: 'min_attr',
    changeProp: 1,
    label: 'Min'
  }, {
    type: 'number',
    name: 'max_attr',
    changeProp: 1,
    label: 'Max'
  }]); // text, password, email, number, url, tel, search, date, datetime,
  // datetime-local, month, week, time, range, or color
  // exclude: file

  var inputTypeTrait = {
    type: 'select',
    name: 'type_attr',
    label: 'Type',
    options: [{
      name: 'Text',
      value: 'text'
    }, {
      name: 'Password',
      value: 'password'
    }, {
      name: 'Email',
      value: 'email'
    }, {
      name: 'Number',
      value: 'number'
    }, {
      name: 'URL',
      value: 'url'
    }, {
      name: 'Phone',
      value: 'tel'
    }, // { name: 'Search', value: 'tel' },
    {
      name: 'Date',
      value: 'date'
    }, {
      name: 'Date Time',
      value: 'datetime-local'
    }, // { name: 'Month', value: 'month' },
    // { name: 'Week', value: 'week' },
    {
      name: 'Range',
      value: 'range'
    }, // { name: 'Time', value: 'time' },
    {
      name: 'Color Picker',
      value: 'color'
    }]
  }; // advanced traits

  tm.addType('option_attr', {
    events: {
      'onchange': 'onChange'
    },

    /**
    * Returns the input element
    * @return {HTMLElement}
    */
    getInputEl: function getInputEl() {
      if (!this.inputEl) {
        var input = document.createElement('textarea');
        input.value = this.target.get('option_attr');
        this.inputEl = input;
      }

      return this.inputEl;
    },

    /**
     * Triggered when the value of the model is changed
     */
    onValueChange: function onValueChange() {
      this.target.set('option_attr', this.model.get('value'));
    }
  });
  var myDefaultModel = defaultModel.extend({
    defaults: _objectSpread(_objectSpread({}, defaultModel.prototype.defaults), {}, {
      draggable: true,
      droppable: true,
      copyable: false,
      label_attr: 'Label'
    }),
    // force regenerate of HTML
    toHTML: function toHTML() {
      var cf = opts.comps[this.attributes.tagName];
      var rst = this.genHtml();

      if (cf && cf.useTag) {
        if (cf.useTag === 'innerHTML') {
          return rst.html();
        } else if (cf.useTag === 'innerText') {
          return this.genHtml()[0].innerText;
        }
      }

      return this.genHtml()[0].outerHTML;
    },
    getTraitValues: function getTraitValues() {
      var values = _objectSpread({}, this.attributes);

      this.get('traits').each(function (trait) {
        var k = trait.get('name');
        values[k] = trait.get('value') || values[k];
      });
      return values;
    },
    myInitDefaults: function myInitDefaults() {
      var that = this;

      var values = _objectSpread({}, that.attributes);

      that.get('traits').each(function (trait) {
        var k = trait.get('name'); // set defaults

        if (k.indexOf('_attr') > 0) {
          trait.set('value', values[k]);
        }
      });
    },
    ensureNameAttr: function ensureNameAttr(attrs) {
      var model = this;
      var nameTrait = model.get('traits').where({
        name: 'name_attr'
      })[0];

      if (nameTrait) {
        var name = attrs.name_attr;

        if (!name) {
          name = "".concat(opts.formFieldsPrefix).concat(opts.formNextId++);
          nameTrait.set('value', name);
          model.set('name_attr', name);
          return true;
        }
      }

      return false;
    },
    // function to use with listener
    genHtml: function genHtml() {
      if (!this.view || !this.view.el) {
        var el = document.createElement(this.attributes.tagName);
        return this.generateHtml(el, this.attributes.tagName);
      }

      return this.generateHtml(this.view.el, this.attributes.tagName);
    },
    generateHtml: function generateHtml(el, k) {
      var model = this;
      var $el = cash_dom__WEBPACK_IMPORTED_MODULE_0___default()(el || model.view.el);
      var attrs = model.getTraitValues();
      var $k = $k || model.get('tagName');

      if (opts && opts.comps && opts.comps[$k]) {
        var templateFn = opts.comps[$k].template;

        if (typeof templateFn === 'function') {
          if (!model.ensureNameAttr(attrs)) {
            $el.html(templateFn({
              it: attrs || {}
            }));
          }
        }
      }

      return $el;
    }
  }); // override default view to generate html

  var myDefaultView = defaultView.extend({
    onRender: function onRender() {
      if (this.model.genHtml) {
        this.model.genHtml();
      }

      return this;
    }
  }); // BEGIN: components

  dc.addType('comp_input', {
    model: myDefaultModel.extend({
      defaults: _objectSpread(_objectSpread({}, myDefaultModel.prototype.defaults), {}, {
        draggable: true,
        droppable: false,
        copyable: false,
        tagName: 'comp_input',
        type_attr: 'text',
        traits: inputTraits.concat(inputTypeTrait),
        classes: ['comp_input'].concat(opts.comps.comp_input.classes)
      }),
      init: function init() {
        var that = this;
        that.myInitDefaults();
        that.listenTo(that, 'change:label_attr', that.genHtml);
        that.listenTo(that, 'change:name_attr', that.genHtml);
        that.listenTo(that, 'change:placeholder_attr', that.genHtml);
      }
    }),
    view: myDefaultView
  }); // Select Box

  dc.addType('comp_select', {
    model: myDefaultModel.extend({
      defaults: _objectSpread(_objectSpread({}, myDefaultModel.prototype.defaults), {}, {
        draggable: true,
        droppable: false,
        copyable: false,
        tagName: 'comp_select',
        option_attr: 'MN::Minnesota\nTX::Texas',
        label_attr: 'Select',
        traits: [{
          type: 'option_attr'
        }, {
          type: 'checkbox',
          name: 'required_attr',
          changeProp: 1,
          label: 'Required'
        }, {
          type: 'checkbox',
          name: 'multiple_attr',
          changeProp: 1,
          label: 'Multiple'
        }].concat(fieldTraits),
        classes: ['comp_select'].concat(opts.comps.comp_select.classes)
      }),
      init: function init() {
        var that = this;
        that.myInitDefaults();
        that.listenTo(that, 'change:label_attr', that.genHtml);
        that.listenTo(that, 'change:name_attr', that.genHtml);
        that.listenTo(that, 'change:multiple_attr', that.genHtml);
        that.listenTo(that, 'change:option_attr', that.genHtml);
      }
    }),
    view: myDefaultView
  });
  dc.addType('comp_textarea', {
    model: myDefaultModel.extend({
      defaults: _objectSpread(_objectSpread({}, defaultModel.prototype.defaults), {}, {
        draggable: true,
        droppable: false,
        copyable: false,
        tagName: 'comp_textarea',
        label_attr: 'Message',
        traits: [{
          type: 'checkbox',
          name: 'required_attr',
          changeProp: 1,
          label: 'Required'
        }, {
          type: 'text',
          name: 'placeholder_attr',
          label: 'Placeholder',
          changeProp: 1,
          placeholder: 'Enter placeholder text..'
        }, {
          type: 'number',
          name: 'rows_attr',
          label: 'Rows',
          changeProp: 1,
          placeholder: 'Enter field rows/line-height..'
        }, {
          type: 'number',
          name: 'cols_attr',
          label: 'Columns',
          changeProp: 1,
          placeholder: 'Enter field columns/width..'
        }].concat(fieldTraits),
        classes: ['comp_textarea'].concat(opts.comps.comp_textarea.classes)
      }),
      init: function init() {
        var that = this;
        that.myInitDefaults();
        that.listenTo(that, 'change:label_attr', that.genHtml);
        that.listenTo(that, 'change:name_attr', that.genHtml);
        that.listenTo(that, 'change:placeholder_attr', that.genHtml);
        that.listenTo(that, 'change:cols_attr', that.genHtml);
        that.listenTo(that, 'change:rows_attr', that.genHtml);
      }
    }),
    view: myDefaultView
  });
  dc.addType('comp_file', {
    model: myDefaultModel.extend({
      defaults: _objectSpread(_objectSpread({}, defaultModel.prototype.defaults), {}, {
        draggable: true,
        droppable: false,
        copyable: false,
        tagName: 'comp_file',
        label_attr: 'Choose file...',
        traits: [{
          type: 'checkbox',
          name: 'required_attr',
          changeProp: 1,
          label: 'Required'
        }, {
          type: 'text',
          name: 'placeholder_attr',
          label: 'Placeholder',
          changeProp: 1,
          placeholder: 'Enter placeholder text..'
        }, {
          type: 'string',
          name: 'accept_attr',
          label: 'Accept',
          changeProp: 1,
          placeholder: 'image/jpeg, image/png, image/gif'
        }].concat(fieldTraits),
        classes: ['comp_file'].concat(opts.comps.comp_file.classes)
      }),
      init: function init() {
        var that = this;
        that.myInitDefaults();
        that.listenTo(that, 'change:label_attr', that.genHtml);
        that.listenTo(that, 'change:name_attr', that.genHtml);
        that.listenTo(that, 'change:placeholder_attr', that.genHtml);
        that.listenTo(that, 'change:accept_attr', that.genHtml);
      }
    }),
    view: myDefaultView
  });
  dc.addType('comp_checkbox', {
    model: myDefaultModel.extend({
      defaults: _objectSpread(_objectSpread({}, myDefaultModel.prototype.defaults), {}, {
        draggable: true,
        droppable: false,
        copyable: false,
        tagName: 'comp_checkbox',
        label_attr: 'I accept the terms and use',
        traits: [{
          type: 'checkbox',
          name: 'required_attr',
          changeProp: 1,
          label: 'Required'
        }].concat(fieldTraits),
        classes: ['comp_checkbox'].concat(opts.comps.comp_checkbox.classes)
      }),
      init: function init() {
        var that = this;
        that.myInitDefaults();
        that.listenTo(that, 'change:label_attr', that.genHtml);
        that.listenTo(that, 'change:name_attr', that.genHtml);
      }
    }),
    view: myDefaultView
  });
  dc.addType('comp_hidden', {
    model: myDefaultModel.extend({
      defaults: _objectSpread(_objectSpread({}, myDefaultModel.prototype.defaults), {}, {
        draggable: true,
        droppable: false,
        copyable: false,
        tagName: 'comp_hidden',
        traits: [{
          type: 'text',
          name: 'name_attr',
          label: 'Name',
          changeProp: 1,
          placeholder: 'Enter a field name...'
        }],
        classes: ['comp_hidden'].concat(opts.comps.comp_hidden.classes)
      }),
      init: function init() {
        var that = this;
        that.myInitDefaults();
        that.listenTo(that, 'change:name_attr', that.genHtml);
      }
    }),
    view: myDefaultView
  });
  dc.addType('comp_submit', {
    model: myDefaultModel.extend({
      defaults: _objectSpread(_objectSpread({}, myDefaultModel.prototype.defaults), {}, {
        draggable: true,
        droppable: false,
        copyable: false,
        tagName: 'comp_submit',
        label_attr: 'Send',
        traits: defaultModel.prototype.defaults.traits.concat([{
          type: 'text',
          name: 'label_attr',
          label: 'Label',
          placeholder: 'Enter a field label..'
        }]),
        classes: ['comp_submit'].concat(opts.comps.comp_submit.classes)
      }),
      init: function init() {
        var that = this;
        that.myInitDefaults();
        that.listenTo(that, 'change:label_attr', that.genHtml);
      }
    }),
    view: myDefaultView
  });
  dc.addType('comp_row', {
    model: defaultModel.extend({
      defaults: _objectSpread(_objectSpread({}, defaultModel.prototype.defaults), {}, {
        tagName: 'comp_row',
        // Can be dropped inside other elements
        draggable: true,
        copyable: false,
        // Can drop other elements inside it
        droppable: 'comp_col',
        classes: ['comp_row'].concat(opts.comps.comp_row.classes)
      })
    }),
    view: defaultView
  });
  dc.addType('comp_col', {
    model: defaultModel.extend({
      defaults: _objectSpread(_objectSpread({}, defaultModel.prototype.defaults), {}, {
        tagName: 'comp_col',
        // Can be dropped only inside `row` elements
        draggable: 'comp_row',
        // Can drop other elements inside it
        droppable: true,
        copyable: false,
        classes: ['comp_col'].concat(opts.comps.comp_col.classes)
      })
    }),
    view: defaultView
  });
  dc.addType('comp_recaptcha', {
    model: myDefaultModel.extend({
      defaults: _objectSpread(_objectSpread({}, myDefaultModel.prototype.defaults), {}, {
        draggable: true,
        droppable: false,
        copyable: false,
        tagName: 'comp_recaptcha',
        traits: defaultModel.prototype.defaults.traits.concat([{
          type: 'text',
          name: 'sitekey_attr',
          label: 'Site key',
          placeholder: 'V2 checkbox key'
        }]),
        classes: ['comp_recaptcha'].concat(opts.comps.comp_recaptcha.classes)
      }),
      init: function init() {
        var that = this;
        that.myInitDefaults();
        that.listenTo(that, 'change:sitekey_attr', that.genHtml);
      }
    }),
    view: myDefaultView
  });
  dc.addType('comp_stripe', {
    model: myDefaultModel.extend({
      defaults: _objectSpread(_objectSpread({}, myDefaultModel.prototype.defaults), {}, {
        draggable: true,
        droppable: false,
        copyable: false,
        tagName: 'comp_stripe',
        hidepostal_attr: 'false',
        traits: defaultModel.prototype.defaults.traits.concat([{
          type: 'text',
          name: 'publickey_attr',
          label: 'Public key',
          placeholder: 'e.g. stripe public key'
        }, {
          type: 'checkbox',
          name: 'hidepostal_attr',
          label: 'Hide postal'
        }]),
        classes: ['comp_stripe'].concat(opts.comps.comp_recaptcha.classes)
      }),
      init: function init() {
        var that = this;
        that.myInitDefaults();
        that.listenTo(that, 'change:publickey_attr', that.genHtml);
      }
    }),
    view: myDefaultView
  });
});

/***/ }),

/***/ "./node_modules/cash-dom/dist/cash.js":
/*!********************************************!*\
  !*** ./node_modules/cash-dom/dist/cash.js ***!
  \********************************************/
/***/ (function(module) {

/* MIT https://github.com/fabiospampinato/cash */
(function(){
"use strict";

var propMap = {
  /* GENERAL */
  "class": 'className',
  contenteditable: 'contentEditable',

  /* LABEL */
  "for": 'htmlFor',

  /* INPUT */
  readonly: 'readOnly',
  maxlength: 'maxLength',
  tabindex: 'tabIndex',

  /* TABLE */
  colspan: 'colSpan',
  rowspan: 'rowSpan',

  /* IMAGE */
  usemap: 'useMap'
};

function attempt(fn, arg) {
  try {
    return fn(arg);
  } catch (_a) {
    return arg;
  }
}

var doc = document,
    win = window,
    docEle = doc.documentElement,
    createElement = doc.createElement.bind(doc),
    div = createElement('div'),
    table = createElement('table'),
    tbody = createElement('tbody'),
    tr = createElement('tr'),
    isArray = Array.isArray,
    ArrayPrototype = Array.prototype,
    concat = ArrayPrototype.concat,
    filter = ArrayPrototype.filter,
    indexOf = ArrayPrototype.indexOf,
    map = ArrayPrototype.map,
    push = ArrayPrototype.push,
    slice = ArrayPrototype.slice,
    some = ArrayPrototype.some,
    splice = ArrayPrototype.splice;
var idRe = /^#(?:[\w-]|\\.|[^\x00-\xa0])*$/,
    classRe = /^\.(?:[\w-]|\\.|[^\x00-\xa0])*$/,
    htmlRe = /<.+>/,
    tagRe = /^\w+$/; // @require ./variables.ts

function find(selector, context) {
  return !selector || !isDocument(context) && !isElement(context) ? [] : classRe.test(selector) ? context.getElementsByClassName(selector.slice(1)) : tagRe.test(selector) ? context.getElementsByTagName(selector) : context.querySelectorAll(selector);
} // @require ./find.ts
// @require ./variables.ts


var Cash =
/** @class */
function () {
  function Cash(selector, context) {
    if (!selector) return;
    if (isCash(selector)) return selector;
    var eles = selector;

    if (isString(selector)) {
      var ctx = (isCash(context) ? context[0] : context) || doc;
      eles = idRe.test(selector) ? ctx.getElementById(selector.slice(1)) : htmlRe.test(selector) ? parseHTML(selector) : find(selector, ctx);
      if (!eles) return;
    } else if (isFunction(selector)) {
      return this.ready(selector); //FIXME: `fn.ready` is not included in `core`, but it's actually a core functionality
    }

    if (eles.nodeType || eles === win) eles = [eles];
    this.length = eles.length;

    for (var i = 0, l = this.length; i < l; i++) {
      this[i] = eles[i];
    }
  }

  Cash.prototype.init = function (selector, context) {
    return new Cash(selector, context);
  };

  return Cash;
}();

var fn = Cash.prototype,
    cash = fn.init;
cash.fn = cash.prototype = fn; // Ensuring that `cash () instanceof cash`

fn.length = 0;
fn.splice = splice; // Ensuring a cash collection gets printed as array-like in Chrome's devtools

if (typeof Symbol === 'function') {
  // Ensuring a cash collection is iterable
  fn[Symbol['iterator']] = ArrayPrototype[Symbol['iterator']];
}

fn.map = function (callback) {
  return cash(concat.apply([], map.call(this, function (ele, i) {
    return callback.call(ele, i, ele);
  })));
};

fn.slice = function (start, end) {
  return cash(slice.call(this, start, end));
}; // @require ./cash.ts


var dashAlphaRe = /-([a-z])/g;

function camelCase(str) {
  return str.replace(dashAlphaRe, function (match, letter) {
    return letter.toUpperCase();
  });
}

cash.guid = 1; // @require ./cash.ts

function matches(ele, selector) {
  var matches = ele && (ele['matches'] || ele['webkitMatchesSelector'] || ele['msMatchesSelector']);
  return !!matches && !!selector && matches.call(ele, selector);
}

function isCash(x) {
  return x instanceof Cash;
}

function isWindow(x) {
  return !!x && x === x.window;
}

function isDocument(x) {
  return !!x && x.nodeType === 9;
}

function isElement(x) {
  return !!x && x.nodeType === 1;
}

function isBoolean(x) {
  return typeof x === 'boolean';
}

function isFunction(x) {
  return typeof x === 'function';
}

function isString(x) {
  return typeof x === 'string';
}

function isUndefined(x) {
  return x === undefined;
}

function isNull(x) {
  return x === null;
}

function isNumeric(x) {
  return !isNaN(parseFloat(x)) && isFinite(x);
}

function isPlainObject(x) {
  if (typeof x !== 'object' || x === null) return false;
  var proto = Object.getPrototypeOf(x);
  return proto === null || proto === Object.prototype;
}

cash.isWindow = isWindow;
cash.isFunction = isFunction;
cash.isArray = isArray;
cash.isNumeric = isNumeric;
cash.isPlainObject = isPlainObject;

fn.get = function (index) {
  if (isUndefined(index)) return slice.call(this);
  index = Number(index);
  return this[index < 0 ? index + this.length : index];
};

fn.eq = function (index) {
  return cash(this.get(index));
};

fn.first = function () {
  return this.eq(0);
};

fn.last = function () {
  return this.eq(-1);
};

function each(arr, callback, _reverse) {
  if (_reverse) {
    var i = arr.length;

    while (i--) {
      if (callback.call(arr[i], i, arr[i]) === false) return arr;
    }
  } else if (isPlainObject(arr)) {
    var keys = Object.keys(arr);

    for (var i = 0, l = keys.length; i < l; i++) {
      var key = keys[i];
      if (callback.call(arr[key], key, arr[key]) === false) return arr;
    }
  } else {
    for (var i = 0, l = arr.length; i < l; i++) {
      if (callback.call(arr[i], i, arr[i]) === false) return arr;
    }
  }

  return arr;
}

cash.each = each;

fn.each = function (callback) {
  return each(this, callback);
};

fn.prop = function (prop, value) {
  if (!prop) return;

  if (isString(prop)) {
    prop = propMap[prop] || prop;
    if (arguments.length < 2) return this[0] && this[0][prop];
    return this.each(function (i, ele) {
      ele[prop] = value;
    });
  }

  for (var key in prop) {
    this.prop(key, prop[key]);
  }

  return this;
};

fn.removeProp = function (prop) {
  return this.each(function (i, ele) {
    delete ele[propMap[prop] || prop];
  });
};

function extend() {
  var sources = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    sources[_i] = arguments[_i];
  }

  var deep = isBoolean(sources[0]) ? sources.shift() : false,
      target = sources.shift(),
      length = sources.length;
  if (!target) return {};
  if (!length) return extend(deep, cash, target);

  for (var i = 0; i < length; i++) {
    var source = sources[i];

    for (var key in source) {
      if (deep && (isArray(source[key]) || isPlainObject(source[key]))) {
        if (!target[key] || target[key].constructor !== source[key].constructor) target[key] = new source[key].constructor();
        extend(deep, target[key], source[key]);
      } else {
        target[key] = source[key];
      }
    }
  }

  return target;
}

cash.extend = extend;

fn.extend = function (plugins) {
  return extend(fn, plugins);
}; // @require ./matches.ts
// @require ./type_checking.ts


function getCompareFunction(comparator) {
  return isString(comparator) ? function (i, ele) {
    return matches(ele, comparator);
  } : isFunction(comparator) ? comparator : isCash(comparator) ? function (i, ele) {
    return comparator.is(ele);
  } : !comparator ? function () {
    return false;
  } : function (i, ele) {
    return ele === comparator;
  };
}

fn.filter = function (comparator) {
  var compare = getCompareFunction(comparator);
  return cash(filter.call(this, function (ele, i) {
    return compare.call(ele, i, ele);
  }));
}; // @require collection/filter.ts


function filtered(collection, comparator) {
  return !comparator ? collection : collection.filter(comparator);
} // @require ./type_checking.ts


var splitValuesRe = /\S+/g;

function getSplitValues(str) {
  return isString(str) ? str.match(splitValuesRe) || [] : [];
}

fn.hasClass = function (cls) {
  return !!cls && some.call(this, function (ele) {
    return isElement(ele) && ele.classList.contains(cls);
  });
};

fn.removeAttr = function (attr) {
  var attrs = getSplitValues(attr);
  return this.each(function (i, ele) {
    if (!isElement(ele)) return;
    each(attrs, function (i, a) {
      ele.removeAttribute(a);
    });
  });
};

function attr(attr, value) {
  if (!attr) return;

  if (isString(attr)) {
    if (arguments.length < 2) {
      if (!this[0] || !isElement(this[0])) return;
      var value_1 = this[0].getAttribute(attr);
      return isNull(value_1) ? undefined : value_1;
    }

    if (isUndefined(value)) return this;
    if (isNull(value)) return this.removeAttr(attr);
    return this.each(function (i, ele) {
      if (!isElement(ele)) return;
      ele.setAttribute(attr, value);
    });
  }

  for (var key in attr) {
    this.attr(key, attr[key]);
  }

  return this;
}

fn.attr = attr;

fn.toggleClass = function (cls, force) {
  var classes = getSplitValues(cls),
      isForce = !isUndefined(force);
  return this.each(function (i, ele) {
    if (!isElement(ele)) return;
    each(classes, function (i, c) {
      if (isForce) {
        force ? ele.classList.add(c) : ele.classList.remove(c);
      } else {
        ele.classList.toggle(c);
      }
    });
  });
};

fn.addClass = function (cls) {
  return this.toggleClass(cls, true);
};

fn.removeClass = function (cls) {
  if (arguments.length) return this.toggleClass(cls, false);
  return this.attr('class', '');
};

function pluck(arr, prop, deep, until) {
  var plucked = [],
      isCallback = isFunction(prop),
      compare = until && getCompareFunction(until);

  for (var i = 0, l = arr.length; i < l; i++) {
    if (isCallback) {
      var val_1 = prop(arr[i]);
      if (val_1.length) push.apply(plucked, val_1);
    } else {
      var val_2 = arr[i][prop];

      while (val_2 != null) {
        if (until && compare(-1, val_2)) break;
        plucked.push(val_2);
        val_2 = deep ? val_2[prop] : null;
      }
    }
  }

  return plucked;
}

function unique(arr) {
  return arr.length > 1 ? filter.call(arr, function (item, index, self) {
    return indexOf.call(self, item) === index;
  }) : arr;
}

cash.unique = unique;

fn.add = function (selector, context) {
  return cash(unique(this.get().concat(cash(selector, context).get())));
}; // @require core/type_checking.ts
// @require core/variables.ts


function computeStyle(ele, prop, isVariable) {
  if (!isElement(ele)) return;
  var style = win.getComputedStyle(ele, null);
  return isVariable ? style.getPropertyValue(prop) || undefined : style[prop] || ele.style[prop];
} // @require ./compute_style.ts


function computeStyleInt(ele, prop) {
  return parseInt(computeStyle(ele, prop), 10) || 0;
}

var cssVariableRe = /^--/; // @require ./variables.ts

function isCSSVariable(prop) {
  return cssVariableRe.test(prop);
} // @require core/camel_case.ts
// @require core/cash.ts
// @require core/each.ts
// @require core/variables.ts
// @require ./is_css_variable.ts


var prefixedProps = {},
    style = div.style,
    vendorsPrefixes = ['webkit', 'moz', 'ms'];

function getPrefixedProp(prop, isVariable) {
  if (isVariable === void 0) {
    isVariable = isCSSVariable(prop);
  }

  if (isVariable) return prop;

  if (!prefixedProps[prop]) {
    var propCC = camelCase(prop),
        propUC = "" + propCC[0].toUpperCase() + propCC.slice(1),
        props = (propCC + " " + vendorsPrefixes.join(propUC + " ") + propUC).split(' ');
    each(props, function (i, p) {
      if (p in style) {
        prefixedProps[prop] = p;
        return false;
      }
    });
  }

  return prefixedProps[prop];
}

; // @require core/type_checking.ts
// @require ./is_css_variable.ts

var numericProps = {
  animationIterationCount: true,
  columnCount: true,
  flexGrow: true,
  flexShrink: true,
  fontWeight: true,
  gridArea: true,
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnStart: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowStart: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  widows: true,
  zIndex: true
};

function getSuffixedValue(prop, value, isVariable) {
  if (isVariable === void 0) {
    isVariable = isCSSVariable(prop);
  }

  return !isVariable && !numericProps[prop] && isNumeric(value) ? value + "px" : value;
}

function css(prop, value) {
  if (isString(prop)) {
    var isVariable_1 = isCSSVariable(prop);
    prop = getPrefixedProp(prop, isVariable_1);
    if (arguments.length < 2) return this[0] && computeStyle(this[0], prop, isVariable_1);
    if (!prop) return this;
    value = getSuffixedValue(prop, value, isVariable_1);
    return this.each(function (i, ele) {
      if (!isElement(ele)) return;

      if (isVariable_1) {
        ele.style.setProperty(prop, value);
      } else {
        ele.style[prop] = value;
      }
    });
  }

  for (var key in prop) {
    this.css(key, prop[key]);
  }

  return this;
}

;
fn.css = css; // @optional ./css.ts
// @require core/attempt.ts
// @require core/camel_case.ts

var JSONStringRe = /^\s+|\s+$/;

function getData(ele, key) {
  var value = ele.dataset[key] || ele.dataset[camelCase(key)];
  if (JSONStringRe.test(value)) return value;
  return attempt(JSON.parse, value);
} // @require core/attempt.ts
// @require core/camel_case.ts


function setData(ele, key, value) {
  value = attempt(JSON.stringify, value);
  ele.dataset[camelCase(key)] = value;
}

function data(name, value) {
  if (!name) {
    if (!this[0]) return;
    var datas = {};

    for (var key in this[0].dataset) {
      datas[key] = getData(this[0], key);
    }

    return datas;
  }

  if (isString(name)) {
    if (arguments.length < 2) return this[0] && getData(this[0], name);
    if (isUndefined(value)) return this;
    return this.each(function (i, ele) {
      setData(ele, name, value);
    });
  }

  for (var key in name) {
    this.data(key, name[key]);
  }

  return this;
}

fn.data = data; // @optional ./data.ts

function getDocumentDimension(doc, dimension) {
  var docEle = doc.documentElement;
  return Math.max(doc.body["scroll" + dimension], docEle["scroll" + dimension], doc.body["offset" + dimension], docEle["offset" + dimension], docEle["client" + dimension]);
} // @require css/helpers/compute_style_int.ts


function getExtraSpace(ele, xAxis) {
  return computeStyleInt(ele, "border" + (xAxis ? 'Left' : 'Top') + "Width") + computeStyleInt(ele, "padding" + (xAxis ? 'Left' : 'Top')) + computeStyleInt(ele, "padding" + (xAxis ? 'Right' : 'Bottom')) + computeStyleInt(ele, "border" + (xAxis ? 'Right' : 'Bottom') + "Width");
}

each([true, false], function (i, outer) {
  each(['Width', 'Height'], function (i, prop) {
    var name = "" + (outer ? 'outer' : 'inner') + prop;

    fn[name] = function (includeMargins) {
      if (!this[0]) return;
      if (isWindow(this[0])) return outer ? this[0]["inner" + prop] : this[0].document.documentElement["client" + prop];
      if (isDocument(this[0])) return getDocumentDimension(this[0], prop);
      return this[0]["" + (outer ? 'offset' : 'client') + prop] + (includeMargins && outer ? computeStyleInt(this[0], "margin" + (i ? 'Top' : 'Left')) + computeStyleInt(this[0], "margin" + (i ? 'Bottom' : 'Right')) : 0);
    };
  });
});
each(['Width', 'Height'], function (index, prop) {
  var propLC = prop.toLowerCase();

  fn[propLC] = function (value) {
    if (!this[0]) return isUndefined(value) ? undefined : this;

    if (!arguments.length) {
      if (isWindow(this[0])) return this[0].document.documentElement["client" + prop];
      if (isDocument(this[0])) return getDocumentDimension(this[0], prop);
      return this[0].getBoundingClientRect()[propLC] - getExtraSpace(this[0], !index);
    }

    var valueNumber = parseInt(value, 10);
    return this.each(function (i, ele) {
      if (!isElement(ele)) return;
      var boxSizing = computeStyle(ele, 'boxSizing');
      ele.style[propLC] = getSuffixedValue(propLC, valueNumber + (boxSizing === 'border-box' ? getExtraSpace(ele, !index) : 0));
    });
  };
}); // @optional ./inner_outer.ts
// @optional ./normal.ts
// @require css/helpers/compute_style.ts

var defaultDisplay = {};

function getDefaultDisplay(tagName) {
  if (defaultDisplay[tagName]) return defaultDisplay[tagName];
  var ele = createElement(tagName);
  doc.body.insertBefore(ele, null);
  var display = computeStyle(ele, 'display');
  doc.body.removeChild(ele);
  return defaultDisplay[tagName] = display !== 'none' ? display : 'block';
} // @require css/helpers/compute_style.ts


function isHidden(ele) {
  return computeStyle(ele, 'display') === 'none';
}

var displayProperty = '___cd';

fn.toggle = function (force) {
  return this.each(function (i, ele) {
    if (!isElement(ele)) return;
    var show = isUndefined(force) ? isHidden(ele) : force;

    if (show) {
      ele.style.display = ele[displayProperty] || '';

      if (isHidden(ele)) {
        ele.style.display = getDefaultDisplay(ele.tagName);
      }
    } else {
      ele[displayProperty] = computeStyle(ele, 'display');
      ele.style.display = 'none';
    }
  });
};

fn.hide = function () {
  return this.toggle(false);
};

fn.show = function () {
  return this.toggle(true);
}; // @optional ./hide.ts
// @optional ./show.ts
// @optional ./toggle.ts


function hasNamespaces(ns1, ns2) {
  return !ns2 || !some.call(ns2, function (ns) {
    return ns1.indexOf(ns) < 0;
  });
}

var eventsNamespace = '___ce',
    eventsNamespacesSeparator = '.',
    eventsFocus = {
  focus: 'focusin',
  blur: 'focusout'
},
    eventsHover = {
  mouseenter: 'mouseover',
  mouseleave: 'mouseout'
},
    eventsMouseRe = /^(mouse|pointer|contextmenu|drag|drop|click|dblclick)/i; // @require ./variables.ts

function getEventNameBubbling(name) {
  return eventsHover[name] || eventsFocus[name] || name;
} // @require ./variables.ts


function getEventsCache(ele) {
  return ele[eventsNamespace] = ele[eventsNamespace] || {};
} // @require core/guid.ts
// @require events/helpers/get_events_cache.ts


function addEvent(ele, name, namespaces, selector, callback) {
  var eventCache = getEventsCache(ele);
  eventCache[name] = eventCache[name] || [];
  eventCache[name].push([namespaces, selector, callback]);
  ele.addEventListener(name, callback);
} // @require ./variables.ts


function parseEventName(eventName) {
  var parts = eventName.split(eventsNamespacesSeparator);
  return [parts[0], parts.slice(1).sort()]; // [name, namespace[]]
} // @require ./get_events_cache.ts
// @require ./has_namespaces.ts
// @require ./parse_event_name.ts


function removeEvent(ele, name, namespaces, selector, callback) {
  var cache = getEventsCache(ele);

  if (!name) {
    for (name in cache) {
      removeEvent(ele, name, namespaces, selector, callback);
    }
  } else if (cache[name]) {
    cache[name] = cache[name].filter(function (_a) {
      var ns = _a[0],
          sel = _a[1],
          cb = _a[2];
      if (callback && cb.guid !== callback.guid || !hasNamespaces(ns, namespaces) || selector && selector !== sel) return true;
      ele.removeEventListener(name, cb);
    });
  }
}

fn.off = function (eventFullName, selector, callback) {
  var _this = this;

  if (isUndefined(eventFullName)) {
    this.each(function (i, ele) {
      if (!isElement(ele) && !isDocument(ele) && !isWindow(ele)) return;
      removeEvent(ele);
    });
  } else if (!isString(eventFullName)) {
    for (var key in eventFullName) {
      this.off(key, eventFullName[key]);
    }
  } else {
    if (isFunction(selector)) {
      callback = selector;
      selector = '';
    }

    each(getSplitValues(eventFullName), function (i, eventFullName) {
      var _a = parseEventName(eventFullName),
          nameOriginal = _a[0],
          namespaces = _a[1],
          name = getEventNameBubbling(nameOriginal);

      _this.each(function (i, ele) {
        if (!isElement(ele) && !isDocument(ele) && !isWindow(ele)) return;
        removeEvent(ele, name, namespaces, selector, callback);
      });
    });
  }

  return this;
};

function on(eventFullName, selector, data, callback, _one) {
  var _this = this;

  if (!isString(eventFullName)) {
    for (var key in eventFullName) {
      this.on(key, selector, data, eventFullName[key], _one);
    }

    return this;
  }

  if (!isString(selector)) {
    if (isUndefined(selector) || isNull(selector)) {
      selector = '';
    } else if (isUndefined(data)) {
      data = selector;
      selector = '';
    } else {
      callback = data;
      data = selector;
      selector = '';
    }
  }

  if (!isFunction(callback)) {
    callback = data;
    data = undefined;
  }

  if (!callback) return this;
  each(getSplitValues(eventFullName), function (i, eventFullName) {
    var _a = parseEventName(eventFullName),
        nameOriginal = _a[0],
        namespaces = _a[1],
        name = getEventNameBubbling(nameOriginal),
        isEventHover = nameOriginal in eventsHover,
        isEventFocus = nameOriginal in eventsFocus;

    if (!name) return;

    _this.each(function (i, ele) {
      if (!isElement(ele) && !isDocument(ele) && !isWindow(ele)) return;

      var finalCallback = function finalCallback(event) {
        if (event.target["___i" + event.type]) return event.stopImmediatePropagation(); // Ignoring native event in favor of the upcoming custom one

        if (event.namespace && !hasNamespaces(namespaces, event.namespace.split(eventsNamespacesSeparator))) return;
        if (!selector && (isEventFocus && (event.target !== ele || event.___ot === name) || isEventHover && event.relatedTarget && ele.contains(event.relatedTarget))) return;
        var thisArg = ele;

        if (selector) {
          var target = event.target;

          while (!matches(target, selector)) {
            if (target === ele) return;
            target = target.parentNode;
            if (!target) return;
          }

          thisArg = target;
          event.___cd = true; // Delegate
        }

        if (event.___cd) {
          Object.defineProperty(event, 'currentTarget', {
            configurable: true,
            get: function get() {
              return thisArg;
            }
          });
        }

        Object.defineProperty(event, 'data', {
          configurable: true,
          get: function get() {
            return data;
          }
        });
        var returnValue = callback.call(thisArg, event, event.___td);

        if (_one) {
          removeEvent(ele, name, namespaces, selector, finalCallback);
        }

        if (returnValue === false) {
          event.preventDefault();
          event.stopPropagation();
        }
      };

      finalCallback.guid = callback.guid = callback.guid || cash.guid++;
      addEvent(ele, name, namespaces, selector, finalCallback);
    });
  });
  return this;
}

fn.on = on;

function one(eventFullName, selector, data, callback) {
  return this.on(eventFullName, selector, data, callback, true);
}

;
fn.one = one;

fn.ready = function (callback) {
  var cb = function cb() {
    return setTimeout(callback, 0, cash);
  };

  if (doc.readyState !== 'loading') {
    cb();
  } else {
    doc.addEventListener('DOMContentLoaded', cb);
  }

  return this;
};

fn.trigger = function (event, data) {
  if (isString(event)) {
    var _a = parseEventName(event),
        nameOriginal = _a[0],
        namespaces = _a[1],
        name_1 = getEventNameBubbling(nameOriginal);

    if (!name_1) return this;
    var type = eventsMouseRe.test(name_1) ? 'MouseEvents' : 'HTMLEvents';
    event = doc.createEvent(type);
    event.initEvent(name_1, true, true);
    event.namespace = namespaces.join(eventsNamespacesSeparator);
    event.___ot = nameOriginal;
  }

  event.___td = data;
  var isEventFocus = event.___ot in eventsFocus;
  return this.each(function (i, ele) {
    if (isEventFocus && isFunction(ele[event.___ot])) {
      ele["___i" + event.type] = true; // Ensuring the native event is ignored

      ele[event.___ot]();

      ele["___i" + event.type] = false; // Ensuring the custom event is not ignored
    }

    ele.dispatchEvent(event);
  });
}; // @optional ./off.ts
// @optional ./on.ts
// @optional ./one.ts
// @optional ./ready.ts
// @optional ./trigger.ts
// @require core/pluck.ts
// @require core/variables.ts


function getValue(ele) {
  if (ele.multiple && ele.options) return pluck(filter.call(ele.options, function (option) {
    return option.selected && !option.disabled && !option.parentNode.disabled;
  }), 'value');
  return ele.value || '';
}

var queryEncodeSpaceRe = /%20/g,
    queryEncodeCRLFRe = /\r?\n/g;

function queryEncode(prop, value) {
  return "&" + encodeURIComponent(prop) + "=" + encodeURIComponent(value.replace(queryEncodeCRLFRe, '\r\n')).replace(queryEncodeSpaceRe, '+');
}

var skippableRe = /file|reset|submit|button|image/i,
    checkableRe = /radio|checkbox/i;

fn.serialize = function () {
  var query = '';
  this.each(function (i, ele) {
    each(ele.elements || [ele], function (i, ele) {
      if (ele.disabled || !ele.name || ele.tagName === 'FIELDSET' || skippableRe.test(ele.type) || checkableRe.test(ele.type) && !ele.checked) return;
      var value = getValue(ele);

      if (!isUndefined(value)) {
        var values = isArray(value) ? value : [value];
        each(values, function (i, value) {
          query += queryEncode(ele.name, value);
        });
      }
    });
  });
  return query.slice(1);
};

function val(value) {
  if (!arguments.length) return this[0] && getValue(this[0]);
  return this.each(function (i, ele) {
    var isSelect = ele.multiple && ele.options;

    if (isSelect || checkableRe.test(ele.type)) {
      var eleValue_1 = isArray(value) ? map.call(value, String) : isNull(value) ? [] : [String(value)];

      if (isSelect) {
        each(ele.options, function (i, option) {
          option.selected = eleValue_1.indexOf(option.value) >= 0;
        }, true);
      } else {
        ele.checked = eleValue_1.indexOf(ele.value) >= 0;
      }
    } else {
      ele.value = isUndefined(value) || isNull(value) ? '' : value;
    }
  });
}

fn.val = val;

fn.clone = function () {
  return this.map(function (i, ele) {
    return ele.cloneNode(true);
  });
};

fn.detach = function (comparator) {
  filtered(this, comparator).each(function (i, ele) {
    if (ele.parentNode) {
      ele.parentNode.removeChild(ele);
    }
  });
  return this;
};

var fragmentRe = /^\s*<(\w+)[^>]*>/,
    singleTagRe = /^<(\w+)\s*\/?>(?:<\/\1>)?$/;
var containers = {
  '*': div,
  tr: tbody,
  td: tr,
  th: tr,
  thead: table,
  tbody: table,
  tfoot: table
}; //TODO: Create elements inside a document fragment, in order to prevent inline event handlers from firing
//TODO: Ensure the created elements have the fragment as their parent instead of null, this also ensures we can deal with detatched nodes more reliably

function parseHTML(html) {
  if (!isString(html)) return [];
  if (singleTagRe.test(html)) return [createElement(RegExp.$1)];
  var fragment = fragmentRe.test(html) && RegExp.$1,
      container = containers[fragment] || containers['*'];
  container.innerHTML = html;
  return cash(container.childNodes).detach().get();
}

cash.parseHTML = parseHTML;

fn.empty = function () {
  return this.each(function (i, ele) {
    while (ele.firstChild) {
      ele.removeChild(ele.firstChild);
    }
  });
};

function html(html) {
  if (!arguments.length) return this[0] && this[0].innerHTML;
  if (isUndefined(html)) return this;
  return this.each(function (i, ele) {
    if (!isElement(ele)) return;
    ele.innerHTML = html;
  });
}

fn.html = html;

fn.remove = function (comparator) {
  filtered(this, comparator).detach().off();
  return this;
};

function text(text) {
  if (isUndefined(text)) return this[0] ? this[0].textContent : '';
  return this.each(function (i, ele) {
    if (!isElement(ele)) return;
    ele.textContent = text;
  });
}

;
fn.text = text;

fn.unwrap = function () {
  this.parent().each(function (i, ele) {
    if (ele.tagName === 'BODY') return;
    var $ele = cash(ele);
    $ele.replaceWith($ele.children());
  });
  return this;
};

fn.offset = function () {
  var ele = this[0];
  if (!ele) return;
  var rect = ele.getBoundingClientRect();
  return {
    top: rect.top + win.pageYOffset,
    left: rect.left + win.pageXOffset
  };
};

fn.offsetParent = function () {
  return this.map(function (i, ele) {
    var offsetParent = ele.offsetParent;

    while (offsetParent && computeStyle(offsetParent, 'position') === 'static') {
      offsetParent = offsetParent.offsetParent;
    }

    return offsetParent || docEle;
  });
};

fn.position = function () {
  var ele = this[0];
  if (!ele) return;
  var isFixed = computeStyle(ele, 'position') === 'fixed',
      offset = isFixed ? ele.getBoundingClientRect() : this.offset();

  if (!isFixed) {
    var doc_1 = ele.ownerDocument;
    var offsetParent = ele.offsetParent || doc_1.documentElement;

    while ((offsetParent === doc_1.body || offsetParent === doc_1.documentElement) && computeStyle(offsetParent, 'position') === 'static') {
      offsetParent = offsetParent.parentNode;
    }

    if (offsetParent !== ele && isElement(offsetParent)) {
      var parentOffset = cash(offsetParent).offset();
      offset.top -= parentOffset.top + computeStyleInt(offsetParent, 'borderTopWidth');
      offset.left -= parentOffset.left + computeStyleInt(offsetParent, 'borderLeftWidth');
    }
  }

  return {
    top: offset.top - computeStyleInt(ele, 'marginTop'),
    left: offset.left - computeStyleInt(ele, 'marginLeft')
  };
};

fn.children = function (comparator) {
  return filtered(cash(unique(pluck(this, function (ele) {
    return ele.children;
  }))), comparator);
};

fn.contents = function () {
  return cash(unique(pluck(this, function (ele) {
    return ele.tagName === 'IFRAME' ? [ele.contentDocument] : ele.tagName === 'TEMPLATE' ? ele.content.childNodes : ele.childNodes;
  })));
};

fn.find = function (selector) {
  return cash(unique(pluck(this, function (ele) {
    return find(selector, ele);
  })));
}; // @require core/variables.ts
// @require collection/filter.ts
// @require traversal/find.ts


var HTMLCDATARe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
    scriptTypeRe = /^$|^module$|\/(java|ecma)script/i,
    scriptAttributes = ['type', 'src', 'nonce', 'noModule'];

function evalScripts(node, doc) {
  var collection = cash(node);
  collection.filter('script').add(collection.find('script')).each(function (i, ele) {
    if (scriptTypeRe.test(ele.type) && docEle.contains(ele)) {
      // The script type is supported // The element is attached to the DOM // Using `documentElement` for broader browser support
      var script_1 = createElement('script');
      script_1.text = ele.textContent.replace(HTMLCDATARe, '');
      each(scriptAttributes, function (i, attr) {
        if (ele[attr]) script_1[attr] = ele[attr];
      });
      doc.head.insertBefore(script_1, null);
      doc.head.removeChild(script_1);
    }
  });
} // @require ./eval_scripts.ts


function insertElement(anchor, target, left, inside, evaluate) {
  if (inside) {
    // prepend/append
    anchor.insertBefore(target, left ? anchor.firstChild : null);
  } else {
    // before/after
    anchor.parentNode.insertBefore(target, left ? anchor : anchor.nextSibling);
  }

  if (evaluate) {
    evalScripts(target, anchor.ownerDocument);
  }
} // @require ./insert_element.ts


function insertSelectors(selectors, anchors, inverse, left, inside, reverseLoop1, reverseLoop2, reverseLoop3) {
  each(selectors, function (si, selector) {
    each(cash(selector), function (ti, target) {
      each(cash(anchors), function (ai, anchor) {
        var anchorFinal = inverse ? target : anchor,
            targetFinal = inverse ? anchor : target,
            indexFinal = inverse ? ti : ai;
        insertElement(anchorFinal, !indexFinal ? targetFinal : targetFinal.cloneNode(true), left, inside, !indexFinal);
      }, reverseLoop3);
    }, reverseLoop2);
  }, reverseLoop1);
  return anchors;
}

fn.after = function () {
  return insertSelectors(arguments, this, false, false, false, true, true);
};

fn.append = function () {
  return insertSelectors(arguments, this, false, false, true);
};

fn.appendTo = function (selector) {
  return insertSelectors(arguments, this, true, false, true);
};

fn.before = function () {
  return insertSelectors(arguments, this, false, true);
};

fn.insertAfter = function (selector) {
  return insertSelectors(arguments, this, true, false, false, false, false, true);
};

fn.insertBefore = function (selector) {
  return insertSelectors(arguments, this, true, true);
};

fn.prepend = function () {
  return insertSelectors(arguments, this, false, true, true, true, true);
};

fn.prependTo = function (selector) {
  return insertSelectors(arguments, this, true, true, true, false, false, true);
};

fn.replaceWith = function (selector) {
  return this.before(selector).remove();
};

fn.replaceAll = function (selector) {
  cash(selector).replaceWith(this);
  return this;
};

fn.wrapAll = function (selector) {
  var structure = cash(selector),
      wrapper = structure[0];

  while (wrapper.children.length) {
    wrapper = wrapper.firstElementChild;
  }

  this.first().before(structure);
  return this.appendTo(wrapper);
};

fn.wrap = function (selector) {
  return this.each(function (i, ele) {
    var wrapper = cash(selector)[0];
    cash(ele).wrapAll(!i ? wrapper : wrapper.cloneNode(true));
  });
};

fn.wrapInner = function (selector) {
  return this.each(function (i, ele) {
    var $ele = cash(ele),
        contents = $ele.contents();
    contents.length ? contents.wrapAll(selector) : $ele.append(selector);
  });
};

fn.has = function (selector) {
  var comparator = isString(selector) ? function (i, ele) {
    return find(selector, ele).length;
  } : function (i, ele) {
    return ele.contains(selector);
  };
  return this.filter(comparator);
};

fn.is = function (comparator) {
  var compare = getCompareFunction(comparator);
  return some.call(this, function (ele, i) {
    return compare.call(ele, i, ele);
  });
};

fn.next = function (comparator, _all, _until) {
  return filtered(cash(unique(pluck(this, 'nextElementSibling', _all, _until))), comparator);
};

fn.nextAll = function (comparator) {
  return this.next(comparator, true);
};

fn.nextUntil = function (until, comparator) {
  return this.next(comparator, true, until);
};

fn.not = function (comparator) {
  var compare = getCompareFunction(comparator);
  return this.filter(function (i, ele) {
    return (!isString(comparator) || isElement(ele)) && !compare.call(ele, i, ele);
  });
};

fn.parent = function (comparator) {
  return filtered(cash(unique(pluck(this, 'parentNode'))), comparator);
};

fn.index = function (selector) {
  var child = selector ? cash(selector)[0] : this[0],
      collection = selector ? this : cash(child).parent().children();
  return indexOf.call(collection, child);
};

fn.closest = function (comparator) {
  var filtered = this.filter(comparator);
  if (filtered.length) return filtered;
  var $parent = this.parent();
  if (!$parent.length) return filtered;
  return $parent.closest(comparator);
};

fn.parents = function (comparator, _until) {
  return filtered(cash(unique(pluck(this, 'parentElement', true, _until))), comparator);
};

fn.parentsUntil = function (until, comparator) {
  return this.parents(comparator, until);
};

fn.prev = function (comparator, _all, _until) {
  return filtered(cash(unique(pluck(this, 'previousElementSibling', _all, _until))), comparator);
};

fn.prevAll = function (comparator) {
  return this.prev(comparator, true);
};

fn.prevUntil = function (until, comparator) {
  return this.prev(comparator, true, until);
};

fn.siblings = function (comparator) {
  return filtered(cash(unique(pluck(this, function (ele) {
    return cash(ele).parent().children().not(ele);
  }))), comparator);
}; // @optional ./children.ts
// @optional ./closest.ts
// @optional ./contents.ts
// @optional ./find.ts
// @optional ./has.ts
// @optional ./is.ts
// @optional ./next.ts
// @optional ./next_all.ts
// @optional ./next_until.ts
// @optional ./not.ts
// @optional ./parent.ts
// @optional ./parents.ts
// @optional ./parents_until.ts
// @optional ./prev.ts
// @optional ./prev_all.ts
// @optional ./prev_until.ts
// @optional ./siblings.ts
// @optional attributes/index.ts
// @optional collection/index.ts
// @optional css/index.ts
// @optional data/index.ts
// @optional dimensions/index.ts
// @optional effects/index.ts
// @optional events/index.ts
// @optional forms/index.ts
// @optional manipulation/index.ts
// @optional offset/index.ts
// @optional traversal/index.ts
// @require core/index.ts
// @priority -100
// @require ./cash.ts
// @require ./variables.ts


if (true) {
  // Node.js
  module.exports = cash;
} else {}
})();

/***/ }),

/***/ "./node_modules/lodash._reinterpolate/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/lodash._reinterpolate/index.js ***!
  \*****************************************************/
/***/ (function(module) {

/**
 * lodash 3.0.0 (Custom Build) <https://lodash.com/>
 * Build: `lodash modern modularize exports="npm" -o ./`
 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.7.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */

/** Used to match template delimiters. */
var reInterpolate = /<%=([\s\S]+?)%>/g;

module.exports = reInterpolate;


/***/ }),

/***/ "./node_modules/lodash.template/index.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash.template/index.js ***!
  \***********************************************/
/***/ (function(module, exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);
/**
 * Lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
var reInterpolate = __webpack_require__(/*! lodash._reinterpolate */ "./node_modules/lodash._reinterpolate/index.js"),
    templateSettings = __webpack_require__(/*! lodash.templatesettings */ "./node_modules/lodash.templatesettings/index.js");

/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    asyncTag = '[object AsyncFunction]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    domExcTag = '[object DOMException]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    nullTag = '[object Null]',
    objectTag = '[object Object]',
    proxyTag = '[object Proxy]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    undefinedTag = '[object Undefined]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to match empty string literals in compiled template source. */
var reEmptyStringLeading = /\b__p \+= '';/g,
    reEmptyStringMiddle = /\b(__p \+=) '' \+/g,
    reEmptyStringTrailing = /(__e\(.*?\)|\b__t\)) \+\n'';/g;

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/**
 * Used to match
 * [ES template delimiters](http://ecma-international.org/ecma-262/7.0/#sec-template-literal-lexical-components).
 */
var reEsTemplate = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/** Used to ensure capturing order of template delimiters. */
var reNoMatch = /($^)/;

/** Used to match unescaped characters in compiled string literals. */
var reUnescapedString = /['\n\r\u2028\u2029\\]/g;

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/** Used to escape characters for inclusion in compiled string literals. */
var stringEscapes = {
  '\\': '\\',
  "'": "'",
  '\n': 'n',
  '\r': 'r',
  '\u2028': 'u2028',
  '\u2029': 'u2029'
};

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof __webpack_require__.g == 'object' && __webpack_require__.g && __webpack_require__.g.Object === Object && __webpack_require__.g;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && "object" == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

/**
 * The base implementation of `_.values` and `_.valuesIn` which creates an
 * array of `object` property values corresponding to the property names
 * of `props`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} props The property names to get values for.
 * @returns {Object} Returns the array of property values.
 */
function baseValues(object, props) {
  return arrayMap(props, function(key) {
    return object[key];
  });
}

/**
 * Used by `_.template` to escape characters for inclusion in compiled string literals.
 *
 * @private
 * @param {string} chr The matched character to escape.
 * @returns {string} Returns the escaped character.
 */
function escapeStringChar(chr) {
  return '\\' + stringEscapes[chr];
}

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    Symbol = root.Symbol,
    getPrototype = overArg(Object.getPrototypeOf, Object),
    propertyIsEnumerable = objectProto.propertyIsEnumerable,
    symToStringTag = Symbol ? Symbol.toStringTag : undefined;

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
    nativeKeys = overArg(Object.keys, Object),
    nativeMax = Math.max,
    nativeNow = Date.now;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return setToString(overRest(func, start, identity), func + '');
}

/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !defineProperty ? identity : function(func, string) {
  return defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant(string),
    'writable': true
  });
};

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}

/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */
function createAssigner(assigner) {
  return baseRest(function(object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;

    customizer = (assigner.length > 3 && typeof customizer == 'function')
      ? (length--, customizer)
      : undefined;

    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}

/**
 * Used by `_.defaults` to customize its `_.assignIn` use to assign properties
 * of source objects to the destination object for all destination properties
 * that resolve to `undefined`.
 *
 * @private
 * @param {*} objValue The destination value.
 * @param {*} srcValue The source value.
 * @param {string} key The key of the property to assign.
 * @param {Object} object The parent object of `objValue`.
 * @returns {*} Returns the value to assign.
 */
function customDefaultsAssignIn(objValue, srcValue, key, object) {
  if (objValue === undefined ||
      (eq(objValue, objectProto[key]) && !hasOwnProperty.call(object, key))) {
    return srcValue;
  }
  return objValue;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike(object) && isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq(object[index], value);
  }
  return false;
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = shortOut(baseSetToString);

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
  var count = 0,
      lastCalled = 0;

  return function() {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

/**
 * Checks if `value` is an `Error`, `EvalError`, `RangeError`, `ReferenceError`,
 * `SyntaxError`, `TypeError`, or `URIError` object.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an error object, else `false`.
 * @example
 *
 * _.isError(new Error);
 * // => true
 *
 * _.isError(Error);
 * // => false
 */
function isError(value) {
  if (!isObjectLike(value)) {
    return false;
  }
  var tag = baseGetTag(value);
  return tag == errorTag || tag == domExcTag ||
    (typeof value.message == 'string' && typeof value.name == 'string' && !isPlainObject(value));
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

/**
 * This method is like `_.assignIn` except that it accepts `customizer`
 * which is invoked to produce the assigned values. If `customizer` returns
 * `undefined`, assignment is handled by the method instead. The `customizer`
 * is invoked with five arguments: (objValue, srcValue, key, object, source).
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @alias extendWith
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} sources The source objects.
 * @param {Function} [customizer] The function to customize assigned values.
 * @returns {Object} Returns `object`.
 * @see _.assignWith
 * @example
 *
 * function customizer(objValue, srcValue) {
 *   return _.isUndefined(objValue) ? srcValue : objValue;
 * }
 *
 * var defaults = _.partialRight(_.assignInWith, customizer);
 *
 * defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
 * // => { 'a': 1, 'b': 2 }
 */
var assignInWith = createAssigner(function(object, source, srcIndex, customizer) {
  copyObject(source, keysIn(source), object, customizer);
});

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

/**
 * Creates a compiled template function that can interpolate data properties
 * in "interpolate" delimiters, HTML-escape interpolated data properties in
 * "escape" delimiters, and execute JavaScript in "evaluate" delimiters. Data
 * properties may be accessed as free variables in the template. If a setting
 * object is given, it takes precedence over `_.templateSettings` values.
 *
 * **Note:** In the development build `_.template` utilizes
 * [sourceURLs](http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/#toc-sourceurl)
 * for easier debugging.
 *
 * For more information on precompiling templates see
 * [lodash's custom builds documentation](https://lodash.com/custom-builds).
 *
 * For more information on Chrome extension sandboxes see
 * [Chrome's extensions documentation](https://developer.chrome.com/extensions/sandboxingEval).
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category String
 * @param {string} [string=''] The template string.
 * @param {Object} [options={}] The options object.
 * @param {RegExp} [options.escape=_.templateSettings.escape]
 *  The HTML "escape" delimiter.
 * @param {RegExp} [options.evaluate=_.templateSettings.evaluate]
 *  The "evaluate" delimiter.
 * @param {Object} [options.imports=_.templateSettings.imports]
 *  An object to import into the template as free variables.
 * @param {RegExp} [options.interpolate=_.templateSettings.interpolate]
 *  The "interpolate" delimiter.
 * @param {string} [options.sourceURL='templateSources[n]']
 *  The sourceURL of the compiled template.
 * @param {string} [options.variable='obj']
 *  The data object variable name.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {Function} Returns the compiled template function.
 * @example
 *
 * // Use the "interpolate" delimiter to create a compiled template.
 * var compiled = _.template('hello <%= user %>!');
 * compiled({ 'user': 'fred' });
 * // => 'hello fred!'
 *
 * // Use the HTML "escape" delimiter to escape data property values.
 * var compiled = _.template('<b><%- value %></b>');
 * compiled({ 'value': '<script>' });
 * // => '<b>&lt;script&gt;</b>'
 *
 * // Use the "evaluate" delimiter to execute JavaScript and generate HTML.
 * var compiled = _.template('<% _.forEach(users, function(user) { %><li><%- user %></li><% }); %>');
 * compiled({ 'users': ['fred', 'barney'] });
 * // => '<li>fred</li><li>barney</li>'
 *
 * // Use the internal `print` function in "evaluate" delimiters.
 * var compiled = _.template('<% print("hello " + user); %>!');
 * compiled({ 'user': 'barney' });
 * // => 'hello barney!'
 *
 * // Use the ES template literal delimiter as an "interpolate" delimiter.
 * // Disable support by replacing the "interpolate" delimiter.
 * var compiled = _.template('hello ${ user }!');
 * compiled({ 'user': 'pebbles' });
 * // => 'hello pebbles!'
 *
 * // Use backslashes to treat delimiters as plain text.
 * var compiled = _.template('<%= "\\<%- value %\\>" %>');
 * compiled({ 'value': 'ignored' });
 * // => '<%- value %>'
 *
 * // Use the `imports` option to import `jQuery` as `jq`.
 * var text = '<% jq.each(users, function(user) { %><li><%- user %></li><% }); %>';
 * var compiled = _.template(text, { 'imports': { 'jq': jQuery } });
 * compiled({ 'users': ['fred', 'barney'] });
 * // => '<li>fred</li><li>barney</li>'
 *
 * // Use the `sourceURL` option to specify a custom sourceURL for the template.
 * var compiled = _.template('hello <%= user %>!', { 'sourceURL': '/basic/greeting.jst' });
 * compiled(data);
 * // => Find the source of "greeting.jst" under the Sources tab or Resources panel of the web inspector.
 *
 * // Use the `variable` option to ensure a with-statement isn't used in the compiled template.
 * var compiled = _.template('hi <%= data.user %>!', { 'variable': 'data' });
 * compiled.source;
 * // => function(data) {
 * //   var __t, __p = '';
 * //   __p += 'hi ' + ((__t = ( data.user )) == null ? '' : __t) + '!';
 * //   return __p;
 * // }
 *
 * // Use custom template delimiters.
 * _.templateSettings.interpolate = /{{([\s\S]+?)}}/g;
 * var compiled = _.template('hello {{ user }}!');
 * compiled({ 'user': 'mustache' });
 * // => 'hello mustache!'
 *
 * // Use the `source` property to inline compiled templates for meaningful
 * // line numbers in error messages and stack traces.
 * fs.writeFileSync(path.join(process.cwd(), 'jst.js'), '\
 *   var JST = {\
 *     "main": ' + _.template(mainText).source + '\
 *   };\
 * ');
 */
function template(string, options, guard) {
  // Based on John Resig's `tmpl` implementation
  // (http://ejohn.org/blog/javascript-micro-templating/)
  // and Laura Doktorova's doT.js (https://github.com/olado/doT).
  var settings = templateSettings.imports._.templateSettings || templateSettings;

  if (guard && isIterateeCall(string, options, guard)) {
    options = undefined;
  }
  string = toString(string);
  options = assignInWith({}, options, settings, customDefaultsAssignIn);

  var imports = assignInWith({}, options.imports, settings.imports, customDefaultsAssignIn),
      importsKeys = keys(imports),
      importsValues = baseValues(imports, importsKeys);

  var isEscaping,
      isEvaluating,
      index = 0,
      interpolate = options.interpolate || reNoMatch,
      source = "__p += '";

  // Compile the regexp to match each delimiter.
  var reDelimiters = RegExp(
    (options.escape || reNoMatch).source + '|' +
    interpolate.source + '|' +
    (interpolate === reInterpolate ? reEsTemplate : reNoMatch).source + '|' +
    (options.evaluate || reNoMatch).source + '|$'
  , 'g');

  // Use a sourceURL for easier debugging.
  // The sourceURL gets injected into the source that's eval-ed, so be careful
  // with lookup (in case of e.g. prototype pollution), and strip newlines if any.
  // A newline wouldn't be a valid sourceURL anyway, and it'd enable code injection.
  var sourceURL = hasOwnProperty.call(options, 'sourceURL')
    ? ('//# sourceURL=' +
       (options.sourceURL + '').replace(/[\r\n]/g, ' ') +
       '\n')
    : '';

  string.replace(reDelimiters, function(match, escapeValue, interpolateValue, esTemplateValue, evaluateValue, offset) {
    interpolateValue || (interpolateValue = esTemplateValue);

    // Escape characters that can't be included in string literals.
    source += string.slice(index, offset).replace(reUnescapedString, escapeStringChar);

    // Replace delimiters with snippets.
    if (escapeValue) {
      isEscaping = true;
      source += "' +\n__e(" + escapeValue + ") +\n'";
    }
    if (evaluateValue) {
      isEvaluating = true;
      source += "';\n" + evaluateValue + ";\n__p += '";
    }
    if (interpolateValue) {
      source += "' +\n((__t = (" + interpolateValue + ")) == null ? '' : __t) +\n'";
    }
    index = offset + match.length;

    // The JS engine embedded in Adobe products needs `match` returned in
    // order to produce the correct `offset` value.
    return match;
  });

  source += "';\n";

  // If `variable` is not specified wrap a with-statement around the generated
  // code to add the data object to the top of the scope chain.
  // Like with sourceURL, we take care to not check the option's prototype,
  // as this configuration is a code injection vector.
  var variable = hasOwnProperty.call(options, 'variable') && options.variable;
  if (!variable) {
    source = 'with (obj) {\n' + source + '\n}\n';
  }
  // Cleanup code by stripping empty strings.
  source = (isEvaluating ? source.replace(reEmptyStringLeading, '') : source)
    .replace(reEmptyStringMiddle, '$1')
    .replace(reEmptyStringTrailing, '$1;');

  // Frame code as the function body.
  source = 'function(' + (variable || 'obj') + ') {\n' +
    (variable
      ? ''
      : 'obj || (obj = {});\n'
    ) +
    "var __t, __p = ''" +
    (isEscaping
       ? ', __e = _.escape'
       : ''
    ) +
    (isEvaluating
      ? ', __j = Array.prototype.join;\n' +
        "function print() { __p += __j.call(arguments, '') }\n"
      : ';\n'
    ) +
    source +
    'return __p\n}';

  var result = attempt(function() {
    return Function(importsKeys, sourceURL + 'return ' + source)
      .apply(undefined, importsValues);
  });

  // Provide the compiled function's source by its `toString` method or
  // the `source` property as a convenience for inlining compiled templates.
  result.source = source;
  if (isError(result)) {
    throw result;
  }
  return result;
}

/**
 * Attempts to invoke `func`, returning either the result or the caught error
 * object. Any additional arguments are provided to `func` when it's invoked.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Util
 * @param {Function} func The function to attempt.
 * @param {...*} [args] The arguments to invoke `func` with.
 * @returns {*} Returns the `func` result or error object.
 * @example
 *
 * // Avoid throwing errors for invalid selectors.
 * var elements = _.attempt(function(selector) {
 *   return document.querySelectorAll(selector);
 * }, '>_>');
 *
 * if (_.isError(elements)) {
 *   elements = [];
 * }
 */
var attempt = baseRest(function(func, args) {
  try {
    return apply(func, undefined, args);
  } catch (e) {
    return isError(e) ? e : new Error(e);
  }
});

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = template;


/***/ }),

/***/ "./node_modules/lodash.templatesettings/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/lodash.templatesettings/index.js ***!
  \*******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * Lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
var reInterpolate = __webpack_require__(/*! lodash._reinterpolate */ "./node_modules/lodash._reinterpolate/index.js");

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    symbolTag = '[object Symbol]',
    undefinedTag = '[object Undefined]';

/** Used to match HTML entities and HTML characters. */
var reUnescapedHtml = /[&<>"']/g,
    reHasUnescapedHtml = RegExp(reUnescapedHtml.source);

/** Used to match template delimiters. */
var reEscape = /<%-([\s\S]+?)%>/g,
    reEvaluate = /<%([\s\S]+?)%>/g;

/** Used to map characters to HTML entities. */
var htmlEscapes = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;'
};

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof __webpack_require__.g == 'object' && __webpack_require__.g && __webpack_require__.g.Object === Object && __webpack_require__.g;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

/**
 * The base implementation of `_.propertyOf` without support for deep paths.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyOf(object) {
  return function(key) {
    return object == null ? undefined : object[key];
  };
}

/**
 * Used by `_.escape` to convert characters to HTML entities.
 *
 * @private
 * @param {string} chr The matched character to escape.
 * @returns {string} Returns the escaped character.
 */
var escapeHtmlChar = basePropertyOf(htmlEscapes);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var Symbol = root.Symbol,
    symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * By default, the template delimiters used by lodash are like those in
 * embedded Ruby (ERB) as well as ES2015 template strings. Change the
 * following template settings to use alternative delimiters.
 *
 * @static
 * @memberOf _
 * @type {Object}
 */
var templateSettings = {

  /**
   * Used to detect `data` property values to be HTML-escaped.
   *
   * @memberOf _.templateSettings
   * @type {RegExp}
   */
  'escape': reEscape,

  /**
   * Used to detect code to be evaluated.
   *
   * @memberOf _.templateSettings
   * @type {RegExp}
   */
  'evaluate': reEvaluate,

  /**
   * Used to detect `data` property values to inject.
   *
   * @memberOf _.templateSettings
   * @type {RegExp}
   */
  'interpolate': reInterpolate,

  /**
   * Used to reference the data object in the template text.
   *
   * @memberOf _.templateSettings
   * @type {string}
   */
  'variable': '',

  /**
   * Used to import variables into the compiled template.
   *
   * @memberOf _.templateSettings
   * @type {Object}
   */
  'imports': {

    /**
     * A reference to the `lodash` function.
     *
     * @memberOf _.templateSettings.imports
     * @type {Function}
     */
    '_': { 'escape': escape }
  }
};

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

/**
 * Converts the characters "&", "<", ">", '"', and "'" in `string` to their
 * corresponding HTML entities.
 *
 * **Note:** No other characters are escaped. To escape additional
 * characters use a third-party library like [_he_](https://mths.be/he).
 *
 * Though the ">" character is escaped for symmetry, characters like
 * ">" and "/" don't need escaping in HTML and have no special meaning
 * unless they're part of a tag or unquoted attribute value. See
 * [Mathias Bynens's article](https://mathiasbynens.be/notes/ambiguous-ampersands)
 * (under "semi-related fun fact") for more details.
 *
 * When working with HTML you should always
 * [quote attribute values](http://wonko.com/post/html-escaping) to reduce
 * XSS vectors.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category String
 * @param {string} [string=''] The string to escape.
 * @returns {string} Returns the escaped string.
 * @example
 *
 * _.escape('fred, barney, & pebbles');
 * // => 'fred, barney, &amp; pebbles'
 */
function escape(string) {
  string = toString(string);
  return (string && reHasUnescapedHtml.test(string))
    ? string.replace(reUnescapedHtml, escapeHtmlChar)
    : string;
}

module.exports = templateSettings;


/***/ }),

/***/ "grapesjs":
/*!***************************!*\
  !*** external "grapesjs" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_grapesjs__;

/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/***/ (function(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jquery__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	!function() {
/******/ 		__webpack_require__.nmd = function(module) {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!**************************!*\
  !*** ./example/index.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./init */ "./example/init.js");
/* harmony import */ var _bootstrap4__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bootstrap4 */ "./example/bootstrap4.js");
/* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation */ "./example/foundation.js");
/* harmony import */ var _googlemd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./googlemd */ "./example/googlemd.js");





if (window.location.href.indexOf('css=foundation') > 0) {
  console.log('Foundation CSS');
  (0,_init__WEBPACK_IMPORTED_MODULE_0__.default)(_foundation__WEBPACK_IMPORTED_MODULE_2__.default);
} else if (window.location.href.indexOf('css=materialize') > 0) {
  console.log('Google Materialize CSS');
  (0,_init__WEBPACK_IMPORTED_MODULE_0__.default)(_googlemd__WEBPACK_IMPORTED_MODULE_3__.default);
} else {
  console.log('Bootstrap 4 CSS');
  (0,_init__WEBPACK_IMPORTED_MODULE_0__.default)(_bootstrap4__WEBPACK_IMPORTED_MODULE_1__.default);
}
}();
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=index.js.map