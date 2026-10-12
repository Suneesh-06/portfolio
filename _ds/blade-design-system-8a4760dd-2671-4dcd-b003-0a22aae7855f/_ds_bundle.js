/* @ds-bundle: {"format":3,"namespace":"BladeDesignSystem_8a4760","components":[{"name":"Accordion","sourcePath":"components/core/Accordion.jsx"},{"name":"Alert","sourcePath":"components/core/Alert.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"CardHeader","sourcePath":"components/core/Card.jsx"},{"name":"CardFooter","sourcePath":"components/core/Card.jsx"},{"name":"Checkbox","sourcePath":"components/core/Checkbox.jsx"},{"name":"Counter","sourcePath":"components/core/Counter.jsx"},{"name":"DropdownMenu","sourcePath":"components/core/DropdownMenu.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Link","sourcePath":"components/core/Link.jsx"},{"name":"Modal","sourcePath":"components/core/Modal.jsx"},{"name":"RadioGroup","sourcePath":"components/core/Radio.jsx"},{"name":"Radio","sourcePath":"components/core/Radio.jsx"},{"name":"Select","sourcePath":"components/core/Select.jsx"},{"name":"Spinner","sourcePath":"components/core/Spinner.jsx"},{"name":"Switch","sourcePath":"components/core/Switch.jsx"},{"name":"Table","sourcePath":"components/core/Table.jsx"},{"name":"THead","sourcePath":"components/core/Table.jsx"},{"name":"TBody","sourcePath":"components/core/Table.jsx"},{"name":"Tr","sourcePath":"components/core/Table.jsx"},{"name":"Th","sourcePath":"components/core/Table.jsx"},{"name":"Td","sourcePath":"components/core/Table.jsx"},{"name":"Tabs","sourcePath":"components/core/Tabs.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"TextInput","sourcePath":"components/core/TextInput.jsx"},{"name":"ToastHost","sourcePath":"components/core/Toast.jsx"},{"name":"Toast","sourcePath":"components/core/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/core/Tooltip.jsx"}],"sourceHashes":{"components/core/Accordion.jsx":"612ba6754484","components/core/Alert.jsx":"e67175510fe7","components/core/Badge.jsx":"540755844bfd","components/core/Button.jsx":"39e765184d99","components/core/Card.jsx":"e41f79755e85","components/core/Checkbox.jsx":"daa8ea169131","components/core/Counter.jsx":"8b5656fa2d2d","components/core/DropdownMenu.jsx":"be814d4fa406","components/core/Icon.jsx":"3a548f7537b6","components/core/IconButton.jsx":"da075aaab0d8","components/core/Link.jsx":"8e788386f281","components/core/Modal.jsx":"9497c80c4247","components/core/Radio.jsx":"23a79722fd55","components/core/Select.jsx":"a3151fe2b6e5","components/core/Spinner.jsx":"1d54aac47a1a","components/core/Switch.jsx":"51b4f138a61e","components/core/Table.jsx":"cf9bd2970605","components/core/Tabs.jsx":"e47389b77bbe","components/core/Tag.jsx":"ef90e96d65f4","components/core/TextInput.jsx":"a70640295a7f","components/core/Toast.jsx":"7e6575fb26e1","components/core/Tooltip.jsx":"0022ecd51526","ui_kits/dashboard/CreateLink.jsx":"e2fcacb97995","ui_kits/dashboard/DashShell.jsx":"fe36d4bf9d49","ui_kits/dashboard/PaymentsScreen.jsx":"73cf394aeeff"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.BladeDesignSystem_8a4760 = window.BladeDesignSystem_8a4760 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Accordion.jsx
try { (() => {
/**
 * Blade Accordion — vertically stacked, expandable sections.
 * items: [{title, content}]. By default one open at a time; set multiple to allow many.
 */
function Accordion({
  items = [],
  defaultOpen = 0,
  multiple = false
}) {
  const [open, setOpen] = React.useState(multiple ? defaultOpen != null ? [defaultOpen] : [] : defaultOpen);
  const isOpen = i => multiple ? open.includes(i) : open === i;
  const toggle = i => {
    if (multiple) setOpen(o => o.includes(i) ? o.filter(x => x !== i) : [...o, i]);else setOpen(o => o === i ? -1 : i);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      border: "var(--border-width-thin) solid var(--surface-border-gray-muted)",
      borderRadius: "var(--border-radius-large)",
      overflow: "hidden",
      background: "var(--white)"
    }
  }, items.map((it, i) => {
    const on = isOpen(i);
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        borderTop: i ? "var(--border-width-thin) solid var(--surface-border-gray-muted)" : "none"
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => toggle(i),
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 12,
        width: "100%",
        padding: "16px 18px",
        border: "none",
        background: "transparent",
        cursor: "pointer",
        textAlign: "left",
        font: "var(--font-weight-semibold) 15px/1.4 var(--font-family-body)",
        color: "var(--surface-text-gray-normal)"
      }
    }, it.title, /*#__PURE__*/React.createElement("svg", {
      width: "20",
      height: "20",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "var(--surface-icon-gray-muted)",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: {
        transform: on ? "rotate(180deg)" : "none",
        transition: "transform var(--motion-duration-quick) var(--motion-easing-standard)",
        flexShrink: 0
      }
    }, /*#__PURE__*/React.createElement("path", {
      d: "m6 9 6 6 6-6"
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        maxHeight: on ? 400 : 0,
        overflow: "hidden",
        transition: "max-height var(--motion-duration-moderate) var(--motion-easing-standard)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "0 18px 18px",
        font: "var(--text-body-medium)",
        color: "var(--surface-text-gray-muted)"
      }
    }, it.content)));
  }));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/core/Alert.jsx
