$(document).ready(function() {

    var controller = new ScrollMagic;

    var subjectEntry = 'img/subject-entry.cdbace09.png',
        subject0 = 'img/d1.9419e082.png',
        subject90 = 'img/d1-90.c690d3fb.png';

    var spiritClass = '.js-subject';
    var $spirit = $(spiritClass);

    var pinAnim = (new TimelineMax).add([TweenMax.to(spiritClass, 1, {
        left: '58px',
        top: '142px'
    })]).add([TweenMax.to(spiritClass, 1, {
        left: '56px',
        top: '140px',
        onStart: function() {
            $spirit.attr('src', subject90)
        }
    })]).add([TweenMax.to(spiritClass, 1, {
        left: '172px',
        top: '223px',
        onStart: function() {},
        onReverseComplete: function() {
            $spirit.attr('src', subjectEntry)
        }
    })]).add([TweenMax.to(spiritClass, 1, {
        left: '328px',
        top: '143px',
        onStart: function() {
            $spirit.attr('src', subject0)
        },
        onReverseComplete: function() {
            $spirit.attr('src', subject90)
        }
    })]).add([TweenMax.to(spiritClass, 1, {
        left: '423px',
        top: '191px',
        onStart: function() {
            $spirit.attr('src', subject90)
        },
        onReverseComplete: function() {
            $spirit.attr('src', subject0)
        }
    })]).add([TweenMax.to(spiritClass, 1.5, {
        left: '423px',
        top: '191px',
        onStart: function() {},
        onReverseComplete: function() {}
    })]).add([TweenMax.to(spiritClass, 1, {
        left: '532px',
        top: '243px',
        onStart: function() {},
        onReverseComplete: function() {}
    })]).add([TweenMax.to(spiritClass, 1, {
        left: '742px',
        top: '154px',
        onStart: function() {
            $spirit.attr('src', subject0)
        },
        onReverseComplete: function() {
            $spirit.attr('src', subject90)
        }
    })]).add([TweenMax.to(spiritClass, 1, {
        left: '783px',
        top: '183px',
        onStart: function() {
            $spirit.attr('src', subject90)
        },
        onReverseComplete: function() {
            $spirit.attr('src', subject0)
        }
    })]).add([TweenMax.to(spiritClass, 1.5, {
        left: '783px',
        top: '183px'
    })]).add([TweenMax.to(spiritClass, 1, {
        left: '904px',
        top: '267px'
    })]).add([TweenMax.to(spiritClass, 1, {
        left: '922px',
        top: '280px'
    })]);

    $('.container').length && new ScrollScene({
        triggerElement: '.container',
        triggerHook: 'onLeave',
        duration: 1200,
        offset: -100
    }).setTween(pinAnim).setPin('.container').addTo(controller)
});
