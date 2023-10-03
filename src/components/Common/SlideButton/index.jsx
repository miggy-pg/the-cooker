import { useState, useEffect, useRef } from "react";
import { useSwipeable } from "react-swipeable";
import Arrow from "../../../../public/arrow.png";
import { FoodCard } from "../FoodCard";

import "./slideBtn.css";

const slideButton = {
  position: "absolute",
  left: "0",
  top: "0",
  // border: "2px solid #444",
  minWidth: "100px",
  padding: "11px",
  overflow: "hidden",
  color: "#000",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "default",
  userSelect: "none",
  border: "1px solid yellow",
  /* box-sizing: border-box; */
};

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
  customCaretWidth = 660,
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
        // setSlideComplete(true);
        console.log("setTimeoutHere: ");

        setTimeout(() => onSlideDone(), 300);
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
          // setSlideComplete(true);
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
          console.log("here 1", data);
          console.log(data.event.touches[0].clientX - offsetLeft);
          setOverlayWidth(data.event.touches[0].clientX - offsetLeft);
        } else {
          console.log("here 2");
          console.log("here 2 data: ", data);
          console.log("here 2 customCaretWidth: ", customCaretWidth);
          if (data.event.offsetX > customCaretWidth) {
            console.log("here 3: ", data.event.offsetX);
            // setMoveLeft(data.event.offsetX - customCaretWidth);
            setOverlayWidth(data.event.offsetX);
          }
        }
      }
    },
    delta,
    trackMouse: true,
    preventDefaultTouchmoveEvent: true,
  });
  console.log("overlayWidth: ", overlayWidth);
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
              <FoodCard />

              // <img src={Arrow} alt="caret" style={{ maxWidth: "100%" }} />
            )}
          </div>
          <div className="slide-overlay-txt" style={{ width: overlayWidth }}>
            {/* {overlayText} */}
          </div>
        </div>
      </div>

      {/* {mainText} */}
    </div>
  );
};

export default SlideButton;