try { (() => {
/**
 * Blade Alert — inline contextual message banner.
 * color: information(default) | positive | negative | notice
 * emphasis: subtle (tinted bg + left content) | intense (solid). isDismissable adds an ×.
 */
function Alert({
  title,
  description,
  color = "information",
  emphasis = "subtle",
  isDismissable = false,
  actions = null,
  onDismiss
}) {
  const map = {
    information: {
      tint: "var(--feedback-background-information-subtle)",
      solid: "var(--feedback-background-information-intense)",
      border: "var(--feedback-border-information)",
      icon: "ℹ",
      text: "var(--feedback-text-information)"
    },
    positive: {
      tint: "var(--feedback-background-positive-subtle)",
      solid: "var(--feedback-background-positive-intense)",
      border: "var(--feedback-border-positive)",
      icon: "✓",
      text: "var(--feedback-text-positive)"
    },
    negative: {
      tint: "var(--feedback-background-negative-subtle)",
      solid: "var(--feedback-background-negative-intense)",
      border: "var(--feedback-border-negative)",
      icon: "!",
      text: "var(--feedback-text-negative)"
    },
    notice: {
      tint: "var(--feedback-background-notice-subtle)",
      solid: "var(--feedback-background-notice-intense)",
      border: "var(--feedback-border-notice)",
      icon: "!",
      text: "var(--feedback-text-notice)"
    }
  }[color];
  const intense = emphasis === "intense";
  return /*#__PURE__*/React.createElement("div", {
    role: "alert",
    style: {
      display: "flex",
      gap: 12,
      padding: "12px 16px",
      boxSizing: "border-box",
      backgroundColor: intense ? map.solid : map.tint,
      border: intense ? "none" : `var(--border-width-thin) solid ${map.border}`,
      borderLeft: intense ? "none" : `3px solid ${map.border}`,
      borderRadius: "var(--border-radius-medium)",
      color: intense ? "var(--white)" : "var(--surface-text-gray-normal)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": true,
    style: {
      flexShrink: 0,
      width: 20,
      height: 20,
      borderRadius: "50%",
      marginTop: 1,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: intense ? "rgba(255,255,255,0.25)" : map.border,
      color: "var(--white)",
      font: "var(--font-weight-bold) 12px/1 var(--font-family-body)"
    }
  }, map.icon), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--text-body-medium)",
      fontWeight: "var(--font-weight-bold)",
      marginBottom: description ? 2 : 0
    }
  }, title), description && /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--text-body-small)",
      color: intense ? "rgba(255,255,255,0.9)" : "var(--surface-text-gray-muted)"
    }
  }, description), actions && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10,
      display: "flex",
      gap: 12
    }
  }, actions)), isDismissable && /*#__PURE__*/React.createElement("button", {
    onClick: onDismiss,
    "aria-label": "Dismiss",
    style: {
      border: "none",
      background: "transparent",
      cursor: "pointer",
      color: "currentColor",
      lineHeight: 0,
      padding: 2,
      opacity: 0.7
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 6 6 18M6 6l12 12"
  }))));
}
Object.assign(__ds_scope, { Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Alert.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
/**
 * Blade Badge — compact status/label pill.
 * color: neutral | primary | positive | negative | notice | information
 * emphasis: subtle (alpha tint, default) | intense (solid fill, white text)
 * size: small(16) | medium(20) | large(24)
 */
function Badge({
  children,
  color = "neutral",
  emphasis = "subtle",
  size = "medium",
  icon = null
}) {
  const map = {
    neutral: {
      solid: "var(--gray-700)",
      tint: "var(--gray-a50)",
      text: "var(--gray-900)"
    },
    primary: {
      solid: "var(--azure-600)",
      tint: "var(--azure-a50)",
      text: "var(--azure-700)"
    },
    positive: {
      solid: "var(--emerald-600)",
      tint: "var(--emerald-a50)",
      text: "var(--emerald-700)"
    },
    negative: {
      solid: "var(--crimson-600)",
      tint: "var(--crimson-a50)",
      text: "var(--crimson-700)"
    },
    notice: {
      solid: "var(--cider-600)",
      tint: "var(--cider-a50)",
      text: "var(--cider-700)"
    },
    information: {
      solid: "var(--sapphire-600)",
      tint: "var(--sapphire-a50)",
      text: "var(--sapphire-700)"
    }
  }[color];
  const dims = {
    small: {
      h: 16,
      fs: 10,
      px: 6,
      gap: 4,
      dot: 6
    },
    medium: {
      h: 20,
      fs: 12,
      px: 8,
      gap: 4,
      dot: 8
    },
    large: {
      h: 24,
      fs: 12,
      px: 8,
      gap: 6,
      dot: 8
    }
  }[size];
  const intense = emphasis === "intense";
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: dims.gap,
      height: dims.h,
      padding: `0 ${dims.px}px`,
      boxSizing: "border-box",
      borderRadius: "var(--border-radius-medium)",
      backgroundColor: intense ? map.solid : map.tint,
      color: intense ? "var(--white)" : map.text,
      font: `var(--font-weight-bold) ${dims.fs}px/1 var(--font-family-body)`,
      letterSpacing: "0.02em"
    }
  }, icon === "dot" && /*#__PURE__*/React.createElement("span", {
    style: {
      width: dims.dot,
      height: dims.dot,
      borderRadius: "50%",
      backgroundColor: intense ? "var(--white)" : map.solid
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Blade Button — primary action component.
 * Variants: primary (filled azure), secondary (azure outline), tertiary (grey outline).
 * Colors: primary | positive | negative | white (for dark surfaces).
 * Sizes: xsmall(28) | small(32) | medium(36) | large(48).
 */
function Button({
  children,
  variant = "primary",
  color = "primary",
  size = "medium",
  isDisabled = false,
  isLoading = false,
  isFullWidth = false,
  icon = null,
  // lucide icon name string, e.g. "arrow-right"
  iconPosition = "right",
  onClick,
  type = "button",
  ...rest
}) {
  const heights = {
    xsmall: 28,
    small: 32,
    medium: 36,
    large: 48
  };
  const padXByVariant = variant === "tertiary" ? 11 : 12;
  const padX = {
    xsmall: 12,
    small: 14,
    medium: 16,
    large: 20
  }[size];
  const fontSize = size === "large" ? 16 : 14;
  const intent = {
    primary: {
      base: "var(--azure-500)",
      hover: "var(--azure-600)",
      text: "var(--azure-600)",
      faint: "var(--azure-a50)",
      faintHover: "var(--azure-a100)"
    },
    positive: {
      base: "var(--emerald-600)",
      hover: "var(--emerald-700)",
      text: "var(--emerald-700)",
      faint: "var(--emerald-a50)",
      faintHover: "var(--emerald-a100)"
    },
    negative: {
      base: "var(--crimson-600)",
      hover: "var(--crimson-700)",
      text: "var(--crimson-700)",
      faint: "var(--crimson-a50)",
      faintHover: "var(--crimson-a100)"
    },
    white: {
      base: "var(--white)",
      hover: "var(--gray-100)",
      text: "var(--gray-1200)",
      faint: "rgba(255,255,255,0.12)",
      faintHover: "rgba(255,255,255,0.22)"
    }
  }[color] || {};
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);
  let style = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    height: heights[size],
    padding: `0 ${padX}px`,
    width: isFullWidth ? "100%" : undefined,
    border: "none",
    borderRadius: "var(--border-radius-medium)",
    font: `var(--font-weight-bold) ${fontSize}px/1 var(--font-family-body)`,
    cursor: isDisabled ? "not-allowed" : "pointer",
    transition: "background-color var(--motion-duration-xquick) var(--motion-easing-standard), transform var(--motion-duration-2xquick) var(--motion-easing-standard)",
    transform: active && !isDisabled ? "scale(0.98)" : "scale(1)",
    opacity: isDisabled ? 0.5 : 1,
    whiteSpace: "nowrap",
    boxSizing: "border-box"
  };
  if (variant === "primary") {
    style.backgroundColor = hover && !isDisabled ? intent.hover : intent.base;
    style.color = color === "white" ? intent.text : "var(--white)";
  } else if (variant === "secondary") {
    style.backgroundColor = hover && !isDisabled ? intent.faint : "transparent";
    style.color = intent.text;
    style.border = `var(--border-width-thin) solid ${color === "white" ? "rgba(255,255,255,0.5)" : intent.base}`;
  } else {
    // tertiary
    style.backgroundColor = hover && !isDisabled ? "var(--gray-a50)" : "transparent";
    style.color = "var(--surface-text-gray-normal)";
    style.border = "var(--border-width-thin) solid var(--surface-border-gray-normal)";
    style.padding = `0 ${padXByVariant}px`;
  }
  const renderIcon = name => name ? /*#__PURE__*/React.createElement(BtnIcon, {
    name: name,
    size: size === "large" ? 20 : 16
  }) : null;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: isDisabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setActive(false);
    },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false),
    style: style
  }, rest), isLoading && /*#__PURE__*/React.createElement(BtnSpinner, {
    size: size === "large" ? 20 : 16,
    color: "currentColor"
  }), !isLoading && icon && iconPosition === "left" && renderIcon(icon), /*#__PURE__*/React.createElement("span", null, children), !isLoading && icon && iconPosition === "right" && renderIcon(icon));
}

/* tiny inline helpers so Button is self-contained for the bundle */
function BtnIcon({
  name,
  size = 16,
  color = "currentColor"
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (window.lucide && ref.current) window.lucide.createIcons({
      nameAttr: "data-lucide",
      icons: window.lucide.icons
    });
  });
  return /*#__PURE__*/React.createElement("i", {
    ref: ref,
    "data-lucide": name,
    style: {
      width: size,
      height: size,
      color,
      display: "inline-flex"
    }
  });
}
function BtnSpinner({
  size = 16,
  color = "currentColor"
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      width: size,
      height: size,
      borderRadius: "50%",
      border: `2px solid ${color}`,
      borderTopColor: "transparent",
      display: "inline-block",
      animation: "blade-spin 0.7s linear infinite"
    }
  });
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Blade Card — elevated content surface.
 * Compose with CardHeader / CardBody / CardFooter, or just pass children.
 * elevation: none | lowRaised (default) | midRaised. Always 8px radius + 1px border.
 */
