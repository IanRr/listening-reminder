var dt = new Date();
if (dt.getUTCDay()===1) {
  var css = document.styleSheets[document.styleSheets.length-1];
  css.insertRule('.UFIAddCommentInput {  color: red!important;');
  css.insertRule('.UFIAddCommentInput::before { content: "Hi! You opted to be reminded not to "; }');
  css.insertRule('.navigationFocus[role=presentation] {  color: red!important;');
  css.insertRule('.navigationFocus[role=presentation]::before { content: "Hi! You opted to be reminded not to "; }');
}
