/**
 * @providesModule styleMixins
 */

export function padding(...paddings) {
  if (paddings.length == 1)
    return { paddingLeft: paddings[0], paddingRight: paddings[0], paddingBottom: paddings[0], paddingTop: paddings[0] };
  else if (paddings.length == 2)
    return { paddingLeft: paddings[1], paddingRight: paddings[1], paddingTop: paddings[0], paddingBottom: paddings[0] };
  else {
    var style = {};
    ['paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft'].forEach((a, i) => style[a] = paddings[i]);
    return style;
  };
}

export function margin(...margins) {
  if (margins.length == 1)
    return { marginLeft: margins[0], marginRight: margins[0], marginBottom: margins[0], marginTop: margins[0] };
  else if (margins.length == 2)
    return { marginLeft: margins[1], marginRight: margins[1], marginTop: margins[0], marginBottom: margins[0] };
  else {
    var style = {};
    ['marginTop', 'marginRight', 'marginBottom', 'marginLeft'].forEach((a, i) => style[a] = margins[i]);
    return style;
  };
}

export function flex(direction = null, alignItems = null, justifyContent = null) {
  var style = {};
  if (justifyContent) style.justifyContent = justifyContent;
  if (direction) style.flexDirection = direction;
  if (alignItems) style.alignItems = alignItems;
  return style;
}