$(document).ready(function() {
    var isMobile, isIE, isSafari, ua = navigator.userAgent,
        checker = {
            iphone: ua.match(/(iPhone|iPod|iPad)/),
            blackberry: ua.match(/BlackBerry/),
            android: ua.match(/Android/)
        };
    isSafari = -1 != navigator.userAgent.indexOf("Safari") && -1 == navigator.userAgent.indexOf("Chrome") ? !0 : !1,
    isIE = navigator.userAgent.match(/Trident\/7\./) ? !0 : !1,
    isMobile = checker.android || checker.iphone || checker.blackberry ? !0 : !1,
    isMobile ? $(".Intro-placeholder").show() : $(".Intro-video").show(),
    isMobile || isIE || isSafari || ($(".Showroom").show(),$(".ShowroomSlider").hide());
    var controller = new ScrollMagic,
        obj = {
            curImg: 0
        },
        subjectEntry = "img/subject-entry.cdbace09.png",
        subject0 = ["img/d1.9419e082.png", "img/d2.db8a5b58.png", "img/d3.9419e082.png", "img/d2.db8a5b58.png"],
        subject90 = ["img/d1-90.c690d3fb.png", "img/d2-90.ca49cc83.png", "img/d3-90.2a9b92e4.png", "img/d2-90.ca49cc83.png"],
        subject180 = ["img/d1-180.1f1f5ee6.png", "img/d2-180.1dbe7e4b.png", "img/d3-180.9884c992.png", "img/d2-180.1dbe7e4b.png"],
        subject270 = ["img/d1-270.68de5cf8.png", "img/d2-270.1f60d830.png", "img/d3-270.03cb6972.png", "img/d2-270.1f60d830.png"];
    if (!isMobile && !isIE && !isSafari) {
        var pinAnim = (new TimelineMax).add([TweenMax.to(".js-subject", 1, {
            left: "58px",
            top: "142px"
        })]).add([TweenMax.to(".js-subject", 1, {
            left: "56px",
            top: "140px",
            onStart: function() {
                $(".js-subject").attr("src", subject90[0]), $(".js-showroomHand").stop().fadeIn(), $('[class*="js-showroomPhone"]').stop().fadeIn()
            }
        })]).add([TweenMax.to(".js-subject", 1, {
            left: "172px",
            top: "223px",
            onStart: function() {
                $('[class*="js-showroomPhone"]').removeClass("isActive"), $(".js-showroomPhoneWelcome").addClass("isActive")
            },
            onReverseComplete: function() {
                $('[class*="js-showroomPhone"]').removeClass("isActive"), $(".js-subject").attr("src", subjectEntry), $(".js-showroomHand").stop().fadeOut(), $('[class*="js-showroomPhone"]').stop().fadeOut()
            }
        })]).add([TweenMax.to(".js-subject", 1, {
            left: "328px",
            top: "143px",
            onStart: function() {
                $(".js-subject").attr("src", subject0[0]), $('[class*="js-showroomPhone"]').removeClass("isActive"), $(".js-showroomPhoneMap1").addClass("isActive")
            },
            onReverseComplete: function() {
                $(".js-subject").attr("src", subject90[0]), $('[class*="js-showroomPhone"]').removeClass("isActive"), $(".js-showroomPhoneWelcome").addClass("isActive")
            }
        })]).add([TweenMax.to(".js-subject", 1, {
            left: "423px",
            top: "191px",
            onStart: function() {
                $(".js-subject").attr("src", subject90[0])
            },
            onReverseComplete: function() {
                $(".js-subject").attr("src", subject0[0])
            }
        })]).add([TweenMax.to(".js-subject", 1.5, {
            left: "423px",
            top: "191px",
            onStart: function() {
                $('[class*="js-showroomPhone"]').removeClass("isActive"), $(".js-showroomPhoneItem1").addClass("isActive"), $(".js-showroomTv").stop().fadeIn(), $(".js-item1").stop().fadeIn()
            },
            onReverseComplete: function() {
                $('[class*="js-showroomPhone"]').removeClass("isActive"), $(".js-showroomPhoneMap1").addClass("isActive"), $(".js-showroomTv").stop().fadeOut(), $(".js-item1").stop().fadeOut()
            }
        })]).add([TweenMax.to(".js-subject", 1, {
            left: "532px",
            top: "243px",
            onStart: function() {
                $('[class*="js-showroomPhone"]').removeClass("isActive"), $(".js-showroomPhoneMap2").addClass("isActive"), $(".js-showroomTv").stop().fadeOut(), $(".js-item1").stop().fadeOut()
            },
            onReverseComplete: function() {
                $('[class*="js-showroomPhone"]').removeClass("isActive"), $(".js-showroomPhoneItem1").addClass("isActive"), $(".js-showroomTv").stop().fadeIn(), $(".js-item1").stop().fadeIn()
            }
        })]).add([TweenMax.to(".js-subject", 1, {
            left: "742px",
            top: "154px",
            onStart: function() {
                $(".js-subject").attr("src", subject0[0])
            },
            onReverseComplete: function() {
                $(".js-subject").attr("src", subject90[0])
            }
        })]).add([TweenMax.to(".js-subject", 1, {
            left: "783px",
            top: "183px",
            onStart: function() {
                $(".js-subject").attr("src", subject90[0])
            },
            onReverseComplete: function() {
                $(".js-subject").attr("src", subject0[0])
            }
        })]).add([TweenMax.to(".js-subject", 1.5, {
            left: "783px",
            top: "183px",
            onStart: function() {
                $('[class*="js-showroomPhone"]').removeClass("isActive"), $(".js-showroomPhoneItem2").addClass("isActive"), $(".js-item2").stop().fadeIn()
            },
            onReverseComplete: function() {
                $('[class*="js-showroomPhone"]').removeClass("isActive"), $(".js-showroomPhoneMap1").addClass("isActive"), $(".js-item2").stop().fadeOut()
            }
        })]).add([TweenMax.to(".js-subject", 1, {
            left: "904px",
            top: "267px",
            onStart: function() {
                $('[class*="js-showroomPhone"]').removeClass("isActive"), $(".js-showroomPhonePayment").addClass("isActive"), $(".js-item2").stop().fadeOut()
            },
            onReverseComplete: function() {
                $('[class*="js-showroomPhone"]').removeClass("isActive"), $(".js-showroomPhoneItem2").addClass("isActive"), $(".js-item2").stop().fadeIn()
            }
        })]).add([TweenMax.to(".js-subject", 1, {
            left: "922px",
            top: "280px",
            onStart: function() {
                $('[class*="js-showroomPhone"]').removeClass("isActive"), $(".js-showroomPhoneBye").addClass("isActive")
            },
            onReverseComplete: function() {
                $('[class*="js-showroomPhone"]').removeClass("isActive"), $(".js-showroomPhonePayment").addClass("isActive")
            }
        })]);
        $(".BeaconsInAction").length && new ScrollScene({
            triggerElement: ".BeaconsInAction",
            triggerHook: "onLeave",
            duration: 1200,
            offset: 300
        }).setTween(pinAnim).setPin(".BeaconsInAction").addTo(controller)
    }
    var pinAnim = new TimelineMax({
        repeat: -1
    }).add([TweenMax.to(".js-subjectIndoor", 2.5, {
        left: "463px",
        top: "81px"
    }), TweenMax.to(".js-appSubject", 2.5, {
        left: "16px",
        top: "115px"
    }), TweenMax.to(obj, .35, {
        curImg: subject0.length - 1,
        roundProps: "curImg",
        repeat: 5,
        immediateRender: !0,
        ease: Linear.easeNone,
        onUpdate: function() {
            $(".js-subjectIndoor").attr("src", subject0[obj.curImg])
        }
    })]).add(TweenMax.to(".js-appSubject", .01, {
        rotation: 90
    })).add([TweenMax.to(".js-subjectIndoor", 1.5, {
        left: "689px",
        top: "189px"
    }), TweenMax.to(".js-appSubject", 1.5, {
        left: "78px",
        top: "115px"
    }), TweenMax.to(obj, .35, {
        curImg: subject90.length - 1,
        roundProps: "curImg",
        repeat: 3,
        immediateRender: !0,
        ease: Linear.easeNone,
        onUpdate: function() {
            $(".js-subjectIndoor").attr("src", subject90[obj.curImg])
        }
    })]).add(TweenMax.to(".js-appSubject", .01, {
        rotation: 0
    })).add([TweenMax.to(".js-subjectIndoor", 1.5, {
        left: "895px",
        top: "69px"
    }), TweenMax.to(".js-appSubject", 1.5, {
        left: "78px",
        top: "48px"
    }), TweenMax.to(obj, .35, {
        curImg: subject0.length - 1,
        roundProps: "curImg",
        repeat: 3,
        immediateRender: !0,
        ease: Linear.easeNone,
        onUpdate: function() {
            $(".js-subjectIndoor").attr("src", subject0[obj.curImg])
        }
    })]).add(TweenMax.to(".js-appSubject", .01, {
        rotation: 90
    })).add([TweenMax.to(".js-subjectIndoor", 1.5, {
        left: "1060px",
        top: "165px"
    }), TweenMax.to(".js-appSubject", 1.5, {
        left: "106px",
        top: "48px"
    }), TweenMax.to(obj, .35, {
        curImg: subject90.length - 1,
        roundProps: "curImg",
        repeat: 3,
        immediateRender: !0,
        ease: Linear.easeNone,
        onUpdate: function() {
            $(".js-subjectIndoor").attr("src", subject90[obj.curImg])
        }
    })]).add(TweenMax.to(".js-appSubject", .01, {
        rotation: 180
    })).add([TweenMax.to(".js-subjectIndoor", 3.5, {
        left: "472px",
        top: "504px"
    }), TweenMax.to(".js-appSubject", 3.5, {
        left: "106px",
        top: "183px"
    }), TweenMax.to(obj, .35, {
        curImg: subject180.length - 1,
        roundProps: "curImg",
        repeat: 8,
        immediateRender: !0,
        ease: Linear.easeNone,
        onUpdate: function() {
            $(".js-subjectIndoor").attr("src", subject180[obj.curImg])
        }
    })]).add(TweenMax.to(".js-appSubject", .01, {
        rotation: 270
    })).add([TweenMax.to(".js-subjectIndoor", 4, {
        left: "93px",
        top: "280px"
    }), TweenMax.to(".js-appSubject", 4, {
        left: "16px",
        top: "183px"
    }), TweenMax.to(obj, .35, {
        curImg: subject270.length - 1,
        roundProps: "curImg",
        repeat: 8,
        immediateRender: !0,
        ease: Linear.easeNone,
        onUpdate: function() {
            $(".js-subjectIndoor").attr("src", subject270[obj.curImg])
        }
    })])
});
