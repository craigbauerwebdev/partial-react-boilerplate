var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LikeButton = function (_React$Component) {
  _inherits(LikeButton, _React$Component);

  function LikeButton(props) {
    _classCallCheck(this, LikeButton);

    var _this = _possibleConstructorReturn(this, (LikeButton.__proto__ || Object.getPrototypeOf(LikeButton)).call(this, props));

    _this.state = { liked: false };
    return _this;
  }

  _createClass(LikeButton, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return React.createElement(
        "div",
        { className: "wrapper" },
        this.state.liked && React.createElement(
          "p",
          null,
          "You liked this."
        ),
        !this.state.liked && React.createElement(
          "button",
          { onClick: function onClick() {
              _this2.setState({ liked: true });
            } },
          "Like"
        ),
        React.createElement(Ext, null)
      );
    }
  }]);

  return LikeButton;
}(React.Component);

var Ext = function (_React$Component2) {
  _inherits(Ext, _React$Component2);

  function Ext() {
    _classCallCheck(this, Ext);

    return _possibleConstructorReturn(this, (Ext.__proto__ || Object.getPrototypeOf(Ext)).apply(this, arguments));
  }

  _createClass(Ext, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "h1",
        null,
        "From EXT cap"
      );
    }
  }]);

  return Ext;
}(React.Component);

var domContainer = document.querySelector('#bmi-calculator');
ReactDOM.render(React.createElement(LikeButton, null), domContainer);