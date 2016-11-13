function dialog() {

  var dialogBox = $('.dialog'),
      dialogTrigger = $('.dialog__trigger'),
      dialogClose = $('.dialog__close'),
      dialogTitle = $('.dialog__title'),
      dialogContent = $('.dialog__content'),
      dialogAction = $('.dialog__action');

  // Open the dialog
  var lastId = "";
  dialogTrigger.on('click', function(e) {
    var self = $(this);
    var _id = self.attr("id");
    var top  = window.pageYOffset || document.documentElement.scrollTop,
        left = window.pageXOffset || document.documentElement.scrollLeft;

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

    dialogBox.toggleClass('dialog--active')
      .offset({top:top+10, left:left+10});


    $.getJSON( "data/" + self.attr("id") + ".json", function(data) {
        dialogBox.find('.dialog__title').append(data.name +"<p></p>");
        dialogBox.find('.dialog__title_small').append(data.name_e +"<p></p>"+data.b_d+"<p></p>");
        for (var i=0; i< data.image.length; i++) {
          dialogBox.find('.dialog__image').append("<img src=\""+data.image[i]+"\" height=\"100\" width=\"100\"><p></p>");
        }
        dialogBox.find('.dialog__quote').append(data.quote +"<p></p>");
        for (var i=0; i< data.area.length; i++) {
          dialogBox.find('.dialog__descr').append(data.area[i].a+"<p></p>");
        }
        for (var i=0; i< data.paper.length; i++) {
          dialogBox.find('.dialog__descr').append(data.paper[i].pa+"<p></p>");
        }
        for (var i=0; i< data.prize.length; i++) {
          dialogBox.find('.dialog__descr').append(data.prize[i].pr+"<p></p>");
        }
        for (var i=0; i< data.prime.length; i++) {
          dialogBox.find('.dialog__content').append(data.prime[i].achieve+"<p></p>");
        }
        // dialogBox.find('.dialog__content').text(data.prime);
      });

    e.stopPropagation();
  });

  // Close the dialog - click close button
  dialogClose.on('click', function() {
    dialogBox.removeClass('dialog--active');
    dialogBox.find('.dialog__title').text("");
    dialogBox.find('.dialog__title_small').text("");
    dialogBox.find('.dialog__image').text("");
    dialogBox.find('.dialog__quote').text("");
    dialogBox.find('.dialog__descr').text("");
    dialogBox.find('.dialog__content').text("");
  });

  // Close the dialog - press escape key // key#27
  $(document).keyup(function(e) {
    if (e.keyCode === 27) {
      dialogBox.removeClass('dialog--active');
      dialogBox.find('.dialog__title').text("");
      dialogBox.find('.dialog__title_small').text("");
      dialogBox.find('.dialog__image').text("");
      dialogBox.find('.dialog__quote').text("");
      dialogBox.find('.dialog__descr').text("");
      dialogBox.find('.dialog__content').text("");
    }
  });

  // Close dialog - click outside
  $(document).on("click", function(e) {
    if ($(e.target).is(dialogBox) === false &&
        $(e.target).is(dialogTitle) === false &&
        $(e.target).is(dialogContent) === false &&
        $(e.target).is(dialogAction) === false) {
      dialogBox.removeClass("dialog--active");
      dialogBox.find('.dialog__title').text("");
      dialogBox.find('.dialog__title_small').text("");
      dialogBox.find('.dialog__image').text("");
      dialogBox.find('.dialog__quote').text("");
      dialogBox.find('.dialog__descr').text("");
      dialogBox.find('.dialog__content').text("");
    }
  });

};

// Run function when the document has loaded
$(dialog);
