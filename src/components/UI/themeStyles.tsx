export const theme = {
  primaryColor: "rgb(218,218,218)",
  secondaryColor: "#272727",
  highlightColor: "rgb(26,184,196)",
};


export const { primaryColor, secondaryColor, highlightColor } = theme;

const viewPortSize = {
  mobileS: "480px",
  mobileL: "812px",
  tabletS: "1023px",
  tabletL: "1200px",
};

export const device = {
  mobileS: `screen and (max-width: ${viewPortSize.mobileS})`,
  mobileL: `screen and (max-width: ${viewPortSize.mobileL})`,
  tabletS: `screen and (max-width: ${viewPortSize.tabletS})`,
  tabletL: `screen and (min-width: ${viewPortSize.tabletL})`,
};
