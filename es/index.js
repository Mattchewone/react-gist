function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
import React from "react";
var Gist = /*#__PURE__*/function (_React$PureComponent) {
  _inheritsLoose(Gist, _React$PureComponent);
  function Gist() {
    return _React$PureComponent.apply(this, arguments) || this;
  }
  var _proto = Gist.prototype;
  _proto.componentDidMount = function componentDidMount() {
    this._updateIframeContent();
  };
  _proto.componentDidUpdate = function componentDidUpdate(_prevProps, _prevState) {
    this._updateIframeContent();
  };
  _proto._defineUrl = function _defineUrl() {
    var _this$props = this.props,
      id = _this$props.id,
      file = _this$props.file;
    var fileArg = file ? "?file=" + file : "";
    return "https://gist.github.com/" + id + ".js" + fileArg;
  };
  _proto._updateIframeContent = function _updateIframeContent() {
    var _this$props2 = this.props,
      id = _this$props2.id,
      file = _this$props2.file;
    var iframe = this.iframeNode;
    var doc = iframe.document;
    if (iframe.contentDocument) doc = iframe.contentDocument;else if (iframe.contentWindow) doc = iframe.contentWindow.document;
    var gistLink = this._defineUrl();
    var gistScript = "<script type=\"text/javascript\" src=\"" + gistLink + "\"></script>";
    var styles = "<style>*{font-size:12px;}</style>";
    var elementId = file ? "gist-" + id + "-" + file : "gist-" + id;
    var resizeScript = "onload=\"parent.document.getElementById('" + elementId + "').style.height=document.body.scrollHeight + 'px'\"";
    var iframeHtml = "<html><head><base target=\"_parent\">" + styles + "</head><body " + resizeScript + ">" + gistScript + "</body></html>";
    doc.open();
    doc.writeln(iframeHtml);
    doc.close();
  };
  _proto.render = function render() {
    var _this = this;
    var _this$props3 = this.props,
      id = _this$props3.id,
      file = _this$props3.file;
    return /*#__PURE__*/React.createElement("iframe", {
      ref: function ref(n) {
        _this.iframeNode = n;
      },
      width: "100%",
      frameBorder: 0,
      id: file ? "gist-" + id + "-" + file : "gist-" + id
    });
  };
  return Gist;
}(React.PureComponent);
export default Gist;