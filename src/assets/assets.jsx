
export const selectLang = (data, filter = false ) => {
    const lang = localStorage.getItem('lang');
    if (filter) {
        return data.filter(el => el.lang === lang);
    } else {
        return data.find(el => el.lang === lang);
    }
}