function Card({
  children,
  elevation = "lowRaised",
  padding = 24,
  style = {},
  ...rest
}) {
  const shadow = {
    none: "none",
    lowRaised: "var(--elevation-lowRaised)",
    midRaised: "var(--elevation-midRaised)"
  }[elevation];
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      backgroundColor: "var(--surface-background-gray-moderate)",
      border: "var(--border-width-thin) solid var(--surface-border-gray-muted)",
      borderRadius: "var(--border-radius-large)",
      boxShadow: shadow,
      padding,
      boxSizing: "border-box",
      ...style
    }
  }, rest), children);
}
function CardHeader({
  title,
  subtitle,
  trailing
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      gap: 16,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--text-heading-small)",
      color: "var(--surface-text-gray-normal)"
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--text-body-small)",
      color: "var(--surface-text-gray-subtle)",
      marginTop: 2
    }
  }, subtitle)), trailing);
}
function CardFooter({
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "flex-end",
      gap: 12,
      marginTop: 20,
      paddingTop: 16,
      borderTop: "var(--border-width-thin) solid var(--surface-border-gray-muted)"
    }
  }, children);
}
Object.assign(__ds_scope, { Card, CardHeader, CardFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Checkbox.jsx
try { (() => {
/**
 * Blade Checkbox — boolean selection. Supports indeterminate + helper/error text.
 * Controlled via isChecked + onChange(next).
 */
function Checkbox({
  children,
  isChecked = false,
  isIndeterminate = false,
  onChange,
  isDisabled = false,
  validationState = "none",
  helpText,
  errorText,
  size = "medium"
}) {
  const box = size === "small" ? 16 : 18;
  const checked = isChecked || isIndeterminate;
  const borderColor = validationState === "error" ? "var(--feedback-border-negative)" : checked ? "var(--interactive-background-primary-default)" : "var(--surface-border-gray-normal)";
  const toggle = () => {
    if (!isDisabled && onChange) onChange(!isChecked);
  };
  const msg = errorText || helpText;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 4,
      opacity: isDisabled ? 0.5 : 1
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      cursor: isDisabled ? "not-allowed" : "pointer"
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: toggle,
    role: "checkbox",
    "aria-checked": isIndeterminate ? "mixed" : isChecked,
    style: {
      width: box,
      height: box,
      flexShrink: 0,
      borderRadius: "var(--border-radius-small)",
      border: `var(--border-width-thick) solid ${borderColor}`,
      background: checked ? "var(--interactive-background-primary-default)" : "var(--white)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "background var(--motion-duration-xquick) var(--motion-easing-standard), border-color var(--motion-duration-xquick) var(--motion-easing-standard)"
    }
  }, isIndeterminate ? /*#__PURE__*/React.createElement("svg", {
    width: "11",
    height: "11",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#fff",
    strokeWidth: "4",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14"
  })) : isChecked && /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#fff",
    strokeWidth: "3.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 6 9 17l-5-5"
  }))), children && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--text-body-medium)",
      color: "var(--surface-text-gray-normal)"
    }
  }, children)), msg && /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: box + 10,
      font: "var(--text-body-small)",
      color: errorText ? "var(--feedback-text-negative)" : "var(--surface-text-gray-subtle)"
    }
  }, msg));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/core/Counter.jsx
