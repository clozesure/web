//Get price
const price = document.getElementById("price");
value = localStorage.getItem('price');
price.innerHTML = '£' + value;

//Get property details
const first_line = document.getElementById("first_line");
const second_line = document.getElementById("second_line");
const post_town = document.getElementById("post_town");
const postcode = document.getElementById("postcode");
const sale_price = document.getElementById("sale_price");

pafl = localStorage.getItem('pafl');
pasl = localStorage.getItem('pasl');
papt = localStorage.getItem('papt');
p_code = localStorage.getItem('papc');
s_price = localStorage.getItem('sale_price');
sp_num = localStorage.getItem('sp_num');

first_line.innerHTML = pafl;
second_line.innerHTML = pasl;
post_town.innerHTML = papt;
postcode.innerHTML = p_code;
sale_price.innerHTML = '£' + s_price;

//Get form fields
const o1fn = document.getElementById("o1fn");
const o1ln = document.getElementById("o1ln");
const o1Email = document.getElementById("o1Email");
const o1NI = document.getElementById("o1NI");
const o1Phone = document.getElementById("o1Phone");
const prinAd = document.getElementById("prinAd");
const b1fn = document.getElementById("b1fn");
const b1ln = document.getElementById("b1ln");
const b1Email = document.getElementById("b1Email");
const b1Phone = document.getElementById("b1Phone");
const applybtn = document.getElementById("btnApply");
const cancelbtn = document.getElementById("btnCancel");
const ocn = document.getElementById("ocn");
const occ = document.getElementById("occ");
const ocnEmail = document.getElementById("ocnEmail");
const exchDate = document.getElementById("exchDate");
const compDate = document.getElementById("compDate");
const oean = document.getElementById("oean");
const oeac = document.getElementById("oean");
const oeanEmail = document.getElementById("oeanEmail");
const regEmail = document.getElementById("regEmail");
const confCheck = document.getElementById("confCheck");

//Show or hide Payment
const payTab = document.getElementById("payTab");

max_value = parseInt(localStorage.getItem('max_value'));
sp_num = parseInt(localStorage.getItem('sp_num'));

if (sp_num >= max_value) {
    payTab.style.display="none";
}

// regEmail.value = o1Email.value;

cancelbtn.onclick = function() {
    window.document.location = './index.html';
}


applybtn.onclick = function(){

    const own1fn = o1fn.value;
    const own1ln = o1ln.value;
    const own1Email = o1Email.value;
    const own1NI = o1NI.value;
    const own1Phone = o1Phone.value;
    const pAddress = prinAd.value;
    const buy1fn = b1fn.value;
    const buy1ln = b1ln.value;
    const buyEmail = b1Email.value;
    const buyPhone = b1Phone.value;
    const owncn = ocn.value;
    const owncc = occ.value;
    const owncnEmail = ocnEmail.value;
    const eDate = exchDate.value;
    const cDate = compDate.value;
    const ownean = oean.value;
    const owneac = oeac.value;
    const owneanEmail = oeanEmail.value;

    var objToday = new Date(),
        weekday = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'),
        dayOfWeek = weekday[objToday.getDay()],
        domEnder = function() { var a = objToday; if (/1/.test(parseInt((a + "").charAt(0)))) return "th"; a = parseInt((a + "").charAt(1)); return 1 == a ? "st" : 2 == a ? "nd" : 3 == a ? "rd" : "th" }(),
        dayOfMonth = today + ( objToday.getDate() < 10) ? '0' + objToday.getDate() + domEnder : objToday.getDate() + domEnder,
        months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'),
        curMonth = months[objToday.getMonth()],
        curYear = objToday.getFullYear(),
        curHour = objToday.getHours() > 12 ? objToday.getHours() - 12 : (objToday.getHours() < 10 ? "0" + objToday.getHours() : objToday.getHours()),
        curMinute = objToday.getMinutes() < 10 ? "0" + objToday.getMinutes() : objToday.getMinutes(),
        curSeconds = objToday.getSeconds() < 10 ? "0" + objToday.getSeconds() : objToday.getSeconds(),
        curMeridiem = objToday.getHours() > 12 ? "PM" : "AM";
    var today = dayOfWeek + " " + dayOfMonth + " of " + curMonth + ", " + curYear;
    localStorage.setItem('app_date', today)

    var desiredMaxLength = 8
    var randomNumber = '';
    for (var i = 0; i < desiredMaxLength; i++) {
    randomNumber += Math.floor(Math.random() * 10);
    }

    localStorage.setItem('o1fn', own1fn);
    localStorage.setItem('o1ln', own1ln);
    localStorage.setItem('o1Email', own1Email);
    localStorage.setItem('o1NI', own1NI);
    localStorage.setItem('o1Phone', own1Phone);
    localStorage.setItem('prinAd', pAddress);
    localStorage.setItem('b1fn', buy1fn);
    localStorage.setItem('b1ln', buy1ln);
    localStorage.setItem('b1Email', buyEmail);
    localStorage.setItem('b1Phone', buyPhone);
    localStorage.setItem('ocn', owncn);
    localStorage.setItem('occ', owncc);
    localStorage.setItem('ocnEmail', owncnEmail);
    localStorage.setItem('exchDate', eDate);
    localStorage.setItem('compDate', cDate);
    localStorage.setItem('oean', ownean);
    localStorage.setItem('oeac', owneac);
    localStorage.setItem('oeanEmail', owneanEmail);
    localStorage.setItem('app_num', randomNumber);

    var $validator = $('.card-wizard form').validate({
        highlight: function(element) {
            $(element).closest('.input-group').removeClass('has-success').addClass('has-danger');
            }
        });
    var $valid = $('.card-wizard form').valid();
    if(!$valid) {
        $validator.focusInvalid();
        demo.showNotification('top', 'center');

        return false;
    }
    window.document.location = './profile.html';

}

