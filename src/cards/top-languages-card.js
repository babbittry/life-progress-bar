const Card = require("../common/Card");
const I18n = require("../common/I18n");
const { langCardLocales } = require("../translations");
const { createProgressNode } = require("../common/createProgressNode");
const { clampValue, getCardColors, flexLayout } = require("../common/utils");

const createProgressTextNode = ({ width, color, name, progress }) => {
    const paddingRight = 95;
    const progressTextX = width - paddingRight + 10;
    const progressWidth = width - paddingRight;

    return `
    <text data-testid="lang-name" x="2" y="15" class="lang-name">${name}</text>
    <text x="${progressTextX}" y="34" class="lang-name">${progress}%</text>
    ${createProgressNode({
        x: 0,
        y: 25,
        color,
        width: progressWidth,
        progress,
        progressBarBackgroundColor: "#ddd",
    })}
  `;
};


const lowercaseTrim = (name) => name.toLowerCase().trim();

const renderTopLanguages = (topLangs, options = {}) => {
    const {
        hide_title,
        hide_border,
        card_width,
        title_color,
        text_color,
        bg_color,
        hide,
        theme,
        layout,
        custom_title,
        locale,
        langs_count = 5,
        border_radius,
        border_color,
    } = options;

    const i18n = new I18n({
        locale,
        translations: langCardLocales,
    });

    let langs = Object.values(topLangs);
    let langsToHide = {};

    langsCount = clampValue(parseInt(langs_count), 1, 10);

    // populate langsToHide map for quick lookup
    // while filtering out
    if (hide) {
        hide.forEach((langName) => {
            langsToHide[lowercaseTrim(langName)] = true;
        });
    }

    // filter out langauges to be hidden
    langs = langs
        .sort((a, b) => b.size - a.size)
        .filter((lang) => {
            return !langsToHide[lowercaseTrim(lang.name)];
        })
        .slice(0, langsCount);

    const totalLanguageSize = langs.reduce((acc, curr) => {
        return acc + curr.size;
    }, 0);

    // returns theme based colors with proper overrides and defaults
    const { titleColor, textColor, bgColor, borderColor } = getCardColors({
        title_color,
        text_color,
        bg_color,
        border_color,
        theme,
    });

    let width = isNaN(card_width) ? 300 : card_width;
    let height = 45 + (langs.length + 1) * 40;

    let finalLayout = "";

    finalLayout = flexLayout({
        items: langs.map((lang) => {
            return createProgressTextNode({
                width: width,
                name: lang.name,
                color: lang.color || "#858585",
                progress: ((lang.size / totalLanguageSize) * 100).toFixed(2),
            });
        }),
        gap: 40,
        direction: "column",
    }).join("");
    

    const card = new Card({
        customTitle: custom_title,
        defaultTitle: i18n.t("langcard.title"),
        width,
        height,
        border_radius,
        colors: {
            titleColor,
            textColor,
            bgColor,
            borderColor,
        },
    });

    card.disableAnimations();
    card.setHideBorder(hide_border);
    card.setHideTitle(hide_title);
    card.setCSS(`
    .lang-name { font: 400 11px 'Segoe UI', Ubuntu, Sans-Serif; fill: ${textColor} }
  `);

    return card.render(`
    <svg data-testid="lang-items" x="25">
      ${finalLayout}
    </svg>
  `);
};

module.exports = renderTopLanguages;
