/**
 * @namespace getLocaleAndRegion
 * @param {string} lang
 */
const getLocaleAndRegion = (lang) => {
    let obj = {
        locale: '',
        region: ''
    }
    if (!lang) {
        return {
            locale: null,
            region: null
        }
    }
    const [locale, region] = lang.split('-')
    if (region) {
        obj.region = region
    } 
    obj.locale = locale

    return obj
}


const main = (languageSelected) => {
    let result = {
        regions: [],
        locales: []
    }

    const { locale, region } = getLocaleAndRegion(languageSelected)
    if (region) {
        result.regions.push(region)
    }
    if (locale) {
        result.locales.push(locale)
    }
    if (typeof navigator !== 'undefined') {
        const languages = navigator.languages
        const data = languages.reduce((obj, lang) => {
            const { locale, region } = getLocaleAndRegion(lang)
            if (region) {
                obj.regions.push(region)
            }
            if (locale) {
                obj.locales.push(locale)
            }
            return obj
        }, {
            regions: [],
            locales: []
        })
        result.regions = [ ...result.regions, ...data.regions]
        result.locales = [...result.locales, ...data.locales]
    }
    
    result.locales.push('en')

    result.locales = [...new Set(result.locales)]
    result.regions = [...new Set(result.regions)]

    return result
}

module.exports = main