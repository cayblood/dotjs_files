jQuery(document).ready(function() { 
  function displayColumnSums() {
    var lanes = {'todo': 'To Do', 'inprogress': 'In Progress', 'verify': 'Verify', 'done': 'Done'};
    $.each(lanes, function(lane, lane_title) {
      var sum = 0;
      $('td[id$="' + lane + '"]').each(function(index, arg) {
        var contents = $(arg).html();
        var re = /\((\d+)h\)/g;
        var match;
        while (match = re.exec(contents)) {
          sum += parseInt(match[1]);
        }
      });
      $('#' + lane + '-header span:first').html(lane_title + ' (' + sum + 'h)');
    });
  };
    
  displayColumnSums();
  t = setInterval(displayColumnSums, 2000);
});
