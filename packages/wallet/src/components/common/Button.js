import { h, Fragment } from "preact";
import { css, cx } from "emotion";

export default function ({
  type,
  primary,
  secondary,
  alert,
  linkTo,
  onClick,
  disabled,
  customStyle,
  children,
}) {
  const isPrimary = primary || !secondary;
  const isSecondary = secondary;

  function getBgColor() {
    if (disabled) {
      return "#aa91ee";
    }
    if (alert) {
      return "#f74476";
    }
    if (isPrimary) {
      return "#3a3d99";
    }
    return "lightgray";
  }

  function getHoverBgColor() {
    if (disabled) {
      return "#aa91ee";
    }
    if (alert) {
      return "#c41a4a";
    }
    if (isPrimary) {
      return "#815de3";
    }
    return "gray";
  }

  const buttonStyle = css`
    background: ${getBgColor()};
    color: ${isPrimary ? "white" : "black"};
    user-select: none;
    width: 100%;
    font-family: Poppins, sans-serif;
    padding: 0.6rem 1.2rem;
    line-height: 1.5rem;
    margin: 8px auto;
    text-decoration: none;
    box-sizing: border-box;
    text-align: center;
    display: block;
    border: 0;
    font-size: 16px;
    font-weight: 400;
    border-radius: 0.12rem;
    cursor: ${disabled ? "default" : "pointer"};
    transition: color 0.1s ease-in-out, background-color 0.1s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    &:hover {
      background: ${getHoverBgColor()};
    }
  `;

  return (
    <>
      {linkTo ? (
        <a href={linkTo} class={cx(buttonStyle, customStyle)}>
          {children}
        </a>
      ) : (
        <button
          disabled={disabled}
          type={type || "button"}
          onClick={disabled ? () => null : onClick}
          class={cx(buttonStyle, customStyle)}
        >
          {children}
        </button>
      )}
    </>
  );
}
