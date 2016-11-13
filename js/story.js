function dialog() {

  var dialogBox = $('.story'),
      dialogTrigger = $('.story__trigger'),
      dialogClose = $('.story__close'),
      dialogTitle = $('.story__title'),
      dialogContent = $('.story__content'),
      dialogAction = $('.story__action');

  // Open the dialog
  var lastId = "";
  dialogTrigger.on('click', function(e) {
    var self = $(this);
    var _id = self.attr("id");
    var top  = window.pageYOffset || document.documentElement.scrollTop,
        left = window.pageXOffset || document.documentElement.scrollLeft;
    // var top = self.parent().position().top + self.position().top;
    // var left = self.parent().position().left + self.position().left;
    // if(lastId === _id) {
    //   // 끄고
    //   dialogBox.removeClass('dialog--active');
    //   // lastId = "";
    //   lastId="";
    // } else {
    //   // 위치를 내 위치로 옮기고
    //   // 내용만 갱신
    //   dialogBox.toggleClass('dialog--active')
    //     .offset({top:top, left:left});
    //   jquery.getJson( 'data/' + self.attr("id") + '.json', function(data) {
    //
    //     dialogBox.find('.dialog__title').text(data.title);
    //   });
    // }

    dialogBox.toggleClass('story--active')
      .offset({top:top, left:left+50});

    $.getJSON( "data/" + self.attr("id") + ".json", function(data) {
        dialogBox.find('.story__title').text(data.name);
        for (var i=0; i< data.prime.length; i++) {
          dialogBox.find('.story__content').append(data.prime[i].achieve+"<p></p>");
        }
        // dialogBox.find('.dialog__content').text(data.prime);
      });

    e.stopPropagation();
  });

  // Close the dialog - click close button
  dialogClose.on('click', function() {
    dialogBox.removeClass('story--active');
    dialogBox.find('.story__title').text("");
    dialogBox.find('.story__content').text("");
  });

  // Close the dialog - press escape key // key#27
  $(document).keyup(function(e) {
    if (e.keyCode === 27) {
      dialogBox.removeClass('story--active');
      dialogBox.find('.story__title').text("");
      dialogBox.find('.story__content').text("");
    }
  });

  // Close dialog - click outside
  $(document).on("click", function(e) {
    if ($(e.target).is(dialogBox) === false &&
        $(e.target).is(dialogTitle) === false &&
        $(e.target).is(dialogContent) === false &&
        $(e.target).is(dialogAction) === false) {
      dialogBox.removeClass("story--active");
      dialogBox.find('.story__title').text("");
      dialogBox.find('.story__content').text("");
    }
  });

};

// Run function when the document has loaded
$(dialog);
