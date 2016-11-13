$(document).ready(function() {

  $("#driver_p").click(function(){
    var self = $(this);
    var top = self.parent().parent().position().top + self.parent().position().top + self.position().top;
    var left = self.parent().position().left;
    $(".p_area").toggleClass('cd-container--active')
      .offset({top:top+200, left:left});
  });

  $("#driver_c").click(function(){
    var self = $(this);
    var top = self.parent().parent().position().top + self.parent().position().top + self.position().top;
    var left = self.parent().position().left;
    $(".c_area").toggleClass('cd-container--active')
      .offset({top:top+200, left:left});
  });

  $("#driver_m").click(function(){
    var self = $(this);
    var top = self.parent().parent().position().top + self.parent().position().top + self.position().top;
    var left = self.parent().position().left;
    $(".m_area").toggleClass('cd-container--active')
      .offset({top:top+200, left:left});
  });

  $("#driver_b").click(function(){
    var self = $(this);
    var top = self.parent().parent().position().top + self.parent().position().top + self.position().top;
    var left = self.parent().position().left;
    $(".b_area").toggleClass('cd-container--active')
      .offset({top:top+200, left:left});
  });

  $("#driver_e").click(function(){
    var self = $(this);
    var top = self.parent().parent().position().top + self.parent().position().top + self.position().top;
    var left = self.parent().position().left;
    $(".e_area").toggleClass('cd-container--active')
      .offset({top:top+200, left:left});
  });

});
