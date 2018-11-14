'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.default = catchErrors;
function catchErrors(_ref) {
  var filename = _ref.filename,
      components = _ref.components,
      imports = _ref.imports;

  var _imports = _slicedToArray(imports, 1),
      React = _imports[0];

  if (!React || !React.Component) {
    throw new Error('imports[0] for react-catch-errors does not look like React.');
  }

  return function returnCatchErrors(ReactClass) {
    //render
    var h_render = ReactClass.prototype.render;
    Object.defineProperty(ReactClass.prototype, 'render', {
      configurable: true,
      value: function tryRender() {
        try {
          return h_render.apply(this, arguments);
        } catch (err) {
          console.error(err);
          return React.createElement('div', { toWhat: 'world' }, err + "");
        }
      }
    });
    //componentWillUpdate
    var h_componentWillUpdate = ReactClass.prototype.componentWillUpdate;
    Object.defineProperty(ReactClass.prototype, 'componentWillUpdate', {
      configurable: true,
      value: function tryRender() {
        try {
          if (!h_componentWillUpdate) return;
          return h_componentWillUpdate.apply(this, arguments);
        } catch (err) {
          console.error(err);
        }
      }
    });
    //componentWillReceiveProps
    var h_componentWillReceiveProps = ReactClass.prototype.componentWillReceiveProps;
    Object.defineProperty(ReactClass.prototype, 'componentWillReceiveProps', {
      configurable: true,
      value: function tryRender() {
        try {
          if (!h_componentWillReceiveProps) return;
          return h_componentWillReceiveProps.apply(this, arguments);
        } catch (err) {
          console.error(err);
        }
      }
    });
    //componentDidUpdate
    var h_componentDidUpdate = ReactClass.prototype.componentDidUpdate;
    Object.defineProperty(ReactClass.prototype, 'componentDidUpdate', {
      configurable: true,
      value: function tryRender() {
        try {
          if (!h_componentDidUpdate) return;
          return h_componentDidUpdate.apply(this, arguments);
        } catch (err) {
          console.error(err);
        }
      }
    });
    //componentWillUnmount
    var h_componentWillUnmount = ReactClass.prototype.componentWillUnmount;
    Object.defineProperty(ReactClass.prototype, 'componentWillUnmount', {
      configurable: true,
      value: function tryRender() {
        try {
          if (!h_componentWillUnmount) return;
          return h_componentWillUnmount.apply(this, arguments);
        } catch (err) {
          console.error(err);
        }
      }
    });
    //componentWillMount
    var h_componentWillMount = ReactClass.prototype.componentWillMount;
    Object.defineProperty(ReactClass.prototype, 'componentWillMount', {
      configurable: true,
      value: function tryRender() {
        try {
          if (!h_componentWillMount) return;
          return h_componentWillMount.apply(this, arguments);
        } catch (err) {
          console.error(err);
        }
      }
    });
    //componentDidMount
    var h_componentDidMount = ReactClass.prototype.componentDidMount;
    Object.defineProperty(ReactClass.prototype, 'componentDidMount', {
      configurable: true,
      value: function tryRender() {
        try {
          if (!h_componentDidMount) return;
          return h_componentDidMount.apply(this, arguments);
        } catch (err) {
          console.error(err);
        }
      }
    });
    return ReactClass;
  };
}