try { (() => {
/**
 * Blade Counter — numeric pill used on tabs, nav items, notifications.
 * color: neutral | primary | positive | negative | notice | information
 * emphasis: subtle (tint) | intense (solid). size: small | medium | large.
 */
function Counter({
  value,
  max = 99,
  color = "neutral",
  emphasis = "subtle",
  size = "medium"
}) {
  const map = {
    neutral: {
      solid: "var(--gray-700)",
      tint: "var(--gray-a50)",
      text: "var(--gray-900)"
    },
    primary: {
      solid: "var(--azure-600)",
      tint: "var(--azure-a50)",
      text: "var(--azure-700)"
    },
    positive: {
      solid: "var(--emerald-600)",
      tint: "var(--emerald-a50)",
      text: "var(--emerald-700)"
    },
    negative: {
      solid: "var(--crimson-600)",
      tint: "var(--crimson-a50)",
      text: "var(--crimson-700)"
    },
    notice: {
      solid: "var(--cider-600)",
      tint: "var(--cider-a50)",
      text: "var(--cider-700)"
    },
    information: {
      solid: "var(--sapphire-600)",
      tint: "var(--sapphire-a50)",
      text: "var(--sapphire-700)"
    }
  }[color];
  const dims = {
    small: {
      h: 16,
      fs: 10
    },
    medium: {
      h: 20,
      fs: 12
    },
    large: {
      h: 24,
      fs: 12
    }
  }[size];
  const intense = emphasis === "intense";
  const display = typeof value === "number" && value > max ? `${max}+` : value;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      height: dims.h,
      minWidth: dims.h,
      padding: "0 6px",
      boxSizing: "border-box",
      borderRadius: "var(--border-radius-round)",
      backgroundColor: intense ? map.solid : map.tint,
      color: intense ? "var(--white)" : map.text,
      font: `var(--font-weight-bold) ${dims.fs}px/1 var(--font-family-body)`
    }
  }, display);
}
Object.assign(__ds_scope, { Counter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Counter.jsx", error: String((e && e.message) || e) }); }

// components/core/DropdownMenu.jsx
try { (() => {
/**
 * Blade DropdownMenu — action-list menu anchored to a trigger.
 * trigger: element. items: [{label, icon?, onClick, intent?: "negative", divider?}].
 */
function DropdownMenu({
  trigger,
  items = [],
  align = "left"
}) {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef(null);
  React.useEffect(() => {
    const onDoc = e => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);
  return /*#__PURE__*/React.createElement("span", {
    ref: ref,
    style: {
      position: "relative",
      display: "inline-flex"
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => setOpen(o => !o)
  }, trigger), open && /*#__PURE__*/React.createElement("div", {
    role: "menu",
    style: {
      position: "absolute",
      top: "calc(100% + 6px)",
      [align]: 0,
      zIndex: 40,
      minWidth: 200,
      background: "var(--white)",
      border: "var(--border-width-thin) solid var(--surface-border-gray-muted)",
      borderRadius: "var(--border-radius-medium)",
      boxShadow: "var(--elevation-midRaised)",
      padding: 4,
      animation: "blade-menu 140ms var(--motion-easing-entrance)"
    }
  }, items.map((it, i) => it.divider ? /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      height: 1,
      background: "var(--surface-border-gray-muted)",
      margin: "4px 0"
    }
  }) : /*#__PURE__*/React.createElement("button", {
    key: i,
    role: "menuitem",
    onClick: () => {
      it.onClick && it.onClick();
      setOpen(false);
    },
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      width: "100%",
      padding: "9px 10px",
      border: "none",
      background: "transparent",
      cursor: "pointer",
      textAlign: "left",
      borderRadius: "var(--border-radius-small)",
      font: "var(--text-body-medium)",
      color: it.intent === "negative" ? "var(--feedback-text-negative)" : "var(--surface-text-gray-normal)"
    },
    onMouseEnter: e => e.currentTarget.style.background = it.intent === "negative" ? "var(--crimson-a50)" : "var(--gray-a50)",
    onMouseLeave: e => e.currentTarget.style.background = "transparent"
  }, it.icon, it.label))));
}
Object.assign(__ds_scope, { DropdownMenu });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/DropdownMenu.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Blade Icon — renders a Lucide glyph (Feather-derived, matching Blade Icons' stroke style).
 * Requires the Lucide UMD script loaded on the page:
 *   <script src="https://unpkg.com/lucide@latest"></script>
 */
function Icon({
  name,
  size = 16,
  color = "var(--surface-icon-gray-normal)",
  strokeWidth = 2,
  ...rest
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (window.lucide && ref.current) {
      ref.current.innerHTML = "";
      ref.current.setAttribute("data-lucide", name);
      window.lucide.createIcons({
        icons: window.lucide.icons
      });
    }
  }, [name]);
  return /*#__PURE__*/React.createElement("i", _extends({
    ref: ref,
    "data-lucide": name,
    style: {
      width: size,
      height: size,
      color,
      display: "inline-flex",
      strokeWidth,
      "--lucide-stroke-width": strokeWidth
    }
  }, rest));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Blade IconButton — icon-only action.
 * emphasis: intense (filled azure) | subtle (transparent, grey icon).
 * size: small(28) | medium(36) | large(48).
 */
function IconButton({
  icon,
  size = "medium",
  emphasis = "subtle",
  color = "primary",
  isDisabled = false,
  onClick,
  label,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const box = {
    small: 28,
    medium: 36,
    large: 48
  }[size];
  const iconSize = {
    small: 16,
    medium: 20,
    large: 24
  }[size];
  const accent = {
    primary: "var(--azure-500)",
    neutral: "var(--gray-700)"
  }[color] || "var(--azure-500)";
  const accentHover = {
    primary: "var(--azure-600)",
    neutral: "var(--gray-900)"
  }[color] || "var(--azure-600)";
  const intense = emphasis === "intense";
  return /*#__PURE__*/React.createElement("button", _extends({
    onClick: onClick,
    disabled: isDisabled,
    "aria-label": label,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: box,
      height: box,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      border: "none",
      borderRadius: "var(--border-radius-medium)",
      cursor: isDisabled ? "not-allowed" : "pointer",
      backgroundColor: intense ? hover ? accentHover : accent : hover ? "var(--gray-a50)" : "transparent",
      opacity: isDisabled ? 0.5 : 1,
      transition: "background-color var(--motion-duration-xquick) var(--motion-easing-standard)"
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: iconSize,
    color: intense ? "var(--white)" : "var(--surface-icon-gray-normal)"
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Link.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Blade Link — inline or standalone navigational text/action.
 * variant: anchor (underlined link) | button (looks like link, semantic button)
 * color: primary (azure) | neutral. size: small | medium | large.
 */
function Link({
  children,
  href,
  onClick,
  variant = "anchor",
  color = "primary",
  size = "medium",
  icon = null,
  iconPosition = "left"
}) {
  const [hover, setHover] = React.useState(false);
  const fs = {
    small: 12,
    medium: 14,
    large: 16
  }[size];
  const c = color === "primary" ? hover ? "var(--azure-700)" : "var(--interactive-text-primary-normal)" : hover ? "var(--surface-text-gray-normal)" : "var(--surface-text-gray-muted)";
  const common = {
    display: "inline-flex",
    alignItems: "center",
    gap: 4,
    font: `var(--font-weight-semibold) ${fs}px/1.4 var(--font-family-body)`,
    color: c,
    textDecoration: hover ? "underline" : "none",
    cursor: "pointer",
    background: "none",
    border: "none",
    padding: 0,
    transition: "color var(--motion-duration-xquick) var(--motion-easing-standard)"
  };
  const inner = /*#__PURE__*/React.createElement(React.Fragment, null, icon && iconPosition === "left" && icon, children, icon && iconPosition === "right" && icon);
  const handlers = {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  };
  return variant === "button" ? /*#__PURE__*/React.createElement("button", _extends({
    onClick: onClick,
    style: common
  }, handlers), inner) : /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    onClick: onClick,
    style: common
  }, handlers), inner);
}
Object.assign(__ds_scope, { Link });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Link.jsx", error: String((e && e.message) || e) }); }

// components/core/Modal.jsx
try { (() => {
/**
 * Blade Modal — centered overlay dialog. Controlled via isOpen + onClose.
 * size: small(420) | medium(560) | large(760). Compose header/body/footer via props.
 */
function Modal({
  isOpen,
  onClose,
  title,
  children,
  footer,
  size = "medium"
}) {
  React.useEffect(() => {
    const onKey = e => {
      if (e.key === "Escape") onClose && onClose();
    };
    if (isOpen) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);
  if (!isOpen) return null;
  const width = {
    small: 420,
    medium: 560,
    large: 760
  }[size];
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: "fixed",
      inset: 0,
      background: "var(--surface-overlay-background)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 60,
      padding: 24,
      animation: "blade-fade 160ms var(--motion-easing-entrance)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    role: "dialog",
    "aria-modal": "true",
    style: {
      width,
      maxWidth: "100%",
      maxHeight: "90vh",
      display: "flex",
      flexDirection: "column",
      background: "var(--white)",
      borderRadius: "var(--border-radius-xlarge)",
      boxShadow: "var(--elevation-highRaised)",
      overflow: "hidden",
      animation: "blade-pop 220ms var(--motion-easing-entrance-attentive)"
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "20px 24px",
      borderBottom: "var(--border-width-thin) solid var(--surface-border-gray-muted)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--text-heading-medium)",
      color: "var(--surface-text-gray-normal)"
    }
  }, title), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Close",
    style: {
      border: "none",
      background: "transparent",
      cursor: "pointer",
      color: "var(--surface-icon-gray-muted)",
      lineHeight: 0,
      padding: 2
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 6 6 18M6 6l12 12"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24,
      overflow: "auto",
      font: "var(--text-body-medium)",
      color: "var(--surface-text-gray-muted)"
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "flex-end",
      gap: 12,
      padding: "16px 24px",
      borderTop: "var(--border-width-thin) solid var(--surface-border-gray-muted)",
      background: "var(--gray-050)"
    }
  }, footer)));
}
Object.assign(__ds_scope, { Modal });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Modal.jsx", error: String((e && e.message) || e) }); }

// components/core/Radio.jsx
try { (() => {
/**
 * Blade Radio + RadioGroup — single-choice selection.
 * Use <RadioGroup value onChange label> wrapping <Radio value> children.
 */
function RadioGroup({
  children,
  value,
  onChange,
  label,
  helpText,
  errorText,
  orientation = "vertical"
}) {
  const items = React.Children.map(children, child => React.isValidElement(child) ? React.cloneElement(child, {
    _selected: child.props.value === value,
    _onSelect: onChange
  }) : child);
  const msg = errorText || helpText;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, label && /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--text-body-small)",
      fontWeight: "var(--font-weight-medium)",
      color: "var(--surface-text-gray-muted)"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: orientation === "vertical" ? "column" : "row",
      gap: orientation === "vertical" ? 10 : 20
    }
  }, items), msg && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--text-body-small)",
      color: errorText ? "var(--feedback-text-negative)" : "var(--surface-text-gray-subtle)"
    }
  }, msg));
}
function Radio({
  children,
  value,
  isDisabled = false,
  _selected,
  _onSelect
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      cursor: isDisabled ? "not-allowed" : "pointer",
      opacity: isDisabled ? 0.5 : 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => !isDisabled && _onSelect && _onSelect(value),
    role: "radio",
    "aria-checked": _selected,
    style: {
      width: 18,
      height: 18,
      flexShrink: 0,
      borderRadius: "50%",
      border: `var(--border-width-thick) solid ${_selected ? "var(--interactive-background-primary-default)" : "var(--surface-border-gray-normal)"}`,
      background: "var(--white)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "border-color var(--motion-duration-xquick) var(--motion-easing-standard)"
    }
  }, _selected && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: "50%",
      background: "var(--interactive-background-primary-default)"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--text-body-medium)",
      color: "var(--surface-text-gray-normal)"
    }
  }, children));
}
Object.assign(__ds_scope, { RadioGroup, Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Radio.jsx", error: String((e && e.message) || e) }); }

// components/core/Select.jsx
try { (() => {
/**
 * Blade Select — single-choice dropdown.
 * options: [{label, value}]. Controlled via value + onChange(value).
 */
function Select({
  label,
  placeholder = "Select…",
  options = [],
  value,
  onChange,
  size = "medium",
  isDisabled = false,
  helpText
}) {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef(null);
  const h = size === "large" ? 48 : 36;
  React.useEffect(() => {
    const onDoc = e => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);
  const selected = options.find(o => o.value === value);
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 4,
      position: "relative",
      width: "100%"
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    style: {
      font: "var(--text-body-small)",
      fontWeight: "var(--font-weight-medium)",
      color: "var(--surface-text-gray-muted)"
    }
  }, label), /*#__PURE__*/React.createElement("button", {
    type: "button",
    disabled: isDisabled,
    onClick: () => setOpen(o => !o),
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 8,
      height: h,
      padding: "0 12px",
      boxSizing: "border-box",
      width: "100%",
      cursor: isDisabled ? "not-allowed" : "pointer",
      background: "var(--white)",
      textAlign: "left",
      border: `var(--border-width-thin) solid ${open ? "var(--interactive-border-primary-default)" : "var(--surface-border-gray-normal)"}`,
      borderRadius: "var(--border-radius-medium)",
      boxShadow: open ? "0 0 0 2px var(--azure-a100)" : "none",
      font: size === "large" ? "var(--text-body-large)" : "var(--text-body-medium)",
      color: selected ? "var(--surface-text-gray-normal)" : "var(--surface-text-gray-subtle)",
      opacity: isDisabled ? 0.6 : 1,
      transition: "border-color var(--motion-duration-xquick) var(--motion-easing-standard), box-shadow var(--motion-duration-xquick) var(--motion-easing-standard)"
    }
  }, selected ? selected.label : placeholder, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--surface-icon-gray-muted)",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      transform: open ? "rotate(180deg)" : "none",
      transition: "transform var(--motion-duration-xquick) var(--motion-easing-standard)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "m6 9 6 6 6-6"
  }))), open && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: h + (label ? 26 : 4),
      left: 0,
      right: 0,
      zIndex: 20,
      background: "var(--white)",
      border: "var(--border-width-thin) solid var(--surface-border-gray-muted)",
      borderRadius: "var(--border-radius-medium)",
      boxShadow: "var(--elevation-midRaised)",
      padding: 4,
      maxHeight: 240,
      overflow: "auto",
      animation: "blade-menu 140ms var(--motion-easing-entrance)"
    }
  }, options.map(o => {
    const on = o.value === value;
    return /*#__PURE__*/React.createElement("div", {
      key: o.value,
      onClick: () => {
        onChange && onChange(o.value);
        setOpen(false);
      },
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "8px 10px",
        borderRadius: "var(--border-radius-small)",
        cursor: "pointer",
        font: "var(--text-body-medium)",
        color: "var(--surface-text-gray-normal)",
        background: on ? "var(--azure-a50)" : "transparent"
      },
      onMouseEnter: e => {
        if (!on) e.currentTarget.style.background = "var(--gray-a50)";
      },
      onMouseLeave: e => {
        if (!on) e.currentTarget.style.background = "transparent";
      }
    }, o.label, on && /*#__PURE__*/React.createElement("svg", {
      width: "16",
      height: "16",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "var(--azure-600)",
      strokeWidth: "2.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M20 6 9 17l-5-5"
    })));
  })), helpText && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--text-body-small)",
      color: "var(--surface-text-gray-subtle)"
    }
  }, helpText));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Select.jsx", error: String((e && e.message) || e) }); }

