var dt = new Date();

var groups = [
  862008810509325 // GMU
];

var groupId = parseInt(location.pathname.replace('/groups/',''));

if (groups.includes(groupId) && dt.getUTCDay()===5) {
  var css = document.styleSheets[document.styleSheets.length-1];
  css.insertRule('.UFIAddCommentInput {  color: red!important;');
  css.insertRule('.UFIAddCommentInput::before { content: "Hi! You opted to be reminded not to "; }');
  css.insertRule('.navigationFocus[role=presentation] {  color: red!important;');
  css.insertRule('.navigationFocus[role=presentation]::before { content: "Hi! You opted to be reminded not to "; }');
}
