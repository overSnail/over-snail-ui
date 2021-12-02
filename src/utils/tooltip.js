import { getElAbsCoordinates } from "./dom";

export function calcCoordinates(el, placement) {
  const childSize = getElAbsCoordinates(el);

  let coordinates = { top: 0, left: 0, angleTop: 0, angleLeft: 0 };

  switch (placement) {
    case "top-start":
      coordinates.top = childSize.top - 12;
      coordinates.left = childSize.left;
      coordinates.angleTop = "100%";
      coordinates.angleLeft = `${childSize.width / 2}px`;
      break;

    case "top":
      coordinates.top = childSize.top - 12;
      coordinates.left = childSize.left + childSize.width / 2;
      coordinates.angleTop = "100%";
      coordinates.angleLeft = `50%`;
      break;

    case "top-end":
      coordinates.top = childSize.top - 12;
      coordinates.left = childSize.left + childSize.width;
      coordinates.angleTop = "100%";
      coordinates.angleLeft = `calc(100% - ${childSize.width / 2}px)`;
      break;

    case "right-start":
      coordinates.top = childSize.top;
      coordinates.left = childSize.left + childSize.width + 12;
      coordinates.angleTop = `${childSize.height / 2}px`;
      coordinates.angleLeft = `0`;
      break;

    case "right":
      coordinates.top = childSize.top + childSize.height / 2;
      coordinates.left = childSize.left + childSize.width + 12;
      coordinates.angleTop = `50%`;
      coordinates.angleLeft = `0`;
      break;

    case "right-end":
      coordinates.top = childSize.top + childSize.height;
      coordinates.left = childSize.left + childSize.width + 12;
      coordinates.angleTop = `calc(100% - ${childSize.width / 2}px)`;
      coordinates.angleLeft = `0`;
      break;

    case "bottom-end":
      coordinates.top = childSize.top + childSize.height + 12;
      coordinates.left = childSize.left + childSize.width;
      coordinates.angleTop = "0";
      coordinates.angleLeft = `calc(100% - ${childSize.width / 2}px)`;
      break;

    case "bottom":
      coordinates.top = childSize.top + childSize.height + 12;
      coordinates.left = childSize.left + childSize.width / 2;
      coordinates.angleTop = "0";
      coordinates.angleLeft = `50%`;
      break;

    case "bottom-start":
      coordinates.top = childSize.top + childSize.height + 12;
      coordinates.left = childSize.left;
      coordinates.angleTop = "0";
      coordinates.angleLeft = `${childSize.width / 2}px`;
      break;

    case "left-start":
      coordinates.top = childSize.top;
      coordinates.left = childSize.left - 12;
      coordinates.angleTop = `${childSize.height / 2}px`;
      coordinates.angleLeft = `calc(100% - ${0.5}px)`;
      break;

    case "left":
      coordinates.top = childSize.top + childSize.height / 2;
      coordinates.left = childSize.left - 12;
      coordinates.angleTop = `50%`;
      coordinates.angleLeft = `calc(100% - ${0.5}px)`;
      break;

    case "left-end":
      coordinates.top = childSize.top + childSize.height;
      coordinates.left = childSize.left - 12;
      coordinates.angleTop = `calc(100% - ${childSize.height / 2}px)`;
      coordinates.angleLeft = `calc(100% - ${0.5}px)`;
      break;
  }

  return coordinates;
}
