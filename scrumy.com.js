var lanes = ['todo', 'inprogress', 'verify', 'done'];
$(lanes).each(function(index, lane) {
  var sum = 0;
  $('td[id$="' + lane + '"]').each(function(index, arg) {
    var contents = $(arg).html();
    var re = /\((\d+)h\)/g;
    var match;
    while (match = re.exec(contents)) {
      sum += parseInt(match[1]);
    }
  });
  $('#' + lane + '-header span:first').append(' (' + sum + 'h)');
});
