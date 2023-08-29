document.addEventListener("DOMContentLoaded", function () {
    const cursor = document.querySelector('.cursor');
    const imageSectionImages = document.querySelectorAll('.image-section img');
	const footer = document.querySelector('.footer-last');
    const body = document.body;
    document.addEventListener('mousemove', e => {
		const cursorSize = 20; // Adjust the cursor size as needed
        const cursorOffset = 20; // Adjust the offset from the right edge

        // Calculate the cursor's position
        const cursorTop = (e.pageY - cursorSize / 2) + 'px';
        const cursorLeft = Math.min(e.pageX, window.innerWidth - cursorSize - cursorOffset) + 'px';

        // Set the cursor's position
        cursor.style.top = cursorTop;
        cursor.style.left = cursorLeft;
		footer.addEventListener('mouseenter', () => {
			cursor.style.display = 'none'; // Hide the cursor circle
		});
	
		// Event listener for when the mouse leaves the footer
		footer.addEventListener('mouseleave', () => {
			cursor.style.display = 'block'; // Show the cursor circle
		});
        viewProjectCursor.style.top = (e.pageY - 30) + "px";
		
        viewProjectCursor.style.left = (e.pageX - 20) + "px";

        if (e.target.closest('.image-section img')) {
            viewProjectCursor.style.display = 'block';
        } else {
            viewProjectCursor.style.display = 'none';
        }
    });

    document.addEventListener('click', () => {
        cursor.classList.add("expand");
        setTimeout(() => {
            cursor.classList.remove("expand");
        }, 500);
    });

    gsap.registerPlugin(ScrollTrigger);

    let horizontalSection = document.querySelector('.horizontal');

    console.log(horizontalSection.scrollWidth);

    gsap.to('.horizontal', {
        x: () => horizontalSection.scrollWidth * -1,
        xPercent: 100,
        scrollTrigger: {
            trigger: '.horizontal',
            start: 'center center',
            end: '+=2000px',
            pin: '#horizontal-scoll',
            scrub: true,
            invalidateOnRefresh: true
        }
    });
    const tl = gsap.timeline();

    tl.to("body", {
        overflow: "hidden"
    })
        .to(".preloader .text-container", {
            duration: 0,
            opacity: 1,
            ease: "Power3.easeOut"
        })
        .from(".preloader .text-container h1", {
            duration: 1.5,
            delay: 1,
            y: 70,
            skewY: 10,
            stagger: 0.4,
            ease: "Power3.easeOut"
        })
        .to(".preloader .text-container h1", {
            duration: 1.2,
            y: 70,
            skewY: -20,
            stagger: 0.2,
            ease: "Power3.easeOut"
        })
        .to(".preloader", {
            duration: 1.5,
            height: "0vh",
            ease: "Power3.easeOut"
        })
        .to(
            "body",
            {
                overflow: "auto"
            },
            ""
        )
        .to(".preloader", {
            display: "none"
        });
    var $images = $('.parallax-img');
    var window_h = $(window).height();

    $(window).scroll(function () {
        var windowScrollTop = $(window).scrollTop();

        if (windowScrollTop == 0) {
            TweenLite.to($images, 1.2, {
                yPercent: 0,
                ease: Power1.easeOut,
                overwrite: 0
            });
        }
        else {
            $images.each(function () {
                var elementOffsetTop = $(this).offset().top,
                    element_h = $(this).height(),
                    velocity = $(this).data('velocity');

                if (windowScrollTop + window_h > elementOffsetTop && windowScrollTop < elementOffsetTop + element_h) {
                    //if in view:

                    TweenLite.to($(this), 1.2, {
                        yPercent: (windowScrollTop + window_h - elementOffsetTop) / window_h * velocity,
                        ease: Power1.easeOut,
                        overwrite: 0
                    });
                }
            });
        }
    });
	gsap.utils.toArray('.slowed-pin').forEach((slowedPin) => {
					
					const slowedText = slowedPin.querySelector('.slowed-text');
					const slowedImagesWrapper = slowedPin.querySelector('.slowed-images');	
					const slowedImagesLeft = slowedPin.querySelectorAll('.slowed-image-left');	
					const slowedImagesRight = slowedPin.querySelectorAll('.slowed-image-right');					
					
					if( slowedText.offsetHeight > window.innerHeight ){							
						console.log("in one");
						if ($(window).width() > 1024) {
                            console.log("in 2");
						
							gsap.set(slowedPin, { height:window.innerHeight*5});
						
							gsap.to(slowedText, {
								scrollTrigger: {
									trigger:slowedText,
									scrub: true,
									pin:true,
									start: "top top",
									end: "+" + (slowedPin.offsetHeight - window.innerHeight),
								},
								y:window.innerHeight - slowedText.offsetHeight
							});
							
							gsap.to([slowedImagesLeft, slowedImagesRight], {
								scrollTrigger: {
									trigger:slowedText,
									scrub: 2,
									start: "top 10%",
									end: "+=" + (slowedPin.offsetHeight + window.innerHeight),
								},
								y:0
							});
							
						} else {
							gsap.set(slowedPin, { height:slowedImagesWrapper});
					
							gsap.to(slowedText, {
								scrollTrigger: {
									trigger:slowedText,
									scrub: true,
									pin:true,
									start: "top top",
									end: "+=" + (slowedPin.offsetHeight - window.innerHeight),
								},
								y:window.innerHeight - slowedText.offsetHeight
							});
						}
							
					} else if( slowedText.offsetHeight < window.innerHeight ){	
						
						gsap.set(slowedPin, { height:slowedImagesWrapper});
					
						gsap.to(slowedText, {
							scrollTrigger: {
								trigger:slowedText,
								scrub: true,
								pin:true,
								start: "top +" + (window.innerHeight/2 - slowedText.offsetHeight/2),
								end: "+=" + ((slowedPin.offsetHeight+10) - (window.innerHeight/2 + slowedText.offsetHeight/2)),
							}
						});
					}				
				
				});
            	
                
                
                if ($("body").hasClass("smooth-scroll")) {
			const ScrollArea = document.querySelector('#content-scroll');
			var scrollbar = window.Scrollbar;			
			var __extends = (this && this.__extends) || (function () {
				var extendStatics = Object.setPrototypeOf ||
					({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
					function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
				return function (d, b) {
					extendStatics(d, b);
					function __() { this.constructor = d; }
					d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
				};
			})();
			var EdgeEasingPlugin = /** @class */ (function (_super) {
				__extends(EdgeEasingPlugin, _super);
				function EdgeEasingPlugin() {
					var _this = _super !== null && _super.apply(this, arguments) || this;
					_this._remainMomentum = {
						x: 0,
						y: 0
					};
					_this._defaultOptions = {
						speed: 1
					};
					return _this;
				}
				EdgeEasingPlugin.prototype.transformDelta = function (delta) {
					const { speed } = this.options;
					var _a = this.scrollbar, limit = _a.limit, offset = _a.offset;
					var x = this._remainMomentum.x + delta.x * speed;
					var y = this._remainMomentum.y + delta.y * speed;
					// clamps momentum within [-offset, limit - offset]
					this.scrollbar.setMomentum(Math.max(-offset.x, Math.min(x, limit.x - offset.x)), Math.max(-offset.y, Math.min(y, limit.y - offset.y)));
					return { x: 0, y: 0 };
				};
				EdgeEasingPlugin.prototype.onRender = function (remainMomentum) {
					Object.assign(this._remainMomentum, remainMomentum);
				};
				EdgeEasingPlugin.pluginName = 'edgeEasing';
				return EdgeEasingPlugin;
				
			}(Scrollbar.ScrollbarPlugin));
			Scrollbar.use(EdgeEasingPlugin);
			
			var ScaleSpeedPlugin = /** @class */ (function (_super) {
				__extends(ScaleSpeedPlugin, _super);
				function ScaleSpeedPlugin() {
					var _this = _super !== null && _super.apply(this, arguments) || this;
					_this._defaultOptions = {
						speed: 1
					};
					return _this;
				}
				ScaleSpeedPlugin.prototype.transformDelta = function (delta) {
							
					const { speed } = this.options;

					return {
						
						x: delta.x * speed,
						y: delta.y * speed,
					};
				}
				ScaleSpeedPlugin.pluginName = 'scaleSpeed';
				return ScaleSpeedPlugin;
				
			}(Scrollbar.ScrollbarPlugin));
			//Scrollbar.use(ScaleSpeedPlugin);
			
			// Config
			if (isMobile()) {
			
				var ScrollbarOptions = {
					damping:0.05,
					renderByPixel: true,
					continuousScrolling: true,
					syncCallbacks: true,
					plugins: {
						edgeEasing: {
							speed: 2,
						},
					},
				};
			
			}
			
			if (!isMobile()) {
				
				var ScrollbarOptions = {
					damping:0.1,
					renderByPixel: true,
					continuousScrolling: true,
					syncCallbacks: true,
					plugins: {
						edgeEasing: {
							speed: 1,
						},
					},
				};

					
			}

			// Initialise
			var scrollbar = Scrollbar.init(ScrollArea, ScrollbarOptions);			
			
			
			ScrollTrigger.scrollerProxy("#content-scroll", {
			  scrollTop(value) {
				if (arguments.length) {
				  console.log(value);
				  scrollbar.scrollTop = value;
				}
				return scrollbar.scrollTop;
			  }
			});			
			scrollbar.addListener(ScrollTrigger.update);			
			ScrollTrigger.defaults({ scroller: ScrollArea, ScrollbarOptions });
			
		}
});
