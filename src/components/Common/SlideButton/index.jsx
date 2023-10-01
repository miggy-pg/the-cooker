import { useState, useEffect, useRef } from "react";
import { useSwipeable } from "react-swipeable";
import Arrow from "../../../../public/arrow.png";

import "./slideBtn.css";

const dirTypes = ["Left", "Down", "Up"];

const findLeft = (element) => {
  var rec = element.getBoundingClientRect();
  return rec.left + window.scrollX;
};

const SlideButton = ({
  mainText,
  overlayText,
  onSlideDone,
  reset,
  classList = "",
  overlayClassList = "",
  caretClassList = "",
  delta = 10,
  minSlideWidth = 0.6,
  minSlideVelocity = 0.6,
  caret = null,
  customCaretWidth = 40,
}) => {
  const [overlayWidth, setOverlayWidth] = useState(customCaretWidth);
  const [slideComplete, setSlideComplete] = useState(false);
  const buttonRef = useRef();

  useEffect(() => {
    if (reset) {
      setSlideComplete(false);
      setOverlayWidth(customCaretWidth);
    }
  }, [reset]);

  const handlers = useSwipeable({
    onSwipedRight: (data) => {
      if (slideComplete) return;
      const butWidth = buttonRef.current.offsetWidth;
      console.log("butWidth: ", butWidth);
      if (data.velocity > minSlideVelocity) {
        setOverlayWidth(butWidth);
        setSlideComplete(true);
        setTimeout(() => onSlideDone(), 100);
      } else {
        const offsetLeft = findLeft(buttonRef.current);
        console.log("onSwipedRight-offsetLeft: ", offsetLeft);
        const startPos = Math.abs(data.initial[0] - offsetLeft);
        console.log("onSwipedRight-startPos: ", startPos);
        if (
          startPos <= 100 + customCaretWidth &&
          (data.event.type === "touchend"
            ? data.event.changedTouches[0].clientX - offsetLeft
            : data.event.offsetX) >
            minSlideWidth * butWidth
        ) {
          console.log("onSwipedRight-1: ", butWidth);
          setOverlayWidth(butWidth);
          setSlideComplete(true);
          setTimeout(() => onSlideDone(), 100);
        } else setOverlayWidth(customCaretWidth);
      }
    },
    onSwiping: (data) => {
      if (slideComplete || dirTypes.includes(data.dir)) return;
      const offsetLeft = findLeft(buttonRef.current);
      const startPos = Math.abs(data.initial[0] - offsetLeft);
      console.log("onSwiping-offsetLeft: ", offsetLeft);
      console.log("onSwiping-startPos: ", startPos);

      if (startPos <= 100 + customCaretWidth) {
        if (data.event.type && data.event.type === "touchmove") {
          console.log("here 1");
          console.log(data.event.touches[0].clientX - offsetLeft);
          setOverlayWidth(data.event.touches[0].clientX - offsetLeft);
        } else {
          console.log("here 2");
          console.log("here 2: ", customCaretWidth);
          if (data.event.offsetX > customCaretWidth) {
            console.log("here 3: ", data.event.offsetX);
            setOverlayWidth(data.event.offsetX);
          }
        }
      }
    },
    delta,
    trackMouse: true,
    preventDefaultTouchmoveEvent: true,
  });

  return (
    <div
      className={`slide-but ${classList}`}
      {...handlers}
      ref={(t) => {
        handlers.ref(t);
        buttonRef.current = t;
      }}
    >
      <div
        className={`slide-overlay ${overlayClassList}`}
        style={{ width: overlayWidth }}
      >
        <div className="slide-overlay-wrapper">
          <div
            style={{
              width: customCaretWidth,
              maxWidth: customCaretWidth,
            }}
            className={`slide-caret-wrapper ${caretClassList}`}
          >
            {caret ? (
              caret
            ) : (
              <img src={Arrow} alt="caret" style={{ maxWidth: "100%" }} />
            )}
          </div>
          <div className="slide-overlay-txt" style={{ width: overlayWidth }}>
            {overlayText}
          </div>
        </div>
      </div>

      {mainText}
    </div>
  );
};

export default SlideButton;
