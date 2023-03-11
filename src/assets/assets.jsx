export const langTxt = (lang, data) => {
    const newTab = data.find(el => el.lang === lang);
    return newTab;
}