// components/core/Spinner.jsx
try { (() => {
/**
 * Blade Spinner — indeterminate loading indicator.
 * Sizes (px): medium 16 · large 20 · xlarge 24. Colors inherit a token.
 */
function Spinner({
  size = 20,
  color = "var(--interactive-background-primary-default)",
  label
}) {
  return /*#__PURE__*/React.createElement("span", {
    role: "status",
    "aria-label": label || "Loading",
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: size,
      height: size,
      borderRadius: "50%",
      border: `2px solid ${color}`,
      borderTopColor: "transparent",
      display: "inline-block",
      animation: "blade-spin 0.7s linear infinite"
    }
  }), label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--text-body-small)",
      color: "var(--surface-text-gray-subtle)"
    }
  }, label));
}
Object.assign(__ds_scope, { Spinner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Spinner.jsx", error: String((e && e.message) || e) }); }

// components/core/Switch.jsx
try { (() => {
/**
 * Blade Switch — binary on/off toggle.
 * size: small(20h/36w) | medium(24h/44w). Controlled via isChecked + onChange.
 */
function Switch({
  isChecked = false,
  onChange,
  isDisabled = false,
  size = "medium",
  label
}) {
  const dims = size === "small" ? {
    w: 36,
    h: 20,
    knob: 16
  } : {
    w: 44,
    h: 24,
    knob: 20
  };
  const toggle = () => {
    if (!isDisabled && onChange) onChange(!isChecked);
  };
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      cursor: isDisabled ? "not-allowed" : "pointer",
      opacity: isDisabled ? 0.5 : 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    role: "switch",
    "aria-checked": isChecked,
    onClick: toggle,
    style: {
      width: dims.w,
      height: dims.h,
      borderRadius: "var(--border-radius-round)",
      backgroundColor: isChecked ? "var(--interactive-background-primary-default)" : "var(--gray-300)",
      position: "relative",
      flexShrink: 0,
      transition: "background-color var(--motion-duration-quick) var(--motion-easing-standard)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: (dims.h - dims.knob) / 2,
      left: isChecked ? dims.w - dims.knob - 2 : 2,
      width: dims.knob,
      height: dims.knob,
      borderRadius: "50%",
      backgroundColor: "var(--white)",
      boxShadow: "var(--elevation-lowRaised)",
      transition: "left var(--motion-duration-quick) var(--motion-easing-standard)"
    }
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--text-body-medium)",
      color: "var(--surface-text-gray-normal)"
    }
  }, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Switch.jsx", error: String((e && e.message) || e) }); }

// components/core/Table.jsx
try { (() => {
/**
 * Blade Table — composable data table.
 * Use <Table><THead><Tr><Th/></Tr></THead><TBody><Tr><Td/></Tr></TBody></Table>.
 * Th/Td accept `align` ("left" | "right" | "center"). Tr accepts `isHeader`/`onClick`.
 */
function Table({
  children,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      border: "var(--border-width-thin) solid var(--surface-border-gray-muted)",
      borderRadius: "var(--border-radius-large)",
      overflow: "hidden",
      ...style
    }
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: "100%",
      borderCollapse: "collapse"
    }
  }, children));
}
function THead({
  children
}) {
  return /*#__PURE__*/React.createElement("thead", {
    style: {
      background: "var(--gray-050)"
    }
  }, children);
}
function TBody({
  children
}) {
  return /*#__PURE__*/React.createElement("tbody", null, children);
}
function Tr({
  children,
  onClick,
  isHeader = false
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("tr", {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      borderBottom: "var(--border-width-thin) solid var(--surface-border-gray-muted)",
      cursor: onClick ? "pointer" : "default",
      background: onClick && hover && !isHeader ? "var(--gray-050)" : "transparent",
      transition: "background var(--motion-duration-xquick) var(--motion-easing-standard)"
    }
  }, children);
}
function Th({
  children,
  align = "left",
  width
}) {
  return /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: align,
      padding: "11px 20px",
      width,
      whiteSpace: "nowrap",
      font: "var(--font-weight-semibold) 12px/1.4 var(--font-family-body)",
      color: "var(--surface-text-gray-subtle)"
    }
  }, children);
}
function Td({
  children,
  align = "left",
  emphasis = "normal"
}) {
  return /*#__PURE__*/React.createElement("td", {
    style: {
      textAlign: align,
      padding: "13px 20px",
      font: `${emphasis === "strong" ? "var(--font-weight-semibold)" : "var(--font-weight-regular)"} 14px/1.4 var(--font-family-body)`,
      color: emphasis === "subtle" ? "var(--surface-text-gray-subtle)" : "var(--surface-text-gray-normal)"
    }
  }, children);
}
Object.assign(__ds_scope, { Table, THead, TBody, Tr, Th, Td });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Table.jsx", error: String((e && e.message) || e) }); }

// components/core/Tabs.jsx
try { (() => {
/**
 * Blade Tabs — switch between views. Controlled via value + onChange(value).
 * items: [{value, label, icon?, count?}]. variant: borderless (default) | filled.
 */
function Tabs({
  items = [],
  value,
  onChange,
  variant = "borderless",
  size = "medium"
}) {
  const pad = size === "large" ? "12px 4px" : "10px 4px";
  const fs = size === "large" ? 16 : 14;
  if (variant === "filled") {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "inline-flex",
        gap: 4,
        padding: 4,
        background: "var(--gray-100)",
        borderRadius: "var(--border-radius-large)"
      }
    }, items.map(t => {
      const on = t.value === value;
      return /*#__PURE__*/React.createElement("button", {
        key: t.value,
        onClick: () => onChange && onChange(t.value),
        style: {
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          padding: "8px 16px",
          border: "none",
          cursor: "pointer",
          borderRadius: "var(--border-radius-medium)",
          background: on ? "var(--white)" : "transparent",
          boxShadow: on ? "var(--elevation-lowRaised)" : "none",
          color: on ? "var(--surface-text-gray-normal)" : "var(--surface-text-gray-subtle)",
          font: `${on ? "var(--font-weight-semibold)" : "var(--font-weight-medium)"} ${fs}px/1 var(--font-family-body)`,
          transition: "all var(--motion-duration-xquick) var(--motion-easing-standard)"
        }
      }, t.icon, t.label);
    }));
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 24,
      borderBottom: "var(--border-width-thin) solid var(--surface-border-gray-muted)"
    }
  }, items.map(t => {
    const on = t.value === value;
    return /*#__PURE__*/React.createElement("button", {
      key: t.value,
      onClick: () => onChange && onChange(t.value),
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        padding: pad,
        border: "none",
        background: "transparent",
        cursor: "pointer",
        borderBottom: `2px solid ${on ? "var(--interactive-background-primary-default)" : "transparent"}`,
        marginBottom: -1,
        color: on ? "var(--interactive-text-primary-normal)" : "var(--surface-text-gray-subtle)",
        font: `${on ? "var(--font-weight-semibold)" : "var(--font-weight-medium)"} ${fs}px/1.4 var(--font-family-body)`,
        transition: "color var(--motion-duration-xquick) var(--motion-easing-standard), border-color var(--motion-duration-xquick) var(--motion-easing-standard)"
      }
    }, t.icon, t.label, t.count != null && /*#__PURE__*/React.createElement("span", {
      style: {
        font: "var(--font-weight-bold) 12px/1 var(--font-family-body)",
        background: on ? "var(--azure-a50)" : "var(--gray-a50)",
        color: on ? "var(--azure-700)" : "var(--surface-text-gray-subtle)",
        borderRadius: "var(--border-radius-round)",
        padding: "2px 7px"
      }
    }, t.count));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
/**
 * Blade Tag — removable token used in inputs / filters.
 * size: xsmall | small | medium. Optional onDismiss shows a close affordance.
 */
function Tag({
  children,
  size = "medium",
  onDismiss
}) {
  const dims = {
    xsmall: {
      h: 20,
      fs: 12
    },
    small: {
      h: 24,
      fs: 12
    },
    medium: {
      h: 28,
      fs: 14
    }
  }[size];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      height: dims.h,
      padding: "0 8px",
      boxSizing: "border-box",
      borderRadius: "var(--border-radius-medium)",
      backgroundColor: "var(--gray-100)",
      border: "var(--border-width-thin) solid var(--surface-border-gray-muted)",
      color: "var(--surface-text-gray-normal)",
      font: `var(--font-weight-medium) ${dims.fs}px/1 var(--font-family-body)`
    }
  }, children, onDismiss && /*#__PURE__*/React.createElement("button", {
    onClick: onDismiss,
    "aria-label": "Remove",
    style: {
      border: "none",
      background: "transparent",
      cursor: "pointer",
      padding: 0,
      display: "inline-flex",
      color: "var(--surface-icon-gray-muted)",
      lineHeight: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.4",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 6 6 18M6 6l12 12"
  }))));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/core/TextInput.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Blade TextInput — labelled text field with validation states.
 * states via `validationState`: none | error | success
 * size: medium(36) | large(48). Supports leading icon, helper/error text, prefix.
 */
