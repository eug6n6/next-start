import translations from './translations'

export default lang => {
    return term => {
        if (!translations[lang]) return '$INVALID_LANG'
        if (!translations[lang][term] && !translations.common[term])
            return '$' + term
        return translations[lang][term] || translations.common[term]
    }
}