demo = {
    initDateTimePicker: function() {
        if($(".datetimepicker").length != 0){
          $('.datetimepicker').datetimepicker({
              icons: {
                  time: "now-ui-icons tech_watch-time",
                  date: "now-ui-icons ui-1_calendar-60",
                  up: "fa fa-chevron-up",
                  down: "fa fa-chevron-down",
                  previous: 'now-ui-icons arrows-1_minimal-left',
                  next: 'now-ui-icons arrows-1_minimal-right',
                  today: 'fa fa-screenshot',
                  clear: 'fa fa-trash',
                  close: 'fa fa-remove'
              }
          });
        }

        if($(".datepicker").length != 0){
          $('.datepicker').datetimepicker({
             format: 'DD/MM/YYYY',
             icons: {
                 time: "now-ui-icons tech_watch-time",
                 date: "now-ui-icons ui-1_calendar-60",
                 up: "fa fa-chevron-up",
                 down: "fa fa-chevron-down",
                 previous: 'now-ui-icons arrows-1_minimal-left',
                 next: 'now-ui-icons arrows-1_minimal-right',
                 today: 'fa fa-screenshot',
                 clear: 'fa fa-trash',
                 close: 'fa fa-remove'
             }
          });
        }

        if($(".timepicker").length != 0){
          $('.timepicker').datetimepicker({
  //          format: 'H:mm',    // use this format if you want the 24hours timepicker
             format: 'h:mm A',    //use this format if you want the 12hours timpiecker with AM/PM toggle
             icons: {
                 time: "now-ui-icons tech_watch-time",
                 date: "now-ui-icons ui-1_calendar-60",
                 up: "fa fa-chevron-up",
                 down: "fa fa-chevron-down",
                 previous: 'now-ui-icons arrows-1_minimal-left',
                 next: 'now-ui-icons arrows-1_minimal-right',
                 today: 'fa fa-screenshot',
                 clear: 'fa fa-trash',
                 close: 'fa fa-remove'
             }
          });
        }
    },

    initNowUiWizard: function(){
        // Code for the Validator
        var $validator = $('.card-wizard form').validate({
              rules: {
                o1fn: {
                  required: true,
                  minlength: 2
                },
                o1ln: {
                  required: true,
                  minlength: 2
                },
                o1Email: {
                  required: true,
                  minlength: 3
                },
                b1fn: {
                  required: true,
                  minlength: 2
                },
                b1ln: {
                  required: true,
                  minlength: 2
                },
                'confCheck[]': {
                    required: true,
                    minlength: 1
                },
            },
            messages: {
                'confCheck[]': "  Required - "
            },
            highlight: function(element) {
                $(element).closest('.input-group').removeClass('has-success').addClass('has-danger');
            },
            success: function(element) {
                $(element).closest('.input-group').removeClass('has-danger').addClass('has-success');
            }
        });


        // Wizard Initialization
        $('.card-wizard').bootstrapWizard({
            'tabClass': 'nav nav-pills',
            'nextSelector': '.btn-next',
            'previousSelector': '.btn-previous',

            onNext: function(tab, navigation, index) {
                var $valid = $('.card-wizard form').valid();
                if(!$valid) {
                    $validator.focusInvalid();
                    demo.showNotification('top', 'center');
                    return false;
                }
            },

            onInit : function(tab, navigation, index){
                //check number of tabs and fill the entire row
                var $total = navigation.find('li').length;
                var $wizard = navigation.closest('.card-wizard');

                first_li = navigation.find('li:first-child a').html();
                $moving_div = $("<div class='moving-tab'></div>");
                $moving_div.append(first_li);
                $('.card-wizard .wizard-navigation').append($moving_div);



                refreshAnimation($wizard, index);

                $('.moving-tab').css('transition','transform 0s');
           },

            onTabClick : function(tab, navigation, index){
                var $valid = $('.card-wizard form').valid();

                if(!$valid){
                    $validator.focusInvalid();
                    demo.showNotification('top', 'center');
                    return false;
                } else{
                    return true;
                }
            },

            onTabShow: function(tab, navigation, index) {
                var $total = navigation.find('li').length;
                var $current = index+1;

                var $wizard = navigation.closest('.card-wizard');

                // If it's the last tab then hide the last button and show the finish instead
                if($current >= $total) {
                    $($wizard).find('.btn-next').hide();
                    $($wizard).find('.btn-finish').show();
                    $($wizard).find('.btn-cancel').hide();
                } else if($current <= 1) {
                    $($wizard).find('.btn-cancel').show();
                } else {
                    $($wizard).find('.btn-next').show();
                    $($wizard).find('.btn-finish').hide();
                    $($wizard).find('.btn-cancel').hide();
                }

                button_text = navigation.find('li:nth-child(' + $current + ') a').html();

                setTimeout(function(){
                    $('.moving-tab').html(button_text);
                }, 150);

                var checkbox = $('.footer-checkbox');

                if( !index == 0 ){
                    $(checkbox).css({
                        'opacity':'0',
                        'visibility':'hidden',
                        'position':'absolute'
                    });
                } else {
                    $(checkbox).css({
                        'opacity':'1',
                        'visibility':'visible'
                    });
                }

                refreshAnimation($wizard, index);
            }
        });


        // Prepare the preview for profile picture
        $("#wizard-picture").change(function(){
            readURL(this);
        });

        $('[data-toggle="wizard-radio"]').click(function(){
            wizard = $(this).closest('.card-wizard');
            wizard.find('[data-toggle="wizard-radio"]').removeClass('active');
            $(this).addClass('active');
            $(wizard).find('[type="radio"]').removeAttr('checked');
            $(this).find('[type="radio"]').attr('checked','true');
        });

        $('[data-toggle="wizard-checkbox"]').click(function(){
            if( $(this).hasClass('active')){
                $(this).removeClass('active');
                $(this).find('[type="checkbox"]').removeAttr('checked');
            } else {
                $(this).addClass('active');
                $(this).find('[type="checkbox"]').attr('checked','true');
            }
        });

        $('.set-full-height').css('height', 'auto');

         //Function to show image before upload

        function readURL(input) {
            if (input.files && input.files[0]) {
                var reader = new FileReader();

                reader.onload = function (e) {
                    $('#wizardPicturePreview').attr('src', e.target.result).fadeIn('slow');
                }
                reader.readAsDataURL(input.files[0]);
            }
        }

        $(window).resize(function(){
            $('.card-wizard').each(function(){
                $wizard = $(this);

                index = $wizard.bootstrapWizard('currentIndex');
                refreshAnimation($wizard, index);

                $('.moving-tab').css({
                    'transition': 'transform 0s'
                });
            });
        });

        function refreshAnimation($wizard, index){
            $total = $wizard.find('.nav li').length;
            $li_width = 100/$total;

            total_steps = $wizard.find('.nav li').length;
            move_distance = $wizard.find('.nav').width() / total_steps;
            index_temp = index;
            vertical_level = 0;

            mobile_device = $(document).width() < 600 && $total > 3;

            //Stacks icons
            //if(mobile_device){
                //move_distance = $wizard.width() / 2;
                //index_temp = index % 2;
                //$li_width = 50;
            //}

            $wizard.find('.nav li').css('width',$li_width + '%');

            step_width = move_distance;
            move_distance = move_distance * index_temp;

            //$current = index + 1;
            //
            //if($current == 1 || (mobile_device == true && (index % 2 == 0) )){
                //move_distance -= 8;
            //} else if($current == total_steps || (mobile_device == true && (index % 2 == 1))){
            //  //move_distance += 8;
            //}

            if(mobile_device){
                vertical_level = parseInt(index / 2);
                //vertical_level = vertical_level * 38;
            }

            $wizard.find('.moving-tab').css('width', step_width);
            $('.moving-tab').css({
                'transform':'translate3d(' + move_distance + 'px, ' + vertical_level +  'px, 0)',
                'transition': 'all 0.5s cubic-bezier(0.29, 1.42, 0.79, 1)'

            });
        }
    },

    showNotification: function(from, align){
        color = 'info';

        $.notify({
            icon: "now-ui-icons ui-1_bell-53",
            message: "Please complete all the required fields."

        },{
            type: color,
            timer: 4000,
            placement: {
                from: from,
                align: align
            }
        });
    }
};