function TextInput({
  label,
  labelPosition = "top",
  placeholder,
  value,
  onChange,
  helpText,
  errorText,
  successText,
  validationState = "none",
  size = "medium",
  isDisabled = false,
  isRequired = false,
  leadingIcon = null,
  prefix,
  type = "text",
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const h = size === "large" ? 48 : 36;
  const borderColor = validationState === "error" ? "var(--feedback-border-negative)" : validationState === "success" ? "var(--feedback-border-positive)" : focus ? "var(--interactive-border-primary-default)" : "var(--surface-border-gray-normal)";
  const msg = errorText || successText || helpText;
  const msgColor = errorText ? "var(--feedback-text-negative)" : successText ? "var(--feedback-text-positive)" : "var(--surface-text-gray-subtle)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 4,
      width: "100%"
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    style: {
      font: "var(--text-body-small)",
      fontWeight: "var(--font-weight-medium)",
      color: "var(--surface-text-gray-muted)"
    }
  }, label, isRequired && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--feedback-text-negative)"
    }
  }, " *")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      height: h,
      padding: "0 12px",
      boxSizing: "border-box",
      backgroundColor: isDisabled ? "var(--gray-100)" : "var(--white)",
      border: `var(--border-width-thin) solid ${borderColor}`,
      borderRadius: "var(--border-radius-medium)",
      boxShadow: focus ? "0 0 0 2px var(--azure-a100)" : "none",
      transition: "border-color var(--motion-duration-xquick) var(--motion-easing-standard), box-shadow var(--motion-duration-xquick) var(--motion-easing-standard)",
      opacity: isDisabled ? 0.6 : 1
    }
  }, leadingIcon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      color: "var(--surface-icon-gray-muted)"
    }
  }, leadingIcon), prefix && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--text-body-medium)",
      color: "var(--surface-text-gray-subtle)"
    }
  }, prefix), /*#__PURE__*/React.createElement("input", _extends({
    type: type,
    placeholder: placeholder,
    value: value,
    onChange: onChange,
    disabled: isDisabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      border: "none",
      outline: "none",
      background: "transparent",
      font: size === "large" ? "var(--text-body-large)" : "var(--text-body-medium)",
      color: "var(--surface-text-gray-normal)",
      minWidth: 0
    }
  }, rest))), msg && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--text-body-small)",
      color: msgColor
    }
  }, msg));
}
Object.assign(__ds_scope, { TextInput });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/TextInput.jsx", error: String((e && e.message) || e) }); }

// components/core/Toast.jsx
try { (() => {
/**
 * Blade Toast — transient feedback message (bottom-center stack).
 * Render <ToastHost toasts={...} onDismiss={...} /> once; push items
 * { id, color, title, description } into state to show them.
 */
function ToastHost({
  toasts = [],
  onDismiss,
  autoDismiss = 4000
}) {
  React.useEffect(() => {
    if (!autoDismiss) return;
    const timers = toasts.map(t => setTimeout(() => onDismiss && onDismiss(t.id), autoDismiss));
    return () => timers.forEach(clearTimeout);
  }, [toasts, autoDismiss, onDismiss]);
  const color = c => ({
    neutral: {
      dot: "var(--gray-700)"
    },
    positive: {
      dot: "var(--emerald-600)"
    },
    negative: {
      dot: "var(--crimson-600)"
    },
    notice: {
      dot: "var(--cider-600)"
    },
    information: {
      dot: "var(--sapphire-600)"
    }
  })[c] || {
    dot: "var(--gray-700)"
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      bottom: 24,
      left: "50%",
      transform: "translateX(-50%)",
      zIndex: 80,
      display: "flex",
      flexDirection: "column",
      gap: 10,
      alignItems: "center"
    }
  }, toasts.map(t => /*#__PURE__*/React.createElement("div", {
    key: t.id,
    role: "status",
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: 12,
      minWidth: 320,
      maxWidth: 460,
      padding: "12px 14px",
      background: "var(--gray-1300)",
      color: "var(--white)",
      borderRadius: "var(--border-radius-large)",
      boxShadow: "var(--elevation-highRaised)",
      animation: "blade-toast-in 240ms var(--motion-easing-entrance-attentive)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: "50%",
      background: color(t.color).dot,
      marginTop: 6,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--font-weight-semibold) 14px/1.4 var(--font-family-body)"
    }
  }, t.title), t.description && /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--text-body-small)",
      color: "rgba(255,255,255,0.75)",
      marginTop: 2
    }
  }, t.description)), /*#__PURE__*/React.createElement("button", {
    onClick: () => onDismiss && onDismiss(t.id),
    "aria-label": "Dismiss",
    style: {
      border: "none",
      background: "transparent",
      cursor: "pointer",
      color: "rgba(255,255,255,0.7)",
      lineHeight: 0,
      padding: 2
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 6 6 18M6 6l12 12"
  }))))));
}

/** Alias matching the file name; identical to ToastHost. */
const Toast = ToastHost;
Object.assign(__ds_scope, { ToastHost, Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Toast.jsx", error: String((e && e.message) || e) }); }

// components/core/Tooltip.jsx
try { (() => {
/**
 * Blade Tooltip — hover/focus hint. Wraps a single trigger child.
 * placement: top (default) | bottom | left | right.
 */
function Tooltip({
  content,
  placement = "top",
  children
}) {
  const [show, setShow] = React.useState(false);
  const pos = {
    top: {
      bottom: "calc(100% + 8px)",
      left: "50%",
      transform: "translateX(-50%)"
    },
    bottom: {
      top: "calc(100% + 8px)",
      left: "50%",
      transform: "translateX(-50%)"
    },
    left: {
      right: "calc(100% + 8px)",
      top: "50%",
      transform: "translateY(-50%)"
    },
    right: {
      left: "calc(100% + 8px)",
      top: "50%",
      transform: "translateY(-50%)"
    }
  }[placement];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      display: "inline-flex"
    },
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false),
    onFocus: () => setShow(true),
    onBlur: () => setShow(false)
  }, children, show && /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: "absolute",
      ...pos,
      zIndex: 70,
      whiteSpace: "nowrap",
      background: "var(--gray-1300)",
      color: "var(--white)",
      font: "var(--font-weight-medium) 12px/1.4 var(--font-family-body)",
      padding: "6px 10px",
      borderRadius: "var(--border-radius-medium)",
      boxShadow: "var(--elevation-midRaised)",
      pointerEvents: "none",
      animation: "blade-fade 120ms var(--motion-easing-entrance)"
    }
  }, content));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tooltip.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/CreateLink.jsx
