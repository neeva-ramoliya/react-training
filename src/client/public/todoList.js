'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _listItem = require('./listItem.jsx');

var _listItem2 = _interopRequireDefault(_listItem);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TODOList = function (_React$Component) {
    _inherits(TODOList, _React$Component);

    function TODOList(props) {
        _classCallCheck(this, TODOList);

        var _this = _possibleConstructorReturn(this, (TODOList.__proto__ || Object.getPrototypeOf(TODOList)).call(this, props));

        _this.state = { items: props.items };
        _this.removeItemFromList = _this.removeItemFromList.bind(_this);
        return _this;
    }

    _createClass(TODOList, [{
        key: 'removeItemFromList',
        value: function removeItemFromList(itemToRemove) {
            // this.state.items.splice(itemToRemove.state.id,1)
            this.setState({
                items: this.state.items
            });
            // this.render();

            var node = _reactDom2.default.findDOMNode(itemToRemove);
            _reactDom2.default.unmountComponentAtNode(node);
            // $(node).remove();
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var listItems = this.state.items.map(function (item, index) {
                return _react2.default.createElement(_listItem2.default, { id: index, value: item, removeItem: _this2.removeItemFromList });
            });
            return _react2.default.createElement(
                'ul',
                { className: 'list-group todo-list' },
                listItems
            );
        }
    }]);

    return TODOList;
}(_react2.default.Component);

exports.default = TODOList;