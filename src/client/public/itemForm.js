"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ItemForm = function (_React$Component) {
    _inherits(ItemForm, _React$Component);

    function ItemForm(props) {
        _classCallCheck(this, ItemForm);

        var _this = _possibleConstructorReturn(this, (ItemForm.__proto__ || Object.getPrototypeOf(ItemForm)).call(this, props));

        _this.state = { item: "" };
        _this.addButtonHandler = _this.addButtonHandler.bind(_this);
        _this.onItemChange = _this.onItemChange.bind(_this);
        return _this;
    }

    _createClass(ItemForm, [{
        key: "addButtonHandler",
        value: function addButtonHandler(e) {
            this.props.addNewItem(this.state.item);
            this.setState({
                "item": ""
            });
        }
    }, {
        key: "onItemChange",
        value: function onItemChange(e) {
            this.setState({
                "item": e.target.value
            });
        }
    }, {
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                { className: "form-inline todo-form" },
                _react2.default.createElement("input", { type: "text", className: "form-control item-input", id: "item-input", onChange: this.onItemChange, value: this.state.item }),
                _react2.default.createElement(
                    "button",
                    { onClick: this.addButtonHandler, className: "btn add-button" },
                    " Add "
                )
            );
        }
    }]);

    return ItemForm;
}(_react2.default.Component);

exports.default = ItemForm;