try { (() => {
/* Create payment link — modal flow. Blade UI kit. */

function CreateLink({
  onClose,
  onSubmit
}) {
  const {
    Button,
    TextInput
  } = window.Blade;
  const [amount, setAmount] = React.useState("");
  const [purpose, setPurpose] = React.useState("");
  const [email, setEmail] = React.useState("");
  const valid = amount && purpose;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: "fixed",
      inset: 0,
      background: "var(--surface-overlay-background)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 50,
      animation: "blade-fade 160ms var(--motion-easing-entrance)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      width: 460,
      background: "#fff",
      borderRadius: "var(--border-radius-xlarge)",
      boxShadow: "var(--elevation-highRaised)",
      overflow: "hidden",
      animation: "blade-pop 220ms var(--motion-easing-entrance-attentive)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "20px 24px",
      borderBottom: "1px solid var(--surface-border-gray-muted)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--text-heading-medium)",
      color: "var(--surface-text-gray-normal)"
    }
  }, "Create payment link"), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Close",
    style: {
      border: "none",
      background: "transparent",
      cursor: "pointer",
      color: "var(--surface-icon-gray-muted)",
      lineHeight: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 6 6 18M6 6l12 12"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24,
      display: "flex",
      flexDirection: "column",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(TextInput, {
    label: "Amount",
    prefix: "\u20B9",
    placeholder: "0.00",
    size: "large",
    value: amount,
    onChange: e => setAmount(e.target.value.replace(/[^0-9.]/g, "")),
    isRequired: true
  }), /*#__PURE__*/React.createElement(TextInput, {
    label: "Purpose",
    placeholder: "e.g. Invoice #1024",
    value: purpose,
    onChange: e => setPurpose(e.target.value),
    isRequired: true
  }), /*#__PURE__*/React.createElement(TextInput, {
    label: "Customer email",
    type: "email",
    placeholder: "customer@email.com",
    value: email,
    onChange: e => setEmail(e.target.value),
    helpText: "We'll send the link here (optional)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "flex-end",
      gap: 12,
      padding: "16px 24px",
      borderTop: "1px solid var(--surface-border-gray-muted)",
      background: "var(--gray-050)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "tertiary",
    onClick: onClose
  }, "Cancel"), /*#__PURE__*/React.createElement(Button, {
    isDisabled: !valid,
    onClick: () => onSubmit({
      amount: Number(amount).toLocaleString("en-IN"),
      purpose,
      slug: Math.random().toString(36).slice(2, 8)
    })
  }, "Create link"))));
}
Object.assign(window, {
  CreateLink
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/CreateLink.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/DashShell.jsx
try { (() => {
/* Razorpay-style dashboard shell: sidebar + topbar + routing. Blade UI kit. */

function DashIcon({
  name,
  size = 18,
  color = "currentColor"
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (window.lucide && ref.current) window.lucide.createIcons();
  });
  return /*#__PURE__*/React.createElement("i", {
    ref: ref,
    "data-lucide": name,
    style: {
      width: size,
      height: size,
      color,
      display: "inline-flex"
    }
  });
}
function Sidebar({
  active,
  onNavigate
}) {
  const nav = [{
    id: "home",
    label: "Home",
    icon: "layout-dashboard"
  }, {
    id: "payments",
    label: "Payments",
    icon: "credit-card"
  }, {
    id: "links",
    label: "Payment Links",
    icon: "link"
  }, {
    id: "settlements",
    label: "Settlements",
    icon: "banknote"
  }, {
    id: "transactions",
    label: "Transactions",
    icon: "arrow-left-right"
  }, {
    id: "customers",
    label: "Customers",
    icon: "users"
  }, {
    id: "reports",
    label: "Reports",
    icon: "bar-chart-3"
  }];
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 248,
      flexShrink: 0,
      height: "100%",
      boxSizing: "border-box",
      background: "var(--azure-1000)",
      display: "flex",
      flexDirection: "column",
      padding: "20px 12px",
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      padding: "4px 12px 18px"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "26",
    height: "28",
    viewBox: "0 0 100.227 108.698",
    fill: "none",
    style: {
      color: "#fff"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 50.113 0 C 54.032 0 57.961 1.007 61.453 3.028 L 88.887 18.867 C 95.881 22.904 100.227 30.434 100.227 38.508 L 100.227 70.187 C 100.227 78.261 95.881 85.791 88.887 89.828 L 61.453 105.668 C 57.961 107.691 54.032 108.698 50.113 108.698 C 46.194 108.698 42.275 107.691 38.773 105.668 L 11.34 89.828 C 4.345 85.791 0 78.261 0 70.187 L 0 38.508 C 0 30.434 4.345 22.904 11.34 18.867 L 38.773 3.028 C 42.275 1.007 46.194 0 50.113 0 Z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 56.5 26 L 36 60.5 L 48.5 60.5 L 43.5 84 L 66 49 L 52.5 49 Z",
    fill: "var(--azure-1000)"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-family-heading)",
      fontWeight: 700,
      fontSize: 24,
      color: "#fff",
      letterSpacing: "-0.02em"
    }
  }, "blade")), nav.map(n => {
    const on = active === n.id;
    return /*#__PURE__*/React.createElement("button", {
      key: n.id,
      onClick: () => onNavigate(n.id),
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12,
        width: "100%",
        padding: "10px 12px",
        border: "none",
        cursor: "pointer",
        textAlign: "left",
        borderRadius: "var(--border-radius-medium)",
        background: on ? "rgba(255,255,255,0.12)" : "transparent",
        color: on ? "#fff" : "rgba(255,255,255,0.7)",
        font: "var(--text-body-medium)",
        fontWeight: on ? 600 : 500,
        transition: "background var(--motion-duration-xquick) var(--motion-easing-standard)"
      },
      onMouseEnter: e => {
        if (!on) e.currentTarget.style.background = "rgba(255,255,255,0.06)";
      },
      onMouseLeave: e => {
        if (!on) e.currentTarget.style.background = "transparent";
      }
    }, /*#__PURE__*/React.createElement(DashIcon, {
      name: n.icon
    }), n.label);
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "auto",
      padding: "12px",
      borderTop: "1px solid rgba(255,255,255,0.12)",
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 32,
      height: 32,
      borderRadius: "50%",
      background: "var(--azure-400)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#fff",
      font: "var(--font-weight-bold) 13px/1 var(--font-family-body)"
    }
  }, "AR"), /*#__PURE__*/React.createElement("div", {
    style: {
      lineHeight: 1.2
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--text-body-small)",
      fontWeight: 600,
      color: "#fff"
    }
  }, "Acme Retail"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--text-body-xsmall)",
      color: "rgba(255,255,255,0.6)"
    }
  }, "acme@razorpay"))));
}
function TopBar({
  mode,
  onModeChange,
  title
}) {
  const {
    Switch
  } = window.Blade;
  return /*#__PURE__*/React.createElement("header", {
    style: {
      height: 64,
      flexShrink: 0,
      display: "flex",
      alignItems: "center",
      gap: 16,
      padding: "0 28px",
      background: "#fff",
      borderBottom: "1px solid var(--surface-border-gray-muted)"
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      font: "var(--text-heading-large)",
      color: "var(--surface-text-gray-normal)"
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      height: 36,
      padding: "0 12px",
      background: "var(--gray-100)",
      borderRadius: "var(--border-radius-medium)",
      width: 280
    }
  }, /*#__PURE__*/React.createElement(DashIcon, {
    name: "search",
    size: 16,
    color: "var(--surface-icon-gray-muted)"
  }), /*#__PURE__*/React.createElement("input", {
    placeholder: "Search payments, orders\u2026",
    style: {
      border: "none",
      background: "transparent",
      outline: "none",
      font: "var(--text-body-medium)",
      color: "var(--surface-text-gray-normal)",
      width: "100%"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--text-body-small)",
      fontWeight: 600,
      color: mode ? "var(--emerald-700)" : "var(--surface-text-gray-subtle)"
    }
  }, mode ? "Live" : "Test"), /*#__PURE__*/React.createElement(Switch, {
    isChecked: mode,
    onChange: onModeChange,
    size: "small"
  })), /*#__PURE__*/React.createElement("button", {
    style: {
      width: 36,
      height: 36,
      borderRadius: "var(--border-radius-medium)",
      border: "1px solid var(--surface-border-gray-muted)",
      background: "#fff",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(DashIcon, {
    name: "bell",
    size: 18,
    color: "var(--surface-icon-gray-normal)"
  })));
}
function App() {
  const [active, setActive] = React.useState("payments");
  const [mode, setMode] = React.useState(false);
  const [links, setLinks] = React.useState([]);
  const [showCreate, setShowCreate] = React.useState(false);
  const titles = {
    home: "Home",
    payments: "Payments",
    links: "Payment Links",
    settlements: "Settlements",
    transactions: "Transactions",
    customers: "Customers",
    reports: "Reports"
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      height: "100vh",
      background: "var(--surface-background-gray-subtle)",
      fontFamily: "var(--font-family-body)"
    }
  }, /*#__PURE__*/React.createElement(Sidebar, {
    active: active,
    onNavigate: setActive
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement(TopBar, {
    mode: mode,
    onModeChange: setMode,
    title: titles[active]
  }), /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1,
      overflow: "auto",
      padding: "28px"
    }
  }, active === "payments" && /*#__PURE__*/React.createElement(PaymentsScreen, {
    mode: mode
  }), active === "links" && /*#__PURE__*/React.createElement(LinksScreen, {
    links: links,
    onCreate: () => setShowCreate(true)
  }), !["payments", "links"].includes(active) && /*#__PURE__*/React.createElement(ComingSoon, {
    title: titles[active]
  }))), showCreate && /*#__PURE__*/React.createElement(CreateLink, {
    onClose: () => setShowCreate(false),
    onSubmit: l => {
      setLinks([l, ...links]);
      setShowCreate(false);
      setActive("links");
    }
  }));
}
function ComingSoon({
  title
}) {
  const {
    Card
  } = window.Blade;
  return /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "40px",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--text-heading-medium)",
      color: "var(--surface-text-gray-normal)",
      marginBottom: 6
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--text-body-medium)",
      color: "var(--surface-text-gray-subtle)"
    }
  }, "This area is part of the Blade UI kit demo \u2014 explore Payments and Payment Links.")));
}
Object.assign(window, {
  App,
  Sidebar,
  TopBar,
  ComingSoon,
  DashIcon
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/DashShell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/PaymentsScreen.jsx
try { (() => {
/* Payments screen: metric cards + transactions table. Blade UI kit. */

function Metric({
  label,
  value,
  delta,
  deltaColor,
  icon
}) {
  const {
    Card
  } = window.Blade;
  return /*#__PURE__*/React.createElement(Card, {
    padding: 20
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--text-body-small)",
      color: "var(--surface-text-gray-subtle)",
      marginBottom: 8
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--text-heading-xlarge)",
      color: "var(--surface-text-gray-normal)",
      fontFamily: "var(--font-family-heading)"
    }
  }, value)), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 38,
      height: 38,
      borderRadius: "var(--border-radius-medium)",
      background: "var(--azure-a50)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(DashIcon, {
    name: icon,
    size: 20,
    color: "var(--azure-600)"
  }))), delta && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10,
      font: "var(--text-body-small)",
      fontWeight: 600,
      color: deltaColor
    }
  }, delta));
}
function PaymentsScreen({
  mode
}) {
  const {
    Badge,
    Button,
    Card
  } = window.Blade;
  const rows = [{
    id: "pay_NktY1a2bX",
    amount: "₹4,999",
    method: "UPI",
    customer: "Riya Sharma",
    status: "captured",
    time: "2 min ago"
  }, {
    id: "pay_NktX9p0qR",
    amount: "₹1,250",
    method: "Card",
    customer: "Arjun Mehta",
    status: "captured",
    time: "18 min ago"
  }, {
    id: "pay_NktW3k7mL",
    amount: "₹12,000",
    method: "Netbanking",
    customer: "Priya Nair",
    status: "pending",
    time: "32 min ago"
  }, {
    id: "pay_NktV7d4nP",
    amount: "₹890",
    method: "Wallet",
    customer: "Karan Singh",
    status: "failed",
    time: "1 hr ago"
  }, {
    id: "pay_NktU2c8vT",
    amount: "₹3,400",
    method: "UPI",
    customer: "Neha Gupta",
    status: "captured",
    time: "2 hr ago"
  }, {
    id: "pay_NktT5f1wQ",
    amount: "₹7,650",
    method: "Card",
    customer: "Vikram Rao",
    status: "refunded",
    time: "3 hr ago"
  }];
  const statusMap = {
    captured: {
      color: "positive",
      label: "Captured"
    },
    pending: {
      color: "notice",
      label: "Pending"
    },
    failed: {
      color: "negative",
      label: "Failed"
    },
    refunded: {
      color: "information",
      label: "Refunded"
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 20,
      maxWidth: 1180
    }
  }, !mode && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      padding: "10px 14px",
      background: "var(--cider-050)",
      border: "1px solid var(--cider-200)",
      borderRadius: "var(--border-radius-medium)",
      font: "var(--text-body-small)",
      color: "var(--cider-700)"
    }
  }, /*#__PURE__*/React.createElement(DashIcon, {
    name: "flask-conical",
    size: 16,
    color: "var(--cider-600)"
  }), "You're in ", /*#__PURE__*/React.createElement("b", {
    style: {
      margin: "0 3px"
    }
  }, "Test mode"), " \u2014 these are sample payments. Toggle to Live in the top bar."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Metric, {
    label: "Total collected",
    value: "\u20B92,48,540",
    delta: "\u2191 12.4% vs last week",
    deltaColor: "var(--emerald-700)",
    icon: "indian-rupee"
  }), /*#__PURE__*/React.createElement(Metric, {
    label: "Successful",
    value: "1,284",
    delta: "\u2191 4.1%",
    deltaColor: "var(--emerald-700)",
    icon: "check-circle"
  }), /*#__PURE__*/React.createElement(Metric, {
    label: "Failed",
    value: "46",
    delta: "\u2193 1.2%",
    deltaColor: "var(--crimson-700)",
    icon: "x-circle"
  }), /*#__PURE__*/React.createElement(Metric, {
    label: "Refunded",
    value: "\u20B918,200",
    delta: "8 refunds",
    deltaColor: "var(--surface-text-gray-subtle)",
    icon: "repeat"
  })), /*#__PURE__*/React.createElement(Card, {
    padding: 0
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "16px 20px",
      borderBottom: "1px solid var(--surface-border-gray-muted)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--text-heading-small)",
      color: "var(--surface-text-gray-normal)"
    }
  }, "Recent payments"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "tertiary",
    size: "small",
    icon: "filter",
    iconPosition: "left"
  }, "Filter"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "small",
    icon: "download",
    iconPosition: "left"
  }, "Export"))), /*#__PURE__*/React.createElement("table", {
    style: {
      width: "100%",
      borderCollapse: "collapse"
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    style: {
      background: "var(--gray-050)"
    }
  }, ["Payment ID", "Amount", "Method", "Customer", "Status", "Time"].map((h, i) => /*#__PURE__*/React.createElement("th", {
    key: h,
    style: {
      textAlign: i === 1 ? "right" : "left",
      padding: "10px 20px",
      font: "var(--text-body-small)",
      fontWeight: 600,
      color: "var(--surface-text-gray-subtle)",
      borderBottom: "1px solid var(--surface-border-gray-muted)"
    }
  }, h)))), /*#__PURE__*/React.createElement("tbody", null, rows.map(r => /*#__PURE__*/React.createElement("tr", {
    key: r.id,
    style: {
      borderBottom: "1px solid var(--surface-border-gray-muted)"
    }
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "13px 20px",
      font: "var(--text-code-medium)",
      color: "var(--surface-text-gray-muted)"
    }
  }, r.id), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "13px 20px",
      textAlign: "right",
      font: "var(--text-body-medium)",
      fontWeight: 600,
      color: "var(--surface-text-gray-normal)"
    }
  }, r.amount), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "13px 20px",
      font: "var(--text-body-medium)",
      color: "var(--surface-text-gray-muted)"
    }
  }, r.method), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "13px 20px",
      font: "var(--text-body-medium)",
      color: "var(--surface-text-gray-normal)"
    }
  }, r.customer), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "13px 20px"
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    color: statusMap[r.status].color,
    icon: "dot"
  }, statusMap[r.status].label)), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "13px 20px",
      font: "var(--text-body-small)",
      color: "var(--surface-text-gray-subtle)"
    }
  }, r.time)))))));
}
function LinksScreen({
  links,
  onCreate
}) {
  const {
    Button,
    Card,
    Badge
  } = window.Blade;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1180
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--text-body-medium)",
      color: "var(--surface-text-gray-muted)"
    }
  }, "Create a link, share it, get paid \u2014 no integration needed."), /*#__PURE__*/React.createElement(Button, {
    icon: "plus",
    iconPosition: "left",
    onClick: onCreate
  }, "Create payment link")), links.length === 0 ? /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "48px",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 56,
      height: 56,
      borderRadius: "50%",
      background: "var(--azure-a50)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      margin: "0 auto 16px"
    }
  }, /*#__PURE__*/React.createElement(DashIcon, {
    name: "link",
    size: 26,
    color: "var(--azure-600)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--text-heading-medium)",
      color: "var(--surface-text-gray-normal)",
      marginBottom: 6
    }
  }, "No payment links yet"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--text-body-medium)",
      color: "var(--surface-text-gray-subtle)",
      marginBottom: 18
    }
  }, "Create your first link to start collecting payments."), /*#__PURE__*/React.createElement(Button, {
    icon: "plus",
    iconPosition: "left",
    onClick: onCreate
  }, "Create payment link"))) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, links.map((l, i) => /*#__PURE__*/React.createElement(Card, {
    key: i,
    padding: 18
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--text-body-large)",
      fontWeight: 600,
      color: "var(--surface-text-gray-normal)"
    }
  }, l.purpose), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--text-code-medium)",
      color: "var(--interactive-text-primary-normal)",
      marginTop: 4
    }
  }, "rzp.io/i/", l.slug)), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--text-heading-medium)",
      fontFamily: "var(--font-family-heading)",
      color: "var(--surface-text-gray-normal)"
    }
  }, "\u20B9", l.amount), /*#__PURE__*/React.createElement(Badge, {
    color: "primary",
    icon: "dot"
  }, "Active"))))));
}
Object.assign(window, {
  PaymentsScreen,
  LinksScreen,
  Metric
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/PaymentsScreen.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.CardHeader = __ds_scope.CardHeader;

__ds_ns.CardFooter = __ds_scope.CardFooter;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Counter = __ds_scope.Counter;

__ds_ns.DropdownMenu = __ds_scope.DropdownMenu;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Link = __ds_scope.Link;

__ds_ns.Modal = __ds_scope.Modal;

__ds_ns.RadioGroup = __ds_scope.RadioGroup;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Spinner = __ds_scope.Spinner;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Table = __ds_scope.Table;

__ds_ns.THead = __ds_scope.THead;

__ds_ns.TBody = __ds_scope.TBody;

__ds_ns.Tr = __ds_scope.Tr;

__ds_ns.Th = __ds_scope.Th;

__ds_ns.Td = __ds_scope.Td;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.TextInput = __ds_scope.TextInput;

__ds_ns.ToastHost = __ds_scope.ToastHost;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

